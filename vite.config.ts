import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import tsr from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [tsr()],
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__server.func",
      publicDir: ".vercel/output/static",
    },
  },
});
