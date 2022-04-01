const webpack = require('webpack')

module.exports = function webpackDefinePlugin(flag) {
  return new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: flag,
    __VUE_PROD_DEVTOOLS__: flag
  })
}
