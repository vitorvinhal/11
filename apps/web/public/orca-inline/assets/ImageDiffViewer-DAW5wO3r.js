import { a as __toESM } from "./chunk-BKjlJnyO.js";
import "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./keybindings-1v53ESY9.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./dialog-s0g51002.js";
import "./useShortcutLabel-B283mfzm.js";
import "./find-query-bounds-CjC-WaR_.js";
import { t as ImageViewer } from "./ImageViewer-CRdk2I7F.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function ImageDiffPane({ label: e, content: i, filePath: o, mimeType: s, layout: c }) {
	let l = c === "intrinsic";
	return i ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex min-h-0 flex-col overflow-hidden rounded-md bg-muted/10", l ? "h-auto" : "h-full"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-3 py-2 text-xs font-medium text-muted-foreground",
			children: e
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("min-h-0", l ? "flex-none" : "flex-1"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageViewer, {
				content: i,
				filePath: o,
				mimeType: s,
				layout: c
			})
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex min-h-0 flex-col overflow-hidden rounded-md bg-muted/10", l ? "h-auto" : "h-full"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-3 py-2 text-xs font-medium text-muted-foreground",
			children: e
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("flex items-center justify-center bg-muted/20 p-6 text-sm text-muted-foreground", l ? "min-h-32" : "flex-1"),
			children: translate("auto.components.editor.ImageDiffViewer.fb0ae4f3c0", "No preview")
		})]
	});
}
function ImageDiffViewer({ originalContent: e, modifiedContent: i, filePath: a, mimeType: s, sideBySide: c, layout: l = "fill" }) {
	let u = l === "intrinsic", d = !c && !u ? { gridTemplateRows: `${e ? "minmax(32rem, 1fr)" : "auto"} ${i ? "minmax(32rem, 1fr)" : "auto"}` } : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid min-h-0 gap-3 p-3", u ? "h-auto" : "h-full", c ? "grid-cols-2" : "grid-cols-1", !c && !u && "overflow-y-auto scrollbar-editor"),
		style: d,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDiffPane, {
			label: translate("auto.components.editor.ImageDiffViewer.57aac3979a", "Original"),
			content: e,
			filePath: a,
			mimeType: s,
			layout: l
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDiffPane, {
			label: translate("auto.components.editor.ImageDiffViewer.a651be62b0", "Modified"),
			content: i,
			filePath: a,
			mimeType: s,
			layout: l
		})]
	});
}
export { ImageDiffViewer as default };
