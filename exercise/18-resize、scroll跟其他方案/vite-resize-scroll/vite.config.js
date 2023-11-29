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
        scroll: resolve(__dirname, "src/scroll.html"),
        "match-media": resolve(__dirname, "src/match-media.html"),
        "intersection-observer.html": resolve(__dirname, "src/intersection-observer.html"),
        scrolling: resolve(__dirname, "src/scrolling.html"),
      },
    },
  },
  plugins: [
    // 把 eslint show 到畫面上
    eslint(),
  ],
});
