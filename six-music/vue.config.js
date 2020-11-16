module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3000', // 服务器地址
        changeOrigin: true // 是否跨域
      }
    }
  }
}