/**
 * Created by jiachenpan on 16/11/18.
 */
import Vue from 'vue'
import store from '../store'

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

// 格式化时间
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}


export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}

export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

export function objectMerge(target, source) {
  /* Merges two  objects,
     giving the last one precedence */

  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

export function scrollTo(element, to, duration) {
  if (duration <= 0) return
  const difference = to - element.scrollTop
  const perTick = (difference / duration) * 10
  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}

export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

export const pickerOptions = [
  {
    text: '今天',
    onClick(picker) {
      const end = new Date()
      const start = new Date(new Date().toDateString())
      end.setTime(start.getTime())
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '最近一周',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  },
  {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }
]

export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}


if(!Function.prototype.bind){
  Function.prototype.bind = function(){
    var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift();
    return function(){
      return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
    }
  }
}

let Utils = Object.create(null)

Utils.encode = function (_map, _content) {
  _content = '' + _content
  if (!_map || !_content) {
    return _content||''
  }
  return _content.replace(_map.r, function ($1) {
    var _result = _map[!_map.i ? $1.toLowerCase() : $1]
    return _result != null ? _result : $1
  });
};

Utils.escape = (function () {
  let _reg = /<br\/?>$/
  let _map = {
    r:/\<|\>|\&|\r|\n|\s|\'|\"/g,
    '<':'&lt;',
    '>':'&gt;',
    '&':'&amp;',
    ' ':'&nbsp;',
    '"':'&quot;',
    "'":'&#39;',
    '\n':'<br/>',
    '\r':''
  }
  return function(_content){
    _content = Utils.encode(_map, _content)
    return _content.replace(_reg, '<br/>');
  };
})();

Utils.object2query = function (obj) {
  let keys = Object.keys(obj)
  let queryArray = keys.map(item => {
    return `${item}=${encodeURIComponent(obj[item])}`
  })
  return queryArray.join('&')
}

// https://cn.vuejs.org/v2/guide/reactivity.html
// Vue 不能检测到对象属性的添加或删除。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上
Utils.mergeObject = function (dest, src) {
  if (typeof dest !== 'object' || dest === null) {
    dest = Object.create(null)
  }
  dest = Object.assign(Object.create(null), dest, src)
  return dest
}

Utils.mergeVueObject = function (dest, src) {
  let keys = Object.keys(src)
  keys.forEach(item => {
    if (typeof src[item] !== 'undefined') {
      Vue.set(dest, item, src[item])
    }
  })
  return dest
}

// 消息类型列表
Utils.mapMsgType = function (msg) {
  let map = {
    text: '文本消息',
    image: '图片消息',
    file: '文件消息',
    audio: '语音消息',
    video: '视频消息',
    geo: '地理位置消息',
    tip: '提醒消息',
    custom: '自定义消息',
    notification: '系统通知',
    robot: '机器人消息'
  }
  let type = msg.type
  return map[type] || '未知消息类型'
}

Utils.stringifyDate = function (datetime, simple = false) {
  // let weekMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let weekMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  datetime = new Date(datetime)
  let year = datetime.getFullYear()
  let simpleYear = datetime.getYear() - 100
  let month = datetime.getMonth() + 1
  month = month > 9 ? month : '0' + month
  let day = datetime.getDate()
  day = day > 9 ? day : '0' + day
  let hour = datetime.getHours()
  hour = hour > 9 ? hour : '0' + hour
  let min = datetime.getMinutes()
  min = min > 9 ? min : '0' + min
  let week = datetime.getDay()
  week = weekMap[week]
  let thatDay = (new Date(year, month - 1, day, 0, 0, 0)).getTime()

  if (simple) {
    return {
      withYear: `${day}/${month}/${simpleYear}`,
      withMonth: `${month}-${day}`,
      withDay: `${week}`,
      withLastDay: `昨天`,
      withHour: `${hour}:${min}`,
      thatDay
    }
  } else {
    return {
      withYear: `${year}-${month}-${day} ${hour}:${min}`,
      withMonth: `${month}-${day} ${hour}:${min}`,
      withDay: `${week} ${hour}:${min}`,
      withLastDay: `昨天 ${hour}:${min}`,
      withHour: `${hour}:${min}`,
      thatDay
    }
  }
}

/* 格式化日期 */
Utils.formatDate = function (datetime, simple = false) {
  let tempDate = (new Date()).getTime()
  let result = this.stringifyDate(datetime, simple)
  let thatDay = result.thatDay
  let deltaTime = (tempDate - thatDay) / 1000

  if (deltaTime < 3600 * 24) {
    return result.withHour
  } else if (deltaTime < 3600 * 24 * 2) {
    return result.withLastDay
  } else if (deltaTime < 3600 * 24 * 7) {
    return result.withDay
  } else if (deltaTime < 3600 * 24 * 30) {
    return result.withMonth
  } else {
    return result.withYear
  }
}

Utils.parseSession = function (sessionId) {
  if (/^p2p-/.test(sessionId)) {
    return {
      scene: 'p2p',
      to: sessionId.replace(/^p2p-/, '')
    }
  } else if (/^team-/.test(sessionId)) {
    return {
      scene: 'team',
      to: sessionId.replace(/^team-/, '')
    }
  }
}

Utils.parseCustomMsg = function (msg) {
  if (msg.type === 'custom') {
    try {
      let cnt = JSON.parse(msg.content)
      switch (cnt.type) {
        case 1:
          return '[猜拳消息]'
        case 2:
          return '[阅后即焚]'
        case 3:
          return '[贴图表情]'
        case 4:
          return '[白板消息]'
      }
    } catch (e) {}
    return '[自定义消息]'
  }
  return ''
}
/* 获得有效的备注名 */
Utils.getFriendAlias = function (userInfo) {
  userInfo.alias = userInfo.alias ? userInfo.alias.trim() : ''
  return userInfo.alias || userInfo.nick || userInfo.account
}

Utils.generateChatroomSysMsg = function (data) {
  let text
  switch (data.attach.type) {
    case 'memberEnter':
      text = `欢迎${data.attach.fromNick}进入直播间`
      break
    case 'memberExit':
      text = `${data.attach.fromNick}离开了直播间`
      break
    case 'blackMember':
      text = `${(data.attach.toNick[0] || data.attach.to[0])}被管理员拉入黑名单`
      break
    case 'unblackMember':
      text = `${(data.attach.toNick[0]||data.attach.to[0])}被管理员解除拉黑`
      break
    case 'gagMember':
      text = `${(data.attach.toNick[0]||data.attach.to[0])}被管理员禁言`
      break
    case 'ungagMember':
      text = `${(data.attach.toNick[0]||data.attach.to[0])}被管理员解除禁言`
      break
    case 'addManager':
      text = `${(data.attach.toNick[0]||data.attach.to[0])}被任命管理员身份`
      break
    case 'removeManager':
      text = `${(data.attach.toNick[0]||data.attach.to[0])}被解除管理员身份`
      break;
    case 'addTempMute':
      text = `${(data.attach.toNick[0]||data.attach.to[0])}被管理员临时禁言`
      break;
    case 'removeTempMute':
      text = `${(data.attach.toNick[0]||data.attach.to[0])}被管理员解除临时禁言`
      break;
    case 'addCommon':
      text = `管理员添加普通成员`
      break
    case 'removeCommon':
      text = `管理员删除普通成员`
      break
    case 'kickMember':
      text = `${data.attach.toNick[0]}被管理员踢出房间`
      break;
    // case 'xxx':
    // 直播公告已更新
    // break;
    default:
      text = '通知消息'
      break
  }
  return text
}

Utils.generateTeamSysmMsg = function (data) {
  var text, nicks = this.getNickNames(data.attach.users)
  switch (data.attach.type) {
    case 'updateTeam':
      text = this.getTeamUpdateInfo(data)
      break;
    case 'addTeamMembers': {
      let op = nicks.pop()
      text = `${op}邀请${nicks.join()}加入群`
      break;
    }
    case 'removeTeamMembers': {
      let op = nicks.pop()
      text = `${nicks.join()}被${op}移出群`
      break;
    }
    case 'acceptTeamInvite': {
      let op = nicks.pop()
      text = `${nicks.join()}接受了${op}入群邀请`
      break;
    }
    case 'passTeamApply': {
      let op = nicks.shift()
      if (nicks.length===1 && op===nicks[0]) {
        // 此情况为高级群设置不需要验证，用户申请入群后，收到的群消息提示
        text = `${op}加入群`
      } else {
        text = `${op}通过了${nicks}入群邀请`
      }
      break;
    }
    case 'addTeamManagers': {
      // todo test
      let op = nicks.pop()
      text = `${op}新增了${nicks}为管理员`
      break;
    }
    case 'removeTeamManagers': {
      // todo test
      let op = nicks.pop()
      text = `${op}移除了${nicks}的管理员权限`
      break;
    }
    case 'leaveTeam': {
      text = `${nicks.join()}退出了群`
      break;
    }
    case 'dismissTeam': {
      text = `${nicks.join()}解散了群`
      break;
    }
    case 'transferTeam': {
      // todo test
      let nicks = this.getNickNames(data.attach.users)
      let op = nicks.shift()
      text = `${op}转让群主给${nicks}`
      break;
    }
    case 'updateTeamMute':{
      let nicks = this.getNickNames(data.attach.users)
      let op = nicks.shift()
      text = `${nicks}被管理员${data.attach.mute ? '禁言' : '解除禁言'}`
      break;
    }
    default:
      break;
  }
  return text
}

// todo 写成私有成员方法
Utils.getNickNames = function(users) {
  return users.map(user => {
    return user.account === store.state.userUID? '你' : user.nick
  })
}

// todo 写成私有成员方法
Utils.getTeamUpdateInfo = function(msg) {
  let text, team = msg.attach.team, op = this.getNickNames(msg.attach.users).pop()
  if (team['name']) {
    text = `${op}修改群名为${team['name']}`
  } else if (team['intro']) {
    text = `${op}修改群介绍为${team['intro']}`
  } 
  // 由于群公告的交互与 Android iOS 不一致，现版本不适配群公告
  // else if (team['announcement']) {
  //   text = `${op}修改群公告为${team['announcement']}`
  // } 
  else if (team['joinMode']) {
    text = `群身份验证模式更新为${team.joinMode === 'noVerify' ? '不需要验证' : team.joinMode === 'needVerify' ? '需要验证' : '禁止任何人加入'}`
  } else if (team['inviteMode']) {
    text = `邀请他人权限为${team['inviteMode'] === 'all' ? '所有人' : '管理员'}`
  } else if (team['updateTeamMode']) {
    text = `群资料修改权限为${team['updateTeamMode'] === 'all' ? '所有人' : '管理员'}`
  } else if (team['beInviteMode']) {
    text = `被邀请人身份${team['beInviteMode'] === 'noVerify' ? '不需要验证' : '需要验证'}`
  } else {
    text = '更新群信息'
  }
  return text
}

Utils.teamConfigMap = {
  joinMode: {
    'noVerify': '不需要验证',
    'needVerify': '需要验证',
    'rejectAll': '禁止任何人加入'
  },
  beInviteMode: {
    'needVerify': '需要验证',
    'noVerify': '不需要验证'
  },
  inviteMode: {
    'manager': '管理员邀请',
    'all': '所有人邀请'
  },
  updateTeamMode: {
    'manager': '管理员修改',
    'all': '所有人修改'
  },
  memberType: {
    'manager': '管理员',
    'normal': '普通成员'
  }
}

export default Utils