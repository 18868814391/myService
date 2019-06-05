import axios from 'axios'
// import { Toast } from 'vant';
// import store from '../store'
// import { getToken } from '@/utils/auth'

// 创建axios实例
if (process.env.NODE_ENV == 'development') { //测试用
  //http://lantian-api.lanland.vip
  //http://lantian-api-test.netmi.com.cn
  //https://merchant-api-f.netmi.com.cn
  //https://merchant-api-test.netmi.com.cn
  //window.location.origin
  // axios.defaults.baseURL = 'http://localhost/phpdemo/syf/php';
  //http://118.31.62.251/syf/php
}else{
  axios.defaults.baseURL = 'http://118.31.62.251/syf/php';
}
const service = axios.create({
  timeout: 10000, // 请求超时时间
})

// request拦截器
// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     return config
//   },
//   error => {
//     // Do something with request error
//     Promise.reject(error)
//   }
// )

// response 拦截器
// service.interceptors.response.use(
//   response => {
//     /**
//      * code为非20000是抛错 可结合自己业务进行修改
//      */
//     const res = response.data
//     if (res.errcode !== 0) {
//       if (res.errcode==10000||res.errcode==10001) {        
//           store.dispatch('FedLogOut').then(() => {
//             location.reload() // 为了重新实例化vue-router对象 避免bug
//           })
//       }
//       return Promise.reject(res)
//     } else {
//       if(response.data.data){
//         return response.data
//       }else{
//         response.data['data'] = ''
//         return response.data
//       }
      
//     }
//   },
//   error => {
//     Toast(error)
//     return Promise.reject(error)
//   }
// )

export default service
