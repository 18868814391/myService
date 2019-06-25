import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/index',
    meta: { title: '商品结算', noAnima: true }
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login'),
    meta: {
      title: '登录', noAnima: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/view/login/register'),
    meta: {
      title: '注册', noAnima: true
    }
  },
  {
    path: '/footprint',
    name: 'footprint',
    component: () => import('@/view/Interaction/footprint'),
    meta: {
      title: '留言板', noAnima: true
    }
  },  
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component: () => import('@/view/index/aboutMe'),
    meta: {
      title: '关于本站', noAnima: true
    }
  },
  {
    path: '/chatRoom',
    name: 'chatRoom',
    component: () => import('@/view/index/chatRoom'),
    meta: {
      title: '聊天室', noAnima: true
    }
  },  
  {
    path: '/test1',
    name: 'test1',
    component: () => import('@/view/test/test1.vue'),
    meta: {
      title: '关于本站', noAnima: true
    }
  },   
  {
    path: '/level',
    name: 'level',
    component: () => import('@/view/login/level'),
    meta: {
      title: '权限', noAnima: true
    }
  },  
  {
    path: '/index',
    name: 'index',
    component: () => import('@/view/index'),
    meta: {
      title: 'syf', noAnima: true
    }
  },
  {
    path: '/upLoad',
    name: 'upLoad',
    component: () => import('@/view/index/upLoad'),
    meta: {
      title: '上传', noAnima: true
    }
  }, 
  {
    path: '/blogUpload',
    name: 'blogUpload',
    component: () => import('@/view/blog/blogUpload'),
    meta: {
      title: 'BLOG上传', noAnima: true
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/view/blog/blog'),
    meta: {
      title: 'BLOG', noAnima: true
    }
  }, 
  {
    path: '/readBlog',
    name: 'readBlog',
    component: () => import('@/view/blog/readBlog'),
    meta: {
      title: 'MyBLOG', noAnima: true
    }
  },    
  {
    path: '/myfile',
    name: 'myfile',
    component: () => import('@/view/index/myfile'),
    meta: {
      title: '文件夹', noAnima: true
    }
  },   
  {
    path: '/read',
    name: 'read',
    component: () => import('@/view/index/read'),
    meta: {
      title: '浏览', noAnima: true
    }
  }, 
  {
    path: '/readPage',
    name: 'readPage',
    component: () => import('@/view/index/readPage'),
    meta: {
      title: '浏览', noAnima: true
    }
  },  
  {
    path: '/readPage2',
    name: 'readPage2',
    component: () => import('@/view/index/readPage2'),
    meta: {
      title: '浏览', noAnima: true
    }
  },
  {
    path: '/readPage3',
    name: 'readPage3',
    component: () => import('@/view/index/readPage3'),
    meta: {
      title: '浏览', noAnima: true
    }
  },
  {
    path: '/im',
    name: 'im',
    component: () => import('@/view/im'),
    meta: {
      title: 'im'
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/view/map/map'),
    meta: {
      title: 'map'
    }
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('@/view/music/music'),
    meta: {
      title: 'music'
    }
  }, 
  {
    path: '/anime',
    name: 'anime',
    component: () => import('@/view/anime'),
    meta: {
      title: 'anime'
    }
  },  
  {
    path: '/animeDetail',
    name: 'animeDetail',
    component: () => import('@/view/anime/animeDetail'),
    meta: {
      title: 'animeDetail'
    }
  },      
  {
    path: '/login2',
    name: 'login2',
    component (resolve) {
      require(['../view/login2/login2'], resolve)
    }
  },
  {
    path: '/register2',
    name: 'register2',
    component (resolve) {
      require(['../view/login2/register2'], resolve)
    }
  },   
  // 最近消息列表（会话）
  {
    path: '/session',
    name: 'session',
    component (resolve) {
      require(['../pages/Session'], resolve)
    }
  },
  // 系统消息
  {
    path: '/sysmsgs',
    name: 'sysmsgs',
    component (resolve) {
      require(['../pages/SysMsgs'], resolve)
    }
  },
  // 聊天记录
  {
    path: '/chat/:sessionId',
    name: 'chat',
    component (resolve) {
      require(['../pages/Chat'], resolve)
    }
  },
  // 聊天历史记录
  {
    path: '/chathistory/:sessionId',
    name: 'chathistory',
    component (resolve) {
      require(['../pages/ChatHistory'], resolve)
    }
  },
  // 直播间
  {
    path: '/room',
    name: 'room',
    component (resolve) {
      require(['../pages/Room'], resolve)
    }
  },
  // 直播聊天页
  {
    path: '/roomChat/:chatroomId',
    name: 'roomChat',
    component (resolve) {
      require(['../pages/RoomChat'], resolve)
    }
  },
  // 通讯录
  {
    path: '/contacts',
    name: 'contacts',
    component (resolve) {
      require(['../pages/Contacts'], resolve)
    }
  },
  // 好友名片
  {
    path: '/namecard/:userId',
    name: 'namecard',
    component (resolve) {
      require(['../pages/NameCard'], resolve)
    }
  },
  // 好友名片-设置备注
  {
    path: '/namecardremark/:userId',
    name: 'namecardremark',
    component (resolve) {
      require(['../pages/NameCardRemark'], resolve)
    }
  },
  // 好友名片-搜索好友/群
  {
    path: '/searchuser/:searchType',
    name: 'searchuser',
    component (resolve) {
      require(['../pages/SearchUser'], resolve)
    }
  },
  // 邀请好友-加入群
  {
    path: '/teaminvite/:teamId',
    name: 'teaminvite',
    component (resolve) {
      require(['../pages/TeamInvite'], resolve)
    }
  },
  // 通用页面
  {
    path: '/general',
    name: 'general',
    component (resolve) {
      require(['../pages/General'], resolve)
    }
  },
  // 群列表
  {
    path: '/teamlist/:teamType',
    name: 'teamlist',
    component (resolve) {
      require(['../pages/TeamList'], resolve)
    }
  },
  // 群名片
  {
    path: '/teamcard/:teamId',
    name: 'teamcard',
    component (resolve) {
      require(['../pages/TeamCard'], resolve)
    }
  },
  // 群管理
  {
    path: '/teammanage/:teamId',
    name: 'teammanage',
    component(resolve) {
      require(['../pages/TeamManage'], resolve)
    }
  },
  // 群设置
  { 
    path: '/teamsetting',
    name: 'teamsetting',
    component(resolve) {
      require(['../pages/TeamSetting'], resolve)
    }
  },
  // 群成员列表
  {
    path: '/teammembers/:teamId',
    name: 'teammembers',
    component(resolve) {
      require(['../pages/TeamMembers'], resolve)
    }
  },
  // 群成员名片
  {
    path: '/teammembercard/:member',
    name: 'teammembercard',
    component(resolve) {
      require(['../pages/TeamMemberCard'], resolve)
    }
  },
  // 发送群消息回执页
  {
    path: '/teamSendMsgReceipt/:teamId',
    name: 'TeamSeamMsgReceipt',
    component(resolve) {
      require(['../pages/TeamSendMsgReceipt'], resolve)
    }
  },
  // 群消息回执详情页
  {
    path: '/msgReceiptDetail/:msgInfo',
    name: 'msgReceiptDetail',
    component(resolve) {
      require(['../pages/TeamMsgReceiptDetail'], resolve)
    }
  }    
];

const router=new Router({
  routes 
});

export {
  router
};

