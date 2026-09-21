import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...e) => e.filter((e, i, a) => !!e && e.trim() !== "" && a.indexOf(e) === i).join(" ").trim(), toKebabCase = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), toCamelCase = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, i, a) => a ? a.toUpperCase() : i.toLowerCase()), toPascalCase = (e) => {
	let i = toCamelCase(e);
	return i.charAt(0).toUpperCase() + i.slice(1);
}, defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, hasA11yProp = (e) => {
	for (let i in e) if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
	return !1;
}, import_react = /* @__PURE__ */ __toESM(require_react()), Icon = (0, import_react.forwardRef)(({ color: e = "currentColor", size: i = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, className: c = "", children: l, iconNode: p, ...m }, h) => (0, import_react.createElement)("svg", {
	ref: h,
	...defaultAttributes,
	width: i,
	height: i,
	stroke: e,
	strokeWidth: s ? Number(a) * 24 / Number(i) : a,
	className: mergeClasses("lucide", c),
	...!l && !hasA11yProp(m) && { "aria-hidden": "true" },
	...m
}, [...p.map(([e, i]) => (0, import_react.createElement)(e, i)), ...Array.isArray(l) ? l : [l]])), createLucideIcon = (e, i) => {
	let a = (0, import_react.forwardRef)(({ className: a, ...c }, u) => (0, import_react.createElement)(Icon, {
		ref: u,
		iconNode: i,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(e))}`, `lucide-${e}`, a),
		...c
	}));
	return a.displayName = toPascalCase(e), a;
};
function r(e) {
	var i, a, o = "";
	if (typeof e == "string" || typeof e == "number") o += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var s = e.length;
		for (i = 0; i < s; i++) e[i] && (a = r(e[i])) && (o && (o += " "), o += a);
	} else for (a in e) e[a] && (o && (o += " "), o += a);
	return o;
}
function clsx() {
	for (var e, i, a = 0, o = "", s = arguments.length; a < s; a++) (e = arguments[a]) && (i = r(e)) && (o && (o += " "), o += i);
	return o;
}
var falsyToString = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e;
const cx = clsx, cva = (e, i) => (a) => {
	if (i?.variants == null) return cx(e, a?.class, a?.className);
	let { variants: o, defaultVariants: s } = i, c = Object.keys(o).map((e) => {
		let i = a?.[e], c = s?.[e];
		if (i === null) return null;
		let l = falsyToString(i) || falsyToString(c);
		return o[e][l];
	}), l = a && Object.entries(a).reduce((e, i) => {
		let [a, o] = i;
		return o === void 0 || (e[a] = o), e;
	}, {});
	return cx(e, c, i?.compoundVariants?.reduce((e, i) => {
		let { class: a, className: o, ...c } = i;
		return Object.entries(c).every((e) => {
			let [i, a] = e;
			return Array.isArray(a) ? a.includes({
				...s,
				...l
			}[i]) : {
				...s,
				...l
			}[i] === a;
		}) ? [
			...e,
			a,
			o
		] : e;
	}, []), a?.class, a?.className);
};
function setRef(e, i) {
	if (typeof e == "function") return e(i);
	e != null && (e.current = i);
}
function composeRefs(...e) {
	return (i) => {
		let a = !1, o = e.map((e) => {
			let o = setRef(e, i);
			return !a && typeof o == "function" && (a = !0), o;
		});
		if (a) return () => {
			for (let i = 0; i < o.length; i++) {
				let a = o[i];
				typeof a == "function" ? a() : setRef(e[i], null);
			}
		};
	};
}
function useComposedRefs(...e) {
	return import_react.useCallback(composeRefs(...e), e);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(e) {
	let i = import_react.forwardRef((i, a) => {
		let { children: o, ...s } = i, c = null, l = !1, u = [];
		isLazyComponent(o) && typeof use == "function" && (o = use(o._payload)), import_react.Children.forEach(o, (e) => {
			if (isSlottable(e)) {
				l = !0;
				let i = e, a = "child" in i.props ? i.props.child : i.props.children;
				isLazyComponent(a) && typeof use == "function" && (a = use(a._payload)), c = getSlottableElementFromSlottable(i, a), u.push(c?.props?.children);
			} else u.push(e);
		}), c ? c = import_react.cloneElement(c, void 0, u) : !l && import_react.Children.count(o) === 1 && import_react.isValidElement(o) && (c = o);
		let d = c ? getElementRef(c) : void 0, p = useComposedRefs(a, d);
		if (!c) {
			if (o || o === 0) throw Error(l ? createSlottableError(e) : createSlotError(e));
			return o;
		}
		let m = mergeProps(s, c.props ?? {});
		return c.type !== import_react.Fragment && (m.ref = a ? p : d), import_react.cloneElement(c, m);
	});
	return i.displayName = `${e}.Slot`, i;
}
var Slot = /* @__PURE__ */ createSlot("Slot"), SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(e) {
	let i = (e) => "child" in e ? e.children(e.child) : e.children;
	return i.displayName = `${e}.Slottable`, i.__radixId = SLOTTABLE_IDENTIFIER, i;
}
var getSlottableElementFromSlottable = (e, i) => {
	if ("child" in e.props) {
		let i = e.props.child;
		return import_react.isValidElement(i) ? import_react.cloneElement(i, void 0, e.props.children(i.props.children)) : null;
	}
	return import_react.isValidElement(i) ? i : null;
};
function mergeProps(e, i) {
	let a = { ...i };
	for (let o in i) {
		let s = e[o], c = i[o];
		/^on[A-Z]/.test(o) ? s && c ? a[o] = (...e) => {
			let i = c(...e);
			return s(...e), i;
		} : s && (a[o] = s) : o === "style" ? a[o] = {
			...s,
			...c
		} : o === "className" && (a[o] = [s, c].filter(Boolean).join(" "));
	}
	return {
		...e,
		...a
	};
}
function getElementRef(e) {
	let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning;
	return a ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get, a = i && "isReactWarning" in i && i.isReactWarning, a ? e.props.ref : e.props.ref || e.ref);
}
function isSlottable(e) {
	return import_react.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SLOTTABLE_IDENTIFIER;
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === REACT_LAZY_TYPE && "_payload" in e && isPromiseLike(e._payload);
}
function isPromiseLike(e) {
	return typeof e == "object" && !!e && "then" in e;
}
var createSlotError = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, createSlottableError = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, use = import_react.use, concatArrays = (e, i) => {
	let a = Array(e.length + i.length);
	for (let i = 0; i < e.length; i++) a[i] = e[i];
	for (let o = 0; o < i.length; o++) a[e.length + o] = i[o];
	return a;
}, createClassValidatorObject = (e, i) => ({
	classGroupId: e,
	validator: i
}), createClassPartObject = (e = /* @__PURE__ */ new Map(), i = null, a) => ({
	nextPart: e,
	validators: i,
	classGroupId: a
}), CLASS_PART_SEPARATOR = "-", EMPTY_CONFLICTS = [], ARBITRARY_PROPERTY_PREFIX = "arbitrary..", createClassGroupUtils = (e) => {
	let i = createClassMap(e), { conflictingClassGroups: a, conflictingClassGroupModifiers: o } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return getGroupIdForArbitraryProperty(e);
			let a = e.split(CLASS_PART_SEPARATOR);
			return getGroupRecursive(a, a[0] === "" && a.length > 1 ? 1 : 0, i);
		},
		getConflictingClassGroupIds: (e, i) => {
			if (i) {
				let i = o[e], s = a[e];
				return i ? s ? concatArrays(s, i) : i : s || EMPTY_CONFLICTS;
			}
			return a[e] || EMPTY_CONFLICTS;
		}
	};
}, getGroupRecursive = (e, i, a) => {
	if (e.length - i === 0) return a.classGroupId;
	let o = e[i], s = a.nextPart.get(o);
	if (s) {
		let a = getGroupRecursive(e, i + 1, s);
		if (a) return a;
	}
	let c = a.validators;
	if (c === null) return;
	let l = i === 0 ? e.join(CLASS_PART_SEPARATOR) : e.slice(i).join(CLASS_PART_SEPARATOR), u = c.length;
	for (let e = 0; e < u; e++) {
		let i = c[e];
		if (i.validator(l)) return i.classGroupId;
	}
}, getGroupIdForArbitraryProperty = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let i = e.slice(1, -1), a = i.indexOf(":"), o = i.slice(0, a);
	return o ? ARBITRARY_PROPERTY_PREFIX + o : void 0;
})(), createClassMap = (e) => {
	let { theme: i, classGroups: a } = e;
	return processClassGroups(a, i);
}, processClassGroups = (e, i) => {
	let a = createClassPartObject();
	for (let o in e) {
		let s = e[o];
		processClassesRecursively(s, a, o, i);
	}
	return a;
}, processClassesRecursively = (e, i, a, o) => {
	let s = e.length;
	for (let c = 0; c < s; c++) {
		let s = e[c];
		processClassDefinition(s, i, a, o);
	}
}, processClassDefinition = (e, i, a, o) => {
	if (typeof e == "string") {
		processStringDefinition(e, i, a);
		return;
	}
	if (typeof e == "function") {
		processFunctionDefinition(e, i, a, o);
		return;
	}
	processObjectDefinition(e, i, a, o);
}, processStringDefinition = (e, i, a) => {
	let o = e === "" ? i : getPart(i, e);
	o.classGroupId = a;
}, processFunctionDefinition = (e, i, a, o) => {
	if (isThemeGetter(e)) {
		processClassesRecursively(e(o), i, a, o);
		return;
	}
	i.validators === null && (i.validators = []), i.validators.push(createClassValidatorObject(a, e));
}, processObjectDefinition = (e, i, a, o) => {
	let s = Object.entries(e), c = s.length;
	for (let e = 0; e < c; e++) {
		let [c, l] = s[e];
		processClassesRecursively(l, getPart(i, c), a, o);
	}
}, getPart = (e, i) => {
	let a = e, o = i.split(CLASS_PART_SEPARATOR), s = o.length;
	for (let e = 0; e < s; e++) {
		let i = o[e], s = a.nextPart.get(i);
		s || (s = createClassPartObject(), a.nextPart.set(i, s)), a = s;
	}
	return a;
}, isThemeGetter = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, createLruCache = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let i = 0, a = Object.create(null), o = Object.create(null), s = (s, c) => {
		a[s] = c, i++, i > e && (i = 0, o = a, a = Object.create(null));
	};
	return {
		get(e) {
			let i = a[e];
			if (i !== void 0) return i;
			if ((i = o[e]) !== void 0) return s(e, i), i;
		},
		set(e, i) {
			e in a ? a[e] = i : s(e, i);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", EMPTY_MODIFIERS = [], createResultObject = (e, i, a, o, s) => ({
	modifiers: e,
	hasImportantModifier: i,
	baseClassName: a,
	maybePostfixModifierPosition: o,
	isExternal: s
}), createParseClassName = (e) => {
	let { prefix: i, experimentalParseClassName: a } = e, o = (e) => {
		let i = [], a = 0, o = 0, s = 0, c, l = e.length;
		for (let u = 0; u < l; u++) {
			let l = e[u];
			if (a === 0 && o === 0) {
				if (l === MODIFIER_SEPARATOR) {
					i.push(e.slice(s, u)), s = u + 1;
					continue;
				}
				if (l === "/") {
					c = u;
					continue;
				}
			}
			l === "[" ? a++ : l === "]" ? a-- : l === "(" ? o++ : l === ")" && o--;
		}
		let u = i.length === 0 ? e : e.slice(s), d = u, f = !1;
		u.endsWith(IMPORTANT_MODIFIER) ? (d = u.slice(0, -1), f = !0) : u.startsWith(IMPORTANT_MODIFIER) && (d = u.slice(1), f = !0);
		let p = c && c > s ? c - s : void 0;
		return createResultObject(i, f, d, p);
	};
	if (i) {
		let e = i + MODIFIER_SEPARATOR, a = o;
		o = (i) => i.startsWith(e) ? a(i.slice(e.length)) : createResultObject(EMPTY_MODIFIERS, !1, i, void 0, !0);
	}
	if (a) {
		let e = o;
		o = (i) => a({
			className: i,
			parseClassName: e
		});
	}
	return o;
}, createSortModifiers = (e) => {
	let i = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, a) => {
		i.set(e, 1e6 + a);
	}), (e) => {
		let a = [], o = [];
		for (let s = 0; s < e.length; s++) {
			let c = e[s], l = c[0] === "[", u = i.has(c);
			l || u ? (o.length > 0 && (o.sort(), a.push(...o), o = []), a.push(c)) : o.push(c);
		}
		return o.length > 0 && (o.sort(), a.push(...o)), a;
	};
}, createConfigUtils = (e) => ({
	cache: createLruCache(e.cacheSize),
	parseClassName: createParseClassName(e),
	sortModifiers: createSortModifiers(e),
	...createClassGroupUtils(e)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (e, i) => {
	let { parseClassName: a, getClassGroupId: o, getConflictingClassGroupIds: s, sortModifiers: c } = i, l = [], u = e.trim().split(SPLIT_CLASSES_REGEX), d = "";
	for (let e = u.length - 1; e >= 0; --e) {
		let i = u[e], { isExternal: f, modifiers: p, hasImportantModifier: m, baseClassName: h, maybePostfixModifierPosition: g } = a(i);
		if (f) {
			d = i + (d.length > 0 ? " " + d : d);
			continue;
		}
		let _ = !!g, v = o(_ ? h.substring(0, g) : h);
		if (!v) {
			if (!_) {
				d = i + (d.length > 0 ? " " + d : d);
				continue;
			}
			if (v = o(h), !v) {
				d = i + (d.length > 0 ? " " + d : d);
				continue;
			}
			_ = !1;
		}
		let y = p.length === 0 ? "" : p.length === 1 ? p[0] : c(p).join(":"), b = m ? y + IMPORTANT_MODIFIER : y, x = b + v;
		if (l.indexOf(x) > -1) continue;
		l.push(x);
		let S = s(v, _);
		for (let e = 0; e < S.length; ++e) {
			let i = S[e];
			l.push(b + i);
		}
		d = i + (d.length > 0 ? " " + d : d);
	}
	return d;
}, twJoin = (...e) => {
	let i = 0, a, o, s = "";
	for (; i < e.length;) (a = e[i++]) && (o = toValue(a)) && (s && (s += " "), s += o);
	return s;
}, toValue = (e) => {
	if (typeof e == "string") return e;
	let i, a = "";
	for (let o = 0; o < e.length; o++) e[o] && (i = toValue(e[o])) && (a && (a += " "), a += i);
	return a;
}, createTailwindMerge = (e, ...i) => {
	let a, o, s, c, l = (l) => (a = createConfigUtils(i.reduce((e, i) => i(e), e())), o = a.cache.get, s = a.cache.set, c = u, u(l)), u = (e) => {
		let i = o(e);
		if (i) return i;
		let c = mergeClassList(e, a);
		return s(e, c), c;
	};
	return c = l, (...e) => c(twJoin(...e));
}, fallbackThemeArr = [], fromTheme = (e) => {
	let i = (i) => i[e] || fallbackThemeArr;
	return i.isThemeGetter = !0, i;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (e) => fractionRegex.test(e), isNumber = (e) => !!e && !Number.isNaN(Number(e)), isInteger = (e) => !!e && Number.isInteger(Number(e)), isPercent = (e) => e.endsWith("%") && isNumber(e.slice(0, -1)), isTshirtSize = (e) => tshirtUnitRegex.test(e), isAny = () => !0, isLengthOnly = (e) => lengthUnitRegex.test(e) && !colorFunctionRegex.test(e), isNever = () => !1, isShadow = (e) => shadowRegex.test(e), isImage = (e) => imageRegex.test(e), isAnyNonArbitrary = (e) => !isArbitraryValue(e) && !isArbitraryVariable(e), isArbitrarySize = (e) => getIsArbitraryValue(e, isLabelSize, isNever), isArbitraryValue = (e) => arbitraryValueRegex.test(e), isArbitraryLength = (e) => getIsArbitraryValue(e, isLabelLength, isLengthOnly), isArbitraryNumber = (e) => getIsArbitraryValue(e, isLabelNumber, isNumber), isArbitraryWeight = (e) => getIsArbitraryValue(e, isLabelWeight, isAny), isArbitraryFamilyName = (e) => getIsArbitraryValue(e, isLabelFamilyName, isNever), isArbitraryPosition = (e) => getIsArbitraryValue(e, isLabelPosition, isNever), isArbitraryImage = (e) => getIsArbitraryValue(e, isLabelImage, isImage), isArbitraryShadow = (e) => getIsArbitraryValue(e, isLabelShadow, isShadow), isArbitraryVariable = (e) => arbitraryVariableRegex.test(e), isArbitraryVariableLength = (e) => getIsArbitraryVariable(e, isLabelLength), isArbitraryVariableFamilyName = (e) => getIsArbitraryVariable(e, isLabelFamilyName), isArbitraryVariablePosition = (e) => getIsArbitraryVariable(e, isLabelPosition), isArbitraryVariableSize = (e) => getIsArbitraryVariable(e, isLabelSize), isArbitraryVariableImage = (e) => getIsArbitraryVariable(e, isLabelImage), isArbitraryVariableShadow = (e) => getIsArbitraryVariable(e, isLabelShadow, !0), isArbitraryVariableWeight = (e) => getIsArbitraryVariable(e, isLabelWeight, !0), getIsArbitraryValue = (e, i, a) => {
	let o = arbitraryValueRegex.exec(e);
	return o ? o[1] ? i(o[1]) : a(o[2]) : !1;
}, getIsArbitraryVariable = (e, i, a = !1) => {
	let o = arbitraryVariableRegex.exec(e);
	return o ? o[1] ? i(o[1]) : a : !1;
}, isLabelPosition = (e) => e === "position" || e === "percentage", isLabelImage = (e) => e === "image" || e === "url", isLabelSize = (e) => e === "length" || e === "size" || e === "bg-size", isLabelLength = (e) => e === "length", isLabelNumber = (e) => e === "number", isLabelFamilyName = (e) => e === "family-name", isLabelWeight = (e) => e === "number" || e === "weight", isLabelShadow = (e) => e === "shadow", twMerge = /* @__PURE__ */ createTailwindMerge(() => {
	let e = fromTheme("color"), i = fromTheme("font"), a = fromTheme("text"), o = fromTheme("font-weight"), s = fromTheme("tracking"), c = fromTheme("leading"), l = fromTheme("breakpoint"), u = fromTheme("container"), d = fromTheme("spacing"), f = fromTheme("radius"), p = fromTheme("shadow"), m = fromTheme("inset-shadow"), h = fromTheme("text-shadow"), g = fromTheme("drop-shadow"), _ = fromTheme("blur"), v = fromTheme("perspective"), y = fromTheme("aspect"), b = fromTheme("ease"), x = fromTheme("animate"), S = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], C = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], w = () => [
		...C(),
		isArbitraryVariable,
		isArbitraryValue
	], T = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], E = () => [
		"auto",
		"contain",
		"none"
	], D = () => [
		isArbitraryVariable,
		isArbitraryValue,
		d
	], O = () => [
		isFraction,
		"full",
		"auto",
		...D()
	], k = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	], A = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	], j = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	], M = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	], N = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], P = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], F = () => ["auto", ...D()], I = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...D()
	], L = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...D()
	], R = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...D()
	], z = () => [
		e,
		isArbitraryVariable,
		isArbitraryValue
	], B = () => [
		...C(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	], V = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], H = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	], U = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	], W = () => [
		"",
		"none",
		"full",
		f,
		isArbitraryVariable,
		isArbitraryValue
	], G = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	], K = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], q = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], J = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	], Y = () => [
		"",
		"none",
		_,
		isArbitraryVariable,
		isArbitraryValue
	], X = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], Z = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], Q = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], $ = () => [
		isFraction,
		"full",
		...D()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				y
			] }],
			container: ["container"],
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				u
			] }],
			"break-after": [{ "break-after": S() }],
			"break-before": [{ "break-before": S() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: w() }],
			overflow: [{ overflow: T() }],
			"overflow-x": [{ "overflow-x": T() }],
			"overflow-y": [{ "overflow-y": T() }],
			overscroll: [{ overscroll: E() }],
			"overscroll-x": [{ "overscroll-x": E() }],
			"overscroll-y": [{ "overscroll-y": E() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: O() }],
			"inset-x": [{ "inset-x": O() }],
			"inset-y": [{ "inset-y": O() }],
			start: [{
				"inset-s": O(),
				start: O()
			}],
			end: [{
				"inset-e": O(),
				end: O()
			}],
			"inset-bs": [{ "inset-bs": O() }],
			"inset-be": [{ "inset-be": O() }],
			top: [{ top: O() }],
			right: [{ right: O() }],
			bottom: [{ bottom: O() }],
			left: [{ left: O() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				u,
				...D()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"grid-cols": [{ "grid-cols": k() }],
			"col-start-end": [{ col: A() }],
			"col-start": [{ "col-start": j() }],
			"col-end": [{ "col-end": j() }],
			"grid-rows": [{ "grid-rows": k() }],
			"row-start-end": [{ row: A() }],
			"row-start": [{ "row-start": j() }],
			"row-end": [{ "row-end": j() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": M() }],
			"auto-rows": [{ "auto-rows": M() }],
			gap: [{ gap: D() }],
			"gap-x": [{ "gap-x": D() }],
			"gap-y": [{ "gap-y": D() }],
			"justify-content": [{ justify: [...N(), "normal"] }],
			"justify-items": [{ "justify-items": [...P(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...P()] }],
			"align-content": [{ content: ["normal", ...N()] }],
			"align-items": [{ items: [...P(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...P(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": N() }],
			"place-items": [{ "place-items": [...P(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...P()] }],
			p: [{ p: D() }],
			px: [{ px: D() }],
			py: [{ py: D() }],
			ps: [{ ps: D() }],
			pe: [{ pe: D() }],
			pbs: [{ pbs: D() }],
			pbe: [{ pbe: D() }],
			pt: [{ pt: D() }],
			pr: [{ pr: D() }],
			pb: [{ pb: D() }],
			pl: [{ pl: D() }],
			m: [{ m: F() }],
			mx: [{ mx: F() }],
			my: [{ my: F() }],
			ms: [{ ms: F() }],
			me: [{ me: F() }],
			mbs: [{ mbs: F() }],
			mbe: [{ mbe: F() }],
			mt: [{ mt: F() }],
			mr: [{ mr: F() }],
			mb: [{ mb: F() }],
			ml: [{ ml: F() }],
			"space-x": [{ "space-x": D() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": D() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: I() }],
			"inline-size": [{ inline: ["auto", ...L()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...L()] }],
			"max-inline-size": [{ "max-inline": ["none", ...L()] }],
			"block-size": [{ block: ["auto", ...R()] }],
			"min-block-size": [{ "min-block": ["auto", ...R()] }],
			"max-block-size": [{ "max-block": ["none", ...R()] }],
			w: [{ w: [
				u,
				"screen",
				...I()
			] }],
			"min-w": [{ "min-w": [
				u,
				"screen",
				"none",
				...I()
			] }],
			"max-w": [{ "max-w": [
				u,
				"screen",
				"none",
				"prose",
				{ screen: [l] },
				...I()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...I()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...I()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...I()
			] }],
			"font-size": [{ text: [
				"base",
				a,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				o,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				i
			] }],
			"font-features": [{ "font-features": [isArbitraryValue] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				s,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			leading: [{ leading: [c, ...D()] }],
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: z() }],
			"text-color": [{ text: z() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...K(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			"text-decoration-color": [{ decoration: z() }],
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: D() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: B() }],
			"bg-repeat": [{ bg: V() }],
			"bg-size": [{ bg: H() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			"bg-color": [{ bg: z() }],
			"gradient-from-pos": [{ from: U() }],
			"gradient-via-pos": [{ via: U() }],
			"gradient-to-pos": [{ to: U() }],
			"gradient-from": [{ from: z() }],
			"gradient-via": [{ via: z() }],
			"gradient-to": [{ to: z() }],
			rounded: [{ rounded: W() }],
			"rounded-s": [{ "rounded-s": W() }],
			"rounded-e": [{ "rounded-e": W() }],
			"rounded-t": [{ "rounded-t": W() }],
			"rounded-r": [{ "rounded-r": W() }],
			"rounded-b": [{ "rounded-b": W() }],
			"rounded-l": [{ "rounded-l": W() }],
			"rounded-ss": [{ "rounded-ss": W() }],
			"rounded-se": [{ "rounded-se": W() }],
			"rounded-ee": [{ "rounded-ee": W() }],
			"rounded-es": [{ "rounded-es": W() }],
			"rounded-tl": [{ "rounded-tl": W() }],
			"rounded-tr": [{ "rounded-tr": W() }],
			"rounded-br": [{ "rounded-br": W() }],
			"rounded-bl": [{ "rounded-bl": W() }],
			"border-w": [{ border: G() }],
			"border-w-x": [{ "border-x": G() }],
			"border-w-y": [{ "border-y": G() }],
			"border-w-s": [{ "border-s": G() }],
			"border-w-e": [{ "border-e": G() }],
			"border-w-bs": [{ "border-bs": G() }],
			"border-w-be": [{ "border-be": G() }],
			"border-w-t": [{ "border-t": G() }],
			"border-w-r": [{ "border-r": G() }],
			"border-w-b": [{ "border-b": G() }],
			"border-w-l": [{ "border-l": G() }],
			"divide-x": [{ "divide-x": G() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": G() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...K(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...K(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: z() }],
			"border-color-x": [{ "border-x": z() }],
			"border-color-y": [{ "border-y": z() }],
			"border-color-s": [{ "border-s": z() }],
			"border-color-e": [{ "border-e": z() }],
			"border-color-bs": [{ "border-bs": z() }],
			"border-color-be": [{ "border-be": z() }],
			"border-color-t": [{ "border-t": z() }],
			"border-color-r": [{ "border-r": z() }],
			"border-color-b": [{ "border-b": z() }],
			"border-color-l": [{ "border-l": z() }],
			"divide-color": [{ divide: z() }],
			"outline-style": [{ outline: [
				...K(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"outline-color": [{ outline: z() }],
			shadow: [{ shadow: [
				"",
				"none",
				p,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"shadow-color": [{ shadow: z() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				m,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"inset-shadow-color": [{ "inset-shadow": z() }],
			"ring-w": [{ ring: G() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: z() }],
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			"ring-offset-color": [{ "ring-offset": z() }],
			"inset-ring-w": [{ "inset-ring": G() }],
			"inset-ring-color": [{ "inset-ring": z() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				h,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"text-shadow-color": [{ "text-shadow": z() }],
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"mix-blend": [{ "mix-blend": [
				...q(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": q() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": J() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": J() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": z() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": z() }],
			"mask-image-t-from-pos": [{ "mask-t-from": J() }],
			"mask-image-t-to-pos": [{ "mask-t-to": J() }],
			"mask-image-t-from-color": [{ "mask-t-from": z() }],
			"mask-image-t-to-color": [{ "mask-t-to": z() }],
			"mask-image-r-from-pos": [{ "mask-r-from": J() }],
			"mask-image-r-to-pos": [{ "mask-r-to": J() }],
			"mask-image-r-from-color": [{ "mask-r-from": z() }],
			"mask-image-r-to-color": [{ "mask-r-to": z() }],
			"mask-image-b-from-pos": [{ "mask-b-from": J() }],
			"mask-image-b-to-pos": [{ "mask-b-to": J() }],
			"mask-image-b-from-color": [{ "mask-b-from": z() }],
			"mask-image-b-to-color": [{ "mask-b-to": z() }],
			"mask-image-l-from-pos": [{ "mask-l-from": J() }],
			"mask-image-l-to-pos": [{ "mask-l-to": J() }],
			"mask-image-l-from-color": [{ "mask-l-from": z() }],
			"mask-image-l-to-color": [{ "mask-l-to": z() }],
			"mask-image-x-from-pos": [{ "mask-x-from": J() }],
			"mask-image-x-to-pos": [{ "mask-x-to": J() }],
			"mask-image-x-from-color": [{ "mask-x-from": z() }],
			"mask-image-x-to-color": [{ "mask-x-to": z() }],
			"mask-image-y-from-pos": [{ "mask-y-from": J() }],
			"mask-image-y-to-pos": [{ "mask-y-to": J() }],
			"mask-image-y-from-color": [{ "mask-y-from": z() }],
			"mask-image-y-to-color": [{ "mask-y-to": z() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": J() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": J() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": z() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": z() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": C() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": J() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": J() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": z() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": z() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: B() }],
			"mask-repeat": [{ mask: V() }],
			"mask-size": [{ mask: H() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			blur: [{ blur: Y() }],
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				g,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"drop-shadow-color": [{ "drop-shadow": z() }],
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-blur": [{ "backdrop-blur": Y() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": D() }],
			"border-spacing-x": [{ "border-spacing-x": D() }],
			"border-spacing-y": [{ "border-spacing-y": D() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				b,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			animate: [{ animate: [
				"none",
				x,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				v,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"perspective-origin": [{ "perspective-origin": w() }],
			rotate: [{ rotate: X() }],
			"rotate-x": [{ "rotate-x": X() }],
			"rotate-y": [{ "rotate-y": X() }],
			"rotate-z": [{ "rotate-z": X() }],
			scale: [{ scale: Z() }],
			"scale-x": [{ "scale-x": Z() }],
			"scale-y": [{ "scale-y": Z() }],
			"scale-z": [{ "scale-z": Z() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: Q() }],
			"skew-x": [{ "skew-x": Q() }],
			"skew-y": [{ "skew-y": Q() }],
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: w() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: $() }],
			"translate-x": [{ "translate-x": $() }],
			"translate-y": [{ "translate-y": $() }],
			"translate-z": [{ "translate-z": $() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: z() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: z() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": D() }],
			"scroll-mx": [{ "scroll-mx": D() }],
			"scroll-my": [{ "scroll-my": D() }],
			"scroll-ms": [{ "scroll-ms": D() }],
			"scroll-me": [{ "scroll-me": D() }],
			"scroll-mbs": [{ "scroll-mbs": D() }],
			"scroll-mbe": [{ "scroll-mbe": D() }],
			"scroll-mt": [{ "scroll-mt": D() }],
			"scroll-mr": [{ "scroll-mr": D() }],
			"scroll-mb": [{ "scroll-mb": D() }],
			"scroll-ml": [{ "scroll-ml": D() }],
			"scroll-p": [{ "scroll-p": D() }],
			"scroll-px": [{ "scroll-px": D() }],
			"scroll-py": [{ "scroll-py": D() }],
			"scroll-ps": [{ "scroll-ps": D() }],
			"scroll-pe": [{ "scroll-pe": D() }],
			"scroll-pbs": [{ "scroll-pbs": D() }],
			"scroll-pbe": [{ "scroll-pbe": D() }],
			"scroll-pt": [{ "scroll-pt": D() }],
			"scroll-pr": [{ "scroll-pr": D() }],
			"scroll-pb": [{ "scroll-pb": D() }],
			"scroll-pl": [{ "scroll-pl": D() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			fill: [{ fill: ["none", ...z()] }],
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			stroke: [{ stroke: ["none", ...z()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
function cn(...e) {
	return twMerge(clsx(e));
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), buttonVariants = cva("inline-flex shrink-0 items-center justify-center gap-2 rounded-md cursor-pointer text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
			outline: "border border-border bg-background text-foreground shadow-xs hover:border-muted-foreground/35 hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9",
			"icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-8",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Button = import_react.forwardRef(function({ className: e, variant: i = "default", size: a = "default", asChild: o = !1, ...s }, c) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o ? Slot : "button", {
		ref: c,
		"data-slot": "button",
		"data-variant": i,
		"data-size": a,
		className: cn(buttonVariants({
			variant: i,
			size: a,
			className: e
		})),
		...s
	});
});
function useMountedRef() {
	let e = (0, import_react.useRef)(!0);
	return (0, import_react.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), e;
}
export { createSlot as a, useComposedRefs as c, Slot as i, cva as l, Button as n, createSlottable as o, cn as r, composeRefs as s, useMountedRef as t, createLucideIcon as u };
