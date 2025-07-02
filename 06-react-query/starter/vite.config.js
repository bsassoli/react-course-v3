import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["fsevents"], // <-- prevent Vite from bundling this native module
    },
  },
  optimizeDeps: {
    exclude: ["fsevents"], // <-- avoid pre-bundling it during dev
  },
});
