const SYSTEM_DEFAULT_MICROPHONE_SELECT_VALUE = "system-default";
var AGGREGATE_DEVICE_IDS = new Set(["default", "communications"]), BASE_AUDIO_CONSTRAINTS = {
	channelCount: 1,
	echoCancellation: !0,
	noiseSuppression: !0,
	autoGainControl: !0
};
function normalizeMicrophoneDeviceId(e) {
	if (typeof e != "string") return null;
	let s = e.trim();
	return s.length === 0 || AGGREGATE_DEVICE_IDS.has(s) ? null : s;
}
function buildAudioCaptureConstraints(e) {
	let o = normalizeMicrophoneDeviceId(e);
	return o ? { audio: {
		...BASE_AUDIO_CONSTRAINTS,
		deviceId: { exact: o }
	} } : { audio: { ...BASE_AUDIO_CONSTRAINTS } };
}
function isMicrophoneDeviceConstraintError(e) {
	if (!e || typeof e != "object") return !1;
	let o = "name" in e ? String(e.name) : "";
	return o === "OverconstrainedError" || o === "NotFoundError";
}
function listVoiceMicrophoneDevices(e) {
	return e.filter((e) => e.kind === "audioinput" && normalizeMicrophoneDeviceId(e.deviceId) !== null).map((e, o) => ({
		deviceId: e.deviceId.trim(),
		label: e.label.trim() || `Microphone ${o + 1}`
	}));
}
function findSoleDeviceByLabel(e, o) {
	let s = o?.trim().toLowerCase();
	if (!s) return null;
	let c = e.filter((e) => e.label.trim().toLowerCase() === s);
	return c.length === 1 ? c[0] ?? null : null;
}
function resolveMicrophoneDevice(e) {
	let o = normalizeMicrophoneDeviceId(e.preferredDeviceId);
	if (!o) return {
		deviceId: null,
		kind: "system-default"
	};
	if (!e.devices || e.devices.length === 0) return {
		deviceId: o,
		kind: "unknown"
	};
	if (e.devices.some((e) => e.deviceId === o)) return {
		deviceId: o,
		kind: "exact"
	};
	let s = findSoleDeviceByLabel(e.devices, e.preferredDeviceLabel);
	return s ? {
		deviceId: s.deviceId,
		kind: "relabeled"
	} : {
		deviceId: null,
		kind: "missing"
	};
}
async function enumerateMicrophonesOrNull(e) {
	if (!e) return null;
	try {
		return listVoiceMicrophoneDevices(await e());
	} catch {
		return null;
	}
}
async function openMicrophoneCaptureStream(e) {
	let o = normalizeMicrophoneDeviceId(e.preferredDeviceId);
	if (!o) return {
		stream: await e.getUserMedia(buildAudioCaptureConstraints(null)),
		fellBackToDefaultMicrophone: !1,
		usedDeviceId: null
	};
	let s = resolveMicrophoneDevice({
		devices: await enumerateMicrophonesOrNull(e.enumerateDevices),
		preferredDeviceId: o,
		preferredDeviceLabel: e.preferredDeviceLabel
	});
	if (s.kind === "missing") return {
		stream: await e.getUserMedia(buildAudioCaptureConstraints(null)),
		fellBackToDefaultMicrophone: !0,
		usedDeviceId: null
	};
	let d = s.deviceId ?? o;
	try {
		return {
			stream: await e.getUserMedia(buildAudioCaptureConstraints(d)),
			fellBackToDefaultMicrophone: !1,
			usedDeviceId: d
		};
	} catch (o) {
		if (!isMicrophoneDeviceConstraintError(o)) throw o;
		return {
			stream: await e.getUserMedia(buildAudioCaptureConstraints(null)),
			fellBackToDefaultMicrophone: !0,
			usedDeviceId: null
		};
	}
}
function microphoneDeviceIdFromSelectValue(e) {
	return e === "system-default" ? null : normalizeMicrophoneDeviceId(e);
}
function buildVoiceMicrophoneSelectOptions(o) {
	let s = [{
		value: SYSTEM_DEFAULT_MICROPHONE_SELECT_VALUE,
		label: o.systemDefaultLabel
	}, ...o.devices.map((e) => ({
		value: e.deviceId,
		label: e.label
	}))], l = resolveMicrophoneDevice({
		devices: o.devicesKnown ? o.devices : null,
		preferredDeviceId: o.preferredDeviceId,
		preferredDeviceLabel: o.preferredDeviceLabel
	});
	if (l.kind === "system-default") return {
		options: s,
		selectedValue: SYSTEM_DEFAULT_MICROPHONE_SELECT_VALUE
	};
	if (l.kind === "exact" || l.kind === "relabeled") return {
		options: s,
		selectedValue: l.deviceId ?? "system-default"
	};
	let u = normalizeMicrophoneDeviceId(o.preferredDeviceId);
	if (!u) return {
		options: s,
		selectedValue: SYSTEM_DEFAULT_MICROPHONE_SELECT_VALUE
	};
	let d = o.preferredDeviceLabel?.trim(), f = d && d.length > 0 ? d : u;
	return s.push(l.kind === "missing" ? {
		value: u,
		label: `${f} (${o.unavailableSuffix})`,
		unavailable: !0
	} : {
		value: u,
		label: f
	}), {
		options: s,
		selectedValue: u
	};
}
export { openMicrophoneCaptureStream as i, listVoiceMicrophoneDevices as n, microphoneDeviceIdFromSelectValue as r, buildVoiceMicrophoneSelectOptions as t };
