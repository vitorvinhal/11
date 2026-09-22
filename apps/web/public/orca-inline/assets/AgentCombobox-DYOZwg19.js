import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ArrowRight } from "./arrow-right-DHTXzy8t.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronsUpDown } from "./chevrons-up-down-d3SoqcUm.js";
import { t as Star } from "./star-BB5Azwdt.js";
import { t as Terminal } from "./terminal-DVHlU3bc.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { f as ContextMenuTrigger, n as ContextMenuContent, r as ContextMenuItem, t as ContextMenu } from "./context-menu-WDfkgXiK.js";
import { a as PopoverTrigger, i as PopoverContent, t as Popover } from "./popover-DHL-338i.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { t as AgentIcon } from "./agent-catalog-Cgr0_vcs.js";
import { a as CommandInput, o as CommandItem, r as CommandEmpty, s as CommandList, t as Command } from "./command-QScw0gM9.js";
var NO_MATCH = Infinity;
function isAgentPickerQueryTooLarge(e, h = 2048) {
	return isClipboardTextByteLengthOverLimit(e, h);
}
function getAgentPickerCommandValue({ blankValue: e, blankMatchesQuery: h, currentValue: g, filteredAgents: _, rawQuery: v }) {
	let y = getAgentPickerSearchQuery(v);
	return y === null ? "" : y ? h ? e : _[0]?.id ?? "" : g ?? e;
}
function searchAgentPickerEntries(e, h) {
	let g = getAgentPickerSearchQuery(h);
	if (g === null) return [];
	if (!g) return [...e];
	let _ = [];
	return e.forEach((e, h) => {
		let v = scoreAgent(e, g);
		v !== NO_MATCH && _.push({
			agent: e,
			score: v,
			index: h
		});
	}), _.sort((e, h) => e.score - h.score || e.index - h.index), _.map((e) => e.agent);
}
function agentPickerBlankTerminalMatches(e) {
	let h = getAgentPickerSearchQuery(e);
	return h === null ? !1 : h ? scoreCandidate(h, "Blank Terminal", 0) !== NO_MATCH || scoreCandidate(h, "terminal", 0) !== NO_MATCH || scoreCandidate(h, "shell", 0) !== NO_MATCH : !0;
}
function scoreAgent(e, h) {
	return Math.min(scoreCandidate(h, e.label, 0), scoreCandidate(h, e.id, 600), scoreCandidate(h, e.cmd, 650), ...(e.searchAliases ?? []).map((e) => scoreCandidate(h, e, 650)));
}
function scoreCandidate(e, h, g) {
	let _ = normalizeSearchText(h);
	if (!_) return NO_MATCH;
	if (_ === e) return g;
	if (_.startsWith(e)) return g + 10;
	let v = _.indexOf(e);
	if (v !== -1) return g + 100 + v;
	let y = scoreAcronymQuery(e, h);
	if (y !== NO_MATCH) return g + 220 + y;
	let b = scoreFuzzyQuery(e, _);
	return b === NO_MATCH ? NO_MATCH : g + 400 + b;
}
function scoreAcronymQuery(e, h) {
	let g = buildAcronym(h);
	return g ? g === e ? 0 : g.startsWith(e) ? 10 : scoreFuzzyQuery(e, g) : NO_MATCH;
}
function buildAcronym(e) {
	let h = [], g = "";
	for (let _ of e) {
		if (!/[a-z0-9]/i.test(_)) {
			g = _;
			continue;
		}
		(h.length === 0 || !/[a-z0-9]/i.test(g) || /[a-z]/.test(g) && /[A-Z]/.test(_)) && h.push(_.toLowerCase()), g = _;
	}
	return h.join("");
}
function scoreFuzzyQuery(e, h) {
	let g = 0, _ = 0, v = -1;
	for (let y = 0; y < h.length && g < e.length; y++) {
		if (h[y] !== e[g]) continue;
		let b = v === -1 ? y : y - v - 1;
		_ += b, isBoundary(h, y) && (_ -= 4), v = y, g++;
	}
	return g < e.length ? NO_MATCH : _;
}
function isBoundary(e, h) {
	return h === 0 ? !0 : e[h - 1] === " " || e[h - 1] === "-" || e[h - 1] === "_";
}
function normalizeSearchText(e) {
	let h = "", g = !1;
	for (let _ = 0; _ < e.length; _ += 1) {
		if (isAgentPickerWhitespace(e.charCodeAt(_))) {
			g = h.length > 0;
			continue;
		}
		g &&= (h += " ", !1), h += e.charAt(_).toLowerCase();
	}
	return h;
}
function getAgentPickerSearchQuery(e) {
	return isAgentPickerQueryTooLarge(e) ? null : normalizeSearchText(e);
}
function isAgentPickerWhitespace(e) {
	return e === 32 || e >= 9 && e <= 13 || e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function createAgentComboboxCommandState(e) {
	return {
		commandValue: e,
		activeCommandValue: e
	};
}
function resolveAgentComboboxCommandState(e, h, g) {
	return !h || e.activeCommandValue === g ? e : {
		commandValue: g,
		activeCommandValue: g
	};
}
function updateAgentComboboxCommandValue(e, h) {
	return e.commandValue === h ? e : {
		...e,
		commandValue: h
	};
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), BLANK_VALUE = "__none__", TRIGGER_MIN_WIDTH_CLASS = "!min-w-[260px]";
function AgentIconLabel({ icon: e, label: h }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex min-w-0 flex-1 items-center gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex size-3.5 shrink-0 items-center justify-center [&_img]:size-3.5 [&_svg]:size-3.5!",
			children: e
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate leading-none",
			children: h
		})]
	});
}
function AgentDefaultContextMenu({ children: e, isDefault: h, onSetDefault: _ }) {
	return _ ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuTrigger, {
		asChild: !0,
		children: e
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuContent, {
		className: "z-[70]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenuItem, {
			onSelect: _,
			disabled: h,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5" }), h ? translate("auto.components.agent.AgentCombobox.1b0d6965fa", "Current default") : translate("auto.components.agent.AgentCombobox.9c6b59fe58", "Set as default")]
		})
	})] }) : e;
}
function renderItem({ key: e, itemValue: h, isChecked: g, isDefault: _, onSelect: y, onSetDefault: x, icon: S, label: C }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentDefaultContextMenu, {
		isDefault: _,
		onSetDefault: x,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
			value: h,
			onSelect: y,
			className: "items-center gap-2 px-3 py-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-4 shrink-0 text-foreground", g ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIconLabel, {
				icon: S,
				label: C
			})]
		}, e)
	}, e);
}
function AgentCombobox({ agents: e, value: h, onValueChange: b, onValueSelected: S, onOpenManageAgents: w, defaultAgent: T, onSetDefault: E, triggerClassName: D, onTriggerEnter: O, allowNarrowTrigger: k = !1, allowBlankTerminal: A = !0, emptyLabel: j }) {
	let [M, N] = (0, import_react.useState)(!1), [P, F] = (0, import_react.useState)(""), [I, L] = (0, import_react.useState)(() => createAgentComboboxCommandState("")), R = import_react.useRef(null), z = import_react.useRef(null), B = import_react.useRef(null), V = (0, import_react.useMemo)(() => h ? e.find((e) => e.id === h) ?? null : null, [e, h]), H = h ?? (A ? "blank" : null), U = (0, import_react.useMemo)(() => searchAgentPickerEntries(e, P), [e, P]), W = (0, import_react.useMemo)(() => A && agentPickerBlankTerminalMatches(P), [A, P]), G = resolveAgentComboboxCommandState(I, M, getAgentPickerCommandValue({
		blankValue: BLANK_VALUE,
		blankMatchesQuery: W,
		currentValue: h,
		filteredAgents: U,
		rawQuery: P
	}));
	G !== I && L(G);
	let K = G.commandValue, q = (0, import_react.useCallback)(() => {
		B.current !== null && (cancelAnimationFrame(B.current), B.current = null);
	}, []), J = (0, import_react.useCallback)((e) => {
		e === null && q(), z.current = e;
	}, [q]), Y = (0, import_react.useCallback)((e) => {
		L((h) => updateAgentComboboxCommandValue(h, e));
	}, []), X = (0, import_react.useCallback)(() => {
		q(), B.current = requestAnimationFrame(() => {
			B.current = null;
			let e = z.current;
			if (!e) return;
			e.focus();
			let h = e.value.length;
			e.setSelectionRange(h, h);
		});
	}, [q]), Z = (0, import_react.useCallback)((e) => {
		if (N(e), e) {
			L(createAgentComboboxCommandState(h ?? BLANK_VALUE));
			return;
		}
		q(), F("");
	}, [q, h]), Q = (0, import_react.useCallback)((e) => {
		b(e), N(!1), F(""), S?.(e);
	}, [b, S]), $ = (0, import_react.useCallback)((e) => {
		if (!M) {
			if (e.key === "Enter" && O && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
				e.preventDefault(), O();
				return;
			}
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault(), L(createAgentComboboxCommandState(h ?? BLANK_VALUE)), N(!0);
				return;
			}
			e.metaKey || e.ctrlKey || e.altKey || e.key.length === 1 && /\S/.test(e.key) && (e.preventDefault(), L(createAgentComboboxCommandState(h ?? BLANK_VALUE)), F(e.key), N(!0));
		}
	}, [
		M,
		O,
		h
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-w-0 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
			open: M,
			onOpenChange: Z,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentDefaultContextMenu, {
				isDefault: H !== null && T === H,
				onSetDefault: E && H !== null ? () => E(H) : void 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						ref: R,
						type: "button",
						variant: "outline",
						role: "combobox",
						"aria-expanded": M,
						onKeyDown: $,
						className: cn("h-8 justify-between px-3 py-0 text-xs font-normal", D, !k && TRIGGER_MIN_WIDTH_CLASS),
						"data-agent-combobox-root": "true",
						children: [V ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIconLabel, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
								agent: V.id,
								size: 14
							}),
							label: V.label
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIconLabel, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3.5" }),
							label: j ?? translate("auto.components.agent.AgentCombobox.986f946354", "Blank Terminal")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "size-3.5 shrink-0 opacity-50" })]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
				align: "start",
				className: cn("w-[var(--radix-popover-trigger-width)] p-0", !k && "min-w-[18rem]"),
				"data-agent-combobox-root": "true",
				onOpenAutoFocus: (e) => {
					e.preventDefault(), X();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command, {
					shouldFilter: !1,
					value: K,
					onValueChange: Y,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, {
							ref: J,
							placeholder: translate("auto.components.agent.AgentCombobox.48c6a5a9b4", "Search agents..."),
							value: P,
							onValueChange: F
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: translate("auto.components.agent.AgentCombobox.579c768bde", "No agents match your search.") }),
							W ? renderItem({
								key: BLANK_VALUE,
								itemValue: BLANK_VALUE,
								isChecked: h === null,
								isDefault: T === "blank",
								onSelect: () => Q(null),
								onSetDefault: E ? () => E("blank") : void 0,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3.5" }),
								label: translate("auto.components.agent.AgentCombobox.986f946354", "Blank Terminal")
							}) : null,
							U.map((e) => renderItem({
								key: e.id,
								itemValue: e.id,
								isChecked: h === e.id,
								isDefault: T === e.id,
								onSelect: () => Q(e.id),
								onSetDefault: E ? () => E(e.id) : void 0,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, { agent: e.id }),
								label: e.label
							}))
						] }),
						w ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								onClick: w,
								onMouseDown: (e) => e.preventDefault(),
								onMouseEnter: () => Y(""),
								className: "h-9 w-full justify-start rounded-none px-3 text-xs font-normal text-muted-foreground",
								children: [translate("auto.components.agent.AgentCombobox.19522e25ee", "Manage agents"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-auto size-3" })]
							})
						}) : null
					]
				})
			})]
		})
	});
}
export { searchAgentPickerEntries as n, AgentCombobox as t };
