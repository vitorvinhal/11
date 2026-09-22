import { $_ as getRuntimeGitStatus, ft as clearAutomaticPushTargetUpstreamStatusCache, ht as storeCachedAutomaticPushTargetUpstreamStatus, mt as invalidateAutomaticPushTargetUpstreamStatusCache, pt as getCachedAutomaticPushTargetUpstreamStatus, tv as getRuntimeGitUpstreamStatus } from "./store-C9f8FDJV.js";
var branchLineTotalMergeBaseByWorktree = /* @__PURE__ */ new Map();
function setBranchLineTotalMergeBase(e, d) {
	if (!d) {
		branchLineTotalMergeBaseByWorktree.delete(e);
		return;
	}
	branchLineTotalMergeBaseByWorktree.set(e, d);
}
function getBranchLineTotalMergeBase(e) {
	return branchLineTotalMergeBaseByWorktree.get(e);
}
var MAX_REFRESH_ORDERING_WORKTREES = 1024, strictUpstreamRefreshGenerationByWorktree = /* @__PURE__ */ new Map(), automaticRefreshGenerationByWorktree = /* @__PURE__ */ new Map(), lastAppliedAutomaticGenerationByWorktree = /* @__PURE__ */ new Map(), automaticUpstreamRefreshInFlightByWorktree = /* @__PURE__ */ new Map();
function trimRefreshOrderingState() {
	for (let e of strictUpstreamRefreshGenerationByWorktree.keys()) {
		if (strictUpstreamRefreshGenerationByWorktree.size <= MAX_REFRESH_ORDERING_WORKTREES) break;
		automaticUpstreamRefreshInFlightByWorktree.has(e) || strictUpstreamRefreshGenerationByWorktree.delete(e);
	}
}
function beginAutomaticUpstreamRefresh(e) {
	automaticUpstreamRefreshInFlightByWorktree.set(e, (automaticUpstreamRefreshInFlightByWorktree.get(e) ?? 0) + 1);
	let d = (automaticRefreshGenerationByWorktree.get(e) ?? 0) + 1;
	return automaticRefreshGenerationByWorktree.set(e, d), {
		strictGeneration: strictUpstreamRefreshGenerationByWorktree.get(e) ?? 0,
		automaticGeneration: d
	};
}
function finishAutomaticUpstreamRefresh(e) {
	let d = automaticUpstreamRefreshInFlightByWorktree.get(e) ?? 0;
	d <= 1 ? (automaticUpstreamRefreshInFlightByWorktree.delete(e), automaticRefreshGenerationByWorktree.delete(e), lastAppliedAutomaticGenerationByWorktree.delete(e)) : automaticUpstreamRefreshInFlightByWorktree.set(e, d - 1), trimRefreshOrderingState();
}
function shouldApplyAutomaticUpstreamRefresh(e, d, f) {
	return (strictUpstreamRefreshGenerationByWorktree.get(e) ?? 0) === d.strictGeneration && d.automaticGeneration >= (lastAppliedAutomaticGenerationByWorktree.get(e) ?? 0) && (f?.() ?? !0);
}
function claimAutomaticUpstreamRefreshApply(e, d, f) {
	return shouldApplyAutomaticUpstreamRefresh(e, d, f) ? (lastAppliedAutomaticGenerationByWorktree.set(e, Math.max(lastAppliedAutomaticGenerationByWorktree.get(e) ?? 0, d.automaticGeneration)), !0) : !1;
}
function beginStrictUpstreamRefresh(e) {
	strictUpstreamRefreshGenerationByWorktree.set(e, (strictUpstreamRefreshGenerationByWorktree.get(e) ?? 0) + 1), trimRefreshOrderingState();
}
async function fetchAndApplyAutomaticUpstreamStatus({ settings: e, worktreeId: d, worktreePath: f, connectionId: m, pushTarget: h, deps: g, order: _, shouldApply: v }) {
	if (!shouldApplyAutomaticUpstreamRefresh(d, _, v)) return null;
	let y = await g.fetchUpstreamStatus(d, f, m, h, {
		runtimeTargetSettings: e,
		applyUpstreamStatus: !1
	});
	return y ? claimAutomaticUpstreamRefreshApply(d, _, v) ? (g.setUpstreamStatus(d, y), y) : null : (h && invalidateAutomaticPushTargetUpstreamStatusCache({
		settings: e,
		worktreeId: d,
		worktreePath: f,
		connectionId: m,
		pushTarget: h
	}), null);
}
async function refreshGitStatusForWorktree({ settings: d, worktreeId: p, worktreePath: h, connectionId: g, pushTarget: _, deps: y, request: b }) {
	let x = beginAutomaticUpstreamRefresh(p), S = getBranchLineTotalMergeBase(p);
	try {
		let v = await getRuntimeGitStatus({
			settings: d,
			worktreeId: p,
			worktreePath: h,
			connectionId: g
		}, {
			admissionTier: b?.admissionTier ?? "status",
			...b?.reuseLineStats === !0 ? { reuseLineStats: !0 } : {},
			...b?.signal ? { signal: b.signal } : {},
			...S ? { branchLineTotalMergeBase: S } : {}
		});
		if (!claimAutomaticUpstreamRefreshApply(p, x, b?.shouldApply)) return;
		if (y.setGitStatus(p, v), y.updateWorktreeGitIdentity(p, {
			head: v.head,
			branch: v.branch ?? (v.head ? null : void 0)
		}), b?.onStatusAccepted?.(v), _) {
			if (getCachedAutomaticPushTargetUpstreamStatus({
				settings: d,
				worktreeId: p,
				worktreePath: h,
				connectionId: g,
				pushTarget: _,
				status: v
			})) return;
			let e = await fetchAndApplyAutomaticUpstreamStatus({
				settings: d,
				worktreeId: p,
				worktreePath: h,
				connectionId: g,
				pushTarget: _,
				deps: y,
				order: x,
				shouldApply: b?.shouldApply
			});
			e && storeCachedAutomaticPushTargetUpstreamStatus({
				settings: d,
				worktreeId: p,
				worktreePath: h,
				connectionId: g,
				pushTarget: _,
				status: v
			}, e);
			return;
		}
		if (v.upstreamStatus) {
			if (v.upstreamStatus.ahead > 0 && v.upstreamStatus.behind > 0 && v.upstreamStatus.behindCommitsArePatchEquivalent === void 0) {
				await fetchAndApplyAutomaticUpstreamStatus({
					settings: d,
					worktreeId: p,
					worktreePath: h,
					connectionId: g,
					deps: y,
					order: x,
					shouldApply: b?.shouldApply
				});
				return;
			}
			claimAutomaticUpstreamRefreshApply(p, x, b?.shouldApply) && y.setUpstreamStatus(p, v.upstreamStatus);
			return;
		}
		await fetchAndApplyAutomaticUpstreamStatus({
			settings: d,
			worktreeId: p,
			worktreePath: h,
			connectionId: g,
			pushTarget: _,
			deps: y,
			order: x,
			shouldApply: b?.shouldApply
		});
	} finally {
		finishAutomaticUpstreamRefresh(p);
	}
}
async function refreshGitStatusForWorktreeStrict({ settings: f, worktreeId: p, worktreePath: m, connectionId: g, pushTarget: _, deps: y }) {
	beginStrictUpstreamRefresh(p), clearAutomaticPushTargetUpstreamStatusCache();
	let b = getBranchLineTotalMergeBase(p), x = await getRuntimeGitStatus({
		settings: f,
		worktreeId: p,
		worktreePath: m,
		connectionId: g
	}, {
		admissionTier: "interactive",
		bypassEffectiveUpstreamNegativeCache: !0,
		...b ? { branchLineTotalMergeBase: b } : {}
	});
	if (y.setGitStatus(p, x), y.updateWorktreeGitIdentity(p, {
		head: x.head,
		branch: x.branch ?? (x.head ? null : void 0)
	}), _) {
		let e = await getRuntimeGitUpstreamStatus({
			settings: f,
			worktreeId: p,
			worktreePath: m,
			connectionId: g
		}, _);
		return y.setUpstreamStatus(p, e), {
			status: x,
			upstreamStatus: e
		};
	}
	if (x.upstreamStatus) {
		if (x.upstreamStatus.ahead > 0 && x.upstreamStatus.behind > 0 && x.upstreamStatus.behindCommitsArePatchEquivalent === void 0) {
			let e = await getRuntimeGitUpstreamStatus({
				settings: f,
				worktreeId: p,
				worktreePath: m,
				connectionId: g
			}, void 0);
			return y.setUpstreamStatus(p, e), {
				status: x,
				upstreamStatus: e
			};
		}
		return y.setUpstreamStatus(p, x.upstreamStatus), {
			status: x,
			upstreamStatus: x.upstreamStatus
		};
	}
	let S = await getRuntimeGitUpstreamStatus({
		settings: f,
		worktreeId: p,
		worktreePath: m,
		connectionId: g
	}, void 0);
	return y.setUpstreamStatus(p, S), {
		status: x,
		upstreamStatus: S
	};
}
export { refreshGitStatusForWorktreeStrict as n, setBranchLineTotalMergeBase as r, refreshGitStatusForWorktree as t };
