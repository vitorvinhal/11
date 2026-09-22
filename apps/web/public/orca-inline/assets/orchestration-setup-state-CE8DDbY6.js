import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { Ng as getSingleFocusedRuntimeEnvironmentId, Yv as getActiveRuntimeTarget, t as useAppStore } from "./store-C9f8FDJV.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), UNRESOLVED = Symbol("skill-discovery-runtime-unresolved");
function useActiveSkillDiscoveryRuntimeTarget() {
	let _ = useAppStore((_) => {
		if (!_.runtimeEnvironmentCatalogSettled) return UNRESOLVED;
		let z = getSingleFocusedRuntimeEnvironmentId(_);
		return z ? formatOwnerKey(z, getPairingRevision(_.runtimeEnvironments, z)) : null;
	});
	return (0, import_react.useMemo)(() => _ === UNRESOLVED ? null : getActiveRuntimeTarget({ activeRuntimeEnvironmentId: parseOwnerKey(_) }), [_]);
}
function formatOwnerKey(_, z) {
	return `${z ?? ""}:${_}`;
}
function parseOwnerKey(_) {
	return _ === null ? null : _.slice(_.indexOf(":") + 1);
}
function getPairingRevision(_, z) {
	let B = _.find((_) => _.id === z);
	return B ? B.pairingRevision ?? B.createdAt : void 0;
}
function isUsableSkillsCliAgentKey(_) {
	return /^(?:\*|[a-z0-9][a-z0-9.-]*)$/i.test(_);
}
const ORCA_CLI_SKILL_NAME = "orca-cli", COMPUTER_USE_SKILL_NAME = "computer-use", ORCHESTRATION_SKILL_NAME = "orchestration", EPHEMERAL_VMS_SKILL_NAME = "orca-per-workspace-env", ORCA_LINEAR_SKILL_NAME = "orca-linear", LINEAR_TICKETS_SKILL_NAME = "linear-tickets", LINEAR_AGENT_SKILL_NAMES = [ORCA_LINEAR_SKILL_NAME, LINEAR_TICKETS_SKILL_NAME];
function buildAgentFeatureSkillInstallArgs(_, z = {}) {
	if (_.length === 0) throw Error("At least one skill name is required.");
	let B = z.global ?? !0, V = z.agents ?? [];
	if (z.yes && V.length === 0) throw Error("An install target is required when skipping prompts.");
	let H = V.find((_) => !isUsableSkillsCliAgentKey(_));
	if (H !== void 0) throw Error(`"${H}" is not a usable install target.`);
	return [
		"skills",
		"add",
		"https://github.com/stablyai/orca",
		..._.flatMap((_) => ["--skill", _]),
		...B ? ["--global"] : [],
		...V.flatMap((_) => ["--agent", _]),
		...z.yes ? ["-y"] : []
	];
}
function buildAgentFeatureSkillInstallCommand(_, z = {}) {
	return `npx ${buildAgentFeatureSkillInstallArgs(_, z).join(" ")}`;
}
function buildAgentFeatureSkillUpdateArgs(_, z = {}) {
	let B = (typeof _ == "string" ? [_] : _).map((_) => _.trim()).filter((_) => _.length > 0);
	if (B.length === 0) throw Error("A skill name is required.");
	let V = z.global ?? !0;
	return [
		"skills",
		"update",
		...B,
		V ? "--global" : "--project",
		...z.yes ? ["-y"] : []
	];
}
function buildAgentFeatureSkillUpdateCommand(_, z = {}) {
	return `npx ${buildAgentFeatureSkillUpdateArgs(_, z).join(" ")}`;
}
const ORCA_CLI_SKILL_INSTALL_COMMAND = buildAgentFeatureSkillInstallCommand([ORCA_CLI_SKILL_NAME]), ORCA_CLI_SKILL_UPDATE_COMMAND = buildAgentFeatureSkillUpdateCommand(ORCA_CLI_SKILL_NAME), COMPUTER_USE_SKILL_INSTALL_COMMAND = buildAgentFeatureSkillInstallCommand([COMPUTER_USE_SKILL_NAME]), COMPUTER_USE_SKILL_UPDATE_COMMAND = buildAgentFeatureSkillUpdateCommand(COMPUTER_USE_SKILL_NAME), ORCHESTRATION_SKILL_INSTALL_COMMAND = buildAgentFeatureSkillInstallCommand([ORCHESTRATION_SKILL_NAME]), ORCHESTRATION_SKILL_UPDATE_COMMAND = buildAgentFeatureSkillUpdateCommand(ORCHESTRATION_SKILL_NAME), EPHEMERAL_VMS_SKILL_INSTALL_COMMAND = buildAgentFeatureSkillInstallCommand([EPHEMERAL_VMS_SKILL_NAME]), EPHEMERAL_VMS_SKILL_UPDATE_COMMAND = buildAgentFeatureSkillUpdateCommand(EPHEMERAL_VMS_SKILL_NAME), ORCA_CLI_ORCHESTRATION_SKILL_INSTALL_COMMAND = buildAgentFeatureSkillInstallCommand([ORCA_CLI_SKILL_NAME, ORCHESTRATION_SKILL_NAME]), ORCA_LINEAR_SKILL_INSTALL_COMMAND = buildAgentFeatureSkillInstallCommand([ORCA_LINEAR_SKILL_NAME]), ORCA_LINEAR_SKILL_UPDATE_COMMAND = buildAgentFeatureSkillUpdateCommand(ORCA_LINEAR_SKILL_NAME), LINEAR_TICKETS_SKILL_UPDATE_COMMAND = buildAgentFeatureSkillUpdateCommand(LINEAR_TICKETS_SKILL_NAME), ORCHESTRATION_SETUP_STATE_EVENT = "orca:orchestration-setup-state", ORCHESTRATION_ENABLED_STORAGE_KEY = "orca.orchestration.enabled", ORCHESTRATION_SETUP_DISMISSED_STORAGE_KEY = "orca.orchestration.setupDismissed";
function isOrchestrationSetupEnabled() {
	return localStorage.getItem(ORCHESTRATION_ENABLED_STORAGE_KEY) === "1";
}
function hasOrchestrationSetupMarker() {
	return isOrchestrationSetupEnabled();
}
function markOrchestrationSetupComplete() {
	localStorage.setItem(ORCHESTRATION_ENABLED_STORAGE_KEY, "1"), notifyOrchestrationSetupStateChanged();
}
function isOrchestrationSetupDismissed() {
	return localStorage.getItem(ORCHESTRATION_SETUP_DISMISSED_STORAGE_KEY) === "1";
}
function notifyOrchestrationSetupStateChanged() {
	window.dispatchEvent(new CustomEvent(ORCHESTRATION_SETUP_STATE_EVENT));
}
export { ORCA_LINEAR_SKILL_UPDATE_COMMAND as C, buildAgentFeatureSkillInstallCommand as D, ORCHESTRATION_SKILL_UPDATE_COMMAND as E, useActiveSkillDiscoveryRuntimeTarget as O, ORCA_LINEAR_SKILL_NAME as S, ORCHESTRATION_SKILL_NAME as T, ORCA_CLI_ORCHESTRATION_SKILL_INSTALL_COMMAND as _, isOrchestrationSetupDismissed as a, ORCA_CLI_SKILL_UPDATE_COMMAND as b, COMPUTER_USE_SKILL_INSTALL_COMMAND as c, EPHEMERAL_VMS_SKILL_INSTALL_COMMAND as d, EPHEMERAL_VMS_SKILL_NAME as f, LINEAR_TICKETS_SKILL_UPDATE_COMMAND as g, LINEAR_TICKETS_SKILL_NAME as h, hasOrchestrationSetupMarker as i, COMPUTER_USE_SKILL_NAME as l, LINEAR_AGENT_SKILL_NAMES as m, ORCHESTRATION_SETUP_DISMISSED_STORAGE_KEY as n, markOrchestrationSetupComplete as o, EPHEMERAL_VMS_SKILL_UPDATE_COMMAND as p, ORCHESTRATION_SETUP_STATE_EVENT as r, notifyOrchestrationSetupStateChanged as s, ORCHESTRATION_ENABLED_STORAGE_KEY as t, COMPUTER_USE_SKILL_UPDATE_COMMAND as u, ORCA_CLI_SKILL_INSTALL_COMMAND as v, ORCHESTRATION_SKILL_INSTALL_COMMAND as w, ORCA_LINEAR_SKILL_INSTALL_COMMAND as x, ORCA_CLI_SKILL_NAME as y };
