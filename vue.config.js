module.exports = {
  devServer: {
    host: 'localhost',
    // 项目启动端口
    port: 8080,
    // 代理
    proxy: {
      // 访问 /api 进行拦截
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          // 为了统一前端请求接口，规定请求必须以 api 开头，如果后端接口路径中没有 api ，则向下面一样重写
          '/api': ''
        }
      }
    }
  }
}
