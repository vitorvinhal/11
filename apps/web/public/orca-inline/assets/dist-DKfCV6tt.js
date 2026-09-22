import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function usePrevious(e) {
	let r = import_react.useRef({
		value: e,
		previous: e
	});
	return import_react.useMemo(() => (r.current.value !== e && (r.current.previous = r.current.value, r.current.value = e), r.current.previous), [e]);
}
export { usePrevious as t };
