import { iC as parseExecutionHostId } from "./store-C9f8FDJV.js";
function isDesktopOwnedHost(r) {
	return parseExecutionHostId(r)?.kind !== "runtime";
}
function getRepoBackedProviderToolStatus(e, r) {
	return r ? e === "github" ? r.gh : Object.hasOwn(r, "glab") ? r.glab ?? {
		installed: !1,
		authenticated: !1
	} : "unsupported" : null;
}
function getProviderReason(e) {
	return e === "unsupported" ? "unsupported-provider" : e.installed ? e.authenticated ? null : "missing-provider-auth" : "unavailable-source-tool";
}
function getRepoBackedProviderAvailability(e) {
	return e.contexts.flatMap((i) => {
		let a = isDesktopOwnedHost(i.hostId) ? {
			checked: e.preflightReady,
			status: e.preflightStatus
		} : e.runtimePreflightStatusByHostId?.get(i.hostId);
		if (!a?.checked) return [];
		let o = getRepoBackedProviderToolStatus(e.provider, a.status), s = o ? getProviderReason(o) : null;
		return s ? [{
			hostId: i.hostId,
			reason: s
		}] : [];
	});
}
export { getRepoBackedProviderAvailability as t };
