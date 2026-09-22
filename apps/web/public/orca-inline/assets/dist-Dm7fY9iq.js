import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as useComposedRefs } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { t as createCollection } from "./dist-BmoCFUG3.js";
import { n as useLayoutEffect2, r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { t as useId } from "./dist-CxjmhSN9.js";
import { t as useDirection } from "./dist-DqysERl8.js";
import { i as useCallbackRef } from "./dist-BZKlajuP.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), _isHydrated = !1;
function useIsHydrated() {
	let [e, f] = import_react.useState(_isHydrated);
	return import_react.useEffect(() => {
		_isHydrated || (_isHydrated = !0, f(!0));
	}, []), e;
}
var useReactSyncExternalStore = import_react.useSyncExternalStore;
function subscribe() {
	return () => {};
}
function useIsHydratedModern() {
	return useReactSyncExternalStore(subscribe, () => !0, () => !1);
}
var useIsHydrated2 = typeof useReactSyncExternalStore == "function" ? useIsHydratedModern : useIsHydrated, import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, GROUP_NAME = "RovingFocusGroup", [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME), [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME, [createCollectionScope]), [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME), RovingFocusGroup = import_react.forwardRef((e, f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupImpl, {
			...e,
			ref: f
		})
	})
}));
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = import_react.forwardRef((e, f) => {
	let { __scopeRovingFocusGroup: m, orientation: h, loop: g = !1, dir: _, currentTabStopId: y, defaultCurrentTabStopId: S, onCurrentTabStopIdChange: C, onEntryFocus: w, preventScrollOnEntryFocus: T = !1, ...E } = e, D = import_react.useRef(null), j = useComposedRefs(f, D), M = useDirection(_), [N, P] = useControllableState({
		prop: y,
		defaultProp: S ?? null,
		onChange: C,
		caller: GROUP_NAME
	}), [F, I] = import_react.useState(!1), L = useCallbackRef(w), R = useCollection(m), z = import_react.useRef(!1), [B, V] = import_react.useState(0);
	return import_react.useEffect(() => {
		let e = D.current;
		if (e) return e.addEventListener(ENTRY_FOCUS, L), () => e.removeEventListener(ENTRY_FOCUS, L);
	}, [L]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusProvider, {
		scope: m,
		orientation: h,
		dir: M,
		loop: g,
		currentTabStopId: N,
		onItemFocus: import_react.useCallback((e) => P(e), [P]),
		onItemShiftTab: import_react.useCallback(() => I(!0), []),
		onFocusableItemAdd: import_react.useCallback(() => V((e) => e + 1), []),
		onFocusableItemRemove: import_react.useCallback(() => V((e) => e - 1), []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			tabIndex: F || B === 0 ? -1 : 0,
			"data-orientation": h,
			...E,
			ref: j,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: composeEventHandlers(e.onMouseDown, () => {
				z.current = !0;
			}),
			onFocus: composeEventHandlers(e.onFocus, (e) => {
				let f = !z.current;
				if (e.target === e.currentTarget && f && !F) {
					let f = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					if (e.currentTarget.dispatchEvent(f), !f.defaultPrevented) {
						let e = R().filter((e) => e.focusable);
						focusFirst([
							e.find((e) => e.active),
							e.find((e) => e.id === N),
							...e
						].filter(Boolean).map((e) => e.ref.current), T);
					}
				}
				z.current = !1;
			}),
			onBlur: composeEventHandlers(e.onBlur, () => I(!1))
		})
	});
}), ITEM_NAME = "RovingFocusGroupItem", RovingFocusGroupItem = import_react.forwardRef((e, f) => {
	let { __scopeRovingFocusGroup: p, focusable: m = !0, active: h = !1, tabStopId: g, children: v, ...b } = e, x = useId(), S = g || x, C = useRovingFocusContext(ITEM_NAME, p), w = C.currentTabStopId === S, T = useCollection(p), { onFocusableItemAdd: E, onFocusableItemRemove: O, currentTabStopId: k } = C, A = useIsHydrated2();
	return useLayoutEffect2(() => {
		if (!(!A || !m)) return E(), () => O();
	}, [
		A,
		m,
		E,
		O
	]), import_react.useEffect(() => {
		if (!(A || !m)) return E(), () => O();
	}, [
		A,
		m,
		E,
		O
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
		scope: p,
		id: S,
		focusable: m,
		active: h,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			tabIndex: w ? 0 : -1,
			"data-orientation": C.orientation,
			...b,
			ref: f,
			onMouseDown: composeEventHandlers(e.onMouseDown, (e) => {
				m ? C.onItemFocus(S) : e.preventDefault();
			}),
			onFocus: composeEventHandlers(e.onFocus, () => C.onItemFocus(S)),
			onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					C.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let f = getFocusIntent(e, C.orientation, C.dir);
				if (f !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let p = T().filter((e) => e.focusable).map((e) => e.ref.current);
					if (f === "last") p.reverse();
					else if (f === "prev" || f === "next") {
						f === "prev" && p.reverse();
						let m = p.indexOf(e.currentTarget);
						p = C.loop ? wrapArray(p, m + 1) : p.slice(m + 1);
					}
					setTimeout(() => focusFirst(p));
				}
			}),
			children: typeof v == "function" ? v({
				isCurrentTabStop: w,
				hasTabStop: k != null
			}) : v
		})
	});
});
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function getDirectionAwareKey(e, f) {
	return f === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function getFocusIntent(e, f, p) {
	let m = getDirectionAwareKey(e.key, p);
	if (!(f === "vertical" && ["ArrowLeft", "ArrowRight"].includes(m)) && !(f === "horizontal" && ["ArrowUp", "ArrowDown"].includes(m))) return MAP_KEY_TO_FOCUS_INTENT[m];
}
function focusFirst(e, f = !1) {
	let p = document.activeElement;
	for (let m of e) if (m === p || (m.focus({ preventScroll: f }), document.activeElement !== p)) return;
}
function wrapArray(e, f) {
	return e.map((p, m) => e[(f + m) % e.length]);
}
var Root = RovingFocusGroup, Item = RovingFocusGroupItem;
export { Root as n, createRovingFocusGroupScope as r, Item as t };
