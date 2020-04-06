import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'view',
    component: () => import(/* webpackChunkName: "view" */ '../views/view.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "weixin" */ '../views/Home.vue'),
        meta:{index:1}
      },
      {
        path: 'wexin',
        name: 'wexin',
        component: () => import(/* webpackChunkName: "weixin" */ '../views/wexin.vue'),
        meta:{header:true,index:2}
      },
      {
        path: 'vuex',
        name: 'vuex',
        component: () => import(/* webpackChunkName: "vuex" */ '../views/vuex.vue'),
        meta:{index:3}
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/About.vue'),
    meta:{header:true,index:4}
  },
  {
    path: '/web/:id',
    name: 'web',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/web.vue'),
    meta:{header:true,index:5}
  }
]

const router = new VueRouter({
  routes,
  // 路由跳转后页面滚动到顶部
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

//全局路由守卫
// router.beforeEach((to,from,next)=>{
//  if(to.meta.requireAuth == true){  //需要登录权限进入的路由（路由中meta信息）
//    if(!localStorage.getItem('token')){  //取不到登录信息
//       return next({name:'login'})
//    }else{  //取得到登录信息，进行下一步
//      return next();
//    }
//  }else{  //不需要登录权限
//    return next();
//  }
// })

export default router
