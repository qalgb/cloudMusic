// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入五个对象
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//import modules from './modules'
// 使用Vuex
Vue.use(Vuex)
//实例化
export default new Vuex.Store({
  // 总的
  state,
  mutations,
  actions,
  getters,
  // 包含多个子模块的对象
  //modules
})