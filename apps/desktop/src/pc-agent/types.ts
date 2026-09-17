export interface PCSession {
  id: string;
  userId: string;
  command: string;
  args: string[];
  workingDir?: string;
  env?: Record<string, string>;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled' | 'rejected';
  output?: string;
  error?: string;
  exitCode?: number;
  startedAt?: string;
  completedAt?: string;
  approved?: boolean;
  approvedBy?: string;
  approvedAt?: string;
  createdAt: string;
  updatedAt: string;
  deviceId?: string;
}

export interface CreatePCSessionDTO {
  command: string;
  args?: string[];
  workingDir?: string;
  env?: Record<string, string>;
  deviceId?: string;
}

export interface ApprovePCSessionDTO {
  approved: boolean;
  reason?: string;
}

export interface WSMessage {
  type: 'session_create' | 'session_approve' | 'session_cancel' | 'session_status' | 'session_output' | 'ping' | 'pong' | 'error';
  payload: any;
  requestId?: string;
}