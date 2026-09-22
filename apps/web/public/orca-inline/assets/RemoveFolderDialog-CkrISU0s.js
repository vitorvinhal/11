import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { ZS as getRepoExecutionHostId, t as useAppStore, tC as isRuntimeOwnedSshTargetId } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), NAME_TOKEN = "\0", RemoveFolderDialog_default = import_react.memo(function() {
	let e = useAppStore((e) => e.activeModal), h = useAppStore((e) => e.modalData), g = useAppStore((e) => e.closeModal), _ = useAppStore((e) => e.removeProject), v = e === "confirm-remove-folder", y = typeof h.repoId == "string" ? h.repoId : "", b = typeof h.displayName == "string" ? h.displayName : "", x = typeof h.hostId == "string" ? h.hostId : null, S = useAppStore((e) => e.repos.find((e) => e.id === y && (!x || getRepoExecutionHostId(e) === x))?.connectionId?.trim() ?? null), C = useAppStore((e) => S ? e.sshTargetLabels.get(S) ?? e.removedSshTargetLabels.get(S) ?? S : null), [w, T] = (isRuntimeOwnedSshTargetId(S) ? translate("auto.components.sidebar.RemoveFolderDialog.removeDescriptionVmRecipe", "This removes {{name}} from Orca. Its VM recipe determines whether the environment and its files are permanently deleted.", { name: NAME_TOKEN }) : C ? translate("auto.components.sidebar.RemoveFolderDialog.removeDescriptionSsh", "This only removes {{name}} from Orca. Its files stay on {{host}} — re-add that SSH host to recover it.", {
		name: NAME_TOKEN,
		host: C
	}) : translate("auto.components.sidebar.RemoveFolderDialog.removeDescriptionLocal", "This only removes {{name}} from Orca. It is still on your disk.", { name: NAME_TOKEN })).split(NAME_TOKEN), E = (0, import_react.useCallback)(() => {
		y && _(y, {
			...x ? { hostId: x } : {},
			errorFeedback: "toast"
		}), g();
	}, [
		g,
		x,
		_,
		y
	]), D = (0, import_react.useCallback)((e) => {
		e || g();
	}, [g]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: v,
		onOpenChange: D,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-sm sm:max-w-sm",
			showCloseButton: !1,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-sm",
				children: translate("auto.components.sidebar.RemoveFolderDialog.b79b39d865", "Remove Project")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
				className: "text-xs",
				children: [
					w,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "break-all font-medium text-foreground",
						children: b
					}),
					T
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => D(!1),
				children: translate("auto.components.sidebar.RemoveFolderDialog.d36883e046", "Cancel")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "destructive",
				onClick: E,
				children: translate("auto.components.sidebar.RemoveFolderDialog.4dc5b5065b", "Remove")
			})] })]
		})
	});
});
export { RemoveFolderDialog_default as default };
