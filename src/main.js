/*
 * @Author: zhaojingyu
 * @Date: 2020-05-21 11:01:47
 * @Last Modified by: zhaojingyu
 * @Last Modified time: 2020-06-09 15:36:40
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import VueTouch from 'vue-touch' // 滑动组件
import FastClick from 'fastclick'
// import log from './utils/log' // 引人 vconsole
import store from './store'
import VueDND from 'awe-dnd' // 拖动组件

import VueClipboard from 'vue-clipboard2' // 复制组件
VueClipboard.config.autoSetContainer = true

Vue.use(VueClipboard)
Vue.use(VueDND)

Vue.use(Vant)

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
