import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { t as FloatingTerminalIconContextMenu } from "./FloatingTerminalIconContextMenu-jXSyteoV.js";
import { t as PanelsTopLeft } from "./panels-top-left-mEiHazxf.js";
import { Nt as detectLanguage, hb as FLOATING_TERMINAL_WORKTREE_ID, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { s as selectFloatingWorkspaceHasUnread } from "./selectors-Cdg4hUQI.js";
import { c as useShortcutLabel } from "./useShortcutLabel-B283mfzm.js";
var TRIGGER_SIZE = 36, DEFAULT_RIGHT_GAP = 24, DEFAULT_BOTTOM_GAP = 72, DRAG_MARGIN = 8, TITLEBAR_SAFE_TOP = 36;
function getViewport() {
	return {
		width: typeof window > "u" ? 1200 : window.innerWidth,
		height: typeof window > "u" ? 800 : window.innerHeight
	};
}
function isFiniteCoordinate(i) {
	return typeof i == "number" && Number.isFinite(i);
}
function isAnchorX(i) {
	return i === "left" || i === "right";
}
function isAnchorY(i) {
	return i === "top" || i === "bottom";
}
function getWindowStorage$1() {
	return typeof window < "u" && window.localStorage !== void 0 ? window.localStorage : null;
}
function isAnchoredTriggerPosition(i) {
	return "anchorX" in i;
}
function getDefaultFloatingTerminalTriggerCommittedPosition() {
	return {
		anchorX: "right",
		anchorY: "bottom",
		offsetX: DEFAULT_RIGHT_GAP,
		offsetY: DEFAULT_BOTTOM_GAP
	};
}
function getDefaultFloatingTerminalTriggerPosition() {
	return clampFloatingTerminalTriggerPosition(resolveFloatingTerminalTriggerCommittedPosition(getDefaultFloatingTerminalTriggerCommittedPosition()));
}
function clampFloatingTerminalTriggerPosition(i) {
	let M = getViewport(), N = Math.max(DRAG_MARGIN, M.width - TRIGGER_SIZE - DRAG_MARGIN), P = Math.max(TITLEBAR_SAFE_TOP, M.height - TRIGGER_SIZE - DRAG_MARGIN);
	return {
		left: Math.min(Math.max(DRAG_MARGIN, i.left), N),
		top: Math.min(Math.max(TITLEBAR_SAFE_TOP, i.top), P)
	};
}
function hasUsableFloatingTerminalTriggerViewport() {
	let i = getViewport();
	return i.width >= TRIGGER_SIZE + DRAG_MARGIN * 2 && i.height >= TRIGGER_SIZE + TITLEBAR_SAFE_TOP + DRAG_MARGIN;
}
function resolveFloatingTerminalTriggerCommittedPosition(i) {
	if (!isAnchoredTriggerPosition(i)) return i;
	let M = getViewport();
	return {
		left: i.anchorX === "left" ? i.offsetX : M.width - TRIGGER_SIZE - i.offsetX,
		top: i.anchorY === "top" ? i.offsetY : M.height - TRIGGER_SIZE - i.offsetY
	};
}
function anchorFloatingTerminalTriggerPosition(i) {
	if (!hasUsableFloatingTerminalTriggerViewport()) return null;
	let M = getViewport(), N = i.left + TRIGGER_SIZE / 2 <= M.width / 2 ? "left" : "right", P = i.top + TRIGGER_SIZE / 2 <= M.height / 2 ? "top" : "bottom";
	return {
		anchorX: N,
		anchorY: P,
		offsetX: N === "left" ? i.left : M.width - i.left - TRIGGER_SIZE,
		offsetY: P === "top" ? i.top : M.height - i.top - TRIGGER_SIZE
	};
}
function shouldReconcileFloatingTerminalTriggerPosition(i) {
	return i === "default" || hasUsableFloatingTerminalTriggerViewport();
}
function resolveFloatingTerminalTriggerPosition(i, M) {
	return M === "default" ? getDefaultFloatingTerminalTriggerPosition() : clampFloatingTerminalTriggerPosition(resolveFloatingTerminalTriggerCommittedPosition(i));
}
function parseFloatingTerminalTriggerPosition(i) {
	if (!i) return null;
	try {
		let M = JSON.parse(i);
		if (typeof M != "object" || !M || Array.isArray(M)) return null;
		let N = M;
		return isAnchorX(N.anchorX) && isAnchorY(N.anchorY) && isFiniteCoordinate(N.offsetX) && isFiniteCoordinate(N.offsetY) ? {
			anchorX: N.anchorX,
			anchorY: N.anchorY,
			offsetX: N.offsetX,
			offsetY: N.offsetY
		} : !isFiniteCoordinate(N.left) || !isFiniteCoordinate(N.top) ? null : {
			left: N.left,
			top: N.top
		};
	} catch {
		return null;
	}
}
function readPersistedFloatingTerminalTriggerPosition() {
	try {
		return parseFloatingTerminalTriggerPosition(getWindowStorage$1()?.getItem("orca-floating-terminal-trigger-position-v2") ?? null);
	} catch {
		return null;
	}
}
function persistFloatingTerminalTriggerPosition(i) {
	try {
		getWindowStorage$1()?.setItem("orca-floating-terminal-trigger-position-v2", JSON.stringify(i));
	} catch {}
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), FLOATING_TERMINAL_TRIGGER_DRAG_THRESHOLD = 4;
function readInitialTriggerPosition() {
	let i = getDefaultFloatingTerminalTriggerCommittedPosition(), M = getDefaultFloatingTerminalTriggerPosition();
	if (typeof window > "u") return {
		committedPosition: i,
		position: M,
		source: "default"
	};
	let N = readPersistedFloatingTerminalTriggerPosition();
	return N ? {
		committedPosition: N,
		position: shouldReconcileFloatingTerminalTriggerPosition("user") ? resolveFloatingTerminalTriggerPosition(N, "user") : resolveFloatingTerminalTriggerCommittedPosition(N),
		source: "user"
	} : {
		committedPosition: i,
		position: M,
		source: "default"
	};
}
function FloatingTerminalToggleButton({ open: i, onToggle: M }) {
	let F = useShortcutLabel("floatingTerminal.toggle"), I = useAppStore(selectFloatingWorkspaceHasUnread), L = !i && I, R = (0, import_react.useRef)(null);
	R.current === null && (R.current = readInitialTriggerPosition());
	let z = (0, import_react.useRef)(R.current.source), B = (0, import_react.useRef)(R.current.committedPosition), [V, H] = (0, import_react.useState)(R.current.position), U = (0, import_react.useRef)(null), W = (0, import_react.useRef)(null), G = (0, import_react.useRef)(!1), K = (0, import_react.useCallback)((i) => {
		let M = clampFloatingTerminalTriggerPosition(i);
		W.current = M, H(M);
	}, []), q = (0, import_react.useCallback)((i) => {
		W.current = null;
		let M = clampFloatingTerminalTriggerPosition(i);
		H(M);
		let N = anchorFloatingTerminalTriggerPosition(M);
		N && (B.current = N, z.current = "user", persistFloatingTerminalTriggerPosition(N));
	}, []), J = (0, import_react.useCallback)(() => {
		H((i) => shouldReconcileFloatingTerminalTriggerPosition(z.current) ? resolveFloatingTerminalTriggerPosition(B.current, z.current) : i);
	}, []);
	(0, import_react.useLayoutEffect)(() => {
		J();
	}, [J]), (0, import_react.useEffect)(() => {
		let i = () => J();
		return window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
	}, [J]);
	let Y = (i) => {
		i.button === 0 && (U.current = {
			pointerId: i.pointerId,
			startX: i.clientX,
			startY: i.clientY,
			left: V.left,
			top: V.top,
			moved: !1
		}, i.currentTarget.setPointerCapture(i.pointerId));
	}, X = (i) => {
		let M = U.current;
		if (!M || M.pointerId !== i.pointerId) return;
		let N = i.clientX - M.startX, P = i.clientY - M.startY;
		!M.moved && Math.hypot(N, P) < FLOATING_TERMINAL_TRIGGER_DRAG_THRESHOLD || (M.moved = !0, K({
			left: M.left + N,
			top: M.top + P
		}));
	}, Z = (i) => {
		let M = U.current;
		!M || M.pointerId !== i.pointerId || (G.current = M.moved, M.moved && W.current && q(W.current), U.current = null);
	}, Q = (i) => {
		if (G.current) {
			G.current = !1, i.preventDefault(), i.stopPropagation();
			return;
		}
		M();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingTerminalIconContextMenu, {
		currentLocation: "floating-button",
		className: "fixed z-[46]",
		style: {
			left: V.left,
			top: V.top
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				size: "icon",
				className: "relative cursor-grab rounded-lg border-transparent text-foreground bg-card shadow-[0_4px_12px_rgb(0_0_0_/_0.22),0_0_0_1px_color-mix(in_srgb,var(--foreground)_12%,transparent)] hover:-translate-y-0.5 hover:bg-accent active:translate-y-0 active:cursor-grabbing dark:bg-accent dark:shadow-[0_6px_16px_rgb(0_0_0_/_0.55),0_0_0_1px_rgb(255_255_255_/_0.22)] dark:hover:bg-[color-mix(in_srgb,var(--accent)_82%,white)]",
				"data-floating-terminal-toggle": !0,
				"aria-label": i ? translate("auto.components.floating.terminal.FloatingTerminalToggleButton.5785dd9148", "Minimize floating workspace") : L ? translate("auto.components.floating.terminal.FloatingTerminalToggleButton.4cb418b991", "Show floating workspace, new activity") : translate("auto.components.floating.terminal.FloatingTerminalToggleButton.3b04b065b5", "Show floating workspace"),
				"aria-pressed": i,
				onPointerDown: Y,
				onPointerMove: X,
				onPointerUp: Z,
				onPointerCancel: Z,
				onClick: Q,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "size-4" }), L ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": !0,
					"data-floating-terminal-attention": !0,
					className: "pointer-events-none absolute right-1 top-1 size-2 rounded-full bg-amber-500 ring-2 ring-card dark:ring-accent"
				}) : null]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: "left",
			sideOffset: 6,
			children: translate("auto.components.floating.terminal.FloatingTerminalToggleButton.bfe7809a70", "{{value0}} floating workspace ({{value1}})", {
				value0: i ? "Minimize" : "Show",
				value1: F
			})
		})] })
	});
}
function openMarkdownDocumentInFloatingWorkspace(i, M, N = {}) {
	return i({
		filePath: M.filePath,
		relativePath: M.relativePath,
		worktreeId: FLOATING_TERMINAL_WORKTREE_ID,
		language: detectLanguage(M.relativePath),
		mode: "edit",
		runtimeEnvironmentId: null
	}, {
		preview: !1,
		targetGroupId: N.targetGroupId,
		suppressActiveRuntimeFallback: !0
	});
}
const FLOATING_WORKSPACE_GUEST_CLOSE_EVENT = "orca:floating-workspace-guest-close", FLOATING_WORKSPACE_GUEST_SELECT_INDEX_EVENT = "orca:floating-workspace-guest-select-index";
function dispatchFloatingWorkspaceGuestClose(i) {
	typeof window > "u" || window.dispatchEvent(new CustomEvent(FLOATING_WORKSPACE_GUEST_CLOSE_EVENT, { detail: i }));
}
function dispatchFloatingWorkspaceGuestSelectIndex(i) {
	typeof window > "u" || window.dispatchEvent(new CustomEvent(FLOATING_WORKSPACE_GUEST_SELECT_INDEX_EVENT, { detail: i }));
}
const FLOATING_TERMINAL_PANEL_VIEW_STATE_STORAGE_KEY = "orca-floating-terminal-panel-view-state-v1";
function getWindowStorage() {
	return typeof window > "u" ? null : window.localStorage;
}
function readPersistedFloatingTerminalPanelViewState() {
	try {
		let i = getWindowStorage()?.getItem(FLOATING_TERMINAL_PANEL_VIEW_STATE_STORAGE_KEY);
		if (!i) return null;
		let M = JSON.parse(i);
		if (typeof M != "object" || !M || Array.isArray(M)) return null;
		let N = M;
		return {
			open: N.open === !0,
			maximized: N.maximized === !0
		};
	} catch {
		return null;
	}
}
function persistFloatingTerminalPanelViewState(i) {
	try {
		getWindowStorage()?.setItem(FLOATING_TERMINAL_PANEL_VIEW_STATE_STORAGE_KEY, JSON.stringify(i));
	} catch {}
}
function persistFloatingTerminalPanelOpen(i) {
	persistFloatingTerminalPanelViewState({
		maximized: readPersistedFloatingTerminalPanelViewState()?.maximized === !0,
		open: i
	});
}
function persistFloatingTerminalPanelMaximized(i) {
	persistFloatingTerminalPanelViewState({
		open: readPersistedFloatingTerminalPanelViewState()?.open === !0,
		maximized: i
	});
}
export { FLOATING_WORKSPACE_GUEST_SELECT_INDEX_EVENT as a, openMarkdownDocumentInFloatingWorkspace as c, FLOATING_WORKSPACE_GUEST_CLOSE_EVENT as i, FloatingTerminalToggleButton as l, persistFloatingTerminalPanelOpen as n, dispatchFloatingWorkspaceGuestClose as o, readPersistedFloatingTerminalPanelViewState as r, dispatchFloatingWorkspaceGuestSelectIndex as s, persistFloatingTerminalPanelMaximized as t };
