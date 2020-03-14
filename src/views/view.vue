<template>
  <div class="view">
    <transition :name="transitionName">
        <router-view class="body"/>
    </transition>
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/wexin">wexin</router-link>|
      <router-link to="/vuex">vuex</router-link>
    </div>
  </div>
</template>

<style>
html{
    background: #ddd;
}
.body{
    border:1px solid darkcyan;
    min-height: 100%;
}

#nav {
  padding: 30px;
  background: red;
  height:50px;
  position: fixed;
  width:100vw;
  left: 0;
  bottom: 0;
  z-index: 1000;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}




.slide-right-enter-active,
 .slide-right-leave-active,
 .slide-left-enter-active,
 .slide-left-leave-active {
   will-change: transform;
   transition: all 500ms ease;
   position: absolute; 
 }.slide-right-enter {
   opacity: 0;
   transform: translate3d(-100%, 0, 0);
 }.slide-right-leave-active {
   opacity: 0;
   transform: translate3d(100%, 0, 0);
 }.slide-left-enter {
   opacity: 0;
   transform: translate3d(100%, 0, 0);
 }.slide-left-leave-active {
   opacity: 0;
   transform: translate3d(-100%, 0, 0);
 }


</style>

<script>

import J from '../plugins/scrollReveat_css'
export default {
    name: 'app',
    data (){
      return {
        transitionName:''
      }
    },
    mounted() {
        J.ScrollCss();
    },
    watch: {
      // 使用watch 监听$router的变化
      $route (to, from) {
        // 如果to索引大于from索引,判断为前进状态,反之则为后退状态 
        if (to.meta.index > from.meta.index){
          // 设置动画名称
          this.transitionName = 'slide-left';
        } else{
          this.transitionName = 'slide-right';
        }
      }
    }
}
</script>
