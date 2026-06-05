import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // 1. Ενεργοποίηση minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Αφαιρεί τα console.log για μικρότερο μέγεθος
        drop_debugger: true,
      },
    },
    // 2. Split chunks για να μην είναι ένα τεράστιο αρχείο
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Βάζει τις βιβλιοθήκες σε ξεχωριστό αρχείο
          }
        },
      },
    },
  },
});
