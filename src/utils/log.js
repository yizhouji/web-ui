
import Vue from 'vue'
import Vconsole from 'vconsole'

// 在正式环境下不显示 Vconsole

const productUrl = 'https://carapp.gtmc.com.cn'

var localhref = window.location.href // 获取当前域名
var url = localhref.split('?')[0]
if (url.indexOf(productUrl) < 0) {
  const vConsole = new Vconsole()
  Vue.use(vConsole)
}
