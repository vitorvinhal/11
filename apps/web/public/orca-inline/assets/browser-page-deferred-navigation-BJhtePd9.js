import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { Gv as callRuntimeRpc, t as useAppStore } from "./store-C9f8FDJV.js";
var Crosshair = createLucideIcon("crosshair", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "22",
		x2: "18",
		y1: "12",
		y2: "12",
		key: "l9bcsi"
	}],
	["line", {
		x1: "6",
		x2: "2",
		y1: "12",
		y2: "12",
		key: "13hhkx"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "6",
		y2: "2",
		key: "10w3f3"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "22",
		y2: "18",
		key: "15g9kq"
	}]
]), GitCompare = createLucideIcon("git-compare", [
	["circle", {
		cx: "18",
		cy: "18",
		r: "3",
		key: "1xkwt0"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M13 6h3a2 2 0 0 1 2 2v7",
		key: "1yeb86"
	}],
	["path", {
		d: "M11 18H8a2 2 0 0 1-2-2V9",
		key: "19pyzm"
	}]
]), OctagonX = createLucideIcon("octagon-x", [
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
		key: "2d38gg"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
function createWorktreeTabBucketProjection(h) {
	let W = null, G = null, K = /* @__PURE__ */ new WeakMap();
	return { project(q) {
		if (q === W && G) return G;
		let J = Object.keys(q), Y = G === null || J.length !== Object.keys(G).length, X = {};
		for (let Z of J) {
			let J = q[Z] ?? [], Q = G?.[Z], $;
			W?.[Z] === J && Q ? $ = Q : (h.onInspectBucket?.(Z), $ = K.get(J) || (Q && Q.length === J.length && J.every((W, G) => {
				let K = Q[G];
				return K !== void 0 && h.isSameProjectedTab(K, W);
			}) ? Q : J.map(h.projectTab)), K.set(J, $)), X[Z] = $, $ !== Q && (Y = !0);
		}
		return W = q, !Y && G ? G : (G = X, X);
	} };
}
var import_react = /* @__PURE__ */ __toESM(require_react()), driverByBrowserPageId = /* @__PURE__ */ new Map();
const IDLE_BROWSER_DRIVER = { kind: "idle" };
var changeListeners$1 = /* @__PURE__ */ new Set(), snapshotListeners$2 = /* @__PURE__ */ new Set(), version$3 = 0;
function onBrowserDriverChange(h) {
	return changeListeners$1.add(h), () => changeListeners$1.delete(h);
}
function subscribe$3(h) {
	return snapshotListeners$2.add(h), () => {
		snapshotListeners$2.delete(h);
	};
}
function getSnapshot$3() {
	return version$3;
}
function getServerSnapshot$3() {
	return 0;
}
function notifyChange$2(h) {
	version$3 += 1;
	for (let W of changeListeners$1) W(h);
	for (let h of snapshotListeners$2) h();
}
function setDriverForBrowserPage(h, W) {
	W.kind === "idle" ? driverByBrowserPageId.delete(h) : driverByBrowserPageId.set(h, W), notifyChange$2({
		browserPageId: h,
		driver: W
	});
}
function getDriverForBrowserPage(h) {
	return driverByBrowserPageId.get(h) ?? IDLE_BROWSER_DRIVER;
}
function useBrowserDriverForPage(h) {
	return (0, import_react.useSyncExternalStore)(subscribe$3, getSnapshot$3, getServerSnapshot$3), h ? getDriverForBrowserPage(h) : IDLE_BROWSER_DRIVER;
}
function isBrowserPageMobileDriven(h) {
	return driverByBrowserPageId.get(h)?.kind === "mobile";
}
function hasMobileDriverForAnyBrowserPage(h) {
	return h.some((h) => !!(h && isBrowserPageMobileDriven(h)));
}
function getBrowserMobileDrivenPageIds(h) {
	let W = /* @__PURE__ */ new Set();
	for (let G of h) G && isBrowserPageMobileDriven(G) && W.add(G);
	return W;
}
function useBrowserMobileDriverForAny(h) {
	return (0, import_react.useSyncExternalStore)(subscribe$3, getSnapshot$3, getServerSnapshot$3), hasMobileDriverForAnyBrowserPage(h);
}
function useBrowserMobileDrivenPageIds(h) {
	return (0, import_react.useSyncExternalStore)(subscribe$3, getSnapshot$3, getServerSnapshot$3), getBrowserMobileDrivenPageIds(h);
}
function hydrateBrowserDrivers(h) {
	let W = new Set(driverByBrowserPageId.keys());
	driverByBrowserPageId.clear();
	for (let { browserPageId: G, driver: K } of h) W.add(G), K.kind !== "idle" && driverByBrowserPageId.set(G, K);
	for (let h of W) notifyChange$2({
		browserPageId: h,
		driver: getDriverForBrowserPage(h)
	});
}
var remotelyViewedPageIds = /* @__PURE__ */ new Set(), changeListeners = /* @__PURE__ */ new Set(), snapshotListeners$1 = /* @__PURE__ */ new Set(), version$2 = 0;
function onBrowserRemoteViewerChange(h) {
	return changeListeners.add(h), () => changeListeners.delete(h);
}
function subscribe$2(h) {
	return snapshotListeners$1.add(h), () => {
		snapshotListeners$1.delete(h);
	};
}
function getSnapshot$2() {
	return version$2;
}
function getServerSnapshot$2() {
	return 0;
}
function notifyChange$1(h) {
	version$2 += 1;
	for (let W of changeListeners) W(h);
	for (let h of snapshotListeners$1) h();
}
function setRemoteViewersForBrowserPage(h, W) {
	W ? remotelyViewedPageIds.add(h) : remotelyViewedPageIds.delete(h), notifyChange$1(h);
}
function isBrowserPageRemotelyViewed(h) {
	return remotelyViewedPageIds.has(h);
}
function hasRemoteViewerForAnyBrowserPage(h) {
	return h.some((h) => !!(h && isBrowserPageRemotelyViewed(h)));
}
function useBrowserRemoteViewerForAny(h) {
	return (0, import_react.useSyncExternalStore)(subscribe$2, getSnapshot$2, getServerSnapshot$2), hasRemoteViewerForAnyBrowserPage(h);
}
function getBrowserRemotelyViewedPageIds(h) {
	let W = /* @__PURE__ */ new Set();
	for (let G of h) G && isBrowserPageRemotelyViewed(G) && W.add(G);
	return W;
}
function useBrowserRemotelyViewedPageIds(h) {
	return (0, import_react.useSyncExternalStore)(subscribe$2, getSnapshot$2, getServerSnapshot$2), getBrowserRemotelyViewedPageIds(h);
}
function hydrateBrowserRemoteViewerPages(h) {
	let W = new Set(remotelyViewedPageIds);
	remotelyViewedPageIds.clear();
	for (let G of h) W.add(G), remotelyViewedPageIds.add(G);
	for (let h of W) notifyChange$1(h);
}
var leaseCountsByPageId = /* @__PURE__ */ new Map(), pageIdByToken = /* @__PURE__ */ new Map(), listeners = /* @__PURE__ */ new Set(), version$1 = 0, nextLeaseId = 0, AUTOMATION_VISIBILITY_PAINT_TIMEOUT_MS = 2e3;
function emitChange() {
	version$1 += 1;
	for (let h of listeners) h();
}
function subscribe$1(h) {
	return listeners.add(h), () => {
		listeners.delete(h);
	};
}
function onBrowserAutomationVisibilityChange(h) {
	return subscribe$1(h);
}
function getSnapshot$1() {
	return version$1;
}
function getServerSnapshot$1() {
	return 0;
}
function nextAnimationFrame() {
	return typeof window > "u" || typeof window.requestAnimationFrame != "function" ? Promise.resolve() : new Promise((h) => window.requestAnimationFrame(() => h()));
}
async function waitForAutomationVisiblePaint() {
	let h = null, W = (async () => (await nextAnimationFrame(), await nextAnimationFrame(), !0))(), G = new Promise((W) => {
		h = setTimeout(() => W(!1), AUTOMATION_VISIBILITY_PAINT_TIMEOUT_MS);
	});
	try {
		return await Promise.race([W, G]);
	} finally {
		h !== null && clearTimeout(h);
	}
}
function isBrowserAutomationVisible(h) {
	return (leaseCountsByPageId.get(h) ?? 0) > 0;
}
function useBrowserAutomationVisibilityForAny(h) {
	return (0, import_react.useSyncExternalStore)(subscribe$1, getSnapshot$1, getServerSnapshot$1), h.some((h) => !!(h && isBrowserAutomationVisible(h)));
}
function getBrowserAutomationVisiblePageIds(h) {
	let W = /* @__PURE__ */ new Set();
	for (let G of h) isBrowserAutomationVisible(G) && W.add(G);
	return W;
}
function useBrowserAutomationVisiblePageIds(h) {
	return (0, import_react.useSyncExternalStore)(subscribe$1, getSnapshot$1, getServerSnapshot$1), getBrowserAutomationVisiblePageIds(h);
}
function acquireBrowserAutomationVisibility(h) {
	let W = `browser-automation-${Date.now()}-${++nextLeaseId}`;
	return pageIdByToken.set(W, h), leaseCountsByPageId.set(h, (leaseCountsByPageId.get(h) ?? 0) + 1), emitChange(), W;
}
function releaseBrowserAutomationVisibility(h) {
	let W = pageIdByToken.get(h);
	if (!W) return !1;
	pageIdByToken.delete(h);
	let G = (leaseCountsByPageId.get(W) ?? 1) - 1;
	return G > 0 ? leaseCountsByPageId.set(W, G) : leaseCountsByPageId.delete(W), emitChange(), !0;
}
async function acquireForMainProcess(h) {
	if (typeof h != "string" || h.length === 0) return null;
	let W = acquireBrowserAutomationVisibility(h);
	return await waitForAutomationVisiblePaint() ? W : (releaseBrowserAutomationVisibility(W), null);
}
function installBrowserAutomationVisibilityBridge() {
	typeof window > "u" || (window.__orcaBrowserAutomationVisibility = {
		acquire: acquireForMainProcess,
		release: releaseBrowserAutomationVisibility
	});
}
installBrowserAutomationVisibilityBridge();
function shouldShutdownSimulatorForPaneUnmountFromTabs(h, W) {
	let G = h.filter((h) => h.contentType === "simulator");
	return W && G.some((h) => h.id === W) ? !1 : G.length === 0;
}
var DEFAULT_SHUTDOWN_GRACE_MS = 1500, pendingShutdownTimersByWorktree = /* @__PURE__ */ new Map();
function getUnifiedTabsForWorktree(h) {
	return useAppStore.getState().unifiedTabsByWorktree[h] ?? [];
}
function shutdownManagedSimulator(h) {
	return callRuntimeRpc({ kind: "local" }, "emulator.shutdown", {
		worktree: h,
		managedOnly: !0
	});
}
async function shutdownManagedSimulatorIfNoPane(h, W, G = {}) {
	if (!shouldShutdownSimulatorForPaneUnmountFromTabs((G.getTabsForWorktree ?? getUnifiedTabsForWorktree)(h), W)) return !1;
	let K = G.shutdownManagedSimulator ?? shutdownManagedSimulator;
	return await Promise.resolve(K(h)).catch(() => {}), !0;
}
function cancelPendingSimulatorPaneShutdown(h) {
	let W = pendingShutdownTimersByWorktree.get(h);
	W && (clearTimeout(W), pendingShutdownTimersByWorktree.delete(h));
}
function scheduleSimulatorPaneManagedShutdown(h, W, G = {}) {
	let K = G.getTabsForWorktree ?? getUnifiedTabsForWorktree;
	if (!shouldShutdownSimulatorForPaneUnmountFromTabs(K(h), W)) return !1;
	cancelPendingSimulatorPaneShutdown(h);
	let q = G.delayMs ?? DEFAULT_SHUTDOWN_GRACE_MS, J = G.shutdownManagedSimulator ?? shutdownManagedSimulator, Y = setTimeout(() => {
		pendingShutdownTimersByWorktree.delete(h), shouldShutdownSimulatorForPaneUnmountFromTabs(K(h)) && shutdownManagedSimulatorIfNoPane(h, void 0, {
			getTabsForWorktree: K,
			shutdownManagedSimulator: J
		});
	}, q);
	return pendingShutdownTimersByWorktree.set(h, Y), !0;
}
const EMULATOR_MANUAL_LAUNCH_STARTED_EVENT = "orca:emulator-launch-started", EMULATOR_MANUAL_LAUNCH_FAILED_EVENT = "orca:emulator-launch-failed";
var manualLaunchesByWorktree = /* @__PURE__ */ new Set(), PRELAUNCHED_SIMULATOR_SESSION_TTL_MS = 3e4, PRELAUNCHED_SIMULATOR_SESSION_MAX = 16, prelaunchedSessionsByWorktree = /* @__PURE__ */ new Map();
function prunePrelaunchedSimulatorSessions(h = performance.now()) {
	for (let [W, G] of prelaunchedSessionsByWorktree) h - G.rememberedAt >= PRELAUNCHED_SIMULATOR_SESSION_TTL_MS && prelaunchedSessionsByWorktree.delete(W);
	for (; prelaunchedSessionsByWorktree.size > PRELAUNCHED_SIMULATOR_SESSION_MAX;) {
		let h = prelaunchedSessionsByWorktree.keys().next().value;
		if (h === void 0) return;
		prelaunchedSessionsByWorktree.delete(h);
	}
}
function beginManualSimulatorLaunch(h) {
	manualLaunchesByWorktree.add(h);
}
function finishManualSimulatorLaunch(h) {
	manualLaunchesByWorktree.delete(h);
}
function isManualSimulatorLaunchPending(h) {
	return manualLaunchesByWorktree.has(h);
}
function rememberPrelaunchedSimulatorSession(h, W) {
	if (!W?.streamUrl && !W?.wsUrl) return;
	let G = performance.now();
	prelaunchedSessionsByWorktree.delete(h), prelaunchedSessionsByWorktree.set(h, {
		info: W,
		rememberedAt: G
	}), prunePrelaunchedSimulatorSessions(G);
}
function consumePrelaunchedSimulatorSession(h) {
	prunePrelaunchedSimulatorSessions();
	let W = prelaunchedSessionsByWorktree.get(h)?.info ?? null;
	return prelaunchedSessionsByWorktree.delete(h), W;
}
function dispatchManualSimulatorLaunchStarted(h) {
	dispatchManualSimulatorLaunchEvent(EMULATOR_MANUAL_LAUNCH_STARTED_EVENT, { worktreeId: h });
}
function dispatchManualSimulatorLaunchFailed(h, W) {
	dispatchManualSimulatorLaunchEvent(EMULATOR_MANUAL_LAUNCH_FAILED_EVENT, {
		worktreeId: h,
		message: W
	});
}
function dispatchManualSimulatorLaunchEvent(h, W) {
	typeof window > "u" || window.setTimeout(() => window.dispatchEvent(new CustomEvent(h, { detail: W })), 0);
}
var EMPTY_ROWS = [], rowsByWorktreeId = /* @__PURE__ */ new Map(), selection = null, snapshotListeners = /* @__PURE__ */ new Set(), version = 0;
function subscribe(h) {
	return snapshotListeners.add(h), () => {
		snapshotListeners.delete(h);
	};
}
function getSnapshot() {
	return version;
}
function getServerSnapshot() {
	return 0;
}
function getNoActiveRowServerSnapshot() {
	return null;
}
function notifyChange() {
	version += 1;
	for (let h of snapshotListeners) h();
}
function dropSelectionForMissingRow() {
	selection && ((rowsByWorktreeId.get(selection.worktreeId) ?? EMPTY_ROWS).some((h) => h.browserPageId === selection?.browserPageId) || (selection = null));
}
function applyClientHostedBrowserRows(h) {
	h.rows.length === 0 ? rowsByWorktreeId.delete(h.worktreeId) : rowsByWorktreeId.set(h.worktreeId, h.rows), dropSelectionForMissingRow(), notifyChange();
}
function hydrateClientHostedBrowserRows(h) {
	rowsByWorktreeId.clear();
	for (let W of h) W.rows.length > 0 && rowsByWorktreeId.set(W.worktreeId, W.rows);
	dropSelectionForMissingRow(), notifyChange();
}
function getClientHostedBrowserRows(h) {
	return rowsByWorktreeId.get(h) ?? EMPTY_ROWS;
}
function useClientHostedBrowserRows(h) {
	return (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot), getClientHostedBrowserRows(h);
}
function selectClientHostedBrowserRow(h) {
	selection = h, notifyChange();
}
function clearClientHostedBrowserRowSelection() {
	selection && (selection = null, notifyChange());
}
function useClientHostedBrowserRowSelection() {
	return (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot), selection;
}
function isClientHostedBrowserRowSelectionLive(h, W) {
	if (!h) return !1;
	let G = W.find((W) => W.id === h.groupId);
	return G !== void 0 && (G.activeTabId ?? null) === h.groupActiveTabIdAtSelection;
}
function resolveActiveClientHostedBrowserRowId(h, W) {
	return !h || h.worktreeId !== W.worktreeId ? null : isClientHostedBrowserRowSelectionLive(h, [{
		id: W.groupId,
		activeTabId: W.groupActiveTabId
	}]) ? h.browserPageId : null;
}
function useActiveClientHostedBrowserRowId(h) {
	let { worktreeId: W, groupId: G, groupActiveTabId: K } = h;
	return (0, import_react.useSyncExternalStore)(subscribe, (0, import_react.useCallback)(() => resolveActiveClientHostedBrowserRowId(selection, {
		worktreeId: W,
		groupId: G,
		groupActiveTabId: K
	}), [
		K,
		G,
		W
	]), getNoActiveRowServerSnapshot);
}
var editSessionsByPageId = /* @__PURE__ */ new Map();
function saveBrowserAddressBarEditSession(h, W) {
	editSessionsByPageId.set(h, W), queueMicrotask(() => {
		editSessionsByPageId.get(h) === W && editSessionsByPageId.delete(h);
	});
}
function consumeBrowserAddressBarEditSession(h) {
	let W = editSessionsByPageId.get(h) ?? null;
	return editSessionsByPageId.delete(h), W;
}
function clearBrowserAddressBarEditSession(h) {
	editSessionsByPageId.delete(h);
}
var deferredNavigationsByPageId = /* @__PURE__ */ new Map(), DEFERRED_NAVIGATION_TTL_MS = 6e4;
function purgeExpiredDeferredNavigations(h) {
	for (let [W, G] of deferredNavigationsByPageId) h - G.at >= DEFERRED_NAVIGATION_TTL_MS && deferredNavigationsByPageId.delete(W);
}
function deferBrowserPageNavigation(h, W) {
	let G = Date.now();
	purgeExpiredDeferredNavigations(G), deferredNavigationsByPageId.set(h, {
		url: W,
		at: G
	});
}
function consumeBrowserPageDeferredNavigation(h) {
	purgeExpiredDeferredNavigations(Date.now());
	let W = deferredNavigationsByPageId.get(h);
	return W ? (deferredNavigationsByPageId.delete(h), W.url) : null;
}
function clearBrowserPageDeferredNavigation(h) {
	deferredNavigationsByPageId.delete(h);
}
export { releaseBrowserAutomationVisibility as A, hydrateBrowserDrivers as B, rememberPrelaunchedSimulatorSession as C, acquireBrowserAutomationVisibility as D, shutdownManagedSimulatorIfNoPane as E, onBrowserRemoteViewerChange as F, useBrowserMobileDrivenPageIds as G, onBrowserDriverChange as H, setRemoteViewersForBrowserPage as I, OctagonX as J, useBrowserMobileDriverForAny as K, useBrowserRemoteViewerForAny as L, useBrowserAutomationVisiblePageIds as M, hydrateBrowserRemoteViewerPages as N, isBrowserAutomationVisible as O, isBrowserPageRemotelyViewed as P, useBrowserRemotelyViewedPageIds as R, isManualSimulatorLaunchPending as S, scheduleSimulatorPaneManagedShutdown as T, setDriverForBrowserPage as U, isBrowserPageMobileDriven as V, useBrowserDriverForPage as W, Crosshair as X, GitCompare as Y, beginManualSimulatorLaunch as _, consumeBrowserAddressBarEditSession as a, dispatchManualSimulatorLaunchStarted as b, clearClientHostedBrowserRowSelection as c, selectClientHostedBrowserRow as d, useActiveClientHostedBrowserRowId as f, EMULATOR_MANUAL_LAUNCH_STARTED_EVENT as g, EMULATOR_MANUAL_LAUNCH_FAILED_EVENT as h, clearBrowserAddressBarEditSession as i, useBrowserAutomationVisibilityForAny as j, onBrowserAutomationVisibilityChange as k, hydrateClientHostedBrowserRows as l, useClientHostedBrowserRows as m, consumeBrowserPageDeferredNavigation as n, saveBrowserAddressBarEditSession as o, useClientHostedBrowserRowSelection as p, createWorktreeTabBucketProjection as q, deferBrowserPageNavigation as r, applyClientHostedBrowserRows as s, clearBrowserPageDeferredNavigation as t, isClientHostedBrowserRowSelectionLive as u, consumePrelaunchedSimulatorSession as v, cancelPendingSimulatorPaneShutdown as w, finishManualSimulatorLaunch as x, dispatchManualSimulatorLaunchFailed as y, IDLE_BROWSER_DRIVER as z };
