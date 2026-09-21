import { i as translate } from "./i18n-CakWKPtl.js";
import { a as ensureWorktreeHasInitialTerminal, i as ensureWebRuntimeWorktreeTerminalAfterWake, o as queueHookCommandsForFirstWorktreeTab, r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { Dg as isNativeChatTranscriptLocalReadable, FC as PROJECT_HOST_SETUP_RUNTIME_CAPABILITY, Id as toWebTerminalSurfaceTabId, Rf as getRuntimeEnvironmentIdForWorktree, Tv as getProjectIdentityKey, Wv as assertRuntimeEnvironmentCapability, Yv as getActiveRuntimeTarget, oC as toRuntimeExecutionHostId, pm as cleanupFailedEphemeralVmWorkspace, sC as toSshExecutionHostId, t as useAppStore, vl as getConnectionIdFromState } from "./store-C9f8FDJV.js";
import { D as createBrowserUuid } from "./renderer-app-platform--nJ6HYmL.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { $t as nativeChatRequiresLocalTranscript, Xt as seedNativeChatLaunchDraftForAgentTab } from "./web-runtime-session-CeAC5QPx.js";
import { m as decideInitialAgentTabViewMode, n as seedNativeChatAppliedSessionOptions, w as ensureAgentStartupInTerminal, y as isAgentSessionHandleProvider } from "./native-chat-session-option-cache-DOY0fjiI.js";
import { t as preflightAgentTrust } from "./agent-trust-preflight-CUssWH-t.js";
import { n as adoptAgentSessionLaunchVerdict, t as beginStructuredAgentSessionProvisionalLaunch } from "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import { t as queueWorkspaceActivationTerminalFocus } from "./workspace-activation-terminal-focus-B9k6IhiW.js";
import { n as getEphemeralVmRecipeResultProjectRoot, t as getEphemeralVmRecipeResultCheckoutMode } from "./ephemeral-vm-recipes-B_01x9qK.js";
var MISSING_BASE_REF_ANCHOR = "could not resolve a default base ref";
function formatWorkspaceCreateError(L) {
	let R = L instanceof Error ? L.message : "Failed to create worktree.";
	return R.toLowerCase().includes(MISSING_BASE_REF_ANCHOR) ? {
		title: translate("auto.lib.workspace.create.error.format.64555d0014", "No base branch found"),
		message: translate("auto.lib.workspace.create.error.format.37cf0bc991", "Orca could not resolve a usable base ref for this workspace."),
		help: "Create an initial commit (for example on main), or select an existing branch in Create From, then try again."
	} : {
		title: R,
		message: R
	};
}
function getWorkspaceCreateErrorToastMessage(c) {
	return c.help ? c.title : c.message;
}
function findPendingLinkedWorkItemCreationId(c, L) {
	if (L.linkedIssue == null && L.linkedPR == null) return null;
	let R = L.workspaceRunContext?.hostId ?? null;
	return Object.values(c).find((c) => {
		let z = c.request;
		return z.repoId === L.repoId && z.linkedIssue === L.linkedIssue && z.linkedPR === L.linkedPR && (z.workspaceRunContext?.hostId ?? null) === R;
	})?.creationId ?? null;
}
function getCreationProgressLabel(c) {
	return c.phase === "provisioning-vm" ? "Provisioning VM…" : c.indeterminate ? "Setting up your workspace…" : c.phase === "preparing" ? "Preparing workspace…" : c.phase === "creating" ? "Creating worktree…" : "Fetching base branch…";
}
async function prepareEphemeralVmWorkspaceTarget(L) {
	let R = await window.api.ephemeralVm.provision({
		repoId: L.repoId,
		recipeId: L.recipeId,
		projectId: L.projectId,
		workspaceName: L.workspaceName,
		...L.branch ? { branch: L.branch } : {},
		...L.ref ? { ref: L.ref } : {},
		...L.provisionId ? { provisionId: L.provisionId } : {}
	});
	if (!R.ok) return {
		ok: !1,
		error: R.error,
		stderr: R.stderr
	};
	let z = getEphemeralVmRecipeResultCheckoutMode(R.runtime.recipeResult);
	if (z === "provisioned-root" && R.connectionType !== "ssh") return await cleanupProvisionedRuntime(R.runtime.id), {
		ok: !1,
		error: translate("auto.lib.ephemeralVmWorkspaceTarget.provisionedRootRequiresSsh", "Provisioned-root recipes currently require a direct SSH connection."),
		stderr: R.stderr
	};
	let B = R.connectionType === "ssh" ? toSshExecutionHostId(R.sshTargetId) : toRuntimeExecutionHostId(R.environment.id);
	if (R.connectionType === "orca-server") try {
		await assertRuntimeEnvironmentCapability(R.environment.id, PROJECT_HOST_SETUP_RUNTIME_CAPABILITY, "The recipe-created Orca server does not support project setup.");
	} catch (c) {
		return await cleanupProvisionedRuntime(R.runtime.id), {
			ok: !1,
			error: c instanceof Error ? c.message : String(c),
			stderr: R.stderr
		};
	}
	let V;
	try {
		V = await L.setupExistingFolder({
			projectId: L.projectId,
			hostId: B,
			path: getEphemeralVmRecipeResultProjectRoot(R.runtime.recipeResult),
			setupMethod: "imported-existing-folder"
		});
	} catch (c) {
		return await cleanupProvisionedRuntime(R.runtime.id), {
			ok: !1,
			error: c instanceof Error ? c.message : String(c),
			stderr: R.stderr
		};
	}
	if (!V) return await cleanupProvisionedRuntime(R.runtime.id), {
		ok: !1,
		error: translate("auto.lib.ephemeralVmWorkspaceTarget.projectRootRegistrationFailed", "Failed to register the recipe-created project root on the runtime."),
		stderr: R.stderr
	};
	V = {
		...V,
		setup: {
			...V.setup,
			hostId: B
		}
	};
	let U = {
		ok: !0,
		setup: V,
		runtimeId: R.runtime.id,
		checkoutMode: z,
		...z === "provisioned-root" && R.connectionType === "ssh" && R.expectedRefHead ? { expectedRefHead: R.expectedRefHead } : {},
		stderr: R.stderr,
		warnings: R.warnings
	};
	return R.connectionType === "orca-server" ? {
		...U,
		environmentId: R.environment.id
	} : U;
}
async function cleanupProvisionedRuntime(c) {
	try {
		await window.api.ephemeralVm.cleanup({ runtimeId: c });
	} catch {}
}
var MAX_PROVISIONING_LOG_CHARS = 12e3;
async function prepareRequestForCreate(c, L) {
	if (!L.ephemeralVmRecipe || L.ephemeralVmRuntimeId) return L;
	let R = useAppStore.getState();
	if (L.ephemeralVmRecipe.checkoutMode === "provisioned-root" && L.sparseCheckout) return R.updatePendingWorktreeCreation(c, {
		status: "error",
		error: getProvisionedRootSparseCheckoutError()
	}), null;
	R.updatePendingWorktreeCreation(c, {
		phase: "provisioning-vm",
		provisioningLog: ""
	});
	let z = window.api.ephemeralVm.onProvisionEvent?.((L) => {
		L.provisionId !== c || L.stream !== "stderr" || appendProvisioningLog(c, L.chunk);
	}), B;
	try {
		let z = R.repos.find((c) => c.id === L.ephemeralVmRecipe?.sourceRepoId);
		B = await prepareEphemeralVmWorkspaceTarget({
			repoId: L.ephemeralVmRecipe.sourceRepoId,
			recipeId: L.ephemeralVmRecipe.recipeId,
			projectId: resolvePortableEphemeralVmProjectId(z) ?? L.ephemeralVmRecipe.projectId,
			workspaceName: L.name,
			...L.ephemeralVmRecipe.checkoutMode === "provisioned-root" ? {
				branch: L.branchNameOverride ?? L.name,
				...L.baseBranch ? { ref: L.baseBranch } : {}
			} : {},
			provisionId: c,
			setupExistingFolder: R.setupProjectExistingFolder
		});
	} finally {
		z?.();
	}
	if (!B.ok) return useAppStore.getState().pendingWorktreeCreations[c] ? (useAppStore.getState().updatePendingWorktreeCreation(c, {
		status: "error",
		error: B.error
	}), useAppStore.getState().activePendingCreationId !== c && toast.error(B.error), null) : null;
	appendProvisioningWarnings(c, B.warnings);
	let V = {
		...L,
		repoId: B.setup.repo.id,
		...B.checkoutMode === "provisioned-root" ? {
			baseBranch: L.baseBranch,
			compareBaseRef: L.compareBaseRef
		} : getEphemeralVmPortableBaseSelection(L),
		ephemeralVmRuntimeId: B.runtimeId,
		ephemeralVmCheckoutMode: B.checkoutMode,
		...B.expectedRefHead ? { ephemeralVmExpectedRefHead: B.expectedRefHead } : {},
		...B.environmentId ? { ephemeralVmRuntimeEnvironmentId: B.environmentId } : {},
		workspaceRunContext: {
			kind: "workspace-run",
			projectId: B.setup.setup.projectId,
			hostId: B.setup.setup.hostId,
			projectHostSetupId: B.setup.setup.id,
			repoId: B.setup.repo.id,
			path: B.setup.repo.path
		}
	};
	return useAppStore.getState().pendingWorktreeCreations[c] ? (useAppStore.getState().updatePendingWorktreeCreation(c, {
		phase: "fetching",
		request: V
	}), V) : (await cleanupEphemeralVmRuntimeForFailedCreate(V), null);
}
function getEphemeralVmPortableBaseSelection(c) {
	return c.linkedPR !== void 0 || c.linkedGitLabMR !== void 0 || c.linkedBitbucketPR !== void 0 || c.linkedAzureDevOpsPR !== void 0 || c.linkedGiteaPR !== void 0 || c.compareBaseRef || c.pushTarget || c.branchNameOverride ? {
		...c.baseBranch ? { baseBranch: c.baseBranch } : {},
		...c.compareBaseRef ? { compareBaseRef: c.compareBaseRef } : {}
	} : {
		baseBranch: void 0,
		compareBaseRef: void 0
	};
}
function appendProvisioningWarnings(c, L) {
	L.length !== 0 && appendProvisioningLog(c, L.map((c) => c.remediation ? `Warning: ${c.message}\n${c.remediation}\n` : `Warning: ${c.message}\n`).join(""));
}
function appendProvisioningLog(c, L) {
	let R = useAppStore.getState(), z = R.pendingWorktreeCreations[c];
	if (!z) return;
	let B = `${z.provisioningLog ?? ""}${L}`.slice(-MAX_PROVISIONING_LOG_CHARS);
	R.updatePendingWorktreeCreation(c, { provisioningLog: B });
}
async function attachEphemeralVmRuntimeToWorkspace(c, L) {
	if (!(!c.ephemeralVmRuntimeId || c.ephemeralVmCheckoutMode === "provisioned-root")) try {
		await window.api.ephemeralVm.attachWorkspace({
			runtimeId: c.ephemeralVmRuntimeId,
			workspaceId: L
		}), c.ephemeralVmRuntimeEnvironmentId && useAppStore.getState().refreshRuntimeEnvironmentStatus(c.ephemeralVmRuntimeEnvironmentId);
	} catch (c) {
		console.error("Failed to attach ephemeral VM runtime to workspace:", c);
	}
}
function resolvePortableEphemeralVmProjectId(c) {
	if (!c) return null;
	let L = getProjectIdentityKey(c);
	return L.startsWith("github:") ? L : null;
}
async function cleanupEphemeralVmRuntimeForFailedCreate(c) {
	await cleanupFailedEphemeralVmWorkspace(c, {
		deleteProjectHostSetup: (c) => useAppStore.getState().deleteProjectHostSetup({ setupId: c }),
		cleanupRuntime: (c) => window.api.ephemeralVm.cleanup({ runtimeId: c }),
		reportSetupError: (c) => console.error("Failed to remove provisioned-root project setup:", c),
		reportRuntimeError: (c) => console.error("Failed to clean up ephemeral VM runtime after workspace creation failed:", c)
	});
}
function getProvisionedRootSparseCheckoutError() {
	return translate("auto.lib.ephemeralVmWorktreeCreation.sparseCheckoutUnsupported", "Provisioned-root recipes do not support sparse checkout.");
}
function getProvisionedRootCreateOptions(c) {
	if (c.ephemeralVmCheckoutMode !== "provisioned-root") return null;
	if (!c.ephemeralVmRuntimeId || !c.workspaceRunContext || c.baseBranch && !c.ephemeralVmExpectedRefHead) throw Error("Provisioned-root workspace identity is incomplete.");
	return {
		runtimeId: c.ephemeralVmRuntimeId,
		executionHostId: c.workspaceRunContext.hostId,
		expectedPath: c.workspaceRunContext.path,
		...c.ephemeralVmExpectedRefHead ? { expectedRefHead: c.ephemeralVmExpectedRefHead } : {}
	};
}
function resolveBackendDraftStartup(c) {
	if (!c.startup || !c.agent || !c.launchDraftPrompt) return c.startup;
	let L = useAppStore.getState(), R = L.repos.find((L) => L.id === c.repoId), z = R ? R.connectionId ?? null : void 0, B = decideInitialAgentTabViewMode({
		experimentalNativeChat: L.settings?.experimentalNativeChat,
		openAgentTabsInChatByDefault: L.settings?.openAgentTabsInChatByDefault,
		agent: c.agent,
		promptDelivery: "draft",
		launchDraftText: c.launchDraftPrompt,
		...nativeChatRequiresLocalTranscript(c.agent) ? { nativeChatTranscriptIsLocalReadable: isNativeChatTranscriptLocalReadable(z) } : {}
	}) ?? "terminal";
	return {
		...c.startup,
		viewMode: B
	};
}
function buildWorktreeCreationStartupOpt(c, L) {
	let R = c.startupPlan;
	if (!(!R || L)) return {
		command: R.launchCommand,
		...R.env ? { env: R.env } : {},
		launchConfig: R.launchConfig,
		...R.launchToken ? { launchToken: R.launchToken } : {},
		...c.agent ? { launchAgent: c.agent } : {},
		...R.draftPrompt ? { draftPrompt: R.draftPrompt } : {},
		...c.launchDraftPrompt ? { launchDraftText: c.launchDraftPrompt } : {},
		...R.startupCommandDelivery ? { startupCommandDelivery: R.startupCommandDelivery } : {},
		...c.agent === "command-code" && c.quickPrompt.trim().length > 0 ? { initialAgentStatus: {
			agent: c.agent,
			prompt: c.quickPrompt.trim()
		} } : {},
		...c.quickTelemetry ? { telemetry: c.quickTelemetry } : {}
	};
}
function getWorktreeCreationIndeterminate(c) {
	return c.worktreeCreateProgressMode ? c.worktreeCreateProgressMode === "indeterminate" : getActiveRuntimeTarget(useAppStore.getState().settings).kind !== "local";
}
function getInitialWorktreeCreationPhase(c) {
	return c.ephemeralVmRecipe && !c.ephemeralVmRuntimeId ? "provisioning-vm" : "fetching";
}
async function launchStructuredWorktreeSession(c) {
	let { activation: L, primaryTabId: R } = c, z = {
		accepted: !0,
		cancelled: !1
	}, { agent: V } = c.request;
	if (!isAgentSessionHandleProvider(V)) return {
		...z,
		activation: L,
		primaryTabId: R
	};
	let H = () => !useAppStore.getState().pendingWorktreeCreations[c.creationId];
	if (H()) return {
		...z,
		cancelled: !0,
		activation: L,
		primaryTabId: R
	};
	let U = adoptAgentSessionLaunchVerdict({
		route: c.agentLaunchRoute,
		agent: V,
		prompt: c.request.launchDraftPrompt ?? c.request.quickPrompt,
		...c.request.promptDelivery ? { promptDelivery: c.request.promptDelivery } : {}
	}), W = new AbortController(), G = !1, K = useAppStore.subscribe((L) => {
		!G && !L.pendingWorktreeCreations[c.creationId] && W.abort();
	});
	try {
		let z = beginStructuredAgentSessionProvisionalLaunch({
			plan: U,
			hooks: { signal: W.signal },
			target: { worktreeId: c.worktreeId },
			activate: c.shouldActivateOnCompletion,
			beforeOpen: () => {
				if (W.signal.aborted || H()) return !1;
				if (c.shouldActivateOnCompletion && !L) {
					try {
						L = activateAndRevealWorktree(c.worktreeId, { providesInitialSurface: !0 });
					} catch (R) {
						return console.error("worktree create: structured chat reveal failed", c.worktreeId, R), L = !1, !1;
					}
					if (L === !1) return !1;
					R = L.primaryTabId;
				}
				return !W.signal.aborted && !H();
			}
		});
		G = z !== null, z && (R = z.tab.id);
	} catch {
		return {
			...z,
			activation: L,
			primaryTabId: R
		};
	} finally {
		K();
	}
	return {
		...z,
		activation: L,
		primaryTabId: R
	};
}
function resolveLaunchAgentTabId(c, L) {
	let R = c.tabsByWorktree[L.worktreeId] ?? [];
	return L.backendSpawned && L.startupTerminalTabId ? getRuntimeEnvironmentIdForWorktree(c, L.worktreeId) ? toWebTerminalSurfaceTabId(L.startupTerminalTabId) : L.startupTerminalTabId : R.find((c) => c.launchAgent === L.agent)?.id ?? L.primaryTabId ?? L.startupTerminalTabId ?? null;
}
function applyBackendSpawnedDraftViewMode(c) {
	let { state: L, request: R, agent: z, tabId: B, worktreeId: H, backendSpawned: U } = c;
	if (!U || !R.launchDraftPrompt) return;
	let G = decideInitialAgentTabViewMode({
		experimentalNativeChat: L.settings?.experimentalNativeChat,
		openAgentTabsInChatByDefault: L.settings?.openAgentTabsInChatByDefault,
		agent: z,
		promptDelivery: "draft",
		launchDraftText: R.launchDraftPrompt,
		...nativeChatRequiresLocalTranscript(z) ? { nativeChatTranscriptIsLocalReadable: isNativeChatTranscriptLocalReadable(getConnectionIdFromState(L, H)) } : {}
	}) ?? "terminal", K = L.unifiedTabsByWorktree?.[H]?.find((c) => c.id === B);
	if (!K && getRuntimeEnvironmentIdForWorktree(L, H)) {
		import("./web-runtime-session-Bx7GoMyj.js").then(({ setWebRuntimeTabProps: c }) => c({
			worktreeId: H,
			tabId: B,
			viewMode: G
		}));
		return;
	}
	(K?.viewMode ?? "terminal") !== G && L.setTabViewMode(B, G);
}
function applyAgentTabSeeds(c) {
	let { request: L, agent: R, tabId: z } = c;
	applyBackendSpawnedDraftViewMode(c), seedNativeChatAppliedSessionOptions(z, R, L.startupPlan?.sessionOptions), L.launchDraftPrompt && seedNativeChatLaunchDraftForAgentTab({
		tabId: z,
		agent: R,
		text: L.launchDraftPrompt
	});
}
function seedAgentTabStateAfterWorktreeCreate(c) {
	let { request: L, worktreeId: R, backendSpawned: B } = c, V = L.agent;
	if (!L.startupPlan || !V) return;
	let H = useAppStore.getState(), U = resolveLaunchAgentTabId(H, {
		...c,
		agent: V
	});
	if (U) {
		applyAgentTabSeeds({
			state: H,
			request: L,
			agent: V,
			tabId: U,
			worktreeId: R,
			backendSpawned: B
		});
		return;
	}
	(H.tabsByWorktree[R] ?? []).length > 0 || queueHookCommandsForFirstWorktreeTab({
		worktreeId: R,
		deliver: (z, H) => {
			let U = resolveLaunchAgentTabId(z, {
				...c,
				agent: V
			});
			if (U) {
				applyAgentTabSeeds({
					state: z,
					request: L,
					agent: V,
					tabId: U,
					worktreeId: R,
					backendSpawned: B
				});
				return;
			}
			(z.tabsByWorktree[R] ?? []).length === 1 && applyAgentTabSeeds({
				state: z,
				request: L,
				agent: V,
				tabId: H,
				worktreeId: R,
				backendSpawned: B
			});
		}
	});
}
async function completeWorktreeCreation(c) {
	let { request: L } = c;
	if (useAppStore.getState().removePendingWorktreeCreation(c.creationId, { cleanupVm: !1 }), c.structuredLaunchAccepted || seedAgentTabStateAfterWorktreeCreate({
		request: L,
		worktreeId: c.worktreeId,
		primaryTabId: c.primaryTabId,
		startupTerminalTabId: c.startupTerminalTabId,
		backendSpawned: c.backendSpawned
	}), !c.structuredLaunchAccepted && L.startupPlan && !c.backendSpawned && ensureAgentStartupInTerminal({
		worktreeId: c.worktreeId,
		primaryTabId: c.primaryTabId,
		startup: L.startupPlan
	}), !c.structuredLaunchAccepted && !L.suppressTerminalFocusOnCompletion && c.focusOnCompletion && queueWorkspaceActivationTerminalFocus(c.worktreeId, c.activation), L.note) try {
		await useAppStore.getState().updateWorktreeMeta(c.worktreeId, { comment: L.note });
	} catch {
		console.error("Failed to update worktree meta after creation");
	}
}
function isPendingCreationSurfaceVisible(c) {
	let L = useAppStore.getState();
	return L.activeView === "terminal" && L.activePendingCreationId === c;
}
async function executeWorktreeCreation(c, z) {
	let V = await prepareRequestForCreate(c, z);
	if (!V) return;
	let H;
	try {
		let L = getProvisionedRootCreateOptions(V), R = V.agentLaunchRoute === "structured-native-chat", z = L || R ? void 0 : resolveBackendDraftStartup(V);
		H = await useAppStore.getState().createWorktree(V.repoId, V.name, V.baseBranch, V.setupDecision, V.sparseCheckout, V.telemetrySource, V.displayName, V.linkedIssue, V.linkedPR, V.pushTarget, V.agent ?? void 0, V.linkedLinearIssue, V.branchNameOverride, V.workspaceStatus, V.linkedGitLabMR, V.linkedGitLabIssue, z, V.pendingFirstAgentMessageRename, c, V.linkedLinearIssueWorkspaceId, V.linkedLinearIssueOrganizationUrlKey, V.linkedBitbucketPR, V.linkedAzureDevOpsPR, V.linkedGiteaPR, V.compareBaseRef, {
			...V.nameWasGenerated ? { nameWasGenerated: !0 } : {},
			...V.displayNameKind ? { displayNameKind: V.displayNameKind } : {},
			...V.linkedWorkItem === void 0 ? {} : { linkedWorkItem: V.linkedWorkItem },
			...V.linkedTaskSourceContext === void 0 ? {} : { linkedTaskSourceContext: V.linkedTaskSourceContext },
			...!R && !z && V.agent && V.launchDraftPrompt ? { startupDraft: V.launchDraftPrompt } : {},
			...L ? { provisionedRoot: L } : {},
			...V.parentWorktreeId ? { parentWorktreeId: V.parentWorktreeId } : {}
		});
	} catch (L) {
		if (!useAppStore.getState().pendingWorktreeCreations[c]) return;
		V.ephemeralVmRuntimeId && await cleanupEphemeralVmRuntimeForFailedCreate(V);
		let R = getWorkspaceCreateErrorToastMessage(formatWorkspaceCreateError(L));
		useAppStore.getState().updatePendingWorktreeCreation(c, {
			status: "error",
			error: R,
			...V.ephemeralVmRecipe ? { request: z } : {}
		}), isPendingCreationSurfaceVisible(c) || toast.error(R);
		return;
	}
	let U = H.worktree, W = V.agentLaunchRoute === "structured-native-chat";
	if (!useAppStore.getState().pendingWorktreeCreations[c]) {
		V.ephemeralVmRuntimeId && await cleanupEphemeralVmRuntimeForFailedCreate(V);
		return;
	}
	await attachEphemeralVmRuntimeToWorkspace(V, U.id);
	let G = H.startupTerminal?.spawned === !0;
	V.startupPlan && !G && !V.startupPlan.launchToken && (V.startupPlan.launchToken = createBrowserUuid());
	let K = W ? void 0 : buildWorktreeCreationStartupOpt(V, G);
	if (U.path && !W) {
		let c = useAppStore.getState().repos.find((c) => c.id === U.repoId)?.connectionId ?? null;
		await preflightAgentTrust({
			agent: V.agent,
			workspacePath: U.path,
			connectionId: c
		});
	}
	let q = useAppStore.getState(), J = q.pendingWorktreeCreations[c] !== void 0 && (isPendingCreationSurfaceVisible(c) || q.activeView === "terminal" && q.activePendingCreationId === null), Y = !1, X = null;
	if (J && !W) try {
		Y = activateAndRevealWorktree(U.id, {
			sidebarRevealBehavior: "auto",
			...V.agent === null ? {} : { agent: V.agent },
			...H.setup ? { setup: H.setup } : {},
			...H.defaultTabs ? { defaultTabs: H.defaultTabs } : {},
			...K ? { startup: K } : {},
			...V.issueCommand ? { issueCommand: V.issueCommand } : {},
			...G ? { backendStartupTerminalSpawned: !0 } : {}
		}), X = Y === !1 ? null : Y.primaryTabId;
	} catch (c) {
		console.error("worktree create: activate-and-reveal failed", U.id, c);
		let z = useAppStore.getState().tabsByWorktree[U.id] ?? [], B = K?.launchAgent ?? V.agent, W = H.startupTerminal?.tabId ?? (B ? z.find((c) => c.launchAgent === B)?.id : void 0);
		if (W) X = W;
		else if (z.length === 0) try {
			X = ensureWorktreeHasInitialTerminal(useAppStore.getState(), U.id, K, H.setup, V.issueCommand, H.defaultTabs, G ? { backendStartupTerminalSpawned: !0 } : void 0);
		} catch (c) {
			console.error("worktree create: activation recovery seeding failed", U.id, c);
		}
		if (!G) try {
			ensureWebRuntimeWorktreeTerminalAfterWake(U.id, {
				startup: K,
				agent: V.agent
			});
		} catch (c) {
			console.error("worktree create: activation recovery after-wake seeding failed", U.id, c);
		}
	}
	else {
		let c = !!(K || H.setup || V.issueCommand || H.defaultTabs);
		if (V.agent === null || c) try {
			X = ensureWorktreeHasInitialTerminal(useAppStore.getState(), U.id, K, H.setup, V.issueCommand, H.defaultTabs, {
				activateCreatedTabs: !1,
				...V.agent === null ? {} : { callerProvidesSurface: !0 },
				...G ? { backendStartupTerminalSpawned: !0 } : {}
			});
		} catch (c) {
			console.error("worktree create: initial terminal seeding failed", U.id, c);
		}
		if (!W && !G) try {
			ensureWebRuntimeWorktreeTerminalAfterWake(U.id, {
				startup: K,
				agent: V.agent,
				activate: !1
			});
		} catch (c) {
			console.error("worktree create: after-wake terminal seeding failed", U.id, c);
		}
	}
	let Z = W, { agentLaunchRoute: Q } = V, $ = V.agent;
	if (Q === "structured-native-chat" && isAgentSessionHandleProvider($)) {
		let L = null;
		try {
			L = await launchStructuredWorktreeSession({
				creationId: c,
				request: V,
				agentLaunchRoute: Q,
				worktreeId: U.id,
				shouldActivateOnCompletion: J,
				activation: Y,
				primaryTabId: X
			});
		} catch (c) {
			console.error("worktree create: structured session launch failed", U.id, c);
		}
		if (L && (Z = L.accepted, Y = L.activation, X = L.primaryTabId, L.cancelled)) return;
	}
	await completeWorktreeCreation({
		creationId: c,
		request: V,
		worktreeId: U.id,
		structuredLaunchAccepted: Z,
		activation: Y,
		primaryTabId: X,
		startupTerminalTabId: H.startupTerminal?.tabId,
		backendSpawned: G,
		focusOnCompletion: J
	});
}
function startWorktreeCreation(c, L) {
	executeWorktreeCreation(c, L).catch((L) => {
		console.error("worktree create: unhandled failure", c, L);
		let R = useAppStore.getState();
		if (!R.pendingWorktreeCreations[c]) return;
		let z = getWorkspaceCreateErrorToastMessage(formatWorkspaceCreateError(L));
		R.updatePendingWorktreeCreation(c, {
			status: "error",
			error: z
		}), R.activeView === "terminal" && R.activePendingCreationId === c || toast.error(z);
	});
}
function revealPendingCreation(c, L, R) {
	let z = useAppStore.getState(), B = getWorktreeCreationIndeterminate(L);
	z.beginPendingWorktreeCreation({
		creationId: c,
		phase: R,
		status: "creating",
		startedAt: Date.now(),
		indeterminate: B,
		loaderVisible: !0,
		request: L
	}), z.setActiveView("terminal"), z.setSidebarOpen(!0);
}
function runBackgroundWorktreeCreation(c) {
	let L = useAppStore.getState(), R = findPendingLinkedWorkItemCreationId(L.pendingWorktreeCreations, c);
	if (R) return L.setActivePendingWorktreeCreation(R), L.setActiveView("terminal"), L.setSidebarOpen(!0), R;
	let z = createBrowserUuid();
	return revealPendingCreation(z, c, getInitialWorktreeCreationPhase(c)), startWorktreeCreation(z, c), z;
}
function retryBackgroundWorktreeCreation(c) {
	let L = useAppStore.getState(), R = L.pendingWorktreeCreations[c];
	R && (L.updatePendingWorktreeCreation(c, {
		status: "creating",
		startedAt: Date.now(),
		phase: R.request.ephemeralVmRecipe && !R.request.ephemeralVmRuntimeId ? "provisioning-vm" : "fetching",
		error: void 0,
		provisioningLog: void 0
	}), L.setActivePendingWorktreeCreation(c), L.setActiveView("terminal"), L.setSidebarOpen(!0), startWorktreeCreation(c, R.request));
}
export { formatWorkspaceCreateError as a, getCreationProgressLabel as i, runBackgroundWorktreeCreation as n, getWorkspaceCreateErrorToastMessage as o, findPendingLinkedWorkItemCreationId as r, retryBackgroundWorktreeCreation as t };
