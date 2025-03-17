import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ensure Tailwind is NOT being imported here (it's handled in postcss)
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  preview: {
    allowedHosts: ["saishaktisant.org"],
  },
});
