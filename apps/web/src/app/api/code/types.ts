export interface CodeSession {
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
}

export interface CreateCodeSessionDTO {
  command: string;
  args?: string[];
  workingDir?: string;
  env?: Record<string, string>;
}

export interface ApproveSessionDTO {
  approved: boolean;
  reason?: string;
}

export interface ExecuteResult {
  success: boolean;
  output?: string;
  error?: string;
  exitCode?: number;
}