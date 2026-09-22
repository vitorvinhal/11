#!/usr/bin/env node
/**
 * Desktop App Server Entry Point
 * Starts both Router9 (port 3002) and PC Agent (port 3001)
 */

import { createRouter9Server } from "./router9";
import { httpServer as pcAgentHttpServer } from "./pc-agent/server";

// Ports
const ROUTER9_PORT = parseInt(process.env.ROUTER9_PORT || "3002", 10);
const PC_AGENT_PORT = parseInt(process.env.PC_AGENT_PORT || "3001", 10);

async function start() {
  console.log("[Desktop] Starting 11 Desktop services...");

  // Start Router9 (file operations, media analysis, STT)
  const router9Server = createRouter9Server();
  const router9Http = router9Server.listen(ROUTER9_PORT, () => {
    console.log(`[Router9] HTTP server running on port ${ROUTER9_PORT}`);
  });

  // Start PC Agent (session management, WebSocket)
  const pcAgentHttp = pcAgentHttpServer.listen(PC_AGENT_PORT, () => {
    console.log(`[PC Agent] HTTP server running on port ${PC_AGENT_PORT}`);
    console.log(`[PC Agent] WebSocket server running on port ${PC_AGENT_PORT}`);
  });

  // Graceful shutdown
  process.on("SIGINT", () => {
    console.log("\n[Desktop] Shutting down...");
    router9Http.close();
    pcAgentHttp.close();
    process.exit(0);
  });

  process.on("SIGTERM", () => {
    console.log("\n[Desktop] Shutting down...");
    router9Http.close();
    pcAgentHttp.close();
    process.exit(0);
  });
}

start().catch((err) => {
  console.error("[Desktop] Failed to start:", err);
  process.exit(1);
});
