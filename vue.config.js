const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy: {
      '/': { // 匹配所有以'/api1' 开头的请求路径
        ws:false,
        target: 'https://shendanyang.love', // 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/':'/'}
      },
    }
  },
})
