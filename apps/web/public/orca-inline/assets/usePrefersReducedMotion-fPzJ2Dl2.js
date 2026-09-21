import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function readPrefersReducedMotion() {
	return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
function usePrefersReducedMotion() {
	let [e, i] = (0, import_react.useState)(readPrefersReducedMotion);
	return (0, import_react.useEffect)(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(REDUCED_MOTION_QUERY), a = (e) => {
			i(e.matches);
		};
		return e.addEventListener("change", a), () => e.removeEventListener("change", a);
	}, []), e;
}
export { usePrefersReducedMotion as t };
