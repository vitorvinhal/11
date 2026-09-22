import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { aa as BUNDLED_PET, ca as isBundledPetId, ia as PET_SIZE_MIN, iw as Trash2, oa as BUNDLED_PETS, ra as PET_SIZE_MAX, sa as findBundledPet, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as Upload } from "./upload-CERi9lcE.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { a as DropdownMenuLabel, d as DropdownMenuSub, f as DropdownMenuSubContent, i as DropdownMenuItem, l as DropdownMenuSeparator, m as DropdownMenuTrigger, o as DropdownMenuPortal, p as DropdownMenuSubTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DRu_J4_e.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
var PackageOpen = createLucideIcon("package-open", [
	["path", {
		d: "M12 22v-9",
		key: "x3hkom"
	}],
	["path", {
		d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
		key: "2ntwy6"
	}],
	["path", {
		d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
		key: "1pmm1c"
	}],
	["path", {
		d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
		key: "12ttoo"
	}]
]), import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function PetStatusSegmentInner() {
	let r = useAppStore((r) => r.petVisible), x = useAppStore((r) => r.setPetVisible), C = useAppStore((r) => r.petId), T = useAppStore((r) => r.setPetId), E = useAppStore((r) => r.customPets), D = useAppStore((r) => r.addCustomPet), O = useAppStore((r) => r.removeCustomPet), k = useAppStore((r) => r.petSize), A = useAppStore((r) => r.setPetSize), j = useAppStore((r) => r.openSettingsPage), M = useAppStore((r) => r.openSettingsTarget), N = isBundledPetId(C), P = N ? findBundledPet(C) ?? BUNDLED_PET : null, F = N ? null : E.find((r) => r.id === C), I = P ? P.label : F?.label ?? "Pet", L = r ? I : `${I} hidden`, R = async () => {
		if (console.log("[pet-overlay] upload: click"), !window.api?.pet?.import) {
			console.warn("[pet-overlay] upload: window.api.pet.import missing — restart Orca"), toast.error(translate("auto.components.status.bar.PetStatusSegment.e6234bcc17", "Custom pet upload needs a full app restart (not just reload)."));
			return;
		}
		try {
			let S = await window.api.pet.import();
			if (console.log("[pet-overlay] upload: result", S), !S) return;
			D(S), r || x(!0), T(S.id);
		} catch (r) {
			console.error("[pet-overlay] upload: error", r), toast.error(r instanceof Error ? r.message : translate("auto.components.status.bar.PetStatusSegment.f395c9a685", "Failed to import file"));
		}
	}, z = async () => {
		if (!window.api?.pet?.importPetBundle) {
			toast.error(translate("auto.components.status.bar.PetStatusSegment.2021d4f6db", "Pet bundle import needs a full app restart (not just reload)."));
			return;
		}
		try {
			let S = await window.api.pet.importPetBundle();
			if (!S) return;
			D(S), r || x(!0), T(S.id);
		} catch (r) {
			console.error("[pet-overlay] pet bundle: error", r), toast.error(r instanceof Error ? r.message : translate("auto.components.status.bar.PetStatusSegment.cef0ab4636", "Failed to import pet bundle"));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "group inline-flex items-center cursor-pointer pl-1 py-0.5",
			"aria-label": translate("auto.components.status.bar.PetStatusSegment.aec479308a", "Pet menu"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `rounded px-1 py-0.5 text-[11px] font-medium text-muted-foreground group-hover:bg-accent/70 group-hover:text-foreground ${r ? "" : "opacity-50"}`,
				children: L
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		side: "top",
		align: "end",
		sideOffset: 8,
		className: "min-w-[220px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: translate("auto.components.status.bar.PetStatusSegment.34c25dfe9c", "Pet") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: (S) => {
					S.preventDefault(), x(!r);
				},
				children: r ? translate("auto.components.status.bar.PetStatusSegment.1fbc51cc77", "Hide pet") : translate("auto.components.status.bar.PetStatusSegment.6d0a8cd179", "Show pet")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-2 py-1.5",
				onPointerDown: (r) => r.stopPropagation(),
				onClick: (r) => r.stopPropagation(),
				onKeyDown: (r) => r.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-center justify-between text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.status.bar.PetStatusSegment.2f7bbaa457", "Size") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [k, translate("auto.components.status.bar.PetStatusSegment.c6aa805b1b", "px")]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 60,
					max: 360,
					step: 10,
					value: k,
					onChange: (r) => A(Number(r.target.value)),
					className: "w-full",
					"aria-label": translate("auto.components.status.bar.PetStatusSegment.b75484a01a", "Pet size")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubTrigger, { children: translate("auto.components.status.bar.PetStatusSegment.0608ad02a2", "Choose pet") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, {
				className: "min-w-[220px]",
				children: [
					BUNDLED_PETS.map((S) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onSelect: () => {
							r || x(!0), T(S.id);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex w-4 items-center justify-center",
							children: S.id === C ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3.5",
								"aria-hidden": !0
							}) : null
						}), S.label]
					}, S.id)),
					E.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}) : null,
					E.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						className: "group",
						onSelect: () => {
							r || x(!0), T(w.id);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex w-4 items-center justify-center",
								children: w.id === C ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-3.5",
									"aria-hidden": !0
								}) : null
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 truncate",
								children: w.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "ml-2 flex size-5 items-center justify-center rounded text-muted-foreground hover:bg-destructive/15 hover:text-destructive",
								"aria-label": translate("auto.components.status.bar.PetStatusSegment.3668339495", "Remove {{value0}}", { value0: w.label }),
								onClick: (r) => {
									r.stopPropagation(), r.preventDefault(), O(w.id);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
									className: "size-3",
									"aria-hidden": !0
								})
							})
						]
					}, w.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onSelect: () => {
							R();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
							className: "size-3.5",
							"aria-hidden": !0
						}), translate("auto.components.status.bar.PetStatusSegment.59b5955621", "Upload your own…")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onSelect: () => {
							z();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageOpen, {
							className: "size-3.5",
							"aria-hidden": !0
						}), translate("auto.components.status.bar.PetStatusSegment.ed176ad68f", "Import .codex-pet bundle…")]
					})
				]
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: () => {
					M({
						pane: "experimental",
						repoId: null,
						sectionId: "experimental-pet"
					}), j();
				},
				children: translate("auto.components.status.bar.PetStatusSegment.cd8c6c654c", "Pet settings…")
			})
		]
	})] });
}
const PetStatusSegment = import_react.memo(PetStatusSegmentInner);
export { PetStatusSegment };
