import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as BookOpen } from "./book-open-D-j259i-.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as CircleUserRound } from "./circle-user-round-C3hEEh3M.js";
import { t as Files } from "./files-BnLf-Nq6.js";
import { t as Smartphone } from "./smartphone-BLLzGyB2.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-L_K9-Scr.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { t as Card } from "./card-CvdYnA3L.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function shouldShowUnexpectedSignoutCard(e) {
	return !e.persistedUIReady || e.appVersion === null || e.dismissedVersion !== null ? !1 : e.authStatus?.configured === !0 && e.authStatus.state === "reconnect-required" && e.authStatus.cloud != null;
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function readPreviewFlag() {
	return !1;
}
function FeatureRow({ icon: e, title: _, description: v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium",
				children: _
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-5 text-muted-foreground",
				children: v
			})]
		})]
	});
}
function UnexpectedSignoutCard() {
	let e = useAppStore((e) => e.orcaProfileAuthStatus), _ = useAppStore((e) => e.persistedUIReady), x = useAppStore((e) => e.dismissedUnexpectedSignoutVersion), S = useAppStore((e) => e.unexpectedSignoutDismissedVersions), C = useAppStore((e) => e.dismissUnexpectedSignoutCard), w = useAppStore((e) => e.connectCurrentOrcaProfile), [T, E] = (0, import_react.useState)(null), [D, O] = (0, import_react.useState)(!1), [k, A] = (0, import_react.useState)(!1), [j] = (0, import_react.useState)(readPreviewFlag), [M, N] = (0, import_react.useState)(!1), [P, F] = (0, import_react.useState)("unseen");
	(0, import_react.useEffect)(() => {
		let e = !1, _ = 0, v = null, y = () => {
			_ += 1, useAppStore.getState().fetchOrcaProfileAuthStatus().then((b) => {
				e || (b == null ? _ < 3 && (v = window.setTimeout(() => {
					v = null, y();
				}, 500)) : O(!0));
			});
		};
		return y(), () => {
			e = !0, v !== null && window.clearTimeout(v);
		};
	}, []), (0, import_react.useEffect)(() => {
		let e = !1;
		return window.api.updater.getVersion().then((_) => {
			e || E(_);
		}).catch(() => {
			e || E(null);
		}), () => {
			e = !0;
		};
	}, []);
	let I = S[0] ?? x, L = shouldShowUnexpectedSignoutCard({
		authStatus: e,
		persistedUIReady: _,
		appVersion: T,
		dismissedVersion: P === "visible" ? null : I
	}), R = j ? _ && !M : D && P !== "closed" && L;
	if ((0, import_react.useEffect)(() => {
		j || (R && P === "unseen" && T ? (F("visible"), C(T)) : !R && P === "visible" && F("closed"));
	}, [
		j,
		R,
		P,
		T,
		C
	]), !R) return null;
	let z = e?.cloud?.email?.trim() || null, B = e?.configured === !0, V = () => {
		j ? N(!0) : F("closed");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "py-0 gap-0 shadow-floating",
		role: "complementary",
		"aria-live": "polite",
		"aria-labelledby": "unexpected-signout-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2.5 p-3.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleUserRound, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							id: "unexpected-signout-heading",
							className: "text-sm font-semibold",
							children: translate("auto.components.UnexpectedSignoutCard.9f2c1a4b7d", "You've been signed out")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "size-7 shrink-0",
						onClick: V,
						"aria-label": translate("auto.components.UnexpectedSignoutCard.3e8f5c2a91", "Dismiss"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: z ? translate("auto.components.UnexpectedSignoutCard.7b4d9e1f2a", "Sign in again as {{value0}} to restore Artifact sharing, Orca Relay, and skill sharing.", { value0: z }) : translate("auto.components.UnexpectedSignoutCard.5a1c8d3e6f", "Sign in again to restore Artifact sharing, Orca Relay, and skill sharing.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible, {
					open: k,
					onOpenChange: A,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							className: "w-fit gap-1 px-1 text-xs text-muted-foreground",
							"aria-expanded": k,
							children: [translate("auto.components.UnexpectedSignoutCard.1f6b2c9d4e", "What you get back"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 transition-transform", k && "rotate-180") })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleContent, {
						className: "space-y-3 pt-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureRow, {
								icon: Files,
								title: translate("auto.components.UnexpectedSignoutCard.8d2e4f7a1b", "Artifact sharing"),
								description: translate("auto.components.UnexpectedSignoutCard.2c9a5b6e8d", "Publish HTML and Markdown files and manage every shared link from Orca.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureRow, {
								icon: Smartphone,
								title: translate("auto.components.UnexpectedSignoutCard.6e3f1a9c5b", "Orca Relay"),
								description: translate("auto.components.UnexpectedSignoutCard.4b7d2e8f1a", "Connect Orca Mobile to this desktop across cellular or any Wi-Fi.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureRow, {
								icon: BookOpen,
								title: translate("auto.components.UnexpectedSignoutCard.9a4c6b2d7e", "Skill sharing"),
								description: translate("auto.components.UnexpectedSignoutCard.3d8e5f1b9c", "Share skills behind an unlisted link and install them on any machine you use.")
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 flex gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "default",
						size: "sm",
						className: "flex-1",
						disabled: !B,
						onClick: () => void w(),
						children: translate("auto.components.UnexpectedSignoutCard.c5b3e8a17d", "Sign in to Orca")
					})
				})
			]
		})
	}) });
}
export { UnexpectedSignoutCard };
