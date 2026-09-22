import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { t as Progress } from "./progress-pVm2EiQa.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import "./badge-D7sahA2a.js";
import { n as getRemoteServerManualUpdateHelp, t as RemoteServerUpdateStatus } from "./RemoteServerUpdateStatus-DDZ3G3OW.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function versionDescription(e) {
	return e.currentVersion && e.targetVersion && e.currentVersion !== e.targetVersion ? `${e.currentVersion} → ${e.targetVersion}` : e.currentVersion ? `v${e.currentVersion}` : translate("auto.components.settings.RemoteServerUpdateDialog.versionUnavailable", "Version unavailable");
}
function entryHelp(e) {
	return e.error ? e.error : e.phase === "manual" ? getRemoteServerManualUpdateHelp(e) : e.phase === "restarting" ? translate("auto.components.settings.RemoteServerUpdateDialog.restartingHelp", "Waiting for the replacement server to reconnect on the new version.") : null;
}
function ServerUpdateRow({ entry: e, disabled: f, onUpdate: p }) {
	let m = e.phase === "available" || e.phase === "failed", h = entryHelp(e);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2 px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 space-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: e.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteServerUpdateStatus, {
							entry: e,
							compact: !0
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: versionDescription(e)
					})]
				}), m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "xs",
					onClick: p,
					disabled: f,
					children: e.phase === "failed" ? translate("auto.components.settings.RemoteServerUpdateDialog.retry", "Retry") : translate("auto.components.settings.RemoteServerUpdateDialog.update", "Update this server")
				}) : null]
			}),
			e.phase === "downloading" && e.progress !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: e.progress,
				"aria-label": translate("auto.components.settings.RemoteServerUpdateDialog.downloadProgress", "{{value0}} download progress", { value0: e.name })
			}) : null,
			h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: e.phase === "failed" ? "text-xs break-words text-destructive" : "text-xs break-words text-muted-foreground",
				children: h
			}) : null
		]
	});
}
function RemoteServerUpdateDialog() {
	let e = useAppStore((e) => e.remoteServerUpdateDialogOpen), f = useAppStore((e) => e.setRemoteServerUpdateDialogOpen), g = [...useAppStore((e) => e.remoteServerUpdates).values()], _ = useAppStore((e) => e.remoteServerUpdatesChecking), v = useAppStore((e) => e.remoteServerUpdatesRunning), y = useAppStore((e) => e.refreshRemoteServerUpdates), b = useAppStore((e) => e.startRemoteServerUpdates), x = g.filter((e) => e.phase === "available" || e.phase === "failed"), S = g.length > 0 && !_ && !v && g.every((e) => e.phase === "current" || e.phase === "updated"), C = x.reduce((e, f) => e + f.liveTabCount, 0), w = x.reduce((e, f) => e + f.liveLeafCount, 0), T = C === 1 ? translate("auto.components.settings.RemoteServerUpdateDialog.liveTabOne", "1 live tab") : translate("auto.components.settings.RemoteServerUpdateDialog.liveTabs", "{{value0}} live tabs", { value0: C }), E = w === 1 ? translate("auto.components.settings.RemoteServerUpdateDialog.livePaneOne", "1 live pane") : translate("auto.components.settings.RemoteServerUpdateDialog.livePanes", "{{value0}} live panes", { value0: w });
	return (0, import_react.useEffect)(() => {
		e && y();
	}, [e, y]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: e,
		onOpenChange: f,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[min(720px,calc(100vh-2rem))] gap-4 sm:max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.settings.RemoteServerUpdateDialog.title", "Update Remote Orca Servers") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.settings.RemoteServerUpdateDialog.description", "Review paired servers and update supported installs from this Orca client.") })] }),
				x.length > 0 && (C > 0 || w > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 rounded-lg border border-border bg-muted/40 p-3 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: translate("auto.components.settings.RemoteServerUpdateDialog.restartWarning", "Updating restarts these servers. {{value0}} and {{value1}} may briefly disconnect.", {
						value0: T,
						value1: E
					}) })]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scrollbar-sleek min-h-0 overflow-y-auto rounded-lg border border-border/50 bg-card/30",
					children: g.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 py-8 text-center text-sm text-muted-foreground",
						children: _ ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), translate("auto.components.settings.RemoteServerUpdateDialog.checking", "Checking paired servers…")]
						}) : translate("auto.components.settings.RemoteServerUpdateDialog.empty", "No paired Remote Orca Servers.")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border/50",
						children: g.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerUpdateRow, {
							entry: e,
							disabled: v || _,
							onUpdate: () => void b([e.environmentId])
						}, e.environmentId))
					})
				}),
				_ ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }), translate("auto.components.settings.RemoteServerUpdateDialog.checking", "Checking paired servers…")]
				}) : S ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: translate("auto.components.settings.RemoteServerUpdateDialog.noUpdates", "All servers are up to date.")
				}) : null,
				x.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "sm",
					autoFocus: x.length > 0,
					onClick: () => void b(),
					disabled: _ || v,
					children: translate("auto.components.settings.RemoteServerUpdateDialog.updateAll", "Update all {{value0}} servers", { value0: x.length })
				}) }) : null
			]
		})
	});
}
var RemoteServerUpdateDialog_default = RemoteServerUpdateDialog;
export { RemoteServerUpdateDialog, RemoteServerUpdateDialog_default as default };
