import type { AgentState } from "../types";
export declare function getAgentState(userId: string): Promise<AgentState | null>;
export declare function setAgentState(userId: string, mood: AgentState["mood"]): Promise<void>;
