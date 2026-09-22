import { i as translate } from "./i18n-CakWKPtl.js";
import { Ef as closeStructuredAgentSession, Fd as toHostSessionTabId, Go as resolveUnifiedTabLabel, Nh as isTerminalLeafId, O_ as parseAppSshPtyId, Ph as makePaneKey, kc as resolveTerminalWorktreeRoute, kp as parseRemoteRuntimePtyId, t as useAppStore } from "./store-C9f8FDJV.js";
import { d as create } from "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { P as getLatestWebSessionTabsPublicationEpoch, on as isWebRuntimeSessionActive, u as closeWebRuntimeSessionTab, z as resolveHostSessionTabIdForWebSessionTab } from "./web-runtime-session-CeAC5QPx.js";
import { d as isClientOnlyUnverifiableInspection, s as inspectRuntimeTerminalProcess } from "./agent-process-recognition-BUFJTuDF.js";
function mergeRequests(a, E) {
	return {
		...a,
		onConfirm: () => {
			a.onConfirm(), E.onConfirm();
		},
		onCancel: () => {
			a.onCancel?.(), E.onCancel?.();
		}
	};
}
const useRunningTerminalCloseConfirmStore = create()((a, E) => {
	let D = [], O = 0, k = () => {
		let E = D.shift() ?? null;
		return a({ runningTerminalCloseConfirm: E }), E !== null;
	}, A = (a) => {
		a && (O = Date.now() + 350);
	};
	return {
		runningTerminalCloseConfirm: null,
		requestRunningTerminalCloseConfirm: (O) => {
			let k = E().runningTerminalCloseConfirm;
			if (k?.terminalTabId === O.terminalTabId) {
				a({ runningTerminalCloseConfirm: mergeRequests(k, O) });
				return;
			}
			let A = D.findIndex((a) => a.terminalTabId === O.terminalTabId);
			if (A !== -1) {
				D[A] = mergeRequests(D[A], O);
				return;
			}
			if (k) {
				D.push(O);
				return;
			}
			a({ runningTerminalCloseConfirm: O });
		},
		confirmRunningTerminalClose: () => {
			let a = E().runningTerminalCloseConfirm;
			!a || Date.now() < O || (A(k()), a.onConfirm());
		},
		confirmAllRunningTerminalCloses: () => {
			if (Date.now() < O) return;
			let k = [E().runningTerminalCloseConfirm, ...D.splice(0)];
			a({ runningTerminalCloseConfirm: null });
			for (let a of k) a?.onConfirm();
		},
		dismissRunningTerminalClose: () => {
			let a = E().runningTerminalCloseConfirm;
			!a || Date.now() < O || (A(k()), a.onCancel?.());
		}
	};
});
function resolvePinnedTabLabel(a, E, D) {
	return resolveUnifiedTabLabel((a.unifiedTabsByWorktree?.[E] ?? []).find((a) => a.id === D || a.entityId === D), a.settings?.tabAutoGenerateTitle === !0);
}
function isUnifiedTabPinned(a, E, D) {
	return (a.unifiedTabsByWorktree?.[E] ?? []).some((a) => (a.id === D || a.entityId === D) && a.isPinned === !0);
}
function shouldConfirmPinnedTabClose(a) {
	return a.settings?.confirmClosePinnedTab ?? !0;
}
function guardPinnedTabClose(a) {
	let { isPinned: E, tabLabel: D, onClose: O, onCancel: k } = a;
	if (!E) {
		O();
		return;
	}
	let A = useAppStore.getState();
	if (!shouldConfirmPinnedTabClose(A)) {
		O();
		return;
	}
	let j = {
		tabLabel: D,
		onConfirm: O,
		...k ? { onCancel: k } : {}
	};
	return A.requestPinnedTabCloseConfirm(j), () => A.cancelPinnedTabCloseRequest(j);
}
var STRUCTURED_SESSION_CLOSE_RETRY_DELAYS_MS = [
	0,
	250,
	1e3,
	3e3
];
function structuredTerminalSessionId(a, E) {
	return a?.find((a) => a.contentType === "terminal" && a.entityId === E && a.viewMode === "chat")?.structuredSessionId ?? null;
}
async function closeStructuredTerminalSessionWithRetry(a, D) {
	for (let [O, k] of STRUCTURED_SESSION_CLOSE_RETRY_DELAYS_MS.entries()) {
		k > 0 && await new Promise((a) => setTimeout(a, k));
		try {
			return await closeStructuredAgentSession(a, D), !0;
		} catch (a) {
			O === STRUCTURED_SESSION_CLOSE_RETRY_DELAYS_MS.length - 1 && console.warn("[structured-agent-session] terminal close disposal failed", {
				sessionId: D,
				error: a
			});
		}
	}
	return !1;
}
function disposeStructuredTerminalSession({ unifiedTabs: a, terminalTabId: E, target: D, reason: O }) {
	if (O === "pty-exit") return;
	let k = structuredTerminalSessionId(a, E);
	k && closeStructuredTerminalSessionWithRetry(D, k);
}
function resolveLeafCloseCopyKind(a, E) {
	if (!E || !isTerminalLeafId(E) || !a || a.includes(":")) return "command";
	let D = (useAppStore.getState().agentStatusByPaneKey ?? {})[makePaneKey(a, E)]?.agentType;
	return D && D !== "unknown" ? "agent" : "command";
}
function resolveBusyPtyCloseCopyKind(a, E) {
	let D = useAppStore.getState().terminalLayoutsByTabId?.[a]?.ptyIdsByLeafId ?? {};
	for (let [O, k] of Object.entries(D)) if (E.includes(k) && resolveLeafCloseCopyKind(a, O) === "agent") return "agent";
	return "command";
}
function isRemoteExecutionHostPtyId(a) {
	return parseRemoteRuntimePtyId(a) !== null || parseAppSshPtyId(a) !== null;
}
async function probePtyRunningWork(a, E, D) {
	if (E.length === 0) return [];
	let O = E.map((a) => ({
		ptyId: a,
		verdict: "unverifiable",
		reason: "probe_deadline",
		timedOut: !0,
		remote: isRemoteExecutionHostPtyId(a)
	})), k = Promise.all(E.map(async (E, D) => {
		let k = O[D];
		if (k) try {
			let D = await inspectRuntimeTerminalProcess(a, E, { scanChildProcesses: !0 });
			if (k.timedOut = !1, isClientOnlyUnverifiableInspection(D)) {
				k.verdict = "unverifiable", k.reason = D.reason;
				return;
			}
			if (D.childProcessEvidence === "unverifiable") {
				k.verdict = "unverifiable", k.reason = "host_child_processes_unobserved";
				return;
			}
			k.verdict = (D.childProcessEvidence ?? (D.hasChildProcesses ? "children" : "no-children")) === "children" ? "live" : "exited", delete k.reason;
		} catch {
			k.timedOut = !1, k.verdict = "unverifiable", k.reason = "probe_failed";
		}
	})), A;
	try {
		await Promise.race([k, new Promise((a) => {
			A = setTimeout(a, D.timeoutMs);
		})]);
	} finally {
		clearTimeout(A);
	}
	return O;
}
const RUNNING_CLOSE_PROBE_TIMEOUT_MS = 4e3;
function shouldConfirmRunningTerminalClose(a) {
	if (a?.force === !0 || a?.rejectPinned === !0 || a?.skipRunningProcessConfirm === !0 || a?.lifecyclePtyId !== void 0) return !1;
	let E = (a) => a === void 0 || a === "user";
	return E(a?.reason) && E(a?.hostCloseReason);
}
function collectTabPtyIds(a, E) {
	let D = /* @__PURE__ */ new Set();
	for (let O of a.ptyIdsByTabId?.[E] ?? []) O && D.add(O);
	let O = a.terminalLayoutsByTabId?.[E]?.ptyIdsByLeafId ?? {};
	for (let a of Object.values(O)) typeof a == "string" && a && D.add(a);
	return [...D];
}
function guardRunningTerminalClose(a) {
	let { terminalTabId: E, tabLabel: D, onClose: O, onCancel: k } = a, A = useAppStore.getState(), j = A.settings, M = collectTabPtyIds(A, E);
	if (M.length === 0 || j?.skipCloseTerminalWithRunningProcessConfirm === !0) {
		O();
		return;
	}
	let N = !1, P = () => {
		N || (N = !0, O());
	}, F = (a) => {
		if (N) return;
		let A = resolveBusyPtyCloseCopyKind(E, a);
		useRunningTerminalCloseConfirmStore.getState().requestRunningTerminalCloseConfirm({
			terminalTabId: E,
			tabLabel: D,
			copyKind: A,
			onConfirm: O,
			...k ? { onCancel: k } : {}
		}), N = !0;
	};
	probePtyRunningWork(j, M, { timeoutMs: RUNNING_CLOSE_PROBE_TIMEOUT_MS }).then((a) => {
		if (N) return;
		if (a.some((a) => a.timedOut)) {
			F(M);
			return;
		}
		let E = a.filter((a) => a.verdict === "live").map((a) => a.ptyId);
		if (E.length === 0) {
			P();
			return;
		}
		F(E);
	}).catch(() => {
		P();
	});
}
function closeLocalTerminalTabState(a, E) {
	let D = useAppStore.getState();
	if (E?.precomputedRetirementPlan?.tabId === a || Object.values(D.tabsByWorktree).some((E) => E.some((E) => E.id === a))) {
		E?.reason || E?.captureRecentlyClosed !== void 0 || E?.remoteCloseOwnedByHost || E?.localPtyTeardownOwnedExternally || E?.precomputedRetirementPlan ? D.closeTab(a, E) : D.closeTab(a);
		return;
	}
	for (let O of Object.values(D.unifiedTabsByWorktree ?? {})) {
		let k = O.find((E) => E.contentType === "terminal" && (E.entityId === a || E.id === a));
		if (k) {
			D.closeTab(k.entityId, E);
			return;
		}
	}
}
function getTerminalIncarnationHandle(a, E) {
	let D = parseRemoteRuntimePtyId(a);
	return D?.handle && D.environmentId === E ? D.handle : null;
}
function validatePrecomputedTerminalCloseState(a, E, D) {
	return E?.tabId === a && E.worktreeId === D?.owningWorktreeId ? D : void 0;
}
function resolveTerminalCloseTarget(a, E, D) {
	if (D) return {
		worktreeId: D.owningWorktreeId,
		terminalTabId: E
	};
	for (let [D, O] of Object.entries(a.tabsByWorktree)) if (O.some((a) => a.id === E)) return {
		worktreeId: D,
		terminalTabId: E
	};
	for (let [D, O] of Object.entries(a.unifiedTabsByWorktree ?? {})) {
		let a = O.find((a) => a.contentType === "terminal" && (a.entityId === E || a.id === E));
		if (a) return {
			worktreeId: D,
			terminalTabId: a.entityId
		};
	}
	return null;
}
function getWorktreeTerminalTabIds(a, E) {
	let D = /* @__PURE__ */ new Set();
	for (let O of a.tabsByWorktree[E] ?? []) D.add(O.id);
	for (let O of a.unifiedTabsByWorktree?.[E] ?? []) O.contentType === "terminal" && D.add(O.entityId);
	return [...D];
}
function closeTerminalTab(E, O) {
	let k = useAppStore.getState(), A = validatePrecomputedTerminalCloseState(E, O?.precomputedRetirementPlan, O?.precomputedCloseState), j = resolveTerminalCloseTarget(k, E, A);
	if (!j) {
		let a = O?.reason ?? O?.hostCloseReason ?? "user";
		a !== "pty-exit" && k.closeTab(E, {
			reason: a,
			...O?.localPtyTeardownOwnedExternally ? { localPtyTeardownOwnedExternally: !0 } : {},
			...O?.precomputedRetirementPlan ? { precomputedRetirementPlan: O.precomputedRetirementPlan } : {}
		}), O?.onClosed?.();
		return;
	}
	let { worktreeId: N, terminalTabId: P } = j, I = resolveTerminalWorktreeRoute(k, N);
	if (!I) {
		O?.onCancel?.();
		return;
	}
	if (O?.reason !== "pty-exit" && !O?.force && isUnifiedTabPinned(k, N, P)) {
		if (O?.rejectPinned) {
			O.onCancel?.();
			return;
		}
		if (shouldConfirmPinnedTabClose(k)) {
			guardPinnedTabClose({
				isPinned: !0,
				tabLabel: resolvePinnedTabLabel(k, N, P),
				onClose: () => closeTerminalTab(E, {
					...O,
					force: !0
				}),
				...O?.onCancel ? { onCancel: O.onCancel } : {}
			});
			return;
		}
	}
	if (shouldConfirmRunningTerminalClose(O)) {
		guardRunningTerminalClose({
			terminalTabId: P,
			tabLabel: resolvePinnedTabLabel(k, N, P),
			onClose: () => closeTerminalTab(E, {
				...O,
				skipRunningProcessConfirm: !0
			}),
			...O?.onCancel ? { onCancel: O.onCancel } : {}
		});
		return;
	}
	let L = I.runtimeEnvironmentId, R = structuredTerminalSessionId(k.unifiedTabsByWorktree?.[N], P);
	if (R && O?.reason !== "pty-exit" && O?.structuredSessionCloseConfirmed !== !0) {
		closeStructuredTerminalSessionWithRetry(L ? {
			kind: "environment",
			environmentId: L
		} : { kind: "local" }, R).then((D) => {
			if (!D) {
				toast.error(translate("components.native-chat.structuredSessionCloseFailed", "Could not close this chat session"), { description: translate("components.native-chat.structuredSessionCloseFailedDescription", "The terminal stayed open so the provider remains recoverable.") }), O?.onCancel?.();
				return;
			}
			closeTerminalTab(E, {
				...O,
				force: !0,
				skipRunningProcessConfirm: !0,
				structuredSessionCloseConfirmed: !0
			});
		});
		return;
	}
	let z = () => {
		let a = O?.reason ?? O?.hostCloseReason ?? "user", E = L ? {
			kind: "environment",
			environmentId: L
		} : { kind: "local" };
		O?.structuredSessionCloseConfirmed !== !0 && disposeStructuredTerminalSession({
			unifiedTabs: k.unifiedTabsByWorktree?.[N],
			terminalTabId: P,
			target: E,
			reason: a
		});
	};
	if (L && isWebRuntimeSessionActive(L)) {
		if (O?.reason === "pty-exit") return;
		let a = resolveHostSessionTabIdForWebSessionTab(k, {
			environmentId: L,
			worktreeId: N,
			tabId: P
		}) ?? toHostSessionTabId(P), E = O?.reason ?? O?.hostCloseReason ?? "user", A = E === "user" ? null : getTerminalIncarnationHandle(O?.lifecyclePtyId ?? "", L), j = E === "user" ? null : getLatestWebSessionTabsPublicationEpoch(L, N);
		closeLocalTerminalTabState(P, {
			reason: O?.reason,
			...O?.captureRecentlyClosed === void 0 ? {} : { captureRecentlyClosed: O.captureRecentlyClosed },
			remoteCloseOwnedByHost: !0,
			...O?.localPtyTeardownOwnedExternally ? { localPtyTeardownOwnedExternally: !0 } : {},
			...O?.precomputedRetirementPlan ? { precomputedRetirementPlan: O.precomputedRetirementPlan } : {}
		}), closeWebRuntimeSessionTab({
			worktreeId: N,
			tabId: a,
			environmentId: L,
			reason: E,
			...E === "user" ? {} : {
				publicationEpoch: j,
				terminalHandle: A
			}
		}), z(), O?.onClosed?.();
		return;
	}
	let B = A ? null : getWorktreeTerminalTabIds(k, N), V = A?.terminalCountBeforeClose ?? B.length;
	if (!(k.unifiedTabsByWorktree?.[N] ?? []).some((a) => a.contentType === "terminal" && (a.entityId === P || a.id === P)) && V > 1 && k.activeWorktreeId === N && P === k.activeTabId) {
		let a = B?.indexOf(P) ?? -1, E = A ? A.nextTerminalTabId : B[a + 1] ?? B[a - 1];
		E && k.setActiveTab(E);
	}
	if (closeLocalTerminalTabState(P, {
		reason: O?.reason,
		...O?.captureRecentlyClosed === void 0 ? {} : { captureRecentlyClosed: O.captureRecentlyClosed },
		...O?.localPtyTeardownOwnedExternally ? { localPtyTeardownOwnedExternally: !0 } : {},
		...O?.precomputedRetirementPlan ? { precomputedRetirementPlan: O.precomputedRetirementPlan } : {}
	}), V <= 1 && k.activeWorktreeId === N) {
		let a = useAppStore.getState();
		if (a.activeWorktreeId === N) {
			let { renderableTabCount: E } = a.reconcileWorktreeTabModel(N);
			if (E === 0) {
				let E = a.openFiles.find((a) => a.worktreeId === N);
				if (E) a.setActiveFile(E.id), a.setActiveTabType("editor");
				else {
					let E = (a.browserTabsByWorktree?.[N] ?? [])[0];
					E ? (a.setActiveBrowserTab(E.id), a.setActiveTabType("browser")) : a.setActiveWorktree(null);
				}
			}
		}
	}
	z(), O?.onClosed?.();
}
export { isRemoteExecutionHostPtyId as a, isUnifiedTabPinned as c, probePtyRunningWork as i, resolvePinnedTabLabel as l, RUNNING_CLOSE_PROBE_TIMEOUT_MS as n, resolveLeafCloseCopyKind as o, collectTabPtyIds as r, guardPinnedTabClose as s, closeTerminalTab as t, useRunningTerminalCloseConfirmStore as u };
