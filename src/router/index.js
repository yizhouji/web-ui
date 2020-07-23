import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import request from '../api/request'

import Index from '@/view/index'

// require('../utils/sensors')

Vue.use(Router)

// meta: {
//   keepAlive: true,   //是否缓存组件
//   auth:true   //是否必须获取jwt
// }

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: false
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title || ''
  }
  store.commit('showLoading', true)
  next()
})
router.afterEach((to, from) => {
  store.commit('showLoading', false)
})

export default router
