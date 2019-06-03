import { router } from './router/router'
import store from './store'

const mainList = ['/index','/login','/register', '/blog', '/readBlog', '/blogUpload', '/upLoad', '/myfile', '/read','/readPage','/readPage2','/readPage3'] // 需要菜单栏的路由
router.beforeEach((to, from, next) => {
  if (mainList.indexOf(to.path) !== -1) {
    store.commit('SET_showTabNav', true)
  }else{
    store.commit('SET_showTabNav', false)
  }
  next();
})

// router.afterEach((to, from, next) => {
//   next();
// })
