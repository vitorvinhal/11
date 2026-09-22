import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ArrowLeft } from "./arrow-left-DVNzwFVN.js";
import { t as ArrowRight } from "./arrow-right-DHTXzy8t.js";
import { Ca as getContextualTourStepCopy, Da as isContextualTourAllowedForModal, Ea as getVisibleContextualTourStepIndexes, Oa as BROWSER_CLIENT_HOSTED_REMOTE_SETTINGS_TARGET_ID, Oy as getContextualTour, Sa as getContextualTourPanelHost, Ta as getMeasurableContextualTourTarget, t as useAppStore, wa as getContextualTourStepProgress, xa as getContextualTourOutcomeStepTotal } from "./store-C9f8FDJV.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { c as shift, i as flip, n as autoUpdate, r as computePosition, s as offset, t as arrow } from "./floating-ui.dom-HG4TtDPa.js";
import { t as Switch } from "./switch-iHg-WoiR.js";
import "./renderer-app-platform--nJ6HYmL.js";
import { t as installWindowVisibilityInterval } from "./window-visibility-interval-BxcyZyE8.js";
import "./stale-document-visibility-rSdoU229.js";
import "./keybindings-1v53ESY9.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { n as CONTEXTUAL_TOUR_ENABLE_AUTO_WORKSPACE_NAME_EVENT, t as openWorkspaceCreationComposerWithTourHandoff } from "./workspace-creation-tour-handoff-BalJiD1Q.js";
import { i as formatShortcutLabel } from "./useShortcutLabel-B283mfzm.js";
import "./request-contextual-tour-when-ready-De5k-KLS.js";
import "./feature-wall-setup-steps-Dq4RFB4C.js";
import { t as requestActiveTerminalPaneSplit } from "./request-active-terminal-pane-split-etsYGifc.js";
import { i as trackContextualTourShown, r as trackContextualTourOutcome } from "./feature-education-telemetry-CDhUP5fH.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), LOCALIZED_STEP_COPY = {
	"automations-intro": {
		title: () => translate("auto.components.contextual.tours.contextual.tour.overlay.measurement.automations.intro.title", "What is an automation?"),
		body: () => translate("auto.components.contextual.tours.contextual.tour.overlay.measurement.automations.intro.body", "Automations run agent work on a schedule. Add an automation by clicking this button.")
	},
	"client-hosted-browser-intro": {
		title: () => translate("auto.components.contextual.tours.contextual.tour.overlay.measurement.client.hosted.browser.intro.title", "This page renders on your desktop"),
		body: () => translate("auto.components.contextual.tours.contextual.tour.overlay.measurement.client.hosted.browser.intro.body", "Remote browser tabs now render on this device. Network traffic still goes through the remote host.")
	},
	"automations-results": {
		title: () => translate("auto.components.contextual.tours.contextual.tour.overlay.measurement.automations.results.title", "Find the results"),
		body: () => translate("auto.components.contextual.tours.contextual.tour.overlay.measurement.automations.results.body", "Runs show when automations ran, what happened, and where to inspect their output.")
	}
};
function getContextualTourDisplayProgress(t) {
	return t.activeStep ? t.tour.id === "browser" ? {
		current: t.stepIndex + 1,
		total: t.tour.steps.length
	} : getContextualTourStepProgress({
		visibleStepIndexes: t.visibleStepIndexes,
		stepIndex: t.stepIndex
	}) : null;
}
function getContextualTourMeasurementAction(t) {
	return t.visibleStepIndexes.some((l) => l > t.activeStepIndex) ? { kind: "advance" } : t.activeStepIndex < t.tour.steps.length - 1 || t.tour.id === "browser" ? { kind: "wait" } : { kind: "cancel" };
}
function isContextualTourLastDisplayStep(t) {
	return t.tour.id === "browser" ? t.activeStepIndex === t.tour.steps.length - 1 : t.progress.current === t.progress.total;
}
function measureContextualTourOverlayRenderState(t) {
	let l = getVisibleContextualTourStepIndexes(t.tour, (t) => getMeasurableContextualTourTarget(t) !== null), u = Math.max(t.previousTelemetryTotalSteps, getContextualTourOutcomeStepTotal(l)), f = t.tour.steps[t.activeStepIndex], p = f ? getMeasurableContextualTourTarget(f.targetSelector) : null, m = f?.id ? LOCALIZED_STEP_COPY[f.id] : void 0, h = m ? m.title() : f?.title, _ = m ? m.body() : f ? getContextualTourStepCopy(f) : void 0, y = getContextualTourDisplayProgress({
		tour: t.tour,
		visibleStepIndexes: l,
		stepIndex: t.activeStepIndex,
		activeStep: f
	});
	if (l.length === 0 || !f || !y) return { kind: "cancel" };
	if (!p) {
		let u = getContextualTourMeasurementAction({
			tour: t.tour,
			visibleStepIndexes: l,
			activeStepIndex: t.activeStepIndex
		});
		return u.kind === "advance" ? { kind: "advance" } : u.kind === "wait" ? { kind: "wait" } : { kind: "cancel" };
	}
	let b = f.primaryAction?.kind === "show-worktrees" && t.sidebarOpen, C = b ? {
		kind: "next",
		label: translate("auto.components.contextual.tours.contextual.tour.overlay.measurement.38b3155418", "Next")
	} : f.primaryAction, w = b ? void 0 : f.secondaryAction;
	return {
		kind: "render",
		telemetryTotalSteps: u,
		renderState: {
			rect: p.rect,
			targetElement: p.element,
			progress: y,
			title: h ?? f.title,
			body: formatContextualTourStepCopy(_ ?? getContextualTourStepCopy(f), t.keybindings),
			control: f.control,
			primaryAction: C,
			secondaryAction: w,
			preferredPlacement: f.preferredPlacement,
			targetPulse: f.targetPulse,
			hidePrimaryAction: f.hidePrimaryAction,
			isLastStep: isContextualTourLastDisplayStep({
				tour: t.tour,
				activeStepIndex: t.activeStepIndex,
				progress: y
			}),
			isFirstStep: y.current === 1,
			panelHost: getContextualTourPanelHost(p.element)
		}
	};
}
function hasContextualTourTargetMoved(t) {
	if (!t) return !0;
	let l = t.element.getBoundingClientRect();
	return l.left !== t.rect.left || l.top !== t.rect.top || l.width !== t.rect.width || l.height !== t.rect.height;
}
function areContextualTourRenderStatesEqual(t, l) {
	return t === null || l === null ? t === l : t.targetElement === l.targetElement && t.panelHost === l.panelHost && t.rect.left === l.rect.left && t.rect.top === l.rect.top && t.rect.width === l.rect.width && t.rect.height === l.rect.height && t.progress.current === l.progress.current && t.progress.total === l.progress.total && t.title === l.title && t.body === l.body && t.control === l.control && t.preferredPlacement === l.preferredPlacement && t.targetPulse === l.targetPulse && t.hidePrimaryAction === l.hidePrimaryAction && t.isLastStep === l.isLastStep && t.isFirstStep === l.isFirstStep && areStepActionsEqual(t.primaryAction, l.primaryAction) && areStepActionsEqual(t.secondaryAction, l.secondaryAction);
}
function areStepActionsEqual(t, l) {
	return t === void 0 || l === void 0 ? t === l : t.kind === l.kind && t.label === l.label;
}
function getContextualTourCleanupOutcome(t) {
	return useAppStore.getState().lastCompletedContextualTourId === t ? "completed" : "cancelled";
}
function formatContextualTourStepCopy(t, l) {
	return t.replace("{terminal.splitRight}", formatShortcutLabel("terminal.splitRight", l));
}
var import_react_dom = require_react_dom(), PANEL_GAP = 12, COLLISION_PADDING = 12, ARROW_PADDING = 16, ARROW_WIDTH$1 = 18, ARROW_HEIGHT$1 = 8, MOTION_SETTLE_FRAMES = 12, PARKED_PROBE_MS = 250, FALLBACK_PLACEMENTS = {
	top: [
		"bottom",
		"right",
		"left"
	],
	right: [
		"left",
		"bottom",
		"top"
	],
	bottom: [
		"top",
		"right",
		"left"
	],
	left: [
		"right",
		"bottom",
		"top"
	]
};
const CONTEXTUAL_TOUR_ARROW_SIZE = {
	width: ARROW_WIDTH$1,
	height: ARROW_HEIGHT$1
};
async function getContextualTourFloatingPosition(t) {
	let l = t.preferredPlacement ?? "right", u = getContextualTourCollisionBoundary(t.panelHost), d = await computePosition(t.targetElement, t.floatingElement, {
		strategy: t.panelHost ? "absolute" : "fixed",
		placement: l,
		middleware: [
			offset(PANEL_GAP),
			flip({
				boundary: u,
				padding: COLLISION_PADDING,
				fallbackPlacements: FALLBACK_PLACEMENTS[l]
			}),
			shift({
				boundary: u,
				padding: COLLISION_PADDING,
				crossAxis: !0
			}),
			arrow({
				element: t.arrowElement,
				padding: ARROW_PADDING
			})
		]
	}), f = getContextualTourPanelPlacement(d.placement), p = {
		left: d.x,
		top: d.y
	};
	return {
		arrowPosition: getContextualTourArrowPosition({
			arrowX: d.middlewareData.arrow?.x,
			arrowY: d.middlewareData.arrow?.y,
			panelPlacement: f
		}),
		panelPlacement: f,
		panelPosition: p
	};
}
function watchContextualTourFloatingPosition(t) {
	let l = !1, u = 0, d = null, f = () => {
		let f = ++u;
		getContextualTourFloatingPosition(t).then((p) => {
			l || f !== u || arePositionsEqual(d, p) || (d = p, t.onPosition(p));
		}).catch(() => void 0);
	}, p = createTargetMotionTracker(t.targetElement, f), m = autoUpdate(t.targetElement, t.floatingElement, () => {
		f(), p.wake();
	});
	return () => {
		l = !0, p.stop(), m();
	};
}
function createTargetMotionTracker(t, l) {
	let u = null, d = null, f = !1, p = 0, m = t.getBoundingClientRect(), h = () => {
		f || d !== null || (d = window.setTimeout(() => {
			if (d = null, g()) {
				l(), v();
				return;
			}
			h();
		}, PARKED_PROBE_MS));
	}, g = () => {
		let l = t.getBoundingClientRect(), u = !rectsMatch(m, l);
		return m = l, u;
	}, _ = () => {
		if (u = null, !f) {
			if (g() ? (p = 0, l()) : p += 1, p >= MOTION_SETTLE_FRAMES) {
				h();
				return;
			}
			u = requestAnimationFrame(_);
		}
	}, v = () => {
		p = 0, !(f || u !== null) && (d !== null && (window.clearTimeout(d), d = null), u = requestAnimationFrame(_));
	};
	return v(), {
		wake: v,
		stop: () => {
			f = !0, u !== null && (cancelAnimationFrame(u), u = null), d !== null && (window.clearTimeout(d), d = null);
		}
	};
}
function rectsMatch(t, l) {
	return t.left === l.left && t.top === l.top && t.width === l.width && t.height === l.height;
}
function arePositionsEqual(t, l) {
	return t !== null && t.panelPlacement === l.panelPlacement && t.panelPosition.left === l.panelPosition.left && t.panelPosition.top === l.panelPosition.top && t.arrowPosition.left === l.arrowPosition.left && t.arrowPosition.top === l.arrowPosition.top;
}
function getContextualTourCollisionBoundary(t) {
	return t ?? "clippingAncestors";
}
function getContextualTourPanelPlacement(t) {
	return t.split("-")[0];
}
function getContextualTourArrowPosition(t) {
	let l = {
		top: "bottom",
		right: "left",
		bottom: "top",
		left: "right"
	}[t.panelPlacement];
	return {
		left: t.arrowX,
		top: t.arrowY,
		[l]: -ARROW_HEIGHT$1
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), ARROW_WIDTH = CONTEXTUAL_TOUR_ARROW_SIZE.width, ARROW_HEIGHT = CONTEXTUAL_TOUR_ARROW_SIZE.height, PLACEMENT_TRANSFORM = {
	top: "rotate(0deg)",
	bottom: "rotate(180deg)",
	left: `translateX(${(ARROW_WIDTH - ARROW_HEIGHT) / 2}px) rotate(-90deg)`,
	right: `translateX(${(ARROW_HEIGHT - ARROW_WIDTH) / 2}px) rotate(90deg)`
};
function ContextualTourArrow({ arrowRef: t, placement: l, style: u }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		ref: t,
		"aria-hidden": "true",
		width: ARROW_WIDTH,
		height: ARROW_HEIGHT,
		viewBox: `0 0 ${ARROW_WIDTH} ${ARROW_HEIGHT}`,
		className: "absolute block overflow-visible fill-(--contextual-tour-panel-surface) stroke-(--contextual-tour-panel-border)",
		style: {
			...u,
			transform: PLACEMENT_TRANSFORM[l]
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: `M0,0 L${ARROW_WIDTH / 2},${ARROW_HEIGHT} L${ARROW_WIDTH},0`,
			strokeWidth: 1
		})
	});
}
function ContextualTourControl({ control: t }) {
	switch (t.kind) {
		case "auto-rename-branch-from-work": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoRenameBranchFromWorkControl, {});
	}
}
function toggleAutoRenameBranchFromWork(t) {
	let l = !t.enabled;
	t.updateSettings({ autoRenameBranchFromWork: l }), l && t.dispatchEvent(new Event(CONTEXTUAL_TOUR_ENABLE_AUTO_WORKSPACE_NAME_EVENT));
}
function AutoRenameBranchFromWorkControl() {
	let t = useAppStore((t) => t.settings?.autoRenameBranchFromWork === !0), l = useAppStore((t) => t.updateSettings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 rounded-md border border-border/70 bg-muted/35 px-3 py-2.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-foreground",
					children: translate("auto.components.contextual.tours.ContextualTourControl.731c5573df", "Auto-name from first message")
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				checked: t,
				"aria-label": translate("auto.components.contextual.tours.ContextualTourControl.186eecc34f", "Auto-name workspace from first agent message"),
				onCheckedChange: () => {
					toggleAutoRenameBranchFromWork({
						enabled: t,
						updateSettings: l,
						dispatchEvent: (t) => window.dispatchEvent(t)
					});
				}
			})]
		})
	});
}
function ContextualTourProgressDots({ current: t, total: l }) {
	return l <= 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: "h-1.5 w-4"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		role: "progressbar",
		"aria-valuemin": 1,
		"aria-valuemax": l,
		"aria-valuenow": t,
		"aria-label": translate("auto.components.contextual.tours.ContextualTourProgressDots.dcd6e6b03e", "Step {{value0}} of {{value1}}", {
			value0: t,
			value1: l
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex items-center gap-1.5",
			"aria-hidden": "true",
			children: Array.from({ length: l }).map((l, u) => {
				let d = u + 1 === t, f = u + 1 < t;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-1.5 rounded-full transition-all duration-200 ease-out", d ? "w-4 bg-foreground" : f ? "w-1.5 bg-foreground/55" : "w-1.5 bg-foreground/20") }, u);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "whitespace-nowrap text-[11px] font-medium leading-none text-muted-foreground",
			children: [
				t,
				" ",
				translate("auto.components.contextual.tours.ContextualTourProgressDots.7734cb8ad3", "of"),
				" ",
				l
			]
		})]
	});
}
var FOCUSABLE_SELECTOR = "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", SKIP_BUTTON_SELECTOR = "button[aria-label^=\"Skip\"], button[aria-label=\"Dismiss tour\"]";
if (typeof window < "u") {
	let t = window;
	t.__orcaContextualTourGlobalKeyGuardInstalled || (t.__orcaContextualTourGlobalKeyGuardInstalled = !0, window.addEventListener("keydown", handleContextualTourGlobalKeyDown, !0));
}
var PANEL_BASE_CLASSES = "orca-contextual-tour-panel rounded-lg border border-border text-popover-foreground backdrop-blur-[2px]", PANEL_ANIMATION_CLASSES = "animate-in fade-in-0 zoom-in-95 duration-200 ease-out";
function ContextualTourOverlaySurface({ activeTourId: t, renderState: l, panelRef: u, panelHost: g, onSkip: _, onBack: v, onNext: y, onStepAction: b, onOverlayKeyDownCapture: x }) {
	let S = (0, import_react.useRef)(null), [C, w] = (0, import_react.useState)(null), T = g?.getAttribute("data-slot"), D = cn(PANEL_BASE_CLASSES, PANEL_ANIMATION_CLASSES, T === "sheet-content" ? "absolute z-[80] w-[min(20rem,calc(100%-1.5rem))]" : "absolute z-[80] w-[min(20rem,calc(100%-2rem))]"), O = cn(PANEL_BASE_CLASSES, PANEL_ANIMATION_CLASSES, "fixed w-[min(20rem,calc(100vw-1.5rem))]"), k = `${t}-${l.progress.current}`, A = {
		kind: l.isLastStep ? "complete" : "next",
		label: l.isLastStep ? translate("auto.components.contextual.tours.ContextualTourOverlaySurface.complete", "Done") : translate("auto.components.contextual.tours.contextual.tour.overlay.measurement.38b3155418", "Next")
	}, j = l.primaryAction ?? (l.hidePrimaryAction ? null : A), M = l.targetPulse === !0, N = M ? {
		left: l.rect.left,
		top: l.rect.top,
		width: l.rect.width,
		height: l.rect.height
	} : void 0, P = {
		left: 0,
		top: 0,
		visibility: "hidden"
	};
	(0, import_react.useLayoutEffect)(() => {
		let t = u.current, d = S.current;
		if (!t || !d) {
			w(null);
			return;
		}
		return w(null), watchContextualTourFloatingPosition({
			arrowElement: d,
			floatingElement: t,
			panelHost: g,
			preferredPlacement: l.preferredPlacement,
			targetElement: l.targetElement,
			onPosition: w
		});
	}, [
		g,
		u,
		l.preferredPlacement,
		l.targetElement
	]);
	let F = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: u,
		"aria-live": "polite",
		"aria-label": l.title,
		"data-contextual-tour-panel": "",
		"data-placement": C?.panelPlacement ?? void 0,
		role: "dialog",
		tabIndex: -1,
		className: g ? D : O,
		style: C?.panelPosition ?? P,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextualTourArrow, {
			arrowRef: S,
			placement: C?.panelPlacement ?? l.preferredPlacement ?? "right",
			style: C?.arrowPosition ?? { visibility: "hidden" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-in fade-in-0 duration-150 ease-out p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon-xs",
					"aria-label": l.isLastStep ? translate("auto.components.contextual.tours.ContextualTourOverlaySurface.d974f32a83", "Dismiss tour") : translate("auto.components.contextual.tours.ContextualTourOverlaySurface.4f86e2a10b", "Skip tour"),
					onClick: () => _(t),
					className: "absolute right-2 top-2 text-muted-foreground hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "pr-6 text-sm font-semibold tracking-tight text-foreground",
					children: l.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-xs leading-5 text-muted-foreground",
					children: l.body
				}),
				l.control ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextualTourControl, { control: l.control }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3.5 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextualTourProgressDots, {
						current: l.progress.current,
						total: l.progress.total
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							l.isFirstStep ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "xs",
								"aria-label": translate("auto.components.contextual.tours.ContextualTourOverlaySurface.4a9568f773", "Back"),
								onClick: v,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), translate("auto.components.contextual.tours.ContextualTourOverlaySurface.4a9568f773", "Back")]
							}),
							l.secondaryAction ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "xs",
								onClick: () => b(l.secondaryAction),
								children: l.secondaryAction.label
							}) : null,
							j ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "xs",
								onClick: j.kind === A.kind && j.label === A.label ? y : () => b(j),
								children: [j.label, j.kind === "next" && !l.isLastStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {}) : null]
							}) : null
						]
					})]
				})
			]
		}, k)]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-[70] pointer-events-none"),
		"data-contextual-tour-overlay": "",
		role: "presentation",
		onKeyDownCapture: x,
		children: [M ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "orca-contextual-tour-target-rings fixed z-[75]",
			"data-contextual-tour-target-rings": "",
			style: N
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-auto",
			children: g ? (0, import_react_dom.createPortal)(F, g) : F
		})]
	});
}
function handleContextualTourOverlayKeyDown(t) {
	t.key === "Escape" && (t.preventDefault(), t.stopPropagation(), t.currentTarget.querySelector(SKIP_BUTTON_SELECTOR)?.click());
}
function handleContextualTourGlobalKeyDown(t) {
	if (!useAppStore.getState().activeContextualTourId || t.key !== "Escape") return;
	let l = document.querySelector("[data-contextual-tour-overlay]"), u = document.querySelector("[data-contextual-tour-panel]") ?? l;
	if (!l || !u) return;
	t.preventDefault(), t.stopImmediatePropagation();
	let d = u.querySelector(SKIP_BUTTON_SELECTOR);
	d && d.click();
}
function getContextualTourFocusableElements(t) {
	return Array.from(t.querySelectorAll(FOCUSABLE_SELECTOR)).filter((t) => t.getClientRects().length > 0 || t === document.activeElement);
}
function performContextualTourStepAction(t) {
	let l = () => {
		t.isLastStep ? t.finishTour() : t.advanceContextualTour();
	};
	switch (t.action.kind) {
		case "next":
			l();
			return;
		case "complete":
			t.finishTour();
			return;
		case "split-terminal-pane":
			t.activeTabId && t.dispatchTerminalPaneSplit({
				tabId: t.activeTabId,
				direction: "vertical"
			});
			return;
		case "create-worktree":
			t.detachContextualTourSource(), t.setSidebarOpen(!0), t.openWorkspaceComposer();
			return;
		case "show-worktrees":
			t.setSidebarOpen(!0), l();
			return;
		case "open-tasks":
			t.detachContextualTourSource(), t.openTaskPage(), l();
			return;
		case "open-getting-started":
			t.finishTour(), t.schedule(() => {
				t.openModal("setup-guide", { telemetrySource: "contextual_tour" });
			});
			return;
		case "open-client-hosted-browser-settings": t.finishTour(), t.schedule(() => {
			t.openClientHostedBrowserSettings();
		});
	}
}
function ContextualTourOverlay() {
	let t = useAppStore((t) => t.activeContextualTourId), l = useAppStore((t) => t.activeContextualTourStepIndex), u = useAppStore((t) => t.activeContextualTourSource), d = useAppStore((t) => t.activeContextualTourWasFeaturePreviouslyInteracted), f = useAppStore((t) => t.activeModal), p = useAppStore((t) => t.contextualToursOnboardingVisible), m = useAppStore((t) => t.contextualToursBlockingSurfaceVisible), h = useAppStore((t) => t.activeContextualTourSuppressed), g = useAppStore((t) => t.keybindings), v = useAppStore((t) => t.activeTabId), x = useAppStore((t) => t.sidebarOpen), S = useAppStore((t) => t.markContextualToursSeen), w = useAppStore((t) => t.advanceContextualTour), T = useAppStore((t) => t.regressContextualTour), E = useAppStore((t) => t.dismissContextualTour), D = useAppStore((t) => t.completeContextualTour), O = useAppStore((t) => t.cancelContextualTour), k = useAppStore((t) => t.detachContextualTourSource), A = useAppStore((t) => t.setSidebarOpen), j = useAppStore((t) => t.openTaskPage), M = useAppStore((t) => t.openModal), N = useAppStore((t) => t.openSettingsTarget), P = useAppStore((t) => t.openSettingsPage), [I, L] = (0, import_react.useState)(null), R = (0, import_react.useRef)(null), z = (0, import_react.useRef)(null), B = (0, import_react.useRef)(null), V = (0, import_react.useRef)(null), H = (0, import_react.useRef)(null), U = (0, import_react.useRef)(null), W = (0, import_react.useRef)(!1), G = (0, import_react.useRef)(/* @__PURE__ */ new Set()), K = (0, import_react.useRef)(1), q = (0, import_react.useRef)(0), J = (0, import_react.useRef)(1), Y = (0, import_react.useMemo)(() => t ? getContextualTour(t) : null, [t]), Z = (0, import_react.useCallback)((l) => {
		if (!t || W.current || U.current !== t) return;
		W.current = !0;
		let d = q.current;
		trackContextualTourOutcome({
			tourId: t,
			source: u,
			outcome: l,
			stepsSeen: G.current.size,
			totalSteps: K.current,
			...d > 0 ? {
				furthestStepIndex: d,
				definedStepCount: J.current
			} : {}
		});
	}, [t, u]);
	(0, import_react.useLayoutEffect)(() => {
		if (!t) {
			L(null);
			return;
		}
		B.current = null, U.current = null, W.current = !1, G.current = /* @__PURE__ */ new Set(), K.current = 1, q.current = 0, J.current = Y?.steps.length ?? 1, L(null);
	}, [Y?.steps.length, t]), (0, import_react.useEffect)(() => {
		!Y || !t || (p || m || h || !isContextualTourAllowedForModal(Y, f)) && (Z("cancelled"), O(t));
	}, [
		f,
		h,
		Y,
		t,
		m,
		O,
		Z,
		p
	]);
	let Q = (0, import_react.useCallback)(() => {
		if (!Y || t === null) {
			z.current = null, L(null);
			return;
		}
		J.current = Y.steps.length;
		let u = measureContextualTourOverlayRenderState({
			tour: Y,
			activeStepIndex: l,
			sidebarOpen: x,
			keybindings: g,
			previousTelemetryTotalSteps: K.current
		});
		if (K.current = Math.max(K.current, u.kind === "render" ? u.telemetryTotalSteps : 0), u.kind !== "render" && (z.current = null), u.kind === "advance") {
			w();
			return;
		}
		if (u.kind !== "wait") {
			if (u.kind === "cancel") {
				Z("cancelled"), O(t);
				return;
			}
			z.current = {
				element: u.renderState.targetElement,
				rect: u.renderState.rect
			}, L((t) => areContextualTourRenderStatesEqual(t, u.renderState) ? t : u.renderState);
		}
	}, [
		l,
		Y,
		t,
		w,
		O,
		Z,
		g,
		x
	]);
	if ((0, import_react.useEffect)(() => {
		if (!t) return;
		let l = null, u = !1, d = (t) => {
			u ||= t, l === null && (l = window.requestAnimationFrame(() => {
				l = null;
				let t = u;
				u = !1, (t || hasContextualTourTargetMoved(z.current)) && Q();
			}));
		}, f = () => d(!1), p = () => d(!0);
		window.addEventListener("resize", p), window.addEventListener("scroll", f, !0);
		let m = installWindowVisibilityInterval({
			run: p,
			intervalMs: 500
		});
		return () => {
			l !== null && window.cancelAnimationFrame(l), window.removeEventListener("resize", p), window.removeEventListener("scroll", f, !0), m();
		};
	}, [t, Q]), (0, import_react.useLayoutEffect)(() => {
		Q();
	}, [Q]), (0, import_react.useEffect)(() => {
		!t || !I || B.current === t || (B.current = t, S([t]));
	}, [
		t,
		S,
		I
	]), (0, import_react.useEffect)(() => {
		!t || !I || U.current === t || (U.current = t, G.current.add(l), q.current = Math.max(q.current, l + 1), trackContextualTourShown({
			tourId: t,
			source: u,
			wasFeaturePreviouslyInteracted: d
		}));
	}, [
		l,
		t,
		u,
		I,
		d
	]), (0, import_react.useEffect)(() => {
		!t || !I || (G.current.add(l), q.current = Math.max(q.current, l + 1));
	}, [
		l,
		t,
		I
	]), (0, import_react.useEffect)(() => {
		if (!t) return;
		let l = () => {
			Z(getContextualTourCleanupOutcome(t));
		};
		return window.addEventListener("beforeunload", l), () => {
			window.removeEventListener("beforeunload", l), l();
		};
	}, [t, Z]), (0, import_react.useEffect)(() => {
		if (!t || !I) return;
		let u = `${t}:${l}`;
		if (H.current === u) return;
		H.current = u;
		let d = document.activeElement;
		!V.current && d instanceof HTMLElement && !R.current?.contains(d) && (V.current = d);
		let f = window.setTimeout(() => {
			let t = R.current;
			((t ? getContextualTourFocusableElements(t)[0] : null) ?? t)?.focus({ preventScroll: !0 });
		}, 0);
		return () => window.clearTimeout(f);
	}, [
		l,
		t,
		I
	]), (0, import_react.useEffect)(() => {
		if (t) return;
		H.current = null;
		let l = V.current;
		V.current = null, l?.isConnected && l.focus({ preventScroll: !0 });
	}, [t]), !t || !I) return null;
	let $ = () => {
		Z("completed"), D(t);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextualTourOverlaySurface, {
		activeTourId: t,
		renderState: I,
		panelRef: R,
		panelHost: I.panelHost,
		onSkip: (t) => {
			Z("skipped"), E(t);
		},
		onBack: T,
		onNext: () => {
			I.isLastStep ? $() : w();
		},
		onStepAction: (l) => {
			performContextualTourStepAction({
				action: l,
				activeTabId: v,
				isLastStep: I.isLastStep,
				finishTour: $,
				advanceContextualTour: w,
				detachContextualTourSource: () => {
					u && k(t, u);
				},
				setSidebarOpen: A,
				openTaskPage: j,
				openModal: M,
				openClientHostedBrowserSettings: () => {
					N({
						pane: "browser",
						repoId: null,
						sectionId: BROWSER_CLIENT_HOSTED_REMOTE_SETTINGS_TARGET_ID
					}), P();
				},
				openWorkspaceComposer: openWorkspaceCreationComposerWithTourHandoff,
				dispatchTerminalPaneSplit: requestActiveTerminalPaneSplit,
				schedule: (t) => {
					window.setTimeout(t, 0);
				}
			});
		},
		onOverlayKeyDownCapture: handleContextualTourOverlayKeyDown
	});
}
export { ContextualTourOverlay };
