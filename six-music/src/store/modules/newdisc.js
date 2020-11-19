// 管理首页所有数据
// 引入api接口函数
import {reqNewDiscList } from '@/api'
export default {
  state: {
    //新专辑列表
    newDiscList:{}
  },
  mutations: {
    //获取新专辑列表
    RECEIVE_NEWDISC_LIST(state,newDiscList){
      state.newDiscList=newDiscList
    },
  },
  actions: {
    //异步获取新专辑列表
    async getNewDiscList({commit},area){
      const result=await reqNewDiscList(area)
      if(result.code===200){
        commit('RECEIVE_NEWDISC_LIST',result.albums)
      }
    },
  },
  getters: {}
}