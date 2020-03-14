import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VConsole from 'vconsole'
import './plugins/vant'
import './plugins/rem'

//引入UIkit框架移动端
import UIkit from './plugins/uikit'
Vue.use(UIkit)

//引入滚动动画插件
// import scrollReveal from 'scrollreveal';
// Vue.prototype.$scroll = new scrollReveal({reset: true});

// import 'lib-flexible'
// import 'amfe-flexible'

// import VideoPlayer from 'vue-video-player'
// require('vue-video-player/node_modules/video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VideoPlayer)


// 关闭生产提示
Vue.config.productionTip = false

// vConsole打开  开发环境测试弹框
process.env.NODE_ENV !== 'production' && new VConsole();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
