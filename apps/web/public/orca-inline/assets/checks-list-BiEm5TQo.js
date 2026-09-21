import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as CircleCheck } from "./circle-check-f8jEo_jQ.js";
import { t as CircleDashed } from "./circle-dashed-PoJjEZvD.js";
import { t as CircleX } from "./circle-x-B4rQismt.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as PanelRight } from "./panel-right-BDfk38Q6.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { Mr as summarizeProviderChecks, t as useAppStore, xt as createCheckRunDetailsRequestId } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { l as useActiveWorktree } from "./selectors-Cdg4hUQI.js";
import { t as CommentMarkdown_default } from "./CommentMarkdown-NC5Pka2-.js";
import { t as CheckJobLogTail } from "./check-job-log-tail-D0W6uJCR.js";
import { n as CHECK_ICON, t as CHECK_COLOR } from "./check-presentation-D579n17Q.js";
import { t as sortChecksBySeverity } from "./pr-check-severity-order-zR4RcIgK.js";
function getCheckIdentityKey(t, l) {
	return t.checkRunId ? `check-run:${t.checkRunId}` : t.workflowRunId ? `workflow-run:${t.workflowRunId}` : t.gitlabJobId ? `gitlab-job:${t.gitlabJobId}` : t.url ? `url:${t.url}` : `fallback:${t.name}:${l}`;
}
function getCheckDetailsKey(t, l, u) {
	return `${t}::${getCheckIdentityKey(l, u)}`;
}
function getCheckConclusion(t) {
	return t.conclusion ?? "pending";
}
function isFailedCheck(t) {
	return [
		"failure",
		"cancelled",
		"timed_out",
		"action_required"
	].includes(getCheckConclusion(t));
}
function isFailureState(t) {
	return t === "failure" || t === "failed" || t === "cancelled" || t === "timed_out";
}
function getCheckStatusLabel(t) {
	let l = getCheckConclusion(t);
	return l === "success" ? "Successful" : l === "failure" ? "Failed" : l === "cancelled" ? "Cancelled" : l === "timed_out" ? "Timed out" : l === "action_required" ? "Action required" : l === "neutral" ? "Neutral" : l === "skipped" ? "Skipped" : t.status === "queued" ? "Queued" : t.status === "in_progress" ? "In progress" : "Pending";
}
function formatCheckTimestamp(t) {
	if (!t) return null;
	let l = new Date(t);
	return Number.isNaN(l.getTime()) ? null : l.toLocaleString(void 0, {
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit"
	});
}
function getCheckDetailsStickySurfaceClass(t) {
	return t === "card" ? "bg-card/95" : "bg-sidebar/95";
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function ViewFullCheckDetailsButton({ onClick: t, label: l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "outline",
		size: "xs",
		className: "h-6 min-w-[7.25rem] shrink-0 gap-1 px-1.5 text-[11px] text-muted-foreground hover:text-foreground",
		onClick: t,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRight, { className: "size-3" }), l]
	});
}
function CheckRunDetails({ check: t, state: l, checkDetailsContextKey: p, worktreeId: m, detailsStickySurface: h = "sidebar", getGitLabProjectRef: g, githubRepository: _, onRetry: v }) {
	let b = useAppStore((t) => t.openCheckRunDetails), S = l?.details, w = formatCheckTimestamp(S?.startedAt), T = formatCheckTimestamp(S?.completedAt), E = {
		...t,
		status: S?.status ?? t.status,
		conclusion: S?.conclusion ?? t.conclusion
	}, D = S?.jobs.filter((t) => isFailureState(t.conclusion ?? t.status)) ?? [], O = D.length > 0 ? D : S?.jobs ?? [], k = !!(S?.title || S?.summary || S?.text), M = (S?.annotations.length ?? 0) > 0, N = O.length > 0, P = O.some((t) => !!t.logTail), F = !l?.loading && P ? translate("auto.components.right.sidebar.checks.panel.content.b8c4e2a1f7", "View full logs") : translate("auto.components.right.sidebar.checks.panel.content.e4e3af15ee", "View full details"), I = () => {
		m && b(m, p, t, {
			requestId: l?.requestId,
			details: l?.details ?? null,
			loading: l?.loading ?? !1,
			error: l?.error ?? null,
			githubRepository: _ ?? null,
			gitlabProjectRef: g?.() ?? null
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1 ml-[26px] mr-3 min-w-0 border-l border-border pl-3",
		children: [m && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("sticky top-0 z-10 -ml-3 flex min-w-0 items-center gap-2 border-b border-border/60 py-1 pl-3 backdrop-blur-sm", getCheckDetailsStickySurfaceClass(h)),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 truncate text-[11px] font-medium text-foreground",
				children: t.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewFullCheckDetailsButton, {
				label: F,
				onClick: (t) => {
					t.stopPropagation(), I();
				}
			})]
		}), l?.loading && !l.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "status",
			"aria-live": "polite",
			className: "flex min-w-0 flex-col gap-2 py-1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-[12px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }), translate("auto.components.right.sidebar.checks.panel.content.1f2b980522", "Loading check details…")]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-2.5 py-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							translate("auto.components.right.sidebar.checks.panel.content.a54ae21c6f", "Status:"),
							" ",
							getCheckStatusLabel(S ? E : t)
						] }),
						w && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							translate("auto.components.right.sidebar.checks.panel.content.fd46a70f1a", "Started"),
							" ",
							w
						] }),
						T && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							translate("auto.components.right.sidebar.checks.panel.content.00e1c1658a", "Completed"),
							" ",
							T
						] }),
						t.checkRunId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono",
							children: [translate("auto.components.right.sidebar.checks.panel.content.aa8494ae3c", "check #"), t.checkRunId]
						}),
						t.workflowRunId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono",
							children: [translate("auto.components.right.sidebar.checks.panel.content.2dd5ddabc4", "workflow #"), t.workflowRunId]
						})
					]
				}),
				l?.error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "alert",
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 break-words text-[12px] text-destructive",
						children: l.error
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						size: "xs",
						className: "shrink-0",
						disabled: l.loading,
						"aria-busy": l.loading,
						onClick: v,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-3", l.loading && "animate-spin") }), l.loading ? translate("githubChecks.retrying", "Retrying…") : translate("auto.components.right.sidebar.checks.panel.content.dcb3c546fe", "Retry")]
					})]
				}),
				k && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						S?.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 text-[12px] font-medium text-foreground",
							children: S.title
						}),
						S?.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentMarkdown_default, {
							content: S.summary,
							variant: "document",
							className: "min-w-0 max-w-full overflow-hidden break-words text-[12px] leading-relaxed [&_a]:break-all [&_code]:break-words [&_pre]:max-w-full"
						}),
						S?.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentMarkdown_default, {
							content: S.text,
							variant: "document",
							className: "mt-2 min-w-0 max-w-full overflow-hidden break-words text-[12px] leading-relaxed [&_a]:break-all [&_code]:break-words [&_pre]:max-w-full"
						})
					]
				}),
				M && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 border-t border-border/60 pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",
							children: translate("auto.components.right.sidebar.checks.panel.content.f2fe8a4e8f", "Annotations")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2",
							children: S.annotations.map((t, l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-w-0 items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0 truncate font-mono text-[11px] text-muted-foreground",
											children: [t.path ?? translate("auto.components.right.sidebar.checks.panel.content.cdbfda4dec", "Annotation"), t.startLine ? `:${t.startLine}` : ""]
										}), t.annotationLevel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-[11px] text-muted-foreground",
											children: t.annotationLevel
										})]
									}),
									t.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 text-[12px] font-medium text-foreground",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 break-words text-[12px] text-foreground",
										children: t.message
									}),
									t.rawDetails && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "mt-1 whitespace-pre-wrap rounded bg-muted/40 p-2 font-mono text-[11px] text-muted-foreground",
										children: t.rawDetails
									})
								]
							}, `${t.path ?? "annotation"}-${l}`))
						}),
						S.annotations.length >= 20 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 text-[10px] text-muted-foreground",
							children: translate("auto.components.right.sidebar.checks.panel.content.df137989b3", "Showing first 20 annotations")
						})
					]
				}),
				N && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 border-t border-border/60 pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",
							children: D.length > 0 ? translate("auto.components.right.sidebar.checks.panel.content.066fedd446", "Failed jobs") : translate("auto.components.right.sidebar.checks.panel.content.49731703ea", "Jobs")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2",
							children: O.map((t, l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-w-0 items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 flex-1 truncate text-[12px] font-medium text-foreground",
											children: t.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-[11px] text-muted-foreground",
											children: t.conclusion ?? t.status ?? translate("auto.components.right.sidebar.checks.panel.content.ee07b33924", "unknown")
										})]
									}),
									t.steps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 grid gap-0.5 pl-2",
										children: t.steps.filter((t) => isFailureState(t.conclusion ?? t.status)).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-w-0 items-center gap-2 text-[11px] text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 flex-1 truncate",
												children: t.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0",
												children: t.conclusion ?? t.status
											})]
										}, t.name))
									}),
									t.logTail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckJobLogTail, { logTail: t.logTail })
								]
							}, `${t.name}-${l}`))
						}),
						(S?.jobs.length ?? 0) >= 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 text-[10px] text-muted-foreground",
							children: translate("auto.components.right.sidebar.checks.panel.content.a2fb3f4408", "Showing first 100 jobs")
						})
					]
				}),
				!l?.error && !k && !M && !N && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[12px] text-muted-foreground",
					children: getCheckConclusion(E) === "action_required" ? translate("auto.components.right.sidebar.checks.panel.content.actionRequiredHint", "Needs a manual action on GitHub (e.g. approving the run) to unblock merging.") : translate("auto.components.right.sidebar.checks.panel.content.e15a8b77ef", "No inline details are available for this check.")
				})
			]
		})]
	});
}
var DEFAULT_CHECK_DETAILS_HEIGHT = 260, MIN_CHECK_DETAILS_HEIGHT = 72, MAX_CHECK_DETAILS_HEIGHT = 520;
function clampCheckDetailsHeight(t) {
	return Math.min(MAX_CHECK_DETAILS_HEIGHT, Math.max(MIN_CHECK_DETAILS_HEIGHT, t));
}
function useCheckDetailsResize(t) {
	let [l, u] = (0, import_react.useState)(DEFAULT_CHECK_DETAILS_HEIGHT), d = (0, import_react.useRef)(null), f = (0, import_react.useCallback)((u) => {
		t && (u.preventDefault(), d.current = {
			y: u.clientY,
			height: l
		});
	}, [l, t]);
	return (0, import_react.useEffect)(() => {
		let t = (t) => {
			let l = d.current;
			l && u(clampCheckDetailsHeight(l.height + t.clientY - l.y));
		}, l = () => {
			d.current = null;
		};
		return document.addEventListener("mousemove", t), document.addEventListener("mouseup", l), () => {
			document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", l);
		};
	}, []), {
		detailsHeight: l,
		handleResizeStart: f
	};
}
function useChecksListState({ checks: t, checkDetailsContextKey: l, onLoadCheckDetails: d, worktreeId: f, getGitLabProjectRef: p, githubRepository: m }) {
	let h = useActiveWorktree(), g = f ?? h?.id ?? null, _ = useAppStore((t) => t.patchOpenCheckRunDetails), [v, y] = (0, import_react.useState)(!0), [b, x] = (0, import_react.useState)(/* @__PURE__ */ new Set()), [T, E] = (0, import_react.useState)({}), D = (0, import_react.useRef)(l), O = (0, import_react.useRef)(null), A = v && b.size === 0, { detailsHeight: j, handleResizeStart: M } = useCheckDetailsResize(A && t.length > 0);
	D.current = l;
	let N = import_react.useMemo(() => sortChecksBySeverity(t), [t]), F = import_react.useMemo(() => N.map((t, u) => ({
		check: t,
		key: getCheckDetailsKey(l, t, u)
	})), [l, N]), { passed: L, failed: z, pending: B, neutral: V } = summarizeProviderChecks(t);
	(0, import_react.useEffect)(() => {
		let t = new Set(F.map((t) => t.key));
		E((l) => {
			let u = {};
			for (let [d, f] of Object.entries(l)) t.has(d) && (u[d] = f);
			return u;
		}), x((u) => {
			let d = new Set([...u].filter((l) => t.has(l)));
			if (O.current !== l) {
				let t = F.find((t) => isFailedCheck(t.check));
				t && d.add(t.key), O.current = l;
			}
			return d;
		});
	}, [l, F]), (0, import_react.useEffect)(() => {
		E((t) => {
			let l = !1, u = { ...t };
			for (let t of F) {
				let d = u[t.key];
				!d || d.loading || (d.details ? d.details.status !== t.check.status || d.details.conclusion !== t.check.conclusion : d.errorAt && (d.errorAt.status !== t.check.status || d.errorAt.conclusion !== t.check.conclusion)) && (delete u[t.key], l = !0);
			}
			return l ? u : t;
		});
	}, [F]);
	let H = (0, import_react.useCallback)((t) => {
		if (T[t.key]?.loading || T[t.key]?.details) return;
		if (!t.check.checkRunId && !t.check.workflowRunId && !t.check.url && !t.check.gitlabJobId) {
			E((l) => ({
				...l,
				[t.key]: {
					loading: !1,
					details: null,
					error: translate("auto.components.right.sidebar.checks.panel.content.e15a8b77ef", "No inline details are available for this check.")
				}
			}));
			return;
		}
		if (!d) {
			E((l) => ({
				...l,
				[t.key]: {
					loading: !1,
					details: null,
					error: translate("auto.components.right.sidebar.checks.panel.content.e15a8b77ef", "No inline details are available for this check.")
				}
			}));
			return;
		}
		let f = l, h = createCheckRunDetailsRequestId(), v = T[t.key]?.error ?? null;
		E((l) => ({
			...l,
			[t.key]: {
				requestId: h,
				loading: !0,
				details: null,
				error: v
			}
		})), g && _(g, f, t.check, {
			requestId: h,
			details: null,
			loading: !0,
			error: v,
			githubRepository: m ?? null,
			gitlabProjectRef: p?.() ?? null
		}), Promise.resolve().then(() => d(t.check)).then((l) => {
			g && _(g, f, t.check, {
				requestId: h,
				details: l,
				loading: !1,
				error: l ? null : translate("auto.components.right.sidebar.checks.panel.content.e15a8b77ef", "No inline details are available for this check."),
				githubRepository: m ?? null,
				gitlabProjectRef: p?.() ?? null
			}), D.current === f && E((d) => d[t.key]?.requestId === h ? {
				...d,
				[t.key]: {
					requestId: h,
					loading: !1,
					details: l,
					error: l ? null : translate("auto.components.right.sidebar.checks.panel.content.e15a8b77ef", "No inline details are available for this check."),
					errorAt: l ? void 0 : {
						status: t.check.status,
						conclusion: t.check.conclusion
					}
				}
			} : d);
		}).catch((l) => {
			let d = l instanceof Error ? l.message : translate("auto.components.right.sidebar.checks.panel.content.e45324fbed", "Failed to load check details.");
			g && _(g, f, t.check, {
				requestId: h,
				details: null,
				loading: !1,
				error: d,
				githubRepository: m ?? null,
				gitlabProjectRef: p?.() ?? null
			}), D.current === f && E((l) => l[t.key]?.requestId === h ? {
				...l,
				[t.key]: {
					requestId: h,
					loading: !1,
					details: null,
					error: d,
					errorAt: {
						status: t.check.status,
						conclusion: t.check.conclusion
					}
				}
			} : l);
		});
	}, [
		l,
		T,
		p,
		m,
		d,
		_,
		g
	]);
	return (0, import_react.useEffect)(() => {
		if (v) for (let t of F) b.has(t.key) && !T[t.key] && H(t);
	}, [
		v,
		T,
		b,
		H,
		F
	]), (0, import_react.useEffect)(() => {
		if (g) for (let t of F) {
			let u = T[t.key];
			u && _(g, l, t.check, {
				requestId: u.requestId,
				details: u.details ?? null,
				loading: u.loading ?? !1,
				error: u.error ?? null,
				githubRepository: m ?? null,
				gitlabProjectRef: p?.() ?? null
			});
		}
	}, [
		l,
		T,
		p,
		m,
		_,
		g,
		F
	]), {
		resolvedWorktreeId: g,
		checksExpanded: v,
		setChecksExpanded: y,
		expandedCheckKeys: b,
		detailsByCheckKey: T,
		shouldConstrainCheckList: A,
		detailsHeight: j,
		handleResizeStart: M,
		rows: F,
		passingCount: L,
		failingCount: z,
		pendingCount: B,
		neutralCount: V,
		toggleCheckExpanded: (0, import_react.useCallback)((t) => {
			let l = !b.has(t.key);
			x((l) => {
				let u = new Set(l);
				return u.has(t.key) ? u.delete(t.key) : u.add(t.key), u;
			}), l && H(t);
		}, [b, H]),
		requestCheckDetails: H
	};
}
function ChecksList(t) {
	let { checks: l, checksLoading: b, checkDetailsContextKey: x, detailsStickySurface: S = "sidebar", getGitLabProjectRef: C, githubRepository: w } = t, { resolvedWorktreeId: T, checksExpanded: k, setChecksExpanded: A, expandedCheckKeys: j, detailsByCheckKey: P, shouldConstrainCheckList: F, detailsHeight: I, handleResizeStart: L, rows: R, passingCount: z, failingCount: V, pendingCount: H, neutralCount: U, toggleCheckExpanded: W, requestCheckDetails: G } = useChecksListState(t);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [l.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "flex w-full items-center gap-3 border-b border-border px-3 py-2 text-left text-[10px] text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground",
		onClick: () => A((t) => !t),
		"aria-expanded": k,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3 shrink-0 transition-transform", !k && "-rotate-90") }),
			z > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 text-emerald-500" }),
					z,
					" ",
					translate("auto.components.right.sidebar.checks.panel.content.02ca4f9074", "passing")
				]
			}),
			V > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-3 text-rose-500" }),
					V,
					" ",
					translate("auto.components.right.sidebar.checks.panel.content.5e52f4ef7f", "failing")
				]
			}),
			H > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 text-amber-500" }),
					H,
					" ",
					translate("auto.components.right.sidebar.checks.panel.content.9ad98f2a17", "pending")
				]
			}),
			U > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDashed, { className: "size-3 text-muted-foreground" }),
					U,
					" ",
					translate("auto.components.right.sidebar.checks.panel.content.checksUnresolvedChip", "unresolved")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1" }),
			b && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin text-muted-foreground" })
		]
	}), b && l.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin text-muted-foreground" })
	}) : l.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-8 text-[11px] text-muted-foreground",
		children: translate("auto.components.right.sidebar.checks.panel.content.991f50c7e4", "No checks configured")
	}) : k ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("py-1", F && "overflow-y-auto scrollbar-sleek"),
			style: F ? { maxHeight: I } : void 0,
			children: R.map((t) => {
				let l = t.check, p = l.conclusion ?? "pending", h = CHECK_ICON[p] ?? CircleDashed, _ = CHECK_COLOR[p] ?? "text-muted-foreground", y = j.has(t.key), b = l.url;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("group/check-row flex min-w-0 cursor-pointer items-center gap-2 px-3 py-1.5 transition-colors hover:bg-accent/40", y && "bg-accent/25"),
						onClick: () => W(t),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: cn("size-3 shrink-0 text-muted-foreground transition-transform", y && "rotate-90") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { className: cn("size-3.5 shrink-0", _, p === "pending" && "animate-spin") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 truncate text-[12px] text-foreground",
								children: l.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex shrink-0 items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: getCheckStatusLabel(l)
								}), b && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: !0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "ghost",
										size: "icon-xs",
										className: "size-6 text-muted-foreground hover:text-foreground focus-visible:text-foreground",
										"aria-label": translate("auto.components.right.sidebar.checks.panel.content.0dca6bfab5", "Open check details"),
										onClick: (t) => {
											t.stopPropagation(), window.api.shell.openUrl(b);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
									side: "left",
									sideOffset: 4,
									children: translate("auto.components.right.sidebar.checks.panel.content.0dca6bfab5", "Open check details")
								})] })]
							})
						]
					}), y && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRunDetails, {
						check: l,
						state: P[t.key],
						checkDetailsContextKey: x,
						worktreeId: T,
						detailsStickySurface: S,
						getGitLabProjectRef: C,
						githubRepository: w,
						onRetry: () => G(t)
					})]
				}, t.key);
			})
		}),
		F && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "separator",
			"aria-orientation": "horizontal",
			title: translate("auto.components.right.sidebar.checks.panel.content.7f793b571d", "Drag to resize checks"),
			className: "group flex h-2 cursor-row-resize items-center border-b border-border",
			onMouseDown: L,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-transparent transition-colors group-hover:bg-ring/40" })
		}),
		l.length >= 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border px-3 py-1.5 text-[10px] text-muted-foreground",
			children: translate("auto.components.right.sidebar.checks.panel.content.cbcc4ab3db", "Showing first 100 checks")
		})
	] }) : null] });
}
export { ChecksList as t };
