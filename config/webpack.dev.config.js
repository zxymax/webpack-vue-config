const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')
const webpackDefinePlugin = require('./webpack.define.plugin')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [webpackDefinePlugin(true)],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true,
    hot: true
  }
})
