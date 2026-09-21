import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { n as TAB_CONTEXT_MENU_CONTENT_CLASS, r as TAB_CONTEXT_SUBMENU_CONTENT_CLASS, t as TabWorkspaceLayoutMenuSection } from "./TabWorkspaceLayoutMenuSection-5hCBSOB4.js";
import { t as MessageSquare } from "./message-square-DtwAi-wg.js";
import { t as Minimize2 } from "./minimize-2-CzjLmLMG.js";
import { a as PanelRightClose, i as mirrorWebRuntimeTabMove, o as PanelBottomClose } from "./tab-move-to-pane-column-C2Z9WhB2.js";
import { t as PanelLeftClose } from "./panel-left-close-C0Mo_4aA.js";
import { t as Pencil } from "./pencil-EMomP5i_.js";
import { t as PinOff } from "./pin-off-BO5XgXva.js";
import { t as Pin } from "./pin-y_bcWXAu.js";
import { t as SquareTerminal } from "./square-terminal-C1LlL85w.js";
import { Du as stripLeadingAgentTitleDecoration, Ff as getExecutionHostIdForWorktree, Nh as isTerminalLeafId, Nt as detectLanguage, Ph as makePaneKey, Qy as isWindowsAbsolutePathLike, Rf as getRuntimeEnvironmentIdForWorktree, Sm as dirname, St as notifyHostOfMirroredEditorClose, Xy as isPathInsideOrEqual, _n as buildOwnedEditorFileId, _u as isOpenCodeNativeTitle, cu as resolveExplicitTerminalTitleAgentType, eb as normalizeRuntimePathSeparators, gn as buildDiffEditorFileId, hb as FLOATING_TERMINAL_WORKTREE_ID, jl as worktreeUsesRemoteConnection, kp as parseRemoteRuntimePtyId, ld as acquireWebviewsDragPassthrough, ou as isShellProcess, rn as renameRuntimePath, t as useAppStore, tb as relativePathInsideRoot, vn as resolveEditorFileIdForOwner, wm as joinPath, xm as basename, yu as isClaudeIdentityFrameTitle, zd as isPaneColumnSplitDropNoOp } from "./store-C9f8FDJV.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { d as DropdownMenuSub, f as DropdownMenuSubContent, i as DropdownMenuItem, l as DropdownMenuSeparator, m as DropdownMenuTrigger, p as DropdownMenuSubTrigger, r as DropdownMenuContent, t as DropdownMenu, u as DropdownMenuShortcut } from "./dropdown-menu-DRu_J4_e.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as resolveCompatibleAgentTypeForOwner, t as resolvePaneAgentOwner } from "./pane-agent-owner-Ci26i0GA.js";
import { t as AgentIcon } from "./agent-catalog-Cgr0_vcs.js";
import { t as isImeCompositionKeyDown } from "./ime-composition-keyboard-event-yHkhp82P.js";
import { i as FilledBellIcon } from "./WorktreeCardHelpers-BykCvVd_.js";
import { a as useOptionalShortcutLabel, i as formatShortcutLabel } from "./useShortcutLabel-B283mfzm.js";
import { t as AgentStateDot } from "./AgentStateDot-CrLFCeoH.js";
import { g as requestEditorSaveQuiesce } from "./editor-autosave-DihR6gbk.js";
import { d as settleEditorPathMove, i as verifyLatchedMoveDestinations, t as RENAME_TERMINAL_TAB_EVENT, u as beginEditorPathMove } from "./terminal-tab-rename-request-Cf5ZxaWz.js";
import { r as getFileExplorerOperationOwner, t as captureFileExplorerOperationGuard } from "./file-explorer-operation-owner-BmC3RZHe.js";
import { a as terminalTabHasUnreadActivity, c as resolveFocusedTabAgent, d as resolveSiblingTabAgent, i as terminalTabActivityToAgentDotState, l as resolveSiblingCompletedTabAgent, n as resolveTerminalTabActivityStatus, o as resolveFocusedCompletedTabAgent, s as resolveFocusedRetainedTabAgent, t as isTerminalTabActivityLive, u as resolveSiblingRetainedTabAgent } from "./terminal-tab-activity-status-BJlBCOgx.js";
import { t as requestActiveTerminalPaneSplit } from "./request-active-terminal-pane-split-etsYGifc.js";
import { t as ShellIcon } from "./shell-icons-qZkCOp0I.js";
var ListX = createLucideIcon("list-x", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M11 12H3",
		key: "51ecnj"
	}],
	["path", {
		d: "M16 19H3",
		key: "zzsher"
	}],
	["path", {
		d: "m15.5 9.5 5 5",
		key: "ytk86i"
	}],
	["path", {
		d: "m20.5 9.5-5 5",
		key: "17o44f"
	}]
]), activeTabStripPointerGestureCount = 0;
function beginTabStripPointerGesture() {
	activeTabStripPointerGestureCount += 1;
	let e = !1;
	return () => {
		e || (e = !0, activeTabStripPointerGestureCount = Math.max(0, activeTabStripPointerGestureCount - 1));
	};
}
function isTabStripPointerGestureActive() {
	return activeTabStripPointerGestureCount > 0;
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function useCombinedRefs() {
	var e = [...arguments];
	return (0, import_react.useMemo)(() => (t) => {
		e.forEach((e) => e(t));
	}, e);
}
var canUseDOM = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function isWindow(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function isNode(e) {
	return "nodeType" in e;
}
function getWindow(e) {
	return e ? isWindow(e) ? e : isNode(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function isDocument(e) {
	let { Document: t } = getWindow(e);
	return e instanceof t;
}
function isHTMLElement(e) {
	return isWindow(e) ? !1 : e instanceof getWindow(e).HTMLElement;
}
function isSVGElement(e) {
	return e instanceof getWindow(e).SVGElement;
}
function getOwnerDocument$1(e) {
	return e ? isWindow(e) ? e.document : isNode(e) ? isDocument(e) ? e : isHTMLElement(e) || isSVGElement(e) ? e.ownerDocument : document : document : document;
}
var useIsomorphicLayoutEffect = canUseDOM ? import_react.useLayoutEffect : import_react.useEffect;
function useEvent(e) {
	let t = (0, import_react.useRef)(e);
	return useIsomorphicLayoutEffect(() => {
		t.current = e;
	}), (0, import_react.useCallback)(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function useInterval() {
	let e = (0, import_react.useRef)(null);
	return [(0, import_react.useCallback)((t, n) => {
		e.current = setInterval(t, n);
	}, []), (0, import_react.useCallback)(() => {
		e.current !== null && (clearInterval(e.current), e.current = null);
	}, [])];
}
function useLatestValue(e, t) {
	t === void 0 && (t = [e]);
	let n = (0, import_react.useRef)(e);
	return useIsomorphicLayoutEffect(() => {
		n.current !== e && (n.current = e);
	}, t), n;
}
function useLazyMemo(e, t) {
	let n = (0, import_react.useRef)();
	return (0, import_react.useMemo)(() => {
		let t = e(n.current);
		return n.current = t, t;
	}, [...t]);
}
function useNodeRef(e) {
	let t = useEvent(e), n = (0, import_react.useRef)(null);
	return [n, (0, import_react.useCallback)((e) => {
		e !== n.current && t?.(e, n.current), n.current = e;
	}, [])];
}
function usePrevious(e) {
	let t = (0, import_react.useRef)();
	return (0, import_react.useEffect)(() => {
		t.current = e;
	}, [e]), t.current;
}
var ids = {};
function useUniqueId(e, t) {
	return (0, import_react.useMemo)(() => {
		if (t) return t;
		let n = ids[e] == null ? 0 : ids[e] + 1;
		return ids[e] = n, e + "-" + n;
	}, [e, t]);
}
function createAdjustmentFn(e) {
	return function(t) {
		return [...arguments].slice(1).reduce((t, n) => {
			let r = Object.entries(n);
			for (let [n, i] of r) {
				let r = t[n];
				r != null && (t[n] = r + e * i);
			}
			return t;
		}, { ...t });
	};
}
var add = /* @__PURE__ */ createAdjustmentFn(1), subtract = /* @__PURE__ */ createAdjustmentFn(-1);
function hasViewportRelativeCoordinates(e) {
	return "clientX" in e && "clientY" in e;
}
function isKeyboardEvent(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = getWindow(e.target);
	return t && e instanceof t;
}
function isTouchEvent(e) {
	if (!e) return !1;
	let { TouchEvent: t } = getWindow(e.target);
	return t && e instanceof t;
}
function getEventCoordinates(e) {
	if (isTouchEvent(e)) {
		if (e.touches && e.touches.length) {
			let { clientX: t, clientY: n } = e.touches[0];
			return {
				x: t,
				y: n
			};
		} else if (e.changedTouches && e.changedTouches.length) {
			let { clientX: t, clientY: n } = e.changedTouches[0];
			return {
				x: t,
				y: n
			};
		}
	}
	return hasViewportRelativeCoordinates(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null;
}
var CSS$1 = /* @__PURE__ */ Object.freeze({
	Translate: { toString(e) {
		if (!e) return;
		let { x: t, y: n } = e;
		return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
	} },
	Scale: { toString(e) {
		if (!e) return;
		let { scaleX: t, scaleY: n } = e;
		return "scaleX(" + t + ") scaleY(" + n + ")";
	} },
	Transform: { toString(e) {
		if (e) return [CSS$1.Translate.toString(e), CSS$1.Scale.toString(e)].join(" ");
	} },
	Transition: { toString(e) {
		let { property: t, duration: n, easing: r } = e;
		return t + " " + n + "ms " + r;
	} }
}), SELECTOR = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function findFirstFocusableNode(e) {
	return e.matches(SELECTOR) ? e : e.querySelector(SELECTOR);
}
var hiddenStyles = { display: "none" };
function HiddenText(e) {
	let { id: t, value: n } = e;
	return import_react.createElement("div", {
		id: t,
		style: hiddenStyles
	}, n);
}
function LiveRegion(e) {
	let { id: t, announcement: n, ariaLiveType: r = "assertive" } = e;
	return import_react.createElement("div", {
		id: t,
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			width: 1,
			height: 1,
			margin: -1,
			border: 0,
			padding: 0,
			overflow: "hidden",
			clip: "rect(0 0 0 0)",
			clipPath: "inset(100%)",
			whiteSpace: "nowrap"
		},
		role: "status",
		"aria-live": r,
		"aria-atomic": !0
	}, n);
}
function useAnnouncement() {
	let [e, t] = (0, import_react.useState)("");
	return {
		announce: (0, import_react.useCallback)((e) => {
			e != null && t(e);
		}, []),
		announcement: e
	};
}
var import_react_dom = require_react_dom(), DndMonitorContext = /* @__PURE__ */ (0, import_react.createContext)(null);
function useDndMonitor(e) {
	let t = (0, import_react.useContext)(DndMonitorContext);
	(0, import_react.useEffect)(() => {
		if (!t) throw Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e);
	}, [e, t]);
}
function useDndMonitorProvider() {
	let [e] = (0, import_react.useState)(() => /* @__PURE__ */ new Set()), t = (0, import_react.useCallback)((t) => (e.add(t), () => e.delete(t)), [e]);
	return [(0, import_react.useCallback)((t) => {
		let { type: n, event: r } = t;
		e.forEach((e) => e[n]?.call(e, r));
	}, [e]), t];
}
var defaultScreenReaderInstructions = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " }, defaultAnnouncements = {
	onDragStart(e) {
		let { active: t } = e;
		return "Picked up draggable item " + t.id + ".";
	},
	onDragOver(e) {
		let { active: t, over: n } = e;
		return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
	},
	onDragEnd(e) {
		let { active: t, over: n } = e;
		return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
	},
	onDragCancel(e) {
		let { active: t } = e;
		return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
	}
};
function Accessibility(e) {
	let { announcements: t = defaultAnnouncements, container: n, hiddenTextDescribedById: r, screenReaderInstructions: i = defaultScreenReaderInstructions } = e, { announce: a, announcement: o } = useAnnouncement(), s = useUniqueId("DndLiveRegion"), [c, l] = (0, import_react.useState)(!1);
	if ((0, import_react.useEffect)(() => {
		l(!0);
	}, []), useDndMonitor((0, import_react.useMemo)(() => ({
		onDragStart(e) {
			let { active: n } = e;
			a(t.onDragStart({ active: n }));
		},
		onDragMove(e) {
			let { active: n, over: r } = e;
			t.onDragMove && a(t.onDragMove({
				active: n,
				over: r
			}));
		},
		onDragOver(e) {
			let { active: n, over: r } = e;
			a(t.onDragOver({
				active: n,
				over: r
			}));
		},
		onDragEnd(e) {
			let { active: n, over: r } = e;
			a(t.onDragEnd({
				active: n,
				over: r
			}));
		},
		onDragCancel(e) {
			let { active: n, over: r } = e;
			a(t.onDragCancel({
				active: n,
				over: r
			}));
		}
	}), [a, t])), !c) return null;
	let u = import_react.createElement(import_react.Fragment, null, import_react.createElement(HiddenText, {
		id: r,
		value: i.draggable
	}), import_react.createElement(LiveRegion, {
		id: s,
		announcement: o
	}));
	return n ? (0, import_react_dom.createPortal)(u, n) : u;
}
var Action;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Action ||= {});
function noop() {}
function useSensor(e, t) {
	return (0, import_react.useMemo)(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t]);
}
function useSensors() {
	var e = [...arguments];
	return (0, import_react.useMemo)(() => [...e].filter((e) => e != null), [...e]);
}
var defaultCoordinates = /* @__PURE__ */ Object.freeze({
	x: 0,
	y: 0
});
function distanceBetween(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function getRelativeTransformOrigin(e, t) {
	let n = getEventCoordinates(e);
	if (!n) return "0 0";
	let r = {
		x: (n.x - t.left) / t.width * 100,
		y: (n.y - t.top) / t.height * 100
	};
	return r.x + "% " + r.y + "%";
}
function sortCollisionsAsc(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return n - r;
}
function sortCollisionsDesc(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return r - n;
}
function cornersOfRectangle(e) {
	let { left: t, top: n, height: r, width: i } = e;
	return [
		{
			x: t,
			y: n
		},
		{
			x: t + i,
			y: n
		},
		{
			x: t,
			y: n + r
		},
		{
			x: t + i,
			y: n + r
		}
	];
}
function getFirstCollision(e, t) {
	if (!e || e.length === 0) return null;
	let [n] = e;
	return t ? n[t] : n;
}
function centerOfRectangle(e, t, n) {
	return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
		x: t + e.width * .5,
		y: n + e.height * .5
	};
}
var closestCenter = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = centerOfRectangle(t, t.left, t.top), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = distanceBetween(centerOfRectangle(r), i);
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return a.sort(sortCollisionsAsc);
};
function getIntersectionRatio(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	if (r < i && n < a) {
		let n = t.width * t.height, r = e.width * e.height, i = o * s, a = i / (n + r - i);
		return Number(a.toFixed(4));
	}
	return 0;
}
var rectIntersection = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = [];
	for (let e of r) {
		let { id: r } = e, a = n.get(r);
		if (a) {
			let n = getIntersectionRatio(a, t);
			n > 0 && i.push({
				id: r,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return i.sort(sortCollisionsDesc);
};
function isPointWithinRect(e, t) {
	let { top: n, left: r, bottom: i, right: a } = t;
	return n <= e.y && e.y <= i && r <= e.x && e.x <= a;
}
var pointerWithin = (e) => {
	let { droppableContainers: t, droppableRects: n, pointerCoordinates: r } = e;
	if (!r) return [];
	let i = [];
	for (let e of t) {
		let { id: t } = e, a = n.get(t);
		if (a && isPointWithinRect(r, a)) {
			let n = cornersOfRectangle(a).reduce((e, t) => e + distanceBetween(r, t), 0), o = Number((n / 4).toFixed(4));
			i.push({
				id: t,
				data: {
					droppableContainer: e,
					value: o
				}
			});
		}
	}
	return i.sort(sortCollisionsAsc);
};
function adjustScale(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	};
}
function getRectDelta(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : defaultCoordinates;
}
function createRectAdjustmentFn(e) {
	return function(t) {
		return [...arguments].slice(1).reduce((t, n) => ({
			...t,
			top: t.top + e * n.y,
			bottom: t.bottom + e * n.y,
			left: t.left + e * n.x,
			right: t.right + e * n.x
		}), { ...t });
	};
}
var getAdjustedRect = /* @__PURE__ */ createRectAdjustmentFn(1);
function parseTransform(e) {
	if (e.startsWith("matrix3d(")) {
		let t = e.slice(9, -1).split(/, /);
		return {
			x: +t[12],
			y: +t[13],
			scaleX: +t[0],
			scaleY: +t[5]
		};
	} else if (e.startsWith("matrix(")) {
		let t = e.slice(7, -1).split(/, /);
		return {
			x: +t[4],
			y: +t[5],
			scaleX: +t[0],
			scaleY: +t[3]
		};
	}
	return null;
}
function inverseTransform(e, t, n) {
	let r = parseTransform(t);
	if (!r) return e;
	let { scaleX: i, scaleY: a, x: o, y: s } = r, c = e.left - o - (1 - i) * parseFloat(n), l = e.top - s - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = i ? e.width / i : e.width, d = a ? e.height / a : e.height;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c
	};
}
var defaultOptions = { ignoreTransform: !1 };
function getClientRect(e, t) {
	t === void 0 && (t = defaultOptions);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		let { transform: t, transformOrigin: r } = getWindow(e).getComputedStyle(e);
		t && (n = inverseTransform(n, t, r));
	}
	let { top: r, left: i, width: a, height: o, bottom: s, right: c } = n;
	return {
		top: r,
		left: i,
		width: a,
		height: o,
		bottom: s,
		right: c
	};
}
function getTransformAgnosticClientRect(e) {
	return getClientRect(e, { ignoreTransform: !0 });
}
function getWindowClientRect(e) {
	let t = e.innerWidth, n = e.innerHeight;
	return {
		top: 0,
		left: 0,
		right: t,
		bottom: n,
		width: t,
		height: n
	};
}
function isFixed(e, t) {
	return t === void 0 && (t = getWindow(e).getComputedStyle(e)), t.position === "fixed";
}
function isScrollable(e, t) {
	t === void 0 && (t = getWindow(e).getComputedStyle(e));
	let n = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((e) => {
		let r = t[e];
		return typeof r == "string" ? n.test(r) : !1;
	});
}
function getScrollableAncestors(e, t) {
	let n = [];
	function r(i) {
		if (t != null && n.length >= t || !i) return n;
		if (isDocument(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
		if (!isHTMLElement(i) || isSVGElement(i) || n.includes(i)) return n;
		let a = getWindow(e).getComputedStyle(i);
		return i !== e && isScrollable(i, a) && n.push(i), isFixed(i, a) ? n : r(i.parentNode);
	}
	return e ? r(e) : n;
}
function getFirstScrollableAncestor(e) {
	let [t] = getScrollableAncestors(e, 1);
	return t ?? null;
}
function getScrollableElement(e) {
	return !canUseDOM || !e ? null : isWindow(e) ? e : isNode(e) ? isDocument(e) || e === getOwnerDocument$1(e).scrollingElement ? window : isHTMLElement(e) ? e : null : null;
}
function getScrollXCoordinate(e) {
	return isWindow(e) ? e.scrollX : e.scrollLeft;
}
function getScrollYCoordinate(e) {
	return isWindow(e) ? e.scrollY : e.scrollTop;
}
function getScrollCoordinates(e) {
	return {
		x: getScrollXCoordinate(e),
		y: getScrollYCoordinate(e)
	};
}
var Direction;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Direction ||= {});
function isDocumentScrollingElement(e) {
	return !canUseDOM || !e ? !1 : e === document.scrollingElement;
}
function getScrollPosition(e) {
	let t = {
		x: 0,
		y: 0
	}, n = isDocumentScrollingElement(e) ? {
		height: window.innerHeight,
		width: window.innerWidth
	} : {
		height: e.clientHeight,
		width: e.clientWidth
	}, r = {
		x: e.scrollWidth - n.width,
		y: e.scrollHeight - n.height
	};
	return {
		isTop: e.scrollTop <= t.y,
		isLeft: e.scrollLeft <= t.x,
		isBottom: e.scrollTop >= r.y,
		isRight: e.scrollLeft >= r.x,
		maxScroll: r,
		minScroll: t
	};
}
var defaultThreshold = {
	x: .2,
	y: .2
};
function getScrollDirectionAndSpeed(e, t, n, r, i) {
	let { top: a, left: o, right: s, bottom: c } = n;
	r === void 0 && (r = 10), i === void 0 && (i = defaultThreshold);
	let { isTop: l, isBottom: u, isLeft: d, isRight: f } = getScrollPosition(e), p = {
		x: 0,
		y: 0
	}, m = {
		x: 0,
		y: 0
	}, h = {
		height: t.height * i.y,
		width: t.width * i.x
	};
	return !l && a <= t.top + h.height ? (p.y = Direction.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = Direction.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = Direction.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = Direction.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
		direction: p,
		speed: m
	};
}
function getScrollElementRect(e) {
	if (e === document.scrollingElement) {
		let { innerWidth: e, innerHeight: t } = window;
		return {
			top: 0,
			left: 0,
			right: e,
			bottom: t,
			width: e,
			height: t
		};
	}
	let { top: t, left: n, right: r, bottom: i } = e.getBoundingClientRect();
	return {
		top: t,
		left: n,
		right: r,
		bottom: i,
		width: e.clientWidth,
		height: e.clientHeight
	};
}
function getScrollOffsets(e) {
	return e.reduce((e, t) => add(e, getScrollCoordinates(t)), defaultCoordinates);
}
function getScrollXOffset(e) {
	return e.reduce((e, t) => e + getScrollXCoordinate(t), 0);
}
function getScrollYOffset(e) {
	return e.reduce((e, t) => e + getScrollYCoordinate(t), 0);
}
function scrollIntoViewIfNeeded(e, t) {
	if (t === void 0 && (t = getClientRect), !e) return;
	let { top: n, left: r, bottom: i, right: a } = t(e);
	getFirstScrollableAncestor(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var properties = [[
	"x",
	["left", "right"],
	getScrollXOffset
], [
	"y",
	["top", "bottom"],
	getScrollYOffset
]], Rect = class {
	constructor(e, t) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		let n = getScrollableAncestors(t), r = getScrollOffsets(n);
		this.rect = { ...e }, this.width = e.width, this.height = e.height;
		for (let [e, t, i] of properties) for (let a of t) Object.defineProperty(this, a, {
			get: () => {
				let t = i(n), o = r[e] - t;
				return this.rect[a] + o;
			},
			enumerable: !0
		});
		Object.defineProperty(this, "rect", { enumerable: !1 });
	}
}, Listeners = class {
	constructor(e) {
		this.target = void 0, this.listeners = [], this.removeAll = () => {
			this.listeners.forEach((e) => this.target?.removeEventListener(...e));
		}, this.target = e;
	}
	add(e, t, n) {
		var r;
		(r = this.target) == null || r.addEventListener(e, t, n), this.listeners.push([
			e,
			t,
			n
		]);
	}
};
function getEventListenerTarget(e) {
	let { EventTarget: t } = getWindow(e);
	return e instanceof t ? e : getOwnerDocument$1(e);
}
function hasExceededDistance$1(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var EventName;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(EventName ||= {});
function preventDefault$1(e) {
	e.preventDefault();
}
function stopPropagation$1(e) {
	e.stopPropagation();
}
var KeyboardCode;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(KeyboardCode ||= {});
var defaultKeyboardCodes = {
	start: [KeyboardCode.Space, KeyboardCode.Enter],
	cancel: [KeyboardCode.Esc],
	end: [
		KeyboardCode.Space,
		KeyboardCode.Enter,
		KeyboardCode.Tab
	]
}, defaultKeyboardCoordinateGetter = (e, t) => {
	let { currentCoordinates: n } = t;
	switch (e.code) {
		case KeyboardCode.Right: return {
			...n,
			x: n.x + 25
		};
		case KeyboardCode.Left: return {
			...n,
			x: n.x - 25
		};
		case KeyboardCode.Down: return {
			...n,
			y: n.y + 25
		};
		case KeyboardCode.Up: return {
			...n,
			y: n.y - 25
		};
	}
}, KeyboardSensor = class {
	constructor(e) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
		let { event: { target: t } } = e;
		this.props = e, this.listeners = new Listeners(getOwnerDocument$1(t)), this.windowListeners = new Listeners(getWindow(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
	}
	attach() {
		this.handleStart(), this.windowListeners.add(EventName.Resize, this.handleCancel), this.windowListeners.add(EventName.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
	}
	handleStart() {
		let { activeNode: e, onStart: t } = this.props, n = e.node.current;
		n && scrollIntoViewIfNeeded(n), t(defaultCoordinates);
	}
	handleKeyDown(e) {
		if (isKeyboardEvent(e)) {
			let { active: t, context: n, options: r } = this.props, { keyboardCodes: i = defaultKeyboardCodes, coordinateGetter: a = defaultKeyboardCoordinateGetter, scrollBehavior: o = "smooth" } = r, { code: s } = e;
			if (i.end.includes(s)) {
				this.handleEnd(e);
				return;
			}
			if (i.cancel.includes(s)) {
				this.handleCancel(e);
				return;
			}
			let { collisionRect: c } = n.current, l = c ? {
				x: c.left,
				y: c.top
			} : defaultCoordinates;
			this.referenceCoordinates ||= l;
			let u = a(e, {
				active: t,
				context: n.current,
				currentCoordinates: l
			});
			if (u) {
				let t = subtract(u, l), r = {
					x: 0,
					y: 0
				}, { scrollableAncestors: i } = n.current;
				for (let n of i) {
					let i = e.code, { isTop: a, isRight: s, isLeft: c, isBottom: l, maxScroll: d, minScroll: f } = getScrollPosition(n), p = getScrollElementRect(n), m = {
						x: Math.min(i === KeyboardCode.Right ? p.right - p.width / 2 : p.right, Math.max(i === KeyboardCode.Right ? p.left : p.left + p.width / 2, u.x)),
						y: Math.min(i === KeyboardCode.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(i === KeyboardCode.Down ? p.top : p.top + p.height / 2, u.y))
					}, h = i === KeyboardCode.Right && !s || i === KeyboardCode.Left && !c, g = i === KeyboardCode.Down && !l || i === KeyboardCode.Up && !a;
					if (h && m.x !== u.x) {
						let e = n.scrollLeft + t.x, a = i === KeyboardCode.Right && e <= d.x || i === KeyboardCode.Left && e >= f.x;
						if (a && !t.y) {
							n.scrollTo({
								left: e,
								behavior: o
							});
							return;
						}
						a ? r.x = n.scrollLeft - e : r.x = i === KeyboardCode.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x, r.x && n.scrollBy({
							left: -r.x,
							behavior: o
						});
						break;
					} else if (g && m.y !== u.y) {
						let e = n.scrollTop + t.y, a = i === KeyboardCode.Down && e <= d.y || i === KeyboardCode.Up && e >= f.y;
						if (a && !t.x) {
							n.scrollTo({
								top: e,
								behavior: o
							});
							return;
						}
						a ? r.y = n.scrollTop - e : r.y = i === KeyboardCode.Down ? n.scrollTop - d.y : n.scrollTop - f.y, r.y && n.scrollBy({
							top: -r.y,
							behavior: o
						});
						break;
					}
				}
				this.handleMove(e, add(subtract(u, this.referenceCoordinates), r));
			}
		}
	}
	handleMove(e, t) {
		let { onMove: n } = this.props;
		e.preventDefault(), n(t);
	}
	handleEnd(e) {
		let { onEnd: t } = this.props;
		e.preventDefault(), this.detach(), t();
	}
	handleCancel(e) {
		let { onCancel: t } = this.props;
		e.preventDefault(), this.detach(), t();
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll();
	}
};
KeyboardSensor.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let { keyboardCodes: r = defaultKeyboardCodes, onActivation: i } = t, { active: a } = n, { code: o } = e.nativeEvent;
		if (r.start.includes(o)) {
			let t = a.activatorNode.current;
			return t && e.target !== t ? !1 : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
		}
		return !1;
	}
}];
function isDistanceConstraint$1(e) {
	return !!(e && "distance" in e);
}
function isDelayConstraint$1(e) {
	return !!(e && "delay" in e);
}
var AbstractPointerSensor = class {
	constructor(e, t, n) {
		n === void 0 && (n = getEventListenerTarget(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
		let { event: r } = e, { target: i } = r;
		this.props = e, this.events = t, this.document = getOwnerDocument$1(i), this.documentListeners = new Listeners(this.document), this.listeners = new Listeners(n), this.windowListeners = new Listeners(getWindow(i)), this.initialCoordinates = getEventCoordinates(r) ?? defaultCoordinates, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let { events: e, props: { options: { activationConstraint: t, bypassActivationConstraint: n } } } = this;
		if (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(EventName.Resize, this.handleCancel), this.windowListeners.add(EventName.DragStart, preventDefault$1), this.windowListeners.add(EventName.VisibilityChange, this.handleCancel), this.windowListeners.add(EventName.ContextMenu, preventDefault$1), this.documentListeners.add(EventName.Keydown, this.handleKeydown), t) {
			if (n != null && n({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (isDelayConstraint$1(t)) {
				this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
				return;
			}
			if (isDistanceConstraint$1(t)) {
				this.handlePending(t);
				return;
			}
		}
		this.handleStart();
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
	}
	handlePending(e, t) {
		let { active: n, onPending: r } = this.props;
		r(n, e, this.initialCoordinates, t);
	}
	handleStart() {
		let { initialCoordinates: e } = this, { onStart: t } = this.props;
		e && (this.activated = !0, this.documentListeners.add(EventName.Click, stopPropagation$1, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection), t(e));
	}
	handleMove(e) {
		let { activated: t, initialCoordinates: n, props: r } = this, { onMove: i, options: { activationConstraint: a } } = r;
		if (!n) return;
		let o = getEventCoordinates(e) ?? defaultCoordinates, s = subtract(n, o);
		if (!t && a) {
			if (isDistanceConstraint$1(a)) {
				if (a.tolerance != null && hasExceededDistance$1(s, a.tolerance)) return this.handleCancel();
				if (hasExceededDistance$1(s, a.distance)) return this.handleStart();
			}
			if (isDelayConstraint$1(a) && hasExceededDistance$1(s, a.tolerance)) return this.handleCancel();
			this.handlePending(a, s);
			return;
		}
		e.cancelable && e.preventDefault(), i(o);
	}
	handleEnd() {
		let { onAbort: e, onEnd: t } = this.props;
		this.detach(), this.activated || e(this.props.active), t();
	}
	handleCancel() {
		let { onAbort: e, onCancel: t } = this.props;
		this.detach(), this.activated || e(this.props.active), t();
	}
	handleKeydown(e) {
		e.code === KeyboardCode.Esc && this.handleCancel();
	}
	removeTextSelection() {
		var e;
		(e = this.document.getSelection()) == null || e.removeAllRanges();
	}
}, events = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
}, PointerSensor = class extends AbstractPointerSensor {
	constructor(e) {
		let { event: t } = e, n = getOwnerDocument$1(t.target);
		super(e, events, n);
	}
};
PointerSensor.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
	}
}];
var events$1 = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
}, MouseButton;
(function(e) {
	e[e.RightClick = 2] = "RightClick";
})(MouseButton ||= {});
var MouseSensor = class extends AbstractPointerSensor {
	constructor(e) {
		super(e, events$1, getOwnerDocument$1(e.event.target));
	}
};
MouseSensor.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return n.button === MouseButton.RightClick ? !1 : (r?.({ event: n }), !0);
	}
}];
var events$2 = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
}, TouchSensor = class extends AbstractPointerSensor {
	constructor(e) {
		super(e, events$2);
	}
	static setup() {
		return window.addEventListener(events$2.move.name, e, {
			capture: !1,
			passive: !1
		}), function() {
			window.removeEventListener(events$2.move.name, e);
		};
		function e() {}
	}
};
TouchSensor.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t, { touches: i } = n;
		return i.length > 1 ? !1 : (r?.({ event: n }), !0);
	}
}];
var AutoScrollActivator;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(AutoScrollActivator ||= {});
var TraversalOrder;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(TraversalOrder ||= {});
function useAutoScroller(e) {
	let { acceleration: t, activator: n = AutoScrollActivator.Pointer, canScroll: r, draggingRect: i, enabled: a, interval: o = 5, order: s = TraversalOrder.TreeOrder, pointerCoordinates: c, scrollableAncestors: l, scrollableAncestorRects: u, delta: d, threshold: f } = e, p = useScrollIntent({
		delta: d,
		disabled: !a
	}), [m, h] = useInterval(), g = (0, import_react.useRef)({
		x: 0,
		y: 0
	}), _ = (0, import_react.useRef)({
		x: 0,
		y: 0
	}), v = (0, import_react.useMemo)(() => {
		switch (n) {
			case AutoScrollActivator.Pointer: return c ? {
				top: c.y,
				bottom: c.y,
				left: c.x,
				right: c.x
			} : null;
			case AutoScrollActivator.DraggableRect: return i;
		}
	}, [
		n,
		i,
		c
	]), y = (0, import_react.useRef)(null), b = (0, import_react.useCallback)(() => {
		let e = y.current;
		if (!e) return;
		let t = g.current.x * _.current.x, n = g.current.y * _.current.y;
		e.scrollBy(t, n);
	}, []), x = (0, import_react.useMemo)(() => s === TraversalOrder.TreeOrder ? [...l].reverse() : l, [s, l]);
	(0, import_react.useEffect)(() => {
		if (!a || !l.length || !v) {
			h();
			return;
		}
		for (let e of x) {
			if (r?.(e) === !1) continue;
			let n = u[l.indexOf(e)];
			if (!n) continue;
			let { direction: i, speed: a } = getScrollDirectionAndSpeed(e, n, v, t, f);
			for (let e of ["x", "y"]) p[e][i[e]] || (a[e] = 0, i[e] = 0);
			if (a.x > 0 || a.y > 0) {
				h(), y.current = e, m(b, o), g.current = a, _.current = i;
				return;
			}
		}
		g.current = {
			x: 0,
			y: 0
		}, _.current = {
			x: 0,
			y: 0
		}, h();
	}, [
		t,
		b,
		r,
		h,
		a,
		o,
		JSON.stringify(v),
		JSON.stringify(p),
		m,
		l,
		x,
		u,
		JSON.stringify(f)
	]);
}
var defaultScrollIntent = {
	x: {
		[Direction.Backward]: !1,
		[Direction.Forward]: !1
	},
	y: {
		[Direction.Backward]: !1,
		[Direction.Forward]: !1
	}
};
function useScrollIntent(e) {
	let { delta: t, disabled: n } = e, r = usePrevious(t);
	return useLazyMemo((e) => {
		if (n || !r || !e) return defaultScrollIntent;
		let i = {
			x: Math.sign(t.x - r.x),
			y: Math.sign(t.y - r.y)
		};
		return {
			x: {
				[Direction.Backward]: e.x[Direction.Backward] || i.x === -1,
				[Direction.Forward]: e.x[Direction.Forward] || i.x === 1
			},
			y: {
				[Direction.Backward]: e.y[Direction.Backward] || i.y === -1,
				[Direction.Forward]: e.y[Direction.Forward] || i.y === 1
			}
		};
	}, [
		n,
		t,
		r
	]);
}
function useCachedNode(e, t) {
	let n = t == null ? void 0 : e.get(t), r = n ? n.node.current : null;
	return useLazyMemo((e) => t == null ? null : r ?? e ?? null, [r, t]);
}
function useCombineActivators(e, t) {
	return (0, import_react.useMemo)(() => e.reduce((e, n) => {
		let { sensor: r } = n, i = r.activators.map((e) => ({
			eventName: e.eventName,
			handler: t(e.handler, n)
		}));
		return [...e, ...i];
	}, []), [e, t]);
}
var MeasuringStrategy;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(MeasuringStrategy ||= {});
var MeasuringFrequency;
(function(e) {
	e.Optimized = "optimized";
})(MeasuringFrequency ||= {});
var defaultValue = /* @__PURE__ */ new Map();
function useDroppableMeasuring(e, t) {
	let { dragging: n, dependencies: r, config: i } = t, [a, o] = (0, import_react.useState)(null), { frequency: s, measure: c, strategy: l } = i, u = (0, import_react.useRef)(e), d = g(), f = useLatestValue(d), p = (0, import_react.useCallback)(function(e) {
		e === void 0 && (e = []), !f.current && o((t) => t === null ? e : t.concat(e.filter((e) => !t.includes(e))));
	}, [f]), m = (0, import_react.useRef)(null), h = useLazyMemo((t) => {
		if (d && !n) return defaultValue;
		if (!t || t === defaultValue || u.current !== e || a != null) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e) {
				if (!n) continue;
				if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
					t.set(n.id, n.rect.current);
					continue;
				}
				let e = n.node.current, r = e ? new Rect(c(e), e) : null;
				n.rect.current = r, r && t.set(n.id, r);
			}
			return t;
		}
		return t;
	}, [
		e,
		a,
		n,
		d,
		c
	]);
	return (0, import_react.useEffect)(() => {
		u.current = e;
	}, [e]), (0, import_react.useEffect)(() => {
		d || p();
	}, [n, d]), (0, import_react.useEffect)(() => {
		a && a.length > 0 && o(null);
	}, [JSON.stringify(a)]), (0, import_react.useEffect)(() => {
		d || typeof s != "number" || m.current !== null || (m.current = setTimeout(() => {
			p(), m.current = null;
		}, s));
	}, [
		s,
		d,
		p,
		...r
	]), {
		droppableRects: h,
		measureDroppableContainers: p,
		measuringScheduled: a != null
	};
	function g() {
		switch (l) {
			case MeasuringStrategy.Always: return !1;
			case MeasuringStrategy.BeforeDragging: return n;
			default: return !n;
		}
	}
}
function useInitialValue(e, t) {
	return useLazyMemo((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function useInitialRect(e, t) {
	return useInitialValue(e, t);
}
function useMutationObserver(e) {
	let { callback: t, disabled: n } = e, r = useEvent(t), i = (0, import_react.useMemo)(() => {
		if (n || typeof window > "u" || window.MutationObserver === void 0) return;
		let { MutationObserver: e } = window;
		return new e(r);
	}, [r, n]);
	return (0, import_react.useEffect)(() => () => i?.disconnect(), [i]), i;
}
function useResizeObserver(e) {
	let { callback: t, disabled: n } = e, r = useEvent(t), i = (0, import_react.useMemo)(() => {
		if (n || typeof window > "u" || window.ResizeObserver === void 0) return;
		let { ResizeObserver: e } = window;
		return new e(r);
	}, [n]);
	return (0, import_react.useEffect)(() => () => i?.disconnect(), [i]), i;
}
function defaultMeasure(e) {
	return new Rect(getClientRect(e), e);
}
function useRect(e, t, n) {
	t === void 0 && (t = defaultMeasure);
	let [r, i] = (0, import_react.useState)(null);
	function a() {
		i((r) => {
			if (!e) return null;
			if (e.isConnected === !1) return r ?? n ?? null;
			let i = t(e);
			return JSON.stringify(r) === JSON.stringify(i) ? r : i;
		});
	}
	let o = useMutationObserver({ callback(t) {
		if (e) for (let n of t) {
			let { type: t, target: r } = n;
			if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
				a();
				break;
			}
		}
	} }), s = useResizeObserver({ callback: a });
	return useIsomorphicLayoutEffect(() => {
		a(), e ? (s?.observe(e), o?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (s?.disconnect(), o?.disconnect());
	}, [e]), r;
}
function useRectDelta(e) {
	return getRectDelta(e, useInitialValue(e));
}
var defaultValue$1 = [];
function useScrollableAncestors(e) {
	let t = (0, import_react.useRef)(e), n = useLazyMemo((n) => e ? n && n !== defaultValue$1 && e && t.current && e.parentNode === t.current.parentNode ? n : getScrollableAncestors(e) : defaultValue$1, [e]);
	return (0, import_react.useEffect)(() => {
		t.current = e;
	}, [e]), n;
}
function useScrollOffsets(e) {
	let [t, n] = (0, import_react.useState)(null), r = (0, import_react.useRef)(e), i = (0, import_react.useCallback)((e) => {
		let t = getScrollableElement(e.target);
		t && n((e) => e ? (e.set(t, getScrollCoordinates(t)), new Map(e)) : null);
	}, []);
	return (0, import_react.useEffect)(() => {
		let t = r.current;
		if (e !== t) {
			a(t);
			let o = e.map((e) => {
				let t = getScrollableElement(e);
				return t ? (t.addEventListener("scroll", i, { passive: !0 }), [t, getScrollCoordinates(t)]) : null;
			}).filter((e) => e != null);
			n(o.length ? new Map(o) : null), r.current = e;
		}
		return () => {
			a(e), a(t);
		};
		function a(e) {
			e.forEach((e) => {
				getScrollableElement(e)?.removeEventListener("scroll", i);
			});
		}
	}, [i, e]), (0, import_react.useMemo)(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => add(e, t), defaultCoordinates) : getScrollOffsets(e) : defaultCoordinates, [e, t]);
}
function useScrollOffsetsDelta(e, t) {
	t === void 0 && (t = []);
	let n = (0, import_react.useRef)(null);
	return (0, import_react.useEffect)(() => {
		n.current = null;
	}, t), (0, import_react.useEffect)(() => {
		let t = e !== defaultCoordinates;
		t && !n.current && (n.current = e), !t && n.current && (n.current = null);
	}, [e]), n.current ? subtract(e, n.current) : defaultCoordinates;
}
function useSensorSetup(e) {
	(0, import_react.useEffect)(() => {
		if (!canUseDOM) return;
		let t = e.map((e) => {
			let { sensor: t } = e;
			return t.setup == null ? void 0 : t.setup();
		});
		return () => {
			for (let e of t) e?.();
		};
	}, e.map((e) => {
		let { sensor: t } = e;
		return t;
	}));
}
function useSyntheticListeners(e, t) {
	return (0, import_react.useMemo)(() => e.reduce((e, n) => {
		let { eventName: r, handler: i } = n;
		return e[r] = (e) => {
			i(e, t);
		}, e;
	}, {}), [e, t]);
}
function useWindowRect(e) {
	return (0, import_react.useMemo)(() => e ? getWindowClientRect(e) : null, [e]);
}
var defaultValue$2 = [];
function useRects(e, t) {
	t === void 0 && (t = getClientRect);
	let [n] = e, r = useWindowRect(n ? getWindow(n) : null), [i, a] = (0, import_react.useState)(defaultValue$2);
	function o() {
		a(() => e.length ? e.map((e) => isDocumentScrollingElement(e) ? r : new Rect(t(e), e)) : defaultValue$2);
	}
	let s = useResizeObserver({ callback: o });
	return useIsomorphicLayoutEffect(() => {
		s?.disconnect(), o(), e.forEach((e) => s?.observe(e));
	}, [e]), i;
}
function getMeasurableNode(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	let t = e.children[0];
	return isHTMLElement(t) ? t : e;
}
function useDragOverlayMeasuring(e) {
	let { measure: t } = e, [n, r] = (0, import_react.useState)(null), i = useResizeObserver({ callback: (0, import_react.useCallback)((e) => {
		for (let { target: n } of e) if (isHTMLElement(n)) {
			r((e) => {
				let r = t(n);
				return e ? {
					...e,
					width: r.width,
					height: r.height
				} : r;
			});
			break;
		}
	}, [t]) }), [a, o] = useNodeRef((0, import_react.useCallback)((e) => {
		let n = getMeasurableNode(e);
		i?.disconnect(), n && i?.observe(n), r(n ? t(n) : null);
	}, [t, i]));
	return (0, import_react.useMemo)(() => ({
		nodeRef: a,
		rect: n,
		setRef: o
	}), [
		n,
		a,
		o
	]);
}
var defaultSensors = [{
	sensor: PointerSensor,
	options: {}
}, {
	sensor: KeyboardSensor,
	options: {}
}], defaultData = { current: {} }, defaultMeasuringConfiguration = {
	draggable: { measure: getTransformAgnosticClientRect },
	droppable: {
		measure: getTransformAgnosticClientRect,
		strategy: MeasuringStrategy.WhileDragging,
		frequency: MeasuringFrequency.Optimized
	},
	dragOverlay: { measure: getClientRect }
}, DroppableContainersMap = class extends Map {
	get(e) {
		return e == null ? void 0 : super.get(e) ?? void 0;
	}
	toArray() {
		return Array.from(this.values());
	}
	getEnabled() {
		return this.toArray().filter((e) => {
			let { disabled: t } = e;
			return !t;
		});
	}
	getNodeFor(e) {
		return this.get(e)?.node.current ?? void 0;
	}
}, defaultPublicContext = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /* @__PURE__ */ new Map(),
	droppableRects: /* @__PURE__ */ new Map(),
	droppableContainers: /* @__PURE__ */ new DroppableContainersMap(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: noop
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: defaultMeasuringConfiguration,
	measureDroppableContainers: noop,
	windowRect: null,
	measuringScheduled: !1
}, defaultInternalContext = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: noop,
	draggableNodes: /* @__PURE__ */ new Map(),
	over: null,
	measureDroppableContainers: noop
}, InternalContext = /* @__PURE__ */ (0, import_react.createContext)(defaultInternalContext), PublicContext = /* @__PURE__ */ (0, import_react.createContext)(defaultPublicContext);
function getInitialState() {
	return {
		draggable: {
			active: null,
			initialCoordinates: {
				x: 0,
				y: 0
			},
			nodes: /* @__PURE__ */ new Map(),
			translate: {
				x: 0,
				y: 0
			}
		},
		droppable: { containers: new DroppableContainersMap() }
	};
}
function reducer(e, t) {
	switch (t.type) {
		case Action.DragStart: return {
			...e,
			draggable: {
				...e.draggable,
				initialCoordinates: t.initialCoordinates,
				active: t.active
			}
		};
		case Action.DragMove: return e.draggable.active == null ? e : {
			...e,
			draggable: {
				...e.draggable,
				translate: {
					x: t.coordinates.x - e.draggable.initialCoordinates.x,
					y: t.coordinates.y - e.draggable.initialCoordinates.y
				}
			}
		};
		case Action.DragEnd:
		case Action.DragCancel: return {
			...e,
			draggable: {
				...e.draggable,
				active: null,
				initialCoordinates: {
					x: 0,
					y: 0
				},
				translate: {
					x: 0,
					y: 0
				}
			}
		};
		case Action.RegisterDroppable: {
			let { element: n } = t, { id: r } = n, i = new DroppableContainersMap(e.droppable.containers);
			return i.set(r, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: i
				}
			};
		}
		case Action.SetDroppableDisabled: {
			let { id: n, key: r, disabled: i } = t, a = e.droppable.containers.get(n);
			if (!a || r !== a.key) return e;
			let o = new DroppableContainersMap(e.droppable.containers);
			return o.set(n, {
				...a,
				disabled: i
			}), {
				...e,
				droppable: {
					...e.droppable,
					containers: o
				}
			};
		}
		case Action.UnregisterDroppable: {
			let { id: n, key: r } = t, i = e.droppable.containers.get(n);
			if (!i || r !== i.key) return e;
			let a = new DroppableContainersMap(e.droppable.containers);
			return a.delete(n), {
				...e,
				droppable: {
					...e.droppable,
					containers: a
				}
			};
		}
		default: return e;
	}
}
function RestoreFocus(e) {
	let { disabled: t } = e, { active: n, activatorEvent: r, draggableNodes: i } = (0, import_react.useContext)(InternalContext), a = usePrevious(r), o = usePrevious(n?.id);
	return (0, import_react.useEffect)(() => {
		if (!t && !r && a && o != null) {
			if (!isKeyboardEvent(a) || document.activeElement === a.target) return;
			let e = i.get(o);
			if (!e) return;
			let { activatorNode: t, node: n } = e;
			if (!t.current && !n.current) return;
			requestAnimationFrame(() => {
				for (let e of [t.current, n.current]) {
					if (!e) continue;
					let t = findFirstFocusableNode(e);
					if (t) {
						t.focus();
						break;
					}
				}
			});
		}
	}, [
		r,
		t,
		i,
		o,
		a
	]), null;
}
function applyModifiers(e, t) {
	let { transform: n, ...r } = t;
	return e != null && e.length ? e.reduce((e, t) => t({
		transform: e,
		...r
	}), n) : n;
}
function useMeasuringConfiguration(e) {
	return (0, import_react.useMemo)(() => ({
		draggable: {
			...defaultMeasuringConfiguration.draggable,
			...e?.draggable
		},
		droppable: {
			...defaultMeasuringConfiguration.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...defaultMeasuringConfiguration.dragOverlay,
			...e?.dragOverlay
		}
	}), [
		e?.draggable,
		e?.droppable,
		e?.dragOverlay
	]);
}
function useLayoutShiftScrollCompensation(e) {
	let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e, a = (0, import_react.useRef)(!1), { x: o, y: s } = typeof i == "boolean" ? {
		x: i,
		y: i
	} : i;
	useIsomorphicLayoutEffect(() => {
		if (!o && !s || !t) {
			a.current = !1;
			return;
		}
		if (a.current || !r) return;
		let e = t?.node.current;
		if (!e || e.isConnected === !1) return;
		let i = getRectDelta(n(e), r);
		if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
			let t = getFirstScrollableAncestor(e);
			t && t.scrollBy({
				top: i.y,
				left: i.x
			});
		}
	}, [
		t,
		o,
		s,
		r,
		n
	]);
}
var ActiveDraggableContext = /* @__PURE__ */ (0, import_react.createContext)({
	...defaultCoordinates,
	scaleX: 1,
	scaleY: 1
}), Status;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Status ||= {});
var DndContext = /* @__PURE__ */ (0, import_react.memo)(function(e) {
	let { id: t, accessibility: n, autoScroll: r = !0, children: i, sensors: a = defaultSensors, collisionDetection: o = rectIntersection, measuring: s, modifiers: c, ...l } = e, [u, d] = (0, import_react.useReducer)(reducer, void 0, getInitialState), [f, p] = useDndMonitorProvider(), [m, h] = (0, import_react.useState)(Status.Uninitialized), g = m === Status.Initialized, { draggable: { active: _, nodes: v, translate: y }, droppable: { containers: b } } = u, x = _ == null ? null : v.get(_), S = (0, import_react.useRef)({
		initial: null,
		translated: null
	}), C = (0, import_react.useMemo)(() => _ == null ? null : {
		id: _,
		data: x?.data ?? defaultData,
		rect: S
	}, [_, x]), w = (0, import_react.useRef)(null), [T, E] = (0, import_react.useState)(null), [D, O] = (0, import_react.useState)(null), k = useLatestValue(l, Object.values(l)), A = useUniqueId("DndDescribedBy", t), j = (0, import_react.useMemo)(() => b.getEnabled(), [b]), M = useMeasuringConfiguration(s), { droppableRects: N, measureDroppableContainers: P, measuringScheduled: F } = useDroppableMeasuring(j, {
		dragging: g,
		dependencies: [y.x, y.y],
		config: M.droppable
	}), I = useCachedNode(v, _), L = (0, import_react.useMemo)(() => D ? getEventCoordinates(D) : null, [D]), R = no(), z = useInitialRect(I, M.draggable.measure);
	useLayoutShiftScrollCompensation({
		activeNode: _ == null ? null : v.get(_),
		config: R.layoutShiftCompensation,
		initialRect: z,
		measure: M.draggable.measure
	});
	let B = useRect(I, M.draggable.measure, z), V = useRect(I ? I.parentElement : null), H = (0, import_react.useRef)({
		activatorEvent: null,
		active: null,
		activeNode: I,
		collisionRect: null,
		collisions: null,
		droppableRects: N,
		draggableNodes: v,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers: b,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	}), U = b.getNodeFor(H.current.over?.id), W = useDragOverlayMeasuring({ measure: M.dragOverlay.measure }), G = W.nodeRef.current ?? I, K = g ? W.rect ?? B : null, Ba = !!(W.nodeRef.current && W.rect), Va = useRectDelta(Ba ? null : B), Ha = useWindowRect(G ? getWindow(G) : null), q = useScrollableAncestors(g ? U ?? I : null), J = useRects(q), Y = applyModifiers(c, {
		transform: {
			x: y.x - Va.x,
			y: y.y - Va.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent: D,
		active: C,
		activeNodeRect: B,
		containerNodeRect: V,
		draggingNodeRect: K,
		over: H.current.over,
		overlayNodeRect: W.rect,
		scrollableAncestors: q,
		scrollableAncestorRects: J,
		windowRect: Ha
	}), Ua = L ? add(L, y) : null, Wa = useScrollOffsets(q), Ga = useScrollOffsetsDelta(Wa), Ka = useScrollOffsetsDelta(Wa, [B]), Z = add(Y, Ga), Q = K ? getAdjustedRect(K, Y) : null, qa = C && Q ? o({
		active: C,
		collisionRect: Q,
		droppableRects: N,
		droppableContainers: j,
		pointerCoordinates: Ua
	}) : null, Ja = getFirstCollision(qa, "id"), [$, Ya] = (0, import_react.useState)(null), Xa = adjustScale(Ba ? Y : add(Y, Ka), $?.rect ?? null, B), Za = (0, import_react.useRef)(null), Qa = (0, import_react.useCallback)((e, t) => {
		let { sensor: n, options: r } = t;
		if (w.current == null) return;
		let i = v.get(w.current);
		if (!i) return;
		let a = e.nativeEvent;
		Za.current = new n({
			active: w.current,
			activeNode: i,
			event: a,
			options: r,
			context: H,
			onAbort(e) {
				if (!v.get(e)) return;
				let { onDragAbort: t } = k.current, n = { id: e };
				t?.(n), f({
					type: "onDragAbort",
					event: n
				});
			},
			onPending(e, t, n, r) {
				if (!v.get(e)) return;
				let { onDragPending: i } = k.current, a = {
					id: e,
					constraint: t,
					initialCoordinates: n,
					offset: r
				};
				i?.(a), f({
					type: "onDragPending",
					event: a
				});
			},
			onStart(e) {
				let t = w.current;
				if (t == null) return;
				let n = v.get(t);
				if (!n) return;
				let { onDragStart: r } = k.current, i = {
					activatorEvent: a,
					active: {
						id: t,
						data: n.data,
						rect: S
					}
				};
				(0, import_react_dom.unstable_batchedUpdates)(() => {
					r?.(i), h(Status.Initializing), d({
						type: Action.DragStart,
						initialCoordinates: e,
						active: t
					}), f({
						type: "onDragStart",
						event: i
					}), E(Za.current), O(a);
				});
			},
			onMove(e) {
				d({
					type: Action.DragMove,
					coordinates: e
				});
			},
			onEnd: o(Action.DragEnd),
			onCancel: o(Action.DragCancel)
		});
		function o(e) {
			return async function() {
				let { active: t, collisions: n, over: r, scrollAdjustedTranslate: i } = H.current, o = null;
				if (t && i) {
					let { cancelDrop: s } = k.current;
					o = {
						activatorEvent: a,
						active: t,
						collisions: n,
						delta: i,
						over: r
					}, e === Action.DragEnd && typeof s == "function" && await Promise.resolve(s(o)) && (e = Action.DragCancel);
				}
				w.current = null, (0, import_react_dom.unstable_batchedUpdates)(() => {
					d({ type: e }), h(Status.Uninitialized), Ya(null), E(null), O(null), Za.current = null;
					let t = e === Action.DragEnd ? "onDragEnd" : "onDragCancel";
					if (o) {
						let e = k.current[t];
						e?.(o), f({
							type: t,
							event: o
						});
					}
				});
			};
		}
	}, [v]), $a = useCombineActivators(a, (0, import_react.useCallback)((e, t) => (n, r) => {
		let i = n.nativeEvent, a = v.get(r);
		if (w.current !== null || !a || i.dndKit || i.defaultPrevented) return;
		let o = { active: a };
		e(n, t.options, o) === !0 && (i.dndKit = { capturedBy: t.sensor }, w.current = r, Qa(n, t));
	}, [v, Qa]));
	useSensorSetup(a), useIsomorphicLayoutEffect(() => {
		B && m === Status.Initializing && h(Status.Initialized);
	}, [B, m]), (0, import_react.useEffect)(() => {
		let { onDragMove: e } = k.current, { active: t, activatorEvent: n, collisions: r, over: i } = H.current;
		if (!t || !n) return;
		let a = {
			active: t,
			activatorEvent: n,
			collisions: r,
			delta: {
				x: Z.x,
				y: Z.y
			},
			over: i
		};
		(0, import_react_dom.unstable_batchedUpdates)(() => {
			e?.(a), f({
				type: "onDragMove",
				event: a
			});
		});
	}, [Z.x, Z.y]), (0, import_react.useEffect)(() => {
		let { active: e, activatorEvent: t, collisions: n, droppableContainers: r, scrollAdjustedTranslate: i } = H.current;
		if (!e || w.current == null || !t || !i) return;
		let { onDragOver: a } = k.current, o = r.get(Ja), s = o && o.rect.current ? {
			id: o.id,
			rect: o.rect.current,
			data: o.data,
			disabled: o.disabled
		} : null, c = {
			active: e,
			activatorEvent: t,
			collisions: n,
			delta: {
				x: i.x,
				y: i.y
			},
			over: s
		};
		(0, import_react_dom.unstable_batchedUpdates)(() => {
			Ya(s), a?.(c), f({
				type: "onDragOver",
				event: c
			});
		});
	}, [Ja]), useIsomorphicLayoutEffect(() => {
		H.current = {
			activatorEvent: D,
			active: C,
			activeNode: I,
			collisionRect: Q,
			collisions: qa,
			droppableRects: N,
			draggableNodes: v,
			draggingNode: G,
			draggingNodeRect: K,
			droppableContainers: b,
			over: $,
			scrollableAncestors: q,
			scrollAdjustedTranslate: Z
		}, S.current = {
			initial: K,
			translated: Q
		};
	}, [
		C,
		I,
		qa,
		Q,
		v,
		G,
		K,
		N,
		b,
		$,
		q,
		Z
	]), useAutoScroller({
		...R,
		delta: y,
		draggingRect: Q,
		pointerCoordinates: Ua,
		scrollableAncestors: q,
		scrollableAncestorRects: J
	});
	let eo = (0, import_react.useMemo)(() => ({
		active: C,
		activeNode: I,
		activeNodeRect: B,
		activatorEvent: D,
		collisions: qa,
		containerNodeRect: V,
		dragOverlay: W,
		draggableNodes: v,
		droppableContainers: b,
		droppableRects: N,
		over: $,
		measureDroppableContainers: P,
		scrollableAncestors: q,
		scrollableAncestorRects: J,
		measuringConfiguration: M,
		measuringScheduled: F,
		windowRect: Ha
	}), [
		C,
		I,
		B,
		D,
		qa,
		V,
		W,
		v,
		b,
		N,
		$,
		P,
		q,
		J,
		M,
		F,
		Ha
	]), to = (0, import_react.useMemo)(() => ({
		activatorEvent: D,
		activators: $a,
		active: C,
		activeNodeRect: B,
		ariaDescribedById: { draggable: A },
		dispatch: d,
		draggableNodes: v,
		over: $,
		measureDroppableContainers: P
	}), [
		D,
		$a,
		C,
		B,
		d,
		A,
		v,
		$,
		P
	]);
	return import_react.createElement(DndMonitorContext.Provider, { value: p }, import_react.createElement(InternalContext.Provider, { value: to }, import_react.createElement(PublicContext.Provider, { value: eo }, import_react.createElement(ActiveDraggableContext.Provider, { value: Xa }, i)), import_react.createElement(RestoreFocus, { disabled: n?.restoreFocus === !1 })), import_react.createElement(Accessibility, {
		...n,
		hiddenTextDescribedById: A
	}));
	function no() {
		let e = T?.autoScrollEnabled === !1, t = typeof r == "object" ? r.enabled === !1 : r === !1, n = g && !e && !t;
		return typeof r == "object" ? {
			...r,
			enabled: n
		} : { enabled: n };
	}
}), NullContext = /* @__PURE__ */ (0, import_react.createContext)(null), defaultRole = "button", ID_PREFIX$1 = "Draggable";
function useDraggable(e) {
	let { id: t, data: n, disabled: r = !1, attributes: i } = e, a = useUniqueId(ID_PREFIX$1), { activators: o, activatorEvent: s, active: c, activeNodeRect: l, ariaDescribedById: u, draggableNodes: d, over: f } = (0, import_react.useContext)(InternalContext), { role: p = defaultRole, roleDescription: m = "draggable", tabIndex: h = 0 } = i ?? {}, g = c?.id === t, _ = (0, import_react.useContext)(g ? ActiveDraggableContext : NullContext), [v, y] = useNodeRef(), [b, x] = useNodeRef(), S = useSyntheticListeners(o, t), C = useLatestValue(n);
	return useIsomorphicLayoutEffect(() => (d.set(t, {
		id: t,
		key: a,
		node: v,
		activatorNode: b,
		data: C
	}), () => {
		let e = d.get(t);
		e && e.key === a && d.delete(t);
	}), [d, t]), {
		active: c,
		activatorEvent: s,
		activeNodeRect: l,
		attributes: (0, import_react.useMemo)(() => ({
			role: p,
			tabIndex: h,
			"aria-disabled": r,
			"aria-pressed": g && p === defaultRole ? !0 : void 0,
			"aria-roledescription": m,
			"aria-describedby": u.draggable
		}), [
			r,
			p,
			h,
			g,
			m,
			u.draggable
		]),
		isDragging: g,
		listeners: r ? void 0 : S,
		node: v,
		over: f,
		setNodeRef: y,
		setActivatorNodeRef: x,
		transform: _
	};
}
function useDndContext() {
	return (0, import_react.useContext)(PublicContext);
}
var ID_PREFIX$1$1 = "Droppable", defaultResizeObserverConfig = { timeout: 25 };
function useDroppable(e) {
	let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e, a = useUniqueId(ID_PREFIX$1$1), { active: o, dispatch: s, over: c, measureDroppableContainers: l } = (0, import_react.useContext)(InternalContext), u = (0, import_react.useRef)({ disabled: n }), d = (0, import_react.useRef)(!1), f = (0, import_react.useRef)(null), p = (0, import_react.useRef)(null), { disabled: m, updateMeasurementsFor: h, timeout: g } = {
		...defaultResizeObserverConfig,
		...i
	}, _ = useLatestValue(h ?? r), v = useResizeObserver({
		callback: (0, import_react.useCallback)(() => {
			if (!d.current) {
				d.current = !0;
				return;
			}
			p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
				l(Array.isArray(_.current) ? _.current : [_.current]), p.current = null;
			}, g);
		}, [g]),
		disabled: m || !o
	}), [y, b] = useNodeRef((0, import_react.useCallback)((e, t) => {
		v && (t && (v.unobserve(t), d.current = !1), e && v.observe(e));
	}, [v])), x = useLatestValue(t);
	return (0, import_react.useEffect)(() => {
		!v || !y.current || (v.disconnect(), d.current = !1, v.observe(y.current));
	}, [y, v]), (0, import_react.useEffect)(() => (s({
		type: Action.RegisterDroppable,
		element: {
			id: r,
			key: a,
			disabled: n,
			node: y,
			rect: f,
			data: x
		}
	}), () => s({
		type: Action.UnregisterDroppable,
		key: a,
		id: r
	})), [r]), (0, import_react.useEffect)(() => {
		n !== u.current.disabled && (s({
			type: Action.SetDroppableDisabled,
			id: r,
			key: a,
			disabled: n
		}), u.current.disabled = n);
	}, [
		r,
		a,
		n,
		s
	]), {
		active: o,
		rect: f,
		isOver: c?.id === r,
		node: y,
		over: c,
		setNodeRef: b
	};
}
function AnimationManager(e) {
	let { animation: t, children: n } = e, [r, i] = (0, import_react.useState)(null), [a, o] = (0, import_react.useState)(null), s = usePrevious(n);
	return !n && !r && s && i(s), useIsomorphicLayoutEffect(() => {
		if (!a) return;
		let e = r?.key, n = r?.props.id;
		if (e == null || n == null) {
			i(null);
			return;
		}
		Promise.resolve(t(n, a)).then(() => {
			i(null);
		});
	}, [
		t,
		r,
		a
	]), import_react.createElement(import_react.Fragment, null, n, r ? (0, import_react.cloneElement)(r, { ref: o }) : null);
}
var defaultTransform = {
	x: 0,
	y: 0,
	scaleX: 1,
	scaleY: 1
};
function NullifiedContextProvider(e) {
	let { children: t } = e;
	return import_react.createElement(InternalContext.Provider, { value: defaultInternalContext }, import_react.createElement(ActiveDraggableContext.Provider, { value: defaultTransform }, t));
}
var baseStyles = {
	position: "fixed",
	touchAction: "none"
}, defaultTransition$1 = (e) => isKeyboardEvent(e) ? "transform 250ms ease" : void 0, PositionedOverlay = /* @__PURE__ */ (0, import_react.forwardRef)((e, t) => {
	let { as: n, activatorEvent: r, adjustScale: i, children: a, className: o, rect: s, style: c, transform: l, transition: u = defaultTransition$1 } = e;
	if (!s) return null;
	let d = i ? l : {
		...l,
		scaleX: 1,
		scaleY: 1
	}, f = {
		...baseStyles,
		width: s.width,
		height: s.height,
		top: s.top,
		left: s.left,
		transform: CSS$1.Transform.toString(d),
		transformOrigin: i && r ? getRelativeTransformOrigin(r, s) : void 0,
		transition: typeof u == "function" ? u(r) : u,
		...c
	};
	return import_react.createElement(n, {
		className: o,
		style: f,
		ref: t
	}, a);
}), defaultDropAnimationConfiguration = {
	duration: 250,
	easing: "ease",
	keyframes: (e) => {
		let { transform: { initial: t, final: n } } = e;
		return [{ transform: CSS$1.Transform.toString(t) }, { transform: CSS$1.Transform.toString(n) }];
	},
	sideEffects: /* @__PURE__ */ ((e) => (t) => {
		let { active: n, dragOverlay: r } = t, i = {}, { styles: a, className: o } = e;
		if (a != null && a.active) for (let [e, t] of Object.entries(a.active)) t !== void 0 && (i[e] = n.node.style.getPropertyValue(e), n.node.style.setProperty(e, t));
		if (a != null && a.dragOverlay) for (let [e, t] of Object.entries(a.dragOverlay)) t !== void 0 && r.node.style.setProperty(e, t);
		return o != null && o.active && n.node.classList.add(o.active), o != null && o.dragOverlay && r.node.classList.add(o.dragOverlay), function() {
			for (let [e, t] of Object.entries(i)) n.node.style.setProperty(e, t);
			o != null && o.active && n.node.classList.remove(o.active);
		};
	})({ styles: { active: { opacity: "0" } } })
};
function useDropAnimation(e) {
	let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: i } = e;
	return useEvent((e, a) => {
		if (t === null) return;
		let o = n.get(e);
		if (!o) return;
		let s = o.node.current;
		if (!s) return;
		let c = getMeasurableNode(a);
		if (!c) return;
		let { transform: l } = getWindow(a).getComputedStyle(a), u = parseTransform(l);
		if (!u) return;
		let d = typeof t == "function" ? t : createDefaultDropAnimation(t);
		return scrollIntoViewIfNeeded(s, i.draggable.measure), d({
			active: {
				id: e,
				data: o.data,
				node: s,
				rect: i.draggable.measure(s)
			},
			draggableNodes: n,
			dragOverlay: {
				node: a,
				rect: i.dragOverlay.measure(c)
			},
			droppableContainers: r,
			measuringConfiguration: i,
			transform: u
		});
	});
}
function createDefaultDropAnimation(e) {
	let { duration: t, easing: n, sideEffects: r, keyframes: i } = {
		...defaultDropAnimationConfiguration,
		...e
	};
	return (e) => {
		let { active: a, dragOverlay: o, transform: s, ...c } = e;
		if (!t) return;
		let l = {
			x: o.rect.left - a.rect.left,
			y: o.rect.top - a.rect.top
		}, u = {
			scaleX: s.scaleX === 1 ? 1 : a.rect.width * s.scaleX / o.rect.width,
			scaleY: s.scaleY === 1 ? 1 : a.rect.height * s.scaleY / o.rect.height
		}, d = {
			x: s.x - l.x,
			y: s.y - l.y,
			...u
		}, f = i({
			...c,
			active: a,
			dragOverlay: o,
			transform: {
				initial: s,
				final: d
			}
		}), [p] = f, m = f[f.length - 1];
		if (JSON.stringify(p) === JSON.stringify(m)) return;
		let h = r?.({
			active: a,
			dragOverlay: o,
			...c
		}), g = o.node.animate(f, {
			duration: t,
			easing: n,
			fill: "forwards"
		});
		return new Promise((e) => {
			g.onfinish = () => {
				h?.(), e();
			};
		});
	};
}
var key = 0;
function useKey(e) {
	return (0, import_react.useMemo)(() => {
		if (e != null) return key++, key;
	}, [e]);
}
var DragOverlay = /* @__PURE__ */ import_react.memo((e) => {
	let { adjustScale: t = !1, children: n, dropAnimation: r, style: i, transition: a, modifiers: o, wrapperElement: s = "div", className: c, zIndex: l = 999 } = e, { activatorEvent: u, active: d, activeNodeRect: f, containerNodeRect: p, draggableNodes: m, droppableContainers: h, dragOverlay: g, over: _, measuringConfiguration: v, scrollableAncestors: y, scrollableAncestorRects: b, windowRect: x } = useDndContext(), S = (0, import_react.useContext)(ActiveDraggableContext), C = useKey(d?.id), w = applyModifiers(o, {
		activatorEvent: u,
		active: d,
		activeNodeRect: f,
		containerNodeRect: p,
		draggingNodeRect: g.rect,
		over: _,
		overlayNodeRect: g.rect,
		scrollableAncestors: y,
		scrollableAncestorRects: b,
		transform: S,
		windowRect: x
	}), T = useInitialValue(f), E = useDropAnimation({
		config: r,
		draggableNodes: m,
		droppableContainers: h,
		measuringConfiguration: v
	}), D = T ? g.setRef : void 0;
	return import_react.createElement(NullifiedContextProvider, null, import_react.createElement(AnimationManager, { animation: E }, d && C ? import_react.createElement(PositionedOverlay, {
		key: C,
		id: d.id,
		ref: D,
		as: s,
		activatorEvent: u,
		adjustScale: t,
		className: c,
		transition: a,
		rect: T,
		style: {
			zIndex: l,
			...i
		},
		transform: w
	}, n) : null));
});
function arrayMove(e, t, n) {
	let r = e.slice();
	return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function getSortedRects(e, t) {
	return e.reduce((e, n, r) => {
		let i = t.get(n);
		return i && (e[r] = i), e;
	}, Array(e.length));
}
function isValidIndex(e) {
	return e !== null && e >= 0;
}
function itemsEqual(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function normalizeDisabled(e) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: e
	} : e;
}
var rectSortingStrategy = (e) => {
	let { rects: t, activeIndex: n, overIndex: r, index: i } = e, a = arrayMove(t, r, n), o = t[i], s = a[i];
	return !s || !o ? null : {
		x: s.left - o.left,
		y: s.top - o.top,
		scaleX: s.width / o.width,
		scaleY: s.height / o.height
	};
}, ID_PREFIX = "Sortable", Context = /* @__PURE__ */ import_react.createContext({
	activeIndex: -1,
	containerId: ID_PREFIX,
	disableTransforms: !1,
	items: [],
	overIndex: -1,
	useDragOverlay: !1,
	sortedRects: [],
	strategy: rectSortingStrategy,
	disabled: {
		draggable: !1,
		droppable: !1
	}
});
function SortableContext(e) {
	let { children: t, id: n, items: r, strategy: i = rectSortingStrategy, disabled: a = !1 } = e, { active: o, dragOverlay: s, droppableRects: c, over: l, measureDroppableContainers: u } = useDndContext(), d = useUniqueId(ID_PREFIX, n), f = s.rect !== null, p = (0, import_react.useMemo)(() => r.map((e) => typeof e == "object" && "id" in e ? e.id : e), [r]), m = o != null, h = o ? p.indexOf(o.id) : -1, g = l ? p.indexOf(l.id) : -1, _ = (0, import_react.useRef)(p), v = !itemsEqual(p, _.current), y = g !== -1 && h === -1 || v, b = normalizeDisabled(a);
	useIsomorphicLayoutEffect(() => {
		v && m && u(p);
	}, [
		v,
		p,
		m,
		u
	]), (0, import_react.useEffect)(() => {
		_.current = p;
	}, [p]);
	let x = (0, import_react.useMemo)(() => ({
		activeIndex: h,
		containerId: d,
		disabled: b,
		disableTransforms: y,
		items: p,
		overIndex: g,
		useDragOverlay: f,
		sortedRects: getSortedRects(p, c),
		strategy: i
	}), [
		h,
		d,
		b.draggable,
		b.droppable,
		y,
		p,
		g,
		c,
		f,
		i
	]);
	return import_react.createElement(Context.Provider, { value: x }, t);
}
var defaultNewIndexGetter = (e) => {
	let { id: t, items: n, activeIndex: r, overIndex: i } = e;
	return arrayMove(n, r, i).indexOf(t);
}, defaultAnimateLayoutChanges = (e) => {
	let { containerId: t, isSorting: n, wasDragging: r, index: i, items: a, newIndex: o, previousItems: s, previousContainerId: c, transition: l } = e;
	return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c;
}, defaultTransition = {
	duration: 200,
	easing: "ease"
}, transitionProperty = "transform", disabledTransition = /* @__PURE__ */ CSS$1.Transition.toString({
	property: transitionProperty,
	duration: 0,
	easing: "linear"
}), defaultAttributes = { roleDescription: "sortable" };
function useDerivedTransform(e) {
	let { disabled: t, index: n, node: r, rect: i } = e, [a, o] = (0, import_react.useState)(null), s = (0, import_react.useRef)(n);
	return useIsomorphicLayoutEffect(() => {
		if (!t && n !== s.current && r.current) {
			let e = i.current;
			if (e) {
				let t = getClientRect(r.current, { ignoreTransform: !0 }), n = {
					x: e.left - t.left,
					y: e.top - t.top,
					scaleX: e.width / t.width,
					scaleY: e.height / t.height
				};
				(n.x || n.y) && o(n);
			}
		}
		n !== s.current && (s.current = n);
	}, [
		t,
		n,
		r,
		i
	]), (0, import_react.useEffect)(() => {
		a && o(null);
	}, [a]), a;
}
function useSortable(e) {
	let { animateLayoutChanges: t = defaultAnimateLayoutChanges, attributes: n, disabled: r, data: i, getNewIndex: a = defaultNewIndexGetter, id: o, strategy: s, resizeObserverConfig: c, transition: l = defaultTransition } = e, { items: u, containerId: d, activeIndex: f, disabled: p, disableTransforms: m, sortedRects: h, overIndex: g, useDragOverlay: _, strategy: v } = (0, import_react.useContext)(Context), y = normalizeLocalDisabled(r, p), b = u.indexOf(o), x = (0, import_react.useMemo)(() => ({
		sortable: {
			containerId: d,
			index: b,
			items: u
		},
		...i
	}), [
		d,
		i,
		b,
		u
	]), S = (0, import_react.useMemo)(() => u.slice(u.indexOf(o)), [u, o]), { rect: C, node: w, isOver: T, setNodeRef: E } = useDroppable({
		id: o,
		data: x,
		disabled: y.droppable,
		resizeObserverConfig: {
			updateMeasurementsFor: S,
			...c
		}
	}), { active: D, activatorEvent: O, activeNodeRect: k, attributes: A, setNodeRef: j, listeners: M, isDragging: N, over: P, setActivatorNodeRef: F, transform: I } = useDraggable({
		id: o,
		data: x,
		attributes: {
			...defaultAttributes,
			...n
		},
		disabled: y.draggable
	}), L = useCombinedRefs(E, j), R = !!D, z = R && !m && isValidIndex(f) && isValidIndex(g), B = !_ && N, V = z ? (B && z ? I : null) ?? (s ?? v)({
		rects: h,
		activeNodeRect: k,
		activeIndex: f,
		overIndex: g,
		index: b
	}) : null, H = isValidIndex(f) && isValidIndex(g) ? a({
		id: o,
		items: u,
		activeIndex: f,
		overIndex: g
	}) : b, U = D?.id, W = (0, import_react.useRef)({
		activeId: U,
		items: u,
		newIndex: H,
		containerId: d
	}), G = u !== W.current.items, K = t({
		active: D,
		containerId: d,
		isDragging: N,
		isSorting: R,
		id: o,
		index: b,
		items: u,
		newIndex: W.current.newIndex,
		previousItems: W.current.items,
		previousContainerId: W.current.containerId,
		transition: l,
		wasDragging: W.current.activeId != null
	}), Ba = useDerivedTransform({
		disabled: !K,
		index: b,
		node: w,
		rect: C
	});
	return (0, import_react.useEffect)(() => {
		R && W.current.newIndex !== H && (W.current.newIndex = H), d !== W.current.containerId && (W.current.containerId = d), u !== W.current.items && (W.current.items = u);
	}, [
		R,
		H,
		d,
		u
	]), (0, import_react.useEffect)(() => {
		if (U === W.current.activeId) return;
		if (U != null && W.current.activeId == null) {
			W.current.activeId = U;
			return;
		}
		let e = setTimeout(() => {
			W.current.activeId = U;
		}, 50);
		return () => clearTimeout(e);
	}, [U]), {
		active: D,
		activeIndex: f,
		attributes: A,
		data: x,
		rect: C,
		index: b,
		newIndex: H,
		items: u,
		isOver: T,
		isSorting: R,
		isDragging: N,
		listeners: M,
		node: w,
		overIndex: g,
		over: P,
		setNodeRef: L,
		setActivatorNodeRef: F,
		setDroppableNodeRef: E,
		setDraggableNodeRef: j,
		transform: Ba ?? V,
		transition: Va()
	};
	function Va() {
		if (Ba || G && W.current.newIndex === b) return disabledTransition;
		if (!(B && !isKeyboardEvent(O) || !l) && (R || K)) return CSS$1.Transition.toString({
			...l,
			property: transitionProperty
		});
	}
}
function normalizeLocalDisabled(e, t) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: !1
	} : {
		draggable: e?.draggable ?? t.draggable,
		droppable: e?.droppable ?? t.droppable
	};
}
KeyboardCode.Down, KeyboardCode.Right, KeyboardCode.Up, KeyboardCode.Left;
function hasRemoteRuntimePtyForTab(e, t) {
	if (e?.some((e) => parseRemoteRuntimePtyId(e) !== null)) return !0;
	if (!t) return !1;
	for (let e in t) if (Object.hasOwn(t, e) && parseRemoteRuntimePtyId(t[e]) !== null) return !0;
	return !1;
}
function titleShowsNoAgent(e, t) {
	let n = e.trim();
	return n.length > 0 && (isShellProcess(n) || n === t?.trim());
}
function resolveSignalAgentForLaunchOwner(e, t) {
	return e ? resolveCompatibleAgentTypeForOwner(e, t) ?? e : null;
}
function resolveLaunchedAgentExitEvidence(e) {
	return e.hookAgent || e.siblingHookAgent || e.processAgent ? !1 : !e.isRemote && e.processShellForeground && e.hasObservedAgentSignal ? !0 : titleShowsNoAgent(e.title, e.defaultTitle) ? e.hasCompletedHook || !e.isRemote && e.hasObservedAgentSignal : !1;
}
function resolveTabAgentFromSignals(e) {
	let t = e.launchAgent ?? null, n = resolvePaneAgentOwner({
		launchAgent: t,
		hookAgent: e.hookAgent,
		completedHookAgent: e.focusedCompletedHookAgent,
		sleepingSessionAgent: e.sleepingSessionAgent
	}), r = resolveSignalAgentForLaunchOwner(e.hookAgent, n), i = resolveSignalAgentForLaunchOwner(e.siblingHookAgent, t), a = !e.isRemote && e.processShellForeground === !0, o = (e.focusedCompletedHookAgent ?? null) !== null, s = titleShowsNoAgent(e.title, e.defaultTitle), c = !e.isRemote && (s || a) && o ? null : resolveSignalAgentForLaunchOwner(e.focusedCompletedHookAgent, n), l = resolveSignalAgentForLaunchOwner(e.siblingCompletedHookAgent, t), u = e.sleepingSessionAgent ?? null, d = resolveSignalAgentForLaunchOwner(resolveExplicitTerminalTitleAgentType(e.title), n), f = c ?? t, p = d === "opencode" && isOpenCodeNativeTitle(e.title), m = d !== "claude" || isClaudeIdentityFrameTitle(e.title), h = f !== null && d !== null && d !== f && m && (e.hasObservedAgentSignal || o || p), g = a || u || p && c !== null ? null : h ? d : f ? null : d, _ = resolveLaunchedAgentExitEvidence({
		title: e.title,
		defaultTitle: e.defaultTitle,
		isRemote: e.isRemote,
		hasObservedAgentSignal: e.hasObservedAgentSignal,
		hookAgent: r,
		siblingHookAgent: i,
		hasCompletedHook: o,
		processAgent: e.processAgent,
		processShellForeground: e.processShellForeground
	}) ? null : t, v = resolveSignalAgentForLaunchOwner(e.processAgent, n);
	return r ?? v ?? g ?? c ?? u ?? _ ?? i ?? l;
}
function useTabAgent(e) {
	let t = useAppStore((t) => resolveFocusedTabAgent(t.agentStatusByPaneKey, t.terminalLayoutsByTabId[e.id], e.id)), n = useAppStore((t) => resolveSiblingTabAgent(t.agentStatusByPaneKey, t.terminalLayoutsByTabId[e.id], e.id)), r = useAppStore((t) => resolveFocusedCompletedTabAgent(t.agentStatusByPaneKey, t.terminalLayoutsByTabId[e.id], e.id) ?? resolveFocusedRetainedTabAgent(t.retainedAgentsByPaneKey, t.terminalLayoutsByTabId[e.id], e.id)), i = useAppStore((t) => resolveSiblingCompletedTabAgent(t.agentStatusByPaneKey, t.terminalLayoutsByTabId[e.id], e.id) ?? resolveSiblingRetainedTabAgent(t.retainedAgentsByPaneKey, t.terminalLayoutsByTabId[e.id], e.id)), a = r !== null, o = useAppStore((e) => e.clearTabLaunchAgent), s = useAppStore((t) => {
		let n = t.terminalLayoutsByTabId[e.id]?.activeLeafId;
		return n && isTerminalLeafId(n) ? makePaneKey(e.id, n) : null;
	}), c = useAppStore((e) => s ? e.paneForegroundAgentByPaneKey[s]?.agent ?? null : null), l = useAppStore((e) => s ? !!e.paneForegroundAgentByPaneKey[s]?.shellForeground : !1), u = useAppStore((e) => s ? e.sleepingAgentSessionsByPaneKey[s]?.agent ?? null : null), d = useAppStore((t) => {
		let n = t.terminalLayoutsByTabId[e.id], r = n?.activeLeafId, i = r ? n?.ptyIdsByLeafId?.[r] : void 0;
		if (i) return i;
		let a = t.ptyIdsByTabId[e.id] ?? [];
		return a.length === 1 ? a[0] : null;
	}), f = useAppStore((t) => {
		let n = t.terminalLayoutsByTabId[e.id];
		return n?.activeLeafId && isTerminalLeafId(n.activeLeafId) ? !0 : (t.ptyIdsByTabId[e.id] ?? []).length <= 1;
	}), p = useAppStore((t) => hasRemoteRuntimePtyForTab(t.ptyIdsByTabId[e.id], t.terminalLayoutsByTabId[e.id]?.ptyIdsByLeafId)), m = useAppStore((t) => worktreeUsesRemoteConnection(t, e.worktreeId)) || p, [h, g] = (0, import_react.useState)(!1), _ = (0, import_react.useRef)(!1), v = (0, import_react.useRef)(null), y = a && f;
	return (0, import_react.useEffect)(() => {
		let r = `${d ?? ""}|${String(m)}`;
		v.current !== r && (v.current = r, _.current = !1, g(!1));
		let i = resolveExplicitTerminalTitleAgentType(e.title), a = e.launchAgent ? i === e.launchAgent : !!(i || n);
		!_.current && (t || y || c || a) && (_.current = !0, g(!0));
	}, [
		d,
		m,
		t,
		y,
		c,
		n,
		e.launchAgent,
		e.title
	]), (0, import_react.useEffect)(() => {
		e.launchAgent && resolveLaunchedAgentExitEvidence({
			title: e.title,
			defaultTitle: e.defaultTitle,
			isRemote: m,
			hasObservedAgentSignal: h && _.current,
			hookAgent: t,
			siblingHookAgent: n,
			hasCompletedHook: y,
			processAgent: c,
			processShellForeground: l
		}) && o(e.id);
	}, [
		o,
		y,
		t,
		n,
		h,
		m,
		c,
		l,
		e.defaultTitle,
		e.id,
		e.launchAgent,
		e.title
	]), resolveTabAgentFromSignals({
		hasObservedAgentSignal: h,
		isRemote: m,
		title: e.title,
		defaultTitle: e.defaultTitle,
		hookAgent: t,
		siblingHookAgent: n,
		focusedCompletedHookAgent: r,
		siblingCompletedHookAgent: i,
		processAgent: c,
		processShellForeground: l,
		sleepingSessionAgent: u,
		launchAgent: e.launchAgent
	});
}
function getDropIndicatorClasses(e) {
	return e === "left" ? "before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:bg-blue-500 before:z-10 before:content-['']" : e === "right" ? "after:absolute after:inset-y-0 after:right-0 after:w-[2px] after:bg-blue-500 after:z-10 after:content-['']" : "";
}
const ACTIVE_TAB_INDICATOR_CLASSES = "pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-[color-mix(in_srgb,var(--foreground)_60%,var(--card))] z-20";
function getTabRootStateClasses(e) {
	return e ? "bg-[color-mix(in_srgb,var(--foreground)_6%,var(--card))] text-foreground" : "bg-card text-muted-foreground hover:text-foreground";
}
function getTabStripBorderClasses(e, t) {
	return [
		t?.includeTopBorder ?? !0 ? "border-t" : "",
		e ? "border-r" : "",
		"border-border"
	].filter(Boolean).join(" ");
}
function preventMiddleButtonDefault(e) {
	e.button === 1 && e.preventDefault();
}
function useSortableTabRename({ tabId: e, title: t, customTitle: n, onSetCustomTitle: r }) {
	let [i, a] = (0, import_react.useState)(!1), [o, s] = (0, import_react.useState)(""), c = (0, import_react.useRef)(null), l = (0, import_react.useRef)(!1), u = (0, import_react.useCallback)(() => {
		l.current = !1, s(n ?? t), a(!0);
	}, [n, t]), d = (0, import_react.useCallback)(() => {
		if (l.current) return;
		l.current = !0;
		let t = o.trim();
		r(e, t.length > 0 ? t : null), a(!1);
	}, [
		o,
		r,
		e
	]), f = (0, import_react.useCallback)(() => {
		l.current = !0, a(!1);
	}, []), p = (0, import_react.useCallback)((e) => {
		c.current !== null && (cancelAnimationFrame(c.current), c.current = null), e && (c.current = requestAnimationFrame(() => {
			c.current = null, e.focus(), e.select();
		}));
	}, []), m = (0, import_react.useRef)(u);
	return (0, import_react.useEffect)(() => {
		m.current = u;
	}, [u]), (0, import_react.useEffect)(() => {
		let t = (t) => {
			t.detail?.tabId === e && m.current();
		};
		return window.addEventListener(RENAME_TERMINAL_TAB_EVENT, t), () => window.removeEventListener(RENAME_TERMINAL_TAB_EVENT, t);
	}, [e]), {
		isEditing: i,
		renameValue: o,
		setRenameValue: s,
		handleRenameOpen: u,
		commitRename: d,
		cancelRename: f,
		setRenameInputElement: p
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function TerminalTabSplitMenuSection({ unifiedTabId: e, groupId: t, tabId: n, isActive: a, onActivate: o, splitRightShortcut: l, splitDownShortcut: u, showTerminalSplit: f = !0, trailingSeparator: m = !1 }) {
	let h = (e) => {
		a || o(n), requestActiveTerminalPaneSplit({
			tabId: n,
			direction: e
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabWorkspaceLayoutMenuSection, {
			unifiedTabId: e,
			groupId: t
		}),
		f ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger, {
			className: "[&>svg:last-child]:size-3.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTerminal, { className: "size-3.5 shrink-0" }), translate("auto.components.tab.bar.TerminalTabSplitMenuSection.splitTerminal", "Split terminal")]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, {
			className: cn("min-w-[12rem]", TAB_CONTEXT_SUBMENU_CONTENT_CLASS),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => h("vertical"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRightClose, { className: "size-3.5 shrink-0" }),
					translate("auto.components.tab.bar.SortableTabContextMenu.splitTerminalRight", "Split terminal right"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuShortcut, { children: l })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => h("horizontal"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelBottomClose, { className: "size-3.5 shrink-0" }),
					translate("auto.components.tab.bar.SortableTabContextMenu.splitTerminalDown", "Split terminal down"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuShortcut, { children: u })
				]
			})]
		})] }) : null,
		m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}) : null
	] });
}
var TAB_COLORS = [
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.20baa43c05", "None");
		},
		value: null
	},
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.cb3eadefd2", "Blue");
		},
		value: "#3b82f6"
	},
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.c2d8b0991f", "Purple");
		},
		value: "#a855f7"
	},
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.03cf6dab1a", "Pink");
		},
		value: "#ec4899"
	},
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.620aec6729", "Red");
		},
		value: "#ef4444"
	},
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.a47629b3cf", "Orange");
		},
		value: "#f97316"
	},
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.69682e2ce4", "Yellow");
		},
		value: "#eab308"
	},
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.be905e9b0a", "Green");
		},
		value: "#22c55e"
	},
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.845576bed1", "Teal");
		},
		value: "#14b8a6"
	},
	{
		get label() {
			return translate("auto.components.tab.bar.SortableTabContextMenu.7703990447", "Gray");
		},
		value: "#9ca3af"
	}
];
function SortableTabContextMenu({ tab: e, unifiedTabId: t, groupId: n, isActive: i, open: a, point: s, tabCount: c, hasTabsToRight: u, hasTabsToLeft: f, isPinned: p, onOpenChange: y, onActivate: b, onClose: x, onCloseOthers: S, onCloseToRight: C, onCloseToLeft: w, onRenameOpen: T, onSetTabColor: E, onTogglePin: D, canToggleViewMode: O = !1, isChatView: k = !1, onToggleViewMode: A, canSplitTerminal: j = !0 }) {
	let M = useAppStore((e) => e.keybindings), N = formatShortcutLabel("terminal.splitRight", M), P = formatShortcutLabel("terminal.splitDown", M), F = useOptionalShortcutLabel("tab.close"), I = useOptionalShortcutLabel("tab.rename");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		open: a,
		onOpenChange: y,
		modal: !1,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-hidden": !0,
				tabIndex: -1,
				className: "pointer-events-none fixed size-px opacity-0",
				style: {
					left: s.x,
					top: s.y
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			className: TAB_CONTEXT_MENU_CONTENT_CLASS,
			sideOffset: 0,
			align: "start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalTabSplitMenuSection, {
					unifiedTabId: t,
					groupId: n,
					tabId: e.id,
					isActive: i,
					onActivate: b,
					splitRightShortcut: N,
					splitDownShortcut: P,
					showTerminalSplit: j
				}),
				O && A ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: A,
					children: [k ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTerminal, { className: "size-3.5 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3.5 shrink-0" }), k ? translate("components.tab.bar.SortableTabContextMenu.switchToTerminalView", "Switch to terminal view") : translate("components.tab.bar.SortableTabContextMenu.switchToChatView", "Switch to chat view")]
				})] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: D,
					children: [p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinOff, { className: "size-3.5 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "size-3.5 shrink-0" }), p ? translate("auto.components.tab.bar.SortableTabContextMenu.417722e9c2", "Unpin Tab") : translate("auto.components.tab.bar.SortableTabContextMenu.60f958ec75", "Pin Tab")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => !p && x(e.id),
					disabled: p,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }),
						translate("auto.components.tab.bar.SortableTabContextMenu.89359a36f7", "Close"),
						F ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuShortcut, { children: F }) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => S(e.id),
					disabled: c <= 1,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListX, { className: "size-3.5" }), translate("auto.components.tab.bar.SortableTabContextMenu.8d16f9cd30", "Close Others")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => C(e.id),
					disabled: !u,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRightClose, { className: "size-3.5" }), translate("auto.components.tab.bar.SortableTabContextMenu.c1ee099c7e", "Close Tabs To The Right")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => w(e.id),
					disabled: !f,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "size-3.5" }), translate("components.tab.bar.SortableTabContextMenu.closeTabsToLeft", "Close Tabs To The Left")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: T,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" }),
						translate("auto.components.tab.bar.SortableTabContextMenu.2f697b3c31", "Change Title"),
						I ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuShortcut, { children: I }) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-2 pt-1.5 pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-muted-foreground mb-1.5",
						children: translate("auto.components.tab.bar.SortableTabContextMenu.35e8892fd0", "Tab Color")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: TAB_COLORS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							className: `relative h-4 w-4 min-w-4 p-0 rounded-full border ${e.color === t.value ? "ring-1 ring-foreground/70 ring-offset-1 ring-offset-popover" : ""} ${t.value ? "border-transparent" : "border-muted-foreground/50 bg-transparent"}`,
							style: t.value ? { backgroundColor: t.value } : void 0,
							onSelect: () => {
								E(e.id, t.value);
							},
							children: t.value === null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute block h-px w-3 rotate-45 bg-muted-foreground/80" })
						}, t.label))
					})]
				})
			]
		})]
	});
}
const TAB_CONTAINER_WIDTH_CLASSES = "w-[180px] min-w-[72px] min-[1280px]:w-[220px]", TAB_LABEL_WIDTH_CLASSES = "min-w-0 flex-1 truncate";
function resolveTabInsertion(e, t, n) {
	let r = e.over?.data.current, i = e.active.data.current;
	if (!e.over || !t(i) || !t(r) || i.unifiedTabId === r.unifiedTabId) return null;
	let a = n(e);
	if (!a) return null;
	let o = e.over.rect.left + e.over.rect.width / 2;
	return {
		groupId: r.groupId,
		visibleTabId: r.visibleTabId,
		side: a.x < o ? "left" : "right"
	};
}
function resolveTabIndicatorEdges(e, t) {
	if (!t || e.length === 0) return [];
	let n = e.indexOf(t.visibleTabId);
	if (n === -1) return [];
	let r = n + (t.side === "right" ? 1 : 0);
	return r < e.length ? [{
		visibleTabId: e[r],
		side: "left"
	}] : [{
		visibleTabId: e[r - 1],
		side: "right"
	}];
}
function equal(e, t) {
	return e === t ? !0 : e !== null && t !== null && e.groupId === t.groupId && e.visibleTabId === t.visibleTabId && e.side === t.side;
}
function useHoveredTabInsertion(e, t) {
	let [n, r] = (0, import_react.useState)(null);
	return {
		hoveredTabInsertion: n,
		update: (0, import_react.useCallback)((n) => {
			let i = resolveTabInsertion(n, e, t);
			r((e) => equal(e, i) ? e : i);
		}, [e, t]),
		clear: (0, import_react.useCallback)(() => r(null), [])
	};
}
function previewActiveSurfacePatch(e, t, n, r) {
	if (e.activeWorktreeId !== t || !r) return {};
	let i = (e.unifiedTabsByWorktree[t] ?? []).find((e) => e.id === r && e.groupId === n);
	if (!i) return {};
	let a = (n) => ({
		...e.activeTabTypeByWorktree,
		[t]: n
	});
	return i.contentType === "terminal" ? e.activeTabType === "terminal" && e.activeTabTypeByWorktree[t] === "terminal" && e.activeTabId === i.entityId && e.activeTabIdByWorktree[t] === i.entityId ? {} : {
		activeTabId: i.entityId,
		activeTabType: "terminal",
		activeTabIdByWorktree: {
			...e.activeTabIdByWorktree,
			[t]: i.entityId
		},
		activeTabTypeByWorktree: a("terminal")
	} : i.contentType === "browser" ? e.activeTabType === "browser" && e.activeTabTypeByWorktree[t] === "browser" && e.activeBrowserTabId === i.entityId && e.activeBrowserTabIdByWorktree[t] === i.entityId ? {} : {
		activeBrowserTabId: i.entityId,
		activeTabType: "browser",
		activeBrowserTabIdByWorktree: {
			...e.activeBrowserTabIdByWorktree,
			[t]: i.entityId
		},
		activeTabTypeByWorktree: a("browser")
	} : i.contentType === "simulator" ? e.activeTabType === "simulator" && e.activeTabTypeByWorktree[t] === "simulator" ? {} : {
		activeTabType: "simulator",
		activeTabTypeByWorktree: a("simulator")
	} : e.activeTabType === "editor" && e.activeTabTypeByWorktree[t] === "editor" && e.activeFileId === i.entityId && e.activeFileIdByWorktree[t] === i.entityId ? {} : {
		activeFileId: i.entityId,
		activeTabType: "editor",
		activeFileIdByWorktree: {
			...e.activeFileIdByWorktree,
			[t]: i.entityId
		},
		activeTabTypeByWorktree: a("editor")
	};
}
function captureTabDragActivationSnapshot(e) {
	let t = useAppStore.getState(), n = t.groupsByWorktree[e] ?? [];
	return {
		activeGroupId: t.activeGroupIdByWorktree[e] ?? null,
		activeTabIdByGroup: Object.fromEntries(n.map((e) => [e.id, e.activeTabId]))
	};
}
function applyDragPreviewTab({ worktreeId: e, groupId: t, tabId: n, activeGroupId: r }) {
	useAppStore.setState((i) => {
		let a = i.groupsByWorktree[e] ?? [], o = a.find((e) => e.id === t)?.activeTabId === n, s = (i.activeGroupIdByWorktree[e] ?? null) === r, c = previewActiveSurfacePatch(i, e, t, n);
		if (o && s) return Object.keys(c).length > 0 ? c : i;
		let l = { ...c };
		return o || (l.groupsByWorktree = {
			...i.groupsByWorktree,
			[e]: a.map((e) => e.id === t ? {
				...e,
				activeTabId: n
			} : e)
		}), s || (l.activeGroupIdByWorktree = {
			...i.activeGroupIdByWorktree,
			[e]: r
		}), l;
	});
}
function restoreTabDragActivationSnapshot(e, t) {
	useAppStore.setState((n) => {
		let r = n.groupsByWorktree[e] ?? [], i = r.every((e) => (t.activeTabIdByGroup[e.id] ?? null) === e.activeTabId), a = (n.activeGroupIdByWorktree[e] ?? null) === t.activeGroupId, o = {};
		if (i || (o.groupsByWorktree = {
			...n.groupsByWorktree,
			[e]: r.map((e) => ({
				...e,
				activeTabId: t.activeTabIdByGroup[e.id] ?? null
			}))
		}), !a) if (t.activeGroupId === null) {
			let t = { ...n.activeGroupIdByWorktree };
			delete t[e], o.activeGroupIdByWorktree = t;
		} else o.activeGroupIdByWorktree = {
			...n.activeGroupIdByWorktree,
			[e]: t.activeGroupId
		};
		let s = t.activeGroupId;
		if (s) {
			let r = t.activeTabIdByGroup[s] ?? null;
			Object.assign(o, previewActiveSurfacePatch(n, e, s, r));
		}
		return Object.keys(o).length === 0 ? n : o;
	});
}
function restoreSourceGroupActiveTabAfterCrossGroupDrop({ worktreeId: e, snapshot: t, sourceGroupId: n, movedTabId: r }) {
	let i = t.activeTabIdByGroup[n] ?? null;
	i !== r && useAppStore.setState((t) => {
		let r = t.groupsByWorktree[e] ?? [], a = r.find((e) => e.id === n);
		return !a || a.activeTabId === i ? t : { groupsByWorktree: {
			...t.groupsByWorktree,
			[e]: r.map((e) => e.id === n ? {
				...e,
				activeTabId: i
			} : e)
		} };
	});
}
function getDragPointer(e) {
	let t = e.activatorEvent;
	if (t && typeof t == "object" && "clientX" in t && "clientY" in t && typeof t.clientX == "number" && typeof t.clientY == "number") return {
		x: t.clientX + e.delta.x,
		y: t.clientY + e.delta.y
	};
	let n = e.active.rect.current.initial;
	return n ? {
		x: n.left + n.width / 2 + e.delta.x,
		y: n.top + n.height / 2 + e.delta.y
	} : null;
}
var DEFAULT_COORDINATES = {
	x: 0,
	y: 0
}, TAB_DRAG_EARLY_MOVE_CONFIRMATION_MS = 50, TAB_DRAG_CONFIRMED_DISTANCE_SAMPLE_COUNT = 2, ListenerBag = class {
	listeners = [];
	add(e, t, n, r) {
		if (!e) return;
		let i = n;
		e.addEventListener(t, i, r), this.listeners.push({
			eventName: t,
			handler: i,
			options: r,
			target: e
		});
	}
	removeAll = () => {
		for (let { eventName: e, handler: t, options: n, target: r } of this.listeners) r.removeEventListener(e, t, n);
		this.listeners.length = 0;
	};
};
function isDistanceConstraint(e) {
	return "distance" in e;
}
function isDelayConstraint(e) {
	return "delay" in e;
}
function getOwnerDocument(e) {
	return e instanceof Document ? e : e instanceof Node ? e.ownerDocument ?? document : document;
}
function getPointerCoordinates(e) {
	if ("clientX" in e && "clientY" in e) {
		let t = e;
		return {
			x: t.clientX,
			y: t.clientY
		};
	}
	return null;
}
function subtractCoordinates(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function hasExceededDistance(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.hypot(n, r) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
function shouldActivateTabDragFromDistanceSample({ elapsedMs: e, overThresholdSampleCount: t }) {
	return e >= TAB_DRAG_EARLY_MOVE_CONFIRMATION_MS || t >= TAB_DRAG_CONFIRMED_DISTANCE_SAMPLE_COUNT;
}
var TabDragPointerSensor = class {
	static activators = [{
		eventName: "onPointerDown",
		handler: ({ nativeEvent: e }, { onActivation: t }) => !e.isPrimary || e.button !== 0 ? !1 : (t?.({ event: e }), !0)
	}];
	autoScrollEnabled = !0;
	activated = !1;
	ended = !1;
	document;
	initialCoordinates;
	pointerDownTime = performance.now();
	props;
	documentListeners = new ListenerBag();
	pointerListeners = new ListenerBag();
	windowListeners = new ListenerBag();
	overThresholdSampleCount = 0;
	timeoutId = null;
	constructor(e) {
		this.props = e, this.document = getOwnerDocument(e.event.target), this.initialCoordinates = getPointerCoordinates(e.event) ?? DEFAULT_COORDINATES, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let e = this.document.defaultView, { activationConstraint: t, bypassActivationConstraint: n } = this.props.options;
		if (this.pointerListeners.add(this.document, "pointermove", this.handleMove, { passive: !1 }), this.pointerListeners.add(this.document, "pointerup", this.handleEnd), this.pointerListeners.add(this.document, "pointercancel", this.handleCancel), this.windowListeners.add(e, "resize", this.handleCancel), this.windowListeners.add(e, "dragstart", preventDefault), this.windowListeners.add(e, "visibilitychange", this.handleCancel), this.windowListeners.add(e, "contextmenu", preventDefault), this.windowListeners.add(e, "blur", this.handleCancel), this.windowListeners.add(e, "focus", this.handleCancel), this.documentListeners.add(this.document, "keydown", this.handleKeydown), !t) {
			this.handleStart();
			return;
		}
		if (n?.({
			activeNode: this.props.activeNode,
			event: this.props.event,
			options: this.props.options
		})) {
			this.handleStart();
			return;
		}
		if (isDelayConstraint(t)) {
			this.timeoutId = window.setTimeout(this.handleStart, t.delay), this.handlePending(t);
			return;
		}
		this.handlePending(t);
	}
	detach() {
		this.ended = !0, this.pointerListeners.removeAll(), this.windowListeners.removeAll(), window.setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (window.clearTimeout(this.timeoutId), this.timeoutId = null);
	}
	handlePending(e, t) {
		this.props.onPending(this.props.active, e, this.initialCoordinates, t);
	}
	handleStart() {
		this.activated || this.ended || (this.activated = !0, this.documentListeners.add(this.document, "click", stopPropagation, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(this.document, "selectionchange", this.removeTextSelection), this.props.onStart(this.initialCoordinates));
	}
	handleMove(e) {
		if (this.ended) return;
		let t = getPointerCoordinates(e), { activationConstraint: n } = this.props.options;
		if (!t) return;
		let r = subtractCoordinates(this.initialCoordinates, t);
		if (!this.activated && n) {
			if (isDistanceConstraint(n)) {
				if (n.tolerance != null && hasExceededDistance(r, n.tolerance)) {
					this.handleCancel();
					return;
				}
				if (hasExceededDistance(r, n.distance)) {
					if (this.overThresholdSampleCount += 1, shouldActivateTabDragFromDistanceSample({
						elapsedMs: performance.now() - this.pointerDownTime,
						overThresholdSampleCount: this.overThresholdSampleCount
					})) {
						this.handleStart();
						return;
					}
				} else this.overThresholdSampleCount = 0;
			}
			if (isDelayConstraint(n) && hasExceededDistance(r, n.tolerance)) {
				this.handleCancel();
				return;
			}
			this.handlePending(n, r);
			return;
		}
		e.cancelable && e.preventDefault(), this.props.onMove(t);
	}
	handleEnd() {
		this.ended || (this.detach(), this.activated || this.props.onAbort(this.props.active), this.props.onEnd());
	}
	handleCancel() {
		this.ended || (this.detach(), this.activated || this.props.onAbort(this.props.active), this.props.onCancel());
	}
	handleKeydown(e) {
		e.code === "Escape" && this.handleCancel();
	}
	removeTextSelection() {
		this.document.getSelection()?.removeAllRanges();
	}
};
function preventDefault(e) {
	e.preventDefault();
}
function stopPropagation(e) {
	e.stopPropagation();
}
function resolveDropZone(e, t) {
	let n = t.x - e.left, r = t.y - e.top, i = e.width * .1, a = e.height * .1, o = e.width / 3;
	return n > i && n < e.width - i && r > a && r < e.height - a ? "center" : n < o ? "left" : n > o * 2 ? "right" : r < e.height / 2 ? "up" : "down";
}
function resolvePaneColumnEdgeZone(e, t, n) {
	let r = t.x - e.left, i = e.width * .2;
	if (r < i) return "left";
	if (r > e.width - i) return "right";
	let a = n?.tabStripHeightPx ?? 32, o = e.top + a;
	if (t.y < o) return null;
	let s = n?.bodyRect ?? {
		left: e.left,
		top: o,
		width: e.width,
		height: Math.max(0, e.height - a)
	};
	if (s.height <= 0) return null;
	let c = t.y - s.top, l = s.height * .2;
	return c < l ? "up" : c > s.height - l ? "down" : null;
}
function canDropTabIntoPaneBody({ activeDrag: e, groupsByWorktree: t, overGroupId: n, worktreeId: r }) {
	if (!e || e.worktreeId !== r) return !1;
	let i = (t[r] ?? []).find((e) => e.id === n);
	return i ? e.groupId !== n || i.tabOrder.length > 1 : !1;
}
function isTabDragData(e) {
	return !!e && typeof e == "object" && e.kind === "tab";
}
function isPaneDropData(e) {
	return !!e && typeof e == "object" && e.kind === "pane-body";
}
function escapeCssAttrValue(e) {
	return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
function getTabGroupBodyElement(e, t) {
	let n = escapeCssAttrValue(e), r = escapeCssAttrValue(t);
	return document.querySelector(`[data-tab-group-body-id="${n}"][data-worktree-id="${r}"]`);
}
function getTabGroupPanelRect(e, t) {
	return getTabGroupBodyElement(e, t)?.parentElement?.getBoundingClientRect() ?? null;
}
function getTabGroupBodyRect(e, t) {
	return getTabGroupBodyElement(e, t)?.getBoundingClientRect() ?? null;
}
function captureTabGroupPanelGeometrySnapshot(e) {
	let t = escapeCssAttrValue(e), n = document.querySelectorAll(`[data-tab-group-body-id][data-worktree-id="${t}"]`), r = [];
	for (let e of n) {
		let t = e.dataset.tabGroupBodyId, n = e.parentElement;
		!t || !n || r.push({
			groupId: t,
			panelRect: n.getBoundingClientRect(),
			bodyRect: e.getBoundingClientRect()
		});
	}
	return {
		entries: r,
		byGroupId: new Map(r.map((e) => [e.groupId, e]))
	};
}
function findTabGroupPanelUnderPointer(e, t, n = {}) {
	if (n.geometry) {
		for (let e of n.geometry.entries) {
			let { panelRect: n } = e;
			if (t.x >= n.left && t.x <= n.right && t.y >= n.top && t.y <= n.bottom) return {
				groupId: e.groupId,
				panelRect: n
			};
		}
		return null;
	}
	let r = n.getPanelRect ?? getTabGroupPanelRect, i = escapeCssAttrValue(e), a = document.querySelectorAll(`[data-tab-group-body-id][data-worktree-id="${i}"]`);
	for (let n of a) {
		let i = n.dataset.tabGroupBodyId;
		if (!i) continue;
		let a = r(i, e);
		if (a && t.x >= a.left && t.x <= a.right && t.y >= a.top && t.y <= a.bottom) return {
			groupId: i,
			panelRect: a
		};
	}
	return null;
}
function resolvePanelEdgePaneColumnSplit({ activeDrag: e, targetGroupId: t, worktreeId: n, pointer: r, groupsByWorktree: i, layoutByWorktree: a, panelRect: o, bodyRect: s }) {
	let c = o ?? getTabGroupPanelRect(t, n);
	if (!c || r.x < c.left || r.x > c.left + c.width || r.y < c.top || r.y > c.top + c.height) return null;
	let l = resolvePaneColumnEdgeZone(c, r, {
		bodyRect: s ?? getTabGroupBodyRect(t, n) ?? null,
		tabStripHeightPx: 32
	});
	if (!l) return null;
	let u = (i[n] ?? []).find((t) => t.id === e.groupId);
	return isPaneColumnSplitDropNoOp({
		sourceGroupId: e.groupId,
		targetGroupId: t,
		splitDirection: l,
		sourceTabCount: u?.tabOrder.length ?? 0,
		layout: a[n]
	}) || e.groupId === t && !canDropTabIntoPaneBody({
		activeDrag: e,
		groupsByWorktree: i,
		overGroupId: t,
		worktreeId: n
	}) ? null : {
		groupId: t,
		zone: l
	};
}
function resolveActivePaneColumnSplitTarget({ event: e, groupsByWorktree: t, layoutByWorktree: n, worktreeId: r, getDragPointer: i, geometry: a }) {
	let o = e.active.data.current, s = i(e);
	if (!isTabDragData(o) || !s) return null;
	let c = e.over?.data.current, l = findTabGroupPanelUnderPointer(r, s, { geometry: a });
	if (isTabDragData(c) && (!l || s.y < l.panelRect.top + 32)) return null;
	let u = l?.groupId ?? (isTabDragData(c) ? c.groupId : null) ?? (isPaneDropData(c) ? c.groupId : null);
	if (!u) return null;
	let d = a?.byGroupId.get(u), f = l?.groupId === u ? l.panelRect : d?.panelRect, p = resolvePanelEdgePaneColumnSplit({
		activeDrag: o,
		targetGroupId: u,
		worktreeId: r,
		pointer: s,
		groupsByWorktree: t,
		layoutByWorktree: n,
		panelRect: f,
		bodyRect: d?.bodyRect
	});
	return p ? {
		...p,
		panelRect: f
	} : null;
}
function installTabDragMissedEndListeners(e) {
	let t = null, n = () => {
		t !== null && window.clearTimeout(t), t = window.setTimeout(() => {
			t = null, e();
		}, 0);
	};
	return window.addEventListener("pointerup", n), window.addEventListener("pointercancel", n), window.addEventListener("blur", n), window.addEventListener("focus", n), () => {
		t !== null && window.clearTimeout(t), window.removeEventListener("pointerup", n), window.removeEventListener("pointercancel", n), window.removeEventListener("blur", n), window.removeEventListener("focus", n);
	};
}
function useTabDragGestureLifecycle({ clearDragStateRef: e, tabDragActiveRef: t }) {
	let n = (0, import_react.useRef)(null), r = (0, import_react.useRef)(null), i = (0, import_react.useCallback)(() => {
		n.current?.(), n.current = null;
	}, []), a = (0, import_react.useCallback)(() => {
		r.current?.(), r.current = null;
	}, []), o = (0, import_react.useCallback)(() => {
		a(), r.current = installTabDragMissedEndListeners(() => {
			t.current && e.current();
		});
	}, [
		e,
		a,
		t
	]);
	return {
		acquireWebviewDragPassthrough: (0, import_react.useCallback)(() => {
			i(), n.current = acquireWebviewsDragPassthrough();
		}, [i]),
		installMissedEndFallback: o,
		releaseMissedEndFallback: a,
		releaseWebviewDragPassthrough: i,
		setDragRootNode: (0, import_react.useCallback)((e) => {
			e || (i(), a());
		}, [a, i])
	};
}
function resolveDragPreviewTabId({ activeDrag: e, overData: t, preDragActiveTabIdByGroup: n, lastHoveredTabPreview: r = null }) {
	let i = e.groupId, a = n[i] ?? null;
	return isTabDragData(t) && t.unifiedTabId !== e.unifiedTabId ? {
		groupId: i,
		tabId: a
	} : isPaneDropData(t) ? r?.groupId === t.groupId && r.tabId ? r : t.groupId === i ? {
		groupId: i,
		tabId: a
	} : {
		groupId: t.groupId,
		tabId: n[t.groupId] ?? null
	} : {
		groupId: i,
		tabId: a
	};
}
function resolveSourceGroupRestoreOnDrop(e, t, n) {
	if (!(n || e.groupId === t)) return e;
}
function useTabDragHoverPreview({ worktreeId: e, preDragActivationSnapshotRef: t, dragGeometryRef: n, tabInsertion: r }) {
	let [i, a] = (0, import_react.useState)(null), o = (0, import_react.useRef)(null), s = (0, import_react.useRef)(null), c = (0, import_react.useCallback)((n, r) => {
		let i = t.current;
		if (!i) return;
		let a = n.over?.data.current;
		isTabDragData(a) && a.unifiedTabId !== r.unifiedTabId && (s.current = {
			groupId: a.groupId,
			tabId: a.unifiedTabId
		});
		let c = resolveDragPreviewTabId({
			activeDrag: r,
			overData: a,
			preDragActiveTabIdByGroup: i.activeTabIdByGroup,
			lastHoveredTabPreview: s.current
		}), l = o.current;
		l?.groupId === c.groupId && l.tabId === c.tabId || (o.current = c, applyDragPreviewTab({
			worktreeId: e,
			groupId: c.groupId,
			tabId: c.tabId,
			activeGroupId: c.groupId
		}));
	}, [t, e]), l = (0, import_react.useCallback)((e) => {
		if (!e) {
			a((e) => e === null ? e : null);
			return;
		}
		a((t) => t?.groupId === e.groupId && t?.zone === e.zone ? t : {
			groupId: e.groupId,
			zone: e.zone,
			panelRect: e.panelRect
		});
	}, []), u = (0, import_react.useCallback)((t) => {
		let i = t.active.data.current;
		isTabDragData(i) && i.worktreeId === e && c(t, i);
		let a = useAppStore.getState(), o = resolveActivePaneColumnSplitTarget({
			event: t,
			groupsByWorktree: a.groupsByWorktree,
			layoutByWorktree: a.layoutByWorktree,
			worktreeId: e,
			getDragPointer,
			geometry: n.current
		});
		l(o), o ? r.clear() : r.update(t);
	}, [
		n,
		r,
		c,
		l,
		e
	]);
	return {
		clear: (0, import_react.useCallback)(() => {
			a(null), o.current = null, s.current = null;
		}, []),
		handleDragUpdate: u,
		hoveredDropTarget: i
	};
}
function commitTabDragDrop({ event: e, worktreeId: t, dragGeometryRef: n, dropUnifiedTab: r, reorderUnifiedTabs: i, finishDrag: a }) {
	let o = e.active.data.current, s = e.over?.data.current, c = !0;
	if (!isTabDragData(o) || o.worktreeId !== t) {
		a(!0);
		return;
	}
	let l = useAppStore.getState(), u = resolveActivePaneColumnSplitTarget({
		event: e,
		groupsByWorktree: l.groupsByWorktree,
		layoutByWorktree: l.layoutByWorktree,
		worktreeId: t,
		getDragPointer,
		geometry: n.current
	});
	if (u) {
		r(o.unifiedTabId, {
			groupId: u.groupId,
			splitDirection: u.zone
		}) && (c = !1, mirrorWebRuntimeTabMove({
			kind: "split",
			worktreeId: t,
			tabId: o.unifiedTabId,
			targetGroupId: u.groupId,
			splitDirection: u.zone
		})), a(c, resolveSourceGroupRestoreOnDrop(o, u.groupId, c));
		return;
	}
	if (!e.over) {
		a(!0);
		return;
	}
	if (isTabDragData(s)) {
		if (o.unifiedTabId === s.unifiedTabId) {
			a(!0);
			return;
		}
		let n = (l.groupsByWorktree[t] ?? []).find((e) => e.id === s.groupId);
		if (!n) {
			a(!0);
			return;
		}
		let u = resolveTabInsertion(e, isTabDragData, getDragPointer);
		if (!u) {
			a(!0);
			return;
		}
		let d = n.tabOrder.indexOf(s.unifiedTabId), p = d + (u.side === "right" ? 1 : 0);
		if (o.groupId === s.groupId) {
			let e = n.tabOrder.indexOf(o.unifiedTabId), r = e < p ? p - 1 : p;
			if (e !== -1 && e !== r) {
				let e = n.tabOrder.filter((e) => e !== o.unifiedTabId);
				e.splice(r, 0, o.unifiedTabId), i(s.groupId, e), mirrorWebRuntimeTabMove({
					kind: "reorder",
					worktreeId: t,
					tabId: o.unifiedTabId,
					targetGroupId: s.groupId,
					tabOrder: e
				});
			}
		} else {
			let e = d === -1 ? n.tabOrder.length : p;
			r(o.unifiedTabId, {
				groupId: s.groupId,
				index: e
			}) && (c = !1, mirrorWebRuntimeTabMove({
				kind: "move-to-group",
				worktreeId: t,
				tabId: o.unifiedTabId,
				targetGroupId: s.groupId,
				index: e
			}));
		}
		a(c, resolveSourceGroupRestoreOnDrop(o, s.groupId, c));
		return;
	}
	isPaneDropData(s) && o.groupId !== s.groupId && r(o.unifiedTabId, { groupId: s.groupId }) && (c = !1, mirrorWebRuntimeTabMove({
		kind: "move-to-group",
		worktreeId: t,
		tabId: o.unifiedTabId,
		targetGroupId: s.groupId
	})), a(c, isPaneDropData(s) ? resolveSourceGroupRestoreOnDrop(o, s.groupId, c) : void 0);
}
var collisionDetection = (e) => {
	let t = pointerWithin(e);
	return t.length > 0 ? t : closestCenter(e);
};
function getTabPaneBodyDroppableId(e) {
	return `tab-group-pane-body:${e}`;
}
function getTabDragActivationDistance(e) {
	return e ? 12 : 2 ** 53 - 1;
}
function useTabDragSplit({ worktreeId: e, enabled: t = !0 }) {
	let n = useAppStore((e) => e.reorderUnifiedTabs), r = useAppStore((e) => e.dropUnifiedTab), [i, a] = (0, import_react.useState)(null), o = (0, import_react.useRef)(null), s = (0, import_react.useRef)(!1), c = (0, import_react.useRef)(null), l = (0, import_react.useRef)(() => {}), u = useHoveredTabInsertion(isTabDragData, getDragPointer), { acquireWebviewDragPassthrough: d, installMissedEndFallback: f, releaseMissedEndFallback: p, releaseWebviewDragPassthrough: m, setDragRootNode: h } = useTabDragGestureLifecycle({
		clearDragStateRef: l,
		tabDragActiveRef: s
	}), { clear: g, handleDragUpdate: _, hoveredDropTarget: v } = useTabDragHoverPreview({
		worktreeId: e,
		preDragActivationSnapshotRef: o,
		dragGeometryRef: c,
		tabInsertion: u
	}), y = useSensors(useSensor(TabDragPointerSensor, { activationConstraint: { distance: getTabDragActivationDistance(t) } })), b = (0, import_react.useCallback)(() => {
		s.current = !1, m(), p(), a(null), g(), u.clear(), o.current = null, c.current = null;
	}, [
		g,
		p,
		m,
		u
	]);
	l.current = b;
	let x = (0, import_react.useCallback)(() => {
		let t = o.current;
		t && restoreTabDragActivationSnapshot(e, t);
	}, [e]), S = (0, import_react.useCallback)((t) => {
		let n = o.current;
		n && restoreSourceGroupActiveTabAfterCrossGroupDrop({
			worktreeId: e,
			snapshot: n,
			sourceGroupId: t.groupId,
			movedTabId: t.unifiedTabId
		});
	}, [e]), C = (0, import_react.useCallback)((e, t) => {
		e ? x() : t && S(t), b();
	}, [
		b,
		x,
		S
	]), w = (0, import_react.useCallback)((t) => {
		let n = t.active.data.current;
		if (!isTabDragData(n) || n.worktreeId !== e) {
			b();
			return;
		}
		a(n), s.current = !0, f(), c.current = captureTabGroupPanelGeometrySnapshot(e), o.current = captureTabDragActivationSnapshot(e), d();
	}, [
		d,
		b,
		f,
		e
	]), T = (0, import_react.useCallback)((e) => {
		s.current && _(e);
	}, [_]), E = (0, import_react.useCallback)((e) => {}, []), D = (0, import_react.useCallback)((t) => {
		if (!s.current) {
			C(!0);
			return;
		}
		commitTabDragDrop({
			event: t,
			worktreeId: e,
			dragGeometryRef: c,
			dropUnifiedTab: r,
			reorderUnifiedTabs: n,
			finishDrag: C
		});
	}, [
		c,
		r,
		C,
		n,
		e
	]), O = (0, import_react.useCallback)(() => {
		C(!0);
	}, [C]);
	return {
		activeDrag: i,
		collisionDetection,
		hoveredDropTarget: v,
		hoveredTabInsertion: u.hoveredTabInsertion,
		isTabDragActiveRef: s,
		onDragCancel: O,
		onDragEnd: D,
		onDragMove: T,
		onDragOver: E,
		onDragStart: w,
		sensors: y,
		setDragRootNode: h
	};
}
function isGuestHoldingKeyboard() {
	return typeof document < "u" && document.activeElement?.tagName === "WEBVIEW";
}
function useTabStripPointerActivation({ onActivate: e, disabled: t = !1 }) {
	let n = (0, import_react.useRef)(e);
	n.current = e;
	let r = (0, import_react.useRef)(null);
	return (0, import_react.useEffect)(() => () => r.current?.(), []), { onPointerDown: (0, import_react.useCallback)((e, i) => {
		if (t || e.button !== 0) return;
		i?.(e), r.current?.();
		let a = e.clientX, o = e.clientY, s = beginTabStripPointerGesture(), c = isGuestHoldingKeyboard(), l = () => {
			window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", d), window.removeEventListener("blur", d), window.removeEventListener("focus", f), s(), r.current = null;
		}, u = (e) => {
			let t = Math.hypot(e.clientX - a, e.clientY - o) >= 12;
			l(), t || n.current();
		}, d = () => {
			l();
		}, f = () => {
			if (c) {
				c = !1;
				return;
			}
			l();
		};
		window.addEventListener("pointerup", u), window.addEventListener("pointercancel", d), window.addEventListener("blur", d), window.addEventListener("focus", f), r.current = l;
	}, [t]) };
}
function TerminalTabAgentIdentityIcon({ agent: e, isActive: t, className: n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex", !t && "opacity-70", n),
		"data-agent-icon": e,
		"aria-hidden": !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
			agent: e,
			size: 12
		})
	});
}
function TerminalTabLeadingIcon({ agent: e, activityStatus: t, shell: n, showUnreadActivity: i, isActive: a }) {
	if (i) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		"data-testid": "tab-activity-bell",
		"aria-label": translate("auto.components.tab.bar.TerminalTabLeadingIcon.7ab2964bea", "Unread agent completion"),
		className: "mr-1 inline-flex shrink-0 items-center gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilledBellIcon, { className: "size-3 text-amber-500 drop-shadow-sm" }), e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalTabAgentIdentityIcon, {
			agent: e,
			isActive: a
		}) : null]
	});
	let o = terminalTabActivityToAgentDotState(t);
	return o ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		"data-testid": "tab-agent-activity-indicator",
		"data-agent-activity-status": t,
		className: "mr-1 inline-flex shrink-0 items-center gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStateDot, {
			state: o,
			size: "md"
		}), e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalTabAgentIdentityIcon, {
			agent: e,
			isActive: a
		}) : null]
	}) : e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalTabAgentIdentityIcon, {
		agent: e,
		isActive: a,
		className: "mr-1 shrink-0"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `mr-1 inline-flex shrink-0 ${a ? "" : "opacity-70"}`,
		"data-shell-icon": n ?? "generic",
		"aria-hidden": !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShellIcon, {
			shell: n,
			size: 12
		})
	});
}
const CLOSE_ALL_CONTEXT_MENUS_EVENT = "orca-close-all-context-menus";
function SortableTab({ tab: e, unifiedTabId: t, groupId: n, tabCount: i, hasTabsToRight: a, hasTabsToLeft: o, isActive: s, isPinned: c, isExpanded: l, onActivate: d, onClose: f, onCloseOthers: p, onCloseToRight: m, onCloseToLeft: h, onSetCustomTitle: g, onSetTabColor: v, onTogglePin: b, onToggleExpand: x, dragData: S, dropIndicator: C, includeTopTabBorder: w = !0, canToggleViewMode: T = !1, isChatView: E = !1, onToggleViewMode: D, canSplitTerminal: O = !0 }) {
	let k = useAppStore((t) => terminalTabHasUnreadActivity({
		terminalTabId: e.id,
		unreadTerminalTabs: t.unreadTerminalTabs,
		unreadAgentCompletionPanes: t.unreadAgentCompletionPanes
	})), A = useAppStore((t) => resolveTerminalTabActivityStatus({
		tab: e,
		agentStatusByPaneKey: t.agentStatusByPaneKey,
		agentStatusEpoch: t.agentStatusEpoch,
		runtimePaneTitlesByTabId: t.runtimePaneTitlesByTabId,
		ptyIdsByTabId: t.ptyIdsByTabId,
		terminalLayout: t.terminalLayoutsByTabId?.[e.id]
	})), j = e.shellOverride, M = useTabAgent(e), N = e.customTitle ?? (M ? stripLeadingAgentTitleDecoration(e.title) : e.title), { attributes: P, listeners: F, setNodeRef: I } = useSortable({
		id: e.id,
		data: {
			...S,
			agent: M
		}
	}), [L, R] = (0, import_react.useState)(!1), [z, V] = (0, import_react.useState)({
		x: 0,
		y: 0
	}), { isEditing: H, renameValue: U, setRenameValue: W, handleRenameOpen: G, commitRename: K, cancelRename: Va, setRenameInputElement: Ha } = useSortableTabRename({
		tabId: e.id,
		title: e.title,
		customTitle: e.customTitle,
		onSetCustomTitle: g
	}), q = k && !H && !isTerminalTabActivityLive(A);
	(0, import_react.useEffect)(() => {
		let e = () => R(!1);
		return window.addEventListener(CLOSE_ALL_CONTEXT_MENUS_EVENT, e), () => window.removeEventListener(CLOSE_ALL_CONTEXT_MENUS_EVENT, e);
	}, []), (0, import_react.useEffect)(() => {
		if (!L) return;
		let e = () => R(!1);
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [L]);
	let J = H ? void 0 : F, { onPointerDown: Y } = useTabStripPointerActivation({
		onActivate: (0, import_react.useCallback)(() => {
			d(e.id);
		}, [d, e.id]),
		disabled: H
	}), Ua = useOptionalShortcutLabel("tab.close"), Wa = translate("auto.components.tab.bar.SortableTab.95db5f2f7d", "Close tab"), Ga = e.customTitle ?? e.title;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: TAB_CONTAINER_WIDTH_CLASSES,
		onContextMenuCapture: (e) => {
			e.preventDefault(), window.dispatchEvent(new Event(CLOSE_ALL_CONTEXT_MENUS_EVENT)), V({
				x: e.clientX,
				y: e.clientY
			}), R(!0);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: I,
			"data-testid": "sortable-tab",
			"data-tab-id": e.id,
			"data-tab-title": Ga,
			"data-pinned": c ? "true" : "false",
			"data-active": s ? "true" : "false",
			"data-agent-activity-status": A,
			...P,
			...J,
			className: `group relative flex items-center h-full px-1.5 text-xs cursor-pointer select-none outline-none focus:outline-none focus-visible:outline-none ${getTabStripBorderClasses(a, { includeTopBorder: w })} ${getDropIndicatorClasses(C ?? null)} ${getTabRootStateClasses(s)}`,
			onDoubleClick: (e) => {
				H || (e.stopPropagation(), G());
			},
			onPointerDown: (e) => {
				Y(e, J?.onPointerDown);
			},
			onMouseDown: (e) => {
				e.button === 1 && e.preventDefault();
			},
			onMouseUp: preventMiddleButtonDefault,
			onAuxClick: (t) => {
				if (!H && t.button === 1) {
					if (t.preventDefault(), t.stopPropagation(), c) return;
					f(e.id);
				}
			},
			children: [
				s && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-[color-mix(in_srgb,var(--foreground)_60%,var(--card))] z-20",
					"aria-hidden": !0
				}),
				q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": !0,
					className: "pointer-events-none absolute inset-0 bg-amber-500/10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalTabLeadingIcon, {
					agent: M,
					activityStatus: A,
					shell: j,
					showUnreadActivity: q,
					isActive: s
				}),
				c && !H && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
					className: "mr-1 size-3 shrink-0 text-muted-foreground",
					"aria-hidden": !0
				}),
				H ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					ref: Ha,
					"data-tab-rename-input": "true",
					value: U,
					"aria-label": translate("auto.components.tab.bar.SortableTab.ab19f603eb", "Rename tab {{value0}}", { value0: Ga }),
					onChange: (e) => W(e.target.value),
					onBlur: K,
					onKeyDown: (e) => {
						isImeCompositionKeyDown(e) || (e.key === "Enter" ? (e.preventDefault(), K()) : e.key === "Escape" && (e.preventDefault(), Va()));
					},
					onPointerDown: (e) => e.stopPropagation(),
					onMouseDown: (e) => {
						e.stopPropagation(), e.button === 1 && e.preventDefault();
					},
					onClick: (e) => e.stopPropagation(),
					onDoubleClick: (e) => e.stopPropagation(),
					onAuxClick: (e) => e.stopPropagation(),
					className: "mr-1 h-5 min-w-[72px] flex-1 px-1 py-0 text-xs",
					spellCheck: !1
				}) : H || L ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `${TAB_LABEL_WIDTH_CLASSES} mr-1`,
					children: N
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `${TAB_LABEL_WIDTH_CLASSES} mr-1`,
						children: N
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "bottom",
					sideOffset: 6,
					className: "max-w-80 whitespace-normal break-words text-left",
					children: N
				})] }),
				e.color && !H && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-1.5 size-2 rounded-full shrink-0",
					style: { backgroundColor: e.color }
				}),
				l && !H && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `mr-1 flex items-center justify-center w-4 h-4 rounded-sm shrink-0 ${s ? "text-muted-foreground hover:text-foreground hover:bg-muted" : "text-transparent group-hover:text-muted-foreground hover:!text-foreground hover:!bg-muted"}`,
					onPointerDown: (e) => e.stopPropagation(),
					onClick: (t) => {
						t.stopPropagation(), x(e.id);
					},
					title: translate("auto.components.tab.bar.SortableTab.fdb2691425", "Collapse pane"),
					"aria-label": translate("auto.components.tab.bar.SortableTab.fdb2691425", "Collapse pane"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "w-3 h-3" })
				}),
				!H && !c && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `relative z-10 flex items-center justify-center w-4 h-4 rounded-sm shrink-0 ${s ? "text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:text-foreground focus-visible:bg-muted" : "text-transparent group-hover:text-muted-foreground hover:!text-foreground hover:!bg-muted focus-visible:!text-foreground focus-visible:!bg-muted"}`,
						"aria-label": translate("auto.components.tab.bar.SortableTab.6df69d9388", "Close tab {{value0}}", { value0: Ga }),
						type: "button",
						"data-tab-close-button": "true",
						onPointerDown: (e) => {
							e.button === 0 && e.stopPropagation();
						},
						onMouseDown: (e) => {
							e.button === 0 && e.stopPropagation();
						},
						onClick: (t) => {
							t.preventDefault(), t.stopPropagation(), f(e.id);
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3 h-3" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "bottom",
					sideOffset: 6,
					children: Ua ? `${Wa} (${Ua})` : Wa
				})] })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableTabContextMenu, {
		tab: e,
		unifiedTabId: t,
		groupId: n,
		isActive: s,
		open: L,
		point: z,
		tabCount: i,
		hasTabsToRight: a,
		hasTabsToLeft: o,
		isPinned: c,
		onOpenChange: R,
		onActivate: d,
		onClose: f,
		onCloseOthers: p,
		onCloseToRight: m,
		onCloseToLeft: h,
		onRenameOpen: G,
		onSetTabColor: v,
		onTogglePin: b,
		canToggleViewMode: T,
		isChatView: E,
		onToggleViewMode: D,
		canSplitTerminal: O
	})] });
}
var MAX_STEPS = 50, past = [], future = [];
function commitFileExplorerOp(e) {
	past.push(e), past.length > MAX_STEPS && past.shift(), future.length = 0;
}
function clearFileExplorerUndoHistory() {
	past.length = 0, future.length = 0;
}
async function undoFileExplorer() {
	let e = past.pop();
	return e ? (await e.undo(), future.push(e), !0) : !1;
}
async function redoFileExplorer() {
	let e = future.pop();
	return e ? (await e.redo(), past.push(e), !0) : !1;
}
function fileExplorerHasUndo() {
	return past.length > 0;
}
function fileExplorerHasRedo() {
	return future.length > 0;
}
function isAbsolutePathLike(e) {
	return e.startsWith("/") || /^[A-Za-z]:[\\/]/.test(e) || e.startsWith("\\\\");
}
function stripTrailingSeparators(e) {
	return e === "/" || /^[A-Za-z]:[\\/]?$/.test(e) ? normalizeRuntimePathSeparators(e) : isWindowsAbsolutePathLike(e) ? normalizeRuntimePathSeparators(e).replace(/\/+$/, "") : e.replace(/\/+$/, "");
}
function foldSeparatorsForFlavor(e, t) {
	return isWindowsAbsolutePathLike(t) ? normalizeRuntimePathSeparators(e) : e;
}
function deriveRelativeRootFromOpenFile(e, t) {
	let n = stripTrailingSeparators(e), r = foldSeparatorsForFlavor(t, e).replace(/^\/+/, "");
	if (!r || isAbsolutePathLike(t)) {
		let e = n.lastIndexOf("/");
		return e <= 0 ? "/" : n.slice(0, e);
	}
	let i = `/${r}`;
	if (n.endsWith(i)) return stripTrailingSeparators(n.slice(0, -i.length) || "/");
	let a = basename(n);
	if (a && r === a) {
		let e = n.lastIndexOf("/");
		return e <= 0 ? "/" : n.slice(0, e);
	}
	let o = n.lastIndexOf("/");
	return o <= 0 ? "/" : n.slice(0, o);
}
function splitAbsolutePath(e) {
	let t = stripTrailingSeparators(e), n = /^([A-Za-z]:)(?:\/(.*))?$/.exec(t);
	if (n) return {
		prefix: n[1].toLowerCase(),
		segments: (n[2] ?? "").split("/").filter(Boolean)
	};
	if (t.startsWith("//")) {
		let e = t.slice(2).split("/").filter(Boolean), n = (e[0] ?? "").toLowerCase();
		return {
			prefix: n === "wsl.localhost" || n === "wsl$" ? `//wsl/${(e[1] ?? "").toLowerCase()}` : `//${e.slice(0, 2).join("/").toLowerCase()}`,
			segments: e.slice(2)
		};
	}
	return t.startsWith("/") ? {
		prefix: "/",
		segments: t.slice(1).split("/").filter(Boolean)
	} : {
		prefix: "",
		segments: t.split("/").filter(Boolean)
	};
}
function computeMovedPath(e, t, n) {
	let r = relativePathInsideRoot(e, n);
	if (r === null) return t + n.slice(e.length);
	if (r === "") return t;
	if (isWindowsAbsolutePathLike(t)) {
		let e = t.includes("\\") ? "\\" : "/";
		return `${t.replace(/[\\/]+$/, "")}${e}${r.split("/").join(e)}`;
	}
	return `${t.replace(/\/+$/, "")}/${r}`;
}
function getRelativePathFromRoot(e, t) {
	let n = relativePathInsideRoot(e, t);
	if (n !== null) return n;
	let r = splitAbsolutePath(e), i = splitAbsolutePath(t);
	if (r.prefix !== i.prefix) return foldSeparatorsForFlavor(t, t);
	let a = /^[a-z]:$/i.test(r.prefix) || r.prefix.startsWith("//") && !r.prefix.startsWith("//wsl/"), o = (e, t) => a ? e.toLowerCase() === t.toLowerCase() : e === t, s = 0;
	for (; s < r.segments.length && s < i.segments.length && o(r.segments[s], i.segments[s]);) s += 1;
	return [...Array.from({ length: r.segments.length - s }, () => ".."), ...i.segments.slice(s)].join("/");
}
function getUpdatedRelativePath({ filePath: e, relativePath: t, worktreeId: n, updatedPath: r, initiatingWorktreeId: i, initiatingWorktreePath: a }) {
	let o = relativePathInsideRoot(a, e), s = foldSeparatorsForFlavor(t, e).replace(/^\/+/, "");
	return getRelativePathFromRoot((i === void 0 ? n !== "global-floating-terminal" && o !== null && foldSeparatorsForFlavor(o, e) === s : n === i) ? a : deriveRelativeRootFromOpenFile(e, t), r);
}
function remapOpenEditorTabsForPathChange({ fromPath: e, toPath: t, worktreePath: n, worktreeId: r, moveOperationId: i }) {
	let a = useAppStore.getState(), o = getExecutionHostIdForWorktree(a, r), s = a.openFiles.filter((t) => isPathInsideOrEqual(e, t.filePath) && getExecutionHostIdForWorktree(a, t.worktreeId) === o);
	if (s.length === 0) return { ok: !0 };
	let c = (n) => computeMovedPath(e, t, n.filePath), l = (e) => getUpdatedRelativePath({
		filePath: e.filePath,
		relativePath: e.relativePath,
		worktreeId: e.worktreeId,
		updatedPath: c(e),
		initiatingWorktreeId: r,
		initiatingWorktreePath: n
	}), u = (e) => `${e.worktreeId}::${e.runtimeEnvironmentId?.trim() || ""}`, d = /* @__PURE__ */ new Map(), f = (e) => {
		let t = c(e), n = u(e), r = d.get(t);
		if (r === n) return t;
		if (r !== void 0) return buildOwnedEditorFileId(t, e.worktreeId, e.runtimeEnvironmentId);
		let i = resolveEditorFileIdForOwner(a, t, e.worktreeId, e.runtimeEnvironmentId, ["edit"]);
		return i === t && d.set(t, n), i;
	}, p = [], m = /* @__PURE__ */ new Map();
	for (let t of s) {
		if (t.mode !== "edit") continue;
		let n = f(t);
		m.set(t.id, n), p.push({
			oldFileId: t.id,
			newFileId: n,
			oldFilePath: t.filePath,
			newFilePath: c(t),
			newRelativePath: l(t),
			newLanguage: detectLanguage(basename(c(t))),
			consumeUntitled: t.isUntitled === !0 && t.filePath === e
		});
	}
	for (let e of s) {
		if (e.mode !== "markdown-preview") continue;
		let t = (e.markdownPreviewSourceFileId ? m.get(e.markdownPreviewSourceFileId) : void 0) ?? f(e);
		p.push({
			oldFileId: e.id,
			newFileId: `markdown-preview::${t}`,
			oldFilePath: e.filePath,
			newFilePath: c(e),
			newRelativePath: l(e),
			newMarkdownPreviewSourceFileId: t
		});
	}
	for (let e of s) {
		if (e.mode !== "diff" || e.diffSource !== "staged" && e.diffSource !== "unstaged") continue;
		let t = l(e);
		p.push({
			oldFileId: e.id,
			newFileId: buildDiffEditorFileId(e.worktreeId, e.diffSource, t, e.runtimeEnvironmentId),
			oldFilePath: e.filePath,
			newFilePath: c(e),
			newRelativePath: t
		});
	}
	return p.length === 0 ? { ok: !0 } : useAppStore.getState().rekeyOpenFilesForPathChange({
		rekeys: p,
		moveOperationId: i
	});
}
var moveOperationCounter = 0;
async function executeOpenEditorPathMove(e) {
	let { context: t, fromPath: n, toPath: r, worktreeId: i, worktreePath: a } = e, o = `editor-move-${moveOperationCounter += 1}`, s = useAppStore.getState(), c = getExecutionHostIdForWorktree(s, i), l = s.openFiles.filter((e) => isPathInsideOrEqual(n, e.filePath) && getExecutionHostIdForWorktree(s, e.worktreeId) === c), u = [], d = /* @__PURE__ */ new Map(), f = (e, t) => {
		d.set(`${e}::${t ?? "local"}`, {
			worktreeId: e,
			owner: t
		});
	};
	f(i, getRuntimeEnvironmentIdForWorktree(s, i));
	for (let e of l) f(e.worktreeId, e.runtimeEnvironmentId?.trim() || null);
	for (let [e, t] of d) {
		let r = `${o}::${e}`;
		u.push(r), beginEditorPathMove({
			operationId: r,
			worktreeId: t.worktreeId,
			runtimeEnvironmentId: t.owner,
			sourcePaths: [n]
		});
	}
	await Promise.all(l.map((e) => requestEditorSaveQuiesce({ fileId: e.id })));
	try {
		await renameRuntimePath(t, n, r);
	} catch (e) {
		for (let e of u) settleEditorPathMove(e);
		throw e;
	}
	try {
		let e = useAppStore.getState(), s = l.filter((e) => e.mirroredFromRuntimeSession), c = remapOpenEditorTabsForPathChange({
			fromPath: n,
			toPath: r,
			worktreePath: a,
			worktreeId: i,
			moveOperationId: o
		});
		if (!c.ok) {
			let e;
			try {
				await renameRuntimePath(t, r, n);
			} catch (t) {
				e = t;
			}
			let i = `Could not retarget open editors for the move (${c.reason}).`;
			throw Error(e ? `${i} The on-disk move could not be undone and the file may remain at the new path: ${e instanceof Error ? e.message : String(e)}` : i);
		}
		for (let t of s) notifyHostOfMirroredEditorClose(e, t.worktreeId, t.id);
	} finally {
		for (let e of u) settleEditorPathMove(e);
	}
	let p = useAppStore.getState().openFiles.filter((e) => e.pendingSelfMoveEcho?.operationId === o).map((e) => e.id);
	p.length > 0 && verifyLatchedMoveDestinations(a, t.connectionId, p);
}
function extractIpcErrorMessage(e, t) {
	if (!(e instanceof Error)) return t;
	let n = e.message.match(/Error invoking remote method '[^']*': (?:Error: )?(.+)/);
	return n ? n[1] : e.message;
}
async function renameFileOnDisk(e) {
	let { oldPath: t, newName: n, worktreeId: r, worktreePath: i, refreshDir: a } = e, o = n.trim();
	if (!o) return;
	let s = basename(t);
	if (o === s) return;
	let c = dirname(t), l = joinPath(c, o), u = captureFileExplorerOperationGuard(r, e.operationOwner ?? getFileExplorerOperationOwner(r)), d = u.route, f = {
		settings: d.settings,
		worktreeId: r,
		worktreePath: i,
		connectionId: d.connectionId,
		expectedExecutionHostId: d.expectedExecutionHostId,
		expectedSshTargetId: d.expectedSshTargetId,
		expectedSshConnectionGeneration: d.expectedSshConnectionGeneration
	};
	try {
		u.assertCurrent(), await executeOpenEditorPathMove({
			context: f,
			fromPath: t,
			toPath: l,
			worktreeId: r,
			worktreePath: i
		}), commitFileExplorerOp({
			undo: async () => {
				u.assertCurrent(), await executeOpenEditorPathMove({
					context: f,
					fromPath: l,
					toPath: t,
					worktreeId: r,
					worktreePath: i
				}), a && await a(c);
			},
			redo: async () => {
				u.assertCurrent(), await executeOpenEditorPathMove({
					context: f,
					fromPath: t,
					toPath: l,
					worktreeId: r,
					worktreePath: i
				}), a && await a(c);
			}
		});
	} catch (e) {
		toast.error(extractIpcErrorMessage(e, `Failed to rename '${s}'.`));
	}
	a && await a(c);
}
export { ListX as A, getTabStripBorderClasses as C, DragOverlay as D, DndContext as E, useDroppable as O, getTabRootStateClasses as S, useSortable as T, TAB_CONTAINER_WIDTH_CLASSES as _, commitFileExplorerOp as a, ACTIVE_TAB_INDICATOR_CLASSES as b, redoFileExplorer as c, SortableTab as d, useTabStripPointerActivation as f, resolveTabIndicatorEdges as g, resolveDropZone as h, clearFileExplorerUndoHistory as i, isTabStripPointerGestureActive as k, undoFileExplorer as l, useTabDragSplit as m, renameFileOnDisk as n, fileExplorerHasRedo as o, getTabPaneBodyDroppableId as p, executeOpenEditorPathMove as r, fileExplorerHasUndo as s, extractIpcErrorMessage as t, CLOSE_ALL_CONTEXT_MENUS_EVENT as u, TAB_LABEL_WIDTH_CLASSES as v, SortableContext as w, getDropIndicatorClasses as x, preventMiddleButtonDefault as y };
