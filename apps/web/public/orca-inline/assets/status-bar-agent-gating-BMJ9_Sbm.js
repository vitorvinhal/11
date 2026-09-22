import { Cg as normalizeGlobalWindowsRuntimeDefault, Gv as callRuntimeRpc, Yv as getActiveRuntimeTarget, ey as RuntimeRpcCallError } from "./store-C9f8FDJV.js";
var REMOTE_ACCOUNTS_FIRST_SNAPSHOT_TIMEOUT_MS = 15e3, REMOTE_ACCOUNT_MUTATION_TIMEOUT_MS = 3e4, pendingProviderAccountsSnapshots = /* @__PURE__ */ new Map();
function getProviderAccountsOwnerKey(e) {
	let p = getActiveRuntimeTarget(e);
	return p.kind === "local" ? "local" : `environment:${p.environmentId}`;
}
function hasRemoteProviderAccountOwner(e) {
	return getActiveRuntimeTarget(e).kind === "environment";
}
function emptyClaudeAccountsState() {
	return {
		accounts: [],
		activeAccountId: null,
		activeAccountIdsByRuntime: {
			host: null,
			wsl: {}
		}
	};
}
function emptyCodexAccountsState() {
	return {
		accounts: [],
		activeAccountId: null,
		activeAccountIdsByRuntime: {
			host: null,
			wsl: {}
		}
	};
}
function providerAccountsLoadError(e, p) {
	let m = String(p?.message ?? p);
	return /* @__PURE__ */ Error(`Could not load ${e} accounts: ${m}`);
}
function watchProviderAccounts(e, p) {
	let _ = getActiveRuntimeTarget(e);
	if (_.kind === "local") {
		let e = !1;
		return Promise.allSettled([window.api.claudeAccounts.list(), window.api.codexAccounts.list()]).then(([m, h]) => {
			if (e) return;
			let g = m.status === "rejected" ? providerAccountsLoadError("Claude", m.reason) : null, _ = h.status === "rejected" ? providerAccountsLoadError("Codex", h.reason) : null;
			if (g && _) {
				let e = [g, _];
				p.onError(AggregateError(e, e.map((e) => e.message).join(" ")));
				return;
			}
			let v = [];
			g && v.push("claude"), _ && v.push("codex"), p.onSnapshot({
				claude: m.status === "fulfilled" ? m.value : emptyClaudeAccountsState(),
				codex: h.status === "fulfilled" ? h.value : emptyCodexAccountsState(),
				rateLimits: null,
				...v.length > 0 ? { failedProviders: v } : {}
			});
			for (let m of [g, _]) m && !e && p.onError(m);
		}), { close: () => {
			e = !0;
		} };
	}
	let v = !1, y = null, b = !1, x = window.setTimeout(() => {
		!v && !b && p.onError(/* @__PURE__ */ Error("Timed out waiting for remote provider accounts."));
	}, REMOTE_ACCOUNTS_FIRST_SNAPSHOT_TIMEOUT_MS);
	return window.api.runtimeEnvironments.subscribe({
		selector: _.environmentId,
		method: "accounts.subscribe",
		timeoutMs: REMOTE_ACCOUNTS_FIRST_SNAPSHOT_TIMEOUT_MS
	}, {
		onResponse: (e) => {
			if (v) return;
			let m = e;
			if (m.ok === !1) {
				p.onError(new RuntimeRpcCallError(m));
				return;
			}
			let g = m.result;
			(g.type === "ready" || g.type === "snapshot") && g.snapshot && (b = !0, p.onSnapshot(g.snapshot));
		},
		onError: (e) => {
			v || p.onError(Error(e.message));
		},
		onClose: () => {
			!v && !b && p.onError(/* @__PURE__ */ Error("Remote provider account subscription closed."));
		}
	}).then((e) => {
		y = e.unsubscribe, v && y();
	}).catch((e) => {
		v || p.onError(e);
	}), { close: () => {
		v = !0, window.clearTimeout(x), y?.();
	} };
}
function fetchProviderAccountsSnapshot(e) {
	let p = getProviderAccountsOwnerKey(e), m = pendingProviderAccountsSnapshots.get(p);
	if (m) return m;
	let h = new Promise((p, m) => {
		let h = watchProviderAccounts(e, {
			onSnapshot: (e) => {
				h.close(), p(e);
			},
			onError: (e) => {
				h.close(), m(e instanceof Error ? e : Error(String(e)));
			}
		});
	});
	pendingProviderAccountsSnapshots.set(p, h);
	let g = () => {
		pendingProviderAccountsSnapshots.get(p) === h && pendingProviderAccountsSnapshots.delete(p);
	};
	return h.then(g, g), h;
}
async function selectClaudeProviderAccount(e, h) {
	let g = getActiveRuntimeTarget(e);
	return g.kind === "environment" ? callRuntimeRpc(g, "accounts.selectClaude", { accountId: h.accountId }, { timeoutMs: REMOTE_ACCOUNT_MUTATION_TIMEOUT_MS }) : window.api.claudeAccounts.select(h);
}
async function selectCodexProviderAccount(e, h) {
	let g = getActiveRuntimeTarget(e);
	return g.kind === "environment" ? callRuntimeRpc(g, "accounts.selectCodex", { accountId: h.accountId }, { timeoutMs: REMOTE_ACCOUNT_MUTATION_TIMEOUT_MS }) : window.api.codexAccounts.select(h);
}
async function removeClaudeProviderAccount(e, h) {
	let g = getActiveRuntimeTarget(e);
	return g.kind === "environment" ? callRuntimeRpc(g, "accounts.removeClaude", { accountId: h }, { timeoutMs: REMOTE_ACCOUNT_MUTATION_TIMEOUT_MS }) : window.api.claudeAccounts.remove({ accountId: h });
}
async function removeCodexProviderAccount(e, h) {
	let g = getActiveRuntimeTarget(e);
	return g.kind === "environment" ? callRuntimeRpc(g, "accounts.removeCodex", { accountId: h }, { timeoutMs: REMOTE_ACCOUNT_MUTATION_TIMEOUT_MS }) : window.api.codexAccounts.remove({ accountId: h });
}
function resolveLocalAccountRuntimeTarget(p, m = process.platform) {
	if (p.localAccountRuntime === "host") return {
		runtime: "host",
		wslDistro: null
	};
	if (p.localAccountRuntime === "wsl") return {
		runtime: "wsl",
		wslDistro: normalizeDistro(p.localAccountWslDistro)
	};
	if (m !== "win32") return {
		runtime: "host",
		wslDistro: null
	};
	let h = normalizeGlobalWindowsRuntimeDefault(p.localWindowsRuntimeDefault);
	return h.kind === "wsl" ? {
		runtime: "wsl",
		wslDistro: h.distro
	} : {
		runtime: "host",
		wslDistro: null
	};
}
function normalizeDistro(e) {
	return e?.trim() || null;
}
var CLI_GATED_ITEMS = new Set([
	"claude",
	"codex",
	"gemini",
	"kimi",
	"antigravity",
	"grok"
]);
function isStatusBarItemAvailable(e, p) {
	return !CLI_GATED_ITEMS.has(e) || p === null ? !0 : p.includes(e);
}
export { fetchProviderAccountsSnapshot as a, removeCodexProviderAccount as c, watchProviderAccounts as d, emptyCodexAccountsState as i, selectClaudeProviderAccount as l, resolveLocalAccountRuntimeTarget as n, hasRemoteProviderAccountOwner as o, emptyClaudeAccountsState as r, removeClaudeProviderAccount as s, isStatusBarItemAvailable as t, selectCodexProviderAccount as u };
