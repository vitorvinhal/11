import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import "./worktree-activation-u-wSAPlP.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as FolderOpen } from "./folder-open-D9SSjK-6.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Plug } from "./plug-DOF6eJjL.js";
import { XS as getLocalExecutionHostLabel, iw as Trash2, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { a as PopoverTrigger, i as PopoverContent, t as Popover } from "./popover-DHL-338i.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./window-park-visibility-BBcurIcE.js";
import "./selectors-Cdg4hUQI.js";
import "./web-runtime-session-CeAC5QPx.js";
import "./agent-paste-draft-Ddp-k6QZ.js";
import "./agent-process-recognition-BUFJTuDF.js";
import "./native-chat-session-option-cache-DOY0fjiI.js";
import "./gitlab-links-Di3ozbga.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./localized-catalog-Dsz6wk5E.js";
import "./connection-context-2sxF2wah.js";
import "./web-session-tabs-sync-BfOF1RHT.js";
import "./pane-agent-owner-Ci26i0GA.js";
import { _ as addressForPort, a as canStopWorkspacePort, c as killWorkspacePortForTarget, d as publishWorkspacePortScanForHost, f as refreshWorkspacePortScanAfterStop, g as workspacePortScanKeyForTarget, m as scanWorkspacePortsForTarget, n as useLocalhostLabelRouteForPort, o as getPortOpenBrowserTooltipLabel, p as resolvePortOpenInOrcaBrowser, r as useWorktreeRuntimeTarget, s as goToWorkspacePortOwner, u as openWorkspacePortInBrowser } from "./workspace-port-localhost-label-selector-sOHTaMWk.js";
import { t as SelectedTextCopyMenu } from "./SelectedTextCopyMenu-Brh7AZmC.js";
import { n as getWorkspacePortGroups, t as getExternalWorkspacePorts } from "./workspace-port-groups-BBCjrbe9.js";
import { t as STATUS_BAR_CONTEXT_MENU_EXEMPT_PROPS } from "./status-bar-context-menu-policy-DWoCsR7d.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), ENVIRONMENT_SCAN_KEY_PREFIX = "environment:", SCAN_KEY_SUFFIX = ":all", LOCAL_SCAN_KEY = `local${SCAN_KEY_SUFFIX}`;
function workspacePortHostForScanKey(e) {
	if (e === LOCAL_SCAN_KEY) return { kind: "local" };
	if (!e.endsWith(SCAN_KEY_SUFFIX) || !e.startsWith(ENVIRONMENT_SCAN_KEY_PREFIX)) return { kind: "unknown" };
	let v = e.slice(12, e.length - 4);
	return v ? {
		kind: "environment",
		environmentId: v
	} : { kind: "unknown" };
}
function getUnavailableWorkspacePortHosts(e) {
	return Object.entries(e).flatMap(([e, v]) => v?.unavailableReason ? [{
		scanKey: e,
		host: workspacePortHostForScanKey(e),
		platform: v.platform === "unknown" ? null : v.platform,
		reason: v.unavailableReason
	}] : []);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function PortAction({ label: e, tooltipLabel: v = e, onClick: y, disabled: x, children: S }) {
	let C = (e) => {
		y(e), e.detail > 0 && e.currentTarget.blur();
	}, w = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "ghost",
		size: "icon-xs",
		className: "size-5 text-muted-foreground hover:text-foreground disabled:pointer-events-none disabled:text-muted-foreground/35",
		"aria-label": e,
		onClick: C,
		disabled: x,
		children: S
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
		delayDuration: 200,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex",
				children: w
			}) : w
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: "top",
			sideOffset: 4,
			className: "z-[70]",
			children: v
		})]
	});
}
function PortRow({ port: e, activeWorktreeId: v, external: b }) {
	let x = useAppStore((e) => e.settings), S = useLocalhostLabelRouteForPort(e), T = useAppStore((e) => e.createBrowserTab), E = useAppStore((e) => e.setRemoteBrowserPageHandle), D = useAppStore((e) => e.replaceWorkspacePortScans), O = useAppStore((e) => e.setWorkspacePortScanRefreshing), A = useAppStore((e) => e.recordFeatureInteraction), j = useWorktreeRuntimeTarget(e.kind === "workspace" ? e.owner.worktreeId : v), M = e.processName ?? (e.pid ? `PID ${e.pid}` : "Unknown process"), N = canStopWorkspacePort(e), R = translate("auto.components.status.bar.ports.status.popover.rows.085f4f0334", "Open in Browser"), B = (0, import_react.useCallback)((b) => {
		b.stopPropagation(), A("ports"), openWorkspacePortInBrowser({
			port: e,
			activeWorktreeId: v,
			runtimeTarget: j,
			createBrowserTab: T,
			setRemoteBrowserPageHandle: E,
			openInOrcaBrowser: resolvePortOpenInOrcaBrowser({
				settings: x,
				event: b.detail > 0 ? b : null,
				isMac: navigator.userAgent.includes("Mac")
			}),
			localhostLabelRoute: S
		}).then((e) => {
			e.ok || toast.error(translate("auto.components.status.bar.ports.status.popover.rows.b854ec9ff5", "Failed to open browser"), { description: e.reason });
		});
	}, [
		v,
		T,
		S,
		e,
		A,
		j,
		x,
		E
	]), V = (0, import_react.useCallback)((v) => {
		v.stopPropagation(), A("ports");
		let b = addressForPort(e);
		window.api.ui.writeClipboardText(b), toast.success(translate("auto.components.status.bar.ports.status.popover.rows.480d8f2347", "Copied {{value0}}", { value0: b }));
	}, [e, A]), G = (0, import_react.useCallback)((v) => {
		v.stopPropagation(), canStopWorkspacePort(e) && (A("ports"), (async () => {
			let v = await killWorkspacePortForTarget(j, {
				repoId: e.owner.repoId,
				pid: e.pid,
				port: e.port
			});
			if (!v.ok) {
				toast.error(v.reason);
				return;
			}
			toast.success(translate("auto.components.status.bar.ports.status.popover.rows.acdb6df590", "Stopped process on {{value0}}", { value0: e.port }));
			let b = await refreshWorkspacePortScanAfterStop({
				runtimeTarget: j,
				replaceWorkspacePortScans: D,
				getWorkspacePortScansByKey: () => useAppStore.getState().workspacePortScansByKey,
				setWorkspacePortScanRefreshing: O
			});
			b.ok || toast.error(translate("auto.components.status.bar.ports.status.popover.rows.e4a709548c", "Failed to refresh ports"), { description: b.reason });
		})());
	}, [
		e,
		A,
		j,
		D,
		O
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group/port grid min-w-0 grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-2 rounded-md px-2 py-1.5 hover:bg-accent/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "select-text font-mono text-[12px] font-semibold tabular-nums text-foreground",
			children: e.port
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 space-y-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-5 min-w-0 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
					delayDuration: 200,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block min-w-0 select-text truncate text-[11px] text-muted-foreground",
							children: M
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 4,
						children: M
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-y-0 right-0 flex items-center gap-0.5 rounded-md border border-border/40 bg-popover/95 px-0.5 can-hover:opacity-0 shadow-xs transition-opacity group-hover/port:opacity-100 group-focus-within/port:opacity-100",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortAction, {
							label: R,
							tooltipLabel: getPortOpenBrowserTooltipLabel(R),
							onClick: B,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortAction, {
							label: translate("auto.components.status.bar.ports.status.popover.rows.536d48a5dc", "Copy {{value0}}", { value0: addressForPort(e) }),
							onClick: V,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortAction, {
							label: translate("auto.components.status.bar.ports.status.popover.rows.0e72c8d9fb", "Stop Process"),
							disabled: !N,
							onClick: G,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "select-text truncate text-[10px] text-muted-foreground/70",
				children: b ? e.kind : addressForPort(e)
			})]
		})]
	});
}
function WorkspaceGroupRows({ group: e, activeWorktreeId: v }) {
	let b = (0, import_react.useCallback)((v) => {
		v.stopPropagation();
		let b = e.ports[0];
		(!b || !goToWorkspacePortOwner(b)) && toast.error(translate("auto.components.status.bar.ports.status.popover.rows.f2b813345f", "Workspace unavailable"));
	}, [e.ports]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-border/40 first:border-t-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-border/40 bg-popover px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 truncate text-[12px] font-medium text-foreground",
				children: e.displayName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortAction, {
					label: translate("auto.components.status.bar.ports.status.popover.rows.a49ea79246", "Go to Worktree"),
					onClick: b,
					disabled: e.ports.length === 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-3" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] text-muted-foreground/70",
					children: e.ports.length
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-1 pb-1",
			children: e.ports.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortRow, {
				port: e,
				activeWorktreeId: v
			}, e.id))
		})]
	});
}
function PortsStatusSegment({ iconOnly: e }) {
	let v = useAppStore((e) => e.workspacePortScan?.result ?? null), b = useAppStore((e) => e.workspacePortScanRefreshing), C = useAppStore((e) => e.activeWorktreeId), w = useAppStore((e) => e.replaceWorkspacePortScans), T = useAppStore((e) => e.workspacePortScansByKey), k = useAppStore((e) => e.runtimeEnvironments), A = useAppStore((e) => e.recordFeatureInteraction), [P, F] = (0, import_react.useState)(!1), [I, L] = (0, import_react.useState)(!1), z = useWorktreeRuntimeTarget(C), H = z ? workspacePortScanKeyForTarget(z) : null, U = (0, import_react.useMemo)(() => getWorkspacePortGroups(v), [v]), W = (0, import_react.useMemo)(() => getExternalWorkspacePorts(v), [v]), G = (0, import_react.useMemo)(() => getUnavailableWorkspacePortHosts(T), [T]), K = (0, import_react.useCallback)((e, v, y) => e.kind === "local" ? getLocalExecutionHostLabel(y) : e.kind === "unknown" ? v : k.find((v) => v.id === e.environmentId)?.name ?? e.environmentId, [k]), q = U.reduce((e, v) => e + v.ports.length, 0), J = q + W.length, Y = (0, import_react.useMemo)(() => G.length > 0 ? G.map((e) => ({
		id: e.scanKey,
		host: K(e.host, e.scanKey, e.platform),
		reason: e.reason
	})) : v?.unavailableReason ? [{
		id: "projection",
		host: v.platform,
		reason: v.unavailableReason
	}] : [], [
		K,
		v?.platform,
		v?.unavailableReason,
		G
	]), X = !!v?.unavailableReason && J === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open: P,
		onOpenChange: (0, import_react.useCallback)((e) => {
			if (F(e), !e || (A("ports"), !z || !H)) return;
			let v = (e) => {
				publishWorkspacePortScanForHost({
					scanKey: H,
					scan: e,
					replaceWorkspacePortScans: w,
					getWorkspacePortScansByKey: () => useAppStore.getState().workspacePortScansByKey
				});
			};
			scanWorkspacePortsForTarget(z).then(v).catch((e) => {
				let y = e instanceof Error ? e.message : String(e), b = useAppStore.getState().workspacePortScansByKey[H];
				v({
					platform: b?.platform ?? "unknown",
					scannedAt: Date.now(),
					ports: b?.ports ?? [],
					unavailableReason: y || "Workspace port scan failed."
				});
			});
		}, [
			A,
			z,
			H,
			w
		]),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
			delayDuration: 150,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						...STATUS_BAR_CONTEXT_MENU_EXEMPT_PROPS,
						className: "inline-flex cursor-pointer items-center gap-1.5 rounded px-1 py-0.5 hover:bg-accent/70",
						"aria-label": translate("auto.components.status.bar.PortsStatusSegment.b8bc3e420a", "Ports, {{value0}} workspace {{value1}}", {
							value0: q,
							value1: q === 1 ? "port" : "ports"
						}),
						children: [
							b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plug, { className: "size-3 text-muted-foreground" }),
							!e && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium tabular-nums text-muted-foreground",
								children: q
							}),
							e && J > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] tabular-nums text-muted-foreground",
								children: q
							})
						]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "top",
				sideOffset: 6,
				children: translate("auto.components.status.bar.PortsStatusSegment.ca41be2802", "Ports — {{value0}} workspace {{value1}}{{value2}}", {
					value0: q,
					value1: q === 1 ? translate("auto.components.status.bar.PortsStatusSegment.45834a9ace", "port") : translate("auto.components.status.bar.PortsStatusSegment.8caaa86e9a", "ports"),
					value2: W.length > 0 ? translate("auto.components.status.bar.PortsStatusSegment.a8e4bdb412", " · {{value0}} external", { value0: W.length }) : ""
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
			side: "top",
			align: "end",
			sideOffset: 8,
			...STATUS_BAR_CONTEXT_MENU_EXEMPT_PROPS,
			className: "w-[24rem] max-w-[calc(100vw-2rem)] p-0",
			onOpenAutoFocus: (e) => e.preventDefault(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectedTextCopyMenu, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 border-b border-border px-3 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-1.5 text-[11px] font-medium text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plug, { className: "size-3 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: translate("auto.components.status.bar.PortsStatusSegment.c22ea609fd", "Ports")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tabular-nums text-muted-foreground",
						children: translate("auto.components.status.bar.PortsStatusSegment.2b84c4d11f", "{{value0}} workspace · {{value1}} external", {
							value0: q,
							value1: W.length
						})
					})]
				}),
				Y.length > 0 && !X && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortScanUnavailableNotices, {
					notices: Y,
					className: "border-b border-border/40 px-3 py-1.5 text-[11px] text-muted-foreground"
				}),
				X ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortScanUnavailableNotices, {
					notices: Y,
					className: "px-3 py-3 text-xs text-muted-foreground"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[28rem] overflow-y-auto scrollbar-sleek",
					children: [U.length > 0 ? U.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceGroupRows, {
						group: e,
						activeWorktreeId: C
					}, e.worktreeId)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 py-4 text-center text-xs text-muted-foreground",
						children: b ? translate("auto.components.status.bar.PortsStatusSegment.c174bbbfed", "Scanning for workspace ports...") : translate("auto.components.status.bar.PortsStatusSegment.3a87d54dfb", "No workspace ports detected")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "border-t border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "sticky top-0 z-10 flex w-full items-center gap-1.5 border-b border-border/40 bg-popover px-3 py-2 text-left text-[11px] font-medium uppercase tracking-[0.05em] text-muted-foreground hover:bg-accent/50 hover:text-foreground",
							"aria-expanded": I,
							onClick: () => {
								A("ports"), L((e) => !e);
							},
							children: [
								I ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.status.bar.PortsStatusSegment.7dac3ecc9d", "External Ports") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto font-mono text-[10px]",
									children: W.length
								})
							]
						}), I && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-1 pb-1",
							children: W.length > 0 ? W.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortRow, {
								port: e,
								activeWorktreeId: C,
								external: !0
							}, e.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-2 py-2 text-xs text-muted-foreground",
								children: translate("auto.components.status.bar.PortsStatusSegment.4ebf90c12e", "No external ports detected")
							})
						})]
					})]
				})
			] })
		})]
	});
}
function PortScanUnavailableNotices({ notices: e, className: v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: v,
		children: e.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "truncate",
			children: translate("auto.components.status.bar.PortsStatusSegment.95495019ed", "Port scan unavailable on {{value0}}: {{value1}}", {
				value0: e.host,
				value1: e.reason
			})
		}, e.id))
	});
}
export { PortsStatusSegment };
