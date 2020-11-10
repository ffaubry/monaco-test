const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 4200,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})