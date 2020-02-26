import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'wxd961ff0e015fb05f',
    data: 1
  },
  mutations: {
    newtoken(state,str){
      state.token='token:'+str;
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
