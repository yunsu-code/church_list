import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  base: "/church_list/",
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve("src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@store",
        replacement: path.resolve(__dirname, "src/store"),
      },
      {
        find: "@data",
        replacement: path.resolve(__dirname, "src/data"),
      },
    ],
  },
});
