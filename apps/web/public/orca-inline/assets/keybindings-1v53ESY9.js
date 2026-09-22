import { _ as TUI_AGENT_DISPLAY_NAMES, g as ALL_TUI_AGENTS } from "./stale-document-visibility-rSdoU229.js";
function platformBindings(v) {
	return {
		darwin: v,
		linux: v,
		win32: v
	};
}
const KEYBINDING_DEFINITION_CORE_1 = [
	{
		id: "worktree.quickOpen",
		title: "Go to File",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"global",
			"file",
			"quick open"
		],
		defaultBindings: platformBindings(["Mod+P"])
	},
	{
		id: "app.settings",
		title: "Open Settings",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"settings",
			"preferences"
		],
		defaultBindings: platformBindings(["Mod+Comma"]),
		conflictGroup: "menu"
	},
	{
		id: "app.forceReload",
		title: "Force Reload",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"reload",
			"refresh",
			"force"
		],
		defaultBindings: platformBindings(["Mod+Shift+R"]),
		conflictGroup: "menu"
	},
	{
		id: "worktree.palette",
		title: "Switch worktree",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"global",
			"worktree",
			"switch",
			"jump"
		],
		defaultBindings: {
			darwin: ["Mod+J"],
			linux: ["Mod+Shift+J"],
			win32: ["Mod+Shift+J"]
		}
	},
	{
		id: "worktree.navigateUp",
		title: "Previous worktree",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"global",
			"worktree",
			"previous",
			"up"
		],
		defaultBindings: platformBindings(["Mod+Shift+ArrowUp"])
	},
	{
		id: "worktree.navigateDown",
		title: "Next worktree",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"global",
			"worktree",
			"next",
			"down"
		],
		defaultBindings: platformBindings(["Mod+Shift+ArrowDown"])
	},
	{
		id: "workspace.create",
		title: "Create worktree",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"global",
			"worktree",
			"create",
			"new workspace"
		],
		defaultBindings: platformBindings(["Mod+N", "Mod+Shift+N"])
	},
	{
		id: "workspace.rename",
		title: "Rename worktree",
		group: "Global",
		scope: "global",
		conflictGroup: "workspace-shell",
		searchKeywords: [
			"shortcut",
			"global",
			"worktree",
			"rename",
			"workspace",
			"title"
		],
		defaultBindings: {
			darwin: ["Mod+Alt+R"],
			linux: [],
			win32: []
		}
	},
	{
		id: "workspace.delete",
		title: "Delete Workspace",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"global",
			"workspace",
			"current workspace",
			"worktree",
			"delete",
			"remove",
			"trash"
		],
		defaultBindings: platformBindings(["Mod+Shift+Backspace"]),
		allowInTerminal: !0
	},
	{
		id: "workspace.openBoard",
		title: "Toggle Workspace Board",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"global",
			"workspace",
			"board",
			"kanban",
			"worktree",
			"toggle",
			"open",
			"close"
		],
		defaultBindings: platformBindings([]),
		allowInTerminal: !0
	},
	{
		id: "dashboard.toggle",
		title: "Toggle Agent Dashboard",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"global",
			"agent",
			"agents",
			"dashboard",
			"kanban",
			"board",
			"toggle",
			"open",
			"close"
		],
		defaultBindings: platformBindings([]),
		allowInTerminal: !0
	},
	{
		id: "workspace.selectByIndex",
		title: "Select Workspace 1–9",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"global",
			"workspace",
			"worktree",
			"select",
			"switch",
			"number",
			"digit",
			"1-9",
			"index"
		],
		defaultBindings: platformBindings(["Mod+1"])
	},
	{
		id: "voice.dictation",
		title: "Dictation",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"dictation",
			"voice",
			"speech",
			"microphone"
		],
		defaultBindings: platformBindings(["Mod+E"])
	},
	{
		id: "view.tasks",
		title: "Open Tasks",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"tasks",
			"github issues",
			"linear"
		],
		defaultBindings: platformBindings([])
	},
	{
		id: "sidebar.left.toggle",
		title: "Toggle Sidebar",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"sidebar",
			"left"
		],
		defaultBindings: platformBindings(["Mod+B"])
	},
	{
		id: "sidebar.right.toggle",
		title: "Toggle Right Sidebar",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"sidebar",
			"right"
		],
		defaultBindings: platformBindings(["Mod+L"])
	},
	{
		id: "sidebar.explorer.toggle",
		title: "Show Explorer",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"sidebar",
			"explorer",
			"files"
		],
		defaultBindings: platformBindings(["Mod+Shift+E"])
	},
	{
		id: "sidebar.search.toggle",
		title: "Show Search",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"sidebar",
			"search"
		],
		defaultBindings: platformBindings(["Mod+Shift+F"])
	},
	{
		id: "sidebar.sourceControl.toggle",
		title: "Show Source Control",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"sidebar",
			"source control",
			"git"
		],
		defaultBindings: platformBindings(["Mod+Shift+G"])
	},
	{
		id: "sidebar.checks.toggle",
		title: "Show Checks",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"sidebar",
			"checks",
			"ci"
		],
		defaultBindings: platformBindings([])
	},
	{
		id: "sidebar.ports.toggle",
		title: "Show Ports",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"sidebar",
			"ports"
		],
		defaultBindings: {
			darwin: ["Mod+Shift+I"],
			linux: [],
			win32: []
		}
	},
	{
		id: "sidebar.sleepingWorkspaces.toggle",
		title: "Toggle Sleeping Workspaces",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"sidebar",
			"sleeping",
			"asleep",
			"workspaces",
			"worktree",
			"filter",
			"show",
			"hide"
		],
		defaultBindings: platformBindings([])
	},
	{
		id: "sidebar.focusWorktreeList",
		title: "Focus worktree list",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"sidebar",
			"worktree",
			"focus"
		],
		defaultBindings: platformBindings(["Mod+Shift+0"])
	},
	{
		id: "floatingTerminal.toggle",
		title: "Toggle Floating Terminal",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"floating terminal",
			"terminal"
		],
		defaultBindings: platformBindings(["Mod+Alt+A"]),
		allowInTerminal: !0
	},
	{
		id: "floatingWorkspace.maximize",
		title: "Maximize Floating Workspace Panel",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"floating",
			"workspace",
			"panel",
			"floating workspace",
			"workspace panel",
			"maximize",
			"expand"
		],
		defaultBindings: {
			darwin: ["Mod+Alt+Shift+A"],
			linux: [],
			win32: []
		},
		allowInTerminal: !0
	}
], KEYBINDING_DEFINITION_CORE_2 = [
	{
		id: "floatingWorkspace.minimize",
		title: "Minimize Floating Workspace Panel",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"floating",
			"workspace",
			"panel",
			"floating workspace",
			"workspace panel",
			"minimize",
			"hide"
		],
		defaultBindings: {
			darwin: [],
			linux: [],
			win32: []
		},
		allowInTerminal: !0
	},
	{
		id: "zoom.in",
		title: "Zoom In",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"zoom",
			"in",
			"scale"
		],
		defaultBindings: platformBindings([
			"Mod+Equal",
			"Mod+Shift+Plus",
			"Mod+NumpadAdd"
		])
	},
	{
		id: "zoom.out",
		title: "Zoom Out",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"zoom",
			"out",
			"scale"
		],
		defaultBindings: platformBindings(["Mod+Minus", "Mod+NumpadSubtract"])
	},
	{
		id: "zoom.reset",
		title: "Reset Size",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"zoom",
			"reset",
			"size",
			"actual"
		],
		defaultBindings: platformBindings(["Mod+0"])
	},
	{
		id: "worktree.history.back",
		title: "Worktree History Back",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"worktree",
			"history",
			"back"
		],
		defaultBindings: platformBindings(["Mod+Alt+ArrowLeft"]),
		allowInTerminal: !0
	},
	{
		id: "worktree.history.forward",
		title: "Worktree History Forward",
		group: "Global",
		scope: "global",
		searchKeywords: [
			"shortcut",
			"worktree",
			"history",
			"forward"
		],
		defaultBindings: platformBindings(["Mod+Alt+ArrowRight"]),
		allowInTerminal: !0
	},
	{
		id: "tab.newTerminal",
		title: "New terminal tab",
		group: "Tabs",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"terminal",
			"new"
		],
		defaultBindings: platformBindings(["Mod+T"])
	},
	{
		id: "tab.newAgent",
		title: "New agent tab (default agent)",
		group: "Tabs",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"agent",
			"new",
			"default",
			"launch"
		],
		defaultBindings: {
			darwin: ["Mod+Alt+T"],
			linux: [],
			win32: []
		}
	},
	{
		id: "tab.newBrowser",
		title: "New browser tab",
		group: "Tabs",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"browser",
			"new"
		],
		defaultBindings: platformBindings(["Mod+Shift+B"])
	},
	{
		id: "tab.newSimulator",
		title: "New mobile emulator tab",
		group: "Tabs",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"simulator",
			"emulator",
			"mobile",
			"ios",
			"new"
		],
		defaultBindings: {
			darwin: ["Mod+Alt+Shift+E"],
			linux: [],
			win32: []
		}
	},
	{
		id: "tab.newMarkdown",
		title: "New markdown tab",
		group: "Tabs",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"markdown",
			"file",
			"new"
		],
		defaultBindings: platformBindings(["Mod+Shift+M"])
	},
	{
		id: "tab.openMarkdown",
		title: "Open markdown tab",
		group: "Tabs",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"markdown",
			"file",
			"open"
		],
		defaultBindings: platformBindings(["Mod+Shift+O"])
	},
	{
		id: "tab.close",
		title: "Close active tab",
		group: "Tabs",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"close",
			"tab",
			"pane"
		],
		defaultBindings: platformBindings(["Mod+W"])
	},
	{
		id: "tab.closeAll",
		title: "Close all editor tabs",
		group: "Tabs",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"close",
			"all",
			"tabs",
			"files",
			"editors"
		],
		defaultBindings: platformBindings(["Mod+Alt+W"])
	},
	{
		id: "tab.rename",
		title: "Rename active tab",
		group: "Tabs",
		scope: "tabs",
		conflictGroup: "workspace-shell",
		searchKeywords: [
			"shortcut",
			"tab",
			"rename",
			"title",
			"label"
		],
		defaultBindings: {
			darwin: ["Mod+R"],
			linux: [],
			win32: []
		}
	},
	{
		id: "tab.reopenClosed",
		title: "Reopen closed tab",
		group: "Tabs",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"reopen",
			"restore",
			"closed"
		],
		defaultBindings: platformBindings(["Mod+Shift+T"])
	},
	{
		id: "tab.nextSameType",
		title: "Next tab (same type)",
		group: "Tab Navigation",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"next",
			"switch",
			"cycle"
		],
		defaultBindings: platformBindings(["Mod+Alt+BracketRight"])
	},
	{
		id: "tab.previousSameType",
		title: "Previous tab (same type)",
		group: "Tab Navigation",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"previous",
			"switch",
			"cycle"
		],
		defaultBindings: platformBindings(["Mod+Alt+BracketLeft"])
	},
	{
		id: "tab.nextAllTypes",
		title: "Next tab (all types)",
		group: "Tab Navigation",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"next",
			"switch",
			"cycle",
			"all",
			"any"
		],
		defaultBindings: platformBindings(["Mod+Shift+BracketRight"])
	},
	{
		id: "tab.previousAllTypes",
		title: "Previous tab (all types)",
		group: "Tab Navigation",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"previous",
			"switch",
			"cycle",
			"all",
			"any"
		],
		defaultBindings: platformBindings(["Mod+Shift+BracketLeft"])
	},
	{
		id: "tab.previousRecent",
		title: "Previous recent tab",
		group: "Tab Navigation",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"recent",
			"mru",
			"switch",
			"last used"
		],
		defaultBindings: platformBindings(["Ctrl+Tab"]),
		allowInTerminal: !0
	},
	{
		id: "tab.nextTerminal",
		title: "Next terminal tab",
		group: "Tab Navigation",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"terminal",
			"next",
			"switch"
		],
		defaultBindings: platformBindings(["Ctrl+PageDown"]),
		allowInTerminal: !0
	},
	{
		id: "tab.previousTerminal",
		title: "Previous terminal tab",
		group: "Tab Navigation",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"terminal",
			"previous",
			"switch"
		],
		defaultBindings: platformBindings(["Ctrl+PageUp"]),
		allowInTerminal: !0
	},
	{
		id: "tab.selectByIndex",
		title: "Select Tab 1–9",
		group: "Tab Navigation",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"select",
			"switch",
			"number",
			"digit",
			"1-9",
			"index"
		],
		defaultBindings: {
			darwin: ["Ctrl+1"],
			linux: ["Alt+1"],
			win32: ["Alt+1"]
		}
	},
	{
		id: "tab.openQuickCommandsMenu",
		title: "Toggle Quick Commands menu",
		group: "Quick Commands",
		scope: "tabs",
		conflictGroup: "global",
		searchKeywords: [
			"shortcut",
			"quick",
			"command",
			"menu",
			"tab",
			"group",
			"toggle"
		],
		defaultBindings: platformBindings([])
	},
	{
		id: "browser.find",
		title: "Find in Browser",
		group: "Browser",
		scope: "browser",
		searchKeywords: [
			"shortcut",
			"browser",
			"find",
			"search"
		],
		defaultBindings: platformBindings(["Mod+F"])
	},
	{
		id: "browser.back",
		title: "Go Back in Browser",
		group: "Browser",
		scope: "browser",
		searchKeywords: [
			"shortcut",
			"browser",
			"history",
			"back",
			"previous"
		],
		defaultBindings: {
			darwin: ["Mod+BracketLeft"],
			linux: ["Alt+ArrowLeft"],
			win32: ["Alt+ArrowLeft"]
		}
	},
	{
		id: "browser.forward",
		title: "Go Forward in Browser",
		group: "Browser",
		scope: "browser",
		searchKeywords: [
			"shortcut",
			"browser",
			"history",
			"forward",
			"next"
		],
		defaultBindings: {
			darwin: ["Mod+BracketRight"],
			linux: ["Alt+ArrowRight"],
			win32: ["Alt+ArrowRight"]
		}
	}
], KEYBINDING_DEFINITION_CORE_3 = [
	{
		id: "browser.reload",
		title: "Reload Browser Page",
		group: "Browser",
		scope: "browser",
		searchKeywords: [
			"shortcut",
			"browser",
			"reload",
			"refresh"
		],
		defaultBindings: platformBindings(["Mod+R"])
	},
	{
		id: "browser.hardReload",
		title: "Hard Reload Browser Page",
		group: "Browser",
		scope: "browser",
		searchKeywords: [
			"shortcut",
			"browser",
			"reload",
			"refresh",
			"cache"
		],
		defaultBindings: platformBindings(["Mod+Shift+R"])
	},
	{
		id: "browser.focusAddressBar",
		title: "Focus Browser Address Bar",
		group: "Browser",
		scope: "browser",
		searchKeywords: [
			"shortcut",
			"browser",
			"address",
			"url",
			"location"
		],
		defaultBindings: platformBindings(["Mod+L"])
	},
	{
		id: "browser.grabElement",
		title: "Grab Page Element",
		group: "Browser",
		scope: "browser",
		searchKeywords: [
			"shortcut",
			"browser",
			"grab",
			"copy",
			"element"
		],
		defaultBindings: platformBindings(["Mod+C"])
	},
	{
		id: "editor.find",
		title: "Find in editor",
		group: "Editors",
		scope: "editor",
		searchKeywords: [
			"shortcut",
			"editor",
			"find",
			"search"
		],
		defaultBindings: platformBindings(["Mod+F"])
	},
	{
		id: "editor.replace",
		title: "Replace in editor",
		group: "Editors",
		scope: "editor",
		searchKeywords: [
			"shortcut",
			"editor",
			"replace",
			"find",
			"search"
		],
		defaultBindings: {
			darwin: ["Mod+Alt+F"],
			linux: ["Mod+H"],
			win32: ["Mod+H"]
		}
	},
	{
		id: "editor.save",
		title: "Save File",
		group: "Editors",
		scope: "editor",
		searchKeywords: [
			"shortcut",
			"editor",
			"save"
		],
		defaultBindings: platformBindings(["Mod+S"])
	},
	{
		id: "editor.markdownPreview",
		title: "Show Markdown Preview",
		group: "Editors",
		scope: "editor",
		searchKeywords: [
			"shortcut",
			"editor",
			"markdown",
			"preview"
		],
		defaultBindings: platformBindings(["Mod+Shift+V"])
	},
	{
		id: "editor.toggleWordWrap",
		title: "Toggle Word Wrap",
		group: "Editors",
		scope: "editor",
		searchKeywords: [
			"shortcut",
			"editor",
			"word wrap",
			"wrap",
			"long lines",
			"soft wrap"
		],
		defaultBindings: platformBindings(["Alt+Z"])
	},
	{
		id: "editor.copyContext",
		title: "Copy Context",
		group: "Editors",
		scope: "editor",
		searchKeywords: [
			"shortcut",
			"editor",
			"copy",
			"context"
		],
		defaultBindings: platformBindings(["Mod+Alt+C"])
	},
	{
		id: "editor.previousChange",
		title: "Go to Previous Change",
		group: "Editors",
		scope: "editor",
		searchKeywords: [
			"shortcut",
			"editor",
			"diff",
			"change",
			"hunk",
			"previous"
		],
		defaultBindings: platformBindings(["Shift+F7"]),
		allowBareKeybindings: !0
	},
	{
		id: "editor.nextChange",
		title: "Go to Next Change",
		group: "Editors",
		scope: "editor",
		searchKeywords: [
			"shortcut",
			"editor",
			"diff",
			"change",
			"hunk",
			"next"
		],
		defaultBindings: platformBindings(["F7"]),
		allowBareKeybindings: !0
	},
	{
		id: "editor.addReviewNote",
		title: "Add Review Note",
		group: "Editors",
		scope: "editor",
		searchKeywords: [
			"shortcut",
			"editor",
			"markdown",
			"note",
			"comment",
			"annotation",
			"review"
		],
		defaultBindings: platformBindings(["Mod+Shift+A"])
	},
	{
		id: "sourceControl.sendReviewNotes",
		title: "Send Review Notes to Agent",
		group: "Global",
		scope: "global",
		conflictGroup: "editor",
		searchKeywords: [
			"shortcut",
			"source control",
			"diff",
			"notes",
			"send",
			"agent",
			"review",
			"annotate"
		],
		defaultBindings: platformBindings([])
	},
	{
		id: "fileExplorer.undo",
		title: "Undo file operation",
		group: "File Explorer",
		scope: "fileExplorer",
		searchKeywords: [
			"shortcut",
			"file explorer",
			"undo"
		],
		defaultBindings: platformBindings(["Mod+Z"])
	},
	{
		id: "fileExplorer.redo",
		title: "Redo file operation",
		group: "File Explorer",
		scope: "fileExplorer",
		searchKeywords: [
			"shortcut",
			"file explorer",
			"redo"
		],
		defaultBindings: {
			darwin: ["Mod+Shift+Z"],
			linux: ["Mod+Shift+Z", "Ctrl+Y"],
			win32: ["Mod+Shift+Z", "Ctrl+Y"]
		}
	},
	{
		id: "fileExplorer.copyPath",
		title: "Copy file path",
		group: "File Explorer",
		scope: "fileExplorer",
		searchKeywords: [
			"shortcut",
			"file explorer",
			"copy",
			"path"
		],
		defaultBindings: {
			darwin: ["Mod+Alt+C"],
			linux: ["Alt+Shift+C"],
			win32: ["Alt+Shift+C"]
		}
	},
	{
		id: "fileExplorer.copyRelativePath",
		title: "Copy relative file path",
		group: "File Explorer",
		scope: "fileExplorer",
		searchKeywords: [
			"shortcut",
			"file explorer",
			"copy",
			"relative",
			"path"
		],
		defaultBindings: platformBindings(["Mod+Alt+Shift+C"])
	},
	{
		id: "fileExplorer.delete",
		title: "Delete file",
		group: "File Explorer",
		scope: "fileExplorer",
		searchKeywords: [
			"shortcut",
			"file explorer",
			"delete",
			"remove",
			"trash"
		],
		defaultBindings: {
			darwin: ["Mod+Backspace", "Delete"],
			linux: ["Delete"],
			win32: ["Delete"]
		},
		allowBareKeybindings: !0
	},
	{
		id: "settings.search",
		title: "Search Settings",
		group: "Settings",
		scope: "settings",
		searchKeywords: [
			"shortcut",
			"settings",
			"search",
			"find"
		],
		defaultBindings: platformBindings(["Mod+F"])
	},
	{
		id: "terminal.copySelection",
		title: "Copy terminal selection",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"terminal",
			"copy",
			"selection"
		],
		defaultBindings: {
			darwin: ["Mod+C"],
			linux: ["Ctrl+Shift+C", "Ctrl+C"],
			win32: ["Ctrl+Shift+C", "Ctrl+C"]
		}
	},
	{
		id: "terminal.selectAll",
		title: "Select all terminal text",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"terminal",
			"select",
			"all"
		],
		defaultBindings: {
			darwin: ["Mod+A"],
			linux: ["Ctrl+Shift+A"],
			win32: ["Ctrl+Shift+A"]
		}
	},
	{
		id: "terminal.paste",
		title: "Paste into terminal",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"terminal",
			"paste",
			"clipboard"
		],
		defaultBindings: {
			darwin: ["Mod+V"],
			linux: [
				"Ctrl+V",
				"Ctrl+Shift+V",
				"Shift+Insert"
			],
			win32: [
				"Ctrl+V",
				"Ctrl+Shift+V",
				"Shift+Insert"
			]
		}
	},
	{
		id: "terminal.search",
		title: "Search active pane",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"terminal",
			"search",
			"find"
		],
		defaultBindings: platformBindings(["Mod+F"])
	},
	{
		id: "terminal.clear",
		title: "Clear active pane",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"pane",
			"clear"
		],
		defaultBindings: platformBindings(["Mod+K"])
	},
	{
		id: "terminal.focusNextPane",
		title: "Focus next pane",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"pane",
			"focus",
			"next"
		],
		defaultBindings: platformBindings(["Mod+BracketRight"])
	},
	{
		id: "terminal.focusPreviousPane",
		title: "Focus previous pane",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"pane",
			"focus",
			"previous"
		],
		defaultBindings: platformBindings(["Mod+BracketLeft"])
	},
	{
		id: "terminal.equalizePaneSizes",
		title: "Equalize pane sizes",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"pane",
			"split",
			"equalize",
			"resize",
			"balance",
			"size"
		],
		defaultBindings: platformBindings([])
	},
	{
		id: "terminal.expandPane",
		title: "Expand / collapse pane",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"pane",
			"expand",
			"collapse"
		],
		defaultBindings: platformBindings(["Mod+Shift+Enter"])
	},
	{
		id: "terminal.setTitle",
		title: "Set Title…",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"terminal",
			"pane",
			"set title",
			"title",
			"rename"
		],
		defaultBindings: platformBindings([])
	}
], KEYBINDING_DEFINITION_CORE_4 = [
	{
		id: "terminal.clearPaneTitle",
		title: "Clear Pane Title",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"terminal",
			"pane",
			"clear title",
			"remove title",
			"title"
		],
		defaultBindings: platformBindings([])
	},
	{
		id: "terminal.closePane",
		title: "Close active pane",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"pane",
			"close"
		],
		defaultBindings: platformBindings(["Mod+W"])
	},
	{
		id: "terminal.splitRight",
		title: "Split terminal right",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"pane",
			"split",
			"right"
		],
		defaultBindings: {
			darwin: ["Mod+D"],
			linux: ["Mod+Shift+D"],
			win32: ["Mod+Shift+D"]
		}
	},
	{
		id: "terminal.splitDown",
		title: "Split terminal down",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"pane",
			"split",
			"down"
		],
		defaultBindings: {
			darwin: ["Mod+Shift+D"],
			linux: ["Alt+Shift+D"],
			win32: ["Alt+Shift+D"]
		}
	},
	{
		id: "terminal.switchInputSource",
		title: "Switch input source / language (native)",
		group: "Terminal Panes",
		scope: "terminal",
		searchKeywords: [
			"shortcut",
			"input",
			"source",
			"language",
			"korean",
			"english",
			"ime",
			"switch",
			"hangul",
			"layout"
		],
		defaultBindings: {
			darwin: [],
			linux: [],
			win32: []
		},
		allowShiftOnlyKeybindings: !0
	}
];
function agentTabActionId(v) {
	return `tab.newAgent.${v}`;
}
function buildAgentTabKeybindingDefinitions() {
	return ALL_TUI_AGENTS.map((q) => ({
		id: agentTabActionId(q),
		title: `New ${TUI_AGENT_DISPLAY_NAMES[q]} tab`,
		group: "Agents",
		scope: "tabs",
		searchKeywords: [
			"shortcut",
			"tab",
			"agent",
			"new",
			"launch",
			q,
			TUI_AGENT_DISPLAY_NAMES[q].toLowerCase()
		],
		defaultBindings: {
			darwin: [],
			linux: [],
			win32: []
		}
	}));
}
const KEYBINDING_DEFINITIONS = [
	...KEYBINDING_DEFINITION_CORE_1,
	...KEYBINDING_DEFINITION_CORE_2,
	...KEYBINDING_DEFINITION_CORE_3,
	...KEYBINDING_DEFINITION_CORE_4,
	...buildAgentTabKeybindingDefinitions()
], DEFINITIONS_BY_ID = new Map(KEYBINDING_DEFINITIONS.map((v) => [v.id, v]));
var DEFINITION_IDS = new Set(KEYBINDING_DEFINITIONS.map((v) => v.id));
const DIGIT_INDEX_ACTION_IDS = ["tab.selectByIndex", "workspace.selectByIndex"], DIGIT_INDEX_KEY_PATTERN = /^[1-9]$/;
function isDigitIndexActionId(v) {
	return DIGIT_INDEX_ACTION_IDS.includes(v);
}
function isKeybindingActionId(v) {
	return DEFINITION_IDS.has(v) || isPluginKeybindingActionId(v);
}
function isPluginKeybindingActionId(v) {
	return v.length <= 400 && /^plugin:[a-z0-9]+(?:-[a-z0-9]+)*\.[a-z0-9]+(?:-[a-z0-9]+)*\/[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*$/.test(v);
}
function getKeybindingDefinition(v) {
	return DEFINITIONS_BY_ID.get(v) ?? null;
}
function getKeybindingPlatform(v) {
	return v === "darwin" ? "darwin" : v === "win32" ? "win32" : "linux";
}
function hasModifier(v, q) {
	return q === "alt" ? !!(v.alt ?? v.altKey) : q === "meta" ? !!(v.meta ?? v.metaKey) : q === "control" ? !!(v.control ?? v.ctrlKey) : !!(v.shift ?? v.shiftKey);
}
var SIMPLE_KEY_TOKENS = new Map(Object.entries({
	"[": "BracketLeft",
	"]": "BracketRight",
	"{": "BracketLeft",
	"}": "BracketRight",
	"-": "Minus",
	_: "Underscore",
	"=": "Equal",
	"+": "Plus",
	",": "Comma",
	".": "Period",
	"/": "Slash",
	"\\": "Backslash",
	";": "Semicolon",
	"'": "Quote",
	"`": "Backquote",
	RETURN: "Enter",
	ESC: "Escape",
	SPACEBAR: "Space",
	PGUP: "PageUp",
	PGDN: "PageDown",
	PLUS: "Plus",
	MINUS: "Minus",
	EQUAL: "Equal",
	UNDERSCORE: "Underscore",
	ARROWLEFT: "ArrowLeft",
	LEFT: "ArrowLeft",
	ARROWRIGHT: "ArrowRight",
	RIGHT: "ArrowRight",
	ARROWUP: "ArrowUp",
	UP: "ArrowUp",
	ARROWDOWN: "ArrowDown",
	DOWN: "ArrowDown",
	PAGEUP: "PageUp",
	PAGEDOWN: "PageDown",
	BACKSPACE: "Backspace",
	DELETE: "Delete",
	DEL: "Delete",
	INSERT: "Insert",
	INS: "Insert",
	ENTER: "Enter",
	TAB: "Tab",
	ESCAPE: "Escape",
	SPACE: "Space",
	BRACKETLEFT: "BracketLeft",
	BRACKETRIGHT: "BracketRight",
	NUMPADADD: "NumpadAdd",
	NUMPADSUBTRACT: "NumpadSubtract",
	ADD: "NumpadAdd",
	SUBTRACT: "NumpadSubtract",
	COMMA: "Comma",
	PERIOD: "Period",
	SLASH: "Slash",
	BACKSLASH: "Backslash",
	SEMICOLON: "Semicolon",
	QUOTE: "Quote",
	BACKQUOTE: "Backquote"
}));
function isFunctionKeyToken(v) {
	return /^F([1-9]|1[0-9]|2[0-4])$/.test(v);
}
function normalizeKeyToken(v) {
	if (v === " ") return "Space";
	let q = v.trim();
	if (!q) return null;
	let J = q.toUpperCase();
	return J.length === 1 && J >= "A" && J <= "Z" || J.length === 1 && J >= "0" && J <= "9" || isFunctionKeyToken(J) ? J : SIMPLE_KEY_TOKENS.get(J) ?? null;
}
function parseModifierToken(v) {
	let q = v.toLowerCase();
	return q === "mod" || q === "cmdorctrl" || q === "commandorcontrol" ? "Mod" : q === "cmd" || q === "command" || q === "meta" || v === "⌘" ? "Cmd" : q === "ctrl" || q === "control" || v === "⌃" ? "Ctrl" : q === "alt" || q === "option" || q === "opt" || v === "⌥" ? "Alt" : q === "shift" || v === "⇧" ? "Shift" : null;
}
function applyModifierToken(v, q) {
	q === "Mod" ? v.mod = !0 : q === "Cmd" ? v.meta = !0 : q === "Ctrl" ? v.control = !0 : q === "Alt" ? v.alt = !0 : v.shift = !0;
}
function emptyParsedKeybinding() {
	return {
		mod: !1,
		meta: !1,
		control: !1,
		alt: !1,
		shift: !1,
		key: ""
	};
}
function parseDoubleTapKeybinding(v) {
	let q = [], J = !1;
	for (let Y of v) {
		if (Y.toLowerCase() === "doubletap") {
			if (J) return null;
			J = !0;
			continue;
		}
		let v = parseModifierToken(Y);
		if (!v) return null;
		q.push(v);
	}
	if (q.length === 0) return null;
	let Y = emptyParsedKeybinding();
	for (let v of q) applyModifierToken(Y, v);
	return Y.mod && (Y.meta || Y.control) ? (Y.doubleTapModifier = "Mod", Y) : q.length > 1 ? null : (Y.doubleTapModifier = q[0], Y);
}
var PARSE_CACHE_LIMIT = 512, parseCache = /* @__PURE__ */ new Map();
function parseKeybinding(v) {
	if (parseCache.has(v)) return parseCache.get(v) ?? null;
	let q = parseKeybindingUncached(v);
	return parseCache.size >= PARSE_CACHE_LIMIT && parseCache.clear(), parseCache.set(v, q ? Object.freeze(q) : null), q;
}
function parseKeybindingUncached(v) {
	let q = v.split("+").map((v) => v.trim()).filter(Boolean);
	if (q.length === 0) return null;
	if (q.some((v) => v.toLowerCase() === "doubletap")) return parseDoubleTapKeybinding(q);
	let J = emptyParsedKeybinding();
	for (let v of q) {
		let q = parseModifierToken(v);
		if (q) {
			applyModifierToken(J, q);
			continue;
		}
		if (J.key) return null;
		let Y = normalizeKeyToken(v);
		if (!Y) return null;
		J.key = Y;
	}
	return J.key ? J : null;
}
function canonicalizeParsedKeybinding(v) {
	if (v.doubleTapModifier) return `DoubleTap+${v.doubleTapModifier}`;
	let q = [];
	return v.mod && q.push("Mod"), v.meta && q.push("Cmd"), v.control && q.push("Ctrl"), v.alt && q.push("Alt"), v.shift && q.push("Shift"), q.push(v.key), q.join("+");
}
function isSafeBareKey(v) {
	return v.mod || v.meta || v.control || v.alt ? !1 : v.shift ? isFunctionKeyToken(v.key) : isFunctionKeyToken(v.key) || [
		"Backspace",
		"Delete",
		"Enter",
		"Escape",
		"Tab",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp",
		"ArrowDown",
		"PageUp",
		"PageDown"
	].includes(v.key);
}
function normalizeKeybindingWithOptions(v, q = {}) {
	let J = parseKeybinding(v);
	if (!J) return {
		ok: !1,
		error: "Use a shortcut like Ctrl+Shift+P or Cmd+K."
	};
	if (J.mod && (J.meta || J.control)) return {
		ok: !1,
		error: "Use either Mod or a platform-specific modifier, not both."
	};
	if (J.doubleTapModifier) return {
		ok: !0,
		value: canonicalizeParsedKeybinding(J)
	};
	let Y = J.shift && J.key === "Insert", X = q.allowBareKeybindings === !0 && isSafeBareKey(J), Z = q.allowShiftOnlyKeybindings === !0 && J.shift && !J.mod && !J.meta && !J.control && !J.alt;
	return !J.mod && !J.meta && !J.control && !J.alt && !Y && !X && !Z ? {
		ok: !1,
		error: "Include at least one modifier key."
	} : {
		ok: !0,
		value: canonicalizeParsedKeybinding(J)
	};
}
function normalizeKeybinding(v) {
	return normalizeKeybindingWithOptions(v);
}
function isDoubleTapBinding(v) {
	return !!parseKeybinding(v)?.doubleTapModifier;
}
function normalizeKeybindingListWithOptions(v, q = {}) {
	let J = v.trim();
	if (!J) return [];
	let Y = [];
	for (let v of J.split(",")) {
		let J = normalizeKeybindingWithOptions(v, q);
		if (!J.ok) return J;
		Y.includes(J.value) || Y.push(J.value);
	}
	return Y;
}
function normalizeKeybindingArrayWithOptions(v, q = {}) {
	let J = [];
	for (let Y of v) {
		let v = normalizeKeybindingListWithOptions(Y, q);
		if (!Array.isArray(v)) return v;
		for (let q of v) J.includes(q) || J.push(q);
	}
	return J;
}
function normalizeOptionsForAction(v) {
	let q = DEFINITIONS_BY_ID.get(v);
	return {
		allowBareKeybindings: q?.allowBareKeybindings === !0,
		allowShiftOnlyKeybindings: q?.allowShiftOnlyKeybindings === !0
	};
}
function canonicalizeDigitIndexBinding(v) {
	let q = parseKeybinding(v);
	return !q || q.doubleTapModifier || !DIGIT_INDEX_KEY_PATTERN.test(q.key) ? {
		ok: !1,
		error: "Pick a number key 1–9 with a modifier, like Cmd+1 or Ctrl+1."
	} : {
		ok: !0,
		value: canonicalizeParsedKeybinding({
			...q,
			key: "1"
		})
	};
}
function finalizeDigitIndexBindings(v, q) {
	if (!isDigitIndexActionId(v) || !Array.isArray(q)) return q;
	let J = [];
	for (let v of q) {
		let q = canonicalizeDigitIndexBinding(v);
		if (!q.ok) return q;
		J.includes(q.value) || J.push(q.value);
	}
	return J;
}
function normalizeKeybindingListForAction(v, q) {
	return finalizeDigitIndexBindings(v, normalizeKeybindingListWithOptions(q, normalizeOptionsForAction(v)));
}
function normalizeKeybindingArrayForAction(v, q) {
	return finalizeDigitIndexBindings(v, normalizeKeybindingArrayWithOptions(q, normalizeOptionsForAction(v)));
}
var MODIFIER_KEYS = new Set([
	"Alt",
	"AltGraph",
	"Control",
	"Meta",
	"Shift",
	"OS",
	"Fn",
	"FnLock",
	"Hyper",
	"Super",
	"Symbol",
	"SymbolLock"
]);
const PUNCTUATION_KEY_TOKENS = new Set([
	"BracketLeft",
	"BracketRight",
	"Minus",
	"Underscore",
	"Equal",
	"Plus",
	"Comma",
	"Period",
	"Slash",
	"Backslash",
	"Semicolon",
	"Quote",
	"Backquote"
]);
function isPunctuationKeyToken(v) {
	return v !== null && PUNCTUATION_KEY_TOKENS.has(v);
}
var PHYSICAL_CODE_FALLBACK_KEYS = new Set([
	"",
	"Dead",
	"Unidentified"
]), SHIFTED_PUNCTUATION_KEY_TOKENS = {
	"<": "Comma",
	">": "Period",
	"?": "Slash",
	"|": "Backslash",
	":": "Semicolon",
	"\"": "Quote",
	"~": "Backquote"
};
function logicalKeyTokenFromInput(v) {
	let q = v.key ?? "";
	return MODIFIER_KEYS.has(q) ? null : normalizeKeyToken(q) || (hasModifier(v, "shift") ? SHIFTED_PUNCTUATION_KEY_TOKENS[q] ?? null : null);
}
function canUsePhysicalCodeFallback(v) {
	return PHYSICAL_CODE_FALLBACK_KEYS.has(v.key ?? "");
}
function isLatinShortcutKey(v) {
	if (v.length !== 1) return !1;
	let q = v.toUpperCase();
	return q >= "A" && q <= "Z" || v >= "0" && v <= "9";
}
function shouldUseNonLatinShortcutPhysicalFallback(v, q) {
	if (getKeybindingPlatform(q) === "darwin" || !(hasModifier(v, "control") || hasModifier(v, "meta")) || hasModifier(v, "control") && hasModifier(v, "alt") || logicalKeyTokenFromInput(v) !== null) return !1;
	let J = v.key ?? "";
	return J !== "" && !MODIFIER_KEYS.has(J) && !isLatinShortcutKey(J);
}
function canFallBackToPhysicalCode(v, q) {
	return canUsePhysicalCodeFallback(v) || shouldUseNonLatinShortcutPhysicalFallback(v, q);
}
function physicalCodeKeyTokenFromInput(v) {
	let q = v.code ?? "";
	return q.startsWith("Key") && q.length === 4 ? q.slice(3).toUpperCase() : q.startsWith("Digit") && q.length === 6 ? q.slice(5) : normalizeKeyToken(q);
}
function numpadCodeKeyTokenFromInput(v) {
	let q = v.code ?? "";
	return q === "NumpadAdd" || q === "NumpadSubtract" ? normalizeKeyToken(q) : null;
}
function shouldUseMacOptionComposedCaptureFallback(v, q) {
	if (getKeybindingPlatform(q) !== "darwin" || !hasModifier(v, "alt") || MODIFIER_KEYS.has(v.key ?? "")) return !1;
	let J = physicalCodeKeyTokenFromInput(v);
	return J ? J.length === 1 && J >= "A" && J <= "Z" || isPunctuationKeyToken(J) : !1;
}
function keyTokenFromInput(v, q) {
	return numpadCodeKeyTokenFromInput(v) || logicalKeyTokenFromInput(v) || (!canUsePhysicalCodeFallback(v) && !shouldUseMacOptionComposedCaptureFallback(v, q) && !shouldUseNonLatinShortcutPhysicalFallback(v, q) ? null : physicalCodeKeyTokenFromInput(v));
}
function canonicalDoubleTapToken(v, q) {
	let J = q === "darwin";
	return v === "Cmd" && J || v === "Ctrl" && !J ? "Mod" : v;
}
function keybindingFromInputWithOptions(v, q, J = {}) {
	if (v.doubleTapModifier) return normalizeKeybindingWithOptions(`DoubleTap+${canonicalDoubleTapToken(v.doubleTapModifier, q)}`, J);
	let Y = keyTokenFromInput(v, q);
	if (!Y) return {
		ok: !1,
		error: "Press a key, not only a modifier."
	};
	let X = getKeybindingPlatform(q) === "darwin", Z = [];
	return (X ? hasModifier(v, "meta") : hasModifier(v, "control")) && Z.push("Mod"), X && hasModifier(v, "control") && Z.push("Ctrl"), !X && hasModifier(v, "meta") && Z.push("Cmd"), hasModifier(v, "alt") && Z.push("Alt"), hasModifier(v, "shift") && Z.push("Shift"), Z.push(Y), normalizeKeybindingWithOptions(Z.join("+"), J);
}
function keybindingFromInputForAction(v, q, J) {
	let Y = keybindingFromInputWithOptions(q, J, normalizeOptionsForAction(v));
	return !Y.ok || !isDigitIndexActionId(v) ? Y : canonicalizeDigitIndexBinding(Y.value);
}
function getDefaultBindings(v, q) {
	return v.defaultBindings[getKeybindingPlatform(q)].map((q) => {
		let J = normalizeKeybindingWithOptions(q, {
			allowBareKeybindings: v.allowBareKeybindings === !0,
			allowShiftOnlyKeybindings: v.allowShiftOnlyKeybindings === !0
		});
		return J.ok ? J.value : q;
	});
}
function getEffectiveKeybindingsForAction(v, q, J) {
	let Y = DEFINITIONS_BY_ID.get(v), X = J?.[v];
	if (Array.isArray(X)) {
		if (isDigitIndexActionId(v)) {
			let v = [];
			for (let q of X) {
				let J = canonicalizeDigitIndexBinding(q);
				J.ok && !v.includes(J.value) && v.push(J.value);
			}
			return v;
		}
		return X.flatMap((q) => {
			let J = normalizeKeybindingWithOptions(q, normalizeOptionsForAction(v));
			return J.ok ? [J.value] : [];
		});
	}
	return Y ? getDefaultBindings(Y, q) : [];
}
function getEffectiveKeybindingsForDefinition(v, q, J) {
	let Y = J?.[v.id];
	return Array.isArray(Y) ? getEffectiveKeybindingsForAction(v.id, q, J) : getDefaultBindings(v, q);
}
function normalizeTerminalShortcutPolicy(v) {
	return v === "terminal-first" ? "terminal-first" : "orca-first";
}
function isKeybindingAllowedInTerminal(v) {
	return v.scope === "terminal" || v.allowInTerminal === !0;
}
function isKeybindingPotentialTerminalConflict(v) {
	return v.scope !== "terminal" && v.allowInTerminal !== !0;
}
function keybindingIsActiveInContext(v, q = {}) {
	return q.context !== "terminal" || normalizeTerminalShortcutPolicy(q.terminalShortcutPolicy) === "orca-first" ? !0 : isKeybindingAllowedInTerminal(v);
}
function platformModifiers(v, q) {
	let J = q === "darwin";
	return {
		meta: v.meta || v.mod && J,
		control: v.control || v.mod && !J,
		alt: v.alt,
		shift: v.shift
	};
}
function modifierStateMatches(v, q, J) {
	let Y = platformModifiers(v, J);
	return hasModifier(q, "meta") === Y.meta && hasModifier(q, "control") === Y.control && hasModifier(q, "alt") === Y.alt && hasModifier(q, "shift") === Y.shift;
}
function shouldUseMacOptionLetterPhysicalFallback(v, q, J) {
	return getKeybindingPlatform(J) === "darwin" && v.alt && hasModifier(q, "alt") && logicalKeyTokenFromInput(q) === null;
}
function shouldUseMacOptionPunctuationPhysicalFallback(v, q, J) {
	return getKeybindingPlatform(J) === "darwin" && v.alt && hasModifier(q, "alt") && logicalKeyTokenFromInput(q) === null;
}
function letterKeyMatches(v, q, J, Y) {
	let X = logicalKeyTokenFromInput(v);
	return X && X.length === 1 && X >= "A" && X <= "Z" ? X === q.toUpperCase() : (canFallBackToPhysicalCode(v, Y) || shouldUseMacOptionLetterPhysicalFallback(J, v, Y)) && v.code === `Key${q.toUpperCase()}`;
}
function digitKeyMatches(v, q, J) {
	let Y = logicalKeyTokenFromInput(v);
	return Y && Y.length === 1 && Y >= "0" && Y <= "9" ? Y === q : canFallBackToPhysicalCode(v, J) && v.code === `Digit${q}`;
}
function semanticPunctuationKey(v) {
	let q = logicalKeyTokenFromInput(v);
	return isPunctuationKeyToken(q) ? q : null;
}
function physicalPunctuationKey(v) {
	let q = physicalCodeKeyTokenFromInput(v);
	return isPunctuationKeyToken(q) ? q : null;
}
function shouldUseSemanticPunctuation(v, q, J) {
	return !(getKeybindingPlatform(J) !== "darwin" && v.mod && v.alt && hasModifier(q, "control") && hasModifier(q, "alt") && !hasModifier(q, "meta") && physicalPunctuationKey(q) === null);
}
function keyMatches(v, q, J, Y) {
	if (v.length === 1 && v >= "A" && v <= "Z") return letterKeyMatches(q, v, J, Y);
	if (v.length === 1 && v >= "0" && v <= "9") return digitKeyMatches(q, v, Y);
	if (v === "NumpadAdd" || v === "NumpadSubtract") return numpadCodeKeyTokenFromInput(q) === v || logicalKeyTokenFromInput(q) === v;
	if (isPunctuationKeyToken(v)) {
		let X = semanticPunctuationKey(q);
		return X === null ? (canFallBackToPhysicalCode(q, Y) || shouldUseMacOptionPunctuationPhysicalFallback(J, q, Y)) && physicalPunctuationKey(q) === v : shouldUseSemanticPunctuation(J, q, Y) ? X === v : !1;
	}
	let X = logicalKeyTokenFromInput(q);
	return X === null ? canFallBackToPhysicalCode(q, Y) && physicalCodeKeyTokenFromInput(q) === v : X === v;
}
function resolveModifierToken(v, q) {
	switch (v) {
		case "Mod": return q === "darwin" ? "meta" : "control";
		case "Cmd": return "meta";
		case "Ctrl": return "control";
		case "Alt": return "alt";
		case "Shift": return "shift";
	}
}
function keybindingMatchesInput(v, q, J) {
	let Y = parseKeybinding(v);
	return Y ? Y.doubleTapModifier ? q.doubleTapModifier !== void 0 && resolveModifierToken(Y.doubleTapModifier, J) === resolveModifierToken(q.doubleTapModifier, J) : q.doubleTapModifier === void 0 ? modifierStateMatches(Y, q, J) && keyMatches(Y.key, q, Y, J) : !1 : !1;
}
function keybindingConflictIdentityForParsed(v, q) {
	if (v.doubleTapModifier) return `DoubleTap:${resolveModifierToken(v.doubleTapModifier, q)}`;
	let J = platformModifiers(v, q);
	return [
		J.meta ? "Meta" : "",
		J.control ? "Control" : "",
		J.alt ? "Alt" : "",
		J.shift ? "Shift" : "",
		v.key
	].join("+");
}
function getKeybindingConflictIdentity(v, q) {
	let J = parseKeybinding(v);
	return J ? keybindingConflictIdentityForParsed(J, q) : v;
}
function keybindingConflictIdentities(v, q, J) {
	let Y = getKeybindingConflictIdentity(q, J);
	if (!isDigitIndexActionId(v)) return [Y];
	let X = parseKeybinding(q);
	return !X || X.doubleTapModifier || !DIGIT_INDEX_KEY_PATTERN.test(X.key) ? [Y] : Array.from({ length: 9 }, (v, q) => keybindingConflictIdentityForParsed({
		...X,
		key: String(q + 1)
	}, J));
}
function keybindingMatchesAction(v, q, J, Y, X = {}) {
	let Z = DEFINITIONS_BY_ID.get(v);
	return !Z || !keybindingIsActiveInContext(Z, X) ? !1 : getEffectiveKeybindingsForAction(v, J, Y).some((v) => keybindingMatchesInput(v, q, J));
}
function digitFromInput(v, q) {
	for (let J = 1; J <= 9; J++) {
		let Y = String(J);
		if (digitKeyMatches(v, Y, q)) return Y;
	}
	return null;
}
function matchKeybindingDigitIndex(v, q, J, Y, X = {}) {
	let Z = DEFINITIONS_BY_ID.get(v);
	if (!Z || !keybindingIsActiveInContext(Z, X)) return null;
	let Q = digitFromInput(q, J);
	if (!Q) return null;
	for (let X of getEffectiveKeybindingsForAction(v, J, Y)) {
		let v = parseKeybinding(X);
		if (!(!v || v.doubleTapModifier || !DIGIT_INDEX_KEY_PATTERN.test(v.key)) && keybindingMatchesInput(canonicalizeParsedKeybinding({
			...v,
			key: Q
		}), q, J)) return Number(Q) - 1;
	}
	return null;
}
function formatModifierGlyph(v, q) {
	switch (v) {
		case "Mod": return q ? "⌘" : "Ctrl";
		case "Cmd": return q ? "⌘" : "Cmd";
		case "Ctrl": return q ? "⌃" : "Ctrl";
		case "Alt": return q ? "⌥" : "Alt";
		case "Shift": return q ? "⇧" : "Shift";
	}
}
function formatKeybinding(v, q) {
	let J = parseKeybinding(v);
	if (!J) return [v];
	let Y = q === "darwin";
	if (J.doubleTapModifier) {
		let v = formatModifierGlyph(J.doubleTapModifier, Y);
		return [v, v];
	}
	let X = [];
	return J.mod && X.push(Y ? "⌘" : "Ctrl"), J.meta && X.push(Y ? "⌘" : "Cmd"), J.control && X.push(Y ? "⌃" : "Ctrl"), J.alt && X.push(Y ? "⌥" : "Alt"), J.shift && X.push(Y ? "⇧" : "Shift"), X.push(formatKeyToken(J.key, Y)), X;
}
function formatKeybindingList(v, q) {
	return v.length === 0 ? "Unassigned" : v.map((v) => {
		let J = isDoubleTapBinding(v) ? " " : q === "darwin" ? "" : "+";
		return formatKeybinding(v, q).join(J);
	}).join(", ");
}
function findKeybindingActionsForBinding(v, q, J, Y = ["global", "tabs"]) {
	let X = getKeybindingConflictIdentity(v, q), Z = new Set(Y);
	return KEYBINDING_DEFINITIONS.filter((v) => Z.has(v.scope) && getEffectiveKeybindingsForAction(v.id, q, J).some((J) => keybindingConflictIdentities(v.id, J, q).includes(X))).map((v) => v.id);
}
var KEY_TOKEN_LABELS = {
	BracketLeft: "[",
	BracketRight: "]",
	Minus: "-",
	Underscore: "_",
	Equal: "=",
	Plus: "+",
	ArrowLeft: "←",
	ArrowRight: "→",
	ArrowUp: "↑",
	ArrowDown: "↓",
	PageUp: "PageUp",
	PageDown: "PageDown",
	NumpadAdd: "Numpad +",
	NumpadSubtract: "Numpad -",
	Comma: ",",
	Period: ".",
	Slash: "/",
	Backslash: "\\",
	Semicolon: ";",
	Quote: "'",
	Backquote: "`",
	Enter: "Enter",
	Backspace: "Backspace",
	Delete: "Delete",
	Insert: "Insert",
	Tab: "Tab",
	Escape: "Esc",
	Space: "Space"
}, MAC_KEY_TOKEN_LABELS = {
	...KEY_TOKEN_LABELS,
	Backspace: "⌫"
};
function formatKeyToken(v, q) {
	return (q ? MAC_KEY_TOKEN_LABELS : KEY_TOKEN_LABELS)[v] ?? v;
}
function findKeybindingConflicts(v, q, J = {}) {
	return findKeybindingConflictsForDefinitions(KEYBINDING_DEFINITIONS, v, q, J);
}
function findKeybindingConflictsForDefinitions(v, q, J, Y = {}) {
	let X = /* @__PURE__ */ new Map(), Z = new Set(Y.ignoredActionIds ?? []), Q = new Set(Object.keys(J ?? {}).filter((v) => isKeybindingActionId(v) && !Z.has(v)));
	for (let v of Y.relevantActionIds ?? []) Z.has(v) || Q.add(v);
	for (let Y of v) if (!Z.has(Y.id)) for (let v of getEffectiveKeybindingsForDefinition(Y, q, J)) {
		let J = new Set([Y.conflictGroup ?? Y.scope]);
		Y.conflictGroup && J.add(Y.scope);
		for (let Z of J) for (let J of keybindingConflictIdentities(Y.id, v, q)) {
			let q = `${Z}\u0000${J}`, Q = X.get(q) ?? {
				binding: v,
				actionIds: /* @__PURE__ */ new Set()
			};
			!isDigitIndexActionId(Y.id) && Array.from(Q.actionIds).some((v) => isDigitIndexActionId(v)) && (Q.binding = v), Q.actionIds.add(Y.id), X.set(q, Q);
		}
	}
	let $ = /* @__PURE__ */ new Set();
	return Array.from(X.values()).filter(({ actionIds: v }) => v.size > 1 && setIntersects(v, Q)).map(({ binding: v, actionIds: q }) => ({
		binding: v,
		actionIds: Array.from(q)
	})).filter((v) => {
		let q = `${v.binding}\u0000${v.actionIds.join("\0")}`;
		return $.has(q) ? !1 : ($.add(q), !0);
	});
}
function setIntersects(v, q) {
	for (let J of v) if (q.has(J)) return !0;
	return !1;
}
export { getKeybindingDefinition as C, isKeybindingActionId as E, agentTabActionId as S, isDigitIndexActionId as T, isDoubleTapBinding as _, formatKeybindingList as a, normalizeKeybindingListForAction as b, keybindingMatchesInput as c, getEffectiveKeybindingsForDefinition as d, isKeybindingAllowedInTerminal as f, keybindingFromInputForAction as g, normalizeTerminalShortcutPolicy as h, formatKeybinding as i, matchKeybindingDigitIndex as l, keybindingIsActiveInContext as m, findKeybindingConflicts as n, getKeybindingConflictIdentity as o, isKeybindingPotentialTerminalConflict as p, findKeybindingConflictsForDefinitions as r, keybindingMatchesAction as s, findKeybindingActionsForBinding as t, getEffectiveKeybindingsForAction as u, normalizeKeybinding as v, getKeybindingPlatform as w, KEYBINDING_DEFINITIONS as x, normalizeKeybindingArrayForAction as y };
