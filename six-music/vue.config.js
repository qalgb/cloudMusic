module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8080', // 服务器地址
        changeOrigin: true // 是否跨域
      }
    }
  }
}