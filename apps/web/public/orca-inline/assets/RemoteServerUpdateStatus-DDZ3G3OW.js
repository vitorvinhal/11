import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as CircleAlert } from "./circle-alert-xAjxBVzK.js";
import { t as CircleCheck } from "./circle-check-f8jEo_jQ.js";
import { t as Download } from "./download--oayFN4d.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as ServerOff } from "./server-off-DaMn7a-t.js";
import { t as Wrench } from "./wrench-BzRaaN5J.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Badge } from "./badge-D7sahA2a.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function getRemoteServerUpdatePhaseLabel(e) {
	switch (e) {
		case "checking": return translate("auto.components.settings.RemoteServerUpdateStatus.checking", "Checking…");
		case "available": return translate("auto.components.settings.RemoteServerUpdateStatus.available", "Update available");
		case "current": return translate("auto.components.settings.RemoteServerUpdateStatus.current", "Up to date");
		case "manual": return translate("auto.components.settings.RemoteServerUpdateStatus.manual", "Manual update");
		case "offline": return translate("auto.components.settings.RemoteServerUpdateStatus.offline", "Offline");
		case "queued": return translate("auto.components.settings.RemoteServerUpdateStatus.queued", "Queued");
		case "checking-update": return translate("auto.components.settings.RemoteServerUpdateStatus.checkingUpdate", "Checking update…");
		case "downloading": return translate("auto.components.settings.RemoteServerUpdateStatus.downloading", "Downloading…");
		case "restarting": return translate("auto.components.settings.RemoteServerUpdateStatus.restarting", "Restarting…");
		case "updated": return translate("auto.components.settings.RemoteServerUpdateStatus.updated", "Updated");
		case "failed": return translate("auto.components.settings.RemoteServerUpdateStatus.failed", "Update failed");
	}
}
function phaseIcon(e) {
	switch (e) {
		case "checking":
		case "queued":
		case "checking-update":
		case "restarting": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" });
		case "downloading": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {});
		case "current":
		case "updated": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {});
		case "manual": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {});
		case "offline": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerOff, {});
		case "failed": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {});
		case "available": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {});
	}
}
function RemoteServerUpdateStatus({ entry: e, compact: p = !1 }) {
	let m = e.phase === "downloading" && e.progress !== null ? ` ${Math.round(e.progress)}%` : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
		variant: e.phase === "failed" ? "destructive" : "outline",
		className: p ? "px-1.5 text-[11px]" : void 0,
		children: [
			phaseIcon(e.phase),
			getRemoteServerUpdatePhaseLabel(e.phase),
			m
		]
	});
}
function getRemoteServerManualUpdateHelp(e) {
	return e.support?.reason === "manual-service-update-required" ? translate("auto.components.settings.RemoteServerUpdateStatus.serviceManagerHelp", "Update Orca on the server host — through its system package manager if it was installed from a .deb or .rpm, otherwise through the service manager that starts it.") : e.support?.reason === "unpackaged-build" ? translate("auto.components.settings.RemoteServerUpdateStatus.unpackedHelp", "Development builds must be updated from their source checkout.") : translate("auto.components.settings.RemoteServerUpdateStatus.legacyHelp", "Update this server manually once to enable remote updates.");
}
export { getRemoteServerManualUpdateHelp as n, RemoteServerUpdateStatus as t };
