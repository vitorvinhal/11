import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { E as yieldToEventLoop, S as getUtf8ChunkEndIndex } from "./renderer-app-platform--nJ6HYmL.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { _ as PasteAction, g as ReferenceWidget, v as InMemoryClipboardMetadataManager, y as Delayer } from "./editor.api2-B26FOp3A.js";
import { i as typescriptDefaults, n as javascriptDefaults, t as JsxEmit } from "./monaco.contribution-DqQ6JUf5.js";
import { n as measureTextControlPasteByteLengthWithYield, t as measureTextControlPasteByteLength } from "./text-control-paste-Bg1FpWOl.js";
import { t as editor_main_exports } from "./editor.main-DYdOLWJc.js";
function _arrayLikeToArray(e, u) {
	(u == null || u > e.length) && (u = e.length);
	for (var d = 0, f = Array(u); d < u; d++) f[d] = e[d];
	return f;
}
function _arrayWithHoles(e) {
	if (Array.isArray(e)) return e;
}
function _defineProperty$1(e, u, d) {
	return (u = _toPropertyKey(u)) in e ? Object.defineProperty(e, u, {
		value: d,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[u] = d, e;
}
function _iterableToArrayLimit(e, u) {
	var d = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (d != null) {
		var f, p, m, g, y = [], b = !0, x = !1;
		try {
			if (m = (d = d.call(e)).next, u !== 0) for (; !(b = (f = m.call(d)).done) && (y.push(f.value), y.length !== u); b = !0);
		} catch (e) {
			x = !0, p = e;
		} finally {
			try {
				if (!b && d.return != null && (g = d.return(), Object(g) !== g)) return;
			} finally {
				if (x) throw p;
			}
		}
		return y;
	}
}
function _nonIterableRest() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e, u) {
	var d = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var f = Object.getOwnPropertySymbols(e);
		u && (f = f.filter(function(u) {
			return Object.getOwnPropertyDescriptor(e, u).enumerable;
		})), d.push.apply(d, f);
	}
	return d;
}
function _objectSpread2(e) {
	for (var u = 1; u < arguments.length; u++) {
		var d = arguments[u] == null ? {} : arguments[u];
		u % 2 ? ownKeys$1(Object(d), !0).forEach(function(u) {
			_defineProperty$1(e, u, d[u]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(d)) : ownKeys$1(Object(d)).forEach(function(u) {
			Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(d, u));
		});
	}
	return e;
}
function _objectWithoutProperties(e, u) {
	if (e == null) return {};
	var d, f, p = _objectWithoutPropertiesLoose(e, u);
	if (Object.getOwnPropertySymbols) {
		var m = Object.getOwnPropertySymbols(e);
		for (f = 0; f < m.length; f++) d = m[f], u.indexOf(d) === -1 && {}.propertyIsEnumerable.call(e, d) && (p[d] = e[d]);
	}
	return p;
}
function _objectWithoutPropertiesLoose(e, u) {
	if (e == null) return {};
	var d = {};
	for (var f in e) if ({}.hasOwnProperty.call(e, f)) {
		if (u.indexOf(f) !== -1) continue;
		d[f] = e[f];
	}
	return d;
}
function _slicedToArray(e, u) {
	return _arrayWithHoles(e) || _iterableToArrayLimit(e, u) || _unsupportedIterableToArray(e, u) || _nonIterableRest();
}
function _toPrimitive(e, u) {
	if (typeof e != "object" || !e) return e;
	var d = e[Symbol.toPrimitive];
	if (d !== void 0) {
		var f = d.call(e, u);
		if (typeof f != "object") return f;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (u === "string" ? String : Number)(e);
}
function _toPropertyKey(e) {
	var u = _toPrimitive(e, "string");
	return typeof u == "symbol" ? u : u + "";
}
function _unsupportedIterableToArray(e, u) {
	if (e) {
		if (typeof e == "string") return _arrayLikeToArray(e, u);
		var d = {}.toString.call(e).slice(8, -1);
		return d === "Object" && e.constructor && (d = e.constructor.name), d === "Map" || d === "Set" ? Array.from(e) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? _arrayLikeToArray(e, u) : void 0;
	}
}
function _defineProperty(e, u, d) {
	return u in e ? Object.defineProperty(e, u, {
		value: d,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[u] = d, e;
}
function ownKeys(e, u) {
	var d = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var f = Object.getOwnPropertySymbols(e);
		u && (f = f.filter(function(u) {
			return Object.getOwnPropertyDescriptor(e, u).enumerable;
		})), d.push.apply(d, f);
	}
	return d;
}
function _objectSpread2$1(e) {
	for (var u = 1; u < arguments.length; u++) {
		var d = arguments[u] == null ? {} : arguments[u];
		u % 2 ? ownKeys(Object(d), !0).forEach(function(u) {
			_defineProperty(e, u, d[u]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(d)) : ownKeys(Object(d)).forEach(function(u) {
			Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(d, u));
		});
	}
	return e;
}
function compose$1() {
	var e = [...arguments];
	return function(u) {
		return e.reduceRight(function(e, u) {
			return u(e);
		}, u);
	};
}
function curry$1(e) {
	return function u() {
		var d = this, f = [...arguments];
		return f.length >= e.length ? e.apply(this, f) : function() {
			var e = [...arguments];
			return u.apply(d, [].concat(f, e));
		};
	};
}
function isObject$1(e) {
	return {}.toString.call(e).includes("Object");
}
function isEmpty(e) {
	return !Object.keys(e).length;
}
function isFunction(e) {
	return typeof e == "function";
}
function hasOwnProperty(e, u) {
	return Object.prototype.hasOwnProperty.call(e, u);
}
function validateChanges(e, u) {
	return isObject$1(u) || errorHandler$1("changeType"), Object.keys(u).some(function(u) {
		return !hasOwnProperty(e, u);
	}) && errorHandler$1("changeField"), u;
}
function validateSelector(e) {
	isFunction(e) || errorHandler$1("selectorType");
}
function validateHandler(e) {
	isFunction(e) || isObject$1(e) || errorHandler$1("handlerType"), isObject$1(e) && Object.values(e).some(function(e) {
		return !isFunction(e);
	}) && errorHandler$1("handlersType");
}
function validateInitial(e) {
	e || errorHandler$1("initialIsRequired"), isObject$1(e) || errorHandler$1("initialType"), isEmpty(e) && errorHandler$1("initialContent");
}
function throwError$1(e, u) {
	throw Error(e[u] || e.default);
}
var errorHandler$1 = curry$1(throwError$1)({
	initialIsRequired: "initial state is required",
	initialType: "initial state should be an object",
	initialContent: "initial state shouldn't be an empty object",
	handlerType: "handler should be an object or a function",
	handlersType: "all handlers should be a functions",
	selectorType: "selector should be a function",
	changeType: "provided value of changes should be an object",
	changeField: "it seams you want to change a field in the state which is not specified in the \"initial\" state",
	default: "an unknown error accured in `state-local` package"
}), validators$1 = {
	changes: validateChanges,
	selector: validateSelector,
	handler: validateHandler,
	initial: validateInitial
};
function create(e) {
	var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	validators$1.initial(e), validators$1.handler(u);
	var d = { current: e }, f = curry$1(didStateUpdate)(d, u), p = curry$1(updateState)(d), m = curry$1(validators$1.changes)(e), g = curry$1(extractChanges)(d);
	function y() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(e) {
			return e;
		};
		return validators$1.selector(e), e(d.current);
	}
	function b(e) {
		compose$1(f, p, m, g)(e);
	}
	return [y, b];
}
function extractChanges(e, u) {
	return isFunction(u) ? u(e.current) : u;
}
function updateState(e, u) {
	return e.current = _objectSpread2$1(_objectSpread2$1({}, e.current), u), u;
}
function didStateUpdate(e, u, d) {
	return isFunction(u) ? u(e.current) : Object.keys(d).forEach(function(d) {
		return u[d]?.call(u, e.current[d]);
	}), d;
}
var state_local_default = { create }, config = { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs" } };
function curry(e) {
	return function u() {
		var d = this, f = [...arguments];
		return f.length >= e.length ? e.apply(this, f) : function() {
			var e = [...arguments];
			return u.apply(d, [].concat(f, e));
		};
	};
}
function isObject(e) {
	return {}.toString.call(e).includes("Object");
}
function validateConfig(e) {
	return e || errorHandler("configIsRequired"), isObject(e) || errorHandler("configType"), e.urls ? (informAboutDeprecation(), { paths: { vs: e.urls.monacoBase } }) : e;
}
function informAboutDeprecation() {
	console.warn(errorMessages.deprecation);
}
function throwError(e, u) {
	throw Error(e[u] || e.default);
}
var errorMessages = {
	configIsRequired: "the configuration object is required",
	configType: "the configuration object should be an object",
	default: "an unknown error accured in `@monaco-editor/loader` package",
	deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
}, errorHandler = curry(throwError)(errorMessages), validators = { config: validateConfig }, compose = function() {
	var e = [...arguments];
	return function(u) {
		return e.reduceRight(function(e, u) {
			return u(e);
		}, u);
	};
};
function merge(e, u) {
	return Object.keys(u).forEach(function(d) {
		u[d] instanceof Object && e[d] && Object.assign(u[d], merge(e[d], u[d]));
	}), _objectSpread2(_objectSpread2({}, e), u);
}
var CANCELATION_MESSAGE = {
	type: "cancelation",
	msg: "operation is manually canceled"
};
function makeCancelable(e) {
	var u = !1, d = new Promise(function(d, f) {
		e.then(function(e) {
			return u ? f(CANCELATION_MESSAGE) : d(e);
		}), e.catch(f);
	});
	return d.cancel = function() {
		return u = !0;
	}, d;
}
var _excluded = ["monaco"], _state$create2 = _slicedToArray(state_local_default.create({
	config,
	isInitialized: !1,
	resolve: null,
	reject: null,
	monaco: null
}), 2), getState = _state$create2[0], setState = _state$create2[1];
function config$1(e) {
	var u = validators.config(e), d = u.monaco, f = _objectWithoutProperties(u, _excluded);
	setState(function(e) {
		return {
			config: merge(e.config, f),
			monaco: d
		};
	});
}
function init() {
	var e = getState(function(e) {
		return {
			monaco: e.monaco,
			isInitialized: e.isInitialized,
			resolve: e.resolve
		};
	});
	if (!e.isInitialized) {
		if (setState({ isInitialized: !0 }), e.monaco) return e.resolve(e.monaco), makeCancelable(wrapperPromise);
		if (window.monaco && window.monaco.editor) return storeMonacoInstance(window.monaco), e.resolve(window.monaco), makeCancelable(wrapperPromise);
		compose(injectScripts, getMonacoLoaderScript)(configureLoader);
	}
	return makeCancelable(wrapperPromise);
}
function injectScripts(e) {
	return document.body.appendChild(e);
}
function createScript(e) {
	var u = document.createElement("script");
	return e && (u.src = e), u;
}
function getMonacoLoaderScript(e) {
	var u = getState(function(e) {
		return {
			config: e.config,
			reject: e.reject
		};
	}), d = createScript(`${u.config.paths.vs}/loader.js`);
	return d.onload = function() {
		return e();
	}, d.onerror = u.reject, d;
}
function configureLoader() {
	var e = getState(function(e) {
		return {
			config: e.config,
			resolve: e.resolve,
			reject: e.reject
		};
	}), u = window.require;
	u.config(e.config), u(["vs/editor/editor.main"], function(u) {
		var d = u.m || u;
		storeMonacoInstance(d), e.resolve(d);
	}, function(u) {
		e.reject(u);
	});
}
function storeMonacoInstance(e) {
	getState().monaco || setState({ monaco: e });
}
function __getMonacoInstance() {
	return getState(function(e) {
		return e.monaco;
	});
}
var wrapperPromise = new Promise(function(e, u) {
	return setState({
		resolve: e,
		reject: u
	});
}), loader = {
	config: config$1,
	init,
	__getMonacoInstance
}, import_react = /* @__PURE__ */ __toESM(require_react(), 1), v = {
	wrapper: {
		display: "flex",
		position: "relative",
		textAlign: "initial"
	},
	fullWidth: { width: "100%" },
	hide: { display: "none" }
}, Y = { container: {
	display: "flex",
	height: "100%",
	width: "100%",
	justifyContent: "center",
	alignItems: "center"
} };
function Me({ children: e }) {
	return import_react.createElement("div", { style: Y.container }, e);
}
var $ = Me;
function Ee({ width: e, height: u, isEditorReady: d, loading: f, _ref: p, className: m, wrapperProps: g }) {
	return import_react.createElement("section", {
		style: {
			...v.wrapper,
			width: e,
			height: u
		},
		...g
	}, !d && import_react.createElement($, null, f), import_react.createElement("div", {
		ref: p,
		style: {
			...v.fullWidth,
			...!d && v.hide
		},
		className: m
	}));
}
var H = (0, import_react.memo)(Ee);
function Ce(e) {
	(0, import_react.useEffect)(e, []);
}
var k = Ce;
function he(e, u, d = !0) {
	let f = (0, import_react.useRef)(!0);
	(0, import_react.useEffect)(f.current || !d ? () => {
		f.current = !1;
	} : e, u);
}
var l = he;
function D() {}
function h(e, u, d, f) {
	return De(e, f) || be(e, u, d, f);
}
function De(e, u) {
	return e.editor.getModel(te(e, u));
}
function be(e, u, d, f) {
	return e.editor.createModel(u, d, f ? te(e, f) : void 0);
}
function te(e, u) {
	return e.Uri.parse(u);
}
function Oe({ original: e, modified: u, language: d, originalLanguage: f, modifiedLanguage: p, originalModelPath: m, modifiedModelPath: g, keepCurrentOriginalModel: y = !1, keepCurrentModifiedModel: b = !1, theme: x = "light", loading: S = "Loading...", options: C = {}, height: w = "100%", width: T = "100%", className: E, wrapperProps: O = {}, beforeMount: A = D, onMount: j = D }) {
	let [M, N] = (0, import_react.useState)(!1), [P, F] = (0, import_react.useState)(!0), I = (0, import_react.useRef)(null), L = (0, import_react.useRef)(null), R = (0, import_react.useRef)(null), z = (0, import_react.useRef)(j), B = (0, import_react.useRef)(A), V = (0, import_react.useRef)(!1);
	k(() => {
		let e = loader.init();
		return e.then((e) => (L.current = e) && F(!1)).catch((e) => e?.type !== "cancelation" && console.error("Monaco initialization: error:", e)), () => I.current ? G() : e.cancel();
	}), l(() => {
		if (I.current && L.current) {
			let u = I.current.getOriginalEditor(), p = h(L.current, e || "", f || d || "text", m || "");
			p !== u.getModel() && u.setModel(p);
		}
	}, [m], M), l(() => {
		if (I.current && L.current) {
			let e = I.current.getModifiedEditor(), f = h(L.current, u || "", p || d || "text", g || "");
			f !== e.getModel() && e.setModel(f);
		}
	}, [g], M), l(() => {
		let e = I.current.getModifiedEditor();
		e.getOption(L.current.editor.EditorOption.readOnly) ? e.setValue(u || "") : u !== e.getValue() && (e.executeEdits("", [{
			range: e.getModel().getFullModelRange(),
			text: u || "",
			forceMoveMarkers: !0
		}]), e.pushUndoStop());
	}, [u], M), l(() => {
		I.current?.getModel()?.original.setValue(e || "");
	}, [e], M), l(() => {
		let { original: e, modified: u } = I.current.getModel();
		L.current.editor.setModelLanguage(e, f || d || "text"), L.current.editor.setModelLanguage(u, p || d || "text");
	}, [
		d,
		f,
		p
	], M), l(() => {
		L.current?.editor.setTheme(x);
	}, [x], M), l(() => {
		I.current?.updateOptions(C);
	}, [C], M);
	let U = (0, import_react.useCallback)(() => {
		if (!L.current) return;
		B.current(L.current);
		let y = h(L.current, e || "", f || d || "text", m || ""), b = h(L.current, u || "", p || d || "text", g || "");
		I.current?.setModel({
			original: y,
			modified: b
		});
	}, [
		d,
		u,
		p,
		e,
		f,
		m,
		g
	]), W = (0, import_react.useCallback)(() => {
		!V.current && R.current && (I.current = L.current.editor.createDiffEditor(R.current, {
			automaticLayout: !0,
			...C
		}), U(), L.current?.editor.setTheme(x), N(!0), V.current = !0);
	}, [
		C,
		x,
		U
	]);
	(0, import_react.useEffect)(() => {
		M && z.current(I.current, L.current);
	}, [M]), (0, import_react.useEffect)(() => {
		!P && !M && W();
	}, [
		P,
		M,
		W
	]);
	function G() {
		let e = I.current?.getModel();
		y || e?.original?.dispose(), b || e?.modified?.dispose(), I.current?.dispose();
	}
	return import_react.createElement(H, {
		width: T,
		height: w,
		isEditorReady: M,
		loading: S,
		_ref: R,
		className: E,
		wrapperProps: O
	});
}
var we = (0, import_react.memo)(Oe);
function He(e) {
	let u = (0, import_react.useRef)();
	return (0, import_react.useEffect)(() => {
		u.current = e;
	}, [e]), u.current;
}
var se = He, _ = /* @__PURE__ */ new Map();
function Ve({ defaultValue: e, defaultLanguage: u, defaultPath: d, value: f, language: p, path: m, theme: g = "light", line: y, loading: b = "Loading...", options: x = {}, overrideServices: S = {}, saveViewState: C = !0, keepCurrentModel: w = !1, width: T = "100%", height: E = "100%", className: O, wrapperProps: A = {}, beforeMount: j = D, onMount: M = D, onChange: N, onValidate: P = D }) {
	let [F, I] = (0, import_react.useState)(!1), [L, R] = (0, import_react.useState)(!0), z = (0, import_react.useRef)(null), B = (0, import_react.useRef)(null), V = (0, import_react.useRef)(null), U = (0, import_react.useRef)(M), W = (0, import_react.useRef)(j), G = (0, import_react.useRef)(), K = (0, import_react.useRef)(f), q = se(m), J = (0, import_react.useRef)(!1), X = (0, import_react.useRef)(!1);
	k(() => {
		let e = loader.init();
		return e.then((e) => (z.current = e) && R(!1)).catch((e) => e?.type !== "cancelation" && console.error("Monaco initialization: error:", e)), () => B.current ? Q() : e.cancel();
	}), l(() => {
		let g = h(z.current, e || f || "", u || p || "", m || d || "");
		g !== B.current?.getModel() && (C && _.set(q, B.current?.saveViewState()), B.current?.setModel(g), C && B.current?.restoreViewState(_.get(m)));
	}, [m], F), l(() => {
		B.current?.updateOptions(x);
	}, [x], F), l(() => {
		!B.current || f === void 0 || (B.current.getOption(z.current.editor.EditorOption.readOnly) ? B.current.setValue(f) : f !== B.current.getValue() && (X.current = !0, B.current.executeEdits("", [{
			range: B.current.getModel().getFullModelRange(),
			text: f,
			forceMoveMarkers: !0
		}]), B.current.pushUndoStop(), X.current = !1));
	}, [f], F), l(() => {
		let e = B.current?.getModel();
		e && p && z.current?.editor.setModelLanguage(e, p);
	}, [p], F), l(() => {
		y !== void 0 && B.current?.revealLine(y);
	}, [y], F), l(() => {
		z.current?.editor.setTheme(g);
	}, [g], F);
	let Z = (0, import_react.useCallback)(() => {
		if (!(!V.current || !z.current) && !J.current) {
			W.current(z.current);
			let b = m || d, w = h(z.current, f || e || "", u || p || "", b || "");
			B.current = z.current?.editor.create(V.current, {
				model: w,
				automaticLayout: !0,
				...x
			}, S), C && B.current.restoreViewState(_.get(b)), z.current.editor.setTheme(g), y !== void 0 && B.current.revealLine(y), I(!0), J.current = !0;
		}
	}, [
		e,
		u,
		d,
		f,
		p,
		m,
		x,
		S,
		C,
		g,
		y
	]);
	(0, import_react.useEffect)(() => {
		F && U.current(B.current, z.current);
	}, [F]), (0, import_react.useEffect)(() => {
		!L && !F && Z();
	}, [
		L,
		F,
		Z
	]), K.current = f, (0, import_react.useEffect)(() => {
		F && N && (G.current?.dispose(), G.current = B.current?.onDidChangeModelContent((e) => {
			X.current || N(B.current.getValue(), e);
		}));
	}, [F, N]), (0, import_react.useEffect)(() => {
		if (F) {
			let e = z.current.editor.onDidChangeMarkers((e) => {
				let u = B.current.getModel()?.uri;
				if (u && e.find((e) => e.path === u.path)) {
					let e = z.current.editor.getModelMarkers({ resource: u });
					P?.(e);
				}
			});
			return () => {
				e?.dispose();
			};
		}
		return () => {};
	}, [F, P]);
	function Q() {
		G.current?.dispose(), w ? C && _.set(m, B.current.saveViewState()) : B.current.getModel()?.dispose(), B.current.dispose();
	}
	return import_react.createElement(H, {
		width: T,
		height: E,
		isEditorReady: F,
		loading: b,
		_ref: V,
		className: O,
		wrapperProps: A
	});
}
var Ft = (0, import_react.memo)(Ve);
function WorkerWrapper(e) {
	return new Worker("" + new URL("editor.worker-BmUpMlnH.js", import.meta.url).href, {
		type: "module",
		name: e?.name
	});
}
function WorkerWrapper$1(e) {
	return new Worker("" + new URL("json.worker-8s-oaqZ8.js", import.meta.url).href, {
		type: "module",
		name: e?.name
	});
}
function WorkerWrapper$2(e) {
	return new Worker("" + new URL("css.worker-Bbs1Tfh2.js", import.meta.url).href, {
		type: "module",
		name: e?.name
	});
}
function WorkerWrapper$3(e) {
	return new Worker("" + new URL("html.worker-Q365HQNc.js", import.meta.url).href, {
		type: "module",
		name: e?.name
	});
}
function WorkerWrapper$4(e) {
	return new Worker("" + new URL("ts.worker-BBX9x8NL.js", import.meta.url).href, {
		type: "module",
		name: e?.name
	});
}
const MAX_TOKENIZATION_LINE_LENGTH = 2e4;
var restOfLineWithinBudget = "(?!.{513})";
const restOfLineWithinEmbedBudget = new RegExp(restOfLineWithinBudget), tagCloseWithinEmbedBudget = /* @__PURE__ */ RegExp(`>${restOfLineWithinBudget}`), astroMonarchLanguage = {
	defaultToken: "",
	tokenPostfix: ".astro",
	ignoreCase: !0,
	brackets: [
		{
			open: "{",
			close: "}",
			token: "delimiter.curly"
		},
		{
			open: "[",
			close: "]",
			token: "delimiter.square"
		},
		{
			open: "(",
			close: ")",
			token: "delimiter.parenthesis"
		},
		{
			open: "<",
			close: ">",
			token: "delimiter.angle"
		}
	],
	tokenizer: {
		root: [[/---\s*$/, {
			token: "keyword",
			switchTo: "@frontmatter",
			nextEmbedded: "typescript"
		}], [/(?=.)/, {
			token: "@rematch",
			switchTo: "@markupReenter"
		}]],
		frontmatter: [[/^---\s*$/, {
			token: "keyword",
			switchTo: "@markupReenter",
			nextEmbedded: "@pop"
		}]],
		markup: [
			[/<script(?=\s|>)/, {
				token: "tag",
				switchTo: "@scriptOpen.javascript",
				nextEmbedded: "@pop"
			}],
			[/<style(?=\s|>)/, {
				token: "tag",
				switchTo: "@styleOpen.css",
				nextEmbedded: "@pop"
			}],
			[/<!--/, {
				token: "comment",
				switchTo: "@comment",
				nextEmbedded: "@pop"
			}],
			[/\{/, {
				token: "delimiter.curly",
				switchTo: "@astroExpressionEnter",
				nextEmbedded: "@pop"
			}]
		],
		markupReenter: [[restOfLineWithinEmbedBudget, {
			token: "@rematch",
			switchTo: "@markup",
			nextEmbedded: "html"
		}], [/(?=.)/, {
			token: "@rematch",
			switchTo: "@markupPlain"
		}]],
		markupPlain: [
			[/<script(?=\s|>)/, {
				token: "tag",
				switchTo: "@scriptOpen.javascript"
			}],
			[/<style(?=\s|>)/, {
				token: "tag",
				switchTo: "@styleOpen.css"
			}],
			[/<!--/, {
				token: "comment",
				switchTo: "@comment"
			}],
			[/\{/, {
				token: "delimiter.curly",
				switchTo: "@astroExpressionEnter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@markup",
				nextEmbedded: "html"
			}],
			[/<\/?[A-Za-z][^>]*>/, "tag"],
			[/[^<{]+/, ""],
			[/./, ""]
		],
		comment: [
			[/-->/, {
				token: "comment",
				switchTo: "@markupReenter"
			}],
			[/[^-]+/, "comment"],
			[/./, "comment"]
		],
		astroExpressionEnter: [
			[/\}/, {
				token: "delimiter.curly",
				switchTo: "@markupReenter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@astroExpression",
				nextEmbedded: "typescript"
			}],
			[/(?=.)/, {
				token: "@rematch",
				switchTo: "@astroExpressionPlain"
			}]
		],
		astroExpression: [[/\}/, {
			token: "delimiter.curly",
			switchTo: "@markupReenter",
			nextEmbedded: "@pop"
		}]],
		astroExpressionPlain: [[/\}/, {
			token: "delimiter.curly",
			switchTo: "@markupReenter"
		}], [/[^}]+/, ""]],
		scriptOpen: [
			[/\/>/, {
				token: "tag",
				switchTo: "@markupReenter"
			}],
			[tagCloseWithinEmbedBudget, {
				token: "tag",
				switchTo: "@scriptBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/>/, {
				token: "tag",
				switchTo: "@scriptBodyPlain.$S2"
			}],
			[/lang(?=\s*=)/, {
				token: "attribute.name",
				switchTo: "@scriptLangBeforeEquals.$S2"
			}],
			{ include: "@tagAttributes" }
		],
		scriptLangBeforeEquals: [
			[/=/, {
				token: "delimiter",
				switchTo: "@scriptLangValue.$S2"
			}],
			[/\s+/, "white"],
			[/(?=.)/, {
				token: "",
				switchTo: "@scriptOpen.$S2"
			}]
		],
		scriptLangValue: [
			[/"(?:js|javascript)"/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.javascript"
			}],
			[/'(?:js|javascript)'/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.javascript"
			}],
			[/(?:js|javascript)(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.javascript"
			}],
			[/"(?:ts|typescript)"/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.typescript"
			}],
			[/'(?:ts|typescript)'/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.typescript"
			}],
			[/(?:ts|typescript)(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.typescript"
			}],
			[/[^\s/>]+/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.$S2"
			}],
			[/"[^"]*"/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.$S2"
			}],
			[/'[^']*'/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.$S2"
			}],
			[/\s+/, "white"]
		],
		scriptBody: [[/<\/script\s*>/, {
			token: "tag",
			switchTo: "@markupReenter",
			nextEmbedded: "@pop"
		}]],
		scriptBodyPlain: [
			[/<\/script\s*>/, {
				token: "tag",
				switchTo: "@markupReenter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@scriptBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/[^<]+/, ""],
			[/./, ""]
		],
		styleOpen: [
			[/\/>/, {
				token: "tag",
				switchTo: "@markupReenter"
			}],
			[tagCloseWithinEmbedBudget, {
				token: "tag",
				switchTo: "@styleBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/>/, {
				token: "tag",
				switchTo: "@styleBodyPlain.$S2"
			}],
			[/lang(?=\s*=)/, {
				token: "attribute.name",
				switchTo: "@styleLangBeforeEquals.$S2"
			}],
			{ include: "@tagAttributes" }
		],
		styleLangBeforeEquals: [
			[/=/, {
				token: "delimiter",
				switchTo: "@styleLangValue.$S2"
			}],
			[/\s+/, "white"],
			[/(?=.)/, {
				token: "",
				switchTo: "@styleOpen.$S2"
			}]
		],
		styleLangValue: [
			[/"scss"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/'scss'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/scss(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/"sass"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/'sass'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/sass(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/"less"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.less"
			}],
			[/'less'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.less"
			}],
			[/less(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.less"
			}],
			[/"css"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.css"
			}],
			[/'css'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.css"
			}],
			[/css(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.css"
			}],
			[/[^\s/>]+/, {
				token: "attribute.value",
				switchTo: "@styleOpen.$S2"
			}],
			[/"[^"]*"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.$S2"
			}],
			[/'[^']*'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.$S2"
			}],
			[/\s+/, "white"]
		],
		styleBody: [[/<\/style\s*>/, {
			token: "tag",
			switchTo: "@markupReenter",
			nextEmbedded: "@pop"
		}]],
		styleBodyPlain: [
			[/<\/style\s*>/, {
				token: "tag",
				switchTo: "@markupReenter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@styleBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/[^<]+/, ""],
			[/./, ""]
		],
		tagAttributes: [
			[/[^\s/>=]+/, "attribute.name"],
			[/=/, "delimiter"],
			[/"[^"]*"/, "attribute.value"],
			[/'[^']*'/, "attribute.value"],
			[/\s+/, "white"]
		]
	}
}, astroLanguageConfiguration = {
	comments: { blockComment: ["<!--", "-->"] },
	brackets: [
		["{", "}"],
		["[", "]"],
		["(", ")"],
		["<", ">"]
	],
	autoClosingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "(",
			close: ")"
		},
		{
			open: "\"",
			close: "\""
		},
		{
			open: "'",
			close: "'"
		},
		{
			open: "`",
			close: "`"
		},
		{
			open: "<",
			close: ">"
		}
	],
	surroundingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "(",
			close: ")"
		},
		{
			open: "\"",
			close: "\""
		},
		{
			open: "'",
			close: "'"
		},
		{
			open: "`",
			close: "`"
		},
		{
			open: "<",
			close: ">"
		}
	]
};
function registerAstroLanguage(e) {
	e.languages.getLanguages().some((e) => e.id === "astro") || (e.languages.register({
		id: "astro",
		extensions: [".astro"],
		aliases: ["Astro"]
	}), e.languages.setMonarchTokensProvider("astro", astroMonarchLanguage), e.languages.setLanguageConfiguration("astro", astroLanguageConfiguration));
}
const JSONL_LANGUAGE_ID = "jsonl", jsonlLanguageConfiguration = {
	brackets: [["{", "}"], ["[", "]"]],
	autoClosingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "\"",
			close: "\""
		}
	],
	surroundingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "\"",
			close: "\""
		}
	]
}, jsonlMonarchLanguage = {
	defaultToken: "",
	tokenPostfix: ".jsonl",
	tokenizer: {
		root: [
			{ include: "@whitespace" },
			[/"(?:[^"\\]|\\.)*"(?=\s*:)/, "type.identifier"],
			[
				/"(?=(?:[^"\\]|\\.)*")/,
				"string",
				"@string"
			],
			[/"(?:[^"\\]|\\.)*\\?$/, "string.invalid"],
			[/[{}[\]]/, "@brackets"],
			[/-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/, "number"],
			[/\b(?:true|false)\b/, "keyword"],
			[/\bnull\b/, "keyword"],
			[/[:,]/, "delimiter"]
		],
		whitespace: [[/[ \t\r\n]+/, "white"]],
		string: [
			[/[^"\\]+/, "string"],
			[/\\(?:["\\/bfnrt]|u[0-9A-Fa-f]{4})/, "string.escape"],
			[/\\./, "string.escape.invalid"],
			[
				/"/,
				"string",
				"@pop"
			]
		]
	}
};
function registerJsonlLanguage(e) {
	e.languages.getLanguages().some((e) => e.id === "jsonl") || (e.languages.register({
		id: JSONL_LANGUAGE_ID,
		extensions: [".jsonl"],
		aliases: [
			"JSON Lines",
			"jsonl",
			"ndjson"
		]
	}), e.languages.setLanguageConfiguration(JSONL_LANGUAGE_ID, jsonlLanguageConfiguration), e.languages.setMonarchTokensProvider(JSONL_LANGUAGE_ID, jsonlMonarchLanguage));
}
function loadDefaultProviderModule() {
	return import("./textmate-token-provider-BiBKP3VI.js");
}
function registerTextMateLanguage(e, u) {
	if (e.languages.getLanguages().some((e) => e.id === u.language.id)) return;
	e.languages.register(u.language), u.configuration && e.languages.setLanguageConfiguration(u.language.id, u.configuration);
	let d;
	e.languages.registerTokensProviderFactory(u.language.id, { create: () => (d ??= (u.loadProviderModule ?? loadDefaultProviderModule)().then(({ createTextMateTokensProvider: e }) => e({
		scopeName: u.scopeName,
		loadGrammar: u.loadGrammar
	})), d) });
}
const nimLanguageConfiguration = {
	comments: {
		lineComment: "#",
		blockComment: ["#[", "]#"]
	},
	brackets: [
		["{", "}"],
		["[", "]"],
		["(", ")"]
	],
	autoClosingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "(",
			close: ")"
		},
		{
			open: "\"",
			close: "\""
		},
		{
			open: "'",
			close: "'"
		}
	],
	surroundingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "(",
			close: ")"
		},
		{
			open: "\"",
			close: "\""
		},
		{
			open: "'",
			close: "'"
		}
	]
};
async function loadNimTextMateGrammar(e) {
	return e === "source.nim" ? (await import("./nim.tmLanguage-5gCUjY7W.js")).default : null;
}
function registerNimLanguage(e) {
	registerTextMateLanguage(e, {
		language: {
			id: "nim",
			extensions: [
				".nim",
				".nims",
				".nimble"
			],
			aliases: ["Nim", "nim"]
		},
		configuration: nimLanguageConfiguration,
		scopeName: "source.nim",
		loadGrammar: loadNimTextMateGrammar
	});
}
function registerShellMarkdownAliases(e) {
	e.languages.getLanguages().some(({ id: e, aliases: u }) => e === "shell" && u?.some((e) => e.toLowerCase() === "bash")) || e.languages.register({
		id: "shell",
		aliases: [
			"Shell",
			"sh",
			"bash"
		]
	});
}
const svelteMonarchLanguage = {
	defaultToken: "",
	tokenPostfix: ".svelte",
	ignoreCase: !0,
	brackets: [
		{
			open: "{",
			close: "}",
			token: "delimiter.curly"
		},
		{
			open: "[",
			close: "]",
			token: "delimiter.square"
		},
		{
			open: "(",
			close: ")",
			token: "delimiter.parenthesis"
		},
		{
			open: "<",
			close: ">",
			token: "delimiter.angle"
		}
	],
	tokenizer: {
		root: [
			[/<script(?=\s|>)/, {
				token: "tag",
				switchTo: "@scriptOpen.typescript"
			}],
			[/<style(?=\s|>)/, {
				token: "tag",
				switchTo: "@styleOpen.css"
			}],
			[/<!--/, {
				token: "comment",
				switchTo: "@comment"
			}],
			[/\{\s*\/(if|each|await|key|snippet)\s*\}/, "keyword.control"],
			[/\{\s*#(if|each|await|key|snippet)\b/, {
				token: "keyword.control",
				switchTo: "@svelteBlockExpressionEnter"
			}],
			[/\{\s*:(else|then|catch)\b/, {
				token: "keyword.control",
				switchTo: "@svelteBlockExpressionEnter"
			}],
			[/\{\s*@(html|debug|const|render)\b/, {
				token: "keyword.control",
				switchTo: "@svelteExpressionEnter"
			}],
			[/\{(?=[^#:/@])/, {
				token: "delimiter.curly",
				switchTo: "@svelteExpressionEnter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@markup",
				nextEmbedded: "html"
			}],
			[/<\/?[A-Za-z][^>]*>/, "tag"],
			[/[^<{]+/, ""],
			[/./, ""]
		],
		markup: [
			[/<script(?=\s|>)/, {
				token: "tag",
				switchTo: "@scriptOpen.typescript",
				nextEmbedded: "@pop"
			}],
			[/<style(?=\s|>)/, {
				token: "tag",
				switchTo: "@styleOpen.css",
				nextEmbedded: "@pop"
			}],
			[/<!--/, {
				token: "comment",
				switchTo: "@comment",
				nextEmbedded: "@pop"
			}],
			[/\{\s*\/(if|each|await|key|snippet)\s*\}/, "keyword.control"],
			[/\{\s*#(if|each|await|key|snippet)\b/, {
				token: "keyword.control",
				switchTo: "@svelteBlockExpressionEnter",
				nextEmbedded: "@pop"
			}],
			[/\{\s*:(else|then|catch)\b/, {
				token: "keyword.control",
				switchTo: "@svelteBlockExpressionEnter",
				nextEmbedded: "@pop"
			}],
			[/\{\s*@(html|debug|const|render)\b/, {
				token: "keyword.control",
				switchTo: "@svelteExpressionEnter",
				nextEmbedded: "@pop"
			}],
			[/\{(?=[^#:/@])/, {
				token: "delimiter.curly",
				switchTo: "@svelteExpressionEnter",
				nextEmbedded: "@pop"
			}]
		],
		markupReenter: [[restOfLineWithinEmbedBudget, {
			token: "@rematch",
			switchTo: "@markup",
			nextEmbedded: "html"
		}], [/(?=.)/, {
			token: "@rematch",
			switchTo: "@root"
		}]],
		comment: [
			[/-->/, {
				token: "comment",
				switchTo: "@markupReenter"
			}],
			[/[^-]+/, "comment"],
			[/./, "comment"]
		],
		svelteExpressionEnter: [
			[/\}/, {
				token: "delimiter.curly",
				switchTo: "@markupReenter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@svelteExpression",
				nextEmbedded: "typescript"
			}],
			[/(?=.)/, {
				token: "@rematch",
				switchTo: "@svelteExpressionPlain"
			}]
		],
		svelteExpression: [[/\}/, {
			token: "delimiter.curly",
			switchTo: "@markupReenter",
			nextEmbedded: "@pop"
		}]],
		svelteExpressionPlain: [[/\}/, {
			token: "delimiter.curly",
			switchTo: "@markupReenter"
		}], [/[^}]+/, ""]],
		svelteBlockExpressionEnter: [
			[/\}/, {
				token: "keyword.control",
				switchTo: "@markupReenter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@svelteBlockExpression",
				nextEmbedded: "typescript"
			}],
			[/(?=.)/, {
				token: "@rematch",
				switchTo: "@svelteBlockExpressionPlain"
			}]
		],
		svelteBlockExpression: [[/\}/, {
			token: "keyword.control",
			switchTo: "@markupReenter",
			nextEmbedded: "@pop"
		}]],
		svelteBlockExpressionPlain: [[/\}/, {
			token: "keyword.control",
			switchTo: "@markupReenter"
		}], [/[^}]+/, ""]],
		scriptOpen: [
			[/\/>/, {
				token: "tag",
				switchTo: "@markupReenter"
			}],
			[tagCloseWithinEmbedBudget, {
				token: "tag",
				switchTo: "@scriptBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/>/, {
				token: "tag",
				switchTo: "@scriptBodyPlain.$S2"
			}],
			[/lang(?=\s*=)/, {
				token: "attribute.name",
				switchTo: "@scriptLangBeforeEquals.$S2"
			}],
			{ include: "@tagAttributes" }
		],
		scriptLangBeforeEquals: [
			[/=/, {
				token: "delimiter",
				switchTo: "@scriptLangValue.$S2"
			}],
			[/\s+/, "white"],
			[/(?=.)/, {
				token: "",
				switchTo: "@scriptOpen.$S2"
			}]
		],
		scriptLangValue: [
			[/"(?:js|javascript)"/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.javascript"
			}],
			[/'(?:js|javascript)'/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.javascript"
			}],
			[/(?:js|javascript)(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.javascript"
			}],
			[/"(?:ts|typescript)"/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.typescript"
			}],
			[/'(?:ts|typescript)'/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.typescript"
			}],
			[/(?:ts|typescript)(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.typescript"
			}],
			[/[^\s/>]+/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.$S2"
			}],
			[/"[^"]*"/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.$S2"
			}],
			[/'[^']*'/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.$S2"
			}],
			[/\s+/, "white"]
		],
		scriptBody: [[/<\/script\s*>/, {
			token: "tag",
			switchTo: "@markupReenter",
			nextEmbedded: "@pop"
		}]],
		scriptBodyPlain: [
			[/<\/script\s*>/, {
				token: "tag",
				switchTo: "@markupReenter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@scriptBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/[^<]+/, ""],
			[/./, ""]
		],
		styleOpen: [
			[/\/>/, {
				token: "tag",
				switchTo: "@markupReenter"
			}],
			[tagCloseWithinEmbedBudget, {
				token: "tag",
				switchTo: "@styleBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/>/, {
				token: "tag",
				switchTo: "@styleBodyPlain.$S2"
			}],
			[/lang(?=\s*=)/, {
				token: "attribute.name",
				switchTo: "@styleLangBeforeEquals.$S2"
			}],
			{ include: "@tagAttributes" }
		],
		styleLangBeforeEquals: [
			[/=/, {
				token: "delimiter",
				switchTo: "@styleLangValue.$S2"
			}],
			[/\s+/, "white"],
			[/(?=.)/, {
				token: "",
				switchTo: "@styleOpen.$S2"
			}]
		],
		styleLangValue: [
			[/"scss"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/'scss'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/scss(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/"sass"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/'sass'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/sass(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/"less"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.less"
			}],
			[/'less'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.less"
			}],
			[/less(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.less"
			}],
			[/"css"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.css"
			}],
			[/'css'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.css"
			}],
			[/css(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.css"
			}],
			[/[^\s/>]+/, {
				token: "attribute.value",
				switchTo: "@styleOpen.$S2"
			}],
			[/"[^"]*"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.$S2"
			}],
			[/'[^']*'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.$S2"
			}],
			[/\s+/, "white"]
		],
		styleBody: [[/<\/style\s*>/, {
			token: "tag",
			switchTo: "@markupReenter",
			nextEmbedded: "@pop"
		}]],
		styleBodyPlain: [
			[/<\/style\s*>/, {
				token: "tag",
				switchTo: "@markupReenter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@styleBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/[^<]+/, ""],
			[/./, ""]
		],
		tagAttributes: [
			[/[^\s/>=]+/, "attribute.name"],
			[/=/, "delimiter"],
			[/"[^"]*"/, "attribute.value"],
			[/'[^']*'/, "attribute.value"],
			[/\s+/, "white"]
		]
	}
}, svelteLanguageConfiguration = {
	comments: { blockComment: ["<!--", "-->"] },
	brackets: [
		["{", "}"],
		["[", "]"],
		["(", ")"],
		["<", ">"]
	],
	autoClosingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "(",
			close: ")"
		},
		{
			open: "\"",
			close: "\""
		},
		{
			open: "'",
			close: "'"
		},
		{
			open: "`",
			close: "`"
		},
		{
			open: "<",
			close: ">"
		}
	],
	surroundingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "(",
			close: ")"
		},
		{
			open: "\"",
			close: "\""
		},
		{
			open: "'",
			close: "'"
		},
		{
			open: "`",
			close: "`"
		},
		{
			open: "<",
			close: ">"
		}
	]
};
function registerSvelteLanguage(e) {
	e.languages.getLanguages().some((e) => e.id === "svelte") || (e.languages.register({
		id: "svelte",
		extensions: [".svelte"],
		aliases: ["Svelte"]
	}), e.languages.setMonarchTokensProvider("svelte", svelteMonarchLanguage), e.languages.setLanguageConfiguration("svelte", svelteLanguageConfiguration));
}
const vueMonarchLanguage = {
	defaultToken: "",
	tokenPostfix: ".vue",
	ignoreCase: !0,
	brackets: [
		{
			open: "{",
			close: "}",
			token: "delimiter.curly"
		},
		{
			open: "[",
			close: "]",
			token: "delimiter.square"
		},
		{
			open: "(",
			close: ")",
			token: "delimiter.parenthesis"
		},
		{
			open: "<",
			close: ">",
			token: "delimiter.angle"
		}
	],
	tokenizer: {
		root: [
			[
				/<template(?=\s|>)/,
				"tag",
				"@templateOpen"
			],
			[
				/<script(?=\s|>)/,
				"tag",
				"@scriptOpen.typescript"
			],
			[
				/<style(?=\s|>)/,
				"tag",
				"@styleOpen.css"
			],
			[
				/<!--/,
				"comment",
				"@comment"
			],
			[/<\/?[A-Za-z][^>]*>/, "tag"],
			[/[^<]+/, ""]
		],
		comment: [
			[
				/-->/,
				"comment",
				"@pop"
			],
			[/[^-]+/, "comment"],
			[/./, "comment"]
		],
		templateOpen: [
			[
				/\/>/,
				"tag",
				"@pop"
			],
			[tagCloseWithinEmbedBudget, {
				token: "tag",
				switchTo: "@templateBody",
				nextEmbedded: "html"
			}],
			[/>/, {
				token: "tag",
				switchTo: "@templateBodyPlain"
			}],
			{ include: "@tagAttributes" }
		],
		templateBody: [[/\{\{/, {
			token: "delimiter.curly",
			switchTo: "@templateExpressionEnter",
			nextEmbedded: "@pop"
		}], [/<\/template\s*>/, {
			token: "tag",
			next: "@pop",
			nextEmbedded: "@pop"
		}]],
		templateBodyReenter: [[restOfLineWithinEmbedBudget, {
			token: "@rematch",
			switchTo: "@templateBody",
			nextEmbedded: "html"
		}], [/(?=.)/, {
			token: "@rematch",
			switchTo: "@templateBodyPlain"
		}]],
		templateBodyPlain: [
			[/\{\{/, {
				token: "delimiter.curly",
				switchTo: "@templateExpressionEnter"
			}],
			[/<\/template\s*>/, {
				token: "tag",
				next: "@pop"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@templateBody",
				nextEmbedded: "html"
			}],
			[/<\/?[A-Za-z][^>]*>/, "tag"],
			[/[^<{]+/, ""],
			[/./, ""]
		],
		templateExpressionEnter: [
			[/\}\}/, {
				token: "delimiter.curly",
				switchTo: "@templateBodyReenter"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@templateExpression",
				nextEmbedded: "typescript"
			}],
			[/(?=.)/, {
				token: "@rematch",
				switchTo: "@templateExpressionPlain"
			}]
		],
		templateExpression: [[/\}\}/, {
			token: "delimiter.curly",
			switchTo: "@templateBodyReenter",
			nextEmbedded: "@pop"
		}]],
		templateExpressionPlain: [
			[/\}\}/, {
				token: "delimiter.curly",
				switchTo: "@templateBodyReenter"
			}],
			[/[^}]+/, ""],
			[/./, ""]
		],
		scriptOpen: [
			[
				/\/>/,
				"tag",
				"@pop"
			],
			[tagCloseWithinEmbedBudget, {
				token: "tag",
				switchTo: "@scriptBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/>/, {
				token: "tag",
				switchTo: "@scriptBodyPlain.$S2"
			}],
			[/lang(?=\s*=)/, {
				token: "attribute.name",
				switchTo: "@scriptLangBeforeEquals.$S2"
			}],
			{ include: "@tagAttributes" }
		],
		scriptLangBeforeEquals: [
			[/=/, {
				token: "delimiter",
				switchTo: "@scriptLangValue.$S2"
			}],
			[/\s+/, "white"],
			[/(?=.)/, {
				token: "",
				switchTo: "@scriptOpen.$S2"
			}]
		],
		scriptLangValue: [
			[/"(?:js|javascript)"/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.javascript"
			}],
			[/'(?:js|javascript)'/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.javascript"
			}],
			[/(?:js|javascript)(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.javascript"
			}],
			[/"(?:ts|typescript)"/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.typescript"
			}],
			[/'(?:ts|typescript)'/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.typescript"
			}],
			[/(?:ts|typescript)(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.typescript"
			}],
			[/[^\s/>]+/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.$S2"
			}],
			[/"[^"]*"/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.$S2"
			}],
			[/'[^']*'/, {
				token: "attribute.value",
				switchTo: "@scriptOpen.$S2"
			}],
			[/\s+/, "white"]
		],
		scriptBody: [[/<\/script\s*>/, {
			token: "tag",
			next: "@pop",
			nextEmbedded: "@pop"
		}]],
		scriptBodyPlain: [
			[/<\/script\s*>/, {
				token: "tag",
				next: "@pop"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@scriptBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/[^<]+/, ""],
			[/./, ""]
		],
		styleOpen: [
			[
				/\/>/,
				"tag",
				"@pop"
			],
			[tagCloseWithinEmbedBudget, {
				token: "tag",
				switchTo: "@styleBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/>/, {
				token: "tag",
				switchTo: "@styleBodyPlain.$S2"
			}],
			[/lang(?=\s*=)/, {
				token: "attribute.name",
				switchTo: "@styleLangBeforeEquals.$S2"
			}],
			{ include: "@tagAttributes" }
		],
		styleLangBeforeEquals: [
			[/=/, {
				token: "delimiter",
				switchTo: "@styleLangValue.$S2"
			}],
			[/\s+/, "white"],
			[/(?=.)/, {
				token: "",
				switchTo: "@styleOpen.$S2"
			}]
		],
		styleLangValue: [
			[/"scss"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/'scss'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/scss(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/"sass"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/'sass'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/sass(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.scss"
			}],
			[/"less"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.less"
			}],
			[/'less'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.less"
			}],
			[/less(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.less"
			}],
			[/"css"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.css"
			}],
			[/'css'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.css"
			}],
			[/css(?=\s|\/|>|$)/, {
				token: "attribute.value",
				switchTo: "@styleOpen.css"
			}],
			[/[^\s/>]+/, {
				token: "attribute.value",
				switchTo: "@styleOpen.$S2"
			}],
			[/"[^"]*"/, {
				token: "attribute.value",
				switchTo: "@styleOpen.$S2"
			}],
			[/'[^']*'/, {
				token: "attribute.value",
				switchTo: "@styleOpen.$S2"
			}],
			[/\s+/, "white"]
		],
		styleBody: [[/<\/style\s*>/, {
			token: "tag",
			next: "@pop",
			nextEmbedded: "@pop"
		}]],
		styleBodyPlain: [
			[/<\/style\s*>/, {
				token: "tag",
				next: "@pop"
			}],
			[restOfLineWithinEmbedBudget, {
				token: "@rematch",
				switchTo: "@styleBody.$S2",
				nextEmbedded: "$S2"
			}],
			[/[^<]+/, ""],
			[/./, ""]
		],
		tagAttributes: [
			[/[^\s/>=]+/, "attribute.name"],
			[/=/, "delimiter"],
			[/"[^"]*"/, "attribute.value"],
			[/'[^']*'/, "attribute.value"],
			[/\s+/, "white"]
		]
	}
}, vueLanguageConfiguration = {
	comments: { blockComment: ["<!--", "-->"] },
	brackets: [
		["{", "}"],
		["[", "]"],
		["(", ")"],
		["<", ">"]
	],
	autoClosingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "(",
			close: ")"
		},
		{
			open: "\"",
			close: "\""
		},
		{
			open: "'",
			close: "'"
		},
		{
			open: "`",
			close: "`"
		},
		{
			open: "<",
			close: ">"
		}
	],
	surroundingPairs: [
		{
			open: "{",
			close: "}"
		},
		{
			open: "[",
			close: "]"
		},
		{
			open: "(",
			close: ")"
		},
		{
			open: "\"",
			close: "\""
		},
		{
			open: "'",
			close: "'"
		},
		{
			open: "`",
			close: "`"
		},
		{
			open: "<",
			close: ">"
		}
	]
};
function registerVueLanguage(e) {
	e.languages.getLanguages().some((e) => e.id === "vue") || (e.languages.register({
		id: "vue",
		extensions: [".vue"],
		aliases: ["Vue"]
	}), e.languages.setMonarchTokensProvider("vue", vueMonarchLanguage), e.languages.setLanguageConfiguration("vue", vueLanguageConfiguration));
}
var MONACO_CANCELLATION_NAME = "Canceled";
function isMonacoCancellationError(e) {
	return e instanceof Error && e.name === MONACO_CANCELLATION_NAME && e.message === MONACO_CANCELLATION_NAME;
}
function installMonacoDelayerCancellationGuard() {
	let e = Delayer.prototype;
	if (e.__orcaDelayerCancellationGuardInstalled) return;
	let u = e.cancel;
	e.cancel = function() {
		let e = this.completionPromise;
		e && e.catch((e) => {
			if (!isMonacoCancellationError(e)) throw e;
		}), u.call(this);
	}, e.__orcaDelayerCancellationGuardInstalled = !0;
}
function reportMonacoDiffDisposeError(e) {
	console.warn("[monaco] Diff editor disposal threw after teardown was requested", e);
}
function guardMonacoDiffEditorDispose(e, u = reportMonacoDiffDisposeError) {
	let d = e;
	if (d.__orcaDiffEditorDisposeGuardInstalled) return e;
	let f = e.dispose.bind(e), p = !1;
	return d.dispose = () => {
		if (!p) {
			p = !0;
			try {
				f();
			} catch (e) {
				u(e);
			}
		}
	}, d.__orcaDiffEditorDisposeGuardInstalled = !0, e;
}
function installMonacoDiffEditorDisposalGuard(e, u) {
	let d = e.editor;
	if (d.__orcaDiffEditorFactoryGuardInstalled) return;
	let f = d.createDiffEditor.bind(d);
	d.createDiffEditor = ((...e) => guardMonacoDiffEditorDispose(f(...e), u)), d.__orcaDiffEditorFactoryGuardInstalled = !0;
}
var PEEK_REFERENCES_PREVIEW_OPTIONS = {
	smoothScrolling: !1,
	stickyScroll: { enabled: !1 },
	wordWrap: "off"
};
function applyPeekReferencesPreviewOptions(e) {
	e?.updateOptions(PEEK_REFERENCES_PREVIEW_OPTIONS);
}
function installMonacoPeekReferencesPreviewOptions(e = ReferenceWidget) {
	let u = e.prototype;
	if (u.__orcaPeekPreviewOptionsInstalled) return;
	let d = u._fillBody, f = u._revealReference;
	typeof d != "function" || typeof f != "function" || (u._fillBody = function(e) {
		d.call(this, e), applyPeekReferencesPreviewOptions(this._preview);
	}, u._revealReference = async function(...e) {
		applyPeekReferencesPreviewOptions(this._preview);
		try {
			return await f.apply(this, e);
		} finally {
			applyPeekReferencesPreviewOptions(this._preview);
		}
	}, u.__orcaPeekPreviewOptionsInstalled = !0);
}
function getPlainTextFromPasteEvent(e) {
	return e.clipboardData?.getData("text/plain") ?? "";
}
function getEndPositionAfterInsert(e, u) {
	let d = e.lineNumber, f = e.column;
	for (let e = 0; e < u.length; e += 1) {
		let p = u.charCodeAt(e);
		if (p === 13) {
			d += 1, f = 1, u.charCodeAt(e + 1) === 10 && (e += 1);
			continue;
		}
		if (p === 10) {
			d += 1, f = 1;
			continue;
		}
		f += 1;
	}
	return {
		lineNumber: d,
		column: f
	};
}
function snapshotMonacoPasteTarget(e) {
	let u = e.getModel(), d = e.getContainerDomNode();
	return !u || !d.isConnected || !e.hasTextFocus() ? null : {
		container: d,
		model: u
	};
}
function isMonacoPasteTargetCurrent(e, u) {
	return e.getModel() === u.model && e.getContainerDomNode() === u.container && u.container.isConnected && e.hasTextFocus();
}
function setCollapsedSelection(e, u) {
	e.setSelection({
		startLineNumber: u.lineNumber,
		startColumn: u.column,
		endLineNumber: u.lineNumber,
		endColumn: u.column
	});
}
async function insertMonacoTextInChunks(e, u, d, m) {
	let g = snapshotMonacoPasteTarget(e);
	if (!g) return {
		status: "rejected",
		reason: "target-unavailable",
		byteLength: d,
		chunksWritten: 0
	};
	let y = Math.max(1, m.chunkMaxBytes ?? 16384), b = 0, x = 0;
	for (e.pushUndoStop(); b < u.length;) {
		if (!isMonacoPasteTargetCurrent(e, g)) return e.pushUndoStop(), {
			status: "cancelled",
			reason: "target-unavailable",
			byteLength: d,
			chunksWritten: x
		};
		let S = e.getSelection();
		if (!S) return e.pushUndoStop(), {
			status: "cancelled",
			reason: "target-unavailable",
			byteLength: d,
			chunksWritten: x
		};
		let C = getUtf8ChunkEndIndex(u, b, y), w = u.slice(b, C), T = getEndPositionAfterInsert({
			lineNumber: S.startLineNumber,
			column: S.startColumn
		}, w);
		if (!e.executeEdits("orca-large-paste", [{
			range: S,
			text: w,
			forceMoveMarkers: !0
		}])) return e.pushUndoStop(), {
			status: "cancelled",
			reason: "target-unavailable",
			byteLength: d,
			chunksWritten: x
		};
		setCollapsedSelection(e, T), b = C, x += 1, b < u.length && await (m.yieldToEventLoop ?? yieldToEventLoop)();
	}
	return e.pushUndoStop(), {
		status: "pasted",
		mode: "chunked",
		byteLength: d,
		chunksWritten: x
	};
}
async function executeMonacoLargeTextPaste(e, u, d) {
	let f = await measureTextControlPasteByteLengthWithYield(u, {
		stopAfterBytes: d.maxBytes ?? 16777216,
		yieldAfterCodeUnits: d.measureYieldAfterCodeUnits,
		yieldToEventLoop: d.yieldToEventLoop
	});
	return f.exceededLimit ? {
		status: "rejected",
		reason: "too-large",
		byteLength: f.byteLength,
		chunksWritten: 0
	} : insertMonacoTextInChunks(e, u, f.byteLength, d);
}
function handleMonacoLargeTextPaste(e, u, d = {}) {
	if (u.defaultPrevented) return {
		status: "ignored",
		reason: "already-handled"
	};
	if (d.readOnly) return {
		status: "ignored",
		reason: "read-only"
	};
	if (!e?.getModel()) return {
		status: "ignored",
		reason: "no-editor"
	};
	let f = getPlainTextFromPasteEvent(u);
	if (!f) return {
		status: "ignored",
		reason: "empty"
	};
	let p = d.directMaxBytes ?? 65536, m = d.maxBytes ?? 16777216, g = measureTextControlPasteByteLength(f, { stopAfterBytes: Math.min(p, m) });
	if (!g.exceededLimit) return {
		status: "ignored",
		reason: "small"
	};
	if (m <= p) {
		u.preventDefault(), u.stopPropagation();
		let e = {
			status: "rejected",
			reason: "too-large",
			byteLength: g.byteLength,
			chunksWritten: 0
		};
		return d.onPasteResult?.(e), e;
	}
	return u.preventDefault(), u.stopPropagation(), d.onPasteStart?.(), executeMonacoLargeTextPaste(e, f, d).then(d.onPasteResult), { status: "handled" };
}
function resolvePasteMetadata(e, u, d) {
	return u ? {
		pasteOnNewLine: !!e.getOption(d) && u.isFromEmptySelection === !0,
		multicursorText: u.multicursorText === void 0 ? null : u.multicursorText ?? null,
		mode: u.mode ?? null
	} : {
		pasteOnNewLine: !1,
		multicursorText: null,
		mode: null
	};
}
function runOrcaContextMenuPaste(e) {
	let u = e.getFocusedEditor();
	return !u || !u.getModel() || !u.hasTextFocus() || u.getOption(e.readOnlyOptionId) ? !1 : performOrcaContextMenuPaste(u, e);
}
async function performOrcaContextMenuPaste(e, u) {
	let d;
	try {
		d = await u.readClipboardText({ maxBytes: 16777216 });
	} catch (e) {
		return u.onReadError?.(e), {
			status: "noop",
			reason: "read-failed"
		};
	}
	if (!d) return {
		status: "noop",
		reason: "empty"
	};
	if (measureTextControlPasteByteLength(d, { stopAfterBytes: 65536 }).exceededLimit) {
		let f = await executeMonacoLargeTextPaste(e, d, { readOnly: !1 });
		return f.status === "rejected" && f.reason === "too-large" ? (u.onTooLarge?.(), {
			status: "noop",
			reason: "too-large"
		}) : f.status === "pasted" ? {
			status: "pasted",
			mode: "chunked"
		} : {
			status: "noop",
			reason: "target-lost"
		};
	}
	if (!e.hasTextFocus()) return {
		status: "noop",
		reason: "target-lost"
	};
	let { pasteOnNewLine: f, multicursorText: p, mode: m } = resolvePasteMetadata(e, u.getClipboardMetadata(d), u.emptySelectionClipboardOptionId);
	return e.trigger("keyboard", "paste", {
		text: d,
		pasteOnNewLine: f,
		multicursorText: p,
		mode: m
	}), {
		status: "pasted",
		mode: "native"
	};
}
var installed = !1;
function installMonacoContextMenuPaste(e) {
	installed || !PasteAction || (installed = !0, PasteAction.addImplementation(10001, "orca-ipc-paste", () => runOrcaContextMenuPaste({
		getFocusedEditor: () => e.editor.getEditors().find((e) => e.hasTextFocus()) ?? null,
		readClipboardText: (e) => window.api.ui.readClipboardText(e),
		getClipboardMetadata: (e) => InMemoryClipboardMetadataManager.INSTANCE.get(e),
		emptySelectionClipboardOptionId: e.editor.EditorOption.emptySelectionClipboard,
		readOnlyOptionId: e.editor.EditorOption.readOnly,
		onTooLarge: () => {
			toast.error(translate("auto.components.editor.MonacoEditor.largePasteTooLarge", "Paste is too large."));
		}
	})));
}
globalThis.MonacoEnvironment = { getWorker(e, u) {
	switch (u) {
		case "json": return new WorkerWrapper$1();
		case "css":
		case "scss":
		case "less": return new WorkerWrapper$2();
		case "html":
		case "handlebars":
		case "razor": return new WorkerWrapper$3();
		case "typescript":
		case "javascript": return new WorkerWrapper$4();
		default: return new WorkerWrapper();
	}
} };
var diagnosticsOptions = {
	noSemanticValidation: !0,
	noSuggestionDiagnostics: !0,
	noSyntaxValidation: !0
};
typescriptDefaults.setDiagnosticsOptions(diagnosticsOptions), javascriptDefaults.setDiagnosticsOptions(diagnosticsOptions), typescriptDefaults.setCompilerOptions({
	...typescriptDefaults.getCompilerOptions(),
	jsx: JsxEmit.Preserve
}), javascriptDefaults.setCompilerOptions({
	...javascriptDefaults.getCompilerOptions(),
	jsx: JsxEmit.Preserve
}), registerVueLanguage(editor_main_exports), registerSvelteLanguage(editor_main_exports), registerAstroLanguage(editor_main_exports), registerNimLanguage(editor_main_exports), registerJsonlLanguage(editor_main_exports), registerShellMarkdownAliases(editor_main_exports), installMonacoDelayerCancellationGuard(), installMonacoDiffEditorDisposalGuard(editor_main_exports), installMonacoPeekReferencesPreviewOptions(), installMonacoContextMenuPaste(editor_main_exports), loader.config({ monaco: editor_main_exports });
export { we as i, MAX_TOKENIZATION_LINE_LENGTH as n, Ft as r, handleMonacoLargeTextPaste as t };
