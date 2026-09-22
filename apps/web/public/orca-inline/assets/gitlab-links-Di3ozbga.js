import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
function buildLinearTeamUrl(t) {
	let b = t.organizationUrlKey?.trim(), x = t.teamKey?.trim();
	return !b || !x ? null : `https://linear.app/${encodeURIComponent(b)}/team/${encodeURIComponent(x)}/all`;
}
function buildLinearPersonalApiKeySettingsUrl(t) {
	let b = t?.trim();
	return b ? `https://linear.app/${encodeURIComponent(b)}/settings/account/security` : "https://linear.app/settings/account/security";
}
function buildLinearWorkspaceApiSettingsUrl(t) {
	let b = t?.trim();
	return b ? `https://linear.app/${encodeURIComponent(b)}/settings/api` : "https://linear.app/settings/api";
}
function buildLinearIssueUrl(t) {
	let b = t.identifier?.trim(), x = t.organizationUrlKey?.trim();
	return !b || !x ? null : `https://linear.app/${encodeURIComponent(x)}/issue/${encodeURIComponent(b)}`;
}
function getLinearOrganizationUrlKeyFromIssueUrl(t) {
	if (!t) return null;
	try {
		let b = new URL(t);
		return b.hostname === "linear.app" ? b.pathname.split("/").find(Boolean) ?? null : null;
	} catch {
		return null;
	}
}
var LINEAR_IDENTIFIER_PATTERN = /^[A-Za-z][A-Za-z0-9_]*-\d+$/;
function parseLinearIssueInput(t) {
	let b = t.trim();
	if (!b) return null;
	if (LINEAR_IDENTIFIER_PATTERN.test(b)) return { identifier: b.toUpperCase() };
	try {
		let t = new URL(b);
		if (t.protocol !== "https:" && t.protocol !== "http:" || t.hostname !== "linear.app") return null;
		let x = t.pathname.split("/").filter(Boolean), S = x.indexOf("issue"), C = x[0], w = S === -1 ? void 0 : x[S + 1];
		if (!C || !w) return null;
		let T = decodeURIComponent(w).split(/[/?#]/)[0];
		return LINEAR_IDENTIFIER_PATTERN.test(T) ? {
			identifier: T.toUpperCase(),
			organizationUrlKey: decodeURIComponent(C)
		} : null;
	} catch {
		return null;
	}
}
function parseLinearIssueUrlIntent(t) {
	let b = t.trim();
	try {
		let t = new URL(b), x = /^\/([^/]+)\/issue\/([^/]+)(?:\/[^/]+)?\/?$/.exec(t.pathname);
		if (t.protocol !== "https:" && t.protocol !== "http:" || t.host !== "linear.app" || t.username !== "" || t.password !== "" || !x) return null;
		let S = decodeURIComponent(x[1]), C = decodeURIComponent(x[2]);
		return !/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(S) || !LINEAR_IDENTIFIER_PATTERN.test(C) ? null : {
			identifier: C.toUpperCase(),
			organizationUrlKey: S
		};
	} catch {
		return null;
	}
}
function findLinearIssueWorkspaceId(t, b) {
	let x = t.organizationUrlKey.toLowerCase();
	return b?.find((t) => t.organizationUrlKey?.toLowerCase() === x)?.id ?? null;
}
function findLinearIssueWorkspaceIdFromStatus(t, b) {
	return findLinearIssueWorkspaceId(t, b.workspaces) || (b.viewer?.organizationUrlKey?.toLowerCase() === t.organizationUrlKey.toLowerCase() ? (b.selectedWorkspaceId && b.selectedWorkspaceId !== "all" ? b.selectedWorkspaceId : null) ?? b.activeWorkspaceId ?? null : null);
}
function findLinearIssueWorkspaceLookupIds(t, b) {
	let x = [], S = /* @__PURE__ */ new Set(), C = (t) => {
		!t || t === "all" || S.has(t) || (S.add(t), x.push(t));
	};
	C(findLinearIssueWorkspaceIdFromStatus(t, b));
	for (let t of b.workspaces ?? []) t.organizationUrlKey || C(t.id);
	return !b.viewer?.organizationUrlKey && (b.workspaces?.length ?? 0) === 0 && (C(b.selectedWorkspaceId && b.selectedWorkspaceId !== "all" ? b.selectedWorkspaceId : null), C(b.activeWorkspaceId)), x;
}
function isLinearIssueUrlResolutionMatch(t, b) {
	if (b.identifier.toUpperCase() !== t.identifier.toUpperCase()) return !1;
	let x = getLinearOrganizationUrlKeyFromIssueUrl(b.url);
	return x !== null && x.toLowerCase() === t.organizationUrlKey.toLowerCase();
}
const LINEAR_ISSUE_LINK_CLEARED = {
	linkedLinearIssue: null,
	linkedLinearIssueWorkspaceId: null,
	linkedLinearIssueOrganizationUrlKey: null
};
function buildLinearIssueLinkUpdates(t) {
	if (t.trim() === "") return { ...LINEAR_ISSUE_LINK_CLEARED };
	let b = parseLinearIssueInput(t);
	return b ? {
		linkedLinearIssue: b.identifier,
		linkedLinearIssueWorkspaceId: null,
		linkedLinearIssueOrganizationUrlKey: b.organizationUrlKey ?? null
	} : null;
}
var GH_ITEM_PATH_RE = /^\/([^/]+)\/([^/]+)\/(issues|pull)\/(\d+)(?:\/.*)?$/i;
function buildGitHubRepoUrl(t) {
	return !t?.owner || !t.repo ? null : `https://${t.host ?? "github.com"}/${encodeURIComponent(t.owner)}/${encodeURIComponent(t.repo)}`;
}
function matchGitHubItemPath(t) {
	return GH_ITEM_PATH_RE.exec(t.pathname.replace(/\/+$/, ""));
}
function parseGitHubItemNumber(t) {
	let b = Number.parseInt(t, 10);
	return b > 0 ? b : null;
}
function parseGitHubIssueOrPRNumber(t) {
	let b = t.trim();
	if (!b) return null;
	let x = b.startsWith("#") ? b.slice(1) : b;
	if (/^\d+$/.test(x)) return parseGitHubItemNumber(x);
	let S;
	try {
		S = new URL(b);
	} catch {
		return null;
	}
	if (S.protocol !== "https:" && S.protocol !== "http:") return null;
	let C = matchGitHubItemPath(S);
	return C ? parseGitHubItemNumber(C[4]) : null;
}
function parseGitHubIssueOrPRLink(t) {
	let b = t.trim();
	if (!b) return null;
	let x;
	try {
		x = new URL(b);
	} catch {
		return null;
	}
	if (x.protocol !== "https:" && x.protocol !== "http:") return null;
	let S = matchGitHubItemPath(x);
	if (!S) return null;
	let C = parseGitHubItemNumber(S[4]);
	return C === null ? null : {
		slug: {
			owner: S[1],
			repo: S[2],
			host: x.host
		},
		type: S[3].toLowerCase() === "pull" ? "pr" : "issue",
		number: C
	};
}
function isWorkItemLinkQueryTooLarge(b, x = 2048) {
	return isClipboardTextByteLengthOverLimit(b, x);
}
var HTTP_URL_PREFIX_RE = /^https?:\/\//i;
function normalizeGitHubLinkQuery(t) {
	if (isWorkItemLinkQueryTooLarge(t)) return {
		query: "",
		directNumber: null,
		tooLarge: !0
	};
	let b = t.trim();
	if (!b) return {
		query: "",
		directNumber: null
	};
	let x = parseGitHubIssueOrPRNumber(b);
	if (x !== null && !HTTP_URL_PREFIX_RE.test(b)) return {
		query: b,
		directNumber: x
	};
	let S = parseGitHubIssueOrPRLink(b);
	return S ? {
		query: b,
		directNumber: S.number,
		directLink: S
	} : {
		query: b,
		directNumber: null
	};
}
var GL_ITEM_PATH_FULL_RE = /^\/(.+)\/-\/(issues|work_items|merge_requests)\/(\d+)(?:\/.*)?$/i;
function parseGitLabIssueOrMRLink(t) {
	let b = t.trim();
	if (!b) return null;
	let x;
	try {
		x = new URL(b);
	} catch {
		return null;
	}
	let S = GL_ITEM_PATH_FULL_RE.exec(x.pathname);
	if (!S) return null;
	let C = S[1];
	return C.includes("/") ? {
		slug: {
			host: x.host,
			path: C
		},
		type: S[2].toLowerCase() === "merge_requests" ? "mr" : "issue",
		number: Number.parseInt(S[3], 10)
	} : null;
}
export { parseLinearIssueUrlIntent as _, parseGitHubIssueOrPRLink as a, buildLinearIssueLinkUpdates as c, buildLinearTeamUrl as d, buildLinearWorkspaceApiSettingsUrl as f, parseLinearIssueInput as g, isLinearIssueUrlResolutionMatch as h, buildGitHubRepoUrl as i, buildLinearIssueUrl as l, getLinearOrganizationUrlKeyFromIssueUrl as m, normalizeGitHubLinkQuery as n, parseGitHubIssueOrPRNumber as o, findLinearIssueWorkspaceLookupIds as p, isWorkItemLinkQueryTooLarge as r, LINEAR_ISSUE_LINK_CLEARED as s, parseGitLabIssueOrMRLink as t, buildLinearPersonalApiKeySettingsUrl as u };
