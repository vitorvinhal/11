import { _l as getConnectionIdForFileFromState, t as useAppStore, vl as getConnectionIdFromState, vv as parseWorkspaceKey } from "./store-C9f8FDJV.js";
function getConnectionId(e) {
	return getConnectionIdFromState(useAppStore.getState(), e);
}
function isWorktreeConnectionResolved(e) {
	return !e || parseWorkspaceKey(e)?.type === "folder" ? !0 : getConnectionId(e) !== void 0;
}
function getConnectionIdForFile(a, o) {
	return getConnectionIdForFileFromState(useAppStore.getState(), a, o);
}
export { getConnectionIdForFile as n, isWorktreeConnectionResolved as r, getConnectionId as t };
