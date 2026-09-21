import { h as isDefaultBranchWorkspace, l as revealRepoInProjectFilter, r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { Eg as markOnboardingProjectAdded, iC as parseExecutionHostId, t as useAppStore, tb as relativePathInsideRoot } from "./store-C9f8FDJV.js";
import { a as track } from "./telemetry-DdvWHaqb.js";
function finalizeImportedRepoAfterSkip(u, d) {
	let f = u.worktreesByRepo[d] ?? [];
	u.activeRepoId !== d && u.setActiveRepo(d), revealRepoInProjectFilter(u, d), u.showActiveOnly && u.setShowActiveOnly(!1), f.length > 0 && u.hideDefaultBranchWorkspace && f.every((l) => isDefaultBranchWorkspace(l)) && u.setHideDefaultBranchWorkspace(!1), f.length > 0 && u.alwaysShowDefaultBranchWorkspace === !1 && !u.showSleepingWorkspaces && f.every((e) => e.isMainWorktree) && u.setAlwaysShowDefaultBranchWorkspace(!0);
}
function getProjectDefaultCheckout(e) {
	return e.find((e) => e.isMainWorktree) ?? null;
}
function getProjectWorktreesForHost(e, l) {
	if (!l) return [...e];
	let u = parseExecutionHostId(l);
	return e.filter((e) => u?.kind === "runtime" ? e.runtimeOwnerEnvironmentId ? e.runtimeOwnerEnvironmentId === u.environmentId : e.hostId === l : e.runtimeOwnerEnvironmentId ? !1 : e.hostId ? e.hostId === l : l === "local");
}
function ownerRefreshOptions(e) {
	return {
		requireAuthoritative: !0,
		...e ? { executionHostId: e } : {}
	};
}
function getDetectedProjectDefaultCheckout(e, l) {
	return e?.authoritative === !0 ? getProjectWorktreesForHost(e.worktrees, l).find((e) => e.isMainWorktree) ?? null : null;
}
function hasDetectedHiddenLinkedExternalWorktrees(e, l) {
	return e?.authoritative === !0 ? getProjectWorktreesForHost(e.worktrees, l).some((e) => !e.isMainWorktree && !e.selectedCheckout && !e.visible && e.ownership !== "orca-managed" && e.ownership !== "agent-scratch") : !1;
}
async function revealDetectedHiddenLinkedExternalWorktrees(e, l) {
	let u = useAppStore.getState();
	return hasDetectedHiddenLinkedExternalWorktrees(u.detectedWorktreesByRepo[e], l) ? (l ? await u.updateRepo(e, { externalWorktreeVisibility: "show" }, { hostId: l }) : await u.updateRepo(e, { externalWorktreeVisibility: "show" })) ? await useAppStore.getState().fetchWorktrees(e, ownerRefreshOptions(l)) ? null : "linked_external_refresh_failed" : "show_detected_linked_failed" : null;
}
async function findDetectedDefaultCheckout(e, l) {
	let u = useAppStore.getState(), d = u.detectedWorktreesByRepo[e], f = getDetectedProjectDefaultCheckout(d, l);
	if (!f) return {
		worktree: null,
		reason: d?.authoritative === !0 ? "no_default_checkout" : "no_authoritative_detection"
	};
	if (!f.visible && !(l ? await u.updateRepo(e, { externalWorktreeVisibility: "show" }, { hostId: l }) : await u.updateRepo(e, { externalWorktreeVisibility: "show" }))) return {
		worktree: null,
		reason: "show_detected_default_failed"
	};
	if (!await useAppStore.getState().fetchWorktrees(e, ownerRefreshOptions(l))) return {
		worktree: null,
		reason: "authoritative_refresh_failed"
	};
	let m = getProjectDefaultCheckout(getProjectWorktreesForHost(useAppStore.getState().worktreesByRepo[e] ?? [], l));
	return {
		worktree: m,
		reason: m ? "detected_default_checkout" : "refreshed_default_missing"
	};
}
function resolveInitialCwdForDefaultCheckout(e, l) {
	if (!l) return;
	let u = relativePathInsideRoot(e.path, l);
	return u && u.length > 0 ? l : void 0;
}
async function openProjectDefaultCheckout({ repoId: e, source: l, selectedPath: d, setHideDefaultBranchWorkspace: f, executionHostId: m }) {
	let _ = getProjectDefaultCheckout(getProjectWorktreesForHost(useAppStore.getState().worktreesByRepo[e] ?? [], m)), v = "loaded_default_checkout";
	if (!_) {
		let l = await findDetectedDefaultCheckout(e, m);
		_ = l.worktree, v = l.reason;
	}
	if (_) {
		let h = await revealDetectedHiddenLinkedExternalWorktrees(e, m);
		if (h) {
			track("add_repo_default_checkout_handoff", {
				source: l,
				result: "revealed_project",
				reason: h
			}), finalizeImportedRepoAfterSkip(useAppStore.getState(), e);
			return;
		}
		useAppStore.getState().hideDefaultBranchWorkspace && f(!1), track("add_repo_default_checkout_handoff", {
			source: l,
			result: "opened_default_checkout",
			reason: v
		});
		let g = resolveInitialCwdForDefaultCheckout(_, d);
		g || m ? activateAndRevealWorktree(_.id, {
			...g ? { initialCwd: g } : {},
			...m ? { executionHostId: m } : {}
		}) : activateAndRevealWorktree(_.id);
		return;
	}
	track("add_repo_default_checkout_handoff", {
		source: l,
		result: "revealed_project",
		reason: v
	}), finalizeImportedRepoAfterSkip(useAppStore.getState(), e);
}
async function finishProjectAddWithDefaultCheckout({ repoId: e, source: l, selectedPath: u, closeModal: f, setHideDefaultBranchWorkspace: p, executionHostId: m }) {
	await markOnboardingProjectAdded("addedRepo"), f(), await openProjectDefaultCheckout({
		repoId: e,
		source: l,
		selectedPath: u,
		executionHostId: m,
		setHideDefaultBranchWorkspace: p
	});
}
export { finishProjectAddWithDefaultCheckout as t };
