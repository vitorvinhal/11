/**
 * Contracts do Agente de Dispositivo (PC / Mobile).
 * Compartilhados entre web (nuvem), desktop e mobile via @11/shared.
 */
export type DevicePlatform = "desktop-app" | "mobile-app";
export type DeviceStatus = "online" | "offline" | "never";
export interface DeviceInfo {
    deviceId: string;
    userId: string;
    platform: DevicePlatform;
    displayName?: string;
    os?: string;
    osVersion?: string;
    model?: string;
    appVersion?: string;
    lastSeen?: string;
    status?: DeviceStatus;
}
export interface RegisterDeviceInput {
    deviceId: string;
    platform: DevicePlatform;
    displayName?: string;
    os?: string;
    osVersion?: string;
    model?: string;
    appVersion?: string;
}
export interface RegisterDeviceResult {
    device: DeviceInfo;
    /** Segredo de pareamento (retornado apenas na criação). Usado como Bearer local. */
    secret?: string;
    created: boolean;
}
export type DeviceToolName = "device.fs_list" | "device.fs_read" | "device.fs_write" | "device.fs_delete" | "device.fs_copy" | "device.fs_move" | "device.exec" | "device.media_list" | "device.media_open" | "device.media_import" | "device.apps_list" | "device.apps_launch" | "device.settings_get" | "device.settings_set" | "device.screen_shot" | "device.system_info" | "device.system_battery" | "device.system_processes" | "device.system_network" | "device.system_clipboard" | "device.system_notify";
export type DeviceToolStatus = "queued" | "running" | "completed" | "failed" | "rejected" | "cancelled" | "timeout";
export interface DeviceToolCall {
    id: string;
    deviceId: string;
    name: DeviceToolName;
    arguments: Record<string, unknown>;
    status: DeviceToolStatus;
    requiresApproval?: boolean;
    createdAt?: string;
    startedAt?: string;
    completedAt?: string;
}
export interface DeviceToolResult {
    id: string;
    status: "completed" | "failed" | "rejected" | "timeout" | "cancelled";
    output?: unknown;
    error?: string;
    exitCode?: number;
    durationMs?: number;
    truncated?: boolean;
}
export type GatewayMessageType = "hello" | "hello_ack" | "tool_dispatch" | "tool_result" | "tool_status" | "approval_request" | "approval_response" | "ping" | "pong" | "error";
export interface GatewayMessage {
    type: GatewayMessageType;
    deviceId?: string;
    toolCall?: DeviceToolCall;
    result?: DeviceToolResult;
    approved?: boolean;
    reason?: string;
    error?: string;
    timestamp?: string;
    requestId?: string;
}
