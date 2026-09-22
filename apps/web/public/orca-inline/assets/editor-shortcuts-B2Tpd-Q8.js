import { t as useAppStore } from "./store-C9f8FDJV.js";
import { s as keybindingMatchesAction } from "./keybindings-1v53ESY9.js";
import { t as getShortcutPlatform } from "./shortcut-platform-yj_laTMg.js";
function editorShortcutMatches(c, l) {
	return keybindingMatchesAction(c, l, getShortcutPlatform(), useAppStore.getState().keybindings);
}
function installEditorSaveShortcut(e, o) {
	let s = (e) => {
		e.repeat || !editorShortcutMatches("editor.save", e) || (e.preventDefault(), e.stopPropagation(), o());
	};
	return e.addEventListener("keydown", s, !0), () => e.removeEventListener("keydown", s, !0);
}
function installEditorFindShortcut(e, o) {
	let s = (e) => {
		editorShortcutMatches("editor.find", e) && (e.preventDefault(), e.stopPropagation(), e.repeat || o());
	};
	return e.addEventListener("keydown", s, !0), () => e.removeEventListener("keydown", s, !0);
}
function installMonacoDiffChangeNavigationShortcut(e) {
	let o = (o) => {
		let s = null;
		editorShortcutMatches("editor.nextChange", o) ? s = "next" : editorShortcutMatches("editor.previousChange", o) && (s = "previous"), s && (o.preventDefault(), o.stopPropagation(), o.repeat || e.goToDiff(s));
	}, s = e.getContainerDomNode();
	return s.addEventListener("keydown", o, !0), () => s.removeEventListener("keydown", o, !0);
}
function installEditorAddReviewNoteShortcut(e, o) {
	let s = (e) => {
		editorShortcutMatches("editor.addReviewNote", e) && (e.repeat || o() && (e.preventDefault(), e.stopPropagation()));
	};
	return e.addEventListener("keydown", s, !0), () => e.removeEventListener("keydown", s, !0);
}
function installOpenDraftAddReviewNoteGuard(e) {
	let o = (e) => {
		editorShortcutMatches("editor.addReviewNote", e) && (e.preventDefault(), e.stopPropagation());
	};
	return e.addEventListener("keydown", o, !0), () => e.removeEventListener("keydown", o, !0);
}
function installMonacoEditorFindShortcut(e) {
	return installEditorFindShortcut(e.getContainerDomNode(), () => {
		e.getAction("actions.find")?.run();
	});
}
export { installMonacoEditorFindShortcut as a, installMonacoDiffChangeNavigationShortcut as i, installEditorAddReviewNoteShortcut as n, installOpenDraftAddReviewNoteGuard as o, installEditorSaveShortcut as r, editorShortcutMatches as t };
