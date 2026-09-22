import { Av as projectHostSetupProjectionFromRepos, JS as LOCAL_EXECUTION_HOST_ID, cy as getRepoHostIdentity, oC as toRuntimeExecutionHostId, sC as toSshExecutionHostId, t as useAppStore } from "./store-C9f8FDJV.js";
function repoWithCapturedOwner(e, r) {
	let o = r.sshConnectionId?.trim();
	if (o) return {
		...e,
		executionHostId: toSshExecutionHostId(o)
	};
	if (r.runtimeEnvironmentId !== void 0) {
		let a = r.runtimeEnvironmentId?.trim();
		return {
			...e,
			executionHostId: a ? toRuntimeExecutionHostId(a) : LOCAL_EXECUTION_HOST_ID
		};
	}
	return e;
}
function upsertAddedRepoWithProjectHostSetup(n, i = {}) {
	let a = useAppStore.getState(), s = repoWithCapturedOwner(n, i), c = getRepoHostIdentity(s), l = a.repos.some((e) => getRepoHostIdentity(e) === c), u = l ? a.repos.map((e) => getRepoHostIdentity(e) === c ? s : e) : [...a.repos, s], d = projectHostSetupProjectionFromRepos(u);
	return useAppStore.setState({
		repos: u,
		projects: d.projects,
		projectHostSetups: d.setups
	}), {
		alreadyPresent: l,
		repo: s
	};
}
function capturedAddRepoExecutionHostId(e, r) {
	return r ? toSshExecutionHostId(r) : e === void 0 ? void 0 : e ? toRuntimeExecutionHostId(e) : LOCAL_EXECUTION_HOST_ID;
}
function worktreeRefreshOptions(e, n) {
	let r = capturedAddRepoExecutionHostId(e, n);
	return {
		requireAuthoritative: !0,
		...r ? { executionHostId: r } : {}
	};
}
export { upsertAddedRepoWithProjectHostSetup as n, worktreeRefreshOptions as t };
