<template>
  <div id="app" class="app">
    <div v-if="routeData.header" style="height:64px;background:yellow;position:fixed;top:0;left:0;width:100vw;z-index:1000;">
      
        <van-nav-bar :title="routeData.title"
                     :left-text="routeData.hideBackButton ? '' : '返回'"
                     v-if="routeData.showHeader"
                     :left-arrow="!routeData.hideBackButton"
                     @click-left="back"
                     fixed
                     :z-index="999"/>
    </div>
    <transition :name="transitionName">
      <router-view class="bodyd" :style="routeData.header&&'margin-top:64px;'"/>
    </transition>
  </div>
</template>

<style>
.bodyd{
  min-height:100vh;
}


.slide-right-enter-active,
 .slide-right-leave-active,
 .slide-left-enter-active,
 .slide-left-leave-active {
   will-change: transform;
   transition: all 500ms;
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

export default {
    name: 'app',
    data (){
      return {
        transitionName:''
      }
    },
    computed: {
      routeData() {
          return this.$route.meta
      }
    },
    mounted() {
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
    },
    created() {
      // vue项目中打包完成后如何外部链接打开项目中的某个路由
      // https://beta.ddgeyou.com/ccc/vue/index.html#/web/123
      alert(window.location.hash.slice(1));
      this.$router.push({path: window.location.hash.slice(1)});
    }
}
</script>
