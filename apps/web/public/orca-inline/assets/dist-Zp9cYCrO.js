import { a as __toESM, t as __commonJSMin } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { i as translate, n as i18n } from "./i18n-CakWKPtl.js";
import { n as require_shim } from "./useTranslation-gONZYZRO.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
var LANGUAGE_ENTRIES = [
	[
		"",
		"auto.components.editor.RichMarkdownCodeBlock.13822cdfda",
		"Plain text"
	],
	[
		"bash",
		"auto.components.editor.RichMarkdownCodeBlock.4227cf50fe",
		"Bash"
	],
	[
		"c",
		null,
		"C"
	],
	[
		"cpp",
		"auto.components.editor.RichMarkdownCodeBlock.4daed43ae3",
		"C++"
	],
	[
		"css",
		"auto.components.editor.RichMarkdownCodeBlock.026653f21f",
		"CSS"
	],
	[
		"diff",
		"auto.components.editor.RichMarkdownCodeBlock.bf6ee5caaa",
		"Diff"
	],
	[
		"go",
		"auto.components.editor.RichMarkdownCodeBlock.edfcc64182",
		"Go"
	],
	[
		"graphql",
		"auto.components.editor.RichMarkdownCodeBlock.706fd85738",
		"GraphQL"
	],
	[
		"html",
		"auto.components.editor.RichMarkdownCodeBlock.8c4a3fa02d",
		"HTML"
	],
	[
		"java",
		"auto.components.editor.RichMarkdownCodeBlock.36536ad539",
		"Java"
	],
	[
		"javascript",
		"auto.components.editor.RichMarkdownCodeBlock.a209c57063",
		"JavaScript"
	],
	[
		"json",
		"auto.components.editor.RichMarkdownCodeBlock.78eba32de4",
		"JSON"
	],
	[
		"kotlin",
		"auto.components.editor.RichMarkdownCodeBlock.bcb236e2d8",
		"Kotlin"
	],
	[
		"markdown",
		"auto.components.editor.RichMarkdownCodeBlock.983b9576b4",
		"Markdown"
	],
	[
		"mermaid",
		"auto.components.editor.RichMarkdownCodeBlock.89d6cc14fb",
		"Mermaid"
	],
	[
		"python",
		"auto.components.editor.RichMarkdownCodeBlock.2391f9cda9",
		"Python"
	],
	[
		"ruby",
		"auto.components.editor.RichMarkdownCodeBlock.96182a2f64",
		"Ruby"
	],
	[
		"rust",
		"auto.components.editor.RichMarkdownCodeBlock.e72e6b03f4",
		"Rust"
	],
	[
		"scss",
		"auto.components.editor.RichMarkdownCodeBlock.5af8251002",
		"SCSS"
	],
	[
		"shell",
		"auto.components.editor.RichMarkdownCodeBlock.d01f55be57",
		"Shell"
	],
	[
		"sql",
		"auto.components.editor.RichMarkdownCodeBlock.3009f722b9",
		"SQL"
	],
	[
		"swift",
		"auto.components.editor.RichMarkdownCodeBlock.9e384d48dc",
		"Swift"
	],
	[
		"typescript",
		"auto.components.editor.RichMarkdownCodeBlock.88d777bc07",
		"TypeScript"
	],
	[
		"xml",
		"auto.components.editor.RichMarkdownCodeBlock.5ef5605cb7",
		"XML"
	],
	[
		"yaml",
		"auto.components.editor.RichMarkdownCodeBlock.74eab1d9b2",
		"YAML"
	]
], cachedLocale = null, cachedResourceBundle = null, cachedLanguages = [];
function getCodeBlockLanguages() {
	let e = i18n.getResourceBundle(i18n.language, "translation");
	return (cachedLocale !== i18n.language || cachedResourceBundle !== e) && (cachedLocale = i18n.language, cachedResourceBundle = e, cachedLanguages = LANGUAGE_ENTRIES.map(([e, E, D]) => ({
		value: e,
		label: E === null ? D : translate(E, D)
	}))), cachedLanguages;
}
function getCodeBlockLanguageLabel(e) {
	return getCodeBlockLanguages().find((E) => E.value === e)?.label ?? e;
}
function isKnownCodeBlockLanguage(e) {
	return getCodeBlockLanguages().some((E) => E.value === e);
}
var GOOD_LEAF_SIZE = 200, RopeSequence = function() {};
RopeSequence.prototype.append = function(e) {
	return e.length ? (e = RopeSequence.from(e), !this.length && e || e.length < GOOD_LEAF_SIZE && this.leafAppend(e) || this.length < GOOD_LEAF_SIZE && e.leafPrepend(this) || this.appendInner(e)) : this;
}, RopeSequence.prototype.prepend = function(e) {
	return e.length ? RopeSequence.from(e).append(this) : this;
}, RopeSequence.prototype.appendInner = function(e) {
	return new Append(this, e);
}, RopeSequence.prototype.slice = function(e, E) {
	return e === void 0 && (e = 0), E === void 0 && (E = this.length), e >= E ? RopeSequence.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, E));
}, RopeSequence.prototype.get = function(e) {
	if (!(e < 0 || e >= this.length)) return this.getInner(e);
}, RopeSequence.prototype.forEach = function(e, E, D) {
	E === void 0 && (E = 0), D === void 0 && (D = this.length), E <= D ? this.forEachInner(e, E, D, 0) : this.forEachInvertedInner(e, E, D, 0);
}, RopeSequence.prototype.map = function(e, E, D) {
	E === void 0 && (E = 0), D === void 0 && (D = this.length);
	var O = [];
	return this.forEach(function(E, D) {
		return O.push(e(E, D));
	}, E, D), O;
}, RopeSequence.from = function(e) {
	return e instanceof RopeSequence ? e : e && e.length ? new Leaf(e) : RopeSequence.empty;
};
var Leaf = /* @__PURE__ */ function(e) {
	function E(E) {
		e.call(this), this.values = E;
	}
	e && (E.__proto__ = e), E.prototype = Object.create(e && e.prototype), E.prototype.constructor = E;
	var D = {
		length: { configurable: !0 },
		depth: { configurable: !0 }
	};
	return E.prototype.flatten = function() {
		return this.values;
	}, E.prototype.sliceInner = function(e, D) {
		return e == 0 && D == this.length ? this : new E(this.values.slice(e, D));
	}, E.prototype.getInner = function(e) {
		return this.values[e];
	}, E.prototype.forEachInner = function(e, E, D, O) {
		for (var k = E; k < D; k++) if (e(this.values[k], O + k) === !1) return !1;
	}, E.prototype.forEachInvertedInner = function(e, E, D, O) {
		for (var k = E - 1; k >= D; k--) if (e(this.values[k], O + k) === !1) return !1;
	}, E.prototype.leafAppend = function(e) {
		if (this.length + e.length <= GOOD_LEAF_SIZE) return new E(this.values.concat(e.flatten()));
	}, E.prototype.leafPrepend = function(e) {
		if (this.length + e.length <= GOOD_LEAF_SIZE) return new E(e.flatten().concat(this.values));
	}, D.length.get = function() {
		return this.values.length;
	}, D.depth.get = function() {
		return 0;
	}, Object.defineProperties(E.prototype, D), E;
}(RopeSequence);
RopeSequence.empty = new Leaf([]);
var Append = /* @__PURE__ */ function(e) {
	function E(E, D) {
		e.call(this), this.left = E, this.right = D, this.length = E.length + D.length, this.depth = Math.max(E.depth, D.depth) + 1;
	}
	return e && (E.__proto__ = e), E.prototype = Object.create(e && e.prototype), E.prototype.constructor = E, E.prototype.flatten = function() {
		return this.left.flatten().concat(this.right.flatten());
	}, E.prototype.getInner = function(e) {
		return e < this.left.length ? this.left.get(e) : this.right.get(e - this.left.length);
	}, E.prototype.forEachInner = function(e, E, D, O) {
		var k = this.left.length;
		if (E < k && this.left.forEachInner(e, E, Math.min(D, k), O) === !1 || D > k && this.right.forEachInner(e, Math.max(E - k, 0), Math.min(this.length, D) - k, O + k) === !1) return !1;
	}, E.prototype.forEachInvertedInner = function(e, E, D, O) {
		var k = this.left.length;
		if (E > k && this.right.forEachInvertedInner(e, E - k, Math.max(D, k) - k, O + k) === !1 || D < k && this.left.forEachInvertedInner(e, Math.min(E, k), D, O) === !1) return !1;
	}, E.prototype.sliceInner = function(e, E) {
		if (e == 0 && E == this.length) return this;
		var D = this.left.length;
		return E <= D ? this.left.slice(e, E) : e >= D ? this.right.slice(e - D, E - D) : this.left.slice(e, D).append(this.right.slice(0, E - D));
	}, E.prototype.leafAppend = function(e) {
		var D = this.right.leafAppend(e);
		if (D) return new E(this.left, D);
	}, E.prototype.leafPrepend = function(e) {
		var D = this.left.leafPrepend(e);
		if (D) return new E(D, this.right);
	}, E.prototype.appendInner = function(e) {
		return this.left.depth >= Math.max(this.right.depth, e.depth) + 1 ? new E(this.left, new E(this.right, e)) : new E(this, e);
	}, E;
}(RopeSequence), dist_default = RopeSequence;
function OrderedMap(e) {
	this.content = e;
}
OrderedMap.prototype = {
	constructor: OrderedMap,
	find: function(e) {
		for (var E = 0; E < this.content.length; E += 2) if (this.content[E] === e) return E;
		return -1;
	},
	get: function(e) {
		var E = this.find(e);
		return E == -1 ? void 0 : this.content[E + 1];
	},
	update: function(e, E, D) {
		var O = D && D != e ? this.remove(D) : this, k = O.find(e), A = O.content.slice();
		return k == -1 ? A.push(D || e, E) : (A[k + 1] = E, D && (A[k] = D)), new OrderedMap(A);
	},
	remove: function(e) {
		var E = this.find(e);
		if (E == -1) return this;
		var D = this.content.slice();
		return D.splice(E, 2), new OrderedMap(D);
	},
	addToStart: function(e, E) {
		return new OrderedMap([e, E].concat(this.remove(e).content));
	},
	addToEnd: function(e, E) {
		var D = this.remove(e).content.slice();
		return D.push(e, E), new OrderedMap(D);
	},
	addBefore: function(e, E, D) {
		var O = this.remove(E), k = O.content.slice(), A = O.find(e);
		return k.splice(A == -1 ? k.length : A, 0, E, D), new OrderedMap(k);
	},
	forEach: function(e) {
		for (var E = 0; E < this.content.length; E += 2) e(this.content[E], this.content[E + 1]);
	},
	prepend: function(e) {
		return e = OrderedMap.from(e), e.size ? new OrderedMap(e.content.concat(this.subtract(e).content)) : this;
	},
	append: function(e) {
		return e = OrderedMap.from(e), e.size ? new OrderedMap(this.subtract(e).content.concat(e.content)) : this;
	},
	subtract: function(e) {
		var E = this;
		e = OrderedMap.from(e);
		for (var D = 0; D < e.content.length; D += 2) E = E.remove(e.content[D]);
		return E;
	},
	toObject: function() {
		var e = {};
		return this.forEach(function(E, D) {
			e[E] = D;
		}), e;
	},
	get size() {
		return this.content.length >> 1;
	}
}, OrderedMap.from = function(e) {
	if (e instanceof OrderedMap) return e;
	var E = [];
	if (e) for (var D in e) E.push(D, e[D]);
	return new OrderedMap(E);
};
var dist_default$1 = OrderedMap;
function findDiffStart(e, E, D) {
	for (let O = 0;; O++) {
		if (O == e.childCount || O == E.childCount) return e.childCount == E.childCount ? null : D;
		let k = e.child(O), A = E.child(O);
		if (k == A) {
			D += k.nodeSize;
			continue;
		}
		if (!k.sameMarkup(A)) return D;
		if (k.isText && k.text != A.text) {
			let e = k.text, E = A.text, O = 0;
			for (; e[O] == E[O]; O++) D++;
			return O && O < e.length && O < E.length && surrogateHigh(e.charCodeAt(O - 1)) && surrogateLow(e.charCodeAt(O)) && D--, D;
		}
		if (k.content.size || A.content.size) {
			let e = findDiffStart(k.content, A.content, D + 1);
			if (e != null) return e;
		}
		D += k.nodeSize;
	}
}
function findDiffEnd(e, E, D, O) {
	for (let k = e.childCount, A = E.childCount;;) {
		if (k == 0 || A == 0) return k == A ? null : {
			a: D,
			b: O
		};
		let j = e.child(--k), M = E.child(--A), N = j.nodeSize;
		if (j == M) {
			D -= N, O -= N;
			continue;
		}
		if (!j.sameMarkup(M)) return {
			a: D,
			b: O
		};
		if (j.isText && j.text != M.text) {
			let e = j.text, E = M.text, k = e.length, A = E.length;
			for (; k > 0 && A > 0 && e[k - 1] == E[A - 1];) k--, A--, D--, O--;
			return k && A && k < e.length && surrogateHigh(e.charCodeAt(k - 1)) && surrogateLow(e.charCodeAt(k)) && (D++, O++), {
				a: D,
				b: O
			};
		}
		if (j.content.size || M.content.size) {
			let e = findDiffEnd(j.content, M.content, D - 1, O - 1);
			if (e) return e;
		}
		D -= N, O -= N;
	}
}
function surrogateLow(e) {
	return e >= 56320 && e < 57344;
}
function surrogateHigh(e) {
	return e >= 55296 && e < 56320;
}
var Fragment = class e {
	constructor(e, E) {
		if (this.content = e, this.size = E || 0, E == null) for (let E = 0; E < e.length; E++) this.size += e[E].nodeSize;
	}
	nodesBetween(e, E, D, O = 0, k) {
		for (let A = 0, j = 0; j < E; A++) {
			let M = this.content[A], N = j + M.nodeSize;
			if (N > e && D(M, O + j, k || null, A) !== !1 && M.content.size) {
				let k = j + 1;
				M.nodesBetween(Math.max(0, e - k), Math.min(M.content.size, E - k), D, O + k);
			}
			j = N;
		}
	}
	descendants(e) {
		this.nodesBetween(0, this.size, e);
	}
	textBetween(e, E, D, O) {
		let k = "", A = !0;
		return this.nodesBetween(e, E, (j, M) => {
			let N = j.isText ? j.text.slice(Math.max(e, M) - M, E - M) : j.isLeaf ? O ? typeof O == "function" ? O(j) : O : j.type.spec.leafText ? j.type.spec.leafText(j) : "" : "";
			j.isBlock && (j.isLeaf && N || j.isTextblock) && D && (A ? A = !1 : k += D), k += N;
		}, 0), k;
	}
	append(E) {
		if (!E.size) return this;
		if (!this.size) return E;
		let D = this.lastChild, O = E.firstChild, k = this.content.slice(), A = 0;
		for (D.isText && D.sameMarkup(O) && (k[k.length - 1] = D.withText(D.text + O.text), A = 1); A < E.content.length; A++) k.push(E.content[A]);
		return new e(k, this.size + E.size);
	}
	cut(E, D = this.size) {
		if (E == 0 && D == this.size) return this;
		let O = [], k = 0;
		if (D > E) for (let e = 0, A = 0; A < D; e++) {
			let j = this.content[e], M = A + j.nodeSize;
			M > E && ((A < E || M > D) && (j = j.isText ? j.cut(Math.max(0, E - A), Math.min(j.text.length, D - A)) : j.cut(Math.max(0, E - A - 1), Math.min(j.content.size, D - A - 1))), O.push(j), k += j.nodeSize), A = M;
		}
		return new e(O, k);
	}
	cutByIndex(E, D) {
		return E == D ? e.empty : E == 0 && D == this.content.length ? this : new e(this.content.slice(E, D));
	}
	replaceChild(E, D) {
		let O = this.content[E];
		if (O == D) return this;
		let k = this.content.slice(), A = this.size + D.nodeSize - O.nodeSize;
		return k[E] = D, new e(k, A);
	}
	addToStart(E) {
		return new e([E].concat(this.content), this.size + E.nodeSize);
	}
	addToEnd(E) {
		return new e(this.content.concat(E), this.size + E.nodeSize);
	}
	eq(e) {
		if (this.content.length != e.content.length) return !1;
		for (let E = 0; E < this.content.length; E++) if (!this.content[E].eq(e.content[E])) return !1;
		return !0;
	}
	get firstChild() {
		return this.content.length ? this.content[0] : null;
	}
	get lastChild() {
		return this.content.length ? this.content[this.content.length - 1] : null;
	}
	get childCount() {
		return this.content.length;
	}
	child(e) {
		let E = this.content[e];
		if (!E) throw RangeError("Index " + e + " out of range for " + this);
		return E;
	}
	maybeChild(e) {
		return this.content[e] || null;
	}
	forEach(e) {
		for (let E = 0, D = 0; E < this.content.length; E++) {
			let O = this.content[E];
			e(O, D, E), D += O.nodeSize;
		}
	}
	findDiffStart(e, E = 0) {
		return findDiffStart(this, e, E);
	}
	findDiffEnd(e, E = this.size, D = e.size) {
		return findDiffEnd(this, e, E, D);
	}
	findIndex(e) {
		if (e == 0) return retIndex(0, e);
		if (e == this.size) return retIndex(this.content.length, e);
		if (e > this.size || e < 0) throw RangeError(`Position ${e} outside of fragment (${this})`);
		for (let E = 0, D = 0;; E++) {
			let O = this.child(E), k = D + O.nodeSize;
			if (k >= e) return k == e ? retIndex(E + 1, k) : retIndex(E, D);
			D = k;
		}
	}
	toString() {
		return "<" + this.toStringInner() + ">";
	}
	toStringInner() {
		return this.content.join(", ");
	}
	toJSON() {
		return this.content.length ? this.content.map((e) => e.toJSON()) : null;
	}
	static fromJSON(E, D) {
		if (!D) return e.empty;
		if (!Array.isArray(D)) throw RangeError("Invalid input for Fragment.fromJSON");
		return e.fromArray(D.map(E.nodeFromJSON));
	}
	static fromArray(E) {
		if (!E.length) return e.empty;
		let D, O = 0;
		for (let e = 0; e < E.length; e++) {
			let k = E[e];
			O += k.nodeSize, e && k.isText && E[e - 1].sameMarkup(k) ? (D ||= E.slice(0, e), D[D.length - 1] = k.withText(D[D.length - 1].text + k.text)) : D && D.push(k);
		}
		return new e(D || E, O);
	}
	static from(E) {
		if (!E) return e.empty;
		if (E instanceof e) return E;
		if (Array.isArray(E)) return this.fromArray(E);
		if (E.attrs) return new e([E], E.nodeSize);
		throw RangeError("Can not convert " + E + " to a Fragment" + (E.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
	}
};
Fragment.empty = new Fragment([], 0);
var found = {
	index: 0,
	offset: 0
};
function retIndex(e, E) {
	return found.index = e, found.offset = E, found;
}
function compareDeep(e, E) {
	if (e === E) return !0;
	if (!(e && typeof e == "object") || !(E && typeof E == "object")) return !1;
	let D = Array.isArray(e);
	if (Array.isArray(E) != D) return !1;
	if (D) {
		if (e.length != E.length) return !1;
		for (let D = 0; D < e.length; D++) if (!compareDeep(e[D], E[D])) return !1;
	} else {
		for (let D in e) if (!(D in E) || !compareDeep(e[D], E[D])) return !1;
		for (let D in E) if (!(D in e)) return !1;
	}
	return !0;
}
var Mark$1 = class e {
	constructor(e, E) {
		this.type = e, this.attrs = E;
	}
	addToSet(e) {
		let E, D = !1;
		for (let O = 0; O < e.length; O++) {
			let k = e[O];
			if (this.eq(k)) return e;
			if (this.type.excludes(k.type)) E ||= e.slice(0, O);
			else if (k.type.excludes(this.type)) return e;
			else !D && k.type.rank > this.type.rank && (E ||= e.slice(0, O), E.push(this), D = !0), E && E.push(k);
		}
		return E ||= e.slice(), D || E.push(this), E;
	}
	removeFromSet(e) {
		for (let E = 0; E < e.length; E++) if (this.eq(e[E])) return e.slice(0, E).concat(e.slice(E + 1));
		return e;
	}
	isInSet(e) {
		for (let E = 0; E < e.length; E++) if (this.eq(e[E])) return !0;
		return !1;
	}
	eq(e) {
		return this == e || this.type == e.type && compareDeep(this.attrs, e.attrs);
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let E in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return e;
	}
	static fromJSON(e, E) {
		if (!E) throw RangeError("Invalid input for Mark.fromJSON");
		let D = e.marks[E.type];
		if (!D) throw RangeError(`There is no mark type ${E.type} in this schema`);
		let O = D.create(E.attrs);
		return D.checkAttrs(O.attrs), O;
	}
	static sameSet(e, E) {
		if (e == E) return !0;
		if (e.length != E.length) return !1;
		for (let D = 0; D < e.length; D++) if (!e[D].eq(E[D])) return !1;
		return !0;
	}
	static setFrom(E) {
		if (!E || Array.isArray(E) && E.length == 0) return e.none;
		if (E instanceof e) return [E];
		let D = E.slice();
		return D.sort((e, E) => e.type.rank - E.type.rank), D;
	}
};
Mark$1.none = [];
var ReplaceError = class extends Error {}, Slice = class e {
	constructor(e, E, D) {
		this.content = e, this.openStart = E, this.openEnd = D;
	}
	get size() {
		return this.content.size - this.openStart - this.openEnd;
	}
	insertAt(E, D) {
		let O = insertInto(this.content, E + this.openStart, D, this.openStart + 1, this.openEnd + 1);
		return O && new e(O, this.openStart, this.openEnd);
	}
	removeBetween(E, D) {
		return new e(removeRange(this.content, E + this.openStart, D + this.openStart), this.openStart, this.openEnd);
	}
	eq(e) {
		return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
	}
	toString() {
		return this.content + "(" + this.openStart + "," + this.openEnd + ")";
	}
	toJSON() {
		if (!this.content.size) return null;
		let e = { content: this.content.toJSON() };
		return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
	}
	static fromJSON(E, D) {
		if (!D) return e.empty;
		let O = D.openStart || 0, k = D.openEnd || 0;
		if (typeof O != "number" || typeof k != "number") throw RangeError("Invalid input for Slice.fromJSON");
		return new e(Fragment.fromJSON(E, D.content), O, k);
	}
	static maxOpen(E, D = !0) {
		let O = 0, k = 0;
		for (let e = E.firstChild; e && !e.isLeaf && (D || !e.type.spec.isolating); e = e.firstChild) O++;
		for (let e = E.lastChild; e && !e.isLeaf && (D || !e.type.spec.isolating); e = e.lastChild) k++;
		return new e(E, O, k);
	}
};
Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(e, E, D) {
	let { index: O, offset: k } = e.findIndex(E), A = e.maybeChild(O), { index: j, offset: M } = e.findIndex(D);
	if (k == E || A.isText) {
		if (M != D && !e.child(j).isText) throw RangeError("Removing non-flat range");
		return e.cut(0, E).append(e.cut(D));
	}
	if (O != j) throw RangeError("Removing non-flat range");
	return e.replaceChild(O, A.copy(removeRange(A.content, E - k - 1, D - k - 1)));
}
function insertInto(e, E, D, O, k, A) {
	let { index: j, offset: M } = e.findIndex(E), N = e.maybeChild(j);
	if (M == E || N.isText) return A && O <= 0 && k <= 0 && !A.canReplace(j, j, D) ? null : e.cut(0, E).append(D).append(e.cut(E));
	let P = insertInto(N.content, E - M - 1, D, j == 0 ? O - 1 : 0, j == e.childCount - 1 ? k - 1 : 0, N);
	return P && e.replaceChild(j, N.copy(P));
}
function replace(e, E, D) {
	if (D.openStart > e.depth) throw new ReplaceError("Inserted content deeper than insertion position");
	if (e.depth - D.openStart != E.depth - D.openEnd) throw new ReplaceError("Inconsistent open depths");
	return replaceOuter(e, E, D, 0);
}
function replaceOuter(e, E, D, O) {
	let k = e.index(O), A = e.node(O);
	if (k == E.index(O) && O < e.depth - D.openStart) {
		let j = replaceOuter(e, E, D, O + 1);
		return A.copy(A.content.replaceChild(k, j));
	} else if (D.content.size) if (!D.openStart && !D.openEnd && e.depth == O && E.depth == O) {
		let O = e.parent, k = O.content;
		return close(O, k.cut(0, e.parentOffset).append(D.content).append(k.cut(E.parentOffset)));
	} else {
		let { start: k, end: j } = prepareSliceForReplace(D, e);
		return close(A, replaceThreeWay(e, k, j, E, O));
	}
	else return close(A, replaceTwoWay(e, E, O));
}
function checkJoin(e, E) {
	if (!E.type.compatibleContent(e.type)) throw new ReplaceError("Cannot join " + E.type.name + " onto " + e.type.name);
}
function joinable$1(e, E, D) {
	let O = e.node(D);
	return checkJoin(O, E.node(D)), O;
}
function addNode(e, E) {
	let D = E.length - 1;
	D >= 0 && e.isText && e.sameMarkup(E[D]) ? E[D] = e.withText(E[D].text + e.text) : E.push(e);
}
function addRange(e, E, D, O) {
	let k = (E || e).node(D), A = 0, j = E ? E.index(D) : k.childCount;
	e && (A = e.index(D), e.depth > D ? A++ : e.textOffset && (addNode(e.nodeAfter, O), A++));
	for (let e = A; e < j; e++) addNode(k.child(e), O);
	E && E.depth == D && E.textOffset && addNode(E.nodeBefore, O);
}
function close(e, E) {
	if (!e.type.validContent(E)) throw new ReplaceError("Invalid content for node " + e.type.name);
	return e.copy(E);
}
function replaceThreeWay(e, E, D, O, k) {
	let A = e.depth > k && joinable$1(e, E, k + 1), j = O.depth > k && joinable$1(D, O, k + 1), M = [];
	return addRange(null, e, k, M), A && j && E.index(k) == D.index(k) ? (checkJoin(A, j), addNode(close(A, replaceThreeWay(e, E, D, O, k + 1)), M)) : (A && addNode(close(A, replaceTwoWay(e, E, k + 1)), M), addRange(E, D, k, M), j && addNode(close(j, replaceTwoWay(D, O, k + 1)), M)), addRange(O, null, k, M), new Fragment(M);
}
function replaceTwoWay(e, E, D) {
	let O = [];
	return addRange(null, e, D, O), e.depth > D && addNode(close(joinable$1(e, E, D + 1), replaceTwoWay(e, E, D + 1)), O), addRange(E, null, D, O), new Fragment(O);
}
function prepareSliceForReplace(e, E) {
	let D = E.depth - e.openStart, O = E.node(D).copy(e.content);
	for (let e = D - 1; e >= 0; e--) O = E.node(e).copy(Fragment.from(O));
	return {
		start: O.resolveNoCache(e.openStart + D),
		end: O.resolveNoCache(O.content.size - e.openEnd - D)
	};
}
var ResolvedPos = class e {
	constructor(e, E, D) {
		this.pos = e, this.path = E, this.parentOffset = D, this.depth = E.length / 3 - 1;
	}
	resolveDepth(e) {
		return e == null ? this.depth : e < 0 ? this.depth + e : e;
	}
	get parent() {
		return this.node(this.depth);
	}
	get doc() {
		return this.node(0);
	}
	node(e) {
		return this.path[this.resolveDepth(e) * 3];
	}
	index(e) {
		return this.path[this.resolveDepth(e) * 3 + 1];
	}
	indexAfter(e) {
		return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
	}
	start(e) {
		return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
	}
	end(e) {
		return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
	}
	before(e) {
		if (e = this.resolveDepth(e), !e) throw RangeError("There is no position before the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
	}
	after(e) {
		if (e = this.resolveDepth(e), !e) throw RangeError("There is no position after the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
	}
	get textOffset() {
		return this.pos - this.path[this.path.length - 1];
	}
	get nodeAfter() {
		let e = this.parent, E = this.index(this.depth);
		if (E == e.childCount) return null;
		let D = this.pos - this.path[this.path.length - 1], O = e.child(E);
		return D ? e.child(E).cut(D) : O;
	}
	get nodeBefore() {
		let e = this.index(this.depth), E = this.pos - this.path[this.path.length - 1];
		return E ? this.parent.child(e).cut(0, E) : e == 0 ? null : this.parent.child(e - 1);
	}
	posAtIndex(e, E) {
		E = this.resolveDepth(E);
		let D = this.path[E * 3], O = E == 0 ? 0 : this.path[E * 3 - 1] + 1;
		for (let E = 0; E < e; E++) O += D.child(E).nodeSize;
		return O;
	}
	marks() {
		let e = this.parent, E = this.index();
		if (e.content.size == 0) return Mark$1.none;
		if (this.textOffset) return e.child(E).marks;
		let D = e.maybeChild(E - 1), O = e.maybeChild(E);
		if (!D) {
			let e = D;
			D = O, O = e;
		}
		let k = D.marks;
		for (var A = 0; A < k.length; A++) k[A].type.spec.inclusive === !1 && (!O || !k[A].isInSet(O.marks)) && (k = k[A--].removeFromSet(k));
		return k;
	}
	marksAcross(e) {
		let E = this.parent.maybeChild(this.index());
		if (!E || !E.isInline) return null;
		let D = E.marks, O = e.parent.maybeChild(e.index());
		for (var k = 0; k < D.length; k++) D[k].type.spec.inclusive === !1 && (!O || !D[k].isInSet(O.marks)) && (D = D[k--].removeFromSet(D));
		return D;
	}
	sharedDepth(e) {
		for (let E = this.depth; E > 0; E--) if (this.start(E) <= e && this.end(E) >= e) return E;
		return 0;
	}
	blockRange(e = this, E) {
		if (e.pos < this.pos) return e.blockRange(this);
		for (let D = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); D >= 0; D--) if (e.pos <= this.end(D) && (!E || E(this.node(D)))) return new NodeRange(this, e, D);
		return null;
	}
	sameParent(e) {
		return this.pos - this.parentOffset == e.pos - e.parentOffset;
	}
	max(e) {
		return e.pos > this.pos ? e : this;
	}
	min(e) {
		return e.pos < this.pos ? e : this;
	}
	toString() {
		let e = "";
		for (let E = 1; E <= this.depth; E++) e += (e ? "/" : "") + this.node(E).type.name + "_" + this.index(E - 1);
		return e + ":" + this.parentOffset;
	}
	static resolve(E, D) {
		if (!(D >= 0 && D <= E.content.size)) throw RangeError("Position " + D + " out of range");
		let O = [], k = 0, A = D;
		for (let e = E;;) {
			let { index: E, offset: D } = e.content.findIndex(A), j = A - D;
			if (O.push(e, E, k + D), !j || (e = e.child(E), e.isText)) break;
			A = j - 1, k += D + 1;
		}
		return new e(D, O, A);
	}
	static resolveCached(E, D) {
		let O = resolveCache.get(E);
		if (O) for (let e = 0; e < O.elts.length; e++) {
			let E = O.elts[e];
			if (E.pos == D) return E;
		}
		else resolveCache.set(E, O = new ResolveCache());
		let k = O.elts[O.i] = e.resolve(E, D);
		return O.i = (O.i + 1) % resolveCacheSize, k;
	}
}, ResolveCache = class {
	constructor() {
		this.elts = [], this.i = 0;
	}
}, resolveCacheSize = 12, resolveCache = /* @__PURE__ */ new WeakMap(), NodeRange = class {
	constructor(e, E, D) {
		this.$from = e, this.$to = E, this.depth = D;
	}
	get start() {
		return this.$from.before(this.depth + 1);
	}
	get end() {
		return this.$to.after(this.depth + 1);
	}
	get parent() {
		return this.$from.node(this.depth);
	}
	get startIndex() {
		return this.$from.index(this.depth);
	}
	get endIndex() {
		return this.$to.indexAfter(this.depth);
	}
}, emptyAttrs = Object.create(null), Node$1 = class e {
	constructor(e, E, D, O = Mark$1.none) {
		this.type = e, this.attrs = E, this.marks = O, this.content = D || Fragment.empty;
	}
	get children() {
		return this.content.content;
	}
	get nodeSize() {
		return this.isLeaf ? 1 : 2 + this.content.size;
	}
	get childCount() {
		return this.content.childCount;
	}
	child(e) {
		return this.content.child(e);
	}
	maybeChild(e) {
		return this.content.maybeChild(e);
	}
	forEach(e) {
		this.content.forEach(e);
	}
	nodesBetween(e, E, D, O = 0) {
		this.content.nodesBetween(e, E, D, O, this);
	}
	descendants(e) {
		this.nodesBetween(0, this.content.size, e);
	}
	get textContent() {
		return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
	}
	textBetween(e, E, D, O) {
		return this.content.textBetween(e, E, D, O);
	}
	get firstChild() {
		return this.content.firstChild;
	}
	get lastChild() {
		return this.content.lastChild;
	}
	eq(e) {
		return this == e || this.sameMarkup(e) && this.content.eq(e.content);
	}
	sameMarkup(e) {
		return this.hasMarkup(e.type, e.attrs, e.marks);
	}
	hasMarkup(e, E, D) {
		return this.type == e && compareDeep(this.attrs, E || e.defaultAttrs || emptyAttrs) && Mark$1.sameSet(this.marks, D || Mark$1.none);
	}
	copy(E = null) {
		return E == this.content ? this : new e(this.type, this.attrs, E, this.marks);
	}
	mark(E) {
		return E == this.marks ? this : new e(this.type, this.attrs, this.content, E);
	}
	cut(e, E = this.content.size) {
		return e == 0 && E == this.content.size ? this : this.copy(this.content.cut(e, E));
	}
	slice(e, E = this.content.size, D = !1) {
		if (e == E) return Slice.empty;
		let O = this.resolve(e), k = this.resolve(E), A = D ? 0 : O.sharedDepth(E), j = O.start(A);
		return new Slice(O.node(A).content.cut(O.pos - j, k.pos - j), O.depth - A, k.depth - A);
	}
	replace(e, E, D) {
		return replace(this.resolve(e), this.resolve(E), D);
	}
	nodeAt(e) {
		for (let E = this;;) {
			let { index: D, offset: O } = E.content.findIndex(e);
			if (E = E.maybeChild(D), !E) return null;
			if (O == e || E.isText) return E;
			e -= O + 1;
		}
	}
	childAfter(e) {
		let { index: E, offset: D } = this.content.findIndex(e);
		return {
			node: this.content.maybeChild(E),
			index: E,
			offset: D
		};
	}
	childBefore(e) {
		if (e == 0) return {
			node: null,
			index: 0,
			offset: 0
		};
		let { index: E, offset: D } = this.content.findIndex(e);
		if (D < e) return {
			node: this.content.child(E),
			index: E,
			offset: D
		};
		let O = this.content.child(E - 1);
		return {
			node: O,
			index: E - 1,
			offset: D - O.nodeSize
		};
	}
	resolve(e) {
		return ResolvedPos.resolveCached(this, e);
	}
	resolveNoCache(e) {
		return ResolvedPos.resolve(this, e);
	}
	rangeHasMark(e, E, D) {
		let O = !1;
		return E > e && this.nodesBetween(e, E, (e) => (D.isInSet(e.marks) && (O = !0), !O)), O;
	}
	get isBlock() {
		return this.type.isBlock;
	}
	get isTextblock() {
		return this.type.isTextblock;
	}
	get inlineContent() {
		return this.type.inlineContent;
	}
	get isInline() {
		return this.type.isInline;
	}
	get isText() {
		return this.type.isText;
	}
	get isLeaf() {
		return this.type.isLeaf;
	}
	get isAtom() {
		return this.type.isAtom;
	}
	toString() {
		if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
		let e = this.type.name;
		return this.content.size && (e += "(" + this.content.toStringInner() + ")"), wrapMarks(this.marks, e);
	}
	contentMatchAt(e) {
		let E = this.type.contentMatch.matchFragment(this.content, 0, e);
		if (!E) throw Error("Called contentMatchAt on a node with invalid content");
		return E;
	}
	canReplace(e, E, D = Fragment.empty, O = 0, k = D.childCount) {
		let A = this.contentMatchAt(e).matchFragment(D, O, k), j = A && A.matchFragment(this.content, E);
		if (!j || !j.validEnd) return !1;
		for (let e = O; e < k; e++) if (!this.type.allowsMarks(D.child(e).marks)) return !1;
		return !0;
	}
	canReplaceWith(e, E, D, O) {
		if (O && !this.type.allowsMarks(O)) return !1;
		let k = this.contentMatchAt(e).matchType(D), A = k && k.matchFragment(this.content, E);
		return A ? A.validEnd : !1;
	}
	canAppend(e) {
		return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
	}
	check() {
		this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
		let e = Mark$1.none;
		for (let E = 0; E < this.marks.length; E++) {
			let D = this.marks[E];
			D.type.checkAttrs(D.attrs), e = D.addToSet(e);
		}
		if (!Mark$1.sameSet(e, this.marks)) throw RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`);
		this.content.forEach((e) => e.check());
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let E in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())), e;
	}
	static fromJSON(e, E) {
		if (!E) throw RangeError("Invalid input for Node.fromJSON");
		let D;
		if (E.marks) {
			if (!Array.isArray(E.marks)) throw RangeError("Invalid mark data for Node.fromJSON");
			D = E.marks.map(e.markFromJSON);
		}
		if (E.type == "text") {
			if (typeof E.text != "string") throw RangeError("Invalid text node in JSON");
			return e.text(E.text, D);
		}
		let O = Fragment.fromJSON(e, E.content), k = e.nodeType(E.type).create(E.attrs, O, D);
		return k.type.checkAttrs(k.attrs), k;
	}
};
Node$1.prototype.text = void 0;
var TextNode = class e extends Node$1 {
	constructor(e, E, D, O) {
		if (super(e, E, null, O), !D) throw RangeError("Empty text nodes are not allowed");
		this.text = D;
	}
	toString() {
		return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : wrapMarks(this.marks, JSON.stringify(this.text));
	}
	get textContent() {
		return this.text;
	}
	textBetween(e, E) {
		return this.text.slice(e, E);
	}
	get nodeSize() {
		return this.text.length;
	}
	mark(E) {
		return E == this.marks ? this : new e(this.type, this.attrs, this.text, E);
	}
	withText(E) {
		return E == this.text ? this : new e(this.type, this.attrs, E, this.marks);
	}
	cut(e = 0, E = this.text.length) {
		return e == 0 && E == this.text.length ? this : this.withText(this.text.slice(e, E));
	}
	eq(e) {
		return this.sameMarkup(e) && this.text == e.text;
	}
	toJSON() {
		let e = super.toJSON();
		return e.text = this.text, e;
	}
};
function wrapMarks(e, E) {
	for (let D = e.length - 1; D >= 0; D--) E = e[D].type.name + "(" + E + ")";
	return E;
}
var ContentMatch = class e {
	constructor(e) {
		this.validEnd = e, this.next = [], this.wrapCache = [];
	}
	static parse(E, D) {
		let O = new TokenStream(E, D);
		if (O.next == null) return e.empty;
		let k = parseExpr(O);
		O.next && O.err("Unexpected trailing text");
		let A = dfa(nfa(k));
		return checkForDeadEnds(A, O), A;
	}
	matchType(e) {
		for (let E = 0; E < this.next.length; E++) if (this.next[E].type == e) return this.next[E].next;
		return null;
	}
	matchFragment(e, E = 0, D = e.childCount) {
		let O = this;
		for (let k = E; O && k < D; k++) O = O.matchType(e.child(k).type);
		return O;
	}
	get inlineContent() {
		return this.next.length != 0 && this.next[0].type.isInline;
	}
	get defaultType() {
		for (let e = 0; e < this.next.length; e++) {
			let { type: E } = this.next[e];
			if (!(E.isText || E.hasRequiredAttrs())) return E;
		}
		return null;
	}
	compatible(e) {
		for (let E = 0; E < this.next.length; E++) for (let D = 0; D < e.next.length; D++) if (this.next[E].type == e.next[D].type) return !0;
		return !1;
	}
	fillBefore(e, E = !1, D = 0) {
		let O = [this];
		function k(A, j) {
			let M = A.matchFragment(e, D);
			if (M && (!E || M.validEnd)) return Fragment.from(j.map((e) => e.createAndFill()));
			for (let e = 0; e < A.next.length; e++) {
				let { type: E, next: D } = A.next[e];
				if (!(E.isText || E.hasRequiredAttrs()) && O.indexOf(D) == -1) {
					O.push(D);
					let e = k(D, j.concat(E));
					if (e) return e;
				}
			}
			return null;
		}
		return k(this, []);
	}
	findWrapping(e) {
		for (let E = 0; E < this.wrapCache.length; E += 2) if (this.wrapCache[E] == e) return this.wrapCache[E + 1];
		let E = this.computeWrapping(e);
		return this.wrapCache.push(e, E), E;
	}
	computeWrapping(e) {
		let E = Object.create(null), D = [{
			match: this,
			type: null,
			via: null
		}];
		for (; D.length;) {
			let O = D.shift(), k = O.match;
			if (k.matchType(e)) {
				let e = [];
				for (let E = O; E.type; E = E.via) e.push(E.type);
				return e.reverse();
			}
			for (let e = 0; e < k.next.length; e++) {
				let { type: A, next: j } = k.next[e];
				!A.isLeaf && !A.hasRequiredAttrs() && !(A.name in E) && (!O.type || j.validEnd) && (D.push({
					match: A.contentMatch,
					type: A,
					via: O
				}), E[A.name] = !0);
			}
		}
		return null;
	}
	get edgeCount() {
		return this.next.length;
	}
	edge(e) {
		if (e >= this.next.length) throw RangeError(`There's no ${e}th edge in this content match`);
		return this.next[e];
	}
	toString() {
		let e = [];
		function E(D) {
			e.push(D);
			for (let O = 0; O < D.next.length; O++) e.indexOf(D.next[O].next) == -1 && E(D.next[O].next);
		}
		return E(this), e.map((E, D) => {
			let O = D + (E.validEnd ? "*" : " ") + " ";
			for (let D = 0; D < E.next.length; D++) O += (D ? ", " : "") + E.next[D].type.name + "->" + e.indexOf(E.next[D].next);
			return O;
		}).join("\n");
	}
};
ContentMatch.empty = new ContentMatch(!0);
var TokenStream = class {
	constructor(e, E) {
		this.string = e, this.nodeTypes = E, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
	}
	get next() {
		return this.tokens[this.pos];
	}
	eat(e) {
		return this.next == e && (this.pos++ || !0);
	}
	err(e) {
		throw SyntaxError(e + " (in content expression '" + this.string + "')");
	}
};
function parseExpr(e) {
	let E = [];
	do
		E.push(parseExprSeq(e));
	while (e.eat("|"));
	return E.length == 1 ? E[0] : {
		type: "choice",
		exprs: E
	};
}
function parseExprSeq(e) {
	let E = [];
	do
		E.push(parseExprSubscript(e));
	while (e.next && e.next != ")" && e.next != "|");
	return E.length == 1 ? E[0] : {
		type: "seq",
		exprs: E
	};
}
function parseExprSubscript(e) {
	let E = parseExprAtom(e);
	for (;;) if (e.eat("+")) E = {
		type: "plus",
		expr: E
	};
	else if (e.eat("*")) E = {
		type: "star",
		expr: E
	};
	else if (e.eat("?")) E = {
		type: "opt",
		expr: E
	};
	else if (e.eat("{")) E = parseExprRange(e, E);
	else break;
	return E;
}
function parseNum(e) {
	/\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
	let E = Number(e.next);
	return e.pos++, E;
}
function parseExprRange(e, E) {
	let D = parseNum(e), O = D;
	return e.eat(",") && (O = e.next == "}" ? -1 : parseNum(e)), e.eat("}") || e.err("Unclosed braced range"), {
		type: "range",
		min: D,
		max: O,
		expr: E
	};
}
function resolveName(e, E) {
	let D = e.nodeTypes, O = D[E];
	if (O) return [O];
	let k = [];
	for (let e in D) {
		let O = D[e];
		O.isInGroup(E) && k.push(O);
	}
	return k.length == 0 && e.err("No node type or group '" + E + "' found"), k;
}
function parseExprAtom(e) {
	if (e.eat("(")) {
		let E = parseExpr(e);
		return e.eat(")") || e.err("Missing closing paren"), E;
	} else if (/\W/.test(e.next)) e.err("Unexpected token '" + e.next + "'");
	else {
		let E = resolveName(e, e.next).map((E) => (e.inline == null ? e.inline = E.isInline : e.inline != E.isInline && e.err("Mixing inline and block content"), {
			type: "name",
			value: E
		}));
		return e.pos++, E.length == 1 ? E[0] : {
			type: "choice",
			exprs: E
		};
	}
}
function nfa(e) {
	let E = [[]];
	return k(A(e, 0), D()), E;
	function D() {
		return E.push([]) - 1;
	}
	function O(e, D, O) {
		let k = {
			term: O,
			to: D
		};
		return E[e].push(k), k;
	}
	function k(e, E) {
		e.forEach((e) => e.to = E);
	}
	function A(e, E) {
		if (e.type == "choice") return e.exprs.reduce((e, D) => e.concat(A(D, E)), []);
		if (e.type == "seq") for (let O = 0;; O++) {
			let j = A(e.exprs[O], E);
			if (O == e.exprs.length - 1) return j;
			k(j, E = D());
		}
		else if (e.type == "star") {
			let j = D();
			return O(E, j), k(A(e.expr, j), j), [O(j)];
		} else if (e.type == "plus") {
			let j = D();
			return k(A(e.expr, E), j), k(A(e.expr, j), j), [O(j)];
		} else if (e.type == "opt") return [O(E)].concat(A(e.expr, E));
		else if (e.type == "range") {
			let j = E;
			for (let E = 0; E < e.min; E++) {
				let E = D();
				k(A(e.expr, j), E), j = E;
			}
			if (e.max == -1) k(A(e.expr, j), j);
			else for (let E = e.min; E < e.max; E++) {
				let E = D();
				O(j, E), k(A(e.expr, j), E), j = E;
			}
			return [O(j)];
		} else if (e.type == "name") return [O(E, void 0, e.value)];
		else throw Error("Unknown expr type");
	}
}
function cmp(e, E) {
	return E - e;
}
function nullFrom(e, E) {
	let D = [];
	return O(E), D.sort(cmp);
	function O(E) {
		let k = e[E];
		if (k.length == 1 && !k[0].term) return O(k[0].to);
		D.push(E);
		for (let e = 0; e < k.length; e++) {
			let { term: E, to: A } = k[e];
			!E && D.indexOf(A) == -1 && O(A);
		}
	}
}
function dfa(e) {
	let E = Object.create(null);
	return D(nullFrom(e, 0));
	function D(O) {
		let k = [];
		O.forEach((E) => {
			e[E].forEach(({ term: E, to: D }) => {
				if (!E) return;
				let O;
				for (let e = 0; e < k.length; e++) k[e][0] == E && (O = k[e][1]);
				nullFrom(e, D).forEach((e) => {
					O || k.push([E, O = []]), O.indexOf(e) == -1 && O.push(e);
				});
			});
		});
		let A = E[O.join(",")] = new ContentMatch(O.indexOf(e.length - 1) > -1);
		for (let e = 0; e < k.length; e++) {
			let O = k[e][1].sort(cmp);
			A.next.push({
				type: k[e][0],
				next: E[O.join(",")] || D(O)
			});
		}
		return A;
	}
}
function checkForDeadEnds(e, E) {
	for (let D = 0, O = [e]; D < O.length; D++) {
		let e = O[D], k = !e.validEnd, A = [];
		for (let E = 0; E < e.next.length; E++) {
			let { type: D, next: j } = e.next[E];
			A.push(D.name), k && !(D.isText || D.hasRequiredAttrs()) && (k = !1), O.indexOf(j) == -1 && O.push(j);
		}
		k && E.err("Only non-generatable nodes (" + A.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
	}
}
function defaultAttrs(e) {
	let E = Object.create(null);
	for (let D in e) {
		let O = e[D];
		if (!O.hasDefault) return null;
		E[D] = O.default;
	}
	return E;
}
function computeAttrs(e, E) {
	let D = Object.create(null);
	for (let O in e) {
		let k = E && E[O];
		if (k === void 0) {
			let E = e[O];
			if (E.hasDefault) k = E.default;
			else throw RangeError("No value supplied for attribute " + O);
		}
		D[O] = k;
	}
	return D;
}
function checkAttrs(e, E, D, O) {
	for (let k in E) if (!(k in e)) throw RangeError(`Unsupported attribute ${k} for ${D} of type ${O}`);
	for (let D in e) e[D].validate && e[D].validate(E[D]);
}
function initAttrs(e, E) {
	let D = Object.create(null);
	if (E) for (let O in E) D[O] = new Attribute(e, O, E[O]);
	return D;
}
var NodeType$1 = class e {
	constructor(e, E, D) {
		this.name = e, this.schema = E, this.spec = D, this.markSet = null, this.groups = D.group ? D.group.split(" ") : [], this.attrs = initAttrs(e, D.attrs), this.defaultAttrs = defaultAttrs(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(D.inline || e == "text"), this.isText = e == "text";
	}
	get isInline() {
		return !this.isBlock;
	}
	get isTextblock() {
		return this.isBlock && this.inlineContent;
	}
	get isLeaf() {
		return this.contentMatch == ContentMatch.empty;
	}
	get isAtom() {
		return this.isLeaf || !!this.spec.atom;
	}
	isInGroup(e) {
		return this.groups.indexOf(e) > -1;
	}
	get whitespace() {
		return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
	}
	hasRequiredAttrs() {
		for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
		return !1;
	}
	compatibleContent(e) {
		return this == e || this.contentMatch.compatible(e.contentMatch);
	}
	computeAttrs(e) {
		return !e && this.defaultAttrs ? this.defaultAttrs : computeAttrs(this.attrs, e);
	}
	create(e = null, E, D) {
		if (this.isText) throw Error("NodeType.create can't construct text nodes");
		return new Node$1(this, this.computeAttrs(e), Fragment.from(E), Mark$1.setFrom(D));
	}
	createChecked(e = null, E, D) {
		return E = Fragment.from(E), this.checkContent(E), new Node$1(this, this.computeAttrs(e), E, Mark$1.setFrom(D));
	}
	createAndFill(e = null, E, D) {
		if (e = this.computeAttrs(e), E = Fragment.from(E), E.size) {
			let e = this.contentMatch.fillBefore(E);
			if (!e) return null;
			E = e.append(E);
		}
		let O = this.contentMatch.matchFragment(E), k = O && O.fillBefore(Fragment.empty, !0);
		return k ? new Node$1(this, e, E.append(k), Mark$1.setFrom(D)) : null;
	}
	validContent(e) {
		let E = this.contentMatch.matchFragment(e);
		if (!E || !E.validEnd) return !1;
		for (let E = 0; E < e.childCount; E++) if (!this.allowsMarks(e.child(E).marks)) return !1;
		return !0;
	}
	checkContent(e) {
		if (!this.validContent(e)) throw RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
	}
	checkAttrs(e) {
		checkAttrs(this.attrs, e, "node", this.name);
	}
	allowsMarkType(e) {
		return this.markSet == null || this.markSet.indexOf(e) > -1;
	}
	allowsMarks(e) {
		if (this.markSet == null) return !0;
		for (let E = 0; E < e.length; E++) if (!this.allowsMarkType(e[E].type)) return !1;
		return !0;
	}
	allowedMarks(e) {
		if (this.markSet == null) return e;
		let E;
		for (let D = 0; D < e.length; D++) this.allowsMarkType(e[D].type) ? E && E.push(e[D]) : E ||= e.slice(0, D);
		return E ? E.length ? E : Mark$1.none : e;
	}
	static compile(E, D) {
		let O = Object.create(null);
		E.forEach((E, k) => O[E] = new e(E, D, k));
		let k = D.spec.topNode || "doc";
		if (!O[k]) throw RangeError("Schema is missing its top node type ('" + k + "')");
		if (!O.text) throw RangeError("Every schema needs a 'text' type");
		for (let e in O.text.attrs) throw RangeError("The text node type should not have attributes");
		return O;
	}
};
function validateType(e, E, D) {
	let O = D.split("|");
	return (D) => {
		let k = D === null ? "null" : typeof D;
		if (O.indexOf(k) < 0) throw RangeError(`Expected value of type ${O} for attribute ${E} on type ${e}, got ${k}`);
	};
}
var Attribute = class {
	constructor(e, E, D) {
		this.hasDefault = Object.prototype.hasOwnProperty.call(D, "default"), this.default = D.default, this.validate = typeof D.validate == "string" ? validateType(e, E, D.validate) : D.validate;
	}
	get isRequired() {
		return !this.hasDefault;
	}
}, MarkType = class e {
	constructor(e, E, D, O) {
		this.name = e, this.rank = E, this.schema = D, this.spec = O, this.attrs = initAttrs(e, O.attrs), this.excluded = null;
		let k = defaultAttrs(this.attrs);
		this.instance = k ? new Mark$1(this, k) : null;
	}
	create(e = null) {
		return !e && this.instance ? this.instance : new Mark$1(this, computeAttrs(this.attrs, e));
	}
	static compile(E, D) {
		let O = Object.create(null), k = 0;
		return E.forEach((E, A) => O[E] = new e(E, k++, D, A)), O;
	}
	removeFromSet(e) {
		for (var E = 0; E < e.length; E++) e[E].type == this && (e = e.slice(0, E).concat(e.slice(E + 1)), E--);
		return e;
	}
	isInSet(e) {
		for (let E = 0; E < e.length; E++) if (e[E].type == this) return e[E];
	}
	checkAttrs(e) {
		checkAttrs(this.attrs, e, "mark", this.name);
	}
	excludes(e) {
		return this.excluded.indexOf(e) > -1;
	}
}, Schema = class {
	constructor(e) {
		this.linebreakReplacement = null, this.cached = Object.create(null);
		let E = this.spec = {};
		for (let D in e) E[D] = e[D];
		E.nodes = dist_default$1.from(e.nodes), E.marks = dist_default$1.from(e.marks || {}), this.nodes = NodeType$1.compile(this.spec.nodes, this), this.marks = MarkType.compile(this.spec.marks, this);
		let D = Object.create(null);
		for (let e in this.nodes) {
			if (e in this.marks) throw RangeError(e + " can not be both a node and a mark");
			let E = this.nodes[e], O = E.spec.content || "", k = E.spec.marks;
			if (E.contentMatch = D[O] || (D[O] = ContentMatch.parse(O, this.nodes)), E.inlineContent = E.contentMatch.inlineContent, E.spec.linebreakReplacement) {
				if (this.linebreakReplacement) throw RangeError("Multiple linebreak nodes defined");
				if (!E.isInline || !E.isLeaf) throw RangeError("Linebreak replacement nodes must be inline leaf nodes");
				this.linebreakReplacement = E;
			}
			E.markSet = k == "_" ? null : k ? gatherMarks(this, k.split(" ")) : k == "" || !E.inlineContent ? [] : null;
		}
		for (let e in this.marks) {
			let E = this.marks[e], D = E.spec.excludes;
			E.excluded = D == null ? [E] : D == "" ? [] : gatherMarks(this, D.split(" "));
		}
		this.nodeFromJSON = (e) => Node$1.fromJSON(this, e), this.markFromJSON = (e) => Mark$1.fromJSON(this, e), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
	}
	node(e, E = null, D, O) {
		if (typeof e == "string") e = this.nodeType(e);
		else if (e instanceof NodeType$1) {
			if (e.schema != this) throw RangeError("Node type from different schema used (" + e.name + ")");
		} else throw RangeError("Invalid node type: " + e);
		return e.createChecked(E, D, O);
	}
	text(e, E) {
		let D = this.nodes.text;
		return new TextNode(D, D.defaultAttrs, e, Mark$1.setFrom(E));
	}
	mark(e, E) {
		return typeof e == "string" && (e = this.marks[e]), e.create(E);
	}
	nodeType(e) {
		let E = this.nodes[e];
		if (!E) throw RangeError("Unknown node type: " + e);
		return E;
	}
};
function gatherMarks(e, E) {
	let D = [];
	for (let O = 0; O < E.length; O++) {
		let k = E[O], A = e.marks[k], j = A;
		if (A) D.push(A);
		else for (let E in e.marks) {
			let O = e.marks[E];
			(k == "_" || O.spec.group && O.spec.group.split(" ").indexOf(k) > -1) && D.push(j = O);
		}
		if (!j) throw SyntaxError("Unknown mark type: '" + E[O] + "'");
	}
	return D;
}
function isTagRule(e) {
	return e.tag != null;
}
function isStyleRule(e) {
	return e.style != null;
}
var DOMParser = class e {
	constructor(e, E) {
		this.schema = e, this.rules = E, this.tags = [], this.styles = [];
		let D = this.matchedStyles = [];
		E.forEach((e) => {
			if (isTagRule(e)) this.tags.push(e);
			else if (isStyleRule(e)) {
				let E = /[^=]*/.exec(e.style)[0];
				D.indexOf(E) < 0 && D.push(E), this.styles.push(e);
			}
		}), this.normalizeLists = !this.tags.some((E) => {
			if (!/^(ul|ol)\b/.test(E.tag) || !E.node) return !1;
			let D = e.nodes[E.node];
			return D.contentMatch.matchType(D);
		});
	}
	parse(e, E = {}) {
		let D = new ParseContext(this, E, !1);
		return D.addAll(e, Mark$1.none, E.from, E.to), D.finish();
	}
	parseSlice(e, E = {}) {
		let D = new ParseContext(this, E, !0);
		return D.addAll(e, Mark$1.none, E.from, E.to), Slice.maxOpen(D.finish());
	}
	matchTag(e, E, D) {
		for (let O = D ? this.tags.indexOf(D) + 1 : 0; O < this.tags.length; O++) {
			let D = this.tags[O];
			if (matches(e, D.tag) && (D.namespace === void 0 || e.namespaceURI == D.namespace) && (!D.context || E.matchesContext(D.context))) {
				if (D.getAttrs) {
					let E = D.getAttrs(e);
					if (E === !1) continue;
					D.attrs = E || void 0;
				}
				return D;
			}
		}
	}
	matchStyle(e, E, D, O) {
		for (let k = O ? this.styles.indexOf(O) + 1 : 0; k < this.styles.length; k++) {
			let O = this.styles[k], A = O.style;
			if (!(A.indexOf(e) != 0 || O.context && !D.matchesContext(O.context) || A.length > e.length && (A.charCodeAt(e.length) != 61 || A.slice(e.length + 1) != E))) {
				if (O.getAttrs) {
					let e = O.getAttrs(E);
					if (e === !1) continue;
					O.attrs = e || void 0;
				}
				return O;
			}
		}
	}
	static schemaRules(e) {
		let E = [];
		function D(e) {
			let D = e.priority == null ? 50 : e.priority, O = 0;
			for (; O < E.length; O++) {
				let e = E[O];
				if ((e.priority == null ? 50 : e.priority) < D) break;
			}
			E.splice(O, 0, e);
		}
		for (let E in e.marks) {
			let O = e.marks[E].spec.parseDOM;
			O && O.forEach((e) => {
				D(e = copy(e)), e.mark || e.ignore || e.clearMark || (e.mark = E);
			});
		}
		for (let E in e.nodes) {
			let O = e.nodes[E].spec.parseDOM;
			O && O.forEach((e) => {
				D(e = copy(e)), e.node || e.ignore || e.mark || (e.node = E);
			});
		}
		return E;
	}
	static fromSchema(E) {
		return E.cached.domParser || (E.cached.domParser = new e(E, e.schemaRules(E)));
	}
}, blockTags = {
	address: !0,
	article: !0,
	aside: !0,
	blockquote: !0,
	body: !0,
	canvas: !0,
	dd: !0,
	div: !0,
	dl: !0,
	fieldset: !0,
	figcaption: !0,
	figure: !0,
	footer: !0,
	form: !0,
	h1: !0,
	h2: !0,
	h3: !0,
	h4: !0,
	h5: !0,
	h6: !0,
	header: !0,
	hgroup: !0,
	hr: !0,
	li: !0,
	noscript: !0,
	ol: !0,
	output: !0,
	p: !0,
	pre: !0,
	section: !0,
	table: !0,
	tfoot: !0,
	ul: !0
}, ignoreTags = {
	head: !0,
	noscript: !0,
	object: !0,
	script: !0,
	style: !0,
	title: !0
}, listTags = {
	ol: !0,
	ul: !0
}, OPT_PRESERVE_WS = 1, OPT_PRESERVE_WS_FULL = 2, OPT_OPEN_LEFT = 4;
function wsOptionsFor(e, E, D) {
	return E == null ? e && e.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : D & ~OPT_OPEN_LEFT : (E ? OPT_PRESERVE_WS : 0) | (E === "full" ? OPT_PRESERVE_WS_FULL : 0);
}
var NodeContext = class {
	constructor(e, E, D, O, k, A) {
		this.type = e, this.attrs = E, this.marks = D, this.solid = O, this.options = A, this.content = [], this.activeMarks = Mark$1.none, this.match = k || (A & OPT_OPEN_LEFT ? null : e.contentMatch);
	}
	findWrapping(e) {
		if (!this.match) {
			if (!this.type) return [];
			let E = this.type.contentMatch.fillBefore(Fragment.from(e));
			if (E) this.match = this.type.contentMatch.matchFragment(E);
			else {
				let E = this.type.contentMatch, D;
				return (D = E.findWrapping(e.type)) ? (this.match = E, D) : null;
			}
		}
		return this.match.findWrapping(e.type);
	}
	finish(e) {
		if (!(this.options & OPT_PRESERVE_WS)) {
			let e = this.content[this.content.length - 1], E;
			if (e && e.isText && (E = /[ \t\r\n\u000c]+$/.exec(e.text))) {
				let D = e;
				e.text.length == E[0].length ? this.content.pop() : this.content[this.content.length - 1] = D.withText(D.text.slice(0, D.text.length - E[0].length));
			}
		}
		let E = Fragment.from(this.content);
		return !e && this.match && (E = E.append(this.match.fillBefore(Fragment.empty, !0))), this.type ? this.type.create(this.attrs, E, this.marks) : E;
	}
	inlineContext(e) {
		return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !blockTags.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
	}
}, ParseContext = class {
	constructor(e, E, D) {
		this.parser = e, this.options = E, this.isOpen = D, this.open = 0, this.localPreserveWS = !1;
		let O = E.topNode, k, A = wsOptionsFor(null, E.preserveWhitespace, 0) | (D ? OPT_OPEN_LEFT : 0);
		k = O ? new NodeContext(O.type, O.attrs, Mark$1.none, !0, E.topMatch || O.type.contentMatch, A) : D ? new NodeContext(null, null, Mark$1.none, !0, null, A) : new NodeContext(e.schema.topNodeType, null, Mark$1.none, !0, null, A), this.nodes = [k], this.find = E.findPositions, this.needsBlock = !1;
	}
	get top() {
		return this.nodes[this.open];
	}
	addDOM(e, E) {
		e.nodeType == 3 ? this.addTextNode(e, E) : e.nodeType == 1 && this.addElement(e, E);
	}
	addTextNode(e, E) {
		let D = e.nodeValue, O = this.top, k = O.options & OPT_PRESERVE_WS_FULL ? "full" : this.localPreserveWS || (O.options & OPT_PRESERVE_WS) > 0, { schema: A } = this.parser;
		if (k === "full" || O.inlineContext(e) || /[^ \t\r\n\u000c]/.test(D)) {
			if (k) if (k === "full") D = D.replace(/\r\n?/g, "\n");
			else if (A.linebreakReplacement && /[\r\n]/.test(D) && this.top.findWrapping(A.linebreakReplacement.create())) {
				let e = D.split(/\r?\n|\r/);
				for (let D = 0; D < e.length; D++) D && this.insertNode(A.linebreakReplacement.create(), E, !0), e[D] && this.insertNode(A.text(e[D]), E, !/\S/.test(e[D]));
				D = "";
			} else D = D.replace(/\r?\n|\r/g, " ");
			else if (D = D.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(D) && this.open == this.nodes.length - 1) {
				let E = O.content[O.content.length - 1], k = e.previousSibling;
				(!E || k && k.nodeName == "BR" || E.isText && /[ \t\r\n\u000c]$/.test(E.text)) && (D = D.slice(1));
			}
			D && this.insertNode(A.text(D), E, !/\S/.test(D)), this.findInText(e);
		} else this.findInside(e);
	}
	addElement(e, E, D) {
		let O = this.localPreserveWS, k = this.top;
		(e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
		let A = e.nodeName.toLowerCase(), j;
		listTags.hasOwnProperty(A) && this.parser.normalizeLists && normalizeList(e);
		let M = this.options.ruleFromNode && this.options.ruleFromNode(e) || (j = this.parser.matchTag(e, this, D));
		out: if (M ? M.ignore : ignoreTags.hasOwnProperty(A)) this.findInside(e), this.ignoreFallback(e, E);
		else if (!M || M.skip || M.closeParent) {
			M && M.closeParent ? this.open = Math.max(0, this.open - 1) : M && M.skip.nodeType && (e = M.skip);
			let D, O = this.needsBlock;
			if (blockTags.hasOwnProperty(A)) k.content.length && k.content[0].isInline && this.open && (this.open--, k = this.top), D = !0, k.type || (this.needsBlock = !0);
			else if (!e.firstChild) {
				this.leafFallback(e, E);
				break out;
			}
			let j = M && M.skip ? E : this.readStyles(e, E);
			j && this.addAll(e, j), D && this.sync(k), this.needsBlock = O;
		} else {
			let D = this.readStyles(e, E);
			D && this.addElementByRule(e, M, D, M.consuming === !1 ? j : void 0);
		}
		this.localPreserveWS = O;
	}
	leafFallback(e, E) {
		e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode("\n"), E);
	}
	ignoreFallback(e, E) {
		e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), E, !0);
	}
	readStyles(e, E) {
		let D = e.style;
		if (D && D.length) for (let e = 0; e < this.parser.matchedStyles.length; e++) {
			let O = this.parser.matchedStyles[e], k = D.getPropertyValue(O);
			if (k) for (let e;;) {
				let D = this.parser.matchStyle(O, k, this, e);
				if (!D) break;
				if (D.ignore) return null;
				if (E = D.clearMark ? E.filter((e) => !D.clearMark(e)) : E.concat(this.parser.schema.marks[D.mark].create(D.attrs)), D.consuming === !1) e = D;
				else break;
			}
		}
		return E;
	}
	addElementByRule(e, E, D, O) {
		let k, A;
		if (E.node) if (A = this.parser.schema.nodes[E.node], A.isLeaf) this.insertNode(A.create(E.attrs), D, e.nodeName == "BR") || this.leafFallback(e, D);
		else {
			let e = this.enter(A, E.attrs || null, D, E.preserveWhitespace);
			e && (k = !0, D = e);
		}
		else {
			let e = this.parser.schema.marks[E.mark];
			D = D.concat(e.create(E.attrs));
		}
		let j = this.top;
		if (A && A.isLeaf) this.findInside(e);
		else if (O) this.addElement(e, D, O);
		else if (E.getContent) this.findInside(e), E.getContent(e, this.parser.schema).forEach((e) => this.insertNode(e, D, !1));
		else {
			let O = e;
			typeof E.contentElement == "string" ? O = e.querySelector(E.contentElement) : typeof E.contentElement == "function" ? O = E.contentElement(e) : E.contentElement && (O = E.contentElement), this.findAround(e, O, !0), this.addAll(O, D), this.findAround(e, O, !1);
		}
		k && this.sync(j) && this.open--;
	}
	addAll(e, E, D, O) {
		let k = D || 0;
		for (let A = D ? e.childNodes[D] : e.firstChild, j = O == null ? null : e.childNodes[O]; A != j; A = A.nextSibling, ++k) this.findAtPoint(e, k), this.addDOM(A, E);
		this.findAtPoint(e, k);
	}
	findPlace(e, E, D) {
		let O, k;
		for (let E = this.open, A = 0; E >= 0; E--) {
			let j = this.nodes[E], M = j.findWrapping(e);
			if (M && (!O || O.length > M.length + A) && (O = M, k = j, !M.length)) break;
			if (j.solid) {
				if (D) break;
				A += 2;
			}
		}
		if (!O) return null;
		this.sync(k);
		for (let e = 0; e < O.length; e++) E = this.enterInner(O[e], null, E, !1);
		return E;
	}
	insertNode(e, E, D) {
		if (e.isInline && this.needsBlock && !this.top.type) {
			let e = this.textblockFromContext();
			e && (E = this.enterInner(e, null, E));
		}
		let O = this.findPlace(e, E, D);
		if (O) {
			this.closeExtra();
			let E = this.top;
			E.match &&= E.match.matchType(e.type);
			let D = Mark$1.none;
			for (let k of O.concat(e.marks)) (E.type ? E.type.allowsMarkType(k.type) : markMayApply(k.type, e.type)) && (D = k.addToSet(D));
			return E.content.push(e.mark(D)), !0;
		}
		return !1;
	}
	enter(e, E, D, O) {
		let k = this.findPlace(e.create(E), D, !1);
		return k &&= this.enterInner(e, E, D, !0, O), k;
	}
	enterInner(e, E, D, O = !1, k) {
		this.closeExtra();
		let A = this.top;
		A.match = A.match && A.match.matchType(e);
		let j = wsOptionsFor(e, k, A.options);
		A.options & OPT_OPEN_LEFT && A.content.length == 0 && (j |= OPT_OPEN_LEFT);
		let M = Mark$1.none;
		return D = D.filter((E) => (A.type ? A.type.allowsMarkType(E.type) : markMayApply(E.type, e)) ? (M = E.addToSet(M), !1) : !0), this.nodes.push(new NodeContext(e, E, M, O, null, j)), this.open++, D;
	}
	closeExtra(e = !1) {
		let E = this.nodes.length - 1;
		if (E > this.open) {
			for (; E > this.open; E--) this.nodes[E - 1].content.push(this.nodes[E].finish(e));
			this.nodes.length = this.open + 1;
		}
	}
	finish() {
		return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
	}
	sync(e) {
		for (let E = this.open; E >= 0; E--) if (this.nodes[E] == e) return this.open = E, !0;
		else this.localPreserveWS && (this.nodes[E].options |= OPT_PRESERVE_WS);
		return !1;
	}
	get currentPos() {
		this.closeExtra();
		let e = 0;
		for (let E = this.open; E >= 0; E--) {
			let D = this.nodes[E].content;
			for (let E = D.length - 1; E >= 0; E--) e += D[E].nodeSize;
			E && e++;
		}
		return e;
	}
	findAtPoint(e, E) {
		if (this.find) for (let D = 0; D < this.find.length; D++) this.find[D].node == e && this.find[D].offset == E && (this.find[D].pos = this.currentPos);
	}
	findInside(e) {
		if (this.find) for (let E = 0; E < this.find.length; E++) this.find[E].pos == null && e.nodeType == 1 && e.contains(this.find[E].node) && (this.find[E].pos = this.currentPos);
	}
	findAround(e, E, D) {
		if (e != E && this.find) for (let O = 0; O < this.find.length; O++) this.find[O].pos == null && e.nodeType == 1 && e.contains(this.find[O].node) && E.compareDocumentPosition(this.find[O].node) & (D ? 2 : 4) && (this.find[O].pos = this.currentPos);
	}
	findInText(e) {
		if (this.find) for (let E = 0; E < this.find.length; E++) this.find[E].node == e && (this.find[E].pos = this.currentPos - (e.nodeValue.length - this.find[E].offset));
	}
	matchesContext(e) {
		if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
		let E = e.split("/"), D = this.options.context, O = !this.isOpen && (!D || D.parent.type == this.nodes[0].type), k = -(D ? D.depth + 1 : 0) + (O ? 0 : 1), A = (e, j) => {
			for (; e >= 0; e--) {
				let M = E[e];
				if (M == "") {
					if (e == E.length - 1 || e == 0) continue;
					for (; j >= k; j--) if (A(e - 1, j)) return !0;
					return !1;
				} else {
					let e = j > 0 || j == 0 && O ? this.nodes[j].type : D && j >= k ? D.node(j - k).type : null;
					if (!e || e.name != M && !e.isInGroup(M)) return !1;
					j--;
				}
			}
			return !0;
		};
		return A(E.length - 1, this.open);
	}
	textblockFromContext() {
		let e = this.options.context;
		if (e) for (let E = e.depth; E >= 0; E--) {
			let D = e.node(E).contentMatchAt(e.indexAfter(E)).defaultType;
			if (D && D.isTextblock && D.defaultAttrs) return D;
		}
		for (let e in this.parser.schema.nodes) {
			let E = this.parser.schema.nodes[e];
			if (E.isTextblock && E.defaultAttrs) return E;
		}
	}
};
function normalizeList(e) {
	for (let E = e.firstChild, D = null; E; E = E.nextSibling) {
		let e = E.nodeType == 1 ? E.nodeName.toLowerCase() : null;
		e && listTags.hasOwnProperty(e) && D ? (D.appendChild(E), E = D) : e == "li" ? D = E : e && (D = null);
	}
}
function matches(e, E) {
	return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(e, E);
}
function copy(e) {
	let E = {};
	for (let D in e) E[D] = e[D];
	return E;
}
function markMayApply(e, E) {
	let D = E.schema.nodes;
	for (let O in D) {
		let k = D[O];
		if (!k.allowsMarkType(e)) continue;
		let A = [], j = (e) => {
			A.push(e);
			for (let D = 0; D < e.edgeCount; D++) {
				let { type: O, next: k } = e.edge(D);
				if (O == E || A.indexOf(k) < 0 && j(k)) return !0;
			}
		};
		if (j(k.contentMatch)) return !0;
	}
}
var DOMSerializer = class e {
	constructor(e, E) {
		this.nodes = e, this.marks = E;
	}
	serializeFragment(e, E = {}, D) {
		D ||= doc$1(E).createDocumentFragment();
		let O = D, k = [];
		return e.forEach((e) => {
			if (k.length || e.marks.length) {
				let D = 0, A = 0;
				for (; D < k.length && A < e.marks.length;) {
					let E = e.marks[A];
					if (!this.marks[E.type.name]) {
						A++;
						continue;
					}
					if (!E.eq(k[D][0]) || E.type.spec.spanning === !1) break;
					D++, A++;
				}
				for (; D < k.length;) O = k.pop()[1];
				for (; A < e.marks.length;) {
					let D = e.marks[A++], j = this.serializeMark(D, e.isInline, E);
					j && (k.push([D, O]), O.appendChild(j.dom), O = j.contentDOM || j.dom);
				}
			}
			O.appendChild(this.serializeNodeInner(e, E));
		}), D;
	}
	serializeNodeInner(e, E) {
		if (e.isText) return doc$1(E).createTextNode(e.text);
		let { dom: D, contentDOM: O } = renderSpec(doc$1(E), this.nodes[e.type.name](e), null, e.attrs);
		if (O) {
			if (e.isLeaf) throw RangeError("Content hole not allowed in a leaf node spec");
			this.serializeFragment(e.content, E, O);
		}
		return D;
	}
	serializeNode(e, E = {}) {
		let D = this.serializeNodeInner(e, E);
		for (let O = e.marks.length - 1; O >= 0; O--) {
			let k = this.serializeMark(e.marks[O], e.isInline, E);
			k && ((k.contentDOM || k.dom).appendChild(D), D = k.dom);
		}
		return D;
	}
	serializeMark(e, E, D = {}) {
		let O = this.marks[e.type.name];
		return O && renderSpec(doc$1(D), O(e, E), null, e.attrs);
	}
	static renderSpec(e, E, D = null, O) {
		return typeof E == "string" ? { dom: e.createTextNode(E) } : renderSpec(e, E, D, O);
	}
	static fromSchema(E) {
		return E.cached.domSerializer || (E.cached.domSerializer = new e(this.nodesFromSchema(E), this.marksFromSchema(E)));
	}
	static nodesFromSchema(e) {
		let E = gatherToDOM(e.nodes);
		return E.text ||= (e) => e.text, E;
	}
	static marksFromSchema(e) {
		return gatherToDOM(e.marks);
	}
};
function gatherToDOM(e) {
	let E = {};
	for (let D in e) {
		let O = e[D].spec.toDOM;
		O && (E[D] = O);
	}
	return E;
}
function doc$1(e) {
	return e.document || window.document;
}
var suspiciousAttributeCache = /* @__PURE__ */ new WeakMap();
function suspiciousAttributes(e) {
	let E = suspiciousAttributeCache.get(e);
	return E === void 0 && suspiciousAttributeCache.set(e, E = suspiciousAttributesInner(e)), E;
}
function suspiciousAttributesInner(e) {
	let E = null;
	function D(e) {
		if (e && typeof e == "object") if (Array.isArray(e)) if (typeof e[0] == "string") E ||= [], E.push(e);
		else for (let E = 0; E < e.length; E++) D(e[E]);
		else for (let E in e) D(e[E]);
	}
	return D(e), E;
}
function renderSpec(e, E, D, O) {
	if (E.nodeType == 1) return { dom: E };
	if (E.dom && E.dom.nodeType == 1) return E;
	let k = E[0], A;
	if (typeof k != "string") throw RangeError("Invalid array passed to renderSpec");
	if (O && (A = suspiciousAttributes(O)) && A.indexOf(E) > -1) throw RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
	let j = k.indexOf(" ");
	j > 0 && (D = k.slice(0, j), k = k.slice(j + 1));
	let M, N = D ? e.createElementNS(D, k) : e.createElement(k), P = E[1], F = 1;
	if (P && typeof P == "object" && P.nodeType == null && !Array.isArray(P)) {
		for (let e in F = 2, P) if (P[e] != null) {
			let E = e.indexOf(" ");
			E > 0 ? N.setAttributeNS(e.slice(0, E), e.slice(E + 1), P[e]) : e == "style" && N.style ? N.style.cssText = P[e] : N.setAttribute(e, P[e]);
		}
	}
	for (let k = F; k < E.length; k++) {
		let A = E[k];
		if (A === 0) {
			if (k < E.length - 1 || k > F) throw RangeError("Content hole must be the only child of its parent node");
			return {
				dom: N,
				contentDOM: N
			};
		} else if (typeof A == "string") N.appendChild(e.createTextNode(A));
		else {
			let { dom: E, contentDOM: k } = renderSpec(e, A, D, O);
			if (N.appendChild(E), k) {
				if (M) throw RangeError("Multiple content holes");
				M = k;
			}
		}
	}
	return {
		dom: N,
		contentDOM: M
	};
}
var lower16 = 65535, factor16 = 2 ** 16;
function makeRecover(e, E) {
	return e + E * factor16;
}
function recoverIndex(e) {
	return e & lower16;
}
function recoverOffset(e) {
	return (e - (e & lower16)) / factor16;
}
var DEL_BEFORE = 1, DEL_AFTER = 2, DEL_ACROSS = 4, DEL_SIDE = 8, MapResult = class {
	constructor(e, E, D) {
		this.pos = e, this.delInfo = E, this.recover = D;
	}
	get deleted() {
		return (this.delInfo & DEL_SIDE) > 0;
	}
	get deletedBefore() {
		return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
	}
	get deletedAfter() {
		return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
	}
	get deletedAcross() {
		return (this.delInfo & DEL_ACROSS) > 0;
	}
}, StepMap = class e {
	constructor(E, D = !1) {
		if (this.ranges = E, this.inverted = D, !E.length && e.empty) return e.empty;
	}
	recover(e) {
		let E = 0, D = recoverIndex(e);
		if (!this.inverted) for (let e = 0; e < D; e++) E += this.ranges[e * 3 + 2] - this.ranges[e * 3 + 1];
		return this.ranges[D * 3] + E + recoverOffset(e);
	}
	mapResult(e, E = 1) {
		return this._map(e, E, !1);
	}
	map(e, E = 1) {
		return this._map(e, E, !0);
	}
	_map(e, E, D) {
		let O = 0, k = this.inverted ? 2 : 1, A = this.inverted ? 1 : 2;
		for (let j = 0; j < this.ranges.length; j += 3) {
			let M = this.ranges[j] - (this.inverted ? O : 0);
			if (M > e) break;
			let N = this.ranges[j + k], P = this.ranges[j + A], F = M + N;
			if (e <= F) {
				let k = N ? e == M ? -1 : e == F ? 1 : E : E, A = M + O + (k < 0 ? 0 : P);
				if (D) return A;
				let I = e == (E < 0 ? M : F) ? null : makeRecover(j / 3, e - M), L = e == M ? DEL_AFTER : e == F ? DEL_BEFORE : DEL_ACROSS;
				return (E < 0 ? e != M : e != F) && (L |= DEL_SIDE), new MapResult(A, L, I);
			}
			O += P - N;
		}
		return D ? e + O : new MapResult(e + O, 0, null);
	}
	touches(e, E) {
		let D = 0, O = recoverIndex(E), k = this.inverted ? 2 : 1, A = this.inverted ? 1 : 2;
		for (let E = 0; E < this.ranges.length; E += 3) {
			let j = this.ranges[E] - (this.inverted ? D : 0);
			if (j > e) break;
			let M = this.ranges[E + k];
			if (e <= j + M && E == O * 3) return !0;
			D += this.ranges[E + A] - M;
		}
		return !1;
	}
	forEach(e) {
		let E = this.inverted ? 2 : 1, D = this.inverted ? 1 : 2;
		for (let O = 0, k = 0; O < this.ranges.length; O += 3) {
			let A = this.ranges[O], j = A - (this.inverted ? k : 0), M = A + (this.inverted ? 0 : k), N = this.ranges[O + E], P = this.ranges[O + D];
			e(j, j + N, M, M + P), k += P - N;
		}
	}
	invert() {
		return new e(this.ranges, !this.inverted);
	}
	toString() {
		return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
	}
	static offset(E) {
		return E == 0 ? e.empty : new e(E < 0 ? [
			0,
			-E,
			0
		] : [
			0,
			0,
			E
		]);
	}
};
StepMap.empty = new StepMap([]);
var Mapping = class e {
	constructor(e, E, D = 0, O = e ? e.length : 0) {
		this.mirror = E, this.from = D, this.to = O, this._maps = e || [], this.ownData = !(e || E);
	}
	get maps() {
		return this._maps;
	}
	slice(E = 0, D = this.maps.length) {
		return new e(this._maps, this.mirror, E, D);
	}
	appendMap(e, E) {
		this.ownData ||= (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), !0), this.to = this._maps.push(e), E != null && this.setMirror(this._maps.length - 1, E);
	}
	appendMapping(e) {
		for (let E = 0, D = this._maps.length; E < e._maps.length; E++) {
			let O = e.getMirror(E);
			this.appendMap(e._maps[E], O != null && O < E ? D + O : void 0);
		}
	}
	getMirror(e) {
		if (this.mirror) {
			for (let E = 0; E < this.mirror.length; E++) if (this.mirror[E] == e) return this.mirror[E + (E % 2 ? -1 : 1)];
		}
	}
	setMirror(e, E) {
		this.mirror ||= [], this.mirror.push(e, E);
	}
	appendMappingInverted(e) {
		for (let E = e.maps.length - 1, D = this._maps.length + e._maps.length; E >= 0; E--) {
			let O = e.getMirror(E);
			this.appendMap(e._maps[E].invert(), O != null && O > E ? D - O - 1 : void 0);
		}
	}
	invert() {
		let E = new e();
		return E.appendMappingInverted(this), E;
	}
	map(e, E = 1) {
		if (this.mirror) return this._map(e, E, !0);
		for (let D = this.from; D < this.to; D++) e = this._maps[D].map(e, E);
		return e;
	}
	mapResult(e, E = 1) {
		return this._map(e, E, !1);
	}
	_map(e, E, D) {
		let O = 0;
		for (let D = this.from; D < this.to; D++) {
			let k = this._maps[D].mapResult(e, E);
			if (k.recover != null) {
				let E = this.getMirror(D);
				if (E != null && E > D && E < this.to) {
					D = E, e = this._maps[E].recover(k.recover);
					continue;
				}
			}
			O |= k.delInfo, e = k.pos;
		}
		return D ? e : new MapResult(e, O, null);
	}
}, stepsByID = Object.create(null), Step = class {
	getMap() {
		return StepMap.empty;
	}
	merge(e) {
		return null;
	}
	static fromJSON(e, E) {
		if (!E || !E.stepType) throw RangeError("Invalid input for Step.fromJSON");
		let D = stepsByID[E.stepType];
		if (!D) throw RangeError(`No step type ${E.stepType} defined`);
		return D.fromJSON(e, E);
	}
	static jsonID(e, E) {
		if (e in stepsByID) throw RangeError("Duplicate use of step JSON ID " + e);
		return stepsByID[e] = E, E.prototype.jsonID = e, E;
	}
}, StepResult = class e {
	constructor(e, E) {
		this.doc = e, this.failed = E;
	}
	static ok(E) {
		return new e(E, null);
	}
	static fail(E) {
		return new e(null, E);
	}
	static fromReplace(E, D, O, k) {
		try {
			return e.ok(E.replace(D, O, k));
		} catch (E) {
			if (E instanceof ReplaceError) return e.fail(E.message);
			throw E;
		}
	}
};
function mapFragment(e, E, D) {
	let O = [];
	for (let k = 0; k < e.childCount; k++) {
		let A = e.child(k);
		A.content.size && (A = A.copy(mapFragment(A.content, E, A))), A.isInline && (A = E(A, D, k)), O.push(A);
	}
	return Fragment.fromArray(O);
}
var AddMarkStep = class e extends Step {
	constructor(e, E, D) {
		super(), this.from = e, this.to = E, this.mark = D;
	}
	apply(e) {
		let E = e.slice(this.from, this.to), D = e.resolve(this.from), O = D.node(D.sharedDepth(this.to)), k = new Slice(mapFragment(E.content, (e, E) => !e.isAtom || !E.type.allowsMarkType(this.mark.type) ? e : e.mark(this.mark.addToSet(e.marks)), O), E.openStart, E.openEnd);
		return StepResult.fromReplace(e, this.from, this.to, k);
	}
	invert() {
		return new RemoveMarkStep(this.from, this.to, this.mark);
	}
	map(E) {
		let D = E.mapResult(this.from, 1), O = E.mapResult(this.to, -1);
		return D.deleted && O.deleted || D.pos >= O.pos ? null : new e(D.pos, O.pos, this.mark);
	}
	merge(E) {
		return E instanceof e && E.mark.eq(this.mark) && this.from <= E.to && this.to >= E.from ? new e(Math.min(this.from, E.from), Math.max(this.to, E.to), this.mark) : null;
	}
	toJSON() {
		return {
			stepType: "addMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		};
	}
	static fromJSON(E, D) {
		if (typeof D.from != "number" || typeof D.to != "number") throw RangeError("Invalid input for AddMarkStep.fromJSON");
		return new e(D.from, D.to, E.markFromJSON(D.mark));
	}
};
Step.jsonID("addMark", AddMarkStep);
var RemoveMarkStep = class e extends Step {
	constructor(e, E, D) {
		super(), this.from = e, this.to = E, this.mark = D;
	}
	apply(e) {
		let E = e.slice(this.from, this.to), D = new Slice(mapFragment(E.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e), E.openStart, E.openEnd);
		return StepResult.fromReplace(e, this.from, this.to, D);
	}
	invert() {
		return new AddMarkStep(this.from, this.to, this.mark);
	}
	map(E) {
		let D = E.mapResult(this.from, 1), O = E.mapResult(this.to, -1);
		return D.deleted && O.deleted || D.pos >= O.pos ? null : new e(D.pos, O.pos, this.mark);
	}
	merge(E) {
		return E instanceof e && E.mark.eq(this.mark) && this.from <= E.to && this.to >= E.from ? new e(Math.min(this.from, E.from), Math.max(this.to, E.to), this.mark) : null;
	}
	toJSON() {
		return {
			stepType: "removeMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		};
	}
	static fromJSON(E, D) {
		if (typeof D.from != "number" || typeof D.to != "number") throw RangeError("Invalid input for RemoveMarkStep.fromJSON");
		return new e(D.from, D.to, E.markFromJSON(D.mark));
	}
};
Step.jsonID("removeMark", RemoveMarkStep);
var AddNodeMarkStep = class e extends Step {
	constructor(e, E) {
		super(), this.pos = e, this.mark = E;
	}
	apply(e) {
		let E = e.nodeAt(this.pos);
		if (!E) return StepResult.fail("No node at mark step's position");
		let D = E.type.create(E.attrs, null, this.mark.addToSet(E.marks));
		return StepResult.fromReplace(e, this.pos, this.pos + 1, new Slice(Fragment.from(D), 0, E.isLeaf ? 0 : 1));
	}
	invert(E) {
		let D = E.nodeAt(this.pos);
		if (D) {
			let E = this.mark.addToSet(D.marks);
			if (E.length == D.marks.length) {
				for (let O = 0; O < D.marks.length; O++) if (!D.marks[O].isInSet(E)) return new e(this.pos, D.marks[O]);
				return new e(this.pos, this.mark);
			}
		}
		return new RemoveNodeMarkStep(this.pos, this.mark);
	}
	map(E) {
		let D = E.mapResult(this.pos, 1);
		return D.deletedAfter ? null : new e(D.pos, this.mark);
	}
	toJSON() {
		return {
			stepType: "addNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		};
	}
	static fromJSON(E, D) {
		if (typeof D.pos != "number") throw RangeError("Invalid input for AddNodeMarkStep.fromJSON");
		return new e(D.pos, E.markFromJSON(D.mark));
	}
};
Step.jsonID("addNodeMark", AddNodeMarkStep);
var RemoveNodeMarkStep = class e extends Step {
	constructor(e, E) {
		super(), this.pos = e, this.mark = E;
	}
	apply(e) {
		let E = e.nodeAt(this.pos);
		if (!E) return StepResult.fail("No node at mark step's position");
		let D = E.type.create(E.attrs, null, this.mark.removeFromSet(E.marks));
		return StepResult.fromReplace(e, this.pos, this.pos + 1, new Slice(Fragment.from(D), 0, E.isLeaf ? 0 : 1));
	}
	invert(e) {
		let E = e.nodeAt(this.pos);
		return !E || !this.mark.isInSet(E.marks) ? this : new AddNodeMarkStep(this.pos, this.mark);
	}
	map(E) {
		let D = E.mapResult(this.pos, 1);
		return D.deletedAfter ? null : new e(D.pos, this.mark);
	}
	toJSON() {
		return {
			stepType: "removeNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		};
	}
	static fromJSON(E, D) {
		if (typeof D.pos != "number") throw RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
		return new e(D.pos, E.markFromJSON(D.mark));
	}
};
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
var ReplaceStep = class e extends Step {
	constructor(e, E, D, O = !1) {
		super(), this.from = e, this.to = E, this.slice = D, this.structure = O;
	}
	apply(e) {
		return this.structure && contentBetween(e, this.from, this.to) ? StepResult.fail("Structure replace would overwrite content") : StepResult.fromReplace(e, this.from, this.to, this.slice);
	}
	getMap() {
		return new StepMap([
			this.from,
			this.to - this.from,
			this.slice.size
		]);
	}
	invert(E) {
		return new e(this.from, this.from + this.slice.size, E.slice(this.from, this.to));
	}
	map(E) {
		let D = E.mapResult(this.to, -1), O = this.from == this.to && e.MAP_BIAS < 0 ? D : E.mapResult(this.from, 1);
		return O.deletedAcross && D.deletedAcross ? null : new e(O.pos, Math.max(O.pos, D.pos), this.slice, this.structure);
	}
	merge(E) {
		if (!(E instanceof e) || E.structure || this.structure) return null;
		if (this.from + this.slice.size == E.from && !this.slice.openEnd && !E.slice.openStart) {
			let D = this.slice.size + E.slice.size == 0 ? Slice.empty : new Slice(this.slice.content.append(E.slice.content), this.slice.openStart, E.slice.openEnd);
			return new e(this.from, this.to + (E.to - E.from), D, this.structure);
		} else if (E.to == this.from && !this.slice.openStart && !E.slice.openEnd) {
			let D = this.slice.size + E.slice.size == 0 ? Slice.empty : new Slice(E.slice.content.append(this.slice.content), E.slice.openStart, this.slice.openEnd);
			return new e(E.from, this.to, D, this.structure);
		} else return null;
	}
	toJSON() {
		let e = {
			stepType: "replace",
			from: this.from,
			to: this.to
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
	}
	static fromJSON(E, D) {
		if (typeof D.from != "number" || typeof D.to != "number") throw RangeError("Invalid input for ReplaceStep.fromJSON");
		return new e(D.from, D.to, Slice.fromJSON(E, D.slice), !!D.structure);
	}
};
ReplaceStep.MAP_BIAS = 1, Step.jsonID("replace", ReplaceStep);
var ReplaceAroundStep = class e extends Step {
	constructor(e, E, D, O, k, A, j = !1) {
		super(), this.from = e, this.to = E, this.gapFrom = D, this.gapTo = O, this.slice = k, this.insert = A, this.structure = j;
	}
	apply(e) {
		if (this.structure && (contentBetween(e, this.from, this.gapFrom) || contentBetween(e, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
		let E = e.slice(this.gapFrom, this.gapTo);
		if (E.openStart || E.openEnd) return StepResult.fail("Gap is not a flat range");
		let D = this.slice.insertAt(this.insert, E.content);
		return D ? StepResult.fromReplace(e, this.from, this.to, D) : StepResult.fail("Content does not fit in gap");
	}
	getMap() {
		return new StepMap([
			this.from,
			this.gapFrom - this.from,
			this.insert,
			this.gapTo,
			this.to - this.gapTo,
			this.slice.size - this.insert
		]);
	}
	invert(E) {
		let D = this.gapTo - this.gapFrom;
		return new e(this.from, this.from + this.slice.size + D, this.from + this.insert, this.from + this.insert + D, E.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
	}
	map(E) {
		let D = E.mapResult(this.from, 1), O = E.mapResult(this.to, -1), k = this.from == this.gapFrom ? D.pos : E.map(this.gapFrom, -1), A = this.to == this.gapTo ? O.pos : E.map(this.gapTo, 1);
		return D.deletedAcross && O.deletedAcross || k < D.pos || A > O.pos ? null : new e(D.pos, O.pos, k, A, this.slice, this.insert, this.structure);
	}
	toJSON() {
		let e = {
			stepType: "replaceAround",
			from: this.from,
			to: this.to,
			gapFrom: this.gapFrom,
			gapTo: this.gapTo,
			insert: this.insert
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
	}
	static fromJSON(E, D) {
		if (typeof D.from != "number" || typeof D.to != "number" || typeof D.gapFrom != "number" || typeof D.gapTo != "number" || typeof D.insert != "number") throw RangeError("Invalid input for ReplaceAroundStep.fromJSON");
		return new e(D.from, D.to, D.gapFrom, D.gapTo, Slice.fromJSON(E, D.slice), D.insert, !!D.structure);
	}
};
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(e, E, D) {
	let O = e.resolve(E), k = D - E, A = O.depth;
	for (; k > 0 && A > 0 && O.indexAfter(A) == O.node(A).childCount;) A--, k--;
	if (k > 0) {
		let e = O.node(A).maybeChild(O.indexAfter(A));
		for (; k > 0;) {
			if (!e || e.isLeaf) return !0;
			e = e.firstChild, k--;
		}
	}
	return !1;
}
function addMark(e, E, D, O) {
	let k = [], A = [], j, M;
	e.doc.nodesBetween(E, D, (e, N, P) => {
		if (!e.isInline) return;
		let F = e.marks;
		if (!O.isInSet(F) && P.type.allowsMarkType(O.type)) {
			let P = Math.max(N, E), I = Math.min(N + e.nodeSize, D), L = O.addToSet(F);
			for (let e = 0; e < F.length; e++) F[e].isInSet(L) || (j && j.to == P && j.mark.eq(F[e]) ? j.to = I : k.push(j = new RemoveMarkStep(P, I, F[e])));
			M && M.to == P ? M.to = I : A.push(M = new AddMarkStep(P, I, O));
		}
	}), k.forEach((E) => e.step(E)), A.forEach((E) => e.step(E));
}
function removeMark(e, E, D, O) {
	let k = [], A = 0;
	e.doc.nodesBetween(E, D, (e, j) => {
		if (!e.isInline) return;
		A++;
		let M = null;
		if (O instanceof MarkType) {
			let E = e.marks, D;
			for (; D = O.isInSet(E);) (M ||= []).push(D), E = D.removeFromSet(E);
		} else O ? O.isInSet(e.marks) && (M = [O]) : M = e.marks;
		if (M && M.length) {
			let O = Math.min(j + e.nodeSize, D);
			for (let e = 0; e < M.length; e++) {
				let D = M[e], N;
				for (let e = 0; e < k.length; e++) {
					let E = k[e];
					E.step == A - 1 && D.eq(k[e].style) && (N = E);
				}
				N ? (N.to = O, N.step = A) : k.push({
					style: D,
					from: Math.max(j, E),
					to: O,
					step: A
				});
			}
		}
	}), k.forEach((E) => e.step(new RemoveMarkStep(E.from, E.to, E.style)));
}
function clearIncompatible(e, E, D, O = D.contentMatch, k = !0) {
	let A = e.doc.nodeAt(E), j = [], M = E + 1;
	for (let E = 0; E < A.childCount; E++) {
		let N = A.child(E), P = M + N.nodeSize, F = O.matchType(N.type);
		if (!F) j.push(new ReplaceStep(M, P, Slice.empty));
		else {
			O = F;
			for (let E = 0; E < N.marks.length; E++) D.allowsMarkType(N.marks[E].type) || e.step(new RemoveMarkStep(M, P, N.marks[E]));
			if (k && N.isText && D.whitespace != "pre") {
				let e, E = /\r?\n|\r/g, O;
				for (; e = E.exec(N.text);) O ||= new Slice(Fragment.from(D.schema.text(" ", D.allowedMarks(N.marks))), 0, 0), j.push(new ReplaceStep(M + e.index, M + e.index + e[0].length, O));
			}
		}
		M = P;
	}
	if (!O.validEnd) {
		let E = O.fillBefore(Fragment.empty, !0);
		e.replace(M, M, new Slice(E, 0, 0));
	}
	for (let E = j.length - 1; E >= 0; E--) e.step(j[E]);
}
function canCut(e, E, D) {
	return (E == 0 || e.canReplace(E, e.childCount)) && (D == e.childCount || e.canReplace(0, D));
}
function liftTarget(e) {
	let E = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
	for (let D = e.depth, O = 0, k = 0;; --D) {
		let A = e.$from.node(D), j = e.$from.index(D) + O, M = e.$to.indexAfter(D) - k;
		if (D < e.depth && A.canReplace(j, M, E)) return D;
		if (D == 0 || A.type.spec.isolating || !canCut(A, j, M)) break;
		j && (O = 1), M < A.childCount && (k = 1);
	}
	return null;
}
function lift$2(e, E, D) {
	let { $from: O, $to: k, depth: A } = E, j = O.before(A + 1), M = k.after(A + 1), N = j, P = M, F = Fragment.empty, I = 0;
	for (let e = A, E = !1; e > D; e--) E || O.index(e) > 0 ? (E = !0, F = Fragment.from(O.node(e).copy(F)), I++) : N--;
	let L = Fragment.empty, R = 0;
	for (let e = A, E = !1; e > D; e--) E || k.after(e + 1) < k.end(e) ? (E = !0, L = Fragment.from(k.node(e).copy(L)), R++) : P++;
	e.step(new ReplaceAroundStep(N, P, j, M, new Slice(F.append(L), I, R), F.size - I, !0));
}
function findWrapping(e, E, D = null, O = e) {
	let k = findWrappingOutside(e, E), A = k && findWrappingInside(O, E);
	return A ? k.map(withAttrs).concat({
		type: E,
		attrs: D
	}).concat(A.map(withAttrs)) : null;
}
function withAttrs(e) {
	return {
		type: e,
		attrs: null
	};
}
function findWrappingOutside(e, E) {
	let { parent: D, startIndex: O, endIndex: k } = e, A = D.contentMatchAt(O).findWrapping(E);
	if (!A) return null;
	let j = A.length ? A[0] : E;
	return D.canReplaceWith(O, k, j) ? A : null;
}
function findWrappingInside(e, E) {
	let { parent: D, startIndex: O, endIndex: k } = e, A = D.child(O), j = E.contentMatch.findWrapping(A.type);
	if (!j) return null;
	let M = (j.length ? j[j.length - 1] : E).contentMatch;
	for (let e = O; M && e < k; e++) M = M.matchType(D.child(e).type);
	return !M || !M.validEnd ? null : j;
}
function wrap(e, E, D) {
	let O = Fragment.empty;
	for (let e = D.length - 1; e >= 0; e--) {
		if (O.size) {
			let E = D[e].type.contentMatch.matchFragment(O);
			if (!E || !E.validEnd) throw RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
		}
		O = Fragment.from(D[e].type.create(D[e].attrs, O));
	}
	let k = E.start, A = E.end;
	e.step(new ReplaceAroundStep(k, A, k, A, new Slice(O, 0, 0), D.length, !0));
}
function setBlockType$1(e, E, D, O, k) {
	if (!O.isTextblock) throw RangeError("Type given to setBlockType should be a textblock");
	let A = e.steps.length;
	e.doc.nodesBetween(E, D, (E, D) => {
		let j = typeof k == "function" ? k(E) : k;
		if (E.isTextblock && !E.hasMarkup(O, j) && canChangeType(e.doc, e.mapping.slice(A).map(D), O)) {
			let k = null;
			if (O.schema.linebreakReplacement) {
				let e = O.whitespace == "pre", E = !!O.contentMatch.matchType(O.schema.linebreakReplacement);
				e && !E ? k = !1 : !e && E && (k = !0);
			}
			k === !1 && replaceLinebreaks(e, E, D, A), clearIncompatible(e, e.mapping.slice(A).map(D, 1), O, void 0, k === null);
			let M = e.mapping.slice(A), N = M.map(D, 1), P = M.map(D + E.nodeSize, 1);
			return e.step(new ReplaceAroundStep(N, P, N + 1, P - 1, new Slice(Fragment.from(O.create(j, null, E.marks)), 0, 0), 1, !0)), k === !0 && replaceNewlines(e, E, D, A), !1;
		}
	});
}
function replaceNewlines(e, E, D, O) {
	E.forEach((k, A) => {
		if (k.isText) {
			let j, M = /\r?\n|\r/g;
			for (; j = M.exec(k.text);) {
				let k = e.mapping.slice(O).map(D + 1 + A + j.index);
				e.replaceWith(k, k + 1, E.type.schema.linebreakReplacement.create());
			}
		}
	});
}
function replaceLinebreaks(e, E, D, O) {
	E.forEach((k, A) => {
		if (k.type == k.type.schema.linebreakReplacement) {
			let k = e.mapping.slice(O).map(D + 1 + A);
			e.replaceWith(k, k + 1, E.type.schema.text("\n"));
		}
	});
}
function canChangeType(e, E, D) {
	let O = e.resolve(E), k = O.index();
	return O.parent.canReplaceWith(k, k + 1, D);
}
function setNodeMarkup(e, E, D, O, k) {
	let A = e.doc.nodeAt(E);
	if (!A) throw RangeError("No node at given position");
	D ||= A.type;
	let j = D.create(O, null, k || A.marks);
	if (A.isLeaf) return e.replaceWith(E, E + A.nodeSize, j);
	if (!D.validContent(A.content)) throw RangeError("Invalid content for node type " + D.name);
	e.step(new ReplaceAroundStep(E, E + A.nodeSize, E + 1, E + A.nodeSize - 1, new Slice(Fragment.from(j), 0, 0), 1, !0));
}
function canSplit(e, E, D = 1, O) {
	let k = e.resolve(E), A = k.depth - D, j = O && O[O.length - 1] || k.parent;
	if (A < 0 || k.parent.type.spec.isolating || !k.parent.canReplace(k.index(), k.parent.childCount) || !j.type.validContent(k.parent.content.cutByIndex(k.index(), k.parent.childCount))) return !1;
	for (let e = k.depth - 1, E = D - 2; e > A; e--, E--) {
		let D = k.node(e), A = k.index(e);
		if (D.type.spec.isolating) return !1;
		let j = D.content.cutByIndex(A, D.childCount), M = O && O[E + 1];
		M && (j = j.replaceChild(0, M.type.create(M.attrs)));
		let N = O && O[E] || D;
		if (!D.canReplace(A + 1, D.childCount) || !N.type.validContent(j)) return !1;
	}
	let M = k.indexAfter(A), N = O && O[0];
	return k.node(A).canReplaceWith(M, M, N ? N.type : k.node(A + 1).type);
}
function split(e, E, D = 1, O) {
	let k = e.doc.resolve(E), A = Fragment.empty, j = Fragment.empty;
	for (let e = k.depth, E = k.depth - D, M = D - 1; e > E; e--, M--) {
		A = Fragment.from(k.node(e).copy(A));
		let E = O && O[M];
		j = Fragment.from(E ? E.type.create(E.attrs, j) : k.node(e).copy(j));
	}
	e.step(new ReplaceStep(E, E, new Slice(A.append(j), D, D), !0));
}
function canJoin(e, E) {
	let D = e.resolve(E), O = D.index();
	return joinable(D.nodeBefore, D.nodeAfter) && D.parent.canReplace(O, O + 1);
}
function canAppendWithSubstitutedLinebreaks(e, E) {
	E.content.size || e.type.compatibleContent(E.type);
	let D = e.contentMatchAt(e.childCount), { linebreakReplacement: O } = e.type.schema;
	for (let k = 0; k < E.childCount; k++) {
		let A = E.child(k), j = A.type == O ? e.type.schema.nodes.text : A.type;
		if (D = D.matchType(j), !D || !e.type.allowsMarks(A.marks)) return !1;
	}
	return D.validEnd;
}
function joinable(e, E) {
	return !!(e && E && !e.isLeaf && canAppendWithSubstitutedLinebreaks(e, E));
}
function joinPoint(e, E, D = -1) {
	let O = e.resolve(E);
	for (let e = O.depth;; e--) {
		let k, A, j = O.index(e);
		if (e == O.depth ? (k = O.nodeBefore, A = O.nodeAfter) : D > 0 ? (k = O.node(e + 1), j++, A = O.node(e).maybeChild(j)) : (k = O.node(e).maybeChild(j - 1), A = O.node(e + 1)), k && !k.isTextblock && joinable(k, A) && O.node(e).canReplace(j, j + 1)) return E;
		if (e == 0) break;
		E = D < 0 ? O.before(e) : O.after(e);
	}
}
function join(e, E, D) {
	let O = null, { linebreakReplacement: k } = e.doc.type.schema, A = e.doc.resolve(E - D), j = A.node().type;
	if (k && j.inlineContent) {
		let e = j.whitespace == "pre", E = !!j.contentMatch.matchType(k);
		e && !E ? O = !1 : !e && E && (O = !0);
	}
	let M = e.steps.length;
	if (O === !1) {
		let O = e.doc.resolve(E + D);
		replaceLinebreaks(e, O.node(), O.before(), M);
	}
	j.inlineContent && clearIncompatible(e, E + D - 1, j, A.node().contentMatchAt(A.index()), O == null);
	let N = e.mapping.slice(M), P = N.map(E - D);
	if (e.step(new ReplaceStep(P, N.map(E + D, -1), Slice.empty, !0)), O === !0) {
		let E = e.doc.resolve(P);
		replaceNewlines(e, E.node(), E.before(), e.steps.length);
	}
	return e;
}
function insertPoint(e, E, D) {
	let O = e.resolve(E);
	if (O.parent.canReplaceWith(O.index(), O.index(), D)) return E;
	if (O.parentOffset == 0) for (let e = O.depth - 1; e >= 0; e--) {
		let E = O.index(e);
		if (O.node(e).canReplaceWith(E, E, D)) return O.before(e + 1);
		if (E > 0) return null;
	}
	if (O.parentOffset == O.parent.content.size) for (let e = O.depth - 1; e >= 0; e--) {
		let E = O.indexAfter(e);
		if (O.node(e).canReplaceWith(E, E, D)) return O.after(e + 1);
		if (E < O.node(e).childCount) return null;
	}
	return null;
}
function dropPoint(e, E, D) {
	let O = e.resolve(E);
	if (!D.content.size) return E;
	let k = D.content;
	for (let e = 0; e < D.openStart; e++) k = k.firstChild.content;
	for (let e = 1; e <= (D.openStart == 0 && D.size ? 2 : 1); e++) for (let E = O.depth; E >= 0; E--) {
		let D = E == O.depth ? 0 : O.pos <= (O.start(E + 1) + O.end(E + 1)) / 2 ? -1 : 1, A = O.index(E) + (D > 0 ? 1 : 0), j = O.node(E), M = !1;
		if (e == 1) M = j.canReplace(A, A, k);
		else {
			let e = j.contentMatchAt(A).findWrapping(k.firstChild.type);
			M = e && j.canReplaceWith(A, A, e[0]);
		}
		if (M) return D == 0 ? O.pos : D < 0 ? O.before(E + 1) : O.after(E + 1);
	}
	return null;
}
function replaceStep(e, E, D = E, O = Slice.empty) {
	if (E == D && !O.size) return null;
	let k = e.resolve(E), A = e.resolve(D);
	return fitsTrivially(k, A, O) ? new ReplaceStep(E, D, O) : new Fitter(k, A, O).fit();
}
function fitsTrivially(e, E, D) {
	return !D.openStart && !D.openEnd && e.start() == E.start() && e.parent.canReplace(e.index(), E.index(), D.content);
}
var Fitter = class {
	constructor(e, E, D) {
		this.$from = e, this.$to = E, this.unplaced = D, this.frontier = [], this.placed = Fragment.empty;
		for (let E = 0; E <= e.depth; E++) {
			let D = e.node(E);
			this.frontier.push({
				type: D.type,
				match: D.contentMatchAt(e.indexAfter(E))
			});
		}
		for (let E = e.depth; E > 0; E--) this.placed = Fragment.from(e.node(E).copy(this.placed));
	}
	get depth() {
		return this.frontier.length - 1;
	}
	fit() {
		for (; this.unplaced.size;) {
			let e = this.findFittable();
			e ? this.placeNodes(e) : this.openMore() || this.dropNode();
		}
		let e = this.mustMoveInline(), E = this.placed.size - this.depth - this.$from.depth, D = this.$from, O = this.close(e < 0 ? this.$to : D.doc.resolve(e));
		if (!O) return null;
		let k = this.placed, A = D.depth, j = O.depth;
		for (; A && j && k.childCount == 1;) k = k.firstChild.content, A--, j--;
		let M = new Slice(k, A, j);
		return e > -1 ? new ReplaceAroundStep(D.pos, e, this.$to.pos, this.$to.end(), M, E) : M.size || D.pos != this.$to.pos ? new ReplaceStep(D.pos, O.pos, M) : null;
	}
	findFittable() {
		let e = this.unplaced.openStart;
		for (let E = this.unplaced.content, D = 0, O = this.unplaced.openEnd; D < e; D++) {
			let k = E.firstChild;
			if (E.childCount > 1 && (O = 0), k.type.spec.isolating && O <= D) {
				e = D;
				break;
			}
			E = k.content;
		}
		for (let E = 1; E <= 2; E++) for (let D = E == 1 ? e : this.unplaced.openStart; D >= 0; D--) {
			let e, O = null;
			D ? (O = contentAt(this.unplaced.content, D - 1).firstChild, e = O.content) : e = this.unplaced.content;
			let k = e.firstChild;
			for (let e = this.depth; e >= 0; e--) {
				let { type: A, match: j } = this.frontier[e], M, N = null;
				if (E == 1 && (k ? j.matchType(k.type) || (N = j.fillBefore(Fragment.from(k), !1)) : O && A.compatibleContent(O.type))) return {
					sliceDepth: D,
					frontierDepth: e,
					parent: O,
					inject: N
				};
				if (E == 2 && k && (M = j.findWrapping(k.type))) return {
					sliceDepth: D,
					frontierDepth: e,
					parent: O,
					wrap: M
				};
				if (O && j.matchType(O.type)) break;
			}
		}
	}
	openMore() {
		let { content: e, openStart: E, openEnd: D } = this.unplaced, O = contentAt(e, E);
		return !O.childCount || O.firstChild.isLeaf ? !1 : (this.unplaced = new Slice(e, E + 1, Math.max(D, O.size + E >= e.size - D ? E + 1 : 0)), !0);
	}
	dropNode() {
		let { content: e, openStart: E, openEnd: D } = this.unplaced, O = contentAt(e, E);
		if (O.childCount <= 1 && E > 0) {
			let k = e.size - E <= E + O.size;
			this.unplaced = new Slice(dropFromFragment(e, E - 1, 1), E - 1, k ? E - 1 : D);
		} else this.unplaced = new Slice(dropFromFragment(e, E, 1), E, D);
	}
	placeNodes({ sliceDepth: e, frontierDepth: E, parent: D, inject: O, wrap: k }) {
		for (; this.depth > E;) this.closeFrontierNode();
		if (k) for (let e = 0; e < k.length; e++) this.openFrontierNode(k[e]);
		let A = this.unplaced, j = D ? D.content : A.content, M = A.openStart - e, N = 0, P = [], { match: F, type: I } = this.frontier[E];
		if (O) {
			for (let e = 0; e < O.childCount; e++) P.push(O.child(e));
			F = F.matchFragment(O);
		}
		let L = j.size + e - (A.content.size - A.openEnd);
		for (; N < j.childCount;) {
			let e = j.child(N), E = F.matchType(e.type);
			if (!E) break;
			N++, (N > 1 || M == 0 || e.content.size) && (F = E, P.push(closeNodeStart(e.mark(I.allowedMarks(e.marks)), N == 1 ? M : 0, N == j.childCount ? L : -1)));
		}
		let R = N == j.childCount;
		R || (L = -1), this.placed = addToFragment(this.placed, E, Fragment.from(P)), this.frontier[E].match = F, R && L < 0 && D && D.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
		for (let e = 0, E = j; e < L; e++) {
			let e = E.lastChild;
			this.frontier.push({
				type: e.type,
				match: e.contentMatchAt(e.childCount)
			}), E = e.content;
		}
		this.unplaced = R ? e == 0 ? Slice.empty : new Slice(dropFromFragment(A.content, e - 1, 1), e - 1, L < 0 ? A.openEnd : e - 1) : new Slice(dropFromFragment(A.content, e, N), A.openStart, A.openEnd);
	}
	mustMoveInline() {
		if (!this.$to.parent.isTextblock) return -1;
		let e = this.frontier[this.depth], E;
		if (!e.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (E = this.findCloseLevel(this.$to)) && E.depth == this.depth) return -1;
		let { depth: D } = this.$to, O = this.$to.after(D);
		for (; D > 1 && O == this.$to.end(--D);) ++O;
		return O;
	}
	findCloseLevel(e) {
		scan: for (let E = Math.min(this.depth, e.depth); E >= 0; E--) {
			let { match: D, type: O } = this.frontier[E], k = E < e.depth && e.end(E + 1) == e.pos + (e.depth - (E + 1)), A = contentAfterFits(e, E, O, D, k);
			if (A) {
				for (let D = E - 1; D >= 0; D--) {
					let { match: E, type: O } = this.frontier[D], k = contentAfterFits(e, D, O, E, !0);
					if (!k || k.childCount) continue scan;
				}
				return {
					depth: E,
					fit: A,
					move: k ? e.doc.resolve(e.after(E + 1)) : e
				};
			}
		}
	}
	close(e) {
		let E = this.findCloseLevel(e);
		if (!E) return null;
		for (; this.depth > E.depth;) this.closeFrontierNode();
		E.fit.childCount && (this.placed = addToFragment(this.placed, E.depth, E.fit)), e = E.move;
		for (let D = E.depth + 1; D <= e.depth; D++) {
			let E = e.node(D), O = E.type.contentMatch.fillBefore(E.content, !0, e.index(D));
			this.openFrontierNode(E.type, E.attrs, O);
		}
		return e;
	}
	openFrontierNode(e, E = null, D) {
		let O = this.frontier[this.depth];
		O.match = O.match.matchType(e), this.placed = addToFragment(this.placed, this.depth, Fragment.from(e.create(E, D))), this.frontier.push({
			type: e,
			match: e.contentMatch
		});
	}
	closeFrontierNode() {
		let e = this.frontier.pop().match.fillBefore(Fragment.empty, !0);
		e.childCount && (this.placed = addToFragment(this.placed, this.frontier.length, e));
	}
};
function dropFromFragment(e, E, D) {
	return E == 0 ? e.cutByIndex(D, e.childCount) : e.replaceChild(0, e.firstChild.copy(dropFromFragment(e.firstChild.content, E - 1, D)));
}
function addToFragment(e, E, D) {
	return E == 0 ? e.append(D) : e.replaceChild(e.childCount - 1, e.lastChild.copy(addToFragment(e.lastChild.content, E - 1, D)));
}
function contentAt(e, E) {
	for (let D = 0; D < E; D++) e = e.firstChild.content;
	return e;
}
function closeNodeStart(e, E, D) {
	if (E <= 0) return e;
	let O = e.content;
	return E > 1 && (O = O.replaceChild(0, closeNodeStart(O.firstChild, E - 1, O.childCount == 1 ? D - 1 : 0))), E > 0 && (O = e.type.contentMatch.fillBefore(O).append(O), D <= 0 && (O = O.append(e.type.contentMatch.matchFragment(O).fillBefore(Fragment.empty, !0)))), e.copy(O);
}
function contentAfterFits(e, E, D, O, k) {
	let A = e.node(E), j = k ? e.indexAfter(E) : e.index(E);
	if (j == A.childCount && !D.compatibleContent(A.type)) return null;
	let M = O.fillBefore(A.content, !0, j);
	return M && !invalidMarks(D, A.content, j) ? M : null;
}
function invalidMarks(e, E, D) {
	for (let O = D; O < E.childCount; O++) if (!e.allowsMarks(E.child(O).marks)) return !0;
	return !1;
}
function definesContent(e) {
	return e.spec.defining || e.spec.definingForContent;
}
function replaceRange(e, E, D, O) {
	if (!O.size) return e.deleteRange(E, D);
	let k = e.doc.resolve(E), A = e.doc.resolve(D);
	if (fitsTrivially(k, A, O)) return e.step(new ReplaceStep(E, D, O));
	let j = coveredDepths(k, A);
	j[j.length - 1] == 0 && j.pop();
	let M = -(k.depth + 1);
	j.unshift(M);
	for (let e = k.depth, E = k.pos - 1; e > 0; e--, E--) {
		let D = k.node(e).type.spec;
		if (D.defining || D.definingAsContext || D.isolating) break;
		j.indexOf(e) > -1 ? M = e : k.before(e) == E && j.splice(1, 0, -e);
	}
	let N = j.indexOf(M), P = [], F = O.openStart;
	for (let e = O.content, E = 0;; E++) {
		let D = e.firstChild;
		if (P.push(D), E == O.openStart) break;
		e = D.content;
	}
	for (let e = F - 1; e >= 0; e--) {
		let E = P[e], D = definesContent(E.type);
		if (D && !E.sameMarkup(k.node(Math.abs(M) - 1))) F = e;
		else if (D || !E.type.isTextblock) break;
	}
	for (let E = O.openStart; E >= 0; E--) {
		let M = (E + F + 1) % (O.openStart + 1), I = P[M];
		if (I) for (let E = 0; E < j.length; E++) {
			let P = j[(E + N) % j.length], F = !0;
			P < 0 && (F = !1, P = -P);
			let L = k.node(P - 1), R = k.index(P - 1);
			if (L.canReplaceWith(R, R, I.type, I.marks)) return e.replace(k.before(P), F ? A.after(P) : D, new Slice(closeFragment(O.content, 0, O.openStart, M), M, O.openEnd));
		}
	}
	let I = e.steps.length;
	for (let M = j.length - 1; M >= 0 && (e.replace(E, D, O), !(e.steps.length > I)); M--) {
		let e = j[M];
		e < 0 || (E = k.before(e), D = A.after(e));
	}
}
function closeFragment(e, E, D, O, k) {
	if (E < D) {
		let k = e.firstChild;
		e = e.replaceChild(0, k.copy(closeFragment(k.content, E + 1, D, O, k)));
	}
	if (E > O) {
		let E = k.contentMatchAt(0), D = E.fillBefore(e).append(e);
		e = D.append(E.matchFragment(D).fillBefore(Fragment.empty, !0));
	}
	return e;
}
function replaceRangeWith(e, E, D, O) {
	if (!O.isInline && E == D && e.doc.resolve(E).parent.content.size) {
		let k = insertPoint(e.doc, E, O.type);
		k != null && (E = D = k);
	}
	e.replaceRange(E, D, new Slice(Fragment.from(O), 0, 0));
}
function deleteRange$1(e, E, D) {
	let O = e.doc.resolve(E), k = e.doc.resolve(D);
	if (O.parent.isTextblock && k.parent.isTextblock && O.start() != k.start() && O.parentOffset == 0 && k.parentOffset == 0) {
		let A = O.sharedDepth(D), j = !1;
		for (let e = O.depth; e > A; e--) O.node(e).type.spec.isolating && (j = !0);
		for (let e = k.depth; e > A; e--) k.node(e).type.spec.isolating && (j = !0);
		if (!j) {
			for (let e = O.depth; e > 0 && E == O.start(e); e--) E = O.before(e);
			for (let e = k.depth; e > 0 && D == k.start(e); e--) D = k.before(e);
			O = e.doc.resolve(E), k = e.doc.resolve(D);
		}
	}
	let A = coveredDepths(O, k);
	for (let E = 0; E < A.length; E++) {
		let D = A[E], j = E == A.length - 1;
		if (j && D == 0 || O.node(D).type.contentMatch.validEnd) return e.delete(O.start(D), k.end(D));
		if (D > 0 && (j || O.node(D - 1).canReplace(O.index(D - 1), k.indexAfter(D - 1)))) return e.delete(O.before(D), k.after(D));
	}
	for (let A = 1; A <= O.depth && A <= k.depth; A++) if (E - O.start(A) == O.depth - A && D > O.end(A) && k.end(A) - D != k.depth - A && O.start(A - 1) == k.start(A - 1) && O.node(A - 1).canReplace(O.index(A - 1), k.index(A - 1))) return e.delete(O.before(A), D);
	e.delete(E, D);
}
function coveredDepths(e, E) {
	let D = [], O = Math.min(e.depth, E.depth);
	for (let k = O; k >= 0; k--) {
		let O = e.start(k);
		if (O < e.pos - (e.depth - k) || E.end(k) > E.pos + (E.depth - k) || e.node(k).type.spec.isolating || E.node(k).type.spec.isolating) break;
		(O == E.start(k) || k == e.depth && k == E.depth && e.parent.inlineContent && E.parent.inlineContent && k && E.start(k - 1) == O - 1) && D.push(k);
	}
	return D;
}
var AttrStep = class e extends Step {
	constructor(e, E, D) {
		super(), this.pos = e, this.attr = E, this.value = D;
	}
	apply(e) {
		let E = e.nodeAt(this.pos);
		if (!E) return StepResult.fail("No node at attribute step's position");
		let D = Object.create(null);
		for (let e in E.attrs) D[e] = E.attrs[e];
		D[this.attr] = this.value;
		let O = E.type.create(D, null, E.marks);
		return StepResult.fromReplace(e, this.pos, this.pos + 1, new Slice(Fragment.from(O), 0, E.isLeaf ? 0 : 1));
	}
	getMap() {
		return StepMap.empty;
	}
	invert(E) {
		return new e(this.pos, this.attr, E.nodeAt(this.pos).attrs[this.attr]);
	}
	map(E) {
		let D = E.mapResult(this.pos, 1);
		return D.deletedAfter ? null : new e(D.pos, this.attr, this.value);
	}
	toJSON() {
		return {
			stepType: "attr",
			pos: this.pos,
			attr: this.attr,
			value: this.value
		};
	}
	static fromJSON(E, D) {
		if (typeof D.pos != "number" || typeof D.attr != "string") throw RangeError("Invalid input for AttrStep.fromJSON");
		return new e(D.pos, D.attr, D.value);
	}
};
Step.jsonID("attr", AttrStep);
var DocAttrStep = class e extends Step {
	constructor(e, E) {
		super(), this.attr = e, this.value = E;
	}
	apply(e) {
		let E = Object.create(null);
		for (let D in e.attrs) E[D] = e.attrs[D];
		E[this.attr] = this.value;
		let D = e.type.create(E, e.content, e.marks);
		return StepResult.ok(D);
	}
	getMap() {
		return StepMap.empty;
	}
	invert(E) {
		return new e(this.attr, E.attrs[this.attr]);
	}
	map(e) {
		return this;
	}
	toJSON() {
		return {
			stepType: "docAttr",
			attr: this.attr,
			value: this.value
		};
	}
	static fromJSON(E, D) {
		if (typeof D.attr != "string") throw RangeError("Invalid input for DocAttrStep.fromJSON");
		return new e(D.attr, D.value);
	}
};
Step.jsonID("docAttr", DocAttrStep);
var TransformError = class extends Error {};
TransformError = function e(E) {
	let D = Error.call(this, E);
	return D.__proto__ = e.prototype, D;
}, TransformError.prototype = Object.create(Error.prototype), TransformError.prototype.constructor = TransformError, TransformError.prototype.name = "TransformError";
var Transform = class {
	constructor(e) {
		this.doc = e, this.steps = [], this.docs = [], this.mapping = new Mapping();
	}
	get before() {
		return this.docs.length ? this.docs[0] : this.doc;
	}
	step(e) {
		let E = this.maybeStep(e);
		if (E.failed) throw new TransformError(E.failed);
		return this;
	}
	maybeStep(e) {
		let E = e.apply(this.doc);
		return E.failed || this.addStep(e, E.doc), E;
	}
	get docChanged() {
		return this.steps.length > 0;
	}
	changedRange() {
		let e = 1e9, E = -1e9;
		for (let D = 0; D < this.mapping.maps.length; D++) {
			let O = this.mapping.maps[D];
			D && (e = O.map(e, 1), E = O.map(E, -1)), O.forEach((D, O, k, A) => {
				e = Math.min(e, k), E = Math.max(E, A);
			});
		}
		return e == 1e9 ? null : {
			from: e,
			to: E
		};
	}
	addStep(e, E) {
		this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = E;
	}
	replace(e, E = e, D = Slice.empty) {
		let O = replaceStep(this.doc, e, E, D);
		return O && this.step(O), this;
	}
	replaceWith(e, E, D) {
		return this.replace(e, E, new Slice(Fragment.from(D), 0, 0));
	}
	delete(e, E) {
		return this.replace(e, E, Slice.empty);
	}
	insert(e, E) {
		return this.replaceWith(e, e, E);
	}
	replaceRange(e, E, D) {
		return replaceRange(this, e, E, D), this;
	}
	replaceRangeWith(e, E, D) {
		return replaceRangeWith(this, e, E, D), this;
	}
	deleteRange(e, E) {
		return deleteRange$1(this, e, E), this;
	}
	lift(e, E) {
		return lift$2(this, e, E), this;
	}
	join(e, E = 1) {
		return join(this, e, E), this;
	}
	wrap(e, E) {
		return wrap(this, e, E), this;
	}
	setBlockType(e, E = e, D, O = null) {
		return setBlockType$1(this, e, E, D, O), this;
	}
	setNodeMarkup(e, E, D = null, O) {
		return setNodeMarkup(this, e, E, D, O), this;
	}
	setNodeAttribute(e, E, D) {
		return this.step(new AttrStep(e, E, D)), this;
	}
	setDocAttribute(e, E) {
		return this.step(new DocAttrStep(e, E)), this;
	}
	addNodeMark(e, E) {
		return this.step(new AddNodeMarkStep(e, E)), this;
	}
	removeNodeMark(e, E) {
		let D = this.doc.nodeAt(e);
		if (!D) throw RangeError("No node at position " + e);
		if (E instanceof Mark$1) E.isInSet(D.marks) && this.step(new RemoveNodeMarkStep(e, E));
		else {
			let O = D.marks, k, A = [];
			for (; k = E.isInSet(O);) A.push(new RemoveNodeMarkStep(e, k)), O = k.removeFromSet(O);
			for (let e = A.length - 1; e >= 0; e--) this.step(A[e]);
		}
		return this;
	}
	split(e, E = 1, D) {
		return split(this, e, E, D), this;
	}
	addMark(e, E, D) {
		return addMark(this, e, E, D), this;
	}
	removeMark(e, E, D) {
		return removeMark(this, e, E, D), this;
	}
	clearIncompatible(e, E, D) {
		return clearIncompatible(this, e, E, D), this;
	}
}, classesById = Object.create(null), Selection$1 = class {
	constructor(e, E, D) {
		this.$anchor = e, this.$head = E, this.ranges = D || [new SelectionRange(e.min(E), e.max(E))];
	}
	get anchor() {
		return this.$anchor.pos;
	}
	get head() {
		return this.$head.pos;
	}
	get from() {
		return this.$from.pos;
	}
	get to() {
		return this.$to.pos;
	}
	get $from() {
		return this.ranges[0].$from;
	}
	get $to() {
		return this.ranges[0].$to;
	}
	get empty() {
		let e = this.ranges;
		for (let E = 0; E < e.length; E++) if (e[E].$from.pos != e[E].$to.pos) return !1;
		return !0;
	}
	content() {
		return this.$from.doc.slice(this.from, this.to, !0);
	}
	replace(e, E = Slice.empty) {
		let D = E.content.lastChild, O = null;
		for (let e = 0; e < E.openEnd; e++) O = D, D = D.lastChild;
		let k = e.steps.length, A = this.ranges;
		for (let j = 0; j < A.length; j++) {
			let { $from: M, $to: N } = A[j], P = e.mapping.slice(k);
			e.replaceRange(P.map(M.pos), P.map(N.pos), j ? Slice.empty : E), j == 0 && selectionToInsertionEnd$1(e, k, (D ? D.isInline : O && O.isTextblock) ? -1 : 1);
		}
	}
	replaceWith(e, E) {
		let D = e.steps.length, O = this.ranges;
		for (let k = 0; k < O.length; k++) {
			let { $from: A, $to: j } = O[k], M = e.mapping.slice(D), N = M.map(A.pos), P = M.map(j.pos);
			k ? e.deleteRange(N, P) : (e.replaceRangeWith(N, P, E), selectionToInsertionEnd$1(e, D, E.isInline ? -1 : 1));
		}
	}
	static findFrom(e, E, D = !1) {
		let O = e.parent.inlineContent ? new TextSelection(e) : findSelectionIn(e.node(0), e.parent, e.pos, e.index(), E, D);
		if (O) return O;
		for (let O = e.depth - 1; O >= 0; O--) {
			let k = E < 0 ? findSelectionIn(e.node(0), e.node(O), e.before(O + 1), e.index(O), E, D) : findSelectionIn(e.node(0), e.node(O), e.after(O + 1), e.index(O) + 1, E, D);
			if (k) return k;
		}
		return null;
	}
	static near(e, E = 1) {
		return this.findFrom(e, E) || this.findFrom(e, -E) || new AllSelection(e.node(0));
	}
	static atStart(e) {
		return findSelectionIn(e, e, 0, 0, 1) || new AllSelection(e);
	}
	static atEnd(e) {
		return findSelectionIn(e, e, e.content.size, e.childCount, -1) || new AllSelection(e);
	}
	static fromJSON(e, E) {
		if (!E || !E.type) throw RangeError("Invalid input for Selection.fromJSON");
		let D = classesById[E.type];
		if (!D) throw RangeError(`No selection type ${E.type} defined`);
		return D.fromJSON(e, E);
	}
	static jsonID(e, E) {
		if (e in classesById) throw RangeError("Duplicate use of selection JSON ID " + e);
		return classesById[e] = E, E.prototype.jsonID = e, E;
	}
	getBookmark() {
		return TextSelection.between(this.$anchor, this.$head).getBookmark();
	}
};
Selection$1.prototype.visible = !0;
var SelectionRange = class {
	constructor(e, E) {
		this.$from = e, this.$to = E;
	}
}, warnedAboutTextSelection = !1;
function checkTextSelection(e) {
	!warnedAboutTextSelection && !e.parent.inlineContent && (warnedAboutTextSelection = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + e.parent.type.name + ")"));
}
var TextSelection = class e extends Selection$1 {
	constructor(e, E = e) {
		checkTextSelection(e), checkTextSelection(E), super(e, E);
	}
	get $cursor() {
		return this.$anchor.pos == this.$head.pos ? this.$head : null;
	}
	map(E, D) {
		let O = E.resolve(D.map(this.head));
		if (!O.parent.inlineContent) return Selection$1.near(O);
		let k = E.resolve(D.map(this.anchor));
		return new e(k.parent.inlineContent ? k : O, O);
	}
	replace(e, E = Slice.empty) {
		if (super.replace(e, E), E == Slice.empty) {
			let E = this.$from.marksAcross(this.$to);
			E && e.ensureMarks(E);
		}
	}
	eq(E) {
		return E instanceof e && E.anchor == this.anchor && E.head == this.head;
	}
	getBookmark() {
		return new TextBookmark(this.anchor, this.head);
	}
	toJSON() {
		return {
			type: "text",
			anchor: this.anchor,
			head: this.head
		};
	}
	static fromJSON(E, D) {
		if (typeof D.anchor != "number" || typeof D.head != "number") throw RangeError("Invalid input for TextSelection.fromJSON");
		return new e(E.resolve(D.anchor), E.resolve(D.head));
	}
	static create(e, E, D = E) {
		let O = e.resolve(E);
		return new this(O, D == E ? O : e.resolve(D));
	}
	static between(E, D, O) {
		let k = E.pos - D.pos;
		if ((!O || k) && (O = k >= 0 ? 1 : -1), !D.parent.inlineContent) {
			let e = Selection$1.findFrom(D, O, !0) || Selection$1.findFrom(D, -O, !0);
			if (e) D = e.$head;
			else return Selection$1.near(D, O);
		}
		return E.parent.inlineContent || (k == 0 ? E = D : (E = (Selection$1.findFrom(E, -O, !0) || Selection$1.findFrom(E, O, !0)).$anchor, E.pos < D.pos != k < 0 && (E = D))), new e(E, D);
	}
};
Selection$1.jsonID("text", TextSelection);
var TextBookmark = class e {
	constructor(e, E) {
		this.anchor = e, this.head = E;
	}
	map(E) {
		return new e(E.map(this.anchor), E.map(this.head));
	}
	resolve(e) {
		return TextSelection.between(e.resolve(this.anchor), e.resolve(this.head));
	}
}, NodeSelection = class e extends Selection$1 {
	constructor(e) {
		let E = e.nodeAfter, D = e.node(0).resolve(e.pos + E.nodeSize);
		super(e, D), this.node = E;
	}
	map(E, D) {
		let { deleted: O, pos: k } = D.mapResult(this.anchor), A = E.resolve(k);
		return O ? Selection$1.near(A) : new e(A);
	}
	content() {
		return new Slice(Fragment.from(this.node), 0, 0);
	}
	eq(E) {
		return E instanceof e && E.anchor == this.anchor;
	}
	toJSON() {
		return {
			type: "node",
			anchor: this.anchor
		};
	}
	getBookmark() {
		return new NodeBookmark(this.anchor);
	}
	static fromJSON(E, D) {
		if (typeof D.anchor != "number") throw RangeError("Invalid input for NodeSelection.fromJSON");
		return new e(E.resolve(D.anchor));
	}
	static create(E, D) {
		return new e(E.resolve(D));
	}
	static isSelectable(e) {
		return !e.isText && e.type.spec.selectable !== !1;
	}
};
NodeSelection.prototype.visible = !1, Selection$1.jsonID("node", NodeSelection);
var NodeBookmark = class e {
	constructor(e) {
		this.anchor = e;
	}
	map(E) {
		let { deleted: D, pos: O } = E.mapResult(this.anchor);
		return D ? new TextBookmark(O, O) : new e(O);
	}
	resolve(e) {
		let E = e.resolve(this.anchor), D = E.nodeAfter;
		return D && NodeSelection.isSelectable(D) ? new NodeSelection(E) : Selection$1.near(E);
	}
}, AllSelection = class e extends Selection$1 {
	constructor(e) {
		super(e.resolve(0), e.resolve(e.content.size));
	}
	replace(e, E = Slice.empty) {
		if (E == Slice.empty) {
			e.delete(0, e.doc.content.size);
			let E = Selection$1.atStart(e.doc);
			E.eq(e.selection) || e.setSelection(E);
		} else super.replace(e, E);
	}
	toJSON() {
		return { type: "all" };
	}
	static fromJSON(E) {
		return new e(E);
	}
	map(E) {
		return new e(E);
	}
	eq(E) {
		return E instanceof e;
	}
	getBookmark() {
		return AllBookmark;
	}
};
Selection$1.jsonID("all", AllSelection);
var AllBookmark = {
	map() {
		return this;
	},
	resolve(e) {
		return new AllSelection(e);
	}
};
function findSelectionIn(e, E, D, O, k, A = !1) {
	if (E.inlineContent) return TextSelection.create(e, D);
	for (let j = O - (k > 0 ? 0 : 1); k > 0 ? j < E.childCount : j >= 0; j += k) {
		let O = E.child(j);
		if (O.isAtom) {
			if (!A && NodeSelection.isSelectable(O)) return NodeSelection.create(e, D - (k < 0 ? O.nodeSize : 0));
		} else {
			let E = findSelectionIn(e, O, D + k, k < 0 ? O.childCount : 0, k, A);
			if (E) return E;
		}
		D += O.nodeSize * k;
	}
	return null;
}
function selectionToInsertionEnd$1(e, E, D) {
	let O = e.steps.length - 1;
	if (O < E) return;
	let k = e.steps[O];
	if (!(k instanceof ReplaceStep || k instanceof ReplaceAroundStep)) return;
	let A = e.mapping.maps[O], j;
	A.forEach((e, E, D, O) => {
		j ??= O;
	}), e.setSelection(Selection$1.near(e.doc.resolve(j), D));
}
var UPDATED_SEL = 1, UPDATED_MARKS = 2, UPDATED_SCROLL = 4, Transaction = class extends Transform {
	constructor(e) {
		super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
	}
	get selection() {
		return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
	}
	setSelection(e) {
		if (e.$from.doc != this.doc) throw RangeError("Selection passed to setSelection must point at the current document");
		return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS, this.storedMarks = null, this;
	}
	get selectionSet() {
		return (this.updated & UPDATED_SEL) > 0;
	}
	setStoredMarks(e) {
		return this.storedMarks = e, this.updated |= UPDATED_MARKS, this;
	}
	ensureMarks(e) {
		return Mark$1.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
	}
	addStoredMark(e) {
		return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
	}
	removeStoredMark(e) {
		return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
	}
	get storedMarksSet() {
		return (this.updated & UPDATED_MARKS) > 0;
	}
	addStep(e, E) {
		super.addStep(e, E), this.updated &= ~UPDATED_MARKS, this.storedMarks = null;
	}
	setTime(e) {
		return this.time = e, this;
	}
	replaceSelection(e) {
		return this.selection.replace(this, e), this;
	}
	replaceSelectionWith(e, E = !0) {
		let D = this.selection;
		return E && (e = e.mark(this.storedMarks || (D.empty ? D.$from.marks() : D.$from.marksAcross(D.$to) || Mark$1.none))), D.replaceWith(this, e), this;
	}
	deleteSelection() {
		return this.selection.replace(this), this;
	}
	insertText(e, E, D) {
		let O = this.doc.type.schema;
		if (E == null) return e ? this.replaceSelectionWith(O.text(e), !0) : this.deleteSelection();
		{
			if (D ??= E, !e) return this.deleteRange(E, D);
			let k = this.storedMarks;
			if (!k) {
				let e = this.doc.resolve(E);
				k = D == E ? e.marks() : e.marksAcross(this.doc.resolve(D));
			}
			return this.replaceRangeWith(E, D, O.text(e, k)), !this.selection.empty && this.selection.to == E + e.length && this.setSelection(Selection$1.near(this.selection.$to)), this;
		}
	}
	setMeta(e, E) {
		return this.meta[typeof e == "string" ? e : e.key] = E, this;
	}
	getMeta(e) {
		return this.meta[typeof e == "string" ? e : e.key];
	}
	get isGeneric() {
		for (let e in this.meta) return !1;
		return !0;
	}
	scrollIntoView() {
		return this.updated |= UPDATED_SCROLL, this;
	}
	get scrolledIntoView() {
		return (this.updated & UPDATED_SCROLL) > 0;
	}
};
function bind(e, E) {
	return !E || !e ? e : e.bind(E);
}
var FieldDesc = class {
	constructor(e, E, D) {
		this.name = e, this.init = bind(E.init, D), this.apply = bind(E.apply, D);
	}
}, baseFields = [
	new FieldDesc("doc", {
		init(e) {
			return e.doc || e.schema.topNodeType.createAndFill();
		},
		apply(e) {
			return e.doc;
		}
	}),
	new FieldDesc("selection", {
		init(e, E) {
			return e.selection || Selection$1.atStart(E.doc);
		},
		apply(e) {
			return e.selection;
		}
	}),
	new FieldDesc("storedMarks", {
		init(e) {
			return e.storedMarks || null;
		},
		apply(e, E, D, O) {
			return O.selection.$cursor ? e.storedMarks : null;
		}
	}),
	new FieldDesc("scrollToSelection", {
		init() {
			return 0;
		},
		apply(e, E) {
			return e.scrolledIntoView ? E + 1 : E;
		}
	})
], Configuration = class {
	constructor(e, E) {
		this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = baseFields.slice(), E && E.forEach((e) => {
			if (this.pluginsByKey[e.key]) throw RangeError("Adding different instances of a keyed plugin (" + e.key + ")");
			this.plugins.push(e), this.pluginsByKey[e.key] = e, e.spec.state && this.fields.push(new FieldDesc(e.key, e.spec.state, e));
		});
	}
}, EditorState = class e {
	constructor(e) {
		this.config = e;
	}
	get schema() {
		return this.config.schema;
	}
	get plugins() {
		return this.config.plugins;
	}
	apply(e) {
		return this.applyTransaction(e).state;
	}
	filterTransaction(e, E = -1) {
		for (let D = 0; D < this.config.plugins.length; D++) if (D != E) {
			let E = this.config.plugins[D];
			if (E.spec.filterTransaction && !E.spec.filterTransaction.call(E, e, this)) return !1;
		}
		return !0;
	}
	applyTransaction(e) {
		if (!this.filterTransaction(e)) return {
			state: this,
			transactions: []
		};
		let E = [e], D = this.applyInner(e), O = null;
		for (;;) {
			let k = !1;
			for (let A = 0; A < this.config.plugins.length; A++) {
				let j = this.config.plugins[A];
				if (j.spec.appendTransaction) {
					let M = O ? O[A].n : 0, N = O ? O[A].state : this, P = M < E.length && j.spec.appendTransaction.call(j, M ? E.slice(M) : E, N, D);
					if (P && D.filterTransaction(P, A)) {
						if (P.setMeta("appendedTransaction", e), !O) {
							O = [];
							for (let e = 0; e < this.config.plugins.length; e++) O.push(e < A ? {
								state: D,
								n: E.length
							} : {
								state: this,
								n: 0
							});
						}
						E.push(P), D = D.applyInner(P), k = !0;
					}
					O && (O[A] = {
						state: D,
						n: E.length
					});
				}
			}
			if (!k) return {
				state: D,
				transactions: E
			};
		}
	}
	applyInner(E) {
		if (!E.before.eq(this.doc)) throw RangeError("Applying a mismatched transaction");
		let D = new e(this.config), O = this.config.fields;
		for (let e = 0; e < O.length; e++) {
			let k = O[e];
			D[k.name] = k.apply(E, this[k.name], this, D);
		}
		return D;
	}
	get tr() {
		return new Transaction(this);
	}
	static create(E) {
		let D = new Configuration(E.doc ? E.doc.type.schema : E.schema, E.plugins), O = new e(D);
		for (let e = 0; e < D.fields.length; e++) O[D.fields[e].name] = D.fields[e].init(E, O);
		return O;
	}
	reconfigure(E) {
		let D = new Configuration(this.schema, E.plugins), O = D.fields, k = new e(D);
		for (let e = 0; e < O.length; e++) {
			let D = O[e].name;
			k[D] = this.hasOwnProperty(D) ? this[D] : O[e].init(E, k);
		}
		return k;
	}
	toJSON(e) {
		let E = {
			doc: this.doc.toJSON(),
			selection: this.selection.toJSON()
		};
		if (this.storedMarks && (E.storedMarks = this.storedMarks.map((e) => e.toJSON())), e && typeof e == "object") for (let D in e) {
			if (D == "doc" || D == "selection") throw RangeError("The JSON fields `doc` and `selection` are reserved");
			let O = e[D], k = O.spec.state;
			k && k.toJSON && (E[D] = k.toJSON.call(O, this[O.key]));
		}
		return E;
	}
	static fromJSON(E, D, O) {
		if (!D) throw RangeError("Invalid input for EditorState.fromJSON");
		if (!E.schema) throw RangeError("Required config field 'schema' missing");
		let k = new Configuration(E.schema, E.plugins), A = new e(k);
		return k.fields.forEach((e) => {
			if (e.name == "doc") A.doc = Node$1.fromJSON(E.schema, D.doc);
			else if (e.name == "selection") A.selection = Selection$1.fromJSON(A.doc, D.selection);
			else if (e.name == "storedMarks") D.storedMarks && (A.storedMarks = D.storedMarks.map(E.schema.markFromJSON));
			else {
				if (O) for (let k in O) {
					let j = O[k], M = j.spec.state;
					if (j.key == e.name && M && M.fromJSON && Object.prototype.hasOwnProperty.call(D, k)) {
						A[e.name] = M.fromJSON.call(j, E, D[k], A);
						return;
					}
				}
				A[e.name] = e.init(E, A);
			}
		}), A;
	}
};
function bindProps(e, E, D) {
	for (let O in e) {
		let k = e[O];
		k instanceof Function ? k = k.bind(E) : O == "handleDOMEvents" && (k = bindProps(k, E, {})), D[O] = k;
	}
	return D;
}
var Plugin = class {
	constructor(e) {
		this.spec = e, this.props = {}, e.props && bindProps(e.props, this, this.props), this.key = e.key ? e.key.key : createKey("plugin");
	}
	getState(e) {
		return e[this.key];
	}
}, keys$1 = Object.create(null);
function createKey(e) {
	return e in keys$1 ? e + "$" + ++keys$1[e] : (keys$1[e] = 0, e + "$");
}
var PluginKey = class {
	constructor(e = "key") {
		this.key = createKey(e);
	}
	get(e) {
		return e.config.pluginsByKey[this.key];
	}
	getState(e) {
		return e[this.key];
	}
}, max_empty_items = 500, Branch = class e {
	constructor(e, E) {
		this.items = e, this.eventCount = E;
	}
	popEvent(E, D) {
		if (this.eventCount == 0) return null;
		let O = this.items.length;
		for (;; O--) if (this.items.get(O - 1).selection) {
			--O;
			break;
		}
		let k, A;
		D && (k = this.remapping(O, this.items.length), A = k.maps.length);
		let j = E.tr, M, N, P = [], F = [];
		return this.items.forEach((E, D) => {
			if (!E.step) {
				k || (k = this.remapping(O, D + 1), A = k.maps.length), A--, F.push(E);
				return;
			}
			if (k) {
				F.push(new Item(E.map));
				let e = E.step.map(k.slice(A)), D;
				e && j.maybeStep(e).doc && (D = j.mapping.maps[j.mapping.maps.length - 1], P.push(new Item(D, void 0, void 0, P.length + F.length))), A--, D && k.appendMap(D, A);
			} else j.maybeStep(E.step);
			if (E.selection) return M = k ? E.selection.map(k.slice(A)) : E.selection, N = new e(this.items.slice(0, O).append(F.reverse().concat(P)), this.eventCount - 1), !1;
		}, this.items.length, 0), {
			remaining: N,
			transform: j,
			selection: M
		};
	}
	addTransform(E, D, O, k) {
		let A = [], j = this.eventCount, M = this.items, N = !k && M.length ? M.get(M.length - 1) : null;
		for (let e = 0; e < E.steps.length; e++) {
			let O = E.steps[e].invert(E.docs[e]), P = new Item(E.mapping.maps[e], O, D), F;
			(F = N && N.merge(P)) && (P = F, e ? A.pop() : M = M.slice(0, M.length - 1)), A.push(P), D &&= (j++, void 0), k || (N = P);
		}
		let P = j - O.depth;
		return P > DEPTH_OVERFLOW && (M = cutOffEvents(M, P), j -= P), new e(M.append(A), j);
	}
	remapping(e, E) {
		let D = new Mapping();
		return this.items.forEach((E, O) => {
			let k = E.mirrorOffset != null && O - E.mirrorOffset >= e ? D.maps.length - E.mirrorOffset : void 0;
			D.appendMap(E.map, k);
		}, e, E), D;
	}
	addMaps(E) {
		return this.eventCount == 0 ? this : new e(this.items.append(E.map((e) => new Item(e))), this.eventCount);
	}
	rebased(E, D) {
		if (!this.eventCount) return this;
		let O = [], k = Math.max(0, this.items.length - D), A = E.mapping, j = E.steps.length, M = this.eventCount;
		this.items.forEach((e) => {
			e.selection && M--;
		}, k);
		let N = D;
		this.items.forEach((e) => {
			let D = A.getMirror(--N);
			if (D == null) return;
			j = Math.min(j, D);
			let k = A.maps[D];
			if (e.step) {
				let j = E.steps[D].invert(E.docs[D]), P = e.selection && e.selection.map(A.slice(N + 1, D));
				P && M++, O.push(new Item(k, j, P));
			} else O.push(new Item(k));
		}, k);
		let P = [];
		for (let e = D; e < j; e++) P.push(new Item(A.maps[e]));
		let F = new e(this.items.slice(0, k).append(P).append(O), M);
		return F.emptyItemCount() > max_empty_items && (F = F.compress(this.items.length - O.length)), F;
	}
	emptyItemCount() {
		let e = 0;
		return this.items.forEach((E) => {
			E.step || e++;
		}), e;
	}
	compress(E = this.items.length) {
		let D = this.remapping(0, E), O = D.maps.length, k = [], A = 0;
		return this.items.forEach((e, j) => {
			if (j >= E) k.push(e), e.selection && A++;
			else if (e.step) {
				let E = e.step.map(D.slice(O)), j = E && E.getMap();
				if (O--, j && D.appendMap(j, O), E) {
					let M = e.selection && e.selection.map(D.slice(O));
					M && A++;
					let N = new Item(j.invert(), E, M), P, F = k.length - 1;
					(P = k.length && k[F].merge(N)) ? k[F] = P : k.push(N);
				}
			} else e.map && O--;
		}, this.items.length, 0), new e(dist_default.from(k.reverse()), A);
	}
};
Branch.empty = new Branch(dist_default.empty, 0);
function cutOffEvents(e, E) {
	let D;
	return e.forEach((e, O) => {
		if (e.selection && E-- == 0) return D = O, !1;
	}), e.slice(D);
}
var Item = class e {
	constructor(e, E, D, O) {
		this.map = e, this.step = E, this.selection = D, this.mirrorOffset = O;
	}
	merge(E) {
		if (this.step && E.step && !E.selection) {
			let D = E.step.merge(this.step);
			if (D) return new e(D.getMap().invert(), D, this.selection);
		}
	}
}, HistoryState = class {
	constructor(e, E, D, O, k) {
		this.done = e, this.undone = E, this.prevRanges = D, this.prevTime = O, this.prevComposition = k;
	}
}, DEPTH_OVERFLOW = 20;
function applyTransaction(e, E, D, O) {
	let k = D.getMeta(historyKey), A;
	if (k) return k.historyState;
	D.getMeta(closeHistoryKey) && (e = new HistoryState(e.done, e.undone, null, 0, -1));
	let j = D.getMeta("appendedTransaction");
	if (D.steps.length == 0) return e;
	if (j && j.getMeta(historyKey)) return j.getMeta(historyKey).redo ? new HistoryState(e.done.addTransform(D, void 0, O, mustPreserveItems(E)), e.undone, rangesFor(D.mapping.maps), e.prevTime, e.prevComposition) : new HistoryState(e.done, e.undone.addTransform(D, void 0, O, mustPreserveItems(E)), null, e.prevTime, e.prevComposition);
	if (D.getMeta("addToHistory") !== !1 && !(j && j.getMeta("addToHistory") === !1)) {
		let k = D.getMeta("composition"), A = e.prevTime == 0 || !j && e.prevComposition != k && (e.prevTime < (D.time || 0) - O.newGroupDelay || !isAdjacentTo(D, e.prevRanges)), M = j ? mapRanges(e.prevRanges, D.mapping) : rangesFor(D.mapping.maps);
		return new HistoryState(e.done.addTransform(D, A ? E.selection.getBookmark() : void 0, O, mustPreserveItems(E)), Branch.empty, M, D.time, k ?? e.prevComposition);
	} else if (A = D.getMeta("rebased")) return new HistoryState(e.done.rebased(D, A), e.undone.rebased(D, A), mapRanges(e.prevRanges, D.mapping), e.prevTime, e.prevComposition);
	else return new HistoryState(e.done.addMaps(D.mapping.maps), e.undone.addMaps(D.mapping.maps), mapRanges(e.prevRanges, D.mapping), e.prevTime, e.prevComposition);
}
function isAdjacentTo(e, E) {
	if (!E) return !1;
	if (!e.docChanged) return !0;
	let D = !1;
	return e.mapping.maps[0].forEach((e, O) => {
		for (let k = 0; k < E.length; k += 2) e <= E[k + 1] && O >= E[k] && (D = !0);
	}), D;
}
function rangesFor(e) {
	let E = [];
	for (let D = e.length - 1; D >= 0 && E.length == 0; D--) e[D].forEach((e, D, O, k) => E.push(O, k));
	return E;
}
function mapRanges(e, E) {
	if (!e) return null;
	let D = [];
	for (let O = 0; O < e.length; O += 2) {
		let k = E.map(e[O], 1), A = E.map(e[O + 1], -1);
		k <= A && D.push(k, A);
	}
	return D;
}
function histTransaction(e, E, D) {
	let O = mustPreserveItems(E), k = historyKey.get(E).spec.config, A = (D ? e.undone : e.done).popEvent(E, O);
	if (!A) return null;
	let j = A.selection.resolve(A.transform.doc), M = (D ? e.done : e.undone).addTransform(A.transform, E.selection.getBookmark(), k, O), N = new HistoryState(D ? M : A.remaining, D ? A.remaining : M, null, 0, -1);
	return A.transform.setSelection(j).setMeta(historyKey, {
		redo: D,
		historyState: N
	});
}
var cachedPreserveItems = !1, cachedPreserveItemsPlugins = null;
function mustPreserveItems(e) {
	let E = e.plugins;
	if (cachedPreserveItemsPlugins != E) {
		cachedPreserveItems = !1, cachedPreserveItemsPlugins = E;
		for (let e = 0; e < E.length; e++) if (E[e].spec.historyPreserveItems) {
			cachedPreserveItems = !0;
			break;
		}
	}
	return cachedPreserveItems;
}
function closeHistory(e) {
	return e.setMeta(closeHistoryKey, !0);
}
var historyKey = new PluginKey("history"), closeHistoryKey = new PluginKey("closeHistory");
function history(e = {}) {
	return e = {
		depth: e.depth || 100,
		newGroupDelay: e.newGroupDelay || 500
	}, new Plugin({
		key: historyKey,
		state: {
			init() {
				return new HistoryState(Branch.empty, Branch.empty, null, 0, -1);
			},
			apply(E, D, O) {
				return applyTransaction(D, O, E, e);
			}
		},
		config: e,
		props: { handleDOMEvents: { beforeinput(e, E) {
			let D = E.inputType, O = D == "historyUndo" ? undo : D == "historyRedo" ? redo : null;
			return !O || !e.editable ? !1 : (E.preventDefault(), O(e.state, e.dispatch));
		} } }
	});
}
function buildCommand(e, E) {
	return (D, O) => {
		let k = historyKey.getState(D);
		if (!k || (e ? k.undone : k.done).eventCount == 0) return !1;
		if (O) {
			let A = histTransaction(k, D, e);
			A && O(E ? A.scrollIntoView() : A);
		}
		return !0;
	};
}
var undo = buildCommand(!1, !0), redo = buildCommand(!0, !0), __defProp = Object.defineProperty, __exportAll = (e, E) => {
	let D = {};
	for (var O in e) __defProp(D, O, {
		get: e[O],
		enumerable: !0
	});
	return E || __defProp(D, Symbol.toStringTag, { value: "Module" }), D;
}, deleteSelection$1 = (e, E) => e.selection.empty ? !1 : (E && E(e.tr.deleteSelection().scrollIntoView()), !0);
function atBlockStart(e, E) {
	let { $cursor: D } = e.selection;
	return !D || (E ? !E.endOfTextblock("backward", e) : D.parentOffset > 0) ? null : D;
}
var joinBackward = (e, E, D) => {
	let O = atBlockStart(e, D);
	if (!O) return !1;
	let k = findCutBefore(O);
	if (!k) {
		let D = O.blockRange(), k = D && liftTarget(D);
		return k == null ? !1 : (E && E(e.tr.lift(D, k).scrollIntoView()), !0);
	}
	let A = k.nodeBefore;
	if (deleteBarrier(e, k, E, -1)) return !0;
	if (O.parent.content.size == 0 && (textblockAt(A, "end") || NodeSelection.isSelectable(A))) for (let D = O.depth;; D--) {
		let j = replaceStep(e.doc, O.before(D), O.after(D), Slice.empty);
		if (j && j.slice.size < j.to - j.from) {
			if (E) {
				let D = e.tr.step(j);
				D.setSelection(textblockAt(A, "end") ? Selection$1.findFrom(D.doc.resolve(D.mapping.map(k.pos, -1)), -1) : NodeSelection.create(D.doc, k.pos - A.nodeSize)), E(D.scrollIntoView());
			}
			return !0;
		}
		if (D == 1 || O.node(D - 1).childCount > 1) break;
	}
	return A.isAtom && k.depth == O.depth - 1 ? (E && E(e.tr.delete(k.pos - A.nodeSize, k.pos).scrollIntoView()), !0) : !1;
}, joinTextblockBackward = (e, E, D) => {
	let O = atBlockStart(e, D);
	if (!O) return !1;
	let k = findCutBefore(O);
	return k ? joinTextblocksAround(e, k, E) : !1;
}, joinTextblockForward = (e, E, D) => {
	let O = atBlockEnd(e, D);
	if (!O) return !1;
	let k = findCutAfter(O);
	return k ? joinTextblocksAround(e, k, E) : !1;
};
function joinTextblocksAround(e, E, D) {
	let O = E.nodeBefore, k = E.pos - 1;
	for (; !O.isTextblock; k--) {
		if (O.type.spec.isolating) return !1;
		let e = O.lastChild;
		if (!e) return !1;
		O = e;
	}
	let A = E.nodeAfter, j = E.pos + 1;
	for (; !A.isTextblock; j++) {
		if (A.type.spec.isolating) return !1;
		let e = A.firstChild;
		if (!e) return !1;
		A = e;
	}
	let M = replaceStep(e.doc, k, j, Slice.empty);
	if (!M || M.from != k || M instanceof ReplaceStep && M.slice.size >= j - k) return !1;
	if (D) {
		let E = e.tr.step(M);
		E.setSelection(TextSelection.create(E.doc, k)), D(E.scrollIntoView());
	}
	return !0;
}
function textblockAt(e, E, D = !1) {
	for (let O = e; O; O = E == "start" ? O.firstChild : O.lastChild) {
		if (O.isTextblock) return !0;
		if (D && O.childCount != 1) return !1;
	}
	return !1;
}
var selectNodeBackward = (e, E, D) => {
	let { $head: O, empty: k } = e.selection, A = O;
	if (!k) return !1;
	if (O.parent.isTextblock) {
		if (D ? !D.endOfTextblock("backward", e) : O.parentOffset > 0) return !1;
		A = findCutBefore(O);
	}
	let j = A && A.nodeBefore;
	return !j || !NodeSelection.isSelectable(j) ? !1 : (E && E(e.tr.setSelection(NodeSelection.create(e.doc, A.pos - j.nodeSize)).scrollIntoView()), !0);
};
function findCutBefore(e) {
	if (!e.parent.type.spec.isolating) for (let E = e.depth - 1; E >= 0; E--) {
		if (e.index(E) > 0) return e.doc.resolve(e.before(E + 1));
		if (e.node(E).type.spec.isolating) break;
	}
	return null;
}
function atBlockEnd(e, E) {
	let { $cursor: D } = e.selection;
	return !D || (E ? !E.endOfTextblock("forward", e) : D.parentOffset < D.parent.content.size) ? null : D;
}
var joinForward = (e, E, D) => {
	let O = atBlockEnd(e, D);
	if (!O) return !1;
	let k = findCutAfter(O);
	if (!k) return !1;
	let A = k.nodeAfter;
	if (deleteBarrier(e, k, E, 1)) return !0;
	if (O.parent.content.size == 0 && (textblockAt(A, "start") || NodeSelection.isSelectable(A))) {
		let D = replaceStep(e.doc, O.before(), O.after(), Slice.empty);
		if (D && D.slice.size < D.to - D.from) {
			if (E) {
				let O = e.tr.step(D);
				O.setSelection(textblockAt(A, "start") ? Selection$1.findFrom(O.doc.resolve(O.mapping.map(k.pos)), 1) : NodeSelection.create(O.doc, O.mapping.map(k.pos))), E(O.scrollIntoView());
			}
			return !0;
		}
	}
	return A.isAtom && k.depth == O.depth - 1 ? (E && E(e.tr.delete(k.pos, k.pos + A.nodeSize).scrollIntoView()), !0) : !1;
}, selectNodeForward = (e, E, D) => {
	let { $head: O, empty: k } = e.selection, A = O;
	if (!k) return !1;
	if (O.parent.isTextblock) {
		if (D ? !D.endOfTextblock("forward", e) : O.parentOffset < O.parent.content.size) return !1;
		A = findCutAfter(O);
	}
	let j = A && A.nodeAfter;
	return !j || !NodeSelection.isSelectable(j) ? !1 : (E && E(e.tr.setSelection(NodeSelection.create(e.doc, A.pos)).scrollIntoView()), !0);
};
function findCutAfter(e) {
	if (!e.parent.type.spec.isolating) for (let E = e.depth - 1; E >= 0; E--) {
		let D = e.node(E);
		if (e.index(E) + 1 < D.childCount) return e.doc.resolve(e.after(E + 1));
		if (D.type.spec.isolating) break;
	}
	return null;
}
var joinUp = (e, E) => {
	let D = e.selection, O = D instanceof NodeSelection, k;
	if (O) {
		if (D.node.isTextblock || !canJoin(e.doc, D.from)) return !1;
		k = D.from;
	} else if (k = joinPoint(e.doc, D.from, -1), k == null) return !1;
	if (E) {
		let D = e.tr.join(k);
		O && D.setSelection(NodeSelection.create(D.doc, k - e.doc.resolve(k).nodeBefore.nodeSize)), E(D.scrollIntoView());
	}
	return !0;
}, joinDown = (e, E) => {
	let D = e.selection, O;
	if (D instanceof NodeSelection) {
		if (D.node.isTextblock || !canJoin(e.doc, D.to)) return !1;
		O = D.to;
	} else if (O = joinPoint(e.doc, D.to, 1), O == null) return !1;
	return E && E(e.tr.join(O).scrollIntoView()), !0;
}, lift = (e, E) => {
	let { $from: D, $to: O } = e.selection, k = D.blockRange(O), A = k && liftTarget(k);
	return A == null ? !1 : (E && E(e.tr.lift(k, A).scrollIntoView()), !0);
}, newlineInCode = (e, E) => {
	let { $head: D, $anchor: O } = e.selection;
	return !D.parent.type.spec.code || !D.sameParent(O) ? !1 : (E && E(e.tr.insertText("\n").scrollIntoView()), !0);
};
function defaultBlockAt$1(e) {
	for (let E = 0; E < e.edgeCount; E++) {
		let { type: D } = e.edge(E);
		if (D.isTextblock && !D.hasRequiredAttrs()) return D;
	}
	return null;
}
var exitCode = (e, E) => {
	let { $head: D, $anchor: O } = e.selection;
	if (!D.parent.type.spec.code || !D.sameParent(O)) return !1;
	let k = D.node(-1), A = D.indexAfter(-1), j = defaultBlockAt$1(k.contentMatchAt(A));
	if (!j || !k.canReplaceWith(A, A, j)) return !1;
	if (E) {
		let O = D.after(), k = e.tr.replaceWith(O, O, j.createAndFill());
		k.setSelection(Selection$1.near(k.doc.resolve(O), 1)), E(k.scrollIntoView());
	}
	return !0;
}, createParagraphNear = (e, E) => {
	let D = e.selection, { $from: O, $to: k } = D;
	if (D instanceof AllSelection || O.parent.inlineContent || k.parent.inlineContent) return !1;
	let A = defaultBlockAt$1(k.parent.contentMatchAt(k.indexAfter()));
	if (!A || !A.isTextblock) return !1;
	if (E) {
		let D = (!O.parentOffset && k.index() < k.parent.childCount ? O : k).pos, j = e.tr.insert(D, A.createAndFill());
		j.setSelection(TextSelection.create(j.doc, D + 1)), E(j.scrollIntoView());
	}
	return !0;
}, liftEmptyBlock = (e, E) => {
	let { $cursor: D } = e.selection;
	if (!D || D.parent.content.size) return !1;
	if (D.depth > 1 && D.after() != D.end(-1)) {
		let O = D.before();
		if (canSplit(e.doc, O)) return E && E(e.tr.split(O).scrollIntoView()), !0;
	}
	let O = D.blockRange(), k = O && liftTarget(O);
	return k == null ? !1 : (E && E(e.tr.lift(O, k).scrollIntoView()), !0);
};
function splitBlockAs(e) {
	return (E, D) => {
		let { $from: O, $to: k } = E.selection;
		if (E.selection instanceof NodeSelection && E.selection.node.isBlock) return !O.parentOffset || !canSplit(E.doc, O.pos) ? !1 : (D && D(E.tr.split(O.pos).scrollIntoView()), !0);
		if (!O.depth) return !1;
		let A = [], j, M, N = !1, P = !1;
		for (let E = O.depth;; E--) if (O.node(E).isBlock) {
			N = O.end(E) == O.pos + (O.depth - E), P = O.start(E) == O.pos - (O.depth - E), M = defaultBlockAt$1(O.node(E - 1).contentMatchAt(O.indexAfter(E - 1)));
			let D = e && e(k.parent, N, O);
			A.unshift(D || (N && M ? { type: M } : null)), j = E;
			break;
		} else {
			if (E == 1) return !1;
			A.unshift(null);
		}
		let F = E.tr;
		(E.selection instanceof TextSelection || E.selection instanceof AllSelection) && F.deleteSelection();
		let I = F.mapping.map(O.pos), L = canSplit(F.doc, I, A.length, A);
		if (L ||= (A[0] = M ? { type: M } : null, canSplit(F.doc, I, A.length, A)), !L) return !1;
		if (F.split(I, A.length, A), !N && P && O.node(j).type != M) {
			let e = F.mapping.map(O.before(j)), E = F.doc.resolve(e);
			M && O.node(j - 1).canReplaceWith(E.index(), E.index() + 1, M) && F.setNodeMarkup(F.mapping.map(O.before(j)), M);
		}
		return D && D(F.scrollIntoView()), !0;
	};
}
var splitBlock$1 = splitBlockAs(), selectParentNode = (e, E) => {
	let { $from: D, to: O } = e.selection, k, A = D.sharedDepth(O);
	return A == 0 ? !1 : (k = D.before(A), E && E(e.tr.setSelection(NodeSelection.create(e.doc, k))), !0);
}, selectAll$1 = (e, E) => (E && E(e.tr.setSelection(new AllSelection(e.doc))), !0);
function joinMaybeClear(e, E, D) {
	let O = E.nodeBefore, k = E.nodeAfter, A = E.index();
	return !O || !k || !O.type.compatibleContent(k.type) ? !1 : !O.content.size && E.parent.canReplace(A - 1, A) ? (D && D(e.tr.delete(E.pos - O.nodeSize, E.pos).scrollIntoView()), !0) : !E.parent.canReplace(A, A + 1) || !(k.isTextblock || canJoin(e.doc, E.pos)) ? !1 : (D && D(e.tr.join(E.pos).scrollIntoView()), !0);
}
function deleteBarrier(e, E, D, O) {
	let k = E.nodeBefore, A = E.nodeAfter, j, M, N = k.type.spec.isolating || A.type.spec.isolating;
	if (!N && joinMaybeClear(e, E, D)) return !0;
	let P = !N && E.parent.canReplace(E.index(), E.index() + 1);
	if (P && (j = (M = k.contentMatchAt(k.childCount)).findWrapping(A.type)) && M.matchType(j[0] || A.type).validEnd) {
		if (D) {
			let O = E.pos + A.nodeSize, M = Fragment.empty;
			for (let e = j.length - 1; e >= 0; e--) M = Fragment.from(j[e].create(null, M));
			M = Fragment.from(k.copy(M));
			let N = e.tr.step(new ReplaceAroundStep(E.pos - 1, O, E.pos, O, new Slice(M, 1, 0), j.length, !0)), P = N.doc.resolve(O + 2 * j.length);
			P.nodeAfter && P.nodeAfter.type == k.type && canJoin(N.doc, P.pos) && N.join(P.pos), D(N.scrollIntoView());
		}
		return !0;
	}
	let F = A.type.spec.isolating || O > 0 && N ? null : Selection$1.findFrom(E, 1), I = F && F.$from.blockRange(F.$to), L = I && liftTarget(I);
	if (L != null && L >= E.depth) return D && D(e.tr.lift(I, L).scrollIntoView()), !0;
	if (P && textblockAt(A, "start", !0) && textblockAt(k, "end")) {
		let O = k, j = [];
		for (; j.push(O), !O.isTextblock;) O = O.lastChild;
		let M = A, N = 1;
		for (; !M.isTextblock; M = M.firstChild) N++;
		if (O.canReplace(O.childCount, O.childCount, M.content)) {
			if (D) {
				let O = Fragment.empty;
				for (let e = j.length - 1; e >= 0; e--) O = Fragment.from(j[e].copy(O));
				D(e.tr.step(new ReplaceAroundStep(E.pos - j.length, E.pos + A.nodeSize, E.pos + N, E.pos + A.nodeSize - N, new Slice(O, j.length, 0), 0, !0)).scrollIntoView());
			}
			return !0;
		}
	}
	return !1;
}
function selectTextblockSide(e) {
	return function(E, D) {
		let O = E.selection, k = e < 0 ? O.$from : O.$to, A = k.depth;
		for (; k.node(A).isInline;) {
			if (!A) return !1;
			A--;
		}
		return k.node(A).isTextblock ? (D && D(E.tr.setSelection(TextSelection.create(E.doc, e < 0 ? k.start(A) : k.end(A)))), !0) : !1;
	};
}
var selectTextblockStart = selectTextblockSide(-1), selectTextblockEnd = selectTextblockSide(1);
function wrapIn(e, E = null) {
	return function(D, O) {
		let { $from: k, $to: A } = D.selection, j = k.blockRange(A), M = j && findWrapping(j, e, E);
		return M ? (O && O(D.tr.wrap(j, M).scrollIntoView()), !0) : !1;
	};
}
function setBlockType(e, E = null) {
	return function(D, O) {
		let k = !1;
		for (let O = 0; O < D.selection.ranges.length && !k; O++) {
			let { $from: { pos: A }, $to: { pos: j } } = D.selection.ranges[O];
			D.doc.nodesBetween(A, j, (O, A) => {
				if (k) return !1;
				if (!(!O.isTextblock || O.hasMarkup(e, E))) if (O.type == e) k = !0;
				else {
					let E = D.doc.resolve(A), O = E.index();
					k = E.parent.canReplaceWith(O, O + 1, e);
				}
			});
		}
		if (!k) return !1;
		if (O) {
			let k = D.tr;
			for (let O = 0; O < D.selection.ranges.length; O++) {
				let { $from: { pos: A }, $to: { pos: j } } = D.selection.ranges[O];
				k.setBlockType(A, j, e, E);
			}
			O(k.scrollIntoView());
		}
		return !0;
	};
}
function chainCommands(...e) {
	return function(E, D, O) {
		for (let k = 0; k < e.length; k++) if (e[k](E, D, O)) return !0;
		return !1;
	};
}
var backspace = chainCommands(deleteSelection$1, joinBackward, selectNodeBackward), del = chainCommands(deleteSelection$1, joinForward, selectNodeForward), pcBaseKeymap = {
	Enter: chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock$1),
	"Mod-Enter": exitCode,
	Backspace: backspace,
	"Mod-Backspace": backspace,
	"Shift-Backspace": backspace,
	Delete: del,
	"Mod-Delete": del,
	"Mod-a": selectAll$1
}, macBaseKeymap = {
	"Ctrl-h": pcBaseKeymap.Backspace,
	"Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
	"Ctrl-d": pcBaseKeymap.Delete,
	"Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
	"Alt-Delete": pcBaseKeymap["Mod-Delete"],
	"Alt-d": pcBaseKeymap["Mod-Delete"],
	"Ctrl-a": selectTextblockStart,
	"Ctrl-e": selectTextblockEnd
};
for (let e in pcBaseKeymap) macBaseKeymap[e] = pcBaseKeymap[e];
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform();
function wrapInList(e, E = null) {
	return function(D, O) {
		let { $from: k, $to: A } = D.selection, j = k.blockRange(A);
		if (!j) return !1;
		let M = O ? D.tr : null;
		return wrapRangeInList(M, j, e, E) ? (O && O(M.scrollIntoView()), !0) : !1;
	};
}
function wrapRangeInList(e, E, D, O = null) {
	let k = !1, A = E, j = E.$from.doc;
	if (E.depth >= 2 && E.$from.node(E.depth - 1).type.compatibleContent(D) && E.startIndex == 0) {
		if (E.$from.index(E.depth - 1) == 0) return !1;
		let e = j.resolve(E.start - 2);
		A = new NodeRange(e, e, E.depth), E.endIndex < E.parent.childCount && (E = new NodeRange(E.$from, j.resolve(E.$to.end(E.depth)), E.depth)), k = !0;
	}
	let M = findWrapping(A, D, O, E);
	return M ? (e && doWrapInList(e, E, M, k, D), !0) : !1;
}
function doWrapInList(e, E, D, O, k) {
	let A = Fragment.empty;
	for (let e = D.length - 1; e >= 0; e--) A = Fragment.from(D[e].type.create(D[e].attrs, A));
	e.step(new ReplaceAroundStep(E.start - (O ? 2 : 0), E.end, E.start, E.end, new Slice(A, 0, 0), D.length, !0));
	let j = 0;
	for (let e = 0; e < D.length; e++) D[e].type == k && (j = e + 1);
	let M = D.length - j, N = E.start + D.length - (O ? 2 : 0), P = E.parent;
	for (let D = E.startIndex, O = E.endIndex, k = !0; D < O; D++, k = !1) !k && canSplit(e.doc, N, M) && (e.split(N, M), N += 2 * M), N += P.child(D).nodeSize;
	return e;
}
function liftListItem(e) {
	return function(E, D) {
		let { $from: O, $to: k } = E.selection, A = O.blockRange(k, (E) => E.childCount > 0 && E.firstChild.type == e);
		return A ? D ? O.node(A.depth - 1).type == e ? liftToOuterList(E, D, e, A) : liftOutOfList(E, D, A) : !0 : !1;
	};
}
function liftToOuterList(e, E, D, O) {
	let k = e.tr, A = O.end, j = O.$to.end(O.depth);
	A < j && (k.step(new ReplaceAroundStep(A - 1, j, A, j, new Slice(Fragment.from(D.create(null, O.parent.copy())), 1, 0), 1, !0)), O = new NodeRange(k.doc.resolve(O.$from.pos), k.doc.resolve(j), O.depth));
	let M = liftTarget(O);
	if (M == null) return !1;
	k.lift(O, M);
	let N = k.doc.resolve(k.mapping.map(A, -1) - 1);
	return canJoin(k.doc, N.pos) && N.nodeBefore.type == N.nodeAfter.type && k.join(N.pos), E(k.scrollIntoView()), !0;
}
function liftOutOfList(e, E, D) {
	let O = e.tr, k = D.parent;
	for (let e = D.end, E = D.endIndex - 1, A = D.startIndex; E > A; E--) e -= k.child(E).nodeSize, O.delete(e - 1, e + 1);
	let A = O.doc.resolve(D.start), j = A.nodeAfter;
	if (O.mapping.map(D.end) != D.start + A.nodeAfter.nodeSize) return !1;
	let M = D.startIndex == 0, N = D.endIndex == k.childCount, P = A.node(-1), F = A.index(-1);
	if (!P.canReplace(F + (M ? 0 : 1), F + 1, j.content.append(N ? Fragment.empty : Fragment.from(k)))) return !1;
	let I = A.pos, L = I + j.nodeSize;
	return O.step(new ReplaceAroundStep(I - (M ? 1 : 0), L + (N ? 1 : 0), I + 1, L - 1, new Slice((M ? Fragment.empty : Fragment.from(k.copy(Fragment.empty))).append(N ? Fragment.empty : Fragment.from(k.copy(Fragment.empty))), M ? 0 : 1, N ? 0 : 1), M ? 0 : 1)), E(O.scrollIntoView()), !0;
}
function sinkListItem(e) {
	return function(E, D) {
		let { $from: O, $to: k } = E.selection, A = O.blockRange(k, (E) => E.childCount > 0 && E.firstChild.type == e);
		if (!A) return !1;
		let j = A.startIndex;
		if (j == 0) return !1;
		let M = A.parent, N = M.child(j - 1);
		if (N.type != e) return !1;
		if (D) {
			let O = N.lastChild && N.lastChild.type == M.type, k = Fragment.from(O ? e.create() : null), j = new Slice(Fragment.from(e.create(null, Fragment.from(M.type.create(null, k)))), O ? 3 : 1, 0), P = A.start, F = A.end;
			D(E.tr.step(new ReplaceAroundStep(P - (O ? 3 : 1), F, P, F, j, 1, !0)).scrollIntoView());
		}
		return !0;
	};
}
var domIndex = function(e) {
	for (var E = 0;; E++) if (e = e.previousSibling, !e) return E;
}, parentNode = function(e) {
	let E = e.assignedSlot || e.parentNode;
	return E && E.nodeType == 11 ? E.host : E;
}, reusedRange = null, textRange = function(e, E, D) {
	let O = reusedRange ||= document.createRange();
	return O.setEnd(e, D ?? e.nodeValue.length), O.setStart(e, E || 0), O;
}, clearReusedRange = function() {
	reusedRange = null;
}, isEquivalentPosition = function(e, E, D, O) {
	return D && (scanFor(e, E, D, O, -1) || scanFor(e, E, D, O, 1));
}, atomElements = /^(img|br|input|textarea|hr)$/i;
function scanFor(e, E, D, O, k) {
	for (;;) {
		if (e == D && E == O) return !0;
		if (E == (k < 0 ? 0 : nodeSize(e))) {
			let D = e.parentNode;
			if (!D || D.nodeType != 1 || hasBlockDesc(e) || atomElements.test(e.nodeName) || e.contentEditable == "false") return !1;
			E = domIndex(e) + (k < 0 ? 0 : 1), e = D;
		} else if (e.nodeType == 1) {
			let D = e.childNodes[E + (k < 0 ? -1 : 0)];
			if (D.nodeType == 1 && D.contentEditable == "false") if (D.pmViewDesc?.ignoreForSelection) E += k;
			else return !1;
			else e = D, E = k < 0 ? nodeSize(e) : 0;
		} else return !1;
	}
}
function nodeSize(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function textNodeBefore$1(e, E) {
	for (;;) {
		if (e.nodeType == 3 && E) return e;
		if (e.nodeType == 1 && E > 0) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[E - 1], E = nodeSize(e);
		} else if (e.parentNode && !hasBlockDesc(e)) E = domIndex(e), e = e.parentNode;
		else return null;
	}
}
function textNodeAfter$1(e, E) {
	for (;;) {
		if (e.nodeType == 3 && E < e.nodeValue.length) return e;
		if (e.nodeType == 1 && E < e.childNodes.length) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[E], E = 0;
		} else if (e.parentNode && !hasBlockDesc(e)) E = domIndex(e) + 1, e = e.parentNode;
		else return null;
	}
}
function isOnEdge(e, E, D) {
	for (let O = E == 0, k = E == nodeSize(e); O || k;) {
		if (e == D) return !0;
		let E = domIndex(e);
		if (e = e.parentNode, !e) return !1;
		O &&= E == 0, k &&= E == nodeSize(e);
	}
}
function hasBlockDesc(e) {
	let E;
	for (let D = e; D && !(E = D.pmViewDesc); D = D.parentNode);
	return E && E.node && E.node.isBlock && (E.dom == e || E.contentDOM == e);
}
var selectionCollapsed = function(e) {
	return e.focusNode && isEquivalentPosition(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
};
function keyEvent(e, E) {
	let D = document.createEvent("Event");
	return D.initEvent("keydown", !0, !0), D.keyCode = e, D.key = D.code = E, D;
}
function deepActiveElement(e) {
	let E = e.activeElement;
	for (; E && E.shadowRoot;) E = E.shadowRoot.activeElement;
	return E;
}
function caretFromPoint(e, E, D) {
	if (e.caretPositionFromPoint) try {
		let O = e.caretPositionFromPoint(E, D);
		if (O) return {
			node: O.offsetNode,
			offset: Math.min(nodeSize(O.offsetNode), O.offset)
		};
	} catch {}
	if (e.caretRangeFromPoint) {
		let O = e.caretRangeFromPoint(E, D);
		if (O) return {
			node: O.startContainer,
			offset: Math.min(nodeSize(O.startContainer), O.startOffset)
		};
	}
}
var nav = typeof navigator < "u" ? navigator : null, doc = typeof document < "u" ? document : null, agent = nav && nav.userAgent || "", ie_edge = /Edge\/(\d+)/.exec(agent), ie_upto10 = /MSIE \d/.exec(agent), ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent), ie$1 = !!(ie_upto10 || ie_11up || ie_edge), ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0, gecko = !ie$1 && /gecko\/(\d+)/i.test(agent);
gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
var _chrome = !ie$1 && /Chrome\/(\d+)/.exec(agent), chrome = !!_chrome, chrome_version = _chrome ? +_chrome[1] : 0, safari = !ie$1 && !!nav && /Apple Computer/.test(nav.vendor), ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2), mac$2 = ios || (nav ? /Mac/.test(nav.platform) : !1), windows$1 = nav ? /Win/.test(nav.platform) : !1, android = /Android \d/.test(agent), webkit = !!doc && "webkitFontSmoothing" in doc.documentElement.style, webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function windowRect(e) {
	let E = e.defaultView && e.defaultView.visualViewport;
	return E ? {
		left: 0,
		right: E.width,
		top: 0,
		bottom: E.height
	} : {
		left: 0,
		right: e.documentElement.clientWidth,
		top: 0,
		bottom: e.documentElement.clientHeight
	};
}
function getSide(e, E) {
	return typeof e == "number" ? e : e[E];
}
function clientRect(e) {
	let E = e.getBoundingClientRect(), D = E.width / e.offsetWidth || 1, O = E.height / e.offsetHeight || 1;
	return {
		left: E.left,
		right: E.left + e.clientWidth * D,
		top: E.top,
		bottom: E.top + e.clientHeight * O
	};
}
function scrollRectIntoView(e, E, D) {
	if (!nonZero(E) && E.left == 0) return;
	let O = e.someProp("scrollThreshold") || 0, k = e.someProp("scrollMargin") || 5, A = e.dom.ownerDocument;
	for (let j = D || e.dom; j;) {
		if (j.nodeType != 1) {
			j = parentNode(j);
			continue;
		}
		let e = j, D = e == A.body, M = D ? windowRect(A) : clientRect(e), N = 0, P = 0;
		if (E.top < M.top + getSide(O, "top") ? P = -(M.top - E.top + getSide(k, "top")) : E.bottom > M.bottom - getSide(O, "bottom") && (P = E.bottom - E.top > M.bottom - M.top ? E.top + getSide(k, "top") - M.top : E.bottom - M.bottom + getSide(k, "bottom")), E.left < M.left + getSide(O, "left") ? N = -(M.left - E.left + getSide(k, "left")) : E.right > M.right - getSide(O, "right") && (N = E.right - M.right + getSide(k, "right")), N || P) if (D) A.defaultView.scrollBy(N, P);
		else {
			let D = e.scrollLeft, O = e.scrollTop;
			P && (e.scrollTop += P), N && (e.scrollLeft += N);
			let k = e.scrollLeft - D, A = e.scrollTop - O;
			E = {
				left: E.left - k,
				top: E.top - A,
				right: E.right - k,
				bottom: E.bottom - A
			};
		}
		let F = D ? "fixed" : getComputedStyle(j).position;
		if (/^(fixed|sticky)$/.test(F)) break;
		j = F == "absolute" ? j.offsetParent : parentNode(j);
	}
}
function storeScrollPos(e) {
	let E = e.dom.getBoundingClientRect(), D = Math.max(0, E.top), O, k;
	for (let A = (E.left + E.right) / 2, j = D + 1; j < Math.min(innerHeight, E.bottom); j += 5) {
		let E = e.root.elementFromPoint(A, j);
		if (!E || E == e.dom || !e.dom.contains(E)) continue;
		let M = E.getBoundingClientRect();
		if (M.top >= D - 20) {
			O = E, k = M.top;
			break;
		}
	}
	return {
		refDOM: O,
		refTop: k,
		stack: scrollStack(e.dom)
	};
}
function scrollStack(e) {
	let E = [], D = e.ownerDocument;
	for (let O = e; O && (E.push({
		dom: O,
		top: O.scrollTop,
		left: O.scrollLeft
	}), e != D); O = parentNode(O));
	return E;
}
function resetScrollPos({ refDOM: e, refTop: E, stack: D }) {
	let O = e ? e.getBoundingClientRect().top : 0;
	restoreScrollStack(D, O == 0 ? 0 : O - E);
}
function restoreScrollStack(e, E) {
	for (let D = 0; D < e.length; D++) {
		let { dom: O, top: k, left: A } = e[D];
		O.scrollTop != k + E && (O.scrollTop = k + E), O.scrollLeft != A && (O.scrollLeft = A);
	}
}
var preventScrollSupported = null;
function focusPreventScroll(e) {
	if (e.setActive) return e.setActive();
	if (preventScrollSupported) return e.focus(preventScrollSupported);
	let E = scrollStack(e);
	e.focus(preventScrollSupported == null ? { get preventScroll() {
		return preventScrollSupported = { preventScroll: !0 }, !0;
	} } : void 0), preventScrollSupported || (preventScrollSupported = !1, restoreScrollStack(E, 0));
}
function findOffsetInNode(e, E) {
	let D, O = 2e8, k, A = 0, j = E.top, M = E.top, N, P;
	for (let F = e.firstChild, I = 0; F; F = F.nextSibling, I++) {
		let e;
		if (F.nodeType == 1) e = F.getClientRects();
		else if (F.nodeType == 3) e = textRange(F).getClientRects();
		else continue;
		for (let L = 0; L < e.length; L++) {
			let R = e[L];
			if (R.top <= j && R.bottom >= M) {
				j = Math.max(R.bottom, j), M = Math.min(R.top, M);
				let e = R.left > E.left ? R.left - E.left : R.right < E.left ? E.left - R.right : 0;
				if (e < O) {
					D = F, O = e, k = e && D.nodeType == 3 ? {
						left: R.right < E.left ? R.right : R.left,
						top: E.top
					} : E, F.nodeType == 1 && e && (A = I + (E.left >= (R.left + R.right) / 2 ? 1 : 0));
					continue;
				}
			} else R.top > E.top && !N && R.left <= E.left && R.right >= E.left && (N = F, P = {
				left: Math.max(R.left, Math.min(R.right, E.left)),
				top: R.top
			});
			!D && (E.left >= R.right && E.top >= R.top || E.left >= R.left && E.top >= R.bottom) && (A = I + 1);
		}
	}
	return !D && N && (D = N, k = P, O = 0), D && D.nodeType == 3 ? findOffsetInText(D, k) : !D || O && D.nodeType == 1 ? {
		node: e,
		offset: A
	} : findOffsetInNode(D, k);
}
function findOffsetInText(e, E) {
	let D = e.nodeValue.length, O = document.createRange(), k;
	for (let A = 0; A < D; A++) {
		O.setEnd(e, A + 1), O.setStart(e, A);
		let D = singleRect(O, 1);
		if (D.top != D.bottom && inRect(E, D)) {
			k = {
				node: e,
				offset: A + (E.left >= (D.left + D.right) / 2 ? 1 : 0)
			};
			break;
		}
	}
	return O.detach(), k || {
		node: e,
		offset: 0
	};
}
function inRect(e, E) {
	return e.left >= E.left - 1 && e.left <= E.right + 1 && e.top >= E.top - 1 && e.top <= E.bottom + 1;
}
function targetKludge(e, E) {
	let D = e.parentNode;
	return D && /^li$/i.test(D.nodeName) && E.left < e.getBoundingClientRect().left ? D : e;
}
function posFromElement(e, E, D) {
	let { node: O, offset: k } = findOffsetInNode(E, D), A = -1;
	if (O.nodeType == 1 && !O.firstChild) {
		let e = O.getBoundingClientRect();
		A = e.left != e.right && D.left > (e.left + e.right) / 2 ? 1 : -1;
	}
	return e.docView.posFromDOM(O, k, A);
}
function posFromCaret(e, E, D, O) {
	let k = -1;
	for (let D = E, A = !1; D != e.dom;) {
		let E = e.docView.nearestDesc(D, !0), j;
		if (!E) return null;
		if (E.dom.nodeType == 1 && (E.node.isBlock && E.parent || !E.contentDOM) && ((j = E.dom.getBoundingClientRect()).width || j.height) && (E.node.isBlock && E.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(E.dom.nodeName) && (!A && j.left > O.left || j.top > O.top ? k = E.posBefore : (!A && j.right < O.left || j.bottom < O.top) && (k = E.posAfter), A = !0), !E.contentDOM && k < 0 && !E.node.isText)) return (E.node.isBlock ? O.top < (j.top + j.bottom) / 2 : O.left < (j.left + j.right) / 2) ? E.posBefore : E.posAfter;
		D = E.dom.parentNode;
	}
	return k > -1 ? k : e.docView.posFromDOM(E, D, -1);
}
function elementFromPoint(e, E, D) {
	let O = e.childNodes.length;
	if (O && D.top < D.bottom) for (let k = Math.max(0, Math.min(O - 1, Math.floor(O * (E.top - D.top) / (D.bottom - D.top)) - 2)), A = k;;) {
		let D = e.childNodes[A];
		if (D.nodeType == 1) {
			let e = D.getClientRects();
			for (let O = 0; O < e.length; O++) {
				let k = e[O];
				if (inRect(E, k)) return elementFromPoint(D, E, k);
			}
		}
		if ((A = (A + 1) % O) == k) break;
	}
	return e;
}
function posAtCoords(e, E) {
	let D = e.dom.ownerDocument, O, k = 0, A = caretFromPoint(D, E.left, E.top);
	A && ({node: O, offset: k} = A);
	let j = (e.root.elementFromPoint ? e.root : D).elementFromPoint(E.left, E.top), M;
	if (!j || !e.dom.contains(j.nodeType == 1 ? j : j.parentNode)) {
		let D = e.dom.getBoundingClientRect();
		if (!inRect(E, D) || (j = elementFromPoint(e.dom, E, D), !j)) return null;
	}
	if (safari) for (let e = j; O && e; e = parentNode(e)) e.draggable && (O = void 0);
	if (j = targetKludge(j, E), O) {
		if (gecko && O.nodeType == 1 && (k = Math.min(k, O.childNodes.length), k < O.childNodes.length)) {
			let e = O.childNodes[k], D;
			e.nodeName == "IMG" && (D = e.getBoundingClientRect()).right <= E.left && D.bottom > E.top && k++;
		}
		let D;
		webkit && k && O.nodeType == 1 && (D = O.childNodes[k - 1]).nodeType == 1 && D.contentEditable == "false" && D.getBoundingClientRect().top >= E.top && k--, O == e.dom && k == O.childNodes.length - 1 && O.lastChild.nodeType == 1 && E.top > O.lastChild.getBoundingClientRect().bottom ? M = e.state.doc.content.size : (k == 0 || O.nodeType != 1 || O.childNodes[k - 1].nodeName != "BR") && (M = posFromCaret(e, O, k, E));
	}
	M ??= posFromElement(e, j, E);
	let N = e.docView.nearestDesc(j, !0);
	return {
		pos: M,
		inside: N ? N.posAtStart - N.border : -1
	};
}
function nonZero(e) {
	return e.top < e.bottom || e.left < e.right;
}
function singleRect(e, E) {
	let D = e.getClientRects();
	if (D.length) {
		let e = D[E < 0 ? 0 : D.length - 1];
		if (nonZero(e)) return e;
	}
	return Array.prototype.find.call(D, nonZero) || e.getBoundingClientRect();
}
var BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function coordsAtPos(e, E, D) {
	let { node: O, offset: k, atom: A } = e.docView.domFromPos(E, D < 0 ? -1 : 1), j = webkit || gecko;
	if (O.nodeType == 3) if (j && (BIDI.test(O.nodeValue) || (D < 0 ? !k : k == O.nodeValue.length))) {
		let e = singleRect(textRange(O, k, k), D);
		if (gecko && k && /\s/.test(O.nodeValue[k - 1]) && k < O.nodeValue.length) {
			let E = singleRect(textRange(O, k - 1, k - 1), -1);
			if (E.top == e.top) {
				let D = singleRect(textRange(O, k, k + 1), -1);
				if (D.top != e.top) return flattenV(D, D.left < E.left);
			}
		}
		return e;
	} else {
		let e = k, E = k, A = D < 0 ? 1 : -1;
		return D < 0 && !k ? (E++, A = -1) : D >= 0 && k == O.nodeValue.length ? (e--, A = 1) : D < 0 ? e-- : E++, flattenV(singleRect(textRange(O, e, E), A), A < 0);
	}
	if (!e.state.doc.resolve(E - (A || 0)).parent.inlineContent) {
		if (A == null && k && (D < 0 || k == nodeSize(O))) {
			let e = O.childNodes[k - 1];
			if (e.nodeType == 1) return flattenH(e.getBoundingClientRect(), !1);
		}
		if (A == null && k < nodeSize(O)) {
			let e = O.childNodes[k];
			if (e.nodeType == 1) return flattenH(e.getBoundingClientRect(), !0);
		}
		return flattenH(O.getBoundingClientRect(), D >= 0);
	}
	if (A == null && k && (D < 0 || k == nodeSize(O))) {
		let e = O.childNodes[k - 1], E = e.nodeType == 3 ? textRange(e, nodeSize(e) - (j ? 0 : 1)) : e.nodeType == 1 && (e.nodeName != "BR" || !e.nextSibling) ? e : null;
		if (E) return flattenV(singleRect(E, 1), !1);
	}
	if (A == null && k < nodeSize(O)) {
		let e = O.childNodes[k];
		for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords;) e = e.nextSibling;
		let E = e ? e.nodeType == 3 ? textRange(e, 0, j ? 0 : 1) : e.nodeType == 1 ? e : null : null;
		if (E) return flattenV(singleRect(E, -1), !0);
	}
	return flattenV(singleRect(O.nodeType == 3 ? textRange(O) : O, -D), D >= 0);
}
function flattenV(e, E) {
	if (e.width == 0) return e;
	let D = E ? e.left : e.right;
	return {
		top: e.top,
		bottom: e.bottom,
		left: D,
		right: D
	};
}
function flattenH(e, E) {
	if (e.height == 0) return e;
	let D = E ? e.top : e.bottom;
	return {
		top: D,
		bottom: D,
		left: e.left,
		right: e.right
	};
}
function withFlushedState(e, E, D) {
	let O = e.state, k = e.root.activeElement;
	O != E && e.updateState(E), k != e.dom && e.focus();
	try {
		return D();
	} finally {
		O != E && e.updateState(O), k != e.dom && k && k.focus();
	}
}
function endOfTextblockVertical(e, E, D) {
	let O = E.selection, k = D == "up" ? O.$from : O.$to;
	return withFlushedState(e, E, () => {
		let { node: E } = e.docView.domFromPos(k.pos, D == "up" ? -1 : 1);
		for (;;) {
			let D = e.docView.nearestDesc(E, !0);
			if (!D) break;
			if (D.node.isBlock) {
				E = D.contentDOM || D.dom;
				break;
			}
			E = D.dom.parentNode;
		}
		let O = coordsAtPos(e, k.pos, 1);
		for (let e = E.firstChild; e; e = e.nextSibling) {
			let E;
			if (e.nodeType == 1) E = e.getClientRects();
			else if (e.nodeType == 3) E = textRange(e, 0, e.nodeValue.length).getClientRects();
			else continue;
			for (let e = 0; e < E.length; e++) {
				let k = E[e];
				if (k.bottom > k.top + 1 && (D == "up" ? O.top - k.top > (k.bottom - O.top) * 2 : k.bottom - O.bottom > (O.bottom - k.top) * 2)) return !1;
			}
		}
		return !0;
	});
}
var maybeRTL = /[\u0590-\u08ac]/;
function endOfTextblockHorizontal(e, E, D) {
	let { $head: O } = E.selection;
	if (!O.parent.isTextblock) return !1;
	let k = O.parentOffset, A = !k, j = k == O.parent.content.size, M = e.domSelection();
	return M ? !maybeRTL.test(O.parent.textContent) || !M.modify ? D == "left" || D == "backward" ? A : j : withFlushedState(e, E, () => {
		let { focusNode: E, focusOffset: k, anchorNode: A, anchorOffset: j } = e.domSelectionRange(), N = M.caretBidiLevel;
		M.modify("move", D, "character");
		let P = O.depth ? e.docView.domAfterPos(O.before()) : e.dom, { focusNode: F, focusOffset: I } = e.domSelectionRange(), L = F && !P.contains(F.nodeType == 1 ? F : F.parentNode) || E == F && k == I;
		try {
			M.collapse(A, j), E && (E != A || k != j) && M.extend && M.extend(E, k);
		} catch {}
		return N != null && (M.caretBidiLevel = N), L;
	}) : O.pos == O.start() || O.pos == O.end();
}
var cachedState = null, cachedDir = null, cachedResult = !1;
function endOfTextblock(e, E, D) {
	return cachedState == E && cachedDir == D ? cachedResult : (cachedState = E, cachedDir = D, cachedResult = D == "up" || D == "down" ? endOfTextblockVertical(e, E, D) : endOfTextblockHorizontal(e, E, D));
}
var NOT_DIRTY = 0, CHILD_DIRTY = 1, CONTENT_DIRTY = 2, NODE_DIRTY = 3, ViewDesc = class {
	constructor(e, E, D, O) {
		this.parent = e, this.children = E, this.dom = D, this.contentDOM = O, this.dirty = NOT_DIRTY, D.pmViewDesc = this;
	}
	matchesWidget(e) {
		return !1;
	}
	matchesMark(e) {
		return !1;
	}
	matchesNode(e, E, D) {
		return !1;
	}
	matchesHack(e) {
		return !1;
	}
	parseRule(e) {
		return null;
	}
	stopEvent(e) {
		return !1;
	}
	get size() {
		let e = 0;
		for (let E = 0; E < this.children.length; E++) e += this.children[E].size;
		return e;
	}
	get border() {
		return 0;
	}
	destroy() {
		this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
		for (let e = 0; e < this.children.length; e++) this.children[e].destroy();
	}
	posBeforeChild(e) {
		for (let E = 0, D = this.posAtStart;; E++) {
			let O = this.children[E];
			if (O == e) return D;
			D += O.size;
		}
	}
	get posBefore() {
		return this.parent.posBeforeChild(this);
	}
	get posAtStart() {
		return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
	}
	get posAfter() {
		return this.posBefore + this.size;
	}
	get posAtEnd() {
		return this.posAtStart + this.size - 2 * this.border;
	}
	localPosFromDOM(e, E, D) {
		if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)) if (D < 0) {
			let D, O;
			if (e == this.contentDOM) D = e.childNodes[E - 1];
			else {
				for (; e.parentNode != this.contentDOM;) e = e.parentNode;
				D = e.previousSibling;
			}
			for (; D && !((O = D.pmViewDesc) && O.parent == this);) D = D.previousSibling;
			return D ? this.posBeforeChild(O) + O.size : this.posAtStart;
		} else {
			let D, O;
			if (e == this.contentDOM) D = e.childNodes[E];
			else {
				for (; e.parentNode != this.contentDOM;) e = e.parentNode;
				D = e.nextSibling;
			}
			for (; D && !((O = D.pmViewDesc) && O.parent == this);) D = D.nextSibling;
			return D ? this.posBeforeChild(O) : this.posAtEnd;
		}
		let O;
		if (e == this.dom && this.contentDOM) O = E > domIndex(this.contentDOM);
		else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) O = e.compareDocumentPosition(this.contentDOM) & 2;
		else if (this.dom.firstChild) {
			if (E == 0) for (let E = e;; E = E.parentNode) {
				if (E == this.dom) {
					O = !1;
					break;
				}
				if (E.previousSibling) break;
			}
			if (O == null && E == e.childNodes.length) for (let E = e;; E = E.parentNode) {
				if (E == this.dom) {
					O = !0;
					break;
				}
				if (E.nextSibling) break;
			}
		}
		return O ?? D > 0 ? this.posAtEnd : this.posAtStart;
	}
	nearestDesc(e, E = !1) {
		for (let D = !0, O = e; O; O = O.parentNode) {
			let k = this.getDesc(O), A;
			if (k && (!E || k.node)) if (D && (A = k.nodeDOM) && !(A.nodeType == 1 ? A.contains(e.nodeType == 1 ? e : e.parentNode) : A == e)) D = !1;
			else return k;
		}
	}
	getDesc(e) {
		let E = e.pmViewDesc;
		for (let e = E; e; e = e.parent) if (e == this) return E;
	}
	posFromDOM(e, E, D) {
		for (let O = e; O; O = O.parentNode) {
			let k = this.getDesc(O);
			if (k) return k.localPosFromDOM(e, E, D);
		}
		return -1;
	}
	descAt(e) {
		for (let E = 0, D = 0; E < this.children.length; E++) {
			let O = this.children[E], k = D + O.size;
			if (D == e && k != D) {
				for (; !O.border && O.children.length;) for (let e = 0; e < O.children.length; e++) {
					let E = O.children[e];
					if (E.size) {
						O = E;
						break;
					}
				}
				return O;
			}
			if (e < k) return O.descAt(e - D - O.border);
			D = k;
		}
	}
	domFromPos(e, E) {
		if (!this.contentDOM) return {
			node: this.dom,
			offset: 0,
			atom: e + 1
		};
		let D = 0, O = 0;
		for (let E = 0; D < this.children.length; D++) {
			let k = this.children[D], A = E + k.size;
			if (A > e || k instanceof TrailingHackViewDesc) {
				O = e - E;
				break;
			}
			E = A;
		}
		if (O) return this.children[D].domFromPos(O - this.children[D].border, E);
		for (let e; D && !(e = this.children[D - 1]).size && e instanceof WidgetViewDesc && e.side >= 0; D--);
		if (E <= 0) {
			let e, O = !0;
			for (; e = D ? this.children[D - 1] : null, !(!e || e.dom.parentNode == this.contentDOM); D--, O = !1);
			return e && E && O && !e.border && !e.domAtom ? e.domFromPos(e.size, E) : {
				node: this.contentDOM,
				offset: e ? domIndex(e.dom) + 1 : 0
			};
		} else {
			let e, O = !0;
			for (; e = D < this.children.length ? this.children[D] : null, !(!e || e.dom.parentNode == this.contentDOM); D++, O = !1);
			return e && O && !e.border && !e.domAtom ? e.domFromPos(0, E) : {
				node: this.contentDOM,
				offset: e ? domIndex(e.dom) : this.contentDOM.childNodes.length
			};
		}
	}
	parseRange(e, E, D = 0) {
		if (this.children.length == 0) return {
			node: this.contentDOM,
			from: e,
			to: E,
			fromOffset: 0,
			toOffset: this.contentDOM.childNodes.length
		};
		let O = -1, k = -1;
		for (let A = D, j = 0;; j++) {
			let D = this.children[j], M = A + D.size;
			if (O == -1 && e <= M) {
				let k = A + D.border;
				if (e >= k && E <= M - D.border && D.node && D.contentDOM && this.contentDOM.contains(D.contentDOM)) return D.parseRange(e, E, k);
				e = A;
				for (let E = j; E > 0; E--) {
					let D = this.children[E - 1];
					if (D.size && D.dom.parentNode == this.contentDOM && !D.emptyChildAt(1)) {
						O = domIndex(D.dom) + 1;
						break;
					}
					e -= D.size;
				}
				O == -1 && (O = 0);
			}
			if (O > -1 && (M > E || j == this.children.length - 1)) {
				E = M;
				for (let e = j + 1; e < this.children.length; e++) {
					let D = this.children[e];
					if (D.size && D.dom.parentNode == this.contentDOM && !D.emptyChildAt(-1)) {
						k = domIndex(D.dom);
						break;
					}
					E += D.size;
				}
				k == -1 && (k = this.contentDOM.childNodes.length);
				break;
			}
			A = M;
		}
		return {
			node: this.contentDOM,
			from: e,
			to: E,
			fromOffset: O,
			toOffset: k
		};
	}
	emptyChildAt(e) {
		if (this.border || !this.contentDOM || !this.children.length) return !1;
		let E = this.children[e < 0 ? 0 : this.children.length - 1];
		return E.size == 0 || E.emptyChildAt(e);
	}
	domAfterPos(e) {
		let { node: E, offset: D } = this.domFromPos(e, 0);
		if (E.nodeType != 1 || D == E.childNodes.length) throw RangeError("No node after pos " + e);
		return E.childNodes[D];
	}
	setSelection(e, E, D, O = !1) {
		let k = Math.min(e, E), A = Math.max(e, E);
		for (let j = 0, M = 0; j < this.children.length; j++) {
			let N = this.children[j], P = M + N.size;
			if (k > M && A < P) return N.setSelection(e - M - N.border, E - M - N.border, D, O);
			M = P;
		}
		let j = this.domFromPos(e, e ? -1 : 1), M = E == e ? j : this.domFromPos(E, E ? -1 : 1), N = D.root.getSelection(), P = D.domSelectionRange(), F = !1;
		if ((gecko || safari) && e == E) {
			let { node: e, offset: E } = j;
			if (e.nodeType == 3) {
				if (F = !!(E && e.nodeValue[E - 1] == "\n"), F && E == e.nodeValue.length) for (let E = e, D; E; E = E.parentNode) {
					if (D = E.nextSibling) {
						D.nodeName == "BR" && (j = M = {
							node: D.parentNode,
							offset: domIndex(D) + 1
						});
						break;
					}
					let e = E.pmViewDesc;
					if (e && e.node && e.node.isBlock) break;
				}
			} else {
				let D = e.childNodes[E - 1];
				F = D && (D.nodeName == "BR" || D.contentEditable == "false");
			}
		}
		if (gecko && P.focusNode && P.focusNode != M.node && P.focusNode.nodeType == 1) {
			let e = P.focusNode.childNodes[P.focusOffset];
			e && e.contentEditable == "false" && (O = !0);
		}
		if (!(O || F && safari) && isEquivalentPosition(j.node, j.offset, P.anchorNode, P.anchorOffset) && isEquivalentPosition(M.node, M.offset, P.focusNode, P.focusOffset)) return;
		let I = !1;
		if ((N.extend || e == E) && !(F && gecko)) {
			N.collapse(j.node, j.offset);
			try {
				e != E && N.extend(M.node, M.offset), I = !0;
			} catch {}
		}
		if (!I) {
			if (e > E) {
				let e = j;
				j = M, M = e;
			}
			let D = document.createRange();
			D.setEnd(M.node, M.offset), D.setStart(j.node, j.offset), N.removeAllRanges(), N.addRange(D);
		}
	}
	ignoreMutation(e) {
		return !this.contentDOM && e.type != "selection";
	}
	get contentLost() {
		return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
	}
	markDirty(e, E) {
		for (let D = 0, O = 0; O < this.children.length; O++) {
			let k = this.children[O], A = D + k.size;
			if (D == A ? e <= A && E >= D : e < A && E > D) {
				let O = D + k.border, j = A - k.border;
				if (e >= O && E <= j) {
					this.dirty = e == D || E == A ? CONTENT_DIRTY : CHILD_DIRTY, e == O && E == j && (k.contentLost || k.dom.parentNode != this.contentDOM) ? k.dirty = NODE_DIRTY : k.markDirty(e - O, E - O);
					return;
				} else k.dirty = k.dom == k.contentDOM && k.dom.parentNode == this.contentDOM && !k.children.length ? CONTENT_DIRTY : NODE_DIRTY;
			}
			D = A;
		}
		this.dirty = CONTENT_DIRTY;
	}
	markParentsDirty() {
		let e = 1;
		for (let E = this.parent; E; E = E.parent, e++) {
			let D = e == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
			E.dirty < D && (E.dirty = D);
		}
	}
	get domAtom() {
		return !1;
	}
	get ignoreForCoords() {
		return !1;
	}
	get ignoreForSelection() {
		return !1;
	}
	isText(e) {
		return !1;
	}
}, WidgetViewDesc = class extends ViewDesc {
	constructor(e, E, D, O) {
		let k, A = E.type.toDOM;
		if (typeof A == "function" && (A = A(D, () => {
			if (!k) return O;
			if (k.parent) return k.parent.posBeforeChild(k);
		})), !E.type.spec.raw) {
			if (A.nodeType != 1) {
				let e = document.createElement("span");
				e.appendChild(A), A = e;
			}
			A.hasAttribute("contenteditable") || (A.contentEditable = "false"), A.classList.add("ProseMirror-widget");
		}
		super(e, [], A, null), this.widget = E, this.widget = E, k = this;
	}
	matchesWidget(e) {
		return this.dirty == NOT_DIRTY && e.type.eq(this.widget.type);
	}
	parseRule() {
		return { ignore: !0 };
	}
	stopEvent(e) {
		let E = this.widget.spec.stopEvent;
		return E ? E(e) : !1;
	}
	ignoreMutation(e) {
		return e.type != "selection" || this.widget.spec.ignoreSelection;
	}
	destroy() {
		this.widget.type.destroy(this.dom), super.destroy();
	}
	get domAtom() {
		return !0;
	}
	get ignoreForSelection() {
		return !!this.widget.type.spec.relaxedSide;
	}
	get side() {
		return this.widget.type.side;
	}
}, CompositionViewDesc = class extends ViewDesc {
	constructor(e, E, D, O) {
		super(e, [], E, null), this.textDOM = D, this.text = O;
	}
	get size() {
		return this.text.length;
	}
	localPosFromDOM(e, E) {
		return e == this.textDOM ? this.posAtStart + E : this.posAtStart + (E ? this.size : 0);
	}
	domFromPos(e) {
		return {
			node: this.textDOM,
			offset: e
		};
	}
	ignoreMutation(e) {
		return e.type === "characterData" && e.target.nodeValue == e.oldValue;
	}
}, MarkViewDesc = class e extends ViewDesc {
	constructor(e, E, D, O, k) {
		super(e, [], D, O), this.mark = E, this.spec = k;
	}
	static create(E, D, O, k) {
		let A = k.nodeViews[D.type.name], j = A && A(D, k, O);
		return (!j || !j.dom) && (j = DOMSerializer.renderSpec(document, D.type.spec.toDOM(D, O), null, D.attrs)), new e(E, D, j.dom, j.contentDOM || j.dom, j);
	}
	parseRule() {
		return this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView ? null : {
			mark: this.mark.type.name,
			attrs: this.mark.attrs,
			contentElement: this.contentDOM
		};
	}
	matchesMark(e) {
		return this.dirty != NODE_DIRTY && this.mark.eq(e);
	}
	markDirty(e, E) {
		if (super.markDirty(e, E), this.dirty != NOT_DIRTY) {
			let e = this.parent;
			for (; !e.node;) e = e.parent;
			e.dirty < this.dirty && (e.dirty = this.dirty), this.dirty = NOT_DIRTY;
		}
	}
	slice(E, D, O) {
		let k = e.create(this.parent, this.mark, !0, O), A = this.children, j = this.size;
		D < j && (A = replaceNodes(A, D, j, O)), E > 0 && (A = replaceNodes(A, 0, E, O));
		for (let e = 0; e < A.length; e++) A[e].parent = k;
		return k.children = A, k;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
}, NodeViewDesc = class e extends ViewDesc {
	constructor(e, E, D, O, k, A, j) {
		super(e, [], k, A), this.node = E, this.outerDeco = D, this.innerDeco = O, this.nodeDOM = j;
	}
	static create(E, D, O, k, A, j) {
		let M = A.nodeViews[D.type.name], N, P = M && M(D, A, () => {
			if (!N) return j;
			if (N.parent) return N.parent.posBeforeChild(N);
		}, O, k), F = P && P.dom, I = P && P.contentDOM;
		if (D.isText) {
			if (!F) F = document.createTextNode(D.text);
			else if (F.nodeType != 3) throw RangeError("Text must be rendered as a DOM text node");
		} else if (!F) {
			let e = DOMSerializer.renderSpec(document, D.type.spec.toDOM(D), null, D.attrs);
			({dom: F, contentDOM: I} = e);
		}
		!I && !D.isText && F.nodeName != "BR" && (F.hasAttribute("contenteditable") || (F.contentEditable = "false"), D.type.spec.draggable && (F.draggable = !0));
		let L = F;
		return F = applyOuterDeco(F, O, D), P ? N = new CustomNodeViewDesc(E, D, O, k, F, I || null, L, P) : D.isText ? new TextViewDesc(E, D, O, k, F, L) : new e(E, D, O, k, F, I || null, L);
	}
	parseRule(e) {
		if (this.node.type.spec.reparseInView) return null;
		let E = {
			node: this.node.type.name,
			attrs: this.node.attrs
		};
		if (this.node.type.whitespace == "pre" && (E.preserveWhitespace = "full"), !this.contentDOM) E.getContent = () => this.node.content;
		else if (!this.contentLost) E.contentElement = this.contentDOM;
		else {
			for (let e = this.children.length - 1; e >= 0; e--) {
				let D = this.children[e];
				if (this.dom.contains(D.dom.parentNode)) {
					E.contentElement = D.dom.parentNode;
					break;
				}
			}
			if (!E.contentElement) {
				let D = e && e.find((E) => E.nodeType == 1 && e.indexOf(E.parentNode) < 0 && this.dom.contains(E));
				D ? E.contentElement = D : E.getContent = () => Fragment.empty;
			}
		}
		return E;
	}
	matchesNode(e, E, D) {
		return this.dirty == NOT_DIRTY && e.eq(this.node) && sameOuterDeco(E, this.outerDeco) && D.eq(this.innerDeco);
	}
	get size() {
		return this.node.nodeSize;
	}
	get border() {
		return this.node.isLeaf ? 0 : 1;
	}
	updateChildren(e, E) {
		let D = this.node.inlineContent, O = E, k = e.composing ? this.localCompositionInfo(e, E) : null, A = k && k.pos > -1 ? k : null, j = k && k.pos < 0, M = new ViewTreeUpdater(this, A && A.node, e);
		iterDeco(this.node, this.innerDeco, (E, k, A) => {
			E.spec.marks ? M.syncToMarks(E.spec.marks, D, e, k) : E.type.side >= 0 && !A && M.syncToMarks(k == this.node.childCount ? Mark$1.none : this.node.child(k).marks, D, e, k), M.placeWidget(E, e, O);
		}, (E, A, N, P) => {
			M.syncToMarks(E.marks, D, e, P);
			let F;
			M.findNodeMatch(E, A, N, P) || j && e.state.selection.from > O && e.state.selection.to < O + E.nodeSize && (F = M.findIndexWithChild(k.node)) > -1 && M.updateNodeAt(E, A, N, F, e) || M.updateNextNode(E, A, N, e, P, O) || M.addNode(E, A, N, e, O), O += E.nodeSize;
		}), M.syncToMarks([], D, e, 0), this.node.isTextblock && M.addTextblockHacks(), M.destroyRest(), (M.changed || this.dirty == CONTENT_DIRTY) && (A && this.protectLocalComposition(e, A), renderDescs(this.contentDOM, this.children, e), ios && iosHacks(this.dom));
	}
	localCompositionInfo(e, E) {
		let { from: D, to: O } = e.state.selection;
		if (!(e.state.selection instanceof TextSelection) || D < E || O > E + this.node.content.size) return null;
		let k = e.input.compositionNode;
		if (!k || !this.dom.contains(k.parentNode)) return null;
		if (this.node.inlineContent) {
			let e = k.nodeValue, A = findTextInFragment(this.node.content, e, D - E, O - E);
			return A < 0 ? null : {
				node: k,
				pos: A,
				text: e
			};
		} else return {
			node: k,
			pos: -1,
			text: ""
		};
	}
	protectLocalComposition(e, { node: E, pos: D, text: O }) {
		if (this.getDesc(E)) return;
		let k = E;
		for (; k.parentNode != this.contentDOM; k = k.parentNode) {
			for (; k.previousSibling;) k.parentNode.removeChild(k.previousSibling);
			for (; k.nextSibling;) k.parentNode.removeChild(k.nextSibling);
			k.pmViewDesc &&= void 0;
		}
		let A = new CompositionViewDesc(this, k, E, O);
		e.input.compositionNodes.push(A), this.children = replaceNodes(this.children, D, D + O.length, e, A);
	}
	update(e, E, D, O) {
		return this.dirty == NODE_DIRTY || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, E, D, O), !0);
	}
	updateInner(e, E, D, O) {
		this.updateOuterDeco(E), this.node = e, this.innerDeco = D, this.contentDOM && this.updateChildren(O, this.posAtStart), this.dirty = NOT_DIRTY;
	}
	updateOuterDeco(e) {
		if (sameOuterDeco(e, this.outerDeco)) return;
		let E = this.nodeDOM.nodeType != 1, D = this.dom;
		this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, E), computeOuterDeco(e, this.node, E)), this.dom != D && (D.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
	}
	selectNode() {
		this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
	}
	deselectNode() {
		this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
	}
	get domAtom() {
		return this.node.isAtom;
	}
};
function docViewDesc(e, E, D, O, k) {
	applyOuterDeco(O, E, e);
	let A = new NodeViewDesc(void 0, e, E, D, O, O, O);
	return A.contentDOM && A.updateChildren(k, 0), A;
}
var TextViewDesc = class e extends NodeViewDesc {
	constructor(e, E, D, O, k, A) {
		super(e, E, D, O, k, null, A);
	}
	parseRule() {
		let e = this.nodeDOM.parentNode;
		for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
		return { skip: e || !0 };
	}
	update(e, E, D, O) {
		return this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(E), (this.dirty != NOT_DIRTY || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, O.trackWrites == this.nodeDOM && (O.trackWrites = null)), this.node = e, this.dirty = NOT_DIRTY, !0);
	}
	inParent() {
		let e = this.parent.contentDOM;
		for (let E = this.nodeDOM; E; E = E.parentNode) if (E == e) return !0;
		return !1;
	}
	domFromPos(e) {
		return {
			node: this.nodeDOM,
			offset: e
		};
	}
	localPosFromDOM(e, E, D) {
		return e == this.nodeDOM ? this.posAtStart + Math.min(E, this.node.text.length) : super.localPosFromDOM(e, E, D);
	}
	ignoreMutation(e) {
		return e.type != "characterData" && e.type != "selection";
	}
	slice(E, D, O) {
		let k = this.node.cut(E, D), A = document.createTextNode(k.text);
		return new e(this.parent, k, this.outerDeco, this.innerDeco, A, A);
	}
	markDirty(e, E) {
		super.markDirty(e, E), this.dom != this.nodeDOM && (e == 0 || E == this.nodeDOM.nodeValue.length) && (this.dirty = NODE_DIRTY);
	}
	get domAtom() {
		return !1;
	}
	isText(e) {
		return this.node.text == e;
	}
}, TrailingHackViewDesc = class extends ViewDesc {
	parseRule() {
		return { ignore: !0 };
	}
	matchesHack(e) {
		return this.dirty == NOT_DIRTY && this.dom.nodeName == e;
	}
	get domAtom() {
		return !0;
	}
	get ignoreForCoords() {
		return this.dom.nodeName == "IMG";
	}
}, CustomNodeViewDesc = class extends NodeViewDesc {
	constructor(e, E, D, O, k, A, j, M) {
		super(e, E, D, O, k, A, j), this.spec = M;
	}
	update(e, E, D, O) {
		if (this.dirty == NODE_DIRTY) return !1;
		if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
			let k = this.spec.update(e, E, D);
			return k && this.updateInner(e, E, D, O), k;
		} else if (!this.contentDOM && !e.isLeaf) return !1;
		else return super.update(e, E, D, O);
	}
	selectNode() {
		this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
	}
	deselectNode() {
		this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
	}
	setSelection(e, E, D, O) {
		this.spec.setSelection ? this.spec.setSelection(e, E, D.root) : super.setSelection(e, E, D, O);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
	stopEvent(e) {
		return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
};
function renderDescs(e, E, D) {
	let O = e.firstChild, k = !1;
	for (let A = 0; A < E.length; A++) {
		let j = E[A], M = j.dom;
		if (M.parentNode == e) {
			for (; M != O;) O = rm(O), k = !0;
			O = O.nextSibling;
		} else k = !0, e.insertBefore(M, O);
		if (j instanceof MarkViewDesc) {
			let E = O ? O.previousSibling : e.lastChild;
			renderDescs(j.contentDOM, j.children, D), O = E ? E.nextSibling : e.firstChild;
		}
	}
	for (; O;) O = rm(O), k = !0;
	k && D.trackWrites == e && (D.trackWrites = null);
}
var OuterDecoLevel = function(e) {
	e && (this.nodeName = e);
};
OuterDecoLevel.prototype = Object.create(null);
var noDeco = [new OuterDecoLevel()];
function computeOuterDeco(e, E, D) {
	if (e.length == 0) return noDeco;
	let O = D ? noDeco[0] : new OuterDecoLevel(), k = [O];
	for (let A = 0; A < e.length; A++) {
		let j = e[A].type.attrs;
		if (j) for (let e in j.nodeName && k.push(O = new OuterDecoLevel(j.nodeName)), j) {
			let A = j[e];
			A != null && (D && k.length == 1 && k.push(O = new OuterDecoLevel(E.isInline ? "span" : "div")), e == "class" ? O.class = (O.class ? O.class + " " : "") + A : e == "style" ? O.style = (O.style ? O.style + ";" : "") + A : e != "nodeName" && (O[e] = A));
		}
	}
	return k;
}
function patchOuterDeco(e, E, D, O) {
	if (D == noDeco && O == noDeco) return E;
	let k = E;
	for (let E = 0; E < O.length; E++) {
		let A = O[E], j = D[E];
		if (E) {
			let E;
			j && j.nodeName == A.nodeName && k != e && (E = k.parentNode) && E.nodeName.toLowerCase() == A.nodeName ? k = E : (E = document.createElement(A.nodeName), E.pmIsDeco = !0, E.appendChild(k), j = noDeco[0], k = E);
		}
		patchAttributes(k, j || noDeco[0], A);
	}
	return k;
}
function patchAttributes(e, E, D) {
	for (let O in E) O != "class" && O != "style" && O != "nodeName" && !(O in D) && e.removeAttribute(O);
	for (let O in D) O != "class" && O != "style" && O != "nodeName" && D[O] != E[O] && e.setAttribute(O, D[O]);
	if (E.class != D.class) {
		let O = E.class ? E.class.split(" ").filter(Boolean) : [], k = D.class ? D.class.split(" ").filter(Boolean) : [];
		for (let E = 0; E < O.length; E++) k.indexOf(O[E]) == -1 && e.classList.remove(O[E]);
		for (let E = 0; E < k.length; E++) O.indexOf(k[E]) == -1 && e.classList.add(k[E]);
		e.classList.length == 0 && e.removeAttribute("class");
	}
	if (E.style != D.style) {
		if (E.style) {
			let D = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, O;
			for (; O = D.exec(E.style);) e.style.removeProperty(O[1]);
		}
		D.style && (e.style.cssText += D.style);
	}
}
function applyOuterDeco(e, E, D) {
	return patchOuterDeco(e, e, noDeco, computeOuterDeco(E, D, e.nodeType != 1));
}
function sameOuterDeco(e, E) {
	if (e.length != E.length) return !1;
	for (let D = 0; D < e.length; D++) if (!e[D].type.eq(E[D].type)) return !1;
	return !0;
}
function rm(e) {
	let E = e.nextSibling;
	return e.parentNode.removeChild(e), E;
}
var ViewTreeUpdater = class {
	constructor(e, E, D) {
		this.lock = E, this.view = D, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = preMatch(e.node.content, e);
	}
	destroyBetween(e, E) {
		if (e != E) {
			for (let D = e; D < E; D++) this.top.children[D].destroy();
			this.top.children.splice(e, E - e), this.changed = !0;
		}
	}
	destroyRest() {
		this.destroyBetween(this.index, this.top.children.length);
	}
	syncToMarks(e, E, D, O) {
		let k = 0, A = this.stack.length >> 1, j = Math.min(A, e.length);
		for (; k < j && (k == A - 1 ? this.top : this.stack[k + 1 << 1]).matchesMark(e[k]) && e[k].type.spec.spanning !== !1;) k++;
		for (; k < A;) this.destroyRest(), this.top.dirty = NOT_DIRTY, this.index = this.stack.pop(), this.top = this.stack.pop(), A--;
		for (; A < e.length;) {
			this.stack.push(this.top, this.index + 1);
			let k = -1, j = this.top.children.length;
			O < this.preMatch.index && (j = Math.min(this.index + 3, j));
			for (let E = this.index; E < j; E++) {
				let D = this.top.children[E];
				if (D.matchesMark(e[A]) && !this.isLocked(D.dom)) {
					k = E;
					break;
				}
			}
			if (k < 0 && this.index < this.top.children.length) {
				let E = this.top.children[this.index];
				E instanceof MarkViewDesc && E.dirty != NODE_DIRTY && E.mark.type == e[A].type && E.spec.update && !this.isLocked(E.dom) && E.spec.update(e[A]) && (E.mark = e[A], k = this.index, this.changed = !0);
			}
			if (k > -1) k > this.index && (this.changed = !0, this.destroyBetween(this.index, k)), this.top = this.top.children[this.index];
			else {
				let O = MarkViewDesc.create(this.top, e[A], E, D);
				this.top.children.splice(this.index, 0, O), this.top = O, this.changed = !0;
			}
			this.index = 0, A++;
		}
	}
	findNodeMatch(e, E, D, O) {
		let k = -1, A;
		if (O >= this.preMatch.index && (A = this.preMatch.matches[O - this.preMatch.index]).parent == this.top && A.matchesNode(e, E, D)) k = this.top.children.indexOf(A, this.index);
		else for (let O = this.index, A = Math.min(this.top.children.length, O + 5); O < A; O++) {
			let A = this.top.children[O];
			if (A.matchesNode(e, E, D) && !this.preMatch.matched.has(A)) {
				k = O;
				break;
			}
		}
		return k < 0 ? !1 : (this.destroyBetween(this.index, k), this.index++, !0);
	}
	updateNodeAt(e, E, D, O, k) {
		let A = this.top.children[O];
		return A.dirty == NODE_DIRTY && A.dom == A.contentDOM && (A.dirty = CONTENT_DIRTY), A.update(e, E, D, k) ? (this.destroyBetween(this.index, O), this.index++, !0) : !1;
	}
	findIndexWithChild(e) {
		for (;;) {
			let E = e.parentNode;
			if (!E) return -1;
			if (E == this.top.contentDOM) {
				let E = e.pmViewDesc;
				if (E) {
					for (let e = this.index; e < this.top.children.length; e++) if (this.top.children[e] == E) return e;
				}
				return -1;
			}
			e = E;
		}
	}
	updateNextNode(e, E, D, O, k, A) {
		for (let j = this.index; j < this.top.children.length; j++) {
			let M = this.top.children[j];
			if (M instanceof NodeViewDesc) {
				let N = this.preMatch.matched.get(M);
				if (N != null && N != k) return !1;
				let P = M.dom, F, I = this.isLocked(P) && !(e.isText && M.node && M.node.isText && M.nodeDOM.nodeValue == e.text && M.dirty != NODE_DIRTY && sameOuterDeco(E, M.outerDeco));
				if (!I && M.update(e, E, D, O)) return this.destroyBetween(this.index, j), M.dom != P && (this.changed = !0), this.index++, !0;
				if (!I && (F = this.recreateWrapper(M, e, E, D, O, A))) return this.destroyBetween(this.index, j), this.top.children[this.index] = F, F.contentDOM && (F.dirty = CONTENT_DIRTY, F.updateChildren(O, A + 1), F.dirty = NOT_DIRTY), this.changed = !0, this.index++, !0;
				break;
			}
		}
		return !1;
	}
	recreateWrapper(e, E, D, O, k, A) {
		if (e.dirty || E.isAtom || !e.children.length || !e.node.content.eq(E.content) || !sameOuterDeco(D, e.outerDeco) || !O.eq(e.innerDeco)) return null;
		let j = NodeViewDesc.create(this.top, E, D, O, k, A);
		if (j.contentDOM) {
			j.children = e.children, e.children = [];
			for (let e of j.children) e.parent = j;
		}
		return e.destroy(), j;
	}
	addNode(e, E, D, O, k) {
		let A = NodeViewDesc.create(this.top, e, E, D, O, k);
		A.contentDOM && A.updateChildren(O, k + 1), this.top.children.splice(this.index++, 0, A), this.changed = !0;
	}
	placeWidget(e, E, D) {
		let O = this.index < this.top.children.length ? this.top.children[this.index] : null;
		if (O && O.matchesWidget(e) && (e == O.widget || !O.widget.type.toDOM.parentNode)) this.index++;
		else {
			let O = new WidgetViewDesc(this.top, e, E, D);
			this.top.children.splice(this.index++, 0, O), this.changed = !0;
		}
	}
	addTextblockHacks() {
		let e = this.top.children[this.index - 1], E = this.top;
		for (; e instanceof MarkViewDesc;) E = e, e = E.children[E.children.length - 1];
		(!e || !(e instanceof TextViewDesc) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((safari || chrome) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", E), this.addHackNode("BR", this.top));
	}
	addHackNode(e, E) {
		if (E == this.top && this.index < E.children.length && E.children[this.index].matchesHack(e)) this.index++;
		else {
			let D = document.createElement(e);
			e == "IMG" && (D.className = "ProseMirror-separator", D.alt = ""), e == "BR" && (D.className = "ProseMirror-trailingBreak");
			let O = new TrailingHackViewDesc(this.top, [], D, null);
			E == this.top ? E.children.splice(this.index++, 0, O) : E.children.push(O), this.changed = !0;
		}
	}
	isLocked(e) {
		return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
	}
};
function preMatch(e, E) {
	let D = E, O = D.children.length, k = e.childCount, A = /* @__PURE__ */ new Map(), j = [];
	outer: for (; k > 0;) {
		let M;
		for (;;) if (O) {
			let e = D.children[O - 1];
			if (e instanceof MarkViewDesc) D = e, O = e.children.length;
			else {
				M = e, O--;
				break;
			}
		} else if (D == E) break outer;
		else O = D.parent.children.indexOf(D), D = D.parent;
		let N = M.node;
		if (N) {
			if (N != e.child(k - 1)) break;
			--k, A.set(M, k), j.push(M);
		}
	}
	return {
		index: k,
		matched: A,
		matches: j.reverse()
	};
}
function compareSide(e, E) {
	return e.type.side - E.type.side;
}
function iterDeco(e, E, D, O) {
	let k = E.locals(e), A = 0;
	if (k.length == 0) {
		for (let D = 0; D < e.childCount; D++) {
			let j = e.child(D);
			O(j, k, E.forChild(A, j), D), A += j.nodeSize;
		}
		return;
	}
	let j = 0, M = [], N = null;
	for (let P = 0;;) {
		let F, I;
		for (; j < k.length && k[j].to == A;) {
			let e = k[j++];
			e.widget && (F ? (I ||= [F]).push(e) : F = e);
		}
		if (F) if (I) {
			I.sort(compareSide);
			for (let e = 0; e < I.length; e++) D(I[e], P, !!N);
		} else D(F, P, !!N);
		let L, R;
		if (N) R = -1, L = N, N = null;
		else if (P < e.childCount) R = P, L = e.child(P++);
		else break;
		for (let e = 0; e < M.length; e++) M[e].to <= A && M.splice(e--, 1);
		for (; j < k.length && k[j].from <= A && k[j].to > A;) M.push(k[j++]);
		let z = A + L.nodeSize;
		if (L.isText) {
			let e = z;
			j < k.length && k[j].from < e && (e = k[j].from);
			for (let E = 0; E < M.length; E++) M[E].to < e && (e = M[E].to);
			e < z && (N = L.cut(e - A), L = L.cut(0, e - A), z = e, R = -1);
		} else for (; j < k.length && k[j].to < z;) j++;
		let B = L.isInline && !L.isLeaf ? M.filter((e) => !e.inline) : M.slice();
		O(L, B, E.forChild(A, L), R), A = z;
	}
}
function iosHacks(e) {
	if (e.nodeName == "UL" || e.nodeName == "OL") {
		let E = e.style.cssText;
		e.style.cssText = E + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = E;
	}
}
function findTextInFragment(e, E, D, O) {
	for (let k = 0, A = 0; k < e.childCount && A <= O;) {
		let j = e.child(k++), M = A;
		if (A += j.nodeSize, !j.isText) continue;
		let N = j.text;
		for (; k < e.childCount;) {
			let E = e.child(k++);
			if (A += E.nodeSize, !E.isText) break;
			N += E.text;
		}
		if (A >= D) {
			if (A >= O && N.slice(O - E.length - M, O - M) == E) return O - E.length;
			let e = M < O ? N.lastIndexOf(E, O - M - 1) : -1;
			if (e >= 0 && e + E.length + M >= D) return M + e;
			if (D == O && N.length >= O + E.length - M && N.slice(O - M, O - M + E.length) == E) return O;
		}
	}
	return -1;
}
function replaceNodes(e, E, D, O, k) {
	let A = [];
	for (let j = 0, M = 0; j < e.length; j++) {
		let N = e[j], P = M, F = M += N.size;
		P >= D || F <= E ? A.push(N) : (P < E && A.push(N.slice(0, E - P, O)), k &&= (A.push(k), void 0), F > D && A.push(N.slice(D - P, N.size, O)));
	}
	return A;
}
function selectionFromDOM(e, E = null) {
	let D = e.domSelectionRange(), O = e.state.doc;
	if (!D.focusNode) return null;
	let k = e.docView.nearestDesc(D.focusNode), A = k && k.size == 0, j = e.docView.posFromDOM(D.focusNode, D.focusOffset, 1);
	if (j < 0) return null;
	let M = O.resolve(j), N, P;
	if (selectionCollapsed(D)) {
		for (N = j; k && !k.node;) k = k.parent;
		let e = k.node;
		if (k && e.isAtom && NodeSelection.isSelectable(e) && k.parent && !(e.isInline && isOnEdge(D.focusNode, D.focusOffset, k.dom))) {
			let e = k.posBefore;
			P = new NodeSelection(j == e ? M : O.resolve(e));
		}
	} else {
		if (D instanceof e.dom.ownerDocument.defaultView.Selection && D.rangeCount > 1) {
			let E = j, k = j;
			for (let O = 0; O < D.rangeCount; O++) {
				let A = D.getRangeAt(O);
				E = Math.min(E, e.docView.posFromDOM(A.startContainer, A.startOffset, 1)), k = Math.max(k, e.docView.posFromDOM(A.endContainer, A.endOffset, -1));
			}
			if (E < 0) return null;
			[N, j] = k == e.state.selection.anchor ? [k, E] : [E, k], M = O.resolve(j);
		} else N = e.docView.posFromDOM(D.anchorNode, D.anchorOffset, 1);
		if (N < 0) return null;
	}
	let F = O.resolve(N);
	if (!P) {
		let D = E == "pointer" || e.state.selection.head < M.pos && !A ? 1 : -1;
		P = selectionBetween(e, F, M, D);
	}
	return P;
}
function editorOwnsSelection(e) {
	return e.editable ? e.hasFocus() : hasSelection(e) && document.activeElement && document.activeElement.contains(e.dom);
}
function selectionToDOM(e, E = !1) {
	let D = e.state.selection;
	if (syncNodeSelection(e, D), !editorOwnsSelection(e)) return;
	let O = e.input.mouseDown;
	if (!E && chrome && O) {
		let E = e.domSelectionRange(), D = e.domObserver.currentSelection;
		if (E.anchorNode && D.anchorNode && isEquivalentPosition(E.anchorNode, E.anchorOffset, D.anchorNode, D.anchorOffset) && O.delaySelUpdate()) {
			e.domObserver.setCurSelection();
			return;
		}
	}
	if (e.domObserver.disconnectSelection(), e.cursorWrapper) selectCursorWrapper(e);
	else {
		let { anchor: O, head: k } = D, A, j;
		brokenSelectBetweenUneditable && !(D instanceof TextSelection) && (D.$from.parent.inlineContent || (A = temporarilyEditableNear(e, D.from)), !D.empty && !D.$from.parent.inlineContent && (j = temporarilyEditableNear(e, D.to))), e.docView.setSelection(O, k, e, E), brokenSelectBetweenUneditable && (A && resetEditable(A), j && resetEditable(j)), D.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && removeClassOnSelectionChange(e));
	}
	e.domObserver.setCurSelection(), e.domObserver.connectSelection();
}
var brokenSelectBetweenUneditable = safari || chrome && chrome_version < 63;
function temporarilyEditableNear(e, E) {
	let { node: D, offset: O } = e.docView.domFromPos(E, 0), k = O < D.childNodes.length ? D.childNodes[O] : null, A = O ? D.childNodes[O - 1] : null;
	if (safari && k && k.contentEditable == "false") return setEditable(k);
	if ((!k || k.contentEditable == "false") && (!A || A.contentEditable == "false")) {
		if (k) return setEditable(k);
		if (A) return setEditable(A);
	}
}
function setEditable(e) {
	return e.contentEditable = "true", safari && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
}
function resetEditable(e) {
	e.contentEditable = "false", e.wasDraggable &&= (e.draggable = !0, null);
}
function removeClassOnSelectionChange(e) {
	let E = e.dom.ownerDocument;
	E.removeEventListener("selectionchange", e.input.hideSelectionGuard);
	let D = e.domSelectionRange(), O = D.anchorNode, k = D.anchorOffset;
	E.addEventListener("selectionchange", e.input.hideSelectionGuard = () => {
		(D.anchorNode != O || D.anchorOffset != k) && (E.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(() => {
			(!editorOwnsSelection(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection");
		}, 20));
	});
}
function selectCursorWrapper(e) {
	let E = e.domSelection();
	if (!E) return;
	let D = e.cursorWrapper.dom, O = D.nodeName == "IMG";
	O ? E.collapse(D.parentNode, domIndex(D) + 1) : E.collapse(D, 0), !O && !e.state.selection.visible && ie$1 && ie_version <= 11 && (D.disabled = !0, D.disabled = !1);
}
function syncNodeSelection(e, E) {
	if (E instanceof NodeSelection) {
		let D = e.docView.descAt(E.from);
		D != e.lastSelectedViewDesc && (clearNodeSelection(e), D && D.selectNode(), e.lastSelectedViewDesc = D);
	} else clearNodeSelection(e);
}
function clearNodeSelection(e) {
	e.lastSelectedViewDesc &&= (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), void 0);
}
function selectionBetween(e, E, D, O) {
	return e.someProp("createSelectionBetween", (O) => O(e, E, D)) || TextSelection.between(E, D, O);
}
function hasFocusAndSelection(e) {
	return e.editable && !e.hasFocus() ? !1 : hasSelection(e);
}
function hasSelection(e) {
	let E = e.domSelectionRange();
	if (!E.anchorNode) return !1;
	try {
		return e.dom.contains(E.anchorNode.nodeType == 3 ? E.anchorNode.parentNode : E.anchorNode) && (e.editable || e.dom.contains(E.focusNode.nodeType == 3 ? E.focusNode.parentNode : E.focusNode));
	} catch {
		return !1;
	}
}
function anchorInRightPlace(e) {
	let E = e.docView.domFromPos(e.state.selection.anchor, 0), D = e.domSelectionRange();
	return isEquivalentPosition(E.node, E.offset, D.anchorNode, D.anchorOffset);
}
function moveSelectionBlock(e, E) {
	let { $anchor: D, $head: O } = e.selection, k = E > 0 ? D.max(O) : D.min(O), A = k.parent.inlineContent ? k.depth ? e.doc.resolve(E > 0 ? k.after() : k.before()) : null : k;
	return A && Selection$1.findFrom(A, E);
}
function apply(e, E) {
	return e.dispatch(e.state.tr.setSelection(E).scrollIntoView()), !0;
}
function selectHorizontally(e, E, D) {
	let O = e.state.selection;
	if (O instanceof TextSelection) if (D.indexOf("s") > -1) {
		let { $head: D } = O, k = D.textOffset ? null : E < 0 ? D.nodeBefore : D.nodeAfter;
		if (!k || k.isText || !k.isLeaf) return !1;
		let A = e.state.doc.resolve(D.pos + k.nodeSize * (E < 0 ? -1 : 1));
		return apply(e, new TextSelection(O.$anchor, A));
	} else if (O.empty) {
		if (e.endOfTextblock(E > 0 ? "forward" : "backward")) {
			let D = moveSelectionBlock(e.state, E);
			return D && D instanceof NodeSelection ? apply(e, D) : !1;
		} else if (!(mac$2 && D.indexOf("m") > -1)) {
			let D = O.$head, k = D.textOffset ? null : E < 0 ? D.nodeBefore : D.nodeAfter, A;
			if (!k || k.isText) return !1;
			let j = E < 0 ? D.pos - k.nodeSize : D.pos;
			return k.isAtom || (A = e.docView.descAt(j)) && !A.contentDOM ? NodeSelection.isSelectable(k) ? apply(e, new NodeSelection(E < 0 ? e.state.doc.resolve(D.pos - k.nodeSize) : D)) : webkit ? apply(e, new TextSelection(e.state.doc.resolve(E < 0 ? j : j + k.nodeSize))) : !1 : !1;
		}
	} else return !1;
	else if (O instanceof NodeSelection && O.node.isInline) return apply(e, new TextSelection(E > 0 ? O.$to : O.$from));
	else {
		let D = moveSelectionBlock(e.state, E);
		return D ? apply(e, D) : !1;
	}
}
function nodeLen(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function isIgnorable(e, E) {
	let D = e.pmViewDesc;
	return D && D.size == 0 && (E < 0 || e.nextSibling || e.nodeName != "BR");
}
function skipIgnoredNodes(e, E) {
	return E < 0 ? skipIgnoredNodesBefore(e) : skipIgnoredNodesAfter(e);
}
function skipIgnoredNodesBefore(e) {
	let E = e.domSelectionRange(), D = E.focusNode, O = E.focusOffset;
	if (!D) return;
	let k, A, j = !1;
	for (gecko && D.nodeType == 1 && O < nodeLen(D) && isIgnorable(D.childNodes[O], -1) && (j = !0);;) if (O > 0) {
		if (D.nodeType != 1) break;
		{
			let e = D.childNodes[O - 1];
			if (isIgnorable(e, -1)) k = D, A = --O;
			else if (e.nodeType == 3) D = e, O = D.nodeValue.length;
			else break;
		}
	} else if (isBlockNode(D)) break;
	else {
		let E = D.previousSibling;
		for (; E && isIgnorable(E, -1);) k = D.parentNode, A = domIndex(E), E = E.previousSibling;
		if (E) D = E, O = nodeLen(D);
		else {
			if (D = D.parentNode, D == e.dom) break;
			O = 0;
		}
	}
	j ? setSelFocus(e, D, O) : k && setSelFocus(e, k, A);
}
function skipIgnoredNodesAfter(e) {
	let E = e.domSelectionRange(), D = E.focusNode, O = E.focusOffset;
	if (!D) return;
	let k = nodeLen(D), A, j;
	for (;;) if (O < k) {
		if (D.nodeType != 1) break;
		let e = D.childNodes[O];
		if (isIgnorable(e, 1)) A = D, j = ++O;
		else break;
	} else if (isBlockNode(D)) break;
	else {
		let E = D.nextSibling;
		for (; E && isIgnorable(E, 1);) A = E.parentNode, j = domIndex(E) + 1, E = E.nextSibling;
		if (E) D = E, O = 0, k = nodeLen(D);
		else {
			if (D = D.parentNode, D == e.dom) break;
			O = k = 0;
		}
	}
	A && setSelFocus(e, A, j);
}
function isBlockNode(e) {
	let E = e.pmViewDesc;
	return E && E.node && E.node.isBlock;
}
function textNodeAfter(e, E) {
	for (; e && E == e.childNodes.length && !hasBlockDesc(e);) E = domIndex(e) + 1, e = e.parentNode;
	for (; e && E < e.childNodes.length;) {
		let D = e.childNodes[E];
		if (D.nodeType == 3) return D;
		if (D.nodeType == 1 && D.contentEditable == "false") break;
		e = D, E = 0;
	}
}
function textNodeBefore(e, E) {
	for (; e && !E && !hasBlockDesc(e);) E = domIndex(e), e = e.parentNode;
	for (; e && E;) {
		let D = e.childNodes[E - 1];
		if (D.nodeType == 3) return D;
		if (D.nodeType == 1 && D.contentEditable == "false") break;
		e = D, E = e.childNodes.length;
	}
}
function setSelFocus(e, E, D) {
	if (E.nodeType != 3) {
		let e, O;
		(O = textNodeAfter(E, D)) ? (E = O, D = 0) : (e = textNodeBefore(E, D)) && (E = e, D = e.nodeValue.length);
	}
	let O = e.domSelection();
	if (!O) return;
	if (selectionCollapsed(O)) {
		let e = document.createRange();
		e.setEnd(E, D), e.setStart(E, D), O.removeAllRanges(), O.addRange(e);
	} else O.extend && O.extend(E, D);
	e.domObserver.setCurSelection();
	let { state: k } = e;
	setTimeout(() => {
		e.state == k && selectionToDOM(e);
	}, 50);
}
function findDirection(e, E) {
	let D = e.state.doc.resolve(E);
	if (!(chrome || windows$1) && D.parent.inlineContent) {
		let O = e.coordsAtPos(E);
		if (E > D.start()) {
			let D = e.coordsAtPos(E - 1), k = (D.top + D.bottom) / 2;
			if (k > O.top && k < O.bottom && Math.abs(D.left - O.left) > 1) return D.left < O.left ? "ltr" : "rtl";
		}
		if (E < D.end()) {
			let D = e.coordsAtPos(E + 1), k = (D.top + D.bottom) / 2;
			if (k > O.top && k < O.bottom && Math.abs(D.left - O.left) > 1) return D.left > O.left ? "ltr" : "rtl";
		}
	}
	return getComputedStyle(e.dom).direction == "rtl" ? "rtl" : "ltr";
}
function selectVertically(e, E, D) {
	let O = e.state.selection;
	if (O instanceof TextSelection && !O.empty || D.indexOf("s") > -1 || mac$2 && D.indexOf("m") > -1) return !1;
	let { $from: k, $to: A } = O;
	if (!k.parent.inlineContent || e.endOfTextblock(E < 0 ? "up" : "down")) {
		let D = moveSelectionBlock(e.state, E);
		if (D && D instanceof NodeSelection) return apply(e, D);
	}
	if (!k.parent.inlineContent) {
		let D = E < 0 ? k : A, j = O instanceof AllSelection ? Selection$1.near(D, E) : Selection$1.findFrom(D, E);
		return j ? apply(e, j) : !1;
	}
	return !1;
}
function stopNativeHorizontalDelete(e, E) {
	if (!(e.state.selection instanceof TextSelection)) return !0;
	let { $head: D, $anchor: O, empty: k } = e.state.selection;
	if (!D.sameParent(O)) return !0;
	if (!k) return !1;
	if (e.endOfTextblock(E > 0 ? "forward" : "backward")) return !0;
	let A = !D.textOffset && (E < 0 ? D.nodeBefore : D.nodeAfter);
	if (A && !A.isText) {
		let O = e.state.tr;
		return E < 0 ? O.delete(D.pos - A.nodeSize, D.pos) : O.delete(D.pos, D.pos + A.nodeSize), e.dispatch(O), !0;
	}
	return !1;
}
function switchEditable(e, E, D) {
	e.domObserver.stop(), E.contentEditable = D, e.domObserver.start();
}
function safariDownArrowBug(e) {
	if (!safari || e.state.selection.$head.parentOffset > 0) return !1;
	let { focusNode: E, focusOffset: D } = e.domSelectionRange();
	if (E && E.nodeType == 1 && D == 0 && E.firstChild && E.firstChild.contentEditable == "false") {
		let D = E.firstChild;
		switchEditable(e, D, "true"), setTimeout(() => switchEditable(e, D, "false"), 20);
	}
	return !1;
}
function getMods(e) {
	let E = "";
	return e.ctrlKey && (E += "c"), e.metaKey && (E += "m"), e.altKey && (E += "a"), e.shiftKey && (E += "s"), E;
}
function captureKeyDown(e, E) {
	let D = E.keyCode, O = getMods(E);
	if (D == 8 || mac$2 && D == 72 && O == "c") return stopNativeHorizontalDelete(e, -1) || skipIgnoredNodes(e, -1);
	if (D == 46 && !E.shiftKey || mac$2 && D == 68 && O == "c") return stopNativeHorizontalDelete(e, 1) || skipIgnoredNodes(e, 1);
	if (D == 13 || D == 27) return !0;
	if (D == 37 || mac$2 && D == 66 && O == "c") {
		let E = D == 37 ? findDirection(e, e.state.selection.from) == "ltr" ? -1 : 1 : -1;
		return selectHorizontally(e, E, O) || skipIgnoredNodes(e, E);
	} else if (D == 39 || mac$2 && D == 70 && O == "c") {
		let E = D == 39 ? findDirection(e, e.state.selection.from) == "ltr" ? 1 : -1 : 1;
		return selectHorizontally(e, E, O) || skipIgnoredNodes(e, E);
	} else if (D == 38 || mac$2 && D == 80 && O == "c") return selectVertically(e, -1, O) || skipIgnoredNodes(e, -1);
	else if (D == 40 || mac$2 && D == 78 && O == "c") return safariDownArrowBug(e) || selectVertically(e, 1, O) || skipIgnoredNodes(e, 1);
	else if (O == (mac$2 ? "m" : "c") && (D == 66 || D == 73 || D == 89 || D == 90)) return !0;
	return !1;
}
function serializeForClipboard(e, E) {
	e.someProp("transformCopied", (D) => {
		E = D(E, e);
	});
	let D = [], { content: O, openStart: k, openEnd: A } = E;
	for (; k > 1 && A > 1 && O.childCount == 1 && O.firstChild.childCount == 1;) {
		k--, A--;
		let e = O.firstChild;
		D.push(e.type.name, e.attrs == e.type.defaultAttrs ? null : e.attrs), O = e.content;
	}
	let j = e.someProp("clipboardSerializer") || DOMSerializer.fromSchema(e.state.schema), M = detachedDoc(), N = M.createElement("div");
	N.appendChild(j.serializeFragment(O, { document: M }));
	let P = N.firstChild, F, I = 0;
	for (; P && P.nodeType == 1 && (F = wrapMap[P.nodeName.toLowerCase()]);) {
		for (let e = F.length - 1; e >= 0; e--) {
			let E = M.createElement(F[e]);
			for (; N.firstChild;) E.appendChild(N.firstChild);
			N.appendChild(E), I++;
		}
		P = N.firstChild;
	}
	return P && P.nodeType == 1 && P.setAttribute("data-pm-slice", `${k} ${A}${I ? ` -${I}` : ""} ${JSON.stringify(D)}`), {
		dom: N,
		text: e.someProp("clipboardTextSerializer", (D) => D(E, e)) || E.content.textBetween(0, E.content.size, "\n\n"),
		slice: E
	};
}
function parseFromClipboard(e, E, D, O, k) {
	let A = k.parent.type.spec.code, j, M;
	if (!D && !E) return null;
	let N = !!E && (O || A || !D);
	if (N) {
		if (e.someProp("transformPastedText", (D) => {
			E = D(E, A || O, e);
		}), A) return M = new Slice(Fragment.from(e.state.schema.text(E.replace(/\r\n?/g, "\n"))), 0, 0), e.someProp("transformPasted", (E) => {
			M = E(M, e, !0);
		}), M;
		let D = e.someProp("clipboardTextParser", (D) => D(E, k, O, e));
		if (D) M = D;
		else {
			let D = k.marks(), { schema: O } = e.state, A = DOMSerializer.fromSchema(O);
			j = document.createElement("div"), E.split(/(?:\r\n?|\n)+/).forEach((e) => {
				let E = j.appendChild(document.createElement("p"));
				e && E.appendChild(A.serializeNode(O.text(e, D)));
			});
		}
	} else e.someProp("transformPastedHTML", (E) => {
		D = E(D, e);
	}), j = readHTML(D), webkit && restoreReplacedSpaces(j);
	let P = j && j.querySelector("[data-pm-slice]"), F = P && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(P.getAttribute("data-pm-slice") || "");
	if (F && F[3]) for (let e = +F[3]; e > 0; e--) {
		let e = j.firstChild;
		for (; e && e.nodeType != 1;) e = e.nextSibling;
		if (!e) break;
		j = e;
	}
	if (M ||= (e.someProp("clipboardParser") || e.someProp("domParser") || DOMParser.fromSchema(e.state.schema)).parseSlice(j, {
		preserveWhitespace: !!(N || F),
		context: k,
		ruleFromNode(e) {
			return e.nodeName == "BR" && !e.nextSibling && e.parentNode && !inlineParents.test(e.parentNode.nodeName) ? { ignore: !0 } : null;
		}
	}), F) M = addContext(closeSlice(M, +F[1], +F[2]), F[4]);
	else if (M = Slice.maxOpen(normalizeSiblings(M.content, k), !0), M.openStart || M.openEnd) {
		let e = 0, E = 0;
		for (let E = M.content.firstChild; e < M.openStart && !E.type.spec.isolating; e++, E = E.firstChild);
		for (let e = M.content.lastChild; E < M.openEnd && !e.type.spec.isolating; E++, e = e.lastChild);
		M = closeSlice(M, e, E);
	}
	return e.someProp("transformPasted", (E) => {
		M = E(M, e, N);
	}), M;
}
var inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function normalizeSiblings(e, E) {
	if (e.childCount < 2) return e;
	for (let D = E.depth; D >= 0; D--) {
		let O = E.node(D).contentMatchAt(E.index(D)), k, A = [];
		if (e.forEach((e) => {
			if (!A) return;
			let E = O.findWrapping(e.type), D;
			if (!E) return A = null;
			if (D = A.length && k.length && addToSibling(E, k, e, A[A.length - 1], 0)) A[A.length - 1] = D;
			else {
				A.length && (A[A.length - 1] = closeRight(A[A.length - 1], k.length));
				let D = withWrappers(e, E);
				A.push(D), O = O.matchType(D.type), k = E;
			}
		}), A) return Fragment.from(A);
	}
	return e;
}
function withWrappers(e, E, D = 0) {
	for (let O = E.length - 1; O >= D; O--) e = E[O].create(null, Fragment.from(e));
	return e;
}
function addToSibling(e, E, D, O, k) {
	if (k < e.length && k < E.length && e[k] == E[k]) {
		let A = addToSibling(e, E, D, O.lastChild, k + 1);
		if (A) return O.copy(O.content.replaceChild(O.childCount - 1, A));
		if (O.contentMatchAt(O.childCount).matchType(k == e.length - 1 ? D.type : e[k + 1])) return O.copy(O.content.append(Fragment.from(withWrappers(D, e, k + 1))));
	}
}
function closeRight(e, E) {
	if (E == 0) return e;
	let D = e.content.replaceChild(e.childCount - 1, closeRight(e.lastChild, E - 1)), O = e.contentMatchAt(e.childCount).fillBefore(Fragment.empty, !0);
	return e.copy(D.append(O));
}
function closeRange(e, E, D, O, k, A) {
	let j = E < 0 ? e.firstChild : e.lastChild, M = j.content;
	return e.childCount > 1 && (A = 0), k < O - 1 && (M = closeRange(M, E, D, O, k + 1, A)), k >= D && (M = E < 0 ? j.contentMatchAt(0).fillBefore(M, A <= k).append(M) : M.append(j.contentMatchAt(j.childCount).fillBefore(Fragment.empty, !0))), e.replaceChild(E < 0 ? 0 : e.childCount - 1, j.copy(M));
}
function closeSlice(e, E, D) {
	return E < e.openStart && (e = new Slice(closeRange(e.content, -1, E, e.openStart, 0, e.openEnd), E, e.openEnd)), D < e.openEnd && (e = new Slice(closeRange(e.content, 1, D, e.openEnd, 0, 0), e.openStart, D)), e;
}
var wrapMap = {
	thead: ["table"],
	tbody: ["table"],
	tfoot: ["table"],
	caption: ["table"],
	colgroup: ["table"],
	col: ["table", "colgroup"],
	tr: ["table", "tbody"],
	td: [
		"table",
		"tbody",
		"tr"
	],
	th: [
		"table",
		"tbody",
		"tr"
	]
};
function detachedDoc() {
	return document.implementation.createHTMLDocument("title");
}
var _policy = null;
function maybeWrapTrusted(e) {
	let E = window.trustedTypes;
	if (!E) return e;
	if (!_policy) {
		if (_policy = E.defaultPolicy) try {
			return _policy.createHTML(e);
		} catch {}
		_policy = E.createPolicy("ProseMirrorClipboard", { createHTML: (e) => e });
	}
	return _policy.createHTML(e);
}
function readHTML(e) {
	let E = /^(\s*<meta [^>]*>)*/.exec(e);
	E && (e = e.slice(E[0].length));
	let D = detachedDoc(), O = D.body, k = /<([a-z][^>\s]+)/i.exec(e), A;
	if ((A = k && wrapMap[k[1].toLowerCase()]) && (e = A.map((e) => "<" + e + ">").join("") + e + A.map((e) => "</" + e + ">").reverse().join("")), O.innerHTML = maybeWrapTrusted(e), A) for (let e = 0; e < A.length; e++) O = O.querySelector(A[e]) || O;
	for (let e = 0; e < D.styleSheets.length; e++) {
		let E = D.styleSheets[e];
		for (let e = 0; e < E.rules.length; e++) {
			let D = E.rules[e];
			if (D instanceof CSSStyleRule) {
				let e = O.querySelectorAll(D.selectorText);
				for (let E = 0; E < e.length; E++) e[E].style.cssText += D.style.cssText;
			}
		}
	}
	return O;
}
function restoreReplacedSpaces(e) {
	let E = e.querySelectorAll(chrome ? "span:not([class]):not([style])" : "span.Apple-converted-space");
	for (let D = 0; D < E.length; D++) {
		let O = E[D];
		O.childNodes.length == 1 && O.textContent == "\xA0" && O.parentNode && O.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), O);
	}
}
function addContext(e, E) {
	if (!e.size) return e;
	let D = e.content.firstChild.type.schema, O;
	try {
		O = JSON.parse(E);
	} catch {
		return e;
	}
	let { content: k, openStart: A, openEnd: j } = e;
	for (let e = O.length - 2; e >= 0; e -= 2) {
		let E = D.nodes[O[e]];
		if (!E || E.hasRequiredAttrs()) break;
		try {
			E.checkAttrs(O[e + 1]);
		} catch {
			break;
		}
		k = Fragment.from(E.create(O[e + 1], k)), A++, j++;
	}
	return new Slice(k, A, j);
}
var handlers = {}, editHandlers = {}, passiveHandlers = {
	touchstart: !0,
	touchmove: !0
}, InputState = class {
	constructor() {
		this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
			time: 0,
			x: 0,
			y: 0,
			type: "",
			button: 0
		}, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.badSafariComposition = !1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null;
	}
};
function initInput(e) {
	for (let E in handlers) {
		let D = handlers[E];
		e.dom.addEventListener(E, e.input.eventHandlers[E] = (E) => {
			eventBelongsToView(e, E) && !runCustomHandler(e, E) && (e.editable || !(E.type in editHandlers)) && D(e, E);
		}, passiveHandlers[E] ? { passive: !0 } : void 0);
	}
	safari && e.dom.addEventListener("input", () => null), ensureListeners(e);
}
function setSelectionOrigin(e, E) {
	e.input.lastSelectionOrigin = E, e.input.lastSelectionTime = Date.now();
}
function destroyInput(e) {
	for (let E in e.input.mouseDown && e.input.mouseDown.done(), e.domObserver.stop(), e.input.eventHandlers) e.dom.removeEventListener(E, e.input.eventHandlers[E]);
	clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
}
function ensureListeners(e) {
	e.someProp("handleDOMEvents", (E) => {
		for (let D in E) e.input.eventHandlers[D] || e.dom.addEventListener(D, e.input.eventHandlers[D] = (E) => runCustomHandler(e, E));
	});
}
function runCustomHandler(e, E) {
	return e.someProp("handleDOMEvents", (D) => {
		let O = D[E.type];
		return O ? O(e, E) || E.defaultPrevented : !1;
	});
}
function eventBelongsToView(e, E) {
	if (!E.bubbles) return !0;
	if (E.defaultPrevented) return !1;
	for (let D = E.target; D != e.dom; D = D.parentNode) if (!D || D.nodeType == 11 || D.pmViewDesc && D.pmViewDesc.stopEvent(E)) return !1;
	return !0;
}
function dispatchEvent(e, E) {
	!runCustomHandler(e, E) && handlers[E.type] && (e.editable || !(E.type in editHandlers)) && handlers[E.type](e, E);
}
editHandlers.keydown = (e, E) => {
	let D = E;
	if (e.input.shiftKey = D.keyCode == 16 || D.shiftKey, !inOrNearComposition(e) && (e.input.lastKeyCode = D.keyCode, e.input.lastKeyCodeTime = Date.now(), !(android && chrome && D.keyCode == 13))) if (D.keyCode != 229 && e.domObserver.forceFlush(), ios && D.keyCode == 13 && !D.ctrlKey && !D.altKey && !D.metaKey) {
		let E = Date.now();
		e.input.lastIOSEnter = E, e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
			e.input.lastIOSEnter == E && (e.someProp("handleKeyDown", (E) => E(e, keyEvent(13, "Enter"))), e.input.lastIOSEnter = 0);
		}, 200);
	} else e.someProp("handleKeyDown", (E) => E(e, D)) || captureKeyDown(e, D) ? D.preventDefault() : setSelectionOrigin(e, "key");
}, editHandlers.keyup = (e, E) => {
	E.keyCode == 16 && (e.input.shiftKey = !1);
}, editHandlers.keypress = (e, E) => {
	let D = E;
	if (inOrNearComposition(e) || !D.charCode || D.ctrlKey && !D.altKey || mac$2 && D.metaKey) return;
	if (e.someProp("handleKeyPress", (E) => E(e, D))) {
		D.preventDefault();
		return;
	}
	let O = e.state.selection;
	if (!(O instanceof TextSelection) || !O.$from.sameParent(O.$to)) {
		let E = String.fromCharCode(D.charCode), k = () => e.state.tr.insertText(E).scrollIntoView();
		!/[\r\n]/.test(E) && !e.someProp("handleTextInput", (D) => D(e, O.$from.pos, O.$to.pos, E, k)) && e.dispatch(k()), D.preventDefault();
	}
};
function eventCoords(e) {
	return {
		left: e.clientX,
		top: e.clientY
	};
}
function isNear(e, E) {
	let D = E.x - e.clientX, O = E.y - e.clientY;
	return D * D + O * O < 100;
}
function runHandlerOnContext(e, E, D, O, k) {
	if (O == -1) return !1;
	let A = e.state.doc.resolve(O);
	for (let O = A.depth + 1; O > 0; O--) if (e.someProp(E, (E) => O > A.depth ? E(e, D, A.nodeAfter, A.before(O), k, !0) : E(e, D, A.node(O), A.before(O), k, !1))) return !0;
	return !1;
}
function updateSelection(e, E, D) {
	if (e.focused || e.focus(), e.state.selection.eq(E)) return;
	let O = e.state.tr.setSelection(E);
	D == "pointer" && O.setMeta("pointer", !0), e.dispatch(O);
}
function selectClickedLeaf(e, E) {
	if (E == -1) return !1;
	let D = e.state.doc.resolve(E), O = D.nodeAfter;
	return O && O.isAtom && NodeSelection.isSelectable(O) ? (updateSelection(e, new NodeSelection(D), "pointer"), !0) : !1;
}
function selectClickedNode(e, E) {
	if (E == -1) return !1;
	let D = e.state.selection, O, k;
	D instanceof NodeSelection && (O = D.node);
	let A = e.state.doc.resolve(E);
	for (let e = A.depth + 1; e > 0; e--) {
		let E = e > A.depth ? A.nodeAfter : A.node(e);
		if (NodeSelection.isSelectable(E)) {
			k = O && D.$from.depth > 0 && e >= D.$from.depth && A.before(D.$from.depth + 1) == D.$from.pos ? A.before(D.$from.depth) : A.before(e);
			break;
		}
	}
	return k == null ? !1 : (updateSelection(e, NodeSelection.create(e.state.doc, k), "pointer"), !0);
}
function handleSingleClick(e, E, D, O, k) {
	return runHandlerOnContext(e, "handleClickOn", E, D, O) || e.someProp("handleClick", (D) => D(e, E, O)) || (k ? selectClickedNode(e, D) : selectClickedLeaf(e, D));
}
function handleDoubleClick(e, E, D, O) {
	return runHandlerOnContext(e, "handleDoubleClickOn", E, D, O) || e.someProp("handleDoubleClick", (D) => D(e, E, O));
}
function handleTripleClick(e, E, D, O) {
	return runHandlerOnContext(e, "handleTripleClickOn", E, D, O) || e.someProp("handleTripleClick", (D) => D(e, E, O)) || defaultTripleClick(e, D, O);
}
function defaultTripleClick(e, E, D) {
	if (D.button != 0) return !1;
	let O = selectionForTripleClick(e, E, !0), k = e.state.doc;
	return O ? (updateSelection(e, O, "pointer"), O instanceof TextSelection && k.eq(e.state.doc) && (e.input.mouseDown = new TripleClickDrag(e, O)), !0) : !1;
}
function selectionForTripleClick(e, E, D) {
	let O = e.state.doc;
	if (E == -1) return O.inlineContent ? TextSelection.create(O, 0, O.content.size) : null;
	let k = O.resolve(E);
	for (let e = k.depth + 1; e > 0; e--) {
		let E = e > k.depth ? k.nodeAfter : k.node(e), A = k.before(e);
		if (E.inlineContent) return TextSelection.create(O, A + 1, A + 1 + E.content.size);
		if (D && NodeSelection.isSelectable(E)) return NodeSelection.create(O, A);
	}
	return null;
}
function forceDOMFlush(e) {
	return endComposition(e);
}
var selectNodeModifier = mac$2 ? "metaKey" : "ctrlKey";
handlers.mousedown = (e, E) => {
	let D = E;
	e.input.shiftKey = D.shiftKey;
	let O = forceDOMFlush(e), k = Date.now(), A = "singleClick";
	k - e.input.lastClick.time < 500 && isNear(D, e.input.lastClick) && !D[selectNodeModifier] && e.input.lastClick.button == D.button && (e.input.lastClick.type == "singleClick" ? A = "doubleClick" : e.input.lastClick.type == "doubleClick" && (A = "tripleClick")), e.input.lastClick = {
		time: k,
		x: D.clientX,
		y: D.clientY,
		type: A,
		button: D.button
	}, e.input.mouseDown && e.input.mouseDown.done();
	let j = e.posAtCoords(eventCoords(D));
	j && (A == "singleClick" ? e.input.mouseDown = new LeftMouseDown(e, j, D, !!O) : (A == "doubleClick" ? handleDoubleClick : handleTripleClick)(e, j.pos, j.inside, D) ? D.preventDefault() : setSelectionOrigin(e, "pointer"));
};
var MouseDown = class {
	constructor(e) {
		this.view = e, this.mightDrag = null, e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this));
	}
	up(e) {
		this.done();
	}
	move(e) {
		e.buttons == 0 && this.done();
	}
	done() {
		this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.view.input.mouseDown == this && (this.view.input.mouseDown = null);
	}
	delaySelUpdate() {
		return !1;
	}
}, LeftMouseDown = class extends MouseDown {
	constructor(e, E, D, O) {
		super(e), this.pos = E, this.event = D, this.flushed = O, this.delayedSelectionSync = !1, this.startDoc = e.state.doc, this.selectNode = !!D[selectNodeModifier], this.allowDefault = D.shiftKey;
		let k, A;
		if (E.inside > -1) k = e.state.doc.nodeAt(E.inside), A = E.inside;
		else {
			let D = e.state.doc.resolve(E.pos);
			k = D.parent, A = D.depth ? D.before() : 0;
		}
		let j = O ? null : D.target, M = j ? e.docView.nearestDesc(j, !0) : null;
		this.target = M && M.nodeDOM.nodeType == 1 ? M.nodeDOM : null;
		let { selection: N } = e.state;
		D.button == 0 && (k.type.spec.draggable && k.type.spec.selectable !== !1 || N instanceof NodeSelection && N.from <= A && N.to > A) && (this.mightDrag = {
			node: k,
			pos: A,
			addAttr: !!(this.target && !this.target.draggable),
			setUneditable: !!(this.target && gecko && !this.target.hasAttribute("contentEditable"))
		}), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
			this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
		}, 20), this.view.domObserver.start()), setSelectionOrigin(e, "pointer");
	}
	done() {
		super.done(), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => {
			this.view.isDestroyed || selectionToDOM(this.view);
		});
	}
	up(e) {
		if (this.done(), !this.view.dom.contains(e.target)) return;
		let E = this.pos;
		this.view.state.doc != this.startDoc && (E = this.view.posAtCoords(eventCoords(e))), this.updateAllowDefault(e), this.allowDefault || !E ? setSelectionOrigin(this.view, "pointer") : handleSingleClick(this.view, E.pos, E.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || safari && this.mightDrag && !this.mightDrag.node.isAtom || chrome && !this.view.state.selection.visible && Math.min(Math.abs(E.pos - this.view.state.selection.from), Math.abs(E.pos - this.view.state.selection.to)) <= 2) ? (updateSelection(this.view, Selection$1.near(this.view.state.doc.resolve(E.pos)), "pointer"), e.preventDefault()) : setSelectionOrigin(this.view, "pointer");
	}
	move(e) {
		this.updateAllowDefault(e), setSelectionOrigin(this.view, "pointer"), super.move(e);
	}
	updateAllowDefault(e) {
		!this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
	}
	delaySelUpdate() {
		return this.allowDefault ? (this.delayedSelectionSync = !0, !0) : !1;
	}
}, TripleClickDrag = class extends MouseDown {
	constructor(e, E) {
		super(e), this.startSelection = E, this.startDoc = e.state.doc;
	}
	move(e) {
		if (e.buttons == 0 || this.view.isDestroyed || !this.view.state.doc.eq(this.startDoc)) {
			this.done();
			return;
		}
		e.preventDefault(), setSelectionOrigin(this.view, "pointer");
		let E = this.view.posAtCoords(eventCoords(e)), D = E && selectionForTripleClick(this.view, E.inside, !1);
		if (!D) return;
		let { doc: O } = this.view.state, k = this.startSelection, [A, j] = D.from < k.from ? [k.to, D.from] : [k.from, D.to];
		updateSelection(this.view, TextSelection.create(O, A, j), "pointer");
	}
};
handlers.touchstart = (e) => {
	e.input.lastTouch = Date.now(), forceDOMFlush(e), setSelectionOrigin(e, "pointer");
}, handlers.touchmove = (e) => {
	e.input.lastTouch = Date.now(), setSelectionOrigin(e, "pointer");
}, handlers.contextmenu = (e) => forceDOMFlush(e);
function inOrNearComposition(e, E) {
	return e.composing ? !0 : safari && Math.abs(Date.now() - e.input.compositionEndedAt) < 500 ? (e.input.compositionEndedAt = -2e8, !0) : !1;
}
var timeoutComposition = android ? 5e3 : -1;
editHandlers.compositionstart = editHandlers.compositionupdate = (e) => {
	if (!e.composing) {
		e.domObserver.flush();
		let { state: E } = e, D = E.selection.$to;
		if (E.selection instanceof TextSelection && (E.storedMarks || !D.textOffset && D.parentOffset && D.nodeBefore.marks.some((e) => e.type.spec.inclusive === !1) || chrome && windows$1 && selectionBeforeUneditable(e))) e.markCursor = e.state.storedMarks || D.marks(), endComposition(e, !0), e.markCursor = null;
		else if (endComposition(e, !E.selection.empty), gecko && E.selection.empty && D.parentOffset && !D.textOffset && D.nodeBefore.marks.length) {
			let E = e.domSelectionRange();
			for (let D = E.focusNode, O = E.focusOffset; D && D.nodeType == 1 && O != 0;) {
				let E = O < 0 ? D.lastChild : D.childNodes[O - 1];
				if (!E) break;
				if (E.nodeType == 3) {
					let D = e.domSelection();
					D && D.collapse(E, E.nodeValue.length);
					break;
				} else D = E, O = -1;
			}
		}
		e.input.composing = !0;
	}
	scheduleComposeEnd(e, timeoutComposition);
};
function selectionBeforeUneditable(e) {
	let { focusNode: E, focusOffset: D } = e.domSelectionRange();
	if (!E || E.nodeType != 1 || D >= E.childNodes.length) return !1;
	let O = E.childNodes[D];
	return O.nodeType == 1 && O.contentEditable == "false";
}
editHandlers.compositionend = (e, E) => {
	e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now(), e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.badSafariComposition ? e.domObserver.forceFlush() : e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()), e.input.compositionID++, scheduleComposeEnd(e, 20));
};
function scheduleComposeEnd(e, E) {
	clearTimeout(e.input.composingTimeout), E > -1 && (e.input.composingTimeout = setTimeout(() => endComposition(e), E));
}
function clearComposition(e) {
	for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now()); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty();
}
function findCompositionNode(e) {
	let E = e.domSelectionRange();
	if (!E.focusNode) return null;
	let D = textNodeBefore$1(E.focusNode, E.focusOffset), O = textNodeAfter$1(E.focusNode, E.focusOffset);
	if (D && O && D != O) {
		let E = O.pmViewDesc, k = e.domObserver.lastChangedTextNode;
		if (D == k || O == k) return k;
		if (!E || !E.isText(O.nodeValue)) return O;
		if (e.input.compositionNode == O) {
			let e = D.pmViewDesc;
			if (!(!e || !e.isText(D.nodeValue))) return O;
		}
	}
	return D || O;
}
function endComposition(e, E = !1) {
	if (!(android && e.domObserver.flushingSoon >= 0)) {
		if (e.domObserver.forceFlush(), clearComposition(e), E || e.docView && e.docView.dirty) {
			let D = selectionFromDOM(e), O = e.state.selection;
			return D && !D.eq(O) ? e.dispatch(e.state.tr.setSelection(D)) : (e.markCursor || E) && !O.$from.node(O.$from.sharedDepth(O.to)).inlineContent ? e.dispatch(e.state.tr.deleteSelection()) : e.updateState(e.state), !0;
		}
		return !1;
	}
}
function captureCopy(e, E) {
	if (!e.dom.parentNode) return;
	let D = e.dom.parentNode.appendChild(document.createElement("div"));
	D.appendChild(E), D.style.cssText = "position: fixed; left: -10000px; top: 10px";
	let O = getSelection(), k = document.createRange();
	k.selectNodeContents(E), e.dom.blur(), O.removeAllRanges(), O.addRange(k), setTimeout(() => {
		D.parentNode && D.parentNode.removeChild(D), e.focus();
	}, 50);
}
var brokenClipboardAPI = ie$1 && ie_version < 15 || ios && webkit_version < 604;
handlers.copy = editHandlers.cut = (e, E) => {
	let D = E, O = e.state.selection, k = D.type == "cut";
	if (O.empty) return;
	let A = brokenClipboardAPI ? null : D.clipboardData, { dom: j, text: M } = serializeForClipboard(e, O.content());
	A ? (D.preventDefault(), A.clearData(), A.setData("text/html", j.innerHTML), A.setData("text/plain", M)) : captureCopy(e, j), k && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function sliceSingleNode(e) {
	return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1 ? e.content.firstChild : null;
}
function capturePaste(e, E) {
	if (!e.dom.parentNode) return;
	let D = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code, O = e.dom.parentNode.appendChild(document.createElement(D ? "textarea" : "div"));
	D || (O.contentEditable = "true"), O.style.cssText = "position: fixed; left: -10000px; top: 10px", O.focus();
	let k = e.input.shiftKey && e.input.lastKeyCode != 45;
	setTimeout(() => {
		e.focus(), O.parentNode && O.parentNode.removeChild(O), D ? doPaste(e, O.value, null, k, E) : doPaste(e, O.textContent, O.innerHTML, k, E);
	}, 50);
}
function doPaste(e, E, D, O, k) {
	let A = parseFromClipboard(e, E, D, O, e.state.selection.$from);
	if (e.someProp("handlePaste", (E) => E(e, k, A || Slice.empty))) return !0;
	if (!A) return !1;
	let j = sliceSingleNode(A), M = j ? e.state.tr.replaceSelectionWith(j, O) : e.state.tr.replaceSelection(A);
	return e.dispatch(M.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function getText$1(e) {
	let E = e.getData("text/plain") || e.getData("Text");
	if (E) return E;
	let D = e.getData("text/uri-list");
	return D ? D.replace(/\r?\n/g, " ") : "";
}
editHandlers.paste = (e, E) => {
	let D = E;
	if (e.composing && !android) return;
	let O = brokenClipboardAPI ? null : D.clipboardData, k = e.input.shiftKey && e.input.lastKeyCode != 45;
	O && doPaste(e, getText$1(O), O.getData("text/html"), k, D) ? D.preventDefault() : capturePaste(e, D);
};
var Dragging = class {
	constructor(e, E, D) {
		this.slice = e, this.move = E, this.node = D;
	}
}, dragCopyModifier = mac$2 ? "altKey" : "ctrlKey";
function dragMoves(e, E) {
	let D;
	return e.someProp("dragCopies", (e) => {
		D ||= e(E);
	}), D == null ? !E[dragCopyModifier] : !D;
}
handlers.dragstart = (e, E) => {
	let D = E, O = e.input.mouseDown;
	if (O && O.done(), !D.dataTransfer) return;
	let k = e.state.selection, A = k.empty ? null : e.posAtCoords(eventCoords(D)), j;
	if (!(A && A.pos >= k.from && A.pos <= (k instanceof NodeSelection ? k.to - 1 : k.to))) {
		if (O && O.mightDrag) j = NodeSelection.create(e.state.doc, O.mightDrag.pos);
		else if (D.target && D.target.nodeType == 1) {
			let E = e.docView.nearestDesc(D.target, !0);
			E && E.node.type.spec.draggable && E != e.docView && (j = NodeSelection.create(e.state.doc, E.posBefore));
		}
	}
	let { dom: M, text: N, slice: P } = serializeForClipboard(e, (j || e.state.selection).content());
	(!D.dataTransfer.files.length || !chrome || chrome_version > 120) && D.dataTransfer.clearData(), D.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", M.innerHTML), D.dataTransfer.effectAllowed = "copyMove", brokenClipboardAPI || D.dataTransfer.setData("text/plain", N), e.dragging = new Dragging(P, dragMoves(e, D), j);
}, handlers.dragend = (e) => {
	let E = e.dragging;
	window.setTimeout(() => {
		e.dragging == E && (e.dragging = null);
	}, 50);
}, editHandlers.dragover = editHandlers.dragenter = (e, E) => E.preventDefault(), editHandlers.drop = (e, E) => {
	try {
		handleDrop(e, E, e.dragging);
	} finally {
		e.dragging = null;
	}
};
function handleDrop(e, E, D) {
	if (!E.dataTransfer) return;
	let O = e.posAtCoords(eventCoords(E));
	if (!O) return;
	let k = e.state.doc.resolve(O.pos), A = D && D.slice;
	A ? e.someProp("transformPasted", (E) => {
		A = E(A, e, !1);
	}) : A = parseFromClipboard(e, getText$1(E.dataTransfer), brokenClipboardAPI ? null : E.dataTransfer.getData("text/html"), !1, k);
	let j = !!(D && dragMoves(e, E));
	if (e.someProp("handleDrop", (D) => D(e, E, A || Slice.empty, j))) {
		E.preventDefault();
		return;
	}
	if (!A) return;
	E.preventDefault();
	let M = A ? dropPoint(e.state.doc, k.pos, A) : k.pos;
	M ??= k.pos;
	let N = e.state.tr;
	if (j) {
		let { node: e } = D;
		e ? e.replace(N) : N.deleteSelection();
	}
	let P = N.mapping.map(M), F = A.openStart == 0 && A.openEnd == 0 && A.content.childCount == 1, I = N.doc;
	if (F ? N.replaceRangeWith(P, P, A.content.firstChild) : N.replaceRange(P, P, A), N.doc.eq(I)) return;
	let L = N.doc.resolve(P);
	if (F && NodeSelection.isSelectable(A.content.firstChild) && L.nodeAfter && L.nodeAfter.sameMarkup(A.content.firstChild)) N.setSelection(new NodeSelection(L));
	else {
		let E = N.mapping.map(M);
		N.mapping.maps[N.mapping.maps.length - 1].forEach((e, D, O, k) => E = k), N.setSelection(selectionBetween(e, L, N.doc.resolve(E)));
	}
	e.focus(), e.dispatch(N.setMeta("uiEvent", "drop"));
}
for (let e in handlers.focus = (e) => {
	e.input.lastFocus = Date.now(), e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout(() => {
		e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && selectionToDOM(e);
	}, 20));
}, handlers.blur = (e, E) => {
	let D = E;
	e.focused &&= (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), D.relatedTarget && e.dom.contains(D.relatedTarget) && e.domObserver.currentSelection.clear(), !1);
}, handlers.beforeinput = (e, E) => {
	if (android && E.inputType == "deleteContentBackward") {
		e.domObserver.flushSoon();
		let { domChangeCount: E } = e.input;
		setTimeout(() => {
			if (e.input.domChangeCount != E || (e.dom.blur(), e.focus(), e.someProp("handleKeyDown", (E) => E(e, keyEvent(8, "Backspace"))))) return;
			let { $cursor: D } = e.state.selection;
			D && D.pos > 0 && e.dispatch(e.state.tr.delete(D.pos - 1, D.pos).scrollIntoView());
		}, 50);
	}
}, editHandlers) handlers[e] = editHandlers[e];
function compareObjs(e, E) {
	if (e == E) return !0;
	for (let D in e) if (e[D] !== E[D]) return !1;
	for (let D in E) if (!(D in e)) return !1;
	return !0;
}
var WidgetType = class e {
	constructor(e, E) {
		this.toDOM = e, this.spec = E || noSpec, this.side = this.spec.side || 0;
	}
	map(e, E, D, O) {
		let { pos: k, deleted: A } = e.mapResult(E.from + O, this.side < 0 ? -1 : 1);
		return A ? null : new Decoration(k - D, k - D, this);
	}
	valid() {
		return !0;
	}
	eq(E) {
		return this == E || E instanceof e && (this.spec.key && this.spec.key == E.spec.key || this.toDOM == E.toDOM && compareObjs(this.spec, E.spec));
	}
	destroy(e) {
		this.spec.destroy && this.spec.destroy(e);
	}
}, InlineType = class e {
	constructor(e, E) {
		this.attrs = e, this.spec = E || noSpec;
	}
	map(e, E, D, O) {
		let k = e.map(E.from + O, this.spec.inclusiveStart ? -1 : 1) - D, A = e.map(E.to + O, this.spec.inclusiveEnd ? 1 : -1) - D;
		return k >= A ? null : new Decoration(k, A, this);
	}
	valid(e, E) {
		return E.from < E.to;
	}
	eq(E) {
		return this == E || E instanceof e && compareObjs(this.attrs, E.attrs) && compareObjs(this.spec, E.spec);
	}
	static is(E) {
		return E.type instanceof e;
	}
	destroy() {}
}, NodeType = class e {
	constructor(e, E) {
		this.attrs = e, this.spec = E || noSpec;
	}
	map(e, E, D, O) {
		let k = e.mapResult(E.from + O, 1);
		if (k.deleted) return null;
		let A = e.mapResult(E.to + O, -1);
		return A.deleted || A.pos <= k.pos ? null : new Decoration(k.pos - D, A.pos - D, this);
	}
	valid(e, E) {
		let { index: D, offset: O } = e.content.findIndex(E.from), k;
		return O == E.from && !(k = e.child(D)).isText && O + k.nodeSize == E.to;
	}
	eq(E) {
		return this == E || E instanceof e && compareObjs(this.attrs, E.attrs) && compareObjs(this.spec, E.spec);
	}
	destroy() {}
}, Decoration = class e {
	constructor(e, E, D) {
		this.from = e, this.to = E, this.type = D;
	}
	copy(E, D) {
		return new e(E, D, this.type);
	}
	eq(e, E = 0) {
		return this.type.eq(e.type) && this.from + E == e.from && this.to + E == e.to;
	}
	map(e, E, D) {
		return this.type.map(e, this, E, D);
	}
	static widget(E, D, O) {
		return new e(E, E, new WidgetType(D, O));
	}
	static inline(E, D, O, k) {
		return new e(E, D, new InlineType(O, k));
	}
	static node(E, D, O, k) {
		return new e(E, D, new NodeType(O, k));
	}
	get spec() {
		return this.type.spec;
	}
	get inline() {
		return this.type instanceof InlineType;
	}
	get widget() {
		return this.type instanceof WidgetType;
	}
}, none = [], noSpec = {}, DecorationSet = class e {
	constructor(e, E) {
		this.local = e.length ? e : none, this.children = E.length ? E : none;
	}
	static create(e, E) {
		return E.length ? buildTree(E, e, 0, noSpec) : empty;
	}
	find(e, E, D) {
		let O = [];
		return this.findInner(e ?? 0, E ?? 1e9, O, 0, D), O;
	}
	findInner(e, E, D, O, k) {
		for (let A = 0; A < this.local.length; A++) {
			let j = this.local[A];
			j.from <= E && j.to >= e && (!k || k(j.spec)) && D.push(j.copy(j.from + O, j.to + O));
		}
		for (let A = 0; A < this.children.length; A += 3) if (this.children[A] < E && this.children[A + 1] > e) {
			let j = this.children[A] + 1;
			this.children[A + 2].findInner(e - j, E - j, D, O + j, k);
		}
	}
	map(e, E, D) {
		return this == empty || e.maps.length == 0 ? this : this.mapInner(e, E, 0, 0, D || noSpec);
	}
	mapInner(E, D, O, k, A) {
		let j;
		for (let e = 0; e < this.local.length; e++) {
			let M = this.local[e].map(E, O, k);
			M && M.type.valid(D, M) ? (j ||= []).push(M) : A.onRemove && A.onRemove(this.local[e].spec);
		}
		return this.children.length ? mapChildren(this.children, j || [], E, D, O, k, A) : j ? new e(j.sort(byPos), none) : empty;
	}
	add(E, D) {
		return D.length ? this == empty ? e.create(E, D) : this.addInner(E, D, 0) : this;
	}
	addInner(E, D, O) {
		let k, A = 0;
		E.forEach((e, E) => {
			let j = E + O, M;
			if (M = takeSpansForNode(D, e, j)) {
				for (k ||= this.children.slice(); A < k.length && k[A] < E;) A += 3;
				k[A] == E ? k[A + 2] = k[A + 2].addInner(e, M, j + 1) : k.splice(A, 0, E, E + e.nodeSize, buildTree(M, e, j + 1, noSpec)), A += 3;
			}
		});
		let j = moveSpans(A ? withoutNulls(D) : D, -O);
		for (let e = 0; e < j.length; e++) j[e].type.valid(E, j[e]) || j.splice(e--, 1);
		return new e(j.length ? this.local.concat(j).sort(byPos) : this.local, k || this.children);
	}
	remove(e) {
		return e.length == 0 || this == empty ? this : this.removeInner(e, 0);
	}
	removeInner(E, D) {
		let O = this.children, k = this.local;
		for (let e = 0; e < O.length; e += 3) {
			let k, A = O[e] + D, j = O[e + 1] + D;
			for (let e = 0, D; e < E.length; e++) (D = E[e]) && D.from > A && D.to < j && (E[e] = null, (k ||= []).push(D));
			if (!k) continue;
			O == this.children && (O = this.children.slice());
			let M = O[e + 2].removeInner(k, A + 1);
			M == empty ? (O.splice(e, 3), e -= 3) : O[e + 2] = M;
		}
		if (k.length) {
			for (let e = 0, O; e < E.length; e++) if (O = E[e]) for (let e = 0; e < k.length; e++) k[e].eq(O, D) && (k == this.local && (k = this.local.slice()), k.splice(e--, 1));
		}
		return O == this.children && k == this.local ? this : k.length || O.length ? new e(k, O) : empty;
	}
	forChild(E, D) {
		if (this == empty) return this;
		if (D.isLeaf) return e.empty;
		let O, k;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] >= E) {
			this.children[e] == E && (O = this.children[e + 2]);
			break;
		}
		let A = E + 1, j = A + D.content.size;
		for (let e = 0; e < this.local.length; e++) {
			let E = this.local[e];
			if (E.from < j && E.to > A && E.type instanceof InlineType) {
				let e = Math.max(A, E.from) - A, D = Math.min(j, E.to) - A;
				e < D && (k ||= []).push(E.copy(e, D));
			}
		}
		if (k) {
			let E = new e(k.sort(byPos), none);
			return O ? new DecorationGroup([E, O]) : E;
		}
		return O || empty;
	}
	eq(E) {
		if (this == E) return !0;
		if (!(E instanceof e) || this.local.length != E.local.length || this.children.length != E.children.length) return !1;
		for (let e = 0; e < this.local.length; e++) if (!this.local[e].eq(E.local[e])) return !1;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] != E.children[e] || this.children[e + 1] != E.children[e + 1] || !this.children[e + 2].eq(E.children[e + 2])) return !1;
		return !0;
	}
	locals(e) {
		return removeOverlap(this.localsInner(e));
	}
	localsInner(e) {
		if (this == empty) return none;
		if (e.inlineContent || !this.local.some(InlineType.is)) return this.local;
		let E = [];
		for (let e = 0; e < this.local.length; e++) this.local[e].type instanceof InlineType || E.push(this.local[e]);
		return E;
	}
	forEachSet(e) {
		e(this);
	}
};
DecorationSet.empty = new DecorationSet([], []), DecorationSet.removeOverlap = removeOverlap;
var empty = DecorationSet.empty, DecorationGroup = class e {
	constructor(e) {
		this.members = e;
	}
	map(E, D) {
		let O = this.members.map((e) => e.map(E, D, noSpec));
		return e.from(O);
	}
	forChild(E, D) {
		if (D.isLeaf) return DecorationSet.empty;
		let O = [];
		for (let k = 0; k < this.members.length; k++) {
			let A = this.members[k].forChild(E, D);
			A != empty && (A instanceof e ? O = O.concat(A.members) : O.push(A));
		}
		return e.from(O);
	}
	eq(E) {
		if (!(E instanceof e) || E.members.length != this.members.length) return !1;
		for (let e = 0; e < this.members.length; e++) if (!this.members[e].eq(E.members[e])) return !1;
		return !0;
	}
	locals(e) {
		let E, D = !0;
		for (let O = 0; O < this.members.length; O++) {
			let k = this.members[O].localsInner(e);
			if (k.length) if (!E) E = k;
			else {
				D &&= (E = E.slice(), !1);
				for (let e = 0; e < k.length; e++) E.push(k[e]);
			}
		}
		return E ? removeOverlap(D ? E : E.sort(byPos)) : none;
	}
	static from(E) {
		switch (E.length) {
			case 0: return empty;
			case 1: return E[0];
			default: return new e(E.every((e) => e instanceof DecorationSet) ? E : E.reduce((e, E) => e.concat(E instanceof DecorationSet ? E : E.members), []));
		}
	}
	forEachSet(e) {
		for (let E = 0; E < this.members.length; E++) this.members[E].forEachSet(e);
	}
};
function mapChildren(e, E, D, O, k, A, j) {
	let M = e.slice();
	for (let e = 0, E = A; e < D.maps.length; e++) {
		let O = 0;
		D.maps[e].forEach((e, D, k, A) => {
			let j = A - k - (D - e);
			for (let k = 0; k < M.length; k += 3) {
				let A = M[k + 1];
				if (A < 0 || e > A + E - O) continue;
				let N = M[k] + E - O;
				D >= N ? M[k + 1] = e <= N ? -2 : -1 : e >= E && j && (M[k] += j, M[k + 1] += j);
			}
			O += j;
		}), E = D.maps[e].map(E, -1);
	}
	let N = !1;
	for (let E = 0; E < M.length; E += 3) if (M[E + 1] < 0) {
		if (M[E + 1] == -2) {
			N = !0, M[E + 1] = -1;
			continue;
		}
		let P = D.map(e[E] + A), F = P - k;
		if (F < 0 || F >= O.content.size) {
			N = !0;
			continue;
		}
		let I = D.map(e[E + 1] + A, -1) - k, { index: L, offset: R } = O.content.findIndex(F), z = O.maybeChild(L);
		if (z && R == F && R + z.nodeSize == I) {
			let O = M[E + 2].mapInner(D, z, P + 1, e[E] + A + 1, j);
			O == empty ? (M[E + 1] = -2, N = !0) : (M[E] = F, M[E + 1] = I, M[E + 2] = O);
		} else N = !0;
	}
	if (N) {
		let N = buildTree(mapAndGatherRemainingDecorations(M, e, E, D, k, A, j), O, 0, j);
		E = N.local;
		for (let e = 0; e < M.length; e += 3) M[e + 1] < 0 && (M.splice(e, 3), e -= 3);
		for (let e = 0, E = 0; e < N.children.length; e += 3) {
			let D = N.children[e];
			for (; E < M.length && M[E] < D;) E += 3;
			M.splice(E, 0, N.children[e], N.children[e + 1], N.children[e + 2]);
		}
	}
	return new DecorationSet(E.sort(byPos), M);
}
function moveSpans(e, E) {
	if (!E || !e.length) return e;
	let D = [];
	for (let O = 0; O < e.length; O++) {
		let k = e[O];
		D.push(new Decoration(k.from + E, k.to + E, k.type));
	}
	return D;
}
function mapAndGatherRemainingDecorations(e, E, D, O, k, A, j) {
	function M(e, E) {
		for (let A = 0; A < e.local.length; A++) {
			let M = e.local[A].map(O, k, E);
			M ? D.push(M) : j.onRemove && j.onRemove(e.local[A].spec);
		}
		for (let D = 0; D < e.children.length; D += 3) M(e.children[D + 2], e.children[D] + E + 1);
	}
	for (let D = 0; D < e.length; D += 3) e[D + 1] == -1 && M(e[D + 2], E[D] + A + 1);
	return D;
}
function takeSpansForNode(e, E, D) {
	if (E.isLeaf) return null;
	let O = D + E.nodeSize, k = null;
	for (let E = 0, A; E < e.length; E++) (A = e[E]) && A.from > D && A.to < O && ((k ||= []).push(A), e[E] = null);
	return k;
}
function withoutNulls(e) {
	let E = [];
	for (let D = 0; D < e.length; D++) e[D] != null && E.push(e[D]);
	return E;
}
function buildTree(e, E, D, O) {
	let k = [], A = !1;
	E.forEach((E, j) => {
		let M = takeSpansForNode(e, E, j + D);
		if (M) {
			A = !0;
			let e = buildTree(M, E, D + j + 1, O);
			e != empty && k.push(j, j + E.nodeSize, e);
		}
	});
	let j = moveSpans(A ? withoutNulls(e) : e, -D).sort(byPos);
	for (let e = 0; e < j.length; e++) j[e].type.valid(E, j[e]) || (O.onRemove && O.onRemove(j[e].spec), j.splice(e--, 1));
	return j.length || k.length ? new DecorationSet(j, k) : empty;
}
function byPos(e, E) {
	return e.from - E.from || e.to - E.to;
}
function removeOverlap(e) {
	let E = e;
	for (let D = 0; D < E.length - 1; D++) {
		let O = E[D];
		if (O.from != O.to) for (let k = D + 1; k < E.length; k++) {
			let A = E[k];
			if (A.from == O.from) {
				A.to != O.to && (E == e && (E = e.slice()), E[k] = A.copy(A.from, O.to), insertAhead(E, k + 1, A.copy(O.to, A.to)));
				continue;
			} else {
				A.from < O.to && (E == e && (E = e.slice()), E[D] = O.copy(O.from, A.from), insertAhead(E, k, O.copy(A.from, O.to)));
				break;
			}
		}
	}
	return E;
}
function insertAhead(e, E, D) {
	for (; E < e.length && byPos(D, e[E]) > 0;) E++;
	e.splice(E, 0, D);
}
function viewDecorations(e) {
	let E = [];
	return e.someProp("decorations", (D) => {
		let O = D(e.state);
		O && O != empty && E.push(O);
	}), e.cursorWrapper && E.push(DecorationSet.create(e.state.doc, [e.cursorWrapper.deco])), DecorationGroup.from(E);
}
var observeOptions = {
	childList: !0,
	characterData: !0,
	characterDataOldValue: !0,
	attributes: !0,
	attributeOldValue: !0,
	subtree: !0
}, useCharData = ie$1 && ie_version <= 11, SelectionState = class {
	constructor() {
		this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
	}
	set(e) {
		this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
	}
	clear() {
		this.anchorNode = this.focusNode = null;
	}
	eq(e) {
		return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
	}
}, DOMObserver = class {
	constructor(e, E) {
		this.view = e, this.handleDOMChange = E, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new SelectionState(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((E) => {
			for (let e = 0; e < E.length; e++) this.queue.push(E[e]);
			ie$1 && ie_version <= 11 && E.some((e) => e.type == "childList" && e.removedNodes.length || e.type == "characterData" && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : safari && e.composing && E.some((e) => e.type == "childList" && e.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
		}), useCharData && (this.onCharData = (e) => {
			this.queue.push({
				target: e.target,
				type: "characterData",
				oldValue: e.prevValue
			}), this.flushSoon();
		}), this.onSelectionChange = this.onSelectionChange.bind(this);
	}
	flushSoon() {
		this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
			this.flushingSoon = -1, this.flush();
		}, 20));
	}
	forceFlush() {
		this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
	}
	start() {
		this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, observeOptions)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
	}
	stop() {
		if (this.observer) {
			let e = this.observer.takeRecords();
			if (e.length) {
				for (let E = 0; E < e.length; E++) this.queue.push(e[E]);
				window.setTimeout(() => this.flush(), 20);
			}
			this.observer.disconnect();
		}
		this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
	}
	connectSelection() {
		this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
	}
	disconnectSelection() {
		this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
	}
	suppressSelectionUpdates() {
		this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
	}
	onSelectionChange() {
		if (hasFocusAndSelection(this.view)) {
			if (this.suppressingSelectionUpdates) return selectionToDOM(this.view);
			if (ie$1 && ie_version <= 11 && !this.view.state.selection.empty) {
				let e = this.view.domSelectionRange();
				if (e.focusNode && isEquivalentPosition(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
			}
			this.flush();
		}
	}
	setCurSelection() {
		this.currentSelection.set(this.view.domSelectionRange());
	}
	ignoreSelectionChange(e) {
		if (!e.focusNode) return !0;
		let E = /* @__PURE__ */ new Set(), D;
		for (let D = e.focusNode; D; D = parentNode(D)) E.add(D);
		for (let O = e.anchorNode; O; O = parentNode(O)) if (E.has(O)) {
			D = O;
			break;
		}
		let O = D && this.view.docView.nearestDesc(D);
		if (O && O.ignoreMutation({
			type: "selection",
			target: D.nodeType == 3 ? D.parentNode : D
		})) return this.setCurSelection(), !0;
	}
	pendingRecords() {
		if (this.observer) for (let e of this.observer.takeRecords()) this.queue.push(e);
		return this.queue;
	}
	flush() {
		let { view: e } = this;
		if (!e.docView || this.flushingSoon > -1) return;
		let E = this.pendingRecords();
		E.length && (this.queue = []);
		let D = e.domSelectionRange(), O = !this.suppressingSelectionUpdates && !this.currentSelection.eq(D) && hasFocusAndSelection(e) && !this.ignoreSelectionChange(D), k = -1, A = -1, j = !1, M = [];
		if (e.editable) for (let e = 0; e < E.length; e++) {
			let D = this.registerMutation(E[e], M);
			D && (k = k < 0 ? D.from : Math.min(D.from, k), A = A < 0 ? D.to : Math.max(D.to, A), D.typeOver && (j = !0));
		}
		if (M.some((e) => e.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46 || chrome && (e.composing || e.input.compositionEndedAt > Date.now() - 50) && E.some((e) => e.type == "childList" && e.removedNodes.length))) {
			for (let e of M) if (e.nodeName == "BR" && e.parentNode) {
				let E = e.nextSibling;
				for (; E && E.nodeType == 1;) {
					if (E.contentEditable == "false") {
						e.parentNode.removeChild(e);
						break;
					}
					E = E.firstChild;
				}
			}
		} else if (gecko && M.length) {
			let E = M.filter((e) => e.nodeName == "BR");
			if (E.length == 2) {
				let [e, D] = E;
				e.parentNode && e.parentNode.parentNode == D.parentNode ? D.remove() : e.remove();
			} else {
				let { focusNode: D } = this.currentSelection;
				for (let O of E) {
					let E = O.parentNode;
					E && E.nodeName == "LI" && (!D || blockParent(e, D) != E) && O.remove();
				}
			}
		}
		let N = null;
		k < 0 && O && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && selectionCollapsed(D) && (N = selectionFromDOM(e)) && N.eq(Selection$1.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, selectionToDOM(e), this.currentSelection.set(D), e.scrollToSelection()) : (k > -1 || O) && (k > -1 && (e.docView.markDirty(k, A), checkCSS(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, fixUpBadSafariComposition(e, M)), this.handleDOMChange(k, A, j, M), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(D) || selectionToDOM(e), this.currentSelection.set(D));
	}
	registerMutation(e, E) {
		if (E.indexOf(e.target) > -1) return null;
		let D = this.view.docView.nearestDesc(e.target);
		if (e.type == "attributes" && (D == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !D || D.ignoreMutation(e)) return null;
		if (e.type == "childList") {
			for (let D = 0; D < e.addedNodes.length; D++) {
				let O = e.addedNodes[D];
				E.push(O), O.nodeType == 3 && (this.lastChangedTextNode = O);
			}
			if (D.contentDOM && D.contentDOM != D.dom && !D.contentDOM.contains(e.target)) return {
				from: D.posBefore,
				to: D.posAfter
			};
			let O = e.previousSibling, k = e.nextSibling;
			if (ie$1 && ie_version <= 11 && e.addedNodes.length) for (let E = 0; E < e.addedNodes.length; E++) {
				let { previousSibling: D, nextSibling: A } = e.addedNodes[E];
				(!D || Array.prototype.indexOf.call(e.addedNodes, D) < 0) && (O = D), (!A || Array.prototype.indexOf.call(e.addedNodes, A) < 0) && (k = A);
			}
			let A = O && O.parentNode == e.target ? domIndex(O) + 1 : 0, j = D.localPosFromDOM(e.target, A, -1), M = k && k.parentNode == e.target ? domIndex(k) : e.target.childNodes.length;
			return {
				from: j,
				to: D.localPosFromDOM(e.target, M, 1)
			};
		} else if (e.type == "attributes") return {
			from: D.posAtStart - D.border,
			to: D.posAtEnd + D.border
		};
		else return this.lastChangedTextNode = e.target, {
			from: D.posAtStart,
			to: D.posAtEnd,
			typeOver: e.target.nodeValue == e.oldValue
		};
	}
}, cssChecked = /* @__PURE__ */ new WeakMap(), cssCheckWarned = !1;
function checkCSS(e) {
	if (!cssChecked.has(e) && (cssChecked.set(e, null), [
		"normal",
		"nowrap",
		"pre-line"
	].indexOf(getComputedStyle(e.dom).whiteSpace) !== -1)) {
		if (e.requiresGeckoHackNode = gecko, cssCheckWarned) return;
		console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), cssCheckWarned = !0;
	}
}
function rangeToSelectionRange(e, E) {
	let D = E.startContainer, O = E.startOffset, k = E.endContainer, A = E.endOffset, j = e.domAtPos(e.state.selection.anchor);
	return isEquivalentPosition(j.node, j.offset, k, A) && ([D, O, k, A] = [
		k,
		A,
		D,
		O
	]), {
		anchorNode: D,
		anchorOffset: O,
		focusNode: k,
		focusOffset: A
	};
}
function safariShadowSelectionRange(e, E) {
	if (E.getComposedRanges) {
		let D = E.getComposedRanges(e.root)[0];
		if (D) return rangeToSelectionRange(e, D);
	}
	let D;
	function O(e) {
		e.preventDefault(), e.stopImmediatePropagation(), D = e.getTargetRanges()[0];
	}
	return e.dom.addEventListener("beforeinput", O, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", O, !0), D ? rangeToSelectionRange(e, D) : null;
}
function blockParent(e, E) {
	for (let D = E.parentNode; D && D != e.dom; D = D.parentNode) {
		let E = e.docView.nearestDesc(D, !0);
		if (E && E.node.isBlock) return D;
	}
	return null;
}
function fixUpBadSafariComposition(e, E) {
	let { focusNode: D, focusOffset: O } = e.domSelectionRange();
	for (let k of E) if (k.parentNode?.nodeName == "TR") {
		let E = k.nextSibling;
		for (; E && E.nodeName != "TD" && E.nodeName != "TH";) E = E.nextSibling;
		if (E) {
			let A = E;
			for (;;) {
				let e = A.firstChild;
				if (!e || e.nodeType != 1 || e.contentEditable == "false" || /^(BR|IMG)$/.test(e.nodeName)) break;
				A = e;
			}
			A.insertBefore(k, A.firstChild), D == k && e.domSelection().collapse(k, O);
		} else k.parentNode.removeChild(k);
	}
}
function parseBetween(e, E, D, O) {
	let { node: k, fromOffset: A, toOffset: j, from: M, to: N } = e.docView.parseRange(E, D), P = e.domSelectionRange(), F, I = P.anchorNode;
	if (I && e.dom.contains(I.nodeType == 1 ? I : I.parentNode) && (F = [{
		node: I,
		offset: P.anchorOffset
	}], selectionCollapsed(P) || F.push({
		node: P.focusNode,
		offset: P.focusOffset
	})), chrome && e.input.lastKeyCode === 8) for (let e = j; e > A; e--) {
		let E = k.childNodes[e - 1], D = E.pmViewDesc;
		if (E.nodeName == "BR" && !D) {
			j = e;
			break;
		}
		if (!D || D.size) break;
	}
	let L = e.state.doc, R = e.someProp("domParser") || DOMParser.fromSchema(e.state.schema), z = L.resolve(M), B = null, V = R.parse(k, {
		topNode: z.parent,
		topMatch: z.parent.contentMatchAt(z.index()),
		topOpen: !0,
		from: A,
		to: j,
		preserveWhitespace: z.parent.type.whitespace == "pre" ? "full" : !0,
		findPositions: F,
		ruleFromNode: ruleFromNode(O),
		context: z
	});
	if (F && F[0].pos != null) {
		let e = F[0].pos, E = F[1] && F[1].pos;
		E ??= e, B = {
			anchor: e + M,
			head: E + M
		};
	}
	return {
		doc: V,
		sel: B,
		from: M,
		to: N
	};
}
var ruleFromNode = (e) => (E) => {
	let D = E.pmViewDesc;
	if (D) return D.parseRule(e);
	if (E.nodeName == "BR" && E.parentNode) {
		if (safari && /^(ul|ol)$/i.test(E.parentNode.nodeName)) {
			let e = document.createElement("div");
			return e.appendChild(document.createElement("li")), { skip: e };
		} else if (E.parentNode.lastChild == E || safari && /^(tr|table)$/i.test(E.parentNode.nodeName)) return { ignore: !0 };
	} else if (E.nodeName == "IMG" && E.getAttribute("mark-placeholder")) return { ignore: !0 };
	return null;
}, isInline = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function readDOMChange(e, E, D, O, k) {
	let A = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
	if (e.input.compositionPendingChanges = 0, E < 0) {
		let E = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null, D = selectionFromDOM(e, E);
		if (D && !e.state.selection.eq(D)) {
			if (chrome && android && e.input.lastKeyCode === 13 && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", (E) => E(e, keyEvent(13, "Enter")))) return;
			let O = e.state.tr.setSelection(D);
			E == "pointer" ? O.setMeta("pointer", !0) : E == "key" && O.scrollIntoView(), A && O.setMeta("composition", A), e.dispatch(O);
		}
		return;
	}
	let j = e.state.doc.resolve(E), M = j.sharedDepth(D);
	E = j.before(M + 1), D = e.state.doc.resolve(D).after(M + 1);
	let N = e.state.selection, P = parseBetween(e, E, D, k), F = e.state.doc, I = F.slice(P.from, P.to), L, R;
	e.input.lastKeyCode === 8 && Date.now() - 100 < e.input.lastKeyCodeTime ? (L = e.state.selection.to, R = "end") : (L = e.state.selection.from, R = "start"), e.input.lastKeyCode = null;
	let z = findDiff(I.content, P.doc.content, P.from, L, R);
	if (z && e.input.domChangeCount++, (ios && e.input.lastIOSEnter > Date.now() - 225 || android) && k.some((e) => e.nodeType == 1 && !isInline.test(e.nodeName)) && (!z || z.endA >= z.endB) && e.someProp("handleKeyDown", (E) => E(e, keyEvent(13, "Enter")))) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (!z) if (O && N instanceof TextSelection && !N.empty && N.$head.sameParent(N.$anchor) && !e.composing && !(P.sel && P.sel.anchor != P.sel.head)) z = {
		start: N.from,
		endA: N.to,
		endB: N.to
	};
	else {
		if (P.sel) {
			let E = resolveSelection(e, e.state.doc, P.sel);
			if (E && !E.eq(e.state.selection)) {
				let D = e.state.tr.setSelection(E);
				A && D.setMeta("composition", A), e.dispatch(D);
			}
		}
		return;
	}
	e.state.selection.from < e.state.selection.to && z.start == z.endB && e.state.selection instanceof TextSelection && (z.start > e.state.selection.from && z.start <= e.state.selection.from + 2 && e.state.selection.from >= P.from ? z.start = e.state.selection.from : z.endA < e.state.selection.to && z.endA >= e.state.selection.to - 2 && e.state.selection.to <= P.to && (z.endB += e.state.selection.to - z.endA, z.endA = e.state.selection.to)), ie$1 && ie_version <= 11 && z.endB == z.start + 1 && z.endA == z.start && z.start > P.from && P.doc.textBetween(z.start - P.from - 1, z.start - P.from + 1) == " \xA0" && (z.start--, z.endA--, z.endB--);
	let B = P.doc.resolveNoCache(z.start - P.from), V = P.doc.resolveNoCache(z.endB - P.from), H = F.resolve(z.start), U = B.sameParent(V) && B.parent.inlineContent && H.end() >= z.endA;
	if ((ios && e.input.lastIOSEnter > Date.now() - 225 && (!U || k.some((e) => e.nodeName == "DIV" || e.nodeName == "P")) || !U && B.pos < P.doc.content.size && (!B.sameParent(V) || !B.parent.inlineContent) && B.pos < V.pos && !/\S/.test(P.doc.textBetween(B.pos, V.pos, "", ""))) && e.someProp("handleKeyDown", (E) => E(e, keyEvent(13, "Enter")))) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (e.state.selection.anchor > z.start && looksLikeBackspace(F, z.start, z.endA, B, V) && e.someProp("handleKeyDown", (E) => E(e, keyEvent(8, "Backspace")))) {
		android && chrome && e.domObserver.suppressSelectionUpdates();
		return;
	}
	chrome && z.endB == z.start && (e.input.lastChromeDelete = Date.now()), android && !U && B.start() != V.start() && V.parentOffset == 0 && B.depth == V.depth && P.sel && P.sel.anchor == P.sel.head && P.sel.head == z.endA && (z.endB -= 2, V = P.doc.resolveNoCache(z.endB - P.from), setTimeout(() => {
		e.someProp("handleKeyDown", function(E) {
			return E(e, keyEvent(13, "Enter"));
		});
	}, 20));
	let W = z.start, G = z.endA, K = (E) => {
		let D = E || e.state.tr.replace(W, G, P.doc.slice(z.start - P.from, z.endB - P.from));
		if (P.sel) {
			let E = resolveSelection(e, D.doc, P.sel);
			E && !(chrome && e.composing && E.empty && (z.start != z.endB || e.input.lastChromeDelete < Date.now() - 100) && (E.head == W || E.head == D.mapping.map(G) - 1) || ie$1 && E.empty && E.head == W) && D.setSelection(E);
		}
		return A && D.setMeta("composition", A), D.scrollIntoView();
	}, q;
	if (U) if (B.pos == V.pos) {
		ie$1 && ie_version <= 11 && B.parentOffset == 0 && (e.domObserver.suppressSelectionUpdates(), setTimeout(() => selectionToDOM(e), 20));
		let E = K(e.state.tr.delete(W, G)), D = F.resolve(z.start).marksAcross(F.resolve(z.endA));
		D && E.ensureMarks(D), e.dispatch(E);
	} else if (z.endA == z.endB && (q = isMarkChange(B.parent.content.cut(B.parentOffset, V.parentOffset), H.parent.content.cut(H.parentOffset, z.endA - H.start())))) {
		let E = K(e.state.tr);
		q.type == "add" ? E.addMark(W, G, q.mark) : E.removeMark(W, G, q.mark), e.dispatch(E);
	} else if (B.parent.child(B.index()).isText && B.index() == V.index() - (V.textOffset ? 0 : 1)) {
		let E = B.parent.textBetween(B.parentOffset, V.parentOffset), D = () => K(e.state.tr.insertText(E, W, G));
		e.someProp("handleTextInput", (O) => O(e, W, G, E, D)) || e.dispatch(D());
	} else e.dispatch(K());
	else e.dispatch(K());
}
function resolveSelection(e, E, D) {
	return Math.max(D.anchor, D.head) > E.content.size ? null : selectionBetween(e, E.resolve(D.anchor), E.resolve(D.head));
}
function isMarkChange(e, E) {
	let D = e.firstChild.marks, O = E.firstChild.marks, k = D, A = O, j, M, N;
	for (let e = 0; e < O.length; e++) k = O[e].removeFromSet(k);
	for (let e = 0; e < D.length; e++) A = D[e].removeFromSet(A);
	if (k.length == 1 && A.length == 0) M = k[0], j = "add", N = (e) => e.mark(M.addToSet(e.marks));
	else if (k.length == 0 && A.length == 1) M = A[0], j = "remove", N = (e) => e.mark(M.removeFromSet(e.marks));
	else return null;
	let P = [];
	for (let e = 0; e < E.childCount; e++) P.push(N(E.child(e)));
	if (Fragment.from(P).eq(e)) return {
		mark: M,
		type: j
	};
}
function looksLikeBackspace(e, E, D, O, k) {
	if (D - E <= k.pos - O.pos || skipClosingAndOpening(O, !0, !1) < k.pos) return !1;
	let A = e.resolve(E);
	if (!O.parent.isTextblock) {
		let e = A.nodeAfter;
		return e != null && D == E + e.nodeSize;
	}
	if (A.parentOffset < A.parent.content.size || !A.parent.isTextblock) return !1;
	let j = e.resolve(skipClosingAndOpening(A, !0, !0));
	return !j.parent.isTextblock || j.pos > D || skipClosingAndOpening(j, !0, !1) < D ? !1 : O.parent.content.cut(O.parentOffset).eq(j.parent.content);
}
function skipClosingAndOpening(e, E, D) {
	let O = e.depth, k = E ? e.end() : e.pos;
	for (; O > 0 && (E || e.indexAfter(O) == e.node(O).childCount);) O--, k++, E = !1;
	if (D) {
		let E = e.node(O).maybeChild(e.indexAfter(O));
		for (; E && !E.isLeaf;) E = E.firstChild, k++;
	}
	return k;
}
function findDiff(e, E, D, O, k) {
	let A = e.findDiffStart(E, D), j = D + e.size, M = D + E.size;
	if (A == null) return null;
	let { a: N, b: P } = e.findDiffEnd(E, j, M);
	if (k == "end") {
		let e = Math.max(0, A - Math.min(N, P));
		O -= N + e - A;
	}
	if (N < A && j < M) {
		let e = O <= A && O >= N ? A - O : 0;
		A -= e, P = A + (P - N), N = A;
	} else if (P < A) {
		let e = O <= A && O >= P ? A - O : 0;
		A -= e, N = A + (N - P), P = A;
	}
	return {
		start: A,
		endA: N,
		endB: P
	};
}
var EditorView = class {
	constructor(e, E) {
		this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new InputState(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = E, this.state = E.state, this.directPlugins = E.plugins || [], this.directPlugins.forEach(checkStateComponent), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = getEditable(this), updateCursorWrapper(this), this.nodeViews = buildNodeViews(this), this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this), this.domObserver = new DOMObserver(this, (e, E, D, O) => readDOMChange(this, e, E, D, O)), this.domObserver.start(), initInput(this), this.updatePluginViews();
	}
	get composing() {
		return this.input.composing;
	}
	get props() {
		if (this._props.state != this.state) {
			let e = this._props;
			for (let E in this._props = {}, e) this._props[E] = e[E];
			this._props.state = this.state;
		}
		return this._props;
	}
	update(e) {
		e.handleDOMEvents != this._props.handleDOMEvents && ensureListeners(this);
		let E = this._props;
		this._props = e, e.plugins && (e.plugins.forEach(checkStateComponent), this.directPlugins = e.plugins), this.updateStateInner(e.state, E);
	}
	setProps(e) {
		let E = {};
		for (let e in this._props) E[e] = this._props[e];
		for (let D in E.state = this.state, e) E[D] = e[D];
		this.update(E);
	}
	updateState(e) {
		this.updateStateInner(e, this._props);
	}
	updateStateInner(e, E) {
		let D = this.state, O = !1, k = !1;
		e.storedMarks && this.composing && (clearComposition(this), k = !0), this.state = e;
		let A = D.plugins != e.plugins || this._props.plugins != E.plugins;
		if (A || this._props.plugins != E.plugins || this._props.nodeViews != E.nodeViews) {
			let e = buildNodeViews(this);
			changedNodeViews(e, this.nodeViews) && (this.nodeViews = e, O = !0);
		}
		(A || E.handleDOMEvents != this._props.handleDOMEvents) && ensureListeners(this), this.editable = getEditable(this), updateCursorWrapper(this);
		let j = viewDecorations(this), M = computeDocDeco(this), N = D.plugins != e.plugins && !D.doc.eq(e.doc) ? "reset" : e.scrollToSelection > D.scrollToSelection ? "to selection" : "preserve", P = O || !this.docView.matchesNode(e.doc, M, j);
		(P || !e.selection.eq(D.selection)) && (k = !0);
		let F = N == "preserve" && k && this.dom.style.overflowAnchor == null && storeScrollPos(this);
		if (k) {
			this.domObserver.stop();
			let E = P && (ie$1 || chrome) && !this.composing && !D.selection.empty && !e.selection.empty && selectionContextChanged(D.selection, e.selection);
			if (P) {
				let D = chrome ? this.trackWrites = this.domSelectionRange().focusNode : null;
				this.composing && (this.input.compositionNode = findCompositionNode(this)), (O || !this.docView.update(e.doc, M, j, this)) && (this.docView.updateOuterDeco(M), this.docView.destroy(), this.docView = docViewDesc(e.doc, M, j, this.dom, this)), D && (!this.trackWrites || !this.dom.contains(this.trackWrites)) && (E = !0);
			}
			let k = this.input.mouseDown;
			E || !(k && this.domObserver.currentSelection.eq(this.domSelectionRange()) && anchorInRightPlace(this) && k.delaySelUpdate()) ? selectionToDOM(this, E) : (syncNodeSelection(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
		}
		this.updatePluginViews(D), this.dragging?.node && !D.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, D), N == "reset" ? this.dom.scrollTop = 0 : N == "to selection" ? this.scrollToSelection() : F && resetScrollPos(F);
	}
	scrollToSelection() {
		let e = this.domSelectionRange().focusNode;
		if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode)) && !this.someProp("handleScrollToSelection", (e) => e(this))) if (this.state.selection instanceof NodeSelection) {
			let E = this.docView.domAfterPos(this.state.selection.from);
			E.nodeType == 1 && scrollRectIntoView(this, E.getBoundingClientRect(), e);
		} else scrollRectIntoView(this, this.coordsAtPos(this.state.selection.head, 1), e);
	}
	destroyPluginViews() {
		let e;
		for (; e = this.pluginViews.pop();) e.destroy && e.destroy();
	}
	updatePluginViews(e) {
		if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
			this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
			for (let e = 0; e < this.directPlugins.length; e++) {
				let E = this.directPlugins[e];
				E.spec.view && this.pluginViews.push(E.spec.view(this));
			}
			for (let e = 0; e < this.state.plugins.length; e++) {
				let E = this.state.plugins[e];
				E.spec.view && this.pluginViews.push(E.spec.view(this));
			}
		} else for (let E = 0; E < this.pluginViews.length; E++) {
			let D = this.pluginViews[E];
			D.update && D.update(this, e);
		}
	}
	updateDraggedNode(e, E) {
		let D = e.node, O = -1;
		if (D.from < this.state.doc.content.size && this.state.doc.nodeAt(D.from) == D.node) O = D.from;
		else {
			let e = D.from + (this.state.doc.content.size - E.doc.content.size);
			(e > 0 && e < this.state.doc.content.size && this.state.doc.nodeAt(e)) == D.node && (O = e);
		}
		this.dragging = new Dragging(e.slice, e.move, O < 0 ? void 0 : NodeSelection.create(this.state.doc, O));
	}
	someProp(e, E) {
		let D = this._props && this._props[e], O;
		if (D != null && (O = E ? E(D) : D)) return O;
		for (let D = 0; D < this.directPlugins.length; D++) {
			let k = this.directPlugins[D].props[e];
			if (k != null && (O = E ? E(k) : k)) return O;
		}
		let k = this.state.plugins;
		if (k) for (let D = 0; D < k.length; D++) {
			let A = k[D].props[e];
			if (A != null && (O = E ? E(A) : A)) return O;
		}
	}
	hasFocus() {
		if (ie$1) {
			let e = this.root.activeElement;
			if (e == this.dom) return !0;
			if (!e || !this.dom.contains(e)) return !1;
			for (; e && this.dom != e && this.dom.contains(e);) {
				if (e.contentEditable == "false") return !1;
				e = e.parentElement;
			}
			return !0;
		}
		return this.root.activeElement == this.dom;
	}
	focus() {
		this.domObserver.stop(), this.editable && focusPreventScroll(this.dom), selectionToDOM(this), this.domObserver.start();
	}
	get root() {
		let e = this._root;
		if (e == null) {
			for (let e = this.dom.parentNode; e; e = e.parentNode) if (e.nodeType == 9 || e.nodeType == 11 && e.host) return e.getSelection || (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()), this._root = e;
		}
		return e || document;
	}
	updateRoot() {
		this._root = null;
	}
	posAtCoords(e) {
		return posAtCoords(this, e);
	}
	coordsAtPos(e, E = 1) {
		return coordsAtPos(this, e, E);
	}
	domAtPos(e, E = 0) {
		return this.docView.domFromPos(e, E);
	}
	nodeDOM(e) {
		let E = this.docView.descAt(e);
		return E ? E.nodeDOM : null;
	}
	posAtDOM(e, E, D = -1) {
		let O = this.docView.posFromDOM(e, E, D);
		if (O == null) throw RangeError("DOM position not inside the editor");
		return O;
	}
	endOfTextblock(e, E) {
		return endOfTextblock(this, E || this.state, e);
	}
	pasteHTML(e, E) {
		return doPaste(this, "", e, !1, E || new ClipboardEvent("paste"));
	}
	pasteText(e, E) {
		return doPaste(this, e, null, !0, E || new ClipboardEvent("paste"));
	}
	serializeForClipboard(e) {
		return serializeForClipboard(this, e);
	}
	destroy() {
		this.docView && (destroyInput(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], viewDecorations(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, clearReusedRange());
	}
	get isDestroyed() {
		return this.docView == null;
	}
	dispatchEvent(e) {
		return dispatchEvent(this, e);
	}
	domSelectionRange() {
		let e = this.domSelection();
		return e ? safari && this.root.nodeType === 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariShadowSelectionRange(this, e) || e : {
			focusNode: null,
			focusOffset: 0,
			anchorNode: null,
			anchorOffset: 0
		};
	}
	domSelection() {
		return this.root.getSelection();
	}
};
EditorView.prototype.dispatch = function(e) {
	let E = this._props.dispatchTransaction;
	E ? E.call(this, e) : this.updateState(this.state.apply(e));
};
function computeDocDeco(e) {
	let E = Object.create(null);
	return E.class = "ProseMirror", E.contenteditable = String(e.editable), e.someProp("attributes", (D) => {
		if (typeof D == "function" && (D = D(e.state)), D) for (let e in D) e == "class" ? E.class += " " + D[e] : e == "style" ? E.style = (E.style ? E.style + ";" : "") + D[e] : !E[e] && e != "contenteditable" && e != "nodeName" && (E[e] = String(D[e]));
	}), E.translate ||= "no", [Decoration.node(0, e.state.doc.content.size, E)];
}
function updateCursorWrapper(e) {
	if (e.markCursor) {
		let E = document.createElement("img");
		E.className = "ProseMirror-separator", E.setAttribute("mark-placeholder", "true"), E.setAttribute("alt", ""), e.cursorWrapper = {
			dom: E,
			deco: Decoration.widget(e.state.selection.from, E, {
				raw: !0,
				marks: e.markCursor
			})
		};
	} else e.cursorWrapper = null;
}
function getEditable(e) {
	return !e.someProp("editable", (E) => E(e.state) === !1);
}
function selectionContextChanged(e, E) {
	let D = Math.min(e.$anchor.sharedDepth(e.head), E.$anchor.sharedDepth(E.head));
	return e.$anchor.start(D) != E.$anchor.start(D);
}
function buildNodeViews(e) {
	let E = Object.create(null);
	function D(e) {
		for (let D in e) Object.prototype.hasOwnProperty.call(E, D) || (E[D] = e[D]);
	}
	return e.someProp("nodeViews", D), e.someProp("markViews", D), E;
}
function changedNodeViews(e, E) {
	let D = 0, O = 0;
	for (let O in e) {
		if (e[O] != E[O]) return !0;
		D++;
	}
	for (let e in E) O++;
	return D != O;
}
function checkStateComponent(e) {
	if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw RangeError("Plugins passed directly to the view must not have a state component");
}
for (var base = {
	8: "Backspace",
	9: "Tab",
	10: "Enter",
	12: "NumLock",
	13: "Enter",
	16: "Shift",
	17: "Control",
	18: "Alt",
	20: "CapsLock",
	27: "Escape",
	32: " ",
	33: "PageUp",
	34: "PageDown",
	35: "End",
	36: "Home",
	37: "ArrowLeft",
	38: "ArrowUp",
	39: "ArrowRight",
	40: "ArrowDown",
	44: "PrintScreen",
	45: "Insert",
	46: "Delete",
	59: ";",
	61: "=",
	91: "Meta",
	92: "Meta",
	106: "*",
	107: "+",
	108: ",",
	109: "-",
	110: ".",
	111: "/",
	144: "NumLock",
	145: "ScrollLock",
	160: "Shift",
	161: "Shift",
	162: "Control",
	163: "Control",
	164: "Alt",
	165: "Alt",
	173: "-",
	186: ";",
	187: "=",
	188: ",",
	189: "-",
	190: ".",
	191: "/",
	192: "`",
	219: "[",
	220: "\\",
	221: "]",
	222: "'"
}, shift = {
	48: ")",
	49: "!",
	50: "@",
	51: "#",
	52: "$",
	53: "%",
	54: "^",
	55: "&",
	56: "*",
	57: "(",
	59: ":",
	61: "+",
	173: "_",
	186: ":",
	187: "+",
	188: "<",
	189: "_",
	190: ">",
	191: "?",
	192: "~",
	219: "{",
	220: "|",
	221: "}",
	222: "\""
}, mac$1 = typeof navigator < "u" && /Mac/.test(navigator.platform), ie = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);
for (var i = 1; i <= 24; i++) base[i + 111] = "F" + i;
for (var i = 65; i <= 90; i++) base[i] = String.fromCharCode(i + 32), shift[i] = String.fromCharCode(i);
for (var code in base) shift.hasOwnProperty(code) || (shift[code] = base[code]);
function keyName(e) {
	var E = !(mac$1 && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || ie && e.shiftKey && e.key && e.key.length == 1 || e.key == "Unidentified") && e.key || (e.shiftKey ? shift : base)[e.keyCode] || e.key || "Unidentified";
	return E == "Esc" && (E = "Escape"), E == "Del" && (E = "Delete"), E == "Left" && (E = "ArrowLeft"), E == "Up" && (E = "ArrowUp"), E == "Right" && (E = "ArrowRight"), E == "Down" && (E = "ArrowDown"), E;
}
var mac = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), windows = typeof navigator < "u" && /Win/.test(navigator.platform);
function normalizeKeyName$1(e) {
	let E = e.split(/-(?!$)/), D = E[E.length - 1];
	D == "Space" && (D = " ");
	let O, k, A, j;
	for (let e = 0; e < E.length - 1; e++) {
		let D = E[e];
		if (/^(cmd|meta|m)$/i.test(D)) j = !0;
		else if (/^a(lt)?$/i.test(D)) O = !0;
		else if (/^(c|ctrl|control)$/i.test(D)) k = !0;
		else if (/^s(hift)?$/i.test(D)) A = !0;
		else if (/^mod$/i.test(D)) mac ? j = !0 : k = !0;
		else throw Error("Unrecognized modifier name: " + D);
	}
	return O && (D = "Alt-" + D), k && (D = "Ctrl-" + D), j && (D = "Meta-" + D), A && (D = "Shift-" + D), D;
}
function normalize(e) {
	let E = Object.create(null);
	for (let D in e) E[normalizeKeyName$1(D)] = e[D];
	return E;
}
function modifiers(e, E, D = !0) {
	return E.altKey && (e = "Alt-" + e), E.ctrlKey && (e = "Ctrl-" + e), E.metaKey && (e = "Meta-" + e), D && E.shiftKey && (e = "Shift-" + e), e;
}
function keymap(e) {
	return new Plugin({ props: { handleKeyDown: keydownHandler(e) } });
}
function keydownHandler(e) {
	let E = normalize(e);
	return function(e, D) {
		let O = keyName(D), k, A = E[modifiers(O, D)];
		if (A && A(e.state, e.dispatch, e)) return !0;
		if (O.length == 1 && O != " ") {
			if (D.shiftKey) {
				let k = E[modifiers(O, D, !1)];
				if (k && k(e.state, e.dispatch, e)) return !0;
			}
			if ((D.altKey || D.metaKey || D.ctrlKey) && !(windows && D.ctrlKey && D.altKey) && (k = base[D.keyCode]) && k != O) {
				let O = E[modifiers(k, D)];
				if (O && O(e.state, e.dispatch, e)) return !0;
			}
		}
		return !1;
	};
}
function createChainableState(e) {
	let { state: E, transaction: D } = e, { selection: O } = D, { doc: k } = D, { storedMarks: A } = D;
	return {
		...E,
		apply: E.apply.bind(E),
		applyTransaction: E.applyTransaction.bind(E),
		plugins: E.plugins,
		schema: E.schema,
		reconfigure: E.reconfigure.bind(E),
		toJSON: E.toJSON.bind(E),
		get storedMarks() {
			return A;
		},
		get selection() {
			return O;
		},
		get doc() {
			return k;
		},
		get tr() {
			return O = D.selection, k = D.doc, A = D.storedMarks, D;
		}
	};
}
var CommandManager = class e {
	constructor(e) {
		this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
	}
	get hasCustomState() {
		return !!this.customState;
	}
	get state() {
		return this.customState || this.editor.state;
	}
	get commands() {
		let { rawCommands: e, editor: E, state: D } = this, { view: O } = E, { tr: k } = D, A = this.buildProps(k);
		return Object.fromEntries(Object.entries(e).map(([e, E]) => [e, (...e) => {
			let D = E(...e)(A);
			return !k.getMeta("preventDispatch") && !this.hasCustomState && O.dispatch(k), D;
		}]));
	}
	get chain() {
		return () => this.createChain();
	}
	get can() {
		return () => this.createCan();
	}
	createChain(e, E = !0) {
		let { rawCommands: D, editor: O, state: k } = this, { view: A } = O, j = [], M = !!e, N = e || k.tr, P = () => (!M && E && !N.getMeta("preventDispatch") && !this.hasCustomState && A.dispatch(N), j.every((e) => e === !0)), F = {
			...Object.fromEntries(Object.entries(D).map(([e, D]) => [e, (...e) => {
				let O = this.buildProps(N, E), k = D(...e)(O);
				return j.push(k), F;
			}])),
			run: P
		};
		return F;
	}
	static createFakeChain() {
		let e = new Proxy({}, { get: (E, D) => {
			if (D !== "then") return D === "run" ? () => !1 : () => e;
		} });
		return e;
	}
	createCan(e) {
		let { rawCommands: E, state: D } = this, O = e || D.tr, k = this.buildProps(O, !1);
		return {
			...Object.fromEntries(Object.entries(E).map(([e, E]) => [e, (...e) => E(...e)({
				...k,
				dispatch: void 0
			})])),
			chain: () => this.createChain(O, !1)
		};
	}
	static createFallbackCan() {
		let E = e.createFakeChain();
		return new Proxy({ chain: () => E }, { get: (e, E) => {
			if (E !== "then") return E === "chain" ? e.chain : () => !1;
		} });
	}
	buildProps(e, E = !0) {
		let { rawCommands: D, editor: O, state: k } = this, { view: A } = O, j = {
			tr: e,
			editor: O,
			view: A,
			state: createChainableState({
				state: k,
				transaction: e
			}),
			dispatch: E ? () => void 0 : void 0,
			chain: () => this.createChain(e, E),
			can: () => this.createCan(e),
			get commands() {
				return Object.fromEntries(Object.entries(D).map(([e, E]) => [e, (...e) => E(...e)(j)]));
			}
		};
		return j;
	}
}, blur = () => ({ editor: e, view: E }) => (requestAnimationFrame(() => {
	if (!e.isDestroyed) {
		var D;
		E.dom.blur(), (D = window) == null || (D = D.getSelection()) == null || D.removeAllRanges();
	}
}), !0), clearContent = (e = !0) => ({ commands: E }) => E.setContent("", { emitUpdate: e }), clearNodes = () => ({ state: e, tr: E, dispatch: D }) => {
	let { selection: O } = E, { ranges: k } = O;
	return D && k.forEach(({ $from: D, $to: O }) => {
		e.doc.nodesBetween(D.pos, O.pos, (e, D) => {
			if (e.type.isText) return;
			let { doc: O, mapping: k } = E, A = O.resolve(k.map(D)), j = O.resolve(k.map(D + e.nodeSize)), M = A.blockRange(j);
			if (!M) return;
			let N = liftTarget(M);
			if (e.type.isTextblock) {
				let { defaultType: e } = A.parent.contentMatchAt(A.index());
				E.setNodeMarkup(M.start, e);
			}
			(N || N === 0) && E.lift(M, N);
		});
	}), !0;
}, command = (e) => (E) => e(E), createParagraphNear$1 = () => ({ state: e, dispatch: E }) => createParagraphNear(e, E), cut = (e, E) => ({ editor: D, tr: O }) => {
	let { state: k } = D, A = k.doc.slice(e.from, e.to);
	O.deleteRange(e.from, e.to);
	let j = O.mapping.map(E);
	return O.insert(j, A.content), O.setSelection(new TextSelection(O.doc.resolve(Math.max(j - 1, 0)))), !0;
}, deleteCurrentNode = () => ({ tr: e, dispatch: E }) => {
	let { selection: D } = e, O = D.$anchor.node();
	if (O.content.size > 0) return !1;
	let k = e.selection.$anchor;
	for (let D = k.depth; D > 0; --D) if (k.node(D).type === O.type) {
		if (E) {
			let E = k.before(D), O = k.after(D);
			e.delete(E, O).scrollIntoView();
		}
		return !0;
	}
	return !1;
};
function getNodeType(e, E) {
	if (typeof e == "string") {
		if (!E.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
		return E.nodes[e];
	}
	return e;
}
var deleteNode = (e) => ({ tr: E, state: D, dispatch: O }) => {
	let k = getNodeType(e, D.schema), A = E.selection.$anchor;
	for (let e = A.depth; e > 0; --e) if (A.node(e).type === k) {
		if (O) {
			let D = A.before(e), O = A.after(e);
			E.delete(D, O).scrollIntoView();
		}
		return !0;
	}
	return !1;
}, deleteRange = (e) => ({ tr: E, dispatch: D }) => {
	let { from: O, to: k } = e;
	return D && E.delete(O, k), !0;
}, hasTextContent = (e) => e.content ? /^text(\*|\+)/.test(e.content) : !1, expandSelectionForSide = (e, E, D) => {
	if (!e.parent.isInline || D === "left" && e.pos > e.start() || D === "right" && e.pos < e.end()) return e.pos;
	let O = E.nodes[e.parent.type.name].spec;
	return hasTextContent(O) ? D === "left" ? e.start() - 1 : e.end() + 1 : e.pos;
}, expandSelectionForInlineText = (e, E, D) => ({
	from: expandSelectionForSide(e, D, "left"),
	to: expandSelectionForSide(E, D, "right")
}), deleteSelection = () => ({ state: e, dispatch: E }) => {
	if (e.selection.empty) return !1;
	if (E) {
		let D = e.tr, { ranges: O } = e.selection, k = D.steps.length;
		O.forEach((E) => {
			let O = D.mapping.slice(k), { from: A, to: j } = expandSelectionForInlineText(D.doc.resolve(O.map(E.$from.pos)), D.doc.resolve(O.map(E.$to.pos)), e.schema);
			D.deleteRange(A, j);
		}), D.selection.empty || D.setSelection(TextSelection.near(D.doc.resolve(D.selection.from))), D.scrollIntoView(), E(D);
	}
	return !0;
}, enter = () => ({ commands: e }) => e.keyboardShortcut("Enter"), exitCode$1 = () => ({ state: e, dispatch: E }) => exitCode(e, E);
function isRegExp(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function objectIncludes(e, E, D = { strict: !0 }) {
	let O = Object.keys(E);
	return O.length ? O.every((O) => D.strict ? E[O] === e[O] : isRegExp(E[O]) ? E[O].test(e[O]) : E[O] === e[O]) : !0;
}
function findMarkInSet(e, E, D = {}) {
	return e.find((e) => e.type === E && objectIncludes(Object.fromEntries(Object.keys(D).map((E) => [E, e.attrs[E]])), D));
}
function isMarkInSet(e, E, D = {}) {
	return !!findMarkInSet(e, E, D);
}
function getMarkRange(e, E, D) {
	if (!e || !E) return;
	let O = e.parent.childAfter(e.parentOffset);
	if ((!O.node || !O.node.marks.some((e) => e.type === E)) && (O = e.parent.childBefore(e.parentOffset)), !O.node || !O.node.marks.some((e) => e.type === E)) return;
	if (!D) {
		let e = O.node.marks.find((e) => e.type === E);
		e && (D = e.attrs);
	}
	if (!findMarkInSet([...O.node.marks], E, D)) return;
	let k = O.index, A = e.start() + O.offset, j = k + 1, M = A + O.node.nodeSize;
	for (; k > 0 && isMarkInSet([...e.parent.child(k - 1).marks], E, D);) --k, A -= e.parent.child(k).nodeSize;
	for (; j < e.parent.childCount && isMarkInSet([...e.parent.child(j).marks], E, D);) M += e.parent.child(j).nodeSize, j += 1;
	return {
		from: A,
		to: M
	};
}
function getMarkType(e, E) {
	if (typeof e == "string") {
		if (!E.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
		return E.marks[e];
	}
	return e;
}
var extendMarkRange = (e, E) => ({ tr: D, state: O, dispatch: k }) => {
	let A = getMarkType(e, O.schema), { doc: j, selection: M } = D, { $from: N, from: P, to: F } = M;
	if (k) {
		let e = getMarkRange(N, A, E);
		if (e && e.from <= P && e.to >= F) {
			let E = TextSelection.create(j, e.from, e.to);
			D.setSelection(E);
		}
	}
	return !0;
}, first = (e) => (E) => {
	let D = typeof e == "function" ? e(E) : e;
	for (let e = 0; e < D.length; e += 1) if (D[e](E)) return !0;
	return !1;
};
function isTextSelection(e) {
	return e instanceof TextSelection;
}
function minMax(e = 0, E = 0, D = 0) {
	return Math.min(Math.max(e, E), D);
}
function resolveFocusPosition(e, E = null) {
	if (!E) return null;
	let D = Selection$1.atStart(e), O = Selection$1.atEnd(e);
	if (E === "start" || E === !0) return D;
	if (E === "end") return O;
	let k = D.from, A = O.to;
	return E === "all" ? TextSelection.create(e, minMax(0, k, A), minMax(e.content.size, k, A)) : TextSelection.create(e, minMax(E, k, A), minMax(E, k, A));
}
function isAndroid() {
	return ["Android"].includes(navigator.platform) || /android/i.test(navigator.userAgent);
}
function isiOS() {
	return [
		"iPad Simulator",
		"iPhone Simulator",
		"iPod Simulator",
		"iPad",
		"iPhone",
		"iPod"
	].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function isSafari() {
	return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var focus = (e = null, E = {}) => ({ editor: D, view: O, tr: k, dispatch: A }) => {
	E = {
		scrollIntoView: !0,
		...E
	};
	let j = () => {
		(isiOS() || isAndroid()) && O.dom.focus(), isSafari() && !isiOS() && !isAndroid() && O.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
			D.isDestroyed || (O.focus(), E?.scrollIntoView && D.commands.scrollIntoView());
		});
	};
	try {
		if (O.hasFocus() && e === null || e === !1) return !0;
	} catch {
		return !1;
	}
	if (A && e === null && !isTextSelection(D.state.selection)) return j(), !0;
	let M = resolveFocusPosition(k.doc, e) || D.state.selection, N = D.state.selection.eq(M);
	return A && (N || k.setSelection(M), N && k.storedMarks && k.setStoredMarks(k.storedMarks), j()), !0;
}, forEach = (e, E) => (D) => e.every((e, O) => E(e, {
	...D,
	index: O
})), insertContent = (e, E) => ({ tr: D, commands: O }) => O.insertContentAt({
	from: D.selection.from,
	to: D.selection.to
}, e, E), removeWhitespaces = (e) => {
	let E = e.childNodes;
	for (let D = E.length - 1; D >= 0; --D) {
		let O = E[D];
		O.nodeType === 3 && O.nodeValue && /^(\n\s\s|\n)$/.test(O.nodeValue) ? e.removeChild(O) : O.nodeType === 1 && removeWhitespaces(O);
	}
	return e;
};
function elementFromString(e) {
	if (typeof window > "u") throw Error("[tiptap error]: there is no window object available, so this function cannot be used");
	let E = `<body>${e}</body>`, D = new window.DOMParser().parseFromString(E, "text/html").body;
	return removeWhitespaces(D);
}
function isProseMirrorContent(e) {
	return typeof e?.nodesBetween == "function";
}
function createNodeFromContent(e, E, D) {
	if (isProseMirrorContent(e)) return e;
	let O = typeof e == "object" && !!e;
	D = {
		slice: !0,
		parseOptions: {},
		...D
	};
	let k = typeof e == "string";
	if (O) try {
		if (Array.isArray(e) && e.length > 0) return Fragment.fromArray(e.map((e) => E.nodeFromJSON(e)));
		let O = E.nodeFromJSON(e);
		return D.errorOnInvalidContent && O.check(), O;
	} catch (O) {
		if (D.errorOnInvalidContent) throw Error("[tiptap error]: Invalid JSON content", { cause: O });
		return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", O), createNodeFromContent("", E, D);
	}
	if (k) {
		if (D.errorOnInvalidContent) {
			let O = !1, k = "", A = new Schema({
				topNode: E.spec.topNode,
				marks: E.spec.marks,
				nodes: E.spec.nodes.append({ __tiptap__private__unknown__catch__all__node: {
					content: "inline*",
					group: "block",
					parseDOM: [{
						tag: "*",
						getAttrs: (e) => (O = !0, k = typeof e == "string" ? e : e.outerHTML, null)
					}]
				} })
			});
			if (D.slice ? DOMParser.fromSchema(A).parseSlice(elementFromString(e), D.parseOptions) : DOMParser.fromSchema(A).parse(elementFromString(e), D.parseOptions), D.errorOnInvalidContent && O) throw Error("[tiptap error]: Invalid HTML content", { cause: /* @__PURE__ */ Error(`Invalid element found: ${k}`) });
		}
		let O = DOMParser.fromSchema(E);
		return D.slice ? O.parseSlice(elementFromString(e), D.parseOptions).content : O.parse(elementFromString(e), D.parseOptions);
	}
	return createNodeFromContent("", E, D);
}
function isFragment(e) {
	return !("type" in e);
}
function selectionToInsertionEnd(e, E, D) {
	let O = e.steps.length - 1;
	if (O < E) return;
	let k = e.steps[O];
	if (!(k instanceof ReplaceStep || k instanceof ReplaceAroundStep)) return;
	let A = e.mapping.maps[O], j = 0;
	A.forEach((e, E, D, O) => {
		j === 0 && (j = O);
	}), e.setSelection(Selection$1.near(e.doc.resolve(j), D));
}
var insertContentAt = (e, E, D) => ({ tr: O, dispatch: k, editor: A }) => {
	if (k) {
		D = {
			parseOptions: A.options.parseOptions,
			updateSelection: !0,
			applyInputRules: !1,
			applyPasteRules: !1,
			...D
		};
		let k, j = (e) => {
			A.emit("contentError", {
				editor: A,
				error: e,
				disableCollaboration: () => {
					"collaboration" in A.storage && typeof A.storage.collaboration == "object" && A.storage.collaboration && (A.storage.collaboration.isDisabled = !0);
				}
			});
		}, M = {
			preserveWhitespace: "full",
			...D.parseOptions
		};
		if (!D.errorOnInvalidContent && !A.options.enableContentCheck && A.options.emitContentError) try {
			createNodeFromContent(E, A.schema, {
				parseOptions: M,
				errorOnInvalidContent: !0
			});
		} catch (e) {
			j(e);
		}
		try {
			k = createNodeFromContent(E, A.schema, {
				parseOptions: M,
				errorOnInvalidContent: D.errorOnInvalidContent ?? A.options.enableContentCheck
			});
		} catch (e) {
			return j(e), !1;
		}
		let { from: N, to: P } = typeof e == "number" ? {
			from: e,
			to: e
		} : {
			from: e.from,
			to: e.to
		}, F = !0, I = !0, L = isFragment(k) ? k.content : [k];
		if (L.forEach((e) => {
			e.check(), F = F ? e.isText && e.marks.length === 0 : !1, I = I ? e.isBlock : !1;
		}), N === P && I) {
			let { parent: e } = O.doc.resolve(N);
			e.isTextblock && !e.type.spec.code && !e.childCount && (--N, P += 1);
		}
		let R;
		if (F) R = Array.isArray(E) ? E.map((e) => e.text || "").join("") : isProseMirrorContent(E) ? L.map((e) => e.text ?? "").join("") : typeof E == "object" && E && E.text ? E.text : E, O.insertText(R, N, P);
		else {
			R = Fragment.from(L);
			let e = O.doc.resolve(N), E = e.node(), D = e.parentOffset === 0, k = E.isText || E.isTextblock, A = E.content.size > 0;
			D && k && A && I && (N = Math.max(0, N - 1)), O.replaceWith(N, P, L);
		}
		D.updateSelection && selectionToInsertionEnd(O, O.steps.length - 1, -1), D.applyInputRules && O.setMeta("applyInputRules", {
			from: N,
			text: R
		}), D.applyPasteRules && O.setMeta("applyPasteRules", {
			from: N,
			text: R
		});
	}
	return !0;
};
function defaultBlockAt(e) {
	for (let E = 0; E < e.edgeCount; E += 1) {
		let { type: D } = e.edge(E);
		if (D.isTextblock && !D.hasRequiredAttrs()) return D;
	}
	return null;
}
var insertDefaultBlock = (e = {}) => ({ tr: E, dispatch: D, editor: O }) => {
	let { pos: k, attrs: A, content: j, updateSelection: M = !0 } = e, N;
	N = typeof k == "number" ? E.doc.resolve(k) : k || E.selection.$from;
	let P = defaultBlockAt(N.parent.contentMatchAt(N.index()));
	if (!P) return !1;
	let F = Object.keys(P.spec.attrs || {}), I = A ? Object.fromEntries(Object.entries(A).filter(([e]) => F.includes(e))) : {}, L;
	if (j) {
		let e = createNodeFromContent(j, O.schema);
		L = P.createAndFill(I, e);
	} else L = P.createAndFill(I);
	return L ? (D && (E.insert(N.pos, L), M && selectionToInsertionEnd(E, E.steps.length - 1, -1)), !0) : !1;
}, joinUp$1 = () => ({ state: e, dispatch: E }) => joinUp(e, E), joinDown$1 = () => ({ state: e, dispatch: E }) => joinDown(e, E), joinBackward$1 = () => ({ state: e, dispatch: E }) => joinBackward(e, E), joinForward$1 = () => ({ state: e, dispatch: E }) => joinForward(e, E), joinItemBackward = () => ({ state: e, dispatch: E, tr: D }) => {
	try {
		let O = joinPoint(e.doc, e.selection.$from.pos, -1);
		return O == null ? !1 : (D.join(O, 2), E && E(D), !0);
	} catch {
		return !1;
	}
}, joinItemForward = () => ({ state: e, dispatch: E, tr: D }) => {
	try {
		let O = joinPoint(e.doc, e.selection.$from.pos, 1);
		return O == null ? !1 : (D.join(O, 2), E && E(D), !0);
	} catch {
		return !1;
	}
}, joinTextblockBackward$1 = () => ({ state: e, dispatch: E }) => joinTextblockBackward(e, E), joinTextblockForward$1 = () => ({ state: e, dispatch: E }) => joinTextblockForward(e, E);
function isMacOS() {
	return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function normalizeKeyName(e) {
	let E = e.split(/-(?!$)/), D = E[E.length - 1];
	D === "Space" && (D = " ");
	let O, k, A, j;
	for (let e = 0; e < E.length - 1; e += 1) {
		let D = E[e];
		if (/^(cmd|meta|m)$/i.test(D)) j = !0;
		else if (/^a(lt)?$/i.test(D)) O = !0;
		else if (/^(c|ctrl|control)$/i.test(D)) k = !0;
		else if (/^s(hift)?$/i.test(D)) A = !0;
		else if (/^mod$/i.test(D)) isiOS() || isMacOS() ? j = !0 : k = !0;
		else throw Error(`Unrecognized modifier name: ${D}`);
	}
	return O && (D = `Alt-${D}`), k && (D = `Ctrl-${D}`), j && (D = `Meta-${D}`), A && (D = `Shift-${D}`), D;
}
var keyboardShortcut = (e) => ({ editor: E, view: D, tr: O, dispatch: k }) => {
	let A = normalizeKeyName(e).split(/-(?!$)/), j = A.find((e) => ![
		"Alt",
		"Ctrl",
		"Meta",
		"Shift"
	].includes(e)), M = new KeyboardEvent("keydown", {
		key: j === "Space" ? " " : j,
		altKey: A.includes("Alt"),
		ctrlKey: A.includes("Ctrl"),
		metaKey: A.includes("Meta"),
		shiftKey: A.includes("Shift"),
		bubbles: !0,
		cancelable: !0
	});
	return E.captureTransaction(() => {
		D.someProp("handleKeyDown", (e) => e(D, M));
	})?.steps.forEach((e) => {
		let E = e.map(O.mapping);
		E && k && O.maybeStep(E);
	}), !0;
};
function isNodeActive(e, E, D = {}) {
	let { from: O, to: k, empty: A } = e.selection, j = E ? getNodeType(E, e.schema) : null, M = [];
	e.doc.nodesBetween(O, k, (e, E) => {
		if (e.isText) return;
		let D = Math.max(O, E), A = Math.min(k, E + e.nodeSize);
		M.push({
			node: e,
			from: D,
			to: A
		});
	});
	let N = k - O, P = M.filter((e) => j ? j.name === e.node.type.name : !0).filter((e) => objectIncludes(e.node.attrs, D, { strict: !1 }));
	return A ? !!P.length : P.reduce((e, E) => e + E.to - E.from, 0) >= N;
}
var lift$1 = (e, E = {}) => ({ state: D, dispatch: O }) => isNodeActive(D, getNodeType(e, D.schema), E) ? lift(D, O) : !1, liftEmptyBlock$1 = () => ({ state: e, dispatch: E }) => liftEmptyBlock(e, E), liftListItem$1 = (e) => ({ state: E, dispatch: D }) => liftListItem(getNodeType(e, E.schema))(E, D), newlineInCode$1 = () => ({ state: e, dispatch: E }) => newlineInCode(e, E);
function getSchemaTypeNameByName(e, E) {
	return E.nodes[e] ? "node" : E.marks[e] ? "mark" : null;
}
function deleteProps(e, E) {
	let D = typeof E == "string" ? [E] : E;
	return Object.keys(e).reduce((E, O) => (D.includes(O) || (E[O] = e[O]), E), {});
}
var resetAttributes = (e, E) => ({ tr: D, state: O, dispatch: k }) => {
	let A = null, j = null, M = getSchemaTypeNameByName(typeof e == "string" ? e : e.name, O.schema);
	if (!M) return !1;
	M === "node" && (A = getNodeType(e, O.schema)), M === "mark" && (j = getMarkType(e, O.schema));
	let N = !1;
	return D.selection.ranges.forEach((e) => {
		O.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, O) => {
			A && A === e.type && (N = !0, k && D.setNodeMarkup(O, void 0, deleteProps(e.attrs, E))), j && e.marks.length && e.marks.forEach((A) => {
				j === A.type && (N = !0, k && D.addMark(O, O + e.nodeSize, j.create(deleteProps(A.attrs, E))));
			});
		});
	}), N;
}, scrollIntoView = () => ({ tr: e, dispatch: E }) => (E && e.scrollIntoView(), !0), selectAll = () => ({ tr: e, dispatch: E }) => {
	if (E) {
		let E = new AllSelection(e.doc);
		e.setSelection(E);
	}
	return !0;
}, selectNodeBackward$1 = () => ({ state: e, dispatch: E }) => selectNodeBackward(e, E), selectNodeForward$1 = () => ({ state: e, dispatch: E }) => selectNodeForward(e, E), selectParentNode$1 = () => ({ state: e, dispatch: E }) => selectParentNode(e, E), selectTextblockEnd$1 = () => ({ state: e, dispatch: E }) => selectTextblockEnd(e, E), selectTextblockStart$1 = () => ({ state: e, dispatch: E }) => selectTextblockStart(e, E);
function createDocument(e, E, D = {}, O = {}) {
	return createNodeFromContent(e, E, {
		slice: !1,
		parseOptions: D,
		errorOnInvalidContent: O.errorOnInvalidContent
	});
}
var setContent = (e, { errorOnInvalidContent: E, emitUpdate: D = !0, parseOptions: O = {} } = {}) => ({ editor: k, tr: A, dispatch: j, commands: M }) => {
	let { doc: N } = A;
	if (O.preserveWhitespace !== "full") {
		let M = createDocument(e, k.schema, O, { errorOnInvalidContent: E ?? k.options.enableContentCheck });
		if (j) {
			let e = isFragment(M) ? M.content : [M];
			A.replaceWith(0, N.content.size, e).setMeta("preventUpdate", !D);
		}
		return !0;
	}
	return j && A.setMeta("preventUpdate", !D), M.insertContentAt({
		from: 0,
		to: N.content.size
	}, e, {
		parseOptions: O,
		errorOnInvalidContent: E ?? k.options.enableContentCheck
	});
};
function getMarkAttributes(e, E) {
	let D = getMarkType(E, e.schema), { from: O, to: k, empty: A } = e.selection, j = [];
	A ? (e.storedMarks && j.push(...e.storedMarks), j.push(...e.selection.$head.marks())) : e.doc.nodesBetween(O, k, (e) => {
		j.push(...e.marks);
	});
	let M = j.find((e) => e.type.name === D.name);
	return M ? { ...M.attrs } : {};
}
function combineTransactionSteps(e, E) {
	let D = new Transform(e);
	return E.forEach((e) => {
		e.steps.forEach((e) => {
			D.step(e);
		});
	}), D;
}
function findChildren(e, E) {
	let D = [];
	return e.descendants((e, O) => {
		E(e) && D.push({
			node: e,
			pos: O
		});
	}), D;
}
function findChildrenInRange(e, E, D) {
	let O = [];
	return e.nodesBetween(E.from, E.to, (e, E) => {
		D(e) && O.push({
			node: e,
			pos: E
		});
	}), O;
}
function findParentNodeClosestToPos(e, E) {
	for (let D = e.depth; D > 0; --D) {
		let O = e.node(D);
		if (E(O)) return {
			pos: D > 0 ? e.before(D) : 0,
			start: e.start(D),
			depth: D,
			node: O
		};
	}
}
function findParentNode(e) {
	return (E) => findParentNodeClosestToPos(E.$from, e);
}
function getExtensionField(e, E, D) {
	return e.config[E] === void 0 && e.parent ? getExtensionField(e.parent, E, D) : typeof e.config[E] == "function" ? e.config[E].bind({
		...D,
		parent: e.parent ? getExtensionField(e.parent, E, D) : null
	}) : e.config[E];
}
function flattenExtensions(e) {
	return e.map((e) => {
		let E = getExtensionField(e, "addExtensions", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		return E ? [e, ...flattenExtensions(E())] : e;
	}).flat(10);
}
function getHTMLFromFragment(e, E) {
	let D = DOMSerializer.fromSchema(E).serializeFragment(e), O = document.implementation.createHTMLDocument().createElement("div");
	return O.appendChild(D), O.innerHTML;
}
function isFunction(e) {
	return typeof e == "function";
}
function callOrReturn(e, E = void 0, ...D) {
	return isFunction(e) ? E ? e.bind(E)(...D) : e(...D) : e;
}
function isEmptyObject(e = {}) {
	return Object.keys(e).length === 0 && e.constructor === Object;
}
function splitExtensions(e) {
	return {
		baseExtensions: e.filter((e) => e.type === "extension"),
		nodeExtensions: e.filter((e) => e.type === "node"),
		markExtensions: e.filter((e) => e.type === "mark")
	};
}
function getAttributesFromExtensions(e) {
	let E = [], { nodeExtensions: D, markExtensions: O } = splitExtensions(e), k = [...D, ...O], A = {
		default: null,
		validate: void 0,
		rendered: !0,
		renderHTML: null,
		parseHTML: null,
		keepOnSplit: !0,
		isRequired: !1
	}, j = D.filter((e) => e.name !== "text").map((e) => e.name), M = O.map((e) => e.name), N = [...j, ...M];
	return e.forEach((e) => {
		let D = getExtensionField(e, "addGlobalAttributes", {
			name: e.name,
			options: e.options,
			storage: e.storage,
			extensions: k
		});
		D && D().forEach((e) => {
			let D;
			D = Array.isArray(e.types) ? e.types : e.types === "*" ? N : e.types === "nodes" ? j : e.types === "marks" ? M : [], D.forEach((D) => {
				Object.entries(e.attributes).forEach(([e, O]) => {
					E.push({
						type: D,
						name: e,
						attribute: {
							...A,
							...O
						}
					});
				});
			});
		});
	}), k.forEach((e) => {
		let D = getExtensionField(e, "addAttributes", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		if (!D) return;
		let O = D();
		Object.entries(O).forEach(([D, O]) => {
			let k = {
				...A,
				...O
			};
			typeof k?.default == "function" && (k.default = k.default()), k?.isRequired && k?.default === void 0 && delete k.default, E.push({
				type: e.name,
				name: D,
				attribute: k
			});
		});
	}), E;
}
function splitStyleDeclarations(e) {
	let E = [], D = "", O = !1, k = !1, A = 0, j = e.length;
	for (let M = 0; M < j; M += 1) {
		let j = e[M];
		if (j === "'" && !k) {
			O = !O, D += j;
			continue;
		}
		if (j === "\"" && !O) {
			k = !k, D += j;
			continue;
		}
		if (!O && !k) {
			if (j === "(") {
				A += 1, D += j;
				continue;
			}
			if (j === ")" && A > 0) {
				--A, D += j;
				continue;
			}
			if (j === ";" && A === 0) {
				E.push(D), D = "";
				continue;
			}
		}
		D += j;
	}
	return D && E.push(D), E;
}
function parseStyleEntries(e) {
	let E = [], D = splitStyleDeclarations(e || ""), O = D.length;
	for (let e = 0; e < O; e += 1) {
		let O = D[e], k = O.indexOf(":");
		if (k === -1) continue;
		let A = O.slice(0, k).trim(), j = O.slice(k + 1).trim();
		A && j && E.push([A, j]);
	}
	return E;
}
function mergeAttributes(...e) {
	return e.filter((e) => !!e).reduce((e, E) => {
		let D = { ...e };
		return Object.entries(E).forEach(([e, E]) => {
			if (e === "__proto__") {
				Object.defineProperty(D, e, {
					configurable: !0,
					enumerable: !0,
					value: E,
					writable: !0
				});
				return;
			}
			if (!D[e]) {
				D[e] = E;
				return;
			}
			if (e === "class") {
				let O = E ? String(E).split(" ") : [], k = D[e] ? D[e].split(" ") : [], A = O.filter((e) => !k.includes(e));
				D[e] = [...k, ...A].join(" ");
			} else if (e === "style") {
				let O = new Map([...parseStyleEntries(D[e]), ...parseStyleEntries(E)]);
				D[e] = Array.from(O.entries()).map(([e, E]) => `${e}: ${E}`).join("; ");
			} else D[e] = E;
		}), D;
	}, {});
}
function getRenderedAttributes(e, E) {
	return E.filter((E) => E.type === e.type.name).filter((e) => e.attribute.rendered).map((E) => E.attribute.renderHTML ? E.attribute.renderHTML(e.attrs) || {} : { [E.name]: e.attrs[E.name] }).reduce((e, E) => mergeAttributes(e, E), {});
}
function fromString(e) {
	return typeof e == "string" ? e.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(e) : e === "true" ? !0 : e === "false" ? !1 : e : e;
}
function injectExtensionAttributesToParseRule(e, E) {
	return "style" in e ? e : {
		...e,
		getAttrs: (D) => {
			let O = e.getAttrs ? e.getAttrs(D) : e.attrs;
			if (O === !1) return !1;
			let k = E.reduce((e, E) => {
				let O = E.attribute.parseHTML ? E.attribute.parseHTML(D) : fromString(D.getAttribute(E.name));
				return O == null ? e : {
					...e,
					[E.name]: O
				};
			}, {});
			return {
				...O,
				...k
			};
		}
	};
}
function cleanUpSchemaItem(e) {
	return Object.fromEntries(Object.entries(e).filter(([e, E]) => e === "attrs" && isEmptyObject(E) ? !1 : E != null));
}
function buildAttributeSpec(e) {
	var E, D;
	let O = {};
	return !(!(e == null || (E = e.attribute) == null) && E.isRequired) && "default" in (e?.attribute || {}) && (O.default = e.attribute.default), (e == null || (D = e.attribute) == null ? void 0 : D.validate) !== void 0 && (O.validate = e.attribute.validate), [e.name, O];
}
function getSchemaByResolvedExtensions(e, E) {
	let D = getAttributesFromExtensions(e), { nodeExtensions: O, markExtensions: k } = splitExtensions(e);
	return new Schema({
		topNode: O.find((e) => getExtensionField(e, "topNode"))?.name,
		nodes: Object.fromEntries(O.map((O) => {
			let k = D.filter((e) => e.type === O.name), A = {
				name: O.name,
				options: O.options,
				storage: O.storage,
				editor: E
			}, j = cleanUpSchemaItem({
				...e.reduce((e, E) => {
					let D = getExtensionField(E, "extendNodeSchema", A);
					return {
						...e,
						...D ? D(O) : {}
					};
				}, {}),
				content: callOrReturn(getExtensionField(O, "content", A)),
				marks: callOrReturn(getExtensionField(O, "marks", A)),
				group: callOrReturn(getExtensionField(O, "group", A)),
				inline: callOrReturn(getExtensionField(O, "inline", A)),
				atom: callOrReturn(getExtensionField(O, "atom", A)),
				selectable: callOrReturn(getExtensionField(O, "selectable", A)),
				draggable: callOrReturn(getExtensionField(O, "draggable", A)),
				code: callOrReturn(getExtensionField(O, "code", A)),
				whitespace: callOrReturn(getExtensionField(O, "whitespace", A)),
				linebreakReplacement: callOrReturn(getExtensionField(O, "linebreakReplacement", A)),
				defining: callOrReturn(getExtensionField(O, "defining", A)),
				isolating: callOrReturn(getExtensionField(O, "isolating", A)),
				attrs: Object.fromEntries(k.map(buildAttributeSpec))
			}), M = callOrReturn(getExtensionField(O, "parseHTML", A));
			M && (j.parseDOM = M.map((e) => injectExtensionAttributesToParseRule(e, k)));
			let N = getExtensionField(O, "renderHTML", A);
			N && (j.toDOM = (e) => N({
				node: e,
				HTMLAttributes: getRenderedAttributes(e, k)
			}));
			let P = getExtensionField(O, "renderText", A);
			return P && (j.toText = P), [O.name, j];
		})),
		marks: Object.fromEntries(k.map((O) => {
			let k = D.filter((e) => e.type === O.name), A = {
				name: O.name,
				options: O.options,
				storage: O.storage,
				editor: E
			}, j = cleanUpSchemaItem({
				...e.reduce((e, E) => {
					let D = getExtensionField(E, "extendMarkSchema", A);
					return {
						...e,
						...D ? D(O) : {}
					};
				}, {}),
				inclusive: callOrReturn(getExtensionField(O, "inclusive", A)),
				excludes: callOrReturn(getExtensionField(O, "excludes", A)),
				group: callOrReturn(getExtensionField(O, "group", A)),
				spanning: callOrReturn(getExtensionField(O, "spanning", A)),
				code: callOrReturn(getExtensionField(O, "code", A)),
				attrs: Object.fromEntries(k.map(buildAttributeSpec))
			}), M = callOrReturn(getExtensionField(O, "parseHTML", A));
			M && (j.parseDOM = M.map((e) => injectExtensionAttributesToParseRule(e, k)));
			let N = getExtensionField(O, "renderHTML", A);
			return N && (j.toDOM = (e) => N({
				mark: e,
				HTMLAttributes: getRenderedAttributes(e, k)
			})), [O.name, j];
		}))
	});
}
function findDuplicates(e) {
	let E = e.filter((E, D) => e.indexOf(E) !== D);
	return Array.from(new Set(E));
}
function sortExtensions(e) {
	return e.sort((e, E) => {
		let D = getExtensionField(e, "priority") || 100, O = getExtensionField(E, "priority") || 100;
		return D > O ? -1 : D < O ? 1 : 0;
	});
}
function resolveExtensions(e) {
	let E = sortExtensions(flattenExtensions(e)), D = findDuplicates(E.map((e) => e.name));
	return D.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${D.map((e) => `'${e}'`).join(", ")}]. This can lead to issues.`), E;
}
function getSchema(e, E) {
	return getSchemaByResolvedExtensions(resolveExtensions(e), E);
}
function generateJSON(e, E) {
	let D = getSchema(E), O = elementFromString(e);
	return DOMParser.fromSchema(D).parse(O).toJSON();
}
function getTextBetween(e, E, D) {
	let { from: O, to: k } = E, { blockSeparator: A = "\n\n", textSerializers: j = {} } = D || {}, M = "";
	return e.nodesBetween(O, k, (e, D, N, P) => {
		e.isBlock && D > O && (M += A);
		let F = j?.[e.type.name];
		if (F) return N && (M += F({
			node: e,
			pos: D,
			parent: N,
			index: P,
			range: E
		})), !1;
		if (e.isText) {
			var I;
			M += e == null || (I = e.text) == null ? void 0 : I.slice(Math.max(O, D) - D, k - D);
		}
	}), M;
}
function getText(e, E) {
	return getTextBetween(e, {
		from: 0,
		to: e.content.size
	}, E);
}
function getTextSerializersFromSchema(e) {
	return Object.fromEntries(Object.entries(e.nodes).filter(([, e]) => e.spec.toText).map(([e, E]) => [e, E.spec.toText]));
}
function getNodeAttributes(e, E) {
	let D = getNodeType(E, e.schema), { from: O, to: k } = e.selection, A = [];
	e.doc.nodesBetween(O, k, (e) => {
		A.push(e);
	});
	let j = A.reverse().find((e) => e.type.name === D.name);
	return j ? { ...j.attrs } : {};
}
function getAttributes(e, E) {
	let D = getSchemaTypeNameByName(typeof E == "string" ? E : E.name, e.schema);
	return D === "node" ? getNodeAttributes(e, E) : D === "mark" ? getMarkAttributes(e, E) : {};
}
function removeDuplicates(e, E = JSON.stringify) {
	let D = {};
	return e.filter((e) => {
		let O = E(e);
		return Object.prototype.hasOwnProperty.call(D, O) ? !1 : D[O] = !0;
	});
}
function simplifyChangedRanges(e) {
	let E = removeDuplicates(e);
	return E.length === 1 ? E : E.filter((e, D) => !E.filter((e, E) => E !== D).some((E) => e.oldRange.from >= E.oldRange.from && e.oldRange.to <= E.oldRange.to && e.newRange.from >= E.newRange.from && e.newRange.to <= E.newRange.to));
}
function getChangedRanges(e) {
	let { mapping: E, steps: D } = e, O = [];
	return E.maps.forEach((e, k) => {
		let A = [];
		if (e.ranges.length) e.forEach((e, E) => {
			A.push({
				from: e,
				to: E
			});
		});
		else {
			let { from: e, to: E } = D[k];
			if (e === void 0 || E === void 0) return;
			A.push({
				from: e,
				to: E
			});
		}
		A.forEach(({ from: e, to: D }) => {
			let A = E.slice(k).map(e, -1), j = E.slice(k).map(D), M = E.invert().map(A, -1), N = E.invert().map(j);
			O.push({
				oldRange: {
					from: M,
					to: N
				},
				newRange: {
					from: A,
					to: j
				}
			});
		});
	}), simplifyChangedRanges(O);
}
function getMarksBetween(e, E, D) {
	let O = [];
	return e === E ? D.resolve(e).marks().forEach((E) => {
		let k = getMarkRange(D.resolve(e), E.type);
		k && O.push({
			mark: E,
			...k
		});
	}) : D.nodesBetween(e, E, (e, E) => {
		!e || e?.nodeSize === void 0 || O.push(...e.marks.map((D) => ({
			from: E,
			to: E + e.nodeSize,
			mark: D
		})));
	}), O;
}
var getNodeAtPosition = (e, E, D, O = 20) => {
	let k = e.doc.resolve(D), A = O, j = null;
	for (; A > 0 && j === null;) {
		let e = k.node(A);
		e?.type.name === E ? j = e : --A;
	}
	return [j, A];
}, getPreviousBlockSibling = (e) => {
	let E = e.depth - 1;
	if (E < 0) return null;
	let D = e.index(E);
	return D === 0 ? null : e.node(E).child(D - 1);
};
function getSchemaTypeByName(e, E) {
	return E.nodes[e] || E.marks[e] || null;
}
function getSplittedAttributes(e, E, D) {
	return Object.fromEntries(Object.entries(D).filter(([D]) => {
		let O = e.find((e) => e.type === E && e.name === D);
		return O ? O.attribute.keepOnSplit : !1;
	}));
}
var getTextContentFromNodes = (e, E = 500) => {
	let D = "", O = e.parentOffset;
	return e.parent.nodesBetween(Math.max(0, O - E), O, (e, E, k, A) => {
		var j;
		let M = (j = e.type.spec).toText?.call(j, {
			node: e,
			pos: E,
			parent: k,
			index: A
		}) || e.textContent || "%leaf%";
		D += e.isAtom && !e.isText ? M : M.slice(0, Math.max(0, O - E));
	}), D;
};
function isMarkActive(e, E, D = {}) {
	let { empty: O, ranges: k } = e.selection, A = E ? getMarkType(E, e.schema) : null;
	if (O) return !!(e.storedMarks || e.selection.$from.marks()).filter((e) => A ? A.name === e.type.name : !0).find((e) => objectIncludes(e.attrs, D, { strict: !1 }));
	let j = 0, M = [];
	if (k.forEach(({ $from: E, $to: D }) => {
		let O = E.pos, k = D.pos;
		e.doc.nodesBetween(O, k, (e, E) => {
			if (A && e.inlineContent && !e.type.allowsMarkType(A)) return !1;
			if (!e.isText && !e.marks.length) return;
			let D = Math.max(O, E), N = Math.min(k, E + e.nodeSize), P = N - D;
			j += P, M.push(...e.marks.map((e) => ({
				mark: e,
				from: D,
				to: N
			})));
		});
	}), j === 0) return !1;
	let N = M.filter((e) => A ? A.name === e.mark.type.name : !0).filter((e) => objectIncludes(e.mark.attrs, D, { strict: !1 })).reduce((e, E) => e + E.to - E.from, 0), P = M.filter((e) => A ? e.mark.type !== A && e.mark.type.excludes(A) : !0).reduce((e, E) => e + E.to - E.from, 0);
	return (N > 0 ? N + P : N) >= j;
}
function isActive(e, E, D = {}) {
	if (!E) return isNodeActive(e, null, D) || isMarkActive(e, null, D);
	let O = getSchemaTypeNameByName(E, e.schema);
	return O === "node" ? isNodeActive(e, E, D) : O === "mark" ? isMarkActive(e, E, D) : !1;
}
var isAtEndOfNode = (e, E) => {
	let { $from: D, $to: O, $anchor: k } = e.selection;
	if (E) {
		let D = findParentNode((e) => e.type.name === E)(e.selection);
		if (!D) return !1;
		let O = e.doc.resolve(D.pos + 1);
		return k.pos + 1 === O.end();
	}
	return !(O.parentOffset < O.parent.nodeSize - 2 || D.pos !== O.pos);
}, isAtStartOfNode = (e) => {
	let { $from: E, $to: D } = e.selection;
	return !(E.parentOffset > 0 || E.pos !== D.pos);
};
function isExtensionRulesEnabled(e, E) {
	return Array.isArray(E) ? E.some((E) => (typeof E == "string" ? E : E.name) === e.name) : E;
}
function isList(e, E) {
	let { nodeExtensions: D } = splitExtensions(E), O = D.find((E) => E.name === e);
	if (!O) return !1;
	let k = callOrReturn(getExtensionField(O, "group", {
		name: O.name,
		options: O.options,
		storage: O.storage
	}));
	return typeof k == "string" ? k.split(" ").includes("list") : !1;
}
function isNodeEmpty(e, { checkChildren: E = !0, ignoreWhitespace: D = !1 } = {}) {
	if (D) {
		if (e.type.name === "hardBreak") return !0;
		if (e.isText) return !/\S/.test(e.text ?? "");
	}
	if (e.isText) return !e.text;
	if (e.isAtom || e.isLeaf) return !1;
	if (e.content.childCount === 0) return !0;
	if (E) {
		let O = !0;
		return e.content.forEach((e) => {
			O !== !1 && (isNodeEmpty(e, {
				ignoreWhitespace: D,
				checkChildren: E
			}) || (O = !1));
		}), O;
	}
	return !1;
}
function isNodeSelection(e) {
	return e instanceof NodeSelection;
}
var MappablePosition = class e {
	constructor(e) {
		this.position = e;
	}
	static fromJSON(E) {
		return new e(E.position);
	}
	toJSON() {
		return { position: this.position };
	}
};
function getUpdatedPosition(e, E) {
	let D = E.mapping.mapResult(e.position);
	return {
		position: new MappablePosition(D.pos),
		mapResult: D
	};
}
function createMappablePosition(e) {
	return new MappablePosition(e);
}
function canSetMark(e, E, D) {
	let { selection: O } = E, k = null;
	if (isTextSelection(O) && (k = O.$cursor), k) {
		let E = e.storedMarks ?? k.marks();
		return k.parent.type.allowsMarkType(D) && (!!D.isInSet(E) || !E.some((e) => e.type.excludes(D)));
	}
	let { ranges: A } = O;
	return A.some(({ $from: E, $to: O }) => {
		let k = E.depth === 0 ? e.doc.inlineContent && e.doc.type.allowsMarkType(D) : !1;
		return e.doc.nodesBetween(E.pos, O.pos, (e, E, O) => {
			if (k) return !1;
			if (e.isInline) {
				let E = !O || O.type.allowsMarkType(D), A = !!D.isInSet(e.marks) || !e.marks.some((e) => e.type.excludes(D));
				k = E && A;
			}
			return !k;
		}), k;
	});
}
var setMark = (e, E = {}) => ({ tr: D, state: O, dispatch: k }) => {
	let { selection: A } = D, { empty: j, ranges: M } = A, N = getMarkType(e, O.schema);
	if (k) if (j) {
		let e = getMarkAttributes(O, N);
		D.addStoredMark(N.create({
			...e,
			...E
		}));
	} else M.forEach((e) => {
		let k = e.$from.pos, A = e.$to.pos;
		O.doc.nodesBetween(k, A, (e, O) => {
			let j = Math.max(O, k), M = Math.min(O + e.nodeSize, A);
			e.marks.find((e) => e.type === N) ? e.marks.forEach((e) => {
				N === e.type && D.addMark(j, M, N.create({
					...e.attrs,
					...E
				}));
			}) : D.addMark(j, M, N.create(E));
		});
	});
	return canSetMark(O, D, N);
}, setMeta = (e, E) => ({ tr: D }) => (D.setMeta(e, E), !0), setNode = (e, E = {}) => ({ state: D, dispatch: O, chain: k }) => {
	let A = getNodeType(e, D.schema), j;
	return D.selection.$anchor.sameParent(D.selection.$head) && (j = D.selection.$anchor.parent.attrs), A.isTextblock ? k().command(({ commands: e }) => setBlockType(A, {
		...j,
		...E
	})(D) ? !0 : e.clearNodes()).command(({ state: e }) => setBlockType(A, {
		...j,
		...E
	})(e, O)).run() : (console.warn("[tiptap warn]: Currently \"setNode()\" only supports text block nodes."), !1);
}, setNodeSelection = (e) => ({ tr: E, dispatch: D }) => {
	if (D) {
		let { doc: D } = E, O = minMax(e, 0, D.content.size), k = NodeSelection.create(D, O);
		E.setSelection(k);
	}
	return !0;
}, setTextDirection = (e, E) => ({ tr: D, state: O, dispatch: k }) => {
	let { selection: A } = O, j, M;
	return typeof E == "number" ? (j = E, M = E) : E && "from" in E && "to" in E ? (j = E.from, M = E.to) : (j = A.from, M = A.to), k && D.doc.nodesBetween(j, M, (E, O) => {
		E.isText || D.setNodeMarkup(O, void 0, {
			...E.attrs,
			dir: e
		});
	}), !0;
}, setTextSelection = (e) => ({ tr: E, dispatch: D }) => {
	if (D) {
		let { doc: D } = E, { from: O, to: k } = typeof e == "number" ? {
			from: e,
			to: e
		} : e, A = TextSelection.atStart(D).from, j = TextSelection.atEnd(D).to, M = minMax(O, A, j), N = minMax(k, A, j), P = TextSelection.create(D, M, N);
		E.setSelection(P);
	}
	return !0;
}, sinkListItem$1 = (e) => ({ state: E, dispatch: D }) => sinkListItem(getNodeType(e, E.schema))(E, D);
function ensureMarks(e, E) {
	let D = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
	if (D) {
		let O = D.filter((e) => E?.includes(e.type.name));
		e.tr.ensureMarks(O);
	}
}
var splitBlock = ({ keepMarks: e = !0 } = {}) => ({ tr: E, state: D, dispatch: O, editor: k }) => {
	let { selection: A, doc: j } = E, { $from: M, $to: N } = A, P = k.extensionManager.attributes, F = getSplittedAttributes(P, M.node().type.name, M.node().attrs);
	if (A instanceof NodeSelection && A.node.isBlock) return !M.parentOffset || !canSplit(j, M.pos) ? !1 : (O && (e && ensureMarks(D, k.extensionManager.splittableMarks), E.split(M.pos).scrollIntoView()), !0);
	if (!M.parent.isBlock) return !1;
	let I = N.parentOffset === N.parent.content.size, L = M.depth === 0 ? void 0 : defaultBlockAt(M.node(-1).contentMatchAt(M.indexAfter(-1))), R = I && L ? [{
		type: L,
		attrs: F
	}] : void 0, z = canSplit(E.doc, E.mapping.map(M.pos), 1, R);
	if (!R && !z && canSplit(E.doc, E.mapping.map(M.pos), 1, L ? [{ type: L }] : void 0) && (z = !0, R = L ? [{
		type: L,
		attrs: F
	}] : void 0), O) {
		if (z && (A instanceof TextSelection && E.deleteSelection(), E.split(E.mapping.map(M.pos), 1, R), L && !I && !M.parentOffset && M.parent.type !== L)) {
			let e = E.mapping.map(M.before()), D = E.doc.resolve(e);
			M.node(-1).canReplaceWith(D.index(), D.index() + 1, L) && E.setNodeMarkup(E.mapping.map(M.before()), L);
		}
		e && ensureMarks(D, k.extensionManager.splittableMarks), E.scrollIntoView();
	}
	return z;
}, splitListItem = (e, E = {}) => ({ tr: D, state: O, dispatch: k, editor: A }) => {
	let j = getNodeType(e, O.schema), { $from: M, $to: N } = O.selection, P = O.selection.node;
	if (P && P.isBlock || M.depth < 2 || !M.sameParent(N)) return !1;
	let F = M.node(-1);
	if (F.type !== j) return !1;
	let I = A.extensionManager.attributes;
	if (M.parent.content.size === 0 && M.node(-1).childCount === M.indexAfter(-1)) {
		if (M.depth === 2 || M.node(-3).type !== j || M.index(-2) !== M.node(-2).childCount - 1) return !1;
		if (k) {
			let e = Fragment.empty, O = M.index(-1) ? 1 : M.index(-2) ? 2 : 3;
			for (let E = M.depth - O; E >= M.depth - 3; --E) e = Fragment.from(M.node(E).copy(e));
			let k = M.indexAfter(-1) < M.node(-2).childCount ? 1 : M.indexAfter(-2) < M.node(-3).childCount ? 2 : 3, A = {
				...getSplittedAttributes(I, M.node().type.name, M.node().attrs),
				...E
			}, N = j.contentMatch.defaultType?.createAndFill(A) || void 0;
			e = e.append(Fragment.from(j.createAndFill(null, N) || void 0));
			let P = M.before(M.depth - (O - 1));
			D.replace(P, M.after(-k), new Slice(e, 4 - O, 0));
			let F = -1;
			D.doc.nodesBetween(P, D.doc.content.size, (e, E) => {
				if (F > -1) return !1;
				e.isTextblock && e.content.size === 0 && (F = E + 1);
			}), F > -1 && D.setSelection(TextSelection.near(D.doc.resolve(F))), D.scrollIntoView();
		}
		return !0;
	}
	let L = N.pos === M.end() ? F.contentMatchAt(0).defaultType : null, R = {
		...getSplittedAttributes(I, F.type.name, F.attrs),
		...E
	}, z = {
		...getSplittedAttributes(I, M.node().type.name, M.node().attrs),
		...E
	};
	D.delete(M.pos, N.pos);
	let B = L ? [{
		type: j,
		attrs: R
	}, {
		type: L,
		attrs: z
	}] : [{
		type: j,
		attrs: R
	}];
	if (!canSplit(D.doc, M.pos, 2)) return !1;
	if (k) {
		let { selection: e, storedMarks: E } = O, { splittableMarks: j } = A.extensionManager, N = E || e.$to.parentOffset && e.$from.marks();
		if (D.split(M.pos, 2, B).scrollIntoView(), !N || !k) return !0;
		let P = N.filter((e) => j.includes(e.type.name));
		D.ensureMarks(P);
	}
	return !0;
};
function normalizeListType(e) {
	return !e || e === "1" ? null : e;
}
function areListTypesCompatible(e, E) {
	return normalizeListType(e) === normalizeListType(E);
}
var joinListBackwards = (e, E) => {
	let D = findParentNode((e) => e.type === E)(e.selection);
	if (!D) return !0;
	let O = e.doc.resolve(Math.max(0, D.pos - 1)).before(D.depth);
	if (O === void 0) return !0;
	let k = e.doc.nodeAt(O);
	return !(D.node.type === k?.type && canJoin(e.doc, D.pos)) || !areListTypesCompatible(D.node.attrs.type, k?.attrs.type) || e.join(D.pos), !0;
}, joinListForwards = (e, E) => {
	let D = findParentNode((e) => e.type === E)(e.selection);
	if (!D) return !0;
	let O = e.doc.resolve(D.start).after(D.depth);
	if (O === void 0) return !0;
	let k = e.doc.nodeAt(O);
	return !(D.node.type === k?.type && canJoin(e.doc, O)) || !areListTypesCompatible(D.node.attrs.type, k?.attrs.type) || e.join(O), !0;
};
function createInnerSelectionForWholeDocList(e) {
	let E = e.doc, D = E.firstChild;
	if (!D) return null;
	let O = E.resolve(1), k = E.resolve(D.nodeSize - 1);
	return TextSelection.between(O, k);
}
var toggleList = (e, E, D, O = {}) => ({ editor: k, tr: A, state: j, dispatch: M, chain: N, commands: P, can: F }) => {
	let { extensions: I, splittableMarks: L } = k.extensionManager, R = getNodeType(e, j.schema), z = getNodeType(E, j.schema), { selection: B, storedMarks: V } = j, { $from: H, $to: U } = B, W = H.blockRange(U), G = V || B.$to.parentOffset && B.$from.marks();
	if (!W) return !1;
	let K = findParentNode((e) => isList(e.type.name, I))(B), q = B.from === 0 && B.to === j.doc.content.size, J = j.doc.content.content, Y = J.length === 1 ? J[0] : null, X = q && Y && isList(Y.type.name, I) ? {
		node: Y,
		pos: 0,
		depth: 0
	} : null, Z = K ?? X, Q = !!K && W.depth >= 1 && W.depth - K.depth <= 1, $ = !!X;
	if ((Q || $) && Z) {
		if (Z.node.type === R) return q && $ ? N().command(({ tr: e, dispatch: E }) => {
			let D = createInnerSelectionForWholeDocList(e);
			return D ? (e.setSelection(D), E && E(e), !0) : !1;
		}).liftListItem(z).run() : P.liftListItem(z);
		if (isList(Z.node.type.name, I) && R.validContent(Z.node.content)) return N().command(() => (A.setNodeMarkup(Z.pos, R), !0)).command(() => joinListBackwards(A, R)).command(() => joinListForwards(A, R)).run();
	}
	return !D || !G || !M ? N().command(() => F().wrapInList(R, O) ? !0 : P.clearNodes()).wrapInList(R, O).command(() => joinListBackwards(A, R)).command(() => joinListForwards(A, R)).run() : N().command(() => {
		let e = F().wrapInList(R, O), E = G.filter((e) => L.includes(e.type.name));
		return A.ensureMarks(E), e ? !0 : P.clearNodes();
	}).wrapInList(R, O).command(() => joinListBackwards(A, R)).command(() => joinListForwards(A, R)).run();
}, toggleMark = (e, E = {}, D = {}) => ({ state: O, commands: k }) => {
	let { extendEmptyMarkRange: A = !1 } = D, j = getMarkType(e, O.schema);
	return isMarkActive(O, j, E) ? k.unsetMark(j, { extendEmptyMarkRange: A }) : k.setMark(j, E);
}, toggleNode = (e, E, D = {}) => ({ state: O, commands: k }) => {
	let A = getNodeType(e, O.schema), j = getNodeType(E, O.schema), M = isNodeActive(O, A, D), N;
	return O.selection.$anchor.sameParent(O.selection.$head) && (N = O.selection.$anchor.parent.attrs), M ? k.setNode(j, N) : k.setNode(A, {
		...N,
		...D
	});
}, toggleWrap = (e, E = {}) => ({ state: D, commands: O }) => {
	let k = getNodeType(e, D.schema);
	return isNodeActive(D, k, E) ? O.lift(k) : O.wrapIn(k, E);
}, undoInputRule = () => ({ state: e, dispatch: E }) => {
	let D = e.plugins;
	for (let O = 0; O < D.length; O += 1) {
		let k = D[O], A;
		if (k.spec.isInputRules && (A = k.getState(e))) {
			if (E) {
				let E = e.tr, D = A.transform;
				for (let e = D.steps.length - 1; e >= 0; --e) E.step(D.steps[e].invert(D.docs[e]));
				if (A.text) {
					let D = E.doc.resolve(A.from).marks();
					E.replaceWith(A.from, A.to, e.schema.text(A.text, D));
				} else E.delete(A.from, A.to);
			}
			return !0;
		}
	}
	return !1;
}, unsetAllMarks = (e = {}) => ({ tr: E, dispatch: D, editor: O }) => {
	let { ignoreClearable: k = !1 } = e, { selection: A } = E, { empty: j, ranges: M } = A;
	if (j) return !0;
	let { nonClearableMarks: N } = O.extensionManager;
	if (D) {
		let e = Object.values(O.schema.marks).filter((e) => k || !N.includes(e.name));
		M.forEach((D) => {
			for (let O of e) E.removeMark(D.$from.pos, D.$to.pos, O);
		});
	}
	return !0;
}, unsetMark = (e, E = {}) => ({ tr: D, state: O, dispatch: k }) => {
	let { extendEmptyMarkRange: A = !1 } = E, { selection: j } = D, M = getMarkType(e, O.schema), { $from: N, empty: P, ranges: F } = j;
	if (!k) return !0;
	if (P && A) {
		let { from: e, to: E } = j, O = getMarkRange(N, M, N.marks().find((e) => e.type === M)?.attrs);
		O && (e = O.from, E = O.to), D.removeMark(e, E, M);
	} else F.forEach((e) => {
		D.removeMark(e.$from.pos, e.$to.pos, M);
	});
	return D.removeStoredMark(M), !0;
}, unsetTextDirection = (e) => ({ tr: E, state: D, dispatch: O }) => {
	let { selection: k } = D, A, j;
	return typeof e == "number" ? (A = e, j = e) : e && "from" in e && "to" in e ? (A = e.from, j = e.to) : (A = k.from, j = k.to), O && E.doc.nodesBetween(A, j, (e, D) => {
		if (e.isText) return;
		let O = { ...e.attrs };
		delete O.dir, E.setNodeMarkup(D, void 0, O);
	}), !0;
}, updateAttributes = (e, E = {}) => ({ tr: D, state: O, dispatch: k }) => {
	let A = null, j = null, M = getSchemaTypeNameByName(typeof e == "string" ? e : e.name, O.schema);
	if (!M) return !1;
	M === "node" && (A = getNodeType(e, O.schema)), M === "mark" && (j = getMarkType(e, O.schema));
	let N = !1;
	return D.selection.ranges.forEach((e) => {
		let M = e.$from.pos, P = e.$to.pos, F, I, L, R;
		D.selection.empty ? O.doc.nodesBetween(M, P, (e, E) => {
			A && A === e.type && (N = !0, L = Math.max(E, M), R = Math.min(E + e.nodeSize, P), F = E, I = e);
		}) : O.doc.nodesBetween(M, P, (e, O) => {
			O < M && A && A === e.type && (N = !0, L = Math.max(O, M), R = Math.min(O + e.nodeSize, P), F = O, I = e), O >= M && O <= P && (A && A === e.type && (N = !0, k && D.setNodeMarkup(O, void 0, {
				...e.attrs,
				...E
			})), j && e.marks.length && e.marks.forEach((A) => {
				if (j === A.type && (N = !0, k)) {
					let k = Math.max(O, M), N = Math.min(O + e.nodeSize, P);
					D.addMark(k, N, j.create({
						...A.attrs,
						...E
					}));
				}
			}));
		}), I && (F !== void 0 && k && D.setNodeMarkup(F, void 0, {
			...I.attrs,
			...E
		}), j && I.marks.length && I.marks.forEach((e) => {
			j === e.type && k && D.addMark(L, R, j.create({
				...e.attrs,
				...E
			}));
		}));
	}), N;
}, DECORATION_MANAGER_PLUGIN_KEY = new PluginKey("__tiptap_decorations__"), updateDecorations = (e) => ({ tr: E, dispatch: D }) => (D && E.setMeta(DECORATION_MANAGER_PLUGIN_KEY, {
	type: "force",
	name: e
}), !0), wrapIn$1 = (e, E = {}) => ({ state: D, dispatch: O }) => wrapIn(getNodeType(e, D.schema), E)(D, O), wrapInList$1 = (e, E = {}) => ({ state: D, dispatch: O }) => wrapInList(getNodeType(e, D.schema), E)(D, O), commands_exports = /* @__PURE__ */ __exportAll({
	blur: () => blur,
	clearContent: () => clearContent,
	clearNodes: () => clearNodes,
	command: () => command,
	createParagraphNear: () => createParagraphNear$1,
	cut: () => cut,
	deleteCurrentNode: () => deleteCurrentNode,
	deleteNode: () => deleteNode,
	deleteRange: () => deleteRange,
	deleteSelection: () => deleteSelection,
	enter: () => enter,
	exitCode: () => exitCode$1,
	extendMarkRange: () => extendMarkRange,
	first: () => first,
	focus: () => focus,
	forEach: () => forEach,
	insertContent: () => insertContent,
	insertContentAt: () => insertContentAt,
	insertDefaultBlock: () => insertDefaultBlock,
	joinBackward: () => joinBackward$1,
	joinDown: () => joinDown$1,
	joinForward: () => joinForward$1,
	joinItemBackward: () => joinItemBackward,
	joinItemForward: () => joinItemForward,
	joinTextblockBackward: () => joinTextblockBackward$1,
	joinTextblockForward: () => joinTextblockForward$1,
	joinUp: () => joinUp$1,
	keyboardShortcut: () => keyboardShortcut,
	lift: () => lift$1,
	liftEmptyBlock: () => liftEmptyBlock$1,
	liftListItem: () => liftListItem$1,
	newlineInCode: () => newlineInCode$1,
	resetAttributes: () => resetAttributes,
	scrollIntoView: () => scrollIntoView,
	selectAll: () => selectAll,
	selectNodeBackward: () => selectNodeBackward$1,
	selectNodeForward: () => selectNodeForward$1,
	selectParentNode: () => selectParentNode$1,
	selectTextblockEnd: () => selectTextblockEnd$1,
	selectTextblockStart: () => selectTextblockStart$1,
	setContent: () => setContent,
	setMark: () => setMark,
	setMeta: () => setMeta,
	setNode: () => setNode,
	setNodeSelection: () => setNodeSelection,
	setTextDirection: () => setTextDirection,
	setTextSelection: () => setTextSelection,
	sinkListItem: () => sinkListItem$1,
	splitBlock: () => splitBlock,
	splitListItem: () => splitListItem,
	toggleList: () => toggleList,
	toggleMark: () => toggleMark,
	toggleNode: () => toggleNode,
	toggleWrap: () => toggleWrap,
	undoInputRule: () => undoInputRule,
	unsetAllMarks: () => unsetAllMarks,
	unsetMark: () => unsetMark,
	unsetTextDirection: () => unsetTextDirection,
	updateAttributes: () => updateAttributes,
	updateDecorations: () => updateDecorations,
	wrapIn: () => wrapIn$1,
	wrapInList: () => wrapInList$1
}), depthByEditor = /* @__PURE__ */ new WeakMap();
function runInDecorationApplyScope(e, E) {
	depthByEditor.set(e, (depthByEditor.get(e) ?? 0) + 1);
	try {
		return E();
	} finally {
		let E = (depthByEditor.get(e) ?? 1) - 1;
		E > 0 ? depthByEditor.set(e, E) : depthByEditor.delete(e);
	}
}
function isInDecorationApplyScope(e) {
	return depthByEditor.has(e);
}
var EventEmitter = class {
	constructor() {
		this.callbacks = {};
	}
	on(e, E) {
		return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(E), this;
	}
	emit(e, ...E) {
		let D = this.callbacks[e];
		return D && D.forEach((e) => e.apply(this, E)), this;
	}
	off(e, E) {
		let D = this.callbacks[e];
		return D && (E ? this.callbacks[e] = D.filter((e) => e !== E) : delete this.callbacks[e]), this;
	}
	once(e, E) {
		let D = (...O) => {
			this.off(e, D), E.apply(this, O);
		};
		return this.on(e, D);
	}
	removeAllListeners() {
		this.callbacks = {};
	}
}, isDev$1 = typeof process < "u" && process.env.NODE_ENV !== "production";
function isWidgetDecoration(e) {
	return e.kind === "widget";
}
function decorationsToPMDecorations(e, E) {
	let D = [], O = /* @__PURE__ */ new Set();
	for (let k of e) k.kind === "widget" && isWidgetDecoration(k) && O.add(k.key), D.push(k.toPMDecoration(E));
	return {
		decorations: D,
		widgetKeys: O
	};
}
function buildDecorationSet(e, E, D) {
	let { decorations: O, widgetKeys: k } = decorationsToPMDecorations(E, D);
	return {
		set: DecorationSet.create(e, O),
		widgetKeys: k
	};
}
function rangeOwnsPosition({ position: e, from: E, to: D, docSize: O }) {
	return e < E ? !1 : e < D ? !0 : e === D && D === O;
}
function filterOutOfRangeDecorations({ decorations: e, from: E, to: D, docSize: O, extensionName: k, warnedExtensions: A }) {
	return e.filter((e) => rangeOwnsPosition({
		position: e.anchor,
		from: E,
		to: D,
		docSize: O
	}) ? !0 : (e.anchor === D || A.has(k) || (A.add(k), console.warn(`[tiptap warn]: Extension "${k}" returned a decoration outside the requested range [${E}, ${D}). It was ignored.`)), !1));
}
function widgetKeyOf(e) {
	let E = e.spec?.key;
	return typeof E == "string" ? E : void 0;
}
function findDuplicateWidgetKeys(e) {
	let E = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
	for (let O of e.find()) {
		let e = widgetKeyOf(O);
		if (!e) continue;
		let k = O.spec.extensionName ?? "unknown", A = E.get(e) ?? /* @__PURE__ */ new Set();
		A.add(k), E.set(e, A), D.set(e, (D.get(e) ?? 0) + 1);
	}
	return Array.from(E, ([e, E]) => ({
		key: e,
		extensions: E
	})).filter(({ key: e }) => (D.get(e) ?? 0) > 1);
}
function isAttrStep(e) {
	return e.jsonID === "attr";
}
function hasResolvableChangedRange(e) {
	let E = !1;
	if (e.getMap().forEach(() => {
		E = !0;
	}), E || isAttrStep(e)) return !0;
	let D = e;
	return typeof D.from == "number" && typeof D.to == "number";
}
function blockRangeFor(e, E) {
	let D = null, O = 0, k = 0;
	for (let A = 0; A < e.childCount && !(k > E.to); A += 1) {
		let j = k + e.child(A).nodeSize;
		j >= E.from && (D === null && (D = k), O = j), k = j;
	}
	return D === null ? null : {
		from: D,
		to: O
	};
}
function getRebuildRanges(e, E) {
	if (e.steps.some((e) => !hasResolvableChangedRange(e))) return { type: "full" };
	let D = getChangedRanges(e).map(({ newRange: e }) => e);
	e.steps.forEach((E, O) => {
		if (!isAttrStep(E)) return;
		let k = e.mapping.slice(O);
		D.push({
			from: k.map(E.pos, -1),
			to: k.map(E.pos + 1)
		});
	});
	let O = [];
	for (let e of D) {
		let D = blockRangeFor(E, e);
		D && O.push(D);
	}
	O.sort((e, E) => e.from - E.from);
	let k = [];
	for (let e of O) {
		let E = k[k.length - 1];
		E && e.from <= E.to ? E.to = Math.max(E.to, e.to) : k.push({ ...e });
	}
	return {
		type: "ranges",
		ranges: k
	};
}
function mapDecorationSet(e, E, D, O) {
	return e.map(E, D, { onRemove: (e) => {
		let E = e?.key;
		typeof E == "string" && O.delete(E);
	} });
}
function mapDecorations(e, E, D) {
	let O = E.decorationSetsByExtension[e] ?? DecorationSet.empty, k = new Set(E.widgetKeysByExtension[e] ?? []);
	return {
		set: mapDecorationSet(O, D.mapping, D.doc, k),
		widgetKeys: k
	};
}
function mergeDecorationSets(e, E) {
	let D = Object.values(E).flatMap((e) => e.find());
	return DecorationSet.create(e, D);
}
function unionWidgetKeys(e) {
	let E = /* @__PURE__ */ new Set();
	for (let D of Object.values(e)) for (let e of D) E.add(e);
	return E;
}
function validateDecorationSpec(e, E) {
	switch (E.update ?? "document") {
		case "document":
			if (E.createInRange) throw Error(`[tiptap error]: Extension "${e}" provides createInRange() but does not use the "changedRanges" decoration update strategy.`);
			return;
		case "changedRanges":
			if (!E.createInRange) throw Error(`[tiptap error]: Extension "${e}" uses the "changedRanges" decoration update strategy but does not provide createInRange().`);
			return;
		case "manual":
			if (E.createInRange) throw Error(`[tiptap error]: Extension "${e}" uses the "manual" decoration update strategy, which is not compatible with createInRange(). createInRange() requires the "changedRanges" strategy.`);
			if (E.shouldUpdate) throw Error(`[tiptap error]: Extension "${e}" cannot combine the "manual" decoration update strategy with shouldUpdate().`);
			return;
		default: throw Error(`[tiptap error]: Extension "${e}" uses an unknown decoration update strategy. Expected "document", "changedRanges", or "manual".`);
	}
}
function shouldRecomputeDecoration(e, E, D) {
	return D ? !0 : e.update === "manual" ? !1 : e.shouldUpdate ? e.shouldUpdate(E) : E.tr.docChanged;
}
var EMPTY_KEYS = /* @__PURE__ */ new Set(), DecorationManager = class {
	constructor(e) {
		this.warnedWidgetKeys = /* @__PURE__ */ new Set(), this.warnedOutOfRangeExtensions = /* @__PURE__ */ new Set(), this.handleBeforeTransaction = ({ nextState: e }) => {
			let E = DECORATION_MANAGER_PLUGIN_KEY.getState(e);
			E && this.warnDuplicateWidgetKeys(E);
		}, this.editor = e.editor, this.entries = this.resolveEntries(e.entries), this.entries.forEach(({ name: e, spec: E }) => validateDecorationSpec(e, E)), this.plugin = this.entries.length > 0 ? this.createPlugin() : null, this.editor.on("beforeTransaction", this.handleBeforeTransaction);
	}
	destroy() {
		this.editor.off("beforeTransaction", this.handleBeforeTransaction);
	}
	liveWidgetKeys() {
		return DECORATION_MANAGER_PLUGIN_KEY.getState(this.editor.state)?.widgetKeys ?? EMPTY_KEYS;
	}
	get mountedView() {
		return this.editor.isDestroyed ? null : this.editor.view;
	}
	resolveEntries(e) {
		let E = [];
		for (let { name: D, addDecorations: O } of e) {
			let e = O();
			e && E.push({
				name: D,
				spec: e
			});
		}
		return E;
	}
	createPlugin() {
		let { editor: e, entries: E } = this;
		return new Plugin({
			key: DECORATION_MANAGER_PLUGIN_KEY,
			state: {
				init: (e, D) => {
					let O = {}, k = {};
					for (let { name: e, spec: A } of E) {
						let { set: E, widgetKeys: j } = this.buildFullSet(e, A, D);
						O[e] = E, k[e] = j;
					}
					let A = {
						decorationSetsByExtension: O,
						widgetKeysByExtension: k,
						mergedDecorationSet: this.buildMergedSet(D.doc, O),
						widgetKeys: unionWidgetKeys(k)
					};
					return this.warnDuplicateWidgetKeys(A), A;
				},
				apply: (D, O, k, A) => {
					let j = D.getMeta(DECORATION_MANAGER_PLUGIN_KEY), M = j?.type === "force" && !j.name, N = j?.type === "force" ? j.name : void 0, P = {}, F = {}, I = /* @__PURE__ */ new Set();
					return runInDecorationApplyScope(e, () => {
						for (let { name: j, spec: L } of E) {
							let E = M || N === j;
							if (shouldRecomputeDecoration(L, {
								editor: e,
								tr: D,
								oldState: k,
								newState: A
							}, E)) if (L.update === "changedRanges" && D.docChanged && !E) {
								let e = this.applyChangedRangesRecompute(j, L, O, D, A);
								P[j] = e.set, F[j] = e.widgetKeys, I.add(j);
							} else {
								let { set: e, widgetKeys: E } = this.buildFullSet(j, L, A);
								P[j] = e, F[j] = E, I.add(j);
							}
							else {
								let e = mapDecorations(j, O, D);
								P[j] = e.set, F[j] = e.widgetKeys;
							}
						}
					}), I.size === 0 && !D.docChanged ? O : {
						decorationSetsByExtension: P,
						widgetKeysByExtension: F,
						mergedDecorationSet: this.mergeAfterApply({
							entries: E,
							previous: O,
							tr: D,
							decorationSetsByExtension: P,
							recomputedNames: I
						}),
						widgetKeys: unionWidgetKeys(F)
					};
				}
			},
			props: { decorations(e) {
				return DECORATION_MANAGER_PLUGIN_KEY.getState(e)?.mergedDecorationSet ?? DecorationSet.empty;
			} }
		});
	}
	applyChangedRangesRecompute(e, E, D, O, k) {
		let A = getRebuildRanges(O, k.doc);
		return A.type === "full" ? this.buildFullSet(e, E, k) : this.rebuildRanges(e, E, D, O, k, A.ranges);
	}
	rebuildRanges(e, E, D, O, k, A) {
		let j = D.decorationSetsByExtension[e] ?? DecorationSet.empty, M = new Set(D.widgetKeysByExtension[e] ?? []), N = mapDecorationSet(j, O.mapping, O.doc, M), P = k.doc.content.size;
		for (let { from: D, to: O } of A) {
			let A = N.find(D, O).filter((e) => rangeOwnsPosition({
				position: e.from,
				from: D,
				to: O,
				docSize: P
			}));
			for (let e of A) {
				let E = widgetKeyOf(e);
				E && M.delete(E);
			}
			N = N.remove(A);
			let { decorations: j, widgetKeys: F } = decorationsToPMDecorations(filterOutOfRangeDecorations({
				decorations: this.runCreate(e, "createInRange", () => E.createInRange({
					editor: this.editor,
					state: k,
					view: this.mountedView,
					from: D,
					to: O
				})),
				from: D,
				to: O,
				docSize: P,
				extensionName: e,
				warnedExtensions: this.warnedOutOfRangeExtensions
			}), e);
			N = N.add(k.doc, j);
			for (let e of F) M.add(e);
		}
		return {
			set: N,
			widgetKeys: M
		};
	}
	buildFullSet(e, E, D) {
		let O = this.runCreate(e, "create", () => E.create({
			editor: this.editor,
			state: D,
			view: this.mountedView
		}));
		return buildDecorationSet(D.doc, O, e);
	}
	runCreate(e, E, D) {
		try {
			return D();
		} catch (D) {
			return console.error(`[tiptap error]: Extension "${e}" threw in \`addDecorations().${E}()\`. Its decorations were dropped for this update.`, D), [];
		}
	}
	warnDuplicateWidgetKeys(e) {
		if (!isDev$1) return;
		if (e.widgetKeys.size === 0) {
			this.warnedWidgetKeys.clear();
			return;
		}
		let E = findDuplicateWidgetKeys(e.mergedDecorationSet), D = new Set(E.map(({ key: e }) => e));
		for (let { key: e, extensions: D } of E) {
			if (this.warnedWidgetKeys.has(e)) continue;
			let E = Array.from(D).map((e) => `"${e}"`).join(", ");
			console.warn(`[tiptap warn]: Duplicate widget decoration key "${e}" in extension${D.size === 1 ? "" : "s"} ${E}. Widget decoration keys must be globally unique, otherwise ProseMirror misplaces the widget DOM. Use a stable, unique key (e.g. \`comment-\${id}\`).`);
		}
		this.warnedWidgetKeys = D;
	}
	buildMergedSet(e, E) {
		let D = Object.keys(E);
		return D.length === 1 ? E[D[0]] : mergeDecorationSets(e, E);
	}
	mergeAfterApply({ entries: e, previous: E, tr: D, decorationSetsByExtension: O, recomputedNames: k }) {
		return e.length === 1 ? O[e[0].name] : k.size === 0 ? E.mergedDecorationSet.map(D.mapping, D.doc) : mergeDecorationSets(D.doc, O);
	}
};
function attrsEqual(e, E) {
	if (e === E) return !0;
	if (!e || !E) return !1;
	let D = Object.keys(e), O = Object.keys(E);
	return D.length === O.length ? D.every((D) => Object.prototype.hasOwnProperty.call(E, D) && Object.is(e[D], E[D])) : !1;
}
function canInsertNode(e, E) {
	let { selection: D } = e, { $from: O } = D;
	if (D instanceof NodeSelection) {
		let e = O.index();
		return O.parent.canReplaceWith(e, e + 1, E);
	}
	let k = O.depth;
	for (; k >= 0;) {
		let e = O.index(k);
		if (O.node(k).contentMatchAt(e).matchType(E)) return !0;
		--k;
	}
	return !1;
}
function createStyleTag(e, E, D) {
	let O = document.querySelector(`style[data-tiptap-style${D ? `-${D}` : ""}]`);
	if (O !== null) return O;
	let k = document.createElement("style");
	return E && k.setAttribute("nonce", E), k.setAttribute(`data-tiptap-style${D ? `-${D}` : ""}`, ""), k.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(k), k;
}
function decodeHtmlEntities(e) {
	return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&amp;/g, "&");
}
function encodeHtmlEntities(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function isNumber(e) {
	return typeof e == "number";
}
function getType(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function isPlainObject(e) {
	return getType(e) === "Object" ? e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype : !1;
}
function isWhitespace(e) {
	return /\s/.test(e);
}
function isAsciiLetter(e) {
	return /^[a-zA-Z]$/.test(e);
}
function isWordCharacter(e) {
	return /^\w$/.test(e);
}
function skipWhitespace(e, E) {
	for (; E < e.length && isWhitespace(e[E]);) E += 1;
	return E;
}
function skipToWhitespace(e, E) {
	for (; E < e.length && !isWhitespace(e[E]);) E += 1;
	return E;
}
function readName(e, E, D) {
	for (; E < e.length && (isWordCharacter(e[E]) || D && e[E] === "-");) E += 1;
	return E;
}
function readShorthand(e, E) {
	let D = e[E], O = E + 1, k = readName(e, O, !0);
	return k === O ? { nextIndex: skipToWhitespace(e, k) } : {
		token: {
			type: D === "." ? "class" : "id",
			name: e.slice(O, k)
		},
		nextIndex: skipToWhitespace(e, k)
	};
}
function readQuotedSegment(e, E) {
	let D = e.indexOf(e[E], E + 1);
	return { nextIndex: skipToWhitespace(e, D === -1 ? E : D + 1) };
}
function readKeyValue(e, E, D, O) {
	let k = O ? skipWhitespace(e, D) : D;
	if (e[k] !== "=") return;
	k = O ? skipWhitespace(e, k + 1) : k + 1;
	let A = e[k];
	if (A !== "\"" && A !== "'") return;
	let j = e.indexOf(A, k + 1);
	if (j !== -1) return {
		token: {
			type: "keyValue",
			name: E,
			value: e.slice(k + 1, j)
		},
		nextIndex: skipToWhitespace(e, j + 1)
	};
}
function readNamedAttribute(e, E, D) {
	let O = D === "pandoc", k = readName(e, E + 1, O), A = e.slice(E, k), j = readKeyValue(e, A, k, O);
	if (j) return j;
	let M = k === e.length || isWhitespace(e[k]);
	return {
		token: O && M ? {
			type: "boolean",
			name: A
		} : void 0,
		nextIndex: D === "shortcode" ? skipToWhitespace(e, k) : k
	};
}
function readAttribute(e, E, D) {
	let O = e[E];
	return D === "pandoc" && (O === "." || O === "#") ? readShorthand(e, E) : O === "\"" || O === "'" ? readQuotedSegment(e, E) : (D === "pandoc" ? isAsciiLetter(O) : isWordCharacter(O)) ? readNamedAttribute(e, E, D) : { nextIndex: skipToWhitespace(e, E) };
}
function tokenizeAttributes(e, E) {
	let D = [], O = 0;
	for (; O < e.length && (O = skipWhitespace(e, O), !(O >= e.length));) {
		let k = readAttribute(e, O, E);
		k.token && D.push(k.token), O = k.nextIndex;
	}
	return D;
}
function applyTokens(e) {
	let E = {}, D = e.filter((e) => e.type === "class").map((e) => e.name), O = e.find((e) => e.type === "id");
	return D.length > 0 && (E.class = D.join(" ")), O && (E.id = O.name), e.forEach((e) => {
		e.type === "keyValue" && (E[e.name] = e.value);
	}), e.forEach((e) => {
		e.type === "boolean" && (E[e.name] = !0);
	}), E;
}
function parseAttributes(e) {
	return e?.trim() ? applyTokens(tokenizeAttributes(e, "pandoc")) : {};
}
function serializeAttributes(e) {
	if (!e || Object.keys(e).length === 0) return "";
	let E = [];
	return e.class && String(e.class).split(/\s+/).filter(Boolean).forEach((e) => E.push(`.${e}`)), e.id && E.push(`#${e.id}`), Object.entries(e).forEach(([e, D]) => {
		e === "class" || e === "id" || (D === !0 ? E.push(e) : D !== !1 && D != null && E.push(`${e}="${String(D)}"`));
	}), E.join(" ");
}
function createBlockMarkdownSpec(e) {
	let { nodeName: E, name: D, getContent: O, parseAttributes: k = parseAttributes, serializeAttributes: A = serializeAttributes, defaultAttributes: j = {}, content: M = "block", allowedAttributes: N } = e, P = D || E, F = (e) => {
		if (!N) return e;
		let E = {};
		return N.forEach((D) => {
			D in e && (E[D] = e[D]);
		}), E;
	};
	return {
		parseMarkdown: (e, D) => {
			let k;
			if (O) {
				let E = O(e);
				k = typeof E == "string" ? [{
					type: "text",
					text: E
				}] : E;
			} else k = M === "block" ? D.parseChildren(e.tokens || []) : D.parseInline(e.tokens || []);
			let A = {
				...j,
				...e.attributes
			};
			return D.createNode(E, A, k);
		},
		markdownTokenizer: {
			name: E,
			level: "block",
			start(e) {
				let E = RegExp(`^:::${P}`, "m"), D = e.match(E)?.index;
				return D === void 0 ? -1 : D;
			},
			tokenize(e, D, O) {
				let A = /* @__PURE__ */ RegExp(`^:::${P}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), j = e.match(A);
				if (!j) return;
				let [N, F = ""] = j, I = k(F), L = 1, R = N.length, z = "", B = /^:::([\w-]*)(\s.*)?/gm, V = e.slice(R);
				for (B.lastIndex = 0;;) {
					let D = B.exec(V);
					if (D === null) break;
					let k = D.index, A = D[1];
					if (!D[2]?.endsWith(":::")) {
						if (A) L += 1;
						else if (--L, L === 0) {
							let A = V.slice(0, k);
							z = A.trim();
							let j = e.slice(0, R + k + D[0].length), N = [];
							if (z) if (M === "block") for (N = O.blockTokens(A), N.forEach((e) => {
								e.text && (!e.tokens || e.tokens.length === 0) && (e.tokens = O.inlineTokens(e.text));
							}); N.length > 0;) {
								let e = N[N.length - 1];
								if (e.type === "paragraph" && (!e.text || e.text.trim() === "")) N.pop();
								else break;
							}
							else N = O.inlineTokens(z);
							return {
								type: E,
								raw: j,
								attributes: I,
								content: z,
								tokens: N
							};
						}
					}
				}
			}
		},
		renderMarkdown: (e, E) => {
			let D = A(F(e.attrs || {}));
			return `:::${P}${D ? ` {${D}}` : ""}\n\n${E.renderChildren(e.content || [], "\n\n")}\n\n:::`;
		}
	};
}
function parseIndentedBlocks(e, E, D) {
	let O = e.split("\n"), k = [], A = "", j = 0, M = E.baseIndentSize || 2;
	for (; j < O.length;) {
		let e = O[j], F = e.match(E.itemPattern);
		if (!F) {
			if (k.length > 0) break;
			if (e.trim() === "") {
				j += 1, A = `${A}${e}\n`;
				continue;
			} else return;
		}
		let I = E.extractItemData(F), { indentLevel: L, mainContent: R } = I;
		A = `${A}${e}\n`;
		let z = [R];
		for (j += 1; j < O.length;) {
			var N;
			let e = O[j];
			if (e.trim() === "") {
				var P;
				let E = O.slice(j + 1).findIndex((e) => e.trim() !== "");
				if (E === -1) break;
				if ((((P = O[j + 1 + E].match(/^(\s*)/)) == null || (P = P[1]) == null ? void 0 : P.length) || 0) > L) {
					z.push(e), A = `${A}${e}\n`, j += 1;
					continue;
				} else break;
			}
			if ((((N = e.match(/^(\s*)/)) == null || (N = N[1]) == null ? void 0 : N.length) || 0) > L) z.push(e), A = `${A}${e}\n`, j += 1;
			else break;
		}
		let B, V = z.slice(1);
		if (V.length > 0) {
			let e = V.map((e) => e.slice(L + M)).join("\n");
			e.trim() && (B = E.customNestedParser ? E.customNestedParser(e) : D.blockTokens(e));
		}
		let H = E.createToken(I, B);
		k.push(H);
	}
	if (k.length !== 0) return {
		items: k,
		raw: A
	};
}
var TAB_STOP = 4;
function columnWidth(e) {
	let E = 0;
	for (let D of e) E = D === "	" ? E + TAB_STOP - E % TAB_STOP : E + 1;
	return E;
}
function renderNestedMarkdownContent(e, E, D, O, k) {
	if (!e || !Array.isArray(e.content)) return "";
	let A = typeof D == "function" ? D(O) : D, [j, ...M] = e.content, N = `${A}${E.renderChildren([j])}`;
	return M && M.length > 0 && M.forEach((e, D) => {
		let O = E.renderChild?.call(E, e, D + 1) ?? E.renderChildren([e]);
		if (O != null) {
			let D = (e) => {
				if (!k?.alignNestedToPrefix) return E.indent(e);
				let D = E.indent(""), O = columnWidth(A);
				return (columnWidth(D) >= O ? D : " ".repeat(O)) + e;
			}, j = O.split("\n").map((e) => D(e || "")).join("\n");
			N += e.type === "paragraph" ? `\n\n${j}` : `\n${j}`;
		}
	}), N;
}
function markTypeName(e) {
	return typeof e.type == "string" ? e.type : e.type.name;
}
function marksEqual(e, E) {
	if (e.length !== E.length) return !1;
	let D = Array.from({ length: E.length }, () => !1);
	return e.every((e) => {
		let O = markTypeName(e), k = E.findIndex((E, k) => !D[k] && O === markTypeName(E) && attrsEqual(e.attrs, E.attrs));
		return k === -1 ? !1 : (D[k] = !0, !0);
	});
}
function mergeDeep(e, E) {
	let D = { ...e };
	return isPlainObject(e) && isPlainObject(E) && Object.keys(E).forEach((O) => {
		isPlainObject(E[O]) && isPlainObject(e[O]) ? D[O] = mergeDeep(e[O], E[O]) : D[O] = E[O];
	}), D;
}
function updateMarkViewAttributes(e, E, D = {}) {
	let { state: O } = E, { doc: k, tr: A } = O, j = e;
	k.descendants((E, O) => {
		let k = A.mapping.map(O), M = A.mapping.map(O) + E.nodeSize, N = null;
		if (E.marks.forEach((e) => {
			if (e !== j) return !1;
			N = e;
		}), !N) return;
		let P = !1;
		if (Object.keys(D).forEach((e) => {
			D[e] !== N.attrs[e] && (P = !0);
		}), P) {
			let E = e.type.create({
				...e.attrs,
				...D
			});
			A.removeMark(k, M, e.type), A.addMark(k, M, E);
		}
	}), A.docChanged && E.view.dispatch(A);
}
var InputRule = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler, this.undoable = e.undoable ?? !0;
	}
}, inputRuleMatcherHandler = (e, E) => {
	if (isRegExp(E)) return E.exec(e);
	let D = E(e);
	if (!D) return null;
	let O = [D.text];
	return O.index = D.index, O.input = e, O.data = D.data, D.replaceWith && (D.text.includes(D.replaceWith) || console.warn("[tiptap warn]: \"inputRuleMatch.replaceWith\" must be part of \"inputRuleMatch.text\"."), O.push(D.replaceWith)), O;
};
function run$1$1(e) {
	let { editor: E, from: D, to: O, text: k, rules: A, plugin: j } = e, { view: M } = E;
	if (M.composing) return !1;
	let N = M.state.doc.resolve(D);
	if (N.parent.type.spec.code || (N.nodeBefore || N.nodeAfter)?.marks.find((e) => e.type.spec.code)) return !1;
	let P = !1, F = getTextContentFromNodes(N) + k;
	return A.forEach((e) => {
		if (P) return;
		let A = inputRuleMatcherHandler(F, e.find);
		if (!A) return;
		let I = A[0].length - k.length;
		if (I > 0) {
			let e = N.parentOffset - I;
			if (e < 0 || N.parent.textBetween(e, N.parentOffset) !== A[0].slice(0, I)) return;
		}
		let L = M.state.tr, R = createChainableState({
			state: M.state,
			transaction: L
		}), z = {
			from: D - (A[0].length - k.length),
			to: O
		}, { commands: B, chain: V, can: H } = new CommandManager({
			editor: E,
			state: R
		});
		e.handler({
			state: R,
			range: z,
			match: A,
			commands: B,
			chain: V,
			can: H
		}) === null || !L.steps.length || (e.undoable && L.setMeta(j, {
			transform: L,
			from: D,
			to: O,
			text: k
		}), M.dispatch(L), P = !0);
	}), P;
}
function inputRulesPlugin(e) {
	let { editor: E, rules: D } = e, O = new Plugin({
		state: {
			init() {
				return null;
			},
			apply(e, k, A) {
				let j = e.getMeta(O);
				if (j) return j;
				let M = e.getMeta("applyInputRules");
				return M && setTimeout(() => {
					let { text: e } = M;
					e = typeof e == "string" ? e : getHTMLFromFragment(Fragment.from(e), A.schema);
					let { from: k } = M;
					run$1$1({
						editor: E,
						from: k,
						to: k + e.length,
						text: e,
						rules: D,
						plugin: O
					});
				}), e.selectionSet || e.docChanged ? null : k;
			}
		},
		props: {
			handleTextInput(e, k, A, j) {
				return run$1$1({
					editor: E,
					from: k,
					to: A,
					text: j,
					rules: D,
					plugin: O
				});
			},
			handleDOMEvents: { compositionend: (e) => (setTimeout(() => {
				let { $cursor: k } = e.state.selection;
				k && run$1$1({
					editor: E,
					from: k.pos,
					to: k.pos,
					text: "",
					rules: D,
					plugin: O
				});
			}), !1) },
			handleKeyDown(e, k) {
				if (k.key !== "Enter") return !1;
				let { $cursor: A } = e.state.selection;
				return A ? run$1$1({
					editor: E,
					from: A.pos,
					to: A.pos,
					text: "\n",
					rules: D,
					plugin: O
				}) : !1;
			}
		},
		isInputRules: !0
	});
	return O;
}
var Extendable = class {
	constructor(e = {}) {
		this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = { name: this.name }, this.config = {
			...this.config,
			...e
		}, this.name = this.config.name;
	}
	get options() {
		return { ...callOrReturn(getExtensionField(this, "addOptions", { name: this.name })) };
	}
	get storage() {
		return { ...callOrReturn(getExtensionField(this, "addStorage", {
			name: this.name,
			options: this.options
		})) };
	}
	configure(e = {}) {
		let E = this.extend({
			...this.config,
			addOptions: () => mergeDeep(this.options, e)
		});
		return E.name = this.name, E.parent = this.parent, this.child = null, E;
	}
	extend(e = {}) {
		let E = new this.constructor({
			...this.config,
			...e
		});
		return E.parent = this, this.child = E, E.name = "name" in e ? e.name : E.parent.name, E;
	}
}, Mark = class e extends Extendable {
	constructor(...e) {
		super(...e), this.type = "mark";
	}
	static create(E = {}) {
		return new e(typeof E == "function" ? E() : E);
	}
	static handleExit({ editor: e, mark: E }) {
		let { tr: D } = e.state, O = e.state.selection.$from;
		if (O.pos === O.end()) {
			let k = O.marks();
			if (!k.find((e) => e?.type.name === E.name)) return !1;
			let A = k.find((e) => e?.type.name === E.name);
			return A && D.removeStoredMark(A), D.insertText(" ", O.pos), e.view.dispatch(D), !0;
		}
		return !1;
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let E = typeof e == "function" ? e() : e;
		return super.extend(E);
	}
}, PasteRule = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler;
	}
}, pasteRuleMatcherHandler = (e, E, D) => {
	if (isRegExp(E)) return [...e.matchAll(E)];
	let O = E(e, D);
	return O ? O.map((E) => {
		let D = [E.text];
		return D.index = E.index, D.input = e, D.data = E.data, E.replaceWith && (E.text.includes(E.replaceWith) || console.warn("[tiptap warn]: \"pasteRuleMatch.replaceWith\" must be part of \"pasteRuleMatch.text\"."), D.push(E.replaceWith)), D;
	}) : [];
};
function run$2(e) {
	let { editor: E, state: D, from: O, to: k, rule: A, pasteEvent: j, dropEvent: M } = e, { commands: N, chain: P, can: F } = new CommandManager({
		editor: E,
		state: D
	}), I = [];
	return D.doc.nodesBetween(O, k, (e, E) => {
		var L;
		if (!((L = e.type) == null || (L = L.spec) == null) && L.code || !(e.isText || e.isTextblock || e.isInline)) return;
		let R = e.content?.size ?? e.nodeSize ?? 0, z = Math.max(O, E), B = Math.min(k, E + R);
		z >= B || pasteRuleMatcherHandler(e.isText ? e.text || "" : e.textBetween(z - E, B - E, void 0, "￼"), A.find, j).forEach((e) => {
			if (e.index === void 0) return;
			let E = z + e.index + 1, O = E + e[0].length, k = {
				from: D.tr.mapping.map(E),
				to: D.tr.mapping.map(O)
			}, L = A.handler({
				state: D,
				range: k,
				match: e,
				commands: N,
				chain: P,
				can: F,
				pasteEvent: j,
				dropEvent: M
			});
			I.push(L);
		});
	}), I.every((e) => e !== null);
}
var tiptapDragFromOtherEditor = null, createClipboardPasteEvent = (e) => {
	var E;
	let D = new ClipboardEvent("paste", { clipboardData: new DataTransfer() });
	return (E = D.clipboardData) == null || E.setData("text/html", e), D;
};
function pasteRulesPlugin(e) {
	let { editor: E, rules: D } = e, O = null, k = !1, A = !1, j = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, M;
	try {
		M = typeof DragEvent < "u" ? new DragEvent("drop") : null;
	} catch {
		M = null;
	}
	let N = ({ state: e, from: D, to: O, rule: k, pasteEvt: A }) => {
		let N = e.tr;
		if (!(!run$2({
			editor: E,
			state: createChainableState({
				state: e,
				transaction: N
			}),
			from: Math.max(D - 1, 0),
			to: O.b - 1,
			rule: k,
			pasteEvent: A,
			dropEvent: M
		}) || !N.steps.length)) {
			try {
				M = typeof DragEvent < "u" ? new DragEvent("drop") : null;
			} catch {
				M = null;
			}
			return j = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, N;
		}
	};
	return D.map((e) => new Plugin({
		view(e) {
			let D = (D) => {
				O = e.dom.parentElement?.contains(D.target) ? e.dom.parentElement : null, O && (tiptapDragFromOtherEditor = E);
			}, k = () => {
				tiptapDragFromOtherEditor &&= null;
			};
			return window.addEventListener("dragstart", D), window.addEventListener("dragend", k), { destroy() {
				window.removeEventListener("dragstart", D), window.removeEventListener("dragend", k);
			} };
		},
		props: { handleDOMEvents: {
			drop: (e, E) => {
				if (A = O === e.dom.parentElement, M = E, !A) {
					let e = tiptapDragFromOtherEditor;
					e?.isEditable && setTimeout(() => {
						let E = e.state.selection;
						E && e.commands.deleteRange({
							from: E.from,
							to: E.to
						});
					}, 10);
				}
				return !1;
			},
			paste: (e, E) => {
				let D = E.clipboardData?.getData("text/html");
				return j = E, k = !!D?.includes("data-pm-slice"), !1;
			}
		} },
		appendTransaction: (E, D, O) => {
			let M = E[0], P = M.getMeta("uiEvent") === "paste" && !k, F = M.getMeta("uiEvent") === "drop" && !A, I = M.getMeta("applyPasteRules"), L = !!I;
			if (!P && !F && !L) return;
			if (L) {
				let { text: E } = I;
				E = typeof E == "string" ? E : getHTMLFromFragment(Fragment.from(E), O.schema);
				let { from: D } = I, k = D + E.length, A = createClipboardPasteEvent(E);
				return N({
					rule: e,
					state: O,
					from: D,
					to: { b: k },
					pasteEvt: A
				});
			}
			let R = D.doc.content.findDiffStart(O.doc.content), z = D.doc.content.findDiffEnd(O.doc.content);
			if (!(!isNumber(R) || !z || R === z.b)) return N({
				rule: e,
				state: O,
				from: R,
				to: z,
				pasteEvt: j
			});
		}
	}));
}
var ExtensionManager = class {
	constructor(e, E) {
		this.splittableMarks = [], this.nonClearableMarks = [], this.decorationManager = null, this.editor = E, this.baseExtensions = e, this.extensions = resolveExtensions(e), this.schema = getSchemaByResolvedExtensions(this.extensions, E), this.setupExtensions();
	}
	get commands() {
		return this.extensions.reduce((e, E) => {
			let D = getExtensionField(E, "addCommands", {
				name: E.name,
				options: E.options,
				storage: this.editor.extensionStorage[E.name],
				editor: this.editor,
				type: getSchemaTypeByName(E.name, this.schema)
			});
			return D ? {
				...e,
				...D()
			} : e;
		}, {});
	}
	get plugins() {
		let { editor: e } = this, E = sortExtensions([...this.extensions].reverse()).flatMap((E) => {
			let D = {
				name: E.name,
				options: E.options,
				storage: this.editor.extensionStorage[E.name],
				editor: e,
				type: getSchemaTypeByName(E.name, this.schema)
			}, O = [], k = getExtensionField(E, "addKeyboardShortcuts", D), A = {};
			if (E.type === "mark" && getExtensionField(E, "exitable", D) && (A.ArrowRight = () => Mark.handleExit({
				editor: e,
				mark: E
			})), k) {
				let E = Object.fromEntries(Object.entries(k()).map(([E, D]) => [E, () => D({ editor: e })]));
				A = {
					...A,
					...E
				};
			}
			let j = keymap(A);
			O.push(j);
			let M = getExtensionField(E, "addInputRules", D);
			if (isExtensionRulesEnabled(E, e.options.enableInputRules) && M) {
				let E = M();
				if (E && E.length) {
					let D = inputRulesPlugin({
						editor: e,
						rules: E
					}), k = Array.isArray(D) ? D : [D];
					O.push(...k);
				}
			}
			let N = getExtensionField(E, "addPasteRules", D);
			if (isExtensionRulesEnabled(E, e.options.enablePasteRules) && N) {
				let E = N();
				if (E && E.length) {
					let D = pasteRulesPlugin({
						editor: e,
						rules: E
					});
					O.push(...D);
				}
			}
			let P = getExtensionField(E, "addProseMirrorPlugins", D);
			if (P) {
				let e = P();
				O.push(...e);
			}
			return O;
		}), D = this.createDecorationPlugin();
		return D && E.push(D), E;
	}
	createDecorationPlugin() {
		var e;
		let { editor: E } = this;
		(e = this.decorationManager) == null || e.destroy();
		let D = [];
		return this.extensions.forEach((e) => {
			let O = getExtensionField(e, "addDecorations", {
				name: e.name,
				options: e.options,
				storage: this.editor.extensionStorage[e.name],
				editor: E,
				type: getSchemaTypeByName(e.name, this.schema)
			});
			O && D.push({
				name: e.name,
				addDecorations: O
			});
		}), this.decorationManager = new DecorationManager({
			editor: E,
			entries: D
		}), this.decorationManager.plugin;
	}
	get attributes() {
		return getAttributesFromExtensions(this.extensions);
	}
	get nodeViews() {
		let { editor: e } = this, { nodeExtensions: E } = splitExtensions(this.extensions);
		return Object.fromEntries(E.filter((e) => !!getExtensionField(e, "addNodeView")).map((E) => {
			let D = this.attributes.filter((e) => e.type === E.name), O = getExtensionField(E, "addNodeView", {
				name: E.name,
				options: E.options,
				storage: this.editor.extensionStorage[E.name],
				editor: e,
				type: getNodeType(E.name, this.schema)
			});
			if (!O) return [];
			let k = O();
			return k ? [E.name, (O, A, j, M, N) => k({
				node: O,
				view: A,
				getPos: j,
				decorations: M,
				innerDecorations: N,
				editor: e,
				extension: E,
				HTMLAttributes: getRenderedAttributes(O, D)
			})] : [];
		}));
	}
	dispatchTransaction(e) {
		let { editor: E } = this;
		return sortExtensions([...this.extensions].reverse()).reduceRight((e, D) => {
			let O = {
				name: D.name,
				options: D.options,
				storage: this.editor.extensionStorage[D.name],
				editor: E,
				type: getSchemaTypeByName(D.name, this.schema)
			}, k = getExtensionField(D, "dispatchTransaction", O);
			return k ? (E) => {
				k.call(O, {
					transaction: E,
					next: e
				});
			} : e;
		}, e);
	}
	transformPastedHTML(e) {
		let { editor: E } = this;
		return sortExtensions([...this.extensions]).reduce((e, D) => {
			let O = {
				name: D.name,
				options: D.options,
				storage: this.editor.extensionStorage[D.name],
				editor: E,
				type: getSchemaTypeByName(D.name, this.schema)
			}, k = getExtensionField(D, "transformPastedHTML", O);
			return k ? (E, D) => {
				let A = e(E, D);
				return k.call(O, A);
			} : e;
		}, e || ((e) => e));
	}
	get markViews() {
		let { editor: e } = this, { markExtensions: E } = splitExtensions(this.extensions);
		return Object.fromEntries(E.filter((e) => !!getExtensionField(e, "addMarkView")).map((E) => {
			let D = this.attributes.filter((e) => e.type === E.name), O = getExtensionField(E, "addMarkView", {
				name: E.name,
				options: E.options,
				storage: this.editor.extensionStorage[E.name],
				editor: e,
				type: getMarkType(E.name, this.schema)
			});
			return O ? [E.name, (k, A, j) => {
				let M = getRenderedAttributes(k, D);
				return O()({
					mark: k,
					view: A,
					inline: j,
					editor: e,
					extension: E,
					HTMLAttributes: M,
					updateAttributes: (E) => {
						updateMarkViewAttributes(k, e, E);
					}
				});
			}] : [];
		}));
	}
	destroy() {
		var e;
		(e = this.decorationManager) == null || e.destroy(), this.extensions.forEach((e) => {
			let E = e;
			for (; E.parent;) {
				let e = E.parent;
				e.child === E && (e.child = null), E = e;
			}
		}), this.extensions = [], this.baseExtensions = [], this.decorationManager = null, this.schema = null, this.editor = null;
	}
	setupExtensions() {
		let e = this.extensions;
		this.editor.extensionStorage = Object.fromEntries(e.map((e) => [e.name, e.storage])), e.forEach((e) => {
			let E = {
				name: e.name,
				options: e.options,
				storage: this.editor.extensionStorage[e.name],
				editor: this.editor,
				type: getSchemaTypeByName(e.name, this.schema)
			};
			e.type === "mark" && ((callOrReturn(getExtensionField(e, "keepOnSplit", E)) ?? !0) && this.splittableMarks.push(e.name), (callOrReturn(getExtensionField(e, "clearable", E)) ?? !0) || this.nonClearableMarks.push(e.name));
			let D = getExtensionField(e, "onBeforeCreate", E), O = getExtensionField(e, "onCreate", E), k = getExtensionField(e, "onUpdate", E), A = getExtensionField(e, "onSelectionUpdate", E), j = getExtensionField(e, "onTransaction", E), M = getExtensionField(e, "onFocus", E), N = getExtensionField(e, "onBlur", E), P = getExtensionField(e, "onDestroy", E);
			D && this.editor.on("beforeCreate", D), O && this.editor.on("create", O), k && this.editor.on("update", k), A && this.editor.on("selectionUpdate", A), j && this.editor.on("transaction", j), M && this.editor.on("focus", M), N && this.editor.on("blur", N), P && this.editor.on("destroy", P);
		});
	}
};
ExtensionManager.resolve = resolveExtensions, ExtensionManager.sort = sortExtensions, ExtensionManager.flatten = flattenExtensions;
var Extension = class e extends Extendable {
	constructor(...e) {
		super(...e), this.type = "extension";
	}
	static create(E = {}) {
		return new e(typeof E == "function" ? E() : E);
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let E = typeof e == "function" ? e() : e;
		return super.extend(E);
	}
}, ClipboardTextSerializer = Extension.create({
	name: "clipboardTextSerializer",
	addOptions() {
		return { blockSeparator: void 0 };
	},
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("clipboardTextSerializer"),
			props: { clipboardTextSerializer: () => {
				let { editor: e } = this, { state: E, schema: D } = e, { doc: O, selection: k } = E, A = getTextSerializersFromSchema(D), { blockSeparator: j } = this.options, M = {
					...j === void 0 ? {} : { blockSeparator: j },
					textSerializers: A
				};
				return [...k.ranges].sort((e, E) => e.$from.pos - E.$from.pos).map(({ $from: e, $to: E }) => getTextBetween(O, {
					from: e.pos,
					to: E.pos
				}, M)).join(j ?? "\n\n");
			} }
		})];
	}
}), Commands = Extension.create({
	name: "commands",
	addCommands() {
		return { ...commands_exports };
	}
}), Delete = Extension.create({
	name: "delete",
	onUpdate({ transaction: e, appendedTransactions: E }) {
		var D;
		let O = () => {
			var D, O;
			if (((D = this.editor.options.coreExtensionOptions) == null || (D = D.delete) == null || (O = D.filterTransaction) == null ? void 0 : O.call(D, e)) ?? e.getMeta("y-sync$")) return;
			let k = combineTransactionSteps(e.before, [e, ...E]);
			getChangedRanges(k).forEach((E) => {
				k.mapping.mapResult(E.oldRange.from).deletedAfter && k.mapping.mapResult(E.oldRange.to).deletedBefore && k.before.nodesBetween(E.oldRange.from, E.oldRange.to, (D, O) => {
					let A = O + D.nodeSize - 2, j = E.oldRange.from <= O && A <= E.oldRange.to;
					this.editor.emit("delete", {
						type: "node",
						node: D,
						from: O,
						to: A,
						newFrom: k.mapping.map(O),
						newTo: k.mapping.map(A),
						deletedRange: E.oldRange,
						newRange: E.newRange,
						partial: !j,
						editor: this.editor,
						transaction: e,
						combinedTransform: k
					});
				});
			});
			let A = k.mapping;
			k.steps.forEach((E, D) => {
				if (E instanceof RemoveMarkStep) {
					let O = A.slice(D).map(E.from, -1), j = A.slice(D).map(E.to), M = A.invert().map(O, -1), N = A.invert().map(j), P = O > 0 ? k.doc.nodeAt(O - 1)?.marks.some((e) => e.eq(E.mark)) : !1, F = k.doc.nodeAt(j)?.marks.some((e) => e.eq(E.mark));
					this.editor.emit("delete", {
						type: "mark",
						mark: E.mark,
						from: E.from,
						to: E.to,
						deletedRange: {
							from: M,
							to: N
						},
						newRange: {
							from: O,
							to: j
						},
						partial: !!(F || P),
						editor: this.editor,
						transaction: e,
						combinedTransform: k
					});
				}
			});
		};
		((D = this.editor.options.coreExtensionOptions) == null || (D = D.delete) == null ? void 0 : D.async) ?? !0 ? setTimeout(O, 0) : O();
	}
}), Drop = Extension.create({
	name: "drop",
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("tiptapDrop"),
			props: { handleDrop: (e, E, D, O) => {
				this.editor.emit("drop", {
					editor: this.editor,
					event: E,
					slice: D,
					moved: O
				});
			} }
		})];
	}
}), Editable = Extension.create({
	name: "editable",
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("editable"),
			props: { editable: () => this.editor.options.editable }
		})];
	}
}), focusEventsPluginKey = new PluginKey("focusEvents"), FocusEvents = Extension.create({
	name: "focusEvents",
	addProseMirrorPlugins() {
		let { editor: e } = this;
		return [new Plugin({
			key: focusEventsPluginKey,
			props: { handleDOMEvents: {
				focus: (E, D) => {
					e.isFocused = !0;
					let O = e.state.tr.setMeta("focus", { event: D }).setMeta("addToHistory", !1);
					return E.dispatch(O), !1;
				},
				blur: (E, D) => {
					e.isFocused = !1;
					let O = e.state.tr.setMeta("blur", { event: D }).setMeta("addToHistory", !1);
					return E.dispatch(O), !1;
				}
			} }
		})];
	}
}), Keymap = Extension.create({
	name: "keymap",
	addKeyboardShortcuts() {
		let e = () => this.editor.commands.first(({ commands: e }) => [
			() => e.undoInputRule(),
			() => e.command(({ tr: E }) => {
				let { selection: D, doc: O } = E, { empty: k, $anchor: A } = D, { pos: j, parent: M } = A, N = A.parent.isTextblock && j > 0 ? E.doc.resolve(j - 1) : A, P = N.parent.type.spec.isolating, F = A.pos - A.parentOffset, I = P && N.parent.childCount === 1 ? F === A.pos : Selection$1.atStart(O).from === j;
				return !k || !M.type.isTextblock || M.textContent.length || !I || I && A.parent.type.name === "paragraph" ? !1 : e.clearNodes();
			}),
			() => e.deleteSelection(),
			() => e.joinBackward(),
			() => e.selectNodeBackward()
		]), E = () => this.editor.commands.first(({ commands: e }) => [
			() => e.deleteSelection(),
			() => e.deleteCurrentNode(),
			() => e.joinForward(),
			() => e.selectNodeForward()
		]), D = {
			Enter: () => this.editor.commands.first(({ commands: e }) => [
				() => e.newlineInCode(),
				() => e.createParagraphNear(),
				() => e.liftEmptyBlock(),
				() => e.splitBlock()
			]),
			"Mod-Enter": () => this.editor.commands.exitCode(),
			Backspace: e,
			"Mod-Backspace": e,
			"Shift-Backspace": e,
			Delete: E,
			"Mod-Delete": E,
			"Mod-a": () => this.editor.commands.selectAll()
		}, O = { ...D }, k = {
			...D,
			"Ctrl-h": e,
			"Alt-Backspace": e,
			"Ctrl-d": E,
			"Ctrl-Alt-Backspace": E,
			"Alt-Delete": E,
			"Alt-d": E,
			"Ctrl-a": () => this.editor.commands.selectTextblockStart(),
			"Ctrl-e": () => this.editor.commands.selectTextblockEnd()
		};
		return isiOS() || isMacOS() ? k : O;
	},
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("clearDocument"),
			appendTransaction: (e, E, D) => {
				if (e.some((e) => e.getMeta("composition"))) return;
				let O = e.some((e) => e.docChanged) && !E.doc.eq(D.doc), k = e.some((e) => e.getMeta("preventClearDocument"));
				if (!O || k) return;
				let { empty: A, from: j, to: M } = E.selection, N = Selection$1.atStart(E.doc).from, P = Selection$1.atEnd(E.doc).to;
				if (A || !(j === N && M === P) || !isNodeEmpty(D.doc)) return;
				let F = D.tr, I = createChainableState({
					state: D,
					transaction: F
				}), { commands: L } = new CommandManager({
					editor: this.editor,
					state: I
				});
				if (L.clearNodes(), F.steps.length) return F;
			}
		})];
	}
}), Paste = Extension.create({
	name: "paste",
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("tiptapPaste"),
			props: { handlePaste: (e, E, D) => {
				this.editor.emit("paste", {
					editor: this.editor,
					event: E,
					slice: D
				});
			} }
		})];
	}
}), Tabindex = Extension.create({
	name: "tabindex",
	addOptions() {
		return { value: void 0 };
	},
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("tabindex"),
			props: { attributes: () => !this.editor.isEditable && this.options.value === void 0 ? {} : { tabindex: this.options.value ?? "0" } }
		})];
	}
}), TextDirection = Extension.create({
	name: "textDirection",
	addOptions() {
		return { direction: void 0 };
	},
	addGlobalAttributes() {
		if (!this.options.direction) return [];
		let { nodeExtensions: e } = splitExtensions(this.extensions);
		return [{
			types: e.filter((e) => e.name !== "text").map((e) => e.name),
			attributes: { dir: {
				default: this.options.direction,
				parseHTML: (e) => {
					let E = e.getAttribute("dir");
					return E && (E === "ltr" || E === "rtl" || E === "auto") ? E : this.options.direction;
				},
				renderHTML: (e) => e.dir ? { dir: e.dir } : {}
			} }
		}];
	},
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("textDirection"),
			props: { attributes: () => {
				let e = this.options.direction;
				return e ? { dir: e } : {};
			} }
		})];
	}
}), hasChecked = !1;
function warnOnDuplicatedProseMirrorModel(e) {
	if (hasChecked) return;
	hasChecked = !0;
	let E;
	try {
		E = ReplaceStep.fromJSON(e, {
			from: 0,
			to: 0
		}).slice.content;
	} catch {
		return;
	}
	E instanceof Fragment || console.warn("[tiptap warn]: prosemirror-model is loaded more than once. Wrapping and splitting nodes will fail. Deduplicate it in your lock file, or alias it to a single copy in your bundler.");
}
var NodePos = class e {
	get name() {
		return this.node.type.name;
	}
	constructor(e, E, D = !1, O = null) {
		this.currentNode = null, this.actualDepth = null, this.isBlock = D, this.resolvedPos = e, this.editor = E, this.currentNode = O;
	}
	get node() {
		return this.currentNode || this.resolvedPos.node();
	}
	get element() {
		return this.editor.view.domAtPos(this.pos).node;
	}
	get depth() {
		return this.actualDepth ?? this.resolvedPos.depth;
	}
	get pos() {
		return this.resolvedPos.pos;
	}
	get content() {
		return this.node.content;
	}
	set content(e) {
		let E = this.from, D = this.to;
		if (this.isBlock) {
			if (this.content.size === 0) {
				console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
				return;
			}
			E = this.from + 1, D = this.to - 1;
		}
		this.editor.commands.insertContentAt({
			from: E,
			to: D
		}, e);
	}
	get attributes() {
		return this.node.attrs;
	}
	get textContent() {
		return this.node.textContent;
	}
	get size() {
		return this.node.nodeSize;
	}
	get from() {
		return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
	}
	get range() {
		return {
			from: this.from,
			to: this.to
		};
	}
	get to() {
		return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
	}
	get parent() {
		if (this.depth === 0) return null;
		let E = this.resolvedPos.start(this.resolvedPos.depth - 1);
		return new e(this.resolvedPos.doc.resolve(E), this.editor);
	}
	get before() {
		let E = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
		return E.depth !== this.depth && (E = this.resolvedPos.doc.resolve(this.from - 3)), new e(E, this.editor);
	}
	get after() {
		let E = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
		return E.depth !== this.depth && (E = this.resolvedPos.doc.resolve(this.to + 3)), new e(E, this.editor);
	}
	get children() {
		let E = [];
		return this.node.content.forEach((D, O) => {
			let k = D.isBlock && !D.isTextblock, A = D.isAtom && !D.isText, j = D.isInline, M = this.pos + O + (A ? 0 : 1);
			if (M < 0 || M > this.resolvedPos.doc.nodeSize - 2) return;
			let N = this.resolvedPos.doc.resolve(M);
			if (!k && !j && N.depth <= this.depth) return;
			let P = new e(N, this.editor, k, k || j ? D : null);
			k && (P.actualDepth = this.depth + 1), E.push(P);
		}), E;
	}
	get firstChild() {
		return this.children[0] || null;
	}
	get lastChild() {
		let e = this.children;
		return e[e.length - 1] || null;
	}
	closest(e, E = {}) {
		let D = null, O = this.parent;
		for (; O && !D;) {
			if (O.node.type.name === e) if (Object.keys(E).length > 0) {
				let e = O.node.attrs, D = Object.keys(E);
				for (let O = 0; O < D.length; O += 1) {
					let k = D[O];
					if (e[k] !== E[k]) break;
				}
			} else D = O;
			O = O.parent;
		}
		return D;
	}
	querySelector(e, E = {}) {
		return this.querySelectorAll(e, E, !0)[0] || null;
	}
	querySelectorAll(e, E = {}, D = !1) {
		let O = [];
		if (!this.children || this.children.length === 0) return O;
		let k = Object.keys(E);
		return this.children.forEach((A) => {
			D && O.length > 0 || (A.node.type.name === e && k.every((e) => E[e] === A.node.attrs[e]) && O.push(A), !(D && O.length > 0) && (O = O.concat(A.querySelectorAll(e, E, D))));
		}), O;
	}
	setAttribute(e) {
		let { tr: E } = this.editor.state;
		E.setNodeMarkup(this.from, void 0, {
			...this.node.attrs,
			...e
		}), this.editor.view.dispatch(E);
	}
}, style = ".ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: \"liga\" 0; /* the above doesn't seem to work in Edge */\n}\n\n.ProseMirror [contenteditable=\"false\"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable=\"false\"] [contenteditable=\"true\"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}", Editor = class extends EventEmitter {
	constructor(e = {}) {
		super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.destroyed = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.hasWarnedStaleDecorationRead = !1, this.options = {
			element: typeof document < "u" ? document.createElement("div") : null,
			content: "",
			injectCSS: !0,
			injectNonce: void 0,
			extensions: [],
			autofocus: !1,
			editable: !0,
			textDirection: void 0,
			editorProps: {},
			parseOptions: {},
			coreExtensionOptions: {},
			enableInputRules: !0,
			enablePasteRules: !0,
			enableCoreExtensions: !0,
			enableContentCheck: !1,
			emitContentError: !1,
			onBeforeCreate: () => null,
			onCreate: () => null,
			onMount: () => null,
			onUnmount: () => null,
			onUpdate: () => null,
			onSelectionUpdate: () => null,
			onTransaction: () => null,
			onFocus: () => null,
			onBlur: () => null,
			onDestroy: () => null,
			onContentError: ({ error: e }) => {
				throw e;
			},
			onPaste: () => null,
			onDrop: () => null,
			onDelete: () => null,
			enableExtensionDispatchTransaction: !0
		}, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.utils = {
			getUpdatedPosition,
			createMappablePosition
		}, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: e, slice: E, moved: D }) => this.options.onDrop(e, E, D)), this.on("paste", ({ event: e, slice: E }) => this.options.onPaste(e, E)), this.on("delete", this.options.onDelete);
		let E = this.createDoc();
		if (!this.editorState) {
			let e = resolveFocusPosition(E, this.options.autofocus);
			this.editorState = EditorState.create({
				doc: E,
				schema: this.schema,
				selection: e || void 0
			});
		}
		warnOnDuplicatedProseMirrorModel(this.schema), this.options.element && this.mount(this.options.element);
	}
	mount(e) {
		if (typeof document > "u") throw Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
		this.createView(e), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
			this.isDestroyed || (this.options.autofocus !== !1 && this.options.autofocus !== null && this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
		}, 0);
	}
	unmount() {
		if (this.editorView) {
			this.editorState = this.editorView.state;
			let e = this.editorView.dom;
			e?.editor && delete e.editor, this.editorView.destroy();
		}
		if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll(`.${this.className}`).length) try {
			typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
		} catch (e) {
			console.warn("Failed to remove CSS element:", e);
		}
		this.css = null, this.emit("unmount", { editor: this });
	}
	get storage() {
		return this.extensionStorage;
	}
	get commands() {
		return this.commandManager.commands;
	}
	chain() {
		return this.commandManager ? this.commandManager.chain() : CommandManager.createFakeChain();
	}
	can() {
		return this.commandManager ? this.commandManager.can() : CommandManager.createFallbackCan();
	}
	injectCSS() {
		this.options.injectCSS && typeof document < "u" && (this.css = createStyleTag(style, this.options.injectNonce));
	}
	setOptions(e = {}) {
		this.options = {
			...this.options,
			...e
		}, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
	}
	setEditable(e, E = !0) {
		this.setOptions({ editable: e }), E && this.emit("update", {
			editor: this,
			transaction: this.state.tr,
			appendedTransactions: []
		});
	}
	get isEditable() {
		return this.options.editable && this.view && this.view.editable;
	}
	get view() {
		return this.editorView ? this.editorView : new Proxy({
			state: this.editorState,
			updateState: (e) => {
				this.editorState = e;
			},
			dispatch: (e) => {
				this.dispatchTransaction(e);
			},
			composing: !1,
			dragging: null,
			editable: !0,
			isDestroyed: !1
		}, { get: (e, E) => {
			if (this.editorView) return this.editorView[E];
			if (E === "state") return this.editorState;
			if (E in e) return Reflect.get(e, E);
			throw Error(`[tiptap error]: The editor view is not available. Cannot access view['${E}']. The editor may not be mounted yet.`);
		} });
	}
	get state() {
		return isDev$1 && !this.hasWarnedStaleDecorationRead && isInDecorationApplyScope(this) && (this.hasWarnedStaleDecorationRead = !0, console.warn("[tiptap warn]: `editor.state` was read while decoration `create()` was running. It returns the pre-transaction document. Use the `state` argument passed to `create()` instead. Helpers like `editor.isActive()` read `editor.state` too, so pass `state` to their standalone versions instead of calling them on the editor.")), this.editorView && (this.editorState = this.view.state), this.editorState;
	}
	registerPlugin(e, E) {
		let D = isFunction(E) ? E(e, [...this.state.plugins]) : [...this.state.plugins, e], O = this.state.reconfigure({ plugins: D });
		return this.view.updateState(O), O;
	}
	unregisterPlugin(e) {
		if (this.isDestroyed) return;
		let E = this.state.plugins, D = E;
		if ([].concat(e).forEach((e) => {
			let E = typeof e == "string" ? `${e}$` : e.key;
			D = D.filter((e) => !e.key.startsWith(E));
		}), E.length === D.length) return;
		let O = this.state.reconfigure({ plugins: D });
		return this.view.updateState(O), O;
	}
	createExtensionManager() {
		var e, E;
		this.extensionManager = new ExtensionManager([...this.options.enableCoreExtensions ? [
			Editable,
			ClipboardTextSerializer.configure({ blockSeparator: (e = this.options.coreExtensionOptions) == null || (e = e.clipboardTextSerializer) == null ? void 0 : e.blockSeparator }),
			Commands,
			FocusEvents,
			Keymap,
			Tabindex.configure({ value: (E = this.options.coreExtensionOptions) == null || (E = E.tabindex) == null ? void 0 : E.value }),
			Drop,
			Paste,
			Delete,
			TextDirection.configure({ direction: this.options.textDirection })
		].filter((e) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[e.name] !== !1 : !0) : [], ...this.options.extensions].filter((e) => [
			"extension",
			"node",
			"mark"
		].includes(e?.type)), this);
	}
	createCommandManager() {
		this.commandManager = new CommandManager({ editor: this });
	}
	createSchema() {
		this.schema = this.extensionManager.schema;
	}
	createDoc() {
		let e;
		try {
			e = createDocument(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
		} catch (e) {
			if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) throw e;
			let E = createDocument(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
			return this.editorState = EditorState.create({
				doc: E,
				schema: this.schema,
				selection: resolveFocusPosition(E, this.options.autofocus) || void 0
			}), this.emit("contentError", {
				editor: this,
				error: e,
				disableCollaboration: () => {
					"collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((e) => e.name !== "collaboration"), this.createExtensionManager();
				}
			}), this.editorState.doc;
		}
		return e;
	}
	createView(e) {
		let { editorProps: E, enableExtensionDispatchTransaction: D } = this.options, O = E.dispatchTransaction || this.dispatchTransaction.bind(this), k = D ? this.extensionManager.dispatchTransaction(O) : O, A = E.transformPastedHTML, j = this.extensionManager.transformPastedHTML(A);
		this.editorView = new EditorView(e, {
			...E,
			attributes: {
				role: "textbox",
				...E?.attributes
			},
			dispatchTransaction: k,
			transformPastedHTML: j,
			state: this.editorState,
			markViews: this.extensionManager.markViews,
			nodeViews: this.extensionManager.nodeViews
		});
		let M = this.state.reconfigure({ plugins: this.extensionManager.plugins });
		this.view.updateState(M), this.prependClass(), this.injectCSS();
		let N = this.view.dom;
		N.editor = this;
	}
	createNodeViews() {
		this.view.isDestroyed || this.view.setProps({
			markViews: this.extensionManager.markViews,
			nodeViews: this.extensionManager.nodeViews
		});
	}
	prependClass() {
		this.view.dom.className = `${this.className} ${this.view.dom.className}`;
	}
	captureTransaction(e) {
		this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
		let E = this.capturedTransaction;
		return this.capturedTransaction = null, E;
	}
	dispatchTransaction(e) {
		if (this.view.isDestroyed) return;
		if (this.isCapturingTransaction) {
			if (!this.capturedTransaction) {
				this.capturedTransaction = e;
				return;
			}
			e.steps.forEach((e) => this.capturedTransaction?.step(e));
			return;
		}
		let { state: E, transactions: D } = this.state.applyTransaction(e), O = !this.state.selection.eq(E.selection), k = D.includes(e), A = this.state;
		if (this.emit("beforeTransaction", {
			editor: this,
			transaction: e,
			nextState: E
		}), !k) return;
		this.view.updateState(E), this.emit("transaction", {
			editor: this,
			transaction: e,
			appendedTransactions: D.slice(1)
		}), O && this.emit("selectionUpdate", {
			editor: this,
			transaction: e
		});
		let j = D.findLast((e) => e.getMeta("focus") || e.getMeta("blur")), M = j?.getMeta("focus"), N = j?.getMeta("blur");
		M && this.emit("focus", {
			editor: this,
			event: M.event,
			transaction: j
		}), N && this.emit("blur", {
			editor: this,
			event: N.event,
			transaction: j
		}), !(e.getMeta("preventUpdate") || !D.some((e) => e.docChanged) || A.doc.eq(E.doc)) && this.emit("update", {
			editor: this,
			transaction: e,
			appendedTransactions: D.slice(1)
		});
	}
	getAttributes(e) {
		return getAttributes(this.state, e);
	}
	isActive(e, E) {
		let D = typeof e == "string" ? e : null, O = typeof e == "string" ? E : e;
		return isActive(this.state, D, O);
	}
	getJSON() {
		return this.state.doc.toJSON();
	}
	getHTML() {
		return getHTMLFromFragment(this.state.doc.content, this.schema);
	}
	getText(e) {
		let { blockSeparator: E = "\n\n", textSerializers: D = {} } = e || {};
		return getText(this.state.doc, {
			blockSeparator: E,
			textSerializers: {
				...getTextSerializersFromSchema(this.schema),
				...D
			}
		});
	}
	get isEmpty() {
		return isNodeEmpty(this.state.doc);
	}
	destroy() {
		this.destroyed || (this.destroyed = !0, this.emit("destroy"), this.unmount(), this.removeAllListeners(), this.extensionManager.destroy(), this.extensionManager = null, this.schema = null, this.commandManager = null, this.extensionStorage = {});
	}
	get isDestroyed() {
		return this.editorView?.isDestroyed ?? !0;
	}
	$node(e, E) {
		return this.$doc?.querySelector(e, E) || null;
	}
	$nodes(e, E) {
		return this.$doc?.querySelectorAll(e, E) || null;
	}
	$pos(e) {
		let E = this.state.doc.resolve(e), D = e > 0 && E.nodeAfter && !E.nodeAfter.isText && E.nodeAfter.isAtom ? E.nodeAfter : null;
		return new NodePos(E, this, !1, D);
	}
	get $doc() {
		return this.$pos(0);
	}
};
function markInputRule(e) {
	return new InputRule({
		find: e.find,
		handler: ({ state: E, range: D, match: O }) => {
			let k = callOrReturn(e.getAttributes, void 0, O);
			if (k === !1 || k === null) return null;
			let { tr: A } = E, j = O[O.length - 1], M = O[0];
			if (j) {
				let O = M.search(/\S/), N = D.from + M.indexOf(j), P = N + j.length;
				if (getMarksBetween(D.from, D.to, E.doc).filter((E) => E.mark.type.excluded.find((D) => D === e.type && D !== E.mark.type)).filter((e) => e.to > N).length) return null;
				P < D.to && A.delete(P, D.to), N > D.from && A.delete(D.from + O, N);
				let F = D.from + O + j.length;
				A.addMark(D.from + O, F, e.type.create(k || {})), A.removeStoredMark(e.type);
			}
		},
		undoable: e.undoable
	});
}
function nodeInputRule(e) {
	return new InputRule({
		find: e.find,
		handler: ({ state: E, range: D, match: O }) => {
			let k = callOrReturn(e.getAttributes, void 0, O) || {}, { tr: A } = E, j = D.from, M = D.to, N = e.type.create(k);
			if (O[1]) {
				let e = j + O[0].lastIndexOf(O[1]);
				e > M ? e = M : M = e + O[1].length;
				let E = O[0][O[0].length - 1];
				A.insertText(E, j + O[0].length - 1), A.replaceWith(e, M, N);
			} else if (O[0]) {
				let E = e.type.isInline ? j : j - 1;
				A.insert(E, e.type.create(k)).delete(A.mapping.map(j), A.mapping.map(M));
			}
			A.scrollIntoView();
		},
		undoable: e.undoable
	});
}
function textblockTypeInputRule(e) {
	return new InputRule({
		find: e.find,
		handler: ({ state: E, range: D, match: O }) => {
			let k = E.doc.resolve(D.from), A = callOrReturn(e.getAttributes, void 0, O) || {};
			if (!k.node(-1).canReplaceWith(k.index(-1), k.indexAfter(-1), e.type)) return null;
			E.tr.delete(D.from, D.to).setBlockType(D.from, D.from, e.type, A);
		},
		undoable: e.undoable
	});
}
function wrappingInputRule(e) {
	return new InputRule({
		find: e.find,
		handler: ({ state: E, range: D, match: O, chain: k }) => {
			let A = callOrReturn(e.getAttributes, void 0, O) || {}, j = E.tr.delete(D.from, D.to), M = j.doc.resolve(D.from).blockRange(), N = M && findWrapping(M, e.type, A);
			if (!N) return null;
			if (j.wrap(M, N), e.keepMarks && e.editor) {
				let { selection: D, storedMarks: O } = E, { splittableMarks: k } = e.editor.extensionManager, A = O || D.$to.parentOffset && D.$from.marks();
				if (A) {
					let e = A.filter((e) => k.includes(e.type.name));
					j.ensureMarks(e);
				}
			}
			if (e.keepAttributes) {
				let E = e.type.name === "bulletList" || e.type.name === "orderedList" ? "listItem" : "taskList";
				k().updateAttributes(E, A).run();
			}
			let P = j.doc.resolve(D.from - 1).nodeBefore;
			P && P.type === e.type && canJoin(j.doc, D.from - 1) && (!e.joinPredicate || e.joinPredicate(O, P)) && j.join(D.from - 1);
		},
		undoable: e.undoable
	});
}
var isTouchEvent = (e) => "touches" in e, ResizableNodeView = class {
	constructor(e) {
		var E;
		this.directions = [
			"bottom-left",
			"bottom-right",
			"top-left",
			"top-right"
		], this.minSize = {
			height: 8,
			width: 8
		}, this.preserveAspectRatio = !1, this.classNames = {
			container: "",
			wrapper: "",
			handle: "",
			resizing: ""
		}, this.initialWidth = 0, this.initialHeight = 0, this.aspectRatio = 1, this.isResizing = !1, this.activeHandle = null, this.startX = 0, this.startY = 0, this.startWidth = 0, this.startHeight = 0, this.isShiftKeyPressed = !1, this.lastEditableState = void 0, this.handleMap = /* @__PURE__ */ new Map(), this.handleMouseMove = (e) => {
			if (!this.isResizing || !this.activeHandle) return;
			let E = e.clientX - this.startX, D = e.clientY - this.startY;
			this.handleResize(E, D);
		}, this.handleTouchMove = (e) => {
			if (!this.isResizing || !this.activeHandle) return;
			let E = e.touches[0];
			if (!E) return;
			let D = E.clientX - this.startX, O = E.clientY - this.startY;
			this.handleResize(D, O);
		}, this.handleMouseUp = () => {
			if (!this.isResizing) return;
			let e = this.element.offsetWidth, E = this.element.offsetHeight;
			this.onCommit(e, E), this.isResizing = !1, this.activeHandle = null, this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
		}, this.handleKeyDown = (e) => {
			e.key === "Shift" && (this.isShiftKeyPressed = !0);
		}, this.handleKeyUp = (e) => {
			e.key === "Shift" && (this.isShiftKeyPressed = !1);
		}, this.node = e.node, this.editor = e.editor, this.element = e.element, this.element.draggable = !1, this.contentElement = e.contentElement, this.getPos = e.getPos, this.onResize = e.onResize, this.onCommit = e.onCommit, this.onUpdate = e.onUpdate, e.options?.min && (this.minSize = {
			...this.minSize,
			...e.options.min
		}), e.options?.max && (this.maxSize = e.options.max), !(e == null || (E = e.options) == null) && E.directions && (this.directions = e.options.directions), e.options?.preserveAspectRatio && (this.preserveAspectRatio = e.options.preserveAspectRatio), e.options?.className && (this.classNames = {
			container: e.options.className.container || "",
			wrapper: e.options.className.wrapper || "",
			handle: e.options.className.handle || "",
			resizing: e.options.className.resizing || ""
		}), e.options?.createCustomHandle && (this.createCustomHandle = e.options.createCustomHandle), this.wrapper = this.createWrapper(), this.container = this.createContainer(), this.applyInitialSize(), this.attachHandles(), this.editor.on("update", this.handleEditorUpdate.bind(this));
	}
	get dom() {
		return this.container;
	}
	get contentDOM() {
		return this.contentElement ?? null;
	}
	handleEditorUpdate() {
		let e = this.editor.isEditable;
		e !== this.lastEditableState && (this.lastEditableState = e, e ? e && this.handleMap.size === 0 && this.attachHandles() : this.removeHandles());
	}
	update(e, E, D) {
		return e.type === this.node.type ? (this.node = e, this.onUpdate ? this.onUpdate(e, E, D) : !0) : !1;
	}
	destroy() {
		this.isResizing && (this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp), this.isResizing = !1, this.activeHandle = null), this.editor.off("update", this.handleEditorUpdate.bind(this)), this.container.remove();
	}
	createContainer() {
		let e = document.createElement("div");
		return e.dataset.resizeContainer = "", e.dataset.node = this.node.type.name, e.style.display = this.node.type.isInline ? "inline-flex" : "flex", this.classNames.container && (e.className = this.classNames.container), e.appendChild(this.wrapper), e;
	}
	createWrapper() {
		let e = document.createElement("div");
		return e.style.position = "relative", e.style.display = "block", e.dataset.resizeWrapper = "", this.classNames.wrapper && (e.className = this.classNames.wrapper), e.appendChild(this.element), e;
	}
	createHandle(e) {
		let E = document.createElement("div");
		return E.dataset.resizeHandle = e, E.style.position = "absolute", this.classNames.handle && (E.className = this.classNames.handle), E;
	}
	positionHandle(e, E) {
		let D = E.includes("top"), O = E.includes("bottom"), k = E.includes("left"), A = E.includes("right");
		D && (e.style.top = "0"), O && (e.style.bottom = "0"), k && (e.style.left = "0"), A && (e.style.right = "0"), (E === "top" || E === "bottom") && (e.style.left = "0", e.style.right = "0"), (E === "left" || E === "right") && (e.style.top = "0", e.style.bottom = "0");
	}
	attachHandles() {
		this.directions.forEach((e) => {
			let E;
			E = this.createCustomHandle ? this.createCustomHandle(e) : this.createHandle(e), E instanceof HTMLElement || (console.warn(`[ResizableNodeView] createCustomHandle("${e}") did not return an HTMLElement. Falling back to default handle.`), E = this.createHandle(e)), this.createCustomHandle || this.positionHandle(E, e), E.addEventListener("mousedown", (E) => this.handleResizeStart(E, e)), E.addEventListener("touchstart", (E) => this.handleResizeStart(E, e)), this.handleMap.set(e, E), this.wrapper.appendChild(E);
		});
	}
	removeHandles() {
		this.handleMap.forEach((e) => e.remove()), this.handleMap.clear();
	}
	applyInitialSize() {
		let e = this.node.attrs.width, E = this.node.attrs.height;
		e ? (this.element.style.width = `${e}px`, this.initialWidth = e) : this.initialWidth = this.element.offsetWidth, E ? (this.element.style.height = `${E}px`, this.initialHeight = E) : this.initialHeight = this.element.offsetHeight, this.initialWidth > 0 && this.initialHeight > 0 && (this.aspectRatio = this.initialWidth / this.initialHeight);
	}
	handleResizeStart(e, E) {
		e.preventDefault(), e.stopPropagation(), this.isResizing = !0, this.activeHandle = E, isTouchEvent(e) ? (this.startX = e.touches[0].clientX, this.startY = e.touches[0].clientY) : (this.startX = e.clientX, this.startY = e.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
	}
	handleResize(e, E) {
		if (!this.activeHandle) return;
		let D = this.preserveAspectRatio || this.isShiftKeyPressed, { width: O, height: k } = this.calculateNewDimensions(this.activeHandle, e, E), A = this.applyConstraints(O, k, D);
		this.element.style.width = `${A.width}px`, this.element.style.height = `${A.height}px`, this.onResize && this.onResize(A.width, A.height);
	}
	calculateNewDimensions(e, E, D) {
		let O = this.startWidth, k = this.startHeight, A = e.includes("right"), j = e.includes("left"), M = e.includes("bottom"), N = e.includes("top");
		return A ? O = this.startWidth + E : j && (O = this.startWidth - E), M ? k = this.startHeight + D : N && (k = this.startHeight - D), (e === "right" || e === "left") && (O = this.startWidth + (A ? E : -E)), (e === "top" || e === "bottom") && (k = this.startHeight + (M ? D : -D)), this.preserveAspectRatio || this.isShiftKeyPressed ? this.applyAspectRatio(O, k, e) : {
			width: O,
			height: k
		};
	}
	applyConstraints(e, E, D) {
		if (!D) {
			let D = Math.max(this.minSize.width, e), O = Math.max(this.minSize.height, E);
			return this.maxSize?.width && (D = Math.min(this.maxSize.width, D)), this.maxSize?.height && (O = Math.min(this.maxSize.height, O)), {
				width: D,
				height: O
			};
		}
		let O = e, k = E;
		return O < this.minSize.width && (O = this.minSize.width, k = O / this.aspectRatio), k < this.minSize.height && (k = this.minSize.height, O = k * this.aspectRatio), this.maxSize?.width && O > this.maxSize.width && (O = this.maxSize.width, k = O / this.aspectRatio), this.maxSize?.height && k > this.maxSize.height && (k = this.maxSize.height, O = k * this.aspectRatio), {
			width: O,
			height: k
		};
	}
	applyAspectRatio(e, E, D) {
		return D === "left" || D === "right" ? {
			width: e,
			height: e / this.aspectRatio
		} : D === "top" || D === "bottom" ? {
			width: E * this.aspectRatio,
			height: E
		} : {
			width: e,
			height: e / this.aspectRatio
		};
	}
}, Node = class e extends Extendable {
	constructor(...e) {
		super(...e), this.type = "node";
	}
	static create(E = {}) {
		return new e(typeof E == "function" ? E() : E);
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let E = typeof e == "function" ? e() : e;
		return super.extend(E);
	}
}, NodeView = class {
	constructor(e, E, D) {
		this.isDragging = !1, this.component = e, this.editor = E.editor, this.options = {
			stopEvent: null,
			ignoreMutation: null,
			...D
		}, this.extension = E.extension, this.node = E.node, this.decorations = E.decorations, this.innerDecorations = E.innerDecorations, this.view = E.view, this.HTMLAttributes = E.HTMLAttributes, this.getPos = () => {
			try {
				return E.getPos();
			} catch {
				return;
			}
		}, this.mount();
	}
	mount() {}
	get dom() {
		return this.editor.view.dom;
	}
	get contentDOM() {
		return null;
	}
	onDragStart(e) {
		let { view: E } = this.editor, D = e.target, O = D.nodeType === 3 ? D.parentElement?.closest("[data-drag-handle]") : D.closest("[data-drag-handle]");
		if (!this.dom || this.contentDOM?.contains(D) || !O) return;
		let k = 0, A = 0;
		if (this.dom !== O) {
			let E = this.dom.getBoundingClientRect(), D = O.getBoundingClientRect(), j = e.offsetX ?? e.nativeEvent?.offsetX, M = e.offsetY ?? e.nativeEvent?.offsetY;
			k = D.x - E.x + j, A = D.y - E.y + M;
		}
		let j = this.dom.cloneNode(!0);
		try {
			let e = this.dom.getBoundingClientRect();
			j.style.width = `${Math.round(e.width)}px`, j.style.height = `${Math.round(e.height)}px`, j.style.boxSizing = "border-box", j.style.pointerEvents = "none";
		} catch {}
		let M = null;
		try {
			var N;
			M = document.createElement("div"), M.style.position = "absolute", M.style.top = "-9999px", M.style.left = "-9999px", M.style.pointerEvents = "none", M.appendChild(j), document.body.appendChild(M), (N = e.dataTransfer) == null || N.setDragImage(j, k, A);
		} finally {
			M && setTimeout(() => {
				try {
					M?.remove();
				} catch {}
			}, 0);
		}
		let P = this.getPos();
		if (typeof P != "number") return;
		let F = NodeSelection.create(E.state.doc, P), I = E.state.tr.setSelection(F);
		E.dispatch(I);
	}
	stopEvent(e) {
		if (!this.dom) return !1;
		if (typeof this.options.stopEvent == "function") return this.options.stopEvent({ event: e });
		let E = e.target;
		if (!(this.dom.contains(E) && !this.contentDOM?.contains(E))) return !1;
		let D = e.type.startsWith("drag"), O = e.type === "dragover" || e.type === "dragenter", k = e.type === "drop";
		if (([
			"INPUT",
			"BUTTON",
			"SELECT",
			"TEXTAREA"
		].includes(E.tagName) || E.isContentEditable) && !k && !D) return !0;
		let { isEditable: A } = this.editor, { isDragging: j } = this, M = !!this.node.type.spec.draggable, N = NodeSelection.isSelectable(this.node), P = e.type === "copy", F = e.type === "paste", I = e.type === "cut", L = e.type === "mousedown";
		if (!M && N && D && e.target === this.dom && e.preventDefault(), M && D && !j && e.target === this.dom) return e.preventDefault(), !1;
		if (M && A && !j && L) {
			let e = E.closest("[data-drag-handle]");
			e && (this.dom === e || this.dom.contains(e)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
				this.isDragging = !1;
			}, { once: !0 }), document.addEventListener("drop", () => {
				this.isDragging = !1;
			}, { once: !0 }), document.addEventListener("mouseup", () => {
				this.isDragging = !1;
			}, { once: !0 }));
		}
		return !(j || O || k || P || F || I || L && N);
	}
	ignoreMutation(e) {
		return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: e }) : this.node.isLeaf || this.node.isAtom ? !0 : e.type === "selection" || this.contentDOM.contains(e.target) && e.type === "childList" && (isiOS() || isAndroid()) && this.editor.isFocused && [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].every((e) => e.isContentEditable) ? !1 : this.contentDOM === e.target && e.type === "attributes" ? !0 : !this.contentDOM.contains(e.target);
	}
	updateAttributes(e) {
		this.editor.commands.command(({ tr: E }) => {
			let D = this.getPos();
			return typeof D == "number" ? (E.setNodeMarkup(D, void 0, {
				...this.node.attrs,
				...e
			}), !0) : !1;
		});
	}
	deleteNode() {
		let e = this.getPos();
		if (typeof e != "number") return;
		let E = e + this.node.nodeSize;
		this.editor.commands.deleteRange({
			from: e,
			to: E
		});
	}
};
function markPasteRule(e) {
	return new PasteRule({
		find: e.find,
		handler: ({ state: E, range: D, match: O, pasteEvent: k }) => {
			let A = callOrReturn(e.getAttributes, void 0, O, k);
			if (A === !1 || A === null) return null;
			let { tr: j } = E, M = O[O.length - 1], N = O[0], P = D.to;
			if (M) {
				let k = N.search(/\S/), F = D.from + N.indexOf(M), I = F + M.length;
				if (getMarksBetween(D.from, D.to, E.doc).filter((E) => E.mark.type.excluded.find((D) => D === e.type && D !== E.mark.type)).filter((e) => e.to > F).length) return null;
				I < D.to && j.delete(I, D.to), F > D.from && j.delete(D.from + k, F), P = D.from + k + M.length, j.addMark(D.from + k, P, e.type.create(A || {})), O.index !== void 0 && O.input !== void 0 && O.index + O[0].length >= O.input.length || j.removeStoredMark(e.type);
			}
		}
	});
}
var { getOwnPropertyNames, getOwnPropertySymbols } = Object, { hasOwnProperty } = Object.prototype;
function combineComparators(e, E) {
	return function(D, O, k) {
		return e(D, O, k) && E(D, O, k);
	};
}
function createIsCircular(e) {
	return function(E, D, O) {
		if (!E || !D || typeof E != "object" || typeof D != "object") return e(E, D, O);
		let { cache: k } = O, A = k.get(E), j = k.get(D);
		if (A && j) return A === D && j === E;
		k.set(E, D), k.set(D, E);
		let M = e(E, D, O);
		return k.delete(E), k.delete(D), M;
	};
}
function getShortTag(e) {
	return e?.[Symbol.toStringTag];
}
function getStrictProperties(e) {
	return getOwnPropertyNames(e).concat(getOwnPropertySymbols(e));
}
var hasOwn = Object.hasOwn || ((e, E) => hasOwnProperty.call(e, E));
function sameValueZeroEqual(e, E) {
	return e === E || !e && !E && e !== e && E !== E;
}
var PREACT_VNODE = "__v", PREACT_OWNER = "__o", REACT_OWNER = "_owner", { getOwnPropertyDescriptor, keys } = Object;
function areArrayBuffersEqual(e, E) {
	return e.byteLength === E.byteLength && areTypedArraysEqual(new Uint8Array(e), new Uint8Array(E));
}
function areArraysEqual(e, E, D) {
	let O = e.length;
	if (E.length !== O) return !1;
	for (; O-- > 0;) if (!D.equals(e[O], E[O], O, O, e, E, D)) return !1;
	return !0;
}
function areDataViewsEqual(e, E) {
	return e.byteLength === E.byteLength && areTypedArraysEqual(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(E.buffer, E.byteOffset, E.byteLength));
}
function areDatesEqual(e, E) {
	return sameValueZeroEqual(e.getTime(), E.getTime());
}
function areErrorsEqual(e, E) {
	return e.name === E.name && e.message === E.message && e.cause === E.cause && e.stack === E.stack;
}
function areFunctionsEqual(e, E) {
	return e === E;
}
function areMapsEqual(e, E, D) {
	let O = e.size;
	if (O !== E.size) return !1;
	if (!O) return !0;
	let k = Array(O), A = e.entries(), j, M, N = 0;
	for (; (j = A.next()) && !j.done;) {
		let O = E.entries(), A = !1, P = 0;
		for (; (M = O.next()) && !M.done;) {
			if (k[P]) {
				P++;
				continue;
			}
			let O = j.value, F = M.value;
			if (D.equals(O[0], F[0], N, P, e, E, D) && D.equals(O[1], F[1], O[0], F[0], e, E, D)) {
				A = k[P] = !0;
				break;
			}
			P++;
		}
		if (!A) return !1;
		N++;
	}
	return !0;
}
var areNumbersEqual = sameValueZeroEqual;
function areObjectsEqual(e, E, D) {
	let O = keys(e), k = O.length;
	if (keys(E).length !== k) return !1;
	for (; k-- > 0;) if (!isPropertyEqual(e, E, D, O[k])) return !1;
	return !0;
}
function areObjectsEqualStrict(e, E, D) {
	let O = getStrictProperties(e), k = O.length;
	if (getStrictProperties(E).length !== k) return !1;
	let A, j, M;
	for (; k-- > 0;) if (A = O[k], !isPropertyEqual(e, E, D, A) || (j = getOwnPropertyDescriptor(e, A), M = getOwnPropertyDescriptor(E, A), (j || M) && (!j || !M || j.configurable !== M.configurable || j.enumerable !== M.enumerable || j.writable !== M.writable))) return !1;
	return !0;
}
function arePrimitiveWrappersEqual(e, E) {
	return sameValueZeroEqual(e.valueOf(), E.valueOf());
}
function areRegExpsEqual(e, E) {
	return e.source === E.source && e.flags === E.flags;
}
function areSetsEqual(e, E, D) {
	let O = e.size;
	if (O !== E.size) return !1;
	if (!O) return !0;
	let k = Array(O), A = e.values(), j, M;
	for (; (j = A.next()) && !j.done;) {
		let O = E.values(), A = !1, N = 0;
		for (; (M = O.next()) && !M.done;) {
			if (!k[N] && D.equals(j.value, M.value, j.value, M.value, e, E, D)) {
				A = k[N] = !0;
				break;
			}
			N++;
		}
		if (!A) return !1;
	}
	return !0;
}
function areTypedArraysEqual(e, E) {
	let D = e.byteLength;
	if (E.byteLength !== D || e.byteOffset !== E.byteOffset) return !1;
	for (; D-- > 0;) if (e[D] !== E[D]) return !1;
	return !0;
}
function areUrlsEqual(e, E) {
	return e.hostname === E.hostname && e.pathname === E.pathname && e.protocol === E.protocol && e.port === E.port && e.hash === E.hash && e.username === E.username && e.password === E.password;
}
function isPropertyEqual(e, E, D, O) {
	return (O === REACT_OWNER || O === PREACT_OWNER || O === PREACT_VNODE) && (e.$$typeof || E.$$typeof) ? !0 : hasOwn(E, O) && D.equals(e[O], E[O], O, O, e, E, D);
}
var ARRAY_BUFFER_TAG = "[object ArrayBuffer]", ARGUMENTS_TAG = "[object Arguments]", BOOLEAN_TAG = "[object Boolean]", DATA_VIEW_TAG = "[object DataView]", DATE_TAG = "[object Date]", ERROR_TAG = "[object Error]", MAP_TAG = "[object Map]", NUMBER_TAG = "[object Number]", OBJECT_TAG = "[object Object]", REG_EXP_TAG = "[object RegExp]", SET_TAG = "[object Set]", STRING_TAG = "[object String]", TYPED_ARRAY_TAGS = {
	"[object Int8Array]": !0,
	"[object Uint8Array]": !0,
	"[object Uint8ClampedArray]": !0,
	"[object Int16Array]": !0,
	"[object Uint16Array]": !0,
	"[object Int32Array]": !0,
	"[object Uint32Array]": !0,
	"[object Float16Array]": !0,
	"[object Float32Array]": !0,
	"[object Float64Array]": !0,
	"[object BigInt64Array]": !0,
	"[object BigUint64Array]": !0
}, URL_TAG = "[object URL]", toString = Object.prototype.toString;
function createEqualityComparator({ areArrayBuffersEqual: e, areArraysEqual: E, areDataViewsEqual: D, areDatesEqual: O, areErrorsEqual: k, areFunctionsEqual: A, areMapsEqual: j, areNumbersEqual: M, areObjectsEqual: N, arePrimitiveWrappersEqual: P, areRegExpsEqual: F, areSetsEqual: I, areTypedArraysEqual: L, areUrlsEqual: R, unknownTagComparators: z }) {
	return function(B, V, H) {
		if (B === V) return !0;
		if (B == null || V == null) return !1;
		let U = typeof B;
		if (U !== typeof V) return !1;
		if (U !== "object") return U === "number" ? M(B, V, H) : U === "function" ? A(B, V, H) : !1;
		let W = B.constructor;
		if (W !== V.constructor) return !1;
		if (W === Object) return N(B, V, H);
		if (Array.isArray(B)) return E(B, V, H);
		if (W === Date) return O(B, V, H);
		if (W === RegExp) return F(B, V, H);
		if (W === Map) return j(B, V, H);
		if (W === Set) return I(B, V, H);
		let G = toString.call(B);
		if (G === DATE_TAG) return O(B, V, H);
		if (G === REG_EXP_TAG) return F(B, V, H);
		if (G === MAP_TAG) return j(B, V, H);
		if (G === SET_TAG) return I(B, V, H);
		if (G === OBJECT_TAG) return typeof B.then != "function" && typeof V.then != "function" && N(B, V, H);
		if (G === URL_TAG) return R(B, V, H);
		if (G === ERROR_TAG) return k(B, V, H);
		if (G === ARGUMENTS_TAG) return N(B, V, H);
		if (TYPED_ARRAY_TAGS[G]) return L(B, V, H);
		if (G === ARRAY_BUFFER_TAG) return e(B, V, H);
		if (G === DATA_VIEW_TAG) return D(B, V, H);
		if (G === BOOLEAN_TAG || G === NUMBER_TAG || G === STRING_TAG) return P(B, V, H);
		if (z) {
			let e = z[G];
			if (!e) {
				let E = getShortTag(B);
				E && (e = z[E]);
			}
			if (e) return e(B, V, H);
		}
		return !1;
	};
}
function createEqualityComparatorConfig({ circular: e, createCustomConfig: E, strict: D }) {
	let O = {
		areArrayBuffersEqual,
		areArraysEqual: D ? areObjectsEqualStrict : areArraysEqual,
		areDataViewsEqual,
		areDatesEqual,
		areErrorsEqual,
		areFunctionsEqual,
		areMapsEqual: D ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
		areNumbersEqual,
		areObjectsEqual: D ? areObjectsEqualStrict : areObjectsEqual,
		arePrimitiveWrappersEqual,
		areRegExpsEqual,
		areSetsEqual: D ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
		areTypedArraysEqual: D ? combineComparators(areTypedArraysEqual, areObjectsEqualStrict) : areTypedArraysEqual,
		areUrlsEqual,
		unknownTagComparators: void 0
	};
	if (E && (O = Object.assign({}, O, E(O))), e) {
		let e = createIsCircular(O.areArraysEqual), E = createIsCircular(O.areMapsEqual), D = createIsCircular(O.areObjectsEqual), k = createIsCircular(O.areSetsEqual);
		O = Object.assign({}, O, {
			areArraysEqual: e,
			areMapsEqual: E,
			areObjectsEqual: D,
			areSetsEqual: k
		});
	}
	return O;
}
function createInternalEqualityComparator(e) {
	return function(E, D, O, k, A, j, M) {
		return e(E, D, M);
	};
}
function createIsEqual({ circular: e, comparator: E, createState: D, equals: O, strict: k }) {
	if (D) return function(A, j) {
		let { cache: M = e ? /* @__PURE__ */ new WeakMap() : void 0, meta: N } = D();
		return E(A, j, {
			cache: M,
			equals: O,
			meta: N,
			strict: k
		});
	};
	if (e) return function(e, D) {
		return E(e, D, {
			cache: /* @__PURE__ */ new WeakMap(),
			equals: O,
			meta: void 0,
			strict: k
		});
	};
	let A = {
		cache: void 0,
		equals: O,
		meta: void 0,
		strict: k
	};
	return function(e, D) {
		return E(e, D, A);
	};
}
var deepEqual = createCustomEqual();
createCustomEqual({ strict: !0 }), createCustomEqual({ circular: !0 }), createCustomEqual({
	circular: !0,
	strict: !0
}), createCustomEqual({ createInternalComparator: () => sameValueZeroEqual }), createCustomEqual({
	strict: !0,
	createInternalComparator: () => sameValueZeroEqual
}), createCustomEqual({
	circular: !0,
	createInternalComparator: () => sameValueZeroEqual
}), createCustomEqual({
	circular: !0,
	createInternalComparator: () => sameValueZeroEqual,
	strict: !0
});
function createCustomEqual(e = {}) {
	let { circular: E = !1, createInternalComparator: D, createState: O, strict: k = !1 } = e, A = createEqualityComparator(createEqualityComparatorConfig(e));
	return createIsEqual({
		circular: E,
		comparator: A,
		createState: O,
		equals: D ? D(A) : createInternalEqualityComparator(A),
		strict: k
	});
}
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_with_selector_production = /* @__PURE__ */ __commonJSMin(((e) => {
	var E = require_react(), O = require_shim();
	function k(e, E) {
		return e === E && (e !== 0 || 1 / e == 1 / E) || e !== e && E !== E;
	}
	var A = typeof Object.is == "function" ? Object.is : k, M = O.useSyncExternalStore, N = E.useRef, P = E.useEffect, F = E.useMemo, I = E.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, E, D, O, k) {
		var j = N(null);
		if (j.current === null) {
			var L = {
				hasValue: !1,
				value: null
			};
			j.current = L;
		} else L = j.current;
		j = F(function() {
			function e(e) {
				if (!j) {
					if (j = !0, M = e, e = O(e), k !== void 0 && L.hasValue) {
						var E = L.value;
						if (k(E, e)) return N = E;
					}
					return N = e;
				}
				if (E = N, A(M, e)) return E;
				var D = O(e);
				return k !== void 0 && k(E, D) ? (M = e, E) : (M = e, N = D);
			}
			var j = !1, M, N, P = D === void 0 ? null : D;
			return [function() {
				return e(E());
			}, P === null ? void 0 : function() {
				return e(P());
			}];
		}, [
			E,
			D,
			O,
			k
		]);
		var R = M(e, j[0], j[1]);
		return P(function() {
			L.hasValue = !0, L.value = R;
		}, [R]), I(R), R;
	};
})), require_with_selector_development = /* @__PURE__ */ __commonJSMin(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function E(e, E) {
			return e === E && (e !== 0 || 1 / e == 1 / E) || e !== e && E !== E;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var O = require_react(), k = require_shim(), A = typeof Object.is == "function" ? Object.is : E, M = k.useSyncExternalStore, N = O.useRef, P = O.useEffect, F = O.useMemo, I = O.useDebugValue;
		e.useSyncExternalStoreWithSelector = function(e, E, D, O, k) {
			var j = N(null);
			if (j.current === null) {
				var L = {
					hasValue: !1,
					value: null
				};
				j.current = L;
			} else L = j.current;
			j = F(function() {
				function e(e) {
					if (!j) {
						if (j = !0, M = e, e = O(e), k !== void 0 && L.hasValue) {
							var E = L.value;
							if (k(E, e)) return N = E;
						}
						return N = e;
					}
					if (E = N, A(M, e)) return E;
					var D = O(e);
					return k !== void 0 && k(E, D) ? (M = e, E) : (M = e, N = D);
				}
				var j = !1, M, N, P = D === void 0 ? null : D;
				return [function() {
					return e(E());
				}, P === null ? void 0 : function() {
					return e(P());
				}];
			}, [
				E,
				D,
				O,
				k
			]);
			var R = M(e, j[0], j[1]);
			return P(function() {
				L.hasValue = !0, L.value = R;
			}, [R]), I(R), R;
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), require_with_selector = /* @__PURE__ */ __commonJSMin(((e, E) => {
	process.env.NODE_ENV === "production" ? E.exports = require_with_selector_production() : E.exports = require_with_selector_development();
})), import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1), import_shim = require_shim(), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), import_with_selector = require_with_selector(), mergeRefs = (...e) => (E) => {
	e.forEach((e) => {
		typeof e == "function" ? e(E) : e && (e.current = E);
	});
}, Portals = ({ contentComponent: e }) => {
	let E = (0, import_shim.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getServerSnapshot);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: Object.values(E) });
};
function createContentComponent() {
	let e = /* @__PURE__ */ new Set(), E = {}, D = !1, O = () => {
		D || !e.size || (D = !0, queueMicrotask(() => {
			D = !1, e.forEach((e) => e());
		}));
	};
	return {
		subscribe(E) {
			return e.add(E), () => {
				e.delete(E);
			};
		},
		getSnapshot() {
			return E;
		},
		getServerSnapshot() {
			return E;
		},
		setRenderer(e, D) {
			E = {
				...E,
				[e]: import_react_dom.createPortal(D.reactElement, D.element, e)
			}, O();
		},
		removeRenderer(e) {
			let D = { ...E };
			delete D[e], E = D, O();
		}
	};
}
var PureEditorContent = class extends import_react.Component {
	constructor(e) {
		super(e), this.editorContentRef = import_react.createRef();
	}
	componentDidMount() {
		this.init();
	}
	componentDidUpdate() {
		this.init();
	}
	init() {
		let e = this.props.editor;
		if (e && !e.isDestroyed && e.view.dom?.parentNode) {
			if (e.contentComponent) return;
			let E = this.editorContentRef.current;
			E.append(...e.view.dom.parentNode.childNodes), e.setOptions({ element: E }), e.contentComponent = createContentComponent(), e.createNodeViews(), e.isEditorContentInitialized = !0, this.forceUpdate();
		}
	}
	componentWillUnmount() {
		let e = this.props.editor;
		if (e) {
			e.isEditorContentInitialized = !1, e.isDestroyed || e.view.setProps({ nodeViews: {} }), e.contentComponent = null;
			try {
				if (!e.view.dom?.parentNode) return;
				let E = document.createElement("div");
				E.append(...e.view.dom.parentNode.childNodes), e.setOptions({ element: E });
			} catch {}
		}
	}
	render() {
		let { editor: e, innerRef: E, ...D } = this.props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: mergeRefs(E, this.editorContentRef),
			...D
		}), e?.contentComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portals, { contentComponent: e.contentComponent })] });
	}
}, EditorContentWithKey = (0, import_react.forwardRef)((e, E) => {
	let D = import_react.useMemo(() => Math.floor(Math.random() * 4294967295).toString(), [e.editor]);
	return import_react.createElement(PureEditorContent, {
		key: D,
		innerRef: E,
		...e
	});
}), EditorContent = import_react.memo(EditorContentWithKey), useIsomorphicLayoutEffect = typeof window < "u" ? import_react.useLayoutEffect : import_react.useEffect, EditorStateManager = class {
	constructor(e) {
		this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = /* @__PURE__ */ new Set(), this.editor = e, this.lastSnapshot = {
			editor: e,
			transactionNumber: 0
		}, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
	}
	getSnapshot() {
		return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = {
			editor: this.editor,
			transactionNumber: this.transactionNumber
		}, this.lastSnapshot);
	}
	getServerSnapshot() {
		return {
			editor: null,
			transactionNumber: 0
		};
	}
	subscribe(e) {
		return this.subscribers.add(e), () => {
			this.subscribers.delete(e);
		};
	}
	watch(e) {
		if (this.editor = e, this.editor) {
			let e, E = (E) => {
				E?.transaction !== void 0 && E.transaction === e || (e = E?.transaction, this.transactionNumber += 1, this.subscribers.forEach((e) => e()));
			}, D = this.editor;
			return D.on("transaction", E), D.on("update", E), () => {
				D.off("transaction", E), D.off("update", E);
			};
		}
	}
};
function useEditorState(e) {
	let [E] = (0, import_react.useState)(() => new EditorStateManager(e.editor)), D = (0, import_with_selector.useSyncExternalStoreWithSelector)(E.subscribe, E.getSnapshot, E.getServerSnapshot, e.selector, e.equalityFn ?? deepEqual);
	return useIsomorphicLayoutEffect(() => E.watch(e.editor), [e.editor, E]), (0, import_react.useDebugValue)(D), D;
}
var isDev = process.env.NODE_ENV !== "production", isSSR = typeof window > "u", isNext = isSSR || !!(typeof window < "u" && window.next), EditorInstanceManager = class e {
	constructor(e) {
		this.editor = null, this.subscriptions = /* @__PURE__ */ new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = /* @__PURE__ */ new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
	}
	setEditor(e) {
		this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((e) => e());
	}
	getInitialEditor() {
		let e = this.options.current.immediatelyRender, E = e ?? !0;
		return isSSR ? (E && isDev && console.warn("SSR detected. `immediatelyRender` has been set to false to avoid hydration mismatches"), E = !1) : isNext && e === void 0 && (E = !1, isDev && console.warn("Next.js detected. `immediatelyRender` defaults to false to avoid hydration mismatches. Pass `immediatelyRender: true` explicitly if you are rendering the editor only on the client.")), E ? this.createEditor() : null;
	}
	createEditor() {
		return new Editor({
			...this.options.current,
			onBeforeCreate: (...e) => {
				var E;
				return (E = this.options.current).onBeforeCreate?.call(E, ...e);
			},
			onBlur: (...e) => {
				var E;
				return (E = this.options.current).onBlur?.call(E, ...e);
			},
			onCreate: (...e) => {
				var E;
				return (E = this.options.current).onCreate?.call(E, ...e);
			},
			onDestroy: (...e) => {
				var E;
				return (E = this.options.current).onDestroy?.call(E, ...e);
			},
			onFocus: (...e) => {
				var E;
				return (E = this.options.current).onFocus?.call(E, ...e);
			},
			onSelectionUpdate: (...e) => {
				var E;
				return (E = this.options.current).onSelectionUpdate?.call(E, ...e);
			},
			onTransaction: (...e) => {
				var E;
				return (E = this.options.current).onTransaction?.call(E, ...e);
			},
			onUpdate: (...e) => {
				var E;
				return (E = this.options.current).onUpdate?.call(E, ...e);
			},
			onContentError: (...e) => {
				var E;
				return (E = this.options.current).onContentError?.call(E, ...e);
			},
			onDrop: (...e) => {
				var E;
				return (E = this.options.current).onDrop?.call(E, ...e);
			},
			onPaste: (...e) => {
				var E;
				return (E = this.options.current).onPaste?.call(E, ...e);
			},
			onDelete: (...e) => {
				var E;
				return (E = this.options.current).onDelete?.call(E, ...e);
			},
			onMount: (...e) => {
				var E;
				return (E = this.options.current).onMount?.call(E, ...e);
			},
			onUnmount: (...e) => {
				var E;
				return (E = this.options.current).onUnmount?.call(E, ...e);
			}
		});
	}
	getEditor() {
		return this.editor;
	}
	getServerSnapshot() {
		return null;
	}
	subscribe(e) {
		return this.subscriptions.add(e), () => {
			this.subscriptions.delete(e);
		};
	}
	static compareOptions(e, E) {
		return Object.keys(e).every((D) => [
			"onCreate",
			"onBeforeCreate",
			"onDestroy",
			"onUpdate",
			"onTransaction",
			"onFocus",
			"onBlur",
			"onSelectionUpdate",
			"onContentError",
			"onDrop",
			"onPaste"
		].includes(D) ? !0 : D === "extensions" && e.extensions && E.extensions ? e.extensions.length === E.extensions.length ? e.extensions.every((e, D) => e === E.extensions?.[D]) : !1 : e[D] === E[D]);
	}
	onRender(E) {
		return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && E.length === 0 ? e.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
			...this.options.current,
			editable: this.editor.isEditable
		}) : this.refreshEditorInstance(E), () => {
			this.isComponentMounted = !1, this.scheduleDestroy();
		});
	}
	refreshEditorInstance(e) {
		if (this.editor && !this.editor.isDestroyed) {
			if (this.previousDeps === null) {
				this.previousDeps = e;
				return;
			}
			if (this.previousDeps.length === e.length && this.previousDeps.every((E, D) => E === e[D])) return;
		}
		this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = e;
	}
	scheduleDestroy() {
		let e = this.instanceId, E = this.editor;
		this.scheduledDestructionTimeout = setTimeout(() => {
			if (this.isComponentMounted && this.instanceId === e) {
				E && E.setOptions(this.options.current);
				return;
			}
			E && !E.isDestroyed && (E.destroy(), this.instanceId === e && this.setEditor(null));
		}, 1);
	}
};
function useEditor(e = {}, E = []) {
	let D = (0, import_react.useRef)(e);
	D.current = e;
	let [O] = (0, import_react.useState)(() => new EditorInstanceManager(D)), k = (0, import_shim.useSyncExternalStore)(O.subscribe, O.getEditor, O.getServerSnapshot);
	return (0, import_react.useDebugValue)(k), (0, import_react.useEffect)(O.onRender(E)), useEditorState({
		editor: k,
		selector: ({ transactionNumber: E }) => e.shouldRerenderOnTransaction === !1 || e.shouldRerenderOnTransaction === void 0 ? null : e.immediatelyRender && E === 0 ? 0 : E + 1
	}), k;
}
var EditorContext = (0, import_react.createContext)({ editor: null });
EditorContext.Consumer;
var ReactNodeViewContext = (0, import_react.createContext)({
	onDragStart: () => {},
	nodeViewContentChildren: void 0,
	nodeViewContentRef: () => {}
}), useReactNodeView = () => (0, import_react.useContext)(ReactNodeViewContext);
function NodeViewContent({ as: e = "div", ...E }) {
	let { nodeViewContentRef: D, nodeViewContentChildren: O } = useReactNodeView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, {
		...E,
		ref: D,
		"data-node-view-content": "",
		style: {
			whiteSpace: "pre-wrap",
			...E.style
		},
		children: O
	});
}
var NodeViewWrapper = import_react.forwardRef((e, E) => {
	let { onDragStart: D } = useReactNodeView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.as || "div", {
		...e,
		ref: E,
		"data-node-view-wrapper": "",
		onDragStart: D,
		style: {
			whiteSpace: "normal",
			...e.style
		}
	});
});
function isClassComponent(e) {
	return !!(typeof e == "function" && e.prototype && e.prototype.isReactComponent);
}
function isForwardRefComponent(e) {
	return !!(typeof e == "object" && e.$$typeof && (e.$$typeof.toString() === "Symbol(react.forward_ref)" || e.$$typeof.description === "react.forward_ref"));
}
function isMemoComponent(e) {
	return !!(typeof e == "object" && e.$$typeof && (e.$$typeof.toString() === "Symbol(react.memo)" || e.$$typeof.description === "react.memo"));
}
function canReceiveRef(e) {
	if (isClassComponent(e) || isForwardRefComponent(e)) return !0;
	if (isMemoComponent(e)) {
		let E = e.type;
		if (E) return isClassComponent(E) || isForwardRefComponent(E);
	}
	return !1;
}
function isReact19Plus() {
	try {
		if (import_react.version) return parseInt(import_react.version.split(".")[0], 10) >= 19;
	} catch {}
	return !1;
}
var ReactRenderer = class {
	constructor(e, { editor: E, props: D = {}, as: O = "div", className: k = "" }) {
		this.ref = null, this.destroyed = !1, this.id = Math.floor(Math.random() * 4294967295).toString(), this.component = e, this.editor = E, this.props = D, this.element = document.createElement(O), this.element.classList.add("react-renderer"), k && this.element.classList.add(...k.split(" ")), this.editor.isEditorContentInitialized ? (0, import_react_dom.flushSync)(() => {
			this.render();
		}) : queueMicrotask(() => {
			this.destroyed || this.render();
		});
	}
	render() {
		var e;
		if (this.destroyed) return;
		let E = this.component, D = this.props, O = this.editor, k = isReact19Plus(), A = canReceiveRef(E), j = { ...D };
		j.ref && !(k || A) && delete j.ref, !j.ref && (k || A) && (j.ref = (e) => {
			this.ref = e;
		}), this.reactElement = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(E, { ...j }), O == null || (e = O.contentComponent) == null || e.setRenderer(this.id, this);
	}
	updateProps(e = {}) {
		if (this.destroyed) return;
		let E = !1, D = Object.keys(e);
		for (let O = 0; O < D.length; O += 1) {
			let k = D[O];
			if (e[k] !== this.props[k]) {
				E = !0;
				break;
			}
		}
		E && (this.props = {
			...this.props,
			...e
		}, this.render());
	}
	destroy() {
		var e;
		this.destroyed = !0;
		let E = this.editor;
		E == null || (e = E.contentComponent) == null || e.removeRenderer(this.id);
		try {
			this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
		} catch {}
	}
	updateAttributes(e) {
		Object.keys(e).forEach((E) => {
			this.element.setAttribute(E, e[E]);
		});
	}
};
import_react.createContext({ markViewContentRef: () => {} });
function captureDOMSelection(e) {
	var E;
	let D = e.getRootNode(), O = typeof D.getSelection == "function" ? D.getSelection() : (E = e.ownerDocument) == null || (E = E.defaultView) == null ? void 0 : E.getSelection();
	if (!O || O.rangeCount === 0) return null;
	let { anchorNode: k, anchorOffset: A, focusNode: j, focusOffset: M } = O;
	return !k || !j || !e.contains(k) || !e.contains(j) ? null : () => {
		try {
			O.setBaseAndExtent(k, A, j, M);
		} catch {}
	};
}
function isSameAncestor(e, E, D) {
	return e.node(D) === E.node(D) && e.before(D) === E.before(D);
}
function getTextSelectionAncestorPositions(e) {
	if (!isTextSelection(e)) return [];
	let { $from: E, $to: D } = e, O = [], k = Math.min(E.depth, D.depth);
	for (let e = 1; e <= k && isSameAncestor(E, D, e); e += 1) O.push(E.before(e));
	return O;
}
var ReactNodeViewSelectionTracker = class {
	constructor(e) {
		this.views = /* @__PURE__ */ new WeakMap(), this.viewCount = 0, this.insideViews = /* @__PURE__ */ new Set(), this.syncQueued = !1, this.scheduleSync = () => {
			this.syncQueued || (this.syncQueued = !0, queueMicrotask(() => {
				this.syncQueued = !1, this.sync();
			}));
		}, this.handleTransaction = () => this.scheduleSync(), this.editor = e;
	}
	register(e) {
		this.viewCount === 0 && this.editor.on("transaction", this.handleTransaction), this.views.set(e.dom, e), this.viewCount += 1, this.scheduleSync();
	}
	unregister(e) {
		this.views.delete(e.dom), --this.viewCount, this.insideViews.delete(e), this.viewCount === 0 && this.editor.off("transaction", this.handleTransaction);
	}
	sync() {
		if (this.viewCount === 0 || this.editor.isDestroyed) return;
		let e = this.findInsideViews();
		this.updateViews(this.insideViews, e, !1), this.updateViews(e, this.insideViews, !0), this.insideViews = e;
	}
	updateViews(e, E, D) {
		for (let O of e) E.has(O) || O.setSelectionInside(D);
	}
	findInsideViews() {
		let e = /* @__PURE__ */ new Set();
		for (let E of getTextSelectionAncestorPositions(this.editor.state.selection)) {
			let D = this.editor.view.nodeDOM(E), O = D ? this.views.get(D) : void 0;
			O && e.add(O);
		}
		return e;
	}
}, trackers = /* @__PURE__ */ new WeakMap();
function getReactNodeViewSelectionTracker(e) {
	let E = trackers.get(e);
	return E || (E = new ReactNodeViewSelectionTracker(e), trackers.set(e, E)), E;
}
var ReactNodeView = class extends NodeView {
	constructor(e, E, D) {
		if (super(e, E, D), this.nodeSelected = !1, this.handlePositionUpdate = () => {
			let e = this.getPos();
			typeof e != "number" || e === this.currentPos || (this.currentPos = e, this.renderer.updateProps({ getPos: () => this.getPos() }), typeof this.options.attrs == "function" && this.updateElementAttributes());
		}, this.cachedExtensionWithSyncedStorage = null, !this.node.isLeaf) {
			this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement.dataset.nodeViewContentReact = "", this.contentDOMElement.dataset.nodeViewWrapper = "", this.contentDOMElement.style.whiteSpace = "inherit";
			let e = this.dom.querySelector("[data-node-view-content]");
			e ? e.appendChild(this.contentDOMElement) : this.dom.appendChild(this.contentDOMElement);
		}
		this.options.trackNodeViewPosition && this.editor.on("update", this.handlePositionUpdate);
	}
	get extensionWithSyncedStorage() {
		if (!this.cachedExtensionWithSyncedStorage) {
			let e = this.editor, E = this.extension;
			this.cachedExtensionWithSyncedStorage = new Proxy(E, { get(D, O, k) {
				return O === "storage" ? e.storage[E.name] ?? {} : Reflect.get(D, O, k);
			} });
		}
		return this.cachedExtensionWithSyncedStorage;
	}
	mount() {
		let e = {
			editor: this.editor,
			node: this.node,
			decorations: this.decorations,
			innerDecorations: this.innerDecorations,
			view: this.view,
			selected: !1,
			selectionInside: !1,
			extension: this.extensionWithSyncedStorage,
			HTMLAttributes: this.HTMLAttributes,
			getPos: () => this.getPos(),
			updateAttributes: (e = {}) => this.updateAttributes(e),
			deleteNode: () => this.deleteNode(),
			ref: (0, import_react.createRef)()
		};
		if (!this.component.displayName) {
			let e = (e) => e.charAt(0).toUpperCase() + e.substring(1);
			this.component.displayName = e(this.extension.name);
		}
		let E = {
			onDragStart: this.onDragStart.bind(this),
			nodeViewContentRef: (e) => {
				if (e && this.contentDOMElement && e.firstChild !== this.contentDOMElement) {
					e.hasAttribute("data-node-view-wrapper") && e.removeAttribute("data-node-view-wrapper");
					let E = captureDOMSelection(this.contentDOMElement);
					e.appendChild(this.contentDOMElement), E?.();
				}
			}
		}, D = this.component, O = (0, import_react.memo)((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactNodeViewContext.Provider, {
			value: E,
			children: (0, import_react.createElement)(D, e)
		}));
		O.displayName = "ReactNodeView";
		let k = this.node.isInline ? "span" : "div";
		this.options.as && (k = this.options.as);
		let { className: A = "" } = this.options;
		this.renderer = new ReactRenderer(O, {
			editor: this.editor,
			props: e,
			as: k,
			className: `node-${this.node.type.name} ${A}`.trim()
		}), getReactNodeViewSelectionTracker(this.editor).register(this), this.updateElementAttributes(), this.currentPos = this.getPos();
	}
	get dom() {
		if (this.renderer.element.firstElementChild && !this.renderer.element.firstElementChild?.hasAttribute("data-node-view-wrapper")) throw Error("Please use the NodeViewWrapper component for your node view.");
		return this.renderer.element;
	}
	get contentDOM() {
		return this.node.isLeaf ? null : this.contentDOMElement;
	}
	update(e, E, D) {
		let O = (e) => {
			this.renderer.updateProps(e), typeof this.options.attrs == "function" && this.updateElementAttributes();
		};
		if (e.type !== this.node.type) return !1;
		if (typeof this.options.update == "function") {
			let k = this.node, A = this.decorations, j = this.innerDecorations;
			return this.node = e, this.decorations = E, this.innerDecorations = D, this.currentPos = this.getPos(), this.options.update({
				oldNode: k,
				oldDecorations: A,
				newNode: e,
				newDecorations: E,
				oldInnerDecorations: j,
				innerDecorations: D,
				updateProps: () => O({
					node: e,
					decorations: E,
					innerDecorations: D,
					extension: this.extensionWithSyncedStorage
				})
			});
		}
		if (e === this.node) return this.node = e, this.decorations = E, this.innerDecorations = D, !0;
		let k = this.getPos();
		this.node = e, this.decorations = E, this.innerDecorations = D, this.currentPos = k;
		let A = {
			node: e,
			decorations: E,
			innerDecorations: D,
			extension: this.extensionWithSyncedStorage
		};
		return this.options.trackNodeViewPosition && (A.getPos = () => this.getPos()), O(A), !0;
	}
	selectNode() {
		this.nodeSelected = !0, this.updateSelectedState(!0);
	}
	deselectNode() {
		this.nodeSelected = !1, this.updateSelectedState(this.options.selectedOnTextSelection === !0 && this.isTextSelectionInside());
	}
	setSelectionInside(e) {
		let E = this.nodeSelected || this.options.selectedOnTextSelection === !0 && e;
		this.renderer.updateProps({
			selectionInside: e,
			selected: E
		}), this.renderer.element.classList.toggle("ProseMirror-selectednode", E);
	}
	updateSelectedState(e) {
		this.renderer.updateProps({ selected: e }), this.renderer.element.classList.toggle("ProseMirror-selectednode", e);
	}
	isTextSelectionInside() {
		let e = this.getPos();
		return typeof e == "number" && getTextSelectionAncestorPositions(this.editor.state.selection).includes(e);
	}
	destroy() {
		this.renderer.destroy(), getReactNodeViewSelectionTracker(this.editor).unregister(this), this.options.trackNodeViewPosition && this.editor.off("update", this.handlePositionUpdate), this.contentDOMElement = null;
	}
	updateElementAttributes() {
		if (this.options.attrs) {
			let e = {};
			if (typeof this.options.attrs == "function") {
				let E = this.editor.extensionManager.attributes, D = getRenderedAttributes(this.node, E);
				e = this.options.attrs({
					node: this.node,
					HTMLAttributes: D
				});
			} else e = this.options.attrs;
			this.renderer.updateAttributes(e);
		}
	}
};
function ReactNodeViewRenderer(e, E) {
	return (D) => D.editor.contentComponent ? new ReactNodeView(e, D, E) : {
		dom: document.createElement("span"),
		contentDOM: null,
		update: () => !1,
		destroy: () => {},
		selectNode: () => {},
		deselectNode: () => {},
		stopEvent: () => !1,
		ignoreMutation: () => !0
	};
}
var TiptapContext = (0, import_react.createContext)({ get editor() {
	throw Error("useTiptap must be used within a <Tiptap> provider");
} });
TiptapContext.displayName = "TiptapContext";
var useTiptap = () => (0, import_react.useContext)(TiptapContext);
function TiptapWrapper({ children: e, ...E }) {
	let D = "editor" in E ? E.editor : E.instance;
	if (!D) throw Error("Tiptap: An editor instance is required. Pass a non-null `editor` prop.");
	let O = (0, import_react.useMemo)(() => ({ editor: D }), [D]), k = (0, import_react.useMemo)(() => ({ editor: D }), [D]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorContext.Provider, {
		value: k,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiptapContext.Provider, {
			value: O,
			children: e
		})
	});
}
TiptapWrapper.displayName = "Tiptap";
function TiptapContent({ ...e }) {
	let { editor: E } = useTiptap();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorContent, {
		editor: E,
		...e
	});
}
TiptapContent.displayName = "Tiptap.Content", Object.assign(TiptapWrapper, { Content: TiptapContent });
var jsxElements = /* @__PURE__ */ new WeakSet(), jsxFragments = /* @__PURE__ */ new WeakSet();
function createJSXElement(e) {
	let E = e;
	return jsxElements.add(E), E;
}
function isJSXElement(e) {
	return Array.isArray(e) && jsxElements.has(e);
}
function flattenFragmentChildren(e) {
	return e.flatMap((e) => e == null ? [] : Array.isArray(e) && jsxFragments.has(e) && !isJSXElement(e) ? flattenFragmentChildren(e) : [e]);
}
function render(e, E) {
	if (e === "slot") return 0;
	if (e instanceof Function) {
		let D = e(E);
		return Array.isArray(D) && !isJSXElement(D) && !jsxFragments.has(D) ? createJSXElement(D) : D;
	}
	let { children: D, ...O } = E ?? {};
	if (e === "svg") throw Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
	if (Array.isArray(D)) {
		if (isJSXElement(D)) return createJSXElement([
			e,
			O,
			D
		]);
		if (D.length === 0) return createJSXElement([e, O]);
		let E = flattenFragmentChildren(D);
		return E.length === 0 ? createJSXElement([e, O]) : createJSXElement([
			e,
			O,
			...E
		]);
	}
	return createJSXElement(D == null ? [e, O] : [
		e,
		O,
		D
	]);
}
var h = (e, E) => render(e, E), handleBackspace$1 = (e, E) => {
	let { state: D } = e, { selection: O } = D;
	if (!O.empty) return !1;
	let { $from: k } = O;
	if (k.parentOffset !== 0) return !1;
	let A = k.depth - 1;
	if (A < 0) return !1;
	let j = k.node(A), M = k.index(A);
	if (M === 0) return !1;
	if (j.type === E) return e.commands.lift(E.name);
	let N = j.child(M - 1);
	if (N.type !== E || !N.lastChild?.isTextblock) return !1;
	let P = k.before() - 1 - 1;
	return e.commands.command(({ tr: e, dispatch: E }) => {
		if (!E) return !0;
		let D = k.parent.content, O = new Slice(D, 0, 0);
		return e.replace(P, k.after(), O), e.setSelection(TextSelection.create(e.doc, P + D.size)), e.scrollIntoView(), E(e), !0;
	});
}, inputRegex$2 = /^\s*>\s$/, Blockquote = Node.create({
	name: "blockquote",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	group: "block",
	defining: !0,
	parseHTML() {
		return [{ tag: "blockquote" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return /* @__PURE__ */ h("blockquote", {
			...mergeAttributes(this.options.HTMLAttributes, e),
			children: /* @__PURE__ */ h("slot", {})
		});
	},
	parseMarkdown: (e, E) => {
		let D = E.parseBlockChildren ?? E.parseChildren;
		return E.createNode("blockquote", void 0, D(e.tokens || []));
	},
	renderMarkdown: (e, E) => {
		if (!e.content) return "";
		let D = [];
		return e.content.forEach((e, O) => {
			let k = (E.renderChild?.call(E, e, O) ?? E.renderChildren([e])).split("\n").map((e) => e.trim() === "" ? ">" : `> ${e}`);
			D.push(k.join("\n"));
		}), D.join("\n>\n");
	},
	addCommands() {
		return {
			setBlockquote: () => ({ commands: e }) => e.wrapIn(this.name),
			toggleBlockquote: () => ({ commands: e }) => e.toggleWrap(this.name),
			unsetBlockquote: () => ({ commands: e }) => e.lift(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Shift-b": () => this.editor.commands.toggleBlockquote(),
			Backspace: () => handleBackspace$1(this.editor, this.type)
		};
	},
	addInputRules() {
		return [wrappingInputRule({
			find: inputRegex$2,
			type: this.type
		})];
	}
}), starInputRegex$1 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, starPasteRegex$1 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, underscoreInputRegex$1 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, underscorePasteRegex$1 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Bold = Mark.create({
	name: "bold",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "strong" },
			{
				tag: "b",
				getAttrs: (e) => e.style.fontWeight !== "normal" && null
			},
			{
				style: "font-weight=400",
				clearMark: (e) => e.type.name === this.name
			},
			{
				style: "font-weight",
				getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
			}
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return /* @__PURE__ */ h("strong", {
			...mergeAttributes(this.options.HTMLAttributes, e),
			children: /* @__PURE__ */ h("slot", {})
		});
	},
	markdownTokenName: "strong",
	parseMarkdown: (e, E) => E.applyMark("bold", E.parseInline(e.tokens || [])),
	markdownOptions: { htmlReopen: {
		open: "<strong>",
		close: "</strong>"
	} },
	renderMarkdown: (e, E) => `**${E.renderChildren(e)}**`,
	addCommands() {
		return {
			setBold: () => ({ commands: e }) => e.setMark(this.name),
			toggleBold: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetBold: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-b": () => this.editor.commands.toggleBold(),
			"Mod-B": () => this.editor.commands.toggleBold()
		};
	},
	addInputRules() {
		return [markInputRule({
			find: starInputRegex$1,
			type: this.type
		}), markInputRule({
			find: underscoreInputRegex$1,
			type: this.type
		})];
	},
	addPasteRules() {
		return [markPasteRule({
			find: starPasteRegex$1,
			type: this.type
		}), markPasteRule({
			find: underscorePasteRegex$1,
			type: this.type
		})];
	}
}), inputRegexMatch = (e) => {
	let E = /`([^`]+)`(?!`)$/.exec(e);
	return !E || E.index > 0 && e[E.index - 1] === "`" ? null : {
		index: E.index,
		text: E[0],
		replaceWith: E[1]
	};
}, pasteRegexMatch = (e) => {
	let E = /`([^`]+)`(?!`)/g, D = [], O;
	for (; (O = E.exec(e)) !== null;) O.index > 0 && e[O.index - 1] === "`" || D.push({
		index: O.index,
		text: O[0],
		replaceWith: O[1]
	});
	return D;
}, Code = Mark.create({
	name: "code",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	excludes: "_",
	code: !0,
	exitable: !0,
	parseHTML() {
		return [{ tag: "code" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"code",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "codespan",
	parseMarkdown: (e, E) => E.applyMark("code", [{
		type: "text",
		text: e.text || ""
	}]),
	renderMarkdown: (e, E) => e.content ? `\`${E.renderChildren(e.content)}\`` : "",
	addCommands() {
		return {
			setCode: () => ({ commands: e }) => e.setMark(this.name),
			toggleCode: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetCode: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-e": () => this.editor.commands.toggleCode() };
	},
	addInputRules() {
		return [markInputRule({
			find: inputRegexMatch,
			type: this.type
		})];
	},
	addPasteRules() {
		return [markPasteRule({
			find: pasteRegexMatch,
			type: this.type
		})];
	}
}), DEFAULT_TAB_SIZE = 4, backtickInputRegex = /^```([a-z]+)?[\s\n]$/, tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/, CodeBlock = Node.create({
	name: "codeBlock",
	addOptions() {
		return {
			languageClassPrefix: "language-",
			exitOnTripleEnter: !0,
			exitOnArrowDown: !0,
			exitOnArrowUp: !0,
			defaultLanguage: null,
			enableTabIndentation: !1,
			tabSize: DEFAULT_TAB_SIZE,
			HTMLAttributes: {}
		};
	},
	content: "text*",
	marks: "",
	group: "block",
	code: !0,
	defining: !0,
	addAttributes() {
		return { language: {
			default: this.options.defaultLanguage,
			parseHTML: (e) => {
				let { languageClassPrefix: E } = this.options;
				return E && [...e.firstElementChild?.classList || []].filter((e) => e.startsWith(E)).map((e) => e.replace(E, ""))[0] || null;
			},
			rendered: !1
		} };
	},
	parseHTML() {
		return [{
			tag: "pre",
			preserveWhitespace: "full"
		}];
	},
	renderHTML({ node: e, HTMLAttributes: E }) {
		return [
			"pre",
			mergeAttributes(this.options.HTMLAttributes, E),
			[
				"code",
				{ class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null },
				0
			]
		];
	},
	markdownTokenName: "code",
	parseMarkdown: (e, E) => e.raw?.startsWith("```") === !1 && e.raw?.startsWith("~~~") === !1 && e.codeBlockStyle !== "indented" ? [] : E.createNode("codeBlock", { language: e.lang || null }, e.text ? [E.createTextNode(e.text)] : []),
	renderMarkdown: (e, E) => {
		let D = "", O = e.attrs?.language || "";
		return D = e.content ? [
			`\`\`\`${O}`,
			E.renderChildren(e.content),
			"```"
		].join("\n") : `\`\`\`${O}\n\n\`\`\``, D;
	},
	addCommands() {
		return {
			setCodeBlock: (e) => ({ commands: E }) => E.setNode(this.name, e),
			toggleCodeBlock: (e) => ({ commands: E }) => E.toggleNode(this.name, "paragraph", e)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
			Backspace: () => {
				let { empty: e, $anchor: E } = this.editor.state.selection, D = E.pos === 1;
				return !e || E.parent.type.name !== this.name ? !1 : D || !E.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
			},
			Tab: ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let E = this.options.tabSize ?? DEFAULT_TAB_SIZE, { state: D } = e, { selection: O } = D, { $from: k, empty: A } = O;
				if (k.parent.type !== this.type) return !1;
				let j = " ".repeat(E);
				return A ? e.commands.insertContent(j) : e.commands.command(({ tr: e }) => {
					let { from: E, to: k } = O, A = D.doc.textBetween(E, k, "\n", "\n").split("\n").map((e) => j + e).join("\n");
					return e.replaceWith(E, k, D.schema.text(A)), !0;
				});
			},
			"Shift-Tab": ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let E = this.options.tabSize ?? DEFAULT_TAB_SIZE, { state: D } = e, { selection: O } = D, { $from: k, empty: A } = O;
				return k.parent.type === this.type ? A ? e.commands.command(({ tr: e }) => {
					let { pos: O } = k, A = k.start(), j = k.end(), M = D.doc.textBetween(A, j, "\n", "\n").split("\n"), N = 0, P = 0, F = O - A;
					for (let e = 0; e < M.length; e += 1) {
						if (P + M[e].length >= F) {
							N = e;
							break;
						}
						P += M[e].length + 1;
					}
					let I = M[N].match(/^ */)?.[0] || "", L = Math.min(I.length, E);
					if (L === 0) return !0;
					let R = A;
					for (let e = 0; e < N; e += 1) R += M[e].length + 1;
					return e.delete(R, R + L), O - R <= L && e.setSelection(TextSelection.create(e.doc, R)), !0;
				}) : e.commands.command(({ tr: e }) => {
					let { from: k, to: A } = O, j = D.doc.textBetween(k, A, "\n", "\n").split("\n").map((e) => {
						let D = e.match(/^ */)?.[0] || "", O = Math.min(D.length, E);
						return e.slice(O);
					}).join("\n");
					return e.replaceWith(k, A, D.schema.text(j)), !0;
				}) : !1;
			},
			Enter: ({ editor: e }) => {
				if (!this.options.exitOnTripleEnter) return !1;
				let { state: E } = e, { selection: D } = E, { $from: O, empty: k } = D;
				if (!k || O.parent.type !== this.type) return !1;
				let A = O.parentOffset === O.parent.nodeSize - 2, j = O.parent.textContent.endsWith("\n\n");
				return !A || !j ? !1 : e.chain().command(({ tr: e }) => (e.delete(O.pos - 2, O.pos), !0)).exitCode().run();
			},
			ArrowUp: ({ editor: e }) => {
				if (!this.options.exitOnArrowUp) return !1;
				let { state: E } = e, { selection: D } = E, { $from: O, empty: k } = D;
				if (!k || O.parent.type !== this.type || O.parentOffset !== 0) return !1;
				let A = O.before();
				return A > 0 ? !1 : e.commands.insertDefaultBlock({ pos: A });
			},
			ArrowDown: ({ editor: e }) => {
				if (!this.options.exitOnArrowDown) return !1;
				let { state: E } = e, { selection: D, doc: O } = E, { $from: k, empty: A } = D;
				if (!A || k.parent.type !== this.type || k.parentOffset !== k.parent.nodeSize - 2) return !1;
				let j = k.after();
				return j === void 0 ? !1 : O.nodeAt(j) ? e.commands.command(({ tr: e }) => (e.setSelection(Selection$1.near(O.resolve(j))), !0)) : e.commands.exitCode();
			}
		};
	},
	addInputRules() {
		return [textblockTypeInputRule({
			find: backtickInputRegex,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		}), textblockTypeInputRule({
			find: tildeInputRegex,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		})];
	},
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("codeBlockVSCodeHandler"),
			props: { handlePaste: (e, E) => {
				if (!E.clipboardData || this.editor.isActive(this.type.name)) return !1;
				let D = E.clipboardData.getData("text/plain"), O = E.clipboardData.getData("vscode-editor-data"), k = (O ? JSON.parse(O) : void 0)?.mode;
				if (!D || !k) return !1;
				let { tr: A, schema: j } = e.state, M = j.text(D.replace(/\r\n?/g, "\n"));
				return A.replaceSelectionWith(this.type.create({ language: k }, M)), A.selection.$from.parent.type !== this.type && A.setSelection(TextSelection.near(A.doc.resolve(Math.max(0, A.selection.from - 2)))), A.setMeta("paste", !0), e.dispatch(A), !0;
			} }
		})];
	}
}), Document = Node.create({
	name: "doc",
	topNode: !0,
	content: "block+",
	renderMarkdown: (e, E) => e.content ? E.renderChildren(e.content, "\n\n") : ""
}), HardBreak = Node.create({
	name: "hardBreak",
	markdownTokenName: "br",
	addOptions() {
		return {
			keepMarks: !0,
			HTMLAttributes: {}
		};
	},
	inline: !0,
	group: "inline",
	selectable: !1,
	linebreakReplacement: !0,
	parseHTML() {
		return [{ tag: "br" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["br", mergeAttributes(this.options.HTMLAttributes, e)];
	},
	renderText() {
		return "\n";
	},
	renderMarkdown: () => "  \n",
	parseMarkdown: () => ({ type: "hardBreak" }),
	addCommands() {
		return { setHardBreak: () => ({ commands: e, chain: E, state: D, editor: O }) => e.first([() => e.exitCode(), () => e.command(() => {
			let { selection: e, storedMarks: k } = D;
			if (e.$from.parent.type.spec.isolating) return !1;
			let { keepMarks: A } = this.options, { splittableMarks: j } = O.extensionManager, M = k || e.$to.parentOffset && e.$from.marks();
			return E().insertContent({ type: this.name }).command(({ tr: e, dispatch: E }) => {
				if (E && M && A) {
					let E = M.filter((e) => j.includes(e.type.name));
					e.ensureMarks(E);
				}
				return !0;
			}).scrollIntoView().run();
		})]) };
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Enter": () => this.editor.commands.setHardBreak(),
			"Shift-Enter": () => this.editor.commands.setHardBreak()
		};
	}
}), Heading = Node.create({
	name: "heading",
	addOptions() {
		return {
			levels: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			HTMLAttributes: {}
		};
	},
	content: "inline*",
	group: "block",
	defining: !0,
	addAttributes() {
		return { level: {
			default: 1,
			rendered: !1
		} };
	},
	parseHTML() {
		return this.options.levels.map((e) => ({
			tag: `h${e}`,
			attrs: { level: e }
		}));
	},
	renderHTML({ node: e, HTMLAttributes: E }) {
		return [
			`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`,
			mergeAttributes(this.options.HTMLAttributes, E),
			0
		];
	},
	parseMarkdown: (e, E) => E.createNode("heading", { level: e.depth || 1 }, E.parseInline(e.tokens || [])),
	renderMarkdown: (e, E) => {
		let D = e.attrs?.level ? parseInt(e.attrs.level, 10) : 1, O = "#".repeat(D);
		return e.content ? `${O} ${E.renderChildren(e.content)}` : "";
	},
	addCommands() {
		return {
			setHeading: (e) => ({ commands: E }) => this.options.levels.includes(e.level) ? E.setNode(this.name, e) : !1,
			toggleHeading: (e) => ({ commands: E }) => this.options.levels.includes(e.level) ? E.toggleNode(this.name, "paragraph", e) : !1
		};
	},
	addKeyboardShortcuts() {
		return this.options.levels.reduce((e, E) => ({
			...e,
			[`Mod-Alt-${E}`]: () => this.editor.commands.toggleHeading({ level: E })
		}), {});
	},
	addInputRules() {
		return this.options.levels.map((e) => textblockTypeInputRule({
			find: /* @__PURE__ */ RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
			type: this.type,
			getAttributes: { level: e }
		}));
	}
}), HorizontalRule = Node.create({
	name: "horizontalRule",
	addOptions() {
		return {
			HTMLAttributes: {},
			nextNodeType: "paragraph"
		};
	},
	group: "block",
	parseHTML() {
		return [{ tag: "hr" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["hr", mergeAttributes(this.options.HTMLAttributes, e)];
	},
	markdownTokenName: "hr",
	parseMarkdown: (e, E) => E.createNode("horizontalRule"),
	renderMarkdown: () => "---",
	addCommands() {
		return { setHorizontalRule: () => ({ chain: e, state: E }) => {
			if (!canInsertNode(E, E.schema.nodes[this.name])) return !1;
			let { selection: D } = E, { $to: O } = D, k = e();
			return isNodeSelection(D) ? k.insertContentAt(O.pos, { type: this.name }) : k.insertContent({ type: this.name }), k.command(({ state: e, tr: E, dispatch: D }) => {
				if (D) {
					let { $to: D } = E.selection, O = D.end();
					if (D.nodeAfter) D.nodeAfter.isTextblock ? E.setSelection(TextSelection.create(E.doc, D.pos + 1)) : D.nodeAfter.isBlock ? E.setSelection(NodeSelection.create(E.doc, D.pos)) : E.setSelection(TextSelection.create(E.doc, D.pos));
					else {
						let k = (e.schema.nodes[this.options.nextNodeType] || D.parent.type.contentMatch.defaultType)?.create();
						k && (E.insert(O, k), E.setSelection(TextSelection.create(E.doc, O + 1)));
					}
					E.scrollIntoView();
				}
				return !0;
			}).run();
		} };
	},
	addInputRules() {
		return [nodeInputRule({
			find: /^(?:---|—-|___\s|\*\*\*\s)$/,
			type: this.type
		})];
	}
}), starInputRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, starPasteRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, underscoreInputRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, underscorePasteRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Italic = Mark.create({
	name: "italic",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "em" },
			{
				tag: "i",
				getAttrs: (e) => e.style.fontStyle !== "normal" && null
			},
			{
				style: "font-style=normal",
				clearMark: (e) => e.type.name === this.name
			},
			{ style: "font-style=italic" }
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"em",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	},
	addCommands() {
		return {
			setItalic: () => ({ commands: e }) => e.setMark(this.name),
			toggleItalic: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetItalic: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	markdownTokenName: "em",
	parseMarkdown: (e, E) => E.applyMark("italic", E.parseInline(e.tokens || [])),
	markdownOptions: { htmlReopen: {
		open: "<em>",
		close: "</em>"
	} },
	renderMarkdown: (e, E) => `*${E.renderChildren(e)}*`,
	addKeyboardShortcuts() {
		return {
			"Mod-i": () => this.editor.commands.toggleItalic(),
			"Mod-I": () => this.editor.commands.toggleItalic()
		};
	},
	addInputRules() {
		return [markInputRule({
			find: starInputRegex,
			type: this.type
		}), markInputRule({
			find: underscoreInputRegex,
			type: this.type
		})];
	},
	addPasteRules() {
		return [markPasteRule({
			find: starPasteRegex,
			type: this.type
		}), markPasteRule({
			find: underscorePasteRegex,
			type: this.type
		})];
	}
}), encodedTlds = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", encodedUtlds = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", numeric = "numeric", ascii = "ascii", alpha = "alpha", asciinumeric = "asciinumeric", alphanumeric = "alphanumeric", domain = "domain", emoji = "emoji", scheme = "scheme", slashscheme = "slashscheme", whitespace = "whitespace";
function registerGroup(e, E) {
	return e in E || (E[e] = []), E[e];
}
function addToGroups(e, E, D) {
	for (let O in E[numeric] && (E[asciinumeric] = !0, E[alphanumeric] = !0), E[ascii] && (E[asciinumeric] = !0, E[alpha] = !0), E[asciinumeric] && (E[alphanumeric] = !0), E[alpha] && (E[alphanumeric] = !0), E[alphanumeric] && (E[domain] = !0), E[emoji] && (E[domain] = !0), E) {
		let E = registerGroup(O, D);
		E.indexOf(e) < 0 && E.push(e);
	}
}
function flagsForToken(e, E) {
	let D = {};
	for (let O in E) E[O].indexOf(e) >= 0 && (D[O] = !0);
	return D;
}
function State(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
State.groups = {}, State.prototype = {
	accepts() {
		return !!this.t;
	},
	go(e) {
		let E = this, D = E.j[e];
		if (D) return D;
		for (let D = 0; D < E.jr.length; D++) {
			let O = E.jr[D][0], k = E.jr[D][1];
			if (k && O.test(e)) return k;
		}
		return E.jd;
	},
	has(e, E = !1) {
		return E ? e in this.j : !!this.go(e);
	},
	ta(e, E, D, O) {
		for (let k = 0; k < e.length; k++) this.tt(e[k], E, D, O);
	},
	tr(e, E, D, O) {
		O ||= State.groups;
		let k;
		return E && E.j ? k = E : (k = new State(E), D && O && addToGroups(E, D, O)), this.jr.push([e, k]), k;
	},
	ts(e, E, D, O) {
		let k = this, A = e.length;
		if (!A) return k;
		for (let E = 0; E < A - 1; E++) k = k.tt(e[E]);
		return k.tt(e[A - 1], E, D, O);
	},
	tt(e, E, D, O) {
		O ||= State.groups;
		let k = this;
		if (E && E.j) return k.j[e] = E, E;
		let A = E, j, M = k.go(e);
		return M ? (j = new State(), Object.assign(j.j, M.j), j.jr.push.apply(j.jr, M.jr), j.jd = M.jd, j.t = M.t) : j = new State(), A && (O && (j.t && typeof j.t == "string" ? addToGroups(A, Object.assign(flagsForToken(j.t, O), D), O) : D && addToGroups(A, D, O)), j.t = A), k.j[e] = j, j;
	}
};
var ta = (e, E, D, O, k) => e.ta(E, D, O, k), tr = (e, E, D, O, k) => e.tr(E, D, O, k), ts = (e, E, D, O, k) => e.ts(E, D, O, k), tt = (e, E, D, O, k) => e.tt(E, D, O, k), WORD = "WORD", UWORD = "UWORD", ASCIINUMERICAL = "ASCIINUMERICAL", ALPHANUMERICAL = "ALPHANUMERICAL", LOCALHOST = "LOCALHOST", TLD = "TLD", UTLD = "UTLD", SCHEME = "SCHEME", SLASH_SCHEME = "SLASH_SCHEME", NUM = "NUM", WS = "WS", NL = "NL", OPENBRACE = "OPENBRACE", CLOSEBRACE = "CLOSEBRACE", OPENBRACKET = "OPENBRACKET", CLOSEBRACKET = "CLOSEBRACKET", OPENPAREN = "OPENPAREN", CLOSEPAREN = "CLOSEPAREN", OPENANGLEBRACKET = "OPENANGLEBRACKET", CLOSEANGLEBRACKET = "CLOSEANGLEBRACKET", FULLWIDTHLEFTPAREN = "FULLWIDTHLEFTPAREN", FULLWIDTHRIGHTPAREN = "FULLWIDTHRIGHTPAREN", LEFTCORNERBRACKET = "LEFTCORNERBRACKET", RIGHTCORNERBRACKET = "RIGHTCORNERBRACKET", LEFTWHITECORNERBRACKET = "LEFTWHITECORNERBRACKET", RIGHTWHITECORNERBRACKET = "RIGHTWHITECORNERBRACKET", FULLWIDTHLESSTHAN = "FULLWIDTHLESSTHAN", FULLWIDTHGREATERTHAN = "FULLWIDTHGREATERTHAN", AMPERSAND = "AMPERSAND", APOSTROPHE = "APOSTROPHE", ASTERISK = "ASTERISK", AT = "AT", BACKSLASH = "BACKSLASH", BACKTICK = "BACKTICK", CARET = "CARET", COLON = "COLON", COMMA = "COMMA", DOLLAR = "DOLLAR", DOT = "DOT", EQUALS = "EQUALS", EXCLAMATION = "EXCLAMATION", HYPHEN = "HYPHEN", PERCENT = "PERCENT", PIPE = "PIPE", PLUS = "PLUS", POUND = "POUND", QUERY = "QUERY", QUOTE = "QUOTE", FULLWIDTHMIDDLEDOT = "FULLWIDTHMIDDLEDOT", SEMI = "SEMI", SLASH = "SLASH", TILDE = "TILDE", UNDERSCORE = "UNDERSCORE", EMOJI$1 = "EMOJI", SYM = "SYM", tk = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL,
	AMPERSAND,
	APOSTROPHE,
	ASCIINUMERICAL,
	ASTERISK,
	AT,
	BACKSLASH,
	BACKTICK,
	CARET,
	CLOSEANGLEBRACKET,
	CLOSEBRACE,
	CLOSEBRACKET,
	CLOSEPAREN,
	COLON,
	COMMA,
	DOLLAR,
	DOT,
	EMOJI: EMOJI$1,
	EQUALS,
	EXCLAMATION,
	FULLWIDTHGREATERTHAN,
	FULLWIDTHLEFTPAREN,
	FULLWIDTHLESSTHAN,
	FULLWIDTHMIDDLEDOT,
	FULLWIDTHRIGHTPAREN,
	HYPHEN,
	LEFTCORNERBRACKET,
	LEFTWHITECORNERBRACKET,
	LOCALHOST,
	NL,
	NUM,
	OPENANGLEBRACKET,
	OPENBRACE,
	OPENBRACKET,
	OPENPAREN,
	PERCENT,
	PIPE,
	PLUS,
	POUND,
	QUERY,
	QUOTE,
	RIGHTCORNERBRACKET,
	RIGHTWHITECORNERBRACKET,
	SCHEME,
	SEMI,
	SLASH,
	SLASH_SCHEME,
	SYM,
	TILDE,
	TLD,
	UNDERSCORE,
	UTLD,
	UWORD,
	WORD,
	WS
}), ASCII_LETTER = /[a-z]/, LETTER = /\p{L}/u, EMOJI = /\p{Emoji}/u, DIGIT = /\d/, SPACE = /\s/, CR = "\r", LF = "\n", EMOJI_VARIATION = "️", EMOJI_JOINER = "‍", OBJECT_REPLACEMENT = "￼", tlds = null, utlds = null;
function init$2(e = []) {
	let E = {};
	State.groups = E;
	let D = new State();
	tlds ??= decodeTlds(encodedTlds), utlds ??= decodeTlds(encodedUtlds), tt(D, "'", APOSTROPHE), tt(D, "{", OPENBRACE), tt(D, "}", CLOSEBRACE), tt(D, "[", OPENBRACKET), tt(D, "]", CLOSEBRACKET), tt(D, "(", OPENPAREN), tt(D, ")", CLOSEPAREN), tt(D, "<", OPENANGLEBRACKET), tt(D, ">", CLOSEANGLEBRACKET), tt(D, "（", FULLWIDTHLEFTPAREN), tt(D, "）", FULLWIDTHRIGHTPAREN), tt(D, "「", LEFTCORNERBRACKET), tt(D, "」", RIGHTCORNERBRACKET), tt(D, "『", LEFTWHITECORNERBRACKET), tt(D, "』", RIGHTWHITECORNERBRACKET), tt(D, "＜", FULLWIDTHLESSTHAN), tt(D, "＞", FULLWIDTHGREATERTHAN), tt(D, "&", AMPERSAND), tt(D, "*", ASTERISK), tt(D, "@", AT), tt(D, "`", BACKTICK), tt(D, "^", CARET), tt(D, ":", COLON), tt(D, ",", COMMA), tt(D, "$", DOLLAR), tt(D, ".", DOT), tt(D, "=", EQUALS), tt(D, "!", EXCLAMATION), tt(D, "-", HYPHEN), tt(D, "%", PERCENT), tt(D, "|", PIPE), tt(D, "+", PLUS), tt(D, "#", POUND), tt(D, "?", QUERY), tt(D, "\"", QUOTE), tt(D, "/", SLASH), tt(D, ";", SEMI), tt(D, "~", TILDE), tt(D, "_", UNDERSCORE), tt(D, "\\", BACKSLASH), tt(D, "・", FULLWIDTHMIDDLEDOT);
	let O = tr(D, DIGIT, NUM, { [numeric]: !0 });
	tr(O, DIGIT, O);
	let k = tr(O, ASCII_LETTER, ASCIINUMERICAL, { [asciinumeric]: !0 }), A = tr(O, LETTER, ALPHANUMERICAL, { [alphanumeric]: !0 }), j = tr(D, ASCII_LETTER, WORD, { [ascii]: !0 });
	tr(j, DIGIT, k), tr(j, ASCII_LETTER, j), tr(k, DIGIT, k), tr(k, ASCII_LETTER, k);
	let M = tr(D, LETTER, UWORD, { [alpha]: !0 });
	tr(M, ASCII_LETTER), tr(M, DIGIT, A), tr(M, LETTER, M), tr(A, DIGIT, A), tr(A, ASCII_LETTER), tr(A, LETTER, A);
	let N = tt(D, LF, NL, { [whitespace]: !0 }), P = tt(D, CR, WS, { [whitespace]: !0 }), F = tr(D, SPACE, WS, { [whitespace]: !0 });
	tt(D, OBJECT_REPLACEMENT, F), tt(P, LF, N), tt(P, OBJECT_REPLACEMENT, F), tr(P, SPACE, F), tt(F, CR), tt(F, LF), tr(F, SPACE, F), tt(F, OBJECT_REPLACEMENT, F);
	let I = tr(D, EMOJI, EMOJI$1, { [emoji]: !0 });
	tt(I, "#"), tr(I, EMOJI, I), tt(I, EMOJI_VARIATION, I);
	let L = tt(I, EMOJI_JOINER);
	tt(L, "#"), tr(L, EMOJI, I);
	let R = [[ASCII_LETTER, j], [DIGIT, k]], z = [
		[ASCII_LETTER, null],
		[LETTER, M],
		[DIGIT, A]
	];
	for (let e = 0; e < tlds.length; e++) fastts(D, tlds[e], TLD, WORD, R);
	for (let e = 0; e < utlds.length; e++) fastts(D, utlds[e], UTLD, UWORD, z);
	addToGroups(TLD, {
		tld: !0,
		ascii: !0
	}, E), addToGroups(UTLD, {
		utld: !0,
		alpha: !0
	}, E), fastts(D, "file", SCHEME, WORD, R), fastts(D, "mailto", SCHEME, WORD, R), fastts(D, "http", SLASH_SCHEME, WORD, R), fastts(D, "https", SLASH_SCHEME, WORD, R), fastts(D, "ftp", SLASH_SCHEME, WORD, R), fastts(D, "ftps", SLASH_SCHEME, WORD, R), addToGroups(SCHEME, {
		scheme: !0,
		ascii: !0
	}, E), addToGroups(SLASH_SCHEME, {
		slashscheme: !0,
		ascii: !0
	}, E), e = e.sort((e, E) => e[0] > E[0] ? 1 : -1);
	for (let E = 0; E < e.length; E++) {
		let O = e[E][0], k = e[E][1] ? { [scheme]: !0 } : { [slashscheme]: !0 };
		O.indexOf("-") >= 0 ? k[domain] = !0 : ASCII_LETTER.test(O) ? DIGIT.test(O) ? k[asciinumeric] = !0 : k[ascii] = !0 : k[numeric] = !0, ts(D, O, O, k);
	}
	return ts(D, "localhost", LOCALHOST, { ascii: !0 }), D.jd = new State(SYM), {
		start: D,
		tokens: Object.assign({ groups: E }, tk)
	};
}
function run$1(e, E) {
	let D = stringToArray(E.replace(/[A-Z]/g, (e) => e.toLowerCase())), O = D.length, k = [], A = 0, j = 0;
	for (; j < O;) {
		let M = e, N = null, P = 0, F = null, I = -1, L = -1;
		for (; j < O && (N = M.go(D[j]));) M = N, M.accepts() ? (I = 0, L = 0, F = M) : I >= 0 && (I += D[j].length, L++), P += D[j].length, A += D[j].length, j++;
		A -= I, j -= L, P -= I, k.push({
			t: F.t,
			v: E.slice(A - P, A),
			s: A - P,
			e: A
		});
	}
	return k;
}
function stringToArray(e) {
	let E = [], D = e.length, O = 0;
	for (; O < D;) {
		let k = e.charCodeAt(O), A, j = k < 55296 || k > 56319 || O + 1 === D || (A = e.charCodeAt(O + 1)) < 56320 || A > 57343 ? e[O] : e.slice(O, O + 2);
		E.push(j), O += j.length;
	}
	return E;
}
function fastts(e, E, D, O, k) {
	let A, j = E.length;
	for (let D = 0; D < j - 1; D++) {
		let j = E[D];
		e.j[j] ? A = e.j[j] : (A = new State(O), A.jr = k.slice(), e.j[j] = A), e = A;
	}
	return A = new State(D), A.jr = k.slice(), e.j[E[j - 1]] = A, A;
}
function decodeTlds(e) {
	let E = [], D = [], O = 0;
	for (; O < e.length;) {
		let k = 0;
		for (; "0123456789".indexOf(e[O + k]) >= 0;) k++;
		if (k > 0) {
			E.push(D.join(""));
			for (let E = parseInt(e.substring(O, O + k), 10); E > 0; E--) D.pop();
			O += k;
		} else D.push(e[O]), O++;
	}
	return E;
}
var defaults = {
	defaultProtocol: "http",
	events: null,
	format: noop,
	formatHref: noop,
	nl2br: !1,
	tagName: "a",
	target: null,
	rel: null,
	validate: !0,
	truncate: Infinity,
	className: null,
	attributes: null,
	ignoreTags: [],
	render: null
};
function Options(e, E = null) {
	let D = Object.assign({}, defaults);
	e && (D = Object.assign(D, e instanceof Options ? e.o : e));
	let O = D.ignoreTags, k = [];
	for (let e = 0; e < O.length; e++) k.push(O[e].toUpperCase());
	this.o = D, E && (this.defaultRender = E), this.ignoreTags = k;
}
Options.prototype = {
	o: defaults,
	ignoreTags: [],
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, E, D) {
		let O = E != null, k = this.o[e];
		return k && (typeof k == "object" ? (k = D.t in k ? k[D.t] : defaults[e], typeof k == "function" && O && (k = k(E, D))) : typeof k == "function" && O && (k = k(E, D.t, D)), k);
	},
	getObj(e, E, D) {
		let O = this.o[e];
		return typeof O == "function" && E != null && (O = O(E, D.t, D)), O;
	},
	render(e) {
		let E = e.render(this);
		return (this.get("render", null, e) || this.defaultRender)(E, e.t, e);
	}
};
function noop(e) {
	return e;
}
function MultiToken(e, E) {
	this.t = "token", this.v = e, this.tk = E;
}
MultiToken.prototype = {
	isLink: !1,
	toString() {
		return this.v;
	},
	toHref(e) {
		return this.toString();
	},
	toFormattedString(e) {
		let E = this.toString(), D = e.get("truncate", E, this), O = e.get("format", E, this);
		return D && O.length > D ? O.substring(0, D) + "…" : O;
	},
	toFormattedHref(e) {
		return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
	},
	startIndex() {
		return this.tk[0].s;
	},
	endIndex() {
		return this.tk[this.tk.length - 1].e;
	},
	toObject(e = defaults.defaultProtocol) {
		return {
			type: this.t,
			value: this.toString(),
			isLink: this.isLink,
			href: this.toHref(e),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	toFormattedObject(e) {
		return {
			type: this.t,
			value: this.toFormattedString(e),
			isLink: this.isLink,
			href: this.toFormattedHref(e),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	validate(e) {
		return e.get("validate", this.toString(), this);
	},
	render(e) {
		let E = this, D = this.toHref(e.get("defaultProtocol")), O = e.get("formatHref", D, this), k = e.get("tagName", D, E), A = this.toFormattedString(e), j = {}, M = e.get("className", D, E), N = e.get("target", D, E), P = e.get("rel", D, E), F = e.getObj("attributes", D, E), I = e.getObj("events", D, E);
		return j.href = O, M && (j.class = M), N && (j.target = N), P && (j.rel = P), F && Object.assign(j, F), {
			tagName: k,
			attributes: j,
			content: A,
			eventListeners: I
		};
	}
};
function createTokenClass(e, E) {
	class D extends MultiToken {
		constructor(E, D) {
			super(E, D), this.t = e;
		}
	}
	for (let e in E) D.prototype[e] = E[e];
	return D.t = e, D;
}
var Email = createTokenClass("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), Text$1 = createTokenClass("text"), Nl = createTokenClass("nl"), Url = createTokenClass("url", {
	isLink: !0,
	toHref(e = defaults.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== LOCALHOST && e[1].t === COLON;
	}
}), makeState = (e) => new State(e);
function init$1({ groups: e }) {
	let E = e.domain.concat([
		AMPERSAND,
		ASTERISK,
		AT,
		BACKSLASH,
		BACKTICK,
		CARET,
		DOLLAR,
		EQUALS,
		HYPHEN,
		NUM,
		PERCENT,
		PIPE,
		PLUS,
		POUND,
		SLASH,
		SYM,
		TILDE,
		UNDERSCORE
	]), D = [
		APOSTROPHE,
		COLON,
		COMMA,
		DOT,
		EXCLAMATION,
		PERCENT,
		QUERY,
		QUOTE,
		SEMI,
		OPENANGLEBRACKET,
		CLOSEANGLEBRACKET,
		OPENBRACE,
		CLOSEBRACE,
		CLOSEBRACKET,
		OPENBRACKET,
		OPENPAREN,
		CLOSEPAREN,
		FULLWIDTHLEFTPAREN,
		FULLWIDTHRIGHTPAREN,
		LEFTCORNERBRACKET,
		RIGHTCORNERBRACKET,
		LEFTWHITECORNERBRACKET,
		RIGHTWHITECORNERBRACKET,
		FULLWIDTHLESSTHAN,
		FULLWIDTHGREATERTHAN
	], O = [
		AMPERSAND,
		APOSTROPHE,
		ASTERISK,
		BACKSLASH,
		BACKTICK,
		CARET,
		DOLLAR,
		EQUALS,
		HYPHEN,
		OPENBRACE,
		CLOSEBRACE,
		PERCENT,
		PIPE,
		PLUS,
		POUND,
		QUERY,
		SLASH,
		SYM,
		TILDE,
		UNDERSCORE
	], k = makeState(), A = tt(k, TILDE);
	ta(A, O, A), ta(A, e.domain, A);
	let j = makeState(), M = makeState(), N = makeState();
	ta(k, e.domain, j), ta(k, e.scheme, M), ta(k, e.slashscheme, N), ta(j, O, A), ta(j, e.domain, j);
	let P = tt(j, AT);
	tt(A, AT, P), tt(M, AT, P), tt(N, AT, P);
	let F = tt(A, DOT);
	ta(F, O, A), ta(F, e.domain, A);
	let I = makeState();
	ta(P, e.domain, I), ta(I, e.domain, I);
	let L = tt(I, DOT);
	ta(L, e.domain, I);
	let R = makeState(Email);
	ta(L, e.tld, R), ta(L, e.utld, R), tt(P, LOCALHOST, R);
	let z = tt(I, HYPHEN);
	tt(z, HYPHEN, z), ta(z, e.domain, I), ta(R, e.domain, I), tt(R, DOT, L), tt(R, HYPHEN, z);
	let B = tt(j, HYPHEN), V = tt(j, DOT);
	tt(B, HYPHEN, B), ta(B, e.domain, j), ta(V, O, A), ta(V, e.domain, j);
	let H = makeState(Url);
	ta(V, e.tld, H), ta(V, e.utld, H), ta(H, e.domain, j), ta(H, O, A), tt(H, DOT, V), tt(H, HYPHEN, B), tt(H, AT, P);
	let U = tt(H, COLON), W = makeState(Url);
	ta(U, e.numeric, W);
	let G = makeState(Url), K = makeState();
	ta(G, E, G), ta(G, D, K), ta(K, E, G), ta(K, D, K), tt(H, SLASH, G), tt(W, SLASH, G);
	let q = tt(M, COLON), J = tt(tt(tt(N, COLON), SLASH), SLASH);
	ta(M, e.domain, j), tt(M, DOT, V), tt(M, HYPHEN, B), ta(N, e.domain, j), tt(N, DOT, V), tt(N, HYPHEN, B), ta(q, e.domain, G), tt(q, SLASH, G), tt(q, QUERY, G), ta(J, e.domain, G), ta(J, E, G), tt(J, SLASH, G);
	let Y = [
		[OPENBRACE, CLOSEBRACE],
		[OPENBRACKET, CLOSEBRACKET],
		[OPENPAREN, CLOSEPAREN],
		[OPENANGLEBRACKET, CLOSEANGLEBRACKET],
		[FULLWIDTHLEFTPAREN, FULLWIDTHRIGHTPAREN],
		[LEFTCORNERBRACKET, RIGHTCORNERBRACKET],
		[LEFTWHITECORNERBRACKET, RIGHTWHITECORNERBRACKET],
		[FULLWIDTHLESSTHAN, FULLWIDTHGREATERTHAN]
	];
	for (let e = 0; e < Y.length; e++) {
		let [O, k] = Y[e], A = tt(G, O);
		tt(K, O, A);
		let j = makeState(Url);
		ta(A, E, j);
		let M = makeState();
		ta(A, D, M), tt(A, k, G), ta(j, E, j), ta(j, D, M), ta(M, E, j), ta(M, D, M), tt(j, k, G), tt(M, k, G);
	}
	return tt(k, LOCALHOST, H), tt(k, NL, Nl), {
		start: k,
		tokens: tk
	};
}
function run(e, E, D) {
	let O = D.length, k = 0, A = [], j = [];
	for (; k < O;) {
		let M = e, N = null, P = null, F = 0, I = null, L = -1;
		for (; k < O && !(N = M.go(D[k].t));) j.push(D[k++]);
		for (; k < O && (P = N || M.go(D[k].t));) N = null, M = P, M.accepts() ? (L = 0, I = M) : L >= 0 && L++, k++, F++;
		if (L < 0) k -= F, k < O && (j.push(D[k]), k++);
		else {
			j.length > 0 && (A.push(initMultiToken(Text$1, E, j)), j = []), k -= L, F -= L;
			let e = I.t, O = D.slice(k - F, k);
			A.push(initMultiToken(e, E, O));
		}
	}
	return j.length > 0 && A.push(initMultiToken(Text$1, E, j)), A;
}
function initMultiToken(e, E, D) {
	let O = D[0].s, k = D[D.length - 1].e;
	return new e(E.slice(O, k), D);
}
var warn = typeof console < "u" && console && console.warn || (() => {}), warnAdvice = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", INIT = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function reset() {
	return State.groups = {}, INIT.scanner = null, INIT.parser = null, INIT.tokenQueue = [], INIT.pluginQueue = [], INIT.customSchemes = [], INIT.initialized = !1, INIT;
}
function registerCustomProtocol(e, E = !1) {
	if (INIT.initialized && warn(`linkifyjs: already initialized - will not register custom scheme "${e}" ${warnAdvice}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	INIT.customSchemes.push([e, E]);
}
function init() {
	INIT.scanner = init$2(INIT.customSchemes);
	for (let e = 0; e < INIT.tokenQueue.length; e++) INIT.tokenQueue[e][1]({ scanner: INIT.scanner });
	INIT.parser = init$1(INIT.scanner.tokens);
	for (let e = 0; e < INIT.pluginQueue.length; e++) INIT.pluginQueue[e][1]({
		scanner: INIT.scanner,
		parser: INIT.parser
	});
	return INIT.initialized = !0, INIT;
}
function tokenize(e) {
	return INIT.initialized || init(), run(INIT.parser.start, e, run$1(INIT.scanner.start, e));
}
tokenize.scan = run$1;
function find(e, E = null, D = null) {
	if (E && typeof E == "object") {
		if (D) throw Error(`linkifyjs: Invalid link type ${E}; must be a string`);
		D = E, E = null;
	}
	let O = new Options(D), k = tokenize(e), A = [];
	for (let e = 0; e < k.length; e++) {
		let D = k[e];
		D.isLink && (!E || D.t === E) && O.check(D) && A.push(D.toFormattedObject(O));
	}
	return A;
}
var UNICODE_WHITESPACE_PATTERN = "[\0- \xA0 ᠎ -\u2029 　]", UNICODE_WHITESPACE_REGEX = new RegExp(UNICODE_WHITESPACE_PATTERN), UNICODE_WHITESPACE_REGEX_END = /* @__PURE__ */ RegExp(`${UNICODE_WHITESPACE_PATTERN}$`), UNICODE_WHITESPACE_REGEX_GLOBAL = new RegExp(UNICODE_WHITESPACE_PATTERN, "g");
function isValidLinkStructure(e) {
	return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function autolink(e) {
	return new Plugin({
		key: new PluginKey("autolink"),
		appendTransaction: (E, D, O) => {
			let k = E.some((e) => e.docChanged) && !D.doc.eq(O.doc), A = E.some((e) => e.getMeta("preventAutolink"));
			if (!k || A) return;
			let { tr: j } = O;
			if (getChangedRanges(combineTransactionSteps(D.doc, [...E])).forEach(({ newRange: E }) => {
				let D = findChildrenInRange(O.doc, E, (e) => e.isTextblock), k, A;
				if (D.length > 1) k = D[0], A = O.doc.textBetween(k.pos, k.pos + k.node.nodeSize, void 0, " ");
				else if (D.length) {
					let e = O.doc.textBetween(E.from, E.to, " ", " ");
					if (!UNICODE_WHITESPACE_REGEX_END.test(e)) return;
					k = D[0], A = O.doc.textBetween(k.pos, E.to, void 0, " ");
				}
				if (k && A) {
					let E = A.split(UNICODE_WHITESPACE_REGEX).filter(Boolean);
					if (E.length <= 0) return !1;
					let D = E[E.length - 1], M = k.pos + A.lastIndexOf(D);
					if (!D) return !1;
					let N = tokenize(D).map((E) => E.toObject(e.defaultProtocol));
					if (!isValidLinkStructure(N)) return !1;
					N.filter((e) => e.isLink).map((e) => ({
						...e,
						from: M + e.start + 1,
						to: M + e.end + 1
					})).filter((e) => O.schema.marks.code ? !O.doc.rangeHasMark(e.from, e.to, O.schema.marks.code) : !0).filter((E) => e.validate(E.value)).filter((E) => e.shouldAutoLink(E.value)).forEach((E) => {
						getMarksBetween(E.from, E.to, O.doc).some((E) => E.mark.type === e.type) || j.addMark(E.from, E.to, e.type.create({ href: E.href }));
					});
				}
			}), j.steps.length) return j;
		}
	});
}
function clickHandler(e) {
	return new Plugin({
		key: new PluginKey("handleClickLink"),
		props: { handleClick: (E, D, O) => {
			if (O.button !== 0 || !E.editable) return !1;
			let k = null;
			if (O.target instanceof HTMLAnchorElement) k = O.target;
			else {
				let E = O.target;
				if (!E) return !1;
				let D = e.editor.view.dom;
				k = E.closest("a"), k && !D.contains(k) && (k = null);
			}
			if (!k) return !1;
			let A = !1;
			if (e.enableClickSelection && (A = e.editor.commands.extendMarkRange(e.type.name)), e.openOnClick) {
				let D = getAttributes(E.state, e.type.name), O = k.href ?? D.href, j = k.target ?? D.target;
				O && (window.open(O, j), A = !0);
			}
			return A;
		} }
	});
}
var MARKDOWN_LINK_INPUT_REGEX = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)$/, MARKDOWN_LINK_PASTE_REGEX = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)/g;
function isEscaped(e, E) {
	let D = 0;
	for (let O = E - 1; O >= 0 && e[O] === "\\"; --O) D += 1;
	return D % 2 == 1;
}
function isInsideCodeSpan(e, E) {
	let D = 0, O = 0;
	for (; O < E;) {
		if (e[O] !== "`") {
			O += 1;
			continue;
		}
		if (D === 0 && isEscaped(e, O)) {
			O += 1;
			continue;
		}
		let k = 0;
		for (; O < E && e[O] === "`";) k += 1, O += 1;
		D === 0 ? D = k : k === D && (D = 0);
	}
	return D > 0;
}
function isConvertibleLink(e, E, D) {
	let [, O, k] = E;
	return (E.index ? e[E.index - 1] : void 0) === "!" || isEscaped(e, E.index ?? 0) || isInsideCodeSpan(e, E.index ?? 0) ? !1 : !!O.trim() && D(k);
}
function toRuleMatch(e) {
	let [E, D, O, , k, A, j] = e, M = k ?? A ?? j;
	return {
		index: e.index ?? 0,
		text: E,
		replaceWith: D,
		data: {
			href: O,
			title: M || null,
			markdown: !0
		}
	};
}
function matchesOverlap(e, E) {
	return e.index < E.index + E.text.length && E.index < e.index + e.text.length;
}
function getMarkdownLinkAttributes(e) {
	return {
		href: e.data?.href,
		title: e.data?.title ?? null
	};
}
function markdownLinkInputRule(e) {
	let E = markInputRule({
		find: (E) => {
			let D = MARKDOWN_LINK_INPUT_REGEX.exec(E);
			return !D || !isConvertibleLink(E, D, e.isAllowedHref) ? null : toRuleMatch(D);
		},
		type: e.type,
		getAttributes: getMarkdownLinkAttributes
	});
	return new InputRule({
		find: E.find,
		handler: (e) => {
			let D = E.handler(e);
			return D !== null && e.state.tr.steps.length && e.state.tr.setMeta("preventAutolink", !0), D;
		}
	});
}
function markdownLinkPasteRule(e) {
	let E = markPasteRule({
		find: (E) => {
			let D = [];
			for (let O of E.matchAll(MARKDOWN_LINK_PASTE_REGEX)) isConvertibleLink(E, O, e.isAllowedHref) && D.push(toRuleMatch(O));
			let O = (e.findPlainUrls?.call(e, E) ?? []).filter((e) => !D.some((E) => matchesOverlap(E, e)));
			return [...D, ...O];
		},
		type: e.type,
		getAttributes: getMarkdownLinkAttributes
	});
	return new PasteRule({
		find: E.find,
		handler: (e) => {
			let D = E.handler(e);
			return D !== null && e.state.tr.steps.length && e.match.data?.markdown && e.state.tr.setMeta("preventAutolink", !0), D;
		}
	});
}
function pasteHandler(e) {
	return new Plugin({
		key: new PluginKey("handlePasteLink"),
		props: { handlePaste: (E, D, O) => {
			let { shouldAutoLink: k } = e, { state: A } = E, { selection: j } = A, { empty: M } = j;
			if (M) return !1;
			let N = "";
			O.content.forEach((e) => {
				N += e.textContent;
			});
			let P = find(N, { defaultProtocol: e.defaultProtocol }).find((e) => e.isLink && e.value === N);
			return !N || !P || k !== void 0 && !k(P.value) ? !1 : e.editor.commands.setMark(e.type, { href: P.href });
		} }
	});
}
function isAllowedUri(e, E) {
	let D = [
		"http",
		"https",
		"ftp",
		"ftps",
		"mailto",
		"tel",
		"callto",
		"sms",
		"cid",
		"xmpp"
	];
	return E && E.forEach((e) => {
		let E = typeof e == "string" ? e : e.scheme;
		E && D.push(E);
	}), !e || e.replace(UNICODE_WHITESPACE_REGEX_GLOBAL, "").match(RegExp(`^(?:(?:${D.map((e) => e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")}):|[^a-z]|[a-z0-9+.\\-]+(?:[^a-z+.\\-:]|$))`, "i"));
}
var Link = Mark.create({
	name: "link",
	priority: 1e3,
	keepOnSplit: !1,
	exitable: !0,
	onCreate() {
		this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
			if (typeof e == "string") {
				registerCustomProtocol(e);
				return;
			}
			registerCustomProtocol(e.scheme, e.optionalSlashes);
		});
	},
	onDestroy() {
		reset();
	},
	inclusive() {
		return this.options.autolink;
	},
	addOptions() {
		return {
			openOnClick: !0,
			enableClickSelection: !1,
			linkOnPaste: !0,
			markdownLinks: !1,
			autolink: !0,
			protocols: [],
			defaultProtocol: "http",
			HTMLAttributes: {
				target: "_blank",
				rel: "noopener noreferrer nofollow",
				class: null
			},
			isAllowedUri: (e, E) => !!isAllowedUri(e, E.protocols),
			validate: (e) => !!e,
			shouldAutoLink: (e) => {
				let E = /^[a-z][a-z0-9+.-]*:\/\//i.test(e), D = /^[a-z][a-z0-9+.-]*:/i.test(e);
				if (E || D && !e.includes("@")) return !0;
				let O = (e.includes("@") ? e.split("@").pop() : e).split(/[/?#:]/)[0];
				return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(O) || !/\./.test(O));
			}
		};
	},
	addAttributes() {
		return {
			href: {
				default: null,
				parseHTML(e) {
					return e.getAttribute("href");
				}
			},
			target: { default: this.options.HTMLAttributes.target ?? null },
			rel: { default: this.options.HTMLAttributes.rel ?? null },
			class: { default: this.options.HTMLAttributes.class ?? null },
			title: { default: null }
		};
	},
	parseHTML() {
		return [{
			tag: "a[href]",
			getAttrs: (e) => {
				let E = e.getAttribute("href");
				return !E || !this.options.isAllowedUri(E, {
					defaultValidate: (e) => !!isAllowedUri(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : null;
			}
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return this.options.isAllowedUri(e.href, {
			defaultValidate: (e) => !!isAllowedUri(e, this.options.protocols),
			protocols: this.options.protocols,
			defaultProtocol: this.options.defaultProtocol
		}) ? [
			"a",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		] : [
			"a",
			mergeAttributes(this.options.HTMLAttributes, {
				...e,
				href: ""
			}),
			0
		];
	},
	markdownTokenName: "link",
	parseMarkdown: (e, E) => E.applyMark("link", E.parseInline(e.tokens || []), {
		href: e.href,
		title: e.title || null
	}),
	renderMarkdown: (e, E) => {
		let D = e.attrs?.href ?? "", O = e.attrs?.title ?? "", k = E.renderChildren(e);
		return O ? `[${k}](${D} "${O}")` : `[${k}](${D})`;
	},
	addCommands() {
		return {
			setLink: (e) => ({ chain: E }) => {
				let { href: D } = e;
				return this.options.isAllowedUri(D, {
					defaultValidate: (e) => !!isAllowedUri(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? E().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
			},
			toggleLink: (e) => ({ chain: E }) => {
				let { href: D } = e || {};
				return D && !this.options.isAllowedUri(D, {
					defaultValidate: (e) => !!isAllowedUri(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : E().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
			},
			unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
		};
	},
	addInputRules() {
		return this.options.markdownLinks ? [markdownLinkInputRule({
			type: this.type,
			isAllowedHref: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!isAllowedUri(e, this.options.protocols),
				protocols: this.options.protocols,
				defaultProtocol: this.options.defaultProtocol
			})
		})] : [];
	},
	addPasteRules() {
		let e = (e) => {
			let E = [];
			if (e) {
				let { protocols: D, defaultProtocol: O } = this.options;
				find(e).filter((e) => e.isLink && this.options.isAllowedUri(e.value, {
					defaultValidate: (e) => !!isAllowedUri(e, D),
					protocols: D,
					defaultProtocol: O
				})).forEach((e) => {
					this.options.shouldAutoLink(e.value) && E.push({
						text: e.value,
						data: { href: e.href },
						index: e.start
					});
				});
			}
			return E;
		};
		return this.options.markdownLinks ? [markdownLinkPasteRule({
			type: this.type,
			isAllowedHref: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!isAllowedUri(e, this.options.protocols),
				protocols: this.options.protocols,
				defaultProtocol: this.options.defaultProtocol
			}),
			findPlainUrls: e
		})] : [markPasteRule({
			find: e,
			type: this.type,
			getAttributes: (e) => ({ href: e.data?.href })
		})];
	},
	addProseMirrorPlugins() {
		let e = [], { protocols: E, defaultProtocol: D } = this.options;
		return this.options.autolink && e.push(autolink({
			type: this.type,
			defaultProtocol: this.options.defaultProtocol,
			validate: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!isAllowedUri(e, E),
				protocols: E,
				defaultProtocol: D
			}),
			shouldAutoLink: this.options.shouldAutoLink
		})), e.push(clickHandler({
			type: this.type,
			editor: this.editor,
			openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
			enableClickSelection: this.options.enableClickSelection
		})), this.options.linkOnPaste && e.push(pasteHandler({
			editor: this.editor,
			defaultProtocol: this.options.defaultProtocol,
			type: this.type,
			shouldAutoLink: this.options.shouldAutoLink
		})), e;
	}
}), src_default$2 = Link, ListItemName$1 = "listItem", TextStyleName$1 = "textStyle", bulletListInputRegex = /^\s*([-+*])\s$/, BulletList = Node.create({
	name: "bulletList",
	addOptions() {
		return {
			itemTypeName: "listItem",
			HTMLAttributes: {},
			keepMarks: !1,
			keepAttributes: !1
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	parseHTML() {
		return [{ tag: "ul" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"ul",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list",
	parseMarkdown: (e, E) => e.type !== "list" || e.ordered ? [] : {
		type: "bulletList",
		content: e.items ? E.parseChildren(e.items) : []
	},
	renderMarkdown: (e, E) => e.content ? E.renderChildren(e.content, "\n") : "",
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleBulletList: () => ({ commands: e, chain: E }) => this.options.keepAttributes ? E().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName$1, this.editor.getAttributes(TextStyleName$1)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
	},
	addInputRules() {
		let e = wrappingInputRule({
			find: bulletListInputRegex,
			type: this.type
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (e = wrappingInputRule({
			find: bulletListInputRegex,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: () => this.editor.getAttributes(TextStyleName$1),
			editor: this.editor
		})), [e];
	}
}), getBranchingNestedListAtCursor = (e, E, D) => {
	let { selection: O } = e;
	if (!O.empty) return null;
	let { $from: k } = O;
	if (!k.parent.isTextblock || k.parentOffset !== k.parent.content.size) return null;
	let A = -1;
	for (let e = k.depth; e > 0; --e) if (k.node(e).type.name === E) {
		A = e;
		break;
	}
	if (A < 0) return null;
	let j = k.node(A), M = k.index(A);
	if (M + 1 >= j.childCount) return null;
	let N = j.child(M + 1);
	if (!D.includes(N.type.name)) return null;
	let P = e.schema.nodes[E], F = !1;
	if (N.forEach((e) => {
		e.type === P && e.childCount > 1 && (F = !0);
	}), !F) return null;
	let I = e.doc.resolve(k.after()).nodeAfter;
	if (!I || !D.includes(I.type.name)) return null;
	let L = [];
	return I.forEach((e) => {
		L.push(e);
	}), L.length === 0 ? null : {
		listItemDepth: A,
		nestedList: I,
		nestedListPos: k.after(),
		insertPos: k.after(A),
		items: L
	};
}, hoistBranchingNestedList = (e, E, D, O) => {
	let k = getBranchingNestedListAtCursor(e, D, O);
	if (!k) return !1;
	let { selection: A } = e, { nestedList: j, nestedListPos: M, insertPos: N, items: P } = k, F = e.tr;
	F.delete(M, M + j.nodeSize);
	let I = F.mapping.map(N);
	return F.insert(I, Fragment.from(P)), F.setSelection(A.map(F.doc, F.mapping)), E && E(F), !0;
}, handleDeleteBranchingNestedList = (e, E, D) => hoistBranchingNestedList(e.state, e.view.dispatch, E, D), createBranchingListDeleteKeymap = (e, E) => Extension.create({
	name: `${e}BranchingDeleteKeymap`,
	priority: 101,
	addKeyboardShortcuts() {
		let D = () => handleDeleteBranchingNestedList(this.editor, e, E);
		return {
			Delete: D,
			"Mod-Delete": D
		};
	}
}), ROMAN_NUMERALS = [
	[1e3, "m"],
	[900, "cm"],
	[500, "d"],
	[400, "cd"],
	[100, "c"],
	[90, "xc"],
	[50, "l"],
	[40, "xl"],
	[10, "x"],
	[9, "ix"],
	[5, "v"],
	[4, "iv"],
	[1, "i"]
], ALPHA_NUMERALS = "abcdefghijklmnopqrstuvwxyz", ORDERED_LIST_MARKER_PATTERN = String.raw`\d+|[ivxlcdmIVXLCDM]+|${"[a-zA-Z]{1,2}"}`;
function toRoman(e) {
	let E = e, D = "";
	for (let [e, O] of ROMAN_NUMERALS) for (; E >= e;) D += O, E -= e;
	return D;
}
function toRomanUpper(e) {
	return toRoman(e).toUpperCase();
}
function fromRoman(e) {
	let E = e.toLowerCase(), D = 0, O = 0;
	for (; D < E.length;) {
		let e = !1;
		for (let [k, A] of ROMAN_NUMERALS) if (E.startsWith(A, D)) {
			O += k, D += A.length, e = !0;
			break;
		}
		if (!e) return 0;
	}
	return O;
}
function isValidRoman(e) {
	if (!/^[ivxlcdmIVXLCDM]+$/.test(e)) return !1;
	let E = fromRoman(e);
	return E <= 0 ? !1 : (e === e.toLowerCase() ? toRoman(E) : toRomanUpper(E)) === e;
}
function fromAlpha(e) {
	let E = e.toLowerCase();
	if (E.length === 1) return E.charCodeAt(0) - 97 + 1;
	if (E.length === 2) {
		let e = E.charCodeAt(0) - 97, D = E.charCodeAt(1) - 97;
		return (e + 1) * 26 + D + 1;
	}
	return 0;
}
function toRomanAlpha(e) {
	if (e <= 26) return ALPHA_NUMERALS[e - 1];
	let E = Math.floor((e - 1) / 26) - 1, D = (e - 1) % 26;
	return E < 0 ? ALPHA_NUMERALS[D] : ALPHA_NUMERALS[E] + ALPHA_NUMERALS[D];
}
function detectMarkerType(e) {
	if (!(!e || /^\d+$/.test(e))) {
		if (isValidRoman(e)) return e === e.toLowerCase() ? "i" : "I";
		if (/^[a-z]{1,2}$/.test(e)) return "a";
		if (/^[A-Z]{1,2}$/.test(e)) return "A";
	}
}
function markerToStart(e) {
	if (/^\d+$/.test(e)) return parseInt(e, 10);
	let E = detectMarkerType(e);
	if (E === "i" || E === "I") return fromRoman(e);
	if (E === "a" || E === "A") {
		let E = fromAlpha(e);
		return E > 0 ? E : 1;
	}
	let D = parseInt(e, 10);
	return Number.isNaN(D) ? 1 : D;
}
function startToMarker(e, E) {
	if (e === "numeric") return String(E);
	switch (e) {
		case "a": return toRomanAlpha(E);
		case "A": return toRomanAlpha(E).toUpperCase();
		case "i": return toRoman(E);
		case "I": return toRomanUpper(E);
		default: return String(E);
	}
}
function areOrderedListMarkersSequential(e) {
	if (e.length === 0) return !1;
	let E = detectMarkerType(e[0]) ?? "numeric", D = markerToStart(e[0]);
	if (D < 1) return !1;
	for (let O = 0; O < e.length; O++) {
		let k = startToMarker(E, D + O);
		if (e[O] !== k) return !1;
	}
	return !0;
}
function parseListMarker(e) {
	return {
		type: detectMarkerType(e),
		start: markerToStart(e)
	};
}
function buildOrderedListAttrsFromMarker(e) {
	let { type: E, start: D } = parseListMarker(e), O = {};
	return E && (O.type = E), D !== 1 && (O.start = D), O;
}
function getListMarker(e, E, D = ". ") {
	let O = E + 1;
	if (!e || e === "1") return `${O}${D}`;
	switch (e) {
		case "a": return `${toRomanAlpha(O)}${D}`;
		case "A": return `${toRomanAlpha(O).toUpperCase()}${D}`;
		case "i": return `${toRoman(O)}${D}`;
		case "I": return `${toRomanUpper(O)}${D}`;
		default: return `${O}${D}`;
	}
}
function isSameLineOrderedListToken(e) {
	let E = e.tokens?.[0];
	return !!(e.text && e.tokens?.length === 1 && E?.type === "list" && E.ordered && E.raw === e.text);
}
function parseSameLineOrderedListText(e, E) {
	return E.tokenizeInline ? E.parseInline(E.tokenizeInline(e)) : E.parseInline([{
		type: "text",
		raw: e,
		text: e
	}]);
}
var ListItem = Node.create({
	name: "listItem",
	addOptions() {
		return {
			HTMLAttributes: {},
			bulletListTypeName: "bulletList",
			orderedListTypeName: "orderedList"
		};
	},
	content: "paragraph block*",
	defining: !0,
	parseHTML() {
		return [{ tag: "li" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"li",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list_item",
	parseMarkdown: (e, E) => {
		if (e.type !== "list_item") return [];
		let D = E.parseBlockChildren ?? E.parseChildren, O = [];
		if (e.tokens && e.tokens.length > 0) {
			if (isSameLineOrderedListToken(e)) return {
				type: "listItem",
				content: [{
					type: "paragraph",
					content: parseSameLineOrderedListText(e.text || "", E)
				}]
			};
			if (e.tokens.some((e) => e.type === "paragraph")) O = D(e.tokens);
			else {
				let k = e.tokens[0];
				if (k && k.type === "text" && k.tokens && k.tokens.length > 0) {
					if (O = [{
						type: "paragraph",
						content: E.parseInline(k.tokens)
					}], e.tokens.length > 1) {
						let E = D(e.tokens.slice(1));
						O.push(...E);
					}
				} else O = D(e.tokens);
			}
		}
		return O.length === 0 && (O = [{
			type: "paragraph",
			content: []
		}]), {
			type: "listItem",
			content: O
		};
	},
	renderMarkdown: (e, E, D) => renderNestedMarkdownContent(e, E, (e) => {
		if (e.parentType === "bulletList") return "- ";
		if (e.parentType === "orderedList") {
			var E, D;
			let O = ((E = e.meta) == null || (E = E.parentAttrs) == null ? void 0 : E.start) || 1;
			return getListMarker((D = e.meta) == null || (D = D.parentAttrs) == null ? void 0 : D.type, O - 1 + (e.index || 0), ". ");
		}
		return "- ";
	}, D, { alignNestedToPrefix: D?.parentType === "orderedList" }),
	addExtensions() {
		return [createBranchingListDeleteKeymap(this.name, [this.options.bulletListTypeName, this.options.orderedListTypeName])];
	},
	addKeyboardShortcuts() {
		return {
			Enter: () => this.editor.commands.splitListItem(this.name),
			Tab: () => this.editor.commands.sinkListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
	}
}), findListItemPos = (e, E) => {
	let { $from: D } = E.selection, O = getNodeType(e, E.schema), k = null, A = D.depth, j = D.pos, M = null;
	for (; A > 0 && M === null;) k = D.node(A), k.type === O ? M = A : (--A, --j);
	return M === null ? null : {
		$pos: E.doc.resolve(j),
		depth: M
	};
}, getNextListDepth = (e, E) => {
	let D = findListItemPos(e, E);
	if (!D) return !1;
	let [, O] = getNodeAtPosition(E, e, D.$pos.pos + 4);
	return O;
}, hasListBefore = (e, E, D) => {
	let { $anchor: O } = e.selection, k = Math.max(0, O.pos - 2), A = e.doc.resolve(k).node();
	return !(!A || !D.includes(A.type.name));
}, handleBackspace = (e, E, D) => {
	if (e.commands.undoInputRule()) return !0;
	if (e.state.selection.from !== e.state.selection.to) return !1;
	if (!isNodeActive(e.state, E) && hasListBefore(e.state, E, D)) {
		let { $anchor: D } = e.state.selection, O = e.state.doc.resolve(D.before() - 1), k = [];
		O.node().descendants((e, D) => {
			e.type.name === E && k.push({
				node: e,
				pos: D
			});
		});
		let A = k.at(-1);
		if (!A) return !1;
		let j = e.state.doc.resolve(O.start() + A.pos + 1);
		return e.chain().cut({
			from: D.start() - 1,
			to: D.end() + 1
		}, j.end()).joinForward().run();
	}
	if (!isNodeActive(e.state, E) || !isAtStartOfNode(e.state)) return !1;
	let { $from: O } = e.state.selection, k = O.depth - 1;
	return O.node(k).type !== e.schema.nodes[E] || O.index(k) !== 0 ? !1 : e.chain().liftListItem(E).run();
}, nextListIsDeeper = (e, E) => {
	let D = getNextListDepth(e, E), O = findListItemPos(e, E);
	return !O || !D ? !1 : D > O.depth;
}, nextListIsHigher = (e, E) => {
	let D = getNextListDepth(e, E), O = findListItemPos(e, E);
	return !O || !D ? !1 : D < O.depth;
}, handleDelete = (e, E) => {
	if (!isNodeActive(e.state, E) || !isAtEndOfNode(e.state, E)) return !1;
	let { selection: D } = e.state, { $from: O, $to: k } = D;
	return !D.empty && O.sameParent(k) ? !1 : nextListIsDeeper(E, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(E).joinBackward().run() : nextListIsHigher(E, e.state) ? e.chain().joinForward().joinBackward().run() : e.commands.joinItemForward();
}, handleTab = (e, E, D) => {
	let { state: O } = e, { selection: k } = O;
	if (!k.empty) return !1;
	let { $from: A } = k;
	if (A.parentOffset !== 0 || !A.parent.isTextblock || isNodeActive(O, E)) return !1;
	let j = getPreviousBlockSibling(A);
	if (!j || !D.includes(j.type.name)) return !1;
	let M = j.lastChild;
	if (!M || M.type.name !== E) return !1;
	let N = A.parent;
	if (!M.canReplace(M.childCount, M.childCount, Fragment.from(N))) return !1;
	let P = A.before(), F = A.after(), I = P - 2;
	return e.commands.command(({ tr: e, dispatch: E }) => (E && (e.delete(P, F).insert(I, Fragment.from(N)), e.setSelection(TextSelection.create(e.doc, I + 1)), e.scrollIntoView()), !0));
}, ListKeymap = Extension.create({
	name: "listKeymap",
	addOptions() {
		return { listTypes: [{
			itemName: "listItem",
			wrapperNames: ["bulletList", "orderedList"]
		}, {
			itemName: "taskItem",
			wrapperNames: ["taskList"]
		}] };
	},
	addKeyboardShortcuts() {
		return {
			Delete: ({ editor: e }) => {
				let E = !1;
				return this.options.listTypes.forEach(({ itemName: D }) => {
					e.state.schema.nodes[D] !== void 0 && handleDelete(e, D) && (E = !0);
				}), E;
			},
			"Mod-Delete": ({ editor: e }) => {
				let E = !1;
				return this.options.listTypes.forEach(({ itemName: D }) => {
					e.state.schema.nodes[D] !== void 0 && handleDelete(e, D) && (E = !0);
				}), E;
			},
			Backspace: ({ editor: e }) => {
				let E = !1;
				return this.options.listTypes.forEach(({ itemName: D, wrapperNames: O }) => {
					e.state.schema.nodes[D] !== void 0 && handleBackspace(e, D, O) && (E = !0);
				}), E;
			},
			"Mod-Backspace": ({ editor: e }) => {
				let E = !1;
				return this.options.listTypes.forEach(({ itemName: D, wrapperNames: O }) => {
					e.state.schema.nodes[D] !== void 0 && handleBackspace(e, D, O) && (E = !0);
				}), E;
			},
			Tab: ({ editor: e }) => {
				for (let { itemName: E, wrapperNames: D } of this.options.listTypes) if (e.state.schema.nodes[E] !== void 0 && handleTab(e, E, D)) return !0;
				return !1;
			}
		};
	}
}), ORDERED_LIST_ITEM_REGEX = /* @__PURE__ */ RegExp(`^(\\s*)(${ORDERED_LIST_MARKER_PATTERN})([.)])\\s+(.*)$`), INDENTED_LINE_REGEX = /^\s/, PARAGRAPH_INTERRUPTERS = {
	heading: /^#{1,6}(?:\s|$)/,
	bulletItem: /^[-+*]\s+/,
	codeFence: /^(?:```|~~~)/,
	blockMath: /^\$\$/,
	thematicBreak: /^(?:(?:-[ \t]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})$/
};
function isOrderedListMarkerLine(e) {
	return ORDERED_LIST_ITEM_REGEX.test(e.trimStart());
}
function isBlockContentLine(e) {
	let E = e.trimStart();
	return PARAGRAPH_INTERRUPTERS.bulletItem.test(E) || isOrderedListMarkerLine(E) || PARAGRAPH_INTERRUPTERS.heading.test(E) || PARAGRAPH_INTERRUPTERS.thematicBreak.test(E) && !E.startsWith("-") || /^>\s?/.test(E) || PARAGRAPH_INTERRUPTERS.codeFence.test(E) || PARAGRAPH_INTERRUPTERS.blockMath.test(E);
}
function interruptsLazyContinuation(e) {
	return Object.values(PARAGRAPH_INTERRUPTERS).some((E) => E.test(e));
}
function splitItemContent(e) {
	let E = [], D = [], O = !1;
	return e.forEach((e) => {
		if (O) {
			D.push(e);
			return;
		}
		if (e.trim() === "") {
			O = !0, D.push(e);
			return;
		}
		if (E.length > 0 && isBlockContentLine(e)) {
			O = !0, D.push(e);
			return;
		}
		E.push(e);
	}), {
		paragraphLines: E,
		blockLines: D
	};
}
function collectOrderedListItems(e) {
	let E = [], D = 0, O = 0;
	for (; D < e.length;) {
		let k = e[D], A = k.match(ORDERED_LIST_ITEM_REGEX);
		if (!A) break;
		let [, j, M, N, P] = A, F = j.length, I = parseInt(M, 10), L = isNaN(I) ? detectMarkerType(M) : void 0, R = isNaN(I) ? markerToStart(M) : I, z = [P], B = D + 1, V = [k], H = !1;
		for (; B < e.length;) {
			let E = e[B];
			if (E.match(ORDERED_LIST_ITEM_REGEX)) break;
			if (E.trim() === "") V.push(E), z.push(""), H = !0, B += 1;
			else if (E.match(INDENTED_LINE_REGEX)) {
				let e = E.length - E.trimStart().length, D = F + M.length + 1;
				V.push(E), z.push(E.slice(Math.min(e, D))), B += 1;
			} else {
				if (H || interruptsLazyContinuation(E)) break;
				V.push(E), z.push(E), B += 1;
			}
		}
		E.push({
			indent: F,
			number: R,
			type: L,
			content: z.join("\n").trim(),
			contentLines: z,
			raw: V.join("\n")
		}), O = B, D = B;
	}
	return [E, O];
}
var PLAIN_TEXT_ORDERED_LIST_LINE_REGEX = /* @__PURE__ */ RegExp(`^(${ORDERED_LIST_MARKER_PATTERN})([.)])\\s+(.+)$`);
function parsePlainTextOrderedListPaste(e) {
	let E = e.split("\n").filter((e) => e.trim().length > 0);
	if (E.length === 0) return null;
	let D = [];
	for (let e of E) {
		let E = e.trim().match(PLAIN_TEXT_ORDERED_LIST_LINE_REGEX);
		if (!E) return null;
		D.push({
			marker: E[1],
			content: E[3]
		});
	}
	return areOrderedListMarkersSequential(D.map((e) => e.marker)) ? {
		type: "orderedList",
		attrs: buildOrderedListAttrsFromMarker(D[0].marker),
		content: D.map((e) => ({
			type: "listItem",
			content: [{
				type: "paragraph",
				content: [{
					type: "text",
					text: e.content
				}]
			}]
		}))
	} : null;
}
function buildNestedStructure(e, E, D) {
	let O = [], k = 0;
	for (; k < e.length;) {
		let A = e[k];
		if (A.indent === E) {
			let { paragraphLines: j, blockLines: M } = splitItemContent(A.contentLines), N = j.join("\n").trim(), P = [];
			N && P.push({
				type: "paragraph",
				raw: N,
				tokens: D.inlineTokens(N)
			});
			let F = M.join("\n").trim();
			if (F) {
				let e = D.blockTokens(F);
				P.push(...e);
			}
			let I = k + 1, L = [];
			for (; I < e.length && e[I].indent > E;) L.push(e[I]), I += 1;
			if (L.length > 0) {
				let e = buildNestedStructure(L, Math.min(...L.map((e) => e.indent)), D);
				P.push({
					type: "list",
					ordered: !0,
					start: L[0].number,
					typeMarker: L[0].type,
					items: e,
					raw: L.map((e) => e.raw).join("\n")
				});
			}
			O.push({
				type: "list_item",
				raw: A.raw,
				tokens: P
			}), k = I;
		} else k += 1;
	}
	return O;
}
function parseListItems(e, E) {
	return e.map((e) => {
		if (e.type !== "list_item") return E.parseChildren([e])[0];
		let D = [];
		return e.tokens && e.tokens.length > 0 && e.tokens.forEach((e) => {
			if (e.type === "paragraph" || e.type === "list" || e.type === "blockquote" || e.type === "code") D.push(...E.parseChildren([e]));
			else if (e.type === "text" && e.tokens) {
				let O = E.parseChildren([e]);
				D.push({
					type: "paragraph",
					content: O
				});
			} else {
				let O = E.parseChildren([e]);
				O.length > 0 && D.push(...O);
			}
		}), {
			type: "listItem",
			content: D
		};
	});
}
var ListItemName = "listItem", TextStyleName = "textStyle", orderedListInputRegex = /^(\d+)\.\s$/;
function cssListStyleTypeToHtmlType(e) {
	let E = e.match(/list-style-type\s*:\s*([^;]+)/i);
	if (!E) return null;
	switch (E[1].trim().toLowerCase()) {
		case "upper-roman": return "I";
		case "lower-roman": return "i";
		case "upper-alpha":
		case "upper-latin": return "A";
		case "lower-alpha":
		case "lower-latin": return "a";
		default: return null;
	}
}
var OrderedList = Node.create({
	name: "orderedList",
	addOptions() {
		return {
			itemTypeName: "listItem",
			HTMLAttributes: {},
			keepMarks: !1,
			keepAttributes: !1
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	addAttributes() {
		return {
			start: {
				default: 1,
				parseHTML: (e) => e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
			},
			type: {
				default: null,
				parseHTML: (e) => {
					let E = e.getAttribute("type");
					if (E) return E;
					let D = e.getAttribute("style");
					if (D) {
						let e = cssListStyleTypeToHtmlType(D);
						if (e) return e;
					}
					let O = e.querySelector("li");
					if (O) {
						let e = O.getAttribute("style");
						if (e) {
							let E = cssListStyleTypeToHtmlType(e);
							if (E) return E;
						}
					}
					return null;
				}
			}
		};
	},
	parseHTML() {
		return [{ tag: "ol" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let { start: E, type: D, ...O } = e, k = mergeAttributes(this.options.HTMLAttributes, O);
		return E !== 1 && (k.start = E), D && D !== "1" && (k.type = D), [
			"ol",
			k,
			0
		];
	},
	markdownTokenName: "list",
	parseMarkdown: (e, E) => {
		if (e.type !== "list" || !e.ordered) return [];
		let D = e.start || 1, O = e.typeMarker, k = e.items ? parseListItems(e.items, E) : [], A = {};
		return D !== 1 && (A.start = D), O && (A.type = O), Object.keys(A).length > 0 ? {
			type: "orderedList",
			attrs: A,
			content: k
		} : {
			type: "orderedList",
			content: k
		};
	},
	renderMarkdown: (e, E) => e.content ? E.renderChildren(e.content, "\n") : "",
	markdownTokenizer: {
		name: "orderedList",
		level: "block",
		start: () => -1,
		tokenize: (e, E, D) => {
			let O = e.split("\n"), [k, A] = collectOrderedListItems(O);
			if (k.length === 0) return;
			let j = buildNestedStructure(k, k[0].indent, D);
			if (j.length !== 0) return {
				type: "list",
				ordered: !0,
				start: k[0]?.number || 1,
				typeMarker: k[0]?.type,
				items: j,
				raw: O.slice(0, A).join("\n")
			};
		}
	},
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleOrderedList: () => ({ commands: e, chain: E }) => this.options.keepAttributes ? E().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName, this.editor.getAttributes(TextStyleName)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
	},
	addProseMirrorPlugins() {
		return [new Plugin({ props: { handlePaste: (e, E) => {
			if ((E.clipboardData?.getData("text/html"))?.trim()) return !1;
			let D = E.clipboardData?.getData("text/plain");
			if (!D) return !1;
			let O = parsePlainTextOrderedListPaste(D);
			if (!O) return !1;
			try {
				let E = e.state.schema.nodeFromJSON(O), D = e.state.tr.replaceSelectionWith(E);
				return e.dispatch(D), !0;
			} catch {
				return !1;
			}
		} } })];
	},
	addInputRules() {
		let e = (e, E) => (!E.attrs.type || E.attrs.type === "1") && E.childCount + E.attrs.start === +e[1], E = wrappingInputRule({
			find: orderedListInputRegex,
			type: this.type,
			getAttributes: (e) => ({ start: +e[1] }),
			joinPredicate: e
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (E = wrappingInputRule({
			find: orderedListInputRegex,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: (e) => ({
				start: +e[1],
				...this.editor.getAttributes(TextStyleName)
			}),
			joinPredicate: e,
			editor: this.editor
		})), [E];
	}
}), inputRegex$1 = /^\s*(\[([( |x])?\])\s$/, visuallyHiddenStyle = "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0", getCheckboxLabel = (e, E, D) => {
	var O;
	return (D == null || (O = D.checkboxLabel) == null ? void 0 : O.call(D, e, E)) || `Task item checkbox for ${e.textContent || "empty task item"}`;
}, TaskItem = Node.create({
	name: "taskItem",
	addOptions() {
		return {
			nested: !1,
			HTMLAttributes: {},
			taskListTypeName: "taskList",
			a11y: void 0
		};
	},
	content() {
		return this.options.nested ? "paragraph block*" : "paragraph+";
	},
	defining: !0,
	addAttributes() {
		return { checked: {
			default: !1,
			keepOnSplit: !1,
			parseHTML: (e) => {
				let E = e.getAttribute("data-checked");
				return E === "" || E === "true";
			},
			renderHTML: (e) => ({ "data-checked": e.checked })
		} };
	},
	parseHTML() {
		return [{
			tag: `li[data-type="${this.name}"]`,
			priority: 51,
			contentElement: (e) => e.querySelector("div") ?? e
		}];
	},
	renderHTML({ node: e, HTMLAttributes: E }) {
		return [
			"li",
			mergeAttributes(this.options.HTMLAttributes, E, { "data-type": this.name }),
			[
				"label",
				["input", {
					type: "checkbox",
					checked: e.attrs.checked ? "checked" : null
				}],
				["span"]
			],
			["div", 0]
		];
	},
	parseMarkdown: (e, E) => {
		let D = [];
		if (e.tokens && e.tokens.length > 0 ? D.push(E.createNode("paragraph", {}, E.parseInline(e.tokens))) : e.text ? D.push(E.createNode("paragraph", {}, [E.createNode("text", { text: e.text })])) : D.push(E.createNode("paragraph", {}, [])), e.nestedTokens && e.nestedTokens.length > 0) {
			let O = E.parseChildren(e.nestedTokens);
			D.push(...O);
		}
		return E.createNode("taskItem", { checked: e.checked || !1 }, D);
	},
	renderMarkdown: (e, E) => renderNestedMarkdownContent(e, E, `- [${e.attrs?.checked ? "x" : " "}] `),
	addExtensions() {
		return this.options.nested ? [createBranchingListDeleteKeymap(this.name, [this.options.taskListTypeName])] : [];
	},
	addKeyboardShortcuts() {
		let e = {
			Enter: () => this.editor.commands.splitListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
		return this.options.nested ? {
			...e,
			Tab: () => this.editor.commands.sinkListItem(this.name)
		} : e;
	},
	addNodeView() {
		return ({ node: e, HTMLAttributes: E, getPos: D, editor: O }) => {
			let k = document.createElement("li"), A = document.createElement("label"), j = document.createElement("span"), M = document.createElement("input"), N = document.createElement("div");
			j.style.cssText = visuallyHiddenStyle;
			let P = (e) => {
				let E = getCheckboxLabel(e, e.attrs.checked, this.options.a11y);
				M.setAttribute("aria-label", E), j.textContent = E;
			};
			P(e), A.contentEditable = "false", M.type = "checkbox", M.addEventListener("mousedown", (e) => e.preventDefault()), M.addEventListener("change", (E) => {
				if (!O.isEditable && !this.options.onReadOnlyChecked) {
					M.checked = !M.checked;
					return;
				}
				let { checked: k } = E.target;
				O.isEditable && typeof D == "function" && O.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: e }) => {
					let E = D();
					if (typeof E != "number") return !1;
					let O = e.doc.nodeAt(E);
					return e.setNodeMarkup(E, void 0, {
						...O?.attrs,
						checked: k
					}), !0;
				}).run(), !O.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, k) || (M.checked = !M.checked));
			}), Object.entries(this.options.HTMLAttributes).forEach(([e, E]) => {
				k.setAttribute(e, E);
			}), k.dataset.checked = e.attrs.checked, M.checked = e.attrs.checked, A.append(M, j), k.append(A, N), Object.entries(E).forEach(([e, E]) => {
				k.setAttribute(e, E);
			});
			let F = new Set(Object.keys(E));
			return {
				dom: k,
				contentDOM: N,
				update: (e) => {
					if (e.type !== this.type) return !1;
					k.dataset.checked = e.attrs.checked, M.checked = e.attrs.checked, P(e);
					let E = O.extensionManager.attributes, D = getRenderedAttributes(e, E), A = new Set(Object.keys(D)), j = this.options.HTMLAttributes;
					return F.forEach((e) => {
						A.has(e) || (e in j ? k.setAttribute(e, j[e]) : k.removeAttribute(e));
					}), Object.entries(D).forEach(([e, E]) => {
						E == null ? e in j ? k.setAttribute(e, j[e]) : k.removeAttribute(e) : k.setAttribute(e, E);
					}), F = A, !0;
				}
			};
		};
	},
	addInputRules() {
		return [wrappingInputRule({
			find: inputRegex$1,
			type: this.type,
			getAttributes: (e) => ({ checked: e[e.length - 1] === "x" })
		})];
	}
}), TaskList = Node.create({
	name: "taskList",
	addOptions() {
		return {
			itemTypeName: "taskItem",
			HTMLAttributes: {}
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	parseHTML() {
		return [{
			tag: `ul[data-type="${this.name}"]`,
			priority: 51
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"ul",
			mergeAttributes(this.options.HTMLAttributes, e, { "data-type": this.name }),
			0
		];
	},
	parseMarkdown: (e, E) => E.createNode("taskList", {}, E.parseChildren(e.items || [])),
	renderMarkdown: (e, E) => e.content ? E.renderChildren(e.content, "\n") : "",
	markdownTokenizer: {
		name: "taskList",
		level: "block",
		start(e) {
			let E = e.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)?.index;
			return E === void 0 ? -1 : E;
		},
		tokenize(e, E, D) {
			let O = (e) => {
				let E = parseIndentedBlocks(e, {
					itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
					extractItemData: (e) => ({
						indentLevel: e[1].length,
						mainContent: e[4],
						checked: e[3].toLowerCase() === "x"
					}),
					createToken: (e, E) => ({
						type: "taskItem",
						raw: "",
						mainContent: e.mainContent,
						indentLevel: e.indentLevel,
						checked: e.checked,
						text: e.mainContent,
						tokens: D.inlineTokens(e.mainContent),
						nestedTokens: E
					}),
					customNestedParser: O
				}, D);
				if (E) {
					let O = {
						type: "taskList",
						raw: E.raw,
						items: E.items
					}, k = e.slice(E.raw.length);
					return k.trim() ? [O, ...D.blockTokens(k)] : [O];
				}
				return D.blockTokens(e);
			}, k = parseIndentedBlocks(e, {
				itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
				extractItemData: (e) => ({
					indentLevel: e[1].length,
					mainContent: e[4],
					checked: e[3].toLowerCase() === "x"
				}),
				createToken: (e, E) => ({
					type: "taskItem",
					raw: "",
					mainContent: e.mainContent,
					indentLevel: e.indentLevel,
					checked: e.checked,
					text: e.mainContent,
					tokens: D.inlineTokens(e.mainContent),
					nestedTokens: E
				}),
				customNestedParser: O
			}, D);
			if (k) return {
				type: "taskList",
				raw: k.raw,
				items: k.items
			};
		}
	},
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleTaskList: () => ({ commands: e }) => e.toggleList(this.name, this.options.itemTypeName) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-9": () => this.editor.commands.toggleTaskList() };
	}
});
Extension.create({
	name: "listKit",
	addExtensions() {
		let e = [];
		return this.options.bulletList !== !1 && e.push(BulletList.configure(this.options.bulletList)), this.options.listItem !== !1 && e.push(ListItem.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(ListKeymap.configure(this.options.listKeymap)), this.options.orderedList !== !1 && e.push(OrderedList.configure(this.options.orderedList)), this.options.taskItem !== !1 && e.push(TaskItem.configure(this.options.taskItem)), this.options.taskList !== !1 && e.push(TaskList.configure(this.options.taskList)), e;
	}
});
var EMPTY_PARAGRAPH_MARKDOWN = "&nbsp;", NBSP_CHAR = "\xA0", Paragraph = Node.create({
	name: "paragraph",
	priority: 1e3,
	addOptions() {
		return { HTMLAttributes: {} };
	},
	group: "block",
	content: "inline*",
	parseHTML() {
		return [{ tag: "p" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"p",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	},
	parseMarkdown: (e, E) => {
		let D = e.tokens || [];
		if (D.length === 1 && D[0].type === "image") return E.parseChildren([D[0]]);
		let O = E.parseInline(D);
		return D.length === 1 && D[0].type === "text" && (D[0].raw === EMPTY_PARAGRAPH_MARKDOWN || D[0].text === EMPTY_PARAGRAPH_MARKDOWN || D[0].raw === NBSP_CHAR || D[0].text === NBSP_CHAR) && O.length === 1 && O[0].type === "text" && (O[0].text === EMPTY_PARAGRAPH_MARKDOWN || O[0].text === NBSP_CHAR) ? E.createNode("paragraph", void 0, []) : E.createNode("paragraph", void 0, O);
	},
	renderMarkdown: (e, E, D) => {
		if (!e) return "";
		let O = Array.isArray(e.content) ? e.content : [];
		if (O.length === 0) {
			var k, A;
			let e = Array.isArray(D == null || (k = D.previousNode) == null ? void 0 : k.content) ? D.previousNode.content : [];
			return (D == null || (A = D.previousNode) == null ? void 0 : A.type) === "paragraph" && e.length === 0 ? EMPTY_PARAGRAPH_MARKDOWN : "";
		}
		return E.renderChildren(O);
	},
	addCommands() {
		return { setParagraph: () => ({ commands: e }) => e.setNode(this.name) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
	}
}), inputRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, pasteRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, Strike = Mark.create({
	name: "strike",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "s" },
			{ tag: "del" },
			{ tag: "strike" },
			{
				style: "text-decoration",
				consuming: !1,
				getAttrs: (e) => e.includes("line-through") ? {} : !1
			}
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"s",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "del",
	parseMarkdown: (e, E) => E.applyMark("strike", E.parseInline(e.tokens || [])),
	renderMarkdown: (e, E) => `~~${E.renderChildren(e)}~~`,
	addCommands() {
		return {
			setStrike: () => ({ commands: e }) => e.setMark(this.name),
			toggleStrike: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetStrike: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
	},
	addInputRules() {
		return [markInputRule({
			find: inputRegex,
			type: this.type
		})];
	},
	addPasteRules() {
		return [markPasteRule({
			find: pasteRegex,
			type: this.type
		})];
	}
}), Text = Node.create({
	name: "text",
	group: "inline",
	parseMarkdown: (e) => ({
		type: "text",
		text: e.text || ""
	}),
	renderMarkdown: (e) => e.text || ""
}), Underline = Mark.create({
	name: "underline",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [{ tag: "u" }, {
			style: "text-decoration",
			consuming: !1,
			getAttrs: (e) => e.includes("underline") ? {} : !1
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"u",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	},
	parseMarkdown(e, E) {
		return E.applyMark(this.name || "underline", E.parseInline(e.tokens || []));
	},
	renderMarkdown(e, E) {
		return `++${E.renderChildren(e)}++`;
	},
	markdownTokenizer: {
		name: "underline",
		level: "inline",
		start(e) {
			return e.indexOf("++");
		},
		tokenize(e, E, D) {
			let O = /^(\+\+)([\s\S]+?)(\+\+)/.exec(e);
			if (!O) return;
			let k = O[2].trim();
			return {
				type: "underline",
				raw: O[0],
				text: k,
				tokens: D.inlineTokens(k)
			};
		}
	},
	addCommands() {
		return {
			setUnderline: () => ({ commands: e }) => e.setMark(this.name),
			toggleUnderline: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetUnderline: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-u": () => this.editor.commands.toggleUnderline(),
			"Mod-U": () => this.editor.commands.toggleUnderline()
		};
	}
});
function dropCursor(e = {}) {
	return new Plugin({ view(E) {
		return new DropCursorView(E, e);
	} });
}
var DropCursorView = class {
	constructor(e, E) {
		this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = E.width ?? 1, this.color = E.color === !1 ? void 0 : E.color || "black", this.class = E.class, this.handlers = [
			"dragover",
			"dragend",
			"drop",
			"dragleave"
		].map((E) => {
			let D = (e) => {
				this[E](e);
			};
			return e.dom.addEventListener(E, D), {
				name: E,
				handler: D
			};
		});
	}
	destroy() {
		this.handlers.forEach(({ name: e, handler: E }) => this.editorView.dom.removeEventListener(e, E));
	}
	update(e, E) {
		this.cursorPos != null && E.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
	}
	setCursor(e) {
		e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
	}
	updateOverlay() {
		let e = this.editorView.state.doc.resolve(this.cursorPos), E = !e.parent.inlineContent, D, O = this.editorView.dom, k = O.getBoundingClientRect(), A = k.width / O.offsetWidth, j = k.height / O.offsetHeight;
		if (E) {
			let E = e.nodeBefore, O = e.nodeAfter;
			if (E || O) {
				let e = this.editorView.nodeDOM(this.cursorPos - (E ? E.nodeSize : 0));
				if (e) {
					let k = e.getBoundingClientRect(), A = E ? k.bottom : k.top;
					E && O && (A = (A + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
					let M = this.width / 2 * j;
					D = {
						left: k.left,
						right: k.right,
						top: A - M,
						bottom: A + M
					};
				}
			}
		}
		if (!D) {
			let e = this.editorView.coordsAtPos(this.cursorPos), E = this.width / 2 * A;
			D = {
				left: e.left - E,
				right: e.left + E,
				top: e.top,
				bottom: e.bottom
			};
		}
		let M = this.editorView.dom.offsetParent;
		this.element || (this.element = M.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", E), this.element.classList.toggle("prosemirror-dropcursor-inline", !E);
		let N, P;
		if (!M || M == document.body && getComputedStyle(M).position == "static") N = -pageXOffset, P = -pageYOffset;
		else {
			let e = M.getBoundingClientRect(), E = e.width / M.offsetWidth, D = e.height / M.offsetHeight;
			N = e.left - M.scrollLeft * E, P = e.top - M.scrollTop * D;
		}
		this.element.style.left = (D.left - N) / A + "px", this.element.style.top = (D.top - P) / j + "px", this.element.style.width = (D.right - D.left) / A + "px", this.element.style.height = (D.bottom - D.top) / j + "px";
	}
	scheduleRemoval(e) {
		clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
	}
	dragover(e) {
		if (!this.editorView.editable) return;
		let E = this.editorView.posAtCoords({
			left: e.clientX,
			top: e.clientY
		}), D = E && E.inside >= 0 && this.editorView.state.doc.nodeAt(E.inside), O = D && D.type.spec.disableDropCursor, k = typeof O == "function" ? O(this.editorView, E, e) : O;
		if (E && !k) {
			let e = E.pos;
			if (this.editorView.dragging && this.editorView.dragging.slice) {
				let E = dropPoint(this.editorView.state.doc, e, this.editorView.dragging.slice);
				E != null && (e = E);
			}
			this.setCursor(e), this.scheduleRemoval(5e3);
		}
	}
	dragend() {
		this.scheduleRemoval(20);
	}
	drop() {
		this.scheduleRemoval(20);
	}
	dragleave(e) {
		this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
	}
}, GapCursor = class e extends Selection$1 {
	constructor(e) {
		super(e, e);
	}
	map(E, D) {
		let O = E.resolve(D.map(this.head));
		return e.valid(O) ? new e(O) : Selection$1.near(O);
	}
	content() {
		return Slice.empty;
	}
	eq(E) {
		return E instanceof e && E.head == this.head;
	}
	toJSON() {
		return {
			type: "gapcursor",
			pos: this.head
		};
	}
	static fromJSON(E, D) {
		if (typeof D.pos != "number") throw RangeError("Invalid input for GapCursor.fromJSON");
		return new e(E.resolve(D.pos));
	}
	getBookmark() {
		return new GapBookmark(this.anchor);
	}
	static valid(e) {
		let E = e.parent;
		if (E.inlineContent || !closedBefore(e) || !closedAfter(e)) return !1;
		let D = E.type.spec.allowGapCursor;
		if (D != null) return D;
		let O = E.contentMatchAt(e.index()).defaultType;
		return O && O.isTextblock;
	}
	static findGapCursorFrom(E, D, O = !1) {
		search: for (;;) {
			if (!O && e.valid(E)) return E;
			let k = E.pos, A = null;
			for (let O = E.depth;; O--) {
				let j = E.node(O);
				if (D > 0 ? E.indexAfter(O) < j.childCount : E.index(O) > 0) {
					A = j.child(D > 0 ? E.indexAfter(O) : E.index(O) - 1);
					break;
				} else if (O == 0) return null;
				k += D;
				let M = E.doc.resolve(k);
				if (e.valid(M)) return M;
			}
			for (;;) {
				let j = D > 0 ? A.firstChild : A.lastChild;
				if (!j) {
					if (A.isAtom && !A.isText && !NodeSelection.isSelectable(A)) {
						E = E.doc.resolve(k + A.nodeSize * D), O = !1;
						continue search;
					}
					break;
				}
				A = j, k += D;
				let M = E.doc.resolve(k);
				if (e.valid(M)) return M;
			}
			return null;
		}
	}
};
GapCursor.prototype.visible = !1, GapCursor.findFrom = GapCursor.findGapCursorFrom, Selection$1.jsonID("gapcursor", GapCursor);
var GapBookmark = class e {
	constructor(e) {
		this.pos = e;
	}
	map(E) {
		return new e(E.map(this.pos));
	}
	resolve(e) {
		let E = e.resolve(this.pos);
		return GapCursor.valid(E) ? new GapCursor(E) : Selection$1.near(E);
	}
};
function needsGap(e) {
	return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function closedBefore(e) {
	for (let E = e.depth; E >= 0; E--) {
		let D = e.index(E), O = e.node(E);
		if (D == 0) {
			if (O.type.spec.isolating) return !0;
			continue;
		}
		for (let e = O.child(D - 1);; e = e.lastChild) {
			if (e.childCount == 0 && !e.inlineContent || needsGap(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function closedAfter(e) {
	for (let E = e.depth; E >= 0; E--) {
		let D = e.indexAfter(E), O = e.node(E);
		if (D == O.childCount) {
			if (O.type.spec.isolating) return !0;
			continue;
		}
		for (let e = O.child(D);; e = e.firstChild) {
			if (e.childCount == 0 && !e.inlineContent || needsGap(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function gapCursor() {
	return new Plugin({ props: {
		decorations: drawGapCursor,
		createSelectionBetween(e, E, D) {
			return E.pos == D.pos && GapCursor.valid(D) ? new GapCursor(D) : null;
		},
		handleClick,
		handleKeyDown,
		handleDOMEvents: { beforeinput }
	} });
}
var handleKeyDown = keydownHandler({
	ArrowLeft: arrow("horiz", -1),
	ArrowRight: arrow("horiz", 1),
	ArrowUp: arrow("vert", -1),
	ArrowDown: arrow("vert", 1)
});
function arrow(e, E) {
	let D = e == "vert" ? E > 0 ? "down" : "up" : E > 0 ? "right" : "left";
	return function(e, O, k) {
		let A = e.selection, j = E > 0 ? A.$to : A.$from, M = A.empty;
		if (A instanceof TextSelection) {
			if (!k.endOfTextblock(D) || j.depth == 0) return !1;
			M = !1, j = e.doc.resolve(E > 0 ? j.after() : j.before());
		}
		let N = GapCursor.findGapCursorFrom(j, E, M);
		return N ? (O && O(e.tr.setSelection(new GapCursor(N))), !0) : !1;
	};
}
function handleClick(e, E, D) {
	if (!e || !e.editable) return !1;
	let O = e.state.doc.resolve(E);
	if (!GapCursor.valid(O)) return !1;
	let k = e.posAtCoords({
		left: D.clientX,
		top: D.clientY
	});
	return k && k.inside > -1 && NodeSelection.isSelectable(e.state.doc.nodeAt(k.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new GapCursor(O))), !0);
}
function beforeinput(e, E) {
	if (E.inputType != "insertCompositionText" || !(e.state.selection instanceof GapCursor)) return !1;
	let { $from: D } = e.state.selection, O = D.parent.contentMatchAt(D.index()).findWrapping(e.state.schema.nodes.text);
	if (!O) return !1;
	let k = Fragment.empty;
	for (let e = O.length - 1; e >= 0; e--) k = Fragment.from(O[e].createAndFill(null, k));
	let A = e.state.tr.replace(D.pos, D.pos, new Slice(k, 0, 0));
	return A.setSelection(TextSelection.near(A.doc.resolve(D.pos + 1))), e.dispatch(A), !1;
}
function drawGapCursor(e) {
	if (!(e.selection instanceof GapCursor)) return null;
	let E = document.createElement("div");
	return E.className = "ProseMirror-gapcursor", DecorationSet.create(e.doc, [Decoration.widget(e.selection.head, E, { key: "gapcursor" })]);
}
Extension.create({
	name: "characterCount",
	addOptions() {
		return {
			limit: null,
			autoTrim: !0,
			mode: "textSize",
			textCounter: (e) => e.length,
			wordCounter: (e) => e.split(" ").filter((e) => e !== "").length
		};
	},
	addStorage() {
		return {
			characters: () => 0,
			words: () => 0
		};
	},
	onBeforeCreate() {
		this.storage.characters = (e) => {
			let E = e?.node || this.editor.state.doc;
			if ((e?.mode || this.options.mode) === "textSize") {
				let e = E.textBetween(0, E.content.size, void 0, " ");
				return this.options.textCounter(e);
			}
			return E.nodeSize;
		}, this.storage.words = (e) => {
			let E = e?.node || this.editor.state.doc, D = E.textBetween(0, E.content.size, " ", " ");
			return this.options.wordCounter(D);
		};
	},
	addProseMirrorPlugins() {
		let e = !1;
		return [new Plugin({
			key: new PluginKey("characterCount"),
			appendTransaction: (E, D, O) => {
				if (e) return;
				let k = this.options.limit, A = this.options.autoTrim;
				if (k == null || k === 0 || A === !1) {
					e = !0;
					return;
				}
				let j = this.storage.characters({ node: O.doc });
				if (j > k) {
					let E = j - k;
					console.warn(`[CharacterCount] Initial content exceeded limit of ${k} characters. Content was automatically trimmed.`);
					let D = O.tr.deleteRange(0, E);
					return e = !0, D;
				}
				e = !0;
			},
			filterTransaction: (e, E) => {
				let D = this.options.limit;
				if (!e.docChanged || D === 0 || D == null) return !0;
				let O = this.storage.characters({ node: E.doc }), k = this.storage.characters({ node: e.doc });
				if (k <= D || O > D && k > D && k <= O) return !0;
				if (O > D && k > D && k > O || !e.getMeta("paste")) return !1;
				let A = e.selection.$head.pos, j = A - (k - D), M = A;
				return e.deleteRange(j, M), !(this.storage.characters({ node: e.doc }) > D);
			}
		})];
	}
});
var Dropcursor = Extension.create({
	name: "dropCursor",
	addOptions() {
		return {
			color: "currentColor",
			width: 1,
			class: void 0
		};
	},
	addProseMirrorPlugins() {
		return [dropCursor(this.options)];
	}
});
Extension.create({
	name: "focus",
	addOptions() {
		return {
			className: "has-focus",
			mode: "all"
		};
	},
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("focus"),
			props: { decorations: ({ doc: e, selection: E }) => {
				let { isEditable: D, isFocused: O } = this.editor, { anchor: k } = E, A = [];
				if (!D || !O) return DecorationSet.create(e, []);
				let j = 0;
				this.options.mode === "deepest" && e.descendants((e, E) => {
					if (!e.isText) {
						if (!(k >= E && k <= E + e.nodeSize - 1)) return !1;
						j += 1;
					}
				});
				let M = 0;
				return e.descendants((e, E) => {
					if (e.isText || !(k >= E && k <= E + e.nodeSize - 1)) return !1;
					if (M += 1, this.options.mode === "deepest" && j - M > 0 || this.options.mode === "shallowest" && M > 1) return this.options.mode === "deepest";
					A.push(Decoration.node(E, E + e.nodeSize, { class: this.options.className }));
				}), DecorationSet.create(e, A);
			} }
		})];
	}
});
var Gapcursor = Extension.create({
	name: "gapCursor",
	addProseMirrorPlugins() {
		return [gapCursor()];
	},
	extendNodeSchema(e) {
		return { allowGapCursor: callOrReturn(getExtensionField(e, "allowGapCursor", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) ?? null };
	}
}), DEFAULT_DATA_ATTRIBUTE = "placeholder", PLUGIN_KEY = new PluginKey("tiptap__placeholder");
function createPlaceholderDecoration(e) {
	let { editor: E, placeholder: D, dataAttribute: O, pos: k, node: A, isEmptyDoc: j, hasAnchor: M, classes: { emptyNode: N, emptyEditor: P } } = e, F = [N];
	return j && F.push(P), Decoration.node(k, k + A.nodeSize, {
		class: F.join(" "),
		[O]: typeof D == "function" ? D({
			editor: E,
			node: A,
			pos: k,
			hasAnchor: M
		}) : D
	});
}
function resolveEmptyNodeClass(e, E) {
	return typeof e == "function" ? e(E) : e;
}
function scanRangeForDecorations({ editor: e, options: E, dataAttribute: D, doc: O, selection: k, from: A, to: j }) {
	let { anchor: M } = k, N = [], P = e.isEmpty;
	return O.nodesBetween(A, j, (O, k) => {
		let A = M >= k && M <= k + O.nodeSize, j = !O.isLeaf && isNodeEmpty(O);
		return O.type.isTextblock && (A || !E.showOnlyCurrent) && j && N.push(createPlaceholderDecoration({
			editor: e,
			isEmptyDoc: P,
			dataAttribute: D,
			hasAnchor: A,
			placeholder: E.placeholder,
			classes: {
				emptyEditor: E.emptyEditorClass,
				emptyNode: resolveEmptyNodeClass(E.emptyNodeClass, {
					editor: e,
					node: O,
					pos: k,
					hasAnchor: A
				})
			},
			node: O,
			pos: k
		})), E.includeChildren;
	}), N;
}
function buildPlaceholderDecorations({ editor: e, options: E, dataAttribute: D, doc: O, selection: k }) {
	if (!(e.isEditable || !E.showOnlyWhenEditable)) return null;
	let { anchor: A } = k, j = [], M = e.isEmpty;
	if (E.showOnlyCurrent && !E.includeChildren) {
		let k = O.resolve(A), N = k.depth > 0 ? k.node(1) : k.nodeAfter, P = k.depth > 0 ? k.before(1) : A;
		if (N && N.type.isTextblock && isNodeEmpty(N)) {
			let O = A >= P && A <= P + N.nodeSize;
			j.push(createPlaceholderDecoration({
				editor: e,
				isEmptyDoc: M,
				dataAttribute: D,
				hasAnchor: O,
				placeholder: E.placeholder,
				classes: {
					emptyEditor: E.emptyEditorClass,
					emptyNode: resolveEmptyNodeClass(E.emptyNodeClass, {
						editor: e,
						node: N,
						pos: P,
						hasAnchor: O
					})
				},
				node: N,
				pos: P
			}));
		}
	} else j.push(...scanRangeForDecorations({
		editor: e,
		options: E,
		dataAttribute: D,
		doc: O,
		selection: k,
		from: 0,
		to: O.content.size
	}));
	return DecorationSet.create(O, j);
}
function resolveTopLevelRange(e, E) {
	let D = e.resolve(E);
	if (D.depth === 0) {
		let e = D.nodeAfter ?? D.nodeBefore;
		if (!e) return {
			from: E,
			to: E
		};
		let O = D.nodeAfter ? E : E - e.nodeSize;
		return {
			from: O,
			to: O + e.nodeSize
		};
	}
	let O = D.before(1);
	return {
		from: O,
		to: O + D.node(1).nodeSize
	};
}
function toContentRelativeRange(e, E) {
	return {
		from: Math.max(0, E.from - 1),
		to: Math.min(e.content.size, E.to - 1)
	};
}
function getTopLevelBlocksInRange(e, E, D) {
	let O = [];
	return e.forEach((e, k) => {
		let A = k, j = A + e.nodeSize, M = A + 1, N = j + 1;
		M < D && N > E && O.push({
			from: A,
			to: j
		});
	}), O;
}
function mergeRanges(e) {
	if (e.length === 0) return [];
	let E = [...e].sort((e, E) => e.from - E.from), D = [{ ...E[0] }];
	for (let e = 1; e < E.length; e += 1) {
		let O = D[D.length - 1], k = E[e];
		k.from <= O.to ? O.to = Math.max(O.to, k.to) : D.push({ ...k });
	}
	return D;
}
function collectBlocksForChange(e, E) {
	let D = getTopLevelBlocksInRange(e, E.from, E.to);
	return D.push(toContentRelativeRange(e, resolveTopLevelRange(e, E.from))), E.to > E.from ? D.push(toContentRelativeRange(e, resolveTopLevelRange(e, Math.min(E.to, e.content.size + 1) - 1))) : E.from < e.content.size + 1 && D.push(toContentRelativeRange(e, resolveTopLevelRange(e, Math.min(E.from + 1, e.content.size)))), D;
}
function collectRescanRanges(e, E, D) {
	let O = [];
	if (e.docChanged) {
		let E = getChangedRanges(e);
		for (let e of E) O.push(...collectBlocksForChange(D.doc, e.newRange));
	}
	return e.selectionSet && (O.push(toContentRelativeRange(D.doc, resolveTopLevelRange(D.doc, e.mapping.map(E.selection.anchor)))), O.push(toContentRelativeRange(D.doc, resolveTopLevelRange(D.doc, D.selection.anchor)))), mergeRanges(O);
}
function clampRange(e, E, D) {
	let O = Math.max(0, Math.min(e, D.content.size));
	return {
		from: O,
		to: Math.max(O, Math.min(E, D.content.size))
	};
}
function updateDecorationsInRanges({ decorations: e, ranges: E, editor: D, options: O, dataAttribute: k, doc: A, selection: j }) {
	let M = e;
	for (let e of E) {
		let { from: E, to: N } = clampRange(e.from, e.to, A), P = M.find(E, N).filter((e) => e.from >= E && e.to <= N);
		P.length && (M = M.remove(P));
		let F = scanRangeForDecorations({
			editor: D,
			options: O,
			dataAttribute: k,
			doc: A,
			selection: j,
			from: E,
			to: N
		});
		F.length && (M = M.add(A, F));
	}
	return M;
}
function createPlaceholderStateField({ editor: e, options: E, dataAttribute: D }) {
	return {
		init(O, k) {
			return buildPlaceholderDecorations({
				editor: e,
				options: E,
				dataAttribute: D,
				doc: k.doc,
				selection: k.selection
			}) ?? DecorationSet.empty;
		},
		apply(O, k, A, j) {
			return !O.docChanged && !O.selectionSet ? k : updateDecorationsInRanges({
				decorations: k.map(O.mapping, O.doc),
				ranges: collectRescanRanges(O, A, j),
				editor: e,
				options: E,
				dataAttribute: D,
				doc: j.doc,
				selection: j.selection
			});
		}
	};
}
function preparePlaceholderAttribute(e) {
	return e.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
function createPlaceholderPlugin({ editor: e, options: E }) {
	let D = E.dataAttribute ? `data-${preparePlaceholderAttribute(E.dataAttribute)}` : `data-${DEFAULT_DATA_ATTRIBUTE}`, O = E.showOnlyCurrent && !E.includeChildren;
	return new Plugin({
		key: PLUGIN_KEY,
		...O ? {} : { state: createPlaceholderStateField({
			editor: e,
			options: E,
			dataAttribute: D
		}) },
		props: { decorations: O ? ({ doc: O, selection: k }) => buildPlaceholderDecorations({
			editor: e,
			options: E,
			dataAttribute: D,
			doc: O,
			selection: k
		}) : (D) => E.showOnlyWhenEditable && !e.isEditable ? DecorationSet.empty : PLUGIN_KEY.getState(D) ?? DecorationSet.empty }
	});
}
var Placeholder = Extension.create({
	name: "placeholder",
	addOptions() {
		return {
			emptyEditorClass: "is-editor-empty",
			emptyNodeClass: "is-empty",
			dataAttribute: DEFAULT_DATA_ATTRIBUTE,
			placeholder: "Write something …",
			showOnlyWhenEditable: !0,
			showOnlyCurrent: !0,
			includeChildren: !1
		};
	},
	addProseMirrorPlugins() {
		return [createPlaceholderPlugin({
			editor: this.editor,
			options: this.options
		})];
	}
});
function shouldSyncDomSelection(e, E) {
	return !e.selection.empty && !isNodeSelection(e.selection) && E.isEditable;
}
function shouldPreserveSelection(e, E) {
	return shouldSyncDomSelection(e, E) && !E.isFocused && !E.view.dragging;
}
function clearDomSelection() {
	var e;
	(e = window.getSelection()) == null || e.removeAllRanges();
}
function restoreDomSelection(e) {
	e.focus();
}
Extension.create({
	name: "selection",
	addOptions() {
		return { className: "selection" };
	},
	addProseMirrorPlugins() {
		let { editor: e, options: E } = this;
		return [new Plugin({
			key: new PluginKey("selection"),
			props: {
				decorations(D) {
					return shouldPreserveSelection(D, e) ? DecorationSet.create(D.doc, [Decoration.inline(D.selection.from, D.selection.to, { class: E.className })]) : null;
				},
				handleDOMEvents: {
					blur(E) {
						return shouldSyncDomSelection(E.state, e) && clearDomSelection(), !1;
					},
					focus(E) {
						return shouldSyncDomSelection(E.state, e) && requestAnimationFrame(() => {
							!e.isDestroyed && E.hasFocus() && restoreDomSelection(E);
						}), !1;
					}
				}
			}
		})];
	}
});
function nodeEqualsType({ types: e, node: E }) {
	return E && Array.isArray(e) && e.includes(E.type) || E?.type === e;
}
var TrailingNode = Extension.create({
	name: "trailingNode",
	addOptions() {
		return {
			node: void 0,
			notAfter: []
		};
	},
	addProseMirrorPlugins() {
		let e = new PluginKey(this.name), E = this.options.node || this.editor.schema.topNodeType.contentMatch.defaultType?.name || "paragraph", D = Object.entries(this.editor.schema.nodes).map(([, e]) => e).filter((e) => (this.options.notAfter || []).concat(E).includes(e.name));
		return [new Plugin({
			key: e,
			appendTransaction: (D, O, k) => {
				let { doc: A, tr: j, schema: M } = k, N = e.getState(k), P = A.content.size, F = M.nodes[E];
				if (!D.some((e) => e.getMeta("skipTrailingNode")) && N) return j.insert(P, F.create());
			},
			state: {
				init: (e, E) => {
					let O = E.tr.doc.lastChild;
					return !nodeEqualsType({
						node: O,
						types: D
					});
				},
				apply: (e, E) => {
					if (!e.docChanged || e.getMeta("__uniqueIDTransaction")) return E;
					let O = e.doc.lastChild;
					return !nodeEqualsType({
						node: O,
						types: D
					});
				}
			}
		})];
	}
}), UndoRedo = Extension.create({
	name: "undoRedo",
	addOptions() {
		return {
			depth: 100,
			newGroupDelay: 500
		};
	},
	addCommands() {
		return {
			undo: () => ({ state: e, dispatch: E }) => undo(e, E),
			redo: () => ({ state: e, dispatch: E }) => redo(e, E)
		};
	},
	addProseMirrorPlugins() {
		return [history(this.options)];
	},
	addKeyboardShortcuts() {
		return {
			"Mod-z": () => this.editor.commands.undo(),
			"Shift-Mod-z": () => this.editor.commands.redo(),
			"Mod-y": () => this.editor.commands.redo(),
			"Mod-я": () => this.editor.commands.undo(),
			"Shift-Mod-я": () => this.editor.commands.redo()
		};
	}
}), src_default$1 = Extension.create({
	name: "starterKit",
	addExtensions() {
		let e = [];
		return this.options.bold !== !1 && e.push(Bold.configure(this.options.bold)), this.options.blockquote !== !1 && e.push(Blockquote.configure(this.options.blockquote)), this.options.bulletList !== !1 && e.push(BulletList.configure(this.options.bulletList)), this.options.code !== !1 && e.push(Code.configure(this.options.code)), this.options.codeBlock !== !1 && e.push(CodeBlock.configure(this.options.codeBlock)), this.options.document !== !1 && e.push(Document.configure(this.options.document)), this.options.dropcursor !== !1 && e.push(Dropcursor.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && e.push(Gapcursor.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && e.push(HardBreak.configure(this.options.hardBreak)), this.options.heading !== !1 && e.push(Heading.configure(this.options.heading)), this.options.undoRedo !== !1 && e.push(UndoRedo.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && e.push(HorizontalRule.configure(this.options.horizontalRule)), this.options.italic !== !1 && e.push(Italic.configure(this.options.italic)), this.options.listItem !== !1 && e.push(ListItem.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(ListKeymap.configure(this.options?.listKeymap)), this.options.link !== !1 && e.push(Link.configure(this.options?.link)), this.options.orderedList !== !1 && e.push(OrderedList.configure(this.options.orderedList)), this.options.paragraph !== !1 && e.push(Paragraph.configure(this.options.paragraph)), this.options.strike !== !1 && e.push(Strike.configure(this.options.strike)), this.options.text !== !1 && e.push(Text.configure(this.options.text)), this.options.underline !== !1 && e.push(Underline.configure(this.options?.underline)), this.options.trailingNode !== !1 && e.push(TrailingNode.configure(this.options?.trailingNode)), e;
	}
}), src_default = Placeholder;
export { TextSelection as $, findChildren as A, marksEqual as B, attrsEqual as C, decodeHtmlEntities as D, createBlockMarkdownSpec as E, getChangedRanges as F, Decoration as G, nodeInputRule as H, getExtensionField as I, NodeSelection as J, DecorationSet as K, getRenderedAttributes as L, findParentNodeClosestToPos as M, flattenExtensions as N, defaultBlockAt as O, generateJSON as P, SelectionRange as Q, getSchema as R, ResizableNodeView as S, commands_exports as T, sortExtensions as U, mergeAttributes as V, keydownHandler as W, PluginKey as X, Plugin as Y, Selection$1 as Z, useEditorState as _, ORDERED_LIST_MARKER_PATTERN as a, getCodeBlockLanguages as at, InputRule as b, TaskList as c, Code as d, Transform as et, EditorContent as f, useEditor as g, ReactNodeViewRenderer as h, Paragraph as i, getCodeBlockLanguageLabel as it, findParentNode as j, encodeHtmlEntities as k, src_default$2 as l, NodeViewWrapper as m, src_default$1 as n, Fragment as nt, OrderedList as o, isKnownCodeBlockLanguage as ot, NodeViewContent as p, closeHistory as q, GapCursor as r, Slice as rt, TaskItem as s, src_default as t, DOMSerializer as tt, CodeBlock as u, Editor as v, callOrReturn as w, Node as x, Extension as y, isActive as z };
