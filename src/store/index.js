import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'11111111',
    data: 1
  },
  mutations: {
    newtoken(state,str){
      state.token='新token:'+str;
    }
  },
  geters:{
    addtoken(state){
      return state.data + '333333333';
    }
  },
  actions: {
  },
  modules: {
  }
})
