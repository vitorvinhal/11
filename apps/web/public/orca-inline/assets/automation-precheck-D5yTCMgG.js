import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronsUpDown } from "./chevrons-up-down-d3SoqcUm.js";
import { sm as getRuntimeEnvironmentIdForRepo, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { a as PopoverTrigger, i as PopoverContent, t as Popover } from "./popover-DHL-338i.js";
import { a as CommandInput, o as CommandItem, r as CommandEmpty, s as CommandList, t as Command } from "./command-QScw0gM9.js";
import { i as isRuntimeRepoRefSearchQueryWithinLimit, r as searchRuntimeRepoBaseRefs, t as getRuntimeRepoBaseRefDefault } from "./runtime-repo-client-BXv7KZJA.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), DEFAULT_VALUE = "__project_default__";
function displayBranchName(e) {
	return e.replace(/^refs\/heads\//, "");
}
function CreateFromPicker({ repoId: e, repoMap: x, worktrees: w, value: T, triggerClassName: E, onValueChange: D }) {
	let O = useAppStore((x) => getRuntimeEnvironmentIdForRepo(x, e)), k = x.get(e), [A, j] = import_react.useState(!1), M = import_react.useRef(null), N = import_react.useRef(null), [P, F] = import_react.useState(null), [I, L] = import_react.useState(""), [R, z] = import_react.useState([]), [B, V] = import_react.useState(!1), H = k?.worktreeBaseRef ?? P, U = T || DEFAULT_VALUE, W = T || (H ? `${H} (default)` : "Project default"), G = import_react.useMemo(() => {
		let e = /* @__PURE__ */ new Set();
		H && e.add(H);
		for (let x of w) {
			let S = displayBranchName(x.branch).trim();
			S && e.add(S);
		}
		for (let x of R) e.add(x);
		return Array.from(e).sort((e, x) => e.localeCompare(x));
	}, [
		H,
		R,
		w
	]), K = import_react.useCallback(() => {
		N.current !== null && (cancelAnimationFrame(N.current), N.current = null);
	}, []), q = import_react.useCallback((e) => {
		e === null && K(), M.current = e;
	}, [K]), J = import_react.useCallback(() => {
		K(), N.current = requestAnimationFrame(() => {
			N.current = null, M.current?.focus();
		});
	}, [K]), Y = import_react.useCallback((e) => {
		j(e), e || K();
	}, [K]);
	return import_react.useEffect(() => {
		if (!e) return;
		let x = !1;
		return F(null), getRuntimeRepoBaseRefDefault({ activeRuntimeEnvironmentId: O }, e).then((e) => {
			x || F(e.defaultBaseRef);
		}).catch(() => {
			x || F(null);
		}), () => {
			x = !0;
		};
	}, [O, e]), import_react.useEffect(() => {
		if (!isRuntimeRepoRefSearchQueryWithinLimit(I)) {
			z([]), V(!1);
			return;
		}
		let x = I.trim();
		if (!A || !e) {
			z([]), V(!1);
			return;
		}
		let S = !1;
		V(!0);
		let C = window.setTimeout(() => {
			searchRuntimeRepoBaseRefs({ activeRuntimeEnvironmentId: O }, e, x, 30).then((e) => {
				S || z(e);
			}).catch(() => {
				S || z([]);
			}).finally(() => {
				S || V(!1);
			});
		}, 200);
		return () => {
			S = !0, window.clearTimeout(C);
		};
	}, [
		O,
		A,
		I,
		e
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
			open: A,
			onOpenChange: Y,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					role: "combobox",
					"aria-expanded": A,
					className: cn("h-9 w-full justify-between px-3 text-sm font-normal", E),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex min-w-0 items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-muted-foreground",
							children: translate("auto.components.automations.CreateFromPicker.dd3841b442", "Branch from")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: W
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "size-4 opacity-50" })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
				align: "start",
				className: "w-[var(--radix-popover-trigger-width)] min-w-[18rem] p-0",
				onOpenAutoFocus: (e) => {
					e.preventDefault(), J();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, {
					ref: q,
					value: I,
					onValueChange: L,
					placeholder: translate("auto.components.automations.CreateFromPicker.f061f49e3f", "Search repo branches...")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, {
					className: "max-h-72",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: B ? translate("auto.components.automations.CreateFromPicker.9ce96621f4", "Searching branches...") : translate("auto.components.automations.CreateFromPicker.79512f22a7", "No branches found.") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
							value: H ? `${H} default` : "project default",
							onSelect: () => {
								D(""), j(!1);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-4", U === DEFAULT_VALUE ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: H ? translate("auto.components.automations.CreateFromPicker.e53d306056", "{{value0}} (default)", { value0: H }) : translate("auto.components.automations.CreateFromPicker.ef6d762538", "Project default")
							})]
						}),
						G.filter((e) => e !== H).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
							value: e,
							onSelect: () => {
								D(e), j(!1);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-4", T === e ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: e
							})]
						}, e))
					]
				})] })
			})]
		})
	});
}
const AUTOMATIONS_CHANGED_EVENT = "orca:automations-changed";
function emitAutomationsChangedWindowEvent(e = {}) {
	window.dispatchEvent(new CustomEvent(AUTOMATIONS_CHANGED_EVENT, { detail: e }));
}
function automationsChangedWindowDetail(e) {
	let x = e.detail;
	return x && typeof x == "object" ? x : {};
}
function getAutomationLegacyRepoId(e) {
	return e.projectId;
}
function getAutomationRunRepoId(e) {
	return e.runContext?.repoId ?? getAutomationLegacyRepoId(e);
}
function formatAutomationPrecheckTimeout(e) {
	return `${e}s`;
}
function didAutomationPrecheckPass(e) {
	return !!(e && !e.timedOut && !e.error && e.exitCode === 0);
}
function formatAutomationPrecheckFailure(e) {
	return e.timedOut ? `Precheck timed out after ${formatAutomationPrecheckTimeout(Math.max(1, Math.round(e.durationMs / 1e3)))}.` : e.error ? `Precheck failed: ${e.error}` : `Precheck exited with code ${e.exitCode ?? "unknown"}.`;
}
export { AUTOMATIONS_CHANGED_EVENT as a, CreateFromPicker as c, getAutomationRunRepoId as i, formatAutomationPrecheckFailure as n, automationsChangedWindowDetail as o, formatAutomationPrecheckTimeout as r, emitAutomationsChangedWindowEvent as s, didAutomationPrecheckPass as t };
