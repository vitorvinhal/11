import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as installMonacoDiffChangeNavigationShortcut } from "./editor-shortcuts-B2Tpd-Q8.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), noop = () => {}, DiffEditorRegistrationContext = (0, import_react.createContext)({
	registerDiffEditor: noop,
	unregisterDiffEditor: noop
}), DiffNavigationContext = (0, import_react.createContext)({
	goToPreviousDiff: noop,
	goToNextDiff: noop,
	changeCount: 0
});
function countChanges(e) {
	return e.getLineChanges()?.length ?? 0;
}
function DiffNavigationProvider({ children: e }) {
	let s = (0, import_react.useRef)(null), c = (0, import_react.useRef)(null), l = (0, import_react.useRef)(null), [u, d] = (0, import_react.useState)(0), f = (0, import_react.useCallback)((e) => {
		s.current = e, c.current?.dispose(), c.current = e.onDidUpdateDiff(() => {
			s.current === e && d(countChanges(e));
		}), l.current?.(), l.current = installMonacoDiffChangeNavigationShortcut(e), d(countChanges(e));
	}, []), p = (0, import_react.useCallback)((e) => {
		s.current === e && (c.current?.dispose(), c.current = null, l.current?.(), l.current = null, s.current = null, d(0));
	}, []), m = (0, import_react.useCallback)(() => {
		s.current?.goToDiff("previous");
	}, []), h = (0, import_react.useCallback)(() => {
		s.current?.goToDiff("next");
	}, []);
	(0, import_react.useEffect)(() => () => {
		c.current?.dispose(), c.current = null, l.current?.(), l.current = null;
	}, []);
	let g = (0, import_react.useMemo)(() => ({
		registerDiffEditor: f,
		unregisterDiffEditor: p
	}), [f, p]), _ = (0, import_react.useMemo)(() => ({
		goToPreviousDiff: m,
		goToNextDiff: h,
		changeCount: u
	}), [
		m,
		h,
		u
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffEditorRegistrationContext.Provider, {
		value: g,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffNavigationContext.Provider, {
			value: _,
			children: e
		})
	});
}
function useDiffEditorRegistration() {
	return (0, import_react.useContext)(DiffEditorRegistrationContext);
}
function useDiffNavigation() {
	return (0, import_react.useContext)(DiffNavigationContext);
}
export { useDiffEditorRegistration as n, useDiffNavigation as r, DiffNavigationProvider as t };
