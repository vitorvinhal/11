import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { Ff as getExecutionHostIdForWorktree, Gv as callRuntimeRpc, OC as BROWSER_SCREENCAST_RUNTIME_CAPABILITY, Sy as toRuntimeWorktreeSelector, V as RUNTIME_BROWSER_UNAVAILABLE_MESSAGE, Wv as assertRuntimeEnvironmentCapability, Xv as runtimeTargetForExecutionHostId, ey as RuntimeRpcCallError, t as useAppStore } from "./store-C9f8FDJV.js";
var WORKSPACE_PORT_PLATFORMS = new Set([
	"aix",
	"android",
	"cygwin",
	"darwin",
	"freebsd",
	"haiku",
	"linux",
	"netbsd",
	"openbsd",
	"sunos",
	"unknown",
	"win32"
]), WORKSPACE_PORT_PROTOCOLS = new Set([
	"http",
	"https",
	"unknown"
]);
function isRecord(y) {
	return typeof y == "object" && !!y;
}
function isOptionalString(y) {
	return y === void 0 || typeof y == "string";
}
function isOptionalFiniteNumber(y) {
	return y === void 0 || typeof y == "number" && Number.isFinite(y);
}
function isWorkspacePortOwner(y) {
	return isRecord(y) ? typeof y.worktreeId == "string" && typeof y.repoId == "string" && typeof y.displayName == "string" && typeof y.path == "string" && (y.confidence === "cwd" || y.confidence === "command" || y.confidence === "none") : !1;
}
function isWorkspacePort(y) {
	return !isRecord(y) || typeof y.id != "string" || typeof y.bindHost != "string" || typeof y.connectHost != "string" || typeof y.port != "number" || !Number.isFinite(y.port) || !isOptionalFiniteNumber(y.pid) || !isOptionalString(y.processName) || !WORKSPACE_PORT_PROTOCOLS.has(y.protocol) ? !1 : y.kind === "workspace" ? isWorkspacePortOwner(y.owner) && isOptionalString(y.advertisedUrl) : y.kind === "container" || y.kind === "external";
}
function requireWorkspacePortScanResult(y) {
	if (!isRecord(y) || !Array.isArray(y.ports) || !y.ports.every(isWorkspacePort) || !WORKSPACE_PORT_PLATFORMS.has(y.platform) || typeof y.scannedAt != "number" || !Number.isFinite(y.scannedAt) || "unavailableReason" in y && y.unavailableReason !== void 0 && typeof y.unavailableReason != "string") throw Error("Workspace port scan returned an invalid response.");
	return y;
}
async function runWorkspacePortScanForTarget(y, J) {
	let Y = J ? { repoId: J } : {};
	if (y.kind === "local") return requireWorkspacePortScanResult(await window.api.workspacePorts.scan(Y));
	try {
		return requireWorkspacePortScanResult(await callRuntimeRpc(y, "workspacePorts.scan", Y, { timeoutMs: 15e3 }));
	} catch (y) {
		if (y instanceof RuntimeRpcCallError && y.code === "method_not_found") return {
			platform: "unknown",
			scannedAt: Date.now(),
			ports: [],
			unavailableReason: "The connected runtime does not support workspace port management yet."
		};
		throw y;
	}
}
var HTTPS_PORTS = new Set([443, 8443]), LOOPBACK_HOSTS = new Set([
	"localhost",
	"127.0.0.1",
	"::1",
	"0.0.0.0",
	"::"
]);
function hostForLocalAction(y) {
	return y ? y.includes(":") ? `[${y}]` : y : "localhost";
}
function addressForPort(y) {
	if (y.kind === "workspace" && y.advertisedUrl) try {
		return new URL(y.advertisedUrl).host || `${hostForLocalAction(y.connectHost)}:${y.port}`;
	} catch {}
	return `${hostForLocalAction(y.connectHost)}:${y.port}`;
}
function browserUrlForPort(y) {
	return y.kind === "workspace" && y.advertisedUrl ? y.advertisedUrl : `${y.protocol === "https" ? "https" : "http"}://${hostForLocalAction(y.connectHost)}:${y.port}`;
}
function customHostFromAdvertised(y) {
	if (!y) return null;
	try {
		let J = new URL(y), Y = J.hostname.toLowerCase().replace(/^\[|\]$/g, "");
		return LOOPBACK_HOSTS.has(Y) || /^[0-9.]+$/.test(Y) || Y.includes(":") ? null : J.hostname;
	} catch {
		return null;
	}
}
function advertisedProtocolForPort(y) {
	if (y.advertisedProtocol) return y.advertisedProtocol;
	if (y.advertisedUrl) try {
		let J = new URL(y.advertisedUrl).protocol.replace(/:$/, "");
		if (J === "http" || J === "https") return J;
	} catch {}
	return HTTPS_PORTS.has(y.remotePort) ? "https" : "http";
}
function browserUrlForPortForwardEntry(y) {
	return `${advertisedProtocolForPort(y)}://${customHostFromAdvertised(y.advertisedUrl) ?? "127.0.0.1"}:${y.localPort}`;
}
function addressForPortForwardEntry(y) {
	return new URL(browserUrlForPortForwardEntry(y)).host;
}
function advertisedBrowserUrlForForwardedRow(y) {
	return customHostFromAdvertised(y.advertisedUrl) ? browserUrlForPortForwardEntry(y) : null;
}
function advertisedBrowserUrlForDetectedPort(y) {
	let J = customHostFromAdvertised(y.advertisedUrl);
	return J ? `${advertisedProtocolForPort({
		advertisedProtocol: y.advertisedProtocol,
		advertisedUrl: y.advertisedUrl,
		remotePort: y.port
	})}://${J}:${y.port}` : null;
}
var WORKSPACE_PORT_STOP_SETTLE_MS = 500, WORKSPACE_PORT_TARGET_UNAVAILABLE_REASON = "Workspace ports are unavailable for this execution host.";
const WORKSPACE_PORT_ALL_HOSTS_SCAN_KEY = "all-hosts:all";
function canStopWorkspacePort(y) {
	return y.kind === "workspace" && !!y.pid && y.processName !== "Electron";
}
function delay(y) {
	return new Promise((J) => window.setTimeout(J, y));
}
function shouldOpenWorkspacePortInOrcaBrowser(y) {
	return y?.openLinksInApp === !0;
}
function isMacShortcutPlatform() {
	return typeof navigator < "u" && navigator.userAgent.includes("Mac");
}
function getPortSystemBrowserHint(y = isMacShortcutPlatform()) {
	return y ? "⇧⌘+click for system browser" : "Shift+Ctrl+click for system browser";
}
function getPortOpenBrowserTooltipLabel(y, J) {
	return `${y}. ${getPortSystemBrowserHint(J)}`;
}
function resolvePortOpenInOrcaBrowser({ settings: y, event: J, isMac: Y }) {
	return J?.shiftKey && (Y ? J.metaKey : J.ctrlKey) ? !1 : shouldOpenWorkspacePortInOrcaBrowser(y);
}
function workspacePortOwnerWorktreeId(y) {
	return y.kind === "workspace" ? y.owner.worktreeId : null;
}
function goToWorkspacePortOwner(y) {
	let J = workspacePortOwnerWorktreeId(y);
	return !!(J && activateAndRevealWorktree(J));
}
async function openWorkspacePortInBrowser(y) {
	if (!y.runtimeTarget) return {
		ok: !1,
		reason: WORKSPACE_PORT_TARGET_UNAVAILABLE_REASON
	};
	let J = browserUrlForPort(y.port), X = J;
	if (y.runtimeTarget.kind === "local" && y.localhostLabelRoute) try {
		X = (await window.api.localhostWorktreeLabels.register(y.localhostLabelRoute)).url;
	} catch {
		X = J;
	}
	if (y.openInOrcaBrowser === !1 && y.runtimeTarget.kind === "local") try {
		return await window.api.shell.openUrl(X), { ok: !0 };
	} catch (y) {
		return {
			ok: !1,
			reason: (y instanceof Error ? y.message : String(y)) || "Failed to open system browser."
		};
	}
	let $ = y.port.kind === "workspace" ? y.port.owner.worktreeId : y.activeWorktreeId;
	if (!$) return {
		ok: !1,
		reason: "No workspace selected for the browser."
	};
	if (activateAndRevealWorktree($, { providesInitialSurface: !0 }), y.runtimeTarget.kind === "environment") try {
		await assertRuntimeEnvironmentCapability(y.runtimeTarget.environmentId, BROWSER_SCREENCAST_RUNTIME_CAPABILITY, RUNTIME_BROWSER_UNAVAILABLE_MESSAGE);
		let J = await callRuntimeRpc(y.runtimeTarget, "browser.tabCreate", {
			worktree: toRuntimeWorktreeSelector($),
			url: X
		}, { timeoutMs: 3e4 }), Y = y.createBrowserTab($, X, {
			activate: !0,
			browserRuntimeEnvironmentId: y.runtimeTarget.environmentId
		});
		return Y.activePageId ? (y.setRemoteBrowserPageHandle(Y.activePageId, {
			environmentId: y.runtimeTarget.environmentId,
			remotePageId: J.browserPageId
		}), { ok: !0 }) : {
			ok: !1,
			reason: "Failed to create a browser page."
		};
	} catch (y) {
		return {
			ok: !1,
			reason: (y instanceof Error ? y.message : String(y)) || "Failed to open remote browser."
		};
	}
	try {
		return y.createBrowserTab($, X, { activate: !0 }), { ok: !0 };
	} catch (y) {
		return {
			ok: !1,
			reason: (y instanceof Error ? y.message : String(y)) || "Failed to open browser."
		};
	}
}
function publishWorkspacePortScanForHost(y) {
	let J = {
		...y.getWorkspacePortScansByKey(),
		[y.scanKey]: y.scan
	}, Y = mergeWorkspacePortScans(J);
	y.replaceWorkspacePortScans(J, {
		key: Object.keys(J).length > 1 ? WORKSPACE_PORT_ALL_HOSTS_SCAN_KEY : y.scanKey,
		result: Y ?? y.scan
	});
}
async function refreshWorkspacePortScanAfterStop(y) {
	if (!y.runtimeTarget) return {
		ok: !1,
		reason: WORKSPACE_PORT_TARGET_UNAVAILABLE_REASON
	};
	let J = workspacePortScanKeyForTarget(y.runtimeTarget), Y = (Y) => {
		publishWorkspacePortScanForHost({
			...y,
			scanKey: J,
			scan: Y
		});
	};
	y.setWorkspacePortScanRefreshing(!0);
	try {
		let J;
		try {
			J = await scanWorkspacePortsForTarget(y.runtimeTarget);
		} catch (y) {
			return {
				ok: !1,
				reason: (y instanceof Error ? y.message : String(y)) || "Workspace port scan failed."
			};
		}
		Y(J), await delay(WORKSPACE_PORT_STOP_SETTLE_MS);
		try {
			Y(await scanWorkspacePortsForTarget(y.runtimeTarget));
		} catch {}
		return { ok: !0 };
	} finally {
		y.setWorkspacePortScanRefreshing(!1);
	}
}
function workspacePortRuntimeTargetKey(y) {
	return y.kind === "local" ? "local" : `environment:${y.environmentId}`;
}
function workspacePortScanKeyForTarget(y) {
	return `${workspacePortRuntimeTargetKey(y)}:all`;
}
function mergeWorkspacePortScans(y) {
	let J = Object.entries(y).filter(([, y]) => y).sort(([y], [J]) => y.localeCompare(J));
	if (J.length === 0) return null;
	if (J.length === 1) return J[0][1];
	let Y = J.flatMap(([y, J]) => J.ports.map((J) => ({
		...J,
		id: `${y}:${J.id}`
	}))), X = J.map(([y, J]) => J.unavailableReason ? `${y}: ${J.unavailableReason}` : null).filter((y) => y !== null);
	return {
		platform: "unknown",
		scannedAt: Math.max(...J.map(([, y]) => y.scannedAt)),
		ports: Y,
		...X.length === J.length && X.length > 0 ? { unavailableReason: X.join("; ") } : {}
	};
}
var inFlightWorkspacePortScans = /* @__PURE__ */ new Map();
function workspacePortScanRequestKey(y, J) {
	return JSON.stringify([workspacePortRuntimeTargetKey(y), J ?? null]);
}
async function scanWorkspacePortsForTarget(y, J) {
	let Y = workspacePortScanRequestKey(y, J), X = inFlightWorkspacePortScans.get(Y);
	if (X) return X;
	let Z = runWorkspacePortScanForTarget(y, J).finally(() => {
		inFlightWorkspacePortScans.get(Y) === Z && inFlightWorkspacePortScans.delete(Y);
	});
	return inFlightWorkspacePortScans.set(Y, Z), Z;
}
async function killWorkspacePortForTarget(y, J) {
	if (!y) return {
		ok: !1,
		reason: WORKSPACE_PORT_TARGET_UNAVAILABLE_REASON
	};
	if (y.kind === "local") return window.api.workspacePorts.kill(J);
	try {
		return await callRuntimeRpc(y, "workspacePorts.kill", J, { timeoutMs: 15e3 });
	} catch (y) {
		if (y instanceof RuntimeRpcCallError && y.code === "method_not_found") return {
			ok: !1,
			reason: "The connected runtime does not support workspace port management yet."
		};
		throw y;
	}
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function useWorktreeRuntimeTarget(y) {
	let J = useAppStore((J) => getExecutionHostIdForWorktree(J, y));
	return (0, import_react.useMemo)(() => runtimeTargetForExecutionHostId(J), [J]);
}
function localhostWorktreeLabelRouteForPort({ port: y, repo: J, project: Y, settings: X }) {
	if (X?.localhostWorktreeLabelsEnabled !== !0 || y.kind !== "workspace" || !J) return null;
	let Z = Y ?? J;
	return {
		targetUrl: browserUrlForPort(y),
		projectName: Z.displayName,
		worktreeName: y.owner.displayName,
		worktreePath: y.owner.path,
		repoId: J.id,
		worktreeId: y.owner.worktreeId
	};
}
function resolveLocalhostLabelRouteForPort(y, J) {
	if (J.kind !== "workspace") return null;
	let Y = (y.repos ?? []).find((y) => y.id === J.owner.repoId) ?? null, X = y.getKnownWorktreeById?.(J.owner.worktreeId) ?? null;
	return localhostWorktreeLabelRouteForPort({
		port: J,
		repo: Y,
		project: X?.projectId ? (y.projects ?? []).find((y) => y.id === X.projectId) ?? null : null,
		settings: y.settings
	});
}
function useLocalhostLabelRouteForPort(y) {
	let J = useAppStore((y) => y.settings), Y = y.kind === "workspace" ? y.owner.worktreeId : null, X = y.kind === "workspace" ? y.owner.repoId : null, Z = useAppStore((y) => X ? (y.repos ?? []).find((y) => y.id === X) ?? null : null), Q = useAppStore((y) => Y ? y.getKnownWorktreeById?.(Y) ?? null : null);
	return localhostWorktreeLabelRouteForPort({
		port: y,
		repo: Z,
		project: useAppStore((y) => Q?.projectId ? (y.projects ?? []).find((y) => y.id === Q.projectId) ?? null : null),
		settings: J
	});
}
export { addressForPort as _, canStopWorkspacePort as a, advertisedBrowserUrlForForwardedRow as b, killWorkspacePortForTarget as c, publishWorkspacePortScanForHost as d, refreshWorkspacePortScanAfterStop as f, workspacePortScanKeyForTarget as g, workspacePortRuntimeTargetKey as h, WORKSPACE_PORT_ALL_HOSTS_SCAN_KEY as i, mergeWorkspacePortScans as l, scanWorkspacePortsForTarget as m, useLocalhostLabelRouteForPort as n, getPortOpenBrowserTooltipLabel as o, resolvePortOpenInOrcaBrowser as p, useWorktreeRuntimeTarget as r, goToWorkspacePortOwner as s, resolveLocalhostLabelRouteForPort as t, openWorkspacePortInBrowser as u, addressForPortForwardEntry as v, browserUrlForPortForwardEntry as x, advertisedBrowserUrlForDetectedPort as y };
