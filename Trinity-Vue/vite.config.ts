import { fileURLToPath, URL } from "node:url";

import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vuetify from "vite-plugin-vuetify";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: resolve(__dirname, "../wwwroot/dist"),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "trinity",
      fileName: "trinity-vue",
      formats: ["es"],
    },
  },
  plugins: [vue(), vueJsx(), splitVendorChunkPlugin(), vuetify()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
