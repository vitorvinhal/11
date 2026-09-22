import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as FolderPlus } from "./folder-plus-BqtRacbk.js";
import { t as GitBranchPlus } from "./git-branch-plus-CzyIn-s4.js";
import { t as Star } from "./star-BB5Azwdt.js";
import { Ag as isGitRepoKind, Av as projectHostSetupProjectionFromRepos, Dv as isGitHubBackedRepo, Tv as getProjectIdentityKey, g_ as isConnectedRuntimeHostState, t as useAppStore, y_ as runtimeHostConnectionStateForEntry } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./renderer-app-platform--nJ6HYmL.js";
import { t as installWindowVisibilityInterval } from "./window-visibility-interval-BxcyZyE8.js";
import "./stale-document-visibility-rSdoU229.js";
import "./keybindings-1v53ESY9.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { t as ShortcutKeyCombo } from "./ShortcutKeyCombo-CaaV52rL.js";
import { s as useShortcutKeyDetails } from "./useShortcutLabel-B283mfzm.js";
import { t as logo_default } from "./logo-nIStlrrE.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), STORAGE_PREFIX = "orca.preflightBanner.dismissed.";
function storageKey(e) {
	return `${STORAGE_PREFIX}${e}`;
}
function githubProjectKeys(e) {
	let C = e.filter((e) => isGitHubBackedRepo(e)).map((e) => getProjectIdentityKey(e));
	return [...new Set(C)].sort();
}
function readRecord(e) {
	try {
		let C = localStorage.getItem(storageKey(e));
		if (!C) return null;
		let w = JSON.parse(C);
		return Array.isArray(w?.githubKeys) ? w : null;
	} catch {
		return null;
	}
}
function isPreflightIssueDismissed(e, C) {
	let w = readRecord(e);
	if (!w) return !1;
	let T = new Set(w.githubKeys);
	return !githubProjectKeys(C).some((e) => !T.has(e));
}
function dismissPreflightIssue(e, C) {
	try {
		let w = { githubKeys: githubProjectKeys(C) };
		localStorage.setItem(storageKey(e), JSON.stringify(w));
	} catch {}
}
function hasGitHubBackedProject(e) {
	return projectHostSetupProjectionFromRepos(e).projects.some((e) => e.providerIdentity?.provider === "github");
}
function getLandingPreflightIssues(e, C) {
	let T = [];
	return e.git.installed || T.push({
		id: "git",
		title: translate("auto.components.Landing.e5b7296d9d", "Git is not installed"),
		description: translate("auto.components.Landing.b673e7cf1b", "Git is required for Git projects, source control, and workspace management."),
		fixLabel: "Install Git",
		fixUrl: "https://git-scm.com/downloads"
	}), C.hasGitHubBackedProject && (e.gh.installed ? e.gh.authenticated || T.push({
		id: "gh-auth",
		title: translate("auto.components.Landing.9f96d018b7", "GitHub CLI is not authenticated"),
		description: translate("auto.components.Landing.00cee697c1", "Run \"gh auth login\" in a terminal to connect your GitHub account."),
		fixLabel: "Learn more",
		fixUrl: "https://cli.github.com/manual/gh_auth_login",
		dismissible: !0
	}) : T.push({
		id: "gh",
		title: translate("auto.components.Landing.5beaef5f9e", "GitHub CLI is not installed"),
		description: translate("auto.components.Landing.73e1ad4282", "Orca uses the GitHub CLI (gh) to show pull requests, issues, and checks."),
		fixLabel: "Install GitHub CLI",
		fixUrl: "https://cli.github.com",
		dismissible: !0
	})), T;
}
function useLandingPreflightRuntime() {
	let e = useAppStore((e) => e.repos), C = useAppStore((e) => e.preflightStatus), w = useAppStore((e) => e.refreshPreflightStatus), T = useAppStore((e) => e.invalidatePreflightStatus), E = useAppStore((e) => {
		let C = e.settings?.activeRuntimeEnvironmentId?.trim();
		if (!C) return "local";
		let w = e.runtimeStatusByEnvironmentId.get(C), T = w ? isConnectedRuntimeHostState(runtimeHostConnectionStateForEntry(w)) ? "reachable" : "unreachable" : "unknown";
		return `${C}:${w?.connectionGeneration ?? 0}:${T}`;
	}), D = (0, import_react.useMemo)(() => hasGitHubBackedProject(e), [e]), O = (0, import_react.useMemo)(() => C ? getLandingPreflightIssues(C, { hasGitHubBackedProject: D }) : [], [C, D]);
	return (0, import_react.useEffect)(() => {
		if (E !== "local" && !E.endsWith(":reachable")) {
			T();
			return;
		}
		w();
		let e = () => {
			document.visibilityState === "visible" && w({ force: !0 });
		};
		return document.addEventListener("visibilitychange", e), window.addEventListener("focus", e), () => {
			document.removeEventListener("visibilitychange", e), window.removeEventListener("focus", e);
		};
	}, [
		E,
		T,
		w
	]), (0, import_react.useEffect)(() => {
		if (O.length !== 0) return installWindowVisibilityInterval({
			run: () => {
				w({ force: !0 });
			},
			runOnVisible: () => {},
			intervalMs: 3e4
		});
	}, [O.length, w]), { preflightIssues: O };
}
function useLandingOrcaStarState() {
	let [e, C] = (0, import_react.useState)("loading");
	return (0, import_react.useEffect)(() => {
		let e = !1;
		return window.api.gh.checkOrcaStarred().then((w) => {
			e || C(w === null ? "web-fallback" : w ? "starred" : "not-starred");
		}), () => {
			e = !0;
		};
	}, []), [e, C];
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), ORCA_GITHUB_URL = "https://github.com/stablyai/orca";
function GitHubStarButton({ hasRepos: e, state: C, setState: O }) {
	let [k, j] = (0, import_react.useState)(!1), M = (0, import_react.useRef)(null), N = useMountedRef();
	return (0, import_react.useEffect)(() => {
		if (!k) return;
		let e = (e) => {
			M.current?.contains(e.target) || j(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [k]), C === "hidden" || C === "starred" && e ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: M,
		className: "relative inline-block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: cn("inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-medium transition-all duration-300", C === "loading" && "pointer-events-none opacity-0", C !== "starred" && "cursor-pointer border-amber-500/60 text-amber-700 hover:border-amber-500/80 hover:bg-amber-400/10 dark:border-amber-400/30 dark:text-amber-300/90 dark:hover:border-amber-400/50 dark:hover:bg-amber-400/[0.08]", C === "starred" && "cursor-pointer border-amber-500/50 bg-amber-400/10 text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/[0.06] dark:text-amber-400/60"),
			onClick: async () => {
				if (C === "starred") {
					j((e) => !e);
					return;
				}
				if (C === "web-fallback") {
					await window.api.shell.openUrl(ORCA_GITHUB_URL);
					return;
				}
				if (C === "not-starred") {
					if (O("starred"), !await window.api.gh.starOrca("landing")) {
						N.current && O("web-fallback");
						return;
					}
					await window.api.starNag.complete();
				}
			},
			onContextMenu: (e) => {
				C === "starred" && (e.preventDefault(), j(!0));
			},
			disabled: C === "loading",
			children: [C === "web-fallback" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-amber-600 transition-all duration-300 dark:text-amber-400/80" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-3.5 transition-all duration-300", C === "starred" ? "fill-amber-500/70 text-amber-500/70 dark:fill-amber-400/60 dark:text-amber-400/60" : "text-amber-600 dark:text-amber-400/80") }), C === "starred" ? translate("auto.components.Landing.ec43b38ba7", "Starred on GitHub") : C === "web-fallback" ? translate("auto.components.Landing.157bb5ecbb", "Open GitHub") : translate("auto.components.Landing.0d0ace8861", "Star on GitHub")]
		}), C === "starred" && k && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute right-0 bottom-[calc(100%+4px)] z-10 min-w-[100px] rounded-md border border-border bg-popover py-1 shadow-floating",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "w-full px-3 py-1.5 text-left text-[13px] text-foreground hover:bg-muted",
				onClick: () => {
					j(!1), O("hidden");
				},
				children: translate("auto.components.Landing.c1cf168479", "Hide")
			})
		})]
	});
}
function PreflightBanner({ issues: e, repos: C }) {
	let T = githubProjectKeys(C).join("|"), [E, O] = (0, import_react.useState)(() => new Set(e.filter((e) => e.dismissible && isPreflightIssueDismissed(e.id, C)).map((e) => e.id)));
	(0, import_react.useEffect)(() => {
		O(new Set(e.filter((e) => e.dismissible && isPreflightIssueDismissed(e.id, C)).map((e) => e.id)));
	}, [T]);
	let k = e.filter((e) => !E.has(e.id));
	if (k.length === 0) return null;
	let A = (e) => {
		dismissPreflightIssue(e.id, C), O((C) => new Set(C).add(e.id));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full max-w-sm space-y-1.5 rounded-lg border border-border bg-muted/40 p-3",
		children: k.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3 rounded-md px-1 py-1.5 first:pt-0 last:pb-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-4 shrink-0 text-amber-500/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 space-y-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-medium leading-snug text-foreground",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-snug text-muted-foreground",
							children: e.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary underline-offset-4 hover:underline cursor-pointer",
							onClick: () => window.api.shell.openUrl(e.fixUrl),
							children: [e.fixLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
						})
					]
				}),
				e.dismissible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "-mr-1 -mt-0.5 shrink-0 rounded p-1 text-muted-foreground/70 transition-colors hover:bg-accent hover:text-foreground cursor-pointer",
					onClick: () => A(e),
					"aria-label": translate("auto.components.Landing.preflightDismiss", "Dismiss"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				})
			]
		}, e.id))
	});
}
function Landing() {
	let e = useAppStore((e) => e.repos), C = useAppStore((e) => e.openModal), T = e.length > 0 && e.every((e) => isGitRepoKind(e)) ? "Worktree" : "Workspace", E = e.length > 0, D = (0, import_react.useMemo)(() => hasGitHubBackedProject(e), [e]), A = e.length === 0 || D, { preflightIssues: M } = useLandingPreflightRuntime(), [N, P] = useLandingOrcaStarState(), F = useShortcutKeyDetails("workspace.create"), I = useShortcutKeyDetails("worktree.navigateUp"), L = useShortcutKeyDetails("worktree.navigateDown"), R = (0, import_react.useMemo)(() => [
		{
			id: "create",
			shortcut: F,
			action: `Create ${T.toLowerCase()}`
		},
		{
			id: "up",
			shortcut: I,
			action: "Move up workspace"
		},
		{
			id: "down",
			shortcut: L,
			action: "Move down workspace"
		}
	], [
		T,
		F,
		L,
		I
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 flex items-center justify-center bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-lg px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-4 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center size-20 rounded-2xl border border-border/80 shadow-lg shadow-black/40",
						style: { backgroundColor: "#12181e" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: translate("auto.components.Landing.520304a067", "Orca logo"),
							className: "size-12"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-bold text-foreground tracking-tight",
						children: translate("auto.components.Landing.6ca6ff404e", "ORCA")
					}),
					M.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreflightBanner, {
						issues: M,
						repos: e
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground text-center",
						children: E ? translate("auto.components.Landing.9c00bd4adf", "Select a workspace from the sidebar to begin.") : translate("auto.components.Landing.cd21242762", "Add a project to get started.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2.5 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-1.5 bg-secondary/70 border border-border/80 text-foreground font-medium text-sm px-4 py-2 rounded-md cursor-pointer hover:bg-accent transition-colors",
							onClick: () => C("add-repo"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, { className: "size-3.5" }), translate("auto.components.Landing.f9eaa9e12d", "Add project")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-1.5 bg-secondary/70 border border-border/80 text-foreground font-medium text-sm px-4 py-2 rounded-md cursor-pointer hover:bg-accent transition-colors",
							onClick: () => C("new-workspace-composer", { telemetrySource: "unknown" }),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranchPlus, { className: "size-3.5" }),
								translate("auto.components.Landing.76a95f7f47", "Create"),
								" ",
								T.toLowerCase()
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 w-full max-w-xs space-y-2",
						children: R.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[1fr_auto] items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: e.action
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutKeyCombo, {
								keys: e.shortcut.keys,
								doubleTap: e.shortcut.doubleTap,
								separatorClassName: "mx-0.5 text-[10px] text-muted-foreground"
							})]
						}, e.id))
					})
				]
			})
		}), A && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-6 left-0 right-0 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubStarButton, {
				hasRepos: e.length > 0,
				state: N,
				setState: P
			})
		})]
	});
}
export { Landing as default };
