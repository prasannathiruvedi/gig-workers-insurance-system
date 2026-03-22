/**
 * Frees TCP port 5173 (stale Node/Vite) then starts the dev server.
 * Use this when localhost:5173 is blank or the Network tab shows no requests.
 */
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const killPort = require("kill-port");

try {
  await killPort(5173);
  console.log("Stopped whatever was using port 5173.\n");
} catch {
  // Nothing listening, or kill-port couldn't find a PID — safe to continue
}

await import("./dev.mjs");
