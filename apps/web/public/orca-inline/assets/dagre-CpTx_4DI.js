import { $ as _arrayMap_default, A as _baseKeys_default, B as _baseRest_default, C as _baseFlatten_default, D as _castPath_default, E as _toKey_default, F as _baseUnary_default, G as _arrayEach_default, H as eq_default, I as isBuffer_default, J as constant_default, K as _setToString_default, L as isArguments_default, M as _arrayLikeKeys_default, N as isTypedArray_default, O as toString_default, P as _nodeUtil_default, Q as isArray_default, R as _isPrototype_default, S as _Stack_default, T as _baseGet_default, U as _isIndex_default, V as _overRest_default, W as _baseFindIndex_default, X as identity_default, Y as isFunction_default, Z as isObject_default, _ as _getTag_default, a as filter_default, b as _getSymbols_default, c as isArrayLikeObject_default, d as _baseFor_default, et as isSymbol_default, f as _baseIteratee_default, g as _Uint8Array_default, h as _hasPath_default, i as values_default, it as _root_default, j as _overArg_default, k as keys_default, l as _baseEach_default, m as hasIn_default, n as reduce_default, nt as _baseGetTag_default, o as forEach_default, p as _baseProperty_default, q as _defineProperty_default, r as isUndefined_default, rt as _Symbol_default, s as _castFunction_default, t as Graph, tt as isObjectLike_default, u as _baseForOwn_default, v as _getAllKeys_default, w as _arrayPush_default, x as stubArray_default, y as _baseGetAllKeys_default, z as isArrayLike_default } from "./graphlib-CFSw-S2d.js";
var reWhitespace = /\s/;
function trimmedEndIndex(c) {
	for (var L = c.length; L-- && reWhitespace.test(c.charAt(L)););
	return L;
}
var _trimmedEndIndex_default = trimmedEndIndex, reTrimStart = /^\s+/;
function baseTrim(c) {
	return c && c.slice(0, _trimmedEndIndex_default(c) + 1).replace(reTrimStart, "");
}
var _baseTrim_default = baseTrim, NAN = NaN, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt;
function toNumber(c) {
	if (typeof c == "number") return c;
	if (isSymbol_default(c)) return NAN;
	if (isObject_default(c)) {
		var L = typeof c.valueOf == "function" ? c.valueOf() : c;
		c = isObject_default(L) ? L + "" : L;
	}
	if (typeof c != "string") return c === 0 ? c : +c;
	c = _baseTrim_default(c);
	var R = reIsBinary.test(c);
	return R || reIsOctal.test(c) ? freeParseInt(c.slice(2), R ? 2 : 8) : reIsBadHex.test(c) ? NAN : +c;
}
var toNumber_default = toNumber, INFINITY = Infinity, MAX_INTEGER = 17976931348623157e292;
function toFinite(c) {
	return c ? (c = toNumber_default(c), c === INFINITY || c === -INFINITY ? (c < 0 ? -1 : 1) * MAX_INTEGER : c === c ? c : 0) : c === 0 ? c : 0;
}
var toFinite_default = toFinite;
function toInteger(c) {
	var L = toFinite_default(c), R = L % 1;
	return L === L ? R ? L - R : L : 0;
}
var toInteger_default = toInteger, objectCreate = Object.create, _baseCreate_default = function() {
	function c() {}
	return function(L) {
		if (!isObject_default(L)) return {};
		if (objectCreate) return objectCreate(L);
		c.prototype = L;
		var R = new c();
		return c.prototype = void 0, R;
	};
}();
function copyArray(c, L) {
	var R = -1, z = c.length;
	for (L ||= Array(z); ++R < z;) L[R] = c[R];
	return L;
}
var _copyArray_default = copyArray;
function baseAssignValue(c, L, R) {
	L == "__proto__" && _defineProperty_default ? _defineProperty_default(c, L, {
		configurable: !0,
		enumerable: !0,
		value: R,
		writable: !0
	}) : c[L] = R;
}
var _baseAssignValue_default = baseAssignValue, hasOwnProperty$5 = Object.prototype.hasOwnProperty;
function assignValue(c, L, R) {
	var z = c[L];
	(!(hasOwnProperty$5.call(c, L) && eq_default(z, R)) || R === void 0 && !(L in c)) && _baseAssignValue_default(c, L, R);
}
var _assignValue_default = assignValue;
function copyObject(c, L, R, z) {
	var B = !R;
	R ||= {};
	for (var V = -1, H = L.length; ++V < H;) {
		var U = L[V], W = z ? z(R[U], c[U], U, R, c) : void 0;
		W === void 0 && (W = c[U]), B ? _baseAssignValue_default(R, U, W) : _assignValue_default(R, U, W);
	}
	return R;
}
var _copyObject_default = copyObject;
function isIterateeCall(c, L, R) {
	if (!isObject_default(R)) return !1;
	var z = typeof L;
	return (z == "number" ? isArrayLike_default(R) && _isIndex_default(L, R.length) : z == "string" && L in R) ? eq_default(R[L], c) : !1;
}
var _isIterateeCall_default = isIterateeCall;
function createAssigner(c) {
	return _baseRest_default(function(L, R) {
		var z = -1, B = R.length, V = B > 1 ? R[B - 1] : void 0, H = B > 2 ? R[2] : void 0;
		for (V = c.length > 3 && typeof V == "function" ? (B--, V) : void 0, H && _isIterateeCall_default(R[0], R[1], H) && (V = B < 3 ? void 0 : V, B = 1), L = Object(L); ++z < B;) {
			var U = R[z];
			U && c(L, U, z, V);
		}
		return L;
	});
}
var _createAssigner_default = createAssigner;
function nativeKeysIn(c) {
	var L = [];
	if (c != null) for (var R in Object(c)) L.push(R);
	return L;
}
var _nativeKeysIn_default = nativeKeysIn, hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function baseKeysIn(c) {
	if (!isObject_default(c)) return _nativeKeysIn_default(c);
	var L = _isPrototype_default(c), R = [];
	for (var z in c) z == "constructor" && (L || !hasOwnProperty$4.call(c, z)) || R.push(z);
	return R;
}
var _baseKeysIn_default = baseKeysIn;
function keysIn(c) {
	return isArrayLike_default(c) ? _arrayLikeKeys_default(c, !0) : _baseKeysIn_default(c);
}
var keysIn_default = keysIn;
function flatten(c) {
	return c != null && c.length ? _baseFlatten_default(c, 1) : [];
}
var flatten_default = flatten;
function flatRest(c) {
	return _setToString_default(_overRest_default(c, void 0, flatten_default), c + "");
}
var _flatRest_default = flatRest, _getPrototype_default = _overArg_default(Object.getPrototypeOf, Object), objectTag$1 = "[object Object]", funcProto = Function.prototype, objectProto$1 = Object.prototype, funcToString = funcProto.toString, hasOwnProperty$3 = objectProto$1.hasOwnProperty, objectCtorString = funcToString.call(Object);
function isPlainObject(c) {
	if (!isObjectLike_default(c) || _baseGetTag_default(c) != objectTag$1) return !1;
	var L = _getPrototype_default(c);
	if (L === null) return !0;
	var R = hasOwnProperty$3.call(L, "constructor") && L.constructor;
	return typeof R == "function" && R instanceof R && funcToString.call(R) == objectCtorString;
}
var isPlainObject_default = isPlainObject, reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function hasUnicode(c) {
	return reHasUnicode.test(c);
}
var _hasUnicode_default = hasUnicode;
function baseAssign(c, L) {
	return c && _copyObject_default(L, keys_default(L), c);
}
var _baseAssign_default = baseAssign;
function baseAssignIn(c, L) {
	return c && _copyObject_default(L, keysIn_default(L), c);
}
var _baseAssignIn_default = baseAssignIn, freeExports = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module, Buffer = freeModule && freeModule.exports === freeExports ? _root_default.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(c, L) {
	if (L) return c.slice();
	var R = c.length, z = allocUnsafe ? allocUnsafe(R) : new c.constructor(R);
	return c.copy(z), z;
}
var _cloneBuffer_default = cloneBuffer;
function copySymbols(c, L) {
	return _copyObject_default(c, _getSymbols_default(c), L);
}
var _copySymbols_default = copySymbols, _getSymbolsIn_default = Object.getOwnPropertySymbols ? function(c) {
	for (var L = []; c;) _arrayPush_default(L, _getSymbols_default(c)), c = _getPrototype_default(c);
	return L;
} : stubArray_default;
function copySymbolsIn(c, L) {
	return _copyObject_default(c, _getSymbolsIn_default(c), L);
}
var _copySymbolsIn_default = copySymbolsIn;
function getAllKeysIn(c) {
	return _baseGetAllKeys_default(c, keysIn_default, _getSymbolsIn_default);
}
var _getAllKeysIn_default = getAllKeysIn, hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function initCloneArray(c) {
	var L = c.length, R = new c.constructor(L);
	return L && typeof c[0] == "string" && hasOwnProperty$2.call(c, "index") && (R.index = c.index, R.input = c.input), R;
}
var _initCloneArray_default = initCloneArray;
function cloneArrayBuffer(c) {
	var L = new c.constructor(c.byteLength);
	return new _Uint8Array_default(L).set(new _Uint8Array_default(c)), L;
}
var _cloneArrayBuffer_default = cloneArrayBuffer;
function cloneDataView(c, L) {
	var R = L ? _cloneArrayBuffer_default(c.buffer) : c.buffer;
	return new c.constructor(R, c.byteOffset, c.byteLength);
}
var _cloneDataView_default = cloneDataView, reFlags = /\w*$/;
function cloneRegExp(c) {
	var L = new c.constructor(c.source, reFlags.exec(c));
	return L.lastIndex = c.lastIndex, L;
}
var _cloneRegExp_default = cloneRegExp, symbolProto = _Symbol_default ? _Symbol_default.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(c) {
	return symbolValueOf ? Object(symbolValueOf.call(c)) : {};
}
var _cloneSymbol_default = cloneSymbol;
function cloneTypedArray(c, L) {
	var R = L ? _cloneArrayBuffer_default(c.buffer) : c.buffer;
	return new c.constructor(R, c.byteOffset, c.length);
}
var _cloneTypedArray_default = cloneTypedArray, boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$3 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$1 = "[object Symbol]", arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(c, L, R) {
	var z = c.constructor;
	switch (L) {
		case arrayBufferTag$1: return _cloneArrayBuffer_default(c);
		case boolTag$1:
		case dateTag$1: return new z(+c);
		case dataViewTag$1: return _cloneDataView_default(c, R);
		case float32Tag$1:
		case float64Tag$1:
		case int8Tag$1:
		case int16Tag$1:
		case int32Tag$1:
		case uint8Tag$1:
		case uint8ClampedTag$1:
		case uint16Tag$1:
		case uint32Tag$1: return _cloneTypedArray_default(c, R);
		case mapTag$3: return new z();
		case numberTag$1:
		case stringTag$2: return new z(c);
		case regexpTag$1: return _cloneRegExp_default(c);
		case setTag$3: return new z();
		case symbolTag$1: return _cloneSymbol_default(c);
	}
}
var _initCloneByTag_default = initCloneByTag;
function initCloneObject(c) {
	return typeof c.constructor == "function" && !_isPrototype_default(c) ? _baseCreate_default(_getPrototype_default(c)) : {};
}
var _initCloneObject_default = initCloneObject, mapTag$2 = "[object Map]";
function baseIsMap(c) {
	return isObjectLike_default(c) && _getTag_default(c) == mapTag$2;
}
var _baseIsMap_default = baseIsMap, nodeIsMap = _nodeUtil_default && _nodeUtil_default.isMap, isMap_default = nodeIsMap ? _baseUnary_default(nodeIsMap) : _baseIsMap_default, setTag$2 = "[object Set]";
function baseIsSet(c) {
	return isObjectLike_default(c) && _getTag_default(c) == setTag$2;
}
var _baseIsSet_default = baseIsSet, nodeIsSet = _nodeUtil_default && _nodeUtil_default.isSet, isSet_default = nodeIsSet ? _baseUnary_default(nodeIsSet) : _baseIsSet_default, CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4, argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0, cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;
function baseClone(c, L, R, z, B, V) {
	var H, W = L & CLONE_DEEP_FLAG$1, K = L & CLONE_FLAT_FLAG, q = L & CLONE_SYMBOLS_FLAG$1;
	if (R && (H = B ? R(c, z, B, V) : R(c)), H !== void 0) return H;
	if (!isObject_default(c)) return c;
	var J = isArray_default(c);
	if (J) {
		if (H = _initCloneArray_default(c), !W) return _copyArray_default(c, H);
	} else {
		var Y = _getTag_default(c), X = Y == funcTag || Y == genTag;
		if (isBuffer_default(c)) return _cloneBuffer_default(c, W);
		if (Y == objectTag || Y == argsTag || X && !B) {
			if (H = K || X ? {} : _initCloneObject_default(c), !W) return K ? _copySymbolsIn_default(c, _baseAssignIn_default(H, c)) : _copySymbols_default(c, _baseAssign_default(H, c));
		} else {
			if (!cloneableTags[Y]) return B ? c : {};
			H = _initCloneByTag_default(c, Y, W);
		}
	}
	V ||= new _Stack_default();
	var Z = V.get(c);
	if (Z) return Z;
	V.set(c, H), isSet_default(c) ? c.forEach(function(z) {
		H.add(baseClone(z, L, R, z, c, V));
	}) : isMap_default(c) && c.forEach(function(z, B) {
		H.set(B, baseClone(z, L, R, B, c, V));
	});
	var Q = J ? void 0 : (q ? K ? _getAllKeysIn_default : _getAllKeys_default : K ? keysIn_default : keys_default)(c);
	return _arrayEach_default(Q || c, function(z, B) {
		Q && (B = z, z = c[B]), _assignValue_default(H, B, baseClone(z, L, R, B, c, V));
	}), H;
}
var _baseClone_default = baseClone, CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(c) {
	return _baseClone_default(c, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_default = cloneDeep, now_default = function() {
	return _root_default.Date.now();
}, objectProto = Object.prototype, hasOwnProperty$1 = objectProto.hasOwnProperty, defaults_default = _baseRest_default(function(c, L) {
	c = Object(c);
	var R = -1, z = L.length, B = z > 2 ? L[2] : void 0;
	for (B && _isIterateeCall_default(L[0], L[1], B) && (z = 1); ++R < z;) for (var V = L[R], H = keysIn_default(V), U = -1, G = H.length; ++U < G;) {
		var K = H[U], q = c[K];
		(q === void 0 || eq_default(q, objectProto[K]) && !hasOwnProperty$1.call(c, K)) && (c[K] = V[K]);
	}
	return c;
});
function assignMergeValue(c, L, R) {
	(R !== void 0 && !eq_default(c[L], R) || R === void 0 && !(L in c)) && _baseAssignValue_default(c, L, R);
}
var _assignMergeValue_default = assignMergeValue;
function safeGet(c, L) {
	if (!(L === "constructor" && typeof c[L] == "function") && L != "__proto__") return c[L];
}
var _safeGet_default = safeGet;
function toPlainObject(c) {
	return _copyObject_default(c, keysIn_default(c));
}
var toPlainObject_default = toPlainObject;
function baseMergeDeep(c, L, R, z, B, V, H) {
	var U = _safeGet_default(c, R), W = _safeGet_default(L, R), K = H.get(W);
	if (K) {
		_assignMergeValue_default(c, R, K);
		return;
	}
	var q = V ? V(U, W, R + "", c, L, H) : void 0, Y = q === void 0;
	if (Y) {
		var Z = isArray_default(W), Q = !Z && isBuffer_default(W), $ = !Z && !Q && isTypedArray_default(W);
		q = W, Z || Q || $ ? isArray_default(U) ? q = U : isArrayLikeObject_default(U) ? q = _copyArray_default(U) : Q ? (Y = !1, q = _cloneBuffer_default(W, !0)) : $ ? (Y = !1, q = _cloneTypedArray_default(W, !0)) : q = [] : isPlainObject_default(W) || isArguments_default(W) ? (q = U, isArguments_default(U) ? q = toPlainObject_default(U) : (!isObject_default(U) || isFunction_default(U)) && (q = _initCloneObject_default(W))) : Y = !1;
	}
	Y && (H.set(W, q), B(q, W, z, V, H), H.delete(W)), _assignMergeValue_default(c, R, q);
}
var _baseMergeDeep_default = baseMergeDeep;
function baseMerge(c, L, R, z, B) {
	c !== L && _baseFor_default(L, function(V, H) {
		if (B ||= new _Stack_default(), isObject_default(V)) _baseMergeDeep_default(c, L, H, R, baseMerge, z, B);
		else {
			var U = z ? z(_safeGet_default(c, H), V, H + "", c, L, B) : void 0;
			U === void 0 && (U = V), _assignMergeValue_default(c, H, U);
		}
	}, keysIn_default);
}
var _baseMerge_default = baseMerge;
function last(c) {
	var L = c == null ? 0 : c.length;
	return L ? c[L - 1] : void 0;
}
var last_default = last;
function createFind(c) {
	return function(L, R, z) {
		var B = Object(L);
		if (!isArrayLike_default(L)) {
			var V = _baseIteratee_default(R, 3);
			L = keys_default(L), R = function(c) {
				return V(B[c], c, B);
			};
		}
		var H = c(L, R, z);
		return H > -1 ? B[V ? L[H] : H] : void 0;
	};
}
var _createFind_default = createFind, nativeMax$1 = Math.max;
function findIndex(c, L, R) {
	var z = c == null ? 0 : c.length;
	if (!z) return -1;
	var B = R == null ? 0 : toInteger_default(R);
	return B < 0 && (B = nativeMax$1(z + B, 0)), _baseFindIndex_default(c, _baseIteratee_default(L, 3), B);
}
var find_default = _createFind_default(findIndex);
function baseMap(c, L) {
	var R = -1, z = isArrayLike_default(c) ? Array(c.length) : [];
	return _baseEach_default(c, function(c, B, V) {
		z[++R] = L(c, B, V);
	}), z;
}
var _baseMap_default = baseMap;
function map(L, R) {
	return (isArray_default(L) ? _arrayMap_default : _baseMap_default)(L, _baseIteratee_default(R, 3));
}
var map_default = map;
function forIn(c, L) {
	return c == null ? c : _baseFor_default(c, _castFunction_default(L), keysIn_default);
}
var forIn_default = forIn;
function forOwn(c, L) {
	return c && _baseForOwn_default(c, _castFunction_default(L));
}
var forOwn_default = forOwn;
function baseGt(c, L) {
	return c > L;
}
var _baseGt_default = baseGt, hasOwnProperty = Object.prototype.hasOwnProperty;
function baseHas(c, L) {
	return c != null && hasOwnProperty.call(c, L);
}
var _baseHas_default = baseHas;
function has(c, L) {
	return c != null && _hasPath_default(c, L, _baseHas_default);
}
var has_default = has, stringTag = "[object String]";
function isString(c) {
	return typeof c == "string" || !isArray_default(c) && isObjectLike_default(c) && _baseGetTag_default(c) == stringTag;
}
var isString_default = isString;
function baseLt(c, L) {
	return c < L;
}
var _baseLt_default = baseLt;
function mapValues(c, L) {
	var R = {};
	return L = _baseIteratee_default(L, 3), _baseForOwn_default(c, function(c, z, B) {
		_baseAssignValue_default(R, z, L(c, z, B));
	}), R;
}
var mapValues_default = mapValues;
function baseExtremum(c, L, R) {
	for (var z = -1, B = c.length; ++z < B;) {
		var V = c[z], H = L(V);
		if (H != null && (U === void 0 ? H === H && !isSymbol_default(H) : R(H, U))) var U = H, W = V;
	}
	return W;
}
var _baseExtremum_default = baseExtremum;
function max(c) {
	return c && c.length ? _baseExtremum_default(c, identity_default, _baseGt_default) : void 0;
}
var max_default = max, merge_default = _createAssigner_default(function(c, L, R) {
	_baseMerge_default(c, L, R);
});
function min(c) {
	return c && c.length ? _baseExtremum_default(c, identity_default, _baseLt_default) : void 0;
}
var min_default = min;
function minBy(c, L) {
	return c && c.length ? _baseExtremum_default(c, _baseIteratee_default(L, 2), _baseLt_default) : void 0;
}
var minBy_default = minBy;
function baseSet(c, L, R, z) {
	if (!isObject_default(c)) return c;
	L = _castPath_default(L, c);
	for (var H = -1, U = L.length, W = U - 1, G = c; G != null && ++H < U;) {
		var K = _toKey_default(L[H]), q = R;
		if (K === "__proto__" || K === "constructor" || K === "prototype") return c;
		if (H != W) {
			var J = G[K];
			q = z ? z(J, K, G) : void 0, q === void 0 && (q = isObject_default(J) ? J : _isIndex_default(L[H + 1]) ? [] : {});
		}
		_assignValue_default(G, K, q), G = G[K];
	}
	return c;
}
var _baseSet_default = baseSet;
function basePickBy(c, L, R) {
	for (var z = -1, V = L.length, H = {}; ++z < V;) {
		var U = L[z], W = _baseGet_default(c, U);
		R(W, U) && _baseSet_default(H, _castPath_default(U, c), W);
	}
	return H;
}
var _basePickBy_default = basePickBy;
function baseSortBy(c, L) {
	var R = c.length;
	for (c.sort(L); R--;) c[R] = c[R].value;
	return c;
}
var _baseSortBy_default = baseSortBy;
function compareAscending(c, L) {
	if (c !== L) {
		var R = c !== void 0, z = c === null, B = c === c, V = isSymbol_default(c), H = L !== void 0, U = L === null, W = L === L, G = isSymbol_default(L);
		if (!U && !G && !V && c > L || V && H && W && !U && !G || z && H && W || !R && W || !B) return 1;
		if (!z && !V && !G && c < L || G && R && B && !z && !V || U && R && B || !H && B || !W) return -1;
	}
	return 0;
}
var _compareAscending_default = compareAscending;
function compareMultiple(c, L, R) {
	for (var z = -1, B = c.criteria, V = L.criteria, H = B.length, U = R.length; ++z < H;) {
		var W = _compareAscending_default(B[z], V[z]);
		if (W) return z >= U ? W : W * (R[z] == "desc" ? -1 : 1);
	}
	return c.index - L.index;
}
var _compareMultiple_default = compareMultiple;
function baseOrderBy(L, R, z) {
	R = R.length ? _arrayMap_default(R, function(c) {
		return isArray_default(c) ? function(L) {
			return _baseGet_default(L, c.length === 1 ? c[0] : c);
		} : c;
	}) : [identity_default];
	var B = -1;
	return R = _arrayMap_default(R, _baseUnary_default(_baseIteratee_default)), _baseSortBy_default(_baseMap_default(L, function(L, z, V) {
		return {
			criteria: _arrayMap_default(R, function(c) {
				return c(L);
			}),
			index: ++B,
			value: L
		};
	}), function(c, L) {
		return _compareMultiple_default(c, L, z);
	});
}
var _baseOrderBy_default = baseOrderBy, _asciiSize_default = _baseProperty_default("length"), rsAstralRange = "\\ud800-\\udfff", rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", rsVarRange = "\\ufe0e\\ufe0f", rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
	rsNonAstral,
	rsRegional,
	rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [
	rsNonAstral + rsCombo + "?",
	rsCombo,
	rsRegional,
	rsSurrPair,
	rsAstral
].join("|") + ")", reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeSize(c) {
	for (var L = reUnicode.lastIndex = 0; reUnicode.test(c);) ++L;
	return L;
}
var _unicodeSize_default = unicodeSize;
function stringSize(c) {
	return _hasUnicode_default(c) ? _unicodeSize_default(c) : _asciiSize_default(c);
}
var _stringSize_default = stringSize;
function basePick(c, L) {
	return _basePickBy_default(c, L, function(L, R) {
		return hasIn_default(c, R);
	});
}
var _basePick_default = basePick, pick_default = _flatRest_default(function(c, L) {
	return c == null ? {} : _basePick_default(c, L);
}), nativeCeil = Math.ceil, nativeMax = Math.max;
function baseRange(c, L, R, z) {
	for (var B = -1, V = nativeMax(nativeCeil((L - c) / (R || 1)), 0), H = Array(V); V--;) H[z ? V : ++B] = c, c += R;
	return H;
}
var _baseRange_default = baseRange;
function createRange(c) {
	return function(L, R, z) {
		return z && typeof z != "number" && _isIterateeCall_default(L, R, z) && (R = z = void 0), L = toFinite_default(L), R === void 0 ? (R = L, L = 0) : R = toFinite_default(R), z = z === void 0 ? L < R ? 1 : -1 : toFinite_default(z), _baseRange_default(L, R, z, c);
	};
}
var range_default = createRange(), mapTag = "[object Map]", setTag = "[object Set]";
function size(c) {
	if (c == null) return 0;
	if (isArrayLike_default(c)) return isString_default(c) ? _stringSize_default(c) : c.length;
	var R = _getTag_default(c);
	return R == mapTag || R == setTag ? c.size : _baseKeys_default(c).length;
}
var size_default = size, sortBy_default = _baseRest_default(function(c, L) {
	if (c == null) return [];
	var R = L.length;
	return R > 1 && _isIterateeCall_default(c, L[0], L[1]) ? L = [] : R > 2 && _isIterateeCall_default(L[0], L[1], L[2]) && (L = [L[0]]), _baseOrderBy_default(c, _baseFlatten_default(L, 1), []);
}), idCounter = 0;
function uniqueId(c) {
	var L = ++idCounter;
	return toString_default(c) + L;
}
var uniqueId_default = uniqueId;
function baseZipObject(c, L, R) {
	for (var z = -1, B = c.length, V = L.length, H = {}; ++z < B;) {
		var U = z < V ? L[z] : void 0;
		R(H, c[z], U);
	}
	return H;
}
var _baseZipObject_default = baseZipObject;
function zipObject(c, L) {
	return _baseZipObject_default(c || [], L || [], _assignValue_default);
}
var zipObject_default = zipObject, List = class {
	constructor() {
		var c = {};
		c._next = c._prev = c, this._sentinel = c;
	}
	dequeue() {
		var c = this._sentinel, L = c._prev;
		if (L !== c) return unlink(L), L;
	}
	enqueue(c) {
		var L = this._sentinel;
		c._prev && c._next && unlink(c), c._next = L._next, L._next._prev = c, L._next = c, c._prev = L;
	}
	toString() {
		for (var c = [], L = this._sentinel, R = L._prev; R !== L;) c.push(JSON.stringify(R, filterOutLinks)), R = R._prev;
		return "[" + c.join(", ") + "]";
	}
};
function unlink(c) {
	c._prev._next = c._next, c._next._prev = c._prev, delete c._next, delete c._prev;
}
function filterOutLinks(c, L) {
	if (c !== "_next" && c !== "_prev") return L;
}
var DEFAULT_WEIGHT_FN = constant_default(1);
function greedyFAS(c, L) {
	if (c.nodeCount() <= 1) return [];
	var R = buildState(c, L || DEFAULT_WEIGHT_FN);
	return flatten_default(map_default(doGreedyFAS(R.graph, R.buckets, R.zeroIdx), function(L) {
		return c.outEdges(L.v, L.w);
	}));
}
function doGreedyFAS(c, L, R) {
	for (var z = [], B = L[L.length - 1], V = L[0], H; c.nodeCount();) {
		for (; H = V.dequeue();) removeNode(c, L, R, H);
		for (; H = B.dequeue();) removeNode(c, L, R, H);
		if (c.nodeCount()) {
			for (var U = L.length - 2; U > 0; --U) if (H = L[U].dequeue(), H) {
				z = z.concat(removeNode(c, L, R, H, !0));
				break;
			}
		}
	}
	return z;
}
function removeNode(c, L, R, z, B) {
	var V = B ? [] : void 0;
	return forEach_default(c.inEdges(z.v), function(z) {
		var H = c.edge(z), U = c.node(z.v);
		B && V.push({
			v: z.v,
			w: z.w
		}), U.out -= H, assignBucket(L, R, U);
	}), forEach_default(c.outEdges(z.v), function(z) {
		var B = c.edge(z), V = z.w, H = c.node(V);
		H.in -= B, assignBucket(L, R, H);
	}), c.removeNode(z.v), V;
}
function buildState(c, L) {
	var R = new Graph(), z = 0, B = 0;
	forEach_default(c.nodes(), function(c) {
		R.setNode(c, {
			v: c,
			in: 0,
			out: 0
		});
	}), forEach_default(c.edges(), function(c) {
		var V = R.edge(c.v, c.w) || 0, H = L(c), U = V + H;
		R.setEdge(c.v, c.w, U), B = Math.max(B, R.node(c.v).out += H), z = Math.max(z, R.node(c.w).in += H);
	});
	var V = range_default(B + z + 3).map(function() {
		return new List();
	}), H = z + 1;
	return forEach_default(R.nodes(), function(c) {
		assignBucket(V, H, R.node(c));
	}), {
		graph: R,
		buckets: V,
		zeroIdx: H
	};
}
function assignBucket(c, L, R) {
	R.out ? R.in ? c[R.out - R.in + L].enqueue(R) : c[c.length - 1].enqueue(R) : c[0].enqueue(R);
}
function run$2(c) {
	forEach_default(c.graph().acyclicer === "greedy" ? greedyFAS(c, L(c)) : dfsFAS(c), function(L) {
		var R = c.edge(L);
		c.removeEdge(L), R.forwardName = L.name, R.reversed = !0, c.setEdge(L.w, L.v, R, uniqueId_default("rev"));
	});
	function L(c) {
		return function(L) {
			return c.edge(L).weight;
		};
	}
}
function dfsFAS(c) {
	var L = [], R = {}, z = {};
	function B(V) {
		Object.prototype.hasOwnProperty.call(z, V) || (z[V] = !0, R[V] = !0, forEach_default(c.outEdges(V), function(c) {
			Object.prototype.hasOwnProperty.call(R, c.w) ? L.push(c) : B(c.w);
		}), delete R[V]);
	}
	return forEach_default(c.nodes(), B), L;
}
function undo$2(c) {
	forEach_default(c.edges(), function(L) {
		var R = c.edge(L);
		if (R.reversed) {
			c.removeEdge(L);
			var z = R.forwardName;
			delete R.reversed, delete R.forwardName, c.setEdge(L.w, L.v, R, z);
		}
	});
}
function addDummyNode(c, L, R, z) {
	var B;
	do
		B = uniqueId_default(z);
	while (c.hasNode(B));
	return R.dummy = L, c.setNode(B, R), B;
}
function simplify(c) {
	var L = new Graph().setGraph(c.graph());
	return forEach_default(c.nodes(), function(R) {
		L.setNode(R, c.node(R));
	}), forEach_default(c.edges(), function(R) {
		var z = L.edge(R.v, R.w) || {
			weight: 0,
			minlen: 1
		}, B = c.edge(R);
		L.setEdge(R.v, R.w, {
			weight: z.weight + B.weight,
			minlen: Math.max(z.minlen, B.minlen)
		});
	}), L;
}
function asNonCompoundGraph(c) {
	var L = new Graph({ multigraph: c.isMultigraph() }).setGraph(c.graph());
	return forEach_default(c.nodes(), function(R) {
		c.children(R).length || L.setNode(R, c.node(R));
	}), forEach_default(c.edges(), function(R) {
		L.setEdge(R, c.edge(R));
	}), L;
}
function intersectRect(c, L) {
	var R = c.x, z = c.y, B = L.x - R, V = L.y - z, H = c.width / 2, U = c.height / 2;
	if (!B && !V) throw Error("Not possible to find intersection inside of the rectangle");
	var W, G;
	return Math.abs(V) * H > Math.abs(B) * U ? (V < 0 && (U = -U), W = U * B / V, G = U) : (B < 0 && (H = -H), W = H, G = H * V / B), {
		x: R + W,
		y: z + G
	};
}
function buildLayerMatrix(c) {
	var L = map_default(range_default(maxRank(c) + 1), function() {
		return [];
	});
	return forEach_default(c.nodes(), function(R) {
		var z = c.node(R), B = z.rank;
		isUndefined_default(B) || (L[B][z.order] = R);
	}), L;
}
function normalizeRanks(c) {
	var L = min_default(map_default(c.nodes(), function(L) {
		return c.node(L).rank;
	}));
	forEach_default(c.nodes(), function(R) {
		var z = c.node(R);
		has_default(z, "rank") && (z.rank -= L);
	});
}
function removeEmptyRanks(c) {
	var L = min_default(map_default(c.nodes(), function(L) {
		return c.node(L).rank;
	})), R = [];
	forEach_default(c.nodes(), function(z) {
		var B = c.node(z).rank - L;
		R[B] || (R[B] = []), R[B].push(z);
	});
	var z = 0, B = c.graph().nodeRankFactor;
	forEach_default(R, function(L, R) {
		isUndefined_default(L) && R % B !== 0 ? --z : z && forEach_default(L, function(L) {
			c.node(L).rank += z;
		});
	});
}
function addBorderNode$1(c, L, R, z) {
	var B = {
		width: 0,
		height: 0
	};
	return arguments.length >= 4 && (B.rank = R, B.order = z), addDummyNode(c, "border", B, L);
}
function maxRank(c) {
	return max_default(map_default(c.nodes(), function(L) {
		var R = c.node(L).rank;
		if (!isUndefined_default(R)) return R;
	}));
}
function partition(c, L) {
	var R = {
		lhs: [],
		rhs: []
	};
	return forEach_default(c, function(c) {
		L(c) ? R.lhs.push(c) : R.rhs.push(c);
	}), R;
}
function time(c, L) {
	var R = now_default();
	try {
		return L();
	} finally {
		console.log(c + " time: " + (now_default() - R) + "ms");
	}
}
function notime(c, L) {
	return L();
}
function addBorderSegments(c) {
	function L(R) {
		var z = c.children(R), B = c.node(R);
		if (z.length && forEach_default(z, L), Object.prototype.hasOwnProperty.call(B, "minRank")) {
			B.borderLeft = [], B.borderRight = [];
			for (var V = B.minRank, H = B.maxRank + 1; V < H; ++V) addBorderNode(c, "borderLeft", "_bl", R, B, V), addBorderNode(c, "borderRight", "_br", R, B, V);
		}
	}
	forEach_default(c.children(), L);
}
function addBorderNode(c, L, R, z, B, V) {
	var H = {
		width: 0,
		height: 0,
		rank: V,
		borderType: L
	}, U = B[L][V - 1], W = addDummyNode(c, "border", H, R);
	B[L][V] = W, c.setParent(W, z), U && c.setEdge(U, W, { weight: 1 });
}
function adjust(c) {
	var L = c.graph().rankdir.toLowerCase();
	(L === "lr" || L === "rl") && swapWidthHeight(c);
}
function undo$1(c) {
	var L = c.graph().rankdir.toLowerCase();
	(L === "bt" || L === "rl") && reverseY(c), (L === "lr" || L === "rl") && (swapXY(c), swapWidthHeight(c));
}
function swapWidthHeight(c) {
	forEach_default(c.nodes(), function(L) {
		swapWidthHeightOne(c.node(L));
	}), forEach_default(c.edges(), function(L) {
		swapWidthHeightOne(c.edge(L));
	});
}
function swapWidthHeightOne(c) {
	var L = c.width;
	c.width = c.height, c.height = L;
}
function reverseY(c) {
	forEach_default(c.nodes(), function(L) {
		reverseYOne(c.node(L));
	}), forEach_default(c.edges(), function(L) {
		var R = c.edge(L);
		forEach_default(R.points, reverseYOne), Object.prototype.hasOwnProperty.call(R, "y") && reverseYOne(R);
	});
}
function reverseYOne(c) {
	c.y = -c.y;
}
function swapXY(c) {
	forEach_default(c.nodes(), function(L) {
		swapXYOne(c.node(L));
	}), forEach_default(c.edges(), function(L) {
		var R = c.edge(L);
		forEach_default(R.points, swapXYOne), Object.prototype.hasOwnProperty.call(R, "x") && swapXYOne(R);
	});
}
function swapXYOne(c) {
	var L = c.x;
	c.x = c.y, c.y = L;
}
function run$1(c) {
	c.graph().dummyChains = [], forEach_default(c.edges(), function(L) {
		normalizeEdge(c, L);
	});
}
function normalizeEdge(c, L) {
	var R = L.v, z = c.node(R).rank, B = L.w, V = c.node(B).rank, H = L.name, U = c.edge(L), W = U.labelRank;
	if (V !== z + 1) {
		c.removeEdge(L);
		var G = void 0, K, q;
		for (q = 0, ++z; z < V; ++q, ++z) U.points = [], G = {
			width: 0,
			height: 0,
			edgeLabel: U,
			edgeObj: L,
			rank: z
		}, K = addDummyNode(c, "edge", G, "_d"), z === W && (G.width = U.width, G.height = U.height, G.dummy = "edge-label", G.labelpos = U.labelpos), c.setEdge(R, K, { weight: U.weight }, H), q === 0 && c.graph().dummyChains.push(K), R = K;
		c.setEdge(R, B, { weight: U.weight }, H);
	}
}
function undo(c) {
	forEach_default(c.graph().dummyChains, function(L) {
		var R = c.node(L), z = R.edgeLabel, B;
		for (c.setEdge(R.edgeObj, z); R.dummy;) B = c.successors(L)[0], c.removeNode(L), z.points.push({
			x: R.x,
			y: R.y
		}), R.dummy === "edge-label" && (z.x = R.x, z.y = R.y, z.width = R.width, z.height = R.height), L = B, R = c.node(L);
	});
}
function longestPath(c) {
	var L = {};
	function R(z) {
		var B = c.node(z);
		if (Object.prototype.hasOwnProperty.call(L, z)) return B.rank;
		L[z] = !0;
		var V = min_default(map_default(c.outEdges(z), function(L) {
			return R(L.w) - c.edge(L).minlen;
		}));
		return (V === Infinity || V == null) && (V = 0), B.rank = V;
	}
	forEach_default(c.sources(), R);
}
function slack(c, L) {
	return c.node(L.w).rank - c.node(L.v).rank - c.edge(L).minlen;
}
function feasibleTree(c) {
	var L = new Graph({ directed: !1 }), R = c.nodes()[0], z = c.nodeCount();
	L.setNode(R, {});
	for (var B, V; tightTree(L, c) < z;) B = findMinSlackEdge(L, c), V = L.hasNode(B.v) ? slack(c, B) : -slack(c, B), shiftRanks(L, c, V);
	return L;
}
function tightTree(c, L) {
	function R(z) {
		forEach_default(L.nodeEdges(z), function(B) {
			var V = B.v, H = z === V ? B.w : V;
			!c.hasNode(H) && !slack(L, B) && (c.setNode(H, {}), c.setEdge(z, H, {}), R(H));
		});
	}
	return forEach_default(c.nodes(), R), c.nodeCount();
}
function findMinSlackEdge(c, L) {
	return minBy_default(L.edges(), function(R) {
		if (c.hasNode(R.v) !== c.hasNode(R.w)) return slack(L, R);
	});
}
function shiftRanks(c, L, R) {
	forEach_default(c.nodes(), function(c) {
		L.node(c).rank += R;
	});
}
constant_default(1), constant_default(1), topsort.CycleException = CycleException;
function topsort(c) {
	var L = {}, R = {}, z = [];
	function B(V) {
		if (Object.prototype.hasOwnProperty.call(R, V)) throw new CycleException();
		Object.prototype.hasOwnProperty.call(L, V) || (R[V] = !0, L[V] = !0, forEach_default(c.predecessors(V), B), delete R[V], z.push(V));
	}
	if (forEach_default(c.sinks(), B), size_default(L) !== c.nodeCount()) throw new CycleException();
	return z;
}
function CycleException() {}
CycleException.prototype = /* @__PURE__ */ Error();
function dfs$1(c, L, R) {
	isArray_default(L) || (L = [L]);
	var z = (c.isDirected() ? c.successors : c.neighbors).bind(c), B = [], V = {};
	return forEach_default(L, function(L) {
		if (!c.hasNode(L)) throw Error("Graph does not have node: " + L);
		doDfs(c, L, R === "post", V, z, B);
	}), B;
}
function doDfs(c, L, R, z, B, V) {
	Object.prototype.hasOwnProperty.call(z, L) || (z[L] = !0, R || V.push(L), forEach_default(B(L), function(L) {
		doDfs(c, L, R, z, B, V);
	}), R && V.push(L));
}
function postorder$1(c, L) {
	return dfs$1(c, L, "post");
}
function preorder(c, L) {
	return dfs$1(c, L, "pre");
}
networkSimplex.initLowLimValues = initLowLimValues, networkSimplex.initCutValues = initCutValues, networkSimplex.calcCutValue = calcCutValue, networkSimplex.leaveEdge = leaveEdge, networkSimplex.enterEdge = enterEdge, networkSimplex.exchangeEdges = exchangeEdges;
function networkSimplex(c) {
	c = simplify(c), longestPath(c);
	var L = feasibleTree(c);
	initLowLimValues(L), initCutValues(L, c);
	for (var R, z; R = leaveEdge(L);) z = enterEdge(L, c, R), exchangeEdges(L, c, R, z);
}
function initCutValues(c, L) {
	var R = postorder$1(c, c.nodes());
	R = R.slice(0, R.length - 1), forEach_default(R, function(R) {
		assignCutValue(c, L, R);
	});
}
function assignCutValue(c, L, R) {
	var z = c.node(R).parent;
	c.edge(R, z).cutvalue = calcCutValue(c, L, R);
}
function calcCutValue(c, L, R) {
	var z = c.node(R).parent, B = !0, V = L.edge(R, z), H = 0;
	return V ||= (B = !1, L.edge(z, R)), H = V.weight, forEach_default(L.nodeEdges(R), function(V) {
		var U = V.v === R, W = U ? V.w : V.v;
		if (W !== z) {
			var G = U === B, K = L.edge(V).weight;
			if (H += G ? K : -K, isTreeEdge(c, R, W)) {
				var q = c.edge(R, W).cutvalue;
				H += G ? -q : q;
			}
		}
	}), H;
}
function initLowLimValues(c, L) {
	arguments.length < 2 && (L = c.nodes()[0]), dfsAssignLowLim(c, {}, 1, L);
}
function dfsAssignLowLim(c, L, R, z, B) {
	var V = R, H = c.node(z);
	return L[z] = !0, forEach_default(c.neighbors(z), function(B) {
		Object.prototype.hasOwnProperty.call(L, B) || (R = dfsAssignLowLim(c, L, R, B, z));
	}), H.low = V, H.lim = R++, B ? H.parent = B : delete H.parent, R;
}
function leaveEdge(c) {
	return find_default(c.edges(), function(L) {
		return c.edge(L).cutvalue < 0;
	});
}
function enterEdge(c, L, R) {
	var z = R.v, B = R.w;
	L.hasEdge(z, B) || (z = R.w, B = R.v);
	var V = c.node(z), H = c.node(B), U = V, W = !1;
	return V.lim > H.lim && (U = H, W = !0), minBy_default(filter_default(L.edges(), function(L) {
		return W === isDescendant(c, c.node(L.v), U) && W !== isDescendant(c, c.node(L.w), U);
	}), function(c) {
		return slack(L, c);
	});
}
function exchangeEdges(c, L, R, z) {
	var B = R.v, V = R.w;
	c.removeEdge(B, V), c.setEdge(z.v, z.w, {}), initLowLimValues(c), initCutValues(c, L), updateRanks(c, L);
}
function updateRanks(c, L) {
	var R = preorder(c, find_default(c.nodes(), function(c) {
		return !L.node(c).parent;
	}));
	R = R.slice(1), forEach_default(R, function(R) {
		var z = c.node(R).parent, B = L.edge(R, z), V = !1;
		B || (B = L.edge(z, R), V = !0), L.node(R).rank = L.node(z).rank + (V ? B.minlen : -B.minlen);
	});
}
function isTreeEdge(c, L, R) {
	return c.hasEdge(L, R);
}
function isDescendant(c, L, R) {
	return R.low <= L.lim && L.lim <= R.lim;
}
function rank(c) {
	switch (c.graph().ranker) {
		case "network-simplex":
			networkSimplexRanker(c);
			break;
		case "tight-tree":
			tightTreeRanker(c);
			break;
		case "longest-path":
			longestPathRanker(c);
			break;
		default: networkSimplexRanker(c);
	}
}
var longestPathRanker = longestPath;
function tightTreeRanker(c) {
	longestPath(c), feasibleTree(c);
}
function networkSimplexRanker(c) {
	networkSimplex(c);
}
function run(c) {
	var L = addDummyNode(c, "root", {}, "_root"), R = treeDepths(c), z = max_default(values_default(R)) - 1, B = 2 * z + 1;
	c.graph().nestingRoot = L, forEach_default(c.edges(), function(L) {
		c.edge(L).minlen *= B;
	});
	var V = sumWeights(c) + 1;
	forEach_default(c.children(), function(H) {
		dfs(c, L, B, V, z, R, H);
	}), c.graph().nodeRankFactor = B;
}
function dfs(c, L, R, z, B, V, H) {
	var U = c.children(H);
	if (!U.length) {
		H !== L && c.setEdge(L, H, {
			weight: 0,
			minlen: R
		});
		return;
	}
	var W = addBorderNode$1(c, "_bt"), G = addBorderNode$1(c, "_bb"), K = c.node(H);
	c.setParent(W, H), K.borderTop = W, c.setParent(G, H), K.borderBottom = G, forEach_default(U, function(U) {
		dfs(c, L, R, z, B, V, U);
		var K = c.node(U), q = K.borderTop ? K.borderTop : U, J = K.borderBottom ? K.borderBottom : U, Y = K.borderTop ? z : 2 * z, X = q === J ? B - V[H] + 1 : 1;
		c.setEdge(W, q, {
			weight: Y,
			minlen: X,
			nestingEdge: !0
		}), c.setEdge(J, G, {
			weight: Y,
			minlen: X,
			nestingEdge: !0
		});
	}), c.parent(H) || c.setEdge(L, W, {
		weight: 0,
		minlen: B + V[H]
	});
}
function treeDepths(c) {
	var L = {};
	function R(z, B) {
		var V = c.children(z);
		V && V.length && forEach_default(V, function(c) {
			R(c, B + 1);
		}), L[z] = B;
	}
	return forEach_default(c.children(), function(c) {
		R(c, 1);
	}), L;
}
function sumWeights(c) {
	return reduce_default(c.edges(), function(L, R) {
		return L + c.edge(R).weight;
	}, 0);
}
function cleanup(c) {
	var L = c.graph();
	c.removeNode(L.nestingRoot), delete L.nestingRoot, forEach_default(c.edges(), function(L) {
		c.edge(L).nestingEdge && c.removeEdge(L);
	});
}
function addSubgraphConstraints(c, L, R) {
	var z = {}, B;
	forEach_default(R, function(R) {
		for (var V = c.parent(R), H, U; V;) {
			if (H = c.parent(V), H ? (U = z[H], z[H] = V) : (U = B, B = V), U && U !== V) {
				L.setEdge(U, V);
				return;
			}
			V = H;
		}
	});
}
function buildLayerGraph(c, L, R) {
	var z = createRootNode(c), B = new Graph({ compound: !0 }).setGraph({ root: z }).setDefaultNodeLabel(function(L) {
		return c.node(L);
	});
	return forEach_default(c.nodes(), function(V) {
		var H = c.node(V), U = c.parent(V);
		(H.rank === L || H.minRank <= L && L <= H.maxRank) && (B.setNode(V), B.setParent(V, U || z), forEach_default(c[R](V), function(L) {
			var R = L.v === V ? L.w : L.v, z = B.edge(R, V), H = isUndefined_default(z) ? 0 : z.weight;
			B.setEdge(R, V, { weight: c.edge(L).weight + H });
		}), Object.prototype.hasOwnProperty.call(H, "minRank") && B.setNode(V, {
			borderLeft: H.borderLeft[L],
			borderRight: H.borderRight[L]
		}));
	}), B;
}
function createRootNode(c) {
	for (var L; c.hasNode(L = uniqueId_default("_root")););
	return L;
}
function crossCount(c, L) {
	for (var R = 0, z = 1; z < L.length; ++z) R += twoLayerCrossCount(c, L[z - 1], L[z]);
	return R;
}
function twoLayerCrossCount(c, L, R) {
	for (var z = zipObject_default(R, map_default(R, function(c, L) {
		return L;
	})), B = flatten_default(map_default(L, function(L) {
		return sortBy_default(map_default(c.outEdges(L), function(L) {
			return {
				pos: z[L.w],
				weight: c.edge(L).weight
			};
		}), "pos");
	})), V = 1; V < R.length;) V <<= 1;
	var H = 2 * V - 1;
	--V;
	var U = map_default(Array(H), function() {
		return 0;
	}), W = 0;
	return forEach_default(B.forEach(function(c) {
		var L = c.pos + V;
		U[L] += c.weight;
		for (var R = 0; L > 0;) L % 2 && (R += U[L + 1]), L = L - 1 >> 1, U[L] += c.weight;
		W += c.weight * R;
	})), W;
}
function initOrder(c) {
	var L = {}, R = filter_default(c.nodes(), function(L) {
		return !c.children(L).length;
	}), z = map_default(range_default(max_default(map_default(R, function(L) {
		return c.node(L).rank;
	})) + 1), function() {
		return [];
	});
	function B(R) {
		has_default(L, R) || (L[R] = !0, z[c.node(R).rank].push(R), forEach_default(c.successors(R), B));
	}
	return forEach_default(sortBy_default(R, function(L) {
		return c.node(L).rank;
	}), B), z;
}
function barycenter(c, L) {
	return map_default(L, function(L) {
		var R = c.inEdges(L);
		if (R.length) {
			var z = reduce_default(R, function(L, R) {
				var z = c.edge(R), B = c.node(R.v);
				return {
					sum: L.sum + z.weight * B.order,
					weight: L.weight + z.weight
				};
			}, {
				sum: 0,
				weight: 0
			});
			return {
				v: L,
				barycenter: z.sum / z.weight,
				weight: z.weight
			};
		} else return { v: L };
	});
}
function resolveConflicts(c, L) {
	var R = {};
	return forEach_default(c, function(c, L) {
		var z = R[c.v] = {
			indegree: 0,
			in: [],
			out: [],
			vs: [c.v],
			i: L
		};
		isUndefined_default(c.barycenter) || (z.barycenter = c.barycenter, z.weight = c.weight);
	}), forEach_default(L.edges(), function(c) {
		var L = R[c.v], z = R[c.w];
		!isUndefined_default(L) && !isUndefined_default(z) && (z.indegree++, L.out.push(R[c.w]));
	}), doResolveConflicts(filter_default(R, function(c) {
		return !c.indegree;
	}));
}
function doResolveConflicts(c) {
	var L = [];
	function R(c) {
		return function(L) {
			L.merged || (isUndefined_default(L.barycenter) || isUndefined_default(c.barycenter) || L.barycenter >= c.barycenter) && mergeEntries(c, L);
		};
	}
	function z(L) {
		return function(R) {
			R.in.push(L), --R.indegree === 0 && c.push(R);
		};
	}
	for (; c.length;) {
		var B = c.pop();
		L.push(B), forEach_default(B.in.reverse(), R(B)), forEach_default(B.out, z(B));
	}
	return map_default(filter_default(L, function(c) {
		return !c.merged;
	}), function(c) {
		return pick_default(c, [
			"vs",
			"i",
			"barycenter",
			"weight"
		]);
	});
}
function mergeEntries(c, L) {
	var R = 0, z = 0;
	c.weight && (R += c.barycenter * c.weight, z += c.weight), L.weight && (R += L.barycenter * L.weight, z += L.weight), c.vs = L.vs.concat(c.vs), c.barycenter = R / z, c.weight = z, c.i = Math.min(L.i, c.i), L.merged = !0;
}
function sort(c, L) {
	var R = partition(c, function(c) {
		return Object.prototype.hasOwnProperty.call(c, "barycenter");
	}), z = R.lhs, B = sortBy_default(R.rhs, function(c) {
		return -c.i;
	}), V = [], H = 0, U = 0, W = 0;
	z.sort(compareWithBias(!!L)), W = consumeUnsortable(V, B, W), forEach_default(z, function(c) {
		W += c.vs.length, V.push(c.vs), H += c.barycenter * c.weight, U += c.weight, W = consumeUnsortable(V, B, W);
	});
	var G = { vs: flatten_default(V) };
	return U && (G.barycenter = H / U, G.weight = U), G;
}
function consumeUnsortable(c, L, R) {
	for (var z; L.length && (z = last_default(L)).i <= R;) L.pop(), c.push(z.vs), R++;
	return R;
}
function compareWithBias(c) {
	return function(L, R) {
		return L.barycenter < R.barycenter ? -1 : L.barycenter > R.barycenter ? 1 : c ? R.i - L.i : L.i - R.i;
	};
}
function sortSubgraph(c, L, R, z) {
	var B = c.children(L), V = c.node(L), H = V ? V.borderLeft : void 0, U = V ? V.borderRight : void 0, W = {};
	H && (B = filter_default(B, function(c) {
		return c !== H && c !== U;
	}));
	var G = barycenter(c, B);
	forEach_default(G, function(L) {
		if (c.children(L.v).length) {
			var B = sortSubgraph(c, L.v, R, z);
			W[L.v] = B, Object.prototype.hasOwnProperty.call(B, "barycenter") && mergeBarycenters(L, B);
		}
	});
	var K = resolveConflicts(G, R);
	expandSubgraphs(K, W);
	var q = sort(K, z);
	if (H && (q.vs = flatten_default([
		H,
		q.vs,
		U
	]), c.predecessors(H).length)) {
		var J = c.node(c.predecessors(H)[0]), Y = c.node(c.predecessors(U)[0]);
		Object.prototype.hasOwnProperty.call(q, "barycenter") || (q.barycenter = 0, q.weight = 0), q.barycenter = (q.barycenter * q.weight + J.order + Y.order) / (q.weight + 2), q.weight += 2;
	}
	return q;
}
function expandSubgraphs(c, L) {
	forEach_default(c, function(c) {
		c.vs = flatten_default(c.vs.map(function(c) {
			return L[c] ? L[c].vs : c;
		}));
	});
}
function mergeBarycenters(c, L) {
	isUndefined_default(c.barycenter) ? (c.barycenter = L.barycenter, c.weight = L.weight) : (c.barycenter = (c.barycenter * c.weight + L.barycenter * L.weight) / (c.weight + L.weight), c.weight += L.weight);
}
function order(c) {
	var L = maxRank(c), R = buildLayerGraphs(c, range_default(1, L + 1), "inEdges"), z = buildLayerGraphs(c, range_default(L - 1, -1, -1), "outEdges"), B = initOrder(c);
	assignOrder(c, B);
	for (var V = Infinity, H, U = 0, W = 0; W < 4; ++U, ++W) {
		sweepLayerGraphs(U % 2 ? R : z, U % 4 >= 2), B = buildLayerMatrix(c);
		var G = crossCount(c, B);
		G < V && (W = 0, H = cloneDeep_default(B), V = G);
	}
	assignOrder(c, H);
}
function buildLayerGraphs(c, L, R) {
	return map_default(L, function(L) {
		return buildLayerGraph(c, L, R);
	});
}
function sweepLayerGraphs(c, L) {
	var R = new Graph();
	forEach_default(c, function(c) {
		var z = c.graph().root, B = sortSubgraph(c, z, R, L);
		forEach_default(B.vs, function(L, R) {
			c.node(L).order = R;
		}), addSubgraphConstraints(c, R, B.vs);
	});
}
function assignOrder(c, L) {
	forEach_default(L, function(L) {
		forEach_default(L, function(L, R) {
			c.node(L).order = R;
		});
	});
}
function parentDummyChains(c) {
	var L = postorder(c);
	forEach_default(c.graph().dummyChains, function(R) {
		for (var z = c.node(R), B = z.edgeObj, V = findPath(c, L, B.v, B.w), H = V.path, U = V.lca, W = 0, G = H[W], K = !0; R !== B.w;) {
			if (z = c.node(R), K) {
				for (; (G = H[W]) !== U && c.node(G).maxRank < z.rank;) W++;
				G === U && (K = !1);
			}
			if (!K) {
				for (; W < H.length - 1 && c.node(G = H[W + 1]).minRank <= z.rank;) W++;
				G = H[W];
			}
			c.setParent(R, G), R = c.successors(R)[0];
		}
	});
}
function findPath(c, L, R, z) {
	var B = [], V = [], H = Math.min(L[R].low, L[z].low), U = Math.max(L[R].lim, L[z].lim), W = R, G;
	do
		W = c.parent(W), B.push(W);
	while (W && (L[W].low > H || U > L[W].lim));
	for (G = W, W = z; (W = c.parent(W)) !== G;) V.push(W);
	return {
		path: B.concat(V.reverse()),
		lca: G
	};
}
function postorder(c) {
	var L = {}, R = 0;
	function z(B) {
		var V = R;
		forEach_default(c.children(B), z), L[B] = {
			low: V,
			lim: R++
		};
	}
	return forEach_default(c.children(), z), L;
}
function findType1Conflicts(c, L) {
	var R = {};
	function z(L, z) {
		var B = 0, V = 0, H = L.length, U = last_default(z);
		return forEach_default(z, function(L, W) {
			var G = findOtherInnerSegmentNode(c, L), K = G ? c.node(G).order : H;
			(G || L === U) && (forEach_default(z.slice(V, W + 1), function(L) {
				forEach_default(c.predecessors(L), function(z) {
					var V = c.node(z), H = V.order;
					(H < B || K < H) && !(V.dummy && c.node(L).dummy) && addConflict(R, z, L);
				});
			}), V = W + 1, B = K);
		}), z;
	}
	return reduce_default(L, z), R;
}
function findType2Conflicts(c, L) {
	var R = {};
	function z(L, z, B, V, H) {
		var U;
		forEach_default(range_default(z, B), function(z) {
			U = L[z], c.node(U).dummy && forEach_default(c.predecessors(U), function(L) {
				var z = c.node(L);
				z.dummy && (z.order < V || z.order > H) && addConflict(R, L, U);
			});
		});
	}
	function B(L, R) {
		var B = -1, V, H = 0;
		return forEach_default(R, function(U, W) {
			if (c.node(U).dummy === "border") {
				var G = c.predecessors(U);
				G.length && (V = c.node(G[0]).order, z(R, H, W, B, V), H = W, B = V);
			}
			z(R, H, R.length, V, L.length);
		}), R;
	}
	return reduce_default(L, B), R;
}
function findOtherInnerSegmentNode(c, L) {
	if (c.node(L).dummy) return find_default(c.predecessors(L), function(L) {
		return c.node(L).dummy;
	});
}
function addConflict(c, L, R) {
	if (L > R) {
		var z = L;
		L = R, R = z;
	}
	Object.prototype.hasOwnProperty.call(c, L) || Object.defineProperty(c, L, {
		enumerable: !0,
		configurable: !0,
		value: {},
		writable: !0
	});
	var B = c[L];
	Object.defineProperty(B, R, {
		enumerable: !0,
		configurable: !0,
		value: !0,
		writable: !0
	});
}
function hasConflict(c, L, R) {
	if (L > R) {
		var z = L;
		L = R, R = z;
	}
	return !!c[L] && Object.prototype.hasOwnProperty.call(c[L], R);
}
function verticalAlignment(c, L, R, z) {
	var B = {}, V = {}, H = {};
	return forEach_default(L, function(c) {
		forEach_default(c, function(c, L) {
			B[c] = c, V[c] = c, H[c] = L;
		});
	}), forEach_default(L, function(c) {
		var L = -1;
		forEach_default(c, function(c) {
			var U = z(c);
			if (U.length) {
				U = sortBy_default(U, function(c) {
					return H[c];
				});
				for (var W = (U.length - 1) / 2, G = Math.floor(W), K = Math.ceil(W); G <= K; ++G) {
					var q = U[G];
					V[c] === c && L < H[q] && !hasConflict(R, c, q) && (V[q] = c, V[c] = B[c] = B[q], L = H[q]);
				}
			}
		});
	}), {
		root: B,
		align: V
	};
}
function horizontalCompaction(c, L, R, z, B) {
	var V = {}, H = buildBlockGraph(c, L, R, B), U = B ? "borderLeft" : "borderRight";
	function W(c, L) {
		for (var R = H.nodes(), z = R.pop(), B = {}; z;) B[z] ? c(z) : (B[z] = !0, R.push(z), R = R.concat(L(z))), z = R.pop();
	}
	function G(c) {
		V[c] = H.inEdges(c).reduce(function(c, L) {
			return Math.max(c, V[L.v] + H.edge(L));
		}, 0);
	}
	function K(L) {
		var R = H.outEdges(L).reduce(function(c, L) {
			return Math.min(c, V[L.w] - H.edge(L));
		}, Infinity), z = c.node(L);
		R !== Infinity && z.borderType !== U && (V[L] = Math.max(V[L], R));
	}
	return W(G, H.predecessors.bind(H)), W(K, H.successors.bind(H)), forEach_default(z, function(c) {
		V[c] = V[R[c]];
	}), V;
}
function buildBlockGraph(c, L, R, z) {
	var B = new Graph(), V = c.graph(), H = sep(V.nodesep, V.edgesep, z);
	return forEach_default(L, function(L) {
		var z;
		forEach_default(L, function(L) {
			var V = R[L];
			if (B.setNode(V), z) {
				var U = R[z], W = B.edge(U, V);
				B.setEdge(U, V, Math.max(H(c, L, z), W || 0));
			}
			z = L;
		});
	}), B;
}
function findSmallestWidthAlignment(c, L) {
	return minBy_default(values_default(L), function(L) {
		var R = -Infinity, z = Infinity;
		return forIn_default(L, function(L, B) {
			var V = width(c, B) / 2;
			R = Math.max(L + V, R), z = Math.min(L - V, z);
		}), R - z;
	});
}
function alignCoordinates(c, L) {
	var R = values_default(L), z = min_default(R), B = max_default(R);
	forEach_default(["u", "d"], function(R) {
		forEach_default(["l", "r"], function(V) {
			var H = R + V, U = c[H], W;
			if (U !== L) {
				var G = values_default(U);
				W = V === "l" ? z - min_default(G) : B - max_default(G), W && (c[H] = mapValues_default(U, function(c) {
					return c + W;
				}));
			}
		});
	});
}
function balance(c, L) {
	return mapValues_default(c.ul, function(R, z) {
		if (L) return c[L.toLowerCase()][z];
		var B = sortBy_default(map_default(c, z));
		return (B[1] + B[2]) / 2;
	});
}
function positionX(c) {
	var L = buildLayerMatrix(c), R = merge_default(findType1Conflicts(c, L), findType2Conflicts(c, L)), z = {}, B;
	return forEach_default(["u", "d"], function(V) {
		B = V === "u" ? L : values_default(L).reverse(), forEach_default(["l", "r"], function(L) {
			L === "r" && (B = map_default(B, function(c) {
				return values_default(c).reverse();
			}));
			var H = (V === "u" ? c.predecessors : c.successors).bind(c), U = verticalAlignment(c, B, R, H), W = horizontalCompaction(c, B, U.root, U.align, L === "r");
			L === "r" && (W = mapValues_default(W, function(c) {
				return -c;
			})), z[V + L] = W;
		});
	}), alignCoordinates(z, findSmallestWidthAlignment(c, z)), balance(z, c.graph().align);
}
function sep(c, L, R) {
	return function(z, B, V) {
		var H = z.node(B), U = z.node(V), W = 0, G;
		if (W += H.width / 2, Object.prototype.hasOwnProperty.call(H, "labelpos")) switch (H.labelpos.toLowerCase()) {
			case "l":
				G = -H.width / 2;
				break;
			case "r":
				G = H.width / 2;
				break;
		}
		if (G && (W += R ? G : -G), G = 0, W += (H.dummy ? L : c) / 2, W += (U.dummy ? L : c) / 2, W += U.width / 2, Object.prototype.hasOwnProperty.call(U, "labelpos")) switch (U.labelpos.toLowerCase()) {
			case "l":
				G = U.width / 2;
				break;
			case "r":
				G = -U.width / 2;
				break;
		}
		return G && (W += R ? G : -G), G = 0, W;
	};
}
function width(c, L) {
	return c.node(L).width;
}
function position(c) {
	c = asNonCompoundGraph(c), positionY(c), forOwn_default(positionX(c), function(L, R) {
		c.node(R).x = L;
	});
}
function positionY(c) {
	var L = buildLayerMatrix(c), R = c.graph().ranksep, z = 0;
	forEach_default(L, function(L) {
		var B = max_default(map_default(L, function(L) {
			return c.node(L).height;
		}));
		forEach_default(L, function(L) {
			c.node(L).y = z + B / 2;
		}), z += B + R;
	});
}
function layout(c, L) {
	var R = L && L.debugTiming ? time : notime;
	R("layout", () => {
		var L = R("  buildLayoutGraph", () => buildLayoutGraph(c));
		R("  runLayout", () => runLayout(L, R)), R("  updateInputGraph", () => updateInputGraph(c, L));
	});
}
function runLayout(c, L) {
	L("    makeSpaceForEdgeLabels", () => makeSpaceForEdgeLabels(c)), L("    removeSelfEdges", () => removeSelfEdges(c)), L("    acyclic", () => run$2(c)), L("    nestingGraph.run", () => run(c)), L("    rank", () => rank(asNonCompoundGraph(c))), L("    injectEdgeLabelProxies", () => injectEdgeLabelProxies(c)), L("    removeEmptyRanks", () => removeEmptyRanks(c)), L("    nestingGraph.cleanup", () => cleanup(c)), L("    normalizeRanks", () => normalizeRanks(c)), L("    assignRankMinMax", () => assignRankMinMax(c)), L("    removeEdgeLabelProxies", () => removeEdgeLabelProxies(c)), L("    normalize.run", () => run$1(c)), L("    parentDummyChains", () => parentDummyChains(c)), L("    addBorderSegments", () => addBorderSegments(c)), L("    order", () => order(c)), L("    insertSelfEdges", () => insertSelfEdges(c)), L("    adjustCoordinateSystem", () => adjust(c)), L("    position", () => position(c)), L("    positionSelfEdges", () => positionSelfEdges(c)), L("    removeBorderNodes", () => removeBorderNodes(c)), L("    normalize.undo", () => undo(c)), L("    fixupEdgeLabelCoords", () => fixupEdgeLabelCoords(c)), L("    undoCoordinateSystem", () => undo$1(c)), L("    translateGraph", () => translateGraph(c)), L("    assignNodeIntersects", () => assignNodeIntersects(c)), L("    reversePoints", () => reversePointsForReversedEdges(c)), L("    acyclic.undo", () => undo$2(c));
}
function updateInputGraph(c, L) {
	forEach_default(c.nodes(), function(R) {
		var z = c.node(R), B = L.node(R);
		z && (z.x = B.x, z.y = B.y, L.children(R).length && (z.width = B.width, z.height = B.height));
	}), forEach_default(c.edges(), function(R) {
		var z = c.edge(R), B = L.edge(R);
		z.points = B.points, Object.prototype.hasOwnProperty.call(B, "x") && (z.x = B.x, z.y = B.y);
	}), c.graph().width = L.graph().width, c.graph().height = L.graph().height;
}
var graphNumAttrs = [
	"nodesep",
	"edgesep",
	"ranksep",
	"marginx",
	"marginy"
], graphDefaults = {
	ranksep: 50,
	edgesep: 20,
	nodesep: 50,
	rankdir: "tb"
}, graphAttrs = [
	"acyclicer",
	"ranker",
	"rankdir",
	"align"
], nodeNumAttrs = ["width", "height"], nodeDefaults = {
	width: 0,
	height: 0
}, edgeNumAttrs = [
	"minlen",
	"weight",
	"width",
	"height",
	"labeloffset"
], edgeDefaults = {
	minlen: 1,
	weight: 1,
	width: 0,
	height: 0,
	labeloffset: 10,
	labelpos: "r"
}, edgeAttrs = ["labelpos"];
function buildLayoutGraph(c) {
	var L = new Graph({
		multigraph: !0,
		compound: !0
	}), R = canonicalize(c.graph());
	return L.setGraph(merge_default({}, graphDefaults, selectNumberAttrs(R, graphNumAttrs), pick_default(R, graphAttrs))), forEach_default(c.nodes(), function(R) {
		var z = canonicalize(c.node(R));
		L.setNode(R, defaults_default(selectNumberAttrs(z, nodeNumAttrs), nodeDefaults)), L.setParent(R, c.parent(R));
	}), forEach_default(c.edges(), function(R) {
		var z = canonicalize(c.edge(R));
		L.setEdge(R, merge_default({}, edgeDefaults, selectNumberAttrs(z, edgeNumAttrs), pick_default(z, edgeAttrs)));
	}), L;
}
function makeSpaceForEdgeLabels(c) {
	var L = c.graph();
	L.ranksep /= 2, forEach_default(c.edges(), function(R) {
		var z = c.edge(R);
		z.minlen *= 2, z.labelpos.toLowerCase() !== "c" && (L.rankdir === "TB" || L.rankdir === "BT" ? z.width += z.labeloffset : z.height += z.labeloffset);
	});
}
function injectEdgeLabelProxies(c) {
	forEach_default(c.edges(), function(L) {
		var R = c.edge(L);
		if (R.width && R.height) {
			var z = c.node(L.v);
			addDummyNode(c, "edge-proxy", {
				rank: (c.node(L.w).rank - z.rank) / 2 + z.rank,
				e: L
			}, "_ep");
		}
	});
}
function assignRankMinMax(c) {
	var L = 0;
	forEach_default(c.nodes(), function(R) {
		var z = c.node(R);
		z.borderTop && (z.minRank = c.node(z.borderTop).rank, z.maxRank = c.node(z.borderBottom).rank, L = max_default(L, z.maxRank));
	}), c.graph().maxRank = L;
}
function removeEdgeLabelProxies(c) {
	forEach_default(c.nodes(), function(L) {
		var R = c.node(L);
		R.dummy === "edge-proxy" && (c.edge(R.e).labelRank = R.rank, c.removeNode(L));
	});
}
function translateGraph(c) {
	var L = Infinity, R = 0, z = Infinity, B = 0, V = c.graph(), H = V.marginx || 0, U = V.marginy || 0;
	function W(c) {
		var V = c.x, H = c.y, U = c.width, W = c.height;
		L = Math.min(L, V - U / 2), R = Math.max(R, V + U / 2), z = Math.min(z, H - W / 2), B = Math.max(B, H + W / 2);
	}
	forEach_default(c.nodes(), function(L) {
		W(c.node(L));
	}), forEach_default(c.edges(), function(L) {
		var R = c.edge(L);
		Object.prototype.hasOwnProperty.call(R, "x") && W(R);
	}), L -= H, z -= U, forEach_default(c.nodes(), function(R) {
		var B = c.node(R);
		B.x -= L, B.y -= z;
	}), forEach_default(c.edges(), function(R) {
		var B = c.edge(R);
		forEach_default(B.points, function(c) {
			c.x -= L, c.y -= z;
		}), Object.prototype.hasOwnProperty.call(B, "x") && (B.x -= L), Object.prototype.hasOwnProperty.call(B, "y") && (B.y -= z);
	}), V.width = R - L + H, V.height = B - z + U;
}
function assignNodeIntersects(c) {
	forEach_default(c.edges(), function(L) {
		var R = c.edge(L), z = c.node(L.v), B = c.node(L.w), V, H;
		R.points ? (V = R.points[0], H = R.points[R.points.length - 1]) : (R.points = [], V = B, H = z), R.points.unshift(intersectRect(z, V)), R.points.push(intersectRect(B, H));
	});
}
function fixupEdgeLabelCoords(c) {
	forEach_default(c.edges(), function(L) {
		var R = c.edge(L);
		if (Object.prototype.hasOwnProperty.call(R, "x")) switch ((R.labelpos === "l" || R.labelpos === "r") && (R.width -= R.labeloffset), R.labelpos) {
			case "l":
				R.x -= R.width / 2 + R.labeloffset;
				break;
			case "r":
				R.x += R.width / 2 + R.labeloffset;
				break;
		}
	});
}
function reversePointsForReversedEdges(c) {
	forEach_default(c.edges(), function(L) {
		var R = c.edge(L);
		R.reversed && R.points.reverse();
	});
}
function removeBorderNodes(c) {
	forEach_default(c.nodes(), function(L) {
		if (c.children(L).length) {
			var R = c.node(L), z = c.node(R.borderTop), B = c.node(R.borderBottom), V = c.node(last_default(R.borderLeft)), H = c.node(last_default(R.borderRight));
			R.width = Math.abs(H.x - V.x), R.height = Math.abs(B.y - z.y), R.x = V.x + R.width / 2, R.y = z.y + R.height / 2;
		}
	}), forEach_default(c.nodes(), function(L) {
		c.node(L).dummy === "border" && c.removeNode(L);
	});
}
function removeSelfEdges(c) {
	forEach_default(c.edges(), function(L) {
		if (L.v === L.w) {
			var R = c.node(L.v);
			R.selfEdges ||= [], R.selfEdges.push({
				e: L,
				label: c.edge(L)
			}), c.removeEdge(L);
		}
	});
}
function insertSelfEdges(c) {
	forEach_default(buildLayerMatrix(c), function(L) {
		var R = 0;
		forEach_default(L, function(L, z) {
			var B = c.node(L);
			B.order = z + R, forEach_default(B.selfEdges, function(L) {
				addDummyNode(c, "selfedge", {
					width: L.label.width,
					height: L.label.height,
					rank: B.rank,
					order: z + ++R,
					e: L.e,
					label: L.label
				}, "_se");
			}), delete B.selfEdges;
		});
	});
}
function positionSelfEdges(c) {
	forEach_default(c.nodes(), function(L) {
		var R = c.node(L);
		if (R.dummy === "selfedge") {
			var z = c.node(R.e.v), B = z.x + z.width / 2, V = z.y, H = R.x - B, U = z.height / 2;
			c.setEdge(R.e, R.label), c.removeNode(L), R.label.points = [
				{
					x: B + 2 * H / 3,
					y: V - U
				},
				{
					x: B + 5 * H / 6,
					y: V - U
				},
				{
					x: B + H,
					y: V
				},
				{
					x: B + 5 * H / 6,
					y: V + U
				},
				{
					x: B + 2 * H / 3,
					y: V + U
				}
			], R.label.x = R.x, R.label.y = R.y;
		}
	});
}
function selectNumberAttrs(c, L) {
	return mapValues_default(pick_default(c, L), Number);
}
function canonicalize(c) {
	var L = {};
	return forEach_default(c, function(c, R) {
		L[R.toLowerCase()] = c;
	}), L;
}
export { layout as t };
