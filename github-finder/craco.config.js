// /** @type {import('tailwindcss').Config} */

module.exports = {
  // ...
  eslint: {
    enable: true /* (default value) */,
    mode: "extends" /* (default value) */ || "file",
    configure: {
      /* ... */
    },
    configure: (eslintConfig, { env, paths }) => {
      /* ... */
      return eslintConfig;
    },
    pluginOptions: {
      /* ... */
    },
    pluginOptions: (eslintPluginOptions, { env, paths }) => {
      /* ... */
      return eslintPluginOptions;
    },
  },
};
