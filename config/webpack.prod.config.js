const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')
const webpackDefinePlugin = require('./webpack.define.plugin')

const common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [new MiniCssExtractPlugin(), webpackDefinePlugin(false)],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: ['...', new CssMinimizerWebpackPlugin()]
  }
})
