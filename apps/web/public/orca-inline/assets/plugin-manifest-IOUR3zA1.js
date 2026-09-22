import { E as _enum, F as object, L as string, N as literal, O as array, V as NEVER, u as isSafePluginId } from "./stale-document-visibility-rSdoU229.js";
import { o as getKeybindingConflictIdentity, v as normalizeKeybinding } from "./keybindings-1v53ESY9.js";
const pluginCapabilitySchema = object({ kind: _enum([
	"workspace:read",
	"terminal:send",
	"notifications:show",
	"storage",
	"secrets",
	"events:subscribe",
	"settings:own"
]) }).strict();
var WINDOWS_DEVICE_NAME_RE = /^(?:con|prn|aux|nul|clock\$|conin\$|conout\$|com[1-9¹²³]|lpt[1-9¹²³])(?:\..*)?$/i, WINDOWS_FORBIDDEN_CHAR_RE = /[<>:"|?*]/;
function pluginPathSegmentError(u) {
	return u.length === 0 || u === "." || u === ".." ? "empty and dot path segments are not allowed" : u.endsWith(".") || u.endsWith(" ") ? "path segments may not end with a dot or space" : WINDOWS_FORBIDDEN_CHAR_RE.test(u) || [...u].some((u) => u.charCodeAt(0) <= 31) ? "path segment contains a Windows-forbidden character or alternate-data-stream colon" : WINDOWS_DEVICE_NAME_RE.test(u) ? "path segment is a Windows reserved device name" : null;
}
function pluginRelativePathError(u) {
	if (u.length === 0 || u.startsWith("/") || u.startsWith("\\")) return "must be a non-empty relative path";
	let O = u.split(/[\\/]/);
	for (let u of O) {
		let O = pluginPathSegmentError(u);
		if (O) return O;
	}
	return null;
}
function isSafePluginRelativePath(u) {
	return pluginRelativePathError(u) === null;
}
const pluginIdSchema = string().refine(isSafePluginId, "must be kebab-case (a-z, 0-9, dashes) and not a reserved name"), pluginRelativePathSchema = string().min(1).max(1024).refine(isSafePluginRelativePath, "must be a portable relative path inside the plugin directory");
string().min(1).max(1024).transform((u) => u.replace(/[\\/]+$/, "")).refine(isSafePluginRelativePath, "must be a portable relative path inside the plugin directory");
const pluginCommandIdSchema = string().min(1).max(256).regex(/^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*$/, "must be a portable command id"), pluginLanguagePackContributionSchema = object({
	locale: string().min(2).max(35).regex(/^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/, "must be a portable locale identifier"),
	path: pluginRelativePathSchema
}).strict(), pluginKeybindingContributionSchema = object({
	command: pluginCommandIdSchema,
	key: string().min(1).max(128).transform((u, O) => {
		let k = normalizeKeybinding(u);
		return k.ok ? k.value : (O.addIssue({
			code: "custom",
			message: k.error
		}), NEVER);
	}),
	when: _enum(["global", "worktree"]).optional()
}).strict(), pluginVmRecipeContributionSchema = object({ path: pluginRelativePathSchema }).strict(), pluginAgentProfileContributionSchema = object({ path: pluginRelativePathSchema }).strict(), PLUGIN_COMMAND_ALIAS_ACTION_IDS = [
	"worktree.history.back",
	"worktree.history.forward",
	"sidebar.left.toggle",
	"sidebar.sleepingWorkspaces.toggle",
	"floatingWorkspace.maximize",
	"tab.rename",
	"workspace.rename",
	"workspace.openBoard",
	"view.tasks",
	"sidebar.right.toggle",
	"sidebar.explorer.toggle",
	"sidebar.search.toggle",
	"sidebar.sourceControl.toggle",
	"sidebar.checks.toggle",
	"sidebar.ports.toggle"
];
var PLUGIN_COMMAND_ALIAS_ACTION_ID_SET = new Set(PLUGIN_COMMAND_ALIAS_ACTION_IDS);
function isPluginCommandAliasActionId(u) {
	return PLUGIN_COMMAND_ALIAS_ACTION_ID_SET.has(u);
}
function pluginCommandKeybindingActionId(u, O) {
	return `plugin:${u}/${O}`;
}
function rejectDuplicateValues(u, O, k, A, j) {
	let M = /* @__PURE__ */ new Set();
	for (let [N, P] of u.entries()) {
		let u = O(P);
		M.has(u) && j.addIssue({
			code: "custom",
			path: [
				"contributes",
				k,
				N
			],
			message: `duplicate ${A}: ${u}`
		}), M.add(u);
	}
}
function validatePluginManifestContributions(u, O) {
	for (let k of ["panels", "commands"]) rejectDuplicateValues(u.contributes[k], (u) => u.id, k, `${k} id`, O);
	rejectDuplicateValues(u.contributes.languagePacks, (u) => u.locale.toLowerCase(), "languagePacks", "language pack locale", O);
	for (let k of ["vmRecipes", "agents"]) rejectDuplicateValues(u.contributes[k], (u) => u.path, k, `${k} path`, O);
	let k = /* @__PURE__ */ new Set();
	for (let [A, j] of u.contributes.keybindings.entries()) {
		let u = [
			"darwin",
			"linux",
			"win32"
		].map((u) => getKeybindingConflictIdentity(j.key, u));
		u.some((u) => k.has(u)) && O.addIssue({
			code: "custom",
			path: [
				"contributes",
				"keybindings",
				A
			],
			message: `duplicate keybinding: ${j.key.toLowerCase()}`
		}), u.forEach((u) => k.add(u));
	}
	let A = new Map(u.contributes.commands.map((u) => [u.id, u]));
	for (let [k, A] of u.contributes.commands.entries()) A.action !== void 0 && !isPluginCommandAliasActionId(A.action) && O.addIssue({
		code: "custom",
		path: [
			"contributes",
			"commands",
			k,
			"action"
		],
		message: `unknown built-in action: ${A.action}`
	});
	for (let [k, j] of u.contributes.keybindings.entries()) {
		let u = A.get(j.command);
		if (!u) {
			O.addIssue({
				code: "custom",
				path: [
					"contributes",
					"keybindings",
					k,
					"command"
				],
				message: `unknown contributed command: ${j.command}`
			});
			continue;
		}
		let M = u.context ?? "global";
		j.when !== void 0 && j.when !== M && O.addIssue({
			code: "custom",
			path: [
				"contributes",
				"keybindings",
				k,
				"when"
			],
			message: "keybinding context must match its command context"
		});
	}
	!u.main && u.contributes.commands.some((u) => u.action === void 0) && O.addIssue({
		code: "custom",
		path: ["main"],
		message: "required when contributes.commands contains a worker command"
	}), !u.main && u.contributes.events.length > 0 && O.addIssue({
		code: "custom",
		path: ["main"],
		message: "required when contributes.events is non-empty"
	}), u.contributes.events.length > 0 && !u.capabilities.some((u) => u.kind === "events:subscribe") && O.addIssue({
		code: "custom",
		path: ["capabilities"],
		message: "events:subscribe capability required when contributes.events is non-empty"
	});
}
var SEMVER_RE = /^(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*))*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/, orcaEngineRangeSchema = string().max(64).regex(/^>=\d+\.\d+\.\d+$/, "must be a \">=x.y.z\" version range"), panelContributionSchema = object({
	id: pluginIdSchema,
	title: string().min(1).max(256),
	icon: string().min(1).max(64).optional(),
	entry: pluginRelativePathSchema
}), commandContributionSchema = object({
	id: pluginCommandIdSchema,
	title: string().min(1).max(256),
	context: _enum(["global", "worktree"]).optional(),
	action: pluginCommandIdSchema.optional()
});
const PLUGIN_EVENT_NAMES = [
	"worktree.created",
	"worktree.removed",
	"agent.status.changed"
], PLUGIN_EVENT_SUBSCRIPTION_LIMIT = PLUGIN_EVENT_NAMES.length;
var eventContributionSchema = object({ on: _enum(PLUGIN_EVENT_NAMES) });
object({
	manifestVersion: literal(1),
	id: pluginIdSchema,
	publisher: pluginIdSchema,
	name: string().min(1).max(256),
	version: string().regex(SEMVER_RE, "must be semver"),
	description: string().max(4096).optional(),
	author: object({
		name: string().min(1).max(256),
		url: string().max(2048).optional()
	}).optional(),
	repository: string().max(2048).optional(),
	icon: pluginRelativePathSchema.optional(),
	engines: object({ orca: orcaEngineRangeSchema }),
	pluginApi: literal(1),
	main: pluginRelativePathSchema.optional(),
	contributes: object({
		panels: array(panelContributionSchema).max(64).default([]),
		commands: array(commandContributionSchema).max(256).default([]),
		events: array(eventContributionSchema).max(PLUGIN_EVENT_SUBSCRIPTION_LIMIT).default([]),
		languagePacks: array(pluginLanguagePackContributionSchema).max(16).default([]),
		keybindings: array(pluginKeybindingContributionSchema).max(256).default([]),
		vmRecipes: array(pluginVmRecipeContributionSchema).max(64).default([]),
		agents: array(pluginAgentProfileContributionSchema).max(64).default([])
	}).strict().default(() => ({
		panels: [],
		commands: [],
		events: [],
		languagePacks: [],
		keybindings: [],
		vmRecipes: [],
		agents: []
	})),
	capabilities: array(pluginCapabilitySchema).max(32).default([])
}).superRefine(validatePluginManifestContributions);
export { PLUGIN_COMMAND_ALIAS_ACTION_IDS as n, pluginCommandKeybindingActionId as r, PLUGIN_EVENT_NAMES as t };
