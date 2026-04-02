import { defineConfig } from "vite";

/** Relative asset paths so `dist/index.html` works opened directly (file://) without a server. */
export default defineConfig({
  base: "./",
});
