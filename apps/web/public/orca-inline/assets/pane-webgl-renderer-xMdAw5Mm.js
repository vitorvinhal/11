import { a as readKeyedTerminalScrollIntentBinding, c as writeKeyedTerminalScrollIntentBinding, i as readKeyedTerminalScrollIntent, r as requestFullViewportPresent, s as writeKeyedTerminalScrollIntent, t as forceFullViewportPresent } from "./terminal-render-pause-release-CD_QQI7L.js";
import { c as getLivePaneCensus, g as recordTerminalWebglDiagnostic, n as flushDeferredPaneMetricOptions, r as hasDeferredPaneMetricOptions, v as recordRendererCrashBreadcrumb } from "./pane-metric-options-deferral-Bz211kas.js";
var overridesByPtyId = /* @__PURE__ */ new Map(), ptyIdByFitBindingKey = /* @__PURE__ */ new Map();
function fitBindingKey(p, H) {
	return `${p}:${H}`;
}
var changeListeners = /* @__PURE__ */ new Set();
function onOverrideChange(p) {
	return changeListeners.add(p), () => changeListeners.delete(p);
}
function notifyChange(p) {
	for (let H of changeListeners) H(p);
}
function setFitOverride(p, H, U, W) {
	let G = overridesByPtyId.get(p) ?? null;
	H === "mobile-fit" || H === "remote-desktop-fit" ? overridesByPtyId.set(p, {
		mode: H,
		cols: U,
		rows: W
	}) : overridesByPtyId.delete(p), notifyChange({
		ptyId: p,
		mode: H,
		cols: U,
		rows: W,
		priorCols: G?.cols ?? null,
		priorRows: G?.rows ?? null
	});
}
function replaceFitOverridePtyId(p, H) {
	let U = overridesByPtyId.get(p);
	U && (overridesByPtyId.has(H) || setFitOverride(H, U.mode, U.cols, U.rows), setFitOverride(p, "desktop-fit", U.cols, U.rows));
}
function getFitOverrideForPty(p) {
	return overridesByPtyId.get(p) ?? null;
}
function bindPanePtyId(p, H, U) {
	if (U) {
		let W = fitBindingKey(U, p);
		H ? ptyIdByFitBindingKey.set(W, H) : ptyIdByFitBindingKey.delete(W);
	}
}
function hydrateOverrides(p) {
	let H = new Map(overridesByPtyId);
	overridesByPtyId.clear();
	for (let H of p) overridesByPtyId.set(H.ptyId, {
		mode: H.mode,
		cols: H.cols,
		rows: H.rows
	});
	for (let [p, U] of overridesByPtyId) {
		let W = H.get(p) ?? null;
		notifyChange({
			ptyId: p,
			mode: U.mode,
			cols: U.cols,
			rows: U.rows,
			priorCols: W?.cols ?? null,
			priorRows: W?.rows ?? null
		}), H.delete(p);
	}
	for (let [p, U] of H) notifyChange({
		ptyId: p,
		mode: "desktop-fit",
		cols: 0,
		rows: 0,
		priorCols: U.cols,
		priorRows: U.rows
	});
}
function getMobileFitOverridePtyIds() {
	return [...overridesByPtyId].flatMap(([p, H]) => H.mode === "mobile-fit" ? [p] : []);
}
var cachedDecision = null, LINUX_SOFTWARE_RENDERER_PATTERN = /\b(swiftshader|llvmpipe|softpipe|software rasterizer|software adapter|basic render|virgl|svga3d)\b/i;
function resetTerminalWebglAutoDecision() {
	cachedDecision = null;
}
function isLinuxRendererHost(p = typeof navigator > "u" ? "" : navigator.platform, H = typeof navigator > "u" ? "" : navigator.userAgent) {
	return H.startsWith("Node.js/") ? !1 : p.includes("Linux") || H.includes("Linux");
}
function readRendererDisplayServer() {
	try {
		return window.api.platform.get().displayServer;
	} catch {
		return null;
	}
}
function readWebglRendererInfo() {
	if (typeof document > "u") return {
		hasWebgl2: !1,
		hasRendererInfo: !1,
		renderer: null,
		vendor: null
	};
	try {
		let p = document.createElement("canvas").getContext("webgl2");
		if (!p) return {
			hasWebgl2: !1,
			hasRendererInfo: !1,
			renderer: null,
			vendor: null
		};
		let H = p.getExtension("WEBGL_debug_renderer_info");
		if (!H) return {
			hasWebgl2: !0,
			hasRendererInfo: !1,
			renderer: null,
			vendor: null
		};
		let U = String(p.getParameter(H.UNMASKED_RENDERER_WEBGL) ?? ""), W = String(p.getParameter(H.UNMASKED_VENDOR_WEBGL) ?? "");
		return {
			hasWebgl2: !0,
			hasRendererInfo: U.length > 0 || W.length > 0,
			renderer: U || null,
			vendor: W || null
		};
	} catch {
		return {
			hasWebgl2: !1,
			hasRendererInfo: !1,
			renderer: null,
			vendor: null
		};
	}
}
function getTerminalWebglAutoDecision() {
	if (cachedDecision) return cachedDecision;
	if (!isLinuxRendererHost()) return cachedDecision = {
		allowWebgl: !0,
		reason: "non-linux",
		renderer: null,
		vendor: null
	}, cachedDecision;
	if (readRendererDisplayServer() === "wayland") return cachedDecision = {
		allowWebgl: !1,
		reason: "linux-wayland",
		renderer: null,
		vendor: null
	}, cachedDecision;
	let p = readWebglRendererInfo();
	if (!p.hasWebgl2) return cachedDecision = {
		allowWebgl: !1,
		reason: "linux-webgl2-unavailable",
		renderer: p.renderer,
		vendor: p.vendor
	}, cachedDecision;
	if (!p.hasRendererInfo) return cachedDecision = {
		allowWebgl: !1,
		reason: "linux-renderer-unavailable",
		renderer: p.renderer,
		vendor: p.vendor
	}, cachedDecision;
	let H = `${p.vendor ?? ""} ${p.renderer ?? ""}`;
	return LINUX_SOFTWARE_RENDERER_PATTERN.test(H) ? (cachedDecision = {
		allowWebgl: !1,
		reason: "linux-software-renderer",
		renderer: p.renderer,
		vendor: p.vendor
	}, cachedDecision) : (cachedDecision = {
		allowWebgl: !0,
		reason: "linux-hardware-renderer",
		renderer: p.renderer,
		vendor: p.vendor
	}, cachedDecision);
}
function isManagedPaneDisplayNone(p) {
	let H = p.xtermContainer ?? p.container, U = H?.ownerDocument?.defaultView;
	if (!H || !U) return !1;
	for (let p = H; p; p = p.parentElement) if (U.getComputedStyle(p).display === "none") return !0;
	return !1;
}
var MAX_RETRY_FRAMES = 40, LAYOUT_SETTLE_MS = 16, retryByPane = /* @__PURE__ */ new WeakMap();
function scheduleRetryTick(p) {
	if (typeof requestAnimationFrame == "function") {
		let H = !1, U = !1, W = null, G = () => {
			H || U || (U = !0, typeof cancelAnimationFrame == "function" && cancelAnimationFrame(K), p());
		}, K = requestAnimationFrame(() => {
			!H && !U && (W !== null && clearTimeout(W), W = setTimeout(G, LAYOUT_SETTLE_MS));
		});
		return W = setTimeout(G, LAYOUT_SETTLE_MS * 2), { cancel: () => {
			H = !0, typeof cancelAnimationFrame == "function" && cancelAnimationFrame(K), W !== null && clearTimeout(W);
		} };
	}
	let H = setTimeout(p, LAYOUT_SETTLE_MS);
	return { cancel: () => clearTimeout(H) };
}
function clearPaneFitContinuationRetry(p) {
	let H = retryByPane.get(p);
	H && (retryByPane.delete(p), H.schedule?.cancel(), H.schedule = null);
}
function armPaneFitContinuationRetry(p, H) {
	let U = retryByPane.get(p) ?? {
		attempts: 0,
		schedule: null,
		...H
	};
	U.retry = H.retry, U.onExhausted = H.onExhausted, retryByPane.set(p, U), !U.schedule && (U.schedule = scheduleRetryTick(() => {
		if (U.schedule = null, U.retry()) {
			clearPaneFitContinuationRetry(p);
			return;
		}
		if (U.attempts += 1, U.attempts >= MAX_RETRY_FRAMES) {
			let H = getLivePaneCensus();
			recordRendererCrashBreadcrumb("terminal_safe_fit_retry_exhausted", {
				paneId: p.id,
				leafId: p.leafId,
				livePanes: H.panes,
				livePaneManagers: H.managers
			}), clearPaneFitContinuationRetry(p), U.onExhausted();
			return;
		}
		armPaneFitContinuationRetry(p, U);
	}));
}
var followOutputWaitersByTerminal = /* @__PURE__ */ new WeakMap();
function addTerminalFollowOutputWaiter(p, H) {
	let U = followOutputWaitersByTerminal.get(p) ?? /* @__PURE__ */ new Set();
	return followOutputWaitersByTerminal.set(p, U), U.add(H), () => {
		U.delete(H);
	};
}
function notifyTerminalFollowOutputWaiters(p) {
	let H = followOutputWaitersByTerminal.get(p);
	if (H?.size) {
		followOutputWaitersByTerminal.delete(p);
		for (let p of H) p();
	}
}
var terminalScrollIntentRebuilds = /* @__PURE__ */ new WeakMap(), terminalScrollIntentRebuildCompletions = /* @__PURE__ */ new WeakMap(), deferredTerminalGeometryMutations = /* @__PURE__ */ new WeakMap();
function notifyRebuildCompletions(p, H) {
	for (let U of p ?? []) try {
		U(H);
	} catch (p) {
		console.error("[terminal] scroll-intent rebuild completion failed", p);
	}
}
function beginTerminalScrollIntentBufferRebuild(p) {
	terminalScrollIntentRebuilds.set(p, (terminalScrollIntentRebuilds.get(p) ?? 0) + 1);
}
function endTerminalScrollIntentBufferRebuild(p) {
	let H = terminalScrollIntentRebuilds.get(p) ?? 0;
	if (H <= 1) {
		terminalScrollIntentRebuilds.delete(p);
		let H = terminalScrollIntentRebuildCompletions.get(p);
		terminalScrollIntentRebuildCompletions.delete(p), notifyRebuildCompletions(H, !0);
		return;
	}
	terminalScrollIntentRebuilds.set(p, H - 1);
}
function isTerminalScrollIntentRebuildInFlight(p) {
	return (terminalScrollIntentRebuilds.get(p) ?? 0) > 0;
}
function onTerminalScrollIntentBufferRebuildComplete(p, H) {
	if (!isTerminalScrollIntentRebuildInFlight(p)) return H(!0), () => {};
	let U = terminalScrollIntentRebuildCompletions.get(p);
	return U || (U = /* @__PURE__ */ new Set(), terminalScrollIntentRebuildCompletions.set(p, U)), U.add(H), () => {
		U?.delete(H), U?.size === 0 && terminalScrollIntentRebuildCompletions.delete(p);
	};
}
function deferTerminalGeometryMutationDuringRebuild(p, H, U) {
	if (!isTerminalScrollIntentRebuildInFlight(p)) return !1;
	let W = deferredTerminalGeometryMutations.get(p);
	if (W) return W.mutations.set(H, U), !0;
	let G = new Map([[H, U]]), K = { mutations: G };
	return deferredTerminalGeometryMutations.set(p, K), onTerminalScrollIntentBufferRebuildComplete(p, (H) => {
		if (deferredTerminalGeometryMutations.get(p) === K) {
			if (!H) {
				deferredTerminalGeometryMutations.delete(p);
				return;
			}
			queueMicrotask(() => {
				if (deferredTerminalGeometryMutations.get(p) === K) {
					deferredTerminalGeometryMutations.delete(p);
					for (let [H, U] of G) deferTerminalGeometryMutationDuringRebuild(p, H, U) || U();
				}
			});
		}
	}), !0;
}
function cancelTerminalScrollIntentBufferRebuildCompletions(p) {
	let H = terminalScrollIntentRebuildCompletions.get(p);
	terminalScrollIntentRebuildCompletions.delete(p), notifyRebuildCompletions(H, !1), deferredTerminalGeometryMutations.delete(p);
}
function readTerminalScrollBufferSnapshot(p) {
	let H = p.buffer?.active, U = H?.viewportY, W = H?.baseY;
	return typeof U != "number" || typeof W != "number" ? null : {
		bufferType: H?.type === "alternate" ? "alternate" : "normal",
		viewportY: U,
		baseY: W
	};
}
function isTerminalViewportAtBottom(p, H) {
	return p >= H;
}
function clampTerminalViewportY(p, H) {
	return Math.max(0, Math.min(p, H));
}
function safeTerminalScrollCall(p) {
	try {
		return p(), !0;
	} catch (p) {
		if (p instanceof TypeError && /dimensions/.test(p.message)) return !1;
		throw p;
	}
}
var terminalScrollIntentByTerminal = /* @__PURE__ */ new WeakMap(), terminalScrollIntentKeyByTerminal = /* @__PURE__ */ new WeakMap(), terminalScrollIntentKeyBindingByTerminal = /* @__PURE__ */ new WeakMap(), nextTerminalScrollIntentRevision = 1, nextTerminalScrollIntentKeyBinding = 1;
function onTerminalScrollIntentFollowOutput(p, H) {
	return getTerminalScrollIntentKind(p) === "followOutput" ? (H(), () => {}) : addTerminalFollowOutputWaiter(p, H);
}
function writeIntent(p, H) {
	let U = readTerminalScrollBufferSnapshot(p);
	return U ? writeIntentSnapshot(p, H, U) : null;
}
function writeIntentSnapshot(p, H, U) {
	let W = {
		kind: H,
		...U,
		revision: nextTerminalScrollIntentRevision
	};
	nextTerminalScrollIntentRevision += 1, terminalScrollIntentByTerminal.set(p, W);
	let K = terminalScrollIntentKeyByTerminal.get(p);
	return K && writeKeyedTerminalScrollIntent(K, W), H === "followOutput" && notifyTerminalFollowOutputWaiters(p), W;
}
function readStoredIntent(p) {
	let H = terminalScrollIntentByTerminal.get(p);
	if (H) return H;
	let W = terminalScrollIntentKeyByTerminal.get(p);
	return W ? readKeyedTerminalScrollIntent(W) : void 0;
}
function bindTerminalScrollIntentKey(p, W) {
	if (!W) return terminalScrollIntentByTerminal.get(p);
	terminalScrollIntentKeyByTerminal.set(p, W);
	let G = nextTerminalScrollIntentKeyBinding;
	nextTerminalScrollIntentKeyBinding += 1, terminalScrollIntentKeyBindingByTerminal.set(p, G), writeKeyedTerminalScrollIntentBinding(W, G);
	let K = readKeyedTerminalScrollIntent(W);
	return K && terminalScrollIntentByTerminal.set(p, K), K;
}
function isTerminalScrollIntentKeyBindingCurrent(H) {
	let U = terminalScrollIntentKeyByTerminal.get(H);
	return U ? terminalScrollIntentKeyBindingByTerminal.get(H) === readKeyedTerminalScrollIntentBinding(U) : !0;
}
function markTerminalFollowOutput(p) {
	writeIntent(p, "followOutput");
}
function markTerminalPinnedViewport(p) {
	writeIntent(p, "pinnedViewport");
}
function syncTerminalScrollIntentFromViewport(p, H = {}) {
	if (isTerminalScrollIntentRebuildInFlight(p)) return;
	let U = readTerminalScrollBufferSnapshot(p);
	if (!U) return;
	let W = readStoredIntent(p);
	if (!H.allowBufferShrink && W?.kind === "pinnedViewport" && U.baseY < W.baseY) {
		terminalScrollIntentByTerminal.set(p, W);
		return;
	}
	if (H.preservePinnedAtBottom && W?.kind === "pinnedViewport" && isTerminalViewportAtBottom(U.viewportY, U.baseY)) return;
	let G = isTerminalViewportAtBottom(U.viewportY, U.baseY) ? "followOutput" : "pinnedViewport";
	if (W?.kind === G && W.bufferType === U.bufferType && (G === "followOutput" || W.viewportY === U.viewportY)) {
		G === "pinnedViewport" && W.baseY !== U.baseY && Object.assign(W, U);
		return;
	}
	writeIntent(p, G);
}
function getTerminalScrollIntentKind(p) {
	let H = readStoredIntent(p);
	if (H) return H.kind;
	let U = readTerminalScrollBufferSnapshot(p);
	return U ? isTerminalViewportAtBottom(U.viewportY, U.baseY) ? "followOutput" : "pinnedViewport" : "followOutput";
}
function captureTerminalStructuralScrollIntent(p) {
	if (isTerminalScrollIntentRebuildInFlight(p)) return null;
	let H = readTerminalScrollBufferSnapshot(p);
	if (!H) return null;
	let U = readStoredIntent(p), W = U?.kind ?? (isTerminalViewportAtBottom(H.viewportY, H.baseY) ? "followOutput" : "pinnedViewport");
	return W === "pinnedViewport" && isTerminalViewportAtBottom(H.viewportY, H.baseY) && (!U || H.baseY >= U.baseY) && (W = "followOutput"), {
		...U?.kind === "pinnedViewport" && H.baseY < U.baseY ? U : H,
		kind: W,
		revision: U?.revision ?? 0
	};
}
function isTerminalStructuralScrollIntentCurrent(p, H) {
	return H ? (readStoredIntent(p)?.revision ?? 0) === H.revision : !1;
}
function restoreTerminalStructuralScrollIntent(p, H, U = {}) {
	if (!H || !isTerminalStructuralScrollIntentCurrent(p, H) || isTerminalScrollIntentRebuildInFlight(p)) return;
	let W = readTerminalScrollBufferSnapshot(p);
	if (!W || W.bufferType !== H.bufferType) return;
	if (H.kind === "followOutput") {
		safeTerminalScrollCall(() => p.scrollToBottom?.()) && writeIntent(p, "followOutput");
		return;
	}
	let G = clampTerminalViewportY(U.restoreBy === "bottomOffset" ? W.baseY - Math.max(0, H.baseY - H.viewportY) : H.viewportY, W.baseY);
	if (W.viewportY !== G && !safeTerminalScrollCall(() => p.scrollToLine?.(G))) {
		writeIntentSnapshot(p, "pinnedViewport", {
			bufferType: W.bufferType,
			viewportY: G,
			baseY: W.baseY
		});
		return;
	}
	let K = readStoredIntent(p);
	K?.kind === "pinnedViewport" && W.baseY < K.baseY || writeIntent(p, "pinnedViewport");
}
function enforceTerminalCurrentScrollIntent(p) {
	if (isTerminalScrollIntentRebuildInFlight(p)) return;
	let H = readStoredIntent(p);
	if (!H) {
		restoreTerminalStructuralScrollIntent(p, captureTerminalStructuralScrollIntent(p));
		return;
	}
	let U = {
		kind: H.kind,
		bufferType: H.bufferType,
		viewportY: H.viewportY,
		baseY: H.baseY,
		revision: H.revision
	};
	U.kind === "pinnedViewport" && isTerminalViewportAtBottom(U.viewportY, U.baseY) && (U.kind = "followOutput");
	let W = readTerminalScrollBufferSnapshot(p);
	restoreTerminalStructuralScrollIntent(p, U, { restoreBy: U.kind === "pinnedViewport" && W && W.baseY < U.baseY ? "bottomOffset" : "viewportLine" });
}
function captureLogicalLineAnchor(p, H) {
	let U = p.buffer.active;
	if (typeof U.getLine != "function" || shouldKeepPhysicalResizeAnchor(p)) return;
	let W = createReflowLineReader(p), G = H;
	for (; G > 0 && W.isWrapped(G);) --G;
	let K = U.baseY + U.cursorY;
	if (p.options?.reflowCursorLine !== !0 && lineContainsLine(W, G, K)) return;
	let q = 0;
	for (let U = G; U < H; U += 1) q += readReflowedRowCellCount(p, W, U);
	return {
		cellOffset: q,
		lineY: G
	};
}
function shouldKeepPhysicalResizeAnchor(p) {
	let H = p.options?.windowsPty;
	return H?.buildNumber ? H.backend !== "conpty" || H.buildNumber < 21376 : !1;
}
function lineContainsLine(p, H, U) {
	if (U < H) return !1;
	for (let W = H + 1; W <= U; W += 1) if (!p.isWrapped(W)) return !1;
	return !0;
}
function resolveLogicalCellOffsetLine(p, H, U) {
	let W = p.buffer.active, G = createReflowLineReader(p), K = H, q = U;
	for (; K < W.baseY && G.isWrapped(K + 1);) {
		let H = readReflowedRowCellCount(p, G, K);
		if (q < H) break;
		q -= H, K += 1;
	}
	return K;
}
function readReflowedRowCellCount(p, H, U) {
	let W = Math.max(p.cols, 1), G = H.getCellMetrics(U, W - 1), K = H.getCellMetrics(U + 1, 0);
	return G?.code === 0 && G.width === 1 && K?.width === 2 ? W - 1 : W;
}
function createReflowLineReader(p) {
	let H = p._core?._bufferService?.buffer?.lines;
	if (H) return {
		isWrapped: (p) => H.get(p)?.isWrapped ?? !1,
		getCellMetrics: (p, U) => {
			let W = H.get(p);
			if (!(!W || U < 0 || U >= W.length)) return {
				code: W.getCodePoint(U),
				width: W.getWidth(U)
			};
		}
	};
	let U = p.buffer.active;
	return {
		isWrapped: (p) => U.getLine(p)?.isWrapped ?? !1,
		getCellMetrics: (p, H) => {
			let W = U.getLine(p)?.getCell(H);
			return W ? {
				code: W.getCode(),
				width: W.getWidth()
			} : void 0;
		}
	};
}
function forceTerminalViewportScrollbarSync(p) {
	let H = p.buffer.active;
	H.viewportY >= H.baseY || (H.viewportY > 0 ? (safeScrollCall$1(() => p.scrollLines(-1)), safeScrollCall$1(() => p.scrollLines(1))) : H.viewportY < H.baseY && (safeScrollCall$1(() => p.scrollLines(1)), safeScrollCall$1(() => p.scrollLines(-1))));
}
function safeScrollCall$1(p) {
	try {
		p();
	} catch (p) {
		if (!(p instanceof TypeError) || !/dimensions/.test(p.message)) throw p;
	}
}
var terminalOutputEpochs = /* @__PURE__ */ new WeakMap(), deferredScrollRestores = /* @__PURE__ */ new WeakMap(), pendingFitScrollRestores = /* @__PURE__ */ new WeakMap(), FIT_SCROLL_RESTORE_MAX_FRAMES = 2;
function recordTerminalOutput(p) {
	terminalOutputEpochs.set(p, getTerminalOutputEpoch(p) + 1);
}
function getTerminalOutputEpoch(p) {
	return terminalOutputEpochs.get(p) ?? 0;
}
function cancelDeferredScrollRestore(p) {
	cancelPendingFitScrollRestore(p);
	let H = deferredScrollRestores.get(p);
	if (H) {
		if (H.cancelled = !0, typeof cancelAnimationFrame == "function") for (let p of H.rafIds) cancelAnimationFrame(p);
		for (let p of H.timeoutIds) clearTimeout(p);
		releaseScrollStateMarker(H.state), deferredScrollRestores.delete(p);
	}
}
function captureScrollState(p) {
	let H = p.buffer.active, U = H.viewportY, W = U >= H.baseY, G = !W && H.type === "normal" ? captureLogicalLineAnchor(p, U) : void 0, K = !W && H.type === "normal" ? p.registerMarker?.(U - (H.baseY + H.cursorY)) : void 0;
	return {
		bufferType: H.type,
		wasAtBottom: W,
		viewportY: U,
		baseY: H.baseY,
		firstVisibleLineMarker: K,
		firstVisibleLogicalLineMarker: G?.lineY === U ? K : G ? p.registerMarker?.(G.lineY - (H.baseY + H.cursorY)) : void 0,
		firstVisibleLogicalCellOffset: G?.cellOffset
	};
}
function restoreScrollState(p, H) {
	cancelDeferredScrollRestore(p);
	try {
		return restoreScrollStateNow(p, H) === "restored";
	} finally {
		releaseScrollStateMarker(H);
	}
}
function restoreScrollStateAfterFit(p, H, U) {
	if (cancelDeferredScrollRestore(p), !U.shouldRestore()) {
		releaseScrollStateMarker(H);
		return;
	}
	let W;
	try {
		W = restoreScrollStateNow(p, H);
	} catch (p) {
		throw releaseScrollStateMarker(H), p;
	}
	if (W !== "retry" || typeof requestAnimationFrame != "function") {
		releaseScrollStateMarker(H), W === "restored" && U.onRestored();
		return;
	}
	let G = {
		cancelled: !1,
		rafId: null,
		retryAfterFit: () => !1,
		shouldRestore: U.shouldRestore,
		state: H
	}, K = FIT_SCROLL_RESTORE_MAX_FRAMES, q = (W) => {
		G.cancelled || (G.cancelled = !0, pendingFitScrollRestores.delete(p), releaseScrollStateMarker(H), W && U.shouldRestore() && U.onRestored());
	}, J = () => {
		if (G.rafId = null, G.cancelled || !U.shouldRestore()) return q(!1), !1;
		let W;
		try {
			W = restoreScrollStateNow(p, H);
		} catch (p) {
			throw q(!1), p;
		}
		return W === "restored" ? (q(!0), !0) : (--K, W === "retry" ? (K <= 0 || (G.rafId = requestAnimationFrame(J)), !0) : (q(!1), !1));
	};
	G.retryAfterFit = () => (G.rafId !== null && typeof cancelAnimationFrame == "function" && (cancelAnimationFrame(G.rafId), G.rafId = null), K = FIT_SCROLL_RESTORE_MAX_FRAMES + 1, J()), pendingFitScrollRestores.set(p, G), G.rafId = requestAnimationFrame(J);
}
function resumePendingFitScrollRestoreAfterFit(p) {
	let H = pendingFitScrollRestores.get(p);
	return H ? H.shouldRestore() ? H.retryAfterFit() : (cancelPendingFitScrollRestore(p), !1) : !1;
}
function restoreScrollStateNow(p, H) {
	if (!p.element) return "retry";
	let U = p.buffer.active;
	if (H.bufferType === "alternate" || U.type !== H.bufferType) return "skipped";
	if (H.wasAtBottom) return safeScrollCall(() => p.scrollToBottom()) ? (forceTerminalViewportScrollbarSync(p), "restored") : "retry";
	let W = H.firstVisibleLogicalLineMarker && !H.firstVisibleLogicalLineMarker.isDisposed ? H.firstVisibleLogicalLineMarker.line : -1, G = H.firstVisibleLineMarker && !H.firstVisibleLineMarker.isDisposed ? H.firstVisibleLineMarker.line : -1, K = W >= 0 && H.firstVisibleLogicalCellOffset !== void 0 ? resolveLogicalCellOffsetLine(p, W, H.firstVisibleLogicalCellOffset) : null, q = Math.min(K ?? (G >= 0 ? G : H.viewportY), U.baseY);
	return H.viewportY = q, safeScrollCall(() => p.scrollToLine(q)) ? (forceTerminalViewportScrollbarSync(p), "restored") : "retry";
}
function safeScrollCall(p) {
	try {
		return p(), !0;
	} catch (p) {
		if (p instanceof TypeError && /dimensions/.test(p.message)) return !1;
		throw p;
	}
}
function releaseScrollStateMarker(p) {
	p.firstVisibleLineMarker?.dispose(), p.firstVisibleLogicalLineMarker !== p.firstVisibleLineMarker && p.firstVisibleLogicalLineMarker?.dispose(), p.firstVisibleLineMarker = p.firstVisibleLogicalLineMarker = void 0;
}
function cancelPendingFitScrollRestore(p) {
	let H = pendingFitScrollRestores.get(p);
	H && (H.cancelled = !0, H.rafId !== null && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(H.rafId), releaseScrollStateMarker(H.state), pendingFitScrollRestores.delete(p));
}
var MIN_PANE_FIT_WIDTH_PX = 48, MIN_PANE_FIT_HEIGHT_PX = 24, MIN_PANE_FIT_COLS = 8, MIN_PANE_FIT_ROWS = 4;
function getProposedPaneDimensions(p) {
	try {
		return p.fitAddon.proposeDimensions() ?? null;
	} catch {
		return null;
	}
}
function hasPaneFitPixelBox(p) {
	let H = p.container?.getBoundingClientRect;
	if (typeof H != "function") return !0;
	let U = H.call(p.container);
	return U.width >= MIN_PANE_FIT_WIDTH_PX && U.height >= MIN_PANE_FIT_HEIGHT_PX;
}
function canMeasurePaneForFit(p) {
	if (!hasPaneFitPixelBox(p)) return !1;
	let H = getProposedPaneDimensions(p);
	return H ? H.cols >= MIN_PANE_FIT_COLS && H.rows >= MIN_PANE_FIT_ROWS : !1;
}
function canApplyPaneMetricOptions(p) {
	return !isManagedPaneDisplayNone(p) && hasPaneFitPixelBox(p);
}
function flushDeferredPaneMetricOptionsIfMeasurable(p) {
	return !hasDeferredPaneMetricOptions(p) || !canApplyPaneMetricOptions(p) ? !1 : flushDeferredPaneMetricOptions(p);
}
var deferredByTerminal = /* @__PURE__ */ new WeakMap();
function deferFitContinuation(p, H, U) {
	let W = deferredByTerminal.get(p.terminal) ?? /* @__PURE__ */ new Map();
	W.set(H, U), deferredByTerminal.set(p.terminal, W);
}
function flushDeferredFitContinuations(p) {
	let H = deferredByTerminal.get(p.terminal);
	if (H) {
		deferredByTerminal.delete(p.terminal);
		for (let p of H.values()) if (p.shouldContinue()) try {
			p.continuation();
		} catch {}
	}
}
function clearDeferredFitContinuations(p) {
	deferredByTerminal.delete(p.terminal);
}
function clearDeferredFitContinuation(p, H, U) {
	let W = deferredByTerminal.get(p.terminal);
	W && (U && W.get(H) !== U || (W.delete(H), W.size === 0 && deferredByTerminal.delete(p.terminal)));
}
var pendingSafeFitContinuations = /* @__PURE__ */ new WeakMap();
function hasPendingSafeFitContinuations(p) {
	return !!pendingSafeFitContinuations.get(p)?.size;
}
function isPendingSafeFitContinuationCurrent(p, H, U) {
	return pendingSafeFitContinuations.get(p)?.get(H) === U;
}
function settlePendingSafeFitContinuation(p, H, U, W) {
	let G = pendingSafeFitContinuations.get(p);
	return G?.get(H) === U ? (G.delete(H), G.size === 0 && (pendingSafeFitContinuations.delete(p), clearPaneFitContinuationRetry(p)), U.resolve(W), !0) : !1;
}
function registerPendingSafeFitContinuation(p, H, U) {
	let W = pendingSafeFitContinuations.get(p) ?? /* @__PURE__ */ new Map(), G = W.get(H);
	G && settlePendingSafeFitContinuation(p, H, G, !1), clearDeferredFitContinuation(p, H);
	let K = pendingSafeFitContinuations.get(p) ?? W;
	K.set(H, U), pendingSafeFitContinuations.set(p, K);
}
function flushPendingSafeFitContinuations(p) {
	flushDeferredFitContinuations(p);
	let H = pendingSafeFitContinuations.get(p);
	if (H) for (let [U, W] of H) {
		if (!W.shouldContinue()) {
			settlePendingSafeFitContinuation(p, U, W, !1);
			continue;
		}
		try {
			W.continuation(), settlePendingSafeFitContinuation(p, U, W, !0);
		} catch {
			settlePendingSafeFitContinuation(p, U, W, !1);
		}
	}
}
function releaseSafeFitContinuationUntilMeasurable(p, H, U) {
	settlePendingSafeFitContinuation(p, H, U, !1) && U.deferIfHidden && deferFitContinuation(p, H, U);
}
function pruneStaleSafeFitContinuations(p) {
	let H = pendingSafeFitContinuations.get(p);
	if (H) for (let [U, W] of H) W.shouldContinue() ? isManagedPaneDisplayNone(p) && releaseSafeFitContinuationUntilMeasurable(p, U, W) : settlePendingSafeFitContinuation(p, U, W, !1);
}
function failPendingSafeFitContinuations(p) {
	let H = pendingSafeFitContinuations.get(p);
	if (H) for (let [U, W] of Array.from(H.entries())) settlePendingSafeFitContinuation(p, U, W, !1);
}
function cancelPendingSafeFitContinuations(p) {
	clearPaneFitContinuationRetry(p), clearDeferredFitContinuations(p);
	let H = pendingSafeFitContinuations.get(p);
	if (H) {
		pendingSafeFitContinuations.delete(p);
		for (let p of H.values()) p.resolve(!1);
	}
}
function cancelPendingSafeFitContinuation(p, H, U) {
	settlePendingSafeFitContinuation(p, H, U, !1), clearDeferredFitContinuation(p, H, U);
}
var hook = null;
function setPaneFitWebglAttachHook(p) {
	hook = p;
}
function notifyPaneFitSucceeded(p) {
	try {
		hook?.(p);
	} catch {}
}
function readFitClientSize(p) {
	let H = p.xtermContainer ?? p.container, U = H?.getBoundingClientRect;
	if (typeof U != "function") return null;
	let W = U.call(H);
	return {
		width: Math.round(W.width),
		height: Math.round(W.height)
	};
}
function recordPaneFitClientSize(p) {
	let H = readFitClientSize(p);
	H && H.width > 0 && H.height > 0 && (p.lastFitClientSize = H);
}
function readProposedPaneFitDimensions(p) {
	let H = p.container?.dataset?.ptyId, U = H ? getFitOverrideForPty(H) : null, W = canMeasurePaneForFit(p);
	return !W && !U || W && flushDeferredPaneMetricOptions(p) && !canMeasurePaneForFit(p) ? null : U ? {
		cols: U.cols,
		rows: U.rows
	} : getProposedPaneDimensions(p);
}
function canPreserveScrollIntentForFit(p) {
	return !("pendingSplitScrollState" in p && p.pendingSplitScrollState);
}
function performSafeFit(p) {
	if (deferTerminalGeometryMutationDuringRebuild(p.terminal, "safe-fit", () => safeFit(p)) || !canMeasurePaneForFit(p) || flushDeferredPaneMetricOptions(p) && !canMeasurePaneForFit(p)) return !1;
	let H = null, U = null, W = !1, G = () => {
		H = captureTerminalStructuralScrollIntent(p.terminal), U = H?.kind === "pinnedViewport" ? captureScrollState(p.terminal) : null, W = !0;
	};
	try {
		let H = p.container?.dataset?.ptyId, U = H ? getFitOverrideForPty(H) : null;
		if (U) return p.terminal.cols !== U.cols || p.terminal.rows !== U.rows ? (canPreserveScrollIntentForFit(p) && G(), p.terminal.resize(U.cols, U.rows)) : resumePendingFitScrollRestoreAfterFit(p.terminal), !0;
		let W = getProposedPaneDimensions(p);
		return W && W.cols === p.terminal.cols && W.rows === p.terminal.rows ? (resumePendingFitScrollRestoreAfterFit(p.terminal), !0) : (canPreserveScrollIntentForFit(p) && G(), p.fitAddon.fit(), !0);
	} catch {
		return !1;
	} finally {
		if (W) try {
			if (!resumePendingFitScrollRestoreAfterFit(p.terminal)) if (U) {
				let W = U;
				U = null, restoreScrollStateAfterFit(p.terminal, W, {
					onRestored: () => {
						W.wasAtBottom || markTerminalPinnedViewport(p.terminal);
					},
					shouldRestore: () => !isTerminalScrollIntentRebuildInFlight(p.terminal) && isTerminalStructuralScrollIntentCurrent(p.terminal, H)
				});
			} else restoreTerminalStructuralScrollIntent(p.terminal, H);
		} catch {} finally {
			U && releaseScrollStateMarker(U);
		}
	}
}
function safeFit(p) {
	let H = performSafeFit(p);
	return H && (notifyPaneFitSucceeded(p), recordPaneFitClientSize(p), flushPendingSafeFitContinuations(p), clearPaneFitContinuationRetry(p)), H;
}
function armSafeFitContinuationRetry(p) {
	armPaneFitContinuationRetry(p, {
		retry: () => (pruneStaleSafeFitContinuations(p), hasPendingSafeFitContinuations(p) ? safeFit(p) : !0),
		onExhausted: () => {
			failPendingSafeFitContinuations(p);
		}
	});
}
function safeFitAndThen(p, H, U, W = {}) {
	let G = (p) => {}, K = new Promise((p) => {
		G = p;
	}), q = {
		continuation: U,
		shouldContinue: W.shouldContinue ?? (() => !0),
		resolve: G,
		deferIfHidden: W.deferIfHidden === !0
	};
	registerPendingSafeFitContinuation(p, H, q);
	let J = () => {
		cancelPendingSafeFitContinuation(p, H, q);
	};
	return q.shouldContinue() ? (deferTerminalGeometryMutationDuringRebuild(p.terminal, `safe-fit-and-then:${H}`, () => {
		isPendingSafeFitContinuationCurrent(p, H, q) && !safeFit(p) && W.retryIfUnmeasurable && (isManagedPaneDisplayNone(p) ? releaseSafeFitContinuationUntilMeasurable(p, H, q) : armSafeFitContinuationRetry(p));
	}) || !safeFit(p) && W.retryIfUnmeasurable && (isManagedPaneDisplayNone(p) ? releaseSafeFitContinuationUntilMeasurable(p, H, q) : armSafeFitContinuationRetry(p)), {
		completion: K,
		cancel: J
	}) : (J(), {
		completion: K,
		cancel: J
	});
}
function repairPaneWebglCanvasDpr(p) {
	let H = p.terminal._core?._renderService?._renderer?.value, U = H?._canvas ?? H?._gl?.canvas;
	if (!H || !U) return "current";
	if (!U.isConnected) return "deferred";
	let W = U.ownerDocument?.defaultView, G = H.dimensions?.device?.canvas, K = G?.width ?? 0, q = G?.height ?? 0;
	if (!W || K <= 0 || q <= 0) return "deferred";
	let Y = U.width, X = U.height, Z = H._devicePixelRatio, Q = typeof Z == "number" && Z !== W.devicePixelRatio, $ = Math.max(1, Math.ceil(W.devicePixelRatio / 2));
	if (!Q && Math.abs(Y - K) <= $ && Math.abs(X - q) <= $) return "current";
	try {
		H.handleDevicePixelRatioChange?.(), H.handleResize?.(p.terminal.cols, p.terminal.rows), p.terminal.refresh(0, p.terminal.rows - 1);
	} catch {
		return "deferred";
	}
	return recordTerminalWebglDiagnostic("webgl-canvas-dpr-repair", {
		paneId: p.id,
		staleBackingWidth: Y,
		expectedBackingWidth: K,
		...Z === void 0 ? {} : { cachedDevicePixelRatio: Z },
		devicePixelRatio: W.devicePixelRatio
	}), "repaired";
}
function repairPaneWebglCanvasDprMismatch(p) {
	return repairPaneWebglCanvasDpr(p) === "repaired";
}
function recentContextLosses(p, H) {
	let U = H - 6e4;
	return (p.webglContextLossTimestamps ?? []).filter((p) => p > U);
}
function prunePaneWebglContextLosses(p, H = Date.now()) {
	let U = recentContextLosses(p, H);
	return p.webglContextLossTimestamps = U, U.length;
}
function countPaneWebglContextLosses(p, H = Date.now()) {
	return recentContextLosses(p, H).length;
}
function recordPaneWebglContextLoss(p, H = Date.now()) {
	let U = recentContextLosses(p, H);
	return U.push(H), p.webglContextLossTimestamps = U, U.length;
}
function canRetryPaneWebglAfterContextLoss(p, H = Date.now()) {
	return prunePaneWebglContextLosses(p, H) < 3;
}
function resetPaneWebglContextLosses(p) {
	p.webglContextLossTimestamps = void 0;
}
var DISPLAYED_PRESENT_RETRY_FRAMES = 16, pendingDisplayedPresentRetries = /* @__PURE__ */ new WeakMap();
function schedulePresentWhenDisplayed(p, H) {
	if (typeof globalThis.requestAnimationFrame != "function") return;
	let U = pendingDisplayedPresentRetries.get(p);
	if (U) {
		H === "force-current-buffer" && (U.mode = H);
		return;
	}
	pendingDisplayedPresentRetries.set(p, {
		frames: DISPLAYED_PRESENT_RETRY_FRAMES,
		mode: H
	});
	let W = () => {
		let H = pendingDisplayedPresentRetries.get(p);
		if (!H || H.frames <= 0 || !p.terminal) {
			pendingDisplayedPresentRetries.delete(p);
			return;
		}
		if (isManagedPaneDisplayNone(p)) {
			if (H.frames === 1) {
				pendingDisplayedPresentRetries.delete(p);
				return;
			}
			--H.frames, globalThis.requestAnimationFrame(W);
			return;
		}
		pendingDisplayedPresentRetries.delete(p), presentPaneViewportWithMode(p, H.mode);
	};
	globalThis.requestAnimationFrame(W);
}
function presentPaneViewportWithMode(p, H) {
	let U = p;
	if (!U.webglDisabledAfterContextLoss) try {
		if (isManagedPaneDisplayNone(p)) {
			p.terminal.refresh(0, p.terminal.rows - 1), schedulePresentWhenDisplayed(U, H);
			return;
		}
		(H === "force-current-buffer" ? forceFullViewportPresent(p.terminal) : requestFullViewportPresent(p.terminal)) || p.terminal.refresh(0, p.terminal.rows - 1);
	} catch {}
}
function presentPaneViewport(p) {
	presentPaneViewportWithMode(p, "force-current-buffer");
}
function presentPaneViewportPreservingSynchronizedOutput(p) {
	presentPaneViewportWithMode(p, "preserve-synchronized-output");
}
var DEFAULT_ATTEMPT_LIMIT = 3;
function createLazyXtermAddonLoader(p) {
	let H = p.attemptLimit ?? DEFAULT_ATTEMPT_LIMIT, U = null, W = null, G = 0, K = null;
	return {
		setHandlers: (p) => {
			K = p;
		},
		getConstructor: () => U,
		prime: () => U || W ? W ?? Promise.resolve() : G >= H ? Promise.resolve() : (G += 1, W = p.load().then((p) => {
			U = p, K?.onLoaded();
		}, (H) => {
			W = null, K?.onFailed?.(), console.warn(p.failureMessage, H);
		}), W),
		rearm: () => {
			U || W || (W = null, G = 0);
		}
	};
}
var loader = createLazyXtermAddonLoader({
	load: () => import("./addon-webgl-B_JsgZEz.js").then((p) => p.WebglAddon),
	failureMessage: "[terminal] WebGL addon failed to load — using DOM renderer:"
});
function setTerminalWebglAddonLoadHandlers(p) {
	loader.setHandlers(p);
}
function getTerminalWebglAddonConstructor() {
	return loader.getConstructor();
}
function primeTerminalWebglAddon() {
	return loader.prime();
}
function rearmTerminalWebglAddonLoad() {
	loader.rearm();
}
const ENABLE_WEBGL_RENDERER = !0;
var suggestedRendererType, panesAwaitingWebglAddon = /* @__PURE__ */ new Set();
setTerminalWebglAddonLoadHandlers({
	onLoaded: () => {
		for (let p of panesAwaitingWebglAddon) attachWebglAndRefit(p, "webgl-deferred-attach");
	},
	onFailed: () => {
		for (let p of panesAwaitingWebglAddon) p.webglAttachFailedSinceRecovery = !0;
		panesAwaitingWebglAddon.clear();
	}
});
function resetTerminalWebglSuggestion() {
	suggestedRendererType = void 0, rearmTerminalWebglAddonLoad(), resetTerminalWebglAutoDecision();
}
function clearTerminalWebglAttachBackoff(p) {
	p.webglAttachFailedSinceRecovery = !1;
}
function shouldUseTerminalWebgl(p) {
	return p.terminalGpuAcceleration === "on" ? !0 : p.terminalGpuAcceleration !== "auto" || suggestedRendererType === "dom" ? !1 : getTerminalWebglAutoDecision().allowWebgl;
}
function refreshTerminalAfterWebglAttach(p) {
	try {
		p.terminal.refresh(0, p.terminal.rows - 1);
	} catch {}
}
function cancelPendingWebglRefresh(p) {
	p.pendingWebglRefreshRafId != null && (typeof globalThis.cancelAnimationFrame == "function" && globalThis.cancelAnimationFrame(p.pendingWebglRefreshRafId), p.pendingWebglRefreshRafId = null);
}
function isPaneWebglContextLost(p) {
	try {
		return (p.webglAddon?._renderer)?._gl?.isContextLost?.() === !0;
	} catch {
		return !0;
	}
}
function disposeWebgl(p, H) {
	if (cancelPendingWebglRefresh(p), panesAwaitingWebglAddon.delete(p), p.webglAddon) {
		releaseXtermWebglContext(p.webglAddon);
		try {
			p.webglAddon.dispose();
		} catch {}
		p.webglAddon = null, H?.refreshDimensions && (p.pendingWebglRefreshRafId = requestAnimationFrame(() => {
			p.pendingWebglRefreshRafId = null;
			try {
				safeFitAndThen(p, "webgl-fallback-refresh", () => {
					p.terminal.refresh(0, p.terminal.rows - 1);
				});
			} catch {}
		}));
	}
}
function releaseXtermWebglContext(p) {
	try {
		let H = p?._renderer;
		H?._gl?.getExtension("WEBGL_lose_context")?.loseContext(), H?._canvas && (H._canvas.width = 0, H._canvas.height = 0);
	} catch {}
}
function markComplexScriptOutput(p) {
	p.hasComplexScriptOutput = !0;
}
function clearWebglTextureAtlas(p) {
	if (!p.webglDisabledAfterContextLoss) try {
		p.webglAddon?.clearTextureAtlas();
	} catch {}
}
function resetWebglTextureAtlas(p) {
	clearWebglTextureAtlas(p), presentPaneViewport(p);
}
function refitAfterLateWebglAttach(p) {
	typeof globalThis.requestAnimationFrame == "function" && (p.pendingWebglRefreshRafId = globalThis.requestAnimationFrame(() => {
		p.pendingWebglRefreshRafId = null;
		try {
			safeFit(p);
		} catch {}
	}));
}
function attachWebglAndRefit(p, H) {
	attachWebgl(p), p.webglAddon && (recordTerminalWebglDiagnostic(H, { paneId: p.id }), refitAfterLateWebglAttach(p));
}
function attachWebglAfterFitIfMissing(p) {
	!p.webglAddon && p.gpuRenderingEnabled && !p.webglAttachmentDeferred && !p.webglDisabledAfterContextLoss && !p.webglAttachFailedSinceRecovery && shouldUseTerminalWebgl(p) && attachWebglAndRefit(p, "webgl-fit-attach");
}
setPaneFitWebglAttachHook((p) => {
	attachWebglAfterFitIfMissing(p), repairPaneWebglCanvasDprMismatch(p);
});
function attachWebgl(p) {
	if (!p.gpuRenderingEnabled || !shouldUseTerminalWebgl(p) || p.webglAttachmentDeferred || p.webglDisabledAfterContextLoss || p.webglAttachFailedSinceRecovery) {
		disposeWebgl(p, { refreshDimensions: !0 });
		return;
	}
	disposeWebgl(p);
	let H = getTerminalWebglAddonConstructor();
	if (!H) {
		panesAwaitingWebglAddon.add(p), primeTerminalWebglAddon();
		return;
	}
	let U = null;
	try {
		U = new H();
		let W = U;
		W.onContextLoss(() => {
			console.warn("[terminal] WebGL context lost for pane", p.id, "— falling back to DOM renderer");
			let H = getLivePaneCensus(), U = recordPaneWebglContextLoss(p);
			recordTerminalWebglDiagnostic("webgl-context-loss", {
				paneId: p.id,
				lossesInWindow: U,
				livePanes: H.panes,
				livePaneManagers: H.managers
			}), p.webglDisabledAfterContextLoss = !0, disposeWebgl(p, { refreshDimensions: !0 });
		}), p.terminal.loadAddon(W), p.webglAddon = W, refreshTerminalAfterWebglAttach(p);
	} catch (H) {
		p.terminalGpuAcceleration === "auto" && (suggestedRendererType = "dom"), p.webglAttachFailedSinceRecovery = !0, console.warn("[terminal] WebGL unavailable for pane", p.id, "— using DOM renderer:", H);
		try {
			U?.dispose();
		} catch {}
		p.webglAddon = null;
	}
}
export { deferTerminalGeometryMutationDuringRebuild as $, flushDeferredPaneMetricOptionsIfMeasurable as A, enforceTerminalCurrentScrollIntent as B, safeFit as C, flushPendingSafeFitContinuations as D, cancelPendingSafeFitContinuations as E, releaseScrollStateMarker as F, markTerminalPinnedViewport as G, isTerminalScrollIntentKeyBindingCurrent as H, restoreScrollState as I, syncTerminalScrollIntentFromViewport as J, onTerminalScrollIntentFollowOutput as K, resumePendingFitScrollRestoreAfterFit as L, captureScrollState as M, getTerminalOutputEpoch as N, canApplyPaneMetricOptions as O, recordTerminalOutput as P, cancelTerminalScrollIntentBufferRebuildCompletions as Q, bindTerminalScrollIntentKey as R, readProposedPaneFitDimensions as S, readFitClientSize as T, isTerminalStructuralScrollIntentCurrent as U, getTerminalScrollIntentKind as V, markTerminalFollowOutput as W, readTerminalScrollBufferSnapshot as X, isTerminalViewportAtBottom as Y, beginTerminalScrollIntentBufferRebuild as Z, canRetryPaneWebglAfterContextLoss as _, clearTerminalWebglAttachBackoff as a, bindPanePtyId as at, repairPaneWebglCanvasDpr as b, isPaneWebglContextLost as c, hydrateOverrides as ct, resetWebglTextureAtlas as d, setFitOverride as dt, endTerminalScrollIntentBufferRebuild as et, shouldUseTerminalWebgl as f, presentPaneViewportPreservingSynchronizedOutput as g, presentPaneViewport as h, cancelPendingWebglRefresh as i, getTerminalWebglAutoDecision as it, cancelDeferredScrollRestore as j, canMeasurePaneForFit as k, markComplexScriptOutput as l, onOverrideChange as lt, createLazyXtermAddonLoader as m, attachWebgl as n, onTerminalScrollIntentBufferRebuildComplete as nt, clearWebglTextureAtlas as o, getFitOverrideForPty as ot, primeTerminalWebglAddon as p, restoreTerminalStructuralScrollIntent as q, attachWebglAfterFitIfMissing as r, clearPaneFitContinuationRetry as rt, disposeWebgl as s, getMobileFitOverridePtyIds as st, ENABLE_WEBGL_RENDERER as t, isTerminalScrollIntentRebuildInFlight as tt, resetTerminalWebglSuggestion as u, replaceFitOverridePtyId as ut, countPaneWebglContextLosses as v, safeFitAndThen as w, repairPaneWebglCanvasDprMismatch as x, resetPaneWebglContextLosses as y, captureTerminalStructuralScrollIntent as z };
