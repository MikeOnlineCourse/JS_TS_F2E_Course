import { resolve } from "path";
import { defineConfig } from "vite";

// https://www.npmjs.com/package/vite-plugin-eslint
import eslint from "vite-plugin-eslint";

export default defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
  plugins: [
    // 把 eslint show 到畫面上
    eslint(),
  ],
});
