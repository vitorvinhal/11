import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as Slot } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), CURSOR_TOOLTIP_GAP = 18;
function cursorTooltipOffsets(e, s) {
	return {
		align: e.x - s.left,
		side: e.y + CURSOR_TOOLTIP_GAP - s.bottom
	};
}
function splitTrailingSegment(e) {
	let s = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
	return s === -1 ? {
		directory: "",
		filename: e
	} : {
		directory: e.slice(0, s + 1),
		filename: e.slice(s + 1)
	};
}
function FilePathCursorTooltip({ children: e, path: s }) {
	let l = import_react.useRef(null), u = import_react.useRef(null), [d, f] = import_react.useState(!1), [p, m] = import_react.useState({
		align: 0,
		side: 0
	});
	return import_react.useLayoutEffect(() => {
		let e = l.current?.getBoundingClientRect(), s = u.current;
		if (!d || !e || !s) return;
		let c = cursorTooltipOffsets(s, e);
		m((e) => e.align === c.align && e.side === c.side ? e : c);
	}, [d]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
		open: d,
		onOpenChange: f,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
				ref: l,
				onPointerMove: (e) => {
					d || (u.current = {
						x: e.clientX,
						y: e.clientY
					});
				},
				children: e
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: "bottom",
			align: "start",
			sideOffset: p.side,
			alignOffset: p.align,
			showArrow: !1,
			className: "max-w-[min(90vw,800px)] rounded-md border border-border/80 bg-popover px-2 py-1 text-[11px] leading-[15px] break-words text-popover-foreground shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
			children: s
		})]
	});
}
export { splitTrailingSegment as n, FilePathCursorTooltip as t };
