import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose$1, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "./dist-DryAQYfi.js";
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function Dialog({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		"data-slot": "dialog",
		...e
	});
}
function DialogTrigger({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger$1, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function DialogPortal({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...e
	});
}
function DialogClose({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose$1, {
		"data-slot": "dialog-close",
		...e
	});
}
function DialogOverlay({ className: e, ...x }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		"data-slot": "dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...x
	});
}
function DialogContent({ className: e, children: x, overlayClassName: S, showCloseButton: w = !0, ...T }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: S }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
			"data-slot": "dialog-content",
			className: cn("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] grid-cols-[minmax(0,1fr)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-black/14 bg-background/96 p-6 text-foreground shadow-[0_20px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl duration-200 outline-none dark:border-white/14 dark:bg-[rgba(23,23,23,0.96)] dark:shadow-[0_24px_72px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...T,
			children: [x, w && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: translate("auto.components.ui.dialog.f26c4baeda", "Close")
				})]
			})]
		})]
	});
}
function DialogHeader({ className: e, ...x }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2 text-center sm:text-left", e),
		...x
	});
}
function DialogFooter({ className: e, showCloseButton: x = !1, children: C, ...w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-slot": "dialog-footer",
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...w,
		children: [C, x && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose$1, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: translate("auto.components.ui.dialog.f26c4baeda", "Close")
			})
		})]
	});
}
function DialogTitle({ className: e, ...x }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		"data-slot": "dialog-title",
		className: cn("text-lg leading-snug font-semibold break-words", e),
		...x
	});
}
function DialogDescription({ className: e, ...x }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		"data-slot": "dialog-description",
		className: cn("text-sm text-muted-foreground", e),
		...x
	});
}
export { DialogFooter as a, DialogTrigger as c, DialogDescription as i, DialogClose as n, DialogHeader as o, DialogContent as r, DialogTitle as s, Dialog as t };
