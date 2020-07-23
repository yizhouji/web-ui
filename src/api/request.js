/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  timeout: 20000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8;'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log('request: ', error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.success && res.resultCode === 200) {
      return res.data
    } else {
      Toast.clear()
      Toast({
        message: res.errMsg || '请求失败',
        duration: 2000,
        forbidClick: true
      })
      return Promise.reject(res.errMsg || '请求失败')
    }
  }, error => {
    Toast.clear()
    Toast({
      message: '请求失败',
      duration: 2000,
      forbidClick: true
    })

    return Promise.reject(error)
  }
)

export default service
