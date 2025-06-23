import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { imageResolver } from "./src/plugins/image-resolver";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    imageResolver(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure assets in public folder are properly handled
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'radix-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-slot',
            '@radix-ui/react-separator'
          ],
          'query': ['@tanstack/react-query'],
        },
      },
    },
    // Increase chunk size warning limit since we're now splitting properly
    chunkSizeWarningLimit: 1000,
  },
}));
