import { i as translate } from "./i18n-CakWKPtl.js";
import { r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { BC as STRUCTURED_AGENT_SESSION_REVEAL_RUNTIME_CAPABILITY, Bl as getLocalProjectExecutionRuntimeContext, Ff as getExecutionHostIdForWorktree, Gv as callRuntimeRpc, JS as LOCAL_EXECUTION_HOST_ID, Jv as runtimeEnvironmentSupportsCapability, Ll as resolveLocalWindowsTerminalShellOverrideForTab, Ml as getFolderWorkspaceCandidateRepos, Rf as getRuntimeEnvironmentIdForWorktree, Ro as reconcileTabOrder, Sy as toRuntimeWorktreeSelector, Yv as getActiveRuntimeTarget, ZS as getRepoExecutionHostId, _m as getIndexedWorktreeMap, dx as isPosixStartupShell, fl as isResumableTuiAgent, gx as withoutEnvCommand, iC as parseExecutionHostId, ib as parseWslUncPath, ix as resolveTuiAgentLaunchEnv, iy as isRuntimeCompatBlockError, lx as clearEnvCommand, mx as resolveStartupShell, nC as normalizeExecutionHostId, ov as getRepoIdFromWorktreeId, px as quoteStartupArg, rb as isWslUncPath, rx as resolveTuiAgentLaunchArgs, sC as toSshExecutionHostId, sx as resolveWindowsShellStartupFamily, t as useAppStore, ux as commandSeparator, vv as parseWorkspaceKey, xS as TUI_AGENT_CONFIG } from "./store-C9f8FDJV.js";
import { _ as measureClipboardTextByteLength } from "./renderer-app-platform--nJ6HYmL.js";
import { t as AI_VAULT_AGENTS } from "./ai-vault-types-c5I0n8i0.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { s as tuiAgentToAgentKind } from "./telemetry-DdvWHaqb.js";
import { h as createWebRuntimeSessionTerminal, on as isWebRuntimeSessionActive } from "./web-runtime-session-CeAC5QPx.js";
import { f as buildAgentResumeStartupPlan } from "./agent-paste-draft-Ddp-k6QZ.js";
import { b as CLIENT_PLATFORM } from "./native-chat-session-option-cache-DOY0fjiI.js";
import { d as applyStructuredSessionTabSnapshots, f as isCurrentLocalStructuredSessionGeneration, p as localStructuredSessionGeneration } from "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import { t as activateStructuredAgentSessionById } from "./structured-agent-session-tab-activation-C6wYgLO4.js";
function getAiVaultResumeRepoTargetStatus(d) {
	return d ? getAiVaultResumeExecutionHostTargetStatus(getRepoExecutionHostId(d)) : "unknown";
}
function isSupportedAiVaultResumeTargetStatus(d) {
	return d === "local" || d === "ssh" || d === "runtime";
}
function isWslStoredAiVaultSessionFile(d) {
	return !!(d && isWslUncPath(d));
}
function canResumeAiVaultSessionOnTarget(d) {
	let B = normalizeExecutionHostId(d.sessionExecutionHostId), V = normalizeExecutionHostId(d.targetExecutionHostId);
	if (d.targetStatus === "runtime") return !!(B && V && B === V);
	if (!isSupportedAiVaultResumeTargetStatus(d.targetStatus)) return !1;
	if (B) {
		if (V) return B === V ? !0 : B === "local" && d.targetStatus === "ssh" && isWslStoredAiVaultSessionFile(d.sessionFilePath);
		if (B !== "local") return !1;
	}
	return d.targetStatus === "ssh" ? isWslStoredAiVaultSessionFile(d.sessionFilePath) : !0;
}
function getAiVaultResumeWorkspaceExecutionHostId(d, B) {
	if (!B) return null;
	let V = parseWorkspaceKey(B);
	if (V?.type === "folder") return getAiVaultResumeFolderExecutionHostId(d, V.folderWorkspaceId);
	let H = V?.type === "worktree" ? V.worktreeId : B, U = getIndexedWorktreeMap(d.worktreesByRepo ?? {}).get(H), W = normalizeExecutionHostId(U?.hostId);
	if (W) return W;
	let G = U?.repoId ?? getRepoIdFromWorktreeId(H), K = d.repos.find((d) => d.id === G);
	return K ? getRepoExecutionHostId(K) : null;
}
function getAiVaultResumeWorkspaceTargetStatus(d, B) {
	if (!B) return "unknown";
	let V = parseWorkspaceKey(B);
	if (V?.type === "folder") return getAiVaultResumeFolderTargetStatus(d, V.folderWorkspaceId);
	let H = V?.type === "worktree" ? V.worktreeId : B, U = getIndexedWorktreeMap(d.worktreesByRepo ?? {}).get(H), W = getAiVaultResumeExecutionHostTargetStatus(U?.hostId);
	if (W !== "unknown") return W;
	let G = U?.repoId ?? getRepoIdFromWorktreeId(H);
	return getAiVaultResumeRepoTargetStatus(d.repos.find((d) => d.id === G));
}
function getAiVaultResumeFolderTargetStatus(d, B) {
	let V = d.folderWorkspaces.find((d) => d.id === B);
	if (!V) return "unknown";
	let H = d.projectGroups.find((d) => d.id === V.projectGroupId), U = normalizeExecutionHostId(V.executionHostId ?? H?.executionHostId);
	if (U) return getAiVaultResumeExecutionHostTargetStatus(U);
	let W = (V.connectionId ?? H?.connectionId ?? "").trim();
	return W ? getAiVaultResumeExecutionHostTargetStatus(toSshExecutionHostId(W)) : mergeAiVaultResumeExecutionHostTargetStatuses(getFolderWorkspaceCandidateRepos(d, B).map(getRepoExecutionHostId));
}
function getAiVaultResumeFolderExecutionHostId(d, B) {
	let V = d.folderWorkspaces.find((d) => d.id === B);
	if (!V) return null;
	let H = d.projectGroups.find((d) => d.id === V.projectGroupId), U = normalizeExecutionHostId(V.executionHostId ?? H?.executionHostId);
	if (U) return U;
	let W = (V.connectionId ?? H?.connectionId ?? "").trim();
	return W ? toSshExecutionHostId(W) : mergeAiVaultResumeExecutionHostIds(getFolderWorkspaceCandidateRepos(d, B).map(getRepoExecutionHostId));
}
function getAiVaultResumeExecutionHostTargetStatus(d) {
	let B = parseExecutionHostId(d);
	return B ? B.kind === "local" ? "local" : B.kind : "unknown";
}
function mergeAiVaultResumeExecutionHostTargetStatuses(d) {
	if (d.length === 0) return "local";
	let B = d.map(getAiVaultResumeExecutionHostTargetStatus);
	return new Set(B).has("runtime") ? "runtime" : new Set(d).size === 1 ? B[0] ?? "unknown" : "unknown";
}
function mergeAiVaultResumeExecutionHostIds(d) {
	return d.length === 0 ? LOCAL_EXECUTION_HOST_ID : new Set(d).size === 1 ? d[0] ?? null : null;
}
const AI_VAULT_SESSION_DRAG_TYPE = "application/x-orca-ai-vault-session", AI_VAULT_SESSION_DRAG_START_EVENT = "orca-ai-vault-session-drag-start", AI_VAULT_SESSION_DRAG_END_EVENT = "orca-ai-vault-session-drag-end";
var activeAiVaultSessionDragPayload = null;
function isAiVaultAgent(d) {
	return typeof d == "string" && AI_VAULT_AGENTS.includes(d);
}
function isNonEmptyString(d) {
	return typeof d == "string" && d.trim().length > 0;
}
function isStructuredSession(d) {
	if (!d || typeof d != "object") return !1;
	let B = d;
	return isNonEmptyString(B.sessionId) && isNonEmptyString(B.workspaceId);
}
function isStringRecord(d) {
	return !d || typeof d != "object" || Array.isArray(d) ? !1 : Object.values(d).every((d) => typeof d == "string");
}
function isEnvDeletionList(d) {
	return Array.isArray(d) && d.length <= 32 && d.every((d) => typeof d == "string" && d.length > 0 && d.length <= 256);
}
function isLaunchConfig(d) {
	if (!d || typeof d != "object") return !1;
	let B = d;
	return (B.agentCommand === void 0 || typeof B.agentCommand == "string") && typeof B.agentArgs == "string" && isStringRecord(B.agentEnv) && (B.ompResumeFilePath === void 0 || isNonEmptyString(B.ompResumeFilePath));
}
function isSerializedPayload(d) {
	if (!d || typeof d != "object") return !1;
	let B = d;
	return B.kind === "ai-vault-session" && B.version === 1 && isAiVaultAgent(B.agent) && isNonEmptyString(B.sessionId) && (B.structuredSession === void 0 || isStructuredSession(B.structuredSession)) && isNonEmptyString(B.title) && (B.structuredSession ? typeof B.command == "string" : isNonEmptyString(B.command)) && (B.sessionFilePath === void 0 || isNonEmptyString(B.sessionFilePath)) && (B.sessionExecutionHostId === void 0 || !!normalizeExecutionHostId(B.sessionExecutionHostId)) && (B.codexHome === void 0 || B.codexHome === null || isNonEmptyString(B.codexHome)) && (B.sessionCwd === void 0 || B.sessionCwd === null || isNonEmptyString(B.sessionCwd)) && (B.env === void 0 || isStringRecord(B.env)) && (B.envToDelete === void 0 || isEnvDeletionList(B.envToDelete)) && (B.launchConfig === void 0 || isLaunchConfig(B.launchConfig)) && (B.realHomeStartup === void 0 || isResumeStartup(B.realHomeStartup));
}
function isResumeStartup(d) {
	if (!d || typeof d != "object") return !1;
	let B = d;
	return isNonEmptyString(B.command) && (B.env === void 0 || isStringRecord(B.env)) && (B.envToDelete === void 0 || isEnvDeletionList(B.envToDelete)) && (B.launchConfig === void 0 || isLaunchConfig(B.launchConfig));
}
function writeAiVaultSessionDragData(d, B) {
	let V = JSON.stringify({
		kind: "ai-vault-session",
		version: 1,
		...B
	});
	if (isAiVaultSessionDragPayloadTooLarge(V)) {
		activeAiVaultSessionDragPayload = null, d.effectAllowed = "copy", d.setData(AI_VAULT_SESSION_DRAG_TYPE, "");
		return;
	}
	activeAiVaultSessionDragPayload = { ...B }, d.effectAllowed = "copy", d.setData(AI_VAULT_SESSION_DRAG_TYPE, V);
}
function hasAiVaultSessionDragData(d) {
	return Array.from(d.types).includes(AI_VAULT_SESSION_DRAG_TYPE);
}
function clearAiVaultSessionDragData() {
	activeAiVaultSessionDragPayload = null;
}
function readAiVaultSessionDragData(d) {
	let B = d.getData(AI_VAULT_SESSION_DRAG_TYPE);
	if (!B) return hasAiVaultSessionDragData(d) ? activeAiVaultSessionDragPayload : null;
	if (isAiVaultSessionDragPayloadTooLarge(B)) return null;
	try {
		let d = JSON.parse(B);
		if (!isSerializedPayload(d)) return null;
		let { agent: V, sessionId: H, structuredSession: U, title: W, command: G, sessionFilePath: K, sessionExecutionHostId: q, codexHome: J, sessionCwd: Y, env: X, envToDelete: Z, launchConfig: Q, realHomeStartup: $ } = d;
		return {
			agent: V,
			sessionId: H,
			...U ? { structuredSession: U } : {},
			title: W,
			command: G,
			...K ? { sessionFilePath: K } : {},
			...q ? { sessionExecutionHostId: q } : {},
			...J === void 0 ? {} : { codexHome: J },
			...Y === void 0 ? {} : { sessionCwd: Y },
			...X ? { env: X } : {},
			...Z ? { envToDelete: Z } : {},
			...Q ? { launchConfig: Q } : {},
			...$ ? { realHomeStartup: $ } : {}
		};
	} catch {
		return null;
	}
}
function isAiVaultSessionDragPayloadTooLarge(d) {
	return d.length > 16384 || measureClipboardTextByteLength(d, { stopAfterBytes: 16384 }).exceededLimit;
}
function buildAiVaultResumeCommand(d) {
	let { agent: B, sessionId: V, cwd: H, platform: U, commandOverride: W, codexHome: G, resumeFilePath: K, shell: q } = d, J = W?.trim() || defaultAiVaultResumeCommandBase(B), Y = (B === "omp" || B === "prime-agent") && K?.trim() ? K.trim() : V;
	return buildAiVaultResumeShellCommand({
		resumeCommand: buildAgentResumeInvocation(B, J, q === "cmd" ? quoteWindowsCmdArg(Y) : q ? quoteStartupArg(Y, q) : quoteShellArg(Y, U)),
		cwd: H,
		platform: U,
		codexHome: G,
		shell: q,
		clearEnvNames: d.clearEnvNames
	});
}
function buildAiVaultResumeShellCommand(d) {
	let { cwd: B, platform: V, codexHome: H, shell: U, clearEnvNames: W } = d;
	if (U === "powershell" || V === "win32" && U && U !== "cmd") return buildResumeShellCommandForShell({
		resumeCommand: d.resumeCommand,
		cwd: B,
		codexHome: H?.trim() || null,
		shell: U,
		clearEnvNames: W
	});
	let G = H?.trim() || null, K = G ? W?.filter((d) => d !== "CODEX_HOME") : W, q = U ?? (V === "win32" ? "cmd" : "posix"), J = K?.length && isPosixStartupShell(q), Y = `${codexHomeEnvPrefix(G, V, U)}${J ? withoutEnvCommand(K, d.resumeCommand, q) : d.resumeCommand}`, X = K?.length && !J ? `${clearEnvCommand(K, q)}${commandSeparator(q)}` : "";
	return V === "win32" && U === "cmd" ? `${X}${B ? `cd /d ${quoteWindowsCmdArg(B)} && ${Y}` : Y}` : B ? V === "win32" ? `cmd /d /s /c ${quoteWindowsCmdArg(`${X}cd /d ${quoteWindowsCmdArg(B)} && ${Y}`)}` : `cd ${quoteResumeArg(B, V, U)} && ${Y}` : `${X}${Y}`;
}
function buildResumeShellCommandForShell(d) {
	let { cwd: B, codexHome: V, shell: H, clearEnvNames: U } = d;
	if (isPosixStartupShell(H)) {
		let W = V ? `CODEX_HOME=${quoteStartupArg(V, H)} ` : "", G = V ? U?.filter((d) => d !== "CODEX_HOME") : U, K = `${W}${G?.length ? withoutEnvCommand(G, d.resumeCommand, H) : d.resumeCommand}`;
		return B ? `cd ${quoteStartupArg(B, H)} && ${K}` : K;
	}
	let W = commandSeparator(H), G = [];
	return U?.length && G.push(clearEnvCommand(U, H)), B && G.push(`Set-Location -LiteralPath ${quoteStartupArg(B, H)}`), V && G.push(`$env:CODEX_HOME=${quoteStartupArg(V, H)}`), G.push(d.resumeCommand), G.join(W);
}
function realHomeCodexResumeEnvDeletion(d) {
	return d.agent !== "codex" || d.codexHome !== null ? {} : { envToDelete: ["CODEX_HOME", "ORCA_CODEX_HOME"] };
}
function defaultAiVaultResumeCommandBase(d) {
	return d === "cursor" ? "cursor-agent" : d === "hermes" ? "hermes" : d === "rovo" ? "acli" : TUI_AGENT_CONFIG[d].detectCmd;
}
function buildAgentResumeInvocation(d, B, V) {
	switch (d) {
		case "codex": return `${B} resume ${V}`;
		case "rovo": return `${B} rovodev run --restore ${V}`;
		case "opencode":
		case "pi":
		case "kimi": return `${B} --session ${V}`;
		case "copilot": return `${B} --resume=${V}`;
		case "cline": return `${B} --id ${V}`;
		case "claude":
		case "cursor":
		case "gemini":
		case "grok":
		case "hermes":
		case "devin":
		case "openclaw":
		case "droid":
		case "omp":
		case "prime-agent": return `${B} --resume ${V}`;
		case "antigravity": return `${B} --conversation ${V}`;
	}
}
function codexHomeEnvPrefix(d, B, V) {
	return d ? B === "win32" ? `set ${quoteWindowsCmdArg(`CODEX_HOME=${d}`)} && ` : `CODEX_HOME=${quoteResumeArg(d, B, V)} ` : "";
}
function quoteResumeArg(d, B, V) {
	return V ? quoteStartupArg(d, V) : quoteShellArg(d, B);
}
function quoteShellArg(d, B) {
	return B === "win32" ? quoteWindowsCmdArg(d) : quoteStartupArg(d, "posix");
}
function quoteWindowsCmdArg(d) {
	return `"${d.replace(/"/g, "\"\"")}"`;
}
function normalizeAiVaultResumeFilePath(d, B) {
	return !d || B !== "linux" ? d : parseWslUncPath(d)?.linuxPath ?? d;
}
function resolveAiVaultResumeStartupShell(d) {
	if (d.platform !== "win32") return "posix";
	let B = d.isLocalSession ? getLocalProjectExecutionRuntimeContext(d.state, d.worktreeId, CLIENT_PLATFORM) : void 0, V = getAiVaultResumeWorkspacePath(d.state, d.worktreeId ?? d.state.activeWorktreeId), U = d.isLocalSession ? resolveLocalWindowsTerminalShellOverrideForTab({
		explicitShellOverride: void 0,
		defaultWindowsShell: d.state.settings?.terminalWindowsShell,
		isWslWorktree: !!(V && parseWslUncPath(V)),
		projectRuntime: B
	}) : void 0, W = U ? resolveWindowsShellStartupFamily(U) : void 0;
	return resolveStartupShell(d.platform, W);
}
function getAiVaultResumeWorkspacePath(d, B) {
	if (!B) return null;
	let V = parseWorkspaceKey(B);
	if (V?.type === "folder") return d.folderWorkspaces.find((d) => d.id === V.folderWorkspaceId)?.folderPath ?? null;
	let H = V?.type === "worktree" ? V.worktreeId : B;
	return Object.values(d.worktreesByRepo ?? {}).flat().find((d) => d.id === H)?.path ?? null;
}
function buildAiVaultResumeCopyCommandForWorktree(d) {
	return buildAiVaultResumeForWorktree(d, !0, d.session.agent === "codex" && d.session.codexHome === null ? ["CODEX_HOME", "ORCA_CODEX_HOME"] : void 0).command;
}
function buildAiVaultResumeStartupForWorktree(d) {
	return buildAiVaultResumeForWorktree(d, !1);
}
function buildAiVaultDropRepinStartup(d) {
	return d.payload.sessionCwd === void 0 || !d.payload.sessionFilePath ? null : buildAiVaultResumeStartupForWorktree({
		state: d.state,
		worktreeId: d.worktreeId,
		session: {
			agent: d.payload.agent,
			sessionId: d.payload.sessionId,
			cwd: d.payload.sessionCwd,
			codexHome: d.substituteCodexHome,
			executionHostId: d.payload.sessionExecutionHostId,
			filePath: d.payload.sessionFilePath
		},
		commandOverride: d.state.settings?.agentCmdOverrides?.[d.payload.agent]
	});
}
function buildAiVaultResumeForWorktree(d, B, V) {
	let H = getAiVaultAgentProviderSession(d.session);
	if (d.session.executionHostId && d.session.executionHostId !== "local" && d.session.resumeCommand && d.session.agent !== "omp" && !(d.session.agent === "codex" && d.session.codexHome === null) && !d.commandOverride?.trim()) return {
		command: d.session.resumeCommand,
		...realHomeCodexResumeEnvDeletion(d.session),
		...H ? { providerSession: H } : {}
	};
	let U = d.session.executionHostId && d.session.executionHostId !== "local" && d.session.executionHostPlatform ? d.session.executionHostPlatform : getAiVaultResumePlatform(d.state, d.worktreeId), W = getAiVaultResumeCodexHome(d.session.codexHome, U), G = !d.session.executionHostId || d.session.executionHostId === "local", K = normalizeAiVaultResumeFilePath(d.session.filePath, U), q = U === "win32" ? G ? resolveAiVaultResumeShell(d) : "powershell" : void 0, J = B ? d.session.cwd : null, Y = !B && d.session.cwd ? { cwd: d.session.cwd } : {};
	if (H && isResumableTuiAgent(d.session.agent)) {
		let B = buildAgentResumeStartupPlan({
			agent: d.session.agent,
			providerSession: H,
			cmdOverrides: {
				...d.state.settings?.agentCmdOverrides,
				...d.commandOverride?.trim() ? { [d.session.agent]: d.commandOverride } : {}
			},
			platform: U,
			shell: q,
			agentArgs: resolveTuiAgentLaunchArgs(d.session.agent, d.state.settings?.agentDefaultArgs),
			agentEnv: resolveTuiAgentLaunchEnv(d.session.agent, d.state.settings?.agentDefaultEnv),
			...d.session.agent === "omp" && K ? { ompResumeFilePath: K } : {}
		});
		if (B) return {
			command: d.session.agent === "omp" ? buildAiVaultResumeCommand({
				agent: d.session.agent,
				sessionId: d.session.sessionId,
				resumeFilePath: K,
				cwd: J,
				platform: U,
				commandOverride: B.launchConfig.agentCommand,
				codexHome: W,
				shell: q,
				clearEnvNames: V
			}) : buildAiVaultResumeShellCommand({
				resumeCommand: B.launchCommand,
				cwd: J,
				platform: U,
				codexHome: W,
				shell: q,
				clearEnvNames: V
			}),
			...B.env ? { env: B.env } : {},
			...realHomeCodexResumeEnvDeletion(d.session),
			...Y,
			launchConfig: B.launchConfig,
			providerSession: H
		};
	}
	return {
		command: buildAiVaultResumeCommand({
			agent: d.session.agent,
			sessionId: d.session.sessionId,
			resumeFilePath: K,
			cwd: J,
			platform: U,
			commandOverride: d.commandOverride,
			codexHome: W,
			shell: q,
			clearEnvNames: V
		}),
		...Y,
		...realHomeCodexResumeEnvDeletion(d.session)
	};
}
function resolveAiVaultResumeShell(d) {
	let B = d.session.executionHostId && d.session.executionHostId !== "local" && d.session.executionHostPlatform ? d.session.executionHostPlatform : getAiVaultResumePlatform(d.state, d.worktreeId), V = !d.session.executionHostId || d.session.executionHostId === "local";
	return resolveAiVaultResumeStartupShell({
		state: d.state,
		worktreeId: d.worktreeId,
		platform: B,
		isLocalSession: V
	});
}
function getAiVaultAgentProviderSession(d) {
	return isResumableTuiAgent(d.agent) ? d.agent === "antigravity" ? {
		key: "conversation_id",
		id: d.sessionId
	} : d.agent === "pi" || d.agent === "prime-agent" ? d.filePath ? {
		key: "session_id",
		id: d.sessionId,
		transcriptPath: d.filePath
	} : null : {
		key: "session_id",
		id: d.sessionId
	} : null;
}
function getAiVaultResumeCodexHome(d, B) {
	return !d || B !== "linux" ? d : parseWslUncPath(d)?.linuxPath ?? d;
}
function getAiVaultResumePlatform(d, B) {
	let V = B ?? d.activeWorktreeId, W = parseExecutionHostId(getExecutionHostIdForWorktree(d, V));
	if (W?.kind === "ssh" || W?.kind === "runtime") return "linux";
	let G = getLocalProjectExecutionRuntimeContext(d, B, CLIENT_PLATFORM);
	if (G?.status === "repair-required") return G.repair.preferredRuntime.kind === "wsl" ? "linux" : CLIENT_PLATFORM;
	if (G?.status === "resolved" && G.runtime.kind === "wsl") return "linux";
	let K = getAiVaultResumeWorkspacePath(d, V);
	return K && parseWslUncPath(K) ? "linux" : CLIENT_PLATFORM;
}
function launchAiVaultSessionInNewTab(d) {
	let B = useAppStore.getState(), V = d.targetGroupId, H = getRuntimeEnvironmentIdForWorktree(B, d.worktreeId);
	if (isWebRuntimeSessionActive(H)) {
		let B = createWebRuntimeSessionTerminal({
			worktreeId: d.worktreeId,
			environmentId: H,
			...V ? { targetGroupId: V } : {},
			agentSessionKind: "resume",
			launchAgent: d.agent,
			command: d.command,
			...d.cwd ? { cwd: d.cwd } : {},
			...d.env ? { env: d.env } : {},
			...d.envToDelete ? { envToDelete: d.envToDelete } : {},
			...d.launchConfig ? { launchConfig: d.launchConfig } : {},
			...d.providerSession ? { providerSession: d.providerSession } : {},
			...d.launchConfig ? { agentArgs: d.launchConfig.agentArgs } : {},
			activate: !0
		}).then((d) => (d.status === "created" && useAppStore.getState().setActiveTabType("terminal"), d));
		return {
			tabId: null,
			...V ? { groupId: V } : {},
			runtimeLaunch: B
		};
	}
	d.splitDirection && V && (V = B.createEmptySplitGroup(d.worktreeId, V, d.splitDirection) ?? V);
	let U = d.cwd ? B.createTab(d.worktreeId, V, void 0, { startupCwd: d.cwd }) : B.createTab(d.worktreeId, V);
	B.queueTabStartupCommand(U.id, {
		command: d.command,
		...d.env ? { env: d.env } : {},
		...d.envToDelete ? { envToDelete: d.envToDelete } : {},
		...d.launchConfig ? {
			launchConfig: d.launchConfig,
			launchAgent: d.agent
		} : {},
		...d.providerSession ? { resumeProviderSession: d.providerSession } : {},
		telemetry: {
			agent_kind: tuiAgentToAgentKind(d.agent),
			launch_source: "sidebar",
			request_kind: "resume"
		}
	}), B.setActiveTabType("terminal");
	let W = useAppStore.getState(), G = (W.tabsByWorktree[d.worktreeId] ?? []).map((d) => d.id), K = W.openFiles.filter((B) => B.worktreeId === d.worktreeId).map((d) => d.id), q = (W.browserTabsByWorktree?.[d.worktreeId] ?? []).map((d) => d.id), J = reconcileTabOrder(W.tabBarOrderByWorktree[d.worktreeId], G, K, q).filter((d) => d !== U.id);
	return J.push(U.id), W.setTabBarOrder(d.worktreeId, J), {
		tabId: U.id,
		groupId: V
	};
}
function isLegacySharedCodexHome(d) {
	if (!d) return !1;
	let B = d.split(/[\\/]/).filter(Boolean);
	return B.at(-2) === "codex-runtime-home" && B.at(-1) === "home";
}
function isPerAccountManagedCodexHome(d) {
	if (!d) return !1;
	let B = d.split(/[\\/]/).filter(Boolean);
	return B.at(-3) === "codex-accounts" && B.at(-1) === "home";
}
async function prepareAiVaultSessionForResume(d) {
	if (d.structuredSession || !aiVaultSessionNeedsResumePreparation(d)) return d;
	let B = await window.api.aiVault.prepareSessionResume({
		agent: d.agent,
		sessionId: d.sessionId,
		filePath: d.filePath,
		codexHome: d.codexHome,
		executionHostId: d.executionHostId
	});
	return B.useRealCodexHome ? {
		...d,
		codexHome: null
	} : B.substituteCodexHome ? {
		...d,
		codexHome: B.substituteCodexHome
	} : d;
}
function aiVaultSessionNeedsResumePreparation(d) {
	return d.agent === "codex" ? isLegacySharedCodexHome(d.codexHome) ? !0 : isPerAccountManagedCodexHome(d.codexHome) && (!d.executionHostId || d.executionHostId === "local") : !1;
}
var STRUCTURED_SESSION_RESTORE_TIMEOUT_MS = 5e3, defaultDeps = {
	activate: activateStructuredAgentSessionById,
	refresh: refreshStructuredSessionTabs,
	reveal: revealStructuredSession,
	unavailable: () => {
		toast.error(translate("auto.lib.activateAiVaultStructuredSession.unavailable", "The structured agent session is not available yet. Retry in a moment."));
	},
	gone: () => {
		toast.error(translate("auto.lib.activateAiVaultStructuredSession.gone", "This chat is no longer on this host, so it cannot be reopened here."));
	},
	hostCannotOpen: () => {
		toast.error(translate("auto.lib.activateAiVaultStructuredSession.hostCannotOpen", "This chat can't be reopened until Orca is updated."));
	}
};
async function activateAiVaultStructuredSession(d, B = defaultDeps) {
	let V = d.structuredSession;
	if (!V) return !1;
	let H = activationsInFlight.get(V.sessionId);
	if (H) return H;
	let U = activateStructuredSession(V, B);
	activationsInFlight.set(V.sessionId, U);
	try {
		return await U;
	} finally {
		activationsInFlight.delete(V.sessionId);
	}
}
var activationsInFlight = /* @__PURE__ */ new Map();
async function activateStructuredSession(d, V) {
	let H = {
		worktreeId: d.workspaceId,
		sessionId: d.sessionId
	};
	if (!V.activate(H) && (!await refreshedWithoutThrowing(V, d.workspaceId) || !V.activate(H))) {
		let B = await V.reveal(H);
		if (B !== "revealed") return B === "gone" ? V.gone() : B === "host-cannot-open" ? V.hostCannotOpen() : V.unavailable(), !0;
		if (await refreshedWithoutThrowing(V, d.workspaceId), !V.activate(H)) return V.unavailable(), !0;
	}
	return useAppStore.getState().activeWorktreeId !== d.workspaceId && activateAndRevealWorktree(d.workspaceId), !0;
}
async function refreshedWithoutThrowing(d, B) {
	try {
		return await d.refresh(B), !0;
	} catch {
		return !1;
	}
}
async function revealStructuredSession(d) {
	let B = getActiveRuntimeTarget({ activeRuntimeEnvironmentId: getRuntimeEnvironmentIdForWorktree(useAppStore.getState(), d.worktreeId) });
	if (B.kind === "environment") {
		let d;
		try {
			d = await withStructuredSessionRestoreTimeout(runtimeEnvironmentSupportsCapability(B.environmentId, STRUCTURED_AGENT_SESSION_REVEAL_RUNTIME_CAPABILITY, STRUCTURED_SESSION_RESTORE_TIMEOUT_MS));
		} catch (d) {
			return isRuntimeCompatBlockError(d) ? "host-cannot-open" : "unreachable";
		}
		if (!d) return "host-cannot-open";
	}
	let H;
	try {
		H = await withStructuredSessionRestoreTimeout(callRuntimeRpc(B, "agentSession.reveal", { sessionId: d.sessionId }, { timeoutMs: STRUCTURED_SESSION_RESTORE_TIMEOUT_MS }));
	} catch {
		return "unreachable";
	}
	return H?.ok === !0 ? "revealed" : H?.refusal?.code === "agent_session_identity_required" ? "gone" : "host-cannot-open";
}
async function refreshStructuredSessionTabs(d) {
	let B = getRuntimeEnvironmentIdForWorktree(useAppStore.getState(), d), V = localStructuredSessionGeneration(), H = await withStructuredSessionRestoreTimeout(callRuntimeRpc(getActiveRuntimeTarget({ activeRuntimeEnvironmentId: B }), "session.tabs.list", { worktree: toRuntimeWorktreeSelector(d) }, { timeoutMs: STRUCTURED_SESSION_RESTORE_TIMEOUT_MS }));
	isCurrentLocalStructuredSessionGeneration(V) && applyStructuredSessionTabSnapshots([H]);
}
async function withStructuredSessionRestoreTimeout(d) {
	let B;
	try {
		return await Promise.race([d, new Promise((d, V) => {
			B = setTimeout(() => V(/* @__PURE__ */ Error("structured_session_restore_timeout")), STRUCTURED_SESSION_RESTORE_TIMEOUT_MS);
		})]);
	} finally {
		B && clearTimeout(B);
	}
}
export { getAiVaultResumeWorkspaceTargetStatus as _, buildAiVaultDropRepinStartup as a, getAiVaultAgentProviderSession as c, clearAiVaultSessionDragData as d, hasAiVaultSessionDragData as f, getAiVaultResumeWorkspaceExecutionHostId as g, canResumeAiVaultSessionOnTarget as h, launchAiVaultSessionInNewTab as i, AI_VAULT_SESSION_DRAG_END_EVENT as l, writeAiVaultSessionDragData as m, aiVaultSessionNeedsResumePreparation as n, buildAiVaultResumeCopyCommandForWorktree as o, readAiVaultSessionDragData as p, prepareAiVaultSessionForResume as r, buildAiVaultResumeStartupForWorktree as s, activateAiVaultStructuredSession as t, AI_VAULT_SESSION_DRAG_START_EVENT as u, isWslStoredAiVaultSessionFile as v };
