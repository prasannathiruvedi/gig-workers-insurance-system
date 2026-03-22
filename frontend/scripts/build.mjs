import { build } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

await build({
  configFile: false,
  root,
  plugins: [react()],
  build: {
    reportCompressedSize: false,
  },
});

console.log("Build finished.");
