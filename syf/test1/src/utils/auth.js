import Cookies from 'js-cookie'

const TokenKey = 'token'//登录凭证

const OpenidKey='openid'//登录获取的openid

const PhoneKey = 'phone'//登录获取的手机号

const DealcodeKey = 'dealcode'//是否有交易密码

const Version = 'Version'//代码版本

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token,{expires:60})
}

export function getOpenid() {
  return Cookies.get(OpenidKey)
}

export function setOpenid(openid) {
  return Cookies.set(OpenidKey, openid,{expires:60})
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setPhone(phone) {
  return Cookies.set(PhoneKey, phone,{expires:60})
}

export function getPhone() {
  return Cookies.get(PhoneKey)
}

export function setDealcode(dealcode) {
  return Cookies.set(DealcodeKey, dealcode,{expires:60})
}

export function getDealcode() {
  return Cookies.get(DealcodeKey)
}

export function getVersion() {
  return Cookies.get(Version)
}
export function setVersion(version) {
  return Cookies.set(Version, version,{expires:60})
}

const Role = 'role'//用户角色
const IsFollow = 'is_follow'//是否关注
const HandLevel = 'hand_level'//会员等级
export function getRole() {
  return Cookies.get(Role)?Cookies.get(Role):0
}
export function setRole(role) {
  return Cookies.set(Role, role,{expires:60})
}

export function getIsFollow() {
  return Cookies.get(IsFollow)?Cookies.get(IsFollow):0
}
export function setIsFollow(is_follow) {
  return Cookies.set(IsFollow, is_follow,{expires:60})
}

export function getHandLevel() {
  return Cookies.get(HandLevel)
}
export function setHandLevel(hand_level) {
  return Cookies.set(HandLevel, hand_level,{expires:60})
}