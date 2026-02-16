import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: "src",
    modulesDir: "wxt-modules",
    outDir: "dist",
    manifest: {
        web_accessible_resources: [
            {
                resources: ["/assets/*"],
                matches: ["<all_urls>"]
            }
        ]
  }
});
