import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as Github } from "./github-C84XZpwh.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { Gg as findIndexedWorktreeOwner, iC as parseExecutionHostId, qr as issueCacheKey, t as useAppStore, tg as folderWorkspaceToWorktree, vv as parseWorkspaceKey } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { c as DropdownMenuRadioItem, m as DropdownMenuTrigger, r as DropdownMenuContent, s as DropdownMenuRadioGroup, t as DropdownMenu } from "./dropdown-menu-DRu_J4_e.js";
import { t as Label } from "./label-CA70r2No.js";
import "./popover-DHL-338i.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { a as parseGitHubIssueOrPRLink, c as buildLinearIssueLinkUpdates, g as parseLinearIssueInput, l as buildLinearIssueUrl, o as parseGitHubIssueOrPRNumber, r as isWorkItemLinkQueryTooLarge, s as LINEAR_ISSUE_LINK_CLEARED, t as parseGitLabIssueOrMRLink } from "./gitlab-links-Di3ozbga.js";
import { n as getScreenSubmitShortcutLabel, r as isScreenSubmitShortcut } from "./screen-submit-shortcut-BSY6icvU.js";
import "./command-QScw0gM9.js";
import "./ime-composition-keyboard-event-yHkhp82P.js";
import { o as WorkspaceEmojiSuggestionPopover, t as useWorkspaceEmojiShortcodeInput } from "./useWorkspaceEmojiShortcodeInput-CqmOEcrU.js";
import { t as LinearIcon } from "./LinearIcon-BZznKVMM.js";
import "./github-links-MieAwyOG.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
const ISSUE_LINK_PROVIDERS = ["github", "linear"];
function isIssueLinkProvider(e) {
	return ISSUE_LINK_PROVIDERS.includes(e);
}
function getIssueLinkProviderFromUrl(e) {
	let t = e.trim();
	return /^https?:\/\//i.test(t) ? parseGitHubIssueOrPRLink(t)?.type === "issue" ? "github" : parseLinearIssueInput(t) ? "linear" : null : null;
}
function parseIssueLinkInput(e, t) {
	let n = e.trim();
	if (!n) return null;
	if (t === "linear") {
		let e = parseLinearIssueInput(n);
		return e ? {
			provider: "linear",
			...e
		} : null;
	}
	let r = parseGitHubIssueOrPRLink(n);
	if (r) return r.type === "issue" ? {
		provider: "github",
		number: r.number
	} : null;
	let i = n.startsWith("#") ? n.slice(1) : n;
	if (!/^\d+$/.test(i)) return null;
	let a = Number.parseInt(i, 10);
	return Number.isSafeInteger(a) && a > 0 ? {
		provider: "github",
		number: a
	} : null;
}
function parseExplicitGitHubIssueUrl(e) {
	let t = e.trim(), n = parseGitHubIssueOrPRLink(t);
	return !n || n.type !== "issue" ? null : t;
}
function parseGitHubWorkItemNumberForMetaField(e, t) {
	let n = parseGitHubIssueOrPRLink(e);
	return n ? n.type === t ? n.number : null : parseGitHubIssueOrPRNumber(e);
}
function parseGitLabMergeRequestNumberForMetaField(e) {
	let t = e.trim(), n = t.startsWith("!") ? t.slice(1) : t;
	if (/^\d+$/.test(n)) {
		let e = Number(n);
		return Number.isSafeInteger(e) && e > 0 ? e : null;
	}
	let r;
	try {
		r = new URL(t);
	} catch {
		return null;
	}
	if (r.protocol !== "http:" && r.protocol !== "https:") return null;
	let i = parseGitLabIssueOrMRLink(t);
	return i?.type === "mr" && Number.isSafeInteger(i.number) && i.number > 0 ? i.number : null;
}
function buildDisplayNameUpdate(e, t) {
	let n = e.displayNameInput.trim();
	return n === t.displayName ? {} : { displayName: n };
}
function buildCommentUpdate(e, t) {
	let n = e.commentInput.trim();
	return n === t.comment ? {} : { comment: n };
}
function issueLinkIdentity(e, t, n) {
	let r = e.trim();
	if (r === "") return "";
	let i = parseIssueLinkInput(r, t);
	if (!i) return `raw:${t}:${r}`;
	if (i.provider === "github") return `github:${i.number}`;
	let a = i.organizationUrlKey ?? n ?? "";
	return `linear:${i.identifier}:${a.trim().toLowerCase()}`;
}
function isIssueFieldDirty(e, t) {
	let n = t.linkedLinearIssueOrganizationUrlKey ?? null;
	return issueLinkIdentity(e.issueInput, e.issueProvider, n) !== issueLinkIdentity(t.issueInput, t.issueProvider, n);
}
function keepsLinkedWorkItem(e, t, n) {
	let r = parseIssueLinkInput(e.trim(), t);
	if (!r || n.linkedWorkItemType !== "issue") return !1;
	if (r.provider === "github") return n.linkedWorkItemProvider === "github" && r.number === n.linkedIssue;
	if (n.linkedWorkItemProvider !== "linear" || r.identifier.toUpperCase() !== n.linkedLinearIssue?.trim().toUpperCase()) return !1;
	let i = n.linkedLinearIssueOrganizationUrlKey?.trim(), a = r.organizationUrlKey?.trim();
	return !i || !a || i.toLowerCase() === a.toLowerCase();
}
function buildIssueLinkUpdates(e, t, n) {
	if (!isIssueFieldDirty(e, t)) return {};
	let r = e.issueInput.trim(), i = !keepsLinkedWorkItem(r, e.issueProvider, n) && (n.linkedWorkItemProvider === "github" || n.linkedWorkItemProvider === "linear") && n.linkedWorkItemType === "issue" ? {
		linkedWorkItem: null,
		linkedTaskSourceContext: null
	} : {}, a = n.linkedLinearIssue ? LINEAR_ISSUE_LINK_CLEARED : {};
	if (r === "") return {
		linkedIssue: null,
		...a,
		...i
	};
	let o = parseIssueLinkInput(r, e.issueProvider);
	if (!o) return {};
	if (o.provider === "github") return {
		linkedIssue: o.number,
		...a,
		...i
	};
	let s = buildLinearIssueLinkUpdates(r);
	return s ? {
		linkedIssue: null,
		...s,
		...i
	} : {};
}
function buildReviewLinkUpdate(e, t, n, r) {
	let i = e.reviewInput.trim();
	if (r === "github" && i === t.prInput.trim()) return {};
	if (i === "") return r === "gitlab" ? { linkedGitLabMR: null } : {
		linkedPR: null,
		...typeof n.linkedPR == "number" ? { suppressedGitHubPR: n.linkedPR } : {}
	};
	let a = r === "gitlab" ? parseGitLabMergeRequestNumberForMetaField(i) : parseGitHubWorkItemNumberForMetaField(i, "pr");
	return a === null ? {} : r === "gitlab" ? { linkedGitLabMR: a } : { linkedPR: a };
}
function buildWorktreeMetaUpdates(e, t, n, r = "github") {
	return {
		...buildCommentUpdate(e, t),
		...buildDisplayNameUpdate(e, t),
		...buildIssueLinkUpdates(e, t, n),
		...buildReviewLinkUpdate(e, t, n, r)
	};
}
function formatLinkLabel(e, t) {
	return e === "linear" ? translate("auto.components.sidebar.worktreeIssueDisplacement.3f61c0a8d2", "Linear {{value}}", { value: t }) : translate("auto.components.sidebar.worktreeIssueDisplacement.9c4b7e1f60", "GitHub #{{value}}", { value: t });
}
function getDisplacedLinkLabels(e) {
	let { draft: t, snapshot: n, isFolderWorkspace: r, linkedIssue: i, linkedLinearIssue: a } = e;
	if (r || !isIssueFieldDirty(t, n)) return null;
	let o = t.issueInput.trim() === "" ? null : t.issueProvider, s = [];
	return o !== "linear" && a && s.push(formatLinkLabel("linear", a)), o !== "github" && typeof i == "number" && s.push(formatLinkLabel("github", String(i))), s.length > 0 ? s : null;
}
var OPEN_ISSUE_TIMEOUT_MS = 35e3;
async function resolveIssueUrlWithinTimeout(e) {
	let t;
	try {
		return (await Promise.race([e, new Promise((e) => {
			t = setTimeout(() => e(null), OPEN_ISSUE_TIMEOUT_MS);
		})]))?.url ?? null;
	} catch {
		return null;
	} finally {
		clearTimeout(t);
	}
}
function useWorktreeIssueLink(e) {
	let { worktreeId: t, ownerRepoId: n, issueInput: r, issueProvider: i, linearOrganizationUrlKey: o, linkedLinearIssue: s, linearSourceContext: c } = e, l = i === "linear", d = useAppStore((e) => e.fetchIssue), p = useAppStore((e) => e.fetchLinearIssue), [m, h] = (0, import_react.useState)(!1), [g, _] = (0, import_react.useState)(null), v = useMountedRef(), y = (0, import_react.useRef)(0), b = (0, import_react.useRef)("");
	b.current = `${i}\u0000${r}`;
	let x = (0, import_react.useMemo)(() => isWorkItemLinkQueryTooLarge(r) ? "" : r, [r]), S = (0, import_react.useMemo)(() => l ? null : parseGitHubIssueOrPRNumber(x), [l, x]), C = (0, import_react.useMemo)(() => l ? null : parseExplicitGitHubIssueUrl(x), [l, x]), w = (0, import_react.useMemo)(() => /^https?:\/\//i.test(x.trim()), [x]), T = (0, import_react.useMemo)(() => l ? parseLinearIssueInput(x) : null, [l, x]), E = (0, import_react.useMemo)(() => {
		if (!T) return null;
		let e = typeof s == "string" && s.toUpperCase() === T.identifier.toUpperCase();
		return buildLinearIssueUrl({
			identifier: T.identifier,
			organizationUrlKey: T.organizationUrlKey ?? (e ? o : null)
		});
	}, [
		T,
		s,
		o
	]), D = useAppStore((e) => {
		let r = n ?? findIndexedWorktreeOwner(e.worktreesByRepo, t)?.repoId;
		return r ? e.repos.find((e) => e.id === r) : void 0;
	}), O = useAppStore((e) => !D || S === null ? null : e.issueCache[issueCacheKey(D.path, D.id, S, e.settings, D.connectionId, D.executionHostId, !0)]?.data?.url ?? null), k = l ? !!T : w ? !!C : !!(O || D && S), A = (0, import_react.useCallback)(async () => {
		if (m) return;
		_(null);
		let e = ++y.current, t = b.current, n = () => v.current && y.current === e && b.current === t;
		if (l) {
			if (!T) return;
			if (E) {
				window.api.shell.openUrl(E);
				return;
			}
			h(!0);
			try {
				let e = await resolveIssueUrlWithinTimeout(p(T.identifier, "all", { sourceContext: c ?? null }));
				if (!n()) return;
				e ? window.api.shell.openUrl(e) : _(r);
			} finally {
				v.current && h(!1);
			}
			return;
		}
		if (C) {
			window.api.shell.openUrl(C);
			return;
		}
		if (!w) {
			if (O) {
				window.api.shell.openUrl(O);
				return;
			}
			if (!(!D || S === null)) {
				h(!0);
				try {
					let e = await resolveIssueUrlWithinTimeout(d(D.path, S, { repoId: D.id }));
					if (!n()) return;
					e ? window.api.shell.openUrl(e) : _(r);
				} finally {
					v.current && h(!1);
				}
			}
		}
	}, [
		O,
		d,
		p,
		l,
		r,
		w,
		S,
		D,
		C,
		E,
		c,
		v,
		m,
		T
	]), j = (0, import_react.useCallback)(() => {
		y.current += 1, h(!1), _(null);
	}, []);
	return {
		canOpenIssue: k,
		openingIssue: m,
		openIssueFailed: g !== null && g === r,
		handleOpenIssue: A,
		resetOpeningIssue: j
	};
}
function useWorktreeMetaWorkspace(e) {
	let { worktreeId: t, ownerRepoId: n, executionHostId: r } = e, i = (0, import_react.useMemo)(() => parseWorkspaceKey(t), [t]), a = useAppStore((e) => {
		let i = n ? e.worktreesByRepo[n]?.find((e) => e.id === t && (!r || e.hostId === r)) : void 0;
		if (i) return i;
		let a = findIndexedWorktreeOwner(e.worktreesByRepo, t);
		return a ? e.worktreesByRepo[a.repoId]?.find((e) => e.id === t) : void 0;
	}), o = useAppStore((e) => i?.type === "folder" ? e.folderWorkspaces.find((e) => e.id === i.folderWorkspaceId) ?? null : null), s = (0, import_react.useMemo)(() => o ? folderWorkspaceToWorktree(o) : a, [o, a]), c = s?.linkedIssue ?? null, l = s?.linkedLinearIssue ?? null, d = typeof c == "number" ? "github" : l ? "linear" : "github", f = d === "linear" ? l ?? "" : typeof c == "number" ? String(c) : "", h = (0, import_react.useMemo)(() => ({
		linkedPR: s?.linkedPR ?? null,
		linkedIssue: c,
		linkedLinearIssue: l,
		linkedLinearIssueOrganizationUrlKey: s?.linkedLinearIssueOrganizationUrlKey ?? null,
		linkedWorkItemProvider: s?.linkedWorkItem?.provider ?? null,
		linkedWorkItemType: s?.linkedWorkItem?.type ?? null
	}), [
		c,
		l,
		s?.linkedPR,
		s?.linkedLinearIssueOrganizationUrlKey,
		s?.linkedWorkItem
	]);
	return {
		worktree: s,
		linkedIssue: c,
		linkedLinearIssue: l,
		currentIssue: f,
		currentProvider: d,
		isFolderWorkspace: i?.type === "folder",
		liveLinks: h
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), ADORNMENT_RESERVE_PX = 70, MAX_RESERVE = "55%";
function issueAdornmentReserve(e) {
	return `min(calc(${ADORNMENT_RESERVE_PX}px + ${e.length}ch), ${MAX_RESERVE})`;
}
function providerLabel(e) {
	return e === "linear" ? translate("auto.components.sidebar.WorktreeIssueLinkField.25852bfc59", "Linear") : translate("auto.components.sidebar.WorktreeIssueLinkField.5b440069e6", "GitHub");
}
function ProviderIcon({ provider: e, className: t }) {
	return e === "linear" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinearIcon, { className: t }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: t });
}
function WorktreeIssueLinkField(e) {
	let { inputRef: t, value: a, provider: c, isInvalid: u, displacedLinkLabels: d, isReadOnly: f, canOpenIssue: ve, openingIssue: p, openIssueFailed: m, onValueChange: h, onProviderChange: x, onOpenIssue: E, onKeyDown: D } = e, O = (0, import_react.useId)(), k = (0, import_react.useId)(), A = providerLabel(c), j = translate("auto.components.sidebar.WorktreeIssueLinkField.161b2d053a", "Open linked issue"), M = (0, import_react.useCallback)((e) => {
		isIssueLinkProvider(e) && x(e);
	}, [x]), ye = (0, import_react.useMemo)(() => f ? translate("auto.components.sidebar.WorktreeIssueLinkField.d4785f9954", "Issue links are set when a folder workspace is created and can't be changed here yet.") : u ? c === "linear" ? translate("auto.components.sidebar.WorktreeIssueLinkField.964d9bc00a", "Not a Linear issue key or linear.app issue URL.") : translate("auto.components.sidebar.WorktreeIssueLinkField.0a7a2c6efd", "Not a GitHub issue number or issue URL.") : m ? c === "linear" ? translate("auto.components.sidebar.WorktreeIssueLinkField.d8c8a30d1f", "Couldn't open that issue. Check the identifier and your Linear connection.") : translate("auto.components.sidebar.WorktreeIssueLinkField.269198eeda", "Couldn't open that issue. Check the number and your GitHub connection.") : d && d.length > 1 ? translate("auto.components.sidebar.WorktreeIssueLinkField.72486800ff", "Saving unlinks {{first}} and {{second}} — a workspace tracks one issue.", {
		first: d[0],
		second: d[1]
	}) : d?.length ? translate("auto.components.sidebar.WorktreeIssueLinkField.2c245ac134", "Saving unlinks {{link}} — a workspace tracks one issue.", { link: d[0] }) : translate("auto.components.sidebar.WorktreeIssueLinkField.f047887705", "Paste a GitHub or Linear URL, or enter a number. Leave blank to remove the link."), [
		d,
		u,
		f,
		m,
		c
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: k,
				className: "text-[11px] font-medium text-muted-foreground",
				children: translate("auto.components.sidebar.WorktreeIssueLinkField.ad78f9bee2", "Issue")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					ref: t,
					id: k,
					"aria-describedby": O,
					value: a,
					onChange: (e) => h(e.target.value),
					onKeyDown: D,
					disabled: f,
					"aria-invalid": u || void 0,
					placeholder: translate("auto.components.sidebar.WorktreeIssueLinkField.662ae142f8", "Issue #, or a GitHub or Linear URL"),
					className: "h-8 text-xs",
					style: { paddingRight: issueAdornmentReserve(A) }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-1 top-1 flex items-center gap-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
						modal: !1,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: !0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "xs",
								disabled: f,
								"aria-label": translate("auto.components.sidebar.WorktreeIssueLinkField.929c98d05a", "Issue provider"),
								className: "h-6 px-1 text-[10px] font-medium text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderIcon, {
										provider: c,
										className: "size-3"
									}),
									A,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-2.5 opacity-60" })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
							align: "end",
							className: "min-w-32",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioGroup, {
								value: c,
								onValueChange: M,
								children: ISSUE_LINK_PROVIDERS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuRadioItem, {
									value: e,
									className: "text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProviderIcon, {
										provider: e,
										className: "size-3"
									}), providerLabel(e)]
								}, e))
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-xs",
							"aria-label": j,
							disabled: !ve || p,
							onClick: E,
							className: "text-muted-foreground",
							children: p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 4,
						children: j
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: O,
				role: "status",
				"aria-live": "polite",
				className: cn("min-h-[28px] text-[10px] leading-[14px]", (m || d?.length) && !u && !f ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground"),
				children: ye
			})
		]
	});
}
function WorktreeDisplayNameField({ disabled: e, inputRef: t, onEnter: r, onValueChange: i, portalContainer: a, value: o }) {
	let s = (0, import_react.useId)(), c = useWorkspaceEmojiShortcodeInput({
		disabled: e,
		inputRef: t,
		onValueChange: i,
		value: o
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: s,
				className: "text-[11px] font-medium text-muted-foreground",
				children: translate("auto.components.sidebar.WorktreeMetaDialog.ad5e4e514f", "Display Name")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: s,
				ref: t,
				value: o,
				onChange: (e) => c.handleValueChange(e.target.value, e.target.selectionStart),
				onSelect: (e) => c.syncCursor(e.currentTarget),
				onKeyDown: (e) => {
					c.handleKeyDown(e) || e.key !== "Enter" || (e.preventDefault(), r());
				},
				placeholder: translate("auto.components.sidebar.WorktreeMetaDialog.7f21e0464f", "Custom display name..."),
				className: "h-8 text-xs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceEmojiSuggestionPopover, {
				anchorRef: t,
				open: c.open,
				commandValue: c.commandValue,
				heading: translate("auto.components.new.workspace.SmartWorkspaceNameField.emoji", "Emoji"),
				suggestions: c.suggestions,
				onCommandValueChange: c.onCommandValueChange,
				onSelect: c.selectSuggestion,
				onOpenChange: (e) => !e && c.close(),
				portalContainer: a,
				side: "bottom"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] text-muted-foreground",
				children: translate("auto.components.sidebar.WorktreeMetaDialog.459ad7f650", "Only changes the name shown in the sidebar — the folder on disk stays the same. Leave blank to use the branch or folder name.")
			})
		]
	});
}
function WorktreeReviewLinkField({ inputRef: e, onKeyDown: t, onValueChange: r, provider: i, value: a }) {
	let o = i === "gitlab";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-[11px] font-medium text-muted-foreground",
				children: o ? translate("auto.components.sidebar.WorktreeMetaDialog.gitlabMR", "GitLab MR") : translate("auto.components.sidebar.WorktreeMetaDialog.1b91db7e14", "GH PR")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				ref: e,
				value: a,
				onChange: (e) => r(e.target.value),
				onKeyDown: t,
				placeholder: o ? translate("auto.components.sidebar.WorktreeMetaDialog.gitlabPlaceholder", "MR ! or GitLab URL") : translate("auto.components.sidebar.WorktreeMetaDialog.077a4f7b5c", "PR # or GitHub URL"),
				className: "h-8 text-xs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] text-muted-foreground",
				children: o ? translate("auto.components.sidebar.WorktreeMetaDialog.gitlabHelp", "Paste a merge request URL, or enter a number. Leave blank to remove the link.") : translate("auto.components.sidebar.WorktreeMetaDialog.5ae06f40fd", "Paste a pull request URL, or enter a number. Leave blank to remove the link.")
			})
		]
	});
}
function resizeCommentTextarea(e) {
	e.style.height = "auto", e.style.height = `${e.scrollHeight}px`;
}
var EMPTY_SNAPSHOT = {
	displayName: "",
	comment: "",
	issueInput: "",
	issueProvider: "github",
	prInput: ""
}, WorktreeMetaDialog_default = import_react.memo(function() {
	let e = useAppStore((e) => e.activeModal), t = useAppStore((e) => e.modalData), i = useAppStore((e) => e.closeModal), o = useAppStore((e) => e.updateWorktreeMeta), s = getScreenSubmitShortcutLabel(), c = e === "edit-meta", l = c, u = typeof t.worktreeId == "string" ? t.worktreeId : "", f = typeof t.executionHostId == "string" ? parseExecutionHostId(t.executionHostId)?.id ?? void 0 : void 0, p = typeof t.currentDisplayName == "string" ? t.currentDisplayName : "", m = typeof t.currentComment == "string" ? t.currentComment : "", h = typeof t.focus == "string" ? t.focus : "comment", g = t.reviewProvider === "gitlab" ? "gitlab" : "github", _ = t.suppressHostedReviewRefresh === !0, v = typeof t.afterSave == "function" ? t.afterSave : null, y = typeof t.repoId == "string" ? t.repoId : null, { worktree: b, linkedIssue: x, linkedLinearIssue: S, currentIssue: C, currentProvider: w, isFolderWorkspace: T, liveLinks: M } = useWorktreeMetaWorkspace({
		worktreeId: u,
		ownerRepoId: y,
		executionHostId: f
	}), ye = typeof t.currentReview == "number" ? String(t.currentReview) : g === "gitlab" ? b?.linkedGitLabMR == null ? "" : String(b.linkedGitLabMR) : typeof t.currentPR == "number" ? String(t.currentPR) : b?.linkedPR == null ? "" : String(b.linkedPR), [N, be] = (0, import_react.useState)(""), [P, F] = (0, import_react.useState)(""), [I, L] = (0, import_react.useState)("github"), [R, z] = (0, import_react.useState)(""), [B, V] = (0, import_react.useState)(""), [H, U] = (0, import_react.useState)(!1), [W, G] = (0, import_react.useState)(null), [K, xe] = (0, import_react.useState)(EMPTY_SNAPSHOT), [Se, Ce] = (0, import_react.useState)(null), { canOpenIssue: we, openingIssue: Te, openIssueFailed: Ee, handleOpenIssue: De, resetOpeningIssue: Oe } = useWorktreeIssueLink({
		worktreeId: u,
		ownerRepoId: y,
		issueInput: P,
		issueProvider: I,
		linearOrganizationUrlKey: b?.linkedLinearIssueOrganizationUrlKey ?? null,
		linkedLinearIssue: b?.linkedLinearIssue ?? null,
		linearSourceContext: b?.linkedTaskSourceContext ?? null
	}), q = (0, import_react.useRef)(null), ke = (0, import_react.useRef)(null), Ae = (0, import_react.useRef)(null), je = (0, import_react.useRef)(!1), Me = (0, import_react.useRef)(null), J = useMountedRef();
	l && !je.current && (be(p), F(C), L(w), z(ye), V(m), xe({
		displayName: p,
		comment: m,
		issueInput: C,
		issueProvider: w,
		prInput: b?.linkedPR == null ? "" : String(b.linkedPR),
		linkedLinearIssueOrganizationUrlKey: b?.linkedLinearIssueOrganizationUrlKey ?? null
	}), G(null), Oe()), je.current = l;
	let Y = (0, import_react.useMemo)(() => ({
		displayNameInput: N,
		issueInput: P,
		issueProvider: I,
		reviewInput: R,
		commentInput: B
	}), [
		N,
		P,
		I,
		R,
		B
	]), Ne = (0, import_react.useCallback)((e) => {
		F(e);
		let t = isWorkItemLinkQueryTooLarge(e) ? null : getIssueLinkProviderFromUrl(e);
		t && L(t);
	}, []), Pe = (0, import_react.useCallback)((e) => {
		Ae.current = e, e && c && resizeCommentTextarea(e);
	}, [c]), Fe = (0, import_react.useCallback)((e) => {
		V(e.target.value), resizeCommentTextarea(e.currentTarget);
	}, []), X = (0, import_react.useMemo)(() => {
		let e = P.trim();
		return e === "" || T ? !1 : isWorkItemLinkQueryTooLarge(e) || parseIssueLinkInput(e, I) === null;
	}, [
		T,
		P,
		I
	]), Z = (0, import_react.useMemo)(() => {
		if (!u) return !1;
		let e = R.trim(), t = e === "" || !isWorkItemLinkQueryTooLarge(e) && (g === "gitlab" ? parseGitLabMergeRequestNumberForMetaField(e) : parseGitHubWorkItemNumberForMetaField(e, "pr")) !== null;
		return !X && t;
	}, [
		u,
		X,
		R,
		g
	]), Ie = (0, import_react.useMemo)(() => getDisplacedLinkLabels({
		draft: Y,
		snapshot: K,
		isFolderWorkspace: T,
		linkedIssue: x,
		linkedLinearIssue: S
	}), [
		Y,
		K,
		T,
		x,
		S
	]), Le = (0, import_react.useCallback)((e) => {
		e || i();
	}, [i]), Q = (0, import_react.useCallback)(async () => {
		if (Z) {
			U(!0), G(null);
			try {
				let e = buildWorktreeMetaUpdates(Y, K, M, g), t = f || _ ? await o(u, e, {
					...f ? { executionHostId: f } : {},
					..._ ? { suppressHostedReviewRefresh: !0 } : {}
				}) : await o(u, e);
				if (!t.ok) {
					J.current && G(t.error);
					return;
				}
				i();
				try {
					Promise.resolve(v?.({
						worktreeId: u,
						updates: e
					})).catch(console.error);
				} catch (e) {
					console.error(e);
				}
			} finally {
				J.current && U(!1);
			}
		}
	}, [
		u,
		f,
		_,
		Z,
		Y,
		K,
		M,
		g,
		o,
		i,
		v,
		J
	]), Re = (0, import_react.useCallback)((e) => {
		(e.key === "Enter" && !e.shiftKey && !e.altKey && !e.metaKey && !e.ctrlKey || isScreenSubmitShortcut(e)) && (e.preventDefault(), e.stopPropagation(), Q());
	}, [Q]), $ = (0, import_react.useCallback)((e) => {
		e.key === "Enter" && (e.preventDefault(), Q());
	}, [Q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: l,
		onOpenChange: Le,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			ref: Ce,
			className: "max-w-md",
			onOpenAutoFocus: (e) => {
				e.preventDefault(), h === "displayName" ? Me.current?.focus() : h === "issue" ? q.current?.focus() : h === "pr" ? ke.current?.focus() : Ae.current?.focus();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm",
					children: translate("auto.components.sidebar.WorktreeMetaDialog.382fd11a3e", "Edit Worktree Details")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-xs",
					children: g === "gitlab" ? translate("auto.components.sidebar.WorktreeMetaDialog.gitlabDescription", "Edit issue links, merge request links, and notes for this workspace.") : translate("auto.components.sidebar.WorktreeMetaDialog.a0d191b7a7", "Edit issue links, pull request links, and notes for this workspace.")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeDisplayNameField, {
							disabled: H,
							inputRef: Me,
							onEnter: Q,
							onValueChange: be,
							portalContainer: Se,
							value: N
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeIssueLinkField, {
							inputRef: q,
							value: P,
							provider: I,
							isInvalid: X,
							displacedLinkLabels: Ie,
							isReadOnly: T,
							canOpenIssue: we,
							openingIssue: Te,
							openIssueFailed: Ee,
							onValueChange: Ne,
							onProviderChange: L,
							onOpenIssue: De,
							onKeyDown: $
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeReviewLinkField, {
							inputRef: ke,
							onKeyDown: $,
							onValueChange: z,
							provider: g,
							value: R
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[11px] font-medium text-muted-foreground",
									children: translate("auto.components.sidebar.WorktreeMetaDialog.9c1d1e9b71", "Comment")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									ref: Pe,
									value: B,
									onChange: Fe,
									onKeyDown: Re,
									placeholder: translate("auto.components.sidebar.WorktreeMetaDialog.030d484fc0", "Notes about this worktree..."),
									rows: 3,
									className: "w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-xs shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 resize-none max-h-60 overflow-y-auto scrollbar-sleek"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] text-muted-foreground",
									children: [
										translate("auto.components.sidebar.WorktreeMetaDialog.7f0be5e9a6", "Supports **markdown** — bold, lists, `code`, links. Press Enter or"),
										" ",
										s,
										" ",
										translate("auto.components.sidebar.WorktreeMetaDialog.b48c271d39", "to save, Shift+Enter for a new line.")
									]
								})
							]
						})
					]
				}),
				W ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "text-[11px] leading-[15px] text-destructive",
					children: W
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => Le(!1),
					className: "text-xs",
					children: translate("auto.components.sidebar.WorktreeMetaDialog.3db0a2a593", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: Q,
					disabled: !Z || H,
					className: "text-xs",
					children: H ? translate("auto.components.sidebar.WorktreeMetaDialog.61d6f612cf", "Saving...") : translate("auto.components.sidebar.WorktreeMetaDialog.2174f17011", "Save")
				})] })
			]
		})
	});
});
export { WorktreeMetaDialog_default as default };
