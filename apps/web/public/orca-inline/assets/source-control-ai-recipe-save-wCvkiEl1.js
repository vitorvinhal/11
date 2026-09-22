import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { t as Braces } from "./braces-B7sCb6N8.js";
import { Ax as resolveSourceControlActionRecipe, Fx as SOURCE_CONTROL_ACTION_IDS, Lx as SOURCE_CONTROL_TEXT_ACTION_IDS, Ox as normalizeRepoSourceControlAiOverrides, Px as DEFAULT_SOURCE_CONTROL_ACTION_COMMAND_TEMPLATES, kx as normalizeSourceControlAiSettings, nS as filterEnabledTuiAgents, qx as isCustomAgentId } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as HoverCardContent, r as HoverCardTrigger, t as HoverCard } from "./hover-card-YPvTyc89.js";
import { n as getAgentCatalog } from "./agent-catalog-Cgr0_vcs.js";
const SOURCE_CONTROL_ACTION_VARIABLES = {
	commitMessage: [
		"basePrompt",
		"branch",
		"stagedFiles",
		"stagedPatch",
		"linkedIssue"
	],
	pullRequest: [
		"basePrompt",
		"branch",
		"baseBranch",
		"currentTitle",
		"currentBody",
		"commitSummary",
		"changedFiles",
		"patch",
		"linkedIssue"
	],
	branchName: [
		"basePrompt",
		"firstPrompt",
		"assistantMessage"
	],
	fixCommitFailure: ["basePrompt"],
	fixPushFailure: ["basePrompt"],
	fixChecks: ["basePrompt"],
	resolveConflicts: ["basePrompt"],
	resolveComments: ["basePrompt"]
}, SOURCE_CONTROL_ACTION_VARIABLE_INFO = {
	basePrompt: {
		description: "Orca’s built-in prompt for this action, including the context Orca knows how to gather safely.",
		example: "Commit messages include staged diff guidance; PR details include branch comparison guidance; fix actions include the failure summary."
	},
	branch: {
		description: "The current source-control branch name.",
		example: "feature/source-control-ai-recipes"
	},
	stagedFiles: {
		description: "A newline-separated list of staged files for commit-message generation.",
		example: "M src/shared/source-control-ai.ts\nA src/shared/source-control-ai-actions.ts"
	},
	stagedPatch: {
		description: "The staged git patch used for commit-message generation.",
		example: "diff --git a/src/app.ts b/src/app.ts\n+addActionRecipeDefaults()"
	},
	baseBranch: {
		description: "The target branch selected in the Create PR composer.",
		example: "main"
	},
	currentTitle: {
		description: "The PR title currently typed in the composer before generation starts.",
		example: "Improve Source Control AI customization"
	},
	currentBody: {
		description: "The PR description currently typed in the composer before generation starts.",
		example: "Adds configurable agents and command templates for Source Control actions."
	},
	commitSummary: {
		description: "A newline-separated list of commits on the branch compared to the base.",
		example: "a1b2c3d Add action recipe defaults\nd4e5f6a Render command templates"
	},
	changedFiles: {
		description: "A summary of files changed between the branch and the base branch.",
		example: "src/shared/source-control-ai-actions.ts | 24 +++++\nsrc/main/text-generation.ts | 8 +-"
	},
	patch: {
		description: "The branch diff against the base branch used for PR-details generation.",
		example: "diff --git a/src/app.ts b/src/app.ts\n+renderSourceControlActionCommandTemplate()"
	},
	firstPrompt: {
		description: "The first user request that created the Orca workspace.",
		example: "Fix CI and commit the result"
	},
	assistantMessage: {
		description: "The initial agent response, when Orca has one available.",
		example: "I will inspect the failing check, patch the issue, and run tests."
	},
	linkedIssue: {
		description: "The GitHub issue number linked to this workspace. Empty when no GitHub issue is linked (including GitLab-linked workspaces). Prefer instructional templates: a bare \"Fixes #{linkedIssue}\" becomes \"Fixes #\" when unlinked.",
		example: "123"
	}
};
function isLinkedIssueNumber(h) {
	return typeof h == "number" && Number.isSafeInteger(h) && h > 0;
}
function formatLinkedIssueTemplateValue(h) {
	return isLinkedIssueNumber(h) ? String(h) : "";
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function hasVariablePreview(h, L) {
	return !!(h && Object.hasOwn(h, L) && h[L] !== void 0 && h[L] !== null);
}
function SourceControlVariableSample({ label: h, value: R }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",
			children: h
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "rounded-sm bg-background/60 p-2 whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed",
			children: R || translate("auto.components.source.control.SourceControlActionVariableChips.4bf6d88039", "(empty)")
		})]
	});
}
function SourceControlVariableDetails({ variable: h, preview: R }) {
	if (R !== void 0 && h === "basePrompt") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed",
		children: R || translate("auto.components.source.control.SourceControlActionVariableChips.4bf6d88039", "(empty)")
	});
	let z = SOURCE_CONTROL_ACTION_VARIABLE_INFO[h];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-80 space-y-2 text-left leading-relaxed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[11px]",
					children: `{${h}}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground",
					children: z.description
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceControlVariableSample, {
				label: translate("auto.components.source.control.SourceControlActionVariableChips.6b921a0ac2", "Example"),
				value: z.example
			}),
			R === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceControlVariableSample, {
				label: translate("auto.components.source.control.SourceControlActionVariableChips.7377483644", "This workspace"),
				value: R
			})
		]
	});
}
function SourceControlActionVariableChips({ actionId: h, disabled: B = !1, variablePreviews: V, onInsert: H }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Braces, { className: "size-3" }), translate("auto.components.source.control.SourceControlActionVariableChips.1b77798d5f", "Variables")]
		}), SOURCE_CONTROL_ACTION_VARIABLES[h].map((h) => {
			let L = hasVariablePreview(V, h) ? V?.[h] : void 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HoverCard, {
				openDelay: 150,
				closeDelay: 120,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "xs",
							disabled: B,
							className: "h-5 rounded px-1.5 font-mono text-[10px]",
							onClick: () => H(h),
							children: `{${h}}`
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardContent, {
					side: "top",
					sideOffset: 6,
					collisionPadding: 12,
					className: "scrollbar-sleek max-h-[min(18rem,calc(100vh-2rem))] w-[min(32rem,calc(100vw-2rem))] overflow-y-auto p-2 text-left text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceControlVariableDetails, {
						variable: h,
						preview: L
					})
				})]
			}, h);
		})]
	});
}
function readSourceControlLaunchRecipeAgentId(h) {
	let L = h?.agentId;
	return L && !isCustomAgentId(L) ? L : null;
}
function pickSourceControlLaunchAgent(h) {
	let L = filterEnabledTuiAgents(h.detectedAgents, h.disabledAgents);
	return h.savedAgent && L.includes(h.savedAgent) ? h.savedAgent : h.defaultAgent && h.defaultAgent !== "blank" && L.includes(h.defaultAgent) ? h.defaultAgent : getAgentCatalog().find((h) => L.includes(h.id))?.id ?? null;
}
function resolveSourceControlLaunchAgentScope(h) {
	let L = readSourceControlLaunchRecipeAgentId(resolveSourceControlActionRecipe({
		settings: h.settings,
		repo: h.repo,
		actionId: h.actionId
	})), R = readSourceControlLaunchRecipeAgentId(resolveSourceControlActionRecipe({
		settings: h.settings,
		repo: null,
		actionId: h.actionId
	})), z = h.settings?.defaultTuiAgent, V = R ?? (z && z !== "blank" ? z : null);
	return {
		effectiveAgentId: L,
		globalAgentId: V,
		overridesGlobalAgent: normalizeRepoSourceControlAiOverrides(h.repo?.sourceControlAi)?.actionOverrides?.[h.actionId]?.agentId !== void 0 && L !== null && L !== V
	};
}
function hasActionOverride(h, L) {
	return Object.hasOwn(h ?? {}, L);
}
function readRecipeOverrideFields(h) {
	let L = [];
	return Object.hasOwn(h ?? {}, "agentId") && L.push("agent"), Object.hasOwn(h ?? {}, "commandInputTemplate") && L.push("commandTemplate"), Object.hasOwn(h ?? {}, "agentArgs") && L.push("agentArgs"), L;
}
function summarizeReposOverridingActionRecipe(h) {
	let L = [];
	for (let R of h.repos) {
		let z = normalizeRepoSourceControlAiOverrides(R.sourceControlAi)?.actionOverrides;
		hasActionOverride(z, h.actionId) && L.push({
			repoId: R.id,
			repoName: R.displayName,
			fields: readRecipeOverrideFields(z?.[h.actionId])
		});
	}
	return {
		count: L.length,
		overrides: L
	};
}
var TEXT_ACTION_ID_SET = new Set(SOURCE_CONTROL_TEXT_ACTION_IDS);
function hasEntries(h) {
	return Object.keys(h ?? {}).length > 0;
}
function normalizeStringRecord(h) {
	let L = {};
	for (let [R, z] of Object.entries(h ?? {})) typeof z == "string" && (L[R] = z);
	return hasEntries(L) ? L : void 0;
}
function normalizeBooleanRecord(h) {
	let L = {};
	for (let [R, z] of Object.entries(h ?? {})) typeof z == "boolean" && (L[R] = z);
	return hasEntries(L) ? L : void 0;
}
function normalizeCompleteRecipe(h, L) {
	if (!L) return;
	let R = typeof L.commandInputTemplate == "string" ? L.commandInputTemplate : DEFAULT_SOURCE_CONTROL_ACTION_COMMAND_TEMPLATES[h], z = L.agentArgs, B = typeof z == "string" ? z.trim() : void 0;
	return {
		agentId: L.agentId ?? null,
		commandInputTemplate: R,
		...B === void 0 ? {} : { agentArgs: B }
	};
}
function normalizeActionOverrides(h) {
	let L = {};
	for (let R of SOURCE_CONTROL_ACTION_IDS) {
		let z = normalizeCompleteRecipe(R, h?.[R]);
		z && (L[R] = z);
	}
	return hasEntries(L) ? L : void 0;
}
function normalizeWritableRepoSourceControlAiOverrides(h) {
	let L = normalizeRepoSourceControlAiOverrides(h);
	if (!L) return;
	let R = {};
	if (typeof L.enabled == "boolean" && (R.enabled = L.enabled), typeof L.customAgentCommand == "string") {
		let h = L.customAgentCommand.trim();
		h && (R.customAgentCommand = h);
	}
	L.modelOverridesByOperation && (R.modelOverridesByOperation = L.modelOverridesByOperation);
	let z = normalizeStringRecord(L.instructionsByOperation);
	z && (R.instructionsByOperation = z);
	let B = normalizeActionOverrides(L.actionOverrides);
	B && (R.actionOverrides = B);
	let V = normalizeBooleanRecord(L.prCreationDefaults);
	return V && (R.prCreationDefaults = V), Object.keys(R).length > 0 ? R : void 0;
}
function toSourceControlAiRepoUpdate(h) {
	let L = normalizeWritableRepoSourceControlAiOverrides(h);
	return L ? { sourceControlAi: L } : { sourceControlAi: null };
}
function dropLegacyInstructionForAction(h, L) {
	if (!TEXT_ACTION_ID_SET.has(L) || !h.instructionsByOperation) return h;
	let R = { ...h.instructionsByOperation };
	return delete R[L], {
		...h,
		instructionsByOperation: hasEntries(R) ? R : void 0
	};
}
function normalizeRecipeForSave(h, L) {
	return normalizeCompleteRecipe(h, L) ?? {
		agentId: null,
		commandInputTemplate: DEFAULT_SOURCE_CONTROL_ACTION_COMMAND_TEMPLATES[h]
	};
}
function saveSourceControlActionRecipe(h) {
	let L = normalizeRecipeForSave(h.actionId, h.recipe);
	if (h.target.type === "global") {
		let R = normalizeSourceControlAiSettings(h.settings.sourceControlAi, h.settings.commitMessageAi);
		return {
			target: { type: "global" },
			sourceControlAi: {
				...R,
				...typeof h.customAgentCommand == "string" ? { customAgentCommand: h.customAgentCommand } : {},
				actions: {
					...R.actions,
					[h.actionId]: L
				}
			}
		};
	}
	let R = normalizeWritableRepoSourceControlAiOverrides(h.repo?.sourceControlAi), z = dropLegacyInstructionForAction({
		...R,
		...typeof h.customAgentCommand == "string" ? { customAgentCommand: h.customAgentCommand } : {},
		actionOverrides: {
			...R?.actionOverrides,
			[h.actionId]: L
		}
	}, h.actionId);
	return {
		target: h.target,
		update: toSourceControlAiRepoUpdate(z)
	};
}
export { resolveSourceControlLaunchAgentScope as a, formatLinkedIssueTemplateValue as c, readSourceControlLaunchRecipeAgentId as i, toSourceControlAiRepoUpdate as n, summarizeReposOverridingActionRecipe as o, pickSourceControlLaunchAgent as r, SourceControlActionVariableChips as s, saveSourceControlActionRecipe as t };
