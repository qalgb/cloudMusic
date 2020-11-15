// import store from '@/store'
// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes'
// 重新修改路由器对象中的push方法和replace方法
const pushOrigin = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete = () => { }, onAbort) {
  return pushOrigin.call(this, location, onComplete, onAbort)
}
const replaceOrigin = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, onComplete, onAbort = () => { }) {
  return replaceOrigin.call(this, location, onComplete, onAbort)
}
// 声明使用路由器插件
Vue.use(VueRouter)
// 实例化路由器对象,并暴露出去
const router = new VueRouter({
  mode: 'history', // 地址栏中不带#
  routes,
  // 解决路由跳转到滚动的位置
  /* scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  } */
}) 
/* // 全局前置路由守卫
router.beforeEach((to,from,next)=>{
  // to-----目录路由对象---route，（path--路径）
  // from---离开的路径---route，（path--路径）
  // next---函数，不传参表示放行，传了地址就去地址
  if(to.path!=='/login'){
    next('/login')
    // 访问地址不是登录界面，强制让其跳转到登陆界面
  }else{
    next
  }
}) */

// router.beforeEach((to, from, next) => {
//   // 1.只有在登录的情况下才能访问/trade,/pay,/center
//   // 获取目标路由对象中的访问地址
//   const targetPath = to.path
//   // 准备一个需要检测路由的地址的数组
//   const checkPath =['/trade','/pay','/center']
//   // 判断目标路由地址在检测的路由地址的数组中是否存在
//   if(checkPath.find(path=>targetPath.indexOf(path)!==-1)){
//     // 判断是否已经登录
//     if(store.state.user.userInfo.token){
//       // 放行
//       next()
//     }else{
//       // 跳转到登录界面
//       next('/login?redirect='+targetPath)
//     }
//   }else{
//     // 不存在则正常放行
//     next()
//   }
// })
// 向外暴露一个路由器对象
export default router