// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

import commonjs from "@rollup/plugin-commonjs";
import path from 'path';

console.log(path.resolve('.', './src/bold.cjs'));

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: { url: "/" },
  },
  plugins: [],
  packageOptions: {
    rollup: {
      plugins: [commonjs('.cjs')]
    },
    namedExports: [ path.resolve('.', './src/bold.cjs')]
    /* ... */
  },
  devOptions: {
    open: "none",
  },
  buildOptions: {
    /* ... */
  },
};
