import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { iC as parseExecutionHostId, my as MARINE_CREATURES, sm as getRuntimeEnvironmentIdForRepo, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { i as isRuntimeRepoRefSearchQueryWithinLimit, r as searchRuntimeRepoBaseRefs, t as getRuntimeRepoBaseRefDefault } from "./runtime-repo-client-BXv7KZJA.js";
var CloudUpload = createLucideIcon("cloud-upload", [
	["path", {
		d: "M12 13v8",
		key: "1l5pq0"
	}],
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "m8 17 4-4 4 4",
		key: "1quai1"
	}]
]);
new Set(MARINE_CREATURES.map((e) => e.toLowerCase()));
function humanizeBranchSlug(e) {
	let u = e.split("-").filter(Boolean).join(" ");
	return u ? u.charAt(0).toUpperCase() + u.slice(1) : "";
}
function buildBranchNamePrompt(e, u = "") {
	let d = [], f = u.trim();
	f && d.push(f, ""), d.push(f ? "Generate a git branch name that summarizes the coding task described below." : "Generate a short git branch name that summarizes the coding task described below.", "Output ONLY the branch name on a single line, nothing else.", ""), d.push("User request:", e.firstPrompt.trim());
	let p = e.assistantMessage?.trim();
	return p && d.push("", "Agent's initial response:", p), d.join("\n");
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function BaseRefPicker({ repoId: e, hostId: u, currentBaseRef: p, onSelect: m, onUsePrimary: h }) {
	let g = useAppStore((u) => getRuntimeEnvironmentIdForRepo(u, e)), _ = parseExecutionHostId(u), v = u ? _?.kind === "runtime" ? _.environmentId : null : g, [y, b] = (0, import_react.useState)(null), [x, S] = (0, import_react.useState)(0), [C, w] = (0, import_react.useState)(""), [T, E] = (0, import_react.useState)([]), [D, O] = (0, import_react.useState)(!1), k = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let e = k.current;
		if (!e) return;
		let u = (u) => {
			e.scrollHeight <= e.clientHeight || (u.preventDefault(), e.scrollTop += u.deltaY);
		};
		return e.addEventListener("wheel", u, { passive: !1 }), () => e.removeEventListener("wheel", u);
	}, [T.length]), (0, import_react.useEffect)(() => {
		let d = !1;
		return w(""), E([]), b(null), S(0), (async () => {
			try {
				let f = await getRuntimeRepoBaseRefDefault({ activeRuntimeEnvironmentId: v }, e, u);
				d || (b(f.defaultBaseRef), S(f.remoteCount));
			} catch (e) {
				console.error("[BaseRefPicker] getBaseRefDefault failed", e), d || (b(null), S(0));
			}
		})(), () => {
			d = !0;
		};
	}, [
		v,
		u,
		e
	]), (0, import_react.useEffect)(() => {
		if (!isRuntimeRepoRefSearchQueryWithinLimit(C)) {
			E([]), O(!1);
			return;
		}
		let d = C.trim();
		if (d.length < 2) {
			E([]), O(!1);
			return;
		}
		let f = !1;
		O(!0);
		let p = window.setTimeout(() => {
			searchRuntimeRepoBaseRefs({ activeRuntimeEnvironmentId: v }, e, d, 20, u).then((e) => {
				f || E(e);
			}).catch((e) => {
				console.error("[BaseRefPicker] searchBaseRefs failed", e), f || E([]);
			}).finally(() => {
				f || O(!1);
			});
		}, 200);
		return () => {
			f = !0, window.clearTimeout(p);
		};
	}, [
		v,
		C,
		u,
		e
	]);
	let A = p ?? y;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium text-foreground",
						children: A ?? translate("auto.components.settings.BaseRefPicker.ee110e1830", "No default base ref")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: p ? translate("auto.components.settings.BaseRefPicker.2f3cda96f5", "Pinned for this repo") : y ? translate("auto.components.settings.BaseRefPicker.086ce7f369", "Following primary branch ({{value0}})", { value0: y }) : translate("auto.components.settings.BaseRefPicker.9a14ec7400", "Pick a base branch below")
					}),
					x > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							translate("auto.components.settings.BaseRefPicker.a5c16712c1", "Multiple remotes detected. Type a remote name (e.g."),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: translate("auto.components.settings.BaseRefPicker.915ad97875", "upstream") }),
							translate("auto.components.settings.BaseRefPicker.80f7c82303", ") or a full ref (e.g."),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: translate("auto.components.settings.BaseRefPicker.b468f46726", "upstream/main") }),
							translate("auto.components.settings.BaseRefPicker.ade9a5bb03", ") to scope results.")
						]
					}) : null
				] }), h && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: h,
					disabled: !p,
					children: translate("auto.components.settings.BaseRefPicker.773a5687a3", "Use Primary")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: C,
				onChange: (e) => w(e.target.value),
				placeholder: translate("auto.components.settings.BaseRefPicker.7db7fb87e5", "Search branches by name..."),
				className: "max-w-md"
			}),
			D ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: translate("auto.components.settings.BaseRefPicker.a4a9372eb2", "Searching branches...")
			}) : null,
			!D && C.trim().length >= 2 ? T.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: k,
				className: "max-h-[min(12rem,40vh)] overflow-y-auto overflow-x-hidden rounded-md border border-border/50 scrollbar-sleek",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-1",
					children: T.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							w(""), E([]), m(e);
						},
						className: `flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition-colors hover:bg-muted/60 ${A === e ? "bg-accent text-accent-foreground" : "text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: e
						}), A === e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.18em]",
							children: translate("auto.components.settings.BaseRefPicker.d166ff883d", "Current")
						}) : null]
					}, e))
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: translate("auto.components.settings.BaseRefPicker.1b8e54151f", "No matching branches found.")
			}) : null
		]
	});
}
export { CloudUpload as i, buildBranchNamePrompt as n, humanizeBranchSlug as r, BaseRefPicker as t };
