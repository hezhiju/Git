import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/wexin',
    name: 'wexin',
    component: () => import(/* webpackChunkName: "weixin" */ '../views/wexin.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/vuex.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach(() => {
//     // eslint-disable-next-line no-console
//     console.log("router-to:");
// })

export default router
