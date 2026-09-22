import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
const ConfirmationDialogContext = (0, import_react.createContext)(null);
function useConfirmationDialog() {
	let e = (0, import_react.useContext)(ConfirmationDialogContext);
	if (!e) throw Error("useConfirmationDialog must be used inside ConfirmationDialogProvider");
	return e;
}
export { useConfirmationDialog as n, ConfirmationDialogContext as t };
