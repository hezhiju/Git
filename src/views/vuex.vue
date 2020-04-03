<template>
    <div class="vuex">
      <h1>{{kk}}</h1>
      <p>{{this.$store.state.token}}</p>
      <router-link to="/about">About</router-link>
      <router-link to="/web/123">PC端</router-link>
      <hr>
      <p>
        {{this.$store.getters.addtoken}}
      </p>
      <div class="div reveal-top" v-for="item in [1,2,3]" :key="item">{{item}}</div>
      <div class="div reveal-bottom" v-for="item in [4,5,6]" :key="item">{{item}}</div>
      <div class="div reveal-left" v-for="item in [7,8,9]" :key="item">{{item}}</div>
      <div class="div reveal-right" v-for="item in [11,12,13]" :key="item">{{item}}</div>
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
  },
  methods:{
     
  }
}
</script>

<style scoped>
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