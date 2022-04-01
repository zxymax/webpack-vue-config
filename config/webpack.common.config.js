const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const helpers = require('./helpers')

/*
*/

const __base = path.resolve(__dirname, '..')
const __src = path.resolve(__base, 'src')


module.exports = {
  entry: {
    app: helpers.root('src', 'main')
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webapck base config',
      favicon: helpers.assetsPath('favicon.ico'),
      template: helpers.root('public', 'index.html')
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    alias: {
      '@static': helpers.root('./static')
    }
  }
}
