import { i as translate } from "./i18n-CakWKPtl.js";
import { Ff as getExecutionHostIdForWorktree, JS as LOCAL_EXECUTION_HOST_ID, OC as BROWSER_SCREENCAST_RUNTIME_CAPABILITY, W as getClientCreationActionPolicy, Xh as resolveWorktreeOperationRoute, bi as SEARCH_ENGINE_LABELS, hb as FLOATING_TERMINAL_WORKTREE_ID, iC as parseExecutionHostId, t as useAppStore, tC as isRuntimeOwnedSshTargetId } from "./store-C9f8FDJV.js";
import { f as createWebRuntimeSessionBrowserTab } from "./web-runtime-session-CeAC5QPx.js";
function resolveSshWorkspaceBrowserRouteEligibility(e, d) {
	let f = parseExecutionHostId(e);
	return f?.kind !== "ssh" || isRuntimeOwnedSshTargetId(f.targetId) ? null : {
		targetId: f.targetId,
		eligible: d?.browserSshWorkspaceRoutingEnabled !== !1 && !d?.browserSshWorkspaceRoutingDisabledTargetIds?.includes(f.targetId)
	};
}
function isExpectedRuntimeBrowserRoute(e, d, f, p, m) {
	if (d.state !== "enabled" || p === "global-floating-terminal" || !f) return !1;
	let h = m.trim(), g = f.runtimeEnvironmentId?.trim() || null, _ = e.runtimeStatusByEnvironmentId?.get(h)?.status?.capabilities;
	if (g !== h || !_?.includes("browser.screencast.v1")) return !1;
	let v = parseExecutionHostId(f.executionHostId);
	return !f.executionHostId || !!(v && (v.kind !== "runtime" || v.environmentId === g));
}
function canOpenWorkspaceBrowserTabOnRuntime(e, d, f) {
	let p = getClientCreationActionPolicy(e, d)["managed-browser"];
	return isExpectedRuntimeBrowserRoute(e, p, resolveWorktreeOperationRoute(e, d), d, f);
}
function isExpectedSshBrowserRoute(e, f, p, m, h) {
	if (f.state !== "enabled" || m === "global-floating-terminal" || !p) return !1;
	let g = h.trim(), _ = resolveSshWorkspaceBrowserRouteEligibility(getExecutionHostIdForWorktree(e, m), e.settings), v = parseExecutionHostId(p.executionHostId);
	return !!g && p.runtimeEnvironmentId === null && _?.eligible === !0 && _.targetId === g && v?.kind === "ssh" && v.targetId === g;
}
function canOpenWorkspaceBrowserTabOnSsh(e, d, f) {
	let p = getClientCreationActionPolicy(e, d)["managed-browser"];
	return isExpectedSshBrowserRoute(e, p, resolveWorktreeOperationRoute(e, d), d, f);
}
function urlTabTitle(e) {
	try {
		let d = new URL(e);
		return `${d.host}${d.pathname === "/" ? "" : d.pathname}`;
	} catch {
		return null;
	}
}
function intentPresentation(d, f) {
	if (d.kind === "url") return {
		error: translate("auto.lib.workspace.browser.tab.open.urlFailed", "Unable to open URL."),
		title: urlTabTitle(f) ?? translate("auto.components.tab.bar.TabBarCreateEntry.7cdf8ee0c8", "Open URL")
	};
	let p = SEARCH_ENGINE_LABELS[d.engine];
	return {
		error: translate("auto.lib.workspace.browser.tab.open.searchFailed", "Unable to search with {{value0}}.", { value0: p }),
		title: translate("auto.components.tab.bar.TabBarCreateEntry.searchProvider", "Search {{value0}}", { value0: p })
	};
}
function openFailure(e, d, f) {
	return console.warn(`[workspace-browser-tab-open] ${d}`), Error(e, { cause: Error(d, f === void 0 ? void 0 : { cause: f }) });
}
function validateTarget(e) {
	try {
		let d = new URL(e);
		return (d.protocol === "http:" || d.protocol === "https:") && !!d.hostname;
	} catch {
		return !1;
	}
}
function createClientBrowserTab(e, d, f, p) {
	try {
		e.createBrowserTab(d.workspaceId, d.url, {
			activate: d.focusOnCreate !== !1,
			browserRuntimeEnvironmentId: null,
			focusAddressBar: !1,
			sessionProfileId: e.defaultBrowserSessionProfileIdByHostId[f] ?? e.defaultBrowserSessionProfileId,
			targetGroupId: d.targetGroupId,
			title: p.title
		});
	} catch (e) {
		throw openFailure(p.error, "client tab creation rejected", e);
	}
}
function assertManagedBrowserEnabled(e, d) {
	if (e.state !== "enabled") throw openFailure(d.error, e.reason);
}
async function openWorkspaceBrowserTab(e) {
	let d = intentPresentation(e.intent, e.url);
	if (!validateTarget(e.url)) throw openFailure(d.error, "target is not an http(s) URL");
	let p = useAppStore.getState(), g = getClientCreationActionPolicy(p, e.workspaceId)["managed-browser"];
	assertManagedBrowserEnabled(g, d);
	let _ = resolveWorktreeOperationRoute(p, e.workspaceId);
	if (!_) throw openFailure(d.error, "no active worktree route");
	let y = _.runtimeEnvironmentId?.trim() || null, b = e.expectedRuntimeEnvironmentId === void 0 ? null : e.expectedRuntimeEnvironmentId.trim(), x = e.expectedSshConnectionId === void 0 ? null : e.expectedSshConnectionId.trim();
	if (b !== null && x !== null) throw openFailure(d.error, "browser owner assertion is ambiguous");
	if (b !== null && !isExpectedRuntimeBrowserRoute(p, g, _, e.workspaceId, b)) throw openFailure(d.error, "asserted runtime cannot provide this managed browser");
	if (x !== null && !isExpectedSshBrowserRoute(p, g, _, e.workspaceId, x)) throw openFailure(d.error, "asserted SSH connection cannot provide this browser");
	let S = parseExecutionHostId(_.executionHostId);
	if (!y) {
		if (!S || S.kind === "runtime") throw openFailure(d.error, `unresolved client host: ${_.executionHostId}`);
		createClientBrowserTab(p, e, S.id, d);
		return;
	}
	if (_.executionHostId && (!S || S.kind === "runtime" && S.environmentId !== y)) throw openFailure(d.error, `host ${_.executionHostId} does not own runtime ${y}`);
	if (b === null && g.provider === "local-client") {
		createClientBrowserTab(p, e, S && S.kind !== "runtime" ? S.id : LOCAL_EXECUTION_HOST_ID, d);
		return;
	}
	let C = !1;
	try {
		C = await createWebRuntimeSessionBrowserTab({
			worktreeId: e.workspaceId,
			environmentId: y,
			url: e.url,
			targetGroupId: e.targetGroupId,
			...b === null ? {} : { waitForRegistration: !0 },
			...e.placementPreference === void 0 ? {} : { placementPreference: e.placementPreference },
			...e.focusOnCreate === void 0 ? {} : { focusOnCreate: e.focusOnCreate },
			selectWorktree: e.selectWorktree !== !1,
			stagedTitle: d.title,
			stagedFocusAddressBar: !1,
			failureLogMode: "operation-only"
		});
	} catch (e) {
		throw openFailure(d.error, "runtime browser tab creation failed", e);
	}
	if (!C) throw openFailure(d.error, "runtime browser tab creation was unavailable");
}
export { resolveSshWorkspaceBrowserRouteEligibility as i, canOpenWorkspaceBrowserTabOnSsh as n, openWorkspaceBrowserTab as r, canOpenWorkspaceBrowserTabOnRuntime as t };
