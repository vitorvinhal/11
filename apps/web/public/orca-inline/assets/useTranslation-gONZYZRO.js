import { a as __toESM, t as __commonJSMin } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { f as getI18n, p as getDefaults } from "./i18n-CakWKPtl.js";
const warn = (e, o, s, c) => {
	let l = [s, {
		code: o,
		...c || {}
	}];
	if (e?.services?.logger?.forward) return e.services.logger.forward(l, "warn", "react-i18next::", !0);
	isString(l[0]) && (l[0] = `react-i18next:: ${l[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...l) : console?.warn && console.warn(...l);
};
var alreadyWarned = {};
const warnOnce = (e, o, s, c) => {
	isString(s) && alreadyWarned[s] || (isString(s) && (alreadyWarned[s] = /* @__PURE__ */ new Date()), warn(e, o, s, c));
};
var loadedClb = (e, o) => () => {
	if (e.isInitialized) o();
	else {
		let s = () => {
			setTimeout(() => {
				e.off("initialized", s);
			}, 0), o();
		};
		e.on("initialized", s);
	}
};
const loadNamespaces = (e, o, s) => {
	e.loadNamespaces(o, loadedClb(e, s));
}, loadLanguages = (e, o, s, c) => {
	if (isString(s) && (s = [s]), e.options.preload && e.options.preload.indexOf(o) > -1) return loadNamespaces(e, s, c);
	s.forEach((o) => {
		e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
	}), e.loadLanguages(o, loadedClb(e, c));
}, hasLoadedNamespace = (e, o, s = {}) => !o.languages || !o.languages.length ? (warnOnce(o, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: o.languages }), !0) : o.hasLoadedNamespace(e, {
	lng: s.lng,
	precheck: (o, c) => {
		if (s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !c(o.isLanguageChangingTo, e)) return !1;
	}
}), isString = (e) => typeof e == "string", isObject = (e) => typeof e == "object" && !!e;
var import_react = /* @__PURE__ */ __toESM(require_react());
const I18nContext = (0, import_react.createContext)();
var ReportNamespaces = class {
	constructor() {
		this.usedNamespaces = {};
	}
	addUsedNamespaces(e) {
		e.forEach((e) => {
			this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
		});
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces);
	}
}, require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((e) => {
	var o = require_react();
	function c(e, o) {
		return e === o && (e !== 0 || 1 / e == 1 / o) || e !== e && o !== o;
	}
	var l = typeof Object.is == "function" ? Object.is : c, u = o.useState, d = o.useEffect, f = o.useLayoutEffect, p = o.useDebugValue;
	function m(e, o) {
		var s = o(), c = u({ inst: {
			value: s,
			getSnapshot: o
		} }), l = c[0].inst, m = c[1];
		return f(function() {
			l.value = s, l.getSnapshot = o, h(l) && m({ inst: l });
		}, [
			e,
			s,
			o
		]), d(function() {
			return h(l) && m({ inst: l }), e(function() {
				h(l) && m({ inst: l });
			});
		}, [e]), p(s), s;
	}
	function h(e) {
		var o = e.getSnapshot;
		e = e.value;
		try {
			var s = o();
			return !l(e, s);
		} catch {
			return !0;
		}
	}
	function g(e, o) {
		return o();
	}
	var _ = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? g : m;
	e.useSyncExternalStore = o.useSyncExternalStore === void 0 ? _ : o.useSyncExternalStore;
})), require_use_sync_external_store_shim_development = /* @__PURE__ */ __commonJSMin(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function o(e, o) {
			return e === o && (e !== 0 || 1 / e == 1 / o) || e !== e && o !== o;
		}
		function c(e, o) {
			_ || d.startTransition === void 0 || (_ = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var s = o();
			if (!v) {
				var c = o();
				f(s, c) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), v = !0);
			}
			c = p({ inst: {
				value: s,
				getSnapshot: o
			} });
			var u = c[0].inst, y = c[1];
			return h(function() {
				u.value = s, u.getSnapshot = o, l(u) && y({ inst: u });
			}, [
				e,
				s,
				o
			]), m(function() {
				return l(u) && y({ inst: u }), e(function() {
					l(u) && y({ inst: u });
				});
			}, [e]), g(s), s;
		}
		function l(e) {
			var o = e.getSnapshot;
			e = e.value;
			try {
				var s = o();
				return !f(e, s);
			} catch {
				return !0;
			}
		}
		function u(e, o) {
			return o();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var d = require_react(), f = typeof Object.is == "function" ? Object.is : o, p = d.useState, m = d.useEffect, h = d.useLayoutEffect, g = d.useDebugValue, _ = !1, v = !1, y = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
		e.useSyncExternalStore = d.useSyncExternalStore === void 0 ? y : d.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), require_shim = /* @__PURE__ */ __commonJSMin(((e, o) => {
	process.env.NODE_ENV === "production" ? o.exports = require_use_sync_external_store_shim_production() : o.exports = require_use_sync_external_store_shim_development();
})), import_shim = require_shim(), notReadySnapshot = {
	t: (e, o) => {
		if (isString(o)) return o;
		if (isObject(o) && isString(o.defaultValue)) return o.defaultValue;
		if (typeof e == "function") return "";
		if (Array.isArray(e)) {
			let o = e[e.length - 1];
			return typeof o == "function" ? "" : o;
		}
		return e;
	},
	ready: !1
}, dummySubscribe = () => () => {};
const useTranslation = (e, o = {}) => {
	let { i18n: s } = o, { i18n: u, defaultNS: d } = (0, import_react.useContext)(I18nContext) || {}, p = s || u || getI18n();
	p && !p.reportNamespaces && (p.reportNamespaces = new ReportNamespaces()), p || warnOnce(p, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");
	let v = (0, import_react.useMemo)(() => ({
		...getDefaults(),
		...p?.options?.react,
		...o
	}), [p, o]), { useSuspense: b, keyPrefix: x } = v, S = e || d || p?.options?.defaultNS, C = isString(S) ? [S] : S || ["translation"], w = (0, import_react.useMemo)(() => C, C);
	p?.reportNamespaces?.addUsedNamespaces?.(w);
	let T = (0, import_react.useRef)(0), E = (0, import_react.useCallback)((e) => {
		if (!p) return dummySubscribe;
		let { bindI18n: o, bindI18nStore: s } = v, c = () => {
			T.current += 1, e();
		};
		return o && p.on(o, c), s && p.store.on(s, c), () => {
			o && o.split(" ").forEach((e) => p.off(e, c)), s && s.split(" ").forEach((e) => p.store.off(e, c));
		};
	}, [p, v]), D = (0, import_react.useRef)(), O = (0, import_react.useCallback)(() => {
		if (!p) return notReadySnapshot;
		let e = !!(p.isInitialized || p.initializedStoreOnce) && w.every((e) => hasLoadedNamespace(e, p, v)), s = o.lng || p.language, c = T.current, l = D.current;
		if (l && l.ready === e && l.lng === s && l.keyPrefix === x && l.revision === c) return l;
		let u = {
			t: p.getFixedT(s, v.nsMode === "fallback" ? w : w[0], x, { scopeNs: w }),
			ready: e,
			lng: s,
			keyPrefix: x,
			revision: c
		};
		return D.current = u, u;
	}, [
		p,
		w,
		x,
		v,
		o.lng
	]), [k, A] = (0, import_react.useState)(0), { t: j, ready: M } = (0, import_shim.useSyncExternalStore)(E, O, O);
	(0, import_react.useEffect)(() => {
		if (p && !M && !b) {
			let e = () => A((e) => e + 1);
			o.lng ? loadLanguages(p, o.lng, w, e) : loadNamespaces(p, w, e);
		}
	}, [
		p,
		o.lng,
		w,
		M,
		b,
		k
	]);
	let N = p || {}, P = (0, import_react.useRef)(null), F = (0, import_react.useRef)(), I = (e) => {
		let o = Object.getOwnPropertyDescriptors(e);
		o.__original && delete o.__original;
		let s = Object.create(Object.getPrototypeOf(e), o);
		if (!Object.prototype.hasOwnProperty.call(s, "__original")) try {
			Object.defineProperty(s, "__original", {
				value: e,
				writable: !1,
				enumerable: !1,
				configurable: !1
			});
		} catch {}
		return s;
	}, L = (0, import_react.useMemo)(() => {
		let e = N, o = e?.language, s = e;
		e && (P.current && P.current.__original === e && F.current === o ? s = P.current : (s = I(e), P.current = s, F.current = o));
		let c = !M && !b ? (...e) => (warnOnce(p, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."), j(...e)) : j, l = [
			c,
			s,
			M
		];
		return l.t = c, l.i18n = s, l.ready = M, l;
	}, [
		j,
		N,
		M,
		N.resolvedLanguage,
		N.language,
		N.languages
	]);
	if (p && b && !M) {
		let e = !1;
		try {
			e = process.env.NODE_ENV !== "production";
		} catch {}
		throw e && warnOnce(p, "SUSPENDED_WHILE_LOADING", "useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook"), new Promise((e) => {
			let s = () => e();
			o.lng ? loadLanguages(p, o.lng, w, s) : loadNamespaces(p, w, s);
		});
	}
	return L;
};
export { require_shim as n, I18nContext as r, useTranslation as t };
