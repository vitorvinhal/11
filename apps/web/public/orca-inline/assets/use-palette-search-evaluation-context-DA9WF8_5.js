import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { t as Globe } from "./globe-BQRxNG57.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { $f as isUnifiedTabOwnedByWorktree, Go as resolveUnifiedTabLabel, JS as LOCAL_EXECUTION_HOST_ID, Kf as findAmbiguousWorktreeIds, Nh as isTerminalLeafId, Ph as makePaneKey, Qf as isOpenFileOwnedByWorktree, Rf as getRuntimeEnvironmentIdForWorktree, Tl as focusTerminalTabSurface, Wo as resolveTerminalTabTitle, Xf as getUnifiedTabPaletteExecutionHostId, Yf as getPaletteOwnershipWorktreeIds, Zf as hasOpenFileExecutionHostEvidence, _u as isOpenCodeNativeTitle, ap as resolvePaletteRepoForWorktree, bb as ORCA_BROWSER_BLANK_URL, bf as agentStatusEvidenceObservedAt, bm as resolveWorktreeDisplayName, cu as resolveExplicitTerminalTitleAgentType, ip as isPaletteCurrentWorktree, ou as isShellProcess, qf as findDuplicateIds, rp as getPaletteWorktreeIdentity, sC as toSshExecutionHostId, sp as isExecutionHostAliasForWorktree, t as useAppStore, ym as resolveWorktreeBranchLabel, yu as isClaudeIdentityFrameTitle } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { l as activateWebRuntimeSessionTab, on as isWebRuntimeSessionActive } from "./web-runtime-session-CeAC5QPx.js";
import { a as resolveCompatibleAgentTypeForOwner, n as resolvePaneAgentOwnerRecord, o as shareCompatibleTitleIdentityGroup } from "./pane-agent-owner-Ci26i0GA.js";
import { a as preparePaletteActivity, c as createPaletteFallbackRank, f as preparePaletteQuery, h as normalizePaletteText, i as maxValidPaletteActivityTimestamp, m as mergeMatchRanges, n as createPaletteSearchContext, o as matchPaletteDocument, p as mapNormalizedRange, r as encodePaletteIdentity, s as buildPaletteDocument, t as comparePaletteEntityRanks } from "./palette-ranking-Bw1n3k1J.js";
import { t as getEditorDisplayLabel } from "./editor-labels-k9sc-LQK.js";
import { c as resolveFocusedTabAgent, d as resolveSiblingTabAgent, l as resolveSiblingCompletedTabAgent, o as resolveFocusedCompletedTabAgent, s as resolveFocusedRetainedTabAgent, u as resolveSiblingRetainedTabAgent } from "./terminal-tab-activity-status-BJlBCOgx.js";
import { t as compareBaseSensitivityLocaleText } from "./locale-text-collators-UNtJqrUZ.js";
import { n as getActivatableBrowserWorkspaceTab, t as activateBrowserWorkspaceTab } from "./browser-workspace-tab-activation-BXci4-Vs.js";
function displayableFaviconUrl(t) {
	let c = t?.trim();
	if (!c) return null;
	if (c.startsWith("data:image/")) return c;
	try {
		let t = new URL(c);
		return t.protocol === "http:" || t.protocol === "https:" ? c : null;
	} catch {
		return null;
	}
}
function pickDisplayableFaviconUrl(t) {
	for (let c of t ?? []) {
		let t = displayableFaviconUrl(c);
		if (t) return t;
	}
	return null;
}
function faviconOrigin(t) {
	if (!t) return null;
	try {
		let c = new URL(t);
		return c.protocol === "http:" || c.protocol === "https:" ? c.origin : null;
	} catch {
		return null;
	}
}
function browserNavigationLeavesFaviconOrigin(t, c) {
	let l = faviconOrigin(c);
	if (l === null) return !0;
	let u = faviconOrigin(t);
	return u === null ? !1 : u !== l;
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function BrowserFavicon({ faviconUrl: t, loading: c = !1, className: u, fallbackClassName: p }) {
	let m = displayableFaviconUrl(t), [h, g] = (0, import_react.useState)(null), [_, v] = (0, import_react.useState)(c);
	return _ !== c && (v(c), c || g(null)), h !== null && h !== m && g(null), c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
		className: cn("shrink-0 motion-safe:animate-spin", u, p),
		"aria-hidden": "true"
	}) : m && h !== m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: m,
		alt: "",
		"aria-hidden": !0,
		draggable: !1,
		decoding: "async",
		loading: "lazy",
		fetchPriority: "low",
		className: cn("shrink-0 rounded-sm object-contain drop-shadow-[0_0_1px_var(--foreground)]", u),
		onError: () => g(m)
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
		className: cn("shrink-0", u, p),
		"aria-hidden": "true"
	});
}
const PALETTE_TAB_WORKTREE_FIELD_ID = "worktree", PALETTE_TAB_BRANCH_FIELD_ID = "branch", PALETTE_TAB_REPO_FIELD_ID = "repo", PALETTE_TAB_SECONDARY_FIELD_PREFIX = "secondary:", PALETTE_TAB_ALIAS_FIELD_PREFIX = "alias:";
function paletteTabSecondaryFieldId(t) {
	return `${PALETTE_TAB_SECONDARY_FIELD_PREFIX}${t}`;
}
function paletteTabAliasFieldId(t) {
	return `${PALETTE_TAB_ALIAS_FIELD_PREFIX}${t}`;
}
function parsePaletteTabIndexedFieldId(t, c) {
	if (!t.startsWith(c)) return null;
	let l = Number.parseInt(t.slice(c.length), 10);
	return Number.isInteger(l) ? l : null;
}
function buildPaletteTabDocument(t) {
	let c = [
		{
			id: "title",
			profile: "structured-label",
			text: t.title,
			role: "primary",
			destinationEligible: !0
		},
		{
			id: PALETTE_TAB_WORKTREE_FIELD_ID,
			profile: "structured-label",
			text: t.worktreeName,
			role: "container",
			destinationEligible: !1
		},
		{
			id: PALETTE_TAB_BRANCH_FIELD_ID,
			profile: "structured-label",
			text: t.branch,
			role: "container",
			destinationEligible: !1
		},
		{
			id: PALETTE_TAB_REPO_FIELD_ID,
			profile: "structured-label",
			text: t.repoName,
			role: "container",
			destinationEligible: !1
		},
		{
			id: "workspace",
			profile: "structured-label",
			text: t.workspaceLabel ?? "",
			role: "container",
			destinationEligible: !1
		}
	];
	for (let [l, u] of t.secondaryTexts.entries()) c.push({
		id: paletteTabSecondaryFieldId(l),
		profile: "path",
		text: u,
		role: "secondary",
		destinationEligible: !0
	});
	for (let [l, u] of (t.typeAliases ?? []).entries()) c.push({
		id: paletteTabAliasFieldId(l),
		profile: "exact-alias",
		text: u,
		role: "alias",
		destinationEligible: !1
	});
	return buildPaletteDocument({
		id: t.id,
		visibleFields: c,
		compositePairs: [{
			leftFieldId: PALETTE_TAB_REPO_FIELD_ID,
			rightFieldId: PALETTE_TAB_BRANCH_FIELD_ID
		}, {
			leftFieldId: PALETTE_TAB_REPO_FIELD_ID,
			rightFieldId: PALETTE_TAB_WORKTREE_FIELD_ID
		}],
		evidence: []
	});
}
var NO_RANGES$3 = [];
function isOmniboxPaletteTabFieldAllowed(t) {
	return t.id !== "worktree" && t.id !== "repo";
}
function indexedMatches(t, c) {
	let l = [];
	for (let [u, d] of t) {
		let t = parsePaletteTabIndexedFieldId(u, c);
		t !== null && l.push({
			index: t,
			ranges: d
		});
	}
	return l.sort((t, c) => t.index - c.index);
}
function matchPaletteTabDocument(t, c, l = {}) {
	let u = matchPaletteDocument({
		document: t,
		tokens: c.tokens,
		normalizedQuery: c.normalized,
		tokenCountBeforeDeduplication: c.tokenCountBeforeDeduplication,
		isFieldAllowed: l.isFieldAllowed
	});
	if (!u) return null;
	let d = u.rangesByField, f = indexedMatches(d, PALETTE_TAB_SECONDARY_FIELD_PREFIX), p = indexedMatches(d, PALETTE_TAB_ALIAS_FIELD_PREFIX);
	return {
		qualityClass: u.qualityClass,
		rank: u.rank,
		titleRanges: d.get("title") ?? NO_RANGES$3,
		worktreeRanges: d.get("worktree") ?? NO_RANGES$3,
		branchRanges: d.get("branch") ?? NO_RANGES$3,
		repoRanges: d.get("repo") ?? NO_RANGES$3,
		workspaceRanges: d.get("workspace") ?? NO_RANGES$3,
		secondaryMatches: f,
		typeAliasMatches: p,
		secondary: f[0] ?? null,
		typeAlias: p[0] ?? null
	};
}
function preparePaletteTabQuery(t) {
	let c = preparePaletteQuery(t);
	return c.state === "ready" ? c : null;
}
function isPaletteTabQueryRejected(t) {
	return preparePaletteQuery(t).state === "invalid";
}
function comparePaletteTabResults(t, c) {
	return comparePaletteEntityRanks({
		rank: t.rank,
		activity: t.activity,
		position: t.positionScore,
		identity: t.identity
	}, {
		rank: c.rank,
		activity: c.activity,
		position: c.positionScore,
		identity: c.identity
	});
}
var NO_RANGES$2 = [];
function isBrowserPaletteQueryTooLarge(t, c = 2048) {
	return isClipboardTextByteLengthOverLimit(t, c);
}
function compareText$2(t, c) {
	return compareBaseSensitivityLocaleText(t, c);
}
function isBlankBrowserUrl(t) {
	return t === "about:blank" || t === "data:text/html,";
}
function formatBrowserPaletteUrl(t) {
	if (isBlankBrowserUrl(t)) return "New Tab";
	try {
		let c = new URL(t);
		return `${c.host}${c.pathname === "/" ? "" : c.pathname}${c.search}${c.hash}`;
	} catch {
		return t;
	}
}
function browserPaletteSecondaryTexts(t) {
	return [formatBrowserPaletteUrl(t.url), t.url];
}
function buildSearchableBrowserPageDocument(t) {
	return buildPaletteTabDocument({
		id: t.page.id,
		title: t.page.title || formatBrowserPaletteUrl(t.page.url),
		secondaryTexts: browserPaletteSecondaryTexts(t.page),
		worktreeName: resolveWorktreeDisplayName(t.worktree),
		branch: resolveWorktreeBranchLabel(t.worktree),
		repoName: t.repoName,
		workspaceLabel: t.workspace.label ?? ""
	});
}
function compareEmptyQueryResults$2(t, c) {
	if (t.isCurrentPage !== c.isCurrentPage) return t.isCurrentPage ? -1 : 1;
	if (t.isCurrentWorktree !== c.isCurrentWorktree) return t.isCurrentWorktree ? -1 : 1;
	if (t.score !== c.score) return t.score - c.score;
	let l = compareText$2(t.secondaryText, c.secondaryText);
	return l === 0 ? compareText$2(t.title, c.title) : l;
}
function positionScore$2(t) {
	return t.isCurrentPage ? t.worktreeSortIndex * 100 - 4e3 : t.worktreeSortIndex * 100 - (t.isCurrentWorktree ? 1e3 : 0);
}
function baseResult$2(t, c) {
	let l = formatBrowserPaletteUrl(t.page.url), u = t.executionHostId ?? t.worktree.hostId, d = preparePaletteActivity(t.lastActiveAt, c);
	return {
		...u ? { executionHostId: u } : {},
		paletteIdentity: encodePaletteIdentity([
			"browser-page",
			u ?? "",
			t.worktree.id,
			t.workspace.id,
			t.page.id
		]),
		pageId: t.page.id,
		workspaceId: t.workspace.id,
		worktreeId: t.worktree.id,
		title: t.page.title || l,
		faviconUrl: t.page.faviconUrl,
		url: t.page.url,
		secondaryText: l,
		secondaryMatches: [],
		workspaceLabel: t.workspace.label ?? null,
		repoName: t.repoName,
		worktreeName: resolveWorktreeDisplayName(t.worktree),
		branchName: resolveWorktreeBranchLabel(t.worktree),
		workspaceRanges: NO_RANGES$2,
		titleRanges: NO_RANGES$2,
		secondaryRanges: NO_RANGES$2,
		repoRanges: NO_RANGES$2,
		worktreeRanges: NO_RANGES$2,
		branchRanges: NO_RANGES$2,
		isCurrentPage: t.isCurrentPage,
		isCurrentWorktree: t.isCurrentWorktree,
		score: positionScore$2(t),
		qualityClass: null,
		rank: null,
		lastActiveAt: d.timestamp || null,
		activity: d
	};
}
function searchBrowserPages(t, c, l = {}) {
	let u = l.context ?? createPaletteSearchContext(Date.now());
	if (isBrowserPaletteQueryTooLarge(c)) return [];
	let d = preparePaletteTabQuery(c);
	if (!d) return c.trim() ? [] : t.map((t) => baseResult$2(t, u)).sort(compareEmptyQueryResults$2);
	let f = [];
	for (let c of t) {
		let t = matchPaletteTabDocument(c.document, d, { isFieldAllowed: l.fieldMode === "omnibox" ? isOmniboxPaletteTabFieldAllowed : void 0 });
		if (!t) continue;
		let p = baseResult$2(c, u), m = browserPaletteSecondaryTexts(c.page);
		f.push({
			...p,
			secondaryText: t.secondary === null ? p.secondaryText : m[t.secondary.index],
			secondaryMatches: t.secondaryMatches.map((t) => ({
				text: m[t.index] ?? "",
				ranges: t.ranges
			})),
			workspaceRanges: t.workspaceRanges,
			titleRanges: t.titleRanges,
			secondaryRanges: t.secondary?.ranges ?? NO_RANGES$2,
			repoRanges: t.repoRanges,
			worktreeRanges: t.worktreeRanges,
			branchRanges: t.branchRanges,
			qualityClass: t.qualityClass,
			rank: t.rank
		});
	}
	return f.sort((t, c) => t.rank && c.rank ? comparePaletteTabResults({
		rank: t.rank,
		positionScore: t.score,
		identity: t.paletteIdentity,
		activity: t.activity
	}, {
		rank: c.rank,
		positionScore: c.score,
		identity: c.paletteIdentity,
		activity: c.activity
	}) : compareEmptyQueryResults$2(t, c));
}
function activateBrowserPagePaletteResult({ executionHostId: t, pageId: c, workspaceId: l, worktreeId: d }) {
	let f = useAppStore.getState(), p = f.getKnownWorktreeById(d, t);
	if (!p) return {
		status: "failed",
		reason: "missing-worktree"
	};
	let m = (f.browserPagesByWorkspace[l] ?? []).find((t) => t.id === c && t.workspaceId === l && t.worktreeId === d), h = (f.browserTabsByWorktree[d] ?? []).find((t) => t.id === l && t.worktreeId === d);
	if (!m || !h) return {
		status: "failed",
		reason: "missing-page"
	};
	let g = isBlankBrowserUrl(m.url) ? "address-bar" : "webview", _ = t ?? p.hostId;
	return getActivatableBrowserWorkspaceTab({
		worktreeId: d,
		workspaceId: l,
		executionHostId: _
	}) ? activateAndRevealWorktree(p.id, _ ? { executionHostId: _ } : {}) ? activateBrowserWorkspaceTab({
		worktreeId: p.id,
		workspaceId: h.id,
		pageId: c,
		..._ ? { executionHostId: _ } : {}
	}) ? {
		status: "activated",
		pageId: c,
		focusTarget: g
	} : {
		status: "failed",
		reason: "missing-tab"
	} : {
		status: "failed",
		reason: "missing-worktree"
	} : {
		status: "failed",
		reason: "missing-tab"
	};
}
function activateSimulatorTabPaletteResult({ executionHostId: t, tabId: c, worktreeId: l }) {
	let d = useAppStore.getState(), f = findAmbiguousWorktreeIds(getPaletteOwnershipWorktreeIds(d));
	if (!t && f.has(l)) return {
		status: "failed",
		reason: "missing-worktree"
	};
	let m = d.getKnownWorktreeById(l, t);
	if (!m) return {
		status: "failed",
		reason: "missing-worktree"
	};
	let h = (d.unifiedTabsByWorktree[l] ?? []).filter((t) => t.id === c), _ = h[0];
	if (h.length !== 1 || _.contentType !== "simulator" || !isUnifiedTabOwnedByWorktree(_, m, f)) return {
		status: "failed",
		reason: "missing-tab"
	};
	let v = t ?? m.hostId;
	if (!activateAndRevealWorktree(m.id, v ? { executionHostId: v } : {})) return {
		status: "failed",
		reason: "missing-worktree"
	};
	let y = useAppStore.getState();
	return y.focusGroup(l, _.groupId), y.activateTab(_.id, { worktreeId: l }), y.setActiveTab(_.id), y.setActiveTabType("simulator"), {
		status: "activated",
		tabId: _.id
	};
}
function validateTarget(t, c) {
	let l = findAmbiguousWorktreeIds(getPaletteOwnershipWorktreeIds(t));
	if (!c.executionHostId && l.has(c.worktreeId)) return "missing-worktree";
	let u = t.getKnownWorktreeById(c.worktreeId, c.executionHostId);
	if (!u) return "missing-worktree";
	if (!(t.groupsByWorktree[c.worktreeId] ?? []).find((t) => t.id === c.groupId)) return "missing-group";
	let d = (t.unifiedTabsByWorktree[c.worktreeId] ?? []).filter((t) => t.id === c.tabId), f = d.find((t) => t.entityId === c.entityId && t.groupId === c.groupId && t.worktreeId === c.worktreeId && t.contentType === c.contentType && isUnifiedTabOwnedByWorktree(t, u, l));
	if (d.length !== 1 || !f) return "missing-tab";
	if (c.contentType !== "terminal") {
		let d = t.openFiles.filter((t) => t.id === c.entityId);
		if (d.length !== 1 || d[0].worktreeId !== c.worktreeId) return "missing-file";
		let f = d[0];
		if ((hasOpenFileExecutionHostEvidence(f) || l.has(u.id)) && !isOpenFileOwnedByWorktree(f, u)) return "missing-file";
	}
	return null;
}
function activateWorkspaceTabPaletteResult(t) {
	let c = useAppStore.getState(), l = validateTarget(c, t);
	if (l) return {
		status: "failed",
		reason: l
	};
	let d = t.executionHostId ?? c.getKnownWorktreeById(t.worktreeId)?.hostId;
	if (!(d ? activateAndRevealWorktree(t.worktreeId, { executionHostId: d }) : activateAndRevealWorktree(t.worktreeId))) return {
		status: "failed",
		reason: "missing-worktree"
	};
	let f = useAppStore.getState(), p = validateTarget(f, t);
	if (p) return {
		status: "failed",
		reason: p
	};
	let m = getRuntimeEnvironmentIdForWorktree(f, t.worktreeId);
	return f.focusGroup(t.worktreeId, t.groupId), f.activateTab(t.tabId, { worktreeId: t.worktreeId }), t.contentType === "terminal" ? (isWebRuntimeSessionActive(m) && activateWebRuntimeSessionTab({
		worktreeId: t.worktreeId,
		tabId: t.entityId,
		environmentId: m
	}), f.setActiveTab(t.entityId), f.setActiveTabType("terminal"), focusTerminalTabSurface(t.entityId), { status: "activated" }) : (f.setActiveFile(t.entityId), f.activateTab(t.tabId, { worktreeId: t.worktreeId }), f.setActiveTabType("editor"), { status: "activated" });
}
const PALETTE_SECTION_RENDER_CAP = 50, PALETTE_SECTION_EXPAND_STEP = 20, TYPED_QUERY_LEADING_PREVIEW = 6;
function capPaletteSection(t, c = 50, l) {
	if (!Number.isFinite(c) || c < 0 || t.length <= c) return {
		visible: t,
		overflowCount: 0
	};
	let u = t.slice(0, c), d;
	if (l) {
		for (let u = c; u < t.length; u += 1) if (l(t[u])) {
			d = t[u];
			break;
		}
	}
	return d !== void 0 && c > 0 && u.splice(c - 1, 1, d), {
		visible: u,
		overflowCount: t.length - u.length
	};
}
function softSplitPaletteSection(t, c, l = 50, u) {
	let d = capPaletteSection(t, l, u), f = Math.max(0, Math.min(c, d.visible.length));
	return {
		preview: d.visible.slice(0, f),
		rest: d.visible.slice(f),
		moreCount: Math.max(0, t.length - f)
	};
}
function layoutMultiPrimaryPaletteSections({ leadingItems: t, trailingItems: c, leadingPreviewCount: l = 6, trailingFloorCount: u = 3, hardCap: d, leadingHardCap: f = d ?? 50, trailingHardCap: p = d ?? 50, leadingRetain: m, trailingRetain: h }) {
	let g = softSplitPaletteSection(t, l, f, m), _ = softSplitPaletteSection(c, u, p, h);
	return {
		leadingPreview: g.preview,
		leadingRest: g.rest,
		leadingMoreCount: g.moreCount,
		leadingHardOverflowCount: Math.max(0, g.moreCount - g.rest.length),
		trailingFloor: _.preview,
		trailingRest: _.rest,
		trailingMoreCount: _.moreCount,
		trailingHardOverflowCount: Math.max(0, _.moreCount - _.rest.length)
	};
}
function getActiveSimulatorTabId({ worktreeId: t, worktreeHostId: c, worktreeRuntimeOwnerEnvironmentId: l, activeWorktreeId: u, activeWorkspaceExecutionHostId: d, activeTabType: f, activeGroupId: p, groups: m }) {
	return !isPaletteCurrentWorktree({
		id: t,
		hostId: c,
		runtimeOwnerEnvironmentId: l
	}, u, d) || f !== "simulator" ? null : p ? m?.find((t) => t.id === p)?.activeTabId ?? null : null;
}
var NO_RANGES$1 = [];
const SIMULATOR_TYPE_SEARCH_ALIASES = [
	"mobile emulator tab",
	"mobile emulator",
	"ios simulator",
	"emulator"
];
function isSimulatorPaletteQueryTooLarge(t, c = 2048) {
	return isClipboardTextByteLengthOverLimit(t, c);
}
function compareText$1(t, c) {
	return compareBaseSensitivityLocaleText(t, c);
}
function compareEmptyQueryResults$1(t, c) {
	if (t.isCurrentTab !== c.isCurrentTab) return t.isCurrentTab ? -1 : 1;
	if (t.isCurrentWorktree !== c.isCurrentWorktree) return t.isCurrentWorktree ? -1 : 1;
	if (t.score !== c.score) return t.score - c.score;
	let l = compareText$1(t.worktreeName, c.worktreeName);
	return l === 0 ? compareText$1(t.title, c.title) : l;
}
function positionScore$1(t) {
	return t.isCurrentTab ? t.worktreeSortIndex * 100 - 4e3 : t.worktreeSortIndex * 100 - (t.isCurrentWorktree ? 1e3 : 0);
}
function simulatorPaletteTabTitle(t) {
	return t.label || "Mobile Emulator";
}
function baseResult$1(t, c) {
	let l = getUnifiedTabPaletteExecutionHostId(t.tab, t.worktree), u = preparePaletteActivity(maxValidPaletteActivityTimestamp([t.tab.lastFocusedAt, t.tab.createdAt]), c);
	return {
		...l ? { executionHostId: l } : {},
		paletteIdentity: encodePaletteIdentity([
			"simulator-tab",
			l ?? "",
			t.worktree.id,
			t.tab.id
		]),
		tabId: t.tab.id,
		worktreeId: t.worktree.id,
		groupId: t.tab.groupId,
		title: simulatorPaletteTabTitle(t.tab),
		secondaryText: "",
		secondaryMatches: [],
		repoName: t.repoName,
		worktreeName: resolveWorktreeDisplayName(t.worktree),
		branchName: resolveWorktreeBranchLabel(t.worktree),
		titleRanges: NO_RANGES$1,
		secondaryRanges: NO_RANGES$1,
		repoRanges: NO_RANGES$1,
		worktreeRanges: NO_RANGES$1,
		branchRanges: NO_RANGES$1,
		typeAliasMatches: [],
		isCurrentTab: t.isCurrentTab,
		isCurrentWorktree: t.isCurrentWorktree,
		score: positionScore$1(t),
		qualityClass: null,
		rank: null,
		lastActiveAt: u.timestamp || null,
		activity: u
	};
}
function buildSearchableSimulatorTabs({ worktrees: t, ownershipWorktrees: c, repoMap: l, repoMapByHostIdentity: u, worktreeOrder: d, unifiedTabsByWorktree: f, activeGroupIdByWorktree: m, groupsByWorktree: h, activeWorktreeId: _, activeWorkspaceExecutionHostId: v, activeTabType: y }) {
	let b = [], x = findAmbiguousWorktreeIds(c ?? t);
	for (let c of t) {
		let t = resolvePaletteRepoForWorktree(c, l, u)?.displayName ?? "", g = d.get(getPaletteWorktreeIdentity(c)) ?? d.get(c.id) ?? 2 ** 53 - 1, S = getActiveSimulatorTabId({
			worktreeId: c.id,
			worktreeHostId: c.hostId,
			worktreeRuntimeOwnerEnvironmentId: c.runtimeOwnerEnvironmentId,
			activeWorktreeId: _,
			activeWorkspaceExecutionHostId: v,
			activeTabType: y,
			activeGroupId: m[c.id],
			groups: h[c.id]
		}), C = f[c.id] ?? [], w = findDuplicateIds(C);
		for (let l of C) w.has(l.id) || l.contentType !== "simulator" || !isUnifiedTabOwnedByWorktree(l, c, x) || b.push({
			tab: l,
			worktree: c,
			repoName: t,
			worktreeSortIndex: g,
			isCurrentTab: S === l.id,
			isCurrentWorktree: isPaletteCurrentWorktree(c, _, v),
			document: buildPaletteTabDocument({
				id: l.id,
				title: simulatorPaletteTabTitle(l),
				secondaryTexts: [],
				worktreeName: resolveWorktreeDisplayName(c),
				branch: resolveWorktreeBranchLabel(c),
				repoName: t,
				typeAliases: SIMULATOR_TYPE_SEARCH_ALIASES
			})
		});
	}
	return b;
}
function searchSimulatorTabs(t, c, l = {}) {
	let u = l.context ?? createPaletteSearchContext(Date.now());
	if (isSimulatorPaletteQueryTooLarge(c)) return [];
	let d = preparePaletteTabQuery(c);
	if (!d) return c.trim() ? [] : t.map((t) => baseResult$1(t, u)).sort(compareEmptyQueryResults$1);
	let f = [];
	for (let c of t) {
		let t = matchPaletteTabDocument(c.document, d, { isFieldAllowed: l.fieldMode === "omnibox" ? isOmniboxPaletteTabFieldAllowed : void 0 });
		if (!t) continue;
		let p = t.typeAlias === null ? void 0 : SIMULATOR_TYPE_SEARCH_ALIASES[t.typeAlias.index];
		f.push({
			...baseResult$1(c, u),
			titleRanges: t.titleRanges,
			repoRanges: t.repoRanges,
			worktreeRanges: t.worktreeRanges,
			branchRanges: t.branchRanges,
			typeAliasMatch: p ? {
				text: p,
				ranges: t.typeAlias?.ranges ?? NO_RANGES$1
			} : null,
			typeAliasMatches: t.typeAliasMatches.map((t) => ({
				text: SIMULATOR_TYPE_SEARCH_ALIASES[t.index] ?? "",
				ranges: t.ranges
			})),
			qualityClass: t.qualityClass,
			rank: t.rank
		});
	}
	return f.sort((t, c) => t.rank && c.rank ? comparePaletteTabResults({
		rank: t.rank,
		positionScore: t.score,
		identity: t.paletteIdentity,
		activity: t.activity
	}, {
		rank: c.rank,
		positionScore: c.score,
		identity: c.paletteIdentity,
		activity: c.activity
	}) : compareEmptyQueryResults$1(t, c));
}
function titleShowsNoAgent(t, c) {
	let l = t.trim();
	return l.length > 0 && (isShellProcess(l) || l === c?.trim());
}
function resolveSignalAgentForLaunchOwner(t, c, l = !1) {
	return t ? resolveCompatibleAgentTypeForOwner(t, c, { ownerIsLaunch: l }) ?? t : null;
}
function resolveLaunchedAgentExitEvidence(t) {
	return t.hookAgent || t.siblingHookAgent || t.processAgent ? !1 : !t.isRemote && t.processShellForeground && t.hasObservedAgentSignal ? !0 : titleShowsNoAgent(t.title, t.defaultTitle) ? t.hasCompletedHook || !t.isRemote && t.hasObservedAgentSignal : !1;
}
function resolveTabAgentFromSignals(t) {
	let c = t.launchAgent ?? null, l = resolvePaneAgentOwnerRecord({
		launchAgent: c,
		hookAgent: t.hookAgent,
		completedHookAgent: t.focusedCompletedHookAgent,
		sleepingSessionAgent: t.sleepingSessionAgent
	}), u = l?.agent ?? null, d = l?.ownerIsLaunch === !0, f = resolveSignalAgentForLaunchOwner(t.hookAgent, u, d), p = resolveSignalAgentForLaunchOwner(t.siblingHookAgent, c, !!c), m = !t.isRemote && t.processShellForeground === !0, h = (t.focusedCompletedHookAgent ?? null) !== null, g = titleShowsNoAgent(t.title, t.defaultTitle), _ = !t.isRemote && (g || m) && h ? null : resolveSignalAgentForLaunchOwner(t.focusedCompletedHookAgent, u, d), v = resolveSignalAgentForLaunchOwner(t.siblingCompletedHookAgent, c, !!c), y = t.sleepingSessionAgent ?? null, b = resolveExplicitTerminalTitleAgentType(t.title), x = resolveSignalAgentForLaunchOwner(b, u, d), S = _ ?? c, C = x === "opencode" && isOpenCodeNativeTitle(t.title), w = x !== "claude" || isClaudeIdentityFrameTitle(t.title), T = S !== null && x !== null && x !== S && !shareCompatibleTitleIdentityGroup(b, S) && w && (t.hasObservedAgentSignal || h || C), D = m || y || C && _ !== null ? null : T ? x : S ? null : x, O = resolveLaunchedAgentExitEvidence({
		title: t.title,
		defaultTitle: t.defaultTitle,
		isRemote: t.isRemote,
		hasObservedAgentSignal: t.hasObservedAgentSignal,
		hookAgent: f,
		siblingHookAgent: p,
		hasCompletedHook: h,
		processAgent: t.processAgent,
		processShellForeground: t.processShellForeground
	}) ? null : c, k = resolveSignalAgentForLaunchOwner(t.processAgent, u, d);
	return f ?? k ?? D ?? _ ?? y ?? O ?? p ?? v;
}
function resolveOpenTabOccupantAgent({ tabId: t, title: c, defaultTitle: l, launchAgent: u, layout: d, agentStatusByPaneKey: f, retainedAgentsByPaneKey: p, sleepingAgentSessionsByPaneKey: m, paneForegroundAgentByPaneKey: h }) {
	let g = resolveFocusedTabAgent(f, d, t), _ = resolveSiblingTabAgent(f, d, t), v = resolveFocusedCompletedTabAgent(f, d, t) ?? resolveFocusedRetainedTabAgent(p, d, t), y = resolveSiblingCompletedTabAgent(f, d, t) ?? resolveSiblingRetainedTabAgent(p, d, t), b = focusedPaneKeyFor(t, d), x = b ? h?.[b] : void 0, S = x?.agent ?? null, C = b ? m[b]?.agent ?? null : null, w = c?.trim() || "", T = resolveExplicitTerminalTitleAgentType(w);
	return resolveTabAgentFromSignals({
		hasObservedAgentSignal: !!(g || v || S || (u ? T === u : T || _)),
		isRemote: !0,
		title: w,
		defaultTitle: l,
		hookAgent: g,
		siblingHookAgent: _,
		focusedCompletedHookAgent: v,
		siblingCompletedHookAgent: y,
		processAgent: S,
		processShellForeground: !!x?.shellForeground,
		sleepingSessionAgent: C,
		launchAgent: u
	});
}
function focusedPaneKeyFor(t, c) {
	let l = c?.activeLeafId;
	return l && isTerminalLeafId(l) ? makePaneKey(t, l) : null;
}
function maxAgentActivityAt(t) {
	let c = null;
	for (let l of t) Number.isFinite(l.lastActivityAt) && l.lastActivityAt > 0 && (c === null || l.lastActivityAt > c) && (c = l.lastActivityAt);
	return c;
}
function normalizeText(t) {
	return t?.trim() ?? "";
}
function addText(t, c) {
	let l = normalizeText(c);
	l && t.push(l);
}
function addProviderSession(t, c) {
	c && (addText(t, c.key), addText(t, c.id));
}
function getPaneKeyTabId(t) {
	let c = t.indexOf(":");
	return c <= 0 || c !== t.lastIndexOf(":") ? null : t.slice(0, c);
}
function collectLiveMetadata(t) {
	let c = [], l = [];
	addText(c, t.orchestration?.displayName), addText(l, t.orchestration?.displayName), addText(c, t.orchestration?.taskTitle), addText(l, t.orchestration?.taskTitle), addText(c, t.prompt), addText(l, t.prompt), addText(c, t.agentType), addText(c, t.state), addText(c, t.terminalTitle), addText(l, t.terminalTitle), addProviderSession(c, t.providerSession);
	for (let u of t.stateHistory) addText(c, u.prompt), addText(l, u.prompt);
	return {
		textParts: c,
		snippetCandidates: l,
		lastActivityAt: agentStatusEvidenceObservedAt(t)
	};
}
function collectSleepingMetadata(t) {
	let c = [], l = [];
	return addText(c, t.prompt), addText(l, t.prompt), addText(c, t.agent), addText(c, t.state), addText(c, t.terminalTitle), addText(l, t.terminalTitle), addProviderSession(c, t.providerSession), {
		textParts: c,
		snippetCandidates: l,
		lastActivityAt: t.updatedAt
	};
}
function pushToIndex(t, c, l) {
	let u = t.get(c);
	u || (u = [], t.set(c, u)), u.push(l);
}
function buildAgentMetadataTabIndex(t) {
	let c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
	for (let [u, d] of Object.entries(t.agentStatusByPaneKey)) {
		let t = d.tabId || getPaneKeyTabId(u);
		t && (l.add(u), pushToIndex(c, t, {
			paneKey: u,
			worktreeId: d.worktreeId,
			connectionId: d.connectionId,
			metadata: {
				paneKey: u,
				...collectLiveMetadata(d)
			}
		}));
	}
	for (let [u, d] of Object.entries(t.retainedAgentsByPaneKey)) {
		if (l.has(u)) continue;
		let t = d.entry.tabId ?? d.tab.id ?? getPaneKeyTabId(u);
		if (!t) continue;
		l.add(u);
		let f = collectLiveMetadata(d.entry);
		addText(f.textParts, d.tab.title), addText(f.snippetCandidates, d.tab.title), pushToIndex(c, t, {
			paneKey: u,
			worktreeId: d.worktreeId,
			connectionId: d.entry.connectionId,
			metadata: {
				paneKey: u,
				...f
			}
		});
	}
	for (let [u, d] of Object.entries(t.sleepingAgentSessionsByPaneKey)) {
		if (l.has(u)) continue;
		let t = d.tabId || getPaneKeyTabId(u);
		t && pushToIndex(c, t, {
			paneKey: u,
			worktreeId: d.worktreeId,
			connectionId: d.connectionId,
			metadata: {
				paneKey: u,
				...collectSleepingMetadata(d)
			}
		});
	}
	return c;
}
function collectAgentMetadataFromIndex(t, c, l, u) {
	let d = t.get(c);
	return d ? d.filter((t) => t.worktreeId && t.worktreeId !== l.id ? !1 : t.connectionId ? isExecutionHostAliasForWorktree(toSshExecutionHostId(t.connectionId), l) : t.connectionId === void 0 && u.has(l.id) ? !1 : !u.has(l.id) || isExecutionHostAliasForWorktree("local", l)).map((t) => t.metadata) : [];
}
function isWorkspaceTabContentType(t) {
	return [
		"terminal",
		"editor",
		"diff",
		"conflict-review",
		"check-details"
	].includes(t);
}
function getActiveUnifiedTabId({ worktreeId: t, isCurrentWorktree: c, activeTabType: l, activeGroupIdByWorktree: u, groupsByWorktree: d }) {
	if (!c) return null;
	let f = u[t], p = (f ? (d[t] ?? []).find((t) => t.id === f) : void 0)?.activeTabId ?? null;
	return l === "terminal" || l === "editor" ? p : null;
}
function isCurrentWorkspaceTab({ tab: t, isCurrentWorktree: c, activeTabType: l, activeTabId: u, activeTabIdByWorktree: d, activeFileId: f, activeFileIdByWorktree: p, activeTabTypeByWorktree: m, activeUnifiedTabId: h }) {
	if (!c) return !1;
	if (h) return h === t.id;
	let g = t.contentType === "terminal" ? "terminal" : "editor";
	return (m[t.worktreeId] ?? l) === g ? g === "terminal" ? (d[t.worktreeId] ?? u) === t.entityId : (p[t.worktreeId] ?? f) === t.entityId : !1;
}
function buildSearchableWorkspaceTabEntries({ worktrees: t, ownershipWorktrees: c, repoMap: l, repoMapByHostIdentity: u, worktreeOrder: d, unifiedTabsByWorktree: f, tabsByWorktree: h, openFiles: _, agentStatusByPaneKey: v, retainedAgentsByPaneKey: b, sleepingAgentSessionsByPaneKey: x, activeGroupIdByWorktree: w, groupsByWorktree: E, activeWorktreeId: O, activeWorkspaceExecutionHostId: k, activeTabType: j, activeTabId: M, activeTabIdByWorktree: N, activeFileId: P, activeFileIdByWorktree: F, activeTabTypeByWorktree: I, generatedTitlesEnabled: L, terminalLayoutsByTabId: R, paneForegroundAgentByPaneKey: z }) {
	let B = [], V = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Map();
	for (let t of _) {
		let c = H.get(t.id);
		c ? c.push(t) : H.set(t.id, [t]);
	}
	let U = buildAgentMetadataTabIndex({
		agentStatusByPaneKey: v,
		retainedAgentsByPaneKey: b,
		sleepingAgentSessionsByPaneKey: x
	}), W = findAmbiguousWorktreeIds(c ?? t);
	for (let c of t) {
		let t = resolvePaletteRepoForWorktree(c, l, u)?.displayName ?? "", g = resolveWorktreeDisplayName(c), _ = resolveWorktreeBranchLabel(c), G = d.get(getPaletteWorktreeIdentity(c)) ?? d.get(c.id) ?? 2 ** 53 - 1, K = isPaletteCurrentWorktree(c, O, k), q = getActiveUnifiedTabId({
			worktreeId: c.id,
			isCurrentWorktree: K,
			activeTabType: j,
			activeGroupIdByWorktree: w,
			groupsByWorktree: E
		}), J = E[c.id] ?? [], Y = new Map(J.map((t, c) => [t.id, c])), X = /* @__PURE__ */ new Map();
		for (let t of J) t.tabOrder.forEach((t, c) => X.set(t, c));
		let Z = /* @__PURE__ */ new Map();
		for (let t of h[c.id] ?? []) Z.set(t.id, Z.has(t.id) ? null : t);
		let Q = f[c.id] ?? [], $ = findDuplicateIds(Q);
		for (let l of Q) {
			if ($.has(l.id) || !isWorkspaceTabContentType(l.contentType) || !isUnifiedTabOwnedByWorktree(l, c, W)) continue;
			let u = l, d = JSON.stringify([getUnifiedTabPaletteExecutionHostId(u, c) ?? null, u.id]);
			if (V.has(d)) continue;
			let f = {
				tab: u,
				worktree: c,
				repoName: t,
				worktreeSortIndex: G,
				groupSortIndex: Y.get(u.groupId) ?? 2 ** 53 - 1,
				tabSortIndex: X.get(u.id) ?? u.sortOrder,
				isCurrentTab: isCurrentWorkspaceTab({
					tab: u,
					isCurrentWorktree: K,
					activeTabType: j,
					activeTabId: M,
					activeTabIdByWorktree: N,
					activeFileId: P,
					activeFileIdByWorktree: F,
					activeTabTypeByWorktree: I,
					activeUnifiedTabId: q
				}),
				isCurrentWorktree: K
			};
			if (u.contentType === "terminal") {
				let l = Z.get(u.entityId);
				if (l === null) continue;
				let p = l ? resolveTerminalTabTitle(l, L, "Terminal") : "Terminal", h = resolveUnifiedTabLabel({
					...u,
					customLabel: u.customLabel ?? l?.customTitle ?? null,
					quickCommandLabel: u.quickCommandLabel ?? l?.quickCommandLabel,
					generatedLabel: u.generatedLabel ?? l?.generatedTitle
				}, L, p);
				V.add(d), B.push({
					...f,
					title: h,
					secondaryText: "",
					titleSearchText: h,
					secondarySearchTexts: [],
					typeSearchAliases: ["terminal tab", "terminal"],
					document: buildPaletteTabDocument({
						id: u.id,
						title: h,
						secondaryTexts: [],
						worktreeName: g,
						branch: _,
						repoName: t,
						typeAliases: ["terminal tab", "terminal"]
					}),
					agentMetadata: collectAgentMetadataFromIndex(U, u.entityId, c, W),
					occupantAgent: resolveOpenTabOccupantAgent({
						tabId: u.entityId,
						title: h,
						defaultTitle: l?.defaultTitle,
						launchAgent: l?.launchAgent,
						layout: R?.[u.entityId],
						agentStatusByPaneKey: v,
						retainedAgentsByPaneKey: b,
						sleepingAgentSessionsByPaneKey: x,
						paneForegroundAgentByPaneKey: z
					})
				});
				continue;
			}
			let h = H.get(u.entityId);
			if (h?.length !== 1) continue;
			let w = h.find((t) => t.worktreeId === c.id && (!(hasOpenFileExecutionHostEvidence(t) || W.has(c.id)) || isOpenFileOwnedByWorktree(t, c)));
			if (!w) continue;
			let E = getEditorDisplayLabel(w);
			V.add(d), B.push({
				...f,
				title: E,
				secondaryText: w.relativePath,
				titleSearchText: E,
				secondarySearchTexts: [w.relativePath, w.filePath],
				document: buildPaletteTabDocument({
					id: u.id,
					title: E,
					secondaryTexts: [w.relativePath, w.filePath],
					worktreeName: g,
					branch: _,
					repoName: t
				}),
				agentMetadata: [],
				occupantAgent: null
			});
		}
	}
	return B;
}
var AGENT_SNIPPET_RANK = createPaletteFallbackRank();
function coverAllTokens(t, c) {
	let l = t.toLowerCase(), u = l.length === t.length ? null : normalizePaletteText(t), d = u ? u.normalized : l, f = [];
	for (let t of c) {
		if (t.isPunctuationOnly) return null;
		let c = d.indexOf(t.text);
		if (c === -1) return null;
		let l = c + t.text.length;
		f.push(u ? mapNormalizedRange(u, c, l) : {
			start: c,
			end: l
		});
	}
	return mergeMatchRanges(f);
}
function matchWorkspaceTabAgentSnippet(t, c) {
	for (let l of ["snippetCandidates", "textParts"]) for (let u of t) for (let t of u[l]) {
		let l = coverAllTokens(t, c.tokens);
		if (l) return {
			text: t,
			ranges: l,
			rank: AGENT_SNIPPET_RANK
		};
	}
	return null;
}
var NO_RANGES = [];
function compareText(t, c) {
	return compareBaseSensitivityLocaleText(t, c);
}
function compareEmptyQueryResults(t, c) {
	if (t.isCurrentTab !== c.isCurrentTab) return t.isCurrentTab ? -1 : 1;
	if (t.isCurrentWorktree !== c.isCurrentWorktree) return t.isCurrentWorktree ? -1 : 1;
	if (t.score !== c.score) return t.score - c.score;
	let l = compareText(t.worktreeName, c.worktreeName);
	return l === 0 ? compareText(t.title, c.title) : l;
}
function positionScore(t) {
	let c = t.worktreeSortIndex * 100 + t.groupSortIndex * 10 + t.tabSortIndex;
	return t.isCurrentTab ? c - 4e3 : t.isCurrentWorktree ? c - 1e3 : c;
}
function resolveWorkspaceTabLastActiveAt(t) {
	return maxValidPaletteActivityTimestamp([
		maxAgentActivityAt(t.agentMetadata),
		t.tab.lastFocusedAt,
		t.tab.createdAt
	]);
}
function baseResult(t, c) {
	let l = getUnifiedTabPaletteExecutionHostId(t.tab, t.worktree), u = preparePaletteActivity(resolveWorkspaceTabLastActiveAt(t), c);
	return {
		...l ? { executionHostId: l } : {},
		paletteIdentity: encodePaletteIdentity([
			"workspace-tab",
			l ?? "",
			t.worktree.id,
			t.tab.id
		]),
		tabId: t.tab.id,
		entityId: t.tab.entityId,
		worktreeId: t.worktree.id,
		groupId: t.tab.groupId,
		contentType: t.tab.contentType,
		occupantAgent: t.occupantAgent,
		title: t.title,
		secondaryText: t.secondaryText,
		secondaryMatches: [],
		repoName: t.repoName,
		worktreeName: resolveWorktreeDisplayName(t.worktree),
		branchName: resolveWorktreeBranchLabel(t.worktree),
		titleRanges: NO_RANGES,
		secondaryRanges: NO_RANGES,
		repoRanges: NO_RANGES,
		worktreeRanges: NO_RANGES,
		branchRanges: NO_RANGES,
		typeAliasMatches: [],
		isCurrentTab: t.isCurrentTab,
		isCurrentWorktree: t.isCurrentWorktree,
		score: positionScore(t),
		qualityClass: null,
		rank: null,
		lastActiveAt: u.timestamp || null,
		activity: u
	};
}
function matchEntry(t, c, l, u) {
	let d = matchPaletteTabDocument(t.document, c);
	if (!d) {
		let u = matchWorkspaceTabAgentSnippet(t.agentMetadata, c);
		return u ? {
			...baseResult(t, l),
			secondaryText: u.text,
			secondaryRanges: u.ranges,
			qualityClass: "fuzzy-evidence",
			rank: u.rank
		} : null;
	}
	let f = u !== "omnibox" || d.worktreeRanges.length === 0 && d.repoRanges.length === 0 ? d : matchPaletteTabDocument(t.document, c, { isFieldAllowed: isOmniboxPaletteTabFieldAllowed });
	if (!f) return null;
	let p = f.secondary === null ? t.secondaryText : t.secondarySearchTexts[f.secondary.index] ?? t.secondaryText, m = f.typeAlias === null ? void 0 : (t.typeSearchAliases ?? [])[f.typeAlias.index];
	return {
		...baseResult(t, l),
		secondaryText: p,
		secondaryMatches: f.secondaryMatches.map((c) => ({
			text: t.secondarySearchTexts[c.index] ?? "",
			ranges: c.ranges
		})),
		titleRanges: f.titleRanges,
		secondaryRanges: f.secondary?.ranges ?? NO_RANGES,
		repoRanges: f.repoRanges,
		worktreeRanges: f.worktreeRanges,
		branchRanges: f.branchRanges,
		typeAliasMatch: m ? {
			text: m,
			ranges: f.typeAlias?.ranges ?? NO_RANGES
		} : null,
		typeAliasMatches: f.typeAliasMatches.map((c) => ({
			text: (t.typeSearchAliases ?? [])[c.index] ?? "",
			ranges: c.ranges
		})),
		qualityClass: f.qualityClass,
		rank: f.rank
	};
}
function searchWorkspaceTabs(t, c, l = {}) {
	let u = l.context ?? createPaletteSearchContext(Date.now());
	if (isPaletteTabQueryRejected(c)) return [];
	let d = preparePaletteTabQuery(c);
	if (!d) return t.map((t) => baseResult(t, u)).sort(compareEmptyQueryResults);
	let f = [];
	for (let c of t) {
		let t = matchEntry(c, d, u, l.fieldMode ?? "all");
		t && f.push(t);
	}
	return f.sort((t, c) => t.rank && c.rank ? comparePaletteTabResults({
		rank: t.rank,
		positionScore: t.score,
		identity: t.paletteIdentity,
		activity: t.activity
	}, {
		rank: c.rank,
		positionScore: c.score,
		identity: c.paletteIdentity,
		activity: c.activity
	}) : compareEmptyQueryResults(t, c));
}
const buildSearchableWorkspaceTabs = buildSearchableWorkspaceTabEntries;
function buildSearchableBrowserPages({ worktrees: t, ownershipWorktrees: c, repoMap: l, repoMapByHostIdentity: u, worktreeOrder: d, browserTabsByWorktree: f, browserPagesByWorkspace: m, unifiedTabsByWorktree: h, activeBrowserTabId: _, activeWorktreeId: v, activeWorkspaceExecutionHostId: y, activeTabType: b }) {
	let x = [], S = findAmbiguousWorktreeIds(c ?? t), w = Object.values(h ?? {}).flatMap((t) => t ?? []), T = findDuplicateIds(w), E = findDuplicateIds(w.filter((t) => t.contentType === "browser").map((t) => ({ id: t.entityId }))), O = findDuplicateIds(Object.values(f).flatMap((t) => t ?? []));
	for (let c of t) {
		let t = resolvePaletteRepoForWorktree(c, l, u)?.displayName ?? "", g = d.get(getPaletteWorktreeIdentity(c)) ?? d.get(c.id) ?? 2 ** 53 - 1, w = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), A = h?.[c.id] ?? [];
		for (let t of A) t.contentType === "browser" && !w.has(t.entityId) && w.set(t.entityId, t), t.contentType === "browser" && isUnifiedTabOwnedByWorktree(t, c, S) && t.lastFocusedAt && k.set(t.entityId, t.lastFocusedAt);
		for (let l of f[c.id] ?? []) {
			if (E.has(l.id) || O.has(l.id)) continue;
			let u = w.get(l.id), d = u && isUnifiedTabOwnedByWorktree(u, c, S) ? u : void 0;
			if (!d && (u || S.has(c.id)) || d && T.has(d.id)) continue;
			let f = k.get(l.id), h = m[l.id] ?? [], D = findDuplicateIds(h);
			for (let u of h) D.has(u.id) || u.workspaceId !== l.id || u.worktreeId !== c.id || x.push({
				page: u,
				workspace: l,
				worktree: c,
				repoName: t,
				worktreeSortIndex: g,
				executionHostId: getUnifiedTabPaletteExecutionHostId(d, c),
				isCurrentPage: isPaletteCurrentWorktree(c, v, y) && b === "browser" && l.id === _ && l.activePageId === u.id,
				isCurrentWorktree: isPaletteCurrentWorktree(c, v, y),
				lastFocusedAt: l.activePageId === u.id ? f : void 0,
				lastActiveAt: l.activePageId === u.id && f ? maxValidPaletteActivityTimestamp([f, u.createdAt]) : maxValidPaletteActivityTimestamp([u.createdAt]),
				document: buildSearchableBrowserPageDocument({
					page: u,
					workspace: l,
					worktree: c,
					repoName: t
				})
			});
		}
	}
	return x;
}
function usePaletteSearchEvaluationContext(t) {
	return (0, import_react.useMemo)(() => createPaletteSearchContext(Date.now()), [t]);
}
export { BrowserFavicon as _, buildSearchableSimulatorTabs as a, PALETTE_SECTION_RENDER_CAP as c, layoutMultiPrimaryPaletteSections as d, activateWorkspaceTabPaletteResult as f, searchBrowserPages as g, formatBrowserPaletteUrl as h, searchWorkspaceTabs as i, TYPED_QUERY_LEADING_PREVIEW as l, activateBrowserPagePaletteResult as m, buildSearchableBrowserPages as n, searchSimulatorTabs as o, activateSimulatorTabPaletteResult as p, buildSearchableWorkspaceTabs as r, PALETTE_SECTION_EXPAND_STEP as s, usePaletteSearchEvaluationContext as t, capPaletteSection as u, browserNavigationLeavesFaviconOrigin as v, pickDisplayableFaviconUrl as y };
