import { preview } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const server = await preview({
  configFile: false,
  root,
  preview: { port: 4173, strictPort: false, host: true },
});

server.printUrls();
console.log("\n  Open: http://127.0.0.1:4173/\n");
