/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",     // simulate browser DOM
    globals: true,            // allow global describe/it/expect
    setupFiles: "./src/setupTests.js",  // optional but recommended
  },
});
