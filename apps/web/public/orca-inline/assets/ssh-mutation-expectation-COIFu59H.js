import { Xh as resolveWorktreeOperationRoute, iC as parseExecutionHostId, sC as toSshExecutionHostId } from "./store-C9f8FDJV.js";
var SSH_OWNER_CHANGED_MESSAGE = "Couldn't verify the SSH connection. Reconnect the host and try again.";
function captureDirectSshMutationExpectation(e, n, i) {
	let a = i ? e.sshStateByEnvironment?.get(i)?.connectionStates.get(n)?.connectionGeneration : e.sshConnectionStates.get(n)?.connectionGeneration;
	if (a === void 0) throw Error(SSH_OWNER_CHANGED_MESSAGE);
	return {
		expectedExecutionHostId: toSshExecutionHostId(n),
		expectedSshTargetId: n,
		expectedSshConnectionGeneration: a
	};
}
function captureWorktreeSshMutationExpectation(r, i) {
	let a = resolveWorktreeOperationRoute(r, i), o = parseExecutionHostId(a?.executionHostId);
	if (o?.kind === "local" || o?.kind === "runtime") return { expectedExecutionHostId: "local" };
	if (o?.kind !== "ssh") throw Error(SSH_OWNER_CHANGED_MESSAGE);
	let s = a?.runtimeEnvironmentId ? r.sshStateByEnvironment.get(a.runtimeEnvironmentId)?.connectionStates.get(o.targetId)?.connectionGeneration : r.sshConnectionStates.get(o.targetId)?.connectionGeneration;
	if (s === void 0) throw Error(SSH_OWNER_CHANGED_MESSAGE);
	return {
		expectedExecutionHostId: o.id,
		expectedSshTargetId: o.targetId,
		expectedSshConnectionGeneration: s
	};
}
export { captureWorktreeSshMutationExpectation as n, captureDirectSshMutationExpectation as t };
