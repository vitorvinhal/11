import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { _ as setTerminalWebglDiagnosticRecorder, d as resetAndRefreshAllTerminalWebglAtlases, g as recordTerminalWebglDiagnostic, h as TERMINAL_WEBGL_DIAGNOSTIC_BREADCRUMB, o as forEachLivePaneForDesyncSentinel, r as hasDeferredPaneMetricOptions, v as recordRendererCrashBreadcrumb } from "./pane-metric-options-deferral-Bz211kas.js";
function getEnumValues(o) {
	let F = Object.values(o).filter((o) => typeof o == "number");
	return Object.entries(o).filter(([o, I]) => F.indexOf(+o) === -1).map(([o, F]) => F);
}
function joinValues(o, F = "|") {
	return o.map((o) => stringifyPrimitive(o)).join(F);
}
function jsonStringifyReplacer(o, F) {
	return typeof F == "bigint" ? F.toString() : F;
}
function cached(o) {
	return { get value() {
		{
			let F = o();
			return Object.defineProperty(this, "value", { value: F }), F;
		}
		throw Error("cached value already set");
	} };
}
function nullish(o) {
	return o == null;
}
function cleanRegex(o) {
	let F = o.startsWith("^") ? 1 : 0, I = o.endsWith("$") ? o.length - 1 : o.length;
	return o.slice(F, I);
}
function floatSafeRemainder(o, F) {
	let I = o / F, L = Math.round(I), R = 4 * 2 ** -52 * Math.max(Math.abs(I), 1);
	return Math.abs(I - L) < R ? 0 : I - L;
}
var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(o, F, I) {
	let L;
	Object.defineProperty(o, F, {
		get() {
			if (L !== EVALUATING) return L === void 0 && (L = EVALUATING, L = I()), L;
		},
		set(I) {
			Object.defineProperty(o, F, { value: I });
		},
		configurable: !0
	});
}
function assignProp(o, F, I) {
	Object.defineProperty(o, F, {
		value: I,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function mergeDefs(...o) {
	let F = {};
	for (let I of o) {
		let o = Object.getOwnPropertyDescriptors(I);
		Object.assign(F, o);
	}
	return Object.defineProperties({}, F);
}
function esc(o) {
	return JSON.stringify(o);
}
function slugify(o) {
	return o.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (...o) => {};
function isObject(o) {
	return typeof o == "object" && !!o && !Array.isArray(o);
}
const allowsEval = /* @__PURE__ */ cached(() => {
	if (globalConfig.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function isPlainObject(o) {
	if (isObject(o) === !1) return !1;
	let F = o.constructor;
	if (F === void 0 || typeof F != "function") return !0;
	let I = F.prototype;
	return !(isObject(I) === !1 || Object.prototype.hasOwnProperty.call(I, "isPrototypeOf") === !1);
}
function shallowClone(o) {
	return isPlainObject(o) ? { ...o } : Array.isArray(o) ? [...o] : o instanceof Map ? new Map(o) : o instanceof Set ? new Set(o) : o;
}
const propertyKeyTypes = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function escapeRegex(o) {
	return o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(o, F, I) {
	let L = new o._zod.constr(F ?? o._zod.def);
	return (!F || I?.parent) && (L._zod.parent = o), L;
}
function normalizeParams(o) {
	let F = o;
	if (!F) return {};
	if (typeof F == "string") return { error: () => F };
	if (F?.message !== void 0) {
		if (F?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		F.error = F.message;
	}
	return delete F.message, typeof F.error == "string" ? {
		...F,
		error: () => F.error
	} : F;
}
function stringifyPrimitive(o) {
	return typeof o == "bigint" ? o.toString() + "n" : typeof o == "string" ? `"${o}"` : `${o}`;
}
function optionalKeys(o) {
	return Object.keys(o).filter((F) => o[F]._zod.optin !== void 0 && o[F]._zod.optout === "optional");
}
const NUMBER_FORMAT_RANGES = /* @__PURE__ */ (() => ({
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))();
function pick(o, F) {
	let I = o._zod.def, L = I.checks;
	if (L && L.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return clone(o, mergeDefs(o._zod.def, {
		get shape() {
			let o = {};
			for (let L of Reflect.ownKeys(F)) {
				if (!Object.prototype.hasOwnProperty.call(I.shape, L)) throw Error(`Unrecognized key: "${String(L)}"`);
				F[L] && assignProp(o, L, I.shape[L]);
			}
			return assignProp(this, "shape", o), o;
		},
		checks: []
	}));
}
function omit(o, F) {
	let I = o._zod.def, L = I.checks;
	if (L && L.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return clone(o, mergeDefs(o._zod.def, {
		get shape() {
			let L = { ...o._zod.def.shape };
			for (let o of Reflect.ownKeys(F)) {
				if (!Object.prototype.hasOwnProperty.call(I.shape, o)) throw Error(`Unrecognized key: "${String(o)}"`);
				F[o] && delete L[o];
			}
			return assignProp(this, "shape", L), L;
		},
		checks: []
	}));
}
function extend(o, F) {
	if (!isPlainObject(F)) throw Error("Invalid input to extend: expected a plain object");
	let I = o._zod.def.checks;
	if (I && I.length > 0) {
		let I = o._zod.def.shape;
		for (let o of Reflect.ownKeys(F)) if (Object.getOwnPropertyDescriptor(I, o) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(o, mergeDefs(o._zod.def, { get shape() {
		let I = {
			...o._zod.def.shape,
			...F
		};
		return assignProp(this, "shape", I), I;
	} }));
}
function safeExtend(o, F) {
	if (!isPlainObject(F)) throw Error("Invalid input to safeExtend: expected a plain object");
	return clone(o, mergeDefs(o._zod.def, { get shape() {
		let I = {
			...o._zod.def.shape,
			...F
		};
		return assignProp(this, "shape", I), I;
	} }));
}
function merge(o, F) {
	if (!F?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (o._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return clone(o, mergeDefs(o._zod.def, {
		get shape() {
			let I = {
				...o._zod.def.shape,
				...F._zod.def.shape
			};
			return assignProp(this, "shape", I), I;
		},
		get catchall() {
			return F._zod.def.catchall;
		},
		checks: F._zod.def.checks ?? []
	}));
}
function partial(o, F, I, L = "partial") {
	let R = F._zod.def.checks;
	if (R && R.length > 0) throw Error(`.${L}() cannot be used on object schemas containing refinements`);
	return clone(F, mergeDefs(F._zod.def, {
		get shape() {
			let L = F._zod.def.shape, R = { ...L };
			if (I) for (let F of Reflect.ownKeys(I)) {
				if (!Object.prototype.hasOwnProperty.call(L, F)) throw Error(`Unrecognized key: "${String(F)}"`);
				I[F] && (R[F] = o ? new o({
					type: "optional",
					innerType: L[F]
				}) : L[F]);
			}
			else for (let F of Reflect.ownKeys(L)) R[F] = o ? new o({
				type: "optional",
				innerType: L[F]
			}) : L[F];
			return assignProp(this, "shape", R), R;
		},
		checks: []
	}));
}
function required(o, F, I) {
	return clone(F, mergeDefs(F._zod.def, { get shape() {
		let L = F._zod.def.shape, R = { ...L };
		if (I) for (let F of Reflect.ownKeys(I)) {
			if (!Object.prototype.hasOwnProperty.call(R, F)) throw Error(`Unrecognized key: "${String(F)}"`);
			I[F] && (R[F] = new o({
				type: "nonoptional",
				innerType: L[F]
			}));
		}
		else for (let F of Reflect.ownKeys(L)) R[F] = new o({
			type: "nonoptional",
			innerType: L[F]
		});
		return assignProp(this, "shape", R), R;
	} }));
}
function aborted(o, F = 0) {
	if (o.aborted === !0) return !0;
	for (let I = F; I < o.issues.length; I++) if (o.issues[I]?.continue !== !0) return !0;
	return !1;
}
function explicitlyAborted(o, F = 0) {
	if (o.aborted === !0) return !0;
	for (let I = F; I < o.issues.length; I++) if (o.issues[I]?.continue === !1) return !0;
	return !1;
}
function prefixIssues(o, F) {
	return F.map((F) => {
		var I;
		return (I = F).path ?? (I.path = []), F.path.unshift(o), F;
	});
}
function unwrapMessage(o) {
	return typeof o == "string" ? o : o?.message;
}
function attachSchema(o, F, I) {
	var L;
	for (let R = F; R < o.length; R++) (L = o[R]).schema ?? (L.schema = I);
}
function finalizeIssue(o, F, I) {
	var L;
	let R = o.inst?._zod?.traits;
	R?.has("$ZodType") && (R.has("$ZodCheck") ? (L = o).schema ?? (L.schema = o.inst) : o.schema = o.inst);
	let z = o.schema === o.inst ? void 0 : o.schema?._zod.def?.error, B = o.message ? o.message : unwrapMessage(o.inst?._zod.def?.error?.(o)) ?? unwrapMessage(z?.(o)) ?? unwrapMessage(F?.error?.(o)) ?? unwrapMessage(I.customError?.(o)) ?? unwrapMessage(I.localeError?.(o)) ?? "Invalid input", { inst: V, schema: H, continue: U, input: W, ...G } = o;
	return G.path ??= [], G.message = B, F?.reportInput && (G.input = W), G;
}
var highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(o) {
	let F = o.length;
	if (!highSurrogate.test(o)) return F;
	let I = F;
	for (let L = 0; L < F - 1; L++) (o.charCodeAt(L) & 64512) == 55296 && (o.charCodeAt(L + 1) & 64512) == 56320 && (I--, L++);
	return I;
}
function getLengthableOrigin(o) {
	return Array.isArray(o) ? "array" : typeof o == "string" ? "string" : "unknown";
}
function parsedType(o) {
	let F = typeof o;
	switch (F) {
		case "number": return Number.isNaN(o) ? "nan" : "number";
		case "object": {
			if (o === null) return "null";
			if (Array.isArray(o)) return "array";
			let F = o;
			if (F && Object.getPrototypeOf(F) !== Object.prototype && "constructor" in F && F.constructor) return F.constructor.name;
		}
	}
	return F;
}
function issue(...o) {
	let [F, I, L] = o;
	return typeof F == "string" ? {
		message: F,
		code: "custom",
		input: I,
		inst: L
	} : { ...F };
}
function members(o, F) {
	for (let I in F) {
		let L = Object.getOwnPropertyDescriptor(F, I);
		L.get ? Object.defineProperty(o, I, {
			...L,
			enumerable: !1
		}) : defineBound(o, I, L.value);
	}
}
function own(o, F, I, L = !0) {
	return Object.defineProperty(o, F, {
		configurable: !0,
		writable: !0,
		enumerable: L,
		value: I
	}), I;
}
function hide(o, F, I) {
	return own(o, F, I, !1);
}
function defineBound(o, F, I) {
	Object.defineProperty(o, F, {
		configurable: !0,
		get() {
			return this == null ? I : own(this, F, I.bind(this));
		},
		set(o) {
			own(this, F, o);
		}
	});
}
function claim(o, F) {
	let I = Object.getPrototypeOf(o);
	return F in I ? void 0 : I;
}
var installing, broke = !1, breaker = {
	configurable: !0,
	get() {
		broke = !0;
	}
};
function defineLazyInternal(o, F, I) {
	let L = Object.getPrototypeOf(o._zod);
	if (F in L && installing !== o._zod) {
		installing = void 0;
		return;
	}
	installing = o._zod, Object.defineProperty(L, F, {
		configurable: !0,
		get() {
			Object.defineProperty(this, F, breaker);
			let o = broke;
			broke = !1;
			try {
				let L = I(this);
				return broke ? delete this[F] : Object.defineProperty(this, F, {
					configurable: !0,
					writable: !0,
					value: L
				}), broke ||= o, L;
			} catch (I) {
				throw delete this[F], broke ||= o, I;
			}
		},
		set(o) {
			Object.defineProperty(this, F, {
				configurable: !0,
				writable: !0,
				value: o
			});
		}
	});
}
function installLazyProp(o, F, I, L) {
	let R = claim(o, F);
	R && Object.defineProperty(R, F, {
		configurable: !0,
		get() {
			let o = {
				configurable: !0,
				writable: !0,
				enumerable: L,
				value: void 0
			};
			return Object.defineProperty(this, F, o), o.value = I(this), Object.defineProperty(this, F, o), o.value;
		},
		set(o) {
			Object.defineProperty(this, F, {
				configurable: !0,
				writable: !0,
				enumerable: L,
				value: o
			});
		}
	});
}
function constantCatch(o) {
	let F = () => o;
	return F["~constantCatch"] = !0, F;
}
var _a$1;
const NEVER = /* @__PURE__ */ Object.freeze({ status: "aborted" });
var _zodDesc$1 = {
	value: void 0,
	enumerable: !1
}, _E = "captureStackTrace" in Error ? Error : null;
function newError(o) {
	let F = _E;
	if (F) {
		let I = F.stackTraceLimit;
		if (typeof I == "number") {
			try {
				F.stackTraceLimit = 0;
			} catch {
				return _E = null, new o();
			}
			try {
				return new o();
			} finally {
				F.stackTraceLimit = I;
			}
		}
	}
	return new o();
}
function $constructor(o, F, I, L) {
	let R = {};
	function z(o) {
		this.def = o, this.constr = G, this.traits = /* @__PURE__ */ new Set();
	}
	z.prototype = R;
	let B = I, V = B && /* @__PURE__ */ new WeakSet();
	function H(I, L) {
		if (!I._zod) {
			_zodDesc$1.value = new z(L);
			try {
				Object.defineProperty(I, "_zod", _zodDesc$1);
			} finally {
				_zodDesc$1.value = void 0;
			}
		}
		if (I._zod.traits.has(o)) return;
		if (I._zod.traits.add(o), F(I, L), V) {
			let o = Object.getPrototypeOf(I), F = I._zod.constr.prototype, L = o;
			for (; L && L !== F;) L = Object.getPrototypeOf(L);
			let R = L ?? o;
			V.has(R) || (V.add(R), members(R, B));
		}
		let R = G.prototype;
		for (let o in R) Object.prototype.hasOwnProperty.call(R, o) && (o in I || (I[o] = R[o].bind(I)));
	}
	let U = L?.Parent ?? Object;
	class W extends U {}
	Object.defineProperty(W, "name", { value: o });
	function G(o) {
		let F = L?.Parent ? newError(W) : this;
		H(F, o);
		let I = F._zod.deferred;
		if (I) {
			for (let o of I) o();
			F._zod.deferred = void 0;
		}
		let R = globalThis.__zod_globalConfig?.postProcessor;
		return R && R(F), F;
	}
	return Object.defineProperty(G, "init", { value: H }), Object.defineProperty(G, Symbol.hasInstance, { value: (F) => L?.Parent && F instanceof L.Parent ? !0 : F?._zod?.traits?.has(o) }), Object.defineProperty(G, "name", { value: o }), G;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, $ZodEncodeError = class extends Error {
	constructor(o) {
		super(`Encountered unidirectional transform during encode: ${o}`), this.name = "ZodEncodeError";
	}
};
(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
const globalConfig = globalThis.__zod_globalConfig;
function config(o) {
	return o && Object.assign(globalConfig, o), globalConfig;
}
function _getMessage() {
	let o = this._zod;
	return o.message ??= JSON.stringify(o.def, jsonStringifyReplacer, 2), o.message;
}
function _setMessage(o) {
	this._zod.message = o;
}
var _messageDesc = {
	get: _getMessage,
	set: _setMessage,
	enumerable: !0,
	configurable: !0
}, _zodDesc = {
	value: void 0,
	enumerable: !1
}, _issuesDesc = {
	value: void 0,
	enumerable: !1
}, _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), initializer$1 = (o, F) => {
	o.name = "$ZodError", _zodDesc.value = o._zod, Object.defineProperty(o, "_zod", _zodDesc), _issuesDesc.value = F, Object.defineProperty(o, "issues", _issuesDesc), _zodDesc.value = void 0, _issuesDesc.value = void 0, Object.defineProperty(o, "message", _messageDesc);
	let I = Object.getPrototypeOf(o);
	_installedToString.has(I) || (_installedToString.add(I), Object.defineProperty(I, "toString", {
		configurable: !0,
		enumerable: !1,
		get() {
			let o = () => this.message;
			return Object.defineProperty(this, "toString", {
				value: o,
				configurable: !0,
				writable: !0
			}), o;
		},
		set(o) {
			Object.defineProperty(this, "toString", {
				value: o,
				configurable: !0,
				writable: !0
			});
		}
	}));
};
const $ZodError = $constructor("$ZodError", initializer$1), $ZodRealError = $constructor("$ZodError", initializer$1, void 0, { Parent: Error });
function node(o, F, I) {
	return Object.prototype.hasOwnProperty.call(o, F) || (F === "__proto__" ? Object.defineProperty(o, F, {
		value: I(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : o[F] = I()), o[F];
}
function flattenError(o, F = (o) => o.message) {
	let I = {}, L = [];
	for (let R of o.issues) R.path.length > 0 ? node(I, R.path[0], () => []).push(F(R)) : L.push(F(R));
	return {
		formErrors: L,
		fieldErrors: I
	};
}
function formatError(o, F = (o) => o.message) {
	let I = { _errors: [] }, L = (o, R = []) => {
		for (let z of o.issues) if (z.code === "invalid_union" && z.errors.length) z.errors.map((o) => L({ issues: o }, [...R, ...z.path]));
		else if (z.code === "invalid_key") L({ issues: z.issues }, [...R, ...z.path]);
		else if (z.code === "invalid_element") L({ issues: z.issues }, [...R, ...z.path]);
		else {
			let o = [...R, ...z.path];
			if (o.length === 0) I._errors.push(F(z));
			else {
				let L = I, R = 0;
				for (; R < o.length;) {
					let I = o[R], B = R === o.length - 1;
					if (I === "_errors") {
						B && L._errors.push(F(z)), R++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(L, I) || Object.defineProperty(L, I, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let V = L[I];
					B && V._errors.push(F(z)), L = V, R++;
				}
			}
		}
	};
	return L(o), I;
}
function finalizeParams(o, F) {
	return {
		callee: F?.callee ?? o,
		Err: F?.Err
	};
}
const _parse = (o) => {
	let F = (I, L, R, z) => {
		let B = R ? {
			...R,
			async: !1
		} : { async: !1 }, V = I._zod.run({
			value: L,
			issues: []
		}, B);
		if (V instanceof Promise) throw new $ZodAsyncError();
		if (V.issues.length) {
			let I = new (z?.Err ?? o)(V.issues.map((o) => finalizeIssue(o, B, config())));
			throw captureStackTrace(I, z?.callee ?? F), I;
		}
		return V.value;
	};
	return F;
}, _parseAsync = (o) => {
	let F = async (I, L, R, z) => {
		let B = R ? {
			...R,
			async: !0
		} : { async: !0 }, V = I._zod.run({
			value: L,
			issues: []
		}, B);
		if (V instanceof Promise && (V = await V), V.issues.length) {
			let I = new (z?.Err ?? o)(V.issues.map((o) => finalizeIssue(o, B, config())));
			throw captureStackTrace(I, z?.callee ?? F), I;
		}
		return V.value;
	};
	return F;
}, _safeParse = (o) => (F, I, L) => {
	let R = L ? {
		...L,
		async: !1
	} : { async: !1 }, z = F._zod.run({
		value: I,
		issues: []
	}, R);
	if (z instanceof Promise) throw new $ZodAsyncError();
	return z.issues.length ? {
		success: !1,
		error: new (o ?? $ZodError)(z.issues.map((o) => finalizeIssue(o, R, config())))
	} : {
		success: !0,
		data: z.value
	};
}, safeParse$1 = /* @__PURE__ */ _safeParse($ZodRealError), _safeParseAsync = (o) => async (F, I, L) => {
	let R = L ? {
		...L,
		async: !0
	} : { async: !0 }, z = F._zod.run({
		value: I,
		issues: []
	}, R);
	return z instanceof Promise && (z = await z), z.issues.length ? {
		success: !1,
		error: new o(z.issues.map((o) => finalizeIssue(o, R, config())))
	} : {
		success: !0,
		data: z.value
	};
}, safeParseAsync$1 = /* @__PURE__ */ _safeParseAsync($ZodRealError), _encode = (o) => {
	let F = _parse(o), I = (o, L, R, z) => F(o, L, R ? {
		...R,
		direction: "backward"
	} : { direction: "backward" }, finalizeParams(I, z));
	return I;
}, _decode = (o) => {
	let F = _parse(o), I = (o, L, R, z) => F(o, L, R, finalizeParams(I, z));
	return I;
}, _encodeAsync = (o) => {
	let F = _parseAsync(o), I = async (o, L, R, z) => await F(o, L, R ? {
		...R,
		direction: "backward"
	} : { direction: "backward" }, finalizeParams(I, z));
	return I;
}, _decodeAsync = (o) => {
	let F = _parseAsync(o), I = async (o, L, R, z) => await F(o, L, R, finalizeParams(I, z));
	return I;
}, _safeEncode = (o) => (F, I, L) => {
	let R = L ? {
		...L,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParse(o)(F, I, R);
}, _safeDecode = (o) => (F, I, L) => _safeParse(o)(F, I, L), _safeEncodeAsync = (o) => async (F, I, L) => {
	let R = L ? {
		...L,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParseAsync(o)(F, I, R);
}, _safeDecodeAsync = (o) => async (F, I, L) => _safeParseAsync(o)(F, I, L), cuid = /^[cC][0-9a-z]{6,}$/, cuid2 = /^[0-9a-z]+$/, ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, xid = /^[0-9a-vA-V]{20}$/, ksuid = /^[A-Za-z0-9]{27}$/, nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(o) {
	return /* @__PURE__ */ RegExp(`^[a-zA-Z0-9_-]{${o}}$`);
}
const duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, uuid$1 = (o) => o ? /* @__PURE__ */ RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${o}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji$1 = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function emoji() {
	return new RegExp(_emoji$1, "u");
}
const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, base64url = /^[A-Za-z0-9_-]*$/, httpProtocol = /^https?$/, e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function anchor(o) {
	return /* @__PURE__ */ RegExp(`^${o}$`);
}
const date = /* @__PURE__ */ anchor(dateSource);
function timeSource(o) {
	let F = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof o.precision == "number" ? o.precision === -1 ? `${F}` : o.precision === 0 ? `${F}:[0-5]\\d` : `${F}:[0-5]\\d\\.\\d{${o.precision}}` : o.seconds ? `${F}:[0-5]\\d(?:\\.\\d+)?` : `${F}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time(o) {
	return /* @__PURE__ */ RegExp(`^${timeSource(o)}$`);
}
function datetime(o) {
	let F = ["Z"];
	o.offset && F.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let I = `${timeSource({
		precision: o.precision,
		seconds: !0
	})}(?:${F.join("|")})`, L = o.local ? `${I}|${timeSource({ precision: o.precision })}` : I;
	return /* @__PURE__ */ RegExp(`^${dateSource}T(?:${L})$`);
}
const string$1 = (o) => {
	let F = o ? `[\\s\\S]{${o?.minimum ?? 0},${o?.maximum ?? ""}}` : "[\\s\\S]*";
	return /* @__PURE__ */ RegExp(`^${F}$`);
}, integer = /^-?\d+$/, number$1 = /^-?\d+(?:\.\d+)?$/, boolean$1 = /^(?:true|false)$/i;
var _null$2 = /^null$/i;
const lowercase = /^[^A-Z]*$/, uppercase = /^[^a-z]*$/, $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (o, F) => {
	var I;
	o._zod ??= {}, o._zod.def = F, (I = o._zod).onattach ?? (I.onattach = []);
});
var _whenHasLength = (o) => {
	let F = o.value;
	return !nullish(F) && F.length !== void 0;
}, numericOriginMap = {
	number: "number",
	bigint: "bigint",
	object: "date"
};
const $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (o, F) => {
	$ZodCheck.init(o, F);
	let I = numericOriginMap[typeof F.value];
	o._zod.onattach.push((o) => {
		let I = o._zod.bag, L = (F.inclusive ? I.maximum : I.exclusiveMaximum) ?? Infinity;
		F.value < L && (F.inclusive ? I.maximum = F.value : I.exclusiveMaximum = F.value);
	}), o._zod.check = (L) => {
		(F.inclusive ? L.value <= F.value : L.value < F.value) || L.issues.push({
			origin: numericOriginMap[typeof L.value] ?? I,
			code: "too_big",
			maximum: typeof F.value == "object" ? F.value.getTime() : F.value,
			input: L.value,
			inclusive: F.inclusive,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (o, F) => {
	$ZodCheck.init(o, F);
	let I = numericOriginMap[typeof F.value];
	o._zod.onattach.push((o) => {
		let I = o._zod.bag, L = (F.inclusive ? I.minimum : I.exclusiveMinimum) ?? -Infinity;
		F.value > L && (F.inclusive ? I.minimum = F.value : I.exclusiveMinimum = F.value);
	}), o._zod.check = (L) => {
		(F.inclusive ? L.value >= F.value : L.value > F.value) || L.issues.push({
			origin: numericOriginMap[typeof L.value] ?? I,
			code: "too_small",
			minimum: typeof F.value == "object" ? F.value.getTime() : F.value,
			input: L.value,
			inclusive: F.inclusive,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (o, F) => {
	$ZodCheck.init(o, F), o._zod.onattach.push((o) => {
		var I;
		(I = o._zod.bag).multipleOf ?? (I.multipleOf = F.value);
	}), o._zod.check = (I) => {
		if (typeof I.value != typeof F.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof I.value == "bigint" ? F.value !== BigInt(0) && I.value % F.value === BigInt(0) : floatSafeRemainder(I.value, F.value) === 0) || I.issues.push({
			origin: typeof I.value,
			code: "not_multiple_of",
			divisor: F.value,
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (o, F) => {
	$ZodCheck.init(o, F), F.format = F.format || "float64";
	let I = F.format?.includes("int"), L = I ? "int" : "number", [R, z] = NUMBER_FORMAT_RANGES[F.format];
	o._zod.onattach.push((o) => {
		let L = o._zod.bag;
		L.format = F.format, L.minimum = R, L.maximum = z, I && (L.pattern = integer);
	}), o._zod.check = (B) => {
		let V = B.value;
		if (I) {
			if (!Number.isInteger(V)) {
				B.issues.push({
					expected: L,
					format: F.format,
					code: "invalid_type",
					continue: !1,
					input: V,
					inst: o
				});
				return;
			}
			if (!Number.isSafeInteger(V)) {
				V > 0 ? B.issues.push({
					input: V,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: o,
					origin: L,
					inclusive: !0,
					continue: !F.abort
				}) : B.issues.push({
					input: V,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: o,
					origin: L,
					inclusive: !0,
					continue: !F.abort
				});
				return;
			}
		}
		V < R && B.issues.push({
			origin: "number",
			input: V,
			code: "too_small",
			minimum: R,
			inclusive: !0,
			inst: o,
			continue: !F.abort
		}), V > z && B.issues.push({
			origin: "number",
			input: V,
			code: "too_big",
			maximum: z,
			inclusive: !0,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (o, F) => {
	var I;
	$ZodCheck.init(o, F), (I = o._zod.def).when ?? (I.when = _whenHasLength), o._zod.onattach.push((o) => {
		let I = o._zod.bag.maximum ?? Infinity;
		F.maximum < I && (o._zod.bag.maximum = F.maximum);
	}), o._zod.check = (I) => {
		let L = I.value, R = L.length;
		if ((typeof L == "string" && R > F.maximum ? codePointLength(L) : R) <= F.maximum) return;
		let z = getLengthableOrigin(L);
		I.issues.push({
			origin: z,
			code: "too_big",
			maximum: F.maximum,
			inclusive: !0,
			input: L,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (o, F) => {
	var I;
	$ZodCheck.init(o, F), (I = o._zod.def).when ?? (I.when = _whenHasLength), o._zod.onattach.push((o) => {
		let I = o._zod.bag.minimum ?? -Infinity;
		F.minimum > I && (o._zod.bag.minimum = F.minimum);
	}), o._zod.check = (I) => {
		let L = I.value, R = L.length;
		if ((typeof L == "string" && R >= F.minimum && R < F.minimum * 2 ? codePointLength(L) : R) >= F.minimum) return;
		let z = getLengthableOrigin(L);
		I.issues.push({
			origin: z,
			code: "too_small",
			minimum: F.minimum,
			inclusive: !0,
			input: L,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (o, F) => {
	var I;
	$ZodCheck.init(o, F), (I = o._zod.def).when ?? (I.when = _whenHasLength), o._zod.onattach.push((o) => {
		let I = o._zod.bag;
		I.minimum = F.length, I.maximum = F.length, I.length = F.length;
	}), o._zod.check = (I) => {
		let L = I.value, R = L.length, z = typeof L == "string" && R >= F.length && R <= F.length * 2 ? codePointLength(L) : R;
		if (z === F.length) return;
		let B = getLengthableOrigin(L), V = z > F.length;
		I.issues.push({
			origin: B,
			...V ? {
				code: "too_big",
				maximum: F.length
			} : {
				code: "too_small",
				minimum: F.length
			},
			inclusive: !0,
			exact: !0,
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (o, F) => {
	var I, L;
	$ZodCheck.init(o, F), o._zod.onattach.push((o) => {
		let I = o._zod.bag;
		I.format = F.format, F.pattern && (I.patterns ??= /* @__PURE__ */ new Set(), I.patterns.add(F.pattern));
	}), F.pattern ? (I = o._zod).check ?? (I.check = (I) => {
		F.pattern.lastIndex = 0, !F.pattern.test(I.value) && I.issues.push({
			origin: "string",
			code: "invalid_format",
			format: F.format,
			input: I.value,
			...F.pattern ? { pattern: F.pattern.toString() } : {},
			inst: o,
			continue: !F.abort
		});
	}) : (L = o._zod).check ?? (L.check = () => {});
}), $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (o, F) => {
	$ZodCheckStringFormat.init(o, F), o._zod.check = (I) => {
		F.pattern.lastIndex = 0, !F.pattern.test(I.value) && I.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: I.value,
			pattern: F.pattern.toString(),
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (o, F) => {
	F.pattern ??= lowercase, $ZodCheckStringFormat.init(o, F);
}), $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (o, F) => {
	F.pattern ??= uppercase, $ZodCheckStringFormat.init(o, F);
}), $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (o, F) => {
	$ZodCheck.init(o, F);
	let I = escapeRegex(F.includes), L = new RegExp(typeof F.position == "number" ? `^.{${F.position},}${I}` : I);
	F.pattern = L, o._zod.onattach.push((o) => {
		let F = o._zod.bag;
		F.patterns ??= /* @__PURE__ */ new Set(), F.patterns.add(L);
	}), o._zod.check = (I) => {
		I.value.includes(F.includes, F.position) || I.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: F.includes,
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (o, F) => {
	$ZodCheck.init(o, F);
	let I = /* @__PURE__ */ RegExp(`^${escapeRegex(F.prefix)}.*`);
	F.pattern ??= I, o._zod.onattach.push((o) => {
		let F = o._zod.bag;
		F.patterns ??= /* @__PURE__ */ new Set(), F.patterns.add(I);
	}), o._zod.check = (I) => {
		I.value.startsWith(F.prefix) || I.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: F.prefix,
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (o, F) => {
	$ZodCheck.init(o, F);
	let I = /* @__PURE__ */ RegExp(`.*${escapeRegex(F.suffix)}$`);
	F.pattern ??= I, o._zod.onattach.push((o) => {
		let F = o._zod.bag;
		F.patterns ??= /* @__PURE__ */ new Set(), F.patterns.add(I);
	}), o._zod.check = (I) => {
		I.value.endsWith(F.suffix) || I.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: F.suffix,
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (o, F) => {
	$ZodCheck.init(o, F), o._zod.check = (o) => {
		o.value = F.tx(o.value);
	};
});
var Doc = class {
	constructor(o = [], F = {}) {
		this.content = [], this.indent = 0, this.args = o, this.closed = F;
	}
	indented(o) {
		this.indent += 1, o(this), --this.indent;
	}
	write(o) {
		if (typeof o == "function") {
			o(this, { execution: "sync" }), o(this, { execution: "async" });
			return;
		}
		let F = o.split("\n").filter((o) => o), I = Math.min(...F.map((o) => o.length - o.trimStart().length)), L = F.map((o) => o.slice(I)).map((o) => " ".repeat(this.indent * 2) + o);
		for (let o of L) this.content.push(o);
	}
	compile() {
		let o = Function, F = this?.content ?? [""];
		return new o(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${F.join("\n")}\n};`)(...Object.values(this.closed));
	}
};
const version = {
	major: 4,
	minor: 5,
	patch: 4
}, $ZodType = /* @__PURE__ */ $constructor("$ZodType", (o, F) => {
	var I;
	o ??= {}, o._zod.def = F, o._zod.bag = o._zod.bag || {}, o._zod.version = version;
	let L = o._zod.def.checks, R = o._zod.traits.has("$ZodCheck") ? [o, ...L ?? []] : L?.length ? [...L] : [];
	for (let F of R) for (let I of F._zod.onattach) I(o);
	if (R.length === 0) (I = o._zod).deferred ?? (I.deferred = []), o._zod.deferred?.push(() => {
		o._zod.run = o._zod.parse;
	});
	else {
		let F = (F, I, L) => {
			if (F.memo) return F;
			let R = aborted(F), z;
			for (let B of I) {
				if (B._zod.def.when) {
					if (explicitlyAborted(F) || !B._zod.def.when(F)) continue;
				} else if (R) continue;
				let I = F.issues.length, V = B._zod.check(F);
				if (V instanceof Promise && L?.async === !1) throw new $ZodAsyncError();
				if (z || V instanceof Promise) z = (z ?? Promise.resolve()).then(async () => {
					await V, F.issues.length !== I && (attachSchema(F.issues, I, o), R ||= aborted(F, I));
				});
				else {
					if (F.issues.length === I) continue;
					attachSchema(F.issues, I, o), R ||= aborted(F, I);
				}
			}
			return z ? z.then(() => F) : F;
		}, I = (I, L, z) => {
			if (aborted(I)) return I.aborted = !0, I;
			let B = F(L, R, z);
			if (B instanceof Promise) {
				if (z.async === !1) throw new $ZodAsyncError();
				return B.then((F) => o._zod.parse(F, z));
			}
			return o._zod.parse(B, z);
		};
		o._zod.run = (L, z) => {
			if (z.skipChecks) return o._zod.parse(L, z);
			if (z.direction === "backward") {
				let F = o._zod.parse({
					value: L.value,
					issues: []
				}, {
					...z,
					skipChecks: !0
				});
				return F instanceof Promise ? F.then((o) => I(o, L, z)) : I(F, L, z);
			}
			let B = o._zod.parse(L, z);
			if (B instanceof Promise) {
				if (z.async === !1) throw new $ZodAsyncError();
				return B.then((o) => F(o, R, z));
			}
			return F(B, R, z);
		};
	}
}, {
	get "~standard"() {
		return hide(this, "~standard", standardProps(this));
	},
	set "~standard"(o) {
		own(this, "~standard", o);
	}
});
var toStandardResult = (o) => o.success ? { value: o.data } : { issues: o.error?.issues };
function standardProps(o) {
	return {
		validate: (F) => {
			try {
				return toStandardResult(safeParse$1(o, F));
			} catch {
				return safeParseAsync$1(o, F).then(toStandardResult);
			}
		},
		vendor: "zod",
		version: 1
	};
}
const $ZodString = /* @__PURE__ */ $constructor("$ZodString", (o, F) => {
	$ZodType.init(o, F), o._zod.pattern = [...o?._zod.bag?.patterns ?? []].pop() ?? string$1(o._zod.bag), o._zod.parse = (I, L) => {
		if (F.coerce) try {
			I.value = String(I.value);
		} catch {}
		return typeof I.value == "string" || I.issues.push({
			expected: "string",
			code: "invalid_type",
			input: I.value,
			inst: o
		}), I;
	};
}), $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (o, F) => {
	$ZodCheckStringFormat.init(o, F), $ZodString.init(o, F);
}), $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (o, F) => {
	F.pattern ??= guid, $ZodStringFormat.init(o, F);
}), $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (o, F) => {
	if (F.version) {
		let o = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[F.version];
		if (o === void 0) throw Error(`Invalid UUID version: "${F.version}"`);
		F.pattern ??= uuid$1(o);
	} else F.pattern ??= uuid$1();
	$ZodStringFormat.init(o, F);
}), $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (o, F) => {
	F.pattern ??= email, $ZodStringFormat.init(o, F);
});
function parseURLObject(o, F) {
	if (!F.normalize && F.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(o)) return 1;
	try {
		return new URL(o);
	} catch {
		return 2;
	}
}
var asciiTabOrNewline = /[\t\n\r]/g;
function stripTabAndNewline(o) {
	return o.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(o, F) {
	return F.lastIndex = 0, F.test(o.hostname);
}
function urlProtocolOk(o, F) {
	return F.lastIndex = 0, F.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol);
}
const $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (o, F) => {
	$ZodStringFormat.init(o, F), o._zod.check = (I) => {
		try {
			let L = I.value.trim(), R = parseURLObject(L, F);
			if (R === 1) {
				I.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: I.value,
					inst: o,
					continue: !F.abort
				});
				return;
			}
			if (R === 2) {
				I.issues.push({
					code: "invalid_format",
					format: "url",
					input: I.value,
					inst: o,
					continue: !F.abort
				});
				return;
			}
			F.hostname && !urlHostnameOk(R, F.hostname) && I.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: F.hostname.source,
				input: I.value,
				inst: o,
				continue: !F.abort
			}), F.protocol && !urlProtocolOk(R, F.protocol) && I.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: F.protocol.source,
				input: I.value,
				inst: o,
				continue: !F.abort
			}), I.value = F.normalize ? R.href : stripTabAndNewline(L);
			return;
		} catch {
			I.issues.push({
				code: "invalid_format",
				format: "url",
				input: I.value,
				inst: o,
				continue: !F.abort
			});
		}
	};
}), $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (o, F) => {
	F.pattern ??= emoji(), $ZodStringFormat.init(o, F);
}), $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (o, F) => {
	if (F.length !== void 0 && (!Number.isInteger(F.length) || F.length < 1)) throw Error(`Invalid nanoid length: ${F.length}`);
	F.pattern ??= F.length === void 0 ? nanoid : nanoidOfLength(F.length), $ZodStringFormat.init(o, F);
}), $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (o, F) => {
	F.pattern ??= cuid, $ZodStringFormat.init(o, F);
}), $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (o, F) => {
	F.pattern ??= cuid2, $ZodStringFormat.init(o, F);
}), $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (o, F) => {
	F.pattern ??= ulid, $ZodStringFormat.init(o, F);
}), $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (o, F) => {
	F.pattern ??= xid, $ZodStringFormat.init(o, F);
}), $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (o, F) => {
	F.pattern ??= ksuid, $ZodStringFormat.init(o, F);
}), $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (o, F) => {
	F.pattern ??= datetime(F), $ZodStringFormat.init(o, F), (F.local || F.precision === -1) && (o._zod.bag.laxFormat = !0, o._zod.onattach.push((o) => {
		o._zod.bag.laxFormat = !0;
	}));
}), $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (o, F) => {
	F.pattern ??= date, $ZodStringFormat.init(o, F);
}), $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (o, F) => {
	F.pattern ??= time(F), $ZodStringFormat.init(o, F);
}), $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (o, F) => {
	F.pattern ??= duration, $ZodStringFormat.init(o, F);
}), $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (o, F) => {
	F.pattern ??= ipv4, $ZodStringFormat.init(o, F), o._zod.bag.format = "ipv4";
});
var ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(o) {
	if (!ipv6Alphabet.test(o)) return !1;
	try {
		return new URL(`http://[${o}]`), !0;
	} catch {
		return !1;
	}
}
const $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (o, F) => {
	F.pattern ??= ipv6, $ZodStringFormat.init(o, F), o._zod.bag.format = "ipv6", o._zod.check = (I) => {
		isValidIPv6(I.value) || I.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (o, F) => {
	F.pattern ??= cidrv4, $ZodStringFormat.init(o, F);
});
function isValidCIDRv6(o) {
	let F = o.split("/");
	if (F.length !== 2) return !1;
	let [I, L] = F;
	if (!L) return !1;
	let R = Number(L);
	return `${R}` !== L || R < 0 || R > 128 ? !1 : isValidIPv6(I);
}
const $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (o, F) => {
	F.pattern ??= cidrv6, $ZodStringFormat.init(o, F), o._zod.check = (I) => {
		isValidCIDRv6(I.value) || I.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
});
function isValidBase64(o) {
	if (o === "") return !0;
	if (/\s/.test(o) || o.length % 4 != 0) return !1;
	try {
		return atob(o), !0;
	} catch {
		return !1;
	}
}
const $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (o, F) => {
	F.pattern ??= base64, $ZodStringFormat.init(o, F), o._zod.bag.contentEncoding = "base64", o._zod.check = (I) => {
		isValidBase64(I.value) || I.issues.push({
			code: "invalid_format",
			format: "base64",
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
});
function isValidBase64URL(o) {
	if (!base64url.test(o)) return !1;
	let F = o.replace(/[-_]/g, (o) => o === "-" ? "+" : "/");
	return isValidBase64(F.padEnd(Math.ceil(F.length / 4) * 4, "="));
}
const $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (o, F) => {
	F.pattern ??= base64url, $ZodStringFormat.init(o, F), o._zod.bag.contentEncoding = "base64url", o._zod.check = (I) => {
		isValidBase64URL(I.value) || I.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (o, F) => {
	F.pattern ??= e164, $ZodStringFormat.init(o, F);
});
function isValidJWT(o, F = null) {
	try {
		let I = o.split(".");
		if (I.length !== 3) return !1;
		let [L] = I;
		if (!L) return !1;
		let R = JSON.parse(atob(L));
		return !("typ" in R && R?.typ !== "JWT" || !R.alg || F && (!("alg" in R) || R.alg !== F));
	} catch {
		return !1;
	}
}
const $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (o, F) => {
	$ZodStringFormat.init(o, F), o._zod.check = (I) => {
		isValidJWT(I.value, F.alg) || I.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: I.value,
			inst: o,
			continue: !F.abort
		});
	};
}), $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (o, F) => {
	$ZodType.init(o, F), o._zod.pattern = o._zod.bag.pattern ?? number$1, o._zod.parse = (I, L) => {
		if (F.coerce) try {
			I.value = Number(I.value);
		} catch {}
		let R = I.value;
		if (typeof R == "number" && !Number.isNaN(R) && Number.isFinite(R)) return I;
		let z = typeof R == "number" ? Number.isNaN(R) ? "NaN" : Number.isFinite(R) ? void 0 : String(R) : void 0;
		return I.issues.push({
			expected: "number",
			code: "invalid_type",
			input: R,
			inst: o,
			...z ? { received: z } : {}
		}), I;
	};
}), $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (o, F) => {
	$ZodCheckNumberFormat.init(o, F), $ZodNumber.init(o, F);
}), $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (o, F) => {
	$ZodType.init(o, F), o._zod.pattern = boolean$1, o._zod.parse = (I, L) => {
		if (F.coerce) try {
			I.value = !!I.value;
		} catch {}
		let R = I.value;
		return typeof R == "boolean" || I.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: R,
			inst: o
		}), I;
	};
}), $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (o, F) => {
	$ZodType.init(o, F), o._zod.pattern = _null$2, o._zod.values = new Set([null]), o._zod.parse = (F, I) => {
		let L = F.value;
		return L === null || F.issues.push({
			expected: "null",
			code: "invalid_type",
			input: L,
			inst: o
		}), F;
	};
}), $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (o, F) => {
	$ZodType.init(o, F), o._zod.parse = (o) => o;
}), $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (o, F) => {
	$ZodType.init(o, F), o._zod.parse = (F, I) => (F.issues.push({
		expected: "never",
		code: "invalid_type",
		input: F.value,
		inst: o
	}), F);
});
function handleArrayResult(o, F, I) {
	o.issues.length && F.issues.push(...prefixIssues(I, o.issues)), F.value[I] = o.value;
}
const $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (o, F) => {
	$ZodType.init(o, F);
	let I = globalConfig.memoizer;
	I?.attach(o), o._zod.parse = (L, R) => {
		let z = L.value;
		if (!Array.isArray(z)) return L.issues.push({
			expected: "array",
			code: "invalid_type",
			input: z,
			inst: o
		}), L;
		L.value = I ? I.alloc(o, L, Array(z.length), R) : Array(z.length);
		let B = [];
		for (let o = 0; o < z.length; o++) {
			let I = z[o], V = F.element._zod.run({
				value: I,
				issues: []
			}, R);
			V instanceof Promise ? B.push(V.then((F) => handleArrayResult(F, L, o))) : handleArrayResult(V, L, o);
		}
		return B.length ? Promise.all(B).then(() => L) : L;
	};
});
function handlePropertyResult(o, F, I, L, R, z) {
	let B = I in L, V = z === "optional";
	if (!(!B && V && R === "optional")) {
		if (o.issues.length) {
			if (R !== void 0 && V && !B) return;
			F.issues.push(...prefixIssues(I, o.issues));
		}
		if (!B && R === void 0) {
			o.issues.length || F.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [I]
			});
			return;
		}
		o.value === void 0 ? B && (F.value[I] = void 0) : F.value[I] = o.value;
	}
}
var NO_SYMBOL_KEYS = [];
function normalizeDef(o) {
	let F = Object.keys(o.shape), I = Object.getOwnPropertySymbols(o.shape), L = I.length ? I : NO_SYMBOL_KEYS, R = L.length ? [...F, ...L] : F;
	for (let F of R) if (!o.shape?.[F]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(F)}": expected a Zod schema`);
	let z = optionalKeys(o.shape);
	return {
		...o,
		allKeys: R,
		symbolKeys: L,
		keySet: new Set(F),
		numKeys: F.length,
		optionalKeys: new Set(z)
	};
}
function handleCatchall(o, F, I, L, R, z) {
	let B = [], V = R.keySet, H = R.catchall._zod, U = H.def.type, W = H.optin, G = H.optout;
	for (let R in F) {
		if (V.has(R)) continue;
		if (R === "__proto__") {
			U === "never" && B.push(R);
			continue;
		}
		if (U === "never") {
			B.push(R);
			continue;
		}
		let z = H.run({
			value: F[R],
			issues: []
		}, L);
		z instanceof Promise ? o.push(z.then((o) => handlePropertyResult(o, I, R, F, W, G))) : handlePropertyResult(z, I, R, F, W, G);
	}
	return B.length && I.issues.push({
		code: "unrecognized_keys",
		keys: B,
		input: F,
		inst: z,
		continue: !0
	}), o.length ? Promise.all(o).then(() => I) : I;
}
var propShapes = /* @__PURE__ */ new WeakMap();
const $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (o, F) => {
	if ($ZodType.init(o, F), !Object.getOwnPropertyDescriptor(F, "shape")?.get) {
		let o = F.shape;
		propShapes.set(F, o), Object.defineProperty(F, "shape", { get: () => {
			let I = { ...o };
			return Object.defineProperty(F, "shape", { value: I }), propShapes.set(F, I), I;
		} });
	}
	let I = cached(() => normalizeDef(F));
	defineLazyInternal(o, "propValues", (o) => {
		let F = o.def.shape, I = {};
		for (let o in F) {
			let L = F[o]._zod;
			if (L.values) {
				Object.prototype.hasOwnProperty.call(I, o) || assignProp(I, o, /* @__PURE__ */ new Set());
				for (let F of L.values) I[o].add(F);
				L.optin !== void 0 && I[o].add(void 0);
			}
		}
		return I;
	});
	let L = isObject, R = F.catchall, z, B = globalConfig.memoizer;
	B?.attach(o), o._zod.parse = (F, V) => {
		z ??= I.value;
		let H = F.value;
		if (!L(H)) return F.issues.push({
			expected: "object",
			code: "invalid_type",
			input: H,
			inst: o
		}), F;
		F.value = B ? B.alloc(o, F, {}, V) : {};
		let U = [], W = z.shape;
		for (let o of z.allKeys) {
			if (o === "__proto__") continue;
			let I = W[o], L = I._zod.optin, R = I._zod.optout, z = I._zod.run({
				value: H[o],
				issues: []
			}, V);
			z instanceof Promise ? U.push(z.then((I) => handlePropertyResult(I, F, o, H, L, R))) : handlePropertyResult(z, F, o, H, L, R);
		}
		return R ? handleCatchall(U, H, F, V, I.value, o) : U.length ? Promise.all(U).then(() => F) : F;
	};
}), $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (o, F) => {
	$ZodObject.init(o, F);
	let I = o._zod.parse, L = cached(() => normalizeDef(F)), R = globalConfig.memoizer, z = (F) => {
		let I = L.value, z = I.symbolKeys, B = new Doc(["payload", "ctx"], {
			shape: F,
			inst: o,
			memo: R,
			syms: z
		}), V = (o) => `shape[${o}]._zod.run({ value: input[${o}], issues: [] }, ctx)`, H = (o, F) => `
          for (let i = 0; i < ${o}.issues.length; i++) {
            const iss = ${o}.issues[i];
            iss.path = iss.path ? [${F}, ...iss.path] : [${F}];
            payload.issues.push(iss);
          }`;
		B.write("const input = payload.value;");
		let U = Object.create(null), W = 0;
		for (let o of I.allKeys) U[o] = `key_${W++}`;
		B.write(R ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
		for (let o of I.allKeys) {
			if (o === "__proto__") continue;
			let I = U[o], L = typeof o == "symbol" ? `syms[${z.indexOf(o)}]` : esc(o), R = `${L} in input`, W = F[o], G = W?._zod?.optin, K = G !== void 0, q = W?._zod?.optout === "optional";
			if (B.write(`const ${I} = ${V(L)};`), K && q) {
				let o = G === "optional" ? `${I}_present` : `${I}.value !== undefined || ${I}_present`;
				B.write(`
        const ${I}_present = ${R};
        if (!${I}.issues.length || ${I}_present) {
          if (${I}.issues.length) {${H(I, L)}
          }

          if (${o}) {
            newResult[${L}] = ${I}.value;
          }
        }

      `);
			} else K ? B.write(`
        if (${I}.issues.length) {${H(I, L)}
        }
        
        if (${I}.value === undefined) {
          if (${R}) {
            newResult[${L}] = undefined;
          }
        } else {
          newResult[${L}] = ${I}.value;
        }

      `) : B.write(`
        const ${I}_present = ${R};
        if (${I}.issues.length) {${H(I, L)}
        }
        if (!${I}_present && !${I}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${L}]
          });
        }

        if (${I}_present) {
          newResult[${L}] = ${I}.value;
        }

      `);
		}
		return B.write("payload.value = newResult;"), B.write("return payload;"), B.compile();
	}, B, V = isObject, H = !globalConfig.jitless, U = H && allowsEval.value, W = F.catchall, G;
	o._zod.parse = (R, K) => {
		G ??= L.value;
		let q = R.value;
		return V(q) ? H && U && K?.async === !1 && K.jitless !== !0 ? (B ||= z(F.shape), R = B(R, K), W ? handleCatchall([], q, R, K, G, o) : R) : I(R, K) : (R.issues.push({
			expected: "object",
			code: "invalid_type",
			input: q,
			inst: o
		}), R);
	};
});
function handleUnionResults(o, F, I, L) {
	for (let I of o) if (I.issues.length === 0) return F.value = I.value, F;
	let R = o.filter((o) => !aborted(o));
	return R.length === 1 ? (F.value = R[0].value, R[0]) : (F.issues.push({
		code: "invalid_union",
		input: F.value,
		inst: I,
		errors: o.map((o) => o.issues.map((o) => finalizeIssue(o, L, config())))
	}), F);
}
const $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (o, F) => {
	$ZodType.init(o, F), defineLazyInternal(o, "optin", (o) => o.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : o.def.options.some((o) => o._zod.optin !== void 0) ? "optional" : void 0), defineLazyInternal(o, "optout", (o) => o.def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), defineLazyInternal(o, "values", (o) => {
		if (o.def.options.every((o) => o._zod.values)) return new Set(o.def.options.flatMap((o) => Array.from(o._zod.values)));
	}), defineLazyInternal(o, "pattern", (o) => {
		if (o.def.options.every((o) => o._zod.pattern)) {
			let F = o.def.options.map((o) => o._zod.pattern);
			return /* @__PURE__ */ RegExp(`^(${F.map((o) => cleanRegex(o.source)).join("|")})$`);
		}
	});
	let I = F.options.length === 1 ? F.options[0]._zod.run : null;
	o._zod.parse = (L, R) => {
		if (I) return I(L, R);
		let z = !1, B = [];
		for (let o of F.options) {
			let F = o._zod.run({
				value: L.value,
				issues: []
			}, R);
			if (F instanceof Promise) B.push(F), z = !0;
			else {
				if (F.issues.length === 0) return F;
				B.push(F);
			}
		}
		return z ? Promise.all(B).then((F) => handleUnionResults(F, L, o, R)) : handleUnionResults(B, L, o, R);
	};
}), $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (o, F) => {
	F.inclusive = !1, $ZodUnion.init(o, F);
	let I = o._zod.parse;
	defineLazyInternal(o, "propValues", (o) => {
		let F = {};
		for (let I of o.def.options) {
			let L = I._zod.propValues;
			if (!L || Object.keys(L).length === 0) throw Error(`Invalid discriminated union option at index "${o.def.options.indexOf(I)}"`);
			for (let [o, I] of Object.entries(L)) {
				Object.prototype.hasOwnProperty.call(F, o) || assignProp(F, o, /* @__PURE__ */ new Set());
				for (let L of I) F[o].add(L);
			}
		}
		return F;
	}), F.options.forEach((o, I) => {
		let L = propShapes.get(o._zod.def);
		if (L && !Object.prototype.hasOwnProperty.call(L, F.discriminator)) throw Error(`Invalid discriminated union option at index "${I}"`);
	});
	let L = cached(() => {
		let o = F.options, I = /* @__PURE__ */ new Map();
		for (let L of o) {
			let o = L._zod.propValues?.[F.discriminator];
			if (!o || o.size === 0) throw Error(`Invalid discriminated union option at index "${F.options.indexOf(L)}"`);
			for (let F of o) {
				if (I.has(F)) throw Error(`Duplicate discriminator value "${String(F)}"`);
				I.set(F, L);
			}
		}
		return I;
	});
	o._zod.parse = (R, z) => {
		let B = R.value;
		if (!isObject(B)) return R.issues.push({
			code: "invalid_type",
			expected: "object",
			input: B,
			inst: o
		}), R;
		let V = L.value.get(B?.[F.discriminator]);
		return V ? V._zod.run(R, z) : F.unionFallback || z.direction === "backward" ? I(R, z) : (R.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: F.discriminator,
			options: Array.from(L.value.keys()),
			input: B,
			path: [F.discriminator],
			inst: o
		}), R);
	};
}), $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (o, F) => {
	$ZodType.init(o, F), o._zod.parse = (o, I) => {
		let L = o.value, R = F.left._zod.run({
			value: L,
			issues: []
		}, I), z = F.right._zod.run({
			value: L,
			issues: []
		}, I);
		return R instanceof Promise || z instanceof Promise ? Promise.all([R, z]).then(([F, I]) => handleIntersectionResults(o, F, I)) : handleIntersectionResults(o, R, z);
	};
});
function mergeValues(o, F) {
	if (o === F || o instanceof Date && F instanceof Date && +o == +F) return {
		valid: !0,
		data: o
	};
	if (isPlainObject(o) && isPlainObject(F)) {
		let I = Object.keys(F), L = Object.keys(o).filter((o) => I.indexOf(o) !== -1), R = {
			...o,
			...F
		};
		Object.prototype.hasOwnProperty.call(R, "__proto__") && delete R.__proto__;
		for (let I of L) {
			if (I === "__proto__") continue;
			let L = mergeValues(o[I], F[I]);
			if (!L.valid) return {
				valid: !1,
				mergeErrorPath: [I, ...L.mergeErrorPath]
			};
			R[I] = L.data;
		}
		return {
			valid: !0,
			data: R
		};
	}
	if (Array.isArray(o) && Array.isArray(F)) {
		if (o.length !== F.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let I = [];
		for (let L = 0; L < o.length; L++) {
			let R = o[L], z = F[L], B = mergeValues(R, z);
			if (!B.valid) return {
				valid: !1,
				mergeErrorPath: [L, ...B.mergeErrorPath]
			};
			I.push(B.data);
		}
		return {
			valid: !0,
			data: I
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function handleIntersectionResults(o, F, I) {
	let L = /* @__PURE__ */ new Map(), R, z = /* @__PURE__ */ new Map(), B = (o, F) => {
		let I;
		if (o.code === "unrecognized_keys" && !o.path?.length) R ??= o, I = o.keys;
		else if (o.code === "invalid_key" && o.origin === "record" && o.path?.length === 1) {
			let F = String(o.path[0]);
			z.has(F) || z.set(F, o), I = [F];
		} else return !1;
		for (let o of I) L.has(o) || L.set(o, {}), L.get(o)[F] = !0;
		return !0;
	};
	for (let I of F.issues) B(I, "l") || o.issues.push(I);
	for (let F of I.issues) B(F, "r") || o.issues.push(F);
	let V = [...L].filter(([, o]) => o.l && o.r).map(([o]) => o);
	if (V.length) {
		let F = R ? V.filter((o) => R.keys.includes(o)) : [];
		F.length && o.issues.push({
			...R,
			keys: F
		});
		for (let I of V) !F.includes(I) && z.has(I) && o.issues.push(z.get(I));
	}
	let H = mergeValues(F.value, I.value);
	if (!H.valid) {
		if (aborted(o)) return o;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(H.mergeErrorPath)}`);
	}
	return o.value = H.data, o;
}
const $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (o, F) => {
	$ZodType.init(o, F);
	let I = globalConfig.memoizer;
	I?.attach(o), o._zod.parse = (L, R) => {
		let z = L.value;
		if (!isPlainObject(z)) return L.issues.push({
			expected: "record",
			code: "invalid_type",
			input: z,
			inst: o
		}), L;
		let B = [], V = F.keyType._zod.values;
		if (V && !F.partial) {
			L.value = I ? I.alloc(o, L, {}, R) : {};
			let H = /* @__PURE__ */ new Set();
			for (let I of V) if (typeof I == "string" || typeof I == "number" || typeof I == "symbol") {
				if (H.add(typeof I == "number" ? I.toString() : I), I === "__proto__") continue;
				let V = F.keyType._zod.run({
					value: I,
					issues: []
				}, R);
				if (V instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (V.issues.length) {
					L.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: V.issues.map((o) => finalizeIssue(o, R, config())),
						input: I,
						path: [I],
						inst: o
					});
					continue;
				}
				let U = V.value;
				if (U === "__proto__") continue;
				let W = F.valueType._zod.run({
					value: z[I],
					issues: []
				}, R);
				W instanceof Promise ? B.push(W.then((o) => {
					o.issues.length && L.issues.push(...prefixIssues(I, o.issues)), L.value[U] = o.value;
				})) : (W.issues.length && L.issues.push(...prefixIssues(I, W.issues)), L.value[U] = W.value);
			}
			let U;
			for (let o in z) if (!H.has(o)) if (F.mode === "loose") {
				if (o === "__proto__") continue;
				L.value[o] = z[o];
			} else U ??= [], U.push(o);
			U && U.length > 0 && L.issues.push({
				code: "unrecognized_keys",
				input: z,
				inst: o,
				keys: U,
				continue: !0
			});
		} else {
			L.value = I ? I.alloc(o, L, {}, R) : {};
			let H;
			for (let I of Reflect.ownKeys(z)) {
				if (I === "__proto__" || !Object.prototype.propertyIsEnumerable.call(z, I)) continue;
				let U = F.keyType._zod.run({
					value: I,
					issues: []
				}, R);
				if (U instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (typeof I == "string" && number$1.test(I) && U.issues.length) {
					let o = F.keyType._zod.run({
						value: Number(I),
						issues: []
					}, R);
					if (o instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					o.issues.length === 0 && (U = o);
				}
				if (U.issues.length) {
					F.mode === "loose" ? L.value[I] = z[I] : V ? (H ??= [], H.push(I)) : L.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: U.issues.map((o) => finalizeIssue(o, R, config())),
						input: I,
						path: [I],
						inst: o
					});
					continue;
				}
				let W = U.value;
				if (W === "__proto__") continue;
				let G = F.valueType._zod.run({
					value: z[I],
					issues: []
				}, R);
				G instanceof Promise ? B.push(G.then((o) => {
					o.issues.length && L.issues.push(...prefixIssues(I, o.issues)), L.value[W] = o.value;
				})) : (G.issues.length && L.issues.push(...prefixIssues(I, G.issues)), L.value[W] = G.value);
			}
			H && H.length > 0 && L.issues.push({
				code: "unrecognized_keys",
				input: z,
				inst: o,
				keys: H,
				continue: !0
			});
		}
		return B.length ? Promise.all(B).then(() => L) : L;
	};
}), $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (o, F) => {
	$ZodType.init(o, F);
	let I = getEnumValues(F.entries), L = new Set(I);
	o._zod.values = L;
	let R = I.filter((o) => propertyKeyTypes.has(typeof o));
	o._zod.pattern = /* @__PURE__ */ RegExp(R.length ? `^(${R.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$"), o._zod.parse = (F, R) => {
		let z = F.value;
		return L.has(z) || F.issues.push({
			code: "invalid_value",
			values: I,
			input: z,
			inst: o
		}), F;
	};
}), $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (o, F) => {
	$ZodType.init(o, F);
	let I = new Set(F.values);
	o._zod.values = I, o._zod.pattern = /* @__PURE__ */ RegExp(F.values.length ? `^(${F.values.map((o) => typeof o == "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$` : "^[^\\s\\S]$"), o._zod.parse = (L, R) => {
		let z = L.value;
		return I.has(z) || L.issues.push({
			code: "invalid_value",
			values: F.values,
			input: z,
			inst: o
		}), L;
	};
}), $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (o, F) => {
	$ZodType.init(o, F), o._zod.optin = "optional", globalConfig.memoizer.guard(o), o._zod.parse = (I, L) => {
		if (L.direction === "backward") throw new $ZodEncodeError(o.constructor.name);
		let R = F.transform(I.value, I);
		if (L.async) return (R instanceof Promise ? R : Promise.resolve(R)).then((o) => (I.value = o, I));
		if (R instanceof Promise) throw new $ZodAsyncError();
		return I.value = R, I;
	};
});
function handleOptionalResult(o, F) {
	return o.value = F.issues.length ? void 0 : F.value, o;
}
const $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (o, F) => {
	$ZodType.init(o, F), defineLazyInternal(o, "optin", (o) => o.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), o._zod.optout = "optional", defineLazyInternal(o, "values", (o) => {
		let F = o.def.innerType._zod.values;
		return F ? new Set([...F, void 0]) : void 0;
	}), defineLazyInternal(o, "pattern", (o) => {
		let F = o.def.innerType._zod.pattern;
		return F ? /* @__PURE__ */ RegExp(`^(${cleanRegex(F.source)})?$`) : void 0;
	}), o._zod.parse = (o, I) => {
		if (o.value === void 0) {
			if (F.innerType._zod.optin !== "defaulted") return o;
			let L = F.innerType._zod.run({
				value: o.value,
				issues: []
			}, I);
			return L instanceof Promise ? L.then((F) => handleOptionalResult(o, F)) : handleOptionalResult(o, L);
		}
		return F.innerType._zod.run(o, I);
	};
}), $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (o, F) => {
	$ZodOptional.init(o, F), defineLazyInternal(o, "values", (o) => o.def.innerType._zod.values), defineLazyInternal(o, "pattern", (o) => o.def.innerType._zod.pattern), o._zod.parse = (o, I) => F.innerType._zod.run(o, I);
}), $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (o, F) => {
	$ZodType.init(o, F), defineLazyInternal(o, "optin", (o) => o.def.innerType._zod.optin), defineLazyInternal(o, "optout", (o) => o.def.innerType._zod.optout), defineLazyInternal(o, "pattern", (o) => {
		let F = o.def.innerType._zod.pattern;
		return F ? /* @__PURE__ */ RegExp(`^(${cleanRegex(F.source)}|null)$`) : void 0;
	}), defineLazyInternal(o, "values", (o) => o.def.innerType._zod.values ? new Set([...o.def.innerType._zod.values, null]) : void 0), o._zod.parse = (o, I) => o.value === null ? o : F.innerType._zod.run(o, I);
}), $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (o, F) => {
	$ZodType.init(o, F), o._zod.optin = "defaulted", defineLazyInternal(o, "values", (o) => o.def.innerType._zod.values), o._zod.parse = (o, I) => {
		if (I.direction === "backward") return F.innerType._zod.run(o, I);
		if (o.value === void 0) return o.value = F.defaultValue, o;
		let L = F.innerType._zod.run(o, I);
		return L instanceof Promise ? L.then((o) => handleDefaultResult(o, F)) : handleDefaultResult(L, F);
	};
});
function handleDefaultResult(o, F) {
	return o.value === void 0 && (o.value = F.defaultValue), o;
}
const $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (o, F) => {
	$ZodType.init(o, F), o._zod.optin = "defaulted", defineLazyInternal(o, "values", (o) => o.def.innerType._zod.values), o._zod.parse = (o, I) => (I.direction === "backward" || o.value === void 0 && (o.value = F.defaultValue), F.innerType._zod.run(o, I));
}), $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (o, F) => {
	$ZodType.init(o, F), defineLazyInternal(o, "values", (o) => {
		let F = o.def.innerType._zod.values;
		return F ? new Set([...F].filter((o) => o !== void 0)) : void 0;
	}), o._zod.parse = (I, L) => {
		let R = F.innerType._zod.run(I, L);
		return R instanceof Promise ? R.then((F) => handleNonOptionalResult(F, o)) : handleNonOptionalResult(R, o);
	};
});
function handleNonOptionalResult(o, F) {
	return !o.issues.length && o.value === void 0 && o.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: o.value,
		inst: F
	}), o;
}
function handleCatchResult(o, F, I, L) {
	return F.issues.length ? (o.value = I.catchValue({
		...F,
		value: o.value,
		error: { issues: F.issues.map((o) => finalizeIssue(o, L, config())) },
		input: o.value
	}), o) : (o.value = F.value, F.memo && (o.memo = !0), o);
}
const $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (o, F) => {
	$ZodType.init(o, F), defineLazyInternal(o, "optin", (o) => o.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), defineLazyInternal(o, "optout", (o) => o.def.innerType._zod.optout), defineLazyInternal(o, "values", (o) => o.def.innerType._zod.values), o._zod.parse = (o, I) => {
		if (I.direction === "backward") return F.innerType._zod.run(o, I);
		let L = F.innerType._zod.run({
			value: o.value,
			issues: []
		}, I);
		return L instanceof Promise ? L.then((L) => handleCatchResult(o, L, F, I)) : handleCatchResult(o, L, F, I);
	};
}), $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (o, F) => {
	$ZodType.init(o, F), defineLazyInternal(o, "values", (o) => o.def.in._zod.values), defineLazyInternal(o, "optin", (o) => o.def.in._zod.optin), defineLazyInternal(o, "optout", (o) => o.def.out._zod.optout), defineLazyInternal(o, "propValues", (o) => o.def.in._zod.propValues), o._zod.parse = (o, I) => {
		if (I.direction === "backward") {
			let L = F.out._zod.run(o, I);
			return L instanceof Promise ? L.then((o) => handlePipeResult(o, F.in, I)) : handlePipeResult(L, F.in, I);
		}
		let L = F.in._zod.run(o, I);
		return L instanceof Promise ? L.then((o) => handlePipeResult(o, F.out, I)) : handlePipeResult(L, F.out, I);
	};
});
function handlePipeResult(o, F, I) {
	return o.issues.some((o) => o.code !== "unrecognized_keys") ? (o.aborted = !0, o) : F._zod.run({
		value: o.value,
		issues: o.issues
	}, I);
}
const $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (o, F) => {
	$ZodType.init(o, F), defineLazyInternal(o, "propValues", (o) => o.def.innerType._zod.propValues), defineLazyInternal(o, "values", (o) => o.def.innerType._zod.values), defineLazyInternal(o, "optin", (o) => o.def.innerType?._zod?.optin), defineLazyInternal(o, "optout", (o) => o.def.innerType?._zod?.optout), o._zod.parse = (o, I) => {
		if (I.direction === "backward") return F.innerType._zod.run(o, I);
		let L = F.innerType._zod.run(o, I);
		return L instanceof Promise ? L.then(handleReadonlyResult) : handleReadonlyResult(L);
	};
});
function handleReadonlyResult(o) {
	return o.memo || (o.value = Object.freeze(o.value)), o;
}
const $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (o, F) => {
	$ZodType.init(o, F), defineLazy(o._zod, "innerType", () => {
		let o = F;
		return o._cachedInner ||= F.getter(), o._cachedInner;
	}), defineLazyInternal(o, "pattern", (o) => o.innerType?._zod?.pattern), defineLazyInternal(o, "propValues", (o) => o.innerType?._zod?.propValues), defineLazyInternal(o, "optin", (o) => o.innerType?._zod?.optin ?? void 0), defineLazyInternal(o, "optout", (o) => o.innerType?._zod?.optout ?? void 0), o._zod.parse = (F, I) => o._zod.innerType._zod.run(F, I);
}), $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (o, F) => {
	$ZodCheck.init(o, F), $ZodType.init(o, F), o._zod.parse = (o, F) => o, o._zod.check = (I) => {
		let L = I.value, R = F.fn(L);
		if (R instanceof Promise) return R.then((F) => handleRefineResult(F, I, L, o));
		handleRefineResult(R, I, L, o);
	};
});
function handleRefineResult(o, F, I, L) {
	if (!o) {
		let o = {
			code: "custom",
			input: I,
			inst: L,
			path: [...L._zod.def.path ?? []],
			continue: !L._zod.def.abort
		};
		L._zod.def.params && (o.params = L._zod.def.params), F.issues.push(issue(o));
	}
}
var $ZodCyclicError = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, STATE = "~memo", NO_ISSUES = [];
function cloneIssues(o) {
	return o.map((o) => o.path ? {
		...o,
		path: o.path.slice()
	} : { ...o });
}
var recursive = /* @__PURE__ */ new WeakMap();
function isRecursive(o, F) {
	let I = recursive.get(o);
	if (I !== void 0) return I;
	if (F.has(o)) return !0;
	F.add(o);
	let L = !1, R = (o) => {
		!L && o?._zod && isRecursive(o, F) && (L = !0);
	}, z = o._zod.def;
	switch (z.type) {
		case "object":
			for (let o of Reflect.ownKeys(z.shape)) R(z.shape[o]);
			R(z.catchall);
			break;
		case "array":
			R(z.element);
			break;
		case "tuple":
			for (let o of z.items) R(o);
			R(z.rest);
			break;
		case "record":
		case "map":
			R(z.keyType), R(z.valueType);
			break;
		case "set":
			R(z.valueType);
			break;
		case "union":
			for (let o of z.options) R(o);
			break;
		case "intersection":
			R(z.left), R(z.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			R(z.innerType);
			break;
		case "pipe":
			R(z.in), R(z.out);
			break;
		case "function":
			R(z.input), R(z.output);
			break;
		case "lazy":
			R(o._zod.innerType);
			break;
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let o in z) {
			let F = Object.getOwnPropertyDescriptor(z, o);
			if (!F || F.get) continue;
			let I = F.value;
			if (!(!I || typeof I != "object")) {
				if (I._zod) R(I);
				else if (Array.isArray(I)) for (let o of I) R(o);
			}
		}
	}
	return F.delete(o), recursive.set(o, L), L;
}
function bucketFor(o, F) {
	let I = o.buckets.get(F);
	return I || (I = /* @__PURE__ */ new Map(), o.buckets.set(F, I)), I;
}
var handoff, open = [], memo = {
	alloc(o, F, I) {
		let L = handoff;
		if (!L) return I;
		handoff = void 0;
		let R = {
			value: I,
			issues: null
		};
		return L.set(F.value, R), open.push(R), I;
	},
	guard(o) {
		var F;
		(F = o._zod).deferred ?? (F.deferred = []), o._zod.deferred.push(() => {
			let F = o._zod.parse, I = (o, I) => {
				if (I.direction !== "backward" && isBackEdge(I, o.value)) throw new $ZodCyclicError();
				return F(o, I);
			};
			o._zod.parse = I, o._zod.run === F && (o._zod.run = I);
		});
	},
	attach(o) {
		var F;
		let I, L, R;
		(F = o._zod).deferred ?? (F.deferred = []), o._zod.deferred.push(() => {
			let F = o._zod.parse, z = (B, V) => {
				if (I === void 0 && (I = isRecursive(o, /* @__PURE__ */ new Set()), !I)) return o._zod.parse = F, o._zod.run === z && (o._zod.run = F), F(B, V);
				let H = B.value;
				if (typeof H != "object" || !H) return F(B, V);
				let U = V[STATE];
				U || (U = {
					buckets: /* @__PURE__ */ new Map(),
					backEdges: void 0
				}, V[STATE] = U);
				let W;
				L === V ? W = R : (W = bucketFor(U, o), L = V, R = W);
				let G = W.get(H);
				if (G) return B.value = G.value, G.issues ? G.issues.length && B.issues.push(...cloneIssues(G.issues)) : (B.memo = !0, U.backEdges ??= /* @__PURE__ */ new Set(), U.backEdges.add(G.value)), B;
				handoff = W;
				let K = open.length, q = F(B, V);
				handoff = void 0;
				let J = open.length > K ? open.pop() : void 0;
				return q instanceof Promise ? q.then((o) => (J && (J.issues = o.issues.length ? cloneIssues(o.issues) : NO_ISSUES), o)) : (J && (J.issues = q.issues.length ? cloneIssues(q.issues) : NO_ISSUES), q);
			};
			o._zod.parse = z, o._zod.run === F && (o._zod.run = z);
		});
	}
};
function memoizer() {
	return memo;
}
function isBackEdge(o, F) {
	let I = o[STATE]?.backEdges;
	return I !== void 0 && typeof F == "object" && !!F && I.has(F);
}
var error = () => {
	let o = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function F(F) {
		return o[F] ?? null;
	}
	let I = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		credit_card: "credit card number",
		jwt: "JWT",
		template_literal: "input"
	}, L = { nan: "NaN" };
	function R(o, F) {
		return o === "number" && typeof F == "number" && !Number.isFinite(F) ? String(F) : L[o] ?? o;
	}
	return (o) => {
		switch (o.code) {
			case "invalid_type": return `Invalid input: expected ${R(o.expected)}, received ${R(parsedType(o.input), o.input)}`;
			case "invalid_value": return o.values.length === 1 ? `Invalid input: expected ${stringifyPrimitive(o.values[0])}` : `Invalid option: expected one of ${joinValues(o.values, "|")}`;
			case "too_big": {
				let I = o.exact ? "exactly " : o.inclusive ? "<=" : "<", L = F(o.origin);
				return L ? `Too big: expected ${o.origin ?? "value"} to have ${I}${o.maximum.toString()} ${L.unit ?? "elements"}` : `Too big: expected ${o.origin ?? "value"} to be ${I}${o.maximum.toString()}`;
			}
			case "too_small": {
				let I = o.exact ? "exactly " : o.inclusive ? ">=" : ">", L = F(o.origin);
				return L ? `Too small: expected ${o.origin} to have ${I}${o.minimum.toString()} ${L.unit}` : `Too small: expected ${o.origin} to be ${I}${o.minimum.toString()}`;
			}
			case "invalid_format": {
				let F = o;
				return F.format === "starts_with" ? `Invalid string: must start with "${F.prefix}"` : F.format === "ends_with" ? `Invalid string: must end with "${F.suffix}"` : F.format === "includes" ? `Invalid string: must include "${F.includes}"` : F.format === "regex" ? `Invalid string: must match pattern ${F.pattern}` : `Invalid ${I[F.format] ?? o.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${o.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${o.keys.length > 1 ? "s" : ""}: ${joinValues(o.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${o.origin}`;
			case "invalid_union": return o.options && Array.isArray(o.options) && o.options.length > 0 ? `Invalid discriminator value. Expected ${o.options.map((o) => `'${o}'`).join(" | ")}` : o.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${o.origin}`;
			default: return "Invalid input";
		}
	};
};
function en_default() {
	return { localeError: error() };
}
var _a, $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(o, ...F) {
		let I = F[0];
		return this._map.set(o, I), I && typeof I == "object" && "id" in I && this._idmap.set(I.id, o), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(o) {
		let F = this._map.get(o);
		return F && typeof F == "object" && "id" in F && this._idmap.delete(F.id), this._map.delete(o), this;
	}
	get(o) {
		let F = o._zod.parent;
		if (F) {
			let I = { ...this.get(F) ?? {} };
			delete I.id;
			let L = {
				...I,
				...this._map.get(o)
			};
			return Object.keys(L).length ? L : void 0;
		}
		return this._map.get(o);
	}
	has(o) {
		return this._map.has(o);
	}
};
function registry() {
	return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
const globalRegistry = globalThis.__zod_globalRegistry;
/* @__NO_SIDE_EFFECTS__ */
function _string(o, F) {
	return new o({
		type: "string",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _email(o, F) {
	return new o({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _guid(o, F) {
	return new o({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuid(o, F) {
	return new o({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv4(o, F) {
	return new o({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv6(o, F) {
	return new o({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv7(o, F) {
	return new o({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _url(o, F) {
	return new o({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _emoji(o, F) {
	return new o({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _nanoid(o, F) {
	return new o({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cuid(o, F) {
	return new o({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cuid2(o, F) {
	return new o({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ulid(o, F) {
	return new o({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _xid(o, F) {
	return new o({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ksuid(o, F) {
	return new o({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv4(o, F) {
	return new o({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv6(o, F) {
	return new o({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv4(o, F) {
	return new o({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv6(o, F) {
	return new o({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64(o, F) {
	return new o({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64url(o, F) {
	return new o({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _e164(o, F) {
	return new o({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _jwt(o, F) {
	return new o({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDateTime(o, F) {
	return new o({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDate(o, F) {
	return new o({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoTime(o, F) {
	return new o({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDuration(o, F) {
	return new o({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _number(o, F) {
	return new o({
		type: "number",
		checks: [],
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _int(o, F) {
	return new o({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _boolean(o, F) {
	return new o({
		type: "boolean",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _null$1(o, F) {
	return new o({
		type: "null",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _unknown(o) {
	return new o({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function _never(o, F) {
	return new o({
		type: "never",
		...normalizeParams(F)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lt(o, F) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(F),
		value: o,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lte(o, F) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(F),
		value: o,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gt(o, F) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(F),
		value: o,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gte(o, F) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(F),
		value: o,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _multipleOf(o, F) {
	return new $ZodCheckMultipleOf({
		check: "multiple_of",
		...normalizeParams(F),
		value: o
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _maxLength(o, F) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(F),
		maximum: o
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _minLength(o, F) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(F),
		minimum: o
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _length(o, F) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(F),
		length: o
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _regex(o, F) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(F),
		pattern: o
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lowercase(o) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(o)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uppercase(o) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(o)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _includes(o, F) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(F),
		includes: o
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _startsWith(o, F) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(F),
		prefix: o
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _endsWith(o, F) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(F),
		suffix: o
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _overwrite(o) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx: o
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _normalize(o) {
	return /* @__PURE__ */ _overwrite((F) => F.normalize(o));
}
/* @__NO_SIDE_EFFECTS__ */
function _trim() {
	return /* @__PURE__ */ _overwrite((o) => o.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function _toLowerCase() {
	return /* @__PURE__ */ _overwrite((o) => o.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _toUpperCase() {
	return /* @__PURE__ */ _overwrite((o) => o.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _slugify() {
	return /* @__PURE__ */ _overwrite((o) => slugify(o));
}
/* @__NO_SIDE_EFFECTS__ */
function _array(o, F, I) {
	return new o({
		type: "array",
		element: F,
		...normalizeParams(I)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _refine(o, F, I) {
	return new o({
		type: "custom",
		check: "custom",
		fn: F,
		...normalizeParams(I)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _superRefine(o, F) {
	let I = /* @__PURE__ */ _check((F) => (F.addIssue = (o) => {
		if (typeof o == "string") F.issues.push(issue(o, F.value, I._zod.def));
		else {
			let L = o;
			L.fatal && (L.continue = !1), L.code ??= "custom", "input" in L || (L.input = F.value), L.inst ??= I, L.continue ??= !I._zod.def.abort, F.issues.push(issue(L));
		}
	}, o(F.value, F)), F);
	return I;
}
/* @__NO_SIDE_EFFECTS__ */
function _check(o, F) {
	let I = new $ZodCheck({
		check: "custom",
		...normalizeParams(F)
	});
	return I._zod.check = o, I;
}
function assignProps(o, ...F) {
	for (let I of F) for (let F of Reflect.ownKeys(I)) Object.prototype.propertyIsEnumerable.call(I, F) && assignProp(o, F, I[F]);
	return o;
}
function initializeContext(o) {
	let F = o?.target ?? "draft-2020-12";
	return F === "draft-4" && (F = "draft-04"), F === "draft-7" && (F = "draft-07"), {
		processors: o.processors ?? {},
		metadataRegistry: o?.metadata ?? globalRegistry,
		target: F,
		unrepresentable: o?.unrepresentable ?? "throw",
		override: o?.override ?? (() => {}),
		io: o?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: o?.cycles ?? "ref",
		reused: o?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: o?.external ?? void 0
	};
}
function handleUnrepresentable(o, F, I, L, R) {
	let z = typeof F.unrepresentable == "function" ? F.unrepresentable({
		zodSchema: o,
		path: L.path,
		message: R
	}) : F.unrepresentable;
	if (z === "any") return !1;
	if (z === void 0 || z === "throw") throw Error(R);
	return Object.assign(I, z), !0;
}
function process(o, F, I = {
	path: [],
	schemaPath: []
}) {
	var L;
	let R = o._zod.def, z = F.seen.get(o);
	if (z) return z.count++, I.schemaPath.includes(o) && (z.cycle = I.path), z.schema;
	let B = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: I.path
	};
	F.seen.set(o, B), F.sharedDefsExtractedFor = void 0, F.sharedEmitDoneFor = void 0;
	let V = o._zod.toJSONSchema?.();
	if (V) B.schema = V;
	else {
		let L = {
			...I,
			schemaPath: [...I.schemaPath, o],
			path: I.path
		};
		if (o._zod.processJSONSchema) o._zod.processJSONSchema(F, B.schema, L);
		else {
			let I = B.schema, z = F.processors[R.type];
			if (!z) throw Error(`[toJSONSchema]: Non-representable type encountered: ${R.type}`);
			z(o, F, I, L);
		}
		let z = o._zod.parent;
		z && (B.ref ||= z, process(z, F, L), F.seen.get(z).isParent = !0);
	}
	let H = F.metadataRegistry.get(o);
	return H && assignProps(B.schema, H), F.io === "input" && isTransforming(o) && (delete B.schema.examples, delete B.schema.default), F.io === "input" && "_prefault" in B.schema && ((L = B.schema).default ?? (L.default = B.schema._prefault)), delete B.schema._prefault, F.seen.get(o).schema;
}
function encodeJSONPointerSegment(o) {
	return o.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(o, F) {
	let I = o.seen.get(F);
	if (!I) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (o.external && o.sharedDefsExtractedFor === o.external) return;
	let L = /* @__PURE__ */ new Map();
	for (let F of o.seen.entries()) {
		let I = o.metadataRegistry.get(F[0])?.id;
		if (I) {
			let o = L.get(I);
			if (o && o !== F[0]) throw Error(`Duplicate schema id "${I}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			L.set(I, F[0]);
		}
	}
	let R = (F) => {
		let L = o.target === "draft-2020-12" ? "$defs" : "definitions";
		if (o.external) {
			let I = o.external.registry.get(F[0])?.id, R = o.external.uri ?? ((o) => o);
			if (I) return { ref: R(I) };
			let z = F[1].defId ?? F[1].schema.id ?? `schema${o.counter++}`;
			return F[1].defId = z, {
				defId: z,
				ref: `${R("__shared")}#/${L}/${encodeJSONPointerSegment(z)}`
			};
		}
		let R = `#/${L}/`;
		if (F[1] === I && !F[1].schema.id) return { ref: "#" };
		let z = F[1].schema.id ?? `__schema${o.counter++}`;
		return {
			defId: z,
			ref: R + encodeJSONPointerSegment(z)
		};
	}, z = (o) => {
		if (o[1].schema.$ref) return;
		let F = o[1], { ref: I, defId: L } = R(o);
		F.def = { ...F.schema }, L && (F.defId = L);
		let z = F.schema;
		for (let o in z) delete z[o];
		z.$ref = I;
	};
	if (o.cycles === "throw") for (let F of o.seen.entries()) {
		let o = F[1];
		if (o.cycle) throw Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let I of o.seen.entries()) {
		let L = I[1];
		if (F === I[0]) {
			z(I);
			continue;
		}
		if (o.external) {
			let L = o.external.registry.get(I[0])?.id;
			if (F !== I[0] && L) {
				z(I);
				continue;
			}
		}
		if (o.metadataRegistry.get(I[0])?.id) {
			z(I);
			continue;
		}
		if (L.cycle) {
			z(I);
			continue;
		}
		if (L.count > 1 && o.reused === "ref") {
			z(I);
			continue;
		}
	}
	o.external && (o.sharedDefsExtractedFor = o.external);
}
function compactTypeUnion(o) {
	let F = o.anyOf;
	if (!Array.isArray(F) || F.length === 0 || o.type !== void 0) return;
	let I = [];
	for (let o of F) {
		if (!o || typeof o != "object") return;
		compactTypeUnion(o);
		let F = Object.keys(o);
		if (F.length !== 1 || F[0] !== "type") return;
		let L = o.type;
		for (let o of Array.isArray(L) ? L : [L]) {
			if (typeof o != "string") return;
			I.includes(o) || I.push(o);
		}
	}
	delete o.anyOf, o.type = I.length === 1 ? I[0] : I;
}
var FOLDABLE_KEYS = new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), UNION_KEYS = ["oneOf", "anyOf"];
function undeclaredConstraint(o) {
	let F = o.additionalProperties;
	return F === void 0 || F === !1 || typeof F != "object" || !F ? null : Object.keys(F).length ? F : null;
}
function foldObjects(o) {
	let F = [];
	for (let I of o) {
		if (typeof I != "object" || I.type !== "object") return null;
		for (let o in I) if (!FOLDABLE_KEYS.has(o)) return null;
		F.push(I);
	}
	let I = {}, L = /* @__PURE__ */ new Set();
	for (let o of F) {
		for (let L in o.properties) {
			if (Object.prototype.hasOwnProperty.call(I, L)) continue;
			let o = [];
			for (let I of F) {
				let F = I.properties?.[L] ?? undeclaredConstraint(I);
				F != null && (o.some((o) => JSON.stringify(o) === JSON.stringify(F)) || o.push(F));
			}
			assignProp(I, L, o.length === 1 ? o[0] : foldObjects(o) ?? { allOf: o });
		}
		for (let F of o.required ?? []) L.add(F);
	}
	let R = {
		type: "object",
		properties: I
	};
	if (L.size && (R.required = [...L]), F.every((o) => o.additionalProperties === !1)) R.additionalProperties = !1;
	else {
		let o = [];
		for (let I of F) {
			let F = undeclaredConstraint(I);
			F && !o.some((o) => JSON.stringify(o) === JSON.stringify(F)) && o.push(F);
		}
		o.length === 1 ? R.additionalProperties = o[0] : o.length > 1 && (R.additionalProperties = { allOf: o });
	}
	return R;
}
function foldIntersection(o) {
	let F = o.allOf;
	if (!Array.isArray(F) || F.length < 2) return;
	for (let F of FOLDABLE_KEYS) if (F in o) return;
	let I = F.filter((o) => UNION_KEYS.some((F) => Array.isArray(o[F]))), L = null;
	if (!I.length) L = foldObjects(F);
	else {
		let o = I[0], R = UNION_KEYS.find((F) => Array.isArray(o[F]));
		if (Object.keys(o).length !== 1) return;
		let z = F.filter((F) => F !== o), B = o[R].map((o) => foldObjects([...z, o]));
		if (B.some((o) => !o)) return;
		L = { [R]: B };
	}
	L && (delete o.allOf, assignProps(o, L));
}
function finalize(o, F) {
	let I = o.seen.get(F);
	if (!I) throw Error("Unprocessed schema. This is a bug in Zod.");
	let L = (F) => {
		let I = o.seen.get(F);
		if (I.ref === null) return;
		let R = I.def ?? I.schema, z = { ...R }, B = I.ref;
		if (I.ref = null, B) {
			L(B);
			let I = o.seen.get(B), V = I.schema;
			if (V.$ref && (o.target === "draft-07" || o.target === "draft-04" || o.target === "openapi-3.0") ? (R.allOf = R.allOf ?? [], R.allOf.push(V)) : assignProps(R, V), assignProps(R, z), F._zod.parent === B) for (let o in R) o === "$ref" || o === "allOf" || o in z || delete R[o];
			if (V.$ref && I.def) for (let o in R) o === "$ref" || o === "allOf" || o in I.def && JSON.stringify(R[o]) === JSON.stringify(I.def[o]) && delete R[o];
		}
		let V = F._zod.parent;
		if (V && V !== B) {
			L(V);
			let F = o.seen.get(V);
			if (F?.schema.$ref && (R.$ref = F.schema.$ref, F.def)) for (let o in R) o === "$ref" || o === "allOf" || o in F.def && JSON.stringify(R[o]) === JSON.stringify(F.def[o]) && delete R[o];
		}
		o.override({
			zodSchema: F,
			jsonSchema: R,
			path: I.path ?? []
		});
	};
	if (!o.external || o.sharedEmitDoneFor !== o.external) {
		for (let F of [...o.seen.entries()].reverse()) L(F[0]);
		if (o.target !== "openapi-3.0") for (let F of o.seen.entries()) compactTypeUnion(F[1].def ?? F[1].schema);
		for (let F of o.deferred) F();
		if (o.intersections.length) {
			let F = /* @__PURE__ */ new Map();
			for (let I of o.seen.values()) for (let o of [I.schema, I.def]) {
				let I = o?.allOf;
				if (!Array.isArray(I)) continue;
				let L = F.get(I);
				L ? L.push(o) : F.set(I, [o]);
			}
			for (let I of o.intersections) for (let o of F.get(I) ?? []) foldIntersection(o);
		}
	}
	let R = {};
	if (o.target === "draft-2020-12" ? R.$schema = "https://json-schema.org/draft/2020-12/schema" : o.target === "draft-07" ? R.$schema = "http://json-schema.org/draft-07/schema#" : o.target === "draft-04" ? R.$schema = "http://json-schema.org/draft-04/schema#" : o.target, o.external?.uri) {
		let I = o.external.registry.get(F)?.id;
		if (!I) throw Error("Schema is missing an `id` property");
		R.$id = o.external.uri(I);
	}
	assignProps(R, I.defId ? I.schema : I.def ?? I.schema);
	let z = o.metadataRegistry.get(F)?.id;
	z !== void 0 && R.id === z && delete R.id;
	let B = o.external?.defs ?? {};
	if (!o.external || o.sharedEmitDoneFor !== o.external) for (let F of o.seen.entries()) {
		let o = F[1];
		o.def && o.defId && (o.def.id === o.defId && delete o.def.id, assignProp(B, o.defId, o.def));
	}
	o.external && (o.sharedEmitDoneFor = o.external), o.external || Object.keys(B).length > 0 && (o.target === "draft-2020-12" ? R.$defs = B : R.definitions = B);
	try {
		let I = JSON.parse(JSON.stringify(R));
		return Object.defineProperty(I, "~standard", {
			value: {
				...F["~standard"],
				jsonSchema: {
					input: createStandardJSONSchemaMethod(F, "input", o.processors),
					output: createStandardJSONSchemaMethod(F, "output", o.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), I;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function isTransforming(o, F) {
	let I = F ?? { seen: /* @__PURE__ */ new Set() };
	if (I.seen.has(o)) return !1;
	I.seen.add(o);
	let L = o._zod.def;
	if (L.type === "transform") return !0;
	if (L.type === "array") return isTransforming(L.element, I);
	if (L.type === "set") return isTransforming(L.valueType, I);
	if (L.type === "lazy") return isTransforming(L.getter(), I);
	if (L.type === "promise" || L.type === "optional" || L.type === "nonoptional" || L.type === "nullable" || L.type === "readonly" || L.type === "default" || L.type === "prefault" || L.type === "catch") return isTransforming(L.innerType, I);
	if (L.type === "intersection") return isTransforming(L.left, I) || isTransforming(L.right, I);
	if (L.type === "record" || L.type === "map") return isTransforming(L.keyType, I) || isTransforming(L.valueType, I);
	if (L.type === "pipe") return o._zod.traits.has("$ZodCodec") ? !0 : isTransforming(L.in, I) || isTransforming(L.out, I);
	if (L.type === "object") {
		for (let o in L.shape) if (isTransforming(L.shape[o], I)) return !0;
		return !1;
	}
	if (L.type === "union") {
		for (let o of L.options) if (isTransforming(o, I)) return !0;
		return !1;
	}
	if (L.type === "tuple") {
		for (let o of L.items) if (isTransforming(o, I)) return !0;
		return !!(L.rest && isTransforming(L.rest, I));
	}
	return !1;
}
const createToJSONSchemaMethod = (o, F = {}) => (I) => {
	let L = initializeContext({
		...I,
		processors: F
	});
	return process(o, L), extractDefs(L, o), finalize(L, o);
}, createStandardJSONSchemaMethod = (o, F, I = {}) => (L) => {
	let { libraryOptions: R, target: z } = L ?? {}, B = initializeContext({
		...R ?? {},
		target: z,
		io: F,
		processors: I
	});
	return process(o, B), extractDefs(B, o), finalize(B, o);
};
var formatMap = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
};
const stringProcessor = (o, F, I, L) => {
	let R = I;
	R.type = "string";
	let { minimum: z, maximum: B, format: V, patterns: H, contentEncoding: U, laxFormat: W } = o._zod.bag;
	if (typeof z == "number" && (R.minLength = z), typeof B == "number" && (R.maxLength = B), V && (R.format = formatMap[V] ?? V, R.format === "" && delete R.format, (V === "time" || W) && delete R.format), U && (R.contentEncoding = U), H && H.size > 0) {
		let o = [...H];
		o.length === 1 ? R.pattern = o[0].source : o.length > 1 && (R.allOf = [...o.map((o) => ({
			...F.target === "draft-07" || F.target === "draft-04" || F.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: o.source
		}))]);
	}
}, numberProcessor = (o, F, I, L) => {
	let R = I, { minimum: z, maximum: B, format: V, multipleOf: H, exclusiveMaximum: U, exclusiveMinimum: W } = o._zod.bag;
	typeof V == "string" && V.includes("int") ? R.type = "integer" : R.type = "number";
	let G = typeof W == "number" && W >= (z ?? -Infinity), K = typeof U == "number" && U <= (B ?? Infinity), q = F.target === "draft-04" || F.target === "openapi-3.0";
	G ? q ? (R.minimum = W, R.exclusiveMinimum = !0) : R.exclusiveMinimum = W : typeof z == "number" && (R.minimum = z), K ? q ? (R.maximum = U, R.exclusiveMaximum = !0) : R.exclusiveMaximum = U : typeof B == "number" && (R.maximum = B), typeof H == "number" && (Number.isFinite(H) && H !== 0 ? R.multipleOf = Math.abs(H) : handleUnrepresentable(o, F, R, L, `A multipleOf divisor of ${H} cannot be represented in JSON Schema`));
}, booleanProcessor = (o, F, I, L) => {
	I.type = "boolean";
}, nullProcessor = (o, F, I, L) => {
	F.target === "openapi-3.0" ? (I.type = "string", I.nullable = !0, I.enum = [null]) : I.type = "null";
}, neverProcessor = (o, F, I, L) => {
	I.not = {};
}, enumProcessor = (o, F, I, L) => {
	let R = o._zod.def, z = getEnumValues(R.entries);
	if (z.length === 0) {
		I.not = {};
		return;
	}
	z.every((o) => typeof o == "number") && (I.type = "number"), z.every((o) => typeof o == "string") && (I.type = "string"), I.enum = z;
}, literalProcessor = (o, F, I, L) => {
	let R = o._zod.def;
	if (R.values.length === 0) {
		I.not = {};
		return;
	}
	let z = [];
	for (let B of R.values) if (B === void 0) {
		if (handleUnrepresentable(o, F, I, L, "Literal `undefined` cannot be represented in JSON Schema")) return;
	} else if (typeof B == "bigint") {
		if (handleUnrepresentable(o, F, I, L, "BigInt literals cannot be represented in JSON Schema")) return;
		z.push(Number(B));
	} else z.push(B);
	if (z.length !== 0) if (z.length === 1) {
		let o = z[0];
		I.type = o === null ? "null" : typeof o, F.target === "draft-04" || F.target === "openapi-3.0" ? I.enum = [o] : I.const = o;
	} else z.every((o) => typeof o == "number") && (I.type = "number"), z.every((o) => typeof o == "string") && (I.type = "string"), z.every((o) => typeof o == "boolean") && (I.type = "boolean"), z.every((o) => o === null) && (I.type = "null"), I.enum = z;
}, customProcessor = (o, F, I, L) => {
	handleUnrepresentable(o, F, I, L, "Custom types cannot be represented in JSON Schema");
}, transformProcessor = (o, F, I, L) => {
	handleUnrepresentable(o, F, I, L, "Transforms cannot be represented in JSON Schema");
}, arrayProcessor = (o, F, I, L) => {
	let R = I, z = o._zod.def, { minimum: B, maximum: V } = o._zod.bag;
	typeof B == "number" && (R.minItems = B), typeof V == "number" && (R.maxItems = V), R.type = "array", R.items = process(z.element, F, {
		...L,
		path: [...L.path, "items"]
	});
};
function inputOptin(o) {
	let F = o._zod.def;
	return F.type === "pipe" && F.in._zod.traits.has("$ZodTransform") ? inputOptin(F.out) : F.type === "catch" ? inputOptin(F.innerType) : o._zod.optin;
}
const objectProcessor = (o, F, I, L) => {
	let R = I, z = o._zod.def, B = z.shape;
	if (Object.getOwnPropertySymbols(B).length && handleUnrepresentable(o, F, R, L, "Symbol keys cannot be represented in JSON Schema")) return;
	for (let o in R.type = "object", R.properties = {}, B) assignProp(R.properties, o, process(B[o], F, {
		...L,
		path: [
			...L.path,
			"properties",
			o
		]
	}));
	let V = new Set(Object.keys(B)), H = new Set([...V].filter((o) => {
		let I = z.shape[o];
		return F.io === "input" ? inputOptin(I) === void 0 : I._zod.optout === void 0;
	}));
	H.size > 0 && (R.required = Array.from(H)), z.catchall?._zod.def.type === "never" ? R.additionalProperties = !1 : z.catchall ? z.catchall && (R.additionalProperties = process(z.catchall, F, {
		...L,
		path: [...L.path, "additionalProperties"]
	})) : F.io === "output" && (R.additionalProperties = !1);
}, unionProcessor = (o, F, I, L) => {
	let R = o._zod.def, z = R.inclusive === !1, B = R.options.map((o, I) => process(o, F, {
		...L,
		path: [
			...L.path,
			z ? "oneOf" : "anyOf",
			I
		]
	}));
	z ? I.oneOf = B : I.anyOf = B;
}, intersectionProcessor = (o, F, I, L) => {
	let R = o._zod.def, z = process(R.left, F, {
		...L,
		path: [
			...L.path,
			"allOf",
			0
		]
	}), B = process(R.right, F, {
		...L,
		path: [
			...L.path,
			"allOf",
			1
		]
	}), V = (o) => "allOf" in o && Object.keys(o).length === 1, H = [...V(z) ? z.allOf : [z], ...V(B) ? B.allOf : [B]];
	I.allOf = H, F.intersections.push(H);
};
function stringifyKeyNames(o, F, I) {
	if (F.$ref) {
		if (I.has(F)) return F;
		I.add(F);
		let L = o.get(F)?.def;
		if (!L) return F;
		let R = stringifyKeyNames(o, L, I);
		return R === L ? F : R;
	}
	for (let L of ["anyOf", "oneOf"]) {
		let R = F[L];
		if (!Array.isArray(R)) continue;
		let z = R.map((F) => stringifyKeyNames(o, F, I));
		z.some((o, F) => o !== R[F]) && (F = {
			...F,
			[L]: z
		});
	}
	let L = Array.isArray(F.type) ? F.type : [F.type], R = !L.includes("string") && L.some((o) => o === "number" || o === "integer"), z = F.enum ?? (F.const === void 0 ? void 0 : [F.const]);
	if (!R && !z?.some((o) => typeof o == "number")) return F;
	let { minimum: B, maximum: V, exclusiveMinimum: H, exclusiveMaximum: U, multipleOf: W, format: G, id: K, ...q } = F;
	return q.enum ? q.enum = q.enum.map((o) => typeof o == "number" ? String(o) : o) : typeof q.const == "number" && (q.const = String(q.const)), R ? (q.type = "string", z || (q.pattern = (L.includes("number") ? number$1 : integer).source), q) : q;
}
var pendingRecords = /* @__PURE__ */ new WeakMap();
function rewriteKeyNames(o) {
	let F = /* @__PURE__ */ new Map();
	for (let I of o.seen.values()) I.def && !F.has(I.schema) && F.set(I.schema, I);
	let I = /* @__PURE__ */ new Map();
	for (let L of pendingRecords.get(o) ?? []) {
		let R = o.seen.get(L), z = (R?.def ?? R?.schema)?.propertyNames;
		if (!z || z === !0 || I.has(z)) continue;
		let B = stringifyKeyNames(F, z, /* @__PURE__ */ new Set());
		B !== z && I.set(z, B);
	}
	if (I.size) for (let F of o.seen.values()) for (let o of [F.schema, F.def]) {
		let F = o && I.get(o.propertyNames);
		F && (o.propertyNames = F);
	}
}
const recordProcessor = (o, F, I, L) => {
	let R = I, z = o._zod.def;
	R.type = "object";
	let B = z.keyType, V = B._zod.bag?.patterns;
	if (z.mode === "loose" && V && V.size > 0) {
		let o = process(z.valueType, F, {
			...L,
			path: [
				...L.path,
				"patternProperties",
				"*"
			]
		});
		R.patternProperties = {};
		for (let F of V) assignProp(R.patternProperties, F.source, o);
	} else {
		if (F.target === "draft-07" || F.target === "draft-2020-12") {
			R.propertyNames = process(z.keyType, F, {
				...L,
				path: [...L.path, "propertyNames"]
			});
			let I = pendingRecords.get(F);
			I || (I = [], pendingRecords.set(F, I), F.deferred.push(() => rewriteKeyNames(F))), I.push(o);
		}
		R.additionalProperties = process(z.valueType, F, {
			...L,
			path: [...L.path, "additionalProperties"]
		});
	}
	let H = B._zod.values, U = F.io === "input" && inputOptin(z.valueType) !== void 0;
	if (H && !z.partial && !U) {
		let o = [...H].filter((o) => typeof o == "string" || typeof o == "number");
		o.length > 0 && (R.required = o.map(String));
	}
}, nullableProcessor = (o, F, I, L) => {
	let R = o._zod.def, z = process(R.innerType, F, L), B = F.seen.get(o);
	F.target === "openapi-3.0" ? (B.ref = R.innerType, I.nullable = !0) : I.anyOf = [z, { type: "null" }];
}, nonoptionalProcessor = (o, F, I, L) => {
	let R = o._zod.def;
	process(R.innerType, F, L);
	let z = F.seen.get(o);
	z.ref = R.innerType;
};
var UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(o, F, I, L, R) {
	let z = !1, B = JSON.stringify(o, (o, F) => typeof F == "bigint" ? (z = !0, null) : F);
	return z ? (handleUnrepresentable(F, I, L, R, "BigInt defaults cannot be represented in JSON Schema"), UNREPRESENTABLE_DEFAULT) : JSON.parse(B);
}
const defaultProcessor = (o, F, I, L) => {
	let R = o._zod.def;
	process(R.innerType, F, L);
	let z = F.seen.get(o);
	z.ref = R.innerType;
	let B = serializeDefaultValue(R.defaultValue, o, F, I, L);
	B !== UNREPRESENTABLE_DEFAULT && (I.default = B);
}, prefaultProcessor = (o, F, I, L) => {
	let R = o._zod.def;
	process(R.innerType, F, L);
	let z = F.seen.get(o);
	if (z.ref = R.innerType, F.io !== "input") return;
	let B = serializeDefaultValue(R.defaultValue, o, F, I, L);
	B !== UNREPRESENTABLE_DEFAULT && (I._prefault = B);
}, catchProcessor = (o, F, I, L) => {
	let R = o._zod.def;
	process(R.innerType, F, L);
	let z = F.seen.get(o);
	z.ref = R.innerType;
	let B;
	try {
		B = R.catchValue(void 0);
	} catch {
		handleUnrepresentable(o, F, I, L, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	I.default = B;
}, pipeProcessor = (o, F, I, L) => {
	let R = o._zod.def, z = R.in._zod.traits.has("$ZodTransform"), B = F.io === "input" ? z ? R.out : R.in : R.out;
	process(B, F, L);
	let V = F.seen.get(o);
	V.ref = B;
}, readonlyProcessor = (o, F, I, L) => {
	let R = o._zod.def;
	process(R.innerType, F, L);
	let z = F.seen.get(o);
	z.ref = R.innerType, I.readOnly = !0;
}, optionalProcessor = (o, F, I, L) => {
	let R = o._zod.def;
	process(R.innerType, F, L);
	let z = F.seen.get(o);
	z.ref = R.innerType;
}, lazyProcessor = (o, F, I, L) => {
	let R = o._zod.innerType;
	process(R, F, L);
	let z = F.seen.get(o);
	z.ref = R;
};
var _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(o, F, I) {
	Object.defineProperty(o, F, {
		configurable: !0,
		enumerable: !1,
		get() {
			let o = I(this);
			return Object.defineProperty(this, F, {
				value: o,
				configurable: !0,
				writable: !0
			}), o;
		},
		set(o) {
			Object.defineProperty(this, F, {
				value: o,
				configurable: !0,
				writable: !0
			});
		}
	});
}
const ZodRealError = /* @__PURE__ */ $constructor("ZodError", (o, F) => {
	$ZodError.init(o, F), o.name = "ZodError";
	let I = Object.getPrototypeOf(o);
	_installedErrorProtos.has(I) || (_installedErrorProtos.add(I), _lazyMethod(I, "format", (o) => (F) => formatError(o, F)), _lazyMethod(I, "flatten", (o) => (F) => flattenError(o, F)), _lazyMethod(I, "addIssue", (o) => (F) => {
		o.issues.push(F), o.message = JSON.stringify(o.issues, jsonStringifyReplacer, 2);
	}), _lazyMethod(I, "addIssues", (o) => (F) => {
		o.issues.push(...F), o.message = JSON.stringify(o.issues, jsonStringifyReplacer, 2);
	}), Object.defineProperty(I, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, void 0, { Parent: Error }), parse = /* @__PURE__ */ _parse(ZodRealError), parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError), safeParse = /* @__PURE__ */ _safeParse(ZodRealError), safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError), encode = /* @__PURE__ */ _encode(ZodRealError), decode = /* @__PURE__ */ _decode(ZodRealError), encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError), decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError), safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError), safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError), safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError), safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
function _ensureDefaultLocale() {
	globalConfig.localeError || config(en_default());
}
function _ensureDefaultMemoizer() {
	globalConfig.memoizer || config({ memoizer: memoizer() });
}
const ZodType = /* @__PURE__ */ $constructor("ZodType", (o, F) => (_ensureDefaultLocale(), $ZodType.init(o, F), o.def = F, o.type = F.type, o), {
	check(...o) {
		let F = this.def;
		return this.clone(mergeDefs(F, { checks: [...F.checks ?? [], ...o.map((o) => typeof o == "function" ? { _zod: {
			check: o,
			def: { check: "custom" },
			onattach: []
		} } : o)] }), { parent: !0 });
	},
	with(...o) {
		return this.check(...o);
	},
	clone(o, F) {
		return clone(this, o, F);
	},
	brand() {
		return this;
	},
	register(o, F) {
		return o.add(this, F), this;
	},
	refine(o, F) {
		return this.check(refine(o, F));
	},
	superRefine(o, F) {
		return this.check(superRefine(o, F));
	},
	overwrite(o) {
		return this.check(/* @__PURE__ */ _overwrite(o));
	},
	optional() {
		return optional(this);
	},
	exactOptional() {
		return exactOptional(this);
	},
	nullable() {
		return nullable(this);
	},
	nullish() {
		return optional(nullable(this));
	},
	nonoptional(o) {
		return nonoptional(this, o);
	},
	array() {
		return array(this);
	},
	or(o) {
		return union([this, o]);
	},
	and(o) {
		return intersection(this, o);
	},
	transform(o) {
		return pipe(this, transform(o));
	},
	default(o) {
		return _default(this, o);
	},
	prefault(o) {
		return prefault(this, o);
	},
	catch(o) {
		return _catch(this, o);
	},
	pipe(o) {
		return pipe(this, o);
	},
	readonly() {
		return readonly(this);
	},
	describe(o) {
		let F = this.clone();
		return globalRegistry.add(F, { description: o }), F;
	},
	meta(...o) {
		if (o.length === 0) return globalRegistry.get(this);
		let F = this.clone();
		return globalRegistry.add(F, o[0]), F;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(o, ...F) {
		return F.length === 0 ? o(this) : o(this, ...F);
	},
	get "~standard"() {
		return hide(this, "~standard", {
			...standardProps(this),
			jsonSchema: {
				input: createStandardJSONSchemaMethod(this, "input"),
				output: createStandardJSONSchemaMethod(this, "output")
			}
		});
	},
	set "~standard"(o) {
		own(this, "~standard", o);
	},
	parse: function o(F, I) {
		return parse(this, F, I, { callee: o });
	},
	parseAsync: async function o(F, I) {
		return await parseAsync(this, F, I, { callee: o });
	},
	safeParse(o, F) {
		return safeParse(this, o, F);
	},
	async safeParseAsync(o, F) {
		return safeParseAsync(this, o, F);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(o) {
		own(this, "spa", o);
	},
	encode: function o(F, I) {
		return encode(this, F, I, { callee: o });
	},
	decode: function o(F, I) {
		return decode(this, F, I, { callee: o });
	},
	encodeAsync: async function o(F, I) {
		return await encodeAsync(this, F, I, { callee: o });
	},
	decodeAsync: async function o(F, I) {
		return await decodeAsync(this, F, I, { callee: o });
	},
	safeEncode(o, F) {
		return safeEncode(this, o, F);
	},
	safeDecode(o, F) {
		return safeDecode(this, o, F);
	},
	async safeEncodeAsync(o, F) {
		return safeEncodeAsync(this, o, F);
	},
	async safeDecodeAsync(o, F) {
		return safeDecodeAsync(this, o, F);
	},
	toJSONSchema(o) {
		return createToJSONSchemaMethod(this, {})(o);
	},
	get description() {
		return globalRegistry.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), _ZodString = /* @__PURE__ */ $constructor("_ZodString", (o, F) => {
	$ZodString.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => stringProcessor(o, F, I, L);
	let I = o._zod.bag;
	o.format = I.format ?? null, o.minLength = I.minimum ?? null, o.maxLength = I.maximum ?? null;
}, {
	regex(...o) {
		return this.check(/* @__PURE__ */ _regex(...o));
	},
	includes(...o) {
		return this.check(/* @__PURE__ */ _includes(...o));
	},
	startsWith(...o) {
		return this.check(/* @__PURE__ */ _startsWith(...o));
	},
	endsWith(...o) {
		return this.check(/* @__PURE__ */ _endsWith(...o));
	},
	min(...o) {
		return this.check(/* @__PURE__ */ _minLength(...o));
	},
	max(...o) {
		return this.check(/* @__PURE__ */ _maxLength(...o));
	},
	length(...o) {
		return this.check(/* @__PURE__ */ _length(...o));
	},
	nonempty(...o) {
		return this.check(/* @__PURE__ */ _minLength(1, ...o));
	},
	lowercase(o) {
		return this.check(/* @__PURE__ */ _lowercase(o));
	},
	uppercase(o) {
		return this.check(/* @__PURE__ */ _uppercase(o));
	},
	trim() {
		return this.check(/* @__PURE__ */ _trim());
	},
	normalize(...o) {
		return this.check(/* @__PURE__ */ _normalize(...o));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ _toLowerCase());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ _toUpperCase());
	},
	slugify() {
		return this.check(/* @__PURE__ */ _slugify());
	}
}), ZodString = /* @__PURE__ */ $constructor("ZodString", (o, F) => {
	$ZodString.init(o, F), _ZodString.init(o, F);
}, {
	email(o) {
		return this.check(/* @__PURE__ */ _email(ZodEmail, o));
	},
	url(o) {
		return this.check(/* @__PURE__ */ _url(ZodURL, o));
	},
	jwt(o) {
		return this.check(/* @__PURE__ */ _jwt(ZodJWT, o));
	},
	emoji(o) {
		return this.check(/* @__PURE__ */ _emoji(ZodEmoji, o));
	},
	guid(o) {
		return this.check(/* @__PURE__ */ _guid(ZodGUID, o));
	},
	uuid(o) {
		return this.check(/* @__PURE__ */ _uuid(ZodUUID, o));
	},
	uuidv4(o) {
		return this.check(/* @__PURE__ */ _uuidv4(ZodUUID, o));
	},
	uuidv6(o) {
		return this.check(/* @__PURE__ */ _uuidv6(ZodUUID, o));
	},
	uuidv7(o) {
		return this.check(/* @__PURE__ */ _uuidv7(ZodUUID, o));
	},
	nanoid(o) {
		return this.check(/* @__PURE__ */ _nanoid(ZodNanoID, o));
	},
	cuid(o) {
		return this.check(/* @__PURE__ */ _cuid(ZodCUID, o));
	},
	cuid2(o) {
		return this.check(/* @__PURE__ */ _cuid2(ZodCUID2, o));
	},
	ulid(o) {
		return this.check(/* @__PURE__ */ _ulid(ZodULID, o));
	},
	base64(o) {
		return this.check(/* @__PURE__ */ _base64(ZodBase64, o));
	},
	base64url(o) {
		return this.check(/* @__PURE__ */ _base64url(ZodBase64URL, o));
	},
	xid(o) {
		return this.check(/* @__PURE__ */ _xid(ZodXID, o));
	},
	ksuid(o) {
		return this.check(/* @__PURE__ */ _ksuid(ZodKSUID, o));
	},
	ipv4(o) {
		return this.check(/* @__PURE__ */ _ipv4(ZodIPv4, o));
	},
	ipv6(o) {
		return this.check(/* @__PURE__ */ _ipv6(ZodIPv6, o));
	},
	cidrv4(o) {
		return this.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, o));
	},
	cidrv6(o) {
		return this.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, o));
	},
	e164(o) {
		return this.check(/* @__PURE__ */ _e164(ZodE164, o));
	},
	datetime(o) {
		return this.check(/* @__PURE__ */ _isoDateTime(ZodISODateTime, o));
	},
	date(o) {
		return this.check(/* @__PURE__ */ _isoDate(ZodISODate, o));
	},
	time(o) {
		return this.check(/* @__PURE__ */ _isoTime(ZodISOTime, o));
	},
	duration(o) {
		return this.check(/* @__PURE__ */ _isoDuration(ZodISODuration, o));
	}
});
function string(o) {
	return /* @__PURE__ */ _string(ZodString, o);
}
const ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (o, F) => {
	$ZodStringFormat.init(o, F), _ZodString.init(o, F);
}), ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (o, F) => {
	$ZodISODateTime.init(o, F), ZodStringFormat.init(o, F);
}), ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (o, F) => {
	$ZodISODate.init(o, F), ZodStringFormat.init(o, F);
}), ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (o, F) => {
	$ZodISOTime.init(o, F), ZodStringFormat.init(o, F);
}), ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (o, F) => {
	$ZodISODuration.init(o, F), ZodStringFormat.init(o, F);
}), ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (o, F) => {
	$ZodEmail.init(o, F), ZodStringFormat.init(o, F);
}), ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (o, F) => {
	$ZodGUID.init(o, F), ZodStringFormat.init(o, F);
}), ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (o, F) => {
	$ZodUUID.init(o, F), ZodStringFormat.init(o, F);
});
function uuid(o) {
	return /* @__PURE__ */ _uuid(ZodUUID, o);
}
const ZodURL = /* @__PURE__ */ $constructor("ZodURL", (o, F) => {
	$ZodURL.init(o, F), ZodStringFormat.init(o, F);
}), ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (o, F) => {
	$ZodEmoji.init(o, F), ZodStringFormat.init(o, F);
}), ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (o, F) => {
	$ZodNanoID.init(o, F), ZodStringFormat.init(o, F);
}), ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (o, F) => {
	$ZodCUID.init(o, F), ZodStringFormat.init(o, F);
}), ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (o, F) => {
	$ZodCUID2.init(o, F), ZodStringFormat.init(o, F);
}), ZodULID = /* @__PURE__ */ $constructor("ZodULID", (o, F) => {
	$ZodULID.init(o, F), ZodStringFormat.init(o, F);
}), ZodXID = /* @__PURE__ */ $constructor("ZodXID", (o, F) => {
	$ZodXID.init(o, F), ZodStringFormat.init(o, F);
}), ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (o, F) => {
	$ZodKSUID.init(o, F), ZodStringFormat.init(o, F);
}), ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (o, F) => {
	$ZodIPv4.init(o, F), ZodStringFormat.init(o, F);
}), ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (o, F) => {
	$ZodIPv6.init(o, F), ZodStringFormat.init(o, F);
}), ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (o, F) => {
	$ZodCIDRv4.init(o, F), ZodStringFormat.init(o, F);
}), ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (o, F) => {
	$ZodCIDRv6.init(o, F), ZodStringFormat.init(o, F);
}), ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (o, F) => {
	$ZodBase64.init(o, F), ZodStringFormat.init(o, F);
}), ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (o, F) => {
	$ZodBase64URL.init(o, F), ZodStringFormat.init(o, F);
}), ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (o, F) => {
	$ZodE164.init(o, F), ZodStringFormat.init(o, F);
}), ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (o, F) => {
	$ZodJWT.init(o, F), ZodStringFormat.init(o, F);
}), ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (o, F) => {
	$ZodNumber.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => numberProcessor(o, F, I, L);
	let I = o._zod.bag;
	o.minValue = Math.max(I.minimum ?? -Infinity, I.exclusiveMinimum ?? -Infinity) ?? null, o.maxValue = Math.min(I.maximum ?? Infinity, I.exclusiveMaximum ?? Infinity) ?? null, o.isInt = (I.format ?? "").includes("int") || Number.isSafeInteger(I.multipleOf ?? .5), o.isFinite = !0, o.format = I.format ?? null;
}, {
	gt(o, F) {
		return this.check(/* @__PURE__ */ _gt(o, F));
	},
	gte(o, F) {
		return this.check(/* @__PURE__ */ _gte(o, F));
	},
	min(o, F) {
		return this.check(/* @__PURE__ */ _gte(o, F));
	},
	lt(o, F) {
		return this.check(/* @__PURE__ */ _lt(o, F));
	},
	lte(o, F) {
		return this.check(/* @__PURE__ */ _lte(o, F));
	},
	max(o, F) {
		return this.check(/* @__PURE__ */ _lte(o, F));
	},
	int(o) {
		return this.check(int(o));
	},
	safe(o) {
		return this.check(int(o));
	},
	positive(o) {
		return this.check(/* @__PURE__ */ _gt(0, o));
	},
	nonnegative(o) {
		return this.check(/* @__PURE__ */ _gte(0, o));
	},
	negative(o) {
		return this.check(/* @__PURE__ */ _lt(0, o));
	},
	nonpositive(o) {
		return this.check(/* @__PURE__ */ _lte(0, o));
	},
	multipleOf(o, F) {
		return this.check(/* @__PURE__ */ _multipleOf(o, F));
	},
	step(o, F) {
		return this.check(/* @__PURE__ */ _multipleOf(o, F));
	},
	finite() {
		return this;
	}
});
function number(o) {
	return /* @__PURE__ */ _number(ZodNumber, o);
}
const ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (o, F) => {
	$ZodNumberFormat.init(o, F), ZodNumber.init(o, F);
});
function int(o) {
	return /* @__PURE__ */ _int(ZodNumberFormat, o);
}
const ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (o, F) => {
	$ZodBoolean.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => booleanProcessor(o, F, I, L);
});
function boolean(o) {
	return /* @__PURE__ */ _boolean(ZodBoolean, o);
}
const ZodNull = /* @__PURE__ */ $constructor("ZodNull", (o, F) => {
	$ZodNull.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => nullProcessor(o, F, I, L);
});
function _null(o) {
	return /* @__PURE__ */ _null$1(ZodNull, o);
}
const ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (o, F) => {
	$ZodUnknown.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (o, F, I) => void 0;
});
function unknown() {
	return /* @__PURE__ */ _unknown(ZodUnknown);
}
const ZodNever = /* @__PURE__ */ $constructor("ZodNever", (o, F) => {
	$ZodNever.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => neverProcessor(o, F, I, L);
});
function never(o) {
	return /* @__PURE__ */ _never(ZodNever, o);
}
const ZodArray = /* @__PURE__ */ $constructor("ZodArray", (o, F) => {
	_ensureDefaultMemoizer(), $ZodArray.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => arrayProcessor(o, F, I, L), o.element = F.element;
}, {
	min(o, F) {
		return this.check(/* @__PURE__ */ _minLength(o, F));
	},
	nonempty(o) {
		return this.check(/* @__PURE__ */ _minLength(1, o));
	},
	max(o, F) {
		return this.check(/* @__PURE__ */ _maxLength(o, F));
	},
	length(o, F) {
		return this.check(/* @__PURE__ */ _length(o, F));
	},
	unwrap() {
		return this.element;
	}
});
function array(o, F) {
	return /* @__PURE__ */ _array(ZodArray, o, F);
}
const ZodObject = /* @__PURE__ */ $constructor("ZodObject", (o, F) => {
	_ensureDefaultMemoizer(), $ZodObjectJIT.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => objectProcessor(o, F, I, L), installLazyProp(o, "shape", (o) => o._zod.def.shape, !1);
}, {
	keyof() {
		return _enum(Object.keys(this._zod.def.shape));
	},
	catchall(o) {
		return this.clone({
			...this._zod.def,
			catchall: o
		});
	},
	passthrough() {
		return this.clone({
			...this._zod.def,
			catchall: unknown()
		});
	},
	loose() {
		return this.clone({
			...this._zod.def,
			catchall: unknown()
		});
	},
	strict() {
		return this.clone({
			...this._zod.def,
			catchall: never()
		});
	},
	strip() {
		return this.clone({
			...this._zod.def,
			catchall: void 0
		});
	},
	extend(o) {
		return extend(this, o);
	},
	safeExtend(o) {
		return safeExtend(this, o);
	},
	merge(o) {
		return merge(this, o);
	},
	pick(o) {
		return pick(this, o);
	},
	omit(o) {
		return omit(this, o);
	},
	partial(...o) {
		return partial(ZodOptional, this, o[0]);
	},
	exactPartial(...o) {
		return partial(ZodExactOptional, this, o[0], "exactPartial");
	},
	required(...o) {
		return required(ZodNonOptional, this, o[0]);
	}
});
function object(o, F) {
	return new ZodObject({
		type: "object",
		shape: o ?? {},
		...normalizeParams(F)
	});
}
const ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (o, F) => {
	$ZodUnion.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => unionProcessor(o, F, I, L), o.options = F.options;
});
function union(o, F) {
	return new ZodUnion({
		type: "union",
		options: o,
		...normalizeParams(F)
	});
}
const ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (o, F) => {
	ZodUnion.init(o, F), $ZodDiscriminatedUnion.init(o, F);
});
function discriminatedUnion(o, F, I) {
	return new ZodDiscriminatedUnion({
		type: "union",
		options: F,
		discriminator: o,
		...normalizeParams(I)
	});
}
const ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (o, F) => {
	$ZodIntersection.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => intersectionProcessor(o, F, I, L);
});
function intersection(o, F) {
	return new ZodIntersection({
		type: "intersection",
		left: o,
		right: F
	});
}
const ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (o, F) => {
	_ensureDefaultMemoizer(), $ZodRecord.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => recordProcessor(o, F, I, L), o.keyType = F.keyType, o.valueType = F.valueType;
});
function record(o, F, I) {
	return !F || !F._zod ? new ZodRecord({
		type: "record",
		keyType: string(),
		valueType: o,
		...normalizeParams(F)
	}) : new ZodRecord({
		type: "record",
		keyType: o,
		valueType: F,
		...normalizeParams(I)
	});
}
const ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (o, F) => {
	$ZodEnum.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => enumProcessor(o, F, I, L), o.enum = F.entries, o.options = Object.values(F.entries);
	let I = new Set(Object.keys(F.entries));
	o.extract = (o, L) => {
		let R = {};
		for (let L of o) if (I.has(L)) R[L] = F.entries[L];
		else throw Error(`Key ${L} not found in enum`);
		return new ZodEnum({
			...F,
			checks: [],
			...normalizeParams(L),
			entries: R
		});
	}, o.exclude = (o, L) => {
		let R = { ...F.entries };
		for (let F of o) if (I.has(F)) delete R[F];
		else throw Error(`Key ${F} not found in enum`);
		return new ZodEnum({
			...F,
			checks: [],
			...normalizeParams(L),
			entries: R
		});
	};
});
function _enum(o, F) {
	return new ZodEnum({
		type: "enum",
		entries: Array.isArray(o) ? Object.fromEntries(o.map((o) => [o, o])) : o,
		...normalizeParams(F)
	});
}
const ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (o, F) => {
	$ZodLiteral.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => literalProcessor(o, F, I, L), o.values = new Set(F.values), Object.defineProperty(o, "value", { get() {
		if (F.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return F.values[0];
	} });
});
function literal(o, F) {
	return new ZodLiteral({
		type: "literal",
		values: Array.isArray(o) ? o : [o],
		...normalizeParams(F)
	});
}
const ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (o, F) => {
	_ensureDefaultMemoizer(), $ZodTransform.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => transformProcessor(o, F, I, L), o._zod.parse = (I, L) => {
		if (L.direction === "backward") throw new $ZodEncodeError(o.constructor.name);
		I.addIssue = (L) => {
			if (typeof L == "string") I.issues.push(issue(L, I.value, F));
			else {
				let F = L;
				F.fatal && (F.continue = !1), F.code ??= "custom", "input" in F || (F.input = I.value), F.inst ??= o, I.issues.push(issue(F));
			}
		};
		let R = F.transform(I.value, I);
		return R instanceof Promise ? R.then((o) => (I.value = o, I)) : (I.value = R, I);
	};
});
function transform(o) {
	return new ZodTransform({
		type: "transform",
		transform: o
	});
}
const ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (o, F) => {
	$ZodOptional.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => optionalProcessor(o, F, I, L), o.unwrap = () => o._zod.def.innerType;
});
function optional(o) {
	return new ZodOptional({
		type: "optional",
		innerType: o
	});
}
const ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (o, F) => {
	$ZodExactOptional.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => optionalProcessor(o, F, I, L), o.unwrap = () => o._zod.def.innerType;
});
function exactOptional(o) {
	return new ZodExactOptional({
		type: "optional",
		innerType: o
	});
}
const ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (o, F) => {
	$ZodNullable.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => nullableProcessor(o, F, I, L), o.unwrap = () => o._zod.def.innerType;
});
function nullable(o) {
	return new ZodNullable({
		type: "nullable",
		innerType: o
	});
}
const ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (o, F) => {
	$ZodDefault.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => defaultProcessor(o, F, I, L), o.unwrap = () => o._zod.def.innerType, o.removeDefault = o.unwrap;
});
function _default(o, F) {
	return new ZodDefault({
		type: "default",
		innerType: o,
		get defaultValue() {
			return typeof F == "function" ? F() : shallowClone(F);
		}
	});
}
const ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (o, F) => {
	$ZodPrefault.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => prefaultProcessor(o, F, I, L), o.unwrap = () => o._zod.def.innerType;
});
function prefault(o, F) {
	return new ZodPrefault({
		type: "prefault",
		innerType: o,
		get defaultValue() {
			return typeof F == "function" ? F() : shallowClone(F);
		}
	});
}
const ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (o, F) => {
	$ZodNonOptional.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => nonoptionalProcessor(o, F, I, L), o.unwrap = () => o._zod.def.innerType;
});
function nonoptional(o, F) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType: o,
		...normalizeParams(F)
	});
}
const ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (o, F) => {
	$ZodCatch.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => catchProcessor(o, F, I, L), o.unwrap = () => o._zod.def.innerType, o.removeCatch = o.unwrap;
});
function _catch(o, F) {
	return new ZodCatch({
		type: "catch",
		innerType: o,
		catchValue: typeof F == "function" ? F : constantCatch(F)
	});
}
const ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (o, F) => {
	$ZodPipe.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => pipeProcessor(o, F, I, L), o.in = F.in, o.out = F.out;
});
function pipe(o, F) {
	return new ZodPipe({
		type: "pipe",
		in: o,
		out: F
	});
}
const ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (o, F) => {
	$ZodReadonly.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => readonlyProcessor(o, F, I, L), o.unwrap = () => o._zod.def.innerType;
});
function readonly(o) {
	return new ZodReadonly({
		type: "readonly",
		innerType: o
	});
}
const ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (o, F) => {
	$ZodLazy.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => lazyProcessor(o, F, I, L), o.unwrap = () => o._zod.def.getter();
});
function lazy(o) {
	return new ZodLazy({
		type: "lazy",
		getter: o
	});
}
const ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (o, F) => {
	$ZodCustom.init(o, F), ZodType.init(o, F), o._zod.processJSONSchema = (F, I, L) => customProcessor(o, F, I, L);
});
function refine(o, F = {}) {
	return /* @__PURE__ */ _refine(ZodCustom, o, F);
}
function superRefine(o, F) {
	return /* @__PURE__ */ _superRefine(o, F);
}
function json(o) {
	let F = lazy(() => union([
		string(o),
		number(),
		boolean(),
		_null(),
		array(F),
		record(string(), F)
	]));
	return F;
}
const DEFAULT_TERMINAL_FONT_WEIGHT = 500, TERMINAL_FONT_WEIGHT_MIN = 100, TERMINAL_FONT_WEIGHT_MAX = 900, TERMINAL_FONT_WEIGHT_STEP = 100, DEFAULT_TERMINAL_FONT_WEIGHT_BOLD = 700;
function normalizeWeight(o, F) {
	let I = typeof o == "number" ? o : NaN;
	return Number.isFinite(I) ? Math.min(900, Math.max(100, Math.round(I))) : F;
}
function normalizeTerminalFontWeight(o) {
	return normalizeWeight(o, 500);
}
function normalizeTerminalFontWeightBold(o) {
	return normalizeWeight(o, 700);
}
function resolveTerminalFontWeights(o, F) {
	return {
		fontWeight: normalizeTerminalFontWeight(o),
		fontWeightBold: normalizeTerminalFontWeightBold(F)
	};
}
const TUI_AGENT_DISPLAY_NAMES = {
	claude: "Claude",
	"claude-agent-teams": "Claude Agent Teams",
	openclaude: "OpenClaude",
	codex: "Codex",
	devin: "Devin",
	ante: "Ante",
	trae: "Trae",
	autohand: "Autohand Code",
	opencode: "OpenCode",
	"mimo-code": "MiMo Code",
	pi: "Pi",
	omp: "OMP",
	"prime-agent": "Prime Agent",
	gemini: "Gemini",
	antigravity: "Antigravity",
	aider: "Aider",
	goose: "Goose",
	amp: "Amp",
	kilo: "Kilocode",
	kiro: "Kiro",
	crush: "Charm",
	aug: "Auggie",
	cline: "Cline",
	codebuff: "Codebuff",
	"command-code": "Command Code",
	continue: "Continue",
	cursor: "Cursor",
	droid: "Droid",
	kimi: "Kimi",
	"mistral-vibe": "Mistral Vibe",
	"qwen-code": "Qwen Code",
	rovo: "Rovo Dev",
	hermes: "Hermes",
	openclaw: "OpenClaw",
	copilot: "GitHub Copilot",
	grok: "Grok"
}, ALL_TUI_AGENTS = Object.keys(TUI_AGENT_DISPLAY_NAMES);
var BREADCRUMB_RING_CAPACITY = 100, BREADCRUMB_COALESCE_MS = 1e3;
function createPtyDeliveryBreadcrumbRing(o = BREADCRUMB_RING_CAPACITY, F = BREADCRUMB_COALESCE_MS) {
	let I = [];
	return {
		record(L, R) {
			let z = Date.now(), B = I.at(-1);
			if (B && B.kind === L && z - B.atMs < F) {
				B.repeats = (B.repeats ?? 1) + 1, B.atMs = z, R !== void 0 && (B.detail = R);
				return;
			}
			I.push(R === void 0 ? {
				atMs: z,
				kind: L
			} : {
				atMs: z,
				kind: L,
				detail: R
			}), I.length > o && (I = I.slice(I.length - o));
		},
		snapshot() {
			return I.map((o) => ({ ...o }));
		},
		reset() {
			I = [];
		}
	};
}
function redactPtyIdForDiagnostics(o) {
	let F = o.lastIndexOf("@@");
	return F === -1 ? o.length <= 12 ? o : `…${o.slice(-12)}` : `…${o.slice(F)}`;
}
const EMPTY_PTY_MAIN_DELIVERY_DIAGNOSTICS = {
	appVersion: "",
	mainUptimeMs: 0,
	windowFocused: null,
	windowVisible: null,
	windowMinimized: null,
	msSinceLastPowerSuspend: null,
	msSinceLastPowerResume: null,
	perPty: [],
	breadcrumbs: []
};
var createStoreImpl = (o) => {
	let F, I = /* @__PURE__ */ new Set(), L = (o, L) => {
		let R = typeof o == "function" ? o(F) : o;
		if (!Object.is(R, F)) {
			let o = F;
			F = L ?? (typeof R != "object" || !R) ? R : Object.assign({}, F, R), I.forEach((I) => I(F, o));
		}
	}, R = () => F, z = {
		setState: L,
		getState: R,
		getInitialState: () => B,
		subscribe: (o) => (I.add(o), () => I.delete(o))
	}, B = F = o(L, R, z);
	return z;
}, createStore = ((o) => o ? createStoreImpl(o) : createStoreImpl), import_react = /* @__PURE__ */ __toESM(require_react(), 1), identity = (o) => o;
function useStore(o, F = identity) {
	let I = import_react.useSyncExternalStore(o.subscribe, import_react.useCallback(() => F(o.getState()), [o, F]), import_react.useCallback(() => F(o.getInitialState()), [o, F]));
	return import_react.useDebugValue(I), I;
}
var createImpl = (o) => {
	let F = createStore(o), I = (o) => useStore(F, o);
	return Object.assign(I, F), I;
}, create = ((o) => o ? createImpl(o) : createImpl), PLUGIN_ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/, DANGEROUS_PLUGIN_NAMES = new Set([
	"__proto__",
	"prototype",
	"constructor"
]);
function isSafePluginId(o) {
	return typeof o == "string" && o.length <= 64 && PLUGIN_ID_RE.test(o) && !DANGEROUS_PLUGIN_NAMES.has(o);
}
function isPluginManifestId(o) {
	return PLUGIN_ID_RE.test(o);
}
function isQualifiedPluginKey(o) {
	let F = o.split(".");
	return F.length === 2 ? isSafePluginId(F[0]) && isSafePluginId(F[1]) : !1;
}
function isPluginPanelTabKey(o) {
	if (!o.startsWith("plugin:")) return !1;
	let [F, I, ...L] = o.slice(7).split("/");
	return L.length === 0 && !!F && !!I && isQualifiedPluginKey(F) && isPluginManifestId(I);
}
async function persistCorruptEvidence(o) {
	let F = o.livePngDataUrl, I = o.bufferText;
	try {
		if (!F || I == null) throw Error("Render-desync evidence payload was released before persistence");
		let L = await window.api.app.writeTerminalRenderDesyncEvidence({
			captureId: o.captureId,
			phase: "corrupt",
			pngDataUrl: F,
			metadata: {
				paneKey: o.paneKey,
				when: o.when,
				divergence: o.divergence,
				paused: o.paused,
				trigger: o.trigger,
				rendererState: o.rendererState,
				weightProbe: o.weightProbe,
				bufferText: I
			}
		});
		return o.persistedDirectory = L.directory, L.directory;
	} catch (o) {
		return console.error("[terminal] could not persist render-desync evidence; leaving pane intact", o), null;
	} finally {
		o.livePngDataUrl = void 0, o.bufferText = void 0;
	}
}
async function persistHealedReference(o, F) {
	try {
		await window.api.app.writeTerminalRenderDesyncEvidence({
			captureId: o,
			phase: "healed",
			pngDataUrl: F.toDataURL(),
			metadata: { when: Date.now() }
		});
	} catch (o) {
		console.error("[terminal] could not persist healed render reference", o);
	}
}
function createCaptureId(o) {
	let F = o.replace(/[^a-zA-Z0-9_-]/g, "-"), I = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
	return `${Date.now()}-${F}-${I}`;
}
var INK_BACKGROUND_DISTANCE = 36, MISSING_SET_MIN_OVERLAP = .5, readbackCanvas = null, readbackContext = null;
function reachRenderInternals(o) {
	try {
		let F = o, I = F._core?._renderService, L = I?._renderer?.value, R = L?.dimensions?.device?.cell, z = L?._themeService?.colors?.background?.rgba;
		if (typeof F.rows != "number" || typeof F.cols != "number" || !L?._canvas || !L._charAtlas || typeof z != "number" || typeof R?.width != "number" || typeof R?.height != "number") return null;
		let B = L._glyphRenderer?.value;
		return {
			rows: F.rows,
			cols: F.cols,
			isPaused: I?._isPaused === !0,
			canvas: L._canvas,
			cellWidth: R.width,
			cellHeight: R.height,
			backgroundRgb: [
				z >>> 24,
				z >>> 16 & 255,
				z >>> 8 & 255
			],
			rendererState: {
				atlasPages: L._charAtlas.pages?.length ?? -1,
				atlasPageLayoutVersion: L._charAtlas.pageLayoutVersion ?? L._charAtlas._pageLayoutVersion ?? null,
				atlasPageVersions: L._charAtlas.pages?.map((o) => o.version ?? -1) ?? [],
				glyphLastSeenPageLayoutVersion: B?._lastSeenPageLayoutVersion ?? null,
				glyphTextureVersions: B?._atlasTextures?.map((o) => o.version ?? -1) ?? [],
				modelLineLengths: Array.from(L._model?.lineLengths ?? []),
				vertexCount: B?._vertices?.count ?? null,
				activeVertexBuffer: B?._activeBuffer ?? null
			}
		};
	} catch {
		return null;
	}
}
function activeBuffer(o) {
	let F = o.buffer?.active;
	return F && typeof F.getLine == "function" ? F : null;
}
function measureDivergence(o, F) {
	let { canvas: I, cellWidth: L, cellHeight: R, rows: z, cols: B, backgroundRgb: V } = o;
	if (!I.width || !I.height) return null;
	let H = getReadbackContext(I.width, I.height);
	if (!H) return null;
	H.drawImage(I, 0, 0);
	let U = H.getImageData(0, 0, I.width, I.height).data, W = /* @__PURE__ */ new Set(), G = 0, K = 0;
	for (let o = 0; o < z; o++) {
		if (o === F.cursorY) continue;
		let z = F.getLine(F.viewportY + o);
		if (z) for (let F = 0; F < B; F++) {
			let H = z.getCell(F);
			if (!H) continue;
			let q = H.getChars();
			if (q === "" || q === " " || H.getWidth() === 0) continue;
			let J = 0, Y = 0, X = Math.round(F * L + L * .25), Z = Math.round(F * L + L * .75), Q = Math.round(o * R + R * .25), $ = Math.round(o * R + R * .75);
			for (let o = Q; o < $; o += 2) for (let F = X; F < Z; F += 2) {
				if (F >= I.width || o >= I.height) continue;
				let L = (o * I.width + F) * 4;
				Math.abs(U[L] - V[0]) + Math.abs(U[L + 1] - V[1]) + Math.abs(U[L + 2] - V[2]) > INK_BACKGROUND_DISTANCE && J++, Y++;
			}
			Y && (G++, J === 0 && (K++, W.add(o * B + F)));
		}
	}
	return {
		textCells: G,
		missing: K,
		missingCells: W,
		missPct: G ? 100 * K / G : 0
	};
}
function getReadbackContext(o, F) {
	return readbackCanvas || (readbackCanvas = document.createElement("canvas"), readbackContext = readbackCanvas.getContext("2d", { willReadFrequently: !0 })), readbackContext ? (readbackCanvas.width !== o && (readbackCanvas.width = o), readbackCanvas.height !== F && (readbackCanvas.height = F), readbackContext) : null;
}
function releaseRenderDesyncReadback() {
	readbackCanvas && (readbackCanvas.width = 0, readbackCanvas.height = 0), readbackCanvas = null, readbackContext = null;
}
function missingSetsOverlap(o, F) {
	let I = 0;
	for (let L of F) o.has(L) && I++;
	let L = o.size + F.size - I;
	return L > 0 && I / L >= MISSING_SET_MIN_OVERLAP;
}
function bufferSnapshot(o, F) {
	let I = [];
	for (let L = 0; L < F; L++) I.push(o.getLine(o.viewportY + L)?.translateToString(!0) ?? "");
	return I.join("\n");
}
function readSentinelWeightProbe(o, F, I, L) {
	let R = o, z = R._core?._renderService?._renderer?.value?._charAtlas, B = z?._config, V = countBoldTextCells(F, I, L);
	return {
		optionsFontWeight: stringOrNull(R.options?.fontWeight),
		optionsFontWeightBold: stringOrNull(R.options?.fontWeightBold),
		atlasConfigFontWeight: stringOrNull(B?.fontWeight),
		atlasConfigFontWeightBold: stringOrNull(B?.fontWeightBold),
		atlasConfigFontFamily: stringOrNull(B?.fontFamily),
		atlasConfigDevicePixelRatio: typeof B?.devicePixelRatio == "number" ? B.devicePixelRatio : null,
		boldTextCells: V.bold,
		totalTextCells: V.total,
		fontProbeMismatches: z?.fontProbeMismatchCount ?? null,
		fontProbeLastDesired: z?.fontProbeLastMismatch?.desired ?? null,
		fontProbeLastActual: z?.fontProbeLastMismatch?.actual ?? null
	};
}
function stringOrNull(o) {
	return o === void 0 ? null : String(o);
}
function auditPaneWeightParity(o, F) {
	if (!F) return;
	let I = resolveTerminalFontWeights(F.terminalFontWeight, F.terminalFontWeightBold);
	for (let F of o) {
		if (hasDeferredPaneMetricOptions(F)) continue;
		let o = F.terminal.options, L = stringOrNull(o.fontWeight), z = stringOrNull(o.fontWeightBold);
		L === String(I.fontWeight) && z === String(I.fontWeightBold) || recordTerminalWebglDiagnostic("terminal-weight-parity-mismatch", {
			paneId: F.id,
			liveFontWeight: L,
			liveFontWeightBold: z,
			expectedFontWeight: I.fontWeight,
			expectedFontWeightBold: I.fontWeightBold
		});
	}
}
function countBoldTextCells(o, F, I) {
	let L = 0, R = 0;
	if (!o) return {
		bold: L,
		total: R
	};
	for (let z = 0; z < F; z++) {
		let F = o.getLine(o.viewportY + z);
		if (F) for (let o = 0; o < I; o++) {
			let I = F.getCell(o);
			if (!I) break;
			let z = I.getChars();
			z === "" || z === " " || I.getWidth() === 0 || (R++, I.isBold?.() && L++);
		}
	}
	return {
		bold: L,
		total: R
	};
}
var SAMPLE_INTERVAL_MS = 250, SAMPLE_BURST_MS = 1e4, PERSISTENT_SAMPLES = 2, MIN_TEXT_CELLS = 200, MISSING_PCT_THRESHOLD = 8, MAX_EVIDENCE_ENTRIES = 4, missingHistoryByPane = /* @__PURE__ */ new Map(), pendingPaneKeys = /* @__PURE__ */ new Set(), healedCaptureTimeoutIds = /* @__PURE__ */ new Set(), evidence = [], burstIntervalId = null, burstTimeoutId = null, burstTerminal = null;
function sampleRenderDesyncOnce(o = measureDivergence) {
	forEachLivePaneForDesyncSentinel((F, I) => {
		let z = I.terminal;
		if (burstTerminal && z !== burstTerminal || pendingPaneKeys.has(F)) return;
		let B = reachRenderInternals(z);
		if (!B || B.isPaused) {
			missingHistoryByPane.delete(F);
			return;
		}
		let V = activeBuffer(z);
		if (!V) return;
		let H = o(B, V);
		if (!H || H.textCells < MIN_TEXT_CELLS) {
			missingHistoryByPane.delete(F);
			return;
		}
		if (H.missPct < MISSING_PCT_THRESHOLD) {
			missingHistoryByPane.delete(F);
			return;
		}
		let U = missingHistoryByPane.get(F) ?? [];
		for (U.push(H.missingCells); U.length > PERSISTENT_SAMPLES;) U.shift();
		if (missingHistoryByPane.set(F, U), U.length < PERSISTENT_SAMPLES) return;
		for (let o = 1; o < U.length; o++) if (!missingSetsOverlap(U[o - 1], U[o])) return;
		if (missingHistoryByPane.delete(F), recordTerminalWebglDiagnostic("webgl-render-desync", {
			paneKey: F,
			textCells: H.textCells,
			missing: H.missing,
			missPct: Math.round(H.missPct * 10) / 10
		}), evidence.length >= MAX_EVIDENCE_ENTRIES) {
			console.warn(`[terminal] render desync detected on pane ${F}; capture budget exhausted`), resetAndRefreshAllTerminalWebglAtlases("render-desync"), stopRenderDesyncSampleBurst();
			return;
		}
		let W = buildEvidenceEntry(F, z, B, H, "divergence");
		console.warn(`[terminal] render desync detected on pane ${F} (${H.missing}/${H.textCells} cells, ${H.missPct.toFixed(1)}%) — persisting evidence`), persistEntry(W, B, { recover: !0 });
	});
}
function captureRenderDesyncNow(o, F) {
	let I = F.terminal;
	if (pendingPaneKeys.has(o) || evidence.length >= MAX_EVIDENCE_ENTRIES) {
		console.warn(`[terminal] manual desync capture skipped for ${o}: budget or in flight`);
		return;
	}
	let L = reachRenderInternals(I);
	if (!L) {
		console.warn(`[terminal] manual desync capture failed for ${o}: no renderer internals`);
		return;
	}
	let z = null;
	try {
		let o = activeBuffer(I);
		z = o && measureDivergence(L, o);
	} catch {
		z = null;
	}
	let B = buildEvidenceEntry(o, I, L, z ?? {
		textCells: 0,
		missing: 0,
		missPct: 0,
		missingCells: /* @__PURE__ */ new Set()
	}, "manual");
	recordTerminalWebglDiagnostic("webgl-render-desync-manual-capture", {
		paneKey: o,
		boldTextCells: B.weightProbe.boldTextCells,
		totalTextCells: B.weightProbe.totalTextCells,
		optionsFontWeight: B.weightProbe.optionsFontWeight,
		atlasConfigFontWeight: B.weightProbe.atlasConfigFontWeight
	}), console.warn(`[terminal] manual render-desync capture on pane ${o} — persisting evidence`), persistEntry(B, L, { recover: !1 });
}
function buildEvidenceEntry(o, F, I, L, R) {
	pendingPaneKeys.add(o);
	let z = activeBuffer(F), B = {
		captureId: createCaptureId(o),
		paneKey: o,
		when: Date.now(),
		trigger: R,
		divergence: {
			textCells: L.textCells,
			missing: L.missing,
			missPct: L.missPct
		},
		paused: I.isPaused,
		rendererState: I.rendererState,
		weightProbe: readSentinelWeightProbe(F, z, I.rows, I.cols),
		livePngDataUrl: I.canvas.toDataURL(),
		bufferText: z ? bufferSnapshot(z, I.rows) : ""
	};
	return evidence.push(B), B;
}
async function persistEntry(o, F, { recover: I }) {
	if (await persistCorruptEvidence(o) == null) {
		let F = evidence.indexOf(o);
		F !== -1 && evidence.splice(F, 1), pendingPaneKeys.delete(o.paneKey);
		return;
	}
	if (!I) {
		pendingPaneKeys.delete(o.paneKey);
		return;
	}
	resetAndRefreshAllTerminalWebglAtlases("render-desync");
	let R = setTimeout(() => {
		healedCaptureTimeoutIds.delete(R), persistHealedReference(o.captureId, F.canvas).finally(() => pendingPaneKeys.delete(o.paneKey));
	}, SAMPLE_INTERVAL_MS);
	healedCaptureTimeoutIds.add(R);
}
function startRenderDesyncSampleBurst(o) {
	stopRenderDesyncSampleBurst(), burstTerminal = o, sampleRenderDesyncOnce(), burstIntervalId = setInterval(sampleRenderDesyncOnce, SAMPLE_INTERVAL_MS), burstTimeoutId = setTimeout(stopRenderDesyncSampleBurst, SAMPLE_BURST_MS);
}
function stopRenderDesyncSampleBurst() {
	burstIntervalId != null && (clearInterval(burstIntervalId), burstIntervalId = null), burstTimeoutId != null && (clearTimeout(burstTimeoutId), burstTimeoutId = null), burstTerminal = null, missingHistoryByPane.clear(), releaseRenderDesyncReadback();
}
const RENDER_DESYNC_SENTINEL_FLAG = "orca:render-desync-sentinel";
var clickListener = null, sessionArmedOverride = null;
function maybeStartTerminalRenderDesyncSentinel() {
	isTerminalRenderDesyncSentinelArmed() && installClickListener();
}
function installClickListener() {
	clickListener ?? (clickListener = (o) => {
		let F = navigator.userAgent.includes("Mac");
		if (o.button !== 0 || (F ? !o.metaKey : !o.ctrlKey)) return;
		let I = o.target;
		if (!(I instanceof Node)) return;
		let L = null, R = null;
		if (forEachLivePaneForDesyncSentinel((o, F) => {
			F.terminal.element?.contains(I) && (L = o, R = F);
		}), !(!R || L == null)) {
			if (o.shiftKey) {
				captureRenderDesyncNow(L, R);
				return;
			}
			startRenderDesyncSampleBurst(R.terminal);
		}
	}, document.addEventListener("mouseup", clickListener, !0), console.warn("[terminal] render-desync sentinel armed (10s post-link bursts + ⇧-capture)"));
}
function isTerminalRenderDesyncSentinelArmed() {
	if (sessionArmedOverride != null) return sessionArmedOverride;
	try {
		return globalThis.localStorage?.getItem(RENDER_DESYNC_SENTINEL_FLAG) === "1";
	} catch {
		return !1;
	}
}
function setTerminalRenderDesyncSentinelArmed(o) {
	try {
		let F = globalThis.localStorage;
		F ? o ? (F.setItem(RENDER_DESYNC_SENTINEL_FLAG, "1"), sessionArmedOverride = null) : (F.removeItem(RENDER_DESYNC_SENTINEL_FLAG), sessionArmedOverride = null) : sessionArmedOverride = o;
	} catch {
		sessionArmedOverride = o;
	}
	o ? installClickListener() : (removeClickListener(), stopRenderDesyncSampleBurst());
}
function removeClickListener() {
	clickListener != null && (document.removeEventListener("mouseup", clickListener, !0), clickListener = null);
}
var rendererDeliveryBreadcrumbs = createPtyDeliveryBreadcrumbRing(), ATLAS_FONT_PROBE_MISMATCH = "atlas-font-probe-mismatch", ATLAS_CRASH_MIRROR_INTERVAL_MS = 3e4, lastAtlasCrashMirrorAt = -Infinity, suppressedAtlasCrashMirrors = 0;
function recordTerminalFreezeBreadcrumb(o, F) {
	rendererDeliveryBreadcrumbs.record(o, F);
}
setTerminalWebglDiagnosticRecorder((o, F) => {
	if (rendererDeliveryBreadcrumbs.record(o, F), o === ATLAS_FONT_PROBE_MISMATCH) {
		let o = Date.now();
		if (o - lastAtlasCrashMirrorAt < ATLAS_CRASH_MIRROR_INTERVAL_MS) {
			suppressedAtlasCrashMirrors++;
			return;
		}
		lastAtlasCrashMirrorAt = o;
	}
	recordRendererCrashBreadcrumb(TERMINAL_WEBGL_DIAGNOSTIC_BREADCRUMB, {
		...F,
		...o === ATLAS_FONT_PROBE_MISMATCH && suppressedAtlasCrashMirrors > 0 ? { rendererSuppressedSinceLast: suppressedAtlasCrashMirrors } : {},
		kind: o
	}), o === ATLAS_FONT_PROBE_MISMATCH && (suppressedAtlasCrashMirrors = 0);
}), maybeStartTerminalRenderDesyncSentinel(), globalThis.__orcaAtlasFontProbe = (o) => {
	recordTerminalWebglDiagnostic(ATLAS_FONT_PROBE_MISMATCH, {
		desired: o?.desired ?? null,
		actual: o?.actual ?? null
	});
};
function getTerminalFreezeBreadcrumbs() {
	return rendererDeliveryBreadcrumbs.snapshot();
}
var recoveryListeners = /* @__PURE__ */ new Set(), visibilityProvenStale = !1, globalListenersInstalled = !1;
function isDocumentVisibilityProvenStale() {
	return visibilityProvenStale;
}
function onUserInteractionWithDocument() {
	if (!(visibilityProvenStale || document.visibilityState !== "hidden")) {
		visibilityProvenStale = !0, recordTerminalFreezeBreadcrumb("stale-visibility-latch", { recoveryListenerCount: recoveryListeners.size }), console.warn("[terminal] user input arrived while document.visibilityState is hidden — treating occlusion state as stale and re-syncing terminal delivery", { recoveryListenerCount: recoveryListeners.size });
		for (let o of recoveryListeners) try {
			o();
		} catch {}
	}
}
function onDocumentVisibilityChange() {
	recordTerminalFreezeBreadcrumb("visibilitychange", {
		state: document.visibilityState,
		clearedStaleOverride: visibilityProvenStale
	}), visibilityProvenStale = !1;
}
function installGlobalListeners() {
	globalListenersInstalled || typeof document > "u" || typeof window > "u" || typeof document.addEventListener != "function" || (globalListenersInstalled = !0, document.addEventListener("keydown", onUserInteractionWithDocument, {
		capture: !0,
		passive: !0
	}), document.addEventListener("pointerdown", onUserInteractionWithDocument, {
		capture: !0,
		passive: !0
	}), window.addEventListener("focus", onUserInteractionWithDocument), document.addEventListener("visibilitychange", onDocumentVisibilityChange));
}
function removeGlobalListeners() {
	globalListenersInstalled && (globalListenersInstalled = !1, document.removeEventListener("keydown", onUserInteractionWithDocument, { capture: !0 }), document.removeEventListener("pointerdown", onUserInteractionWithDocument, { capture: !0 }), window.removeEventListener("focus", onUserInteractionWithDocument), document.removeEventListener("visibilitychange", onDocumentVisibilityChange));
}
function registerStaleDocumentVisibilityRecovery(o) {
	return installGlobalListeners(), recoveryListeners.add(o), () => {
		recoveryListeners.delete(o), recoveryListeners.size === 0 && removeGlobalListeners();
	};
}
export { discriminatedUnion as A, uuid as B, normalizeTerminalFontWeight as C, _null as D, _enum as E, object as F, record as I, string as L, lazy as M, literal as N, array as O, number as P, union as R, TERMINAL_FONT_WEIGHT_STEP as S, resolveTerminalFontWeights as T, NEVER as V, TUI_AGENT_DISPLAY_NAMES as _, isTerminalRenderDesyncSentinelArmed as a, TERMINAL_FONT_WEIGHT_MAX as b, isPluginPanelTabKey as c, create as d, useStore as f, ALL_TUI_AGENTS as g, redactPtyIdForDiagnostics as h, recordTerminalFreezeBreadcrumb as i, json as j, boolean as k, isQualifiedPluginKey as l, EMPTY_PTY_MAIN_DELIVERY_DIAGNOSTICS as m, registerStaleDocumentVisibilityRecovery as n, setTerminalRenderDesyncSentinelArmed as o, createStore as p, getTerminalFreezeBreadcrumbs as r, auditPaneWeightParity as s, isDocumentVisibilityProvenStale as t, isSafePluginId as u, DEFAULT_TERMINAL_FONT_WEIGHT as v, normalizeTerminalFontWeightBold as w, TERMINAL_FONT_WEIGHT_MIN as x, DEFAULT_TERMINAL_FONT_WEIGHT_BOLD as y, unknown as z };
