import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function SshPassphraseDialog() {
	let e = useAppStore((e) => e.sshCredentialQueue[0] ?? null), m = useAppStore((e) => e.sshTargetLabels), h = useAppStore((e) => e.removeSshCredentialRequest), [g, _] = (0, import_react.useState)(""), [v, y] = (0, import_react.useState)(!1), b = (0, import_react.useRef)(null), x = (0, import_react.useRef)(null), S = e !== null, C = e?.requestId, [w, T] = (0, import_react.useState)(C);
	C !== w && (T(C), C && (_(""), y(!1)));
	let E = (0, import_react.useCallback)((e) => {
		b.current = e, x.current !== null && (cancelAnimationFrame(x.current), x.current = null), !(!e || !C) && (x.current = requestAnimationFrame(() => {
			x.current = null, b.current === e && e.focus();
		}));
	}, [C]), D = (0, import_react.useCallback)(async () => {
		if (!(!e || !g)) {
			y(!0);
			try {
				await window.api.ssh.submitCredential({
					requestId: e.requestId,
					value: g
				}), h(e.requestId);
			} catch (e) {
				toast.error(e instanceof Error ? e.message : translate("auto.components.settings.SshPassphraseDialog.b8e88fd0de", "Failed to submit SSH credential")), y(!1);
			}
		}
	}, [
		e,
		g,
		h
	]), O = (0, import_react.useCallback)(async () => {
		if (e) {
			y(!0);
			try {
				await window.api.ssh.submitCredential({
					requestId: e.requestId,
					value: null
				}), h(e.requestId);
			} catch (e) {
				toast.error(e instanceof Error ? e.message : translate("auto.components.settings.SshPassphraseDialog.c55f105262", "Failed to cancel SSH credential request")), y(!1);
			}
		}
	}, [e, h]);
	if (!e) return null;
	let k = m.get(e.targetId) ?? e.targetId, A = e.kind === "password", j = e.kind === "keyboard-interactive";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: S,
		onOpenChange: (e) => !e && void O(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			showCloseButton: !1,
			overlayClassName: "!z-[140]",
			className: "!z-[150] max-w-[360px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm",
					children: j ? translate("auto.components.settings.SshPassphraseDialog.a21f9e74c0", "SSH Verification") : A ? translate("auto.components.settings.SshPassphraseDialog.106bd57f4a", "SSH Password") : translate("auto.components.settings.SshPassphraseDialog.1f3dde805d", "SSH Key Passphrase")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-xs",
					children: j ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						translate("auto.components.settings.SshPassphraseDialog.981352fb42", "Complete the verification challenge for"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: k
						})
					] }) : A ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						translate("auto.components.settings.SshPassphraseDialog.dbf9b6f2d0", "Enter the password for"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: k
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						translate("auto.components.settings.SshPassphraseDialog.ce4fdf7914", "Enter the passphrase for"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: k
						})
					] })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "ssh-credential-input",
					className: "text-[11px] font-medium text-muted-foreground mb-1 block whitespace-pre-wrap break-words",
					children: j ? e.detail : A ? translate("auto.components.settings.SshPassphraseDialog.cab3d5f5a5", "Password for {{value0}}", { value0: e.detail }) : translate("auto.components.settings.SshPassphraseDialog.8a349e3fac", "Passphrase for {{value0}}", { value0: e.detail })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "ssh-credential-input",
					ref: E,
					type: "password",
					value: g,
					onChange: (e) => _(e.target.value),
					onKeyDown: (e) => {
						e.key === "Enter" && (e.preventDefault(), D());
					},
					placeholder: j ? translate("auto.components.settings.SshPassphraseDialog.456516603b", "Enter response") : A ? translate("auto.components.settings.SshPassphraseDialog.abaa0dc653", "Enter password") : translate("auto.components.settings.SshPassphraseDialog.c3ce71aad6", "Enter passphrase"),
					className: "h-8 text-sm",
					disabled: v
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "mt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => void O(),
						disabled: v,
						children: translate("auto.components.settings.SshPassphraseDialog.d5a234456f", "Cancel")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => void D(),
						disabled: !g || v,
						children: j ? translate("auto.components.settings.SshPassphraseDialog.c624f64b86", "Continue") : A ? translate("auto.components.settings.SshPassphraseDialog.bec2c1318f", "Connect") : translate("auto.components.settings.SshPassphraseDialog.405066423c", "Unlock")
					})]
				})
			]
		})
	});
}
export { SshPassphraseDialog };
