import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Settings } from "./settings-D0EstZRB.js";
import { $l as agentKindForAgentType, Ff as getExecutionHostIdForWorktree, If as getExplicitRuntimeEnvironmentIdForWorktree, Nh as isTerminalLeafId, Ph as makePaneKey, Qa as deriveRunningAgentSendTargets, Tl as focusTerminalTabSurface, eS as DEFAULT_DISABLED_TUI_AGENTS, eu as agentTypeToIconAgent, hb as FLOATING_TERMINAL_WORKTREE_ID, iC as parseExecutionHostId, io as resolveRuntimePaneTitleLeafResolution, lu as resolveTerminalTitleAgentType, nS as filterEnabledTuiAgents, oo as detectAgentSendTitleStatus, t as useAppStore, tu as formatAgentTypeLabel, vl as getConnectionIdFromState, vv as parseWorkspaceKey } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { a as DropdownMenuLabel, i as DropdownMenuItem, l as DropdownMenuSeparator, u as DropdownMenuShortcut } from "./dropdown-menu-DRu_J4_e.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as track } from "./telemetry-DdvWHaqb.js";
import { t as useShallow } from "./shallow-CDSK0iEX.js";
import { y as isAgentSessionHandleProvider } from "./native-chat-session-option-cache-DOY0fjiI.js";
import { E as getResolvedExecutionHostIdForWorktree } from "./web-session-tabs-sync-BfOF1RHT.js";
import { n as getAgentCatalog, t as AgentIcon } from "./agent-catalog-Cgr0_vcs.js";
import { t as useDetectedAgents } from "./useDetectedAgents-DERj8Q7s.js";
import { o as useStructuredAgentLaunchStatus } from "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import { a as useOptionalShortcutLabel } from "./useShortcutLabel-B283mfzm.js";
import { n as agentStateLabel, t as AgentStateDot } from "./AgentStateDot-CrLFCeoH.js";
import { t as agentRowDotState } from "./agent-row-dot-state-C-nQUYId.js";
import { t as lastEnteredDoneAt } from "./agent-finished-timestamp-BwQZ7hrN.js";
import { t as useNow } from "./use-now-DD2-bt0J.js";
import { s as selectLivePtyIdsForWorktree } from "./worktree-agent-rows-IU_JQSGH.js";
import { t as useWorktreeAgentRows } from "./useWorktreeAgentRows-av1v5VcW.js";
import { t as launchAgentInNewTab } from "./launch-agent-in-new-tab-DNniBJOv.js";
import { n as activeAgentNotesSendFailureMessage, t as sendNotesToActiveAgentSession } from "./active-agent-note-send-B2n60SEm.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
const AGENT_DETECTION_LOCAL_TARGET_KEY = "local";
function getLocalAgentDetectionTargetKey(r) {
	return r === "global-floating-terminal" ? `${AGENT_DETECTION_LOCAL_TARGET_KEY}:${encodeURIComponent(r)}:host` : AGENT_DETECTION_LOCAL_TARGET_KEY;
}
function getAgentDetectionTargetKeyForWorktree(r, M) {
	if (M === null) return AGENT_DETECTION_LOCAL_TARGET_KEY;
	if (parseWorkspaceKey(M)?.type === "folder") {
		let N = getExplicitRuntimeEnvironmentIdForWorktree(r, M);
		if (N) return `runtime:${N}`;
		if (getConnectionIdFromState(r, M) === void 0) return;
	} else if (getResolvedExecutionHostIdForWorktree(r, M) === null) return;
	let N = parseExecutionHostId(getExecutionHostIdForWorktree(r, M));
	return N?.kind === "ssh" ? `ssh:${N.targetId}` : N?.kind === "runtime" ? `runtime:${N.environmentId}` : getLocalAgentDetectionTargetKey(M);
}
function parseAgentDetectionTargetKey(r) {
	if (r !== void 0) {
		if (r === "local") return { kind: "local" };
		if (r.startsWith("local:")) {
			let [M, N] = r.slice(`${AGENT_DETECTION_LOCAL_TARGET_KEY}:`.length).split(":");
			if (!M || !N) return { kind: "local" };
			try {
				return {
					kind: "local",
					worktreeId: decodeURIComponent(M),
					contextKey: decodeURIComponent(N)
				};
			} catch {
				return { kind: "local" };
			}
		}
		return r.startsWith("ssh:") ? {
			kind: "ssh",
			connectionId: r.slice(4)
		} : r.startsWith("runtime:") ? {
			kind: "runtime",
			environmentId: r.slice(8)
		} : { kind: "local" };
	}
}
function useAgentDetectionTargetForWorktree(r) {
	let M = useAppStore((M) => getAgentDetectionTargetKeyForWorktree(M, r));
	return (0, import_react.useMemo)(() => parseAgentDetectionTargetKey(M), [M]);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function getCatalogEntry(r) {
	return getAgentCatalog().find((M) => M.id === r) ?? null;
}
function orderAgents(r, M) {
	let N = getAgentCatalog().filter((r) => M.includes(r.id)).map((r) => r.id);
	return !r || r === "blank" || !N.includes(r) ? N : [r, ...N.filter((M) => M !== r)];
}
function shouldShowLaunchWatchdogTimeout({ hasPty: r }) {
	return !r;
}
function getLaunchWatchdogTimeoutMessage(r) {
	return `Couldn't launch ${r} — the terminal did not start.`;
}
function getTerminalLaunchState(r) {
	let M = useAppStore.getState(), N = (M.ptyIdsByTabId[r]?.length ?? 0) > 0, P = !1, F = null;
	for (let N of Object.values(M.tabsByWorktree)) {
		let M = N.find((M) => M.id === r);
		if (M) {
			P = !0, F = M.ptyId;
			break;
		}
	}
	return {
		stillOpen: P,
		hasPty: N || F !== null
	};
}
async function waitForTerminalPty(r, M) {
	let N = Date.now() + M;
	for (; Date.now() < N;) {
		if (getTerminalLaunchState(r).hasPty) return !0;
		await new Promise((r) => window.setTimeout(r, 100));
	}
	return getTerminalLaunchState(r).hasPty;
}
function QuickLaunchAgentMenuItemsInner({ worktreeId: r, groupId: M, onFocusTerminal: I, prompt: L, promptDelivery: R, launchSource: z, onPromptDelivered: B }) {
	let { detectedIds: V } = useDetectedAgents(useAgentDetectionTargetForWorktree(r)), H = useAppStore((r) => r.settings?.defaultTuiAgent), W = useAppStore((r) => r.settings?.disabledTuiAgents ?? DEFAULT_DISABLED_TUI_AGENTS), G = useAppStore((r) => r.openSettingsPage), K = useAppStore((r) => r.openSettingsTarget), q = useOptionalShortcutLabel("tab.newAgent"), J = {
		claude: useStructuredAgentLaunchStatus(r, "claude"),
		codex: useStructuredAgentLaunchStatus(r, "codex")
	}, X = (0, import_react.useCallback)(() => {
		K({
			pane: "agents",
			repoId: null
		}), G();
	}, [G, K]), Z = (0, import_react.useCallback)((P) => {
		let F = getCatalogEntry(P)?.label ?? P, V = launchAgentInNewTab({
			agent: P,
			worktreeId: r,
			groupId: M,
			...L === void 0 ? {} : { prompt: L },
			...R === void 0 ? {} : { promptDelivery: R },
			...z === void 0 ? {} : { launchSource: z },
			...B === void 0 ? {} : { onPromptDelivered: B }
		});
		if (!V) {
			toast.error(translate("auto.components.tab.bar.QuickLaunchButton.465e432ef1", "Could not build launch command for {{value0}}.", { value0: F }));
			return;
		}
		if (V.surface.kind !== "local-terminal") return;
		I(V.surface.tabId);
		let H = V.surface.tabId;
		waitForTerminalPty(H, 5e3).then((M) => {
			if (M) return;
			let N = getTerminalLaunchState(H);
			N.stillOpen && useAppStore.getState().activeWorktreeId === r && shouldShowLaunchWatchdogTimeout({ hasPty: N.hasPty }) && toast.message(getLaunchWatchdogTimeoutMessage(F));
		});
	}, [
		r,
		M,
		I,
		L,
		R,
		z,
		B
	]), Q = V ? filterEnabledTuiAgents(V, W) : [], $ = V ? orderAgents(H, Q) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		$.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
			disabled: !0,
			className: "gap-2 rounded-[7px] px-2 py-1.5 text-[12px] leading-5 text-muted-foreground",
			children: V && V.length > 0 ? translate("auto.components.tab.bar.QuickLaunchButton.8dea9b5cdf", "No enabled agents") : translate("auto.components.tab.bar.QuickLaunchButton.e518f544b1", "No agents detected")
		}) : null,
		$.map((r) => {
			let M = getCatalogEntry(r)?.label ?? r, F = isAgentSessionHandleProvider(r) && J[r] === "pending", I = q !== null && H !== "blank" && r === H;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				disabled: F,
				onSelect: () => Z(r),
				className: "gap-2 rounded-[7px] px-2 py-1.5 text-[12px] leading-5 font-medium",
				title: translate("auto.components.tab.bar.QuickLaunchButton.ec2adf093e", "Launch {{value0}} in a new terminal", { value0: M }),
				children: [
					F ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "size-3.5 shrink-0 animate-spin",
						"aria-hidden": "true"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
						agent: r,
						size: 14
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1",
						children: M
					}),
					I ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuShortcut, { children: q }) : null
				]
			}, r);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onSelect: X,
			className: "gap-2 rounded-[7px] px-2 py-1.5 text-[12px] leading-5 font-medium text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }), translate("auto.components.tab.bar.QuickLaunchButton.348a04c1ad", "Agent settings…")]
		})
	] });
}
const QuickLaunchAgentMenuItems = import_react.memo(QuickLaunchAgentMenuItemsInner);
function detectTitleHintPaneEvidence(r, M) {
	if (r.title !== null) {
		let M = detectAgentSendTitleStatus(r.title);
		return M ? {
			status: M,
			title: r.title
		} : null;
	}
	if (r.hasAnyPaneTitle) return null;
	let N = detectAgentSendTitleStatus(M);
	return N ? {
		status: N,
		title: M
	} : null;
}
function deriveNotesSendAgentTargets(r, M, N = Date.now()) {
	let P = deriveRunningAgentSendTargets(r, M, N).map((r) => ({
		paneKey: r.paneKey,
		tabId: r.tabId,
		leafId: r.leafId,
		agentType: resolveNotesTargetAgentType(r.entry.agentType, r.tab.launchAgent),
		tabTitle: r.tab.title,
		status: r.status,
		...r.disabledReason ? { disabledReason: r.disabledReason } : {}
	}));
	for (let N of r.tabsByWorktree[M] ?? []) {
		let M = deriveTitleHintAgentTarget(r, N);
		M && (N.launchAgent ? mergeLaunchAgentTitleTarget(P, M) : mergeManualAgentTitleTarget(P, M));
	}
	return P;
}
function resolveNotesTargetAgentType(r, M) {
	return r && r !== "unknown" ? r : M ?? r;
}
function deriveTitleHintAgentTarget(r, M) {
	let N = r.terminalLayoutsByTabId[M.id], P = N?.activeLeafId;
	if (!P || !isTerminalLeafId(P)) return null;
	let F = N.ptyIdsByLeafId?.[P] ?? null;
	if (!F || !r.ptyIdsByTabId[M.id]?.includes(F)) return null;
	let I = r.runtimePaneTitlesByTabId[M.id], L = detectTitleHintPaneEvidence(resolveRuntimePaneTitleLeafResolution(N, I, P), M.title);
	if (!L) return null;
	let R = L.status === "permission" ? "Agent needs permission" : void 0;
	return {
		paneKey: makePaneKey(M.id, P),
		tabId: M.id,
		leafId: P,
		agentType: M.launchAgent ?? resolveTerminalTitleAgentType(L.title),
		tabTitle: M.title,
		status: R ? "disabled" : "eligible",
		...R ? { disabledReason: R } : {}
	};
}
function mergeManualAgentTitleTarget(r, M) {
	r.some((r) => r.tabId === M.tabId) || r.push(M);
}
function mergeLaunchAgentTitleTarget(r, M) {
	let N = r.findIndex((r) => r.paneKey === M.paneKey);
	if (N !== -1) {
		let P = r[N];
		if (P.status === "eligible" || P.disabledReason === "Agent needs permission") return;
		r[N] = {
			...M,
			agentType: P.agentType && P.agentType !== "unknown" ? P.agentType : M.agentType,
			tabTitle: P.tabTitle || M.tabTitle
		};
		return;
	}
	r.some((r) => r.tabId === M.tabId && (r.status === "eligible" || r.disabledReason === "Agent needs permission")) || r.push(M);
}
function ReviewNotesSendMenuContent({ worktreeId: r, groupId: M, prompt: P, promptDelivery: F = "submit-after-ready", launchSource: L = "notes_send", onPromptDelivered: R }) {
	let z = P.trim().length > 0, B = useAppStore((r) => r.agentStatusByPaneKey), V = useAppStore((r) => r.tabsByWorktree), U = useAppStore((r) => r.terminalLayoutsByTabId), W = useAppStore(useShallow((M) => selectLivePtyIdsForWorktree(M, r))), G = useAppStore((r) => r.runtimePaneTitlesByTabId), K = useAppStore((r) => r.agentStatusEpoch), q = useWorktreeAgentRows(r), J = useNow(3e4), Y = (0, import_react.useMemo)(() => deriveNotesSendAgentTargets({
		agentStatusByPaneKey: B,
		tabsByWorktree: V,
		terminalLayoutsByTabId: U,
		ptyIdsByTabId: W,
		runtimePaneTitlesByTabId: G
	}, r), [
		K,
		B,
		V,
		U,
		G,
		W,
		r
	]), X = (0, import_react.useMemo)(() => orderSendTargetsByWorktreeAgentRows(Y, q), [q, Y]), Z = (0, import_react.useCallback)((r, M, P = {}) => {
		let F = toast.loading(translate("auto.components.editor.ReviewNotesSendMenuContent.50f7e753ea", "Sending notes..."));
		r().then((r) => {
			if (r.status === "sent") {
				M(), toast.success(translate("auto.components.editor.ReviewNotesSendMenuContent.bb9c69a0c9", "Notes sent."));
				return;
			}
			toast.message(activeAgentNotesSendFailureMessage(r.status, {
				explicitTarget: P.explicitTarget,
				code: r.code
			}));
		}).catch(() => {
			console.error("Failed to send notes:", { code: "runtime-unverifiable" }), toast.error(activeAgentNotesSendFailureMessage("status-unavailable", {
				explicitTarget: P.explicitTarget,
				code: "runtime-unverifiable"
			}));
		}).finally(() => {
			toast.dismiss(F);
		});
	}, []), Q = (0, import_react.useCallback)((M) => {
		if (!z || M.status !== "eligible") return;
		let N = resolveCurrentSendTargetEligibility(M, r);
		if (N.status !== "eligible") {
			toast.message(N.disabledReason);
			return;
		}
		Z(() => sendNotesToActiveAgentSession({
			worktreeId: r,
			prompt: P,
			noteTarget: {
				tabId: M.tabId,
				leafId: M.leafId
			}
		}), () => {
			R?.(), track("agent_prompt_sent", {
				agent_kind: agentKindForAgentType(M.agentType),
				launch_source: L,
				request_kind: "followup"
			});
		}, { explicitTarget: !0 });
	}, [
		z,
		Z,
		r,
		P,
		R,
		L
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: translate("auto.components.editor.ReviewNotesSendMenuContent.03378aea75", "Send notes to") }),
		X.map(({ target: r, agent: M }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentTargetMenuItem, {
			target: r,
			agent: M,
			now: J,
			disabled: !z || r.status !== "eligible",
			onSend: Q
		}, r.paneKey)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: translate("auto.components.editor.ReviewNotesSendMenuContent.a49800405b", "New agent") }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLaunchAgentMenuItems, {
			worktreeId: r,
			groupId: M,
			onFocusTerminal: focusTerminalTabSurface,
			prompt: P,
			promptDelivery: F,
			launchSource: L,
			onPromptDelivered: R
		})
	] });
}
function resolveCurrentSendTargetEligibility(r, M) {
	let N = deriveNotesSendAgentTargets(useAppStore.getState(), M).find((M) => M.paneKey === r.paneKey);
	return N ? N.status === "eligible" ? { status: "eligible" } : {
		status: "disabled",
		disabledReason: N.disabledReason ?? "Terminal is no longer available"
	} : {
		status: "disabled",
		disabledReason: "Terminal is no longer available"
	};
}
function AgentTargetMenuItem({ target: r, agent: M, now: N, disabled: P, onSend: F }) {
	let I = r.tabTitle.trim(), L = agentRowDotState(M?.state ?? "idle", M?.entry.workingMode), R = M ? formatAgentRelativeTime(M, N) : null, z = r.status === "disabled" ? r.disabledReason : void 0, B = [
		agentStateLabel(L),
		...R ? [R] : [],
		...I ? [I] : []
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
		disabled: P,
		onSelect: () => F(r),
		title: z,
		className: "min-w-[240px] gap-2 rounded-[7px] px-2 py-1.5 text-[12px] leading-5 font-medium",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStateDot, {
				state: L,
				size: "sm",
				className: "shrink-0",
				title: z ? null : void 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
				agent: agentTypeToIconAgent(r.agentType ?? M?.agentType),
				size: 14
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "grid min-w-0 flex-1 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: formatAgentTypeLabel(r.agentType ?? M?.agentType)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-[11px] font-normal text-muted-foreground",
					children: B.join(" · ")
				})]
			})
		]
	});
}
function orderSendTargetsByWorktreeAgentRows(r, M) {
	let N = new Map(r.map((r) => [r.paneKey, r])), P = /* @__PURE__ */ new Set(), F = [];
	for (let r of M) {
		let M = N.get(r.paneKey);
		M && (F.push({
			target: {
				...M,
				agentType: r.agentType
			},
			agent: r
		}), P.add(M.paneKey));
	}
	for (let M of r) P.has(M.paneKey) || F.push({
		target: M,
		agent: null
	});
	return F;
}
function formatAgentRelativeTime(r, M) {
	let N = lastEnteredDoneAt(r);
	if (N !== null) return `${formatTimeAgo(N, M)}`;
	let P = r.startedAt > 0 ? r.startedAt : r.entry.stateStartedAt;
	return P > 0 ? `${formatTimeAgo(P, M)}` : null;
}
function formatTimeAgo(r, M) {
	let N = M - r;
	if (N < 6e4) return "just now";
	let P = Math.floor(N / 6e4);
	if (P < 60) return `${P}m ago`;
	let F = Math.floor(P / 60);
	return F < 24 ? `${F}h ago` : `${Math.floor(F / 24)}d ago`;
}
export { QuickLaunchAgentMenuItems as n, useAgentDetectionTargetForWorktree as r, ReviewNotesSendMenuContent as t };
