import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as OnboardingInlineCommandTerminal } from "./OnboardingInlineCommandTerminal-VsMyG1gD.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as Github } from "./github-C84XZpwh.js";
import { t as Terminal } from "./terminal-DVHlU3bc.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as LinearIcon } from "./LinearIcon-BZznKVMM.js";
import { t as IntegrationStatusPill } from "./integration-status-pill-bmyKtjbI.js";
import { t as LinearApiKeyDialog } from "./linear-api-key-dialog-BDZIULGw.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function getGitHubSetupState(e) {
	return e ? e.gh.installed ? e.gh.authenticated ? "connected" : "not-authenticated" : "not-installed" : "checking";
}
function GitHubRow(e = {}) {
	let { compact: u = !1 } = e, h = useAppStore((e) => e.preflightStatus), g = useAppStore((e) => e.preflightStatusLoading), _ = useAppStore((e) => e.refreshPreflightStatus), v = g ? "checking" : getGitHubSetupState(h), [y, b] = (0, import_react.useState)(!1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-muted/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn(u ? "flex flex-col gap-3 p-4" : "flex items-start gap-4 p-5"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-start gap-3", u ? "" : "gap-4 flex-1 min-w-0"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[15px] font-semibold leading-tight text-foreground",
							children: translate("auto.components.onboarding.IntegrationsStep.217beb0658", "GitHub")
						}), v === "connected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
							tone: "connected",
							children: translate("auto.components.onboarding.IntegrationsStep.c91a5782f1", "Connected")
						}) : v === "not-installed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
							tone: "attention",
							children: translate("auto.components.onboarding.IntegrationsStep.5c115cb713", "CLI not installed")
						}) : v === "not-authenticated" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
							tone: "attention",
							children: translate("auto.components.onboarding.IntegrationsStep.8405043962", "Sign in needed")
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
							tone: "neutral",
							children: translate("auto.components.onboarding.IntegrationsStep.c1547656f0", "Checking…")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
						children: translate("auto.components.onboarding.IntegrationsStep.50db38cf4b", "Pull requests, issues, and check status.")
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-2", u ? "flex-wrap" : "shrink-0"),
				children: [
					v === "not-installed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => window.api.shell.openUrl("https://cli.github.com"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), translate("auto.components.onboarding.IntegrationsStep.bd5d976fb2", "Install gh")]
					}) : null,
					v === "not-authenticated" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						disabled: y,
						onClick: () => b(!0),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3.5" }), y ? translate("auto.components.onboarding.IntegrationsStep.0b4a7d23ab", "Signing in") : translate("auto.components.onboarding.IntegrationsStep.d6e5dba05a", "Sign in")]
					}) : null,
					v === "connected" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => void _({ force: !0 }),
						children: translate("auto.components.onboarding.IntegrationsStep.80e3ce0bc9", "Re-check")
					})
				]
			})]
		}), v === "not-authenticated" && y ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn(u ? "px-4 pb-4" : "px-5 pb-5"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingInlineCommandTerminal, {
				command: "gh auth login",
				title: translate("auto.components.onboarding.IntegrationsStep.6d469169f2", "GitHub setup"),
				ariaLabel: translate("auto.components.onboarding.IntegrationsStep.f9d2e12d17", "GitHub sign in command"),
				description: translate("auto.components.onboarding.IntegrationsStep.af69f42372", "Press Enter to run GitHub CLI auth. Re-check GitHub after the browser or device flow finishes.")
			})
		}) : null]
	});
}
function LinearRow(e = {}) {
	let { compact: u = !1 } = e, d = useAppStore((e) => e.linearStatus), f = useAppStore((e) => e.checkLinearConnection), [p, m] = (0, import_react.useState)(!1), h = d.workspaces?.length ?? (d.connected ? 1 : 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-border bg-muted/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn(u ? "flex flex-col gap-3 p-4" : "flex items-start gap-4 p-5"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-start gap-3", u ? "" : "gap-4 flex-1 min-w-0"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinearIcon, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[15px] font-semibold leading-tight text-foreground",
							children: translate("auto.components.onboarding.IntegrationsStep.27743304b1", "Linear")
						}), d.connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
							tone: "connected",
							children: translate("auto.components.onboarding.IntegrationsStep.c91a5782f1", "Connected")
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
						children: d.connected ? translate("auto.components.onboarding.IntegrationsStep.b08a6ac93c", "{{value0}} workspace{{value1}} linked. Add another workspace or replace a restricted key any time.", {
							value0: h,
							value1: h === 1 ? "" : "s"
						}) : translate("auto.components.onboarding.IntegrationsStep.4983ae7433", "Add Linear access with a Personal API key. Full-access keys can show every team the key owner can access.")
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-2", u ? "flex-wrap" : "shrink-0"),
				children: [d.connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => m(!0),
					children: translate("auto.components.onboarding.IntegrationsStep.dd9c186a8b", "Add workspace access")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => m(!0),
					children: translate("auto.components.onboarding.IntegrationsStep.04ef416712", "Add Linear access")
				}), d.connected ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => void f(!0),
					children: translate("auto.components.onboarding.IntegrationsStep.80e3ce0bc9", "Re-check")
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinearApiKeyDialog, {
		open: p,
		onOpenChange: m,
		overlayClassName: "z-[110]",
		contentClassName: "z-[120]",
		connectLabel: translate("auto.components.onboarding.IntegrationsStep.04ef416712", "Add Linear access")
	})] });
}
var CAPABILITIES = [
	{
		key: "components.onboarding.integrations.capabilities.startWorkspaceFromIssue",
		fallback: "Start a workspace from any GitHub issue or pull request, prefilled with its title and context"
	},
	{
		key: "components.onboarding.integrations.capabilities.browseIssues",
		fallback: "Browse GitHub issues and pull requests in the Tasks view without leaving Orca"
	},
	{
		key: "components.onboarding.integrations.capabilities.reviewStatus",
		fallback: "See issue state, review status, and CI checks on every worktree"
	},
	{
		key: "components.onboarding.integrations.capabilities.managePullRequests",
		fallback: "Read, comment on, and merge pull requests without leaving Orca"
	}
];
function IntegrationsStep() {
	let e = useAppStore((e) => e.refreshPreflightStatus);
	return (0, import_react.useEffect)(() => {
		e();
	}, [e]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "-mt-6 space-y-1.5 text-[14px] leading-relaxed text-muted-foreground",
			children: CAPABILITIES.map(({ key: e, fallback: u }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 size-1 shrink-0 rounded-full bg-muted-foreground",
					"aria-hidden": !0
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate(e, u) })]
			}, e))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubRow, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-xl border border-border bg-muted/10 px-5 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[14px] font-medium text-foreground/70",
						children: translate("auto.components.onboarding.IntegrationsStep.3a3e360289", "More task sources")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] leading-relaxed text-muted-foreground",
						children: translate("auto.components.onboarding.IntegrationsStep.277f30eb34", "Linear, GitLab, Bitbucket, Azure DevOps, Gitea, and Jira live in Settings > Integrations.")
					})]
				})
			})]
		})]
	});
}
export { IntegrationsStep as n, LinearRow as r, GitHubRow as t };
