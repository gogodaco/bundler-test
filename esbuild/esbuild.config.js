const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: [path.resolve(__dirname, './src/index.js')],
  bundle: true,
  outfile: path.resolve(__dirname, './dist/bundle.js')
}).catch(err => {
  console.error(err);
  process.exit(1);
})