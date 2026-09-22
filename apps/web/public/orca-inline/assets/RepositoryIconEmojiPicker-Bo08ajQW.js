import { a as __toESM } from "./chunk-BKjlJnyO.js";
import "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import { t as useAppStore, yg as sanitizeRepoIcon } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { n as useSystemPrefersDark } from "./use-system-prefers-dark-IbkBgA4c.js";
import { n as Theme, r as emoji_picker_react_esm_default, t as EmojiStyle } from "./emoji-picker-react.esm-B_hGma4S.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function RepositoryIconEmojiPicker({ selectedEmoji: e, onSetIcon: u }) {
	let d = useAppStore((e) => e.settings?.theme ?? "system"), f = useSystemPrefersDark(), p = d === "dark" || d === "system" && f;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "repo-icon-emoji-picker overflow-hidden rounded-md border border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(emoji_picker_react_esm_default, {
			autoFocusSearch: !1,
			emojiStyle: EmojiStyle.NATIVE,
			height: 340,
			width: "100%",
			lazyLoadEmojis: !0,
			onEmojiClick: (e) => {
				let l = sanitizeRepoIcon({
					type: "emoji",
					emoji: e.emoji
				});
				if (!l) {
					toast.error(translate("auto.components.settings.RepositoryIconPicker.emojiTooLongForRepoIcon", "This emoji can't be used as a repo icon."));
					return;
				}
				u(l);
			},
			previewConfig: { showPreview: !0 },
			searchPlaceholder: translate("auto.components.settings.RepositoryIconPicker.searchEmojiPlaceholder", "Search emoji"),
			theme: p ? Theme.DARK : Theme.LIGHT
		})
	}), e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-[11px] text-muted-foreground",
		children: translate("auto.components.settings.RepositoryIconPicker.currentEmojiSelection", "Current: {{value0}}", { value0: e })
	}) : null] });
}
export { RepositoryIconEmojiPicker };
