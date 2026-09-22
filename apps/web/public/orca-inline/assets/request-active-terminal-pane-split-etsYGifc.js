import { a as REQUEST_ACTIVE_TERMINAL_PANE_SPLIT_EVENT } from "./terminal-_vGmMZGb.js";
function requestActiveTerminalPaneSplit(t) {
	window.dispatchEvent(new CustomEvent(REQUEST_ACTIVE_TERMINAL_PANE_SPLIT_EVENT, { detail: t }));
}
export { requestActiveTerminalPaneSplit as t };
