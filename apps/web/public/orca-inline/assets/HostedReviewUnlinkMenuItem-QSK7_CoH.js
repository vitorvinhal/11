import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as Unlink } from "./unlink-CIaaobgi.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as DropdownMenuItem } from "./dropdown-menu-DRu_J4_e.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function HostedReviewUnlinkMenuItem({ reviewLabel: e, reviewIdentifier: c, providerLabel: l, disabled: u = !1, onSelect: d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			disabled: u,
			onSelect: d,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unlink, { className: "size-3.5" }), translate("auto.components.HostedReviewUnlinkMenuItem.label", "Unlink {{value0}} from workspace", { value0: e })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "left",
		sideOffset: 8,
		className: "max-w-72 text-pretty",
		children: translate("auto.components.HostedReviewUnlinkMenuItem.description", "Orca will hide {{value0}} {{value1}} details for this workspace. The {{value0}} and branch on {{value2}} won’t be changed.", {
			value0: e,
			value1: c,
			value2: l
		})
	})] });
}
export { HostedReviewUnlinkMenuItem as t };
