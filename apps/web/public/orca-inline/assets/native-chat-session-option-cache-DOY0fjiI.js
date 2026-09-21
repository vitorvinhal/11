import { i as translate } from "./i18n-CakWKPtl.js";
import { Bh as releaseAgentStartupDeliveryConsumed, Ih as parsePaneKey, Lh as agentStartupDeliveryKey, Rh as isAgentStartupDeliveryConsumed, Uv as resolveHookCommandSourcePolicy, VC as STRUCTURED_AGENT_SESSION_RUNTIME_CAPABILITY, ou as isShellProcess, t as useAppStore, zh as markAgentStartupDeliveryConsumed } from "./store-C9f8FDJV.js";
import { D as createBrowserUuid } from "./renderer-app-platform--nJ6HYmL.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as track, s as tuiAgentToAgentKind } from "./telemetry-DdvWHaqb.js";
import { $t as nativeChatRequiresLocalTranscript, Qt as isNativeChatSupportedAgent, nn as canMirrorLaunchDraftToNativeChat } from "./web-runtime-session-CeAC5QPx.js";
import { i as pasteDraftToAgentPtyWhenReady, r as getSettingsForAgentTabRuntimeOwner } from "./agent-paste-draft-Ddp-k6QZ.js";
import { n as isExpectedAgentProcess, s as inspectRuntimeTerminalProcess, t as isAgentForegroundWrapperProcess, u as sendRuntimePtyInputVerified } from "./agent-process-recognition-BUFJTuDF.js";
import { a as parseGitHubIssueOrPRLink, m as getLinearOrganizationUrlKeyFromIssueUrl, o as parseGitHubIssueOrPRNumber, t as parseGitLabIssueOrMRLink } from "./gitlab-links-Di3ozbga.js";
async function sendFollowupPromptWhenAgentReady(g) {
	let { ptyId: G, expectedProcess: K, prompt: q, settings: J } = g;
	if (!await waitForAgentForeground(G, K, J)) return !1;
	try {
		return await sendRuntimePtyInputVerified(J, G, `${q}\r`);
	} catch {
		return !1;
	}
}
async function waitForAgentForeground(g, G, K) {
	for (let q = 0; q < 30; q += 1) {
		q > 0 && await new Promise((g) => globalThis.setTimeout(g, 150));
		try {
			let J = await inspectRuntimeTerminalProcess(K, g), Y = J.foregroundProcess?.toLowerCase() ?? "";
			if (isExpectedAgentProcess(Y, G) || q >= 4 && isAgentForegroundWrapperProcess(Y) && !isShellProcess(Y) && J.hasChildProcesses) return !0;
		} catch {}
	}
	return !1;
}
function showAutomationPromptNotSentToast(G) {
	toast.message(translate("auto.lib.launch.agent.background.session.4ca0651d56", "Your automation prompt wasn't sent — open the workspace and paste it.")), track("agent_error", {
		error_class: "paste_readiness_timeout",
		agent_kind: tuiAgentToAgentKind(G)
	});
}
var pendingAgentStartupDeliveries = /* @__PURE__ */ new Map(), staleStartupRecheckTimers = /* @__PURE__ */ new Map(), unsubscribePendingAgentStartupDeliveries = null;
function resolveAgentStartupTabId(g, G, K) {
	return K ?? g.activeTabIdByWorktree[G] ?? g.tabsByWorktree[G]?.[0]?.id ?? null;
}
function getAgentStartupTabPtyId(g, G, q) {
	let J = new Set(g.ptyIdsByTabId[G] ?? []);
	if (J.size === 0) return null;
	for (let [Y, X] of Object.entries(g.agentLaunchConfigByPaneKey ?? {})) {
		let Z = X.identity;
		if (Z.tabId !== G || Z.launchToken !== q) continue;
		let Q = Z.leafId ?? parsePaneKey(Y)?.leafId;
		if (!Q) continue;
		let $ = g.terminalLayoutsByTabId[G]?.ptyIdsByLeafId?.[Q];
		if ($ && J.has($)) return $;
	}
	return null;
}
function worktreeStillOwnsStartupTab(g, G, K) {
	return (g.tabsByWorktree[G] ?? []).some((g) => g.id === K);
}
function getPendingStartupLaunchToken(g, G) {
	return g.pendingStartupByTabId?.[G]?.launchToken;
}
function hasRegisteredStartupLaunch(g, G, K) {
	return Object.values(g.agentLaunchConfigByPaneKey ?? {}).some((g) => g.identity.tabId === G && g.identity.launchToken === K);
}
function ensurePendingAgentStartupSubscription() {
	if (unsubscribePendingAgentStartupDeliveries) return;
	let g = useAppStore.getState(), G = g.tabsByWorktree, K = g.pendingStartupByTabId, q = g.agentLaunchConfigByPaneKey, J = g.ptyIdsByTabId, Y = g.terminalLayoutsByTabId;
	unsubscribePendingAgentStartupDeliveries = useAppStore.subscribe((g) => {
		g.tabsByWorktree === G && g.pendingStartupByTabId === K && g.agentLaunchConfigByPaneKey === q && g.ptyIdsByTabId === J && g.terminalLayoutsByTabId === Y || (G = g.tabsByWorktree, K = g.pendingStartupByTabId, q = g.agentLaunchConfigByPaneKey, J = g.ptyIdsByTabId, Y = g.terminalLayoutsByTabId, flushPendingAgentStartupDeliveries());
	});
}
function stopPendingAgentStartupSubscriptionIfIdle() {
	pendingAgentStartupDeliveries.size > 0 || !unsubscribePendingAgentStartupDeliveries || (unsubscribePendingAgentStartupDeliveries(), unsubscribePendingAgentStartupDeliveries = null);
}
function queuePendingAgentStartupDelivery(g) {
	let G = agentStartupDeliveryKey(g);
	isAgentStartupDeliveryConsumed(G) || (pendingAgentStartupDeliveries.set(G, g), ensurePendingAgentStartupSubscription(), flushPendingAgentStartupDeliveries());
}
function beginAgentStartupDeliveryAttempt(g) {
	let G = agentStartupDeliveryKey(g);
	return isAgentStartupDeliveryConsumed(G) ? !1 : (markAgentStartupDeliveryConsumed(G), pendingAgentStartupDeliveries.delete(G), clearStaleStartupRecheck(G), !0);
}
function releaseAgentStartupDeliveryAttempt(g) {
	releaseAgentStartupDeliveryConsumed(agentStartupDeliveryKey(g));
}
function flushPendingAgentStartupDeliveries() {
	let g = useAppStore.getState();
	for (let [G, K] of pendingAgentStartupDeliveries) {
		let { tabId: q, launchToken: J } = K;
		if (!worktreeStillOwnsStartupTab(g, K.worktreeId, q)) {
			pendingAgentStartupDeliveries.delete(G);
			continue;
		}
		let Y = getPendingStartupLaunchToken(g, q), X = hasRegisteredStartupLaunch(g, q, J);
		if (Y !== J && !X && Y !== void 0) {
			pendingAgentStartupDeliveries.delete(G), clearStaleStartupRecheck(G);
			continue;
		}
		if (Y === void 0 && !X) {
			scheduleStaleStartupRecheck(G);
			continue;
		}
		let Z = getAgentStartupTabPtyId(g, q, J);
		Z && beginAgentStartupDeliveryAttempt(K) && K.deliver(q, Z, K.startup).catch((g) => {
			console.warn("Queued agent startup delivery failed", g);
		});
	}
	stopPendingAgentStartupSubscriptionIfIdle();
}
function scheduleStaleStartupRecheck(g) {
	staleStartupRecheckTimers.has(g) || staleStartupRecheckTimers.set(g, globalThis.setTimeout(() => {
		staleStartupRecheckTimers.delete(g);
		let G = pendingAgentStartupDeliveries.get(g);
		if (!G) {
			stopPendingAgentStartupSubscriptionIfIdle();
			return;
		}
		let K = useAppStore.getState();
		getPendingStartupLaunchToken(K, G.tabId) === void 0 && !hasRegisteredStartupLaunch(K, G.tabId, G.launchToken) ? pendingAgentStartupDeliveries.delete(g) : flushPendingAgentStartupDeliveries(), stopPendingAgentStartupSubscriptionIfIdle();
	}, 1e3));
}
function clearStaleStartupRecheck(g) {
	let G = staleStartupRecheckTimers.get(g);
	G && (globalThis.clearTimeout(G), staleStartupRecheckTimers.delete(g));
}
function foldWorkspaceNameWhitespaceToHyphen(g) {
	let G = "", K = !1;
	for (let q = 0; q < g.length; q += 1) {
		if (isWorkspaceNameWhitespace(g.charCodeAt(q))) {
			K = !0;
			continue;
		}
		K &&= (G += "-", !1), G += g[q];
	}
	return G;
}
function collectCompactWorkspaceWords(g, G, K) {
	let q = [], J = -1;
	for (let Y = 0; Y <= g.length; Y += 1) {
		let X = Y === g.length;
		if (!X && startsWithHttpUrl(g, Y)) {
			for (Y = finishCompactWorkspaceToken(g, J, Y, q, G, K), J = -1; Y < g.length && !isWorkspaceNameWhitespace(g.charCodeAt(Y));) Y += 1;
			if (q.length >= G) break;
			continue;
		}
		if (!X && !isCompactWorkspaceWordSeparator(g.charCodeAt(Y))) {
			J === -1 && (J = Y);
			continue;
		}
		if (J !== -1 && (finishCompactWorkspaceToken(g, J, Y, q, G, K), J = -1, q.length >= G)) break;
	}
	return q;
}
function finishCompactWorkspaceToken(g, G, K, q, J, Y) {
	if (G === -1 || q.length >= J) return K;
	let X = g.slice(G, K);
	return X && !Y.has(X.toLowerCase()) && q.push(X), K;
}
function startsWithHttpUrl(g, G) {
	return startsWithAsciiInsensitive(g, G, "http://") || startsWithAsciiInsensitive(g, G, "https://");
}
function startsWithAsciiInsensitive(g, G, K) {
	if (G + K.length > g.length) return !1;
	for (let q = 0; q < K.length; q += 1) if (toLowerAsciiCode(g.charCodeAt(G + q)) !== K.charCodeAt(q)) return !1;
	return !0;
}
function toLowerAsciiCode(g) {
	return g >= 65 && g <= 90 ? g + 32 : g;
}
function isCompactWorkspaceWordSeparator(g) {
	return isWorkspaceNameWhitespace(g) || g === 34 || g === 35 || g === 40 || g === 41 || g === 47 || g === 58 || g === 91 || g === 92 || g === 93 || g === 95 || g === 123 || g === 125 || g === 45;
}
function isWorkspaceNameWhitespace(g) {
	return g === 32 || g >= 9 && g <= 13 || g === 160 || g === 5760 || g >= 8192 && g <= 8202 || g === 8232 || g === 8233 || g === 8239 || g === 8287 || g === 12288 || g === 65279;
}
function escapeRegex(g) {
	return g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function normalizeApostrophes(g) {
	return g.replace(/[‘’]/g, "'");
}
function removeIntraWordApostrophes(g) {
	return normalizeApostrophes(g).replace(/([\p{L}\p{N}])'(?=[\p{L}\p{N}])/gu, "$1");
}
function stripDanglingDisplayApostrophes(g) {
	return normalizeApostrophes(g).replace(/(^|[^\p{L}\p{N}])'(?=[\p{L}\p{N}])/gu, "$1").replace(/([\p{L}\p{N}])'(?=$|[^\p{L}\p{N}])/gu, "$1");
}
function slugifyForWorkspaceName(g) {
	return foldWorkspaceNameWhitespaceToHyphen(removeIntraWordApostrophes(g).trim().toLowerCase().replace(/[\\/]+/g, "-")).replace(/[^a-z0-9._-]+/g, "-").replace(/-+/g, "-").replace(/\.{2,}/g, ".").replace(/^[.-]+|[.-]+$/g, "").slice(0, 48).replace(/[-._]+$/g, "");
}
function getLinkedWorkItemSuggestedName(g) {
	return slugifyForWorkspaceName(getLinkedWorkItemTitleSubject(g) || g.title.trim());
}
function getLinkedWorkItemTitleSubject(g) {
	return g.title.trim().replace(/^(?:issue|pr|pull request|mr|merge request)\s*[#!]?\d+\s*[:-]\s*/i, "").replace(/^#\d+\s*[:-]\s*/, "").replace(/\([#!]?\d+\)/g, "").replace(/\b#\d+\b/g, "").trim();
}
var ACTION_LABELS = [
	[/(?:^|[^a-z0-9_-])(?:fix(?:e[sd])?|resolve|repair)(?:$|[^a-z0-9_-])/i, "Fix"],
	[/(?:^|[^a-z0-9_-])(?:debug|diagnose)(?:$|[^a-z0-9_-])/i, "Debug"],
	[/(?:^|[^a-z0-9_-])(?:review|look\s+over|inspect|check|safe|safety)(?:$|[^a-z0-9_-])/i, "Review"],
	[/(?:^|[^a-z0-9_-])(?:implement|build|ship)(?:$|[^a-z0-9_-])/i, "Implement"],
	[/(?:^|[^a-z0-9_-])(?:investigate|understand|triage)(?:$|[^a-z0-9_-])/i, "Investigate"],
	[/(?:^|[^a-z0-9_-])(?:add|create)(?:$|[^a-z0-9_-])/i, "Add"],
	[/(?:^|[^a-z0-9_-])(?:update|change)(?:$|[^a-z0-9_-])/i, "Update"],
	[/(?:^|[^a-z0-9_-])(?:refactor|simplify)(?:$|[^a-z0-9_-])/i, "Refactor"],
	[/(?:^|[^a-z0-9_-])(?:test|verify|validate)(?:$|[^a-z0-9_-])/i, "Test"]
], STOP_WORDS = new Set([
	"a",
	"an",
	"and",
	"for",
	"from",
	"in",
	"is",
	"it",
	"of",
	"on",
	"or",
	"the",
	"this",
	"to",
	"with"
]);
function detectIntentAction(g) {
	for (let [G, K] of ACTION_LABELS) if (G.test(g)) return K;
	return null;
}
function titleCaseWord(g) {
	let G = normalizeApostrophes(g);
	if (/^[A-Z]{2,}\d*$/.test(G) || /^[A-Z]+-\d+$/i.test(G)) return G.toUpperCase();
	let K = G.match(/^([A-Z]{2,}\d*)'([sS])$/);
	if (K) return `${K[1].toUpperCase()}'s`;
	let q = G.toLowerCase(), J = q.split("'");
	return J.length === 2 && J[0].length === 1 && J[1] ? `${J[0].toUpperCase()}'${J[1]}` : q.charAt(0).toUpperCase() + q.slice(1);
}
function compactWords(g, G = 4) {
	return collectCompactWorkspaceWords(stripDanglingDisplayApostrophes(g), G, STOP_WORDS).map(titleCaseWord).join(" ");
}
function compactWorkItemTitle(g, G) {
	let K = G.linearIdentifier ?? G.jiraIdentifier, q = g.trim().replace(/^(?:issue|pr|pull request|mr|merge request)\s*[#!]?\d+\s*[:-]\s*/i, "").replace(/\([#!]?\d+\)/g, "").replace(/^[^:]{1,32}:\s*/, "").trim();
	return G.number > 0 && (q = q.replace(RegExp(`\\b[#!]?${G.number}\\b`, "g"), "").trim()), K && (q = q.replace(RegExp(`^${escapeRegex(K)}\\s*[:-]?\\s*`, "i"), "").trim()), compactWords(q || g, 3);
}
function workItemIdentity(g) {
	return g.linearIdentifier ? g.linearIdentifier.toUpperCase() : g.jiraIdentifier ? g.jiraIdentifier.toUpperCase() : g.type === "pr" ? `PR ${g.number}` : g.type === "mr" ? `MR ${g.number}` : `Issue ${g.number}`;
}
function getLinkedWorkItemWorkspaceName(g) {
	let G = g.linearIdentifier ?? g.jiraIdentifier, K = getLinkedWorkItemTitleSubject(g) || g.title.trim();
	G && (K = K.replace(RegExp(`^${escapeRegex(G)}\\s*[:-]?\\s*`, "i"), "").trim());
	let q = [G, K].filter(Boolean).join(" ") || workItemIdentity(g), J = slugifyForWorkspaceName(q);
	return J ? {
		displayName: q,
		seedName: J
	} : null;
}
function defaultActionForWorkItem(g) {
	return g.type === "pr" || g.type === "mr" ? "Review" : null;
}
function getWorkspaceIntentName(g) {
	let G = g.sourceText?.trim() ?? "", K = g.workItem ?? null, q = "";
	if (K) {
		let g = detectIntentAction(G) ?? defaultActionForWorkItem(K), J = workItemIdentity(K);
		q = g ? `${g} ${J}` : [J, compactWorkItemTitle(K.title, K)].filter(Boolean).join(" ");
	} else G && (q = compactWords(G, 5));
	if (!q && g.fallbackName?.trim() && (q = g.fallbackName.trim()), !q) return null;
	let J = slugifyForWorkspaceName(q);
	return J ? {
		displayName: q,
		seedName: J
	} : null;
}
function getLinearIssueWorkspaceName(g) {
	let G = slugifyForWorkspaceName(g.identifier), K = getLinkedWorkItemSuggestedName(g);
	if (!G) return K;
	let q = K;
	return K === G ? q = "" : K.startsWith(`${G}-`) && (q = K.slice(G.length + 1)), slugifyForWorkspaceName([G, q].filter(Boolean).join("-"));
}
const JIRA_ISSUE_KEY_PATTERN = /^[A-Za-z][A-Za-z0-9_]*-\d+$/;
function parseJiraIssueUrl(g) {
	let G;
	try {
		G = new URL(g.trim());
	} catch {
		return null;
	}
	if (G.protocol !== "http:" && G.protocol !== "https:" || G.username.length > 0 || G.password.length > 0) return null;
	let K = G.pathname.match(/^(.*)\/browse\/([^/]+)$/);
	return !K || !JIRA_ISSUE_KEY_PATTERN.test(K[2]) ? null : {
		issueKey: K[2].toUpperCase(),
		origin: G.origin.toLowerCase(),
		sitePath: normalizeSitePath(K[1])
	};
}
function getMatchingJiraSites(g, G) {
	return G.filter((G) => {
		let K = getJiraSiteIdentity(G.siteUrl);
		return K !== null && K.origin === g.origin && K.sitePath === g.sitePath;
	});
}
function isResolvedJiraIssueMatch(g, G, K) {
	let q = parseJiraIssueUrl(K.url);
	return K.key.toUpperCase() === g.issueKey && K.siteId === G.id && q !== null && q.issueKey === g.issueKey && getMatchingJiraSites(q, [G]).length === 1;
}
function getJiraSiteIdentity(g) {
	let G;
	try {
		G = new URL(g.trim());
	} catch {
		return null;
	}
	return G.protocol !== "http:" && G.protocol !== "https:" || G.username.length > 0 || G.password.length > 0 || G.search.length > 0 || G.hash.length > 0 ? null : {
		origin: G.origin.toLowerCase(),
		sitePath: normalizeSitePath(G.pathname)
	};
}
function normalizeSitePath(g) {
	let G = g.replace(/\/+$/g, "");
	return G === "/" ? "" : G;
}
var LINEAR_ISSUE_URL_RE = /^https?:\/\/(?:www\.)?linear\.app\/[^/\s]+\/issue\/[^/\s]+(?:\/\S*)?$/i, GITHUB_ITEM_URL_IN_TEXT_RE = /https?:\/\/[^\s/]+\/[^\s/]+\/[^\s/]+\/(?:issues|pull)\/\d+[^\s]*/i, TRAILING_URL_PUNCTUATION_RE = /[),.;:!?]+$/;
function hasGitHubLookup(g) {
	if (parseGitHubIssueOrPRNumber(g) !== null || parseGitHubIssueOrPRLink(g) !== null) return !0;
	let G = GITHUB_ITEM_URL_IN_TEXT_RE.exec(g)?.[0];
	return G ? parseGitHubIssueOrPRLink(G.replace(TRAILING_URL_PUNCTUATION_RE, "")) !== null : !1;
}
function isWorkItemLookupText(g) {
	let G = g.trim();
	return G ? hasGitHubLookup(G) || parseGitLabIssueOrMRLink(G) !== null || parseJiraIssueUrl(G) !== null || LINEAR_ISSUE_URL_RE.test(G) : !1;
}
var GITLAB_ISSUE_PATH_RE = /\/-\/(?:issues|work_items)\//i;
function isGitLabIssueUrl(g) {
	try {
		return GITLAB_ISSUE_PATH_RE.test(new URL(g).pathname);
	} catch {
		return GITLAB_ISSUE_PATH_RE.test(g);
	}
}
function isJiraIssueUrl(g) {
	try {
		let G = new URL(g);
		return /\.atlassian\.net$/i.test(G.hostname) || /\/browse\/[A-Z][A-Z0-9]+-\d+/i.test(G.pathname);
	} catch {
		return !1;
	}
}
function getWorkspaceSourceProvider(g) {
	return g.provider ? g.provider : g.linearIdentifier ? "linear" : g.jiraIdentifier || isJiraIssueUrl(g.url) ? "jira" : g.type === "mr" || isGitLabIssueUrl(g.url) ? "gitlab" : g.number === 0 && !g.url.includes("github.com") ? "linear" : "github";
}
function buildGitHubWorkspaceSource(g) {
	return {
		provider: "github",
		...g
	};
}
function buildGitLabWorkspaceSource(g) {
	return {
		provider: "gitlab",
		...g
	};
}
function getUsableLinearBranchName(g) {
	return g?.trim() || void 0;
}
function buildLinearWorkspaceSource(g) {
	let G = getLinearOrganizationUrlKeyFromIssueUrl(g.url), K = getUsableLinearBranchName(g.branchName);
	return {
		provider: "linear",
		type: "issue",
		number: 0,
		title: g.title,
		url: g.url,
		linearIdentifier: g.identifier,
		...g.workspaceId ? { linearWorkspaceId: g.workspaceId } : {},
		...G ? { linearOrganizationUrlKey: G } : {},
		...K ? { linearBranchName: K } : {}
	};
}
function buildJiraWorkspaceSource(g) {
	return {
		provider: "jira",
		type: "issue",
		number: 0,
		title: g.title,
		url: g.url,
		jiraIdentifier: g.key
	};
}
function shouldApplyWorkspaceSourceAutoName(g) {
	return !g.currentName.trim() || g.currentName === g.lastAutoName || isWorkItemLookupText(g.currentName);
}
function toWorkspaceIntentItem(g) {
	return {
		...g,
		provider: getWorkspaceSourceProvider(g)
	};
}
function getWorkspaceSourceName(g) {
	let G = toWorkspaceIntentItem(g), K = getLinkedWorkItemWorkspaceName(G);
	return {
		seedName: K?.seedName ?? getLinkedWorkItemSuggestedName(G),
		displayName: K?.displayName ?? g.title.trim()
	};
}
function buildWorkspaceSourceSelection(g) {
	let { linkedWorkItem: G, baseBranch: K } = g;
	if (!G) return K ? {
		kind: "branch",
		label: K
	} : null;
	let q = getWorkspaceSourceProvider(G);
	return {
		kind: q === "linear" ? "linear" : q === "jira" ? "jira" : q === "gitlab" ? G.type === "mr" ? "gitlab-mr" : "gitlab-issue" : G.type === "pr" ? "github-pr" : "github-issue",
		label: q === "linear" || q === "jira" || G.number === 0 ? G.title : `#${G.number} ${G.title}`,
		url: G.url
	};
}
function shouldPreserveWorkspaceSourceOnRepoChange(g) {
	if (!g) return !1;
	let G = getWorkspaceSourceProvider(g);
	return G === "linear" || G === "jira";
}
const CLIENT_PLATFORM = navigator.userAgent.includes("Windows") ? "win32" : navigator.userAgent.includes("Mac") ? "darwin" : "linux";
function canUseIssueCommandForLinkedItemProvider(g) {
	return g === "github" || g === "gitlab";
}
const DEFAULT_ISSUE_COMMAND_TEMPLATE = "Complete {{artifact_url}}";
function getDefaultTabCommandPreview(g) {
	return (g?.defaultTabs ?? []).map((g, G) => {
		let K = g.command?.trim();
		if (!K) return null;
		let q = g.title ? ` ${g.title}` : "";
		return `# defaultTabs[${G + 1}]${q}\n${K}`;
	}).filter((g) => g !== null).join("\n\n");
}
function getSetupConfigKind(g, G) {
	return g && G ? "setup-and-default-tabs" : G ? "default-tabs" : "setup";
}
function renderIssueCommandTemplate(g, G) {
	let { issueNumber: K, artifactUrl: q } = G, J = g;
	return q !== null && (J = J.replace(/\{\{artifact_url\}\}/g, q)), K !== null && (J = J.replace(/\{\{issue\}\}/g, String(K))), J;
}
function buildAgentPromptWithContext(g, G, K, q = []) {
	let J = g.trim();
	if (G.length === 0 && K.length === 0 && q.length === 0) return J;
	let Y = [];
	if (G.length > 0) {
		let g = G.map((g) => `- ${g}`).join("\n");
		Y.push(`Attachments:\n${g}`);
	}
	if (K.length > 0) {
		let g = K.map((g) => `- ${g}`).join("\n");
		Y.push(`Linked work items:\n${g}`);
	}
	return q.length > 0 && Y.push(q.join("\n\n")), J ? `${J}\n\n${Y.join("\n\n")}` : Y.join("\n\n");
}
function getAttachmentLabel(g) {
	return g.split(/[/\\]/).at(-1) || g;
}
function getSetupConfig(g, G) {
	let K = G?.scripts?.setup?.trim(), q = getDefaultTabCommandPreview(G), J = g?.hookSettings?.scripts?.setup?.trim(), X = resolveHookCommandSourcePolicy(g?.hookSettings?.commandSourcePolicy, { hasLocalScript: !!J });
	if (X === "local-only") return J ? {
		source: "local",
		command: J,
		kind: "setup"
	} : null;
	let Z = [K, q].filter(Boolean).join("\n\n");
	return X === "run-both" && Z && J ? {
		source: "both",
		command: `${Z}\n\n${J}`,
		kind: getSetupConfigKind(!0, !!q)
	} : Z ? {
		source: "yaml",
		command: Z,
		kind: getSetupConfigKind(!!K, !!q)
	} : null;
}
function getWorkspaceSeedName(g) {
	let { explicitName: G, prompt: K, linkedIssueNumber: q, linkedPR: J, fallbackName: Y } = g;
	if (G.trim()) return G.trim();
	if (J !== null) return `pr-${J}`;
	if (q !== null) return `issue-${q}`;
	if (K.trim()) {
		let g = slugifyForWorkspaceName(K);
		if (g) return g;
	}
	return Y && Y.trim() ? Y.trim() : "workspace";
}
async function ensureAgentStartupInTerminal(g) {
	let { worktreeId: G, primaryTabId: K, startup: q } = g, J = q.draftPrompt ?? null;
	if (q.followupPrompt === null && J === null) return;
	let Y = ensureStartupLaunchToken(q), X = null, Z = null;
	for (let g = 0; g < 30; g += 1) {
		g > 0 && await new Promise((g) => globalThis.setTimeout(g, 150));
		let q = useAppStore.getState();
		if (X = resolveAgentStartupTabId(q, G, K), X && (Z = getAgentStartupTabPtyId(q, X, Y), Z)) break;
	}
	if (!X || !Z) {
		X && queuePendingAgentStartupDelivery({
			worktreeId: G,
			tabId: X,
			launchToken: Y,
			startup: q,
			deliver: deliverAgentStartupToTerminal
		});
		return;
	}
	beginAgentStartupDeliveryAttempt({
		worktreeId: G,
		tabId: X,
		launchToken: Y
	}) && await deliverAgentStartupToTerminal(X, Z, q);
}
async function deliverAgentStartupToTerminal(g, G, K) {
	let q = K.draftPrompt ?? null, J = getSettingsForAgentTabRuntimeOwner(g);
	K.followupPrompt && (await sendFollowupPromptWhenAgentReady({
		ptyId: G,
		expectedProcess: K.expectedProcess,
		prompt: K.followupPrompt,
		settings: J
	}) || showAutomationPromptNotSentToast(K.agent)), q && await pasteDraftToAgentPtyWhenReady({
		tabId: g,
		ptyId: G,
		content: q,
		agent: K.agent,
		forcePaste: !0,
		onTimeout: () => showAutomationPromptNotSentToast(K.agent)
	});
}
function ensureStartupLaunchToken(g) {
	return g.launchToken ||= createBrowserUuid(), g.launchToken;
}
const AGENT_SESSION_PROVIDER_HANDLE_PROVIDERS = ["claude", "codex"];
function isAgentSessionHandleProvider(g) {
	return g === "claude" || g === "codex";
}
function agentTabsDefaultToNativeChat(g) {
	return g?.experimentalNativeChat === !0 && g?.openAgentTabsInChatByDefault === !0;
}
function prefersStructuredNativeChatByDefault(g) {
	return agentTabsDefaultToNativeChat(g) && g?.experimentalStructuredNativeChat === !0;
}
function resolveStructuredNativeChatSupport(g) {
	if (g.executionHostId !== "local") return {
		supported: !1,
		blocker: "remote-execution-host"
	};
	if (g.reusesTerminal === !0) return {
		supported: !1,
		blocker: "reused-terminal"
	};
	if (!isAgentSessionHandleProvider(g.agent)) return {
		supported: !1,
		blocker: "agent-without-structured-session"
	};
	if (g.workspaceKind === "floating") return {
		supported: !1,
		blocker: "floating-workspace"
	};
	if (g.requiresTuiLaunchCommand === !0) return {
		supported: !1,
		blocker: "tui-launch-command"
	};
	let G = g.projectRuntime;
	return G?.status === "repair-required" || G?.runtime.kind === "wsl" ? {
		supported: !1,
		blocker: "project-runtime"
	} : g.hostCapabilities === null ? {
		supported: !1,
		blocker: "runtime-capability-unknown"
	} : g.hostCapabilities.includes("agent-session.structured.v1") ? { supported: !0 } : {
		supported: !1,
		blocker: "runtime-capability"
	};
}
function decideInitialAgentTabViewMode(g) {
	if (agentTabsDefaultToNativeChat(g) && isNativeChatSupportedAgent(g.agent) && !(nativeChatRequiresLocalTranscript(g.agent) && g.nativeChatTranscriptIsLocalReadable !== !0) && !(g.promptDelivery === "draft" && !canMirrorLaunchDraftToNativeChat(g.launchDraftText ?? ""))) return "chat";
}
function initialAgentTabViewModeProps(g, G = {}) {
	let K = decideInitialAgentTabViewMode({
		experimentalNativeChat: g?.experimentalNativeChat,
		openAgentTabsInChatByDefault: g?.openAgentTabsInChatByDefault,
		agent: G.agent,
		promptDelivery: G.promptDelivery,
		launchDraftText: G.launchDraftText,
		nativeChatTranscriptIsLocalReadable: G.nativeChatTranscriptIsLocalReadable
	});
	return K ? { viewMode: K } : {};
}
function createNativeChatSessionOptionRecord(g) {
	return {
		agent: g,
		valuesByModel: {}
	};
}
function cloneNativeChatSessionOptionRecord(g) {
	return {
		agent: g.agent,
		...g.model ? { model: { ...g.model } } : {},
		valuesByModel: Object.fromEntries(Object.entries(g.valuesByModel).map(([g, G]) => [g, Object.fromEntries(Object.entries(G).map(([g, G]) => [g, { ...G }]))]))
	};
}
function isFlipOnlyMidSession(g) {
	return g?.kind === "toggle-command";
}
function getTrackedSessionOption(g, G, K) {
	return G ? g.valuesByModel[G]?.[K] : void 0;
}
function clearTrackedSessionOption(g, G, K) {
	if (!G) return;
	let q = g.valuesByModel[G];
	if (!q || !(K in q)) return;
	let J = { ...q };
	delete J[K], Object.keys(J).length === 0 ? delete g.valuesByModel[G] : g.valuesByModel[G] = J;
}
function clearNativeChatSessionModel(g) {
	let G = typeof g.model?.value == "string" ? g.model.value : null;
	g.model = void 0, G && delete g.valuesByModel[G];
}
function setTrackedSessionOption(g, G, K, q, J = null) {
	if (G === "model") return g.model = {
		value: K,
		source: q
	}, typeof K == "string" ? K : null;
	let Y = (typeof g.model?.value == "string" ? g.model.value : null) ?? J;
	return Y ? (g.valuesByModel[Y] = {
		...g.valuesByModel[Y],
		[G]: {
			value: K,
			source: q
		}
	}, Y) : null;
}
function flattenNativeChatSessionOptionRecord(g, G) {
	return {
		model: G,
		...Object.fromEntries(Object.entries(g.valuesByModel[G] ?? {}).map(([g, G]) => [g, G.value]))
	};
}
function applyNativeChatReportedSessionOptions(g, G, K) {
	let q = (g) => K === void 0 || K.includes(g) ? "reported" : "dispatched", J = typeof G.model == "string" ? G.model : null;
	if (!J) return !1;
	let Y = g.model?.value !== J, X = Y || g.model?.source !== q("model");
	g.model = {
		value: J,
		source: q("model")
	};
	let Z = Y ? {} : { ...g.valuesByModel[J] };
	for (let [g, K] of Object.entries(G)) {
		if (g === "model") continue;
		let G = Z[g];
		(G?.value !== K || G.source !== q(g)) && (X = !0), Z[g] = {
			value: K,
			source: q(g)
		};
	}
	return g.valuesByModel[J] = Z, X;
}
function matchNativeChatCatalogModelId(g, G) {
	let K = G.trim().toLowerCase();
	if (!K) return null;
	if (g.models.length === 0) return G.trim();
	let q = g.models.find((g) => g.id.toLowerCase() === K);
	if (q) return q.id;
	let J = g.models.find((g) => g.label.toLowerCase() === K);
	if (J) return J.id;
	let Y = null;
	for (let G of g.models) (Y === null || G.id.length > Y.length) && K.includes(G.id.toLowerCase()) && (Y = G.id);
	return Y;
}
function setBoundedScopeCacheEntry(g, G, K) {
	for (g.delete(G), g.set(G, K); g.size > 128;) {
		let G = g.keys().next().value;
		if (G === void 0) break;
		g.delete(G);
	}
}
var sessionOptionCache = /* @__PURE__ */ new Map();
function readNativeChatSessionOptionCache(g, G) {
	let K = sessionOptionCache.get(g) ?? sessionOptionCache.get(G ?? "");
	return K ? cloneNativeChatSessionOptionRecord(K) : null;
}
function writeNativeChatSessionOptionCache(g, G) {
	setBoundedScopeCacheEntry(sessionOptionCache, g, cloneNativeChatSessionOptionRecord(G));
}
function seedNativeChatAppliedSessionOptions(g, G, K) {
	let q = typeof K?.model == "string" ? K.model : null;
	if (!q) return;
	let J = createNativeChatSessionOptionRecord(G);
	J.model = {
		value: q,
		source: "applied"
	};
	let Y = {};
	for (let [g, G] of Object.entries(K ?? {})) g !== "model" && (Y[g] = {
		value: G,
		source: "applied"
	});
	J.valuesByModel[q] = Y, writeNativeChatSessionOptionCache(g, J);
}
export { showAutomationPromptNotSentToast as $, buildGitLabWorkspaceSource as A, isWorkItemLookupText as B, canUseIssueCommandForLinkedItemProvider as C, getWorkspaceSeedName as D, getSetupConfig as E, getWorkspaceSourceName as F, getLinearIssueWorkspaceName as G, getMatchingJiraSites as H, getWorkspaceSourceProvider as I, getWorkspaceIntentName as J, getLinkedWorkItemSuggestedName as K, isGitLabIssueUrl as L, buildLinearWorkspaceSource as M, buildWorkspaceSourceSelection as N, renderIssueCommandTemplate as O, getUsableLinearBranchName as P, releaseAgentStartupDeliveryAttempt as Q, shouldApplyWorkspaceSourceAutoName as R, buildAgentPromptWithContext as S, getAttachmentLabel as T, isResolvedJiraIssueMatch as U, JIRA_ISSUE_KEY_PATTERN as V, parseJiraIssueUrl as W, escapeRegex as X, slugifyForWorkspaceName as Y, beginAgentStartupDeliveryAttempt as Z, resolveStructuredNativeChatSupport as _, applyNativeChatReportedSessionOptions as a, CLIENT_PLATFORM as b, createNativeChatSessionOptionRecord as c, isFlipOnlyMidSession as d, matchNativeChatCatalogModelId as f, prefersStructuredNativeChatByDefault as g, initialAgentTabViewModeProps as h, setBoundedScopeCacheEntry as i, buildJiraWorkspaceSource as j, buildGitHubWorkspaceSource as k, flattenNativeChatSessionOptionRecord as l, decideInitialAgentTabViewMode as m, seedNativeChatAppliedSessionOptions as n, clearNativeChatSessionModel as o, setTrackedSessionOption as p, getLinkedWorkItemWorkspaceName as q, writeNativeChatSessionOptionCache as r, clearTrackedSessionOption as s, readNativeChatSessionOptionCache as t, getTrackedSessionOption as u, AGENT_SESSION_PROVIDER_HANDLE_PROVIDERS as v, ensureAgentStartupInTerminal as w, DEFAULT_ISSUE_COMMAND_TEMPLATE as x, isAgentSessionHandleProvider as y, shouldPreserveWorkspaceSourceOnRepoChange as z };
