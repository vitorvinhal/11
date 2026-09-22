import { Gv as callRuntimeRpc, iC as parseExecutionHostId } from "./store-C9f8FDJV.js";
function getAutomationHostTargetKey(e) {
	return e.kind === "environment" ? `environment:${e.environmentId}` : "local";
}
function getAutomationHostTargetFromKey(e) {
	return e ? e.startsWith("environment:") ? {
		kind: "environment",
		environmentId: e.slice(12)
	} : { kind: "local" } : null;
}
function getAutomationTargetFromHostId(e) {
	let p = parseExecutionHostId(e);
	return p?.kind === "runtime" ? {
		kind: "environment",
		environmentId: p.environmentId
	} : { kind: "local" };
}
function getAutomationAuthorityTarget(e) {
	return e.kind === "runtime" ? {
		kind: "environment",
		environmentId: e.environmentId
	} : { kind: "local" };
}
function getAutomationListTarget(e) {
	let f = e?.activeRuntimeEnvironmentId?.trim();
	return f ? {
		kind: "environment",
		environmentId: f
	} : { kind: "local" };
}
function getAutomationOwnerTarget(e, f) {
	return f?.kind === "environment" ? f : getAutomationTargetFromHostId(e.runContext?.hostId);
}
function toRuntimeAutomationCreateInput(e) {
	let { projectId: f, workspaceId: p, ...m } = e;
	return {
		...m,
		repo: `id:${f}`,
		workspace: e.workspaceMode === "existing" && p ? `id:${p}` : void 0
	};
}
function toRuntimeAutomationUpdateInput(e) {
	let { projectId: f, workspaceId: p, ...m } = e;
	return {
		...m,
		...f === void 0 ? {} : { repo: `id:${f}` },
		...p === void 0 ? {} : { workspace: p ? `id:${p}` : void 0 }
	};
}
async function listAutomationsForTarget(f) {
	return (await callRuntimeRpc(f, "automation.list", void 0, { timeoutMs: 15e3 })).automations;
}
async function listAutomationRunsForTarget(f, p) {
	return (await callRuntimeRpc(f, "automation.runs", { automationId: p }, { timeoutMs: 15e3 })).runs;
}
async function updateAutomationForTarget(f, p, m) {
	return (await callRuntimeRpc(getAutomationOwnerTarget(f, m), "automation.update", {
		id: f.id,
		updates: toRuntimeAutomationUpdateInput(p)
	}, { timeoutMs: 15e3 })).automation;
}
async function deleteAutomationForTarget(f, p) {
	await callRuntimeRpc(getAutomationOwnerTarget(f, p), "automation.delete", { id: f.id }, { timeoutMs: 15e3 });
}
async function runAutomationNowForTarget(f, p) {
	return (await callRuntimeRpc(getAutomationOwnerTarget(f, p), "automation.runNow", { id: f.id }, { timeoutMs: 15e3 })).run;
}
export { getAutomationListTarget as a, listAutomationRunsForTarget as c, toRuntimeAutomationCreateInput as d, toRuntimeAutomationUpdateInput as f, getAutomationHostTargetKey as i, listAutomationsForTarget as l, getAutomationAuthorityTarget as n, getAutomationOwnerTarget as o, updateAutomationForTarget as p, getAutomationHostTargetFromKey as r, getAutomationTargetFromHostId as s, deleteAutomationForTarget as t, runAutomationNowForTarget as u };
