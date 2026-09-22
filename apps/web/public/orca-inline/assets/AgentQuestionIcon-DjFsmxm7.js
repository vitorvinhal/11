import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
var MessageCircleQuestionMark = createLucideIcon("message-circle-question-mark", [
	["path", {
		d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
		key: "1sd12s"
	}],
	["path", {
		d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
		key: "1u773s"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function AgentQuestionIcon({ className: e, ...s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleQuestionMark, {
		...s,
		className: cn("text-agent-question", e),
		"aria-hidden": "true"
	});
}
export { MessageCircleQuestionMark as n, AgentQuestionIcon as t };
