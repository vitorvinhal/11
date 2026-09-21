import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), WORKSPACE_BOARD_KEEP_OPEN_SELECTOR = [
	"[data-workspace-board-trigger]",
	"[data-workspace-board-preserve-open]",
	"[data-workspace-status-appearance-popover]",
	"[data-contextual-tour-overlay]",
	"[data-contextual-tour-panel]",
	"[data-radix-popper-content-wrapper]",
	"[data-slot=\"dropdown-menu-content\"]",
	"[data-slot=\"context-menu-content\"]",
	"[data-slot=\"popover-content\"]",
	"[data-slot=\"dialog-content\"]",
	"[data-slot=\"dialog-overlay\"]",
	"[data-sonner-toast]",
	"[role=\"dialog\"][data-state=\"open\"]",
	"[role=\"alertdialog\"][data-state=\"open\"]",
	"[role=\"menu\"][data-state=\"open\"]"
].join(", ");
function isWorkspaceBoardKeepOpenTarget(e) {
	return !!(e instanceof Element ? e : e instanceof Node ? e.parentElement : null)?.closest(WORKSPACE_BOARD_KEEP_OPEN_SELECTOR);
}
function useWorkspaceKanbanOutsideDismiss(e) {
	let { open: r, boardRef: a, preserveOpenForMenu: o, onOpenChange: s } = e;
	(0, import_react.useEffect)(() => {
		if (!r) return;
		let e = (e) => {
			let r = a.current?.closest("[data-slot=\"sheet-content\"]");
			if (!r || o || e.target instanceof Node && r.contains(e.target) || isWorkspaceBoardKeepOpenTarget(e.target)) return;
			let i = r.getBoundingClientRect();
			e.clientX > i.right && e.clientY >= i.top && e.clientY <= i.bottom && s(!1);
		};
		return document.addEventListener("pointerdown", e, !0), () => document.removeEventListener("pointerdown", e, !0);
	}, [
		a,
		s,
		r,
		o
	]);
}
const WORKSPACE_TOP_CHROME_HEIGHT = 36, STATUS_BAR_RESERVE_HEIGHT = 24;
export { useWorkspaceKanbanOutsideDismiss as i, WORKSPACE_TOP_CHROME_HEIGHT as n, isWorkspaceBoardKeepOpenTarget as r, STATUS_BAR_RESERVE_HEIGHT as t };
