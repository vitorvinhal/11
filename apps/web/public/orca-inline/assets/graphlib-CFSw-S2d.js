var _freeGlobal_default = typeof global == "object" && global && global.Object === Object && global, freeSelf = typeof self == "object" && self && self.Object === Object && self, _root_default = _freeGlobal_default || freeSelf || Function("return this")(), _Symbol_default = _root_default.Symbol, objectProto$3 = Object.prototype, hasOwnProperty$9 = objectProto$3.hasOwnProperty, nativeObjectToString$1 = objectProto$3.toString, symToStringTag$1 = _Symbol_default ? _Symbol_default.toStringTag : void 0;
function getRawTag(o) {
	var F = hasOwnProperty$9.call(o, symToStringTag$1), I = o[symToStringTag$1];
	try {
		o[symToStringTag$1] = void 0;
		var L = !0;
	} catch {}
	var R = nativeObjectToString$1.call(o);
	return L && (F ? o[symToStringTag$1] = I : delete o[symToStringTag$1]), R;
}
var _getRawTag_default = getRawTag, nativeObjectToString = Object.prototype.toString;
function objectToString(o) {
	return nativeObjectToString.call(o);
}
var _objectToString_default = objectToString, nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag = _Symbol_default ? _Symbol_default.toStringTag : void 0;
function baseGetTag(o) {
	return o == null ? o === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(o) ? _getRawTag_default(o) : _objectToString_default(o);
}
var _baseGetTag_default = baseGetTag;
function isObjectLike(o) {
	return typeof o == "object" && !!o;
}
var isObjectLike_default = isObjectLike, symbolTag$1 = "[object Symbol]";
function isSymbol(o) {
	return typeof o == "symbol" || isObjectLike_default(o) && _baseGetTag_default(o) == symbolTag$1;
}
var isSymbol_default = isSymbol;
function arrayMap(o, F) {
	for (var I = -1, L = o == null ? 0 : o.length, R = Array(L); ++I < L;) R[I] = F(o[I], I, o);
	return R;
}
var _arrayMap_default = arrayMap, isArray_default = Array.isArray, INFINITY$1 = Infinity, symbolProto$1 = _Symbol_default ? _Symbol_default.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(o) {
	if (typeof o == "string") return o;
	if (isArray_default(o)) return _arrayMap_default(o, baseToString) + "";
	if (isSymbol_default(o)) return symbolToString ? symbolToString.call(o) : "";
	var F = o + "";
	return F == "0" && 1 / o == -INFINITY$1 ? "-0" : F;
}
var _baseToString_default = baseToString;
function isObject(o) {
	var F = typeof o;
	return o != null && (F == "object" || F == "function");
}
var isObject_default = isObject;
function identity(o) {
	return o;
}
var identity_default = identity, asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(o) {
	if (!isObject_default(o)) return !1;
	var F = _baseGetTag_default(o);
	return F == funcTag$1 || F == genTag || F == asyncTag || F == proxyTag;
}
var isFunction_default = isFunction, _coreJsData_default = _root_default["__core-js_shared__"], maskSrcKey = function() {
	var o = /[^.]+$/.exec(_coreJsData_default && _coreJsData_default.keys && _coreJsData_default.keys.IE_PROTO || "");
	return o ? "Symbol(src)_1." + o : "";
}();
function isMasked(o) {
	return !!maskSrcKey && maskSrcKey in o;
}
var _isMasked_default = isMasked, funcToString$1 = Function.prototype.toString;
function toSource(o) {
	if (o != null) {
		try {
			return funcToString$1.call(o);
		} catch {}
		try {
			return o + "";
		} catch {}
	}
	return "";
}
var _toSource_default = toSource, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype, objectProto$2 = Object.prototype, funcToString = funcProto.toString, hasOwnProperty$8 = objectProto$2.hasOwnProperty, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(o) {
	return !isObject_default(o) || _isMasked_default(o) ? !1 : (isFunction_default(o) ? reIsNative : reIsHostCtor).test(_toSource_default(o));
}
var _baseIsNative_default = baseIsNative;
function getValue(o, F) {
	return o?.[F];
}
var _getValue_default = getValue;
function getNative(o, F) {
	var I = _getValue_default(o, F);
	return _baseIsNative_default(I) ? I : void 0;
}
var _getNative_default = getNative, _WeakMap_default = _getNative_default(_root_default, "WeakMap");
function apply(o, F, I) {
	switch (I.length) {
		case 0: return o.call(F);
		case 1: return o.call(F, I[0]);
		case 2: return o.call(F, I[0], I[1]);
		case 3: return o.call(F, I[0], I[1], I[2]);
	}
	return o.apply(F, I);
}
var _apply_default = apply;
function noop() {}
var noop_default = noop, HOT_COUNT = 800, HOT_SPAN = 16, nativeNow = Date.now;
function shortOut(o) {
	var F = 0, I = 0;
	return function() {
		var L = nativeNow(), R = HOT_SPAN - (L - I);
		if (I = L, R > 0) {
			if (++F >= HOT_COUNT) return arguments[0];
		} else F = 0;
		return o.apply(void 0, arguments);
	};
}
var _shortOut_default = shortOut;
function constant(o) {
	return function() {
		return o;
	};
}
var constant_default = constant, _defineProperty_default = function() {
	try {
		var o = _getNative_default(Object, "defineProperty");
		return o({}, "", {}), o;
	} catch {}
}(), _setToString_default = _shortOut_default(_defineProperty_default ? function(o, F) {
	return _defineProperty_default(o, "toString", {
		configurable: !0,
		enumerable: !1,
		value: constant_default(F),
		writable: !0
	});
} : identity_default);
function arrayEach(o, F) {
	for (var I = -1, L = o == null ? 0 : o.length; ++I < L && F(o[I], I, o) !== !1;);
	return o;
}
var _arrayEach_default = arrayEach;
function baseFindIndex(o, F, I, L) {
	for (var R = o.length, z = I + (L ? 1 : -1); L ? z-- : ++z < R;) if (F(o[z], z, o)) return z;
	return -1;
}
var _baseFindIndex_default = baseFindIndex;
function baseIsNaN(o) {
	return o !== o;
}
var _baseIsNaN_default = baseIsNaN;
function strictIndexOf(o, F, I) {
	for (var L = I - 1, R = o.length; ++L < R;) if (o[L] === F) return L;
	return -1;
}
var _strictIndexOf_default = strictIndexOf;
function baseIndexOf(o, F, I) {
	return F === F ? _strictIndexOf_default(o, F, I) : _baseFindIndex_default(o, _baseIsNaN_default, I);
}
var _baseIndexOf_default = baseIndexOf;
function arrayIncludes(o, F) {
	return !!(o != null && o.length) && _baseIndexOf_default(o, F, 0) > -1;
}
var _arrayIncludes_default = arrayIncludes, MAX_SAFE_INTEGER$1 = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(o, F) {
	var I = typeof o;
	return F ??= MAX_SAFE_INTEGER$1, !!F && (I == "number" || I != "symbol" && reIsUint.test(o)) && o > -1 && o % 1 == 0 && o < F;
}
var _isIndex_default = isIndex;
function eq(o, F) {
	return o === F || o !== o && F !== F;
}
var eq_default = eq, nativeMax = Math.max;
function overRest(o, F, I) {
	return F = nativeMax(F === void 0 ? o.length - 1 : F, 0), function() {
		for (var L = arguments, R = -1, z = nativeMax(L.length - F, 0), B = Array(z); ++R < z;) B[R] = L[F + R];
		R = -1;
		for (var V = Array(F + 1); ++R < F;) V[R] = L[R];
		return V[F] = I(B), _apply_default(o, this, V);
	};
}
var _overRest_default = overRest;
function baseRest(o, F) {
	return _setToString_default(_overRest_default(o, F, identity_default), o + "");
}
var _baseRest_default = baseRest, MAX_SAFE_INTEGER = 9007199254740991;
function isLength(o) {
	return typeof o == "number" && o > -1 && o % 1 == 0 && o <= MAX_SAFE_INTEGER;
}
var isLength_default = isLength;
function isArrayLike(o) {
	return o != null && isLength_default(o.length) && !isFunction_default(o);
}
var isArrayLike_default = isArrayLike, objectProto$1 = Object.prototype;
function isPrototype(o) {
	var F = o && o.constructor;
	return o === (typeof F == "function" && F.prototype || objectProto$1);
}
var _isPrototype_default = isPrototype;
function baseTimes(o, F) {
	for (var I = -1, L = Array(o); ++I < o;) L[I] = F(I);
	return L;
}
var _baseTimes_default = baseTimes, argsTag$2 = "[object Arguments]";
function baseIsArguments(o) {
	return isObjectLike_default(o) && _baseGetTag_default(o) == argsTag$2;
}
var _baseIsArguments_default = baseIsArguments, objectProto = Object.prototype, hasOwnProperty$7 = objectProto.hasOwnProperty, propertyIsEnumerable$1 = objectProto.propertyIsEnumerable, isArguments_default = _baseIsArguments_default(function() {
	return arguments;
}()) ? _baseIsArguments_default : function(o) {
	return isObjectLike_default(o) && hasOwnProperty$7.call(o, "callee") && !propertyIsEnumerable$1.call(o, "callee");
};
function stubFalse() {
	return !1;
}
var stubFalse_default = stubFalse, freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module, Buffer = freeModule$1 && freeModule$1.exports === freeExports$1 ? _root_default.Buffer : void 0, isBuffer_default = (Buffer ? Buffer.isBuffer : void 0) || stubFalse_default, argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$3 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]", arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$3] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$3] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = !1;
function baseIsTypedArray(o) {
	return isObjectLike_default(o) && isLength_default(o.length) && !!typedArrayTags[_baseGetTag_default(o)];
}
var _baseIsTypedArray_default = baseIsTypedArray;
function baseUnary(o) {
	return function(F) {
		return o(F);
	};
}
var _baseUnary_default = baseUnary, freeExports = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module, freeProcess = freeModule && freeModule.exports === freeExports && _freeGlobal_default.process, _nodeUtil_default = function() {
	try {
		return freeModule && freeModule.require && freeModule.require("util").types || freeProcess && freeProcess.binding && freeProcess.binding("util");
	} catch {}
}(), nodeIsTypedArray = _nodeUtil_default && _nodeUtil_default.isTypedArray, isTypedArray_default = nodeIsTypedArray ? _baseUnary_default(nodeIsTypedArray) : _baseIsTypedArray_default, hasOwnProperty$6 = Object.prototype.hasOwnProperty;
function arrayLikeKeys(o, F) {
	var I = isArray_default(o), L = !I && isArguments_default(o), R = !I && !L && isBuffer_default(o), z = !I && !L && !R && isTypedArray_default(o), B = I || L || R || z, V = B ? _baseTimes_default(o.length, String) : [], H = V.length;
	for (var U in o) (F || hasOwnProperty$6.call(o, U)) && !(B && (U == "length" || R && (U == "offset" || U == "parent") || z && (U == "buffer" || U == "byteLength" || U == "byteOffset") || _isIndex_default(U, H))) && V.push(U);
	return V;
}
var _arrayLikeKeys_default = arrayLikeKeys;
function overArg(o, F) {
	return function(I) {
		return o(F(I));
	};
}
var _overArg_default = overArg, _nativeKeys_default = _overArg_default(Object.keys, Object), hasOwnProperty$5 = Object.prototype.hasOwnProperty;
function baseKeys(o) {
	if (!_isPrototype_default(o)) return _nativeKeys_default(o);
	var F = [];
	for (var I in Object(o)) hasOwnProperty$5.call(o, I) && I != "constructor" && F.push(I);
	return F;
}
var _baseKeys_default = baseKeys;
function keys(o) {
	return isArrayLike_default(o) ? _arrayLikeKeys_default(o) : _baseKeys_default(o);
}
var keys_default = keys, reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(o, F) {
	if (isArray_default(o)) return !1;
	var I = typeof o;
	return I == "number" || I == "symbol" || I == "boolean" || o == null || isSymbol_default(o) ? !0 : reIsPlainProp.test(o) || !reIsDeepProp.test(o) || F != null && o in Object(F);
}
var _isKey_default = isKey, _nativeCreate_default = _getNative_default(Object, "create");
function hashClear() {
	this.__data__ = _nativeCreate_default ? _nativeCreate_default(null) : {}, this.size = 0;
}
var _hashClear_default = hashClear;
function hashDelete(o) {
	var F = this.has(o) && delete this.__data__[o];
	return this.size -= F ? 1 : 0, F;
}
var _hashDelete_default = hashDelete, HASH_UNDEFINED$2 = "__lodash_hash_undefined__", hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function hashGet(o) {
	var F = this.__data__;
	if (_nativeCreate_default) {
		var I = F[o];
		return I === HASH_UNDEFINED$2 ? void 0 : I;
	}
	return hasOwnProperty$4.call(F, o) ? F[o] : void 0;
}
var _hashGet_default = hashGet, hasOwnProperty$3 = Object.prototype.hasOwnProperty;
function hashHas(o) {
	var F = this.__data__;
	return _nativeCreate_default ? F[o] !== void 0 : hasOwnProperty$3.call(F, o);
}
var _hashHas_default = hashHas, HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(o, F) {
	var I = this.__data__;
	return this.size += this.has(o) ? 0 : 1, I[o] = _nativeCreate_default && F === void 0 ? HASH_UNDEFINED$1 : F, this;
}
var _hashSet_default = hashSet;
function Hash(o) {
	var F = -1, I = o == null ? 0 : o.length;
	for (this.clear(); ++F < I;) {
		var L = o[F];
		this.set(L[0], L[1]);
	}
}
Hash.prototype.clear = _hashClear_default, Hash.prototype.delete = _hashDelete_default, Hash.prototype.get = _hashGet_default, Hash.prototype.has = _hashHas_default, Hash.prototype.set = _hashSet_default;
var _Hash_default = Hash;
function listCacheClear() {
	this.__data__ = [], this.size = 0;
}
var _listCacheClear_default = listCacheClear;
function assocIndexOf(o, F) {
	for (var I = o.length; I--;) if (eq_default(o[I][0], F)) return I;
	return -1;
}
var _assocIndexOf_default = assocIndexOf, splice = Array.prototype.splice;
function listCacheDelete(o) {
	var F = this.__data__, I = _assocIndexOf_default(F, o);
	return I < 0 ? !1 : (I == F.length - 1 ? F.pop() : splice.call(F, I, 1), --this.size, !0);
}
var _listCacheDelete_default = listCacheDelete;
function listCacheGet(o) {
	var F = this.__data__, I = _assocIndexOf_default(F, o);
	return I < 0 ? void 0 : F[I][1];
}
var _listCacheGet_default = listCacheGet;
function listCacheHas(o) {
	return _assocIndexOf_default(this.__data__, o) > -1;
}
var _listCacheHas_default = listCacheHas;
function listCacheSet(o, F) {
	var I = this.__data__, L = _assocIndexOf_default(I, o);
	return L < 0 ? (++this.size, I.push([o, F])) : I[L][1] = F, this;
}
var _listCacheSet_default = listCacheSet;
function ListCache(o) {
	var F = -1, I = o == null ? 0 : o.length;
	for (this.clear(); ++F < I;) {
		var L = o[F];
		this.set(L[0], L[1]);
	}
}
ListCache.prototype.clear = _listCacheClear_default, ListCache.prototype.delete = _listCacheDelete_default, ListCache.prototype.get = _listCacheGet_default, ListCache.prototype.has = _listCacheHas_default, ListCache.prototype.set = _listCacheSet_default;
var _ListCache_default = ListCache, _Map_default = _getNative_default(_root_default, "Map");
function mapCacheClear() {
	this.size = 0, this.__data__ = {
		hash: new _Hash_default(),
		map: new (_Map_default || _ListCache_default)(),
		string: new _Hash_default()
	};
}
var _mapCacheClear_default = mapCacheClear;
function isKeyable(o) {
	var F = typeof o;
	return F == "string" || F == "number" || F == "symbol" || F == "boolean" ? o !== "__proto__" : o === null;
}
var _isKeyable_default = isKeyable;
function getMapData(o, F) {
	var I = o.__data__;
	return _isKeyable_default(F) ? I[typeof F == "string" ? "string" : "hash"] : I.map;
}
var _getMapData_default = getMapData;
function mapCacheDelete(o) {
	var F = _getMapData_default(this, o).delete(o);
	return this.size -= F ? 1 : 0, F;
}
var _mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(o) {
	return _getMapData_default(this, o).get(o);
}
var _mapCacheGet_default = mapCacheGet;
function mapCacheHas(o) {
	return _getMapData_default(this, o).has(o);
}
var _mapCacheHas_default = mapCacheHas;
function mapCacheSet(o, F) {
	var I = _getMapData_default(this, o), L = I.size;
	return I.set(o, F), this.size += I.size == L ? 0 : 1, this;
}
var _mapCacheSet_default = mapCacheSet;
function MapCache(o) {
	var F = -1, I = o == null ? 0 : o.length;
	for (this.clear(); ++F < I;) {
		var L = o[F];
		this.set(L[0], L[1]);
	}
}
MapCache.prototype.clear = _mapCacheClear_default, MapCache.prototype.delete = _mapCacheDelete_default, MapCache.prototype.get = _mapCacheGet_default, MapCache.prototype.has = _mapCacheHas_default, MapCache.prototype.set = _mapCacheSet_default;
var _MapCache_default = MapCache, FUNC_ERROR_TEXT = "Expected a function";
function memoize(o, F) {
	if (typeof o != "function" || F != null && typeof F != "function") throw TypeError(FUNC_ERROR_TEXT);
	var I = function() {
		var L = arguments, R = F ? F.apply(this, L) : L[0], z = I.cache;
		if (z.has(R)) return z.get(R);
		var B = o.apply(this, L);
		return I.cache = z.set(R, B) || z, B;
	};
	return I.cache = new (memoize.Cache || _MapCache_default)(), I;
}
memoize.Cache = _MapCache_default;
var memoize_default = memoize, MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(o) {
	var F = memoize_default(o, function(o) {
		return I.size === MAX_MEMOIZE_SIZE && I.clear(), o;
	}), I = F.cache;
	return F;
}
var _memoizeCapped_default = memoizeCapped, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reEscapeChar = /\\(\\)?/g, _stringToPath_default = _memoizeCapped_default(function(o) {
	var F = [];
	return o.charCodeAt(0) === 46 && F.push(""), o.replace(rePropName, function(o, I, L, R) {
		F.push(L ? R.replace(reEscapeChar, "$1") : I || o);
	}), F;
});
function toString(o) {
	return o == null ? "" : _baseToString_default(o);
}
var toString_default = toString;
function castPath(o, F) {
	return isArray_default(o) ? o : _isKey_default(o, F) ? [o] : _stringToPath_default(toString_default(o));
}
var _castPath_default = castPath, INFINITY = Infinity;
function toKey(o) {
	if (typeof o == "string" || isSymbol_default(o)) return o;
	var F = o + "";
	return F == "0" && 1 / o == -INFINITY ? "-0" : F;
}
var _toKey_default = toKey;
function baseGet(o, F) {
	F = _castPath_default(F, o);
	for (var I = 0, L = F.length; o != null && I < L;) o = o[_toKey_default(F[I++])];
	return I && I == L ? o : void 0;
}
var _baseGet_default = baseGet;
function get(o, F, I) {
	var L = o == null ? void 0 : _baseGet_default(o, F);
	return L === void 0 ? I : L;
}
var get_default = get;
function arrayPush(o, F) {
	for (var I = -1, L = F.length, R = o.length; ++I < L;) o[R + I] = F[I];
	return o;
}
var _arrayPush_default = arrayPush, spreadableSymbol = _Symbol_default ? _Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(o) {
	return isArray_default(o) || isArguments_default(o) || !!(spreadableSymbol && o && o[spreadableSymbol]);
}
var _isFlattenable_default = isFlattenable;
function baseFlatten(o, F, I, L, R) {
	var z = -1, B = o.length;
	for (I ||= _isFlattenable_default, R ||= []; ++z < B;) {
		var V = o[z];
		F > 0 && I(V) ? F > 1 ? baseFlatten(V, F - 1, I, L, R) : _arrayPush_default(R, V) : L || (R[R.length] = V);
	}
	return R;
}
var _baseFlatten_default = baseFlatten;
function arrayReduce(o, F, I, L) {
	var R = -1, z = o == null ? 0 : o.length;
	for (L && z && (I = o[++R]); ++R < z;) I = F(I, o[R], R, o);
	return I;
}
var _arrayReduce_default = arrayReduce;
function stackClear() {
	this.__data__ = new _ListCache_default(), this.size = 0;
}
var _stackClear_default = stackClear;
function stackDelete(o) {
	var F = this.__data__, I = F.delete(o);
	return this.size = F.size, I;
}
var _stackDelete_default = stackDelete;
function stackGet(o) {
	return this.__data__.get(o);
}
var _stackGet_default = stackGet;
function stackHas(o) {
	return this.__data__.has(o);
}
var _stackHas_default = stackHas, LARGE_ARRAY_SIZE$1 = 200;
function stackSet(o, F) {
	var I = this.__data__;
	if (I instanceof _ListCache_default) {
		var L = I.__data__;
		if (!_Map_default || L.length < LARGE_ARRAY_SIZE$1 - 1) return L.push([o, F]), this.size = ++I.size, this;
		I = this.__data__ = new _MapCache_default(L);
	}
	return I.set(o, F), this.size = I.size, this;
}
var _stackSet_default = stackSet;
function Stack(o) {
	this.size = (this.__data__ = new _ListCache_default(o)).size;
}
Stack.prototype.clear = _stackClear_default, Stack.prototype.delete = _stackDelete_default, Stack.prototype.get = _stackGet_default, Stack.prototype.has = _stackHas_default, Stack.prototype.set = _stackSet_default;
var _Stack_default = Stack;
function arrayFilter(o, F) {
	for (var I = -1, L = o == null ? 0 : o.length, R = 0, z = []; ++I < L;) {
		var B = o[I];
		F(B, I, o) && (z[R++] = B);
	}
	return z;
}
var _arrayFilter_default = arrayFilter;
function stubArray() {
	return [];
}
var stubArray_default = stubArray, propertyIsEnumerable = Object.prototype.propertyIsEnumerable, nativeGetSymbols = Object.getOwnPropertySymbols, _getSymbols_default = nativeGetSymbols ? function(o) {
	return o == null ? [] : (o = Object(o), _arrayFilter_default(nativeGetSymbols(o), function(F) {
		return propertyIsEnumerable.call(o, F);
	}));
} : stubArray_default;
function baseGetAllKeys(o, F, I) {
	var L = F(o);
	return isArray_default(o) ? L : _arrayPush_default(L, I(o));
}
var _baseGetAllKeys_default = baseGetAllKeys;
function getAllKeys(o) {
	return _baseGetAllKeys_default(o, keys_default, _getSymbols_default);
}
var _getAllKeys_default = getAllKeys, _DataView_default = _getNative_default(_root_default, "DataView"), _Promise_default = _getNative_default(_root_default, "Promise"), _Set_default = _getNative_default(_root_default, "Set"), mapTag$2 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$2 = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag$1 = "[object DataView]", dataViewCtorString = _toSource_default(_DataView_default), mapCtorString = _toSource_default(_Map_default), promiseCtorString = _toSource_default(_Promise_default), setCtorString = _toSource_default(_Set_default), weakMapCtorString = _toSource_default(_WeakMap_default), getTag = _baseGetTag_default;
(_DataView_default && getTag(new _DataView_default(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag$1 || _Map_default && getTag(new _Map_default()) != mapTag$2 || _Promise_default && getTag(_Promise_default.resolve()) != promiseTag || _Set_default && getTag(new _Set_default()) != setTag$2 || _WeakMap_default && getTag(new _WeakMap_default()) != weakMapTag) && (getTag = function(o) {
	var F = _baseGetTag_default(o), I = F == objectTag$1 ? o.constructor : void 0, L = I ? _toSource_default(I) : "";
	if (L) switch (L) {
		case dataViewCtorString: return dataViewTag$1;
		case mapCtorString: return mapTag$2;
		case promiseCtorString: return promiseTag;
		case setCtorString: return setTag$2;
		case weakMapCtorString: return weakMapTag;
	}
	return F;
});
var _getTag_default = getTag, _Uint8Array_default = _root_default.Uint8Array, HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(o) {
	return this.__data__.set(o, HASH_UNDEFINED), this;
}
var _setCacheAdd_default = setCacheAdd;
function setCacheHas(o) {
	return this.__data__.has(o);
}
var _setCacheHas_default = setCacheHas;
function SetCache(o) {
	var F = -1, I = o == null ? 0 : o.length;
	for (this.__data__ = new _MapCache_default(); ++F < I;) this.add(o[F]);
}
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd_default, SetCache.prototype.has = _setCacheHas_default;
var _SetCache_default = SetCache;
function arraySome(o, F) {
	for (var I = -1, L = o == null ? 0 : o.length; ++I < L;) if (F(o[I], I, o)) return !0;
	return !1;
}
var _arraySome_default = arraySome;
function cacheHas(o, F) {
	return o.has(F);
}
var _cacheHas_default = cacheHas, COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(o, F, I, L, R, z) {
	var B = I & COMPARE_PARTIAL_FLAG$5, V = o.length, H = F.length;
	if (V != H && !(B && H > V)) return !1;
	var U = z.get(o), W = z.get(F);
	if (U && W) return U == F && W == o;
	var G = -1, K = !0, q = I & COMPARE_UNORDERED_FLAG$3 ? new _SetCache_default() : void 0;
	for (z.set(o, F), z.set(F, o); ++G < V;) {
		var J = o[G], Y = F[G];
		if (L) var X = B ? L(Y, J, G, F, o, z) : L(J, Y, G, o, F, z);
		if (X !== void 0) {
			if (X) continue;
			K = !1;
			break;
		}
		if (q) {
			if (!_arraySome_default(F, function(o, F) {
				if (!_cacheHas_default(q, F) && (J === o || R(J, o, I, L, z))) return q.push(F);
			})) {
				K = !1;
				break;
			}
		} else if (!(J === Y || R(J, Y, I, L, z))) {
			K = !1;
			break;
		}
	}
	return z.delete(o), z.delete(F), K;
}
var _equalArrays_default = equalArrays;
function mapToArray(o) {
	var F = -1, I = Array(o.size);
	return o.forEach(function(o, L) {
		I[++F] = [L, o];
	}), I;
}
var _mapToArray_default = mapToArray;
function setToArray(o) {
	var F = -1, I = Array(o.size);
	return o.forEach(function(o) {
		I[++F] = o;
	}), I;
}
var _setToArray_default = setToArray, COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2, boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", symbolProto = _Symbol_default ? _Symbol_default.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(o, F, I, L, R, z, B) {
	switch (I) {
		case dataViewTag:
			if (o.byteLength != F.byteLength || o.byteOffset != F.byteOffset) return !1;
			o = o.buffer, F = F.buffer;
		case arrayBufferTag: return !(o.byteLength != F.byteLength || !z(new _Uint8Array_default(o), new _Uint8Array_default(F)));
		case boolTag:
		case dateTag:
		case numberTag: return eq_default(+o, +F);
		case errorTag: return o.name == F.name && o.message == F.message;
		case regexpTag:
		case stringTag: return o == F + "";
		case mapTag$1: var V = _mapToArray_default;
		case setTag$1:
			var H = L & COMPARE_PARTIAL_FLAG$4;
			if (V ||= _setToArray_default, o.size != F.size && !H) return !1;
			var U = B.get(o);
			if (U) return U == F;
			L |= COMPARE_UNORDERED_FLAG$2, B.set(o, F);
			var W = _equalArrays_default(V(o), V(F), L, R, z, B);
			return B.delete(o), W;
		case symbolTag: if (symbolValueOf) return symbolValueOf.call(o) == symbolValueOf.call(F);
	}
	return !1;
}
var _equalByTag_default = equalByTag, COMPARE_PARTIAL_FLAG$3 = 1, hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function equalObjects(o, F, I, L, R, z) {
	var B = I & COMPARE_PARTIAL_FLAG$3, V = _getAllKeys_default(o), H = V.length;
	if (H != _getAllKeys_default(F).length && !B) return !1;
	for (var U = H; U--;) {
		var W = V[U];
		if (!(B ? W in F : hasOwnProperty$2.call(F, W))) return !1;
	}
	var G = z.get(o), K = z.get(F);
	if (G && K) return G == F && K == o;
	var q = !0;
	z.set(o, F), z.set(F, o);
	for (var J = B; ++U < H;) {
		W = V[U];
		var Y = o[W], X = F[W];
		if (L) var Z = B ? L(X, Y, W, F, o, z) : L(Y, X, W, o, F, z);
		if (!(Z === void 0 ? Y === X || R(Y, X, I, L, z) : Z)) {
			q = !1;
			break;
		}
		J ||= W == "constructor";
	}
	if (q && !J) {
		var Q = o.constructor, $ = F.constructor;
		Q != $ && "constructor" in o && "constructor" in F && !(typeof Q == "function" && Q instanceof Q && typeof $ == "function" && $ instanceof $) && (q = !1);
	}
	return z.delete(o), z.delete(F), q;
}
var _equalObjects_default = equalObjects, COMPARE_PARTIAL_FLAG$2 = 1, argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]", hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function baseIsEqualDeep(o, F, I, L, R, z) {
	var B = isArray_default(o), V = isArray_default(F), H = B ? arrayTag : _getTag_default(o), U = V ? arrayTag : _getTag_default(F);
	H = H == argsTag ? objectTag : H, U = U == argsTag ? objectTag : U;
	var W = H == objectTag, G = U == objectTag, K = H == U;
	if (K && isBuffer_default(o)) {
		if (!isBuffer_default(F)) return !1;
		B = !0, W = !1;
	}
	if (K && !W) return z ||= new _Stack_default(), B || isTypedArray_default(o) ? _equalArrays_default(o, F, I, L, R, z) : _equalByTag_default(o, F, H, I, L, R, z);
	if (!(I & COMPARE_PARTIAL_FLAG$2)) {
		var q = W && hasOwnProperty$1.call(o, "__wrapped__"), J = G && hasOwnProperty$1.call(F, "__wrapped__");
		if (q || J) {
			var Y = q ? o.value() : o, X = J ? F.value() : F;
			return z ||= new _Stack_default(), R(Y, X, I, L, z);
		}
	}
	return K ? (z ||= new _Stack_default(), _equalObjects_default(o, F, I, L, R, z)) : !1;
}
var _baseIsEqualDeep_default = baseIsEqualDeep;
function baseIsEqual(o, F, I, L, R) {
	return o === F ? !0 : o == null || F == null || !isObjectLike_default(o) && !isObjectLike_default(F) ? o !== o && F !== F : _baseIsEqualDeep_default(o, F, I, L, baseIsEqual, R);
}
var _baseIsEqual_default = baseIsEqual, COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(o, F, I, L) {
	var R = I.length, z = R, B = !L;
	if (o == null) return !z;
	for (o = Object(o); R--;) {
		var V = I[R];
		if (B && V[2] ? V[1] !== o[V[0]] : !(V[0] in o)) return !1;
	}
	for (; ++R < z;) {
		V = I[R];
		var H = V[0], U = o[H], W = V[1];
		if (B && V[2]) {
			if (U === void 0 && !(H in o)) return !1;
		} else {
			var G = new _Stack_default();
			if (L) var K = L(U, W, H, o, F, G);
			if (!(K === void 0 ? _baseIsEqual_default(W, U, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, L, G) : K)) return !1;
		}
	}
	return !0;
}
var _baseIsMatch_default = baseIsMatch;
function isStrictComparable(o) {
	return o === o && !isObject_default(o);
}
var _isStrictComparable_default = isStrictComparable;
function getMatchData(o) {
	for (var F = keys_default(o), I = F.length; I--;) {
		var L = F[I], R = o[L];
		F[I] = [
			L,
			R,
			_isStrictComparable_default(R)
		];
	}
	return F;
}
var _getMatchData_default = getMatchData;
function matchesStrictComparable(o, F) {
	return function(I) {
		return I == null ? !1 : I[o] === F && (F !== void 0 || o in Object(I));
	};
}
var _matchesStrictComparable_default = matchesStrictComparable;
function baseMatches(o) {
	var F = _getMatchData_default(o);
	return F.length == 1 && F[0][2] ? _matchesStrictComparable_default(F[0][0], F[0][1]) : function(I) {
		return I === o || _baseIsMatch_default(I, o, F);
	};
}
var _baseMatches_default = baseMatches;
function baseHasIn(o, F) {
	return o != null && F in Object(o);
}
var _baseHasIn_default = baseHasIn;
function hasPath(o, F, I) {
	F = _castPath_default(F, o);
	for (var L = -1, R = F.length, z = !1; ++L < R;) {
		var B = _toKey_default(F[L]);
		if (!(z = o != null && I(o, B))) break;
		o = o[B];
	}
	return z || ++L != R ? z : (R = o == null ? 0 : o.length, !!R && isLength_default(R) && _isIndex_default(B, R) && (isArray_default(o) || isArguments_default(o)));
}
var _hasPath_default = hasPath;
function hasIn(o, F) {
	return o != null && _hasPath_default(o, F, _baseHasIn_default);
}
var hasIn_default = hasIn, COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(o, F) {
	return _isKey_default(o) && _isStrictComparable_default(F) ? _matchesStrictComparable_default(_toKey_default(o), F) : function(I) {
		var L = get_default(I, o);
		return L === void 0 && L === F ? hasIn_default(I, o) : _baseIsEqual_default(F, L, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	};
}
var _baseMatchesProperty_default = baseMatchesProperty;
function baseProperty(o) {
	return function(F) {
		return F?.[o];
	};
}
var _baseProperty_default = baseProperty;
function basePropertyDeep(o) {
	return function(F) {
		return _baseGet_default(F, o);
	};
}
var _basePropertyDeep_default = basePropertyDeep;
function property(o) {
	return _isKey_default(o) ? _baseProperty_default(_toKey_default(o)) : _basePropertyDeep_default(o);
}
var property_default = property;
function baseIteratee(o) {
	return typeof o == "function" ? o : o == null ? identity_default : typeof o == "object" ? isArray_default(o) ? _baseMatchesProperty_default(o[0], o[1]) : _baseMatches_default(o) : property_default(o);
}
var _baseIteratee_default = baseIteratee;
function createBaseFor(o) {
	return function(F, I, L) {
		for (var R = -1, z = Object(F), B = L(F), V = B.length; V--;) {
			var H = B[o ? V : ++R];
			if (I(z[H], H, z) === !1) break;
		}
		return F;
	};
}
var _baseFor_default = createBaseFor();
function baseForOwn(o, F) {
	return o && _baseFor_default(o, F, keys_default);
}
var _baseForOwn_default = baseForOwn;
function createBaseEach(o, F) {
	return function(I, L) {
		if (I == null) return I;
		if (!isArrayLike_default(I)) return o(I, L);
		for (var R = I.length, z = F ? R : -1, B = Object(I); (F ? z-- : ++z < R) && L(B[z], z, B) !== !1;);
		return I;
	};
}
var _baseEach_default = createBaseEach(_baseForOwn_default);
function isArrayLikeObject(o) {
	return isObjectLike_default(o) && isArrayLike_default(o);
}
var isArrayLikeObject_default = isArrayLikeObject;
function arrayIncludesWith(o, F, I) {
	for (var L = -1, R = o == null ? 0 : o.length; ++L < R;) if (I(F, o[L])) return !0;
	return !1;
}
var _arrayIncludesWith_default = arrayIncludesWith;
function castFunction(o) {
	return typeof o == "function" ? o : identity_default;
}
var _castFunction_default = castFunction;
function forEach(o, F) {
	return (isArray_default(o) ? _arrayEach_default : _baseEach_default)(o, _castFunction_default(F));
}
var forEach_default = forEach;
function baseFilter(o, F) {
	var I = [];
	return _baseEach_default(o, function(o, L, R) {
		F(o, L, R) && I.push(o);
	}), I;
}
var _baseFilter_default = baseFilter;
function filter(o, F) {
	return (isArray_default(o) ? _arrayFilter_default : _baseFilter_default)(o, _baseIteratee_default(F, 3));
}
var filter_default = filter;
function baseValues(o, F) {
	return _arrayMap_default(F, function(F) {
		return o[F];
	});
}
var _baseValues_default = baseValues;
function values(o) {
	return o == null ? [] : _baseValues_default(o, keys_default(o));
}
var values_default = values, mapTag = "[object Map]", setTag = "[object Set]", hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(o) {
	if (o == null) return !0;
	if (isArrayLike_default(o) && (isArray_default(o) || typeof o == "string" || typeof o.splice == "function" || isBuffer_default(o) || isTypedArray_default(o) || isArguments_default(o))) return !o.length;
	var F = _getTag_default(o);
	if (F == mapTag || F == setTag) return !o.size;
	if (_isPrototype_default(o)) return !_baseKeys_default(o).length;
	for (var I in o) if (hasOwnProperty.call(o, I)) return !1;
	return !0;
}
var isEmpty_default = isEmpty;
function isUndefined(o) {
	return o === void 0;
}
var isUndefined_default = isUndefined;
function baseReduce(o, F, I, L, R) {
	return R(o, function(o, R, z) {
		I = L ? (L = !1, o) : F(I, o, R, z);
	}), I;
}
var _baseReduce_default = baseReduce;
function reduce(o, F, I) {
	var L = isArray_default(o) ? _arrayReduce_default : _baseReduce_default, R = arguments.length < 3;
	return L(o, _baseIteratee_default(F, 4), I, R, _baseEach_default);
}
var reduce_default = reduce, _createSet_default = _Set_default && 1 / _setToArray_default(new _Set_default([, -0]))[1] == Infinity ? function(o) {
	return new _Set_default(o);
} : noop_default, LARGE_ARRAY_SIZE = 200;
function baseUniq(o, F, I) {
	var L = -1, R = _arrayIncludes_default, z = o.length, B = !0, V = [], H = V;
	if (I) B = !1, R = _arrayIncludesWith_default;
	else if (z >= LARGE_ARRAY_SIZE) {
		var U = F ? null : _createSet_default(o);
		if (U) return _setToArray_default(U);
		B = !1, R = _cacheHas_default, H = new _SetCache_default();
	} else H = F ? [] : V;
	outer: for (; ++L < z;) {
		var W = o[L], G = F ? F(W) : W;
		if (W = I || W !== 0 ? W : 0, B && G === G) {
			for (var K = H.length; K--;) if (H[K] === G) continue outer;
			F && H.push(G), V.push(W);
		} else R(H, G, I) || (H !== V && H.push(G), V.push(W));
	}
	return V;
}
var _baseUniq_default = baseUniq, union_default = _baseRest_default(function(o) {
	return _baseUniq_default(_baseFlatten_default(o, 1, isArrayLikeObject_default, !0));
}), DEFAULT_EDGE_NAME = "\0", GRAPH_NODE = "\0", EDGE_KEY_DELIM = "", Graph = class {
	constructor(o = {}) {
		this._isDirected = Object.prototype.hasOwnProperty.call(o, "directed") ? o.directed : !0, this._isMultigraph = Object.prototype.hasOwnProperty.call(o, "multigraph") ? o.multigraph : !1, this._isCompound = Object.prototype.hasOwnProperty.call(o, "compound") ? o.compound : !1, this._label = void 0, this._defaultNodeLabelFn = constant_default(void 0), this._defaultEdgeLabelFn = constant_default(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[GRAPH_NODE] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
	}
	isDirected() {
		return this._isDirected;
	}
	isMultigraph() {
		return this._isMultigraph;
	}
	isCompound() {
		return this._isCompound;
	}
	setGraph(o) {
		return this._label = o, this;
	}
	graph() {
		return this._label;
	}
	setDefaultNodeLabel(o) {
		return isFunction_default(o) || (o = constant_default(o)), this._defaultNodeLabelFn = o, this;
	}
	nodeCount() {
		return this._nodeCount;
	}
	nodes() {
		return keys_default(this._nodes);
	}
	sources() {
		var o = this;
		return filter_default(this.nodes(), function(F) {
			return isEmpty_default(o._in[F]);
		});
	}
	sinks() {
		var o = this;
		return filter_default(this.nodes(), function(F) {
			return isEmpty_default(o._out[F]);
		});
	}
	setNodes(o, F) {
		var I = arguments, L = this;
		return forEach_default(o, function(o) {
			I.length > 1 ? L.setNode(o, F) : L.setNode(o);
		}), this;
	}
	setNode(o, F) {
		return Object.prototype.hasOwnProperty.call(this._nodes, o) ? (arguments.length > 1 && (this._nodes[o] = F), this) : (this._nodes[o] = arguments.length > 1 ? F : this._defaultNodeLabelFn(o), this._isCompound && (this._parent[o] = GRAPH_NODE, this._children[o] = {}, this._children[GRAPH_NODE][o] = !0), this._in[o] = {}, this._preds[o] = {}, this._out[o] = {}, this._sucs[o] = {}, ++this._nodeCount, this);
	}
	node(o) {
		return this._nodes[o];
	}
	hasNode(o) {
		return Object.prototype.hasOwnProperty.call(this._nodes, o);
	}
	removeNode(o) {
		if (Object.prototype.hasOwnProperty.call(this._nodes, o)) {
			var F = (o) => this.removeEdge(this._edgeObjs[o]);
			delete this._nodes[o], this._isCompound && (this._removeFromParentsChildList(o), delete this._parent[o], forEach_default(this.children(o), (o) => {
				this.setParent(o);
			}), delete this._children[o]), forEach_default(keys_default(this._in[o]), F), delete this._in[o], delete this._preds[o], forEach_default(keys_default(this._out[o]), F), delete this._out[o], delete this._sucs[o], --this._nodeCount;
		}
		return this;
	}
	setParent(o, F) {
		if (!this._isCompound) throw Error("Cannot set parent in a non-compound graph");
		if (isUndefined_default(F)) F = GRAPH_NODE;
		else {
			F += "";
			for (var I = F; !isUndefined_default(I); I = this.parent(I)) if (I === o) throw Error("Setting " + F + " as parent of " + o + " would create a cycle");
			this.setNode(F);
		}
		return this.setNode(o), this._removeFromParentsChildList(o), this._parent[o] = F, this._children[F][o] = !0, this;
	}
	_removeFromParentsChildList(o) {
		delete this._children[this._parent[o]][o];
	}
	parent(o) {
		if (this._isCompound) {
			var F = this._parent[o];
			if (F !== GRAPH_NODE) return F;
		}
	}
	children(o) {
		if (isUndefined_default(o) && (o = GRAPH_NODE), this._isCompound) {
			var F = this._children[o];
			if (F) return keys_default(F);
		} else if (o === GRAPH_NODE) return this.nodes();
		else if (this.hasNode(o)) return [];
	}
	predecessors(o) {
		var F = this._preds[o];
		if (F) return keys_default(F);
	}
	successors(o) {
		var F = this._sucs[o];
		if (F) return keys_default(F);
	}
	neighbors(o) {
		var F = this.predecessors(o);
		if (F) return union_default(F, this.successors(o));
	}
	isLeaf(o) {
		return (this.isDirected() ? this.successors(o) : this.neighbors(o)).length === 0;
	}
	filterNodes(o) {
		var F = new this.constructor({
			directed: this._isDirected,
			multigraph: this._isMultigraph,
			compound: this._isCompound
		});
		F.setGraph(this.graph());
		var I = this;
		forEach_default(this._nodes, function(I, L) {
			o(L) && F.setNode(L, I);
		}), forEach_default(this._edgeObjs, function(o) {
			F.hasNode(o.v) && F.hasNode(o.w) && F.setEdge(o, I.edge(o));
		});
		var L = {};
		function R(o) {
			var z = I.parent(o);
			return z === void 0 || F.hasNode(z) ? (L[o] = z, z) : z in L ? L[z] : R(z);
		}
		return this._isCompound && forEach_default(F.nodes(), function(o) {
			F.setParent(o, R(o));
		}), F;
	}
	setDefaultEdgeLabel(o) {
		return isFunction_default(o) || (o = constant_default(o)), this._defaultEdgeLabelFn = o, this;
	}
	edgeCount() {
		return this._edgeCount;
	}
	edges() {
		return values_default(this._edgeObjs);
	}
	setPath(o, F) {
		var I = this, L = arguments;
		return reduce_default(o, function(o, R) {
			return L.length > 1 ? I.setEdge(o, R, F) : I.setEdge(o, R), R;
		}), this;
	}
	setEdge() {
		var o, F, I, L, R = !1, z = arguments[0];
		typeof z == "object" && z && "v" in z ? (o = z.v, F = z.w, I = z.name, arguments.length === 2 && (L = arguments[1], R = !0)) : (o = z, F = arguments[1], I = arguments[3], arguments.length > 2 && (L = arguments[2], R = !0)), o = "" + o, F = "" + F, isUndefined_default(I) || (I = "" + I);
		var B = edgeArgsToId(this._isDirected, o, F, I);
		if (Object.prototype.hasOwnProperty.call(this._edgeLabels, B)) return R && (this._edgeLabels[B] = L), this;
		if (!isUndefined_default(I) && !this._isMultigraph) throw Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(o), this.setNode(F), this._edgeLabels[B] = R ? L : this._defaultEdgeLabelFn(o, F, I);
		var V = edgeArgsToObj(this._isDirected, o, F, I);
		return o = V.v, F = V.w, Object.freeze(V), this._edgeObjs[B] = V, incrementOrInitEntry(this._preds[F], o), incrementOrInitEntry(this._sucs[o], F), this._in[F][B] = V, this._out[o][B] = V, this._edgeCount++, this;
	}
	edge(o, F, I) {
		var L = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, o, F, I);
		return this._edgeLabels[L];
	}
	hasEdge(o, F, I) {
		var L = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, o, F, I);
		return Object.prototype.hasOwnProperty.call(this._edgeLabels, L);
	}
	removeEdge(o, F, I) {
		var L = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, o, F, I), R = this._edgeObjs[L];
		return R && (o = R.v, F = R.w, delete this._edgeLabels[L], delete this._edgeObjs[L], decrementOrRemoveEntry(this._preds[F], o), decrementOrRemoveEntry(this._sucs[o], F), delete this._in[F][L], delete this._out[o][L], this._edgeCount--), this;
	}
	inEdges(o, F) {
		var I = this._in[o];
		if (I) {
			var L = values_default(I);
			return F ? filter_default(L, function(o) {
				return o.v === F;
			}) : L;
		}
	}
	outEdges(o, F) {
		var I = this._out[o];
		if (I) {
			var L = values_default(I);
			return F ? filter_default(L, function(o) {
				return o.w === F;
			}) : L;
		}
	}
	nodeEdges(o, F) {
		var I = this.inEdges(o, F);
		if (I) return I.concat(this.outEdges(o, F));
	}
};
Graph.prototype._nodeCount = 0, Graph.prototype._edgeCount = 0;
function incrementOrInitEntry(o, F) {
	o[F] ? o[F]++ : o[F] = 1;
}
function decrementOrRemoveEntry(o, F) {
	--o[F] || delete o[F];
}
function edgeArgsToId(o, F, I, L) {
	var R = "" + F, z = "" + I;
	if (!o && R > z) {
		var B = R;
		R = z, z = B;
	}
	return R + EDGE_KEY_DELIM + z + EDGE_KEY_DELIM + (isUndefined_default(L) ? DEFAULT_EDGE_NAME : L);
}
function edgeArgsToObj(o, F, I, L) {
	var R = "" + F, z = "" + I;
	if (!o && R > z) {
		var B = R;
		R = z, z = B;
	}
	var V = {
		v: R,
		w: z
	};
	return L && (V.name = L), V;
}
function edgeObjToId(o, F) {
	return edgeArgsToId(o, F.v, F.w, F.name);
}
export { _arrayMap_default as $, _baseKeys_default as A, _baseRest_default as B, _baseFlatten_default as C, _castPath_default as D, _toKey_default as E, _baseUnary_default as F, _arrayEach_default as G, eq_default as H, isBuffer_default as I, constant_default as J, _setToString_default as K, isArguments_default as L, _arrayLikeKeys_default as M, isTypedArray_default as N, toString_default as O, _nodeUtil_default as P, isArray_default as Q, _isPrototype_default as R, _Stack_default as S, _baseGet_default as T, _isIndex_default as U, _overRest_default as V, _baseFindIndex_default as W, identity_default as X, isFunction_default as Y, isObject_default as Z, _getTag_default as _, filter_default as a, _getSymbols_default as b, isArrayLikeObject_default as c, _baseFor_default as d, isSymbol_default as et, _baseIteratee_default as f, _Uint8Array_default as g, _hasPath_default as h, values_default as i, _root_default as it, _overArg_default as j, keys_default as k, _baseEach_default as l, hasIn_default as m, reduce_default as n, _baseGetTag_default as nt, forEach_default as o, _baseProperty_default as p, _defineProperty_default as q, isUndefined_default as r, _Symbol_default as rt, _castFunction_default as s, Graph as t, isObjectLike_default as tt, _baseForOwn_default as u, _getAllKeys_default as v, _arrayPush_default as w, stubArray_default as x, _baseGetAllKeys_default as y, isArrayLike_default as z };
