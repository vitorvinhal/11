import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Lock } from "./lock-D3n1DYvR.js";
import { t as useAppStore, u_ as hasRemoteProviderRuntime } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Label } from "./label-CA70r2No.js";
import { n as ToggleGroupItem, t as ToggleGroup } from "./toggle-group-DLxD3BKS.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { n as preventOutsideDismissWhenDirty } from "./linear-api-key-dialog-BDZIULGw.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function JiraConnectDialog({ open: e, onOpenChange: g, onConnected: b, overlayClassName: x, contentClassName: S }) {
	let C = useAppStore((e) => e.connectJira), w = useAppStore((e) => e.settings), T = useMountedRef(), E = (0, import_react.useId)(), D = (0, import_react.useId)(), O = (0, import_react.useId)(), k = (0, import_react.useId)(), [A, j] = (0, import_react.useState)("cloud"), [M, N] = (0, import_react.useState)("pat"), [P, F] = (0, import_react.useState)(""), [I, L] = (0, import_react.useState)(""), [R, z] = (0, import_react.useState)(""), [B, V] = (0, import_react.useState)("idle"), [H, U] = (0, import_react.useState)(null);
	(0, import_react.useLayoutEffect)(() => {
		e && (j("cloud"), N("pat"), F(""), L(""), z(""), V("idle"), U(null));
	}, [e]);
	let W = A === "server", G = W && M === "basic", K = !W || G, q = !!P.trim() && (!K || !!I.trim()) && !!R.trim() && B !== "connecting", J = hasRemoteProviderRuntime(w) ? "Your token is sent to the selected remote runtime and stored there with runtime-supported encryption." : "Your token is stored locally and encrypted when local runtime storage supports it.", Y = () => {
		B === "error" && (V("idle"), U(null));
	}, X = () => {
		L(""), z(""), Y();
	}, Z = (e) => {
		B !== "connecting" && g(e);
	}, Q = preventOutsideDismissWhenDirty(() => P !== "" || I !== "" || R !== ""), $ = async () => {
		let e = P.trim(), _ = I.trim(), v = R.trim();
		if (!(!e || K && !_ || !v || B === "connecting")) {
			V("connecting"), U(null);
			try {
				let y = await C({
					siteUrl: e,
					email: K ? _ : "",
					apiToken: v,
					authType: A
				});
				if (!T.current) return;
				if (y.ok) {
					F(""), L(""), z(""), j("cloud"), N("pat"), V("idle"), g(!1), b?.();
					return;
				}
				V("error"), U(y.error);
			} catch (e) {
				T.current && (V("error"), U(e instanceof Error ? e.message : "Connection failed"));
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: e,
		onOpenChange: Z,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			overlayClassName: x,
			className: cn("sm:max-w-md", S),
			onPointerDownOutside: Q,
			onInteractOutside: Q,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "leading-tight",
					children: translate("auto.components.jira.connect.dialog.8388bdea2b", "Connect Jira site")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: W ? G ? translate("auto.components.jira.connect.dialog.1d947a07ab", "Use a self-hosted Jira base URL, username, and password to browse issues.") : translate("auto.components.jira.connect.dialog.2e2b69e48e", "Use a self-hosted Jira base URL and a personal access token to browse issues.") : translate("auto.components.jira.connect.dialog.d785c42b8b", "Use a Jira Cloud site URL, Atlassian email, and API token to browse issues.") })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-4",
				noValidate: !0,
				onSubmit: (e) => {
					e.preventDefault(), $();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroup, {
							type: "single",
							variant: "outline",
							value: A,
							disabled: B === "connecting",
							onValueChange: (e) => {
								!e || B === "connecting" || (j(e), X());
							},
							"aria-label": translate("auto.components.jira.connect.dialog.b67e919bd5", "Jira instance type"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "cloud",
								className: "h-8 px-3 text-xs",
								children: translate("auto.components.jira.connect.dialog.17787d6e4b", "Atlassian Cloud")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "server",
								className: "h-8 px-3 text-xs",
								children: translate("auto.components.jira.connect.dialog.bc7a831773", "Self-hosted")
							})]
						}),
						W ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToggleGroup, {
							type: "single",
							variant: "outline",
							value: M,
							disabled: B === "connecting",
							onValueChange: (e) => {
								!e || B === "connecting" || (N(e), X());
							},
							"aria-label": translate("auto.components.jira.connect.dialog.f49708c369", "Jira authentication method"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "pat",
								className: "h-8 px-3 text-xs",
								children: translate("auto.components.jira.connect.dialog.730d973bae", "Personal access token")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
								value: "basic",
								className: "h-8 px-3 text-xs",
								children: translate("auto.components.jira.connect.dialog.84a810dd0e", "Username & password")
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: E,
								className: "text-xs",
								children: W ? translate("auto.components.jira.connect.dialog.3489e186d6", "Jira site URL") : translate("auto.components.jira.connect.dialog.e176f9d0c5", "Jira Cloud site URL")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: E,
								autoFocus: !0,
								placeholder: W ? translate("auto.components.jira.connect.dialog.cbc27fa599", "https://jira.example.com") : translate("auto.components.jira.connect.dialog.70fcd360c4", "https://example.atlassian.net"),
								value: P,
								onChange: (e) => {
									F(e.target.value), Y();
								},
								disabled: B === "connecting"
							})]
						}),
						K ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: D,
								className: "text-xs",
								children: G ? translate("auto.components.jira.connect.dialog.8d1223fa5c", "Username") : translate("auto.components.jira.connect.dialog.2849ddb295", "Atlassian email")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: D,
								type: G ? "text" : "email",
								placeholder: G ? translate("auto.components.jira.connect.dialog.be9eba0a1b", "username") : translate("auto.components.jira.connect.dialog.e91b9a4073", "you@example.com"),
								value: I,
								onChange: (e) => {
									L(e.target.value), Y();
								},
								disabled: B === "connecting"
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: O,
								className: "text-xs",
								children: G ? translate("auto.components.jira.connect.dialog.70035652d7", "Password") : W ? translate("auto.components.jira.connect.dialog.730d973bae", "Personal access token") : translate("auto.components.jira.connect.dialog.3d81bf3ab3", "API token")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: O,
								type: "password",
								placeholder: G ? translate("auto.components.jira.connect.dialog.c50abbf340", "Jira account password") : W ? translate("auto.components.jira.connect.dialog.8b9c7b9e7b", "Jira personal access token") : translate("auto.components.jira.connect.dialog.7b3967c12f", "Atlassian API token"),
								value: R,
								onChange: (e) => {
									z(e.target.value), Y();
								},
								disabled: B === "connecting",
								"aria-invalid": B === "error",
								"aria-describedby": B === "error" ? k : void 0
							})]
						}),
						B === "error" && H ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: k,
							className: "text-xs text-destructive",
							children: H
						}) : null,
						G ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: translate("auto.components.jira.connect.dialog.d8737db691", "Use your Jira Server or Data Center account username and password.")
						}) : W ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: translate("auto.components.jira.connect.dialog.ccfb086d3e", "Create a personal access token in your Jira profile under Personal Access Tokens.")
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								translate("auto.components.jira.connect.dialog.8090504a3e", "Create a token in"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-primary underline-offset-2 hover:underline",
									onClick: () => window.api.shell.openUrl("https://id.atlassian.com/manage-profile/security/api-tokens"),
									children: translate("auto.components.jira.connect.dialog.fdd26d81cc", "Atlassian account settings")
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5 text-[11px] text-muted-foreground/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3 shrink-0" }), J]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					onClick: () => g(!1),
					disabled: B === "connecting",
					children: translate("auto.components.jira.connect.dialog.79e7aaed39", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: !q,
					children: B === "connecting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), translate("auto.components.jira.connect.dialog.4a2ab52781", "Verifying…")] }) : translate("auto.components.jira.connect.dialog.63ce735809", "Connect")
				})] })]
			})]
		})
	});
}
export { JiraConnectDialog as t };
