import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as formatDiffComments } from "./diff-comments-format-CFMduuOR.js";
import { t as NotesSendMenu } from "./NotesSendMenu-CbK3gK3-.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), OPEN_REQUEST_TTL_MS = 5e3;
function DiffNotesSendMenu({ worktreeId: e, groupId: c, comments: l, filePath: u, showFileScope: d = !1, triggerClassName: f, triggerLabel: p, triggerCount: m, actionLabel: h, iconClassName: g = "size-3.5", align: _ = "end", respondToOpenRequest: v = !1 }) {
	let y = useAppStore((e) => e.clearDeliveredDiffComments), b = useAppStore((e) => e.diffNotesSendMenuOpenRequest), x = useAppStore((e) => e.consumeDiffNotesSendMenuOpenRequest), S = v && b?.worktreeId === e, C = S ? b?.nonce ?? null : null, w = S ? (b?.issuedAt ?? 0) + OPEN_REQUEST_TTL_MS : null, T = (0, import_react.useCallback)(() => x(e), [x, e]), E = (0, import_react.useMemo)(() => l.filter((e) => !e.sentAt), [l]), D = (0, import_react.useMemo)(() => formatDiffComments(E), [E]), O = (0, import_react.useMemo)(() => u ? l.filter((e) => e.filePath === u) : [], [l, u]), k = (0, import_react.useMemo)(() => O.filter((e) => !e.sentAt), [O]), A = (0, import_react.useMemo)(() => formatDiffComments(k), [k]), j = d && !!u, M = (0, import_react.useMemo)(() => {
		let e = {
			id: "all",
			label: translate("auto.components.editor.DiffNotesSendMenu.8b87612461", "All unsent notes"),
			notes: E,
			prompt: D
		};
		return j ? [{
			id: "file",
			label: translate("auto.components.editor.DiffNotesSendMenu.f1aa04b5cf", "This file"),
			notes: k,
			prompt: A
		}, e] : [e];
	}, [
		j,
		k,
		A,
		E,
		D
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesSendMenu, {
		worktreeId: e,
		groupId: c,
		modeIdParts: [
			"diff-notes",
			e,
			c,
			u ?? "all"
		],
		scopes: M,
		defaultScopeId: j ? "file" : "all",
		triggerClassName: f,
		triggerLabel: p,
		triggerCount: m,
		actionLabel: h,
		iconClassName: g,
		align: _,
		openRequestNonce: C,
		openRequestExpiresAt: w,
		onOpenRequestHandled: T,
		onDelivered: (c) => void y(e, c)
	});
}
export { DiffNotesSendMenu as t };
