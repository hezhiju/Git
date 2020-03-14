<template>
  <div id="app" class="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/wexin">wexin</router-link>|
      <router-link to="/vuex">vuex</router-link>
    </div>
    <router-view/>
    <div style="height:40px;background:blue;"></div>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 32px;
}

#nav {
  padding: 30px;
  background: red;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

export default {
    name: 'app',
    mounted() {
      //scrollReveal动画插件
        // this.$scroll.reveal('.reveal-top', {
        //   // 动画的时长
        //   duration: 2000,
        //   // 延迟时间
        //   delay: 500,
        //   // 动画开始的位置，'bottom', 'left', 'top', 'right'
        //   origin: 'left',
        //   // 回滚的时候是否再次触发动画
        //   reset: true,
        //   // 在移动端是否使用动画
        //   mobile: true,
        //   // 滚动的距离，单位可以用%，rem等
        //   distance: '500px',
        //   // 其他可用的动画效果
        //   opacity: 0,
        //   easing: 'linear',
        //   scale: 1,
        // });
    }
}
</script>
