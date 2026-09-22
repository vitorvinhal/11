function getShortcutPlatform() {
	return navigator.userAgent.includes("Mac") ? "darwin" : navigator.userAgent.includes("Windows") ? "win32" : "linux";
}
export { getShortcutPlatform as t };
