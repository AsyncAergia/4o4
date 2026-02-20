import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: "src",
    modulesDir: "wxt-modules",
    outDir: "dist",

    manifest: (env) => ({
    homepage_url: "https://github.com/AsyncAergia/4o4/tree/main",
    permissions: ['tabs'],

    ...(env.browser === 'firefox' && {
      browser_specific_settings: {
        gecko: {
          id: '4o4@AsyncAergia.io',
          data_collection_permissions: {
            required: ['none']
          }
        } as any
      }
    })
  })
});
