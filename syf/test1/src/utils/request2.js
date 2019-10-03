import axios from 'axios'

// 创建axios实例
if (process.env.NODE_ENV == 'development') { //测试用
  //http://lantian-api.lanland.vip
  //http://lantian-api-test.netmi.com.cn
  //https://merchant-api-f.netmi.com.cn
  //https://merchant-api-test.netmi.com.cn
  //window.location.origin
  axios.defaults.baseURL = 'http://localhost:8085';
  //http://118.31.62.251/syf/php
  //   /apis/syf/php
}else{
  axios.defaults.baseURL = '/node';
}
const service2 = axios.create({
  timeout: 10000, // 请求超时时间
})

export default service2
