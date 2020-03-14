import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'view',
    component: () => import(/* webpackChunkName: "view" */ '../views/view.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "weixin" */ '../views/Home.vue'),
        meta:{index:1}
      },
      {
        path: '/wexin',
        name: 'wexin',
        component: () => import(/* webpackChunkName: "weixin" */ '../views/wexin.vue'),
        meta:{header:true,index:2}
      },
      {
        path: '/vuex',
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
    path: '/web',
    name: 'web',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/web.vue'),
    meta:{header:true,index:5}
  }
]

const router = new VueRouter({
  routes
})

//全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log('navigation-guards');
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//   const route = ['home', 'list'];
//   let isLogin = isLogin;  // 是否登录
//   // 未登录状态；当路由到route指定页时，跳转至login
//   if (route.indexOf(to.name) >= 0) {
//     if (!isLogin) {
//       this.$router.push({ path:'/login',});
//     }
//   }
//   // 已登录状态；当路由到login时，跳转至home 
//   if (to.name === 'login') {
//     if (isLogin) {
//       this.$router.push({ path:'/home',});;
//     }
//   }
//   next();
// });

export default router
