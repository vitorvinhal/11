import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as createLocalizedCatalog } from "./localized-catalog-Dsz6wk5E.js";
var AppWindow = createLucideIcon("app-window", [
	["rect", {
		x: "2",
		y: "4",
		width: "20",
		height: "16",
		rx: "2",
		key: "izxlao"
	}],
	["path", {
		d: "M10 4v4",
		key: "pp8u80"
	}],
	["path", {
		d: "M2 8h20",
		key: "d11cs7"
	}],
	["path", {
		d: "M6 4v4",
		key: "1svtjw"
	}]
]), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
const getOpenInAppPresets = createLocalizedCatalog(() => [
	{
		id: "vscode",
		label: translate("auto.lib.open.in.app.catalog.173553f73a", "VS Code"),
		command: "code",
		faviconDomain: "code.visualstudio.com"
	},
	{
		id: "cursor",
		label: translate("auto.lib.open.in.app.catalog.d62b12e98a", "Cursor"),
		command: "cursor",
		faviconDomain: "cursor.com"
	},
	{
		id: "zed",
		label: translate("auto.lib.open.in.app.catalog.f8b8ca2711", "Zed"),
		command: "zed",
		faviconDomain: "zed.dev",
		iconClassName: "dark:invert"
	}
]);
function getOpenInAppPreset(e) {
	let u = e.command.trim().toLowerCase();
	return getOpenInAppPresets().find((e) => e.command === u) ?? null;
}
function isOpenInAppPresetAdded(e, u) {
	return e.some((e) => e.command.trim().toLowerCase() === u.command);
}
function OpenInApplicationIcon({ application: e, size: u = 14 }) {
	let d = getOpenInAppPreset(e);
	return d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: `https://www.google.com/s2/favicons?domain=${d.faviconDomain}&sz=64`,
		width: u,
		height: u,
		alt: "",
		"aria-hidden": !0,
		className: cn("shrink-0", d.iconClassName),
		style: { borderRadius: 2 }
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppWindow, {
		width: u,
		height: u
	});
}
export { AppWindow as a, isOpenInAppPresetAdded as i, getOpenInAppPreset as n, getOpenInAppPresets as r, OpenInApplicationIcon as t };
