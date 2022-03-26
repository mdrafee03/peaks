// development config
const { merge } = require('webpack-merge');
const commonConfig = require('./common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: ['webpack-dev-server/client?http://localhost:3001', 'src/index.tsx'],
  devServer: {
    hot: 'only',
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefreshWebpackPlugin()],
});
