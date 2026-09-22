import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { oC as toRuntimeExecutionHostId } from "./store-C9f8FDJV.js";
var MonitorSmartphone = createLucideIcon("monitor-smartphone", [
	["path", {
		d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
		key: "10dyio"
	}],
	["path", {
		d: "M10 19v-3.96 3.15",
		key: "1irgej"
	}],
	["path", {
		d: "M7 19h5",
		key: "qswx4l"
	}],
	["rect", {
		width: "6",
		height: "10",
		x: "16",
		y: "12",
		rx: "2",
		key: "1egngj"
	}]
]), DEFAULT_DEBOUNCE_MS = 250, DEFAULT_MIN_INTERVAL_MS = 5e3, DEFAULT_REFRESH_CONCURRENCY = 5;
async function refreshRuntimeProjectWorktrees(e, n, r, i = DEFAULT_REFRESH_CONCURRENCY) {
	let o = 0, s = [], c = [...new Set(n.map((e) => e.id))], l = Math.min(i, c.length), u = toRuntimeExecutionHostId(e);
	if (await Promise.all(Array.from({ length: l }, async () => {
		for (; o < c.length;) {
			let e = o;
			o += 1;
			let t = c[e];
			try {
				await r(t, {
					executionHostId: u,
					suppressRemoteLineageRefresh: !0
				});
			} catch (e) {
				s.push({
					repoId: t,
					error: e
				});
			}
		}
	})), s.length > 0) throw AggregateError(s.map((e) => e.error), `Failed to refresh ${s.length} runtime project worktree(s): ${s.map((e) => e.repoId).join(", ")}`);
}
async function refreshRuntimeProjectWorktreesAndLineage(e, n, r, i, a = 15) {
	let s = toRuntimeExecutionHostId(e), c = null;
	try {
		await refreshRuntimeProjectWorktrees(e, n, r, a);
	} catch (e) {
		c = { error: e };
	}
	try {
		await i({ executionHostId: s });
	} catch (e) {
		throw c ? AggregateError([c.error, e], "Failed to refresh runtime project worktrees and lineage") : e;
	}
	if (c) throw c.error;
}
function createRuntimeProjectRefreshScheduler(e) {
	let t = e.debounceMs ?? DEFAULT_DEBOUNCE_MS, n = e.minIntervalMs ?? DEFAULT_MIN_INTERVAL_MS, a = e.now ?? Date.now, o = /* @__PURE__ */ new Map(), s = !1, c = (e) => {
		let t = o.get(e);
		return t || (t = {
			inFlight: !1,
			lastStartedAt: 0,
			pending: !1,
			timer: null
		}, o.set(e, t)), t;
	}, l = (e, r) => {
		if (s || r.inFlight || r.timer) return;
		let i = r.lastStartedAt > 0 ? a() - r.lastStartedAt : n, o = Math.max(0, n - i), c = Math.max(t, o);
		r.timer = setTimeout(() => {
			r.timer = null, u(e, r);
		}, c);
	}, u = async (t, n) => {
		if (!(s || !n.pending)) {
			n.pending = !1, n.inFlight = !0, n.lastStartedAt = a();
			try {
				await e.refresh(t);
			} catch (t) {
				e.onError?.(t);
			} finally {
				n.inFlight = !1, n.pending && l(t, n);
			}
		}
	};
	return {
		request: (e) => {
			let t = e.trim();
			if (!t || s) return;
			let n = c(t);
			n.pending = !0, l(t, n);
		},
		stop: () => {
			s = !0;
			for (let e of o.values()) e.timer && clearTimeout(e.timer);
			o.clear();
		}
	};
}
export { refreshRuntimeProjectWorktreesAndLineage as n, MonitorSmartphone as r, createRuntimeProjectRefreshScheduler as t };
