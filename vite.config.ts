import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import getGitInfo from "git-repo-info";
import mdx from "@mdx-js/rollup";

import { version } from "./package.json";

const info = getGitInfo(process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      modernPolyfills: ["es/global-this"],
    }),
    mdx({
      providerImportSource: "@mdx-js/react",
    }),
  ],
  build: {
    sourcemap: false,
  },
  define: {
    __APP_VERSION__: JSON.stringify(`v${version}+${info.sha.substring(0, 6)}`),
  },
  resolve: {
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
});
