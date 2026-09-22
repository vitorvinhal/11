import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { l as cva, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "./dist-DryAQYfi.js";
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function Sheet({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		"data-slot": "sheet",
		...e
	});
}
function SheetClose({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
		"data-slot": "sheet-close",
		...e
	});
}
function SheetPortal({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function SheetOverlay({ className: e, style: g, ..._ }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		"data-slot": "sheet-overlay",
		className: cn("fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		style: {
			...g,
			WebkitAppRegion: "no-drag"
		},
		..._
	});
}
var sheetContentVariants = cva("fixed z-50 flex flex-col gap-0 bg-background/96 text-foreground shadow-[0_20px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl outline-none transition ease-in-out dark:bg-[rgba(23,23,23,0.96)] dark:shadow-[0_24px_72px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=open]:duration-300", {
	variants: { side: {
		right: "inset-y-0 right-0 h-full w-3/4 border-l border-black/14 dark:border-white/14 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-[560px]",
		left: "inset-y-0 left-0 h-full w-3/4 border-r border-black/14 dark:border-white/14 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-[560px]",
		top: "inset-x-0 top-0 h-auto border-b border-black/14 dark:border-white/14 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 h-auto border-t border-black/14 dark:border-white/14 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
	} },
	defaultVariants: { side: "right" }
});
function SheetContent({ className: e, children: g, side: v = "right", showCloseButton: y = !0, overlayClassName: b, overlayStyle: x, style: S, ...C }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {
		className: b,
		style: x
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		"data-slot": "sheet-content",
		className: cn(sheetContentVariants({ side: v }), e),
		style: {
			...S,
			WebkitAppRegion: "no-drag"
		},
		...C,
		children: [g, y && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			"data-slot": "sheet-close",
			className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: translate("auto.components.ui.sheet.1189e9fe0a", "Close")
			})]
		})]
	})] });
}
function SheetHeader({ className: e, ...g }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sheet-header",
		className: cn("flex flex-col gap-1.5 p-4", e),
		...g
	});
}
function SheetTitle({ className: e, ...g }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		"data-slot": "sheet-title",
		className: cn("text-base font-semibold text-foreground", e),
		...g
	});
}
function SheetDescription({ className: e, ...g }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
		"data-slot": "sheet-description",
		className: cn("text-sm text-muted-foreground", e),
		...g
	});
}
export { SheetHeader as a, SheetDescription as i, SheetClose as n, SheetTitle as o, SheetContent as r, Sheet as t };
