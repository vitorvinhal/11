const COMPUTER_AWAKE_MODES = [
	"on",
	"off",
	"auto"
];
function normalizeComputerAwakeMode(t, n) {
	let r = COMPUTER_AWAKE_MODES.includes(t) ? t : null;
	return r ? typeof n == "boolean" && n !== (r !== "off") ? n ? "auto" : "off" : r : n === !0 ? "auto" : "off";
}
function computerAwakeSettingsForMode(e) {
	return {
		computerAwakeMode: e,
		keepComputerAwakeWhileAgentsRun: e !== "off"
	};
}
export { normalizeComputerAwakeMode as n, computerAwakeSettingsForMode as t };
