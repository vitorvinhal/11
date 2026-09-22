import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as GitMerge } from "./git-merge-clNNtOmU.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { $ as openHttpLink, kg as isFolderRepo, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./purify.es-Ddnop6vN.js";
import "./dialog-s0g51002.js";
import "./selectors-Cdg4hUQI.js";
import { t as getWorktreeGitIdentityDisplay } from "./worktree-git-identity-display-BVUtz189.js";
import { t as compareWorktreeDisplayName } from "./worktree-display-name-order-FBS0HgDD.js";
import { t as getAttachedWorktreesForFolderWorkspace } from "./folder-workspace-attached-worktrees-w3OYE_LP.js";
import { r as getParentPrChecksRefreshIdentity, t as buildParentPrChecksProjection } from "./parent-pr-checks-rows-CeOGE-m4.js";
import "./lib-DEDsinTP.js";
import "./lib-CCrOeqzl.js";
import "./CommentMarkdown-NC5Pka2-.js";
import "./MermaidBlock-DUCPG0_k.js";
import "./check-job-log-tail-D0W6uJCR.js";
import { i as prStateColor, n as CHECK_ICON, r as PullRequestIcon, t as CHECK_COLOR } from "./check-presentation-D579n17Q.js";
import { t as ChecksList } from "./checks-list-BiEm5TQo.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function FolderWorkspacePrChecksRow({ row: e, expanded: d, onToggle: p, onLoadCheckDetails: v }) {
	let b = e.provider === "gitlab" ? GitMerge : PullRequestIcon, x = CHECK_ICON[e.checkTone] ?? CHECK_ICON.neutral, S = e.checkTone !== "neutral", C = e.checkTone === "pending", w = e.provider === "gitlab" ? "MR" : "PR", T = d ? translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.hideDetails", "Hide {{value0}} PR check details", { value0: e.worktree.displayName }) : translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.showDetails", "Show {{value0}} PR check details", { value0: e.worktree.displayName }), E = translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.openReviewExternally", "Open {{value0}} externally", { value0: w });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("group rounded-md border border-transparent", d ? "border-border bg-card" : "hover:bg-accent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "button",
			tabIndex: 0,
			className: "flex w-full min-w-0 items-start gap-2 rounded-md px-2 py-2 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
			onClick: p,
			onKeyDown: (e) => {
				e.key !== "Enter" && e.key !== " " || (e.preventDefault(), p());
			},
			"aria-expanded": d,
			"aria-label": T,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: cn("mt-0.5 size-3 shrink-0 text-muted-foreground transition-transform", d && "rotate-90") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrChecksRowHeader, { row: e }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 truncate text-[12px] text-foreground/90",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex min-w-0 items-center gap-1.5 text-[11px] text-muted-foreground",
							children: [
								S ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { className: cn("size-3 shrink-0", CHECK_COLOR[e.checkTone], C && "animate-spin") }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: e.summary
								}),
								e.repo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0",
									children: ["· ", e.repo.displayName]
								}) : null,
								e.branch ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "truncate",
									children: ["· ", e.branch]
								}) : null
							]
						}),
						e.detailNames.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 truncate text-[11px] text-muted-foreground",
							children: e.detailNames.join(", ")
						}) : null
					]
				}),
				e.reviewUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded p-1 text-muted-foreground opacity-80 hover:bg-accent hover:text-foreground group-hover:opacity-100",
						"aria-label": E,
						onClick: (d) => {
							d.stopPropagation(), openHttpLink(e.reviewUrl);
						},
						onKeyDown: (e) => e.stopPropagation(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "left",
					children: E
				})] }) : null
			]
		}), d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChecksList, {
				checks: e.checks,
				checksLoading: e.isRefreshing,
				checkDetailsContextKey: e.refreshIdentity,
				onLoadCheckDetails: v,
				githubRepository: e.githubRepository ?? null,
				worktreeId: e.worktree.id,
				detailsStickySurface: "card"
			})
		}) : null]
	});
}
function PrChecksRowHeader({ row: e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-[13px] font-medium text-foreground",
				children: e.worktree.displayName
			}),
			e.reviewLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex shrink-0 items-center rounded border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground",
				children: e.reviewLabel
			}) : null,
			e.reviewState ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("shrink-0 rounded border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide", prStateColor(e.reviewState)),
				children: e.reviewState
			}) : null
		]
	});
}
function getParentPrChecksRefreshCandidates({ worktrees: e, repos: d, knownReviewIdentities: f = /* @__PURE__ */ new Set() }) {
	let p = new Map(d.map((e) => [e.id, e]));
	return e.map((e) => {
		let d = p.get(e.repoId), m = getBranchName(e);
		if (!d || isFolderRepo(d) || e.isBare || !m) return null;
		let h = getParentPrChecksRefreshIdentity(e, d, m);
		return {
			identity: h,
			worktree: e,
			repo: d,
			branch: m,
			linkedReview: hasLinkedReview(e),
			knownReview: f.has(h)
		};
	}).filter((e) => e !== null).sort(compareRefreshCandidates);
}
async function runLimitedParentPrChecksRefreshes({ candidates: e, concurrency: d = 3, force: f = !1, fetchHostedReviewForBranch: p, fetchPRChecks: m, onOutcome: h }) {
	let g = /* @__PURE__ */ new Map(), _ = [...e].sort(compareRefreshCandidates), v = Math.max(1, Math.min(d, _.length || 1)), y = 0;
	return await Promise.all(Array.from({ length: v }, async () => {
		for (; y < _.length;) {
			let e = _[y];
			y += 1, g.set(e.identity, { kind: "loading" }), h?.(e.identity, { kind: "loading" });
			let d = await refreshParentPrChecksCandidate(e, p, m, f);
			g.set(e.identity, d), h?.(e.identity, d);
		}
	})), g;
}
async function refreshParentPrChecksCandidate(e, d, f, p) {
	try {
		let m = await d(e.repo.path, e.branch, {
			force: p,
			repoId: e.repo.id,
			linkedGitHubPR: e.worktree.linkedPR ?? null,
			linkedGitLabMR: e.worktree.linkedGitLabMR ?? null,
			linkedBitbucketPR: e.worktree.linkedBitbucketPR ?? null,
			linkedAzureDevOpsPR: e.worktree.linkedAzureDevOpsPR ?? null,
			linkedGiteaPR: e.worktree.linkedGiteaPR ?? null,
			currentHeadOid: e.worktree.head ?? null,
			staleWhileRevalidate: !0
		});
		return m ? (m.provider === "github" && await f?.(e.repo.path, m.number, e.branch, m.headSha, m.githubRepository ?? null, {
			repoId: e.repo.id,
			force: p
		}), {
			kind: "found",
			review: m
		}) : { kind: "unavailable" };
	} catch (e) {
		return {
			kind: "error",
			error: e
		};
	}
}
function compareRefreshCandidates(e, d) {
	return getRefreshPriority(e) - getRefreshPriority(d) || (d.worktree.lastActivityAt ?? 0) - (e.worktree.lastActivityAt ?? 0) || compareWorktreeDisplayName(e.worktree, d.worktree);
}
function getRefreshPriority(e) {
	return e.linkedReview ? 0 : e.knownReview ? 1 : 2;
}
function getBranchName(e) {
	let d = getWorktreeGitIdentityDisplay(e);
	return d?.kind === "branch" ? d.branchName : null;
}
function hasLinkedReview(e) {
	return !!(e.linkedPR ?? e.linkedGitLabMR ?? e.linkedBitbucketPR ?? e.linkedAzureDevOpsPR ?? e.linkedGiteaPR ?? null);
}
function trackCacheReads(e, d, f) {
	return new Proxy(e[d], { get: (e, p, m) => {
		let h = Reflect.get(e, p, m);
		return typeof p == "string" && f.push({
			cacheName: d,
			key: p,
			value: h
		}), h;
	} });
}
function dependenciesAreCurrent(e, d, f) {
	return f.every(({ cacheName: f, key: p, value: m }) => e[f] === d[f] || e[f][p] === m);
}
function cacheReferencesAreCurrent(e, d) {
	return e.hostedReviewCache === d.hostedReviewCache && e.prCache === d.prCache && e.checksCache === d.checksCache;
}
function createParentPrChecksProjectionSelector(e, d = buildParentPrChecksProjection) {
	let f = null;
	return (p) => {
		if (f) {
			if (cacheReferencesAreCurrent(p, f.cacheReferences)) return f.projection;
			if (dependenciesAreCurrent(p, f.cacheReferences, f.dependencies)) return f.cacheReferences = p, f.projection;
		}
		let m = [], h = d({
			...e,
			hostedReviewCache: trackCacheReads(p, "hostedReviewCache", m),
			prCache: trackCacheReads(p, "prCache", m),
			checksCache: trackCacheReads(p, "checksCache", m)
		});
		return f = {
			cacheReferences: p,
			dependencies: m,
			projection: h
		}, h;
	};
}
function FolderWorkspacePrChecksPanel({ isVisible: e = !0 }) {
	let d = useAppStore((e) => e.activeWorktreeId), h = useAppStore((e) => e.activeWorkspaceKey), g = useAppStore((e) => e.folderWorkspaces), _ = useAppStore((e) => e.workspaceLineageByChildKey), y = useAppStore((e) => e.worktreeLineageById), b = useAppStore((e) => e.worktreesByRepo), S = useAppStore((e) => e.repos), C = useAppStore((e) => e.settings), w = useAppStore((e) => e.fetchHostedReviewForBranch), E = useAppStore((e) => e.fetchPRChecks), D = useAppStore((e) => e.fetchPRCheckDetails), [O, k] = (0, import_react.useState)(() => /* @__PURE__ */ new Map()), [A, j] = (0, import_react.useState)(() => /* @__PURE__ */ new Set()), [M, N] = (0, import_react.useState)(0), P = (0, import_react.useRef)(0), { folderWorkspace: F, childWorktrees: I } = (0, import_react.useMemo)(() => getAttachedWorktreesForFolderWorkspace({
		activeWorkspaceKey: h,
		activeWorktreeId: d,
		folderWorkspaces: g,
		workspaceLineageByChildKey: _,
		worktreeLineageById: y,
		worktreesByRepo: b
	}), [
		h,
		d,
		g,
		_,
		y,
		b
	]), L = useAppStore((0, import_react.useMemo)(() => createParentPrChecksProjectionSelector({
		worktrees: I,
		repos: S,
		settings: C,
		refreshOutcomes: O
	}), [
		I,
		S,
		C,
		O
	])), R = F?.id ?? null, z = (0, import_react.useMemo)(() => formatReviewChecksHeaderSummary(L.summary), [L.summary]), B = (0, import_react.useMemo)(() => getParentPrChecksRefreshCandidates({
		worktrees: I,
		repos: S
	}), [I, S]), V = (0, import_react.useMemo)(() => B.map((e) => [
		e.identity,
		e.repo.path,
		e.repo.connectionId ?? "",
		e.repo.executionHostId ?? ""
	].join("|")).sort().join(";;"), [B]), H = (0, import_react.useRef)(B);
	(0, import_react.useEffect)(() => {
		H.current = B;
	}, [B]), (0, import_react.useEffect)(() => {
		let d = H.current;
		if (!e || !R || I.length === 0 || d.length === 0) return;
		let f = M > P.current;
		f && (P.current = M);
		let p = !1;
		return runLimitedParentPrChecksRefreshes({
			candidates: d,
			concurrency: 3,
			force: f,
			fetchHostedReviewForBranch: w,
			fetchPRChecks: E,
			onOutcome: (e, d) => {
				p || k((f) => new Map(f).set(e, d));
			}
		}), () => {
			p = !0;
		};
	}, [
		e,
		R,
		I.length,
		w,
		E,
		V,
		M
	]);
	let U = (0, import_react.useMemo)(() => new Set(B.map((e) => e.identity)), [B]), W = [...O.entries()].some(([e, d]) => U.has(e) && d.kind === "loading");
	(0, import_react.useEffect)(() => {
		let e = new Set(L.rows.map((e) => e.id));
		j((d) => {
			let f = new Set([...d].filter((d) => e.has(d)));
			return f.size === d.size ? d : f;
		});
	}, [L.rows]);
	let G = (0, import_react.useCallback)((e) => {
		j((d) => {
			let f = new Set(d);
			return f.has(e) ? f.delete(e) : f.add(e), f;
		});
	}, []), K = (0, import_react.useCallback)((e, d) => e.repo ? D(e.repo.path, {
		checkRunId: d.checkRunId,
		workflowRunId: d.workflowRunId,
		checkName: d.name,
		url: d.url,
		prRepo: e.githubRepository ?? null
	}, { repoId: e.repo.id }) : Promise.resolve(null), [D]);
	return F ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-hidden bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border px-4 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-sm font-medium text-foreground",
						children: translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.reviewChecks", "Review checks")
					}), z ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 truncate text-xs text-muted-foreground",
						children: z
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon-xs",
						onClick: () => N((e) => e + 1),
						disabled: I.length === 0 || W,
						"aria-label": translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.refresh", "Refresh PR checks"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-3.5", W && "animate-spin") })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "bottom",
					children: translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.refresh", "Refresh PR checks")
				})] })]
			})
		}), I.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-center justify-center px-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-medium text-foreground",
				children: translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.emptyTitle", "No attached worktrees yet")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 max-w-[16rem] text-xs leading-5 text-muted-foreground",
				children: translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.emptyCopy", "PR checks will appear here after worktrees are attached to this folder workspace.")
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scrollbar-sleek min-h-0 flex-1 overflow-y-auto px-2 py-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1",
				children: L.rows.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderWorkspacePrChecksRow, {
					row: e,
					expanded: A.has(e.id),
					onToggle: () => G(e.id),
					onLoadCheckDetails: (d) => K(e, d)
				}, e.id))
			})
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-0 flex-1 items-center justify-center p-6 text-center text-sm text-muted-foreground",
		children: translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.unavailable", "PR checks are only shown for folder workspaces.")
	});
}
function formatReviewChecksHeaderSummary(e) {
	if (e.attached === 0) return null;
	let d = formatWorktreeCount(e.attached), p = [e.failing > 0 ? formatFailingCount(e.failing) : null, e.pending > 0 ? formatPendingCount(e.pending) : null].filter((e) => e !== null);
	return p.length > 0 ? [...p, d].join(" · ") : e.passing === e.attached ? [d, translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.allChecksPassing", "all checks passing")].join(" · ") : d;
}
function formatWorktreeCount(e) {
	return e === 1 ? translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.oneWorktree", "1 worktree") : translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.worktreeCount", "{{value0}} worktrees", { value0: e });
}
function formatFailingCount(e) {
	return e === 1 ? translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.oneFailing", "1 failing") : translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.failingCount", "{{value0}} failing", { value0: e });
}
function formatPendingCount(e) {
	return e === 1 ? translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.onePending", "1 pending") : translate("auto.components.rightSidebar.FolderWorkspacePrChecksPanel.pendingCount", "{{value0}} pending", { value0: e });
}
export { FolderWorkspacePrChecksPanel as default };
