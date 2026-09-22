import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { en as Timer } from "./worktree-activation-u-wSAPlP.js";
import { a as getAgentGeneratedTabTitlesDescription, i as getAgentStatusHooksTitle, l as matchesSettingsSearch, o as getAgentGeneratedTabTitlesTitle, r as getAgentStatusHooksDescription, s as getAgentCacheTimerSearchEntries } from "./useWindowsTerminalCapabilityOwnerKey-D1wWmCoL.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as GitFork } from "./git-fork-DPjDCwfx.js";
import { t as Info } from "./info-CS7SIWrO.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as Terminal } from "./terminal-DVHlU3bc.js";
import { $b as getTuiAgentDefaultArgs, Cg as normalizeGlobalWindowsRuntimeDefault, Ih as parsePaneKey, O as getHostSettingOverride, Qb as HEX_COLOR_RE, Sx as resolveAgentPermissionModeSummary, T as clearHostSettingOverride, Tb as SSH_TERMINATE_RECONNECT_REQUIRED, Xb as normalizeLeftSidebarTintColor, Xc as isLiveResumeAnchorForCompletedAgent, ZS as getRepoExecutionHostId, Zb as normalizeLeftSidebarTintOpacity, bn as isPairedWebClientWindow, dl as getAgentResumeArgv, ex as getTuiAgentDefaultEnv, fl as isResumableTuiAgent, iC as parseExecutionHostId, iS as normalizeDisabledTuiAgents, ix as resolveTuiAgentLaunchEnv, k as setHostSettingOverride, kp as parseRemoteRuntimePtyId, rS as isTuiAgentEnabled, rx as resolveTuiAgentLaunchArgs, sC as toSshExecutionHostId, ss as resolveEffectiveTerminalAppearance, t as useAppStore, xx as applyAgentPermissionMode } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Label } from "./label-CA70r2No.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-X9Gmv_Pu.js";
import { n as SwitchIndicator } from "./switch-iHg-WoiR.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { E as yieldToEventLoop, S as getUtf8ChunkEndIndex, p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { c as keybindingMatchesInput, d as getEffectiveKeybindingsForDefinition } from "./keybindings-1v53ESY9.js";
import { n as normalizeComputerAwakeMode, t as computerAwakeSettingsForMode } from "./computer-awake-mode-DEFoqKd7.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as getAllWorktreesFromState } from "./selectors-Cdg4hUQI.js";
import { n as getAgentCatalog, t as AgentIcon } from "./agent-catalog-Cgr0_vcs.js";
import { t as getShortcutPlatform } from "./shortcut-platform-yj_laTMg.js";
import { a as SettingsSegmentedControl, c as SettingsSwitchRow, i as SettingsRow, o as SettingsSubsectionHeader, r as SettingsBadge, s as SettingsSwitch } from "./SettingsFormControls-Btf2QMz3.js";
import { a as TEXT_CONTROL_PASTE_CHUNK_MAX_BYTES, n as measureTextControlPasteByteLengthWithYield, o as TEXT_CONTROL_PASTE_DIRECT_MAX_BYTES, r as pasteTextIntoTextControl, s as TEXT_CONTROL_PASTE_MAX_BYTES, t as measureTextControlPasteByteLength } from "./text-control-paste-Bg1FpWOl.js";
import { t as useDetectedAgents } from "./useDetectedAgents-DERj8Q7s.js";
import { i as getAgentAwakeTitle, n as getAgentAwakeModeLabel, r as getAgentAwakeSearchKeywords, t as getAgentAwakeDescription } from "./agent-awake-copy-DMK3WmIm.js";
import { r as pluginCommandKeybindingActionId } from "./plugin-manifest-IOUR3zA1.js";
import { a as readPrimarySelectionText, o as setPrimarySelectionEnabled, r as consumePrimarySelectionNativePasteSuppression, s as setPrimarySelectionText } from "./primary-selection-WP9lhEQ-.js";
import { F as isPrimarySelectionTextControl, I as readCurrentPrimarySelectionText } from "./terminal-appearance-B9tHgkOd.js";
import { a as isMacUserAgent, i as isLinuxUserAgent } from "./pane-helpers-DtKF6qK0.js";
var PanelLeft = createLucideIcon("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]);
function lastInputBlocksHibernation(e, C) {
	if (C >= e.stateStartedAt) {
		if (e.state === "working" || e.state === "done") return !0;
		if (C > e.stateStartedAt) return !1;
	}
	for (let w = e.stateHistory.length - 1; w >= 0; w--) {
		let T = e.stateHistory[w];
		if (!(!T || C < T.startedAt)) {
			if (T.state === "working") return !0;
			if (C > T.startedAt) return !1;
		}
	}
	return !1;
}
function toRuntimePtyId(e) {
	return parseRemoteRuntimePtyId(e)?.handle ?? e;
}
function getEntryTabId(e) {
	return e.tabId ? e.tabId : parsePaneKey(e.paneKey)?.tabId ?? null;
}
function getPaneLivePtyId(e, C) {
	let w = parsePaneKey(e.paneKey);
	if (!w || e.tabId && w.tabId !== e.tabId) return null;
	let T = C?.ptyIdsByLeafId?.[w.leafId];
	return T ? {
		leafId: w.leafId,
		ptyId: T
	} : null;
}
var hasUnsettledOrUnknownDispatch = ({ orchestration: e }) => e ? ![
	"completed",
	"failed",
	"circuit_broken"
].includes(e.dispatchStatus ?? "") : !1;
function getEligiblePane(e) {
	let { entry: C, tab: w, layout: T, livePtyIds: E, sleepingAgentSessionsByPaneKey: D, lastTerminalInputAtByPaneKey: O, foregroundTerminalLastSeenAtByTabId: k, ptyBindingFirstSeenAtByPaneKey: A, boundaryResolvedAtByPaneKey: j, mobileLockedPtyIds: M } = e, N = D[C.paneKey], P = isLiveResumeAnchorForCompletedAgent(C, N, w.worktreeId);
	if (C.state !== "done" || C.interrupted === !0 || C.subagents?.length || hasUnsettledOrUnknownDispatch(C) || N && !P || getEntryTabId(C) !== w.id || C.worktreeId && C.worktreeId !== w.worktreeId || !C.agentType || !isResumableTuiAgent(C.agentType) || !C.providerSession || !getAgentResumeArgv(C.agentType, C.providerSession)) return null;
	let F = [
		C.stateStartedAt,
		k[w.id],
		A[C.paneKey],
		j[C.paneKey]
	], I = Math.max(...F.map((e) => typeof e == "number" && Number.isFinite(e) ? e : 0));
	if (e.now - I < e.idleMs) return null;
	let L = O[C.paneKey];
	if (typeof L == "number" && Number.isFinite(L) && lastInputBlocksHibernation(C, L)) return null;
	let R = getPaneLivePtyId(C, T);
	if (!R) return null;
	let { leafId: z, ptyId: B } = R, V = toRuntimePtyId(B);
	return !E.has(V) || M.has(V) ? null : {
		paneKey: C.paneKey,
		tabId: w.id,
		leafId: z,
		ptyId: B,
		runtimePtyId: V,
		agentType: C.agentType,
		providerSessionKey: C.providerSession.key,
		providerSessionId: C.providerSession.id,
		providerTranscriptPath: C.providerSession.transcriptPath ?? "",
		state: C.state,
		stateStartedAt: C.stateStartedAt,
		effectiveIdleStart: I,
		inputAt: typeof L == "number" && Number.isFinite(L) ? L : 0
	};
}
const MIN_AGENT_HIBERNATION_IDLE_MS = 60 * 1e3, MAX_AGENT_HIBERNATION_IDLE_MS = 1440 * 60 * 1e3;
function getEffectiveAgentHibernationIdleMs(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 6e4 && e <= 864e5 ? e : 18e5;
}
function getLivePtyIdsForTab(e, C, w, T) {
	let E = /* @__PURE__ */ new Set();
	for (let C of w?.[e.worktreeId] ?? []) typeof C == "string" && C.length > 0 && E.add(toRuntimePtyId(C));
	if (!T) for (let w of C[e.id] ?? []) typeof w == "string" && w.length > 0 && E.add(toRuntimePtyId(w));
	return [...E];
}
function signatureFor(e, C) {
	return `${e}|${C.slice().sort((e, C) => e.paneKey.localeCompare(C.paneKey)).map((e) => `${e.paneKey}:${e.ptyId}:${e.runtimePtyId}:${e.agentType}:${e.providerSessionKey}:${e.providerSessionId}:${e.providerTranscriptPath}:${e.state}:${e.stateStartedAt}:${e.effectiveIdleStart}:${e.inputAt}`).join("|")}`;
}
function candidateIdFor(e, C) {
	return `${e}|${C}`;
}
function getAgentEntriesByTabId(e) {
	let C = /* @__PURE__ */ new Map();
	for (let w of Object.values(e)) {
		if (!w) continue;
		let e = getEntryTabId(w);
		if (!e) continue;
		let T = C.get(e);
		T ? T.push(w) : C.set(e, [w]);
	}
	return C;
}
function planAgentHibernationCandidates(e) {
	if (e.settings?.experimentalAgentHibernation !== !0) return [];
	let C = getEffectiveAgentHibernationIdleMs(e.settings.agentHibernationIdleMs), w = new Set(e.mobileLockedPtyIds.map(toRuntimePtyId)), T = new Set(e.foregroundTerminalTabIds), E = new Set(e.runtimeLivenessRequiredWorktreeIds ?? []), D = getAgentEntriesByTabId(e.agentStatusByPaneKey), O = [];
	for (let [k, A] of Object.entries(e.tabsByWorktree)) if (!(!k || A.length === 0) && !(E.has(k) && !Object.hasOwn(e.runtimeLivePtyIdsByWorktreeId ?? {}, k))) for (let j of A) {
		if (T.has(j.id)) continue;
		let A = getLivePtyIdsForTab(j, e.ptyIdsByTabId, e.runtimeLivePtyIdsByWorktreeId, E.has(k));
		if (A.length === 0) continue;
		let M = e.terminalLayoutsByTabId[j.id];
		for (let T of D.get(j.id) ?? []) {
			let E = getEligiblePane({
				entry: T,
				tab: j,
				layout: M,
				livePtyIds: new Set(A),
				sleepingAgentSessionsByPaneKey: e.sleepingAgentSessionsByPaneKey,
				lastTerminalInputAtByPaneKey: e.lastTerminalInputAtByPaneKey,
				foregroundTerminalLastSeenAtByTabId: e.foregroundTerminalLastSeenAtByTabId,
				ptyBindingFirstSeenAtByPaneKey: e.ptyBindingFirstSeenAtByPaneKey ?? {},
				boundaryResolvedAtByPaneKey: e.boundaryResolvedAtByPaneKey ?? {},
				mobileLockedPtyIds: w,
				now: e.now,
				idleMs: C
			});
			E && O.push({
				id: candidateIdFor(k, E.paneKey),
				worktreeId: k,
				paneKey: E.paneKey,
				tabId: E.tabId,
				leafId: E.leafId,
				paneKeys: [E.paneKey],
				targetPtyIds: [E.ptyId],
				expectedRuntimePtyIds: [E.runtimePtyId],
				signature: signatureFor(k, [E])
			});
		}
	}
	return O.sort((e, C) => e.worktreeId.localeCompare(C.worktreeId) || e.paneKey.localeCompare(C.paneKey));
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
const MANAGE_SESSIONS_SECTION_ID = "terminal-manage-sessions";
function useMacTccAttributionSevered(e = 0) {
	let [C, w] = (0, import_react.useState)(!1), T = (0, import_react.useCallback)(async () => {
		try {
			let { health: e } = await window.api.pty.management.macTccAttribution();
			w(e === "severed");
		} catch {
			w(!1);
		}
	}, []);
	return (0, import_react.useEffect)(() => {
		T();
		let e = () => {
			T();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, [T, e]), C;
}
function TerminalTccAttributionNotice(e) {
	let C = useMacTccAttributionSevered(e.refreshRevision), E = useAppStore((e) => e.openSettingsTarget), D = useAppStore((e) => e.openSettingsPage), O = useAppStore((e) => e.setSettingsSearchQuery);
	return C ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "alert",
		className: "flex items-start justify-between gap-4 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-amber-700 dark:text-amber-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-start gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: translate("auto.components.settings.TerminalTccAttributionNotice.title", "macOS permission grants aren’t reaching terminals")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-snug",
					children: translate("auto.components.settings.TerminalTccAttributionNotice.body", "The terminal daemon was started by an Orca install that no longer exists, so macOS can’t attribute its commands to Orca — Accessibility and Automation grants are silently ignored (osascript fails with error -25211). Restarting the daemon fixes this; running terminal sessions will close.")
				})]
			})]
		}), e.showManageSessionsButton !== !1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			size: "sm",
			className: "shrink-0",
			onClick: () => {
				O(""), E({
					pane: "terminal",
					repoId: null,
					sectionId: MANAGE_SESSIONS_SECTION_ID
				}), D();
			},
			children: translate("auto.components.settings.TerminalTccAttributionNotice.openManageSessions", "Open Manage Sessions")
		})]
	}) : null;
}
var WINDOWS_DRIVE_PATH_PATTERN = /^[A-Za-z]:/;
function isAbsoluteSparseDirectoryPath(e) {
	let C = e.trim();
	return C.startsWith("/") || C.startsWith("\\") || WINDOWS_DRIVE_PATH_PATTERN.test(C);
}
function forEachSparseDirectoryInputLine(e, C) {
	let w = 0;
	for (let T = 0; T <= e.length; T += 1) {
		if (T < e.length && e.charCodeAt(T) !== 10) continue;
		let E = T > w && e.charCodeAt(T - 1) === 13 ? T - 1 : T;
		if (C(e.slice(w, E)) === !1) return;
		w = T + 1;
	}
}
function normalizeSparseDirectoryLines(e) {
	let C = /* @__PURE__ */ new Set(), w = [];
	return forEachSparseDirectoryInputLine(e, (e) => {
		let T = e.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
		T.length === 0 || C.has(T) || (C.add(T), w.push(T));
	}), w;
}
function hasSparseDirectoryParentSegment(e) {
	let C = 0;
	for (let w = 0; w <= e.length; w += 1) if (!(w < e.length && e[w] !== "/")) {
		if (e.slice(C, w) === "..") return !0;
		C = w + 1;
	}
	return !1;
}
function sparseDirectoriesMatch(e, C) {
	if (e.length !== C.length) return !1;
	let w = new Set(e);
	return C.every((e) => w.has(e));
}
function parseSparsePresetDirectories(e) {
	let C = !1;
	if (forEachSparseDirectoryInputLine(e, (e) => {
		let w = e.trim();
		if (w.length !== 0 && isAbsoluteSparseDirectoryPath(w)) return C = !0, !1;
	}), C) return {
		directories: [],
		error: translate("auto.lib.sparse.preset.draft.5915a0a1f6", "Use repo-relative directories, not root, absolute paths, or parent segments.")
	};
	let T = normalizeSparseDirectoryLines(e);
	return T.length === 0 ? {
		directories: T,
		error: translate("auto.lib.sparse.preset.draft.efc05d1820", "Add at least one directory.")
	} : T.some((e) => e === "." || hasSparseDirectoryParentSegment(e)) ? {
		directories: [],
		error: translate("auto.lib.sparse.preset.draft.5915a0a1f6", "Use repo-relative directories, not root, absolute paths, or parent segments.")
	} : {
		directories: T,
		error: null
	};
}
function SearchableSetting({ title: e, description: C, forceVisible: w = !1, keywords: T, children: D, className: O, id: k }) {
	let A = useAppStore((e) => e.settingsSearchQuery);
	return !w && !matchesSettingsSearch(A, {
		title: e,
		description: C,
		keywords: T
	}) ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("scroll-mt-6 w-full max-w-3xl", O),
		id: k,
		children: D
	});
}
function AgentAwakeSetting({ settings: e, updateSettings: C }) {
	let w = getAgentAwakeTitle(), T = getAgentAwakeDescription(), E = normalizeComputerAwakeMode(e.computerAwakeMode, e.keepComputerAwakeWhileAgentsRun);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "space-y-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchableSetting, {
			title: w,
			description: T,
			keywords: getAgentAwakeSearchKeywords(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 space-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: T
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSegmentedControl, {
					value: E,
					onChange: (e) => {
						C(computerAwakeSettingsForMode(e));
					},
					ariaLabel: w,
					size: "sm",
					options: [
						{
							value: "on",
							label: getAgentAwakeModeLabel("on")
						},
						{
							value: "auto",
							label: getAgentAwakeModeLabel("auto")
						},
						{
							value: "off",
							label: getAgentAwakeModeLabel("off")
						}
					]
				})]
			})
		})
	});
}
function AgentCacheTimerSection({ settings: e, updateSettings: C }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSubsectionHeader, {
				title: translate("auto.components.settings.AgentCacheTimerSection.a137f8854d", "Prompt Cache Timer"),
				description: translate("auto.components.settings.AgentCacheTimerSection.fe590653c1", "Claude caches your conversation to reduce costs. When idle too long the cache expires and the next message resends full context at higher cost. This shows a countdown so you know when to resume.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SearchableSetting, {
				title: translate("auto.components.settings.AgentCacheTimerSection.b4e7302944", "Cache Timer"),
				description: translate("auto.components.settings.AgentCacheTimerSection.9c20253679", "Show a countdown after a Claude agent becomes idle."),
				keywords: getAgentCacheTimerSearchEntries().flatMap((e) => [
					e.title,
					e.description ?? "",
					...e.keywords ?? []
				]),
				className: "flex items-center justify-between gap-4 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 space-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: translate("auto.components.settings.AgentCacheTimerSection.b4e7302944", "Cache Timer") })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: translate("auto.components.settings.AgentCacheTimerSection.487b176240", "Show a countdown in the sidebar after a Claude agent becomes idle.")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSwitch, {
					ariaLabel: translate("auto.components.settings.AgentCacheTimerSection.b4e7302944", "Cache Timer"),
					checked: e.promptCacheTimerEnabled,
					onChange: () => {
						let w = !e.promptCacheTimerEnabled;
						C({ promptCacheTimerEnabled: w }), w && useAppStore.getState().seedCacheTimersForIdleTabs();
					}
				})]
			}),
			e.promptCacheTimerEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SearchableSetting, {
				title: translate("auto.components.settings.AgentCacheTimerSection.a2a8962138", "Timer Duration"),
				description: translate("auto.components.settings.AgentCacheTimerSection.80c454e8a6", "Match this to your provider's cache TTL."),
				keywords: [
					"cache",
					"timer",
					"duration",
					"ttl"
				],
				className: "flex items-center justify-between gap-4 py-2 pl-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 space-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: translate("auto.components.settings.AgentCacheTimerSection.a2a8962138", "Timer Duration") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: translate("auto.components.settings.AgentCacheTimerSection.8b9e202e0a", "Match this to your provider's cache TTL. The default is 5 minutes.")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: String(e.promptCacheTtlMs),
					onValueChange: (e) => C({ promptCacheTtlMs: Number(e) }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						size: "sm",
						className: "h-7 text-xs w-[120px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "300000",
						children: translate("auto.components.settings.AgentCacheTimerSection.54395ecd7c", "5 minutes")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "3600000",
						children: translate("auto.components.settings.AgentCacheTimerSection.05de84a104", "1 hour")
					})] })]
				})]
			})
		]
	});
}
var EMPTY_WSL_DISTROS = [], NO_DISTRO_VALUE = "__select_wsl_distro__";
function getHostRuntimeLabel() {
	return typeof navigator < "u" && navigator.userAgent.includes("Windows") ? "Windows" : "This device";
}
function AgentRuntimeSetting({ settings: e, updateSettings: C, refresh: T, wslSupportedPlatform: E = !1, wslAvailable: D = !1, wslDistros: O = EMPTY_WSL_DISTROS, wslCapabilitiesLoading: k = !1 }) {
	if (!E) return null;
	let A = normalizeGlobalWindowsRuntimeDefault(e.localWindowsRuntimeDefault), j = getNextWslDistro(A, O), M = getVisibleDistroOptions(A, O), N = (e) => {
		Promise.resolve(C(e)).then(() => T());
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "space-y-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsRow, {
			label: translate("auto.components.settings.AgentRuntimeSetting.label", "Agent runtime"),
			alignTop: !0,
			description: getDescription(A, D, k),
			control: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-52 flex-col items-stretch gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSegmentedControl, {
					ariaLabel: translate("auto.components.settings.AgentRuntimeSetting.label", "Agent runtime"),
					value: A.kind,
					onChange: (e) => {
						if (e === "windows-host") {
							N({ localWindowsRuntimeDefault: { kind: "windows-host" } });
							return;
						}
						j && N({ localWindowsRuntimeDefault: {
							kind: "wsl",
							distro: j
						} });
					},
					equalWidth: !0,
					options: [{
						value: "windows-host",
						label: getHostRuntimeLabel()
					}, {
						value: "wsl",
						label: translate("auto.components.settings.AgentRuntimeSetting.wsl", "WSL"),
						disabled: k || !D || !j
					}]
				}), A.kind === "wsl" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: A.distro ?? NO_DISTRO_VALUE,
					onValueChange: (e) => {
						e !== NO_DISTRO_VALUE && N({ localWindowsRuntimeDefault: {
							kind: "wsl",
							distro: e
						} });
					},
					disabled: k || !D,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						size: "sm",
						className: "w-full min-w-52",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: k ? translate("auto.components.settings.AgentRuntimeSetting.loadingWsl", "Loading WSL") : translate("auto.components.settings.AgentRuntimeSetting.selectDistro", "Select distro") })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [A.distro ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: NO_DISTRO_VALUE,
						children: translate("auto.components.settings.AgentRuntimeSetting.selectDistro", "Select distro")
					}), M.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: e,
						children: e
					}, e))] })]
				}) : null]
			})
		})
	});
}
function getNextWslDistro(e, C) {
	return e.kind === "wsl" && e.distro?.trim() ? e.distro.trim() : C.find((e) => e.trim().length > 0) ?? null;
}
function getVisibleDistroOptions(e, C) {
	let w = [...C];
	return e.kind === "wsl" && e.distro && !w.includes(e.distro) ? [e.distro, ...w] : w;
}
function getDescription(e, C, T) {
	return e.kind === "windows-host" ? translate("auto.components.settings.AgentRuntimeSetting.windowsDescription", "Detect and launch agents on Windows for projects that do not override their runtime.") : !C && !T ? translate("auto.components.settings.AgentRuntimeSetting.wslUnavailable", "WSL is not available on this machine.") : e.distro ? translate("auto.components.settings.AgentRuntimeSetting.wslDescription", "Detect and launch agents in {{value0}} via WSL for projects that do not override their runtime.", { value0: e.distro }) : translate("auto.components.settings.AgentRuntimeSetting.distroRequired", "Choose a WSL distro before projects can inherit WSL.");
}
function findWslSourceHomeKey(e, C) {
	let w = C.trim().toLowerCase();
	return Object.keys(e ?? {}).find((e) => e.trim().toLowerCase() === w);
}
function buildCodexSessionSourceHomeControl(e, C) {
	let w = normalizeGlobalWindowsRuntimeDefault(e.localWindowsRuntimeDefault), T = e.codexSessionSourceHome, E = w.kind === "wsl" ? w.distro?.trim() : void 0;
	if (E) {
		let w = findWslSourceHomeKey(T?.wsl, E);
		return {
			runtimeLabel: `${E}: ~/.codex`,
			value: (w ? T?.wsl?.[w] : void 0) ?? "",
			onSave: (T) => saveCodexSessionSourceHome(e, C, {
				runtime: "wsl",
				distro: w ?? E,
				value: T
			})
		};
	}
	return {
		runtimeLabel: "~/.codex",
		value: T?.host ?? "",
		onSave: (w) => saveCodexSessionSourceHome(e, C, {
			runtime: "host",
			value: w
		})
	};
}
function saveCodexSessionSourceHome(e, C, w) {
	let T = e.codexSessionSourceHome ?? {}, E = w.value.trim();
	if (w.runtime === "host") {
		C({ codexSessionSourceHome: {
			...T,
			host: E || void 0
		} });
		return;
	}
	let D = { ...T.wsl }, O = findWslSourceHomeKey(D, w.distro) ?? w.distro;
	E ? D[O] = E : delete D[O], C({ codexSessionSourceHome: {
		...T,
		wsl: Object.keys(D).length > 0 ? D : void 0
	} });
}
function AgentSessionSourceHomeInput({ runtimeLabel: e, value: C, onSave: E }) {
	let [D, O] = (0, import_react.useState)(C), k = () => {
		E(D.trim());
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5 text-xs text-muted-foreground",
			children: [translate("auto.components.settings.AgentsPane.codexSessionSource", "Codex home to import from"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": translate("auto.components.settings.AgentsPane.codexSessionSourceInfo", "About importing Codex history"),
					className: "grid size-4 place-items-center rounded text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "top",
				sideOffset: 6,
				className: "max-w-xs",
				children: translate("auto.components.settings.AgentsPane.codexSessionSourceTooltip", "Orca runs Codex in an isolated home. Point this at your existing Codex home to import that session history. Empty uses ~/.codex.")
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: D,
				onChange: (e) => O(e.target.value),
				onBlur: k,
				onKeyDown: (e) => {
					e.key === "Enter" && (k(), e.currentTarget.blur()), e.key === "Escape" && (O(C), e.currentTarget.blur());
				},
				placeholder: e,
				spellCheck: !1,
				className: "h-7 flex-1 font-mono text-xs"
			}), C.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "xs",
				onClick: () => {
					E(""), O("");
				},
				className: "h-7 shrink-0 text-xs text-muted-foreground hover:text-foreground",
				children: translate("auto.components.settings.AgentsPane.5200dac9da", "Reset")
			})]
		})]
	});
}
function buildSummaries() {
	return {
		sourceControlAiDefaults: {
			ownership: "client-default",
			label: translate("auto.components.settings.settingOwnership.clientDefault", "Client default"),
			description: translate("auto.components.settings.settingOwnership.sourceControlAiDefaults", "Recipes, prompts, and hosted-review defaults are shared by this client; model choices and discovery stay scoped to the host where the agent runs.")
		},
		repositorySourceControlAi: {
			ownership: "project-host-setup",
			label: translate("auto.components.settings.settingOwnership.projectOnThisHost", "Project on this host"),
			description: translate("auto.components.settings.settingOwnership.repositorySourceControlAi", "These overrides apply to this project setup and inherit the client Source Control AI defaults until customized.")
		},
		agentLaunchDefaults: {
			ownership: "client-default",
			label: translate("auto.components.settings.settingOwnership.clientDefault", "Client default"),
			description: translate("auto.components.settings.settingOwnership.agentLaunchDefaults", "Default agent, command overrides, CLI arguments, and launch environment are client preferences. SSH and remote server launches still validate host availability at run time.")
		},
		terminalQuickCommands: {
			ownership: "host-collection",
			label: translate("auto.components.settings.settingOwnership.hostCollectionProjectScopes", "Host collection + project scopes"),
			description: translate("auto.components.settings.settingOwnership.terminalQuickCommandHostCollections", "Commands are saved on the selected Orca host, then scoped globally or to a project setup. Commands from this device also remain available in remote workspaces.")
		},
		workspaceDirectory: {
			ownership: "host-override",
			label: translate("auto.components.settings.settingOwnership.hostOverride", "Host override"),
			description: translate("auto.components.settings.settingOwnership.workspaceDirectory", "The client default is inherited until a host needs its own worktree directory.")
		},
		providerAccounts: {
			ownership: "provider-host",
			label: translate("auto.components.settings.settingOwnership.providerHost", "Provider host"),
			description: translate("auto.components.settings.settingOwnership.providerAccounts", "Credentials and account checks belong to the local client or selected remote server that owns the provider integration.")
		}
	};
}
function getSettingOwnershipSummary(e) {
	return buildSummaries()[e];
}
function buildAgentAvailabilitySettingsUpdate(e, C, w) {
	let T = normalizeDisabledTuiAgents(e.disabledTuiAgents);
	return {
		disabledTuiAgents: w ? T.filter((e) => e !== C) : T.includes(C) ? T : [...T, C],
		...e.defaultTuiAgent === C && !w ? { defaultTuiAgent: null } : {}
	};
}
function createAgentAvailabilityUpdateQueue() {
	let e = Promise.resolve();
	return ({ getSettings: C, fallbackSettings: w, updateSettings: T, agentId: E, enabled: D }) => (e = e.catch(() => {}).then(() => T(buildAgentAvailabilitySettingsUpdate(C() ?? w, E, D))), e.then(() => void 0));
}
function stringifyAgentDefaultEnvDraft(e) {
	return Object.entries(e).map(([e, C]) => `${e}=${C}`).join(" ");
}
function parseAgentDefaultEnvDraft(e) {
	if (isClipboardTextByteLengthOverLimit(e, 8192)) return {
		env: {},
		tooLarge: !0
	};
	let C = {};
	for (let w of getAgentDefaultEnvDraftPairs(e)) {
		let e = w.indexOf("=");
		if (e <= 0) continue;
		let T = w.slice(0, e).trim();
		T && (C[T] = w.slice(e + 1));
	}
	return {
		env: C,
		tooLarge: !1
	};
}
function getAgentDefaultEnvDraftPairs(e) {
	let C = [], w = -1;
	for (let T = 0; T <= e.length; T += 1) {
		if (T !== e.length && !isAgentDefaultEnvDraftWhitespace(e.charCodeAt(T))) {
			w === -1 && (w = T);
			continue;
		}
		w !== -1 && (C.push(e.slice(w, T)), w = -1);
	}
	return C;
}
function isAgentDefaultEnvDraftWhitespace(e) {
	return e === 32 || e >= 9 && e <= 13 || e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function AgentCommandOverrideInput({ defaultCmd: e, cmdOverride: C, onSaveOverride: E }) {
	let D = C ?? e, [O, k] = (0, import_react.useState)(D), A = () => {
		let C = O.trim();
		!C || C === e ? (E(""), k(e)) : E(C);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted-foreground",
			children: translate("auto.components.settings.AgentsPane.2e45ca29b6", "Command")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: O,
				onChange: (e) => k(e.target.value),
				onBlur: A,
				onKeyDown: (e) => {
					e.key === "Enter" && (A(), e.currentTarget.blur()), e.key === "Escape" && (k(D), e.currentTarget.blur());
				},
				placeholder: e,
				spellCheck: !1,
				className: "h-7 flex-1 font-mono text-xs"
			}), C && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "xs",
				onClick: () => {
					E(""), k(e);
				},
				className: "h-7 shrink-0 text-xs text-muted-foreground hover:text-foreground",
				children: translate("auto.components.settings.AgentsPane.5200dac9da", "Reset")
			})]
		})]
	});
}
function AgentDefaultArgsInput({ defaultArgs: e, argsOverride: C, onSaveArgs: E }) {
	let [D, O] = (0, import_react.useState)(C), k = () => E(D.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted-foreground",
			children: translate("auto.components.settings.AgentsPane.cfb3f35775", "Arguments")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: D,
				onChange: (e) => O(e.target.value),
				onBlur: k,
				onKeyDown: (e) => {
					e.key === "Enter" && (k(), e.currentTarget.blur()), e.key === "Escape" && (O(C), e.currentTarget.blur());
				},
				placeholder: e || translate("auto.components.settings.AgentsPane.6f99bf5dd0", "No default arguments"),
				spellCheck: !1,
				className: "h-7 flex-1 font-mono text-xs"
			}), C !== e && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "xs",
				onClick: () => {
					E(e), O(e);
				},
				className: "h-7 shrink-0 text-xs text-muted-foreground hover:text-foreground",
				children: translate("auto.components.settings.AgentsPane.5200dac9da", "Reset")
			})]
		})]
	});
}
function AgentDefaultEnvInput({ defaultEnv: e, envOverride: C, onSaveEnv: D }) {
	let O = stringifyAgentDefaultEnvDraft(e), k = stringifyAgentDefaultEnvDraft(C), [A, j] = (0, import_react.useState)(k), [M, N] = (0, import_react.useState)(!1), P = (0, import_react.useId)(), F = () => {
		let e = parseAgentDefaultEnvDraft(A);
		N(e.tooLarge), e.tooLarge || D(e.env);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: translate("auto.components.settings.AgentsPane.8fbe1f37c1", "Environment")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: A,
					onChange: (e) => {
						j(e.target.value), M && N(!1);
					},
					onBlur: F,
					onKeyDown: (e) => {
						e.key === "Enter" && (F(), e.currentTarget.blur()), e.key === "Escape" && (j(k), N(!1), e.currentTarget.blur());
					},
					placeholder: O || translate("auto.components.settings.AgentsPane.2d133152fa", "No default environment"),
					spellCheck: !1,
					"aria-invalid": M || void 0,
					"aria-describedby": M ? P : void 0,
					className: cn("h-7 flex-1 font-mono text-xs", M && "border-destructive/50 bg-destructive/5")
				}), k !== O && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "xs",
					onClick: () => {
						D(e), j(O), N(!1);
					},
					className: "h-7 shrink-0 text-xs text-muted-foreground hover:text-foreground",
					children: translate("auto.components.settings.AgentsPane.5200dac9da", "Reset")
				})]
			}),
			M && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: P,
				className: "mt-1 text-[11px] text-destructive",
				children: translate("auto.components.settings.AgentsPane.3f1bdf3cb4", "Environment text is too large to parse safely.")
			})
		]
	});
}
function AgentAvailabilityControl({ label: e, isEnabled: C, onSetEnabled: T }) {
	let E = C ? "enabled" : "disabled";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSegmentedControl, {
		value: E,
		onChange: (e) => {
			e !== E && T(e === "enabled");
		},
		ariaLabel: translate("auto.components.settings.AgentsPane.1c9a9679ec", "{{value0}} availability", { value0: e }),
		size: "sm",
		options: [{
			value: "enabled",
			label: translate("auto.components.settings.AgentsPane.d4d2a45d63", "Enabled")
		}, {
			value: "disabled",
			label: translate("auto.components.settings.AgentsPane.8dc0192e48", "Disabled")
		}]
	});
}
function AgentCatalogRow({ agentId: e, label: C, homepageUrl: D, defaultCmd: O, defaultArgs: k, defaultEnv: A, isDetected: j, isEnabled: M, isDefault: N, cmdOverride: P, argsOverride: F, envOverride: z, onSetDefault: B, onSetEnabled: V, onSaveOverride: H, onSaveArgs: U, onSaveEnv: W, sessionSourceHome: G }) {
	let K = stringifyAgentDefaultEnvDraft(z), q = stringifyAgentDefaultEnvDraft(A), [J, Y] = (0, import_react.useState)(!!P || F !== k || K !== q);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("py-3", !j && "opacity-70"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-7 shrink-0 items-center justify-center rounded-md border border-border/50 bg-background/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
						agent: e,
						size: 16
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 sm:min-w-[12rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium leading-none",
							children: C
						}), !M && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsBadge, {
							tone: "muted",
							children: translate("auto.components.settings.AgentsPane.8dc0192e48", "Disabled")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 truncate font-mono text-[11px] text-muted-foreground",
						children: [
							P ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/60 line-through",
								children: O
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 text-foreground/80",
								children: P
							})] }) : O,
							F && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 text-foreground/70",
								children: F
							}),
							K && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 text-foreground/60",
								children: K
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto grid shrink-0 grid-cols-[max-content_6.5rem_1.75rem_1.75rem] items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentAvailabilityControl, {
							label: C,
							isEnabled: M,
							onSetEnabled: V
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-start",
							children: j && M && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: N ? "secondary" : "ghost",
								size: "xs",
								onClick: B,
								title: N ? translate("auto.components.settings.AgentsPane.d7625cf8b2", "Default agent") : translate("auto.components.settings.AgentsPane.5f986a9b92", "Set as default"),
								className: "h-7 w-full justify-center gap-1 text-xs",
								children: [N && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), N ? translate("auto.components.settings.AgentsPane.24e032fa34", "Default") : translate("auto.components.settings.AgentsPane.959b67385b", "Set default")]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: D,
							target: "_blank",
							rel: "noopener noreferrer",
							title: j ? translate("auto.components.settings.AgentsPane.fe4d630c94", "Docs") : translate("auto.components.settings.AgentsPane.f95b5c79b8", "Install"),
							className: "flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-7 items-center justify-center",
							children: j && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "icon-sm",
								onClick: () => Y((e) => !e),
								"aria-label": J ? translate("auto.components.settings.AgentsPane.cea7d97be1", "Collapse command override") : translate("auto.components.settings.AgentsPane.dc4a2ffdc0", "Expand command override"),
								className: "size-7 text-muted-foreground hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 transition-transform", J && "rotate-180") })
							})
						})
					]
				})
			]
		}), j && J && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 pl-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentCommandOverrideInput, {
					defaultCmd: O,
					cmdOverride: P,
					onSaveOverride: H
				}, P ?? O),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentDefaultArgsInput, {
						defaultArgs: k,
						argsOverride: F,
						onSaveArgs: U
					}, `${e}:${F}`)
				}),
				(q || K) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentDefaultEnvInput, {
						defaultEnv: A,
						envOverride: z,
						onSaveEnv: W
					}, `${e}:${K}`)
				}),
				G && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentSessionSourceHomeInput, {
						runtimeLabel: G.runtimeLabel,
						value: G.value,
						onSave: G.onSave
					}, `${e}:${G.runtimeLabel}:${G.value}`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[11px] text-muted-foreground",
					children: translate("auto.components.settings.AgentsPane.f9f127d664", "Override the binary path or name, and edit the default launch arguments or environment for this agent.")
				})
			]
		})]
	});
}
function DefaultAgentPill({ active: e, onClick: C, children: w, title: T }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: C,
		"aria-pressed": e,
		title: T,
		className: cn("inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50", e ? "border-muted-foreground/40 bg-accent font-medium text-accent-foreground" : "border-border bg-background/50 text-muted-foreground hover:border-muted-foreground/35 hover:text-foreground"),
		children: w
	});
}
function AgentDefaultSetting({ defaultAgent: e, detectedIds: C, enabledDetectedAgents: T, catalog: E, description: D, onSetDefault: O }) {
	let k = e !== null && e !== "blank" ? E.find((C) => C.id === e) : void 0, A = k && !T.some((e) => e.id === k.id) ? [...T, k] : T;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSubsectionHeader, {
			title: translate("auto.components.settings.AgentsPane.385212c7a1", "Default Agent"),
			description: D
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DefaultAgentPill, {
					active: e === null,
					onClick: () => O(null),
					children: [e === null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), translate("auto.components.settings.AgentsPane.92033495ff", "Auto")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DefaultAgentPill, {
					active: e === "blank",
					onClick: () => O("blank"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3.5" }),
						translate("auto.components.settings.AgentsPane.110b74b022", "No agent (blank terminal)"),
						e === "blank" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
					]
				}),
				A.map((T) => {
					let E = e === T.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DefaultAgentPill, {
						active: E,
						onClick: () => O(T.id),
						title: C !== null && !C.has(T.id) ? translate("auto.components.settings.AgentsPane.storedDefaultUndetected", "Saved as your default, but not detected right now") : void 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
								agent: T.id,
								size: 14
							}),
							T.label,
							E && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
						]
					}, T.id);
				})
			]
		})]
	});
}
function AgentDetectionCatalog({ detectedAgents: e, undetectedAgents: C, detectionPending: D, detectionFailed: O, isRefreshing: k, activeServerEnvironmentId: A, activeServerName: j, onRefresh: M, getRowProps: N }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		e.length === 0 && !D && !O && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 rounded-md border border-dashed border-border/50 px-3 py-3 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.settings.AgentsPane.noAgentsDetected", "No agents detected. If one is installed, the probe may have timed out.") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshButton, {
				isRefreshing: k,
				onRefresh: M
			})]
		}),
		e.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSubsectionHeader, {
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [
						translate("auto.components.settings.AgentsPane.02e0143be5", "Installed"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SettingsBadge, {
							tone: "accent",
							children: [
								e.length,
								" ",
								translate("auto.components.settings.AgentsPane.ed3e110e61", "detected")
							]
						}),
						j ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsBadge, {
							tone: "muted",
							children: translate("auto.components.settings.AgentsPane.03e1a5081a", "on {{value0}}", { value0: j })
						}) : null
					]
				}),
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "xs",
					onClick: M,
					disabled: k,
					title: A ? translate("auto.components.settings.AgentsPane.25a41a9aad", "Re-detect agents installed on the active server") : translate("auto.components.settings.AgentsPane.13647f9f80", "Re-read your shell PATH and re-detect installed agents"),
					className: "h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-3", k && "animate-spin") }), k ? translate("auto.components.settings.AgentsPane.c9b33eb5c0", "Refreshing…") : translate("auto.components.settings.AgentsPane.0d9e293a02", "Refresh")]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border/40",
				children: e.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentCatalogRow, { ...N(e, !0) }, e.id))
			})]
		}),
		C.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSubsectionHeader, { title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 text-muted-foreground",
				children: [translate("auto.components.settings.AgentsPane.e8da2af684", "Available to install"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SettingsBadge, {
					tone: "muted",
					children: [
						C.length,
						" ",
						translate("auto.components.settings.AgentsPane.024bd95089", "agents")
					]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border/40",
				children: C.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentCatalogRow, { ...N(e, !1) }, e.id))
			})]
		}),
		D && !O && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center rounded-md border border-dashed border-border/50 py-6 text-sm text-muted-foreground",
			children: translate("auto.components.settings.AgentsPane.d83834f5e6", "Detecting installed agents…")
		}),
		O && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3 rounded-md border border-destructive/40 bg-destructive/5 px-3 py-2 text-xs text-destructive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex min-w-0 items-start gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-3.5 shrink-0" }), translate("auto.components.settings.AgentsPane.remoteDetectionFailed", "Couldn’t detect installed agents. Check the host connection and try again.")]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "xs",
				onClick: M,
				className: "h-6 shrink-0 gap-1.5 px-2 text-destructive hover:text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" }), translate("auto.components.settings.AgentsPane.retryDetection", "Retry")]
			})]
		})
	] });
}
function RefreshButton({ isRefreshing: e, onRefresh: C }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "ghost",
		size: "xs",
		onClick: C,
		disabled: e,
		className: "h-7 shrink-0 gap-1.5 text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-3", e && "animate-spin") }), e ? translate("auto.components.settings.AgentsPane.c9b33eb5c0", "Refreshing…") : translate("auto.components.settings.AgentsPane.0d9e293a02", "Refresh")]
	});
}
var enqueueAgentAvailabilityUpdate = createAgentAvailabilityUpdateQueue();
function AgentPermissionsSetting({ mode: e, onChange: C }) {
	let T = e === "manual" ? "manual" : "yolo";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "space-y-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSubsectionHeader, {
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [translate("auto.components.settings.AgentsPane.agentPermissions", "Agent Permissions"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": translate("auto.components.settings.AgentsPane.agentPermissionsInfo", "Agent permissions info"),
						className: "grid size-5 place-items-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3.5" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "top",
					sideOffset: 6,
					children: translate("auto.components.settings.AgentsPane.agentPermissionsTooltip", "Doesn't apply to agents where you've overridden launch arguments.")
				})] })]
			}),
			description: translate("auto.components.settings.AgentsPane.agentPermissionsDescription", "Choose whether Orca launches agents with fewer permission prompts or with manual checks."),
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSegmentedControl, {
				value: T,
				onChange: (e) => {
					e !== "mixed" && C(e);
				},
				ariaLabel: translate("auto.components.settings.AgentsPane.agentPermissions", "Agent Permissions"),
				size: "sm",
				options: [{
					value: "yolo",
					label: translate("auto.components.settings.AgentsPane.agentPermissionsYolo", "Yolo")
				}, {
					value: "manual",
					label: translate("auto.components.settings.AgentsPane.agentPermissionsManual", "Manual")
				}]
			})
		})
	});
}
function AgentsPane({ settings: e, updateSettings: C, wslSupportedPlatform: w, wslAvailable: T, wslDistros: E, wslCapabilitiesLoading: D }) {
	let O = e.activeRuntimeEnvironmentId?.trim() || null, { detectedIds: k, detectionFailed: A, isRefreshing: j, refresh: M } = useDetectedAgents((0, import_react.useMemo)(() => O ? {
		kind: "runtime",
		environmentId: O
	} : { kind: "local" }, [O])), N = useAppStore((e) => e.refreshDetectedAgents), P = useAppStore((e) => O ? e.runtimeEnvironments.find((e) => e.id === O)?.name ?? null : null), F = (0, import_react.useMemo)(() => k ? new Set(k) : null, [k]), I = getAgentCatalog(), L = e.defaultTuiAgent, R = e.agentCmdOverrides ?? {}, z = e.agentDefaultArgs ?? {}, B = e.agentDefaultEnv ?? {}, V = normalizeDisabledTuiAgents(e.disabledTuiAgents), H = F === null ? [] : I.filter((e) => F.has(e.id)), U = H.filter((e) => isTuiAgentEnabled(e.id, V)), G = I.filter((e) => F !== null && !F.has(e.id)), K = (w, T) => {
		enqueueAgentAvailabilityUpdate({
			getSettings: () => useAppStore.getState().settings,
			fallbackSettings: e,
			updateSettings: C,
			agentId: w,
			enabled: T
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentDefaultSetting, {
				defaultAgent: L,
				detectedIds: F,
				enabledDetectedAgents: U,
				catalog: I,
				description: getSettingOwnershipSummary("agentLaunchDefaults").description,
				onSetDefault: (e) => C({ defaultTuiAgent: e })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentRuntimeSetting, {
				settings: e,
				updateSettings: C,
				refresh: N,
				wslSupportedPlatform: w,
				wslAvailable: T,
				wslDistros: E,
				wslCapabilitiesLoading: D
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStatusHooksSetting, {
				settings: e,
				updateSettings: C
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentGeneratedTabTitlesSetting, {
				settings: e,
				updateSettings: C
			}),
			isPairedWebClientWindow() ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentAwakeSetting, {
				settings: e,
				updateSettings: C
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentCacheTimerSection, {
				settings: e,
				updateSettings: C
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentPermissionsSetting, {
				mode: resolveAgentPermissionModeSummary({
					agentDefaultArgs: z,
					agentDefaultEnv: B
				}),
				onChange: (e) => C(applyAgentPermissionMode({
					mode: e,
					agentDefaultArgs: z,
					agentDefaultEnv: B
				}))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentDetectionCatalog, {
				detectedAgents: H,
				undetectedAgents: G,
				detectionPending: F === null,
				detectionFailed: A,
				isRefreshing: j,
				activeServerEnvironmentId: O,
				activeServerName: P,
				onRefresh: () => void M(),
				getRowProps: (w, T) => ({
					agentId: w.id,
					label: w.label,
					homepageUrl: w.homepageUrl,
					defaultCmd: w.cmd,
					defaultArgs: getTuiAgentDefaultArgs(w.id),
					defaultEnv: getTuiAgentDefaultEnv(w.id),
					isDetected: T,
					isEnabled: isTuiAgentEnabled(w.id, V),
					isDefault: T && L === w.id,
					cmdOverride: T ? R[w.id] : void 0,
					argsOverride: resolveTuiAgentLaunchArgs(w.id, z),
					envOverride: resolveTuiAgentLaunchEnv(w.id, B),
					onSetDefault: T ? () => C({ defaultTuiAgent: w.id }) : () => {},
					onSetEnabled: (e) => K(w.id, e),
					onSaveOverride: T ? (e) => {
						let T = { ...R };
						e ? T[w.id] = e : delete T[w.id], C({ agentCmdOverrides: T });
					} : () => {},
					onSaveArgs: (e) => C({ agentDefaultArgs: {
						...z,
						[w.id]: e
					} }),
					onSaveEnv: (e) => C({ agentDefaultEnv: {
						...B,
						[w.id]: e
					} }),
					sessionSourceHome: T && w.id === "codex" ? buildCodexSessionSourceHomeControl(e, C) : void 0
				})
			})
		]
	});
}
function AgentStatusHooksSetting({ settings: e, updateSettings: C }) {
	let w = e.agentStatusHooksEnabled !== !1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "space-y-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSwitchRow, {
			label: getAgentStatusHooksTitle(),
			description: getAgentStatusHooksDescription(),
			checked: w,
			onChange: () => C({ agentStatusHooksEnabled: !w }),
			ariaLabel: getAgentStatusHooksTitle()
		})
	});
}
function AgentGeneratedTabTitlesSetting({ settings: e, updateSettings: C }) {
	let w = e.tabAutoGenerateTitle === !0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "space-y-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSwitchRow, {
			label: getAgentGeneratedTabTitlesTitle(),
			description: getAgentGeneratedTabTitlesDescription(),
			checked: w,
			onChange: () => C({ tabAutoGenerateTitle: !w }),
			ariaLabel: getAgentGeneratedTabTitlesTitle()
		})
	});
}
function getDetectedSetupScriptTextareaRows(e) {
	return clampRows(countScriptTextareaLines(e, 6), 2, 6);
}
function getRepositoryHookScriptTextareaRows(e) {
	return clampRows((e.length === 0 ? 0 : countScriptTextareaLines(e, 13)) + 1, 4, 14);
}
function countScriptTextareaLines(e, C) {
	if (e.length === 0) return 1;
	let w = Math.min(e.length, 65536), T = 1;
	for (let E = 0; E < w; E += 1) if (e.charCodeAt(E) === 10 && (T += 1, T >= C)) return T;
	return T;
}
function clampRows(e, C, w) {
	return Math.min(Math.max(e, C), w);
}
function getHostDisplayLabelOverride(e, C) {
	return getHostSettingOverride(e, C, "displayLabel");
}
function applyHostRename(e, C, w) {
	return setHostSettingOverride(e, C, "displayLabel", w);
}
function clearHostRename(e, C) {
	return clearHostSettingOverride(e, C, "displayLabel");
}
function resolveHostRemoval(e) {
	let C = parseExecutionHostId(e);
	return C?.kind === "ssh" ? {
		kind: "ssh",
		targetId: C.targetId
	} : C?.kind === "runtime" ? {
		kind: "runtime",
		environmentId: C.environmentId
	} : null;
}
async function removeSshTargetWithBestEffortCleanup(e, C) {
	try {
		await e.terminateSessions({ targetId: C });
	} catch (w) {
		let T = w instanceof Error ? w.message : String(w);
		if (T.includes("SSH_TERMINATE_RECONNECT_REQUIRED")) try {
			await e.connect({ targetId: C }), await e.terminateSessions({ targetId: C });
		} catch (e) {
			console.warn("[ssh] Skipping remote session cleanup during target removal:", e instanceof Error ? e.message : String(e));
		}
		else console.warn("[ssh] Skipping remote session cleanup during target removal:", T);
	}
	await e.removeTarget({ id: C });
}
function resolveSshHostRemoval(e) {
	let C = [...new Set(e.repos.filter((C) => C.connectionId?.trim() === e.targetId).map((e) => e.id))], w = new Set(C), T = [...new Set(e.worktrees.filter((e) => w.has(e.repoId) && !e.isMainWorktree).map((e) => e.id))], E = e.sshConnectionStates.get(e.targetId)?.status === "connected";
	return {
		targetId: e.targetId,
		workspaceWorktreeIds: T,
		hostRepoIds: C,
		workspaceCount: T.length + C.length,
		isConnected: E
	};
}
async function clearSshHostWorkspaces(e, C) {
	let w = useAppStore.getState(), T = C === "forget-local", E = [], D = toSshExecutionHostId(e.targetId);
	for (let C of e.workspaceWorktreeIds) (await w.removeWorktree({
		id: C,
		executionHostId: D
	}, !1, T ? { mode: "forget-local" } : void 0)).ok || E.push(C);
	for (let C of e.hostRepoIds) {
		try {
			await w.removeProject(C, { hostId: D });
		} catch {
			E.push(C);
		}
		useAppStore.getState().repos.some((e) => e.id === C && getRepoExecutionHostId(e) === D) && !E.includes(C) && E.push(C);
	}
	return { failedIds: E };
}
function HostRemoveDialog({ open: e, onOpenChange: C, hostId: O, label: k, target: A }) {
	let [j, M] = (0, import_react.useState)(!1), [N, P] = (0, import_react.useState)(!1), [F, I] = (0, import_react.useState)(!1), R = useMountedRef(), z = useAppStore((e) => e.repos), B = useAppStore((e) => e.worktreesByRepo), H = useAppStore((e) => e.sshConnectionStates), U = (0, import_react.useMemo)(() => A.kind === "ssh" ? resolveSshHostRemoval({
		targetId: A.targetId,
		repos: z,
		worktrees: getAllWorktreesFromState({ worktreesByRepo: B }),
		sshConnectionStates: H
	}) : null, [
		A,
		z,
		B,
		H
	]), W = U?.workspaceCount ?? 0, G = W > 0, K = U?.isConnected ?? !1, q = () => {
		let e = useAppStore.getState();
		e.updateSettings({ hostSettingOverrides: clearHostRename(e.settings, O) });
	}, J = async (e) => {
		await removeSshTargetWithBestEffortCleanup(window.api.ssh, e), useAppStore.getState().clearRemovedSshTargetState(e), q();
	}, Y = (e) => {
		let w = useAppStore.getState();
		w.openSettingsTarget({
			pane: "servers",
			repoId: null,
			sectionId: e
		}), w.openSettingsPage(), C(!1);
	}, X = async () => {
		if (A.kind === "ssh") {
			M(!0);
			try {
				if (F && U) {
					let { failedIds: e } = await clearSshHostWorkspaces(U, K ? "delete-remote" : "forget-local");
					if (e.length > 0) {
						R.current && M(!1), toast.error(translate("auto.components.sidebar.HostRemoveDialog.workspacesFailed", "Could not remove {{count}} of this host’s workspaces. The host was kept so you can retry.", { count: e.length }));
						return;
					}
				}
				await J(A.targetId), R.current && C(!1), toast.success(translate("auto.components.sidebar.HostRemoveDialog.1a2b3c4d5e", "Removed {{value0}}", { value0: k }));
			} catch (e) {
				toast.error(e instanceof Error ? e.message : translate("auto.components.sidebar.HostRemoveDialog.2b3c4d5e6f", "Failed to remove host"));
			} finally {
				R.current && M(!1);
			}
		}
	}, Z = W === 1 ? translate("auto.components.sidebar.HostRemoveDialog.oneWorkspace", "1 workspace") : translate("auto.components.sidebar.HostRemoveDialog.manyWorkspaces", "{{count}} workspaces", { count: W }), Q = A.kind === "runtime" ? translate("auto.components.sidebar.HostRemoveDialog.4d5e6f7a8b", "This opens the Orca servers settings where you can remove this server.") : G ? translate("auto.components.sidebar.HostRemoveDialog.hostHasWorkspacesDefault", "Removes {{value0}} and its credentials from this computer. Its {{value1}} stay in Orca — remote files are not touched.", {
		value0: k,
		value1: Z
	}) : translate("auto.components.sidebar.HostRemoveDialog.5e6f7a8b9c", "This removes the saved SSH host and its credentials from this computer. Remote files are not deleted."), $ = K ? translate("auto.components.sidebar.HostRemoveDialog.alsoDeleteRemote", "Also delete these {{value0}} on {{value1}}", {
		value0: Z,
		value1: k
	}) : translate("auto.components.sidebar.HostRemoveDialog.alsoForgetLocal", "Also remove these {{value0}} from Orca", { value0: Z });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: e,
		onOpenChange: C,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.HostRemoveDialog.3c4d5e6f7a", "Remove {{value0}}?", { value0: k }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: Q })] }),
				A.kind === "ssh" && G ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: () => P((e) => !e),
					"aria-expanded": N,
					className: "-ml-2 text-xs",
					children: [translate("auto.components.sidebar.HostRemoveDialog.advanced", "Advanced"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform", N && "rotate-180") })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out", N ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
					"aria-hidden": !N,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 px-1 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "switch",
								"aria-checked": F,
								onClick: () => I((e) => !e),
								className: "group mt-0.5 flex shrink-0 cursor-pointer items-center rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchIndicator, { checked: F })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1 text-xs leading-snug",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: $
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-muted-foreground",
									children: K ? translate("auto.components.sidebar.HostRemoveDialog.alsoDeleteRemoteHint", "Permanently deletes the remote Git worktrees and their branches. Cannot be undone.") : translate("auto.components.sidebar.HostRemoveDialog.alsoForgetLocalHint", "Clears them from Orca only. Remote files, worktrees, and branches are left untouched.")
								})]
							})]
						})
					})
				})] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2 sm:gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						disabled: j,
						onClick: () => C(!1),
						children: translate("auto.components.sidebar.HostRemoveDialog.6f7a8b9c0d", "Cancel")
					}), A.kind === "runtime" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "destructive",
						onClick: () => Y(A.environmentId),
						children: translate("auto.components.sidebar.HostRemoveDialog.7a8b9c0d1e", "Open settings")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "destructive",
						disabled: j,
						onClick: () => void X(),
						children: [j ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : null, translate("auto.components.sidebar.HostRemoveDialog.8b9c0d1e2f", "Remove host")]
					})]
				})
			]
		})
	});
}
function RepoForkIndicator({ upstream: e, className: C }) {
	if (!e) return null;
	let w = `Fork of ${e.owner}/${e.repo}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("inline-flex shrink-0 items-center text-muted-foreground", C),
			"aria-label": w,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitFork, {
				className: "size-3",
				"aria-hidden": "true"
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "top",
		sideOffset: 4,
		children: w
	})] });
}
function isMacShortcutPlatform() {
	return getShortcutPlatform() === "darwin";
}
function getUpdateCheckHint(e = isMacShortcutPlatform()) {
	let C = `${e ? "⇧+click" : "Shift+click"} checks the latest RC; ${e ? "⌘+click" : "Ctrl+click"} checks the latest perf build.`;
	return e ? `${C} ⌥+click chooses a local macOS build.` : C;
}
function getUpdateCheckClickOptions(e, C = isMacShortcutPlatform()) {
	return C && e.altKey ? { localBuild: !0 } : {
		includePrerelease: e.shiftKey,
		includePerfPrerelease: C ? e.metaKey : e.ctrlKey
	};
}
function hexToRgba(e, C) {
	let w = normalizeLeftSidebarTintColor(e).replace("#", "");
	return w.length === 3 && (w = w.split("").map((e) => e + e).join("")), `rgba(${Number.parseInt(w.slice(0, 2), 16)}, ${Number.parseInt(w.slice(2, 4), 16)}, ${Number.parseInt(w.slice(4, 6), 16)}, ${C})`;
}
function applyAlpha(e, C) {
	return C === void 0 || C >= 1 || !HEX_COLOR_RE.test(e.trim()) ? e : hexToRgba(e, Math.min(1, Math.max(0, C)));
}
function buildSurfaceVariables(e) {
	let { background: C, foreground: w, overrideTextTokens: T = !1 } = e, E = `color-mix(in srgb, ${w} 9%, ${C})`, D = `color-mix(in srgb, ${w} 7%, ${C})`, O = `color-mix(in srgb, ${w} 44%, ${C})`, k = {
		"--worktree-sidebar": C,
		"--worktree-sidebar-foreground": w,
		"--worktree-sidebar-accent": E,
		"--worktree-sidebar-accent-foreground": w,
		"--worktree-sidebar-border": D,
		"--worktree-sidebar-ring": O,
		"--sidebar": C,
		"--sidebar-foreground": w,
		"--sidebar-accent": E,
		"--sidebar-accent-foreground": w,
		"--sidebar-border": D,
		"--sidebar-ring": O
	};
	return T && (k["--background"] = C, k["--foreground"] = w, k["--card"] = `color-mix(in srgb, ${w} 4%, ${C})`, k["--card-foreground"] = w, k["--accent"] = `color-mix(in srgb, ${w} 9%, ${C})`, k["--accent-foreground"] = w, k["--muted"] = `color-mix(in srgb, ${w} 7%, ${C})`, k["--muted-foreground"] = `color-mix(in srgb, ${w} 62%, ${C})`, k["--border"] = `color-mix(in srgb, ${w} 7%, ${C})`), k;
}
function resolveTerminalSurfaceVariables(e, C) {
	let w = resolveEffectiveTerminalAppearance(e, C);
	return buildSurfaceVariables({
		background: applyAlpha(e.terminalColorOverrides?.background ?? w.theme?.background ?? "#000000", e.terminalBackgroundOpacity),
		foreground: e.terminalColorOverrides?.foreground ?? w.theme?.foreground ?? "#fafafa",
		overrideTextTokens: !0
	});
}
function resolveTintedSurfaceVariables(e) {
	let C = normalizeLeftSidebarTintColor(e.leftSidebarTintColor), w = normalizeLeftSidebarTintOpacity(e.leftSidebarTintOpacity);
	return buildSurfaceVariables({
		background: `color-mix(in srgb, ${C} ${Number((w * 100).toFixed(2))}%, var(--background))`,
		foreground: "var(--foreground)"
	});
}
function resolveLeftSidebarStyleVariables(e, C) {
	if (e) switch (e.leftSidebarAppearanceMode) {
		case "default": return;
		case "match-terminal": return resolveTerminalSurfaceVariables(e, C);
		case "tinted": return resolveTintedSurfaceVariables(e);
	}
}
function dispatchInputEvent(e, C) {
	let w = typeof InputEvent == "function" ? new InputEvent("input", {
		bubbles: !0,
		cancelable: !1,
		data: C,
		inputType: "insertFromPaste"
	}) : new Event("input", {
		bubbles: !0,
		cancelable: !1
	});
	e.dispatchEvent(w);
}
function setContentEditableCaretFromPoint(e, C) {
	let w = e.ownerDocument, T = w.getSelection();
	if (!T) return;
	let E = w.caretPositionFromPoint?.(C.clientX, C.clientY), D = E ? w.createRange() : w.caretRangeFromPoint?.(C.clientX, C.clientY);
	E && D && (D.setStart(E.offsetNode, E.offset), D.collapse(!0)), !(!D || !e.contains(D.startContainer)) && (T.removeAllRanges(), T.addRange(D));
}
function insertTextIntoContentEditable(e, C) {
	let w = e.ownerDocument;
	if (w.queryCommandSupported?.("insertText") && w.execCommand("insertText", !1, C)) return !0;
	let T = w.getSelection();
	if (!T || T.rangeCount === 0) return !1;
	let E = T.getRangeAt(0);
	E.deleteContents();
	let D = w.createTextNode(C);
	return E.insertNode(D), E.setStartAfter(D), E.collapse(!0), T.removeAllRanges(), T.addRange(E), dispatchInputEvent(e, C), !0;
}
function isContentEditablePasteTargetAvailable(e, C) {
	return e.isConnected && e.isContentEditable && (C?.(e) ?? !0);
}
function getContentEditableInsertionRange(e) {
	let C = e.ownerDocument.getSelection();
	if (!C || C.rangeCount === 0) return null;
	let w = C.getRangeAt(0);
	return !e.contains(w.startContainer) || !e.contains(w.endContainer) ? null : w;
}
function insertContentEditableChunk(e, C, w) {
	C.deleteContents();
	let T = e.ownerDocument.createTextNode(w);
	C.insertNode(T), C.setStartAfter(T), C.collapse(!0);
	let E = e.ownerDocument.getSelection();
	return E?.removeAllRanges(), E?.addRange(C), C;
}
async function pasteLargeTextIntoContentEditable(e, C, w) {
	let T = w.chunkMaxBytes ?? 16384, E = getContentEditableInsertionRange(e);
	if (!E) return !1;
	E.deleteContents();
	let D = 0;
	for (; D < C.length;) {
		if (!isContentEditablePasteTargetAvailable(e, w.canContinue)) return D > 0 && dispatchInputEvent(e, null), !1;
		let O = getUtf8ChunkEndIndex(C, D, T);
		E = insertContentEditableChunk(e, E, C.slice(D, O)), D = O, D < C.length && await (w.yieldToEventLoop ?? yieldToEventLoop)();
	}
	return dispatchInputEvent(e, null), !0;
}
async function pasteIntoContentEditable(e, C, w, T) {
	let E = T.maxBytes ?? 16777216, D = T.directMaxBytes ?? 65536, O = measureTextControlPasteByteLength(C, { stopAfterBytes: Math.min(D, E) }), { byteLength: k } = O;
	if (k === 0 || E <= D && O.exceededLimit) return !1;
	let A = O.exceededLimit ? await measureTextControlPasteByteLengthWithYield(C, {
		stopAfterBytes: E,
		yieldAfterCodeUnits: T.measureYieldAfterCodeUnits,
		yieldToEventLoop: T.yieldToEventLoop
	}) : O;
	return A.exceededLimit || (e.focus(), setContentEditableCaretFromPoint(e, w), !isContentEditablePasteTargetAvailable(e, T.canContinue)) ? !1 : A.byteLength <= D ? insertTextIntoContentEditable(e, C) : pasteLargeTextIntoContentEditable(e, C, T);
}
function findEditablePrimarySelectionPasteTarget(e) {
	if (!(e instanceof Element) || e.closest(".xterm-helper-textarea")) return null;
	let C = e.closest("input, textarea");
	if (C && isPrimarySelectionTextControl(C)) return C.disabled || C.readOnly ? null : C;
	let w = e instanceof HTMLElement ? e : e.parentElement;
	for (; w;) {
		if (w.getAttribute("contenteditable") === "false") return null;
		if (w.isContentEditable) return w;
		w = w.parentElement;
	}
	return null;
}
async function pastePrimarySelectionTextIntoTarget(e, C, w, T = {}) {
	return isPrimarySelectionTextControl(e) ? (await pasteTextIntoTextControl(e, C, {
		source: "primary-selection",
		directMaxBytes: T.directMaxBytes,
		chunkMaxBytes: T.chunkMaxBytes,
		maxBytes: T.maxBytes,
		measureYieldAfterCodeUnits: T.measureYieldAfterCodeUnits,
		yieldToEventLoop: T.yieldToEventLoop,
		canContinue: (e) => e.ownerDocument.activeElement === e && (T.canContinue?.(e) ?? !0)
	})).status === "pasted" : pasteIntoContentEditable(e, C, w, {
		...T,
		canContinue: (e) => e.ownerDocument.activeElement === e && (T.canContinue?.(e) ?? !0)
	});
}
var PRIMARY_SELECTION_PENDING_TARGET_TTL_MS = 750;
function resolvePrimarySelectionMiddleClickPaste(e, C = typeof navigator > "u" ? "" : navigator.userAgent) {
	return e ?? isDefaultPrimarySelectionMiddleClickPasteUserAgent(C);
}
function isDefaultPrimarySelectionMiddleClickPasteUserAgent(e = typeof navigator > "u" ? "" : navigator.userAgent) {
	return isLinuxUserAgent(e) || isMacUserAgent(e);
}
function captureCurrentSelection() {
	let e = readCurrentPrimarySelectionText();
	e && setPrimarySelectionText(e);
}
function suppressEvent(e) {
	e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}
function isTerminalNativePasteTarget(e) {
	return e instanceof Element ? e.classList.contains("xterm-helper-textarea") || e.closest(".xterm") !== null : !1;
}
function isPrimarySelectionPasteTargetCurrent(e) {
	let C = e.ownerDocument.activeElement;
	return e.isConnected && C instanceof Node && (C === e || e.contains(C));
}
function usePrimarySelectionPaste(e) {
	(0, import_react.useEffect)(() => {
		setPrimarySelectionEnabled(e);
		let C = null, w = 0, T = (e) => !C || !(e instanceof Node) ? !1 : e === C || C.contains(e), E = (e) => {
			if (e.button !== 1) return !1;
			let T = findEditablePrimarySelectionPasteTarget(e.target);
			return T ? (C = T, w = Date.now() + PRIMARY_SELECTION_PENDING_TARGET_TTL_MS, !0) : !1;
		}, D = (e) => {
			if (typeof InputEvent != "function" || !(e instanceof InputEvent) || e.inputType === "insertFromPaste") {
				if (C && Date.now() <= w && T(e.target)) {
					suppressEvent(e);
					return;
				}
				isTerminalNativePasteTarget(e.target) && consumePrimarySelectionNativePasteSuppression() && suppressEvent(e);
			}
		};
		if (!e) {
			if (!isLinuxUserAgent()) return;
			let e = (e) => {
				E(e);
			}, w = (e) => {
				e.button === 1 && e.preventDefault(), C = null;
			}, T = (e) => {
				e.button === 1 && e.preventDefault();
			};
			return document.addEventListener("mousedown", e, !0), document.addEventListener("beforeinput", D, !0), document.addEventListener("paste", D, !0), document.addEventListener("mouseup", w, !0), document.addEventListener("auxclick", T, !0), () => {
				setPrimarySelectionEnabled(!1), document.removeEventListener("mousedown", e, !0), document.removeEventListener("beforeinput", D, !0), document.removeEventListener("paste", D, !0), document.removeEventListener("mouseup", w, !0), document.removeEventListener("auxclick", T, !0);
			};
		}
		let O = null, k = () => {
			O !== null && window.clearTimeout(O), O = window.setTimeout(() => {
				O = null, captureCurrentSelection();
			}, 100);
		}, A = (e) => {
			E(e);
		}, j = (e) => {
			if (e.button !== 1 || !C || Date.now() > w) {
				C = null;
				return;
			}
			let T = C;
			C = null, suppressEvent(e);
			let E = {
				clientX: e.clientX,
				clientY: e.clientY
			};
			readPrimarySelectionText().then((e) => {
				!e || !isPrimarySelectionPasteTargetCurrent(T) || pastePrimarySelectionTextIntoTarget(T, e, E).catch(() => {});
			});
		}, M = (e) => {
			e.button === 1 && findEditablePrimarySelectionPasteTarget(e.target) && suppressEvent(e);
		};
		return document.addEventListener("selectionchange", k), document.addEventListener("mouseup", k, !0), document.addEventListener("keyup", k, !0), document.addEventListener("mousedown", A, !0), document.addEventListener("beforeinput", D, !0), document.addEventListener("paste", D, !0), document.addEventListener("mouseup", j, !0), document.addEventListener("auxclick", M, !0), () => {
			setPrimarySelectionEnabled(!1), O !== null && window.clearTimeout(O), document.removeEventListener("selectionchange", k), document.removeEventListener("mouseup", k, !0), document.removeEventListener("keyup", k, !0), document.removeEventListener("mousedown", A, !0), document.removeEventListener("beforeinput", D, !0), document.removeEventListener("paste", D, !0), document.removeEventListener("mouseup", j, !0), document.removeEventListener("auxclick", M, !0);
		};
	}, [e]);
}
function pluginCommandKeybindingActionId$1(e) {
	return pluginCommandKeybindingActionId(e.pluginKey, e.id);
}
function pluginCommandKeybindingDefinition(e) {
	let C = e.keybindings.map((e) => e.key);
	return {
		id: pluginCommandKeybindingActionId$1(e),
		title: `${e.title} — ${e.pluginName}`,
		group: translate("auto.lib.pluginCommandKeybindings.group", "Plugins"),
		scope: "global",
		searchKeywords: [
			"plugin",
			"shortcut",
			e.title.toLowerCase(),
			e.pluginName.toLowerCase()
		],
		defaultBindings: {
			darwin: C,
			linux: C,
			win32: C
		}
	};
}
function buildPluginCommandKeybindingDefinitions(e) {
	return e.map(pluginCommandKeybindingDefinition);
}
function getEffectivePluginCommandKeybindings(e, C, w) {
	return getEffectiveKeybindingsForDefinition(pluginCommandKeybindingDefinition(e), C, w);
}
function findPluginCommandForKeybinding(e, C, w, T, E) {
	for (let D of e) if (!(D.context === "worktree" && !E) && getEffectivePluginCommandKeybindings(D, w, T).some((e) => keybindingMatchesInput(e, C, w))) return D;
	return null;
}
export { getEntryTabId as A, sparseDirectoriesMatch as C, MIN_AGENT_HIBERNATION_IDLE_MS as D, MAX_AGENT_HIBERNATION_IDLE_MS as E, getEffectiveAgentHibernationIdleMs as O, normalizeSparseDirectoryLines as S, TerminalTccAttributionNotice as T, getRepositoryHookScriptTextareaRows as _, usePrimarySelectionPaste as a, SearchableSetting as b, getUpdateCheckHint as c, resolveSshHostRemoval as d, removeSshTargetWithBestEffortCleanup as f, getDetectedSetupScriptTextareaRows as g, resolveHostRemoval as h, resolvePrimarySelectionMiddleClickPaste as i, PanelLeft as j, planAgentHibernationCandidates as k, RepoForkIndicator as l, getHostDisplayLabelOverride as m, findPluginCommandForKeybinding as n, resolveLeftSidebarStyleVariables as o, applyHostRename as p, isDefaultPrimarySelectionMiddleClickPasteUserAgent as r, getUpdateCheckClickOptions as s, buildPluginCommandKeybindingDefinitions as t, HostRemoveDialog as u, AgentsPane as v, MANAGE_SESSIONS_SECTION_ID as w, parseSparsePresetDirectories as x, getSettingOwnershipSummary as y };
