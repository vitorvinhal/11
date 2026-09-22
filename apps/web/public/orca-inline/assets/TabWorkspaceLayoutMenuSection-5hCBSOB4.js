import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as ArrowDown } from "./arrow-down-DdoSov0P.js";
import { t as ArrowLeft } from "./arrow-left-DVNzwFVN.js";
import { t as ArrowRight } from "./arrow-right-DHTXzy8t.js";
import { t as ArrowUp } from "./arrow-up-6Uj9YtPL.js";
import { r as moveTabToNewPaneColumn, t as canMoveTabToNewPaneColumn } from "./tab-move-to-pane-column-C2Z9WhB2.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { d as DropdownMenuSub, f as DropdownMenuSubContent, i as DropdownMenuItem, l as DropdownMenuSeparator, p as DropdownMenuSubTrigger, u as DropdownMenuShortcut } from "./dropdown-menu-DRu_J4_e.js";
var Columns2 = createLucideIcon("columns-2", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M12 3v18",
	key: "108xh3"
}]]);
const TAB_CONTEXT_MENU_CONTENT_CLASS = "min-w-[13rem] max-w-[calc(100vw-1rem)] whitespace-nowrap", TAB_CONTEXT_SUBMENU_CONTENT_CLASS = "max-w-[calc(100vw-1rem)] whitespace-nowrap";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), PANE_COLUMN_DIRECTIONS = [
	"right",
	"left",
	"down",
	"up"
];
function paneColumnDirectionIcon(t) {
	switch (t) {
		case "right": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 shrink-0" });
		case "left": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5 shrink-0" });
		case "down": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5 shrink-0" });
		case "up": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3.5 shrink-0" });
	}
}
function paneColumnDirectionLabel(t) {
	switch (t) {
		case "right": return translate("auto.components.tab.bar.TabWorkspaceLayoutMenuSection.right", "Right");
		case "left": return translate("auto.components.tab.bar.TabWorkspaceLayoutMenuSection.left", "Left");
		case "down": return translate("auto.components.tab.bar.TabWorkspaceLayoutMenuSection.down", "Down");
		case "up": return translate("auto.components.tab.bar.TabWorkspaceLayoutMenuSection.up", "Up");
	}
}
function TabWorkspaceLayoutMenuSection({ unifiedTabId: t, groupId: b, leadingSeparator: x = !1, trailingSeparator: S = !1, shortcutLabels: C }) {
	return canMoveTabToNewPaneColumn(t, b) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger, {
			className: "[&>svg:last-child]:size-3.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns2, { className: "size-3.5 shrink-0" }), translate("auto.components.tab.bar.TabWorkspaceLayoutMenuSection.moveToPaneColumn", "Move Tab to Split")]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubContent, {
			className: TAB_CONTEXT_SUBMENU_CONTENT_CLASS,
			children: PANE_COLUMN_DIRECTIONS.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => {
					moveTabToNewPaneColumn({
						unifiedTabId: t,
						groupId: b,
						direction: y
					});
				},
				children: [
					paneColumnDirectionIcon(y),
					paneColumnDirectionLabel(y),
					C?.[y] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuShortcut, { children: C[y] }) : null
				]
			}, y))
		})] }),
		S ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}) : null
	] }) : null;
}
export { Columns2 as i, TAB_CONTEXT_MENU_CONTENT_CLASS as n, TAB_CONTEXT_SUBMENU_CONTENT_CLASS as r, TabWorkspaceLayoutMenuSection as t };
