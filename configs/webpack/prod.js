// production config
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  context: resolve(__dirname, '../..'),
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[contenthash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [new ForkTsCheckerWebpackPlugin()],
});
