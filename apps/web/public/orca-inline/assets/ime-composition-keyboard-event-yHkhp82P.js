import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function isImeOwnedKeyboardEvent(e) {
	return e.isComposing === !0 || e.keyCode === 229 || e.nativeEvent?.isComposing === !0 || e.nativeEvent?.keyCode === 229;
}
function useImeEnterGestureOwnership() {
	let e = (0, import_react.useRef)({
		composing: !1,
		pendingEnter: null
	});
	return (0, import_react.useMemo)(() => {
		let r = () => {
			e.current = {
				composing: !1,
				pendingEnter: null
			};
		}, i = (e) => e.key === "Enter" && e.keyCode === 13 && !e.shiftKey, a = (e) => !!(e.altKey || e.ctrlKey || e.metaKey);
		return {
			isComposing: () => e.current.composing,
			ownsKeyDown: (r) => (r.nativeEvent.isComposing || e.current.composing) && (i(r) || r.key === "Enter" && r.keyCode === 229 || r.key === "Process" && r.keyCode === 229) ? (e.current.pendingEnter = {}, !0) : e.current.pendingEnter && i(r) && !r.nativeEvent.isComposing ? (e.current.pendingEnter = null, a(r) ? !1 : (r.preventDefault(), !0)) : !1,
			onKeyUp: (r) => {
				if (r.key === "Process" && r.keyCode === 229) {
					e.current.pendingEnter = null;
					return;
				}
				let i = e.current.pendingEnter;
				i && requestAnimationFrame(() => {
					e.current.pendingEnter === i && (e.current.pendingEnter = null);
				});
			},
			reset: r,
			setComposing: (r) => {
				e.current.composing = r;
			}
		};
	}, []);
}
function isImeCompositionKeyDown(e) {
	return isImeOwnedKeyboardEvent(e);
}
export { useImeEnterGestureOwnership as n, isImeCompositionKeyDown as t };
