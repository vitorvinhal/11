import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { G as getSidebarHostHealthLabel } from "./worktree-activation-u-wSAPlP.js";
import { t as Server } from "./server-BmPwXRCG.js";
import { qS as ALL_EXECUTION_HOSTS_SCOPE, ru as isExplicitAgentStatusFresh, t as useAppStore, vf as AGENT_STATUS_STALE_AFTER_MS } from "./store-C9f8FDJV.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { d as DropdownMenuSub, f as DropdownMenuSubContent, n as DropdownMenuCheckboxItem, p as DropdownMenuSubTrigger } from "./dropdown-menu-DRu_J4_e.js";
import { t as Badge } from "./badge-D7sahA2a.js";
import { a as CommandInput, o as CommandItem, r as CommandEmpty, s as CommandList, t as Command } from "./command-QScw0gM9.js";
import { t as RepoBadgeLabel_default } from "./RepoBadgeLabel-B-Yh5QwJ.js";
import { n as searchRepos } from "./repo-search-mh_fkYaW.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function projectCommandFilter(e, v, y) {
	let b = v.trim().toLowerCase();
	if (!b) return 1;
	let [x = "", S = ""] = y ?? [], C = x.toLowerCase().indexOf(b);
	if (C !== -1) return 2 + 1 / (C + 1);
	let w = S.toLowerCase().indexOf(b);
	return w === -1 ? 0 : 1 + 1 / (w + 1);
}
function SidebarProjectFilterPanel({ availableRepos: e, selectedRepos: v, hasRepoFilter: b, filterRepoIds: x, setFilterRepoIds: C }) {
	let [w, T] = (0, import_react.useState)(""), [E, D] = (0, import_react.useState)(""), O = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let e = requestAnimationFrame(() => O.current?.focus());
		return () => cancelAnimationFrame(e);
	}, []);
	let k = (0, import_react.useCallback)((e) => {
		x.includes(e) || C([...x, e]), T("");
	}, [x, C]), A = (0, import_react.useCallback)((e) => {
		C(x.filter((v) => v !== e));
	}, [x, C]), j = (0, import_react.useCallback)((y) => {
		if (y.key === "Backspace" && w === "" && v.length > 0) {
			let e = v.at(-1);
			e && (y.preventDefault(), y.stopPropagation(), A(e.id));
			return;
		}
		if (y.key === "Enter") {
			let v = e.find((e) => e.id === E) ?? searchRepos(e, w)[0];
			v && (y.preventDefault(), y.stopPropagation(), k(v.id));
			return;
		}
		if (y.key === "ArrowLeft") {
			let { selectionStart: e, selectionEnd: v } = y.currentTarget;
			e === 0 && v === 0 || y.stopPropagation();
			return;
		}
		y.key !== "ArrowDown" && y.key !== "ArrowUp" && y.stopPropagation();
	}, [
		e,
		A,
		k,
		E,
		w,
		v
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command, {
		filter: projectCommandFilter,
		onValueChange: D,
		className: "bg-transparent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedProjectPills, {
				selectedRepos: v,
				onRemoveProject: A
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, {
				ref: O,
				placeholder: v.length > 0 ? translate("auto.components.sidebar.SidebarRepositoryFilterSection.5a273fbfce", "Add project...") : translate("auto.components.sidebar.SidebarRepositoryFilterSection.83a820fa71", "Filter projects..."),
				value: w,
				onValueChange: T,
				onKeyDown: j,
				className: "h-8 py-2 text-xs",
				wrapperClassName: "mx-1 rounded-[7px] border border-border/70 px-2",
				iconClassName: "h-3.5 w-3.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, {
				className: "max-h-48 py-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, {
					className: "py-4 text-[11px]",
					children: b ? translate("auto.components.sidebar.SidebarRepositoryFilterSection.bbbc6e8e3b", "No unselected projects match") : translate("auto.components.sidebar.SidebarRepositoryFilterSection.4815c70605", "No projects match")
				}), e.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
					value: e.id,
					keywords: [e.displayName, e.path],
					onSelect: () => k(e.id),
					className: "mx-1 my-0.5 items-center gap-2 rounded-[7px] px-2 py-1 text-[12px] leading-5 font-medium data-[selected=true]:bg-black/8 dark:data-[selected=true]:bg-white/14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex min-w-0 flex-1 items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoBadgeLabel_default, {
							name: e.displayName,
							color: e.badgeColor,
							className: "max-w-full"
						}), e.connectionId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 inline-flex items-center gap-0.5 rounded bg-muted px-1 py-0.5 text-[9px] font-medium leading-none text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-2.5" }), translate("auto.components.sidebar.SidebarRepositoryFilterSection.2656053db4", "SSH")]
						})]
					})
				}, e.id))]
			})
		]
	});
}
function SelectedProjectPills({ selectedRepos: e, onRemoveProject: v }) {
	return e.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scrollbar-sleek mx-1 mb-1 flex max-h-16 flex-wrap gap-1 overflow-y-auto rounded-[7px] border border-border/70 bg-muted/25 p-1",
		children: e.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
			variant: "outline",
			className: "h-5 max-w-full gap-1 border-border/70 bg-background px-1.5 py-0 text-[11px] font-medium",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoBadgeLabel_default, {
				name: e.displayName,
				color: e.badgeColor,
				className: "max-w-[8rem]",
				badgeClassName: "size-1.5"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon-xs",
				"aria-label": translate("auto.components.sidebar.SidebarRepositoryFilterSection.f10ca29601", "Remove {{value0}} filter", { value0: e.displayName }),
				className: "-mr-1 size-4 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground",
				onMouseDown: (e) => e.preventDefault(),
				onClick: () => v(e.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					className: "size-2.5",
					strokeWidth: 2.5
				})
			})]
		}, e.id))
	});
}
function getProjectFilterVisibilityLabel({ selectedCount: e, selectedRepos: v }) {
	return e === 0 ? translate("auto.components.sidebar.SidebarRepositoryFilterSection.allProjects", "All projects") : e === 1 ? v[0]?.displayName ?? "Projects" : translate("auto.components.sidebar.SidebarRepositoryFilterSection.selectedProjectsCount", "{{value0}} projects", { value0: e });
}
var SidebarRepositoryFilterSection_default = import_react.memo(function({ preserveWorkspaceBoardOpen: e = !1, filterRepoIds: v, setFilterRepoIds: b }) {
	let x = useAppStore((e) => e.filterRepoIds), S = useAppStore((e) => e.setFilterRepoIds), C = useAppStore((e) => e.repos), w = v ?? x, E = b ?? S, D = C.length > 1, O = (0, import_react.useMemo)(() => {
		let e = /* @__PURE__ */ new Set();
		for (let v of C) w.includes(v.id) && e.add(v.id);
		return e;
	}, [C, w]), j = O.size, M = j > 0, N = (0, import_react.useMemo)(() => C.filter((e) => O.has(e.id)), [C, O]), P = (0, import_react.useMemo)(() => C.filter((e) => !O.has(e.id)), [C, O]), F = getProjectFilterVisibilityLabel({
		selectedCount: j,
		selectedRepos: N
	}), I = (0, import_react.useCallback)(() => E([]), [E]);
	return D ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-1 items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.sidebar.SidebarRepositoryFilterSection.7679f0c268", "Projects") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 truncate text-[11px] font-medium text-muted-foreground",
			children: F
		})]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, {
		className: "w-64",
		"data-workspace-board-preserve-open": e ? "" : void 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-2 py-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[11px] font-semibold text-muted-foreground",
				children: [translate("auto.components.sidebar.SidebarRepositoryFilterSection.7679f0c268", "Projects"), M && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-1.5 font-medium text-foreground",
					children: ["· ", j]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: I,
				className: "rounded-full px-2 py-0.5 text-[11px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-40 disabled:hover:bg-transparent",
				disabled: !M,
				children: translate("auto.components.sidebar.SidebarRepositoryFilterSection.d3a9c4cea1", "Clear")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarProjectFilterPanel, {
			availableRepos: P,
			selectedRepos: N,
			hasRepoFilter: M,
			filterRepoIds: w,
			setFilterRepoIds: E
		})]
	})] }) : null;
});
function getHostMetadata(e) {
	let v = getSidebarHostHealthLabel(e.health);
	return e.kind === "local" ? e.detail : e.kind === "ssh" ? `${e.presence === "configured" ? translate("auto.components.sidebar.SidebarWorkspaceOptionsMenu.configuredSshHost", "Configured SSH") : translate("auto.components.sidebar.SidebarWorkspaceOptionsMenu.projectSshHost", "Project SSH")} · ${v}` : `${e.presence === "active" ? translate("auto.components.sidebar.SidebarWorkspaceOptionsMenu.activeRuntimeHost", "Active server") : translate("auto.components.sidebar.SidebarWorkspaceOptionsMenu.projectRuntimeHost", "Project server")} · ${v}`;
}
function SidebarHostScopeMenuSection({ hostVisibilityLabel: e, hostOptions: v, preserveWorkspaceBoardOpen: b, setWorkspaceHostScope: x, visibleWorkspaceHostIds: S, setVisibleWorkspaceHostIds: C }) {
	let w = !S, T = new Set(S ?? []), E = () => {
		if (!w) {
			x("all");
			return;
		}
		let e = v[0];
		e && C([e.id]);
	}, D = (e) => {
		if (w) {
			C([e]);
			return;
		}
		let y = new Set(T);
		if (y.has(e)) {
			if (y.size <= 1) return;
			y.delete(e);
		} else y.add(e);
		C(y.size === v.length ? null : [...y]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-1 items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.sidebar.SidebarWorkspaceOptionsMenu.hosts", "Hosts") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 truncate text-[11px] font-medium text-muted-foreground",
			children: e
		})]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, {
		className: "w-56",
		"data-workspace-board-preserve-open": b ? "" : void 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
			checked: w,
			onCheckedChange: E,
			onSelect: (e) => e.preventDefault(),
			className: "min-h-11 items-start py-1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex min-w-0 flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: translate("auto.components.sidebar.sidebarHostOptions.3e102f111c", "All hosts")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-[11px] font-normal text-muted-foreground",
					children: translate("auto.components.sidebar.SidebarWorkspaceOptionsMenu.allHostsDetail", "Show every host")
				})]
			})
		}), v.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
			checked: T.has(e.id),
			disabled: !w && T.has(e.id) && T.size <= 1,
			onCheckedChange: () => D(e.id),
			onSelect: (e) => e.preventDefault(),
			className: "min-h-11 items-start py-1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex min-w-0 flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: e.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-normal text-muted-foreground",
					children: getHostMetadata(e)
				})]
			})
		}, e.id))]
	})] });
}
const ActivityThreadCollapseContext = (0, import_react.createContext)(null);
function isActivityHookLiveAgentState(e) {
	return e === "working" || e === "blocked" || e === "waiting";
}
function freshActivityLiveAgentState(e, v) {
	return !isActivityHookLiveAgentState(e.state) || !isExplicitAgentStatusFresh(e, v, 18e5) ? null : e.state === "working" && e.workingMode === "monitoring" ? "monitoring" : e.state;
}
function isHistoricalActivityState(e) {
	return e === "done" || e === "blocked" || e === "waiting";
}
export { SidebarRepositoryFilterSection_default as a, SidebarHostScopeMenuSection as i, isHistoricalActivityState as n, ActivityThreadCollapseContext as r, freshActivityLiveAgentState as t };
