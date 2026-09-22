import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import "./worktree-activation-u-wSAPlP.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as ServerOff } from "./server-off-DaMn7a-t.js";
import { t as Server } from "./server-BmPwXRCG.js";
import { sC as toSshExecutionHostId, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import "./window-park-visibility-BBcurIcE.js";
import "./selectors-Cdg4hUQI.js";
import "./web-runtime-session-CeAC5QPx.js";
import "./agent-paste-draft-Ddp-k6QZ.js";
import "./agent-process-recognition-BUFJTuDF.js";
import "./native-chat-session-option-cache-DOY0fjiI.js";
import "./gitlab-links-Di3ozbga.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./localized-catalog-Dsz6wk5E.js";
import "./connection-context-2sxF2wah.js";
import "./web-session-tabs-sync-BfOF1RHT.js";
import "./pane-agent-owner-Ci26i0GA.js";
import { i as runWorktreeDeleteWithToast } from "./delete-worktree-flow-DRix0Gy6.js";
import "./preserved-branch-batch-toast-C08Rnofp.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function isForgetModalData(n) {
	if (!n || typeof n != "object") return !1;
	let y = n;
	return typeof y.worktreeId == "string" && y.resolution != null;
}
function ForgetSshWorkspaceDialog() {
	let n = useAppStore((n) => n.modalData), y = useAppStore((n) => n.closeModal), x = useAppStore((n) => {
		let y = isForgetModalData(n.modalData) ? n.modalData.resolution : null, b = y && y.kind !== "not-ssh" ? y.targetId : void 0;
		return b ? n.sshTargetLabels.get(b) ?? n.removedSshTargetLabels.get(b) ?? b : "";
	}), [S, C] = (0, import_react.useState)(null), w = useMountedRef();
	if (!isForgetModalData(n)) return null;
	let { worktreeId: T, displayName: E, resolution: D } = n, O = D.kind === "disconnected", k = {
		id: T,
		executionHostId: D.kind === "not-ssh" ? null : toSshExecutionHostId(D.targetId)
	}, A = () => {
		w.current && (C(null), y());
	}, j = async () => {
		if (D.kind === "disconnected") {
			C("reconnect");
			try {
				await window.api.ssh.connect({ targetId: D.targetId });
			} catch (n) {
				w.current && C(null), toast.error(n instanceof Error ? n.message : translate("auto.components.sidebar.ForgetSshWorkspaceDialog.reconnectFailed", "Reconnection failed"));
				return;
			}
			y(), runWorktreeDeleteWithToast(k, E), w.current && C(null);
		}
	}, M = async () => {
		C("forget");
		try {
			let n = await useAppStore.getState().removeWorktree(k, !1, { mode: "forget-local" });
			if (!n.ok) {
				toast.error(n.error), w.current && C(null);
				return;
			}
			A();
		} catch (n) {
			toast.error(n instanceof Error ? n.message : String(n)), w.current && C(null);
		}
	}, N = translate("auto.components.sidebar.ForgetSshWorkspaceDialog.forgetBody", "Removes this workspace from Orca only. Files, the Git worktree, and branches on {{host}} are left untouched.", { host: x });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !0,
		onOpenChange: (n) => n ? void 0 : y(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md gap-3 p-5",
			showCloseButton: !1,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "flex items-center gap-2 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerOff, { className: "size-4 text-muted-foreground" }), translate("auto.components.sidebar.ForgetSshWorkspaceDialog.title", "Delete “{{name}}”?", { name: E })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs",
						children: O ? translate("auto.components.sidebar.ForgetSshWorkspaceDialog.disconnectedBody", "The SSH host for this workspace is not connected. Reconnect to delete it on the remote too, or remove it from Orca only.") : translate("auto.components.sidebar.ForgetSshWorkspaceDialog.ghostBody", "{{host}} is no longer a saved SSH host, so this workspace is no longer connected to a live host. It can only be removed from Orca — files and branches on the remote are left untouched.", { host: x })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 rounded-md border border-border/50 bg-card/40 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate text-xs font-medium",
						children: x
					})]
				}),
				O ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] leading-snug text-muted-foreground",
					children: N
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => y(),
							disabled: S != null,
							children: translate("auto.components.sidebar.ForgetSshWorkspaceDialog.cancel", "Cancel")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => void M(),
							disabled: S != null,
							children: [S === "forget" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : null, translate("auto.components.sidebar.ForgetSshWorkspaceDialog.forget", "Remove from Orca")]
						}),
						O ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => void j(),
							disabled: S != null,
							children: [S === "reconnect" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : null, translate("auto.components.sidebar.ForgetSshWorkspaceDialog.reconnectAndDelete", "Reconnect & Delete")]
						}) : null
					]
				})
			]
		})
	});
}
var ForgetSshWorkspaceDialog_default = ForgetSshWorkspaceDialog;
export { ForgetSshWorkspaceDialog, ForgetSshWorkspaceDialog_default as default };
