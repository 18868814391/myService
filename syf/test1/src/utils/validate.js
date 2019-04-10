/**
 * Created by on 18/09/11.
 *
 * 可参考https://github.com/chriso/validator.js
 */
import validator from 'validator'
/* 合法用户名*/
export function isvalidUsername(str) {
  // to-do
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  if(str.length>6){
    return true
  }else{
    return true
  }
  
}
/* 合法密码*/
export function isvalidPwd(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
/* 验证手机号*/
export function validatePhone(str) {
  const reg_phone = /^1(2|3|4|5|6|7|8|9)\d{9}$/
  return reg_phone.test(str)
}
/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}
/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}
/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}
/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
// 字符串验证
/* 邮箱*/
export function validatEmail(str) {
  return validator.isEmail(str)
}
/* 浮点数*/
export function validatFloat(str) {
  return validator.isFloat(str)
}
