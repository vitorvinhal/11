import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as Cloud } from "./cloud-Dws9Wdd2.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { n as refreshRuntimeProjectWorktreesAndLineage, r as MonitorSmartphone } from "./runtime-project-refresh-scheduler-BnW4iv1P.js";
import { t as ServerOff } from "./server-off-DaMn7a-t.js";
import { t as Server } from "./server-BmPwXRCG.js";
import { D as getHostDisplayLabelOverrides, b_ as runtimeStatusForOverall, g_ as isConnectedRuntimeHostState, oC as toRuntimeExecutionHostId, r as isUserManagedRuntimeEnvironment, t as useAppStore, tC as isRuntimeOwnedSshTargetId, ty as unwrapRuntimeRpcResult, y_ as runtimeHostConnectionStateForEntry } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { d as DropdownMenuSub, f as DropdownMenuSubContent, i as DropdownMenuItem, l as DropdownMenuSeparator, m as DropdownMenuTrigger, p as DropdownMenuSubTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DRu_J4_e.js";
import "./tooltip-BWXjmmf0.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./ssh-types-B1wsSHlf.js";
import { a as useSshConnectInFlight, n as endSshConnect, r as isSshConnectInFlight, t as beginSshConnect } from "./ssh-connect-in-flight-BpLvUVkJ.js";
import { n as isConnectingSshStatus, t as canConnectSshStatus } from "./ssh-connection-recoverability-C7czeQrl.js";
import { t as sshConnectVerb } from "./ssh-connect-verb-JmgedUaW.js";
import { n as formatUiRelativeTimeFromDate } from "./relative-time-format-Clpgwkog.js";
import { r as statusColor, t as STATUS_LABELS } from "./SshTargetCard-mxqvwKsy.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function runtimeStatusLabel(t) {
	switch (t) {
		case "connected": return translate("auto.components.status.bar.SshStatusSegment.runtime_online", "Connected");
		case "runtime-unavailable": return translate("auto.components.status.bar.SshStatusSegment.runtime_unavailable_transport_up", "Orca unavailable");
		case "workspace-window-closed": return translate("auto.components.status.bar.SshStatusSegment.runtime_workspace_window_closed", "Workspace window closed");
		case "checking": return translate("auto.components.status.bar.SshStatusSegment.runtime_checking", "Checking");
		case "reconnecting": return translate("auto.components.status.bar.SshStatusSegment.runtime_reconnecting", "Reconnecting");
		case "disconnected": return translate("auto.components.status.bar.SshStatusSegment.runtime_unavailable", "Disconnected");
	}
}
function runtimeDotColor(t) {
	switch (t) {
		case "connected": return "bg-emerald-500";
		case "workspace-window-closed":
		case "checking":
		case "reconnecting":
		case "runtime-unavailable": return "bg-yellow-500";
		case "disconnected": return "bg-muted-foreground/40";
	}
}
function runtimeStatusTone(t) {
	return t === "checking" || t === "reconnecting" || t === "workspace-window-closed" || t === "runtime-unavailable" ? "text-yellow-500" : "text-muted-foreground";
}
function runtimeActionLabel(t) {
	switch (t) {
		case "connected":
		case "workspace-window-closed":
		case "runtime-unavailable": return translate("auto.components.status.bar.SshStatusSegment.59b553e2aa", "Disconnect");
		case "disconnected": return translate("auto.components.status.bar.SshStatusSegment.63f36455cc", "Connect");
		case "checking":
		case "reconnecting": return null;
	}
}
function runtimeFailureSummary(t) {
	switch (t) {
		case "connected": return translate("auto.components.status.bar.RuntimeHostStatusRow.previous_connection_closed", "The previous connection closed");
		case "workspace-window-closed": return translate("auto.components.status.bar.RuntimeHostStatusRow.workspace_window_closed", "The workspace window is closed");
		case "runtime-unavailable": return translate("auto.components.status.bar.RuntimeHostStatusRow.runtime_unavailable", "SSH transport is connected, but the Orca runtime is unavailable");
		case "checking": return translate("auto.components.status.bar.RuntimeHostStatusRow.checking_host", "Orca is checking whether this host is reachable");
		case "reconnecting": return translate("auto.components.status.bar.RuntimeHostStatusRow.restoring_connection", "Orca is trying to restore the connection");
		case "disconnected": return translate("auto.components.status.bar.RuntimeHostStatusRow.host_unreachable", "Orca isn’t reachable on this host");
	}
}
function runtimeFailureExplanation(t) {
	return t === "connected" || t === "workspace-window-closed" ? null : t === "runtime-unavailable" ? translate("auto.components.status.bar.RuntimeHostStatusRow.runtime_unavailable_explanation", "The remote host may still be running; only the Orca runtime connection is unavailable.") : translate("auto.components.status.bar.RuntimeHostStatusRow.contact_note", "The host may still be running; only the Orca connection is unavailable.");
}
function RuntimeHostStatusRow({ label: t, state: u, detail: p, diagnostics: m, onConnect: h, onDisconnect: g }) {
	let [_, v] = (0, import_react.useState)(!1), [y, x] = (0, import_react.useState)(!1), S = (0, import_react.useRef)(!1), C = useMountedRef(), w = runtimeActionLabel(u), T = (0, import_react.useCallback)(async () => {
		let t = isConnectedRuntimeHostState(u) ? g : h;
		if (t) {
			v(!0);
			try {
				await t();
			} finally {
				C.current && v(!1);
			}
		}
	}, [
		C,
		h,
		g,
		u
	]), E = isConnectedRuntimeHostState(u) ? g : h, D = [m?.lastConnectedAt ? translate("auto.components.status.bar.RuntimeHostStatusRow.last_connected", "Last connected {{value0}}", { value0: formatUiRelativeTimeFromDate(new Date(m.lastConnectedAt).toISOString()) }) : null, m && u === "reconnecting" ? translate("auto.components.status.bar.RuntimeHostStatusRow.reconnect_attempt", "Attempt {{value0}}", { value0: String(m.reconnectAttempt + 1) }) : null].filter(Boolean).join(" · "), O = m?.lastError ?? m?.lastClose?.reason ?? p, j = runtimeFailureExplanation(u), M = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: `size-1.5 shrink-0 rounded-full ${runtimeDotColor(u)}`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "truncate text-[12px] font-medium",
			children: t
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-1.5 text-[10px] text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.status.bar.SshStatusSegment.remote_server", "Remote Server") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `inline-flex min-w-0 items-center gap-1 ${runtimeStatusTone(u)}`,
					children: [u === "checking" || u === "reconnecting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-2.5 shrink-0 animate-spin" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: runtimeStatusLabel(u)
					})]
				})
			]
		})]
	})] }), P = _ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 shrink-0 animate-spin text-muted-foreground" }) : w && E ? p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		onPointerEnter: () => {
			S.current = !0, x(!1);
		},
		onPointerLeave: () => {
			S.current = !1;
		},
		onPointerMove: (t) => t.stopPropagation(),
		onPointerDown: (t) => {
			t.stopPropagation();
		},
		onClick: (t) => {
			t.stopPropagation(), T();
		},
		className: "shrink-0 cursor-pointer rounded px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-accent/70 hover:text-foreground",
		children: w
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onPointerEnter: () => {
			S.current = !0, x(!1);
		},
		onPointerLeave: () => {
			S.current = !1;
		},
		onPointerMove: (t) => t.stopPropagation(),
		onPointerDown: (t) => {
			t.stopPropagation();
		},
		onClick: (t) => {
			t.stopPropagation(), T();
		},
		className: "shrink-0 rounded px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-accent/70 hover:text-foreground",
		children: w
	}) : null;
	return p ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, {
		open: y,
		onOpenChange: (t) => {
			(!t || !S.current) && x(t);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger, {
			className: "gap-2.5 px-2 py-1.5",
			hideChevron: !0,
			children: [M, P]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, {
			className: "w-[min(18rem,calc(100vw-1rem))] p-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-1.5 pt-0.5 pb-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-semibold",
						children: runtimeFailureSummary(u)
					}), j ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[11px] leading-4 text-muted-foreground",
						children: j
					}) : null]
				}),
				O ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-1 mb-1.5 max-h-24 overflow-y-auto scrollbar-sleek whitespace-pre-wrap break-words rounded-md bg-muted px-2 py-1.5 font-mono text-[10px] leading-4 text-muted-foreground [overflow-wrap:anywhere]",
					children: O
				}) : null,
				D ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-1.5 pb-1.5 text-[10px] text-muted-foreground",
					children: D
				}) : null,
				w && E ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: _,
					onSelect: (t) => {
						t.preventDefault(), T();
					},
					children: [_ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : null, w]
				}) : null
			]
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5 px-2 py-1.5",
		children: [M, P]
	});
}
function connectedHostCountLabel(t) {
	return t === 1 ? translate("auto.components.status.bar.SshStatusSegment.connectedHostCount_one", "{{count}} host", { count: t }) : translate("auto.components.status.bar.SshStatusSegment.connectedHostCount_other", "{{count}} hosts", { count: t });
}
function connectingHostsLabel() {
	return translate("auto.components.status.bar.SshStatusSegment.connecting", "Connecting…");
}
function workspaceSyncProblemLabel(t) {
	return t === "conflict" ? translate("auto.components.status.bar.SshStatusSegment.workspaceConflict", "Workspace conflict") : translate("auto.components.status.bar.SshStatusSegment.workspaceSyncError", "Workspace sync error");
}
function syncStatusLabel(t) {
	switch (t?.phase) {
		case "pulling":
		case "pushing": return "Workspace syncing";
		case "conflict": return "Workspace sync conflict";
		case "error": return "Workspace sync error";
		case "offline": return "Workspace sync unavailable";
		case "synced":
		case "idle":
		case void 0: return null;
	}
}
function syncStatusTone(t) {
	switch (t?.phase) {
		case "conflict":
		case "error": return "text-destructive";
		case "offline": return "text-muted-foreground";
		case "pulling":
		case "pushing": return "text-yellow-500";
		case "synced": return "text-emerald-500";
		case "idle":
		case void 0: return "text-muted-foreground";
	}
}
function SshTargetStatusRow({ targetId: t, label: u, status: m, syncStatus: h }) {
	let [g, _] = (0, import_react.useState)(!1), v = useMountedRef(), y = useAppStore((t) => t.recordFeatureInteraction), b = useSshConnectInFlight(t), x = syncStatusLabel(h), S = (0, import_react.useCallback)(async () => {
		if (!isSshConnectInFlight(t)) {
			beginSshConnect(t), _(!0);
			try {
				await window.api.ssh.connect({ targetId: t }), y("ssh");
			} catch (t) {
				toast.error(t instanceof Error ? t.message : translate("auto.components.status.bar.SshStatusSegment.2c29e2de68", "Connection failed"));
			} finally {
				endSshConnect(t), v.current && _(!1);
			}
		}
	}, [
		v,
		y,
		t
	]), w = (0, import_react.useCallback)(async () => {
		_(!0);
		try {
			await window.api.ssh.disconnect({ targetId: t }), y("ssh");
		} catch (t) {
			toast.error(t instanceof Error ? t.message : translate("auto.components.status.bar.SshStatusSegment.bf07aee59e", "Disconnect failed"));
		} finally {
			v.current && _(!1);
		}
	}, [
		v,
		y,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5 px-2 py-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1.5 shrink-0 rounded-full ${statusColor(m)}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-[12px] font-medium",
					children: u
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-1.5 text-[10px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.status.bar.SshTargetStatusRow.sshHost", "SSH Host") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: STATUS_LABELS[m] }),
						x ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "·"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `inline-flex min-w-0 items-center gap-1 ${syncStatusTone(h)}`,
							children: [h?.phase === "pulling" || h?.phase === "pushing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-2.5 shrink-0 animate-spin" }) : h?.phase === "conflict" || h?.phase === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-2.5 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "size-2.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: x
							})]
						})] }) : null
					]
				})]
			}),
			g || b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 shrink-0 animate-spin text-muted-foreground" }) : canConnectSshStatus(m) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void S(),
				className: "shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium text-foreground hover:bg-accent/70",
				children: sshConnectVerb(m)
			}) : m === "connected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void w(),
				className: "shrink-0 rounded px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-accent/70 hover:text-foreground",
				children: translate("auto.components.status.bar.SshStatusSegment.59b553e2aa", "Disconnect")
			}) : null
		]
	});
}
async function connectRuntimeEnvironmentAndRecordStatus(t, u) {
	let d = useAppStore.getState().setRuntimeEnvironmentStatus;
	try {
		return d(t, {
			status: unwrapRuntimeRpcResult(await window.api.runtimeEnvironments.connect({
				selector: t,
				timeoutMs: u
			})),
			checkedAt: Date.now()
		}), !0;
	} catch {
		return d(t, {
			status: null,
			checkedAt: Date.now()
		}), !1;
	}
}
function overallStatus(t) {
	return t.length === 0 ? "disconnected" : t.every((t) => t === "connected") ? "connected" : t.some((t) => t === "connecting") ? "connecting" : t.some((t) => t === "connected") ? "partial" : "disconnected";
}
function overallDotColor(t, u) {
	switch (t) {
		case "connected": return "bg-emerald-500";
		case "partial": return u > 0 ? "bg-emerald-500" : "bg-muted-foreground/40";
		case "connecting": return "bg-yellow-500";
		case "disconnected": return "bg-muted-foreground/40";
	}
}
function sshStatusForOverall(t) {
	return t === "connected" ? "connected" : isConnectingSshStatus(t) ? "connecting" : "disconnected";
}
function runtimeHostConnectionDetail(t) {
	if (t && !(t.state === "awaiting_ready" || t.state === "awaiting_authenticated")) {
		if (t.state === "reconnecting") return translate("auto.components.status.bar.SshStatusSegment.runtime_reconnect_attempt", "Attempt {{value0}}", { value0: String(t.reconnectAttempt + 1) });
		if (t.lastError) return t.lastError;
		if (t.lastClose?.reason) return translate("auto.components.status.bar.SshStatusSegment.runtime_last_close_reason", "Closed: {{value0}}", { value0: t.lastClose.reason });
	}
}
async function connectRuntimeHostForNavigation(t) {
	if (!await t.refreshStatus(t.environmentId, 5e3)) return !1;
	let u = await t.fetchRepos(t.environmentId);
	return await refreshRuntimeProjectWorktreesAndLineage(t.environmentId, u, t.fetchWorktrees, t.fetchLineage), !0;
}
function SshStatusSegment({ compact: t, iconOnly: u }) {
	let f = useAppStore((t) => t.sshConnectionStates), p = useAppStore((t) => t.sshTargetLabels), m = useAppStore((t) => t.settings), T = useAppStore((t) => t.runtimeEnvironments), O = useAppStore((t) => t.runtimeStatusByEnvironmentId), k = useAppStore((t) => t.readRuntimeHostStatusSnapshots), A = useAppStore((t) => t.hydrateRuntimeEnvironmentStatuses), N = useAppStore((t) => t.remoteWorkspaceSyncStatusByTargetId), F = useAppStore((t) => t.setActiveView), I = useAppStore((t) => t.openSettingsTarget), L = useAppStore((t) => t.recordFeatureInteraction), R = (0, import_react.useMemo)(() => getHostDisplayLabelOverrides(m), [m]), z = Array.from(p.entries()).filter(([t]) => !isRuntimeOwnedSshTargetId(t)).map(([t, u]) => ({
		id: t,
		label: u,
		status: f.get(t)?.status ?? "disconnected",
		syncStatus: N[t]
	})), B = T.filter(isUserManagedRuntimeEnvironment).map((t) => {
		let u = O.get(t.id), d = R.get(toRuntimeExecutionHostId(t.id));
		return {
			id: t.id,
			label: d || t.name || t.id,
			snapshot: u?.snapshot,
			status: u?.status ?? null,
			active: m?.activeRuntimeEnvironmentId === t.id,
			remoteControl: u?.remoteControl ?? u?.status?.remoteControl ?? null
		};
	}), V = B.map((t) => ({
		...t,
		state: runtimeHostConnectionStateForEntry(O.get(t.id))
	})), H = V.filter((t) => isConnectedRuntimeHostState(t.state)), U = V.filter((t) => !isConnectedRuntimeHostState(t.state)), W = z.filter((t) => t.status === "connected"), G = z.filter((t) => t.status !== "connected"), K = (0, import_react.useCallback)(async (t) => {
		let u = useAppStore.getState();
		if (!await connectRuntimeHostForNavigation({
			environmentId: t,
			refreshStatus: connectRuntimeEnvironmentAndRecordStatus,
			fetchRepos: u.fetchRuntimeEnvironmentRepos,
			fetchWorktrees: u.fetchWorktrees,
			fetchLineage: u.fetchWorktreeLineage
		})) {
			toast.error(translate("auto.components.status.bar.SshStatusSegment.runtime_connect_unavailable", "Remote host is not reachable"));
			return;
		}
		L("ssh");
	}, [L]), q = (0, import_react.useCallback)(async (t) => {
		try {
			await window.api.runtimeEnvironments.disconnect({ selector: t }), await k(), L("ssh");
		} catch (t) {
			toast.error(t instanceof Error ? t.message : translate("auto.components.status.bar.SshStatusSegment.runtime_disconnect_failed", "Disconnect failed"));
		}
	}, [L, k]);
	if (z.length === 0 && B.length === 0) return null;
	let J = [...z.map((t) => sshStatusForOverall(t.status)), ...V.map((t) => runtimeStatusForOverall(t.state))], Y = overallStatus(J), X = J.filter((t) => t === "connected").length, Z = Y === "connecting", Q = z.find((t) => t.syncStatus?.phase === "conflict" || t.syncStatus?.phase === "error"), $ = Q ? workspaceSyncProblemLabel(Q.syncStatus?.phase) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		onOpenChange: (t) => {
			t && (A(), L("ssh"));
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex items-center gap-1.5 cursor-pointer rounded px-1 py-0.5 hover:bg-accent/70",
				"aria-label": translate("auto.components.status.bar.SshStatusSegment.fdc57e9970", "Remote host connection status"),
				children: u ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block size-2 rounded-full ${Q ? "bg-destructive" : overallDotColor(Y, X)}` }), Q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3 text-destructive" }) : Z ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorSmartphone, { className: "size-3 text-muted-foreground" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5",
					children: [
						Q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3 text-destructive" }) : Z ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin text-yellow-500" }) : Y === "connected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3 text-emerald-500" }) : Y === "partial" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerOff, { className: "size-3 text-muted-foreground" }),
						!t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: Q ? "text-destructive" : "text-muted-foreground",
								children: $ ?? (Z ? connectingHostsLabel() : connectedHostCountLabel(X))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block size-1.5 rounded-full ${Q ? "bg-destructive" : overallDotColor(Y, X)}` })
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			side: "top",
			align: "start",
			sideOffset: 8,
			className: "w-[min(20rem,calc(100vw-1rem))]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-2 pt-1.5 pb-1 text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
					children: translate("auto.components.status.bar.SshStatusSegment.6e8a9a4242", "Remote Hosts")
				}),
				H.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuntimeHostStatusRow, {
					label: t.label,
					state: t.state,
					detail: runtimeHostConnectionDetail(t.remoteControl),
					diagnostics: t.remoteControl,
					onConnect: () => K(t.id),
					onDisconnect: () => q(t.id)
				}, t.id)),
				W.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SshTargetStatusRow, {
					targetId: t.id,
					label: t.label,
					status: t.status,
					syncStatus: t.syncStatus
				}, t.id)),
				U.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuntimeHostStatusRow, {
					label: t.label,
					state: t.state,
					detail: runtimeHostConnectionDetail(t.remoteControl),
					diagnostics: t.remoteControl,
					onConnect: () => K(t.id),
					onDisconnect: () => q(t.id)
				}, t.id)),
				G.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SshTargetStatusRow, {
					targetId: t.id,
					label: t.label,
					status: t.status,
					syncStatus: t.syncStatus
				}, t.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onSelect: () => {
						L("ssh"), I({
							pane: "servers",
							repoId: null
						}), F("settings");
					},
					children: translate("auto.components.status.bar.SshStatusSegment.3ad70e0365", "Manage Remote Hosts…")
				})
			]
		})]
	});
}
export { SshStatusSegment };
