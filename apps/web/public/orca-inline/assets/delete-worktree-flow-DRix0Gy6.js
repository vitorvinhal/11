import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { $y as normalizeRuntimePathForComparison, Bp as isProvenLiveStructuredSessionRemovalError, Rp as isLockedWorktreeRemovalError, Sv as getWorktreeHostIdentity, Vp as toWorktreeRemovalTarget, Xy as isPathInsideOrEqual, ZS as getRepoExecutionHostId, bn as isPairedWebClientWindow, bv as composeWorktreeHostIdentity, iC as parseExecutionHostId, nC as normalizeExecutionHostId, sy as findRepoForHost, t as useAppStore, tC as isRuntimeOwnedSshTargetId, vv as parseWorkspaceKey, xg as getWorktreeVisitTimestamp, zp as isProvenLivePtyRemovalError } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as getWorktreeOnHostFromState, i as getWorktreeMapFromState, r as getRepoMapFromState, t as getAllWorktreesFromState } from "./selectors-Cdg4hUQI.js";
import { i as getProjectedWorktreeLineageChildrenByParentId } from "./worktree-lineage-projection-yv9KfVOV.js";
import { n as showPreservedBranchBatchToast } from "./preserved-branch-batch-toast-C08Rnofp.js";
function getWorkspaceDeleteLineage(c, L, R) {
	let z = /* @__PURE__ */ new Map();
	for (let R of L) {
		let L = z.get(R.id);
		L && L.hostId === c.hostId && R.hostId !== c.hostId || z.set(R.id, R);
	}
	let B = {};
	for (let c of z.values()) {
		let L = R[c.id], z = c.lineage, V = L?.worktreeInstanceId === c.instanceId ? L : z;
		V && (B[c.id] = V);
	}
	let V = getProjectedWorktreeLineageChildrenByParentId(B, z), H = [], U = [], W = /* @__PURE__ */ new Set(), G = new Set([c.id]), K = (c) => {
		if (W.has(c)) return;
		W.add(c);
		let L = V.get(c) ?? [];
		for (let c of L) G.has(c.id) || (G.add(c.id), H.push(c), K(c.id), c.isMainWorktree || U.push(c));
		W.delete(c);
	};
	return K(c.id), {
		descendants: H,
		deleteAllTargets: [...U, c]
	};
}
function getDeleteStateForWorktreeHost(c, L) {
	let R = c.hostId ? L[getWorktreeHostIdentity(c)] : void 0;
	if (R) return R;
	let z = L[c.id];
	return z?.executionHostId && c.hostId && z.executionHostId !== c.hostId ? void 0 : z;
}
function staleWorkspaceListToast(c) {
	toast.info(c, { description: translate("auto.components.sidebar.delete.worktree.flow.b81b4e40ca", "Refresh Space and try again if the workspace list looks stale.") });
}
function showWorkspaceListChangedToast() {
	staleWorkspaceListToast(translate("auto.components.sidebar.delete.worktree.flow.workspaceListChanged", "Workspace list changed"));
}
function showNoDeletableWorkspacesToast() {
	staleWorkspaceListToast(translate("auto.components.sidebar.delete.worktree.flow.7243145cd6", "No deletable workspaces selected"));
}
function resolveSshWorkspaceForget(c) {
	let L = c.repo?.connectionId?.trim();
	if (!L || isRuntimeOwnedSshTargetId(L)) return { kind: "not-ssh" };
	let R = c.sshTargetLabels.has(L), z = c.sshConnectionStates.get(L)?.status;
	return R ? z === "connected" ? {
		kind: "connected",
		targetId: L
	} : {
		kind: "disconnected",
		targetId: L,
		status: z ?? "disconnected"
	} : {
		kind: "ghost",
		targetId: L
	};
}
function toWorktreeDeleteIdentities(c) {
	return c.map(({ id: c, instanceId: L, hostId: R }) => ({
		id: c,
		instanceId: L,
		hostId: R
	}));
}
function resolveWorktreeBatchDeleteTargets(c, L) {
	let R = Array.from(new Map(c.map((c) => [typeof c == "string" ? c : `${c.hostId ?? ""}|${c.id}`, c])).values()), z = [];
	for (let c of R) {
		let R = L(typeof c == "string" ? c : c.id, typeof c == "string" ? void 0 : c.hostId) ?? null;
		if (typeof c != "string" && (!R || R.instanceId !== c.instanceId)) return null;
		R && !R.isMainWorktree && z.push(R);
	}
	return z;
}
function readWorktreeDeleteIdentities(c) {
	return Array.isArray(c) ? c.flatMap((c) => {
		if (!c || typeof c != "object" || !("id" in c) || typeof c.id != "string") return [];
		let L = "instanceId" in c ? c.instanceId : void 0;
		if (L !== void 0 && typeof L != "string") return [];
		let R = normalizeExecutionHostId("hostId" in c && typeof c.hostId == "string" ? c.hostId : null);
		return [{
			id: c.id,
			instanceId: L,
			...R ? { hostId: R } : {}
		}];
	}) : [];
}
function isHostedOnRuntimeOwnedSshTarget(c, L) {
	return [
		c.hostId,
		L.get(c.repoId)?.executionHostId,
		L.get(c.repoId)?.connectionId
	].some((c) => {
		if (!c) return !1;
		if (isRuntimeOwnedSshTargetId(c)) return !0;
		let L = parseExecutionHostId(c);
		return L?.kind === "ssh" && isRuntimeOwnedSshTargetId(L.targetId);
	});
}
function pickNextWorktreeIdAfterDelete(c, L, R) {
	let z = c.deleteStateByWorktreeId, B = getRepoMapFromState(c), V = (c.worktreesByRepo[L] ?? []).filter((c) => c.id !== R && !getDeleteStateForWorktreeHost(c, z)?.isDeleting && !isHostedOnRuntimeOwnedSshTarget(c, B)), H = V.filter((c) => !c.isMainWorktree);
	if (H.length > 0) {
		let L = c.lastVisitedAtByWorktreeId, [R] = [...H].sort((c, R) => (getWorktreeVisitTimestamp(L, R) ?? 0) - (getWorktreeVisitTimestamp(L, c) ?? 0));
		return R.id;
	}
	return V.find((c) => c.isMainWorktree)?.id ?? null;
}
function focusNextWorktreeAfterActiveDelete(c, L, R) {
	if (!R || !L) return;
	let B = useAppStore.getState();
	if (B.activeView !== "terminal" || B.activePendingCreationId !== null || B.activeWorktreeId !== null) return;
	let V = pickNextWorktreeIdAfterDelete(B, L, c);
	V && activateAndRevealWorktree(V, { revealInSidebar: !1 });
}
function prepareActiveWorktreeFocusAfterDelete(c) {
	let L = useAppStore.getState(), R = L.activeView === "terminal" && L.activePendingCreationId === null && L.activeWorktreeId === c, z = getWorktreeMapFromState(L).get(c)?.repoId ?? null;
	return () => focusNextWorktreeAfterActiveDelete(c, z, R);
}
function beginWorktreeSnapshotPruneBatch() {
	if (typeof window > "u") return null;
	let c = window.api.workspaceCleanup, L = c.beginRemovalSnapshotPruneBatch, R = c.recordRemovalSnapshotPrune, z = c.finishRemovalSnapshotPruneBatch;
	if (typeof L != "function" || typeof R != "function" || typeof z != "function") return null;
	let B = crypto.randomUUID();
	return L({ batchId: B }).then(() => ({
		batchId: B,
		finish: () => z({ batchId: B })
	})).catch((c) => (console.warn("Failed to begin workspace snapshot prune batch:", c), null));
}
function getDeleteWorktreeToastCopy(c, R, z, B = null) {
	return isLockedWorktreeRemovalError(z) ? {
		title: translate("auto.components.sidebar.delete.worktree.toast.1d0fa5c0a5", "Failed to delete workspace {{value0}}", { value0: c }),
		description: B ? translate("auto.components.sidebar.delete.worktree.toast.lockedReason", "This workspace is locked by Git. Git reported: {{value0}}. Run git worktree unlock <worktree-path> from its repository, then retry deletion.", { value0: B }) : translate("auto.components.sidebar.delete.worktree.toast.locked", "This workspace is locked by Git. Run git worktree unlock <worktree-path> from its repository, then retry deletion."),
		isDestructive: !1
	} : R ? R === "orphan-directory" ? {
		title: translate("auto.components.sidebar.delete.worktree.toast.1d0fa5c0a5", "Failed to delete workspace {{value0}}", { value0: c }),
		description: translate("auto.components.sidebar.delete.worktree.toast.0899ebdb28", "Git already forgot this workspace, but its directory is still on disk. Use Force Delete to remove the orphaned directory."),
		isDestructive: !1
	} : R === "unstopped-pty" ? {
		title: translate("auto.components.sidebar.delete.worktree.toast.1d0fa5c0a5", "Failed to delete workspace {{value0}}", { value0: c }),
		description: isProvenLivePtyRemovalError(z) ? translate("auto.components.sidebar.delete.worktree.toast.unstoppedPtyLive", "This workspace still has running terminals, so Orca stopped before deleting any files. Force Delete will kill them and discard any uncommitted work they hold.") : translate("auto.components.sidebar.delete.worktree.toast.unstoppedPty", "Orca could not confirm every terminal in this workspace has exited, so it stopped before deleting any files. Use Force Delete to remove it anyway."),
		isDestructive: !1
	} : R === "running-agent-session" ? {
		title: translate("auto.components.sidebar.delete.worktree.toast.1d0fa5c0a5", "Failed to delete workspace {{value0}}", { value0: c }),
		description: isProvenLiveStructuredSessionRemovalError(z) ? translate("auto.components.sidebar.delete.worktree.toast.runningAgentSessionLive", "This workspace still has running agent sessions that Orca could not close, so it stopped before deleting any files. Force Delete will discard any work they hold.") : translate("auto.components.sidebar.delete.worktree.toast.runningAgentSession", "Orca could not confirm every agent session in this workspace has closed, so it stopped before deleting any files. Use Force Delete to remove it anyway."),
		isDestructive: !1
	} : R === "missing-registration" ? {
		title: translate("auto.components.sidebar.delete.worktree.toast.1d0fa5c0a5", "Failed to delete workspace {{value0}}", { value0: c }),
		description: translate("auto.components.sidebar.delete.worktree.toast.905fc8efac", "Git already removed this workspace. Use Force Delete to clear it from Orca."),
		isDestructive: !1
	} : {
		title: translate("auto.components.sidebar.delete.worktree.toast.1d0fa5c0a5", "Failed to delete workspace {{value0}}", { value0: c }),
		description: translate("auto.components.sidebar.delete.worktree.toast.ead7b8ee15", "It has changed files. Use Force Delete to delete it anyway."),
		isDestructive: !1
	} : {
		title: translate("auto.components.sidebar.delete.worktree.toast.1d0fa5c0a5", "Failed to delete workspace {{value0}}", { value0: c }),
		description: z,
		isDestructive: !0
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function deleteWorktreeFailureToastId(c) {
	return `delete-worktree-failure:${c}`;
}
function DeleteWorktreeFailureToastBody({ description: c, canForceDelete: z, canWaiveArchiveHook: B, showViewChanges: V, onViewChanges: H, onForceDelete: U, onDeleteAnyway: W, toastId: G }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col gap-3",
		children: [c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-5 text-popover-foreground/80",
			children: c
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap justify-end gap-2",
			children: [
				V ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: () => {
						toast.dismiss(G), H();
					},
					children: translate("auto.components.sidebar.delete.worktree.flow.7488ed8711", "View")
				}) : null,
				z ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "destructive",
					size: "sm",
					onClick: () => {
						toast.dismiss(G), U();
					},
					children: translate("auto.components.sidebar.delete.worktree.flow.2b20ce87b3", "Force Delete")
				}) : null,
				B ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "destructive",
					size: "sm",
					onClick: () => {
						toast.dismiss(G), W();
					},
					children: translate("auto.components.sidebar.delete.worktree.failure.archive.waiver", "Delete Anyway")
				}) : null
			]
		})]
	});
}
function showDeleteWorktreeFailureToast({ error: c, canForceDelete: L, forceDeleteReason: R, lockReason: z, hasKnownChanges: B, canWaiveArchiveHook: V, onViewChanges: U, onForceDelete: W, onDeleteAnyway: G, worktreeId: K, worktreeName: q }) {
	let J = getDeleteWorktreeToastCopy(q, R, c, z ?? null), Y = J.isDestructive ? toast.error : toast.info, X = deleteWorktreeFailureToastId(K);
	Y(J.title, {
		id: X,
		description: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeFailureToastBody, {
			description: J.description,
			canForceDelete: L,
			canWaiveArchiveHook: V === !0,
			showViewChanges: !isLockedWorktreeRemovalError(c) || B === !0,
			onViewChanges: U,
			onForceDelete: W,
			onDeleteAnyway: G,
			toastId: X
		}),
		duration: L || V === !0 ? Infinity : 1e4,
		dismissible: !0
	});
}
function viewWorktreeDiff(c, L) {
	activateAndRevealWorktree(c, {
		providesInitialSurface: !0,
		...L ? { executionHostId: L } : {}
	});
	let R = useAppStore.getState();
	R.setRightSidebarTab("source-control"), R.setRightSidebarOpen(!0);
}
function runWorktreeDeleteWithToast(c, R, z = {}) {
	let B = c.id, V = useAppStore.getState().removeWorktree, H = prepareActiveWorktreeFocusAfterDelete(B), U = z.focusSuccessorOnDelete !== !1, W = {
		...z.suppressPreservedBranchToast ? { suppressPreservedBranchToast: !0 } : {},
		...z.snapshotPruneBatchId ? { snapshotPruneBatchId: z.snapshotPruneBatchId } : {}
	}, G = (V, H) => {
		let U = (useAppStore.getState().gitStatusByWorktree[B]?.length ?? 0) > 0;
		showDeleteWorktreeFailureToast({
			error: V,
			canForceDelete: H?.canForceDelete ?? !1,
			canWaiveArchiveHook: H?.canWaiveArchiveHook === !0,
			forceDeleteReason: H?.forceDeleteReason ?? null,
			lockReason: H?.lockReason ?? null,
			hasKnownChanges: U,
			onViewChanges: () => viewWorktreeDiff(B, c.executionHostId),
			onDeleteAnyway: () => K({
				force: z.force === !0,
				allowFailedArchiveHook: !0
			}),
			onForceDelete: () => K({
				force: !0,
				allowUnverifiedPtyStop: !0,
				failedTitle: translate("auto.components.sidebar.delete.worktree.flow.4f3876c0f5", "Force delete failed"),
				withViewAction: !0
			}),
			worktreeId: B,
			worktreeName: R
		});
	}, K = (R) => {
		let V = prepareActiveWorktreeFocusAfterDelete(B), H = R.withViewAction ? { action: {
			label: translate("auto.components.sidebar.delete.worktree.flow.7488ed8711", "View"),
			onClick: () => viewWorktreeDiff(B, c.executionHostId)
		} } : {}, U = (z) => {
			let V = getDeleteStateForWorktreeHost({
				id: B,
				hostId: c.executionHostId ?? void 0
			}, useAppStore.getState().deleteStateByWorktreeId);
			if (V?.canForceDelete === !0 || V?.canWaiveArchiveHook === !0) {
				G(z, V);
				return;
			}
			toast.error(R.failedTitle ?? translate("auto.components.sidebar.delete.worktree.flow.ae57cbf6e4", "Failed to delete workspace"), {
				description: z,
				...H
			});
		};
		useAppStore.getState().removeWorktree(c, R.force, {
			...R.allowUnverifiedPtyStop ? { allowUnverifiedPtyStop: !0 } : {},
			...R.allowFailedArchiveHook ? { allowFailedArchiveHook: !0 } : {}
		}).then((L) => {
			if (!L.ok) {
				U(L.error);
				return;
			}
			V(), z.onForceDeleted?.(c);
		}).catch((c) => U(c instanceof Error ? c.message : String(c)));
	};
	return (Object.keys(W).length > 0 ? V(c, z.force === !0, W) : V(c, z.force === !0)).then((L) => L.ok ? (L.preservedBranch && z.onPreservedBranch?.({
		worktreeId: B,
		branchName: L.preservedBranch.branchName,
		expectedHead: L.preservedBranch.head,
		...L.preservedBranch.hostId ? { hostId: L.preservedBranch.hostId } : {},
		...L.preservedBranch.runtimeEnvironmentId ? { runtimeEnvironmentId: L.preservedBranch.runtimeEnvironmentId } : {}
	}), U && H(), !0) : (G(L.error, getDeleteStateForWorktreeHost({
		id: B,
		hostId: c.executionHostId ?? void 0
	}, useAppStore.getState().deleteStateByWorktreeId)), !1)).catch((c) => (toast.error(translate("auto.components.sidebar.delete.worktree.flow.ae57cbf6e4", "Failed to delete workspace"), { description: c instanceof Error ? c.message : String(c) }), !1));
}
function isStrictDescendantPath(c, L) {
	return normalizeRuntimePathForComparison(c) !== normalizeRuntimePathForComparison(L) && isPathInsideOrEqual(c, L);
}
function clearWorktreeDeleteTargetState(c) {
	let L = useAppStore.getState();
	c.hostId ? L.clearWorktreeDeleteState(c.id, c.hostId) : L.clearWorktreeDeleteState(c.id);
}
async function runWorktreeDeletesInParallel(c, L = {}) {
	let R = Array.from(new Map(c.map((c) => [getWorktreeHostIdentity(c), c])).values()), z = useAppStore.getState().activeWorktreeId, B = z ? prepareActiveWorktreeFocusAfterDelete(z) : null;
	useAppStore.getState().markWorktreesDeleting(R.map((c) => c.hostId ? c : c.id));
	let V = /* @__PURE__ */ new Map();
	for (let c of R) {
		let L = composeWorktreeHostIdentity(c.hostId, c.repoId), R = V.get(L);
		R ? R.push(c) : V.set(L, [c]);
	}
	for (let c of V.values()) c.sort((c, L) => L.path.length - c.path.length);
	let H = [], G = R.length > 1, K = !1, q = R.length > 1 ? beginWorktreeSnapshotPruneBatch() : null, Y = q ? await q : null, X = /* @__PURE__ */ new Map(), Z = async (c, L) => {
		let R = X.get(c), z = () => {}, B = new Promise((c) => {
			z = c;
		}), V = R ? R.then(() => B) : B;
		X.set(c, V), R && await R;
		try {
			return await L();
		} finally {
			z(), X.get(c) === V && X.delete(c);
		}
	}, Q;
	try {
		Q = await Promise.all(Array.from(V.values()).map(async (c) => {
			let R = [], z = [];
			for (let B of c) await Z(B.id, async () => {
				let c = getWorktreeOnHostFromState(useAppStore.getState(), B.id, B.hostId);
				if (!c || c.instanceId !== B.instanceId) {
					clearWorktreeDeleteTargetState(B), K = !0;
					return;
				}
				if (z.some((c) => isStrictDescendantPath(B.path, c.path))) {
					clearWorktreeDeleteTargetState(B);
					return;
				}
				await runWorktreeDeleteWithToast(toWorktreeRemovalTarget(B), B.displayName, {
					...L,
					focusSuccessorOnDelete: !1,
					suppressPreservedBranchToast: G,
					...Y ? { snapshotPruneBatchId: Y.batchId } : {},
					onPreservedBranch: (c) => {
						H.push(c), L.onPreservedBranch?.(c);
					}
				}) ? R.push(toWorktreeRemovalTarget(B)) : z.push(B);
			});
			return R;
		}));
	} finally {
		if (Y) try {
			await Y.finish();
		} catch (c) {
			console.warn("Failed to finish workspace snapshot prune batch:", c);
		}
	}
	K && showWorkspaceListChangedToast();
	let $ = new Set(Q.flat().map((c) => composeWorktreeHostIdentity(c.executionHostId ?? void 0, c.id)));
	if (z) {
		let c = useAppStore.getState();
		getWorktreeOnHostFromState(c, z, c.activeWorkspaceExecutionHostId ?? void 0) || B?.();
	}
	if (G && H.length > 0) {
		let c = new Map(R.map((c, L) => [getWorktreeHostIdentity(c), L]));
		H.sort((L, R) => (c.get(composeWorktreeHostIdentity(L.hostId, L.worktreeId)) ?? 2 ** 53 - 1) - (c.get(composeWorktreeHostIdentity(R.hostId, R.worktreeId)) ?? 2 ** 53 - 1)), showPreservedBranchBatchToast($.size, H);
	}
	return R.filter((c) => $.has(getWorktreeHostIdentity(c))).map(toWorktreeRemovalTarget);
}
function runWorktreeDelete(c, L = {}) {
	let R = useAppStore.getState(), z = getWorktreeOnHostFromState(R, c, L.expectedHostId) ?? null, B = Object.hasOwn(L, "expectedInstanceId") && z?.instanceId !== L.expectedInstanceId;
	if (!z || B) {
		parseWorkspaceKey(c)?.type !== "folder" && showWorkspaceListChangedToast();
		return;
	}
	if (z.isMainWorktree) {
		let c = findRepoForHost(R.repos, z.repoId, {
			hostId: z.hostId,
			settings: R.settings
		}), L = c ? getRepoExecutionHostId(c) : z.hostId;
		R.openModal("confirm-remove-folder", {
			repoId: z.repoId,
			displayName: c?.displayName ?? z.displayName,
			...L ? { hostId: L } : {}
		});
		return;
	}
	z.hostId ? R.clearWorktreeDeleteState(c, z.hostId) : R.clearWorktreeDeleteState(c);
	let V = R.repos.filter((c) => c.id === z.repoId), H = z.hostId ? findRepoForHost(V, z.repoId, { hostId: z.hostId }) : V.length === 1 ? V[0] : null, U = isPairedWebClientWindow() ? { kind: "not-ssh" } : resolveSshWorkspaceForget({
		repo: H,
		sshConnectionStates: R.sshConnectionStates,
		sshTargetLabels: R.sshTargetLabels
	});
	if (U.kind === "ghost" || U.kind === "disconnected") {
		R.openModal("forget-ssh-workspace", {
			worktreeId: c,
			displayName: z.displayName,
			resolution: U
		});
		return;
	}
	let G = getWorkspaceDeleteLineage(z, getAllWorktreesFromState(R), R.worktreeLineageById), J = G.descendants.length > 0;
	if ((R.settings?.skipDeleteWorktreeConfirm ?? !1) && !J) {
		runWorktreeDeleteWithToast(toWorktreeRemovalTarget(z), z.displayName);
		return;
	}
	R.openModal("delete-worktree", {
		worktreeId: c,
		worktreeDeleteIdentities: toWorktreeDeleteIdentities([z]),
		...J ? { lineageDeleteIdentities: toWorktreeDeleteIdentities(G.deleteAllTargets) } : {},
		...J ? { allowSkipConfirm: !1 } : {}
	});
}
function runWorktreeBatchDelete(c, L = {}) {
	let R = useAppStore.getState(), z = resolveWorktreeBatchDeleteTargets(c, (c, L) => getWorktreeOnHostFromState(R, c, L));
	if (!z) return showWorkspaceListChangedToast(), !1;
	if (z.length === 0) return showNoDeletableWorkspacesToast(), !1;
	for (let c of z) c.hostId ? R.clearWorktreeDeleteState(c.id, c.hostId) : R.clearWorktreeDeleteState(c.id);
	let B = z.length === 1 ? getWorkspaceDeleteLineage(z[0], getAllWorktreesFromState(R), R.worktreeLineageById) : null, V = (B?.descendants.length ?? 0) > 0;
	return !L.forceConfirm && z.length === 1 && !V && (R.settings?.skipDeleteWorktreeConfirm ?? !1) ? (runWorktreeDeletesInParallel(z, { onForceDeleted: (c) => L.onDeleted?.([c]) }).then((c) => {
		c.length > 0 && L.onDeleted?.(c);
	}), !0) : z.length === 1 ? (R.openModal("delete-worktree", {
		worktreeId: z[0].id,
		worktreeDeleteIdentities: toWorktreeDeleteIdentities(z),
		...V && B ? { lineageDeleteIdentities: toWorktreeDeleteIdentities(B.deleteAllTargets) } : {},
		...L.forceConfirm || V ? { allowSkipConfirm: !1 } : {},
		...L.onDeleted ? { onDeleted: L.onDeleted } : {},
		...L.forceOnConfirm === !1 ? { forceOnConfirm: !1 } : {}
	}), !0) : (R.openModal("delete-worktree", {
		worktreeIds: z.map((c) => c.id),
		worktreeDeleteIdentities: toWorktreeDeleteIdentities(z),
		allowSkipConfirm: !1,
		...L.onDeleted ? { onDeleted: L.onDeleted } : {},
		...L.forceOnConfirm === !1 ? { forceOnConfirm: !1 } : {}
	}), !0);
}
export { prepareActiveWorktreeFocusAfterDelete as a, toWorktreeDeleteIdentities as c, getWorkspaceDeleteLineage as d, runWorktreeDeleteWithToast as i, showWorkspaceListChangedToast as l, runWorktreeDelete as n, readWorktreeDeleteIdentities as o, runWorktreeDeletesInParallel as r, resolveWorktreeBatchDeleteTargets as s, runWorktreeBatchDelete as t, getDeleteStateForWorktreeHost as u };
