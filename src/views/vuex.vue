<template>
    <div class="vuex">
      <h1>{{kk}}</h1>
      <p>{{this.$store.state.token}}</p>
      <hr>
      <p>
        {{this.$store.getters.addtoken}}
      </p>
      <div class="div reveal-top" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">{{item}}</div>
      <div class="div reveal-bottom" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">{{item}}</div>
      <div class="div reveal-left" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">{{item}}</div>
      <div class="div reveal-right" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">{{item}}</div>
    </div>
</template>

<script>
// import request from "../request/api/index";
import J from '../plugins/scrollReveat_css'
export default {
  name: 'vuex',
  data (){
    return {
      kk:'1111111111111'
    }
  },
  mounted() {
     this.kk=this.$store.state.token;//获取state中的数据
     this.$store.commit('newtoken','vuex');//运行mutations中newtoken事件
     J.ScrollCss();
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
  },
  methods:{
     
  }
}
</script>

<style>
  .div{
    width:750px;
    height:300px;
    background: red;
    margin-top: 10px;
    font-size: 16px !important;
    color:#fff;
  }
  .vuex{
    border:1px solid blue;
    overflow: hidden;
  }
</style>