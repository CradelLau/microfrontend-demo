// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
const packageName = 'sys'

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.output.set('library', `${packageName}-[name]`)
    config.output.set('libraryTarget', 'umd')
    config.output.set('jsonpFunction', `webpackJsonp_${packageName}`)
    config.devServer
      .headers({
        'Access-Control-Allow-Origin': '*',
      })
      .set('disableHostCheck', true)
    config.plugin("html").tap(args => {
      args[0].minify = false;
      return args;
    })
  },
}
