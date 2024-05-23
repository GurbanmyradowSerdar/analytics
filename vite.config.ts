import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "components", replacement: "/src/components" },
      { find: "hooks", replacement: "/src/hooks" },
      { find: "utils", replacement: "/src/utils" },
      { find: "types", replacement: "/src/types/index.ts" },
      { find: "icons", replacement: "/public/icons" },
      { find: "images", replacement: "/public/images" },
      { find: "src", replacement: "/src" },
    ],
  },
});
