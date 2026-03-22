import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const server = await createServer({
  configFile: false,
  root,
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    // Listen on all interfaces so both http://127.0.0.1 and http://localhost work
    // (Windows often resolves localhost to IPv6; binding only 127.0.0.1 can leave ::1 hanging).
    host: true,
    // Opens the correct URL in the browser (with :5173). Typing only http://127.0.0.1/ uses port 80 and will hang.
    open: true,
  },
});

await server.listen();
server.printUrls();
console.log(
  "\n  ━━ Must include port 5173 ━━\n" +
    "  Correct:  http://127.0.0.1:5173/   or   http://localhost:5173/\n" +
    "  Wrong:    http://127.0.0.1/        (port 80 — not Vite — request stays Pending)\n"
);
