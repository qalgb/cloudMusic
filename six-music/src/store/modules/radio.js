// 管理首页所有数据
// 引入api接口函数
import { reqRadioName,reqRadioList } from '@/api'
export default {
  state: {
    //电台分类
    radioList:[],
    //分类后的电台
    radioName:[],
  },
  mutations: {
    //获取分类后的电台
    RECEIVE_RADIO_NAME(state,radioName){
      state.radioName=radioName
    },
    //获取电台分类列表
    RECEIVE_RADIO_LIST (state,radioList) {
      state.radioList=radioList
    },
  },
  actions: {
    //获取电台列表
    async getRadioList({ commit }){
      const result =await reqRadioList()
      if(result.code===200){
        commit('RECEIVE_RADIO_LIST',result.categories)
      }
    },
    //获取分类后的电台
    async getRadioName({commit},rid){
      const result = await reqRadioName(rid)
      if(result.code===200){
        commit('RECEIVE_RADIO_NAME',result.djRadios)
      }
    },
  },
  getters: {}
}