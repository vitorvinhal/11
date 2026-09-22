import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as EyeOff } from "./eye-off-B5lrInJh.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as DropdownMenuItem, l as DropdownMenuSeparator, m as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DRu_J4_e.js";
var PanelBottom = createLucideIcon("panel-bottom", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M3 15h18",
	key: "5xshup"
}]]), PanelTop = createLucideIcon("panel-top", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M3 9h18",
	key: "1pudct"
}]]), import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function FloatingTerminalIconContextMenu({ children: e, currentLocation: p, className: m, style: h }) {
	let g = useAppStore((e) => e.updateSettings), [_, v] = (0, import_react.useState)(!1), [y, b] = (0, import_react.useState)({
		x: 0,
		y: 0
	}), x = (0, import_react.useRef)(null), S = (0, import_react.useCallback)((e) => {
		e === null && x.current !== null && (window.cancelAnimationFrame(x.current), x.current = null);
	}, []), C = (0, import_react.useMemo)(() => p === "floating-button" ? {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelBottom, { className: "size-3.5" }),
		label: translate("auto.components.floating.terminal.FloatingTerminalIconContextMenu.0ee79e0674", "Move to Status Bar"),
		location: "status-bar"
	} : {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelTop, { className: "size-3.5" }),
		label: translate("auto.components.floating.terminal.FloatingTerminalIconContextMenu.763f5fa2c1", "Move to Floating Button"),
		location: "floating-button"
	}, [p]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref: S,
		className: m,
		style: h,
		"data-floating-terminal-toggle": !0,
		onContextMenuCapture: (e) => {
			e.preventDefault(), e.stopPropagation(), b({
				x: e.clientX,
				y: e.clientY
			}), v(!1), x.current !== null && window.cancelAnimationFrame(x.current), x.current = window.requestAnimationFrame(() => {
				x.current = null, v(!0);
			});
		},
		onContextMenu: (e) => {
			e.preventDefault(), e.stopPropagation();
		},
		children: e
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		open: _,
		onOpenChange: v,
		modal: !1,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-hidden": !0,
				tabIndex: -1,
				className: "pointer-events-none fixed size-px opacity-0",
				style: {
					left: y.x,
					top: y.y
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			className: "w-52",
			sideOffset: 0,
			align: "start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					className: "whitespace-nowrap",
					onSelect: () => {
						g({ floatingTerminalTriggerLocation: C.location });
					},
					children: [C.icon, C.label]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					className: "whitespace-nowrap",
					onSelect: () => {
						useAppStore.getState().recordFeatureInteraction("floating-workspace-hidden"), g({ floatingTerminalEnabled: !1 });
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-3.5" }), translate("auto.components.floating.terminal.FloatingTerminalIconContextMenu.8e7d775287", "Hide Floating Workspace")]
				})
			]
		})]
	})] });
}
export { FloatingTerminalIconContextMenu as t };
