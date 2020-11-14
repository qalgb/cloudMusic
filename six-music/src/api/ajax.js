// 二次封装axios
import axios from 'axios'
// 引入nprogress,进度条效果
import Nprogress from 'nprogress'
// 引入Nprogress样式文件
import 'nprogress/nprogress.css'
// 引入store
// import store from '@/store'

// 设置请求时根路径及请求超时时间
const ajax = axios.create({
  baseURL: '/',
  timeOut: 20000
})
// 请求拦截器
ajax.interceptors.request.use(config => {
  Nprogress.start() // 显示进度条
  // 在请求头中携带token
  // const token = store.state.user.userInfo.token
  // if (token) {
  //   config.headers['token'] = token
  // }
  // // 在请求头中携带用户的临时凭证id
  // config.headers['userTempId'] = store.state.user.userTempId
  return config
})
// 响应拦截器
ajax.interceptors.response.use(response => {
  Nprogress.done()
  return response.data
}, error => {
    Nprogress.done()
    alert('错误信息为' + error.message)
    return Promise.reject(error) // 错误信息返回，外部可以做处理
    // return new Promise(() => {})  //外部不做错误处理
})
export default ajax