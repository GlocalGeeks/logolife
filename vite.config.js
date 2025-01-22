import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps for production
    minify: "esbuild", // Use esbuild for faster and smaller builds
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
