import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as Settings } from "./settings-D0EstZRB.js";
import { H as assertClientCreationActionAvailable, Lo as getGroupVisibleTabOrder, Nt as detectLanguage, Tl as focusTerminalTabSurface, _o as ownRetainedString, _s as normalizeTerminalLayoutSnapshot, du as getSyntheticAgentTerminalTitle, fu as getSyntheticAgentTitleProfile, gs as collectLeafIdsInOrder, hb as FLOATING_TERMINAL_WORKTREE_ID, iC as parseExecutionHostId, jt as createUntitledMarkdownFileWithTemplateSelection, nu as classifyTitleActivity, ov as getRepoIdFromWorktreeId, t as useAppStore, vc as TERMINAL_SCROLLBACK_SESSION_BUFFER_BYTE_LIMIT, vl as getConnectionIdFromState, ys as resolveTerminalLayoutActiveLeafId } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Checkbox } from "./checkbox-Daq-_tqE.js";
import { t as Label } from "./label-CA70r2No.js";
import { C as isUtf8ByteLengthWithinLimit, y as clampUtf8TextTail } from "./renderer-app-platform--nJ6HYmL.js";
import { l as matchKeybindingDigitIndex, s as keybindingMatchesAction } from "./keybindings-1v53ESY9.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as Badge } from "./badge-D7sahA2a.js";
import { t as ShortcutKeyCombo } from "./ShortcutKeyCombo-CaaV52rL.js";
import { o as SPLIT_TERMINAL_PANE_EVENT, t as BACKGROUND_MOUNT_TERMINAL_WORKTREE_EVENT } from "./terminal-_vGmMZGb.js";
import { t as getConnectionId } from "./connection-context-2sxF2wah.js";
import { a as isForeignMachineCodexPtyId, c as TOGGLE_FLOATING_TERMINAL_EVENT, r as markRestoredStaleCodexSessionsForRestart } from "./codex-session-restart-CJCGlfm-.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), LinkRoutingPreferenceDialogContext = (0, import_react.createContext)(null);
function displayHostForUrl(c) {
	if (!c) return null;
	try {
		return new URL(c).host;
	} catch {
		return null;
	}
}
function LinkRoutingPreferenceDialogProvider({ children: c }) {
	let L = (0, import_react.useRef)(0), [H, U] = (0, import_react.useState)([]), W = H[0] ?? null, G = (0, import_react.useRef)(W), K = useAppStore((c) => c.setContextualToursBlockingSurfaceVisible), q = (0, import_react.useRef)(W);
	G.current = W, W && (q.current = W);
	let J = W ?? q.current, Y = displayHostForUrl(J?.options.url), X = J?.options.openLinksInAppDefault === !0, Z = navigator.userAgent.includes("Mac") ? ["⇧", "⌘"] : ["Shift", "Ctrl"];
	(0, import_react.useEffect)(() => (K(W !== null), () => K(!1)), [W, K]);
	let Q = (0, import_react.useCallback)((c = {}) => new Promise((R) => {
		let z = {
			id: L.current,
			options: c,
			resolve: R
		};
		L.current += 1, U((c) => [...c, z]);
	}), []);
	(0, import_react.useEffect)(() => {}, [Q]);
	let $ = (0, import_react.useCallback)((c) => {
		let L = G.current;
		L && (L.resolve(c), U((c) => c[0]?.id === L.id ? c.slice(1) : c.filter((c) => c.id !== L.id)));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LinkRoutingPreferenceDialogContext.Provider, {
		value: Q,
		children: [c, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: W !== null,
			onOpenChange: (c) => !c && $(!1),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				showCloseButton: !1,
				overlayClassName: "!z-[140]",
				className: "!z-[150] gap-4 p-0 sm:max-w-[520px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-t-lg border-b border-border bg-muted/30 px-6 pt-5 pb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							className: "gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "bg-background/70 text-muted-foreground",
									children: translate("auto.components.link.routing.preference.dialog.badge", "Terminal link")
								}), J?.options.preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									children: translate("auto.components.link.routing.preference.dialog.preview", "Preview")
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-xl leading-tight",
									children: X ? translate("auto.components.link.routing.preference.dialog.keep.title", "Keep terminal links in Orca's browser?") : translate("auto.components.link.routing.preference.dialog.title", "Open terminal links in Orca's browser?")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
									className: "text-sm leading-relaxed",
									children: X ? translate("auto.components.link.routing.preference.dialog.keep.description", "Or use your system browser by default.") : translate("auto.components.link.routing.preference.dialog.description", "Use Orca's browser for terminal links, or keep your system browser.")
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 px-6",
						children: [Y ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.link.routing.preference.dialog.link.label", "Link") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-border bg-muted/30 px-2 py-1 font-mono",
								children: Y
							})]
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 rounded-lg border border-border bg-muted/20 p-3 text-xs leading-relaxed text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: translate("auto.components.link.routing.preference.dialog.orca.note", "Orca can use imported cookies for logged-in sites.") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: translate("auto.components.link.routing.preference.dialog.settings.note", "Change this later in Settings → Browser.") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex flex-wrap items-center gap-x-1.5 gap-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.link.routing.preference.dialog.shortcut.note.prefix", "When links open in Orca,") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutKeyCombo, {
												keys: Z,
												keyCapClassName: "min-w-0 px-1 py-0 text-[10px] shadow-none",
												separatorClassName: "text-[10px] text-muted-foreground"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.link.routing.preference.dialog.shortcut.note.suffix", "click opens system browser once.") })
										]
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "border-t border-border bg-muted/20 px-6 py-4 sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => $(!1),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" }), translate("auto.components.link.routing.preference.dialog.system.button", "Use system browser")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							autoFocus: !0,
							onClick: () => $(!0),
							children: X ? translate("auto.components.link.routing.preference.dialog.keep.orca.button", "Keep Orca") : translate("auto.components.link.routing.preference.dialog.orca.button", "Open in Orca")
						})]
					})
				]
			})
		})]
	});
}
function useLinkRoutingPreferenceDialog() {
	let c = (0, import_react.useContext)(LinkRoutingPreferenceDialogContext);
	if (!c) throw Error("useLinkRoutingPreferenceDialog must be used inside LinkRoutingPreferenceDialogProvider");
	return c;
}
function CloseTerminalDialog({ open: c, copyKind: L = "command", tabLabel: R, subjectKey: z, onCancel: B, onConfirm: V }) {
	let H = (0, import_react.useId)(), [U, W] = (0, import_react.useState)(!1), [G, K] = (0, import_react.useState)(c), [q, J] = (0, import_react.useState)(z);
	c !== G && (K(c), c && W(!1)), z !== q && (J(z), z !== void 0 && W(!1));
	let Y = L === "agent", X = R?.trim();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: c,
		onOpenChange: (c) => {
			c || B();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-w-sm",
			showCloseButton: !1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseTerminalDialogBody, {
				isAgent: Y,
				trimmedTabLabel: X,
				checkboxId: H,
				dontAskAgain: U,
				setDontAskAgain: W,
				onCancel: B,
				onConfirm: V
			})
		})
	});
}
function CloseTerminalDialogBody({ isAgent: c, trimmedTabLabel: L, checkboxId: B, dontAskAgain: V, setDontAskAgain: H, onCancel: U, onConfirm: W }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
			className: "text-sm",
			children: c ? translate("auto.components.terminal.pane.CloseTerminalDialog.stop_agent_title", "Stop this agent?") : translate("auto.components.terminal.pane.CloseTerminalDialog.stop_command_title", "Stop running command?")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
			className: "text-xs",
			children: c ? translate("auto.components.terminal.pane.CloseTerminalDialog.stop_agent_description", "Closing this terminal will stop the agent's current work.") : translate("auto.components.terminal.pane.CloseTerminalDialog.stop_command_description", "Closing this terminal will stop the command running inside it.")
		})] }),
		c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: translate("auto.components.terminal.pane.CloseTerminalDialog.automatic_resume_warning", "This terminal will not resume automatically. Cancel and put the workspace to sleep to resume it later.")
		}) : null,
		L ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "truncate text-xs font-medium text-foreground",
			title: L,
			children: L
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
				id: B,
				checked: V,
				onCheckedChange: (c) => H(c === !0)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: B,
				className: "text-xs font-normal text-muted-foreground",
				children: translate("auto.components.terminal.pane.CloseTerminalDialog.dont_ask_again", "Don't ask again for running terminals")
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
			className: "gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				onClick: U,
				children: translate("auto.components.terminal.pane.CloseTerminalDialog.1d1a7a9c1f", "Cancel")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "destructive",
				size: "sm",
				autoFocus: !0,
				onClick: () => W(V),
				children: c ? translate("auto.components.terminal.pane.CloseTerminalDialog.stop_agent_confirm", "Stop Agent") : translate("auto.components.terminal.pane.CloseTerminalDialog.stop_command_confirm", "Stop and Close")
			})]
		})
	] });
}
var driverByPtyId = /* @__PURE__ */ new Map(), changeListeners = /* @__PURE__ */ new Set();
function onDriverChange(c) {
	return changeListeners.add(c), () => changeListeners.delete(c);
}
function notifyChange(c) {
	for (let L of changeListeners) L(c);
}
function setDriverForPty(c, L) {
	L.kind === "idle" ? driverByPtyId.delete(c) : driverByPtyId.set(c, L), notifyChange({
		ptyId: c,
		driver: L
	});
}
function replaceDriverPtyId(c, L) {
	let R = driverByPtyId.get(c);
	R && (driverByPtyId.has(L) || setDriverForPty(L, R), setDriverForPty(c, { kind: "idle" }));
}
function getDriverForPty(c) {
	return driverByPtyId.get(c) ?? { kind: "idle" };
}
function getAllDrivers() {
	return new Map(driverByPtyId);
}
function isPtyLocked(c) {
	return driverByPtyId.get(c)?.kind === "mobile";
}
function hydrateDrivers(c) {
	let L = new Set(driverByPtyId.keys());
	driverByPtyId.clear();
	for (let { ptyId: R, driver: z } of c) L.add(R), z.kind !== "idle" && driverByPtyId.set(R, z);
	for (let c of L) notifyChange({
		ptyId: c,
		driver: getDriverForPty(c)
	});
}
function getActiveEntityIdForTabType(c, L, R, z, B = null) {
	return c === "editor" ? R : c === "browser" ? z : c === "agent-session" ? B : L;
}
function getNextTabAcrossAllTypes({ tabs: c, activeTabType: L, activeTabId: R, activeFileId: z, activeBrowserTabId: B, activeGroupTabId: V, direction: H }) {
	if (c.length <= 1) return null;
	let U = V && c.some((c) => c.tabId === V) ? V : null, W = getActiveEntityIdForTabType(L, R, z, B), G = U ? c.findIndex((c) => c.tabId === U) : c.findIndex((c) => c.type === L && c.id === W);
	return G === -1 ? H < 0 ? c.at(-1) : c.at(0) : c[(G + H + c.length) % c.length];
}
function getNextTabWithinActiveType({ tabs: c, activeTabType: L, activeTabId: R, activeFileId: z, activeBrowserTabId: B, activeGroupTabId: V, direction: H }) {
	let U = c.filter((c) => c.type === L);
	if (U.length <= 1) return null;
	let W = V && U.some((c) => c.tabId === V) ? V : null, G = getActiveEntityIdForTabType(L, R, z, B), K = W ? U.findIndex((c) => c.tabId === W) : U.findIndex((c) => c.id === G);
	return K === -1 ? H < 0 ? U.at(-1) : U.at(0) : U[(K + H + U.length) % U.length];
}
const ZOOM_LEVEL_CHANGED_EVENT = "orca:zoom-level-changed";
function dispatchZoomLevelChanged(c, L) {
	window.dispatchEvent(new CustomEvent(ZOOM_LEVEL_CHANGED_EVENT, { detail: {
		type: c,
		percent: L
	} }));
}
var pendingMounts = /* @__PURE__ */ new Map(), requestListeners = /* @__PURE__ */ new Set(), hasRequestedMount = !1;
function mergePendingMount(c) {
	let L = pendingMounts.get(c.worktreeId);
	if (!L) {
		pendingMounts.set(c.worktreeId, {
			worktreeId: c.worktreeId,
			...c.tabIds === void 0 ? {} : { tabIds: [...new Set(c.tabIds)] }
		});
		return;
	}
	if (L.tabIds === void 0 || c.tabIds === void 0) {
		pendingMounts.set(c.worktreeId, { worktreeId: c.worktreeId });
		return;
	}
	pendingMounts.set(c.worktreeId, {
		worktreeId: c.worktreeId,
		tabIds: [...new Set([...L.tabIds, ...c.tabIds])]
	});
}
function requestBackgroundTerminalWorktreeMount(c) {
	if (c.worktreeId) {
		if (mergePendingMount(c), !hasRequestedMount) {
			hasRequestedMount = !0;
			for (let c of requestListeners) c();
		}
		typeof window < "u" && window.dispatchEvent(new CustomEvent(BACKGROUND_MOUNT_TERMINAL_WORKTREE_EVENT, { detail: c }));
	}
}
function takePendingBackgroundTerminalWorktreeMount(c) {
	if (!c) return null;
	let L = pendingMounts.get(c) ?? null;
	return pendingMounts.delete(c), L;
}
function takeAllPendingBackgroundTerminalWorktreeMounts() {
	let c = [...pendingMounts.values()];
	return pendingMounts.clear(), c;
}
function subscribeBackgroundTerminalWorktreeMountRequests(c) {
	return requestListeners.add(c), () => requestListeners.delete(c);
}
function hasRequestedBackgroundTerminalWorktreeMount() {
	return hasRequestedMount;
}
function addBackgroundMountedTerminalWorktree(c, L, R) {
	return !L || c.has(L) ? !1 : (c.add(L), R(), !0);
}
function applyBackgroundMountTabRestriction(c, L, R, z) {
	if (!R) return;
	let B = c.get(R);
	if (!(L.has(R) && !B)) {
		if (!z) {
			c.delete(R);
			return;
		}
		B && z.every((c) => B.has(c)) || c.set(R, new Set([...B ?? [], ...z]));
	}
}
function shouldMountBackgroundWorktreeTab(c, L) {
	return c === null || c.has(L);
}
function canMountTerminalWorkspaceForStartup(c) {
	return c.workspaceSessionReady && (c.hydrationSucceeded || c.startupWorktreeRefreshCompleted);
}
function canDeferColdActivationTabsForHost(c) {
	let L = parseExecutionHostId(c.executionHostId);
	return L?.kind === "local" ? !0 : L?.kind === "runtime" && c.pairedRuntimeParkingEnvironmentIds?.has(L.environmentId) === !0;
}
function replaceActivationDeferredMountTabs(c, L, R, z) {
	let B = collectDeferredMountTabIds(R, z);
	if (B.size === 0) {
		c.delete(L);
		return;
	}
	let V = c.get(L);
	V?.size === B.size && Array.from(B).every((c) => V.has(c)) || c.set(L, B);
}
function planColdActivationTabDeferral(c) {
	let { restrictions: L, deferredMountTabIdsByWorktree: R, worktreeId: z, allTabIds: B, isTabLive: V, isTabDeferrable: H, immediateTabIds: U } = c, W = L.get(z), G = /* @__PURE__ */ new Set();
	for (let c of B) (V(c, z) || U.has(c) || W?.has(c) || !H(c)) && G.add(c);
	return B.length - G.size <= 0 ? (L.delete(z), R.delete(z), !1) : (L.set(z, G), replaceActivationDeferredMountTabs(R, z, G, B), !0);
}
function revealActivationDeferredTabs(c) {
	let { restrictions: L, deferredMountTabIdsByWorktree: R, worktreeId: z, allTabIds: B, immediateTabIds: V } = c;
	if (!R.has(z)) return;
	let H = L.get(z);
	if (!H) {
		R.delete(z);
		return;
	}
	let U = !1;
	for (let c of V) if (!H.has(c)) {
		U = !0;
		break;
	}
	let W = U ? new Set([...H, ...V]) : H;
	if (B.length > 0 && B.every((c) => W.has(c))) {
		L.delete(z), R.delete(z);
		return;
	}
	U && L.set(z, W), replaceActivationDeferredMountTabs(R, z, W, B);
}
function collectDeferredMountTabIds(c, L) {
	let R = /* @__PURE__ */ new Set();
	if (c === null) return R;
	for (let z of L) c.has(z) || R.add(z);
	return R;
}
function pruneClosedBackgroundMountTabs(c, L, R, z) {
	let B = !1;
	for (let [V, H] of c) {
		let U = new Set((R[V] ?? []).map((c) => c.id)), W = new Set([...H].filter((c) => U.has(c))), G = z?.get(V), K = G ? new Set([...G].filter((c) => U.has(c))) : null;
		if (G !== void 0 && K?.size !== G.size) if (B = !0, K && K.size > 0) z?.set(V, K);
		else {
			z?.delete(V), c.delete(V);
			continue;
		}
		W.size !== H.size && (B = !0, W.size === 0 ? K && K.size > 0 ? c.set(V, W) : (c.delete(V), L.delete(V)) : c.set(V, W));
	}
	return B;
}
function repoNeedsRendererCapturedScrollback(c) {
	if (c.connectionId) return !0;
	let L = parseExecutionHostId(c.executionHostId);
	return L !== null && L.kind !== "local";
}
function shouldPreserveTerminalScrollbackBuffersForRepoMap(c, L) {
	if (c === void 0 || c === "global-floating-terminal") return !1;
	let R = getRepoIdFromWorktreeId(c), z = L.get(R);
	return !!(z && repoNeedsRendererCapturedScrollback(z) || !L.has(R));
}
function shouldPreserveTerminalScrollbackBuffers(c, L) {
	return shouldPreserveTerminalScrollbackBuffersForRepoMap(c, new Map(L.map((c) => [c.id, c])));
}
function capTerminalScrollbackSessionBuffer(c) {
	return isUtf8ByteLengthWithinLimit(c, 524288) ? c : ownRetainedString(clampUtf8TextTail(c, TERMINAL_SCROLLBACK_SESSION_BUFFER_BYTE_LIMIT).text);
}
function capTerminalScrollbackLeafBuffers(c) {
	if (!c) return {
		buffers: void 0,
		changed: !1
	};
	let L = !1, R = {};
	for (let [z, B] of Object.entries(c)) {
		let c = capTerminalScrollbackSessionBuffer(B);
		R[z] = c, L ||= c !== B;
	}
	return {
		buffers: Object.keys(R).length > 0 ? R : void 0,
		changed: L
	};
}
function pruneLocalTerminalScrollbackBuffers(c, L) {
	let R = null, z = null, B = c.tabsByWorktree ?? {}, V = (c) => {
		if (R ??= new Map(L.map((c) => [c.id, c])), !z) {
			z = /* @__PURE__ */ new Map();
			for (let [c, L] of Object.entries(B)) for (let R of L) z.set(R.id, c);
		}
		return shouldPreserveTerminalScrollbackBuffersForRepoMap(z.get(c), R);
	}, H = c.terminalLayoutsByTabId ?? {}, U = null;
	for (let [c, L] of Object.entries(H)) {
		if (!L.buffersByLeafId && !L.scrollbackRefsByLeafId) continue;
		if (V(c)) {
			let R = capTerminalScrollbackLeafBuffers(L.buffersByLeafId);
			R.changed && (U ??= { ...H }, U[c] = {
				...L,
				buffersByLeafId: R.buffers
			});
			continue;
		}
		U ??= { ...H };
		let R = { ...L };
		delete R.buffersByLeafId, delete R.scrollbackRefsByLeafId, U[c] = R;
	}
	let W = c.localOnlyScrollbackByTabId, G = null;
	for (let [c, L] of Object.entries(W ?? {})) {
		let R = V(c) ? capTerminalScrollbackLeafBuffers(L) : {
			buffers: void 0,
			changed: !0
		};
		R.changed && (G ??= { ...W }, R.buffers ? G[c] = R.buffers : delete G[c]);
	}
	return !U && !G ? c : {
		...c,
		...U ? { terminalLayoutsByTabId: U } : {},
		...G ? { localOnlyScrollbackByTabId: G } : {}
	};
}
var parkedTabIdsByWorktreeId = /* @__PURE__ */ new Map();
function recordTerminalTabParkedOnUnresolvedHost(c, L) {
	let R = parkedTabIdsByWorktreeId.get(c) ?? /* @__PURE__ */ new Set();
	R.add(L), parkedTabIdsByWorktreeId.set(c, R);
}
function getTabIdsAwaitingHostHydrationRemount(c) {
	let L = [];
	for (let [R, z] of parkedTabIdsByWorktreeId) {
		if (getConnectionIdFromState(c, R) === void 0) continue;
		let B = c.tabsByWorktree?.[R] ?? [];
		for (let R of z) {
			let z = B.find((c) => c.id === R), V = (c.ptyIdsByTabId?.[R]?.length ?? 0) > 0;
			z && !z.ptyId && !V && L.push(R);
		}
		parkedTabIdsByWorktreeId.delete(R);
	}
	return L;
}
function removeLeafFromTree(c, L) {
	if (c.type === "leaf") return c.leafId === L ? {
		node: null,
		removed: !0
	} : {
		node: c,
		removed: !1
	};
	let R = removeLeafFromTree(c.first, L), z = removeLeafFromTree(c.second, L);
	return !R.removed && !z.removed ? {
		node: c,
		removed: !1
	} : R.node ? z.node ? {
		node: {
			...c,
			first: R.node,
			second: z.node
		},
		removed: !0
	} : {
		node: R.node,
		removed: !0
	} : {
		node: z.node,
		removed: !0
	};
}
function omitLeafRecord(c, L) {
	if (!c || !Object.hasOwn(c, L)) return c;
	let R = { ...c };
	return delete R[L], Object.keys(R).length > 0 ? R : void 0;
}
function singleLeafRecord(c, L) {
	let R = c?.[L];
	return R ? { [L]: R } : void 0;
}
function detachTerminalLayoutLeaf(c, L) {
	let R = normalizeTerminalLayoutSnapshot(c).snapshot;
	if (!R.root) return null;
	let z = collectLeafIdsInOrder(R.root);
	if (!z.includes(L) || z.length <= 1) return null;
	let B = removeLeafFromTree(R.root, L);
	if (!B.removed || !B.node) return null;
	let V = omitLeafRecord(R.ptyIdsByLeafId, L), H = omitLeafRecord(R.buffersByLeafId, L), U = omitLeafRecord(R.scrollbackRefsByLeafId, L), W = omitLeafRecord(R.titlesByLeafId, L), G = {
		root: B.node,
		activeLeafId: resolveTerminalLayoutActiveLeafId({
			root: B.node,
			activeLeafId: R.activeLeafId === L ? null : R.activeLeafId,
			ptyIdsByLeafId: V
		}),
		expandedLeafId: R.expandedLeafId === L ? null : R.expandedLeafId,
		...V ? { ptyIdsByLeafId: V } : {},
		...H ? { buffersByLeafId: H } : {},
		...U ? { scrollbackRefsByLeafId: U } : {},
		...W ? { titlesByLeafId: W } : {}
	}, K = singleLeafRecord(R.ptyIdsByLeafId, L), J = singleLeafRecord(R.buffersByLeafId, L), Y = singleLeafRecord(R.scrollbackRefsByLeafId, L), Z = singleLeafRecord(R.titlesByLeafId, L);
	return {
		sourceLayout: G,
		detachedLayout: {
			root: {
				type: "leaf",
				leafId: L
			},
			activeLeafId: L,
			expandedLeafId: null,
			...K ? { ptyIdsByLeafId: K } : {},
			...J ? { buffersByLeafId: J } : {},
			...Y ? { scrollbackRefsByLeafId: Y } : {},
			...Z ? { titlesByLeafId: Z } : {}
		},
		ptyId: K?.[L] ?? null
	};
}
function resolveAgentStatusTerminalTitle(c, L) {
	let R = getSyntheticAgentTerminalTitle(c.agentType, c.state);
	return R && shouldReplaceCurrentTitle(c, L) ? R : L;
}
function shouldReplaceCurrentTitle(c, L) {
	if (!L?.trim()) return !0;
	let R = classifyTitleActivity(L);
	if (R === "working" || c.state === "done" && R === "permission") return !0;
	let z = getSyntheticAgentTitleProfile(c.agentType);
	return z ? L.trim().toLowerCase() === z.workingLabel.toLowerCase() ? !0 : c.state === "blocked" || c.state === "waiting" : !1;
}
function resolveBrowserWorkspaceOwner(c, L, R) {
	for (let [z, B] of Object.entries(c.browserTabsByWorktree)) if (!(R && z !== R)) {
		for (let R of B) if (R.id === L || (c.browserPagesByWorkspace[R.id] ?? []).some((c) => c.id === L)) return {
			worktreeId: z,
			workspaceId: R.id
		};
	}
	return null;
}
async function createFloatingWorkspaceTerminalTab(c, L) {
	let R = c.activeGroupIdByWorktree[FLOATING_TERMINAL_WORKTREE_ID], z = c.createTab(FLOATING_TERMINAL_WORKTREE_ID, R, L, { activate: !1 });
	return c.activateTab(z.id), focusTerminalTabSurface(z.id), z;
}
async function createFloatingWorkspaceBrowserTab(c) {
	assertClientCreationActionAvailable(c, FLOATING_TERMINAL_WORKTREE_ID, "managed-browser");
	let L = c.activeGroupIdByWorktree[FLOATING_TERMINAL_WORKTREE_ID], z = c.browserDefaultUrl ?? "about:blank";
	return c.createBrowserTab(FLOATING_TERMINAL_WORKTREE_ID, z, {
		title: translate("auto.lib.floating.workspace.tab.creation.f3785eddc2", "New Browser Tab"),
		focusAddressBar: !0,
		targetGroupId: L,
		browserRuntimeEnvironmentId: null
	});
}
async function createFloatingWorkspaceMarkdownTab(c, L) {
	let R = c.activeGroupIdByWorktree[FLOATING_TERMINAL_WORKTREE_ID], z = L ?? await window.api.app.getFloatingMarkdownDirectory();
	if (!z) return;
	let B = await createUntitledMarkdownFileWithTemplateSelection(z, FLOATING_TERMINAL_WORKTREE_ID, getConnectionId("global-floating-terminal") ?? void 0, { activeRuntimeEnvironmentId: null });
	B && c.openFile({
		...B,
		language: detectLanguage(B.relativePath)
	}, {
		preview: !1,
		targetGroupId: R,
		suppressActiveRuntimeFallback: !0
	});
}
var FLOATING_WORKSPACE_SHORTCUT_SURFACE_SELECTOR = "[data-floating-terminal-shortcut-surface]", FLOATING_WORKSPACE_PANEL_SHORTCUT_ACTIONS = [
	"tab.newTerminal",
	"tab.newBrowser",
	"tab.newMarkdown",
	"tab.openMarkdown",
	"tab.close"
];
function isFloatingWorkspacePanelShortcutTarget(c, L = null) {
	return c instanceof HTMLElement ? c === L || c.getAttribute("data-floating-terminal-panel") !== null || c.closest(FLOATING_WORKSPACE_SHORTCUT_SURFACE_SELECTOR) !== null : !1;
}
function matchFloatingWorkspacePanelOwnedAction(c, L, R, z) {
	return FLOATING_WORKSPACE_PANEL_SHORTCUT_ACTIONS.find((B) => keybindingMatchesAction(B, c, L, R, z)) ?? null;
}
function matchFloatingWorkspacePanelShortcut(c, L, R, z, B = z) {
	if (keybindingMatchesAction("tab.rename", c, L, R, B)) return {
		kind: "action",
		action: "tab.rename"
	};
	let V = matchKeybindingDigitIndex("workspace.selectByIndex", c, L, R, z) ?? matchKeybindingDigitIndex("tab.selectByIndex", c, L, R, z);
	return V === null ? keybindingMatchesAction("floatingWorkspace.maximize", c, L, R, B) ? {
		kind: "action",
		action: "floatingWorkspace.maximize"
	} : keybindingMatchesAction("floatingWorkspace.minimize", c, L, R, B) ? {
		kind: "action",
		action: "floatingWorkspace.minimize"
	} : null : {
		kind: "index",
		index: V
	};
}
function matchFloatingWorkspacePanelChord(c, L, R, z, B, V = B) {
	let H = isFloatingWorkspacePanelShortcutTarget(c.target, R) ? matchFloatingWorkspacePanelOwnedAction(c, L, z, B) : null;
	return H ? {
		kind: "action",
		action: H
	} : matchFloatingWorkspacePanelShortcut(c, L, z, B, V);
}
var FLOATING_WORKSPACE_PANEL_SELECTOR = "[data-floating-terminal-panel]", EMPTY_FLOATING_WORKSPACE_PANEL_SELECTOR = "[data-floating-terminal-panel][aria-hidden=\"false\"] [data-floating-terminal-empty-state]";
function getActiveFloatingWorkspaceGroup(c) {
	let L = c.groupsByWorktree["global-floating-terminal"] ?? [], R = c.activeGroupIdByWorktree[FLOATING_TERMINAL_WORKTREE_ID];
	if (R) {
		let c = L.find((c) => c.id === R);
		if (c) return c;
	}
	return L.find((c) => c.activeTabId != null) ?? L[0] ?? null;
}
function getFloatingWorkspaceVisibleTabs(c, L) {
	return getGroupVisibleTabOrder(L, (c.unifiedTabsByWorktree["global-floating-terminal"] ?? []).filter((c) => c.groupId === L.id), new Set((c.tabsByWorktree["global-floating-terminal"] ?? []).map((c) => c.id)), new Set(c.openFiles.filter((c) => c.worktreeId === FLOATING_TERMINAL_WORKTREE_ID).map((c) => c.id)), new Set((c.browserTabsByWorktree["global-floating-terminal"] ?? []).map((c) => c.id)));
}
function countVisibleFloatingWorkspaceItems(c) {
	let L = getActiveFloatingWorkspaceGroup(c);
	return L ? getFloatingWorkspaceVisibleTabs(c, L).length : 0;
}
function getFloatingWorkspaceActiveEntry(c, L) {
	if (L.activeTabId) {
		let R = c.find((c) => c.tabId === L.activeTabId);
		if (R) return R;
	}
	return c[0] ?? null;
}
function getActiveIdsForFloatingEntry(c) {
	return {
		activeBrowserTabId: c.type === "browser" ? c.id : null,
		activeFileId: c.type === "editor" ? c.id : null,
		activeTabId: c.type === "terminal" ? c.id : null,
		activeTabType: c.type
	};
}
function getFloatingWorkspaceBrowserTab(c, L) {
	return (c.browserTabsByWorktree["global-floating-terminal"] ?? []).find((c) => c.id === L) ?? null;
}
function resolveFloatingWorkspaceBrowserWorkspaceId(c, L) {
	return resolveBrowserWorkspaceOwner(c, L, "global-floating-terminal")?.workspaceId ?? null;
}
function activateFloatingWorkspaceCyclableTab(c, L) {
	if (L.tabId && c.activateTab(L.tabId), L.type === "terminal") {
		c.setActiveTab(L.id), focusTerminalTabSurface(L.id);
		return;
	}
	if (L.type === "browser") {
		let R = getFloatingWorkspaceBrowserTab(c, L.id);
		R?.activePageId && typeof window < "u" && window.api?.browser && window.api.browser.notifyActiveTabChanged({ browserPageId: R.activePageId });
	}
}
function getNextFloatingWorkspaceTerminalTab(c, L, R) {
	let z = c.filter((c) => c.type === "terminal");
	if (z.length === 0) return null;
	let B = z.findIndex((c) => c.id === L.id);
	return z.length === 1 && B === 0 && L.type === "terminal" ? null : z[((B === -1 && R > 0 ? -1 : B === -1 ? 0 : B) + R + z.length) % z.length];
}
function isFloatingWorkspacePanelVisible(c = document) {
	return !!c.querySelector("[data-floating-terminal-panel][aria-hidden=\"false\"]");
}
function isEmptyFloatingWorkspacePanelVisible(c = typeof document > "u" ? null : document) {
	return !!c?.querySelector(EMPTY_FLOATING_WORKSPACE_PANEL_SELECTOR);
}
function isFloatingWorkspacePanelFocused(c = typeof document > "u" ? null : document) {
	let L = c?.activeElement;
	return L instanceof HTMLElement && L.closest(FLOATING_WORKSPACE_PANEL_SELECTOR) !== null;
}
function isEventTargetInsideFloatingWorkspacePanel(c) {
	return c instanceof HTMLElement && c.closest(FLOATING_WORKSPACE_PANEL_SELECTOR) !== null;
}
function isFloatingWorkspaceTerminalInputTarget(c) {
	return !(c instanceof HTMLElement) || c.closest(FLOATING_WORKSPACE_PANEL_SELECTOR) === null ? !1 : c.classList?.contains("xterm-helper-textarea") === !0 || c.closest(".xterm") !== null;
}
function shouldMinimizeFloatingWorkspacePanelOnCloseShortcut({ floatingTerminalOpen: c, floatingVisibleTabCount: L }) {
	return c && L === 0;
}
function handleEmptyFloatingWorkspacePanelCloseShortcut(c, L, R) {
	return c.repeat || !isEmptyFloatingWorkspacePanelVisible() || !keybindingMatchesAction("tab.close", c, L, R, { context: "app" }) ? !1 : (c.preventDefault(), c.stopPropagation(), c.stopImmediatePropagation(), window.dispatchEvent(new Event(TOGGLE_FLOATING_TERMINAL_EVENT)), !0);
}
function switchFloatingWorkspaceTab(c, L, R) {
	let z = getActiveFloatingWorkspaceGroup(c);
	if (!z) return !1;
	let B = getFloatingWorkspaceVisibleTabs(c, z);
	if (B.length <= 1) return !1;
	let V = getFloatingWorkspaceActiveEntry(B, z);
	if (!V) return !1;
	let H = z.activeTabId && B.some((c) => c.tabId === z.activeTabId) ? z.activeTabId : null, U = R === "terminal" ? getNextFloatingWorkspaceTerminalTab(B, V, L) : R === "all-types" ? getNextTabAcrossAllTypes({
		tabs: B,
		...getActiveIdsForFloatingEntry(V),
		activeGroupTabId: H,
		direction: L
	}) : getNextTabWithinActiveType({
		tabs: B,
		...getActiveIdsForFloatingEntry(V),
		activeGroupTabId: H,
		direction: L
	});
	return U ? (activateFloatingWorkspaceCyclableTab(c, U), !0) : !1;
}
var persistedAuthorityFlagCache;
function readPersistedSideEffectAuthorityFlagSync() {
	if (persistedAuthorityFlagCache === void 0) try {
		let c = globalThis.window?.api?.settings?.getSync;
		persistedAuthorityFlagCache = typeof c == "function" ? c()?.terminalMainSideEffectAuthority ?? null : null;
	} catch {
		persistedAuthorityFlagCache = null;
	}
	return persistedAuthorityFlagCache;
}
function isMainTerminalSideEffectAuthorityForPty(c) {
	return c.runtimeEnvironmentId === null ? c.settings === null ? readPersistedSideEffectAuthorityFlagSync() !== !1 : c.settings.terminalMainSideEffectAuthority !== !1 : !1;
}
var consumersByPtyId = /* @__PURE__ */ new Map(), channelUnsubscribe = null;
function applyLiveFact(c, L, R) {
	switch (L.kind) {
		case "agent-status":
			c.callbacks.onAgentStatus?.(L.payload);
			return;
		case "title":
			c.lastLiveTitleSeq = R, c.callbacks.onTitleChange?.(L.normalizedTitle, L.rawTitle, L.staleWorkingTitleClear ? { staleWorkingTitleClear: !0 } : void 0);
			return;
		case "bell":
			c.callbacks.onBell?.();
			return;
		case "agent-working":
			c.callbacks.onAgentBecameWorking?.();
			return;
		case "agent-idle":
			c.callbacks.onAgentBecameIdle?.(L.title, L.staleWorkingTitleClear ? { staleWorkingTitleClear: !0 } : void 0);
			return;
		case "agent-exited":
			c.callbacks.onAgentExited?.();
			return;
		case "command-finished":
			c.callbacks.onCommandFinished?.(L.exitCode);
			return;
		case "pr-link":
			c.callbacks.onPrLink?.(L.link);
			return;
		case "command-code-working":
			c.callbacks.onCommandCodeWorking?.(L.prompt);
			return;
		case "command-code-done":
			c.callbacks.onCommandCodeDone?.(L.prompt);
			return;
		case "2031-subscribe":
			c.callbacks.onMode2031Subscribe?.();
			return;
		case "2031-unsubscribe": c.callbacks.onMode2031Unsubscribe?.();
	}
}
function applyBatchToConsumer(c, L) {
	if (L.replay) {
		if (c.lastLiveTitleSeq !== null && L.seq <= c.lastLiveTitleSeq) return;
		for (let R of L.facts) R.kind === "title" && c.callbacks.onTitleChange?.(R.normalizedTitle, R.rawTitle);
		return;
	}
	for (let R of L.facts) applyLiveFact(c, R, L.seq);
}
var HANDOFF_FACT_BUFFER_TTL_MS = 15e3, MAX_HANDOFF_FACT_BATCHES = 64, MAX_HANDOFF_FACT_PTYS = 32, handoffFactBuffersByPtyId = /* @__PURE__ */ new Map();
function deleteHandoffFactBuffer(c) {
	let L = handoffFactBuffersByPtyId.get(c);
	L && (clearTimeout(L.expiryTimer), handoffFactBuffersByPtyId.delete(c));
}
function openHandoffFactBuffer(c) {
	let L = Date.now();
	for (let [c, R] of handoffFactBuffersByPtyId) R.expiresAtMs <= L && deleteHandoffFactBuffer(c);
	if (deleteHandoffFactBuffer(c), handoffFactBuffersByPtyId.size >= MAX_HANDOFF_FACT_PTYS) {
		let c = handoffFactBuffersByPtyId.keys().next().value;
		typeof c == "string" && deleteHandoffFactBuffer(c);
	}
	let R = {
		batches: [],
		expiresAtMs: L + HANDOFF_FACT_BUFFER_TTL_MS,
		expiryTimer: setTimeout(() => {
			handoffFactBuffersByPtyId.get(c) === R && handoffFactBuffersByPtyId.delete(c);
		}, HANDOFF_FACT_BUFFER_TTL_MS)
	};
	R.expiryTimer.unref?.(), handoffFactBuffersByPtyId.set(c, R);
}
function bufferHandoffFactBatch(c) {
	let L = handoffFactBuffersByPtyId.get(c.ptyId);
	if (L) {
		if (L.expiresAtMs <= Date.now()) {
			deleteHandoffFactBuffer(c.ptyId);
			return;
		}
		c.replay || (L.batches.length >= MAX_HANDOFF_FACT_BATCHES && L.batches.shift(), L.batches.push(c));
	}
}
function drainHandoffFactBuffer(c, L) {
	let R = handoffFactBuffersByPtyId.get(c);
	if (R && (deleteHandoffFactBuffer(c), !(R.expiresAtMs <= Date.now()))) for (let c of R.batches) applyBatchToConsumer(L, c);
}
function dispatchTerminalSideEffectBatch(c) {
	let L = consumersByPtyId.get(c.ptyId);
	if (!L) {
		bufferHandoffFactBatch(c);
		return;
	}
	applyBatchToConsumer(L, c);
}
function ensureSideEffectChannelSubscription() {
	if (channelUnsubscribe !== null) return;
	let c = globalThis.window?.api?.pty?.onSideEffect;
	typeof c == "function" && (channelUnsubscribe = c(dispatchTerminalSideEffectBatch));
}
function registerTerminalSideEffectFactConsumer(c) {
	ensureSideEffectChannelSubscription();
	let L = {
		callbacks: c.callbacks,
		lastLiveTitleSeq: null
	};
	if (consumersByPtyId.set(c.ptyId, L), drainHandoffFactBuffer(c.ptyId, L), c.restoreTitleOnRegister) {
		let R = globalThis.window?.api?.pty?.getSideEffectSnapshot;
		typeof R == "function" && R(c.ptyId).then((R) => {
			R && consumersByPtyId.get(c.ptyId) === L && applyBatchToConsumer(L, {
				...R,
				replay: !0
			});
		}).catch(() => {});
	}
	return () => {
		consumersByPtyId.get(c.ptyId) === L && (consumersByPtyId.delete(c.ptyId), openHandoffFactBuffer(c.ptyId));
	};
}
const BACKGROUND_WORKTREE_MEASURE_WINDOW_MS = 3e3;
function scheduleBackgroundTerminalWorktreeMeasure({ mountedWorktreeIds: c, measurableBackgroundWorktreeIds: L, timers: R, worktreeId: z, onRevision: B, setTimeoutFn: V, clearTimeoutFn: H }) {
	let U = addBackgroundMountedTerminalWorktree(c, z, B);
	if (!z) return U;
	L.add(z);
	let W = R.get(z);
	W !== void 0 && H(W);
	let G = V(() => {
		L.delete(z), R.delete(z), B();
	}, BACKGROUND_WORKTREE_MEASURE_WINDOW_MS);
	return R.set(z, G), B(), U;
}
var queuedRequests = [], splitMountLeasesByTarget = /* @__PURE__ */ new Map(), splitMountLeaseListeners = /* @__PURE__ */ new Set(), splitMountLeaseTabIds = /* @__PURE__ */ new Set();
function notifySplitMountLeaseChange() {
	splitMountLeaseTabIds = new Set([...splitMountLeasesByTarget.values()].map((c) => c.tabId));
	for (let c of splitMountLeaseListeners) c();
}
function splitTargetKey(c, L) {
	return `${L ?? ""}\0${c}`;
}
function removeQueuedRequestsForTarget(c, L) {
	for (let R = queuedRequests.length - 1; R >= 0; --R) {
		let z = queuedRequests[R];
		z.tabId === c && (L === void 0 || z.worktreeId === L) && queuedRequests.splice(R, 1);
	}
}
function releaseSplitMountLease(c, L, R) {
	let z = !1;
	for (let [B, V] of splitMountLeasesByTarget) V.tabId !== c || L !== void 0 && V.worktreeId !== L || R !== void 0 && V.token !== R || (clearTimeout(V.timer), splitMountLeasesByTarget.delete(B), z = !0);
	z && notifySplitMountLeaseChange();
}
function evictOldestSplitMountLease() {
	let c = splitMountLeasesByTarget.values().next().value;
	c && (removeQueuedRequestsForTarget(c.tabId, c.worktreeId), releaseSplitMountLease(c.tabId, c.worktreeId));
}
function acquireSplitMountLease(c, L) {
	let R = splitTargetKey(c, L), z = splitMountLeasesByTarget.get(R);
	z ? (clearTimeout(z.timer), splitMountLeasesByTarget.delete(R)) : splitMountLeasesByTarget.size >= 32 && evictOldestSplitMountLease();
	let B = Symbol(c), V = setTimeout(() => {
		removeQueuedRequestsForTarget(c, L), releaseSplitMountLease(c, L, B);
	}, BACKGROUND_WORKTREE_MEASURE_WINDOW_MS);
	splitMountLeasesByTarget.set(R, {
		timer: V,
		token: B,
		tabId: c,
		worktreeId: L
	}), z || notifySplitMountLeaseChange();
}
function queueTerminalPaneSplitRequest(c) {
	if (c.tabId) {
		for (; queuedRequests.length >= 32;) queuedRequests.shift();
		queuedRequests.push(c), acquireSplitMountLease(c.tabId, c.worktreeId);
	}
}
function takeQueuedTerminalPaneSplitRequests(c, L) {
	let R = [];
	for (let z = queuedRequests.length - 1; z >= 0; --z) {
		let B = queuedRequests[z];
		B.tabId !== c || L !== void 0 && B.worktreeId !== void 0 && B.worktreeId !== L || (R.unshift(B), queuedRequests.splice(z, 1));
	}
	return R;
}
function cancelQueuedTerminalPaneSplitRequests(c, L) {
	removeQueuedRequestsForTarget(c, L), releaseSplitMountLease(c, L);
}
function subscribeTerminalPaneSplitMountLeases(c) {
	return splitMountLeaseListeners.add(c), () => splitMountLeaseListeners.delete(c);
}
function getTerminalPaneSplitMountLeaseTabIds() {
	return splitMountLeaseTabIds;
}
function dispatchTerminalPaneSplitRequest(c) {
	window.dispatchEvent(new CustomEvent(SPLIT_TERMINAL_PANE_EVENT, { detail: c }));
}
function registerTerminalPaneSplitRequestHandler(c, L, R) {
	let z = (z) => {
		let B = z.detail;
		B?.tabId === c && (B.worktreeId === void 0 || B.worktreeId === L) && R(B);
	};
	window.addEventListener(SPLIT_TERMINAL_PANE_EVENT, z);
	for (let z of takeQueuedTerminalPaneSplitRequests(c, L)) R(z);
	return () => window.removeEventListener(SPLIT_TERMINAL_PANE_EVENT, z);
}
function resolveTerminalPaneSplitSourceId(c, L) {
	return c.sourceLeafId ? L(c.sourceLeafId) ?? -1 : c.paneRuntimeId;
}
const UNVERIFIED_PROCESS_EXIT_CODE = -1;
function resolveProcessExitCause(c) {
	return c.hostReportsChildExitStatus === !1 ? {
		kind: "unknown",
		reason: "host_status_unavailable"
	} : typeof c.signal == "number" && c.signal > 0 ? {
		kind: "signaled",
		signal: c.signal
	} : c.exitCode < 0 ? {
		kind: "unknown",
		reason: "stop_unverified"
	} : {
		kind: "exited",
		exitCode: c.exitCode
	};
}
function isProvenProcessExit(c) {
	return resolveProcessExitCause({ exitCode: c }).kind !== "unknown";
}
const ORCA_TERMINAL_COMMAND_FINISHED_EVENT = "orca:terminal-command-finished";
function dispatchTerminalCommandFinishedEvent(c, L) {
	typeof window.dispatchEvent == "function" && window.dispatchEvent(new CustomEvent(ORCA_TERMINAL_COMMAND_FINISHED_EVENT, { detail: {
		worktreeId: c,
		exitCode: L
	} }));
}
const OSC52_CLIPBOARD_SETTING_ID = "terminal-osc52-clipboard", REMOTE_RUNTIME_RECOVERY_DELAYS_MS = [
	250,
	500,
	1e3,
	2e3,
	4e3,
	8e3,
	15e3,
	3e4
], REMOTE_RUNTIME_AUTO_RECOVERY_TIMEOUT_MS = REMOTE_RUNTIME_RECOVERY_DELAYS_MS.reduce((c, L) => c + L, 0) + REMOTE_RUNTIME_RECOVERY_DELAYS_MS.length * 15e3;
var scheduledRecoveries = /* @__PURE__ */ new Set();
function retryAllRemoteRuntimePtyRecoveriesNow() {
	let c = 0;
	for (let L of Array.from(scheduledRecoveries)) L.retryNow() && (c += 1);
	return c;
}
var RemoteRuntimePtyRecoveryState = class {
	phase = "idle";
	epoch = 0;
	attempt = 0;
	retryTimer = null;
	deadlineTimer = null;
	pendingRetry = null;
	pendingEpoch = null;
	deadlineExpired = !1;
	constructor(c) {
		this.onChange = c;
	}
	get isActive() {
		return this.phase === "recovering" || this.phase === "backoff";
	}
	get currentPhase() {
		return this.phase;
	}
	get currentEpoch() {
		return this.epoch;
	}
	get attemptCount() {
		return this.attempt;
	}
	get autoRecoveryDeadlineExpired() {
		return this.deadlineExpired;
	}
	begin() {
		return this.phase === "disposed" ? this.epoch : (this.isActive || (this.epoch += 1, this.attempt = 0, this.armDeadline(this.epoch)), this.clearRetryTimer(), this.phase = "recovering", this.onChange?.(), this.epoch);
	}
	isCurrent(c) {
		return this.isActive && c === this.epoch;
	}
	ownsEpoch(c) {
		return this.phase !== "disposed" && c === this.epoch;
	}
	schedule(c, L) {
		if (!this.isCurrent(c)) return !1;
		this.clearRetryTimer(), this.phase = "backoff";
		let R = REMOTE_RUNTIME_RECOVERY_DELAYS_MS[Math.min(this.attempt, REMOTE_RUNTIME_RECOVERY_DELAYS_MS.length - 1)];
		this.attempt += 1, this.pendingRetry = L, this.pendingEpoch = c;
		let z = setTimeout(() => {
			this.retryTimer !== z || !this.isCurrent(c) || (this.retryTimer = null, this.pendingRetry = null, this.pendingEpoch = null, scheduledRecoveries.delete(this), this.phase = "recovering", this.onChange?.(), L(c));
		}, R);
		return z.unref?.(), this.retryTimer = z, scheduledRecoveries.add(this), this.onChange?.(), !0;
	}
	parkRetryForExternalTrigger(c, L) {
		return this.isCurrent(c) && this.parkRetry(L);
	}
	parkRetryAfterDeadline(c) {
		return this.phase === "disconnected" && this.parkRetry(c);
	}
	parkRetry(c) {
		return this.pendingRetry === null ? (this.pendingRetry = c, this.pendingEpoch = this.epoch, scheduledRecoveries.add(this), !0) : !1;
	}
	discardPendingRetry(c) {
		this.pendingRetry === c && this.clearRetryTimer();
	}
	retryNow() {
		if (this.pendingRetry === null || this.pendingEpoch === null || this.phase !== "backoff" && this.phase !== "disconnected") return !1;
		let c = this.pendingRetry, L = this.phase === "disconnected";
		this.clearRetryTimer(), L && (this.epoch += 1, this.attempt = 0, this.armDeadline(this.epoch));
		let R = this.epoch;
		return this.phase = "recovering", this.onChange?.(), c(R), !0;
	}
	markHealthy() {
		this.phase !== "disposed" && (this.deadlineExpired = !1, this.clearTimers(), this.phase = "idle", this.attempt = 0, this.onChange?.());
	}
	markDisconnected() {
		this.phase !== "disposed" && (this.stopRetryTimer(), this.clearDeadlineTimer(), this.phase = "disconnected", this.onChange?.());
	}
	cancel() {
		this.phase !== "disposed" && (this.deadlineExpired = !1, this.epoch += 1, this.clearTimers(), this.phase = "idle", this.attempt = 0, this.onChange?.());
	}
	dispose() {
		this.epoch += 1, this.clearTimers(), this.phase = "disposed", this.onChange?.();
	}
	armDeadline(c) {
		this.clearDeadlineTimer(), this.deadlineExpired = !1;
		let L = setTimeout(() => {
			this.deadlineTimer !== L || !this.isCurrent(c) || (this.deadlineTimer = null, this.deadlineExpired = !0, this.stopRetryTimer(), this.phase = "disconnected", this.onChange?.());
		}, REMOTE_RUNTIME_AUTO_RECOVERY_TIMEOUT_MS);
		L.unref?.(), this.deadlineTimer = L;
	}
	clearTimers() {
		this.clearRetryTimer(), this.clearDeadlineTimer();
	}
	stopRetryTimer() {
		this.retryTimer &&= (clearTimeout(this.retryTimer), null);
	}
	clearRetryTimer() {
		this.stopRetryTimer(), this.pendingRetry = null, this.pendingEpoch = null, scheduledRecoveries.delete(this);
	}
	clearDeadlineTimer() {
		this.deadlineTimer &&= (clearTimeout(this.deadlineTimer), null);
	}
}, SWEEP_ATTEMPT_DELAYS_MS = [
	300,
	1500,
	4e3,
	1e4,
	2e4
], dueAtByPtyId = /* @__PURE__ */ new Map(), attemptsByPtyId = /* @__PURE__ */ new Map(), notifiedPtyIds = /* @__PURE__ */ new Set(), flushTimer = null, flushTimerDueAt = null;
function notifyCodexPaneBoundForStaleSweep(c) {
	notifiedPtyIds.has(c) || isForeignMachineCodexPtyId(c) || (queue(c, SWEEP_ATTEMPT_DELAYS_MS[0]), armForEarliestDue());
}
function sweepRestoredCodexPanesForStaleAccounts(c) {
	for (let L of Object.values(c.ptyIdsByTabId)) for (let c of L) notifyCodexPaneBoundForStaleSweep(c);
}
function queue(c, L) {
	let R = Date.now() + L, z = dueAtByPtyId.get(c);
	dueAtByPtyId.set(c, z === void 0 ? R : Math.min(z, R));
}
function armForEarliestDue() {
	let c = null;
	for (let L of dueAtByPtyId.values()) (c === null || L < c) && (c = L);
	if (c !== null) {
		if (flushTimer !== null) {
			if (flushTimerDueAt !== null && flushTimerDueAt <= c) return;
			clearTimeout(flushTimer);
		}
		flushTimerDueAt = c, flushTimer = setTimeout(() => {
			flushTimer = null, flushTimerDueAt = null, flush();
		}, Math.max(0, c - Date.now()));
	}
}
function takeDuePtyIds() {
	let c = Date.now(), L = [];
	for (let [R, z] of dueAtByPtyId) (z <= c || !attemptsByPtyId.has(R)) && L.push(R);
	for (let c of L) dueAtByPtyId.delete(c);
	return L;
}
function shouldRetry(c) {
	return !c.eligible && (c.inconclusive || c.launchedCodex);
}
function queueNextRung(c) {
	let L = (attemptsByPtyId.get(c) ?? 0) + 1, R = SWEEP_ATTEMPT_DELAYS_MS[L];
	if (R === void 0) {
		attemptsByPtyId.delete(c);
		return;
	}
	attemptsByPtyId.set(c, L), queue(c, R);
}
async function flush() {
	let c = takeDuePtyIds();
	if (c.length === 0) {
		armForEarliestDue();
		return;
	}
	let L;
	try {
		L = await markRestoredStaleCodexSessionsForRestart({ ptyIds: c });
	} catch (L) {
		console.warn("Codex stale-pane restart sweep failed:", L);
		for (let L of c) queueNextRung(L);
		armForEarliestDue();
		return;
	}
	let R = new Map(L.map((c) => [c.ptyId, c]));
	for (let L of c) {
		let c = R.get(L);
		if (c?.notified === !0) {
			notifiedPtyIds.add(L), attemptsByPtyId.delete(L);
			continue;
		}
		if (c !== void 0 && !shouldRetry(c)) {
			attemptsByPtyId.delete(L);
			continue;
		}
		queueNextRung(L);
	}
	armForEarliestDue();
}
var authoritativeSnapshotByPtyId = /* @__PURE__ */ new Map(), unknownCapabilityRetryAtByPtyId = /* @__PURE__ */ new Map(), unknownCapabilityAttemptsByPtyId = /* @__PURE__ */ new Map(), UNKNOWN_CAPABILITY_RETRY_MS = 1e3, UNKNOWN_CAPABILITY_MAX_RETRY_MS = 3e4, UNKNOWN_CAPABILITY_MAX_ATTEMPTS = 8, SETTLED_UNKNOWN_REASK_MS = 5 * 6e4, CAPABILITY_RESOLUTION_TIMEOUT_MS = 1e3, lastSynchronizedLivePtyIds = null, earliestUnknownCapabilityRetryAtMs = Infinity, synchronizationGeneration = 0, capabilityRevision = 0, capabilityRevisionListeners = /* @__PURE__ */ new Set();
function publishCapabilityChange() {
	capabilityRevision += 1;
	for (let c of capabilityRevisionListeners) c();
}
function subscribeTerminalProviderSnapshotCapability(c) {
	return capabilityRevisionListeners.add(c), () => capabilityRevisionListeners.delete(c);
}
function getTerminalProviderSnapshotCapabilityRevision() {
	return capabilityRevision;
}
function collectTerminalProviderSnapshotPtyIds(c) {
	let L = /* @__PURE__ */ new Set();
	for (let R of Object.values(c.tabsByWorktree)) for (let z of R) {
		z.ptyId && L.add(z.ptyId);
		for (let R of c.ptyIdsByTabId[z.id] ?? []) L.add(R);
	}
	for (let R of Object.values(c.pendingReconnectPtyIdByTabId ?? {})) L.add(R);
	for (let R of Object.values(c.terminalLayoutsByTabId ?? {})) for (let c of Object.values(R.ptyIdsByLeafId ?? {})) L.add(c);
	return [...L];
}
function refreshEarliestUnknownCapabilityRetry() {
	earliestUnknownCapabilityRetryAtMs = Infinity;
	for (let c of unknownCapabilityRetryAtByPtyId.values()) earliestUnknownCapabilityRetryAtMs = Math.min(earliestUnknownCapabilityRetryAtMs, c);
}
function backOffUnknownCapability(c, L) {
	let R = Math.min((unknownCapabilityAttemptsByPtyId.get(c) ?? 0) + 1, UNKNOWN_CAPABILITY_MAX_ATTEMPTS);
	unknownCapabilityAttemptsByPtyId.set(c, R), unknownCapabilityRetryAtByPtyId.set(c, L + (R >= UNKNOWN_CAPABILITY_MAX_ATTEMPTS ? SETTLED_UNKNOWN_REASK_MS : Math.min(UNKNOWN_CAPABILITY_RETRY_MS * 2 ** (R - 1), UNKNOWN_CAPABILITY_MAX_RETRY_MS)));
}
function unknownCapabilityRetryDelayMs(c) {
	return earliestUnknownCapabilityRetryAtMs === Infinity ? null : Math.max(0, earliestUnknownCapabilityRetryAtMs - c);
}
async function resolveSnapshotCapabilityBatch(c, L) {
	let R;
	try {
		return await Promise.race([c(L), new Promise((c) => {
			R = setTimeout(() => c(null), CAPABILITY_RESOLUTION_TIMEOUT_MS);
		})]);
	} finally {
		clearTimeout(R);
	}
}
async function synchronizeTerminalProviderSnapshotCapabilities(c, L, R) {
	if (c === lastSynchronizedLivePtyIds && earliestUnknownCapabilityRetryAtMs === Infinity) return null;
	let z = R ?? Date.now();
	if (c === lastSynchronizedLivePtyIds && z < earliestUnknownCapabilityRetryAtMs) return unknownCapabilityRetryDelayMs(z);
	let B = ++synchronizationGeneration;
	lastSynchronizedLivePtyIds = c;
	let V = new Set(c.filter((c) => c.length > 0)), H = !1;
	for (let c of authoritativeSnapshotByPtyId.keys()) V.has(c) || (H ||= authoritativeSnapshotByPtyId.get(c) === !0, authoritativeSnapshotByPtyId.delete(c));
	for (let c of unknownCapabilityRetryAtByPtyId.keys()) V.has(c) || (unknownCapabilityRetryAtByPtyId.delete(c), unknownCapabilityAttemptsByPtyId.delete(c));
	let U = [...V].filter((c) => !authoritativeSnapshotByPtyId.has(c) && (unknownCapabilityRetryAtByPtyId.get(c) ?? 0) <= z), W = L ?? window.api.pty.getAuthoritativeBufferSnapshotCapabilities;
	if (!W) {
		for (let c of U) backOffUnknownCapability(c, z);
		return refreshEarliestUnknownCapabilityRetry(), H && publishCapabilityChange(), unknownCapabilityRetryDelayMs(z);
	}
	for (let c = 0; c < U.length; c += 512) {
		let L = U.slice(c, c + 512), R;
		try {
			R = await resolveSnapshotCapabilityBatch(W, L);
		} catch {
			if (B !== synchronizationGeneration) return H && publishCapabilityChange(), 0;
			for (let c of L) backOffUnknownCapability(c, z);
			continue;
		}
		if (B !== synchronizationGeneration) return H && publishCapabilityChange(), 0;
		if (!R) {
			for (let L of U.slice(c)) backOffUnknownCapability(L, z);
			break;
		}
		let V = new Map(R.map((c) => [c.id, c.authoritative]));
		for (let c of L) {
			let L = V.get(c);
			typeof L == "boolean" ? (H ||= authoritativeSnapshotByPtyId.get(c) === !0 != (L === !0), authoritativeSnapshotByPtyId.set(c, L), unknownCapabilityRetryAtByPtyId.delete(c), unknownCapabilityAttemptsByPtyId.delete(c)) : backOffUnknownCapability(c, z);
		}
	}
	return refreshEarliestUnknownCapabilityRetry(), H && publishCapabilityChange(), unknownCapabilityRetryDelayMs(R === void 0 ? Date.now() : z);
}
async function refreshTerminalProviderSnapshotCapabilities(c, L) {
	lastSynchronizedLivePtyIds = null;
	let R = !1;
	for (let L of c) R ||= authoritativeSnapshotByPtyId.get(L) === !0, authoritativeSnapshotByPtyId.delete(L), unknownCapabilityRetryAtByPtyId.delete(L), unknownCapabilityAttemptsByPtyId.delete(L);
	return refreshEarliestUnknownCapabilityRetry(), R && publishCapabilityChange(), synchronizeTerminalProviderSnapshotCapabilities(c, L);
}
function startTerminalProviderSnapshotCapabilitySynchronization(c) {
	let L = !1, R, z = async () => {
		let B = await synchronizeTerminalProviderSnapshotCapabilities(c);
		!L && B !== null && (R = setTimeout(() => void z(), Math.max(1, B)));
	};
	return z(), () => {
		L = !0, clearTimeout(R);
	};
}
function terminalProviderHasAuthoritativeSnapshot(c) {
	return authoritativeSnapshotByPtyId.get(c) === !0;
}
export { canMountTerminalWorkspaceForStartup as $, isEmptyFloatingWorkspacePanelVisible as A, matchFloatingWorkspacePanelShortcut as B, subscribeTerminalPaneSplitMountLeases as C, useLinkRoutingPreferenceDialog as Ct, registerTerminalSideEffectFactConsumer as D, isMainTerminalSideEffectAuthorityForPty as E, resolveFloatingWorkspaceBrowserWorkspaceId as F, resolveAgentStatusTerminalTitle as G, createFloatingWorkspaceMarkdownTab as H, shouldMinimizeFloatingWorkspacePanelOnCloseShortcut as I, recordTerminalTabParkedOnUnresolvedHost as J, detachTerminalLayoutLeaf as K, switchFloatingWorkspaceTab as L, isFloatingWorkspacePanelFocused as M, isFloatingWorkspacePanelVisible as N, countVisibleFloatingWorkspaceItems as O, isFloatingWorkspaceTerminalInputTarget as P, canDeferColdActivationTabsForHost as Q, matchFloatingWorkspacePanelChord as R, resolveTerminalPaneSplitSourceId as S, LinkRoutingPreferenceDialogProvider as St, dispatchTerminalSideEffectBatch as T, createFloatingWorkspaceTerminalTab as U, createFloatingWorkspaceBrowserTab as V, resolveBrowserWorkspaceOwner as W, shouldPreserveTerminalScrollbackBuffers as X, pruneLocalTerminalScrollbackBuffers as Y, applyBackgroundMountTabRestriction as Z, cancelQueuedTerminalPaneSplitRequests as _, isPtyLocked as _t, subscribeTerminalProviderSnapshotCapability as a, shouldMountBackgroundWorktreeTab as at, queueTerminalPaneSplitRequest as b, setDriverForPty as bt, sweepRestoredCodexPanesForStaleAccounts as c, takePendingBackgroundTerminalWorktreeMount as ct, retryAllRemoteRuntimePtyRecoveriesNow as d, getActiveEntityIdForTabType as dt, hasRequestedBackgroundTerminalWorktreeMount as et, OSC52_CLIPBOARD_SETTING_ID as f, getNextTabAcrossAllTypes as ft, isProvenProcessExit as g, hydrateDrivers as gt, UNVERIFIED_PROCESS_EXIT_CODE as h, getDriverForPty as ht, startTerminalProviderSnapshotCapabilitySynchronization as i, revealActivationDeferredTabs as it, isEventTargetInsideFloatingWorkspacePanel as j, handleEmptyFloatingWorkspacePanelCloseShortcut as k, REMOTE_RUNTIME_AUTO_RECOVERY_TIMEOUT_MS as l, ZOOM_LEVEL_CHANGED_EVENT as lt, dispatchTerminalCommandFinishedEvent as m, getAllDrivers as mt, getTerminalProviderSnapshotCapabilityRevision as n, pruneClosedBackgroundMountTabs as nt, terminalProviderHasAuthoritativeSnapshot as o, subscribeBackgroundTerminalWorktreeMountRequests as ot, ORCA_TERMINAL_COMMAND_FINISHED_EVENT as p, getNextTabWithinActiveType as pt, getTabIdsAwaitingHostHydrationRemount as q, refreshTerminalProviderSnapshotCapabilities as r, requestBackgroundTerminalWorktreeMount as rt, notifyCodexPaneBoundForStaleSweep as s, takeAllPendingBackgroundTerminalWorktreeMounts as st, collectTerminalProviderSnapshotPtyIds as t, planColdActivationTabDeferral as tt, RemoteRuntimePtyRecoveryState as u, dispatchZoomLevelChanged as ut, dispatchTerminalPaneSplitRequest as v, onDriverChange as vt, scheduleBackgroundTerminalWorktreeMeasure as w, registerTerminalPaneSplitRequestHandler as x, CloseTerminalDialog as xt, getTerminalPaneSplitMountLeaseTabIds as y, replaceDriverPtyId as yt, matchFloatingWorkspacePanelOwnedAction as z };
