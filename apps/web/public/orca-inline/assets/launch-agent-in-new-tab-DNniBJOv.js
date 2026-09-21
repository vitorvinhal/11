import { i as translate } from "./i18n-CakWKPtl.js";
import { Bl as getLocalProjectExecutionRuntimeContext, Dg as isNativeChatTranscriptLocalReadable, Pd as isWebTerminalSurfaceTabId, Ph as makePaneKey, Rf as getRuntimeEnvironmentIdForWorktree, Ro as reconcileTabOrder, ix as resolveTuiAgentLaunchEnv, ml as rendererAgentStatusObservations, ox as resolveLocalWindowsAgentStartupShell, rx as resolveTuiAgentLaunchArgs, t as useAppStore, vl as getConnectionIdFromState, xS as TUI_AGENT_CONFIG } from "./store-C9f8FDJV.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as track, s as tuiAgentToAgentKind } from "./telemetry-DdvWHaqb.js";
import { Xt as seedNativeChatLaunchDraftForAgentTab, Yt as deliverLaunchPromptToAgentTab, h as createWebRuntimeSessionTerminal, m as createWebRuntimeAgentSessionTerminalWithLaunchDraft, on as isWebRuntimeSessionActive, p as createWebRuntimeAgentSessionTerminal, zt as toAgentLaunchPreferences } from "./web-runtime-session-CeAC5QPx.js";
import { d as buildAgentStartupPlan, u as buildAgentDraftLaunchPlan } from "./agent-paste-draft-Ddp-k6QZ.js";
import { b as CLIENT_PLATFORM, h as initialAgentTabViewModeProps, n as seedNativeChatAppliedSessionOptions } from "./native-chat-session-option-cache-DOY0fjiI.js";
import { n as getAgentLaunchPlatformForRepo, t as resolveLiveAgentStatusConnectionRouting } from "./agent-status-connection-ownership-B1K8knO1.js";
import { m as workspaceKindForWorktreeId, r as planAgentSessionLaunch, t as beginStructuredAgentSessionProvisionalLaunch } from "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import { t as resolveInitialNativeChatSessionOptions } from "./native-chat-launch-session-options-CUf2xfmH.js";
function planLaunchAgentStartupPrompt(t) {
	let { base: o, prompt: s, promptDelivery: c, isFollowupPath: l } = t, u = s.length > 0, d = () => buildAgentStartupPlan({
		...o,
		prompt: "",
		allowEmptyPromptLaunch: !0
	}), f = (t) => ({
		startupPlan: d(),
		pasteDraftAfterLaunch: s,
		submitPastedPrompt: t
	});
	if (u && c === "submit-after-ready") return f(!0);
	if (u && c === "draft") {
		let t = buildAgentDraftLaunchPlan({
			...o,
			draft: s
		});
		return t ? {
			startupPlan: {
				agent: t.agent,
				launchCommand: t.launchCommand,
				expectedProcess: t.expectedProcess,
				followupPrompt: null,
				launchConfig: t.launchConfig,
				...t.sessionOptions ? { sessionOptions: t.sessionOptions } : {},
				...t.startupCommandDelivery ? { startupCommandDelivery: t.startupCommandDelivery } : {},
				...t.env ? { env: t.env } : {}
			},
			pasteDraftAfterLaunch: null,
			submitPastedPrompt: !1
		} : f(!1);
	}
	return u && l ? f(!1) : {
		startupPlan: buildAgentStartupPlan({
			...o,
			prompt: u ? s : "",
			allowEmptyPromptLaunch: !u
		}),
		pasteDraftAfterLaunch: null,
		submitPastedPrompt: !1
	};
}
function persistAgentLaunchTabOrder(t, o) {
	let s = useAppStore.getState(), c = (s.tabsByWorktree[t] ?? []).map((t) => t.id), l = s.openFiles.filter((o) => o.worktreeId === t).map((t) => t.id), u = (s.browserTabsByWorktree?.[t] ?? []).map((t) => t.id), f = reconcileTabOrder(s.tabBarOrderByWorktree[t], c, l, u).filter((t) => t !== o);
	f.push(o), s.setTabBarOrder(t, f);
}
function createPasteReadinessTimeoutNotice(o) {
	let s = !1;
	return {
		wasNotified: () => s,
		onTimeout: () => {
			let c = useAppStore.getState(), l = (c.tabsByWorktree[o.worktreeId] ?? []).find((t) => t.id === o.tabId);
			if (l?.ptyId !== null) {
				if (!l || c.activeWorktreeId !== o.worktreeId) {
					s = !0;
					return;
				}
				toast.message(translate("auto.lib.launch.agent.in.new.tab.a5a1f7033f", "Your {{value0}} wasn't sent — paste it once the agent is ready.", { value0: o.submitted ? "prompt" : "notes" })), s = !0, track("agent_error", {
					error_class: "paste_readiness_timeout",
					agent_kind: tuiAgentToAgentKind(o.agent)
				});
			}
		}
	};
}
function removeStaleLocalAgentTabsForWebHostLaunch(t) {
	let o = useAppStore.getState();
	for (let s of o.tabsByWorktree[t] ?? []) s.launchAgent && !isWebTerminalSurfaceTabId(s.id) && o.closeTab(s.id, { reason: "cleanup" });
}
function launchAgentInWebHostTab(o) {
	let { agent: s, worktreeId: c, environmentId: l, groupId: u, cwd: d, startupPlan: f, prompt: p, promptDelivery: m, pastePromptAfterReady: h, submitPastedPrompt: g, agentArgs: _, viewMode: y, onPromptDelivered: b } = o, x = p.length > 0, S = toAgentLaunchPreferences(f.sessionOptions), T = m === "draft" ? "draft" : "auto-submit";
	removeStaleLocalAgentTabsForWebHostLaunch(c);
	let O = {
		worktreeId: c,
		environmentId: l,
		targetGroupId: u,
		activate: !0,
		...d?.trim() ? { cwd: d } : {},
		...y ? { viewMode: y } : {},
		agentSessionKind: "fresh",
		...x ? {
			launchAgent: s,
			command: f.launchCommand,
			...f.env ? { env: f.env } : {},
			launchConfig: f.launchConfig,
			...f.startupCommandDelivery ? { startupCommandDelivery: f.startupCommandDelivery } : {}
		} : { agent: s },
		...x && h === null ? { prompt: p } : {},
		...x && h === null ? { promptDelivery: T } : {},
		..._ === void 0 ? {} : { agentArgs: _ },
		...S ? { launchPreferences: S } : {}
	}, k = ({ outcome: o, promptDelivered: l }) => (removeStaleLocalAgentTabsForWebHostLaunch(c), o.status === "failed" ? (toast.error(o.message || translate("auto.lib.launch.agent.in.new.tab.11cce5cc77", "Could not launch {{value0}} in a new terminal.", { value0: s })), {
		delivered: !1,
		failureNotified: !0
	}) : (useAppStore.getState().setActiveTabType("terminal"), x && l && b?.(), {
		delivered: l,
		failureNotified: !1
	}));
	return h === null ? x && m === "draft" ? createWebRuntimeAgentSessionTerminalWithLaunchDraft({
		...O,
		agent: s,
		launchDraft: p
	}).then((t) => k({
		outcome: t,
		promptDelivered: t.status === "created"
	})) : createWebRuntimeSessionTerminal(O).then((t) => k({
		outcome: t,
		promptDelivered: t.status === "created" && x
	})) : createWebRuntimeAgentSessionTerminal({
		...O,
		agent: s,
		promptAfterReady: h,
		submitPrompt: g,
		forcePromptPaste: m === "submit-after-ready"
	}).then(k);
}
function seedCommandCodeSubmittedPromptStatus(t, o, s) {
	let c = useAppStore.getState(), u = c.terminalLayoutsByTabId[o]?.activeLeafId;
	if (!u || !(c.tabsByWorktree[t] ?? []).some((t) => t.id === o)) return;
	let d = makePaneKey(o, u), f = c.terminalLayoutsByTabId[o]?.ptyIdsByLeafId?.[u];
	if (!f) return;
	let m = resolveLiveAgentStatusConnectionRouting({
		state: c,
		paneKey: d,
		ptyId: f,
		expectedConnectionId: getConnectionIdFromState(c, t)
	});
	if (m) try {
		c.setAgentStatus(d, {
			state: "working",
			prompt: s,
			agentType: "command-code",
			observation: rendererAgentStatusObservations.observe(d, {
				origin: "process",
				observedAt: Date.now(),
				kind: "transition"
			})
		}, void 0, void 0, m);
	} catch {}
}
function launchAgentInStructuredNewTab(t) {
	let o = beginStructuredAgentSessionProvisionalLaunch({
		plan: t.plan,
		hooks: {},
		...t.beforeOpen ? { beforeOpen: t.beforeOpen } : {},
		...t.targetGroupId ? { targetGroupId: t.targetGroupId } : {}
	});
	if (!o) return null;
	let s = o.settlement;
	return s.then((t) => {
		t.kind === "failed" && console.error("Structured agent launch failed", t.error);
	}), {
		sessionId: o.sessionId,
		tabId: o.tab.id,
		structuredSettlement: s,
		...o.promptDeliveryResult && t.plan.promptDelivery !== "draft" ? { promptDeliveryResult: o.promptDeliveryResult } : {}
	};
}
function shouldQueueTerminalFocusAfterMenuClose(t) {
	return t.surface.kind === "host-published";
}
function launchAgentInNewTabInternal(t) {
	let { agent: c, worktreeId: l, groupId: d, prompt: p, agentArgs: v, initialCwd: y, promptDelivery: C = "auto-submit", launchSource: w, quickCommandLabel: E, launchPlatform: D, onPromptDelivered: O, agentSessionLaunchPlan: k, beforeSurfaceOpen: A } = t, j = useAppStore.getState(), M = j.allWorktrees?.().find((t) => t.id === l), N = M ? j.repos?.find((t) => t.id === M.repoId) : null, P = getConnectionIdFromState(j, l), F = D ?? (N ? getAgentLaunchPlatformForRepo(N, P ? void 0 : getLocalProjectExecutionRuntimeContext(j, l)) : CLIENT_PLATFORM), I = !!P, L = resolveLocalWindowsAgentStartupShell({
		platform: F,
		isRemote: I,
		terminalWindowsShell: j.settings?.terminalWindowsShell
	}), R = j.settings?.agentCmdOverrides ?? {}, z = v === void 0 ? resolveTuiAgentLaunchArgs(c, j.settings?.agentDefaultArgs) : v, B = resolveTuiAgentLaunchEnv(c, j.settings?.agentDefaultEnv), V = p?.trim() ?? "", H = V.length > 0, U = TUI_AGENT_CONFIG[c].promptInjectionMode === "stdin-after-start", W = H && U && C === "auto-submit" ? "draft" : C, G = {
		agent: c,
		promptDelivery: W,
		launchDraftText: V,
		nativeChatTranscriptIsLocalReadable: isNativeChatTranscriptLocalReadable(P)
	}, K = initialAgentTabViewModeProps(j.settings, G), { startupPlan: q, pasteDraftAfterLaunch: J, submitPastedPrompt: Y } = planLaunchAgentStartupPrompt({
		base: {
			agent: c,
			cmdOverrides: R,
			platform: F,
			shell: L,
			isRemote: I,
			agentArgs: z,
			agentEnv: B,
			sessionOptions: resolveInitialNativeChatSessionOptions(j.settings, G)
		},
		prompt: V,
		promptDelivery: C,
		isFollowupPath: U
	}), X;
	if (!q) return null;
	let Z = getRuntimeEnvironmentIdForWorktree(j, l);
	if (isWebRuntimeSessionActive(Z)) {
		if (A?.({ kind: "host-published" }) === !1) return null;
		let t = launchAgentInWebHostTab({
			agent: c,
			worktreeId: l,
			environmentId: Z,
			groupId: d,
			cwd: y,
			startupPlan: q,
			prompt: V,
			promptDelivery: C,
			pastePromptAfterReady: J,
			submitPastedPrompt: Y,
			agentArgs: v,
			viewMode: K.viewMode ?? "terminal",
			onPromptDelivered: O
		});
		return {
			surface: { kind: "host-published" },
			startupPlan: q,
			pasteDraftAfterLaunch: J !== null,
			...J !== null && C === "submit-after-ready" ? { promptDeliveryResult: t } : {}
		};
	}
	let Q = k ?? planAgentSessionLaunch(j, {
		agent: c,
		workspace: {
			kind: workspaceKindForWorktreeId(l),
			worktreeId: l
		},
		prompt: V,
		promptDelivery: W,
		tuiCustomization: { cwd: y },
		initialSessionOptions: q.sessionOptions,
		onPromptDelivered: O
	});
	if (Q?.route === "structured-native-chat") {
		let t = launchAgentInStructuredNewTab({
			plan: Q,
			...A ? { beforeOpen: (t) => A({
				kind: "local-agent-session",
				sessionId: t
			}) } : {},
			...d ? { targetGroupId: d } : {}
		});
		return t ? {
			surface: {
				kind: "local-agent-session",
				tabId: t.tabId,
				sessionId: t.sessionId
			},
			startupPlan: q,
			pasteDraftAfterLaunch: !1,
			structuredSettlement: t.structuredSettlement,
			...t.promptDeliveryResult ? { promptDeliveryResult: t.promptDeliveryResult } : {}
		} : null;
	}
	if (A?.({ kind: "local-terminal" }) === !1) return null;
	let $ = j.createTab(l, d, void 0, {
		launchAgent: c,
		quickCommandLabel: E,
		...K
	});
	if (seedNativeChatAppliedSessionOptions($.id, c, q.sessionOptions), y?.trim() && j.queueTabInitialCwd($.id, y), j.queueTabStartupCommand($.id, {
		command: q.launchCommand,
		...q.env ? { env: q.env } : {},
		launchConfig: q.launchConfig,
		launchAgent: c,
		...v === void 0 ? {} : { agentArgsOverride: v },
		...q.sessionOptions ? { sessionOptions: q.sessionOptions } : {},
		...q.startupCommandDelivery ? { startupCommandDelivery: q.startupCommandDelivery } : {},
		...c === "command-code" && H && C === "auto-submit" ? { initialAgentStatus: {
			agent: c,
			prompt: V
		} } : {},
		telemetry: {
			agent_kind: tuiAgentToAgentKind(c),
			launch_source: w ?? "tab_bar_quick_launch",
			request_kind: "new"
		}
	}), H && C === "draft" && J === null && seedNativeChatLaunchDraftForAgentTab({
		tabId: $.id,
		agent: c,
		text: V
	}), J !== null) {
		let t = createPasteReadinessTimeoutNotice({
			worktreeId: l,
			tabId: $.id,
			agent: c,
			submitted: Y
		}), o = deliverLaunchPromptToAgentTab({
			tabId: $.id,
			content: J,
			agent: c,
			submit: Y,
			forcePaste: C === "submit-after-ready",
			onTimeout: t.onTimeout
		}).then((o) => (o && (c === "command-code" && Y && seedCommandCodeSubmittedPromptStatus(l, $.id, V), O?.()), {
			delivered: o,
			failureNotified: !o && t.wasNotified()
		}));
		C === "submit-after-ready" ? X = o : o.catch((t) => console.error("Prompt delivery failed after launch", t));
	} else H && O?.();
	return j.setActiveTabType("terminal"), persistAgentLaunchTabOrder(l, $.id), {
		surface: {
			kind: "local-terminal",
			tabId: $.id
		},
		startupPlan: q,
		pasteDraftAfterLaunch: J !== null,
		...X ? { promptDeliveryResult: X } : {}
	};
}
function launchAgentInNewTab(t) {
	return launchAgentInNewTabInternal(t);
}
export { shouldQueueTerminalFocusAfterMenuClose as n, launchAgentInNewTab as t };
