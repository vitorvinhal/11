function blocksCodexPaneInput(e) {
	return !!e && !e?.dismissed;
}
function awaitsCodexRestartAnswer(e) {
	return !!e && !e?.dismissed && !e?.restartRequested;
}
export { blocksCodexPaneInput as n, awaitsCodexRestartAnswer as t };
