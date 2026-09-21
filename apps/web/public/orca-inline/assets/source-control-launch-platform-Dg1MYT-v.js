import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as CircleCheck } from "./circle-check-f8jEo_jQ.js";
import { t as Info } from "./info-CS7SIWrO.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as RotateCcw } from "./rotate-ccw-Dz2ARXLO.js";
import { t as Settings } from "./settings-D0EstZRB.js";
import { t as Sparkles } from "./sparkles-CNzWYcyb.js";
import { Ax as resolveSourceControlActionRecipe, Ox as normalizeRepoSourceControlAiOverrides, Px as DEFAULT_SOURCE_CONTROL_ACTION_COMMAND_TEMPLATES, Qy as isWindowsAbsolutePathLike, Rx as renderSourceControlActionCommandTemplate, Tl as focusTerminalTabSurface, ZS as getRepoExecutionHostId, fx as planAgentCliArgsSuffix, jf as ensureLocalRuntimeCapabilities, kx as normalizeSourceControlAiSettings, ox as resolveLocalWindowsAgentStartupShell, qx as isCustomAgentId, rS as isTuiAgentEnabled, rb as isWslUncPath, t as useAppStore, xS as TUI_AGENT_CONFIG } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Label } from "./label-CA70r2No.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-X9Gmv_Pu.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { p as useRepoById } from "./selectors-Cdg4hUQI.js";
import { d as buildAgentStartupPlan, u as buildAgentDraftLaunchPlan } from "./agent-paste-draft-Ddp-k6QZ.js";
import { b as CLIENT_PLATFORM } from "./native-chat-session-option-cache-DOY0fjiI.js";
import { n as getAgentCatalog } from "./agent-catalog-Cgr0_vcs.js";
import { t as AgentCombobox } from "./AgentCombobox-DYOZwg19.js";
import { m as workspaceKindForWorktreeId, r as planAgentSessionLaunch } from "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import { t as resolveInitialNativeChatSessionOptions } from "./native-chat-launch-session-options-CUf2xfmH.js";
import { t as launchAgentInNewTab } from "./launch-agent-in-new-tab-DNniBJOv.js";
import { a as resolveSourceControlLaunchAgentScope, r as pickSourceControlLaunchAgent, s as SourceControlActionVariableChips } from "./source-control-ai-recipe-save-wCvkiEl1.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function SourceControlAgentCliArgsField({ applies: e, value: t, onChange: r }) {
	return e ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: "source-control-agent-cli-args",
			className: "text-xs",
			children: translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.bc8dc39f4b", "CLI arguments")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id: "source-control-agent-cli-args",
			value: t,
			spellCheck: !1,
			placeholder: translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.fe119187bb", "--model sonnet"),
			onChange: (e) => r(e.target.value),
			className: "h-8 font-mono text-xs"
		})]
	}) : null;
}
function normalizeSourceControlActionRecipeForComparison(e, t) {
	return {
		agentId: t?.agentId ?? null,
		commandInputTemplate: typeof t?.commandInputTemplate == "string" ? t.commandInputTemplate.trim() : DEFAULT_SOURCE_CONTROL_ACTION_COMMAND_TEMPLATES[e],
		agentArgs: typeof t?.agentArgs == "string" ? t.agentArgs.trim() : ""
	};
}
function sourceControlActionRecipesMatch(e, t) {
	return e.agentId === t.agentId && e.commandInputTemplate === t.commandInputTemplate && e.agentArgs === t.agentArgs;
}
function readSavedSourceControlActionRecipeAtTarget(e) {
	return e.target.type === "repo" ? normalizeRepoSourceControlAiOverrides(e.repo?.sourceControlAi)?.actionOverrides?.[e.actionId] ? resolveSourceControlActionRecipe({
		actionId: e.actionId,
		settings: e.settings,
		repo: e.repo
	}) : null : normalizeSourceControlAiSettings(e.settings?.sourceControlAi, e.settings?.commitMessageAi).actions?.[e.actionId] ?? null;
}
function readSavedCustomAgentCommandAtTarget(e) {
	return e.target.type === "repo" ? normalizeRepoSourceControlAiOverrides(e.repo?.sourceControlAi)?.customAgentCommand?.trim() ?? "" : normalizeSourceControlAiSettings(e.settings?.sourceControlAi, e.settings?.commitMessageAi).customAgentCommand.trim();
}
function sourceControlActionRecipeMatchesTarget(e) {
	let t = readSavedSourceControlActionRecipeAtTarget(e);
	if (!t) return !1;
	let n = normalizeSourceControlActionRecipeForComparison(e.actionId, e.recipe);
	return sourceControlActionRecipesMatch(n, normalizeSourceControlActionRecipeForComparison(e.actionId, t)) ? isCustomAgentId(n.agentId) ? (e.customAgentCommand ?? "").trim() === readSavedCustomAgentCommandAtTarget(e) : !0 : !1;
}
function sourceControlLaunchSaveTargetFromValue(e, t) {
	return e === "repo" && t?.id ? {
		type: "repo",
		repoId: t.id
	} : e === "global" ? { type: "global" } : null;
}
function SourceControlAgentActionDialogForm({ actionId: e, baseCommandInput: t, agentScopeNote: d, agentOptions: f, selectedAgent: p, hasEnabledAgents: m, detecting: h, statusCopy: g, agentArgs: _, agentArgsApply: v, commandTemplate: y, savedCommandInputTemplate: b, saveLaunchRecipe: x, saveTargetValue: S, saveTargets: C, settings: w, repo: T, canSaveAgentDefault: E, deliveryPlan: O, canStart: F, isStarting: I, startLabel: L, onSelectedAgentChange: R, onAgentArgsChange: z, onCommandTemplateChange: B, onSaveLaunchRecipeChange: V, onSaveAgentDefaultChange: le, onOpenSettings: H, onCancel: ue, onStart: U }) {
	let de = b ?? "{basePrompt}", pe = y.includes("{basePrompt}"), W = p ? {
		agentId: p,
		commandInputTemplate: y,
		agentArgs: _
	} : null, G = sourceControlLaunchSaveTargetFromValue(S, T), K = !!(W && G && sourceControlActionRecipeMatchesTarget({
		actionId: e,
		target: G,
		recipe: W,
		settings: w,
		repo: T
	})), q = !!(E && p), me = C.filter((e) => e.value !== "none"), he = q && x && !K ? translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.5421a96acb", "Save & start agent") : L;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 min-w-0 max-h-[min(60vh,31rem)] space-y-4 overflow-y-auto pr-1 scrollbar-sleek",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs",
							children: translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.15c5d85706", "Agent")
						}),
						m || p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentCombobox, {
							agents: f,
							value: p,
							onValueChange: R,
							allowNarrowTrigger: !0,
							triggerClassName: "w-full"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 rounded-md border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h ? translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.c7ff8cef11", "Detecting agents...") : translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.1d47db9bf0", "No enabled agents") }), H ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "xs",
								onClick: H,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" }), translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.b99c33cec5", "Settings")]
							}) : null]
						}),
						g ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-start gap-1.5 text-[11px] text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-px size-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: g })]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceControlAgentCliArgsField, {
					applies: v,
					value: _,
					onChange: z
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "source-control-agent-command-input",
									className: "text-xs",
									children: translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.f4f3c9ca4a", "Prompt template")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] leading-4 text-muted-foreground",
									children: translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.5c75b24735", "Customize what the agent receives before Orca starts it.")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "xs",
								disabled: y === de,
								onClick: () => B(de),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.7ec6abbf2a", "Reset")]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "source-control-agent-command-input",
							rows: 7,
							value: y,
							onChange: (e) => B(e.target.value),
							className: "box-border min-h-[6.5rem] min-w-0 w-full max-w-full resize-y rounded-md border border-border bg-background px-2.5 py-2 font-mono text-xs text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:ring-1 focus-visible:ring-ring",
							spellCheck: !1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceControlActionVariableChips, {
							actionId: e,
							variablePreviews: { basePrompt: t },
							onInsert: (e) => {
								B(`${y}${y.endsWith("\n") || y.length === 0 ? "" : " "}{${e}}`);
							}
						}),
						pe ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-start gap-1.5 rounded-md border border-destructive/30 bg-destructive/5 px-2.5 py-2 text-[11px] leading-4 text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-px size-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.23280cbab1", "This template does not include {basePrompt}, so the agent will not receive Orca's default prompt.") })]
						})
					]
				}),
				q && d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-1.5 rounded-md border border-border bg-muted/30 px-2.5 py-2 text-[11px] leading-4 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-px size-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.repoAgentOverrideNote", "This repository overrides your global default ({{global}}) and currently runs {{effective}}. Save to this repository to change what runs here.", {
						effective: d.effectiveAgentLabel,
						global: d.globalAgentLabel
					}) })]
				}) : null,
				q ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("space-y-2 rounded-md border border-border bg-background p-3", x && "border-foreground shadow-[inset_0_0_0_1px_var(--foreground)]"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid cursor-pointer grid-cols-[1rem_1fr] items-start gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: x,
							onChange: (e) => V(e.target.checked),
							className: "mt-0.5 size-3.5 accent-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-semibold",
							children: K ? translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.b0da3a4d3e", "Launch recipe already saved") : translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.c29f9cf266", "Save this prompt and don't show this review next time")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-[11px] leading-4 text-muted-foreground",
							children: K ? translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.bff4795a6d", "Change the agent, arguments, or prompt template to update the saved recipe.") : translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.6cefcdfba1", "You can change it later in Source Control AI settings.")
						})] })]
					}), x ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[5.5rem_1fr] items-center gap-2 border-t border-border pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.013c9ac04a", "Save for")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: S,
							onValueChange: le,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								size: "sm",
								className: "h-8 w-full text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: me.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: e.value,
								children: e.label
							}, e.value)) })]
						})]
					}) : null]
				}) : null,
				O.status === "idle" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("rounded-md border px-3 py-2 text-xs", O.status === "error" ? "border-destructive/30 bg-destructive/5 text-destructive" : "border-border bg-muted/30 text-muted-foreground"),
					children: O.status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-px size-3.5 shrink-0" }), O.error]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2 text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-px size-3.5 shrink-0 text-status-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: O.summary })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "truncate font-mono text-[11px]",
								children: [
									translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.1bc0bdbb5e", "Launch:"),
									" ",
									O.commandLabel
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px]",
								children: O.caveat
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
			className: "flex-wrap gap-2 sm:justify-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "secondary",
				size: "sm",
				onClick: ue,
				children: translate("auto.components.right.sidebar.SourceControlAgentActionDialogForm.ea4788705e", "Cancel")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				size: "sm",
				disabled: !F,
				onClick: U,
				children: [I ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), he]
			})]
		})]
	});
}
function prospectiveWorkspace(e) {
	return e.worktreeId ? {
		kind: workspaceKindForWorktreeId(e.worktreeId),
		worktreeId: e.worktreeId
	} : {
		kind: "git-worktree",
		...e.repoId ? { repoId: e.repoId } : {},
		...e.executionHostId ? { executionHostId: e.executionHostId } : {}
	};
}
function sourceControlLaunchAppliesAgentArgs(e) {
	return e.agent ? planAgentSessionLaunch(useAppStore.getState(), {
		agent: e.agent,
		workspace: prospectiveWorkspace(e)
	}).route !== "structured-native-chat" : !0;
}
function isSourceControlAgentDetectedAndEnabled(e, t, n) {
	return !!(e && t.includes(e) && isTuiAgentEnabled(e, n));
}
function buildSourceControlAgentSaveTargets(e) {
	let t = [{
		value: "none",
		label: translate("auto.components.right.sidebar.SourceControlAgentActionDialog.994cddd1f7", "Don't save")
	}];
	return e && t.push({
		value: "repo",
		label: translate("auto.components.right.sidebar.SourceControlAgentActionDialog.808cfe0a3b", "This repository")
	}), t.push({
		value: "global",
		label: translate("auto.components.right.sidebar.SourceControlAgentActionDialog.38b899cc02", "All repositories")
	}), t;
}
function buildSourceControlAgentConnectionErrorPlan() {
	return {
		status: "error",
		error: translate("auto.components.right.sidebar.SourceControlAgentActionDialog.c075d00de1", "Unable to resolve the workspace connection.")
	};
}
function resolveSourceControlAgentSaveTarget(e, t) {
	return e === "repo" && t ? {
		type: "repo",
		repoId: t
	} : e === "global" ? { type: "global" } : null;
}
function buildSourceControlAgentStatusCopy(e) {
	let { selectedAgent: t, selectedAgentUnavailable: n, connectionUnavailable: r, hasEnabledAgents: i, detecting: a } = e;
	return n ? `${getAgentCatalog().find((e) => e.id === t)?.label ?? t} is not enabled or was not detected on this workspace host.` : r ? "Unable to resolve the workspace connection." : !i && !a ? "No enabled agents were detected on this workspace host." : null;
}
function buildSourceControlAgentScopeNote(e) {
	if (!e.overridesGlobalAgent) return null;
	let t = getAgentCatalog(), n = (e) => t.find((t) => t.id === e)?.label ?? e ?? "";
	return {
		effectiveAgentLabel: n(e.effectiveAgentId),
		globalAgentLabel: n(e.globalAgentId)
	};
}
var NO_SAVED_RECEIPT_KEY = "__no_saved_receipt__";
function buildSavedLaunchRecipe(e) {
	return e.savedAgentId ? {
		agentId: e.savedAgentId,
		commandInputTemplate: e.savedCommandInputTemplate ?? "{basePrompt}",
		agentArgs: e.savedAgentArgs ?? ""
	} : null;
}
function getMatchedSavedReceiptTargetValue(e) {
	return e.recipe ? e.repoId && e.repo && sourceControlActionRecipeMatchesTarget({
		actionId: e.actionId,
		target: {
			type: "repo",
			repoId: e.repoId
		},
		recipe: e.recipe,
		settings: e.settings,
		repo: e.repo
	}) ? "repo" : sourceControlActionRecipeMatchesTarget({
		actionId: e.actionId,
		target: { type: "global" },
		recipe: e.recipe,
		settings: e.settings,
		repo: e.repo
	}) ? "global" : null : null;
}
function buildReceiptKey(e) {
	return JSON.stringify([
		e.actionId,
		e.targetValue,
		e.savedAgentId,
		e.savedCommandInputTemplate ?? "{basePrompt}",
		e.savedAgentArgs ?? "",
		e.repoId ?? null,
		e.connectionId ?? null,
		e.worktreeId ?? null,
		e.baseCommandInput
	]);
}
function useSavedSourceControlAgentActionAutoStart({ open: e, openCycle: t, detectionReady: n, actionId: r, baseCommandInput: i, savedAgentId: a, savedCommandInputTemplate: o, savedAgentArgs: s, settings: c, repo: l, repoId: u, worktreeId: d, connectionId: f, selectedAgent: p, trimmedCommandInput: m, connectionUnavailable: h, detecting: g, isStarting: _, detectedAgents: v, disabledAgents: y, onAutoStart: b }) {
	let x = (0, import_react.useRef)(0), [S, C] = (0, import_react.useState)(null), w = (0, import_react.useMemo)(() => buildSavedLaunchRecipe({
		savedAgentId: a,
		savedCommandInputTemplate: o,
		savedAgentArgs: s
	}), [
		s,
		a,
		o
	]), T = (0, import_react.useMemo)(() => getMatchedSavedReceiptTargetValue({
		actionId: r,
		recipe: w,
		settings: c,
		repo: l,
		repoId: u
	}), [
		r,
		l,
		u,
		w,
		c
	]), E = (0, import_react.useMemo)(() => !a || !T ? null : buildReceiptKey({
		actionId: r,
		targetValue: T,
		savedAgentId: a,
		savedCommandInputTemplate: o,
		savedAgentArgs: s,
		repoId: u,
		connectionId: f,
		worktreeId: d,
		baseCommandInput: i
	}), [
		r,
		i,
		f,
		T,
		u,
		s,
		a,
		o,
		d
	]), D = S?.openCycle === t ? S : null, O = !!(D && E && D.receiptKey !== E), k = !!(e && T && E && !O && !D?.revealed);
	return (0, import_react.useEffect)(() => {
		if (!e) {
			x.current = 0, C(null);
			return;
		}
		if (S?.openCycle !== t && C({
			openCycle: t,
			receiptKey: E ?? NO_SAVED_RECEIPT_KEY,
			revealed: !E
		}), !T || !E || !a || S?.openCycle === t && S.receiptKey !== E || S?.openCycle === t && S.revealed) return;
		let r = () => {
			C({
				openCycle: t,
				receiptKey: E,
				revealed: !0
			});
		};
		if (!(!n || g || _)) {
			if (p !== a || !m || h || !isSourceControlAgentDetectedAndEnabled(a, v, y)) {
				r();
				return;
			}
			x.current !== t && (x.current = t, b({
				detectedAgents: v,
				saveTargetValue: T
			}).then((e) => {
				e || r();
			}).catch(() => {
				r();
			}));
		}
	}, [
		h,
		v,
		n,
		g,
		y,
		_,
		T,
		b,
		e,
		t,
		E,
		S,
		a,
		p,
		m
	]), {
		autoLaunchPending: k,
		matchedSavedReceiptTargetValue: T
	};
}
function planSourceControlAgentActionLaunch(e) {
	let t = e.agent;
	if (!t) return {
		ok: !1,
		error: translate("auto.lib.source.control.agent.action.plan.a7ac8717c7", "Choose an agent before starting.")
	};
	if (!isTuiAgentEnabled(t, e.disabledAgents)) return {
		ok: !1,
		error: translate("auto.lib.source.control.agent.action.plan.b96e091fc9", "The selected agent is disabled in Settings.")
	};
	if (!e.detectedAgents.includes(t)) return {
		ok: !1,
		error: translate("auto.lib.source.control.agent.action.plan.8eb541cc83", "The selected agent was not detected on this workspace host.")
	};
	let r = e.commandInput.trim();
	if (!r) return {
		ok: !1,
		error: translate("auto.lib.source.control.agent.action.plan.46f1a2c9bd", "Command input is empty.")
	};
	let i = e.cmdOverrides ?? {}, a = e.platform ?? CLIENT_PLATFORM, o = e.isRemote ?? !1, s = resolveLocalWindowsAgentStartupShell({
		platform: a,
		isRemote: o,
		terminalWindowsShell: e.terminalWindowsShell
	}) ?? (a === "win32" ? "powershell" : "posix"), c = planAgentCliArgsSuffix(e.agentArgs, s);
	if (!c.ok) return {
		ok: !1,
		error: c.error
	};
	let l = null, u;
	if (e.promptDelivery === "submit-after-ready") l = buildAgentStartupPlan({
		agent: t,
		prompt: "",
		cmdOverrides: i,
		platform: a,
		shell: s,
		isRemote: o,
		agentArgs: e.agentArgs,
		sessionOptions: e.sessionOptions,
		allowEmptyPromptLaunch: !0
	}), u = "paste-submit";
	else if (e.promptDelivery === "draft") {
		let n = buildAgentDraftLaunchPlan({
			agent: t,
			draft: r,
			cmdOverrides: i,
			platform: a,
			shell: s,
			isRemote: o,
			agentArgs: e.agentArgs,
			sessionOptions: e.sessionOptions
		});
		n ? (l = {
			agent: n.agent,
			launchCommand: n.launchCommand,
			expectedProcess: n.expectedProcess,
			followupPrompt: null,
			launchConfig: n.launchConfig,
			...n.sessionOptions ? { sessionOptions: n.sessionOptions } : {},
			...n.startupCommandDelivery ? { startupCommandDelivery: n.startupCommandDelivery } : {},
			...n.env ? { env: n.env } : {}
		}, u = "draft-native") : (l = buildAgentStartupPlan({
			agent: t,
			prompt: "",
			cmdOverrides: i,
			platform: a,
			shell: s,
			isRemote: o,
			agentArgs: e.agentArgs,
			sessionOptions: e.sessionOptions,
			allowEmptyPromptLaunch: !0
		}), u = "draft-paste");
	} else TUI_AGENT_CONFIG[t].promptInjectionMode === "stdin-after-start" ? (l = buildAgentStartupPlan({
		agent: t,
		prompt: "",
		cmdOverrides: i,
		platform: a,
		shell: s,
		isRemote: o,
		agentArgs: e.agentArgs,
		sessionOptions: e.sessionOptions,
		allowEmptyPromptLaunch: !0
	}), u = "draft-paste") : (l = buildAgentStartupPlan({
		agent: t,
		prompt: r,
		cmdOverrides: i,
		platform: a,
		shell: s,
		isRemote: o,
		agentArgs: e.agentArgs,
		sessionOptions: e.sessionOptions,
		allowEmptyPromptLaunch: !1
	}), u = "argv");
	if (!l) return {
		ok: !1,
		error: translate("auto.lib.source.control.agent.action.plan.3f0ea9aa0d", "Could not build the agent launch command.")
	};
	let d = u === "paste-submit" ? "The agent starts with no prompt, then Orca pastes and submits the command input after the TUI is ready." : u === "draft-native" ? "The command input is prefilled as an editable draft by the agent launch command." : u === "draft-paste" ? "The agent starts with no prompt, then Orca pastes the command input as an editable draft after the TUI is ready." : "The command input is included in the launch command and submitted as the first turn.";
	return {
		ok: !0,
		plan: l,
		delivery: u,
		commandLabel: l.launchCommand,
		summary: d,
		caveat: "This check builds Orca’s launch plan only. PATH, binary availability, account setup, and terminal startup failures are still caught by the real launch watchdog."
	};
}
function buildSourceControlAgentDeliveryPlan({ selectedAgent: e, commandInput: t, agentArgs: n, promptDelivery: r, detectedAgents: i, connectionUnavailable: a, launchPlatform: o, isRemote: s }) {
	if (a) return buildSourceControlAgentConnectionErrorPlan();
	let c = useAppStore.getState().settings, l = planSourceControlAgentActionLaunch({
		agent: e,
		commandInput: t,
		agentArgs: n,
		sessionOptions: e ? resolveInitialNativeChatSessionOptions(c, {
			agent: e,
			promptDelivery: r,
			launchDraftText: t.trim(),
			nativeChatTranscriptIsLocalReadable: !s
		}) : void 0,
		promptDelivery: r,
		detectedAgents: i,
		disabledAgents: c?.disabledTuiAgents,
		cmdOverrides: c?.agentCmdOverrides,
		terminalWindowsShell: c?.terminalWindowsShell,
		platform: o,
		isRemote: s
	});
	return l.ok ? {
		status: "success",
		summary: l.summary,
		commandLabel: l.commandLabel,
		caveat: l.caveat
	} : {
		status: "error",
		error: l.error
	};
}
async function runSourceControlAgentActionStart({ selectedAgent: e, trimmedCommandInput: t, agentArgs: r, agentArgsApply: i, commandTemplate: a, saveTargetValue: o, actionId: s, repoId: c, settings: l, repo: u, worktreeId: d, groupId: f, promptDelivery: p, launchPlatform: m, launchSource: h, onStart: _, onSaveAgentDefault: v, onLaunchAccepted: y, onLaunchAborted: b, onLaunched: x, onClose: S }) {
	let C = !1, w = !1, T = !1, E = i ? r : void 0, D = () => {
		T || (T = !0, y?.());
	};
	if (_) C = await _({
		agent: e,
		commandInput: t,
		agentArgs: E
	}), C && D();
	else if (d) {
		let n = launchAgentInNewTab({
			agent: e,
			worktreeId: d,
			groupId: f ?? d,
			prompt: t,
			agentArgs: E,
			promptDelivery: p,
			launchPlatform: m,
			launchSource: h
		});
		if (C = !!n, n?.surface.kind === "local-terminal" && focusTerminalTabSurface(n.surface.tabId), C && D(), n?.promptDeliveryResult) try {
			let e = await n.promptDeliveryResult;
			C = e.delivered, w = e.failureNotified;
		} catch (e) {
			console.error("promptDeliveryResult rejected", e), C = !1;
		}
	}
	if (!C) return T && b?.(), w || toast.error(translate("auto.components.right.sidebar.SourceControlAgentActionDialog.8e856842d1", "Could not start the selected agent.")), !1;
	let O = resolveSourceControlAgentSaveTarget(o, c), k = {
		agentId: e,
		commandInputTemplate: a,
		agentArgs: r
	}, A = !!(O && sourceControlActionRecipeMatchesTarget({
		actionId: s,
		target: O,
		recipe: k,
		settings: l,
		repo: u
	}));
	if (O && v && !A) try {
		await v(O, s, k);
	} catch (e) {
		console.error("onSaveAgentDefault failed", e);
	}
	return x?.(), S(), !0;
}
function useSourceControlAgentActionStart({ selectedAgent: e, commandInput: t, trimmedCommandInput: n, agentArgs: r, agentArgsApply: i, commandTemplate: a, saveLaunchRecipe: o, saveTargetValue: s, actionId: c, repoId: l, settings: u, repo: d, worktreeId: f, groupId: p, promptDelivery: m, launchPlatform: h, isRemote: g, launchSource: _, connectionUnavailable: v, refreshDetectedAgents: y, onStart: b, onSaveAgentDefault: x, onLaunchAccepted: S, onLaunchAborted: C, onLaunched: w, onClose: T }) {
	let [E, D] = (0, import_react.useState)({ status: "idle" }), [O, k] = (0, import_react.useState)(!1), A = (0, import_react.useRef)(!1), j = (0, import_react.useCallback)(() => D({ status: "idle" }), []), M = (0, import_react.useCallback)(async (n) => {
		let a = n ?? await y();
		return buildSourceControlAgentDeliveryPlan({
			selectedAgent: e,
			commandInput: t,
			agentArgs: i ? r : void 0,
			promptDelivery: m,
			detectedAgents: a,
			connectionUnavailable: v,
			launchPlatform: h,
			isRemote: g
		});
	}, [
		r,
		i,
		t,
		v,
		m,
		y,
		e,
		h,
		g
	]), N = (0, import_react.useCallback)(async ({ detectedAgents: t, saveTargetValueOverride: g }) => {
		if (!e || A.current) return !1;
		if (v) return D(buildSourceControlAgentConnectionErrorPlan()), !1;
		A.current = !0, k(!0);
		try {
			let v = await M(t);
			return v.status === "error" ? (D(v), !1) : (D(v), await runSourceControlAgentActionStart({
				selectedAgent: e,
				trimmedCommandInput: n,
				agentArgs: r,
				agentArgsApply: i,
				commandTemplate: a,
				saveTargetValue: o ? g ?? s : "none",
				actionId: c,
				repoId: l,
				settings: u,
				repo: d,
				worktreeId: f,
				groupId: p,
				promptDelivery: m,
				launchPlatform: h,
				launchSource: _,
				onStart: b,
				onSaveAgentDefault: x,
				onLaunchAccepted: S,
				onLaunchAborted: C,
				onLaunched: w,
				onClose: () => {
					j(), T();
				}
			}));
		} finally {
			A.current = !1, k(!1);
		}
	}, [
		c,
		r,
		i,
		M,
		a,
		v,
		p,
		_,
		h,
		T,
		C,
		S,
		w,
		x,
		b,
		m,
		j,
		d,
		l,
		o,
		s,
		u,
		e,
		n,
		f
	]);
	return {
		deliveryPlan: E,
		resetDeliveryPlan: j,
		isStarting: O,
		handleStart: (0, import_react.useCallback)(async () => {
			!e || A.current || await N({ detectedAgents: await y() });
		}, [
			y,
			e,
			N
		]),
		startWithDetectedAgents: N
	};
}
var DEFAULT_SAVE_TARGET_VALUE = "global";
function useSourceControlAgentActionDialog({ open: e, onOpenChange: t, actionId: n, baseCommandInput: r, savedCommandInputTemplate: i, savedAgentArgs: a, worktreeId: o, groupId: s, connectionId: c, repoId: l, promptDelivery: u = "submit-after-ready", launchPlatform: d, launchSource: f, savedAgentId: p, onSaveAgentDefault: m, onLaunchAccepted: g, onLaunchAborted: v, onLaunched: b, onStart: x }) {
	let S = useAppStore((e) => e.settings), w = useRepoById(l ?? null), E = (0, import_react.useMemo)(() => resolveSourceControlLaunchAgentScope({
		settings: S,
		repo: w,
		actionId: n
	}), [
		n,
		w,
		S
	]), D = E.overridesGlobalAgent && l ? "repo" : DEFAULT_SAVE_TARGET_VALUE, O = useAppStore((e) => e.ensureDetectedAgents), k = useAppStore((e) => e.ensureRemoteDetectedAgents), [A, j] = (0, import_react.useState)(i ?? "{basePrompt}"), [M, N] = (0, import_react.useState)(a ?? ""), [P, F] = (0, import_react.useState)(p ?? null), [I, ce] = (0, import_react.useState)([]), [L, R] = (0, import_react.useState)(!1), z = (0, import_react.useRef)(0), B = (0, import_react.useRef)(!1), [V, H] = (0, import_react.useState)(0), [ue, U] = (0, import_react.useState)(null), fe = (0, import_react.useMemo)(() => buildSourceControlAgentSaveTargets(l), [l]), [pe, W] = (0, import_react.useState)(!0), [G, K] = (0, import_react.useState)(D), J = S?.disabledTuiAgents, Y = !!(o && c === void 0), X = (0, import_react.useCallback)(async () => {
		if (Y) return ce([]), R(!1), [];
		R(!0);
		try {
			let e = typeof c == "string" ? await k(c) : await O();
			return ce(e), e;
		} finally {
			R(!1);
		}
	}, [
		c,
		Y,
		O,
		k
	]);
	(0, import_react.useEffect)(() => {
		if (!e) {
			B.current = !1;
			return;
		}
		let t = B.current ? z.current : z.current + 1;
		B.current || (z.current = t, H(t)), B.current = !0, U(null), j(i ?? "{basePrompt}"), N(a ?? ""), F(p ?? null), W(!0), K(D);
		let n = !1;
		return Promise.all([X(), ensureLocalRuntimeCapabilities()]).then(([e]) => {
			n || z.current !== t || (F((t) => t ?? pickSourceControlLaunchAgent({
				savedAgent: p,
				defaultAgent: S?.defaultTuiAgent,
				detectedAgents: e,
				disabledAgents: J
			})), U(t));
		}), () => {
			n = !0;
		};
	}, [
		D,
		J,
		e,
		X,
		p,
		a,
		i,
		l,
		S?.defaultTuiAgent
	]);
	let ge = (0, import_react.useCallback)(() => t(!1), [t]), Z = (0, import_react.useMemo)(() => I.filter((e) => isTuiAgentEnabled(e, J)), [I, J]), _e = (0, import_react.useMemo)(() => getAgentCatalog().filter((e) => Z.includes(e.id) || e.id === P), [Z, P]), ve = !!(P && !isSourceControlAgentDetectedAndEnabled(P, I, J)), ye = Z.length > 0, be = renderSourceControlActionCommandTemplate(A, { basePrompt: r }), xe = be.trim(), Se = sourceControlLaunchAppliesAgentArgs({
		agent: P,
		worktreeId: o,
		repoId: l,
		...w ? { executionHostId: getRepoExecutionHostId(w) } : {}
	}), { deliveryPlan: Ce, resetDeliveryPlan: Q, isStarting: we, handleStart: Te, startWithDetectedAgents: Ee } = useSourceControlAgentActionStart({
		selectedAgent: P,
		commandInput: be,
		trimmedCommandInput: xe,
		agentArgs: M,
		agentArgsApply: Se,
		commandTemplate: A,
		saveLaunchRecipe: pe,
		saveTargetValue: G,
		actionId: n,
		repoId: l,
		settings: S,
		repo: w,
		worktreeId: o,
		groupId: s,
		promptDelivery: u,
		launchPlatform: d,
		isRemote: typeof c == "string",
		launchSource: f,
		connectionUnavailable: Y,
		refreshDetectedAgents: X,
		onStart: x,
		onSaveAgentDefault: m,
		onLaunchAccepted: g,
		onLaunchAborted: v,
		onLaunched: b,
		onClose: ge
	}), De = !!xe && !!P && !ve && !Y && !L && !we, Oe = (0, import_react.useCallback)((e) => {
		e || (Q(), W(!0), K(D)), t(e);
	}, [
		D,
		t,
		Q
	]), { autoLaunchPending: ke } = useSavedSourceControlAgentActionAutoStart({
		open: e,
		openCycle: V,
		detectionReady: ue === V,
		actionId: n,
		baseCommandInput: r,
		savedAgentId: p,
		savedCommandInputTemplate: i,
		savedAgentArgs: a,
		settings: S,
		repo: w,
		repoId: l,
		worktreeId: o,
		connectionId: c,
		selectedAgent: P,
		trimmedCommandInput: xe,
		connectionUnavailable: Y,
		detecting: L,
		isStarting: we,
		detectedAgents: I,
		disabledAgents: J,
		onAutoStart: ({ detectedAgents: e, saveTargetValue: t }) => Ee({
			detectedAgents: e,
			saveTargetValueOverride: t
		})
	}), Ae = buildSourceControlAgentStatusCopy({
		selectedAgent: P,
		selectedAgentUnavailable: ve,
		connectionUnavailable: Y,
		hasEnabledAgents: ye,
		detecting: L
	}), $ = (0, import_react.useCallback)((e) => (t) => {
		e(t), Q();
	}, [Q]), je = (0, import_react.useMemo)(() => $(F), [$]), Me = (0, import_react.useMemo)(() => $(N), [$]), Ne = (0, import_react.useMemo)(() => $(j), [$]), Pe = (0, import_react.useMemo)(() => $(W), [$]), Fe = (0, import_react.useMemo)(() => buildSourceControlAgentScopeNote(E), [E]);
	return {
		handleOpenChange: Oe,
		shouldRenderDialog: !ke,
		agentScopeNote: Fe,
		agentOptions: _e,
		selectedAgent: P,
		hasEnabledAgents: ye,
		detecting: L,
		statusCopy: Ae,
		agentArgs: M,
		agentArgsApply: Se,
		commandTemplate: A,
		saveLaunchRecipe: pe,
		saveTargetValue: G,
		saveTargets: fe,
		settings: S,
		repo: w,
		deliveryPlan: Ce,
		canStart: De,
		isStarting: we,
		onSelectedAgentChange: je,
		onAgentArgsChange: Me,
		onCommandTemplateChange: Ne,
		onSaveLaunchRecipeChange: Pe,
		onSaveAgentDefaultChange: K,
		handleStart: Te
	};
}
function SourceControlAgentActionDialog(e) {
	let { open: t, actionId: n, title: r, description: i, baseCommandInput: a, savedCommandInputTemplate: o, onOpenSettings: s, startLabel: c = "Start agent", onSaveAgentDefault: l } = e, { handleOpenChange: u, shouldRenderDialog: d, agentScopeNote: f, agentOptions: p, selectedAgent: m, hasEnabledAgents: h, detecting: g, statusCopy: _, agentArgs: v, agentArgsApply: y, commandTemplate: b, saveLaunchRecipe: x, saveTargetValue: S, saveTargets: C, settings: w, repo: T, deliveryPlan: E, canStart: D, isStarting: O, onSelectedAgentChange: k, onAgentArgsChange: A, onCommandTemplateChange: j, onSaveLaunchRecipeChange: M, onSaveAgentDefaultChange: N, handleStart: P } = useSourceControlAgentActionDialog(e);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: t,
		onOpenChange: u,
		children: d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[min(82vh,42rem)] min-w-0 flex-col overflow-hidden sm:max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm",
					children: r
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-xs",
					children: i
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceControlAgentActionDialogForm, {
				actionId: n,
				baseCommandInput: a,
				agentScopeNote: f,
				agentOptions: p,
				selectedAgent: m,
				hasEnabledAgents: h,
				detecting: g,
				statusCopy: _,
				agentArgs: v,
				agentArgsApply: y,
				commandTemplate: b,
				savedCommandInputTemplate: o,
				saveLaunchRecipe: x,
				saveTargetValue: S,
				saveTargets: C,
				settings: w,
				repo: T,
				canSaveAgentDefault: !!l,
				deliveryPlan: E,
				canStart: D,
				isStarting: O,
				startLabel: c,
				onSelectedAgentChange: k,
				onAgentArgsChange: A,
				onCommandTemplateChange: j,
				onSaveLaunchRecipeChange: M,
				onSaveAgentDefaultChange: N,
				onOpenSettings: s,
				onCancel: () => u(!1),
				onStart: () => void P()
			})]
		}) : null
	});
}
function resolveSourceControlLaunchPlatform(e) {
	let t = e.worktreePath?.trim() ?? "";
	return typeof e.connectionId == "string" ? t && isWindowsAbsolutePathLike(t) && !isWslUncPath(t) ? "win32" : "linux" : e.projectRuntime?.status === "repair-required" ? e.projectRuntime.repair.preferredRuntime.kind === "wsl" ? "linux" : CLIENT_PLATFORM : e.projectRuntime?.status === "resolved" && e.projectRuntime.runtime.kind === "wsl" || t && isWslUncPath(t) ? "linux" : CLIENT_PLATFORM;
}
export { SourceControlAgentActionDialog as n, sourceControlActionRecipeMatchesTarget as r, resolveSourceControlLaunchPlatform as t };
