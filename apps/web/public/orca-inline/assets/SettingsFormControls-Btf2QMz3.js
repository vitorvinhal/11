import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronsUpDown } from "./chevrons-up-down-d3SoqcUm.js";
import { t as CircleX } from "./circle-x-B4rQismt.js";
import { Bb as DESKTOP_TERMINAL_SCROLLBACK_ROW_PRESETS, Db as getDefaultRepoHookSettings, lb as DEFAULT_APP_FONT_FAMILY, os as normalizeColor } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Label } from "./label-CA70r2No.js";
import { i as PopoverContent, n as PopoverAnchor, t as Popover } from "./popover-DHL-338i.js";
import { t as ScrollArea } from "./scroll-area-_VXJFT4y.js";
import { t as Switch } from "./switch-iHg-WoiR.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { a as uiZoomFactorFromLevel } from "./ui-zoom-level-yFz0_XNX.js";
function isSettingsFormOptionQueryTooLarge(e, o = 2048) {
	return isClipboardTextByteLengthOverLimit(e, o);
}
function normalizeSettingsFormOptionQuery(e) {
	return isSettingsFormOptionQueryTooLarge(e) ? null : e.trim().toLowerCase();
}
function filterTerminalThemeOptions(e, o) {
	let s = normalizeSettingsFormOptionQuery(o);
	return s === null ? [] : s ? e.filter((e) => `${e.label} ${e.sourceLabel ?? ""} `.toLowerCase().includes(s)) : [...e];
}
function filterFontSuggestions(e, o) {
	let s = normalizeSettingsFormOptionQuery(o);
	if (s === null) return [];
	if (!s) return [...e];
	let c = [], l = [];
	for (let o of e) {
		let e = o.toLowerCase();
		e.startsWith(s) ? c.push(o) : e.includes(s) && l.push(o);
	}
	return [...c, ...l];
}
function getRenderedFontSuggestions(e, o, s = 320) {
	let c = Math.min(e.length, s);
	if (c <= 0) return [];
	let l = Array.from({ length: c }, (e, o) => o);
	return o >= c && o < e.length && (l[c - 1] = o), l.map((o) => ({
		font: e[o] ?? "",
		sourceIndex: o
	}));
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function FontAutocomplete({ value: e, suggestions: o, onChange: c, placeholder: f = "SF Mono", onRequestSuggestions: p, onPreviewFontFamily: m }) {
	let [h, g] = (0, import_react.useState)(e), [_, S] = (0, import_react.useState)(e), [C, w] = (0, import_react.useState)(!1), [T, E] = (0, import_react.useState)(-1), [D, O] = (0, import_react.useState)(!1), k = (0, import_react.useRef)(null), A = (0, import_react.useRef)(null), j = (0, import_react.useRef)(m), M = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		j.current = m;
	}, [m]);
	let N = (0, import_react.useCallback)((e) => {
		A.current = e, e || j.current?.(null);
	}, []);
	e !== _ && (S(e), g(e), e !== h && O(!1));
	let P = (0, import_react.useCallback)(() => {
		p?.();
	}, [p]), F = (e) => {
		w(e), e && P(), e || O(!1);
	}, I = h.trim().toLowerCase(), L = e.trim().toLowerCase(), R = (0, import_react.useMemo)(() => filterFontSuggestions(o, h), [o, h]), z = !D && I === L ? o : R, B = (0, import_react.useMemo)(() => getRenderedFontSuggestions(z, T), [z, T]), [V, H] = (0, import_react.useState)(z), [U, W] = (0, import_react.useState)(C), [G, K] = (0, import_react.useState)(e);
	if (z !== V || C !== U || e !== G) if (H(z), W(C), K(e), !C || z.length === 0) E(-1);
	else {
		let o = z.indexOf(e);
		E(Math.max(o, 0));
	}
	(0, import_react.useEffect)(() => {
		if (m) {
			if (!C || T < 0) {
				m(null);
				return;
			}
			m(z[T] ?? null);
		}
	}, [
		z,
		T,
		m,
		C
	]);
	let q = (e) => {
		g(e), O(!1), c(e), w(!1);
	}, J = () => {
		k.current?.focus();
	}, Y = { maxHeight: "var(--radix-popover-content-available-height)" };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: N,
		className: "relative max-w-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
			open: C,
			onOpenChange: F,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverAnchor, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						ref: k,
						value: h,
						onChange: (e) => {
							let o = e.target.value;
							P(), g(o), O(!0), c(o), w(!0);
						},
						onFocus: () => {
							P(), O(!1), w(!0);
						},
						onKeyDown: (e) => {
							if (e.key === "Escape") {
								C && (e.preventDefault(), w(!1), O(!1));
								return;
							}
							if (e.key === "ArrowDown") {
								e.preventDefault(), w(!0), z.length > 0 && E((e) => e < 0 ? 0 : Math.min(e + 1, z.length - 1));
								return;
							}
							if (e.key === "ArrowUp") {
								e.preventDefault(), w(!0), z.length > 0 && E((e) => e < 0 ? z.length - 1 : Math.max(e - 1, 0));
								return;
							}
							if (e.key === "Enter" && C && T >= 0) {
								let o = z[T];
								o && (e.preventDefault(), q(o));
							}
						},
						placeholder: f,
						className: "pr-18",
						role: "combobox",
						"aria-autocomplete": "list",
						"aria-expanded": C,
						"aria-controls": M,
						"aria-activedescendant": C && T >= 0 ? `${M}-option-${T}` : void 0
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-y-0 right-2 flex items-center gap-1",
						children: [h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onMouseDown: (e) => e.preventDefault(),
							onClick: () => {
								g(""), O(!1), c(""), w(!0), J();
							},
							className: "rounded-sm p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
							"aria-label": translate("auto.components.settings.SettingsFormControls.a4ff6143f8", "Clear font selection"),
							title: translate("auto.components.settings.SettingsFormControls.74bcecd5ec", "Clear"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-3.5" })
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onMouseDown: (e) => e.preventDefault(),
							onClick: () => {
								let e = !C;
								w(e), e || O(!1), e && (P(), J());
							},
							className: "rounded-sm p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
							"aria-label": translate("auto.components.settings.SettingsFormControls.c766f8ac75", "Toggle font suggestions"),
							title: translate("auto.components.settings.SettingsFormControls.b55371ea18", "Fonts"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "size-3.5" })
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
				align: "start",
				className: "w-[var(--radix-popover-trigger-width)]",
				onOpenAutoFocus: (e) => e.preventDefault(),
				onCloseAutoFocus: (e) => e.preventDefault(),
				onInteractOutside: (e) => {
					A.current?.contains(e.target) && e.preventDefault();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: B.length > 8 ? "h-64" : void 0,
					style: Y,
					viewportProps: { style: Y },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: M,
						role: "listbox",
						className: "p-1",
						children: z.length > 0 ? B.map(({ font: o, sourceIndex: s }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							id: `${M}-option-${s}`,
							role: "option",
							"aria-selected": s === T,
							ref: (e) => {
								e && s === T && e.scrollIntoView({ block: "nearest" });
							},
							onMouseDown: (e) => e.preventDefault(),
							onMouseEnter: () => E(s),
							onClick: () => q(o),
							className: `flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition-colors ${s === T ? "bg-accent text-accent-foreground" : "hover:bg-muted/60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: o
							}), o === e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "ml-3 size-4 shrink-0" }) : null]
						}, o)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 py-3 text-sm text-muted-foreground",
							children: translate("auto.components.settings.SettingsFormControls.42a4d15a30", "No matching fonts.")
						})
					})
				})
			})]
		})
	});
}
const DEFAULT_REPO_HOOK_SETTINGS = getDefaultRepoHookSettings(), SCROLLBACK_PRESETS_ROWS = DESKTOP_TERMINAL_SCROLLBACK_ROW_PRESETS;
function zoomLevelToPercent(e) {
	return Math.round(100 * uiZoomFactorFromLevel(e));
}
function mergeFontSuggestions(e, o) {
	return Array.from(new Set([
		DEFAULT_APP_FONT_FAMILY,
		...e,
		...o
	]));
}
function getFallbackTerminalFonts() {
	let e = typeof navigator < "u" ? navigator : null, o = (e ? e.userAgentData?.platform ?? e.platform ?? "" : "").toLowerCase();
	return o.includes("mac") ? [
		"SF Mono",
		"Menlo",
		"Monaco",
		"JetBrains Mono",
		"Fira Code"
	] : o.includes("win") ? [
		"Cascadia Mono",
		"Consolas",
		"Lucida Console",
		"JetBrains Mono",
		"Fira Code"
	] : [
		"JetBrains Mono",
		"Fira Code",
		"DejaVu Sans Mono",
		"Liberation Mono",
		"Ubuntu Mono",
		"Noto Sans Mono"
	];
}
function ThemePicker({ label: e, description: o, selectedTheme: l, themeOptions: u, query: d, onQueryChange: f, onSelectTheme: p, importedHighlightSignal: m }) {
	let h = (0, import_react.useRef)(null), [g, v] = (0, import_react.useState)(!1);
	(0, import_react.useEffect)(() => {
		if (!m) return;
		h.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		}), v(!0);
		let e = setTimeout(() => v(!1), 2e3);
		return () => clearTimeout(e);
	}, [m]);
	let y = d.trim(), b = y.length > 0 && !isSettingsFormOptionQueryTooLarge(y), S = filterTerminalThemeOptions(u, d), C = u.find((e) => e.value === l)?.label ?? l, w = [{
		label: translate("auto.components.settings.SettingsFormControls.builtin_themes", "Built-in"),
		themes: S.filter((e) => e.group === "built-in").slice(0, 80)
	}, {
		label: translate("auto.components.settings.SettingsFormControls.imported_themes", "Imported"),
		themes: S.filter((e) => e.group === "imported").slice(0, 80)
	}].filter((e) => e.themes.length > 0), T = w.reduce((e, o) => e + o.themes.length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: e }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: o
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: d,
				onChange: (e) => f(e.target.value),
				placeholder: translate("auto.components.settings.SettingsFormControls.search_terminal_themes", "Search terminal themes")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/50 px-3 py-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						translate("auto.components.settings.SettingsFormControls.fbb428db98", "Selected:"),
						" ",
						C
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						translate("auto.components.settings.SettingsFormControls.4e11f87ca6", "Showing"),
						" ",
						T,
						b ? translate("auto.components.settings.SettingsFormControls.c822571b2e", " matching \"{{value0}}\"", { value0: y }) : translate("auto.components.settings.SettingsFormControls.cb330ef7f8", " of {{value0}}", { value0: u.length })
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 p-2",
						children: [w.map((e) => {
							let o = e.label === translate("auto.components.settings.SettingsFormControls.imported_themes", "Imported");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								ref: o ? h : void 0,
								className: cn("space-y-1 rounded-md transition-colors duration-500", o && g && "bg-accent/40 ring-1 ring-accent"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-foreground",
									children: e.label
								}), e.themes.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => p(e.value),
									className: cn("flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors", l === e.value ? "bg-accent font-medium text-accent-foreground" : "hover:bg-accent"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate",
												children: e.label
											}), e.sourceLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block truncate text-[11px] font-normal text-muted-foreground",
												children: [translate("auto.components.settings.SettingsFormControls.imported_from", "Imported from {{value0}}", { value0: e.sourceLabel }), e.mode && e.mode !== "unknown" ? ` · ${e.mode}` : ""]
											}) : null]
										}),
										e.group === "imported" && e.previewTheme && l !== e.value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex shrink-0 overflow-hidden rounded-sm border border-border/60",
											children: [
												e.previewTheme.black,
												e.previewTheme.red,
												e.previewTheme.green,
												e.previewTheme.yellow,
												e.previewTheme.blue,
												e.previewTheme.magenta,
												e.previewTheme.cyan,
												e.previewTheme.white
											].map((e, o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "h-3 w-2",
												style: { backgroundColor: e ?? "transparent" }
											}, o))
										}) : null,
										l === e.value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-3 shrink-0 text-[11px] uppercase tracking-[0.16em]",
											children: translate("auto.components.settings.SettingsFormControls.9119fb2268", "Current")
										}) : null
									]
								}, e.value))]
							}, e.label);
						}), T === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 py-6 text-sm text-muted-foreground",
							children: translate("auto.components.settings.SettingsFormControls.ceefb9d7f1", "No themes found.")
						}) : null]
					})
				})]
			})
		]
	});
}
function SettingsSwitch({ checked: e, onChange: o, ariaLabel: s, ariaLabelledBy: c, disabled: l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
		checked: e,
		"aria-label": s,
		"aria-labelledby": c,
		disabled: l,
		onCheckedChange: o
	});
}
function SettingsRow({ label: e, description: o, control: s, className: l, labelId: u, alignTop: d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex gap-4", o ? "py-3" : "py-2", d ? "items-start" : "items-center justify-between", l),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("min-w-0 flex-1", o ? "space-y-1" : "space-y-0.5"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				id: u,
				className: "select-text",
				children: e
			}), o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "select-text text-xs text-muted-foreground",
				children: o
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0",
			children: s
		})]
	});
}
function SettingsSwitchRow({ label: e, description: o, checked: s, onChange: c, className: l, ariaLabel: u, disabled: d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsRow, {
		label: e,
		description: o,
		className: l,
		control: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSwitch, {
			checked: s,
			onChange: c,
			disabled: d,
			ariaLabel: u ?? (typeof e == "string" ? e : void 0)
		})
	});
}
function SettingsSegmentedControl({ value: e, onChange: o, options: s, ariaLabel: l, size: u = "md", equalWidth: d = !1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": l,
		className: cn("inline-flex items-center rounded-md border border-border bg-background/50 p-0.5", d && "w-full"),
		children: s.map((s) => {
			let l = s.value === e, f = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": l,
				"aria-label": s.ariaLabel,
				"aria-disabled": s.disabled,
				onClick: () => {
					s.disabled || o(s.value);
				},
				className: cn("rounded-sm text-center outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50", u === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm", d && "flex-1", l ? "bg-accent font-medium text-accent-foreground" : s.disabled ? "cursor-not-allowed text-muted-foreground/50" : "text-muted-foreground hover:text-foreground"),
				children: s.label
			}, String(s.value));
			return s.tooltip == null ? f : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: f
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: s.tooltip })] }, String(s.value));
		})
	});
}
function SettingsBadge({ tone: e = "neutral", children: o, className: s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[10px] font-medium", e === "accent" ? "border-foreground/20 bg-foreground/10 text-foreground" : e === "muted" ? "border-border/40 bg-muted/30 text-muted-foreground" : "border-border/50 bg-background/50 text-foreground/80", s),
		children: o
	});
}
function SettingsSubsectionHeader({ title: e, description: o, action: s, className: l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-start justify-between gap-3", l),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold",
				children: e
			}), o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: o
			}) : null]
		}), s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0",
			children: s
		}) : null]
	});
}
function ColorField({ label: e, description: o, value: s, fallback: c, onChange: l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsRow, {
		label: e,
		description: o,
		control: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "color",
				value: normalizeColor(s, c),
				onChange: (e) => l(e.target.value),
				className: "h-8 w-10 rounded-md border border-input bg-transparent p-1"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: s,
				onChange: (e) => l(e.target.value),
				placeholder: c,
				className: "w-32 text-xs"
			})]
		})
	});
}
function NumberField({ label: e, description: o, value: c, defaultValue: l, min: u, max: d, step: f = 1, integer: p = !1, onChange: m, onClear: h, placeholder: g, suffix: _, className: v }) {
	let [y, b] = (0, import_react.useState)(Number.isFinite(c) ? String(c) : ""), [x, S] = (0, import_react.useState)(c);
	c !== x && (S(c), b(Number.isFinite(c) ? String(c) : ""));
	let C = () => {
		let e = y.trim();
		if (e === "") {
			if (h) {
				h();
				return;
			}
			b(Number.isFinite(c) ? String(c) : "");
			return;
		}
		let o = Number(e);
		if (Number.isFinite(o) && (!p || Number.isSafeInteger(o))) {
			let e = d === void 0 ? Math.max(u, o) : Math.min(d, Math.max(u, o));
			m(e), b(String(e));
		} else b(Number.isFinite(c) ? String(c) : "");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsRow, {
		className: v,
		label: e,
		description: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [o, l === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "ml-1 text-muted-foreground/70",
			children: [
				translate("auto.components.settings.SettingsFormControls.b661b034ec", "· Default:"),
				" ",
				l
			]
		})] }),
		control: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "number",
				min: u,
				max: d,
				step: f,
				"aria-label": e,
				placeholder: g,
				value: y,
				onChange: (e) => b(e.target.value),
				onBlur: C,
				onKeyDown: (e) => {
					e.key === "Enter" && C();
				},
				className: "number-input-clean w-24 tabular-nums"
			}), _ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 text-xs text-muted-foreground",
				children: _
			}) : null]
		})
	});
}
export { SettingsSegmentedControl as a, SettingsSwitchRow as c, SCROLLBACK_PRESETS_ROWS as d, getFallbackTerminalFonts as f, FontAutocomplete as h, SettingsRow as i, ThemePicker as l, zoomLevelToPercent as m, NumberField as n, SettingsSubsectionHeader as o, mergeFontSuggestions as p, SettingsBadge as r, SettingsSwitch as s, ColorField as t, DEFAULT_REPO_HOOK_SETTINGS as u };
