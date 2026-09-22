var CONNECTING_BY_STATUS = {
	disconnected: !1,
	connecting: !0,
	"auth-failed": !1,
	"deploying-relay": !0,
	connected: !1,
	reconnecting: !0,
	"reconnection-failed": !1,
	error: !1
}, CAN_CONNECT_BY_STATUS = {
	disconnected: !0,
	connecting: !1,
	"auth-failed": !0,
	"deploying-relay": !1,
	connected: !1,
	reconnecting: !1,
	"reconnection-failed": !0,
	error: !0
};
function isConnectingSshStatus(r) {
	return r ? CONNECTING_BY_STATUS[r] : !1;
}
function canConnectSshStatus(e) {
	return e ? CAN_CONNECT_BY_STATUS[e] : !1;
}
export { isConnectingSshStatus as n, canConnectSshStatus as t };
