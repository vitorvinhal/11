import { i as translate } from "./i18n-CakWKPtl.js";
import { Ah as withWorktreeSleepTeardown, Eh as clearWorktreeSleepIntent, Oh as markWorktreeSleepIntent, qp as VIRTUALIZED_SCROLL_ANCHOR_RECORD_EVENT, t as useAppStore } from "./store-C9f8FDJV.js";
import { n as toast } from "./dist-E3opdjfr.js";
async function runSleepWorktree(e) {
	await runSleepWorktrees([e]);
}
function getSidebarWorktreeOptions(e) {
	return Array.from(document.querySelectorAll("[data-worktree-id]")).filter((r) => r.dataset.worktreeId === e);
}
function isPinnedSidebarWorktreeOption(e) {
	return e.dataset.worktreeRowKey?.startsWith("pinned:") === !0;
}
function findPrimarySidebarWorktreeOption(e) {
	let r = getSidebarWorktreeOptions(e);
	return r.find((e) => e.querySelector("[data-worktree-card-active=\"primary\"]")) ?? r.find((e) => !isPinnedSidebarWorktreeOption(e)) ?? r[0] ?? null;
}
function findSidebarWorktreeRow(e, r) {
	let i = getSidebarWorktreeOptions(e);
	return (r ? i.find((e) => e.dataset.worktreeRowKey === r) ?? null : findPrimarySidebarWorktreeOption(e) ?? null)?.closest("[data-worktree-virtual-row]") ?? null;
}
function preserveSidebarWorktreePosition(e) {
	if (typeof document > "u") return () => {};
	let r = () => document.querySelector("[data-worktree-sidebar]"), i = r(), a = findPrimarySidebarWorktreeOption(e), s = a?.dataset.worktreeRowKey, c = a?.closest("[data-worktree-virtual-row]") ?? null;
	if (!i || !c) return () => {};
	i.dispatchEvent(new Event(VIRTUALIZED_SCROLL_ANCHOR_RECORD_EVENT));
	let l = i.scrollTop, u = i.scrollHeight, d = c.getBoundingClientRect().top;
	return () => {
		let i = 0, a = () => {
			let o = r();
			if (!o) {
				i += 1, i < 12 && window.requestAnimationFrame(a);
				return;
			}
			let c = findSidebarWorktreeRow(e, s);
			if (!c) o.scrollTop = Math.max(0, l + o.scrollHeight - u);
			else {
				let e = c.getBoundingClientRect().top - d;
				Math.abs(e) > 1 && (o.scrollTop += e);
			}
			i += 1, i < 12 && window.requestAnimationFrame(a);
		};
		window.requestAnimationFrame(a);
	};
}
function describeSleepFailure(r) {
	let i = r instanceof Error ? r.message : String(r);
	return i.includes("legacy") ? translate("auto.components.sidebar.sleep.worktree.flow.legacy.unverified", "The older host runtime could not confirm terminal shutdown. The workspace was kept open; update the host and try again.") : i.includes("terminal_") || i.includes("runtime") || i.includes("connection") || i.includes("Daemon") ? translate("auto.components.sidebar.sleep.worktree.flow.host.unverified", "The host could not confirm terminal shutdown. The workspace was kept open; check the connection and try again.") : translate("auto.components.sidebar.sleep.worktree.flow.retry", "The workspace was kept open. Try again; if the problem continues, check the host connection.");
}
async function runSleepWorktrees(o) {
	if (o.length === 0) return;
	let { activeWorktreeId: l, setActiveWorktree: u, shutdownWorktreeBrowsers: d, shutdownWorktreeTerminals: f } = useAppStore.getState(), p = l && o.includes(l) ? l : null;
	if (p) {
		let e = preserveSidebarWorktreePosition(p);
		markWorktreeSleepIntent(p), u(null), e();
	}
	let m = [], h = /* @__PURE__ */ new Set();
	try {
		for (let e of o) {
			markWorktreeSleepIntent(e);
			try {
				await withWorktreeSleepTeardown(e, () => d(e));
			} catch (r) {
				console.error("[sleep-worktree] browser shutdown failed", {
					worktreeId: e,
					error: r
				}), h.add(e), m.push(describeSleepFailure(r));
				continue;
			}
			try {
				await withWorktreeSleepTeardown(e, async () => {
					await f(e, { keepIdentifiers: !0 }), typeof window < "u" && window.api?.ephemeralVm?.suspendWorkspace && await window.api.ephemeralVm.suspendWorkspace({ workspaceId: e });
				}), useAppStore.getState().activeWorktreeId === e && clearWorktreeSleepIntent(e);
			} catch (r) {
				console.error("[sleep-worktree] terminal or host suspension failed", {
					worktreeId: e,
					error: r
				}), h.add(e), m.push(describeSleepFailure(r));
			}
		}
	} finally {
		for (let e of h) clearWorktreeSleepIntent(e);
		p && h.has(p) && u(p);
	}
	m.length > 0 && toast.error(o.length === 1 ? translate("auto.components.sidebar.sleep.worktree.flow.8bc3fc0671", "Failed to sleep workspace") : translate("auto.components.sidebar.sleep.worktree.flow.c460fecc4a", "Failed to sleep some workspaces"), { description: m.join("\n") });
}
export { runSleepWorktrees as n, runSleepWorktree as t };
