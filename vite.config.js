/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // 👈 tells Vitest to simulate a browser
    globals: true,        // allows using describe(), it(), expect() without import
    setupFiles: "./src/setupTests.js", // optional, for extra setup
  },
});
