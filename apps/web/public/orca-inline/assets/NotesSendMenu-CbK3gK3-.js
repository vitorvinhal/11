import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Send } from "./send-CdtXXwAK.js";
import { t as Sparkles } from "./sparkles-CNzWYcyb.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { a as DropdownMenuLabel, d as DropdownMenuSub, f as DropdownMenuSubContent, m as DropdownMenuTrigger, p as DropdownMenuSubTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DRu_J4_e.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as ReviewNotesSendMenuContent } from "./ReviewNotesSendMenuContent-BXrHTRy4.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), ENABLED_SEND_TOOLTIP = "Send notes to an agent";
function buildNotesSendTargetModeId(e) {
	return `note-send:${e.map((e) => `${e.length}:${e}`).join("|")}`;
}
function NotesSendMenu({ worktreeId: e, groupId: S, modeIdParts: w, scopes: T, defaultScopeId: E, source: D = "diff-notes", targetModeLabel: O, triggerClassName: k, triggerLabel: A, triggerCount: j, actionLabel: M, disabledTooltip: N = "All notes sent", iconClassName: P = "size-3.5", align: F = "end", openRequestNonce: I = null, openRequestExpiresAt: L = null, onOpenRequestHandled: R, onDelivered: z }) {
	let B = useAppStore((e) => e.openAgentSendPopoverTargetMode), V = useAppStore((e) => e.closeAgentSendPopoverTargetMode), H = useAppStore((e) => e.agentSendPopoverTargetMode?.id ?? null), [U, W] = (0, import_react.useState)(!1), G = (0, import_react.useMemo)(() => buildNotesSendTargetModeId(w), [w]), K = (0, import_react.useMemo)(() => T.filter((e) => e.notes.length > 0), [T]), q = (0, import_react.useMemo)(() => K.find((e) => e.id === E) ?? K[0] ?? null, [E, K]), J = K.length > 0, Y = (0, import_react.useCallback)((e) => {
		z(e);
	}, [z]), X = (0, import_react.useCallback)((S) => {
		S.notes.length !== 0 && B({
			id: G,
			worktreeId: e,
			source: D,
			prompt: S.prompt,
			label: O ?? S.label,
			launchSource: "notes_send",
			onPromptDelivered: () => Y(S.notes)
		});
	}, [
		Y,
		B,
		D,
		G,
		O,
		e
	]), Z = (0, import_react.useCallback)((e) => {
		W(e), e ? q && X(q) : V(G);
	}, [
		V,
		q,
		X,
		G
	]), Q = U && H === G;
	return U && H !== G && W(!1), (0, import_react.useEffect)(() => () => {
		V(G);
	}, [V, G]), (0, import_react.useEffect)(() => {
		I != null && (!(L != null && Date.now() >= L) && J && q && Z(!0), R?.());
	}, [
		I,
		L,
		J,
		q,
		Z,
		R
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		modal: !1,
		open: Q,
		onOpenChange: Z,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: cn("inline-flex items-center justify-center rounded text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-muted-foreground", k),
					disabled: !J,
					title: J ? ENABLED_SEND_TOOLTIP : N,
					"aria-label": A ? translate("auto.components.editor.NotesSendMenu.433928cd9f", "Send {{value0}} to an agent", { value0: A }) : ENABLED_SEND_TOOLTIP,
					onMouseDown: (e) => e.stopPropagation(),
					onClick: (e) => e.stopPropagation(),
					children: [
						A ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-violet-500 dark:text-violet-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "whitespace-nowrap",
								children: A
							}),
							j === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-background/80 px-1 text-[10px] tabular-nums text-muted-foreground",
								children: j
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-0.5 h-3 w-px bg-border/70",
								"aria-hidden": !0
							})
						] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: P }),
						M ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap",
							children: M
						}) : null
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: "bottom",
			sideOffset: 6,
			children: J ? ENABLED_SEND_TOOLTIP : N
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
			align: F,
			className: "min-w-[220px]",
			onInteractOutside: preventAgentSendTargetOutsideDismiss,
			onPointerDownOutside: preventAgentSendTargetOutsideDismiss,
			children: T.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: translate("auto.components.editor.NotesSendMenu.44dc5e60a6", "Send notes") }), T.map((C) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubTrigger, {
				disabled: C.notes.length === 0,
				className: "[&>svg:last-child]:ml-0",
				onPointerEnter: () => X(C),
				onFocus: () => X(C),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteScopeMenuRow, {
					label: C.label,
					count: C.notes.length
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubContent, {
				className: "min-w-[180px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewNotesSendMenuContent, {
					worktreeId: e,
					groupId: S,
					prompt: C.prompt,
					promptDelivery: "submit-after-ready",
					launchSource: "notes_send",
					onPromptDelivered: () => Y(C.notes)
				})
			})] }, C.id))] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewNotesSendMenuContent, {
				worktreeId: e,
				groupId: S,
				prompt: q?.prompt ?? "",
				promptDelivery: "submit-after-ready",
				launchSource: "notes_send",
				onPromptDelivered: () => {
					q && Y(q.notes);
				}
			})
		})]
	});
}
function preventAgentSendTargetOutsideDismiss(e) {
	let S = e.detail.originalEvent.target;
	S instanceof Element && S.closest("[data-agent-send-target=\"eligible\"], [data-agent-send-target=\"disabled\"], [data-agent-send-target=\"sending\"]") && e.preventDefault();
}
function NoteScopeMenuRow({ label: e, count: S }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: e
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] tabular-nums text-muted-foreground",
			children: S
		})]
	});
}
export { NotesSendMenu as t };
