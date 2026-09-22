import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as addViewportSizeChangeListener } from "./viewport-size-change-listener-BLkhlU3n.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_react_dom = require_react_dom(), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), MENU_WIDTH = 144, MENU_HEIGHT = 36, MENU_MARGIN = 8;
function getSelectionTextInside(e) {
	let u = window.getSelection();
	if (!u || u.rangeCount === 0) return "";
	let d = u.anchorNode, f = u.focusNode;
	return !d || !f || !e.contains(d) || !e.contains(f) ? "" : u.toString().trim();
}
function SelectedTextCopyMenu({ children: e, className: u }) {
	let [d, p] = import_react.useState(null);
	import_react.useEffect(() => {
		if (!d) return;
		let e = () => p(null), u = (u) => {
			u.key === "Escape" && e();
		};
		window.addEventListener("pointerdown", e), window.addEventListener("keydown", u, !0), window.addEventListener("scroll", e, !0);
		let f = addViewportSizeChangeListener(e);
		return () => {
			window.removeEventListener("pointerdown", e), window.removeEventListener("keydown", u, !0), window.removeEventListener("scroll", e, !0), f();
		};
	}, [d]);
	let m = import_react.useCallback((e) => {
		let u = getSelectionTextInside(e.currentTarget);
		u && (e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), p({
			text: u,
			x: Math.max(MENU_MARGIN, Math.min(e.clientX, window.innerWidth - MENU_WIDTH - MENU_MARGIN)),
			y: Math.max(MENU_MARGIN, Math.min(e.clientY, window.innerHeight - MENU_HEIGHT - MENU_MARGIN))
		}));
	}, []), h = import_react.useCallback(() => {
		d && (window.api.ui.writeClipboardText(d.text), p(null));
	}, [d]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: u,
		onContextMenuCapture: m,
		children: [e, d && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed z-[100] min-w-36 rounded-[11px] border border-black/14 bg-popover p-1 text-popover-foreground shadow-[0_16px_36px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.14)] dark:border-white/14 dark:shadow-[0_20px_44px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.04)]",
			style: {
				left: d.x,
				top: d.y
			},
			onPointerDown: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex w-full cursor-default items-center gap-2 rounded-[7px] px-2 py-1 text-left text-[12px] font-[450] leading-5 outline-hidden hover:bg-accent focus:bg-accent",
				onClick: h,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5 text-muted-foreground" }), translate("auto.components.SelectedTextCopyMenu.9b40d7b018", "Copy")]
			})
		}), document.body)]
	});
}
export { SelectedTextCopyMenu as t };
