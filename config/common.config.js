const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: {
    'vue-mce.common': './src/vue-mce.ts',
  },
  output: {
    library: 'VueMce',
    libraryTarget: 'umd',
  },
  plugins: [
    new UglifyJSPlugin(),
  ],
});
