import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import "./worktree-activation-u-wSAPlP.js";
import { t as Box } from "./box-C4LRs0NR.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as Info } from "./info-CS7SIWrO.js";
import { t as Pencil } from "./pencil-EMomP5i_.js";
import { t as Plus } from "./plus-DZ00_r0s.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as Server } from "./server-BmPwXRCG.js";
import { iw as Trash2, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { f as ContextMenuTrigger, i as ContextMenuLabel, n as ContextMenuContent, r as ContextMenuItem, s as ContextMenuSeparator, t as ContextMenu } from "./context-menu-WDfkgXiK.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import "./window-park-visibility-BBcurIcE.js";
import { l as useActiveWorktree, p as useRepoById } from "./selectors-Cdg4hUQI.js";
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
import { _ as addressForPort, b as advertisedBrowserUrlForForwardedRow, c as killWorkspacePortForTarget, d as publishWorkspacePortScanForHost, f as refreshWorkspacePortScanAfterStop, h as workspacePortRuntimeTargetKey, m as scanWorkspacePortsForTarget, o as getPortOpenBrowserTooltipLabel, p as resolvePortOpenInOrcaBrowser, r as useWorktreeRuntimeTarget, t as resolveLocalhostLabelRouteForPort, u as openWorkspacePortInBrowser, v as addressForPortForwardEntry, x as browserUrlForPortForwardEntry, y as advertisedBrowserUrlForDetectedPort } from "./workspace-port-localhost-label-selector-sOHTaMWk.js";
import { r as openWorkspaceBrowserTab } from "./workspace-browser-tab-open-BzgRRhYJ.js";
var Unplug = createLucideIcon("unplug", [
	["path", {
		d: "m19 5 3-3",
		key: "yk6iyv"
	}],
	["path", {
		d: "m2 22 3-3",
		key: "19mgm9"
	}],
	["path", {
		d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
		key: "goz73y"
	}],
	["path", {
		d: "M7.5 13.5 10 11",
		key: "7xgeeb"
	}],
	["path", {
		d: "M10.5 16.5 13 14",
		key: "10btkg"
	}],
	["path", {
		d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",
		key: "1snsnr"
	}]
]), import_react = /* @__PURE__ */ __toESM(require_react());
function getLocalWorkspacePortSections(e, C, w) {
	let T = e?.ports ?? [];
	return {
		activePorts: T.filter((e) => e.kind === "workspace" && e.owner.repoId === C && e.owner.worktreeId === w),
		otherWorkspacePorts: T.filter((e) => e.kind === "workspace" && e.owner.repoId === C && e.owner.worktreeId !== w),
		externalPorts: T.flatMap((e) => e.kind === "workspace" ? e.owner.repoId === C ? [] : [workspacePortAsExternal(e)] : [e])
	};
}
function shouldShowLocalWorkspacePortSections(e, C) {
	return e?.unavailableReason ? C.activePorts.length > 0 || C.otherWorkspacePorts.length > 0 || C.externalPorts.length > 0 : !0;
}
function workspacePortAsExternal(e) {
	return {
		id: e.id,
		bindHost: e.bindHost,
		connectHost: e.connectHost,
		port: e.port,
		pid: e.pid,
		processName: e.processName,
		protocol: e.protocol,
		kind: "external"
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), LOCAL_PORT_MENU_CONTENT_CLASS = "!rounded-md !border-border/60 !bg-popover !text-popover-foreground !shadow-[0_10px_24px_rgba(0,0,0,0.18)] !backdrop-blur-none", LOCAL_PORT_MENU_ITEM_CLASS = "rounded-md focus:bg-accent focus:text-accent-foreground dark:focus:bg-accent", LOCAL_PORT_MENU_LABEL_CLASS = "px-2 py-1 text-[11px] font-semibold text-muted-foreground";
function LocalPortRow({ port: e, onStop: C, onShowDetails: E, onOpenInBrowser: D }) {
	let O = (0, import_react.useCallback)(() => {
		window.api.ui.writeClipboardText(addressForPort(e));
	}, [e]), A = (0, import_react.useCallback)((C) => {
		D(e, C);
	}, [D, e]), P = (0, import_react.useCallback)((e) => {
		O(), e.detail > 0 && e.currentTarget.blur();
	}, [O]), F = (0, import_react.useCallback)((e) => {
		A(e.detail > 0 ? e : void 0), e.detail > 0 && e.currentTarget.blur();
	}, [A]), I = (0, import_react.useCallback)((w) => {
		C(e), w.detail > 0 && w.currentTarget.blur();
	}, [C, e]), z = e.processName ?? (e.pid ? `PID ${e.pid}` : "Unknown process"), B = addressForPort(e), J = e.kind === "workspace" ? e.owner.displayName : e.kind === "container" ? "Container or forwarded service" : "Unassigned", Y = translate("auto.components.right.sidebar.PortsPanel.b22b128b2a", "Open in Browser"), X = e.kind === "workspace" ? e.owner.confidence === "cwd" ? "cwd" : "command" : null, Z = e.kind === "workspace" && !!e.pid && e.processName !== "Electron";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex items-center gap-2 py-1 px-1 -mx-1 rounded hover:bg-accent/50 transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 items-center gap-2 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-ring",
				tabIndex: 0,
				"aria-label": translate("auto.components.right.sidebar.PortsPanel.5be4f7f727", "Port {{value0}} menu", { value0: e.port }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-5 shrink-0 items-center justify-center text-muted-foreground",
					children: e.kind === "container" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { size: 13 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { size: 13 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-medium text-foreground",
								children: [":", e.port]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-xs text-muted-foreground",
								children: z
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-w-0 items-center gap-1.5 text-[11px] text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: B
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-1.5 text-[10px] text-muted-foreground/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: J
							}), X && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-muted-foreground/70",
								children: X
							})]
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
			delayDuration: 400,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-0.5 can-hover:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-xs",
							className: "text-muted-foreground hover:text-foreground",
							onClick: F,
							"aria-label": Y,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 13 })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 4,
						children: getPortOpenBrowserTooltipLabel(Y)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-xs",
							className: "text-muted-foreground hover:text-foreground",
							onClick: P,
							"aria-label": translate("auto.components.right.sidebar.PortsPanel.fe2730d050", "Copy {{value0}}", { value0: B }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 13 })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 4,
						children: translate("auto.components.right.sidebar.PortsPanel.1004af16ab", "Copy {{value0}}", { value0: B })
					})] }),
					Z && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-xs",
							className: "text-muted-foreground hover:text-destructive",
							onClick: I,
							"aria-label": translate("auto.components.right.sidebar.PortsPanel.f9528da632", "Stop Process"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 13 })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 4,
						children: translate("auto.components.right.sidebar.PortsPanel.f9528da632", "Stop Process")
					})] })
				]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenuContent, {
		className: LOCAL_PORT_MENU_CONTENT_CLASS,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuLabel, {
				className: LOCAL_PORT_MENU_LABEL_CLASS,
				children: `:${e.port}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenuItem, {
				className: LOCAL_PORT_MENU_ITEM_CLASS,
				onSelect: () => A(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 13 }), Y]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenuItem, {
				className: LOCAL_PORT_MENU_ITEM_CLASS,
				onSelect: O,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 13 }), translate("auto.components.right.sidebar.PortsPanel.792baeb7ed", "Copy Address")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenuItem, {
				className: LOCAL_PORT_MENU_ITEM_CLASS,
				onSelect: () => {
					window.api.ui.writeClipboardText(JSON.stringify(e, null, 2));
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 13 }), translate("auto.components.right.sidebar.PortsPanel.bdac206faf", "Copy Details")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenuItem, {
				className: LOCAL_PORT_MENU_ITEM_CLASS,
				onSelect: () => E(e),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { size: 13 }), translate("auto.components.right.sidebar.PortsPanel.a223459512", "Show Details")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenuItem, {
				className: LOCAL_PORT_MENU_ITEM_CLASS,
				variant: "destructive",
				disabled: !Z,
				onSelect: () => C(e),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 13 }), translate("auto.components.right.sidebar.PortsPanel.f9528da632", "Stop Process")]
			})
		]
	})] });
}
function LocalPortSection({ id: e, title: C, ports: w, emptyText: T, collapsed: D, onToggle: O, onStopPort: k, onShowDetails: j, onOpenInBrowser: M }) {
	return w.length === 0 && !T ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-3 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "sticky top-0 z-10 mb-1 flex w-full items-center gap-1 border-b border-border/40 bg-background py-1 text-left text-muted-foreground transition-colors hover:text-foreground",
			onClick: O,
			"aria-expanded": !D,
			"aria-controls": `local-port-section-${e}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					size: 12,
					className: cn("shrink-0 transition-transform", !D && "rotate-90")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: C
				}),
				w.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-muted-foreground/60 ml-1",
					children: w.length
				})
			]
		}), !D && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: `local-port-section-${e}`,
			children: w.length > 0 ? w.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalPortRow, {
				port: e,
				onStop: k,
				onShowDetails: j,
				onOpenInBrowser: M
			}, e.id)) : T && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "py-1 text-xs text-muted-foreground",
				children: T
			})
		})]
	});
}
function LocalPortDetailsDialog({ port: e, onClose: C }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!e,
		onOpenChange: (e) => !e && C(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: e ? translate("auto.components.right.sidebar.PortsPanel.472054d94c", "Port :{{value0}}", { value0: e.port }) : translate("auto.components.right.sidebar.PortsPanel.d41a8241ec", "Port") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: e ? `${e.processName ?? "Unknown process"} · ${addressForPort(e)}` : "" })] }), e && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "grid grid-cols-[88px_1fr] gap-x-3 gap-y-2 text-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: translate("auto.components.right.sidebar.PortsPanel.1c1c18cefc", "Address")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "min-w-0 break-all text-foreground",
					children: addressForPort(e)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: translate("auto.components.right.sidebar.PortsPanel.0f1d8cd324", "Bind")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "min-w-0 break-all text-foreground",
					children: `${e.bindHost}:${e.port}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: translate("auto.components.right.sidebar.PortsPanel.729be0b4e5", "Kind")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "text-foreground",
					children: e.kind
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: translate("auto.components.right.sidebar.PortsPanel.b1ff94fa27", "Protocol")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "text-foreground",
					children: e.protocol
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: translate("auto.components.right.sidebar.PortsPanel.5dd86dcf2f", "Process")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "min-w-0 break-all text-foreground",
					children: e.processName ?? translate("auto.components.right.sidebar.PortsPanel.3e13cb63ee", "Unknown")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: translate("auto.components.right.sidebar.PortsPanel.57d930fa45", "PID")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "text-foreground",
					children: e.pid ?? translate("auto.components.right.sidebar.PortsPanel.3e13cb63ee", "Unknown")
				}),
				e.kind === "workspace" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: translate("auto.components.right.sidebar.PortsPanel.c7b4702b7b", "Workspace")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "min-w-0 break-all text-foreground",
						children: e.owner.displayName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: translate("auto.components.right.sidebar.PortsPanel.153145e675", "Evidence")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-foreground",
						children: e.owner.confidence
					})
				] })
			]
		})] })
	});
}
function LocalWorkspacePortsPanel({ isVisible: e }) {
	let C = useActiveWorktree(), D = useRepoById(C?.repoId ?? null), O = useAppStore((e) => e.settings), k = useAppStore((e) => e.createBrowserTab), A = useAppStore((e) => e.setRemoteBrowserPageHandle), j = useAppStore((e) => e.workspacePortScansByKey), M = useAppStore((e) => e.workspacePortScanRefreshing), N = useAppStore((e) => e.replaceWorkspacePortScans), P = useAppStore((e) => e.setWorkspacePortScanRefreshing), [F, R] = (0, import_react.useState)(null), [B, V] = (0, import_react.useState)({
		other: !0,
		external: !0
	}), H = useWorktreeRuntimeTarget(C?.id), U = H ? `${workspacePortRuntimeTargetKey(H)}:all` : null, W = (0, import_react.useCallback)(() => !D || !H || !U ? Promise.resolve() : (P(!0), scanWorkspacePortsForTarget(H).then((e) => {
		publishWorkspacePortScanForHost({
			scanKey: U,
			scan: e,
			replaceWorkspacePortScans: N,
			getWorkspacePortScansByKey: () => useAppStore.getState().workspacePortScansByKey
		});
	}).catch((e) => {
		let C = e instanceof Error ? e.message : String(e);
		toast.error(translate("auto.components.right.sidebar.PortsPanel.a00f3a2840", "Failed to refresh ports"), { description: C || translate("auto.components.right.sidebar.PortsPanel.740aca88ab", "Workspace port scan failed.") });
	}).finally(() => {
		P(!1);
	})), [
		D,
		H,
		U,
		N,
		P
	]), G = e && U ? j[U] ?? null : null, K = (0, import_react.useCallback)((e) => {
		V((C) => ({
			...C,
			[e]: !C[e]
		}));
	}, []), q = (0, import_react.useCallback)(async (e) => {
		if (!D || !e.pid) return;
		let C = await killWorkspacePortForTarget(H, {
			repoId: D.id,
			pid: e.pid,
			port: e.port
		});
		if (!C.ok) {
			toast.error(C.reason);
			return;
		}
		toast.success(translate("auto.components.right.sidebar.PortsPanel.97b562d21d", "Stopped process on :{{value0}}", { value0: e.port }));
		let T = await refreshWorkspacePortScanAfterStop({
			runtimeTarget: H,
			replaceWorkspacePortScans: N,
			getWorkspacePortScansByKey: () => useAppStore.getState().workspacePortScansByKey,
			setWorkspacePortScanRefreshing: P
		});
		T.ok || toast.error(translate("auto.components.right.sidebar.PortsPanel.a00f3a2840", "Failed to refresh ports"), { description: T.reason });
	}, [
		D,
		H,
		N,
		P
	]), Y = (0, import_react.useCallback)(async (e, T) => {
		let E = await openWorkspacePortInBrowser({
			port: e,
			activeWorktreeId: C?.id,
			runtimeTarget: H,
			createBrowserTab: k,
			setRemoteBrowserPageHandle: A,
			openInOrcaBrowser: resolvePortOpenInOrcaBrowser({
				settings: O,
				event: T,
				isMac: navigator.userAgent.includes("Mac")
			}),
			localhostLabelRoute: resolveLocalhostLabelRouteForPort(useAppStore.getState(), e)
		});
		E.ok || toast.error(translate("auto.components.right.sidebar.PortsPanel.98e9a414f8", "Failed to open browser"), { description: E.reason });
	}, [
		C?.id,
		k,
		H,
		A,
		O
	]), { activePorts: X, otherWorkspacePorts: Z, externalPorts: Q } = (0, import_react.useMemo)(() => getLocalWorkspacePortSections(G, D?.id, C?.id), [
		D?.id,
		C?.id,
		G
	]), $ = shouldShowLocalWorkspacePortSections(G, {
		activePorts: X,
		otherWorkspacePorts: Z,
		externalPorts: Q
	});
	return D ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full overflow-y-auto scrollbar-sleek",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-3 py-2 border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: translate("auto.components.right.sidebar.PortsPanel.6bc058dbe1", "Ports")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon-xs",
						className: "text-muted-foreground hover:text-foreground",
						onClick: () => void W(),
						disabled: M || !H,
						"aria-label": translate("auto.components.right.sidebar.PortsPanel.7822e3edc6", "Refresh Ports"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							size: 14,
							className: cn(M && "animate-spin")
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "top",
					sideOffset: 4,
					children: translate("auto.components.right.sidebar.PortsPanel.7822e3edc6", "Refresh Ports")
				})] })]
			}),
			G?.unavailableReason && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-2 text-xs text-muted-foreground border-b border-border",
				children: translate("auto.components.right.sidebar.PortsPanel.f59c783b7a", "Port scan unavailable on {{value0}}: {{value1}}", {
					value0: G.platform,
					value1: G.unavailableReason
				})
			}),
			$ && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalPortSection, {
					id: "active",
					title: translate("auto.components.right.sidebar.PortsPanel.935dda7718", "Active Workspace"),
					ports: X,
					emptyText: M && !G ? translate("auto.components.right.sidebar.PortsPanel.0d63d94db3", "Scanning...") : translate("auto.components.right.sidebar.PortsPanel.38b16cfbef", "No ports detected"),
					collapsed: B.active ?? !1,
					onToggle: () => K("active"),
					onStopPort: (e) => void q(e),
					onShowDetails: R,
					onOpenInBrowser: Y
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalPortSection, {
					id: "other",
					title: translate("auto.components.right.sidebar.PortsPanel.4db4b5e435", "Other Workspaces"),
					ports: Z,
					collapsed: B.other ?? !1,
					onToggle: () => K("other"),
					onStopPort: (e) => void q(e),
					onShowDetails: R,
					onOpenInBrowser: Y
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalPortSection, {
					id: "external",
					title: translate("auto.components.right.sidebar.PortsPanel.d32820d3e2", "External"),
					ports: Q,
					collapsed: B.external ?? !1,
					onToggle: () => K("external"),
					onStopPort: (e) => void q(e),
					onShowDetails: R,
					onOpenInBrowser: Y
				})
			] }),
			!G?.unavailableReason && G && X.length === 0 && Z.length === 0 && Q.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center flex-1 px-4 text-center text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, {
					size: 32,
					className: "mb-3 opacity-50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: translate("auto.components.right.sidebar.PortsPanel.a2a9fc6899", "No local ports detected")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalPortDetailsDialog, {
				port: F,
				onClose: () => R(null)
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center h-full px-4 text-center text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, {
			size: 32,
			className: "mb-3 opacity-50"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm",
			children: translate("auto.components.right.sidebar.PortsPanel.c1b115c375", "No workspace selected")
		})]
	});
}
function SshForwardedPortRow({ entry: e, onEdit: C, onOpenInBrowser: T }) {
	let [O, k] = (0, import_react.useState)(!1), A = useMountedRef(), N = addressForPortForwardEntry(e), F = (0, import_react.useCallback)(async () => {
		k(!0);
		try {
			await window.api.ssh.removePortForward({ id: e.id });
		} catch {}
		A.current && k(!1);
	}, [e.id, A]), I = (0, import_react.useCallback)(() => {
		window.api.ui.writeClipboardText(N);
	}, [N]), L = (0, import_react.useCallback)((e) => {
		T(e);
	}, [T]), z = (0, import_react.useCallback)((e) => {
		I(), e.detail > 0 && e.currentTarget.blur();
	}, [I]), B = (0, import_react.useCallback)((e) => {
		L(e.detail > 0 ? e : void 0), e.detail > 0 && e.currentTarget.blur();
	}, [L]), V = (0, import_react.useCallback)((e) => {
		C(), e.detail > 0 && e.currentTarget.blur();
	}, [C]), H = (0, import_react.useCallback)((e) => {
		F(), e.detail > 0 && e.currentTarget.blur();
	}, [F]), U = advertisedBrowserUrlForForwardedRow(e), W = translate("auto.components.right.sidebar.PortsPanel.b22b128b2a", "Open in Browser"), G = getPortOpenBrowserTooltipLabel(U ? translate("auto.components.right.sidebar.PortsPanel.75aeea592f", "Open {{value0}} in Browser", { value0: U }) : W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex items-center gap-2 py-1 px-1 -mx-1 rounded hover:bg-accent/50 transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [e.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-foreground truncate",
					children: e.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("text-xs text-muted-foreground truncate", !e.label && "text-foreground"),
					children: [
						":",
						e.localPort,
						" → :",
						e.remotePort
					]
				})]
			}), U && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-muted-foreground/70 truncate",
				children: translate("auto.components.right.sidebar.PortsPanel.de349d4560", "opens {{value0}}", { value0: U })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-0.5 can-hover:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "p-1 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground",
					onClick: B,
					title: G,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 13 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "p-1 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground",
					onClick: z,
					title: translate("auto.components.right.sidebar.PortsPanel.1004af16ab", "Copy {{value0}}", { value0: N }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 13 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "p-1 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground",
					onClick: V,
					title: translate("auto.components.right.sidebar.PortsPanel.b3548e59f4", "Edit"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 13 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("p-1 rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground", O && "opacity-50"),
					onClick: H,
					disabled: O,
					title: translate("auto.components.right.sidebar.PortsPanel.e740075063", "Remove"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 13 })
				})
			]
		})]
	});
}
function SshDetectedPortRow({ port: e, onForward: C }) {
	let T = advertisedBrowserUrlForDetectedPort(e);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex items-center gap-2 py-1 px-1 -mx-1 rounded hover:bg-accent/50 transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-foreground",
					children: [":", e.port]
				}), e.processName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground truncate",
					children: e.processName
				})]
			}), T && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-muted-foreground/70 truncate",
				children: translate("auto.components.right.sidebar.PortsPanel.c7e920aa7c", "advertised as {{value0}}", { value0: T })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "text-[11px] px-2 py-0.5 rounded can-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-accent hover:bg-accent/80 text-foreground",
			onClick: C,
			children: translate("auto.components.right.sidebar.PortsPanel.c9d106547a", "Forward")
		})]
	});
}
function safeLocalPort(e) {
	return e < 1024 ? e + 1e4 : e;
}
function digitsOnly(e) {
	return e.replace(/\D/g, "");
}
var INPUT_CLASS = "block w-full mt-0.5 px-2 py-1.5 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring";
function SshPortForwardDialog({ state: e, activeConnectionId: C, onClose: T }) {
	let E = e.mode !== "closed", D = e.mode === "edit", O = e.mode === "edit" ? e.entry.remotePort.toString() : e.mode === "add" ? e.defaults.remotePort?.toString() ?? "" : "", k = e.mode === "edit" ? e.entry.localPort.toString() : e.mode === "add" && e.defaults.remotePort != null ? safeLocalPort(e.defaults.remotePort).toString() : "", A = e.mode === "edit" ? e.entry.remoteHost : e.mode === "add" ? e.defaults.remoteHost ?? "localhost" : "localhost", j = e.mode === "edit" ? e.entry.label ?? "" : e.mode === "add" ? e.defaults.label ?? "" : "", M = e.mode === "edit" ? e.entry.connectionId : e.mode === "add" ? e.defaults.targetId ?? C ?? "" : C ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: E,
		onOpenChange: (e) => {
			e || T();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			showCloseButton: !1,
			className: "max-w-[340px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-sm",
				children: D ? translate("auto.components.right.sidebar.PortsPanel.80206251c8", "Edit Port Forward") : translate("auto.components.right.sidebar.PortsPanel.907eb53ed2", "Forward a Port")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "text-xs",
				children: D ? translate("auto.components.right.sidebar.PortsPanel.10360598a4", "Update the port forwarding configuration.") : translate("auto.components.right.sidebar.PortsPanel.31e80cff2d", "Forward a remote port to your local machine.")
			})] }), E && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortForwardForm, {
				mode: e.mode,
				editId: e.mode === "edit" ? e.entry.id : void 0,
				initialRemotePort: O,
				initialLocalPort: k,
				initialRemoteHost: A,
				initialLabel: j,
				targetId: M,
				onClose: T
			}, e.mode === "edit" ? `edit-${e.entry.id}` : `add-${M}-${O}-${A}`)]
		})
	});
}
function PortForwardForm({ mode: e, editId: C, initialRemotePort: E, initialLocalPort: D, initialRemoteHost: O, initialLabel: k, targetId: A, onClose: j }) {
	let [M, N] = (0, import_react.useState)(E), [P, F] = (0, import_react.useState)(D), [I, L] = (0, import_react.useState)(O), [R, z] = (0, import_react.useState)(k), [B, V] = (0, import_react.useState)(null), [H, U] = (0, import_react.useState)(!1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (0, import_react.useCallback)(async (w) => {
			w.preventDefault(), V(null);
			let T = Number.parseInt(M, 10), E = Number.parseInt(P || M, 10);
			if (Number.isNaN(T) || T < 1 || T > 65535) {
				V("Remote port must be 1–65535");
				return;
			}
			if (Number.isNaN(E) || E < 1 || E > 65535) {
				V("Local port must be 1–65535");
				return;
			}
			U(!0);
			try {
				await (e === "edit" && C ? window.api.ssh.updatePortForward({
					id: C,
					targetId: A,
					localPort: E,
					remoteHost: I || "localhost",
					remotePort: T,
					label: R || void 0
				}) : window.api.ssh.addPortForward({
					targetId: A,
					localPort: E,
					remoteHost: I || "localhost",
					remotePort: T,
					label: R || void 0
				})), j();
			} catch (e) {
				let C = e instanceof Error ? e.message : String(e);
				C.includes("EADDRINUSE") || C.includes("already in use") ? V(`Port ${E} is already in use. Choose a different local port.`) : C.includes("EACCES") || C.includes("permission denied") ? V(`Port ${E} requires elevated privileges. Use a local port \u2265 1024.`) : V(C);
			}
			U(!1);
		}, [
			e,
			C,
			M,
			P,
			I,
			R,
			A,
			j
		]),
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: translate("auto.components.right.sidebar.PortsPanel.9e5a4118b0", "Remote Port")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							inputMode: "numeric",
							value: M,
							onChange: (e) => {
								let C = digitsOnly(e.target.value);
								N(C);
								let w = Number.parseInt(M, 10), T = Number.parseInt(P, 10);
								if (!P || T === w || T === safeLocalPort(w)) {
									let e = Number.parseInt(C, 10);
									F(Number.isNaN(e) ? "" : safeLocalPort(e).toString());
								}
							},
							className: INPUT_CLASS,
							placeholder: "3000",
							autoFocus: !0,
							required: !0
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: translate("auto.components.right.sidebar.PortsPanel.b950b1948b", "Local Port")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							inputMode: "numeric",
							value: P,
							onChange: (e) => F(digitsOnly(e.target.value)),
							className: INPUT_CLASS,
							placeholder: translate("auto.components.right.sidebar.PortsPanel.d57545ff92", "Same as remote")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: translate("auto.components.right.sidebar.PortsPanel.a3721a50b0", "Remote Host")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: I,
							onChange: (e) => L(e.target.value),
							className: INPUT_CLASS,
							placeholder: translate("auto.components.right.sidebar.PortsPanel.17bea6e391", "localhost")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: translate("auto.components.right.sidebar.PortsPanel.8dfed0a15c", "Label (optional)")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: R,
							onChange: (e) => z(e.target.value),
							className: INPUT_CLASS,
							placeholder: translate("auto.components.right.sidebar.PortsPanel.4eb801ce93", "dev-server")
						})]
					})
				]
			}),
			B && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-destructive",
				children: B
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: j,
					children: translate("auto.components.right.sidebar.PortsPanel.3ea4a02a8f", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "sm",
					disabled: H || !M,
					children: H ? e === "edit" ? translate("auto.components.right.sidebar.PortsPanel.d7c83cfd24", "Saving...") : translate("auto.components.right.sidebar.PortsPanel.9f475dc994", "Forwarding...") : e === "edit" ? translate("auto.components.right.sidebar.PortsPanel.9079776663", "Save") : translate("auto.components.right.sidebar.PortsPanel.c9d106547a", "Forward")
				})]
			})
		]
	});
}
var LOOPBACK_HOSTS = new Set([
	"localhost",
	"127.0.0.1",
	"::1",
	"0.0.0.0",
	"::"
]);
function normalizeHost(e) {
	return !e || LOOPBACK_HOSTS.has(e) ? "localhost" : e;
}
function SshPortsPanel() {
	let e = useAppStore((e) => e.settings), C = useAppStore((e) => e.portForwardsByConnection), T = useAppStore((e) => e.detectedPortsByConnection), D = useAppStore((e) => e.sshConnectionStates), O = useActiveWorktree(), k = useRepoById(O?.repoId ?? null)?.connectionId ?? null, j = k ? D.get(k)?.status !== "connected" : !0, M = (0, import_react.useMemo)(() => k ? C[k] ?? [] : [], [C, k]), N = (0, import_react.useMemo)(() => {
		let e = /* @__PURE__ */ new Set();
		for (let C of M) e.add(`${normalizeHost(C.remoteHost)}:${C.remotePort}`);
		return e;
	}, [M]), P = (0, import_react.useMemo)(() => k ? (T[k] ?? []).filter((e) => !N.has(`${normalizeHost(e.host)}:${e.port}`)).map((e) => ({
		...e,
		targetId: k
	})).sort((e, C) => e.port - C.port) : [], [
		T,
		k,
		N
	]), [I, L] = (0, import_react.useState)(!1), [R, B] = (0, import_react.useState)(!1), [V, H] = (0, import_react.useState)({ mode: "closed" }), U = (0, import_react.useCallback)((e) => {
		H({
			mode: "add",
			defaults: {
				remotePort: e.port,
				remoteHost: normalizeHost(e.host),
				label: e.processName,
				targetId: e.targetId
			}
		});
	}, []), W = (0, import_react.useCallback)((e) => {
		H({
			mode: "edit",
			entry: e
		});
	}, []), G = (0, import_react.useCallback)((C, T) => {
		let E = browserUrlForPortForwardEntry(C);
		if (!resolvePortOpenInOrcaBrowser({
			settings: e,
			event: T,
			isMac: navigator.userAgent.includes("Mac")
		})) {
			window.api.shell.openUrl(E);
			return;
		}
		if (!O?.id) {
			toast.error(translate("auto.components.right.sidebar.PortsPanel.409afcc145", "No workspace selected for the browser."));
			return;
		}
		openWorkspaceBrowserTab({
			workspaceId: O.id,
			url: E,
			intent: { kind: "url" }
		}).catch((e) => {
			toast.error(e instanceof Error ? e.message : String(e));
		});
	}, [O?.id, e]), K = (0, import_react.useCallback)(() => {
		H({ mode: "closed" });
	}, []);
	return j ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center h-full px-4 text-center text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unplug, {
				size: 32,
				className: "mb-3 opacity-50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: translate("auto.components.right.sidebar.PortsPanel.a2f1a47f42", "SSH connection lost")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs mt-1",
				children: translate("auto.components.right.sidebar.PortsPanel.d4c3cd679c", "Reconnecting...")
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full overflow-y-auto scrollbar-sleek",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-3 py-2 border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: translate("auto.components.right.sidebar.PortsPanel.6bc058dbe1", "Ports")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
					onClick: () => H({
						mode: "add",
						defaults: { targetId: k ?? void 0 }
					}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), translate("auto.components.right.sidebar.PortsPanel.a103dae837", "Add")]
				})]
			}),
			M.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex items-center gap-1 w-full text-left mb-1",
					onClick: () => L((e) => !e),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							size: 12,
							className: cn("text-muted-foreground transition-transform", !I && "rotate-90")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: translate("auto.components.right.sidebar.PortsPanel.ddbe58d74e", "Forwarded")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground/60 ml-1",
							children: M.length
						})
					]
				}), !I && M.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SshForwardedPortRow, {
					entry: e,
					onEdit: () => W(e),
					onOpenInBrowser: (C) => G(e, C)
				}, e.id))]
			}),
			P.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex items-center gap-1 w-full text-left mb-1",
					onClick: () => B((e) => !e),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							size: 12,
							className: cn("text-muted-foreground transition-transform", !R && "rotate-90")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: translate("auto.components.right.sidebar.PortsPanel.36b1b2984a", "Detected")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground/60 ml-1",
							children: P.length
						})
					]
				}), !R && P.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SshDetectedPortRow, {
					port: e,
					onForward: () => U(e)
				}, `${e.targetId}-${e.host}-${e.port}`))]
			}),
			M.length === 0 && P.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center flex-1 px-4 text-center text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: translate("auto.components.right.sidebar.PortsPanel.1f0d2a24f9", "No forwarded ports")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs mt-1 mb-3",
						children: translate("auto.components.right.sidebar.PortsPanel.04efd3dad4", "Forward a port to access remote services on your local machine.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-xs px-3 py-1.5 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
						onClick: () => H({
							mode: "add",
							defaults: { targetId: k ?? void 0 }
						}),
						children: translate("auto.components.right.sidebar.PortsPanel.907eb53ed2", "Forward a Port")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SshPortForwardDialog, {
				state: V,
				activeConnectionId: k,
				onClose: K
			})
		]
	});
}
function PortsPanel({ isVisible: e }) {
	return useRepoById(useActiveWorktree()?.repoId ?? null)?.connectionId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SshPortsPanel, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalWorkspacePortsPanel, { isVisible: e });
}
export { PortsPanel as default, getLocalWorkspacePortSections, killWorkspacePortForTarget, openWorkspacePortInBrowser, scanWorkspacePortsForTarget };
