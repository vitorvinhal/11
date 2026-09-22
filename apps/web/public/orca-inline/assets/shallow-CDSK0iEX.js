import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as shallow } from "./shallow-BYgwU3E1.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useShallow(e) {
	let n = import_react.useRef(void 0);
	return (r) => {
		let i = e(r);
		return shallow(n.current, i) ? n.current : n.current = i;
	};
}
export { useShallow as t };
