import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as OnboardingInlineCommandTerminal } from "./OnboardingInlineCommandTerminal-VsMyG1gD.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as Terminal } from "./terminal-DVHlU3bc.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { c as useSkillFreshness, i as isSkillScanIssueNeedingAttention, o as skillPlacementParticipatesInGlobalFreshness, r as isSkillCopyNeedingAttention, s as refreshSkillFreshness } from "./skill-freshness-C1zR3w1F.js";
import { r as requestSkillFreshnessUpdateDialog } from "./skill-freshness-update-dialog-DlbP_7Cb.js";
import { r as notifyInstalledAgentSkillsRefreshed } from "./useInstalledAgentSkills-elga6kkz.js";
import { n as buildSkillSetupTerminalCommand, u as isOrcaCliAvailableOnPath } from "./CliSkillRuntimeSetup-l01nqxEe.js";
import { t as IntegrationStatusPill } from "./integration-status-pill-bmyKtjbI.js";
function getSkillFreshnessDisplayStatus(e, t) {
	if (e?.eligibleUpdateNames.includes(t)) return "update-available";
	let n = !1, r = !1;
	for (let i of e?.installations ?? []) i.name === t && skillPlacementParticipatesInGlobalFreshness(i) && (n = !0, i.status !== "current" && i.status !== "newer-known" && !(i.status === "unrecognized" && i.topology === "plugin-cache") && (r = !0));
	return n ? e?.scanIssues.some(isSkillScanIssueNeedingAttention) || r ? "needs-attention" : "up-to-date" : "installed";
}
function hasSkillCopyNeedingAttention(e, t) {
	let n = (e?.installations ?? []).filter((e) => e.name === t && skillPlacementParticipatesInGlobalFreshness(e));
	return n.length > 0 && !!e?.scanIssues.some(isSkillScanIssueNeedingAttention) || n.some(isSkillCopyNeedingAttention);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function statusPill(e) {
	return e === "update-available" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
		tone: "attention",
		children: translate("auto.components.skills.SkillFreshnessStatusPill.updateAvailable", "Update available")
	}) : e === "needs-attention" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
		tone: "attention",
		children: translate("auto.components.skills.SkillFreshnessStatusPill.needsAttention", "Review skill")
	}) : e === "up-to-date" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
		tone: "connected",
		children: translate("auto.components.skills.SkillFreshnessStatusPill.upToDate", "Up to date")
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
		tone: "connected",
		children: translate("auto.components.skills.SkillFreshnessStatusPill.installed", "Installed")
	});
}
function SkillFreshnessStatusPill({ skillName: e }) {
	let { inventory: t, loading: a, error: s } = useSkillFreshness();
	if (a && !t) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
		tone: "neutral",
		children: translate("auto.components.skills.SkillFreshnessStatusPill.checking", "Checking...")
	});
	if (s && !t) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
		tone: "attention",
		children: translate("auto.components.skills.SkillFreshnessStatusPill.checkFailed", "Check failed")
	});
	let c = getSkillFreshnessDisplayStatus(t, e), l = c === "update-available" || c === "needs-attention", u = hasSkillCopyNeedingAttention(t, e);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2",
		children: [statusPill(c), l ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			size: "xs",
			className: cn("gap-1 px-1.5 text-[11px]", u && "text-amber-500 hover:text-amber-500"),
			onClick: () => requestSkillFreshnessUpdateDialog(),
			children: [
				u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3" }) : null,
				translate("auto.components.skills.SkillFreshnessStatusPill.details", "Details"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" })
			]
		}) : null]
	});
}
function AgentSkillSetupFailureNotice(e) {
	return e.exitCode === null ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-[12px] leading-snug text-destructive",
		children: translate("auto.components.settings.AgentSkillSetupPanel.setupCommandFailed", "The setup command exited with code {{value0}}. This error will clear after a successful retry.", { value0: e.exitCode })
	});
}
function createTerminalSnapshot(e, t, n) {
	let r = n ? { ...n } : void 0;
	return {
		copiedCommand: e,
		prepareCommandForShell: (e, t) => buildSkillSetupTerminalCommand(e, t, r),
		shellOverride: t
	};
}
function syncSurfacesAfterAgentSkillRecheck(e) {
	notifyInstalledAgentSkillsRefreshed(), e && refreshSkillFreshness();
}
function recheckSurfacesAfterAgentSkillTerminal(e, t) {
	Promise.resolve(e()).then(() => {
		syncSurfacesAfterAgentSkillRecheck(t);
	});
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function AgentSkillSetupPanel({ title: e, description: t, command: o, installedCommand: me, terminalTitle: he, terminalAriaLabel: d, terminalWorktreeId: f, installed: p, loading: m, error: h, installDisabled: g = !1, terminalHeightPx: _, terminalShellOverride: ge, terminalRuntime: _e, leading: ve, icon: v, variant: y = "card", className: b, hideHeader: x = !1, preInstallNotice: S, getPrerequisiteStatus: C, isPrerequisiteAvailable: w = isOrcaCliAvailableOnPath, onBeforeOpenTerminal: T, showInstallWhenInstalled: E = !0, showRecheckWhenInstalled: D = !0, installLabel: O, installedInstallLabel: k, installVariant: A = "outline", actionHint: j, openingHint: M, footer: N, onRecheck: P, freshnessSkillName: F }) {
	let I = O ?? translate("auto.components.settings.AgentSkillSetupPanel.installLabel", "Install"), L = k ?? translate("auto.components.settings.AgentSkillSetupPanel.updateLabel", "Update"), [R, z] = (0, import_react.useState)(!1), [B, ye] = (0, import_react.useState)(null), [be, xe] = (0, import_react.useState)(0), [V, H] = (0, import_react.useState)(!1), [U, W] = (0, import_react.useState)(!1), [G, Se] = (0, import_react.useState)(null), K = (0, import_react.useRef)(!1), [Ce, q] = (0, import_react.useState)(!!(S && !p)), J = useMountedRef(), Y = (0, import_react.useCallback)(() => (C ?? window.api.cli.getInstallStatus)(), [C]), X = p ? me ?? o : o, Z = B?.copiedCommand ?? X, Q = () => {
		if (V || U) return;
		let e = createTerminalSnapshot(X, ge, _e);
		H(!0), G !== null && z(!1), (async () => {
			let t = !1;
			try {
				await T?.(), await Te(), t = !0;
			} catch {
				t = !1;
			} finally {
				J.current && (H(!1), t && (ye(e), xe((e) => e + 1), z(!0), K.current = !0, W(!0)));
			}
		})();
	}, $ = (0, import_react.useCallback)((e) => {
		K.current && (K.current = !1, W(!1), e !== null && Se(e === 0 ? null : e), recheckSurfacesAfterAgentSkillTerminal(P, F));
	}, [F, P]), we = (0, import_react.useCallback)(() => {
		let e = K.current;
		J.current && (K.current = !1, z(!1), W(!1)), e && recheckSurfacesAfterAgentSkillTerminal(P, F);
	}, [
		F,
		J,
		P
	]);
	(0, import_react.useEffect)(() => {
		if (!S) {
			q(!1);
			return;
		}
		let e = !1, t = async () => {
			try {
				let t = await Y();
				e || q(!w(t));
			} catch {
				e || q(!0);
			}
		};
		return t(), window.addEventListener("focus", t), () => {
			e = !0, window.removeEventListener("focus", t);
		};
	}, [
		w,
		S,
		Y
	]);
	let Te = async () => {
		if (S) try {
			let e = await Y();
			J.current && q(!w(e));
		} catch {
			J.current && q(!0);
		}
	}, Ee = async () => {
		try {
			await window.api.ui.writeClipboardText(Z), toast.success(translate("auto.components.settings.AgentSkillSetupPanel.copiedCommand", "Copied command."));
		} catch (e) {
			toast.error(e instanceof Error ? e.message : translate("auto.components.settings.AgentSkillSetupPanel.failedToCopyCommand", "Failed to copy command."));
		}
	}, De = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 flex flex-wrap items-center gap-2",
		children: [
			(!p || E) && G === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: A,
				size: "sm",
				onClick: Q,
				disabled: R || g || V,
				children: [V ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3.5" }), V ? translate("auto.components.settings.AgentSkillSetupPanel.5f818f12ab", "Preparing...") : p ? L : I]
			}) : null,
			G !== null || !p || D ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "gap-1.5",
				onClick: () => {
					if (G !== null) {
						Q();
						return;
					}
					Promise.resolve(P()).then(() => {
						syncSurfacesAfterAgentSkillRecheck(F);
					});
				},
				disabled: G === null ? m : g || V || U,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-3.5", (m || V) && "animate-spin") }), G === null ? translate("auto.components.settings.AgentSkillSetupPanel.c689392435", "Re-check") : translate("auto.components.settings.AgentSkillSetupPanel.retrySetup", "Retry")]
			}) : null,
			V ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "basis-full text-[12px] leading-snug text-muted-foreground",
				children: M ?? translate("auto.components.settings.AgentSkillSetupPanel.4c05b9d7cb", "Preparing setup terminal.")
			}) : null
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("min-w-0", y === "card" ? "rounded-xl border border-border bg-muted/20" : null, b),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: y === "card" ? cn("px-5 pt-5", R ? "pb-2" : "pb-5") : "pt-1.5",
			children: [
				x ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] text-destructive",
					children: h
				}) : null, p && F && G === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillFreshnessStatusPill, { skillName: F })
				}) : null] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						ve,
						v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground",
							children: v
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 self-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-3 gap-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[15px] font-semibold leading-tight text-foreground",
									children: e
								}), G === null ? m && !p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
									tone: "neutral",
									children: translate("auto.components.settings.AgentSkillSetupPanel.68a468752e", "Checking...")
								}) : p ? F ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillFreshnessStatusPill, { skillName: F }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
									tone: "connected",
									children: translate("auto.components.settings.AgentSkillSetupPanel.9fcebceb2a", "Installed")
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
									tone: "attention",
									children: translate("auto.components.settings.AgentSkillSetupPanel.5289300939", "Not installed")
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntegrationStatusPill, {
									tone: "attention",
									children: translate("auto.components.settings.AgentSkillSetupPanel.setupFailed", "Setup failed")
								})]
							}), h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12px] text-destructive",
								children: h
							}) : null]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("max-w-none", x ? null : "mt-3"),
					children: [
						t == null ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] leading-snug text-muted-foreground",
							children: t
						}),
						De,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentSkillSetupFailureNotice, { exitCode: G }),
						j ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2",
							children: j
						}) : null,
						!p && S && Ce ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[12px] leading-snug text-muted-foreground",
							children: S
						}) : null
					]
				}),
				N ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("border-t border-border/60", R ? "mt-2 pt-4" : "mt-5 pt-5"),
					children: N
				}) : null
			]
		}), R && B ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("min-w-0 max-w-full overflow-hidden", y === "card" ? "px-5 pb-5" : "mt-2"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 max-w-full items-center gap-2 overflow-hidden rounded-md border border-border bg-muted/35 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "scrollbar-sleek min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-xs text-muted-foreground",
					children: Z
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon-sm",
						className: "shrink-0",
						"aria-label": translate("auto.components.settings.AgentSkillSetupPanel.copyCommandAria", "Copy command"),
						onClick: () => void Ee(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "top",
					sideOffset: 4,
					children: translate("auto.components.settings.AgentSkillSetupPanel.ed197f59a2", "Copy command")
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingInlineCommandTerminal, {
				worktreeId: f,
				command: Z,
				prepareCommandForShell: B.prepareCommandForShell,
				title: he,
				description: translate("auto.components.settings.AgentSkillSetupPanel.runCommandDescription", "Press Enter to run the command."),
				ariaLabel: d,
				terminalHeightPx: _,
				shellOverride: B.shellOverride,
				terminalTopMarginPx: 8,
				descriptionPaddingClassName: "px-4 py-2",
				autoScrollIntoView: !1,
				onTerminalExit: we,
				onCommandFinished: $
			}, be)]
		}) : null]
	});
}
export { SkillFreshnessStatusPill as n, getSkillFreshnessDisplayStatus as r, AgentSkillSetupPanel as t };
