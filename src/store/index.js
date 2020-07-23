import Vue from 'vue'
import Vuex from 'vuex'

// 挂载Vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: true

  },
  mutations: {
    showLoading (state, loading) {
      state.loading = loading
    }

  }
})

export default store
