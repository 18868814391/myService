import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// export default new Router({
//   routes:[
//     {
//       path: '/login',
//       name: 'login',
//       component: () => import('@/view/login'),
//       meta: {
//         title: '登录'      
//       }
//     }
//   ]
// })

const routes = [
  {
    path: '*',
    redirect: '/index'
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/view/login/register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/level',
    name: 'level',
    component: () => import('@/view/login/level'),
    meta: {
      title: '权限'
    }
  },  
  {
    path: '/index',
    name: 'index',
    component: () => import('@/view/index'),
    meta: {
      title: 'syf'
    }
  },
  {
    path: '/upLoad',
    name: 'upLoad',
    component: () => import('@/view/index/upLoad'),
    meta: {
      title: '上传'
    }
  }, 
  {
    path: '/blogUpload',
    name: 'blogUpload',
    component: () => import('@/view/blog/blogUpload'),
    meta: {
      title: 'BLOG上传'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/view/blog/blog'),
    meta: {
      title: 'BLOG'
    }
  }, 
  {
    path: '/readBlog',
    name: 'readBlog',
    component: () => import('@/view/blog/readBlog'),
    meta: {
      title: 'MyBLOG'
    }
  },    
  {
    path: '/myfile',
    name: 'myfile',
    component: () => import('@/view/index/myfile'),
    meta: {
      title: '文件夹'
    }
  },   
  {
    path: '/read',
    name: 'read',
    component: () => import('@/view/index/read'),
    meta: {
      title: '浏览'
    }
  }, 
  {
    path: '/readPage',
    name: 'readPage',
    component: () => import('@/view/index/readPage'),
    meta: {
      title: '浏览'
    }
  },  
  {
    path: '/readPage2',
    name: 'readPage2',
    component: () => import('@/view/index/readPage2'),
    meta: {
      title: '浏览'
    }
  },
  {
    path: '/readPage3',
    name: 'readPage3',
    component: () => import('@/view/index/readPage3'),
    meta: {
      title: '浏览'
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
];

const router=new Router({
  routes 
});

export {
  router
};

