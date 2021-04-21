/**
 * Created by OXOYO on 2019/5/31.
 *
 * cli 配置文件
 *
 * 文档：npm install babel-core babel-loader babel-plugin-transform-runtime -D
 */

const webpack = require('webpack')

module.exports = {
  // 部署应用包时的基本URL，置空使用相对路径
  publicPath: '',
  // 打包输出目录
  outputDir: 'docs',
  // 静态资源目录
  assetsDir: '',
  productionSourceMap: false,
  // 开发环境
  /*devServer: {
    // 代理设置
    proxy: {
      '/api': {
        target: 'http://testflight.jokco.com/eFileAnalysis/yy',
        changeOrigin: true,
        pathRewrite:{  // 路径重写，
          '^/api': ''  // 替换target中的请求地址，也就是说/api=/target，请求target这个地址的时候直接写成/api即可。
        }
      }
    }
  },*/
  css: {
    loaderOptions: {
      less: {
        // 解决https://github.com/ant-design/ant-motion/issues/44问题
        // 相关问题：https://github.com/ant-design/ant-design/issues/7927#issuecomment-372513256
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    output: {
      // path: `${root}/public/assets/`,
      // publicPath: '/lead/assets',
      // filename: `${fileName()}.js`,
      chunkFilename: '[name].[chunkhash].js'
    }
  }
}
