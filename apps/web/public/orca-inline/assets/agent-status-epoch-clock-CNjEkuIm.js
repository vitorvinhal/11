function createAgentStatusEpochClock(e = () => Date.now()) {
	let t = null, n = 0;
	return (r) => (t !== r && (t = r, n = e()), n);
}
var sharedClock = createAgentStatusEpochClock();
const getAgentStatusEpochNow = (e) => sharedClock(e);
export { getAgentStatusEpochNow as t };
