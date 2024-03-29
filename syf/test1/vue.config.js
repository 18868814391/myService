const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  devServer: {
    // http://lantian-api.lanland.vip
    // http://lantian-home-test.netmi.com.cn  /netmi-shop-h5/dist/
    //http://118.31.62.251/syf/php
    //http://localhost/phpdemo/syf/php
    //http://118.31.62.251/apis/syf/php
    //http://www.shenyifan.top/wechat/
    //https://www.shenyifan.top/apis/syf/php/novel/lightNovelList.php
    //https://www.shenyifan.top/apis/syf/php/yii/web/index.php?r=socketdata/getmessage
    //http://localhost/phpdemo/syf/php
    proxy: 'https://www.shenyifan.top/apis/syf/php'
  },
  outputDir: 'dist',
  baseUrl: process.env.NODE_ENV === 'production' ? './' : './',
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "@/style/common.scss";`
  //     }
  //   }
  // },
  // pluginOptions: {
  //   i18n: {
  //     locale: 'zh',
  //     fallbackLocale: 'zh',
  //     localeDir: 'locales',
  //     enableInSFC: true
  //   }
  // },
  configureWebpack:{
    // optimization: {
    //   minimizer: [
    //     new UglifyJsPlugin({
    //       uglifyOptions: {
    //         compress: {
    //           warnings: false,
    //           drop_console: true,//console
    //           drop_debugger: false,
    //           pure_funcs: ['console.log']//移除console
    //         }
    //       }
    //   })
    // ]
    // },
    //    plugins: [

    //         new webpack.ProvidePlugin({
      
    //           $:"jquery",
      
    //           jQuery:"jquery",
      
    //           "windows.jQuery":"jquery"
      
    //         })
      
    //       ]  
  }
}