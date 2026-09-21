import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { t as Info } from "./info-CS7SIWrO.js";
import { By as effectiveDefaultBuiltInWorktreeSourceVisibility, Hy as normalizeCustomWorktreeVisibilitySources, Jy as getRuntimePathBasename, Ly as createWorktreeVisibilitySourceMatcher, My as effectiveExternalWorktreeVisibility, Py as isLegacyRepoForExternalWorktreeVisibility, Ry as effectiveBuiltInWorktreeSourceVisibility, Uy as normalizeWorktreeVisibilitySourcePreferences, Vy as effectiveDefaultCustomWorktreeSourceVisibility, Wy as resolveCustomWorktreeVisibilitySources, iw as Trash2 } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Label } from "./label-CA70r2No.js";
import { n as ToggleGroupItem, t as ToggleGroup } from "./toggle-group-DLxD3BKS.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { t as resolveConfiguredWorktreeBasePaths } from "./configured-worktree-base-path-Bsj1LNTJ.js";
function legacyBuiltInPreferences(e) {
	return e.agentWorktreeVisibility ? {
		claude: e.agentWorktreeVisibility,
		gsd: e.agentWorktreeVisibility
	} : {};
}
function preferenceResult(e, E) {
	return {
		...Object.keys(e).length > 0 ? { builtIn: e } : {},
		...Object.keys(E).length > 0 ? { custom: E } : {}
	};
}
function buildWorktreeSourcePreferenceUpdate(e, E, D) {
	let O = normalizeWorktreeVisibilitySourcePreferences(e.worktreeVisibilitySourcePreferences), k = {
		...legacyBuiltInPreferences(e),
		...O?.builtIn
	}, A = { ...O?.custom };
	return E.kind === "built-in" ? k[E.id] = D : A[E.id] = D, preferenceResult(k, A);
}
function removeCustomWorktreeSourcePreference(e, E) {
	let D = normalizeWorktreeVisibilitySourcePreferences(e.worktreeVisibilitySourcePreferences), O = { ...D?.custom };
	return delete O[E], preferenceResult({
		...legacyBuiltInPreferences(e),
		...D?.builtIn
	}, O);
}
function removeBuiltInWorktreeSourcePreference(e, E) {
	let D = normalizeWorktreeVisibilitySourcePreferences(e.worktreeVisibilitySourcePreferences), O = {
		...legacyBuiltInPreferences(e),
		...D?.builtIn
	};
	return delete O[E], preferenceResult(O, { ...D?.custom });
}
function buildDefaultWorktreeSourcePreferenceUpdate(e, E, D) {
	let O = normalizeWorktreeVisibilitySourcePreferences(e.sourcePreferences), k = { ...O?.builtIn }, A = { ...O?.custom };
	return E.kind === "built-in" ? k[E.id] = D : A[E.id] = D, preferenceResult(k, A);
}
function removeDefaultCustomWorktreeSourcePreference(e, E) {
	let D = normalizeWorktreeVisibilitySourcePreferences(e.sourcePreferences), O = { ...D?.custom };
	return delete O[E], preferenceResult({ ...D?.builtIn }, O);
}
function globalWorktreeVisibilitySourceValue(e, E) {
	return e.kind === "built-in" ? effectiveDefaultBuiltInWorktreeSourceVisibility(E, e.id) : e.kind === "custom" ? effectiveDefaultCustomWorktreeSourceVisibility(E, e.source.id) : effectiveExternalWorktreeVisibility({}, !1, E);
}
function getWorktreeVisibilitySourceProvenance(e, E, D, O) {
	if (!e) return null;
	let k = globalWorktreeVisibilitySourceValue(E, D);
	if (E.kind === "custom" && O.has(E.source.id)) return {
		kind: "project-source",
		globalVisibility: k
	};
	let A = normalizeWorktreeVisibilitySourcePreferences(e.worktreeVisibilitySourcePreferences);
	return {
		kind: (E.kind === "built-in" ? A?.builtIn?.[E.id] !== void 0 || e.agentWorktreeVisibility !== void 0 : E.kind === "custom" ? A?.custom?.[E.source.id] !== void 0 : e.externalWorktreeVisibility !== void 0) ? "project-override" : "global",
		globalVisibility: k
	};
}
function listInheritedWorktreeVisibilitySources(e, E) {
	let D = E ?? {}, O = new Set(normalizeCustomWorktreeVisibilitySources(e.customWorktreeVisibilitySources)?.map((e) => e.id) ?? []);
	return [
		{
			kind: "built-in",
			id: "claude"
		},
		{
			kind: "built-in",
			id: "gsd"
		},
		...(normalizeCustomWorktreeVisibilitySources(D.customSources) ?? []).map((e) => ({
			kind: "custom",
			source: e
		})),
		{ kind: "other" }
	].flatMap((E) => {
		let k = getWorktreeVisibilitySourceProvenance(e, E, D, O);
		return !k || k.kind === "project-source" ? [] : [{
			source: E,
			globalVisibility: k.globalVisibility
		}];
	});
}
function worktreeVisibilityValueLabel(e) {
	return e === "show" ? translate("auto.components.sidebar.WorktreeVisibilitySourceList.show", "Show") : translate("auto.components.sidebar.WorktreeVisibilitySourceList.hide", "Hide");
}
function getWorktreeVisibilityOverrideNotice(e, E) {
	return e?.kind !== "project-override" || e.globalVisibility === E ? null : translate("auto.components.sidebar.WorktreeVisibilitySourceList.overridingGlobal", "Overriding global setting: {{value0}}", { value0: worktreeVisibilityValueLabel(e.globalVisibility) });
}
function getWorktreeVisibilitySourceNote(e) {
	return e?.kind === "project-source" ? translate("auto.components.sidebar.WorktreeVisibilitySourceList.projectOnly", "Added in this project only.") : null;
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function WorktreeVisibilitySourceAddForm({ disabled: e, onAdd: E }) {
	let [k, A] = (0, import_react.useState)(""), [j, M] = (0, import_react.useState)(null), N = async (e) => {
		e.preventDefault(), M(null);
		let O = await E(k);
		if (O === "added") {
			A("");
			return;
		}
		O !== "save-failed" && M(O === "limit" ? translate("auto.components.sidebar.WorktreeVisibilitySourceList.limit", "Remove a custom location before adding another.") : O === "duplicate-path" ? translate("auto.components.sidebar.WorktreeVisibilitySourceList.duplicatePath", "This location is already listed.") : translate("auto.components.sidebar.WorktreeVisibilitySourceList.invalidPath", "Enter an absolute path for this host."));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-2 border-t border-border bg-background/50 px-2.5 py-2.5",
		"aria-label": translate("auto.components.sidebar.WorktreeVisibilitySourceList.addLocation", "Add location"),
		onSubmit: (e) => void N(e),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "custom-worktree-root",
				className: "text-[13px]",
				children: translate("auto.components.sidebar.WorktreeVisibilitySourceList.worktreeRoot", "Worktree root")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "custom-worktree-root",
					className: "font-mono text-xs",
					value: k,
					autoComplete: "off",
					spellCheck: !1,
					disabled: e,
					"aria-invalid": j ? !0 : void 0,
					"aria-describedby": "custom-worktree-root-help",
					onChange: (e) => {
						A(e.target.value), M(null);
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "sm",
					disabled: e || !k.trim(),
					children: translate("auto.components.sidebar.WorktreeVisibilitySourceList.add", "Add")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: "custom-worktree-root-help",
				className: `text-[11px] ${j ? "text-destructive" : "text-muted-foreground"}`,
				role: j ? "alert" : void 0,
				children: j ?? translate("auto.components.sidebar.WorktreeVisibilitySourceList.rootHelp", "Orca will recognize worktrees beneath this folder.")
			})
		]
	});
}
var EMPTY_VISIBILITY_DEFAULTS = {}, EMPTY_WORKTREES = [], VISIBILITY_SEGMENTS = ["show", "hide"];
function getWorktreeVisibilitySourceLabel(e) {
	return e.kind === "built-in" ? e.id === "claude" ? translate("auto.components.sidebar.WorktreeVisibilitySourceList.claude", "Claude Code") : translate("auto.components.sidebar.WorktreeVisibilitySourceList.gsd", "GSD") : e.kind === "other" ? translate("auto.components.sidebar.WorktreeVisibilitySourceList.other", "Other locations") : getRuntimePathBasename(e.source.rootPath) || translate("auto.components.sidebar.WorktreeVisibilitySourceList.custom", "Custom location");
}
function getSourcePath(e) {
	return e.kind === "built-in" ? e.id === "claude" ? ".claude/worktrees/*" : ".gsd-workspaces/*" : e.kind === "other" ? translate("auto.components.sidebar.WorktreeVisibilitySourceList.otherPath", "Outside listed sources") : `${e.source.rootPath.replace(/[\\/]+$/, "")}/*`;
}
function sourceVisibility(e, E, D, O) {
	return E.kind === "built-in" ? e ? effectiveBuiltInWorktreeSourceVisibility(e, E.id, D) : effectiveDefaultBuiltInWorktreeSourceVisibility(D, E.id) : E.kind === "custom" ? (e ? normalizeWorktreeVisibilitySourcePreferences(e.worktreeVisibilitySourcePreferences)?.custom?.[E.source.id] : void 0) ?? (O.has(E.source.id) ? "hide" : effectiveDefaultCustomWorktreeSourceVisibility(D, E.source.id)) : effectiveExternalWorktreeVisibility(e ?? {}, e ? isLegacyRepoForExternalWorktreeVisibility(e) : !1, D);
}
function sourceMatchKey(e) {
	return e ? `${e.kind}:${e.id}` : "other";
}
function worktreeVisibilitySourceRowKey(e) {
	return e.kind === "custom" ? `custom:${e.source.id}` : e.kind === "built-in" ? `built-in:${e.id}` : "other";
}
function getAccessibleSourceLabel(e, E) {
	return e.kind === "custom" ? e.source.rootPath : E;
}
function WorktreeVisibilitySourceList({ repo: e, worktrees: E = EMPTY_WORKTREES, visibilityDefaults: A = EMPTY_VISIBILITY_DEFAULTS, customSources: M, removableSourceIds: P, showCounts: F = !0, disabled: I, sourceDefaultsDisabled: L = !1, onAdd: R, onRemove: B, onToggle: V, onUseDefault: H }) {
	let W = (0, import_react.useMemo)(() => normalizeCustomWorktreeVisibilitySources(M ?? (e ? resolveCustomWorktreeVisibilitySources(e, A) : A.customSources)) ?? [], [
		M,
		e,
		A
	]), G = (0, import_react.useMemo)(() => new Set(normalizeCustomWorktreeVisibilitySources(e?.customWorktreeVisibilitySources)?.map((e) => e.id) ?? []), [e?.customWorktreeVisibilitySources]), K = (0, import_react.useMemo)(() => [
		{
			kind: "built-in",
			id: "claude"
		},
		{
			kind: "built-in",
			id: "gsd"
		},
		...W.map((e) => ({
			kind: "custom",
			source: e
		})),
		{ kind: "other" }
	], [W]), q = (0, import_react.useMemo)(() => createWorktreeVisibilitySourceMatcher([...e ? [e.path] : [], ...E.map((e) => e.path)], W, resolveConfiguredWorktreeBasePaths(e)), [
		W,
		e,
		E
	]), J = (0, import_react.useMemo)(() => {
		let e = /* @__PURE__ */ new Map();
		for (let D of E) {
			if (D.selectedCheckout || D.ownership === "orca-managed") continue;
			let E = sourceMatchKey(D.visibilitySource ?? q(D.path));
			e.set(E, (e.get(E) ?? 0) + 1);
		}
		return e;
	}, [q, E]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid min-w-0 gap-2",
		"aria-labelledby": "worktree-sources-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			id: "worktree-sources-heading",
			className: "text-sm font-medium",
			children: translate("auto.components.sidebar.WorktreeVisibilitySourceList.sources", "Sources")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: translate("auto.components.sidebar.WorktreeVisibilitySourceList.sourcesDescription", "Shown sources include current and future worktrees in the sidebar.")
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-lg border border-border bg-muted/30",
			children: [K.map((E, j) => {
				let M = getWorktreeVisibilitySourceLabel(E), N = worktreeVisibilitySourceRowKey(E), R = J.get(N) ?? 0, z = getAccessibleSourceLabel(E, M), U = I || E.kind !== "other" && L, W = getWorktreeVisibilitySourceProvenance(e, E, A, G), K = sourceVisibility(e, E, A, G), q = getWorktreeVisibilitySourceNote(W), Y = getWorktreeVisibilityOverrideNotice(W, K), X = W?.kind === "project-override" && W.globalVisibility === K;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-source-row": N,
					className: `grid min-h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2.5 gap-y-2 px-2.5 py-2 ${j > 0 ? "border-t border-border" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex min-w-0 items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate text-[13px] font-medium",
										children: M
									}), F ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 text-[11px] text-muted-foreground",
										children: translate("auto.components.sidebar.WorktreeVisibilitySourceList.found", "{{value0}} found", { value0: R })
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-mono text-[11px] text-muted-foreground",
									children: getSourcePath(E)
								}),
								q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[11px] text-muted-foreground",
									children: q
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [
								E.kind === "custom" && (!P || P.has(E.source.id)) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: !0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "ghost",
										size: "icon-xs",
										className: "text-muted-foreground hover:text-destructive",
										disabled: U,
										"aria-label": translate("auto.components.sidebar.WorktreeVisibilitySourceList.remove", "Remove {{value0}}", { value0: z }),
										onClick: () => void B(E.source),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
									side: "top",
									sideOffset: 4,
									children: translate("auto.components.sidebar.WorktreeVisibilitySourceList.removeLocation", "Remove custom location")
								})] }) : null,
								X && H ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "link",
									size: "xs",
									className: "h-auto px-1",
									disabled: U,
									"aria-label": translate("auto.components.sidebar.WorktreeVisibilitySourceList.useGlobalFor", "Use global for {{value0}}", { value0: z }),
									onClick: () => void H(E),
									children: translate("auto.components.sidebar.WorktreeVisibilitySourceList.useGlobal", "Use global")
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroup, {
									type: "single",
									variant: "outline",
									size: "sm",
									value: K,
									disabled: U,
									"aria-label": translate("auto.components.sidebar.WorktreeVisibilitySourceList.visibility", "Visibility for {{value0}}", { value0: z }),
									className: "h-7",
									onValueChange: (e) => {
										(e === "show" || e === "hide") && V(E, e === "show");
									},
									children: VISIBILITY_SEGMENTS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem, {
										value: e,
										"data-visibility": e,
										className: "h-7 min-w-11 px-2 text-[11px] data-[state=on]:bg-foreground/10 data-[state=on]:font-semibold data-[state=on]:text-foreground",
										children: worktreeVisibilityValueLabel(e)
									}, e))
								})
							]
						}),
						Y ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							role: "status",
							className: "col-span-2 flex items-start gap-1.5 rounded-md border border-border bg-muted px-2 py-1.5 text-[11px] leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-px size-3.5 shrink-0 text-muted-foreground" }), Y]
						}) : null
					]
				}, N);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeVisibilitySourceAddForm, {
				disabled: I || L,
				onAdd: R
			})]
		})]
	});
}
export { globalWorktreeVisibilitySourceValue as a, buildDefaultWorktreeSourcePreferenceUpdate as c, removeCustomWorktreeSourcePreference as d, removeDefaultCustomWorktreeSourcePreference as f, getWorktreeVisibilitySourceProvenance as i, buildWorktreeSourcePreferenceUpdate as l, getWorktreeVisibilitySourceLabel as n, listInheritedWorktreeVisibilitySources as o, worktreeVisibilitySourceRowKey as r, worktreeVisibilityValueLabel as s, WorktreeVisibilitySourceList as t, removeBuiltInWorktreeSourcePreference as u };
