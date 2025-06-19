import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: Object.assign(
    {
      port: 5137,
    },
    isDev &&
      fs.existsSync("./certs/key.pem") &&
      fs.existsSync("./certs/cert.pem")
      ? {
          https: {
            key: fs.readFileSync("./certs/key.pem"),
            cert: fs.readFileSync("./certs/cert.pem"),
          },
        }
      : {}
  ),
});
