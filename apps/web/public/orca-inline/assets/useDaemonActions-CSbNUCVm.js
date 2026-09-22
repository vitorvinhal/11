import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { Tc as getTerminalPtyOwnershipIdentity, t as useAppStore, wc as buildTerminalTabRetirementPlans } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as closeTerminalTab } from "./terminal-tab-actions-CMBYTSo0.js";
function reserveTerminalRetirementTeardowns(e, l, u) {
	let d = new Set(l.cleanupOnlyPtyIds), f = [], p = (p) => {
		let h = getTerminalPtyOwnershipIdentity(e, p, l.worktreeId);
		return u.has(h) ? (d.add(p), !1) : (u.add(h), f.push(h), !0);
	};
	return {
		plan: {
			...l,
			localOrSshPtyIds: l.localOrSshPtyIds.filter(p),
			runtimeTerminals: l.runtimeTerminals.filter((e) => p(e.ptyId)),
			cleanupOnlyPtyIds: [...d]
		},
		newlyScheduledPtyOwners: f
	};
}
var listeners = /* @__PURE__ */ new Set();
function subscribeDaemonSessionInventoryInvalidated(e) {
	return listeners.add(e), () => {
		listeners.delete(e);
	};
}
function notifyDaemonSessionInventoryInvalidated() {
	let e = [...listeners];
	for (let l of e) l();
}
var CLOSE_BATCH_SIZE = 2;
function snapshotKillAllTerminalSurfaceIds(e = useAppStore.getState()) {
	let l = /* @__PURE__ */ new Set();
	for (let u of Object.values(e.tabsByWorktree)) for (let e of u) l.add(e.id);
	for (let u of Object.values(e.unifiedTabsByWorktree)) for (let e of u) e.contentType === "terminal" && l.add(e.entityId);
	return [...l];
}
function getTargetIndex(e, l) {
	let u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
	for (let [f, p] of Object.entries(e.tabsByWorktree)) {
		let e = d.get(f) ?? /* @__PURE__ */ new Set();
		for (let d of p) e.add(d.id), l.has(d.id) && !u.has(d.id) && u.set(d.id, f);
		d.set(f, e);
	}
	for (let [f, p] of Object.entries(e.unifiedTabsByWorktree)) {
		let e = d.get(f) ?? /* @__PURE__ */ new Set();
		for (let d of p) d.contentType === "terminal" && e.add(d.entityId), d.contentType === "terminal" && l.has(d.entityId) && !u.has(d.entityId) && u.set(d.entityId, f);
		d.set(f, e);
	}
	return {
		ownerByTargetId: u,
		terminalIdsByWorktree: d
	};
}
function getNextTerminalId(e, l) {
	for (let u of e) if (u !== l) return u;
	return null;
}
function createDefaultDependencies() {
	return {
		getState: useAppStore.getState,
		killDaemonSessions: () => window.api.pty.management.killAll(),
		notifyInventoryInvalidated: notifyDaemonSessionInventoryInvalidated,
		closeSurface: closeTerminalTab,
		killPty: (e) => window.api.pty.kill(e),
		now: () => globalThis.performance?.now() ?? Date.now(),
		yieldToRenderer: () => new Promise((e) => {
			let l = new MessageChannel();
			l.port1.onmessage = () => {
				l.port1.close(), l.port2.close(), e();
			}, l.port2.postMessage(void 0);
		}),
		reportSummary: (e) => console.info("[kill-all-terminal-surfaces]", e)
	};
}
async function runKillAllTerminalSurfaces(e, l = {}) {
	let u = {
		...createDefaultDependencies(),
		...l
	}, d = [...new Set(e)], f;
	try {
		f = {
			status: "fulfilled",
			...await u.killDaemonSessions()
		};
	} catch {
		f = { status: "rejected" };
	}
	try {
		u.notifyInventoryInvalidated();
	} catch {}
	let p = u.getState(), m = new Set(d), h = (e) => {
		let { ownerByTargetId: l, terminalIdsByWorktree: u } = getTargetIndex(e, new Set(m)), d = [...m].filter((e) => l.has(e));
		for (let e of m) l.has(e) || m.delete(e);
		let f = e.activeWorktreeId, p = [...d.filter((e) => l.get(e) !== f), ...d.filter((e) => l.get(e) === f)];
		return {
			state: e,
			ownerByTargetId: l,
			terminalIdsByWorktree: u,
			closeOrder: p,
			retirementPlans: buildTerminalTabRetirementPlans(e, p)
		};
	}, _ = h(p), v = new Set(f.status === "fulfilled" ? f.killedSessionIds ?? [] : []), y = /* @__PURE__ */ new Set(), b = [], x = [], S = /* @__PURE__ */ new Set(), C = u.now(), w = C, T = 0, E = 0;
	for (; _.closeOrder.length > 0;) {
		let e = _.closeOrder.splice(0, CLOSE_BATCH_SIZE), l = !1;
		for (let d of e) {
			m.delete(d), x.push(d);
			let e = _.ownerByTargetId.get(d), f = _.terminalIdsByWorktree.get(e) ?? /* @__PURE__ */ new Set(), p = getNextTerminalId(f, d), { plan: h, newlyScheduledPtyOwners: g } = reserveTerminalRetirementTeardowns(_.state, _.retirementPlans.get(d), y), C = !1;
			try {
				u.closeSurface(d, {
					force: !0,
					localPtyTeardownOwnedExternally: !0,
					precomputedRetirementPlan: h,
					precomputedCloseState: {
						owningWorktreeId: e,
						terminalCountBeforeClose: f.size,
						nextTerminalTabId: p
					}
				});
			} catch {
				C = !0, S.add(d);
			}
			if (C && snapshotKillAllTerminalSurfaceIds(u.getState()).includes(d)) {
				for (let e of g) y.delete(e);
				l = !0;
				break;
			}
			f.delete(d);
			for (let e of h.localOrSshPtyIds) if (!v.has(e)) try {
				b.push(u.killPty(e));
			} catch (e) {
				b.push(Promise.reject(e));
			}
		}
		if (T = Math.max(T, u.now() - w), m.size > 0) {
			let e = u.getState();
			try {
				await u.yieldToRenderer();
			} catch {}
			E += 1, w = u.now();
			let d = u.getState();
			(l || d !== e) && (_ = h(d));
		}
	}
	let D = Math.max(0, u.now() - C), O = await Promise.allSettled(b), k = O.filter((e) => e.status === "fulfilled").length, A = new Set(snapshotKillAllTerminalSurfaceIds(u.getState())), j = d.filter((e) => !A.has(e)).length, M = x.filter((e) => S.has(e) || A.has(e)).length, N = {
		targetCount: d.length,
		closeAttemptCount: x.length,
		absentTargetCount: j,
		failedCloseAttemptCount: M,
		exactKillAcceptedCount: k,
		exactKillRejectedCount: O.length - k,
		closeDurationMs: Math.round(D * 100) / 100,
		maxCloseBatchDurationMs: Math.round(T * 100) / 100,
		closeYieldCount: E,
		closePhaseExceededLongTaskBudget: T > 50,
		daemon: f
	};
	try {
		u.reportSummary(N);
	} catch {}
	return N;
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function showKillAllTerminalSurfacesResult(e) {
	let l = [e.targetCount > 0 ? translate("auto.components.shared.useDaemonActions.71a8d342b0", "Terminal tabs absent: {{value0}}/{{value1}}. Failed close attempts: {{value2}}. Exact PTY shutdown requests accepted: {{value3}}; failed: {{value4}}.", {
		value0: e.absentTargetCount,
		value1: e.targetCount,
		value2: e.failedCloseAttemptCount,
		value3: e.exactKillAcceptedCount,
		value4: e.exactKillRejectedCount
	}) : null, e.daemon.status === "rejected" ? translate("auto.components.shared.useDaemonActions.2e57c1a940", "The daemon shutdown result is unverified because its management request failed.") : translate("auto.components.shared.useDaemonActions.993af6052c", "Daemon management reported exited: {{value0}}/{{value1}}; still present before exact cleanup: {{value2}}.", {
		value0: e.daemon.killedCount,
		value1: e.daemon.killedCount + e.daemon.remainingCount,
		value2: e.daemon.remainingCount
	})].filter(Boolean).join(" ");
	if (e.daemon.status === "rejected") {
		toast.error(translate("auto.components.shared.useDaemonActions.1f0d8ac762", "Terminal cleanup finished with errors."), { description: l });
		return;
	}
	if (e.failedCloseAttemptCount > 0 || e.exactKillRejectedCount > 0) {
		toast.error(translate("auto.components.shared.useDaemonActions.1f0d8ac762", "Terminal cleanup finished with errors."), { description: l });
		return;
	}
	if (e.daemon.remainingCount > 0) {
		toast.warning(translate("auto.components.shared.useDaemonActions.80b6ea14cf", "Terminal cleanup finished with warnings."), { description: l });
		return;
	}
	if (e.targetCount === 0 && e.daemon.killedCount === 0) {
		toast.info(translate("auto.components.shared.useDaemonActions.47cd2a50e9", "No sessions or terminal tabs were reported."));
		return;
	}
	toast.success(e.targetCount > 0 ? translate("auto.components.shared.useDaemonActions.c34fb1098d", "Terminal tabs closed and shutdown requested.") : translate("auto.components.shared.useDaemonActions.d9657ac204", "Terminal session shutdown requested."), { description: l });
}
function useDaemonActions(e) {
	let [l, d] = (0, import_react.useState)(null), [p, m] = (0, import_react.useState)(null), h = useMountedRef(), g = (0, import_react.useCallback)(() => {
		h.current && (m(null), d(null));
	}, [h]), _ = (0, import_react.useCallback)(async () => {
		m("restart");
		try {
			let { success: e } = await window.api.pty.management.restart();
			e ? toast.success(translate("auto.components.shared.useDaemonActions.0e9da1b98e", "Daemon restarted.")) : toast.error(translate("auto.components.shared.useDaemonActions.b5954e12d3", "Restart failed — check logs."));
		} catch (e) {
			toast.error(translate("auto.components.shared.useDaemonActions.d762b41f41", "Restart failed."), { description: e instanceof Error ? e.message : void 0 });
		} finally {
			g(), h.current && e?.onRestartSettled?.();
		}
	}, [
		e,
		g,
		h
	]), y = (0, import_react.useCallback)(async () => {
		let l = snapshotKillAllTerminalSurfaceIds();
		m("killAll"), e?.onKillAllStart?.();
		try {
			let u = await runKillAllTerminalSurfaces(l);
			u.daemon.status === "rejected" && h.current && e?.onKillAllError?.(), showKillAllTerminalSurfacesResult(u);
		} catch (l) {
			h.current && e?.onKillAllError?.(), toast.error(translate("auto.components.shared.useDaemonActions.e8f25bd903", "Couldn’t finish terminal cleanup."), { description: l instanceof Error ? l.message : void 0 });
		} finally {
			g(), h.current && e?.onKillAllSettled?.();
		}
	}, [
		e,
		g,
		h
	]), b = (0, import_react.useCallback)(() => {
		l === "restart" ? _() : l === "killAll" && y();
	}, [
		l,
		_,
		y
	]);
	return {
		pending: l,
		setPending: d,
		busyKind: p,
		isBusy: p !== null,
		runRestart: _,
		runKillAll: y,
		runConfirmed: b
	};
}
function getCopy(e) {
	return e === "restart" ? {
		title: translate("auto.components.shared.useDaemonActions.922548bc66", "Restart the terminal daemon?"),
		description: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: translate("auto.components.shared.useDaemonActions.01d6b7c64e", "Kills every running terminal pane and restarts the daemon process. Panes show \"Process exited\" and can be reopened immediately. Legacy-protocol sessions from a previous app version are preserved. This can't be undone.") }),
		confirmLabel: "Restart daemon",
		busyLabel: "Restarting…"
	} : {
		title: translate("auto.components.shared.useDaemonActions.1bbea41a77", "Kill all terminal sessions?"),
		description: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: translate("auto.components.shared.useDaemonActions.a702d4196e", "This closes every terminal tab across all workspaces and requests shutdown for its current terminal sessions. Any unsaved terminal work is lost. The daemon itself keeps running, and new terminals can be opened immediately. This can't be undone.") }),
		confirmLabel: "Kill all sessions",
		busyLabel: "Killing…"
	};
}
function DaemonActionDialog({ api: e, extraDescription: l }) {
	let { pending: f, setPending: m, busyKind: h, isBusy: g, runConfirmed: _ } = e, v = f ? getCopy(f) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: f !== null,
		onOpenChange: (e) => {
			e || g || m(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-w-md",
			showCloseButton: !g,
			onPointerDownOutside: (e) => {
				g && e.preventDefault();
			},
			onEscapeKeyDown: (e) => {
				g && e.preventDefault();
			},
			children: v ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-sm",
				children: v.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
				className: "text-xs",
				children: [v.description, l ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: l
				}) : null]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => m(null),
				disabled: g,
				children: translate("auto.components.shared.useDaemonActions.01af244097", "Cancel")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "destructive",
				onClick: _,
				disabled: g,
				children: [g ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, g && h === f ? v.busyLabel : v.confirmLabel]
			})] })] }) : null
		})
	});
}
export { subscribeDaemonSessionInventoryInvalidated as i, useDaemonActions as n, notifyDaemonSessionInventoryInvalidated as r, DaemonActionDialog as t };
