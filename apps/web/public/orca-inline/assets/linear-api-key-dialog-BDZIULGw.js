import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Lock } from "./lock-D3n1DYvR.js";
import { Yv as getActiveRuntimeTarget, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Label } from "./label-CA70r2No.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { f as buildLinearWorkspaceApiSettingsUrl, u as buildLinearPersonalApiKeySettingsUrl } from "./gitlab-links-Di3ozbga.js";
function preventOutsideDismissWhenDirty(e) {
	return (w) => {
		e() && w.preventDefault();
	};
}
const CLOSED_LINEAR_API_KEY_DIALOG_STATE = Object.freeze({
	apiKeyDraft: "",
	connectState: "idle",
	connectError: null
});
function createLinearApiKeyDialogState() {
	return CLOSED_LINEAR_API_KEY_DIALOG_STATE;
}
function resolveLinearApiKeyDialogState(e, w) {
	return w || e.apiKeyDraft === "" && e.connectState === "idle" && e.connectError === null ? e : CLOSED_LINEAR_API_KEY_DIALOG_STATE;
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function LinearApiKeyDialog({ open: e, onOpenChange: w, workspace: E, title: D, description: O, connectLabel: k, onConnected: A, overlayClassName: j, contentClassName: M }) {
	let N = useAppStore((e) => e.settings), P = useAppStore((e) => e.connectLinear), F = useMountedRef(), I = (0, import_react.useId)(), L = (0, import_react.useId)(), [R, z] = (0, import_react.useState)(createLinearApiKeyDialogState), B = (0, import_react.useMemo)(() => getActiveRuntimeTarget(N), [N]), V = buildLinearPersonalApiKeySettingsUrl(E?.organizationUrlKey), H = buildLinearWorkspaceApiSettingsUrl(E?.organizationUrlKey), U = k ?? (E ? "Update access" : "Connect"), W = resolveLinearApiKeyDialogState(R, e);
	W !== R && z(W);
	let { apiKeyDraft: G, connectState: K, connectError: q } = W, J = (e) => {
		K !== "connecting" && w(e);
	}, Y = preventOutsideDismissWhenDirty(() => G !== ""), X = async () => {
		let e = G.trim();
		if (!(!e || K === "connecting")) {
			z((e) => ({
				...e,
				connectState: "connecting",
				connectError: null
			}));
			try {
				let T = await P(e);
				if (!F.current) return;
				if (T.ok) {
					z(createLinearApiKeyDialogState()), w(!1), A?.();
					return;
				}
				z((e) => ({
					...e,
					connectState: "error",
					connectError: T.error
				}));
			} catch (e) {
				F.current && z((w) => ({
					...w,
					connectState: "error",
					connectError: e instanceof Error ? e.message : "Connection failed"
				}));
			}
		}
	}, Z = D ?? (E ? `Update Linear access for ${E.organizationName}` : "Add Linear access"), Q = O ?? (E ? `Paste a Personal API key for ${E.organizationName}. If this workspace is already connected, Orca replaces its stored key.` : "Paste a Personal API key for the Linear workspace you want Orca to use. If that workspace is already connected, Orca replaces its stored key."), $ = B.kind === "environment" ? "This key is stored by the active remote runtime." : "Local runtime keys are stored on this device using Electron encrypted storage when available.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: e,
		onOpenChange: J,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			overlayClassName: j,
			className: cn("sm:max-w-lg", M),
			onPointerDownOutside: Y,
			onInteractOutside: Y,
			onKeyDown: (e) => {
				e.key === "Enter" && G.trim() && K !== "connecting" && (e.preventDefault(), X());
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "leading-tight",
						children: Z
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: Q })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: I,
								className: "text-xs",
								children: translate("auto.components.linear.api.key.dialog.7d498f653c", "Personal API key")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: I,
								autoFocus: !0,
								type: "password",
								placeholder: translate("auto.components.linear.api.key.dialog.edec49dfae", "lin_api_..."),
								value: G,
								onChange: (e) => {
									let w = e.target.value;
									z((e) => ({
										apiKeyDraft: w,
										connectState: e.connectState === "error" ? "idle" : e.connectState,
										connectError: e.connectState === "error" ? null : e.connectError
									}));
								},
								disabled: K === "connecting",
								"aria-invalid": K === "error",
								"aria-describedby": K === "error" ? L : void 0
							})]
						}),
						K === "error" && q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: L,
							className: "text-xs text-destructive",
							children: q
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-xs leading-relaxed text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									translate("auto.components.linear.api.key.dialog.af52a6227f", "Create a Personal API key from Account > Security & Access."),
									" ",
									E ? null : translate("auto.components.linear.api.key.dialog.c9889a09f8", "Use Linear to choose the intended workspace before creating the key.")
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: translate("auto.components.linear.api.key.dialog.d56d3629f4", "Prefer full access when Orca should show every team the account can access in that workspace. Restricted keys only expose permitted teams, and private teams require the key owner to have access.") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: translate("auto.components.linear.api.key.dialog.e3100b36b9", "If member API keys are blocked, ask a workspace admin to allow them from workspace API settings.") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "inline-flex items-center gap-1 text-primary underline-offset-2 hover:underline",
											onClick: () => window.api.shell.openUrl(V),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), translate("auto.components.linear.api.key.dialog.dc7ccb0f7c", "Personal API keys")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground/60",
											children: "|"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "inline-flex items-center gap-1 text-primary underline-offset-2 hover:underline",
											onClick: () => window.api.shell.openUrl(H),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), translate("auto.components.linear.api.key.dialog.e603ee9156", "Workspace API settings")]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5 text-[11px] text-muted-foreground/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3 shrink-0" }), $]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => w(!1),
					disabled: K === "connecting",
					children: translate("auto.components.linear.api.key.dialog.f8f704a019", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => void X(),
					disabled: !G.trim() || K === "connecting",
					children: K === "connecting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), translate("auto.components.linear.api.key.dialog.834a52c084", "Verifying...")] }) : U
				})] })
			]
		})
	});
}
export { preventOutsideDismissWhenDirty as n, LinearApiKeyDialog as t };
