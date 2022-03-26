// production config
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: 'src/index.tsx',
  output: {
    filename: 'js/bundle.[contenthash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
