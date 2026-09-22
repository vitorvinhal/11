import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as CircleAlert } from "./circle-alert-xAjxBVzK.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Minus } from "./minus-Dme7h17H.js";
import { t as Network } from "./network-C_NPrebj.js";
import { t as RotateCw } from "./rotate-cw-CYY-qFyR.js";
import { t as ShieldAlert } from "./shield-alert-CcO6zlBY.js";
import { pi as getReleaseNotesUrlForVersion, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Progress } from "./progress-pVm2EiQa.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { t as Card } from "./card-CvdYnA3L.js";
import { t as usePrefersReducedMotion } from "./usePrefersReducedMotion-fPzJ2Dl2.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function ActionButton({ action: t, variant: r, leadingIcon: i }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: r,
		size: "sm",
		onClick: t.onClick,
		"aria-disabled": t.isPending || t.disabled,
		className: "flex-1 gap-1.5 aria-disabled:cursor-default aria-disabled:opacity-50",
		children: [t.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : i, t.isPending && t.pendingLabel ? t.pendingLabel : t.label]
	});
}
function UpdateErrorCardContent({ variant: t = "default", title: r, summary: o, explainer: s, detail: u, releaseUrl: h, manualLabel: g, primaryAction: _, secondaryAction: v, tertiaryAction: y, footnote: b, onClose: x }) {
	let [S, w] = (0, import_react.useState)(!1), T = (0, import_react.useId)(), E = t === "http1Compatibility", D = t === "security";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/50 ${D ? "border-destructive/30 text-destructive" : "border-border text-muted-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(E ? Network : D ? ShieldAlert : CircleAlert, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: r
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: o
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "shrink-0 min-w-[44px] min-h-[44px] -m-2",
						onClick: x,
						"aria-label": translate("auto.components.UpdateCard.8acbdd3961", "Minimize to status bar"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
					})
				]
			}),
			s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md border border-border/70 bg-muted/30 px-3 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: s
				})
			}) : null,
			u ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "xs",
					className: "-ml-2 self-start text-muted-foreground hover:text-foreground",
					onClick: () => w((t) => !t),
					"aria-expanded": S,
					"aria-controls": T,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `size-3.5 transition-transform motion-reduce:transition-none ${S ? "rotate-90" : ""}` }), S ? translate("auto.components.UpdateCard.5194358929", "Hide details") : translate("auto.components.UpdateCard.8bc9e17d8f", "Show details")]
				}), S ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: T,
					className: "rounded-md bg-muted/40 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-[11px] font-medium uppercase text-muted-foreground",
						children: translate("auto.components.UpdateCard.3553a8672f", "Details")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "scrollbar-sleek max-h-20 overflow-auto break-words font-mono text-xs leading-relaxed text-muted-foreground",
						children: u
					})]
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [
							_ && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
								action: _,
								variant: "default",
								leadingIcon: E ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-3.5" }) : void 0
							}),
							v && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
								action: v,
								variant: "outline"
							}),
							h && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => {
									window.api.shell.openUrl(h).catch((t) => {
										console.error("[updates] failed to open the release page:", t);
									});
								},
								className: "flex-1",
								children: g ?? translate("auto.components.UpdateCard.47126bcf57", "Download Manually")
							})
						]
					}),
					y && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "link",
						size: "xs",
						className: "-ml-1 min-h-[44px] self-start p-0 text-xs aria-disabled:cursor-default aria-disabled:opacity-50",
						onClick: y.onClick,
						"aria-disabled": y.isPending || y.disabled,
						children: y.isPending && y.pendingLabel ? y.pendingLabel : y.label
					}),
					b && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-xs leading-relaxed ${b.tone === "destructive" ? "text-destructive" : "text-muted-foreground"}`,
						children: b.text
					})
				]
			})
		]
	});
}
function copiedNote(t) {
	return translate("auto.components.LinuxPackageInstallRecoveryCard.aa57fa4f80", "Command copied. Quit Orca, run it in a system terminal to install {{value0}}, then reopen Orca.", { value0: t });
}
function toMessage(t) {
	return String(t?.message ?? t).replace(/^Error invoking remote method '[^']*':\s*/, "").replace(/^Error:\s*/, "");
}
function LinuxPackageInstallRecoveryCard({ recovery: t, diagnostic: r, releaseUrl: a, onClose: s }) {
	let c = translate("auto.components.LinuxPackageInstallRecoveryCard.53e1559f99", "Manual Install Required"), l = translate("auto.components.LinuxPackageInstallRecoveryCard.a7ac6ec78b", "Orca downloaded the system package. Quit Orca before finishing the update from a terminal."), u = translate("auto.components.LinuxPackageInstallRecoveryCard.82c6dbea00", "Copy the command, quit Orca, and run it in a system terminal on the computer where Orca is installed. Reopen Orca after it finishes."), d = translate("auto.components.LinuxPackageInstallRecoveryCard.53c4b8e148", "No usable authentication agent answered the privileged install request."), f = translate("auto.components.LinuxPackageInstallRecoveryCard.b7e7c5bc95", "Orca checks the downloaded file against the release metadata at the moment it builds this command. The system package itself is not signature-checked, and Orca cannot vouch for the file after that point."), p = translate("auto.components.LinuxPackageInstallRecoveryCard.c732bcbf8f", "Checking package..."), [m, h] = (0, import_react.useState)(null), [g, _] = (0, import_react.useState)(null), [v, y] = (0, import_react.useState)(!1), x = useMountedRef(), S = (0, import_react.useRef)(t);
	(0, import_react.useLayoutEffect)(() => {
		S.current = t;
	}, [t]);
	let C = () => x.current && S.current === t, D = () => {
		m || (h("copy"), _(null), (async () => {
			let t;
			try {
				t = await window.api.updater.getLinuxPackageInstallInstructions();
			} catch (t) {
				C() && _(toMessage(t));
				return;
			}
			if (!t.ok) {
				C() && (y(!0), _(t.message));
				return;
			}
			if (C()) try {
				await window.api.ui.writeClipboardText(t.command), C() && toast.success(copiedNote(t.packageFileName));
			} catch (t) {
				C() && _(toMessage(t));
			}
		})().finally(() => {
			x.current && h(null);
		}));
	}, O = () => {
		m || (h("show"), _(null), window.api.updater.showLinuxPackage().catch((t) => {
			C() && _(toMessage(t));
		}).finally(() => {
			x.current && h(null);
		}));
	}, k = {
		label: translate("auto.components.LinuxPackageInstallRecoveryCard.55c86654b7", "Copy Install Command"),
		pendingLabel: p,
		isPending: m === "copy",
		disabled: m !== null,
		onClick: D
	}, A = {
		label: translate("auto.components.LinuxPackageInstallRecoveryCard.e3de29c86a", "Show Package"),
		pendingLabel: p,
		isPending: m === "show",
		disabled: m !== null,
		onClick: O
	}, j = a ? {
		label: translate("auto.components.UpdateCard.47126bcf57", "Download Manually"),
		onClick: () => {
			_(null), window.api.shell.openUrl(a).catch((t) => {
				C() && _(toMessage(t));
			});
		}
	} : void 0, M = [
		t.reason === "authentication-agent-unavailable" ? d : null,
		t.reason === "manual-install-required" ? null : r,
		f
	].filter(Boolean).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateErrorCardContent, {
		title: c,
		summary: l,
		explainer: v ? void 0 : u,
		detail: M,
		primaryAction: v ? A : k,
		secondaryAction: v ? void 0 : A,
		tertiaryAction: j,
		footnote: g ? {
			text: g,
			tone: "destructive"
		} : void 0,
		onClose: s
	});
}
function UpdateCheckFeedback({ icon: t, text: r, onClose: o, action: c }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 text-muted-foreground",
				children: [
					t === "spinner" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }),
					t === "check" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }),
					t === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm truncate",
					children: r
				}), c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-xs text-muted-foreground underline hover:text-foreground mt-0.5",
					onClick: () => void window.api.shell.openUrl(c.url),
					children: c.label
				})]
			}),
			o && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "size-7 shrink-0",
				onClick: o,
				"aria-label": translate("auto.components.UpdateCard.a726967bd3", "Dismiss"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
			})
		]
	});
}
function isAnimatedGif$1(t) {
	return typeof t == "string" && t.toLowerCase().endsWith(".gif");
}
function ExternallyManagedNote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs leading-relaxed text-muted-foreground",
		children: translate("auto.components.UpdateCard.7f1a4c9e02", "Your system package manager installed Orca, so update it from there — Orca cannot install this release itself.")
	});
}
function UpdateAvailableRichContent({ release: t, releasesBehind: r, prefersReducedMotion: o, mediaFailed: s, mediaLoaded: c, onMediaError: l, onMediaLoad: u, onUpdate: d, onClose: f, externallyManaged: p = !1 }) {
	let m = t.mediaUrl && !s && !(o && isAnimatedGif$1(t.mediaUrl));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-semibold",
					children: [
						translate("auto.components.UpdateCard.f58b5c57a6", "New:"),
						" ",
						t.title
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-7 shrink-0 min-w-[44px] min-h-[44px] -m-2",
					onClick: f,
					"aria-label": translate("auto.components.UpdateCard.318d3b4bc7", "Dismiss update"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				})]
			}),
			m && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-md",
				children: [!c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full bg-muted/50 animate-pulse rounded-md",
					style: { aspectRatio: "16/9" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: t.mediaUrl,
					alt: "",
					className: `w-full rounded-md ${c ? "" : "absolute inset-0"}`,
					style: c ? void 0 : { visibility: "hidden" },
					onError: l,
					onLoad: u
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [t.description, r !== null && r > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "text-xs text-muted-foreground/70 underline hover:text-foreground inline",
					onClick: () => void window.api.shell.openUrl(t.releaseNotesUrl),
					children: [
						"+",
						r - 1,
						" ",
						translate("auto.components.UpdateCard.ccd8b0a793", "more since your last update")
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-xs text-muted-foreground underline hover:text-foreground self-start",
				onClick: () => void window.api.shell.openUrl(t.releaseNotesUrl),
				children: translate("auto.components.UpdateCard.aad383aecc", "Read the full release notes")
			}),
			p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternallyManagedNote, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "default",
				size: "sm",
				onClick: d,
				className: "w-full cursor-pointer",
				children: translate("auto.components.UpdateCard.ec8fe71cfc", "Update")
			})
		]
	});
}
function UpdateAvailableSimpleContent({ version: t, releaseUrl: r, onUpdate: o, onClose: s, externallyManaged: c = !1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2.5 p-3.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: translate("auto.components.UpdateCard.9abc59f814", "Update Available")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-7 shrink-0 min-w-[44px] min-h-[44px] -m-2",
					onClick: s,
					"aria-label": translate("auto.components.UpdateCard.318d3b4bc7", "Dismiss update"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: translate("auto.components.UpdateCard.05ad78a6d1", "Orca v{{value0}} is ready.", { value0: t })
			}),
			c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternallyManagedNote, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted-foreground",
				children: translate("auto.components.UpdateCard.fdd4a364fa", "Sessions won't be interrupted.")
			}),
			r && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground self-start",
				onClick: () => void window.api.shell.openUrl(r),
				children: translate("auto.components.UpdateCard.44324ef542", "Release notes")
			}),
			!c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "default",
				size: "sm",
				onClick: o,
				className: "mt-0.5 w-full cursor-pointer",
				children: translate("auto.components.UpdateCard.ec8fe71cfc", "Update")
			})
		]
	});
}
function isAnimatedGif(t) {
	return typeof t == "string" && t.toLowerCase().endsWith(".gif");
}
function UpdateDownloadingContent({ version: t, percent: r, changelog: o, prefersReducedMotion: s, mediaFailed: c, mediaLoaded: l, onMediaError: u, onMediaLoad: f, onCollapse: p, showReleaseNotes: m }) {
	let g = o?.release, _ = g?.mediaUrl && !c && !(s && isAnimatedGif(g.mediaUrl));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [g ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-semibold",
					children: [
						translate("auto.components.UpdateCard.f58b5c57a6", "New:"),
						" ",
						g.title
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: translate("auto.components.UpdateCard.558842597d", "Downloading Update")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-7 shrink-0 min-w-[44px] min-h-[44px] -m-2",
					onClick: p,
					"aria-label": translate("auto.components.UpdateCard.8acbdd3961", "Minimize to status bar"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
				})]
			}),
			_ && g?.mediaUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-md",
				children: [!l && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full bg-muted/50 animate-pulse rounded-md",
					style: { aspectRatio: "16/9" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: g.mediaUrl,
					alt: "",
					className: `w-full rounded-md ${l ? "" : "absolute inset-0"}`,
					style: l ? void 0 : { visibility: "hidden" },
					onError: u,
					onLoad: f
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: g ? g.description : translate("auto.components.UpdateCard.93794ea932", "Orca v{{value0}} is downloading.", { value0: t })
			}),
			m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-xs text-muted-foreground underline hover:text-foreground self-start",
				onClick: () => void window.api.shell.openUrl(g ? g.releaseNotesUrl : getReleaseNotesUrlForVersion(t)),
				children: g ? translate("auto.components.UpdateCard.aad383aecc", "Read the full release notes") : translate("auto.components.UpdateCard.44324ef542", "Release notes")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 mt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: r,
					className: "h-1.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						translate("auto.components.UpdateCard.6e45bfa2e0", "Downloading..."),
						" ",
						r,
						"%"
					]
				})]
			})
		]
	});
}
function UpdateReadyToInstallContent({ version: t, onRestart: r, onClose: o }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: translate("auto.components.UpdateCard.17412483da", "Ready to Install")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-7 shrink-0 min-w-[44px] min-h-[44px] -m-2",
					onClick: o,
					"aria-label": translate("auto.components.UpdateCard.8acbdd3961", "Minimize to status bar"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: translate("auto.components.UpdateCard.6714206e5a", "Orca v{{value0}} is downloaded. Restart when you're ready.", { value0: t })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "default",
				size: "sm",
				onClick: r,
				className: "w-full",
				children: translate("auto.components.UpdateCard.68b235d264", "Restart to Update")
			})
		]
	});
}
function UpdateCardStateContent({ status: t, changelog: r, errorCard: a, linuxPackageRecovery: o, isLocalBuild: s, hasStartedDownload: c, prefersReducedMotion: l, mediaFailed: u, mediaLoaded: d, onMediaError: f, onMediaLoad: p, onUpdate: m, onInstallRetry: g, onDismiss: _, onCollapse: v }) {
	if (t.state === "checking") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateCheckFeedback, {
		icon: "spinner",
		text: translate("auto.components.UpdateCard.ba5ffc949c", "Checking for updates...")
	});
	if (t.state === "not-available") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateCheckFeedback, {
		icon: "check",
		text: translate("auto.components.UpdateCard.ea2a41adbe", "You're on the latest version.")
	});
	if (o) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinuxPackageInstallRecoveryCard, {
		recovery: o.recovery,
		diagnostic: o.diagnostic,
		releaseUrl: s ? void 0 : getReleaseNotesUrlForVersion(o.recovery.version),
		onClose: v
	}, `${o.recovery.packageType}:${o.recovery.version}:${o.recovery.reason}`);
	if (a) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateErrorCardContent, {
		...a,
		onClose: v
	});
	if (t.state === "downloaded") return c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm",
			children: translate("auto.components.UpdateCard.09a55c39b5", "Installing...")
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateReadyToInstallContent, {
		version: t.version,
		onRestart: g,
		onClose: v
	});
	if (t.state === "downloading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateDownloadingContent, {
		version: t.version,
		percent: t.percent,
		changelog: r,
		prefersReducedMotion: l,
		mediaFailed: u,
		mediaLoaded: d,
		onMediaError: f,
		onMediaLoad: p,
		onCollapse: v,
		showReleaseNotes: !s
	});
	if (t.state !== "available") return null;
	let y = s ? void 0 : t.releaseUrl ?? getReleaseNotesUrlForVersion(t.version);
	return r?.release ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateAvailableRichContent, {
		release: r.release,
		releasesBehind: r.releasesBehind,
		prefersReducedMotion: l,
		mediaFailed: u,
		mediaLoaded: d,
		onMediaError: f,
		onMediaLoad: p,
		onUpdate: m,
		onClose: _,
		externallyManaged: t.externallyManaged
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateAvailableSimpleContent, {
		version: t.version,
		releaseUrl: y,
		onUpdate: m,
		onClose: _,
		externallyManaged: t.externallyManaged
	});
}
function isWindowsSignatureCheckUnavailableFailure(t) {
	let r = t.toLowerCase();
	return r.includes("not signed by the application owner") ? !1 : r.includes("get-authenticodesignature");
}
function isWindowsSignatureMismatchFailure(t) {
	return t.toLowerCase().includes("not signed by the application owner");
}
function isUpdateCardVisible({ status: t, dismissedVersion: r, cachedVersion: i, updateUserInitiatedCycle: a, autoDismissed: o = !1, collapsed: s = !1 }) {
	let c = "userInitiated" in t && !!t.userInitiated;
	return t.state === "checking" && !c || t.state === "not-available" && (!c || o) || t.state === "idle" || i && r === i && !a && t.state !== "downloading" && t.state !== "error" ? !1 : !(s && (t.state === "downloading" || t.state === "downloaded" || t.state === "error"));
}
function getUpdateCardAriaLabel(t) {
	switch (t.state) {
		case "idle": return "Update status";
		case "checking": return "Checking for updates";
		case "not-available": return "You're on the latest version";
		case "available": return "Update available";
		case "downloading": return "Downloading update";
		case "downloaded": return "Update ready to install";
		case "error": return "Update error";
	}
}
function isHttp2ProtocolError(t) {
	let r = t.toLowerCase();
	return r.includes("err_http2_protocol_error") || r.includes("http2_protocol_error") || r.includes("http/2") && r.includes("protocol");
}
function buildUpdateCardErrorModel({ status: t, isLocalBuild: r, cachedVersion: a, installError: o, compatibilityRelaunching: s, compatibilitySetupError: c, onChooseLocalBuild: l, onEnableHttp1Compatibility: u, onRetryDownload: d, onRecheck: f, onInstallRetry: p }) {
	return t.state === "error" ? r ? {
		title: a ? translate("auto.components.UpdateCard.8cf17b10af", "Local Build Error") : translate("auto.components.UpdateCard.a4650b0dc4", "Could Not Use Local Build"),
		summary: a ? translate("auto.components.UpdateCard.b1e390250d", "Could not complete the local build switch.") : translate("auto.components.UpdateCard.d29740d175", "The selected build could not be used."),
		detail: t.message,
		primaryAction: {
			label: translate("auto.components.UpdateCard.37d45c9ec1", "Choose Another Build"),
			onClick: l
		}
	} : isHttp2ProtocolError(t.message) ? {
		variant: "http1Compatibility",
		title: translate("auto.components.UpdateCard.1339b82cee", "HTTP/2 Download Blocked"),
		summary: "Orca can retry through HTTP/1.1 compatibility mode.",
		explainer: translate("auto.components.UpdateCard.90559b14e3", "This turns on a process-wide Electron networking switch after restart. Use it for corporate VPNs or proxies that reject HTTP/2 update downloads."),
		detail: c ?? t.message,
		releaseUrl: getReleaseNotesUrlForVersion(a),
		primaryAction: {
			label: translate("auto.components.UpdateCard.933c6fdf5b", "Enable & Restart"),
			pendingLabel: "Restarting...",
			isPending: s,
			onClick: u
		}
	} : isWindowsSignatureMismatchFailure(t.message) ? {
		variant: "security",
		title: translate("auto.components.UpdateCard.5b309b19f3", "Update Wasn't Installed"),
		summary: translate("auto.components.UpdateCard.092f09fc14", "The installer's publisher doesn't match Orca, so we stopped the update. Don't install this download; check official releases for a corrected version."),
		detail: t.message,
		releaseUrl: getReleaseNotesUrlForVersion(null),
		manualLabel: translate("auto.components.UpdateCard.c9ff9b9ec2", "Check official releases")
	} : isWindowsSignatureCheckUnavailableFailure(t.message) ? {
		title: translate("auto.components.UpdateCard.e944c2de43", "Update Verification Blocked"),
		summary: translate("auto.components.UpdateCard.a05992a26b", "The signature check couldn't run — usually because antivirus software blocked it. Retry the download, or get the installer from our official releases."),
		detail: t.message,
		releaseUrl: getReleaseNotesUrlForVersion(a),
		primaryAction: {
			label: translate("auto.components.UpdateCard.48565a32bc", "Retry Download"),
			onClick: d
		}
	} : {
		title: a ? "Update Error" : "Update Check Failed",
		summary: a && t.retryable === !1 ? t.message : a ? "Could not complete the update." : "Could not check for updates.",
		detail: t.message,
		releaseUrl: getReleaseNotesUrlForVersion(a),
		primaryAction: a && t.retryable !== !1 ? {
			label: translate("auto.components.UpdateCard.48565a32bc", "Retry Download"),
			onClick: d
		} : a ? void 0 : {
			label: translate("auto.components.UpdateCard.6b0085010d", "Re-check"),
			onClick: f
		}
	} : o ? {
		title: translate("auto.components.UpdateCard.4cf109845a", "Update Error"),
		summary: "Could not restart to install the update.",
		detail: o,
		releaseUrl: getReleaseNotesUrlForVersion(a),
		primaryAction: {
			label: translate("auto.components.UpdateCard.2c2d3e03ca", "Try Again"),
			onClick: p
		}
	} : null;
}
function UpdateCard() {
	let t = useAppStore((t) => t.updateStatus), r = useAppStore((t) => t.updateChangelog), o = useAppStore((t) => t.updateUserInitiatedCycle), s = useAppStore((t) => t.dismissedUpdateVersion), c = useAppStore((t) => t.dismissUpdate), l = useAppStore((t) => t.updateCardCollapsed), u = useAppStore((t) => t.setUpdateCardCollapsed), d = useAppStore((t) => t.updateReassuranceSeen), f = useAppStore((t) => t.markUpdateReassuranceSeen), p = (0, import_react.useRef)(!1), m = (0, import_react.useRef)(null), h = (0, import_react.useRef)(null), [v, y] = (0, import_react.useState)(!1), [b, C] = (0, import_react.useState)(!1), [w, T] = (0, import_react.useState)(null), [E, D] = (0, import_react.useState)(!1), [O, k] = (0, import_react.useState)(null), [A, j] = (0, import_react.useState)(!1), [M, N] = (0, import_react.useState)(!1), P = t.source === "local", F = (0, import_react.useRef)(null);
	"version" in t && t.version ? F.current = t.version : (t.state === "checking" || t.state === "idle" || t.state === "not-available") && (F.current = null);
	let I = (0, import_react.useRef)(null);
	t.state === "available" && t.version !== I.current && (I.current = t.version, p.current = !1, y(!1), C(!1), T(null));
	let L = (0, import_react.useRef)(t.state);
	t.state !== L.current && (L.current = t.state, A && j(!1), M && N(!1));
	let R = t.state === "not-available" && "userInitiated" in t && !!t.userInitiated;
	(0, import_react.useEffect)(() => {
		if (!R) return;
		let t = window.setTimeout(() => j(!0), 3e3);
		return () => window.clearTimeout(t);
	}, [R]), (0, import_react.useEffect)(() => {
		t.state === "downloaded" && p.current && window.api.updater.quitAndInstall().catch((t) => {
			T(String(t?.message ?? t));
		});
	}, [t.state]);
	let z = usePrefersReducedMotion(), B = (0, import_react.useCallback)(() => {
		m.current !== null && (window.clearTimeout(m.current), m.current = null), h.current !== null && (window.clearTimeout(h.current), h.current = null);
	}, []), V = (0, import_react.useCallback)((t) => {
		t === null && B();
	}, [B]), H = F.current;
	if (!isUpdateCardVisible({
		status: t,
		dismissedVersion: s,
		cachedVersion: H,
		updateUserInitiatedCycle: o,
		autoDismissed: A,
		collapsed: l
	})) return null;
	let U = () => {
		p.current = !0, d || f(), window.api.updater.download();
	}, W = () => {
		c();
	}, G = () => {
		window.api.updater.quitAndInstall().catch((t) => {
			T(String(t?.message ?? t));
		});
	}, K = buildUpdateCardErrorModel({
		status: t,
		isLocalBuild: P,
		cachedVersion: H,
		installError: w,
		compatibilityRelaunching: E,
		compatibilitySetupError: O,
		onChooseLocalBuild: () => void window.api.updater.check({ localBuild: !0 }),
		onEnableHttp1Compatibility: () => {
			E || (D(!0), k(null), window.api.settings.set({ electronHttp1CompatibilityMode: !0 }).then(() => window.api.app.relaunch()).catch((t) => {
				let r = String(t?.message ?? t);
				console.error("[updates] failed to enable HTTP/1.1 compatibility:", t), k(`Could not enable compatibility mode. ${r}`), D(!1);
			}));
		},
		onRetryDownload: U,
		onRecheck: () => void window.api.updater.check({ includePrerelease: !1 }),
		onInstallRetry: G
	}), q = t.state === "error" && t.recovery?.kind === "linux-package-install" ? {
		recovery: t.recovery,
		diagnostic: t.message
	} : null, J = () => {
		if (z) {
			W();
			return;
		}
		N(!0), m.current !== null && window.clearTimeout(m.current), m.current = window.setTimeout(() => {
			m.current = null, W();
		}, 150);
	}, Y = () => {
		if (z) {
			u(!0);
			return;
		}
		N(!0), h.current !== null && window.clearTimeout(h.current), h.current = window.setTimeout(() => {
			h.current = null, u(!0), N(!1);
		}, 150);
	}, Z = (r) => {
		r.key === "Escape" && (r.preventDefault(), t.state === "downloading" || t.state === "downloaded" || t.state === "error" ? Y() : J());
	}, Q = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateCardStateContent, {
		status: t,
		changelog: r,
		errorCard: K,
		linuxPackageRecovery: q,
		isLocalBuild: P,
		hasStartedDownload: p.current,
		prefersReducedMotion: z,
		mediaFailed: v,
		mediaLoaded: b,
		onMediaError: () => y(!0),
		onMediaLoad: () => C(!0),
		onUpdate: U,
		onInstallRetry: G,
		onDismiss: J,
		onCollapse: Y
	}), $ = z ? "" : M ? "animate-update-card-exit" : "animate-update-card-enter";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: V,
		className: "flex flex-col gap-2",
		children: [!d && (t.state === "available" && !t.externallyManaged || t.state === "downloading") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: `py-0 gap-0 ${$}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: translate("auto.components.UpdateCard.b1d867f4fb", "Your terminal sessions won't be interrupted during the update.")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "size-7 shrink-0",
					onClick: f,
					"aria-label": translate("auto.components.UpdateCard.7274ef6e59", "Dismiss tip"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			role: "complementary",
			"aria-label": getUpdateCardAriaLabel(t),
			"aria-live": "polite",
			tabIndex: -1,
			onKeyDown: Z,
			className: `py-0 gap-0 ${$}`,
			children: Q
		})]
	});
}
export { UpdateCard };
