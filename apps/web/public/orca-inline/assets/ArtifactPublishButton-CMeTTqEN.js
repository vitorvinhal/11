import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as ArrowRight } from "./arrow-right-DHTXzy8t.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as Share2 } from "./share-2-BJqAT1ee.js";
import { Gv as callRuntimeRpc, Sm as dirname, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { a as PopoverTrigger, i as PopoverContent, t as Popover } from "./popover-DHL-338i.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { s as keybindingMatchesAction } from "./keybindings-1v53ESY9.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { n as openArtifactInBrowser, t as copyArtifactLink } from "./artifact-link-actions-1DImW3uX.js";
var GitCompareArrows = createLucideIcon("git-compare-arrows", [
	["circle", {
		cx: "5",
		cy: "6",
		r: "3",
		key: "1qnov2"
	}],
	["path", {
		d: "M12 6h5a2 2 0 0 1 2 2v7",
		key: "1yj91y"
	}],
	["path", {
		d: "m15 9-3-3 3-3",
		key: "1lwv8l"
	}],
	["circle", {
		cx: "19",
		cy: "18",
		r: "3",
		key: "1qljk2"
	}],
	["path", {
		d: "M12 18H7a2 2 0 0 1-2-2V9",
		key: "16sdep"
	}],
	["path", {
		d: "m9 15 3 3-3 3",
		key: "1m3kbl"
	}]
]);
function isAbsolutePathLike(e) {
	return e.startsWith("/") || e.startsWith("\\\\") || /^[A-Za-z]:[\\/]/.test(e);
}
function canUseChangesModeForFile(e) {
	return e.mode === "edit" && !e.isUntitled && e.relativePath !== e.filePath && !isAbsolutePathLike(e.relativePath);
}
function getUntitledFileRoot(e, g) {
	if (g) return g;
	if (!e.relativePath) return dirname(e.filePath);
	let _ = e.filePath.length - e.relativePath.length - 1;
	return _ <= 0 ? dirname(e.filePath) : e.filePath.slice(0, _);
}
var MARKDOWN_EDIT_VIEW_MODES = ["source", "rich"], MARKDOWN_DIFF_VIEW_MODES = ["source", "rich"], MERMAID_VIEW_MODES = ["source", "rich"], CSV_VIEW_MODES = ["source", "rich"], NOTEBOOK_VIEW_MODES = ["source", "rich"], NO_VIEW_MODES = [], CODE_EDIT_TOGGLE_MODES = ["edit", "changes"];
function getEditorToggleModes(e) {
	if (e.mode !== "edit") return getMarkdownViewModes(e);
	if (e.language === "notebook") return NOTEBOOK_VIEW_MODES;
	let g = getMarkdownViewModes(e);
	return g.length > 0 ? [...g, "changes"] : CODE_EDIT_TOGGLE_MODES;
}
function getMarkdownViewModes(e) {
	if (e.language === "markdown") {
		if (e.mode === "edit") return MARKDOWN_EDIT_VIEW_MODES;
		if (e.mode === "diff" && e.diffSource !== "combined-all" && e.diffSource !== "combined-uncommitted" && e.diffSource !== "combined-branch" && e.diffSource !== "combined-commit") return MARKDOWN_DIFF_VIEW_MODES;
	}
	return e.language === "mermaid" && e.mode === "edit" ? MERMAID_VIEW_MODES : (e.language === "csv" || e.language === "tsv") && e.mode === "edit" ? CSV_VIEW_MODES : e.language === "notebook" && e.mode === "edit" ? NOTEBOOK_VIEW_MODES : NO_VIEW_MODES;
}
function getDefaultMarkdownViewMode(e) {
	return e.language === "markdown" && e.mode === "diff" ? "source" : getMarkdownViewModes(e).includes("rich") ? "rich" : "source";
}
function canOpenMarkdownPreview(e) {
	return e.language === "markdown" && e.mode === "edit";
}
function isMarkdownPreviewShortcut(e, g, _) {
	return keybindingMatchesAction("editor.markdownPreview", e, g, _);
}
const ARTIFACT_MAX_CONTENT_BYTES = 10 * 1024 * 1024;
function artifactContentByteLength(e) {
	return new TextEncoder().encode(e).byteLength;
}
function artifactWriteRequestByteLength(e) {
	return new TextEncoder().encode(JSON.stringify(e)).byteLength;
}
var LOCAL_RUNTIME$1 = { kind: "local" }, ArtifactPublishPreparationError = class extends Error {
	constructor(e) {
		super(e), this.code = e;
	}
};
function validateArtifactPublishRequest(e) {
	if (!e.content) throw new ArtifactPublishPreparationError("empty");
	if (artifactContentByteLength(e.content) > 10485760 || artifactWriteRequestByteLength(e) > 11534336) throw new ArtifactPublishPreparationError("too-large");
	return e;
}
async function publishArtifactFromSurface(e) {
	try {
		if (!await ensureArtifactAccountConnected()) return null;
		for (let g = 0; g < 2; g += 1) {
			let v = await callRuntimeRpc(LOCAL_RUNTIME$1, "artifacts.publish", validateArtifactPublishRequest(await e()));
			if (v.status === "ok") return showArtifactPublishedToast(v.value), v.value;
			if (v.status === "unconfigured") return toast.error(translate("auto.components.artifacts.artifact-publish-flow.9a078a0c65", "Artifact sharing is unavailable"), { description: v.message }), null;
			if (!(g === 0 && await reconnectArtifactAccount())) return toast.error(translate("auto.components.artifacts.artifact-publish-flow.bba20daa6d", "Sign in to Orca and try again.")), null;
		}
	} catch (e) {
		console.error("Failed to publish artifact:", e), toast.error(translate("auto.components.artifacts.artifact-publish-flow.54b1805328", "Could not share artifact"), e instanceof ArtifactPublishPreparationError ? { description: artifactPreparationErrorDescription(e.code) } : void 0);
	}
	return null;
}
async function ensureArtifactAccountConnected() {
	let e = useAppStore.getState();
	return e.orcaProfileAuthStatus?.state === "connected" ? !0 : (await e.connectCurrentOrcaProfile())?.status === "connected";
}
async function reconnectArtifactAccount() {
	return (await useAppStore.getState().connectCurrentOrcaProfile())?.status === "connected";
}
function showArtifactPublishedToast(e) {
	toast.success(e.change === "created" ? translate("auto.components.artifacts.artifact-publish-flow.430019efd0", "Artifact shared") : translate("auto.components.artifacts.artifact-publish-flow.2fc727c831", "Artifact updated"));
}
function artifactPreparationErrorDescription(e) {
	switch (e) {
		case "empty": return translate("auto.components.artifacts.artifact-publish-flow.fbb5018602", "This file is empty.");
		case "too-large": return translate("auto.components.artifacts.artifact-publish-flow.6112db5a1c", "This artifact is too large to share.");
		case "unreadable": return translate("auto.components.artifacts.artifact-publish-flow.e2ed5acd8c", "Orca couldn't read this file. Open it from a workspace and try again.");
		case "unsupported": return translate("auto.components.artifacts.artifact-publish-flow.6d475e9b25", "Only local HTML and Markdown files can be shared as artifacts.");
		case "binary": return translate("auto.components.artifacts.artifact-publish-flow.29a406be09", "Artifacts must contain text.");
	}
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function ArtifactPublishedLinkPanel({ shareUrl: e, publishing: g, sharingEnabled: y, onUpdate: b }) {
	let [x, E] = (0, import_react.useState)(!1), D = (0, import_react.useRef)(null), O = (0, import_react.useRef)(!1), k = (0, import_react.useCallback)(() => {
		D.current !== null && (window.clearTimeout(D.current), D.current = null);
	}, []), A = (0, import_react.useCallback)((e) => {
		O.current = e !== null, e || k();
	}, [k]), j = async () => {
		await copyArtifactLink(e, { showSuccessToast: !1 }) && O.current && (E(!0), k(), D.current = window.setTimeout(() => {
			D.current = null, E(!1);
		}, 1500));
	}, M = x ? translate("auto.components.artifacts.copySuccess", "Artifact link copied") : translate("auto.components.artifacts.ArtifactPublishedLinkPanel.copyLink", "Copy link");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: A,
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-0.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-w-0 flex-1 truncate font-mono text-[11px] text-muted-foreground",
					title: e,
					children: e
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon-xs",
						className: "text-muted-foreground hover:text-foreground",
						onClick: () => void j(),
						"aria-label": M,
						children: x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "bottom",
					sideOffset: 4,
					children: M
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon-xs",
						className: "text-muted-foreground hover:text-foreground",
						onClick: () => openArtifactInBrowser(e),
						"aria-label": translate("auto.components.artifacts.ArtifactPublishedLinkPanel.openLink", "Open link"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "bottom",
					sideOffset: 4,
					children: translate("auto.components.artifacts.ArtifactPublishedLinkPanel.openLink", "Open link")
				})] })
			]
		}), y ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			className: "w-full",
			disabled: g,
			onClick: b,
			children: [g ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {}), g ? translate("auto.components.artifacts.ArtifactPublishedLinkPanel.updating", "Updating…") : translate("auto.components.artifacts.ArtifactPublishedLinkPanel.update", "Update shared content")]
		}) : null]
	});
}
var LOCAL_RUNTIME = { kind: "local" };
async function getPublishedArtifactLink(e) {
	let g = await callRuntimeRpc(LOCAL_RUNTIME, "artifacts.getPublishedLink", { sourceKey: e });
	if (g.status === "ok") return g.value?.shareUrl ?? null;
	throw Error(g.status);
}
function ArtifactPublishButton({ sourceKey: e, createRequest: g, className: b, disabled: S }) {
	let [C, w] = (0, import_react.useState)(!1), [T, D] = (0, import_react.useState)(!1), [O, A] = (0, import_react.useState)(0), [N, P] = (0, import_react.useState)(null), F = (0, import_react.useRef)(0), I = (0, import_react.useRef)(null), L = useAppStore((e) => e.orcaProfileAuthStatus), R = useAppStore((e) => e.connectCurrentOrcaProfile), z = useAppStore((e) => e.openSettingsPage), B = useAppStore((e) => e.openSettingsTarget), V = useAppStore((e) => e.settings), H = L?.state === "connected", U = V?.artifactSharingEnabled === !0, W = L?.state === "connected" ? JSON.stringify([
		L.activeProfileId,
		L.cloud?.userId ?? null,
		L.cloud?.cloudProfileId ?? null,
		L.cloud?.activeOrgId ?? null
	]) : null, G = W ? JSON.stringify([W, e]) : null, K = N?.key === G ? N : null, q = H && K?.status !== "loaded" && K?.status !== "error", J = K?.status === "loaded" ? K.shareUrl : null, Y = T, X = S || Y;
	(0, import_react.useEffect)(() => {
		let g = ++F.current;
		if (!C || !G) {
			P(null);
			return;
		}
		return P({
			key: G,
			status: "loading",
			shareUrl: null
		}), getPublishedArtifactLink(e).then((e) => {
			F.current === g && P({
				key: G,
				status: "loaded",
				shareUrl: e
			});
		}).catch((e) => {
			console.error("Failed to check published artifact link:", e), F.current === g && P({
				key: G,
				status: "error",
				shareUrl: null
			});
		}), () => {
			F.current += 1;
		};
	}, [
		G,
		O,
		C,
		e
	]);
	let Z = async () => {
		if (!(X || !H || !U)) {
			D(!0);
			try {
				let e = await publishArtifactFromSurface(g);
				e && G && P({
					key: G,
					status: "loaded",
					shareUrl: e.item.shareUrl
				});
			} finally {
				D(!1);
			}
		}
	}, Q = () => {
		w(!1), B({
			pane: "artifacts",
			repoId: null
		}), z();
	}, $ = translate("auto.components.artifacts.ArtifactPublishButton.a4a49da6af", "Share as artifact");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open: C,
		onOpenChange: (e) => !Y && w(e),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon-sm",
					className: cn("shrink-0", b),
					disabled: X,
					"aria-label": $,
					children: T ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {})
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: "bottom",
			sideOffset: 4,
			children: $
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
			ref: I,
			tabIndex: -1,
			align: "end",
			sideOffset: 6,
			className: "w-80 p-0",
			onOpenAutoFocus: (e) => {
				e.preventDefault(), I.current?.focus({ preventScroll: !0 });
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1 border-b border-border/60 px-4 py-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: translate("auto.components.artifacts.ArtifactPublishButton.confirmTitle", "Share as artifact")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-5 text-muted-foreground",
					children: J ? translate("auto.components.artifacts.ArtifactPublishButton.publishedDescription", "Anyone with this link can view the shared file.") : translate("auto.components.artifacts.ArtifactPublishButton.confirmDescription", "This publishes the current file at a link anyone with the URL can view.")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 p-4",
				children: [
					H ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 space-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium",
								children: translate("auto.components.artifacts.ArtifactPublishButton.accountTitle", "Orca account")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] leading-4 text-muted-foreground",
								children: translate("auto.components.artifacts.ArtifactPublishButton.accountDescription", "Sign in to create and manage this link.")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "xs",
							disabled: L?.configured !== !0,
							onClick: () => void R(),
							children: L?.state === "reconnect-required" ? translate("auto.components.artifacts.ArtifactPublishButton.signInAgain", "Sign in again") : translate("auto.components.artifacts.ArtifactPublishButton.signIn", "Sign in")
						})]
					}),
					U ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("space-y-2", !H && "border-t border-border/60 pt-3"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium",
								children: translate("auto.components.artifacts.ArtifactPublishButton.publishingOffTitle", "Artifact sharing is off")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] leading-4 text-muted-foreground",
								children: translate("auto.components.artifacts.ArtifactPublishButton.publishingOffDescription", "Learn about public links and enable sharing in Settings.")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "w-full",
							onClick: Q,
							children: [translate("auto.components.artifacts.ArtifactPublishButton.openSettings", "Open Artifacts settings"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})]
					}),
					q ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 py-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }), translate("auto.components.artifacts.ArtifactPublishButton.checkingLink", "Checking for an existing link…")]
					}) : K?.status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-5 text-muted-foreground",
							children: translate("auto.components.artifacts.ArtifactPublishButton.checkFailed", "Could not check for an existing link.")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							className: "w-full",
							onClick: () => A((e) => e + 1),
							children: translate("auto.components.artifacts.ArtifactPublishButton.tryAgain", "Try again")
						})]
					}) : J ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactPublishedLinkPanel, {
						shareUrl: J,
						publishing: T,
						sharingEnabled: U,
						onUpdate: () => void Z()
					}, J) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "sm",
						className: "w-full",
						disabled: !H || !U || Y,
						onClick: () => void Z(),
						children: [T ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {}), T ? translate("auto.components.artifacts.ArtifactPublishButton.sharing", "Sharing…") : translate("auto.components.artifacts.ArtifactPublishButton.sharePublicLink", "Generate link")]
					})
				]
			})]
		})]
	});
}
export { getDefaultMarkdownViewMode as a, isMarkdownPreviewShortcut as c, isAbsolutePathLike as d, GitCompareArrows as f, canOpenMarkdownPreview as i, getUntitledFileRoot as l, ArtifactPublishPreparationError as n, getEditorToggleModes as o, ARTIFACT_MAX_CONTENT_BYTES as r, getMarkdownViewModes as s, ArtifactPublishButton as t, canUseChangesModeForFile as u };
