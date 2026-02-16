import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: "src",
    modulesDir: "wxt-modules",
    outDir: "dist",
    manifest: {
    homepage_url: "https://github.com/AsyncAergia/4o4/tree/main",
    permissions: ['tabs'],
  }
});
