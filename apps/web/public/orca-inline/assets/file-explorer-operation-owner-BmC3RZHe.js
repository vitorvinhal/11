import { i as translate } from "./i18n-CakWKPtl.js";
import { If as getExplicitRuntimeEnvironmentIdForWorktree, Xh as resolveWorktreeOperationRoute, Zp as captureWorktreeOperationGenerationGuard, hb as FLOATING_TERMINAL_WORKTREE_ID, iC as parseExecutionHostId, t as useAppStore, vl as getConnectionIdFromState, vv as parseWorkspaceKey, zf as getSettingsForWorktreeRuntimeOwner } from "./store-C9f8FDJV.js";
function getFileExplorerOperationOwnerFromState(e, d) {
	if (d === "global-floating-terminal") return { kind: "local" };
	let f = d ? parseWorkspaceKey(d) : null;
	if (d && f?.type !== "folder") {
		let l = resolveWorktreeOperationRoute(e, d);
		if (!l) return { kind: "unresolved" };
		if (l.runtimeEnvironmentId) return {
			kind: "runtime",
			environmentId: l.runtimeEnvironmentId,
			executionHostId: l.executionHostId ?? `runtime:${encodeURIComponent(l.runtimeEnvironmentId)}`
		};
		if (l.executionHostId) return operationOwnerFromHostId(l.executionHostId);
	}
	let p = getConnectionIdFromState(e, d ?? null), m = getExplicitRuntimeEnvironmentIdForWorktree(e, d);
	if (p === void 0 && m === null) return { kind: "unresolved" };
	let v = getSettingsForWorktreeRuntimeOwner(e, d), y = p && m === null ? null : v.activeRuntimeEnvironmentId?.trim();
	return y ? {
		kind: "runtime",
		environmentId: y,
		executionHostId: `runtime:${encodeURIComponent(y)}`
	} : p === void 0 ? { kind: "unresolved" } : p ? {
		kind: "ssh",
		connectionId: p
	} : { kind: "local" };
}
function getFileExplorerOperationOwner(e) {
	return getFileExplorerOperationOwnerFromState(useAppStore.getState(), e);
}
function getFileExplorerOperationRoute(e) {
	switch (e.kind) {
		case "local": return {
			settings: { activeRuntimeEnvironmentId: null },
			expectedExecutionHostId: "local"
		};
		case "ssh": return {
			settings: { activeRuntimeEnvironmentId: null },
			connectionId: e.connectionId,
			expectedExecutionHostId: `ssh:${encodeURIComponent(e.connectionId)}`
		};
		case "runtime": {
			let l = parseExecutionHostId(e.executionHostId);
			return {
				settings: { activeRuntimeEnvironmentId: e.environmentId },
				...l?.kind === "ssh" ? { expectedExecutionHostId: l.id } : { expectedExecutionHostId: "local" }
			};
		}
		case "unresolved": return null;
	}
}
function requireMatchingFileExplorerOperationRoute(e, l) {
	if (!l || l.kind === "unresolved") throw Error(getFileExplorerOwnerUnresolvedMessage());
	let u = getFileExplorerOperationOwner(e);
	if (JSON.stringify(u) !== JSON.stringify(l)) throw Error(getFileExplorerOwnerUnresolvedMessage());
	let d = getFileExplorerOperationRoute(l);
	if (!d) throw Error(getFileExplorerOwnerUnresolvedMessage());
	return d;
}
function captureFileExplorerOperationGuard(e, l) {
	if (!e) throw Error(getFileExplorerOwnerUnresolvedMessage());
	let u = requireMatchingFileExplorerOperationRoute(e, l), f = getFileExplorerGenerationRoute(l);
	if (!f) throw Error(getFileExplorerOwnerUnresolvedMessage());
	let h = captureWorktreeOperationGenerationGuard(useAppStore.getState, e, f, () => Error(getFileExplorerOwnerUnresolvedMessage()), () => getFileExplorerGenerationRoute(getFileExplorerOperationOwner(e))), g = getExpectedSshConnectionGeneration(useAppStore.getState(), f), _ = parseExecutionHostId(f.executionHostId);
	if (!_ || _?.kind === "ssh" && g === void 0) throw Error(getFileExplorerOwnerUnresolvedMessage());
	let v = {
		...u,
		expectedExecutionHostId: _.kind === "ssh" ? _.id : "local",
		..._?.kind === "ssh" ? { expectedSshTargetId: _.targetId } : {},
		...g === void 0 ? {} : { expectedSshConnectionGeneration: g }
	};
	return {
		route: v,
		assertCurrent: () => {
			if (h.assertCurrent(), getExpectedSshConnectionGeneration(useAppStore.getState(), f) !== g) throw Error(getFileExplorerOwnerUnresolvedMessage());
			return v;
		}
	};
}
function getExpectedSshConnectionGeneration(e, l) {
	let u = parseExecutionHostId(l.executionHostId);
	if (u?.kind === "ssh") return l.runtimeEnvironmentId ? e.sshStateByEnvironment.get(l.runtimeEnvironmentId)?.connectionStates.get(u.targetId)?.connectionGeneration : e.sshConnectionStates.get(u.targetId)?.connectionGeneration;
}
function getFileExplorerGenerationRoute(e) {
	switch (e?.kind) {
		case "local": return {
			executionHostId: "local",
			runtimeEnvironmentId: null
		};
		case "ssh": return {
			executionHostId: `ssh:${encodeURIComponent(e.connectionId)}`,
			runtimeEnvironmentId: null
		};
		case "runtime": return {
			executionHostId: e.executionHostId,
			runtimeEnvironmentId: e.environmentId
		};
		case "unresolved":
		case void 0: return null;
	}
}
function getFileExplorerOperationExecutionHostId(e) {
	return getFileExplorerGenerationRoute(e)?.executionHostId ?? null;
}
function getFileExplorerOwnerUnresolvedMessage() {
	return translate("auto.components.right.sidebar.fileExplorerOperationOwner.unresolved", "Couldn't determine which host owns this workspace. Check the connection and try again.");
}
function operationOwnerFromHostId(e) {
	let l = parseExecutionHostId(e);
	switch (l?.kind) {
		case "local": return { kind: "local" };
		case "ssh": return {
			kind: "ssh",
			connectionId: l.targetId
		};
		case "runtime": return {
			kind: "runtime",
			environmentId: l.environmentId,
			executionHostId: e
		};
		case void 0: return { kind: "unresolved" };
	}
}
export { getFileExplorerOperationRoute as a, getFileExplorerOperationOwnerFromState as i, getFileExplorerOperationExecutionHostId as n, getFileExplorerOwnerUnresolvedMessage as o, getFileExplorerOperationOwner as r, requireMatchingFileExplorerOperationRoute as s, captureFileExplorerOperationGuard as t };
