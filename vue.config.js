// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', false)
    config.module
      .rule('media')
      .test(/\.(mov|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .end()
  },
}
