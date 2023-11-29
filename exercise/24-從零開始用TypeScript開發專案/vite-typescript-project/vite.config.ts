import { resolve } from "path";
import { defineConfig } from "vite";

// https://www.npmjs.com/package/vite-plugin-eslint
import eslint from "vite-plugin-eslint";
// import checker from "vite-plugin-checker";

export default defineConfig({
  root: "src",
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
      output: {
        dir: resolve(__dirname, "dist"),
      },
    },
  },
  plugins: [
    // checker({
    //   typescript: true,
    // }),
    eslint(),
  ],
});
