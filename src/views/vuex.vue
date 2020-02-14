<template>
    <div class="vuex">
      <h1>{{kk}}</h1>
      <p>{{this.$store.state.token}}</p>
      <hr>
      <p>
        {{this.$store.getters.addtoken}}
      </p>
    </div>
</template>

<script>
// import request from "../request/api/index";

export default {
  name: 'vuex',
  data (){
    return {
      kk:'1111111111111'
    }
  },
  mounted() {
     this.kk=this.$store.state.token;//获取state中的数据
     this.$store.commit('newtoken','传参');//运行mutations中newtoken事件
     
  },
  methods:{
     
  }
}
</script>
