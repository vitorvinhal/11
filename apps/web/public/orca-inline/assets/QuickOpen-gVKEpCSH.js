import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as getFileTypeIcon } from "./file-type-icons-CLi9yo0S.js";
import { Ht as prepareQuickOpenFiles, Nt as detectLanguage, Tl as focusTerminalTabSurface, Ut as rankQuickOpenFiles, t as useAppStore, wm as joinPath } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./tooltip-BWXjmmf0.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { l as useActiveWorktree } from "./selectors-Cdg4hUQI.js";
import "./connection-context-2sxF2wah.js";
import { a as CommandInput, n as CommandDialog, o as CommandItem, r as CommandEmpty, s as CommandList } from "./command-QScw0gM9.js";
import "./file-explorer-operation-owner-BmC3RZHe.js";
import { n as splitTrailingSegment, t as FilePathCursorTooltip } from "./file-path-cursor-tooltip-CRoJDZVh.js";
import { t as useRuntimeFileListForWorktree } from "./quick-open-file-list-B1G_H0MF.js";
import { r as queueBrowserFocusRequest, t as ORCA_BROWSER_FOCUS_REQUEST_EVENT } from "./browser-focus-CWkKFll5.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function resolveModalReturnFocusAction(e) {
	return e ? e.tabType === "browser" && e.browserPageId ? {
		kind: "browser",
		pageId: e.browserPageId,
		target: e.browserTarget
	} : e.tabType === "terminal" && e.terminalTabId ? {
		kind: "terminal",
		tabId: e.terminalTabId,
		leafId: e.terminalLeafId
	} : e.tabType === "editor" && e.worktreeId ? { kind: "editor" } : e.tabType === "simulator" && e.worktreeId ? { kind: "simulator" } : e.worktreeId ? { kind: "surface" } : { kind: "none" } : { kind: "none" };
}
function isRestorableFocusedElement(e) {
	return e !== null && e !== document.body && e !== document.documentElement;
}
function useModalReturnFocus(e) {
	let p = (0, import_react.useRef)(null), m = (0, import_react.useRef)(null), h = (0, import_react.useRef)(!1), g = (0, import_react.useRef)(!1), _ = (0, import_react.useRef)(null), v = (0, import_react.useRef)(null), y = (0, import_react.useCallback)(() => {
		_.current !== null && (cancelAnimationFrame(_.current), _.current = null), v.current !== null && (cancelAnimationFrame(v.current), v.current = null);
	}, []);
	(0, import_react.useEffect)(() => y, [y]);
	let x = (0, import_react.useCallback)(() => {
		let e = m.current;
		return !isRestorableFocusedElement(e) || !e.isConnected ? !1 : (e.focus(), document.activeElement === e || e.contains(document.activeElement));
	}, []), C = (0, import_react.useCallback)((e) => {
		y(), _.current = requestAnimationFrame(() => {
			_.current = null, v.current = requestAnimationFrame(() => {
				v.current = null;
				for (let p of e) {
					let e = document.querySelector(p);
					if (e && (e.focus(), document.activeElement === e || e.contains(document.activeElement))) return;
				}
			});
		});
	}, [y]), w = (0, import_react.useCallback)(() => {
		x() || C([
			".monaco-editor textarea",
			".rich-markdown-editor[contenteditable=\"true\"]",
			".markdown-preview"
		]);
	}, [x, C]), T = (0, import_react.useCallback)(() => {
		x() || C(["[data-orca-emulator-frame=\"true\"] [tabindex]"]);
	}, [x, C]), E = (0, import_react.useCallback)(() => {
		C([".xterm-helper-textarea", ".monaco-editor textarea"]);
	}, [C]), D = (0, import_react.useCallback)((e) => {
		queueBrowserFocusRequest(e), window.dispatchEvent(new CustomEvent(ORCA_BROWSER_FOCUS_REQUEST_EVENT, { detail: e }));
	}, []), O = (0, import_react.useCallback)(() => {
		let e = useAppStore.getState(), g = e.activeWorktreeId, _ = e.activeTabType, v = document.activeElement instanceof HTMLElement ? document.activeElement : null, y = g && _ === "browser" ? (e.browserTabsByWorktree[g] ?? []).find((p) => p.id === e.activeBrowserTabId)?.activePageId ?? null : null, b = g && _ === "terminal" ? e.activeTabIdByWorktree[g] ?? e.activeTabId : null, x = b ? e.terminalLayoutsByTabId[b]?.activeLeafId ?? null : null, C = _ === "browser" && v?.closest("[data-orca-browser-address-bar=\"true\"]") ? "address-bar" : "webview";
		m.current = isRestorableFocusedElement(v) ? v : null, p.current = {
			tabType: _,
			worktreeId: g,
			browserPageId: y,
			browserTarget: C,
			terminalTabId: b,
			terminalLeafId: x
		}, h.current = !1;
	}, []);
	return (0, import_react.useEffect)(() => {
		if (e && !g.current && (y(), p.current || O(), h.current = !1), !e && g.current) {
			let e = resolveModalReturnFocusAction(h.current ? null : p.current);
			p.current = null, e.kind === "browser" ? (y(), D({
				pageId: e.pageId,
				target: e.target
			})) : e.kind === "terminal" ? (y(), focusTerminalTabSurface(e.tabId, e.leafId)) : e.kind === "editor" ? w() : e.kind === "simulator" ? T() : e.kind === "surface" && E(), m.current = null;
		}
		g.current = e;
	}, [
		e,
		y,
		O,
		w,
		E,
		T,
		D
	]), {
		captureReturnFocus: O,
		skipReturnFocus: (0, import_react.useCallback)(() => {
			h.current = !0;
		}, [])
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), REMOTE_LOCATION_PHRASE = "on the remote";
function parseQuickOpenInstallRgGuidance(e) {
	let p = e.match(/^Quick Open scan too large \((.+?)\)\. Install ripgrep (on the remote|on the host running the Quick Open scan) to enable fast, gitignore-aware listing: (.+)$/);
	if (!p) return null;
	let m = p[1], h = p[2] === REMOTE_LOCATION_PHRASE ? "remote" : "local", g = p[3].trim(), _ = /^(sudo\s+)?(brew|apt|dnf|pacman|apk)\s/.test(g);
	return {
		reason: m,
		location: h,
		command: _ ? g : null,
		guidance: _ ? null : g
	};
}
function QuickOpenInstallRgGuidance({ reason: e, location: p, command: _, guidance: v }) {
	let [y, b] = (0, import_react.useState)(!1), x = (0, import_react.useRef)(null), S = (0, import_react.useRef)(!1), C = (0, import_react.useCallback)(() => {
		x.current !== null && (window.clearTimeout(x.current), x.current = null);
	}, []), T = (0, import_react.useCallback)((e) => {
		S.current = e !== null, e === null && C();
	}, [C]), E = (0, import_react.useCallback)(() => {
		_ && window.api.ui.writeClipboardText(_).then(() => {
			S.current && (C(), b(!0), x.current = window.setTimeout(() => {
				x.current = null, b(!1);
			}, 1500));
		}).catch(() => {});
	}, [C, _]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-5 text-sm text-muted-foreground space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "alert",
				className: "flex items-start gap-2.5 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2.5 text-amber-700 dark:text-amber-300",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					size: 16,
					className: "mt-0.5 shrink-0",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[13px] leading-5",
					children: [
						translate("auto.components.QuickOpen.4725b0e931", "Quick Open scan too large ("),
						e,
						")."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				translate("auto.components.QuickOpen.2ca749c15d", "Install"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "rounded bg-muted px-1 py-0.5 font-mono text-foreground",
					children: translate("auto.components.QuickOpen.5d80dc39bb", "ripgrep")
				}),
				" ",
				p === "remote" ? translate("auto.components.QuickOpen.1cf8561ab4", "on the remote to enable fast, gitignore-aware listing:") : translate("auto.components.QuickOpen.344f8a48dd", "on the host running the Quick Open scan to enable fast, gitignore-aware listing:")
			] }),
			_ ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded border border-border bg-muted/50 px-3 py-2 font-mono text-xs text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 truncate",
					children: _
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					ref: T,
					type: "button",
					onClick: E,
					className: "flex items-center gap-1 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
					"aria-label": translate("auto.components.QuickOpen.73b44e7bde", "Copy install command"),
					children: [y ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 12 }), y ? translate("auto.components.QuickOpen.cf144856dc", "Copied") : translate("auto.components.QuickOpen.995be8ea22", "Copy")]
				})]
			}) : v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-5 text-foreground",
				children: v
			}) : null
		]
	});
}
var QUICK_OPEN_CLOSE_LINGER_MS = 300;
function FooterKey({ children: e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full border border-border/60 bg-muted/35 px-2 py-0.5 text-[10px] font-medium text-foreground/85",
		children: e
	});
}
function QuickOpen() {
	let e = useAppStore((e) => e.activeModal === "quick-open"), [p, m] = (0, import_react.useState)(e);
	return (0, import_react.useEffect)(() => {
		if (e) {
			m(!0);
			return;
		}
		let p = window.setTimeout(() => m(!1), QUICK_OPEN_CLOSE_LINGER_MS);
		return () => window.clearTimeout(p);
	}, [e]), !e && !p ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickOpenContent, { visible: e });
}
function QuickOpenContent({ visible: e }) {
	let p = useAppStore((e) => e.closeModal), h = useAppStore((e) => e.activeWorktreeId), g = useAppStore((e) => e.openFile), b = useActiveWorktree(), [w, T] = (0, import_react.useState)(""), k = (0, import_react.useDeferredValue)(w), { files: A, loading: j, loadError: M, truncated: N } = useRuntimeFileListForWorktree({
		enabled: e,
		worktreeId: h,
		query: k
	}), P = b?.path ?? null, { captureReturnFocus: F, skipReturnFocus: I } = useModalReturnFocus(e), [L, R] = (0, import_react.useState)(e);
	e !== L && (R(e), e && w !== "" && T(""));
	let z = (0, import_react.useMemo)(() => prepareQuickOpenFiles(A), [A]), B = (0, import_react.useMemo)(() => rankQuickOpenFiles(k, z), [k, z]), V = (0, import_react.useCallback)((e) => {
		!h || !P || (I(), p(), g({
			filePath: joinPath(P, e),
			relativePath: e,
			worktreeId: h,
			language: detectLanguage(e),
			mode: "edit"
		}));
	}, [
		h,
		P,
		g,
		p,
		I
	]), H = (0, import_react.useCallback)((e) => {
		e || p();
	}, [p]), U = (0, import_react.useCallback)((e) => {
		e.preventDefault();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandDialog, {
		open: e,
		onOpenChange: H,
		shouldFilter: !1,
		onOpenAutoFocus: (0, import_react.useCallback)(() => {
			F();
		}, [F]),
		onCloseAutoFocus: U,
		title: translate("auto.components.QuickOpen.ec31e058f7", "Go to file"),
		description: translate("auto.components.QuickOpen.9e97f08d0f", "Search for a file to open"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, {
				placeholder: translate("auto.components.QuickOpen.1cb6ef47b7", "Go to file..."),
				value: w,
				onValueChange: T,
				className: "!h-9 !py-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, {
				className: "p-2",
				children: [j ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-6 text-center text-sm text-muted-foreground",
					children: translate("auto.components.QuickOpen.722a21e1a8", "Loading files...")
				}) : M ? (() => {
					let e = parseQuickOpenInstallRgGuidance(M);
					return e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickOpenInstallRgGuidance, {
						reason: e.reason,
						location: e.location,
						command: e.command,
						guidance: e.guidance
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-6 px-4 text-center text-sm text-muted-foreground whitespace-pre-wrap",
						children: M
					});
				})() : B.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: translate("auto.components.QuickOpen.74e2e1b3e4", "No matching files.") }) : B.map((e) => {
					let { directory: p, filename: m } = splitTrailingSegment(e.path), h = getFileTypeIcon(e.path);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
						value: e.path,
						onSelect: () => V(e.path),
						className: "min-w-0 !p-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePathCursorTooltip, {
							path: e.path,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-full min-w-0 items-center gap-2 px-3 py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { className: "size-3.5 shrink-0 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 max-w-full shrink-0 truncate text-foreground",
										children: m
									}),
									p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 truncate text-muted-foreground",
										children: p
									}) : null
								]
							})
						})
					}, e.path);
				}), N && !j && !M ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3 py-2 text-center text-xs text-muted-foreground",
					children: translate("quickOpen.moreMatchesAvailable", "More matches may be available. Refine your search to narrow the results.")
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-end border-t border-border/60 px-3.5 py-2.5 text-[11px] text-muted-foreground/82",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterKey, { children: translate("auto.components.QuickOpen.250e5b2dfb", "Enter") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.QuickOpen.61b1c871a6", "Open") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterKey, { children: translate("auto.components.QuickOpen.95fccbae88", "Esc") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.QuickOpen.73b2c581f1", "Close") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterKey, { children: "↑↓" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.QuickOpen.1dbd3f59ff", "Move") })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-live": "polite",
				className: "sr-only",
				children: k.trim() ? translate("auto.components.QuickOpen.b227d88520", "{{value0}} files found", { value0: B.length }) : ""
			})
		]
	});
}
export { QuickOpen as default };
