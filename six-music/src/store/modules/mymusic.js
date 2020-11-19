import { reqUserInfo, reqUserDetail, reqMyLikeCount, reqMyLikeInfo } from "@/api"
export default {
  state: {
    userInfo: {},
    userDetail: {},
    myLikeCount: {},
    myLikeInfo: []
  },
  mutations: {
    RECEIVE_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    },
    RECEIVE_USER_DERAIL(state, userDetail) {
      state.userDetail = userDetail
    },
    RECEIVE_MYLIKE_COUNT(state, myLikeCount){
      state.myLikeCount = myLikeCount
    },
    RECEIVE_MYLIKE_INFO (state, myLikeInfo){
      state.myLikeInfo = myLikeInfo
    }
  },
  actions: {
    // 获取用户信息
    async getUserInfo({ commit }, cookie) {
      const result = await reqUserInfo(cookie)
      if (result.code === 200) {
        commit('RECEIVE_USERINFO',result.profile)
      }
    },
    // 获取用户详情信息
    async getUserDetail({ commit }, uid) {
      const result = await reqUserDetail(uid)
      if (result.code === 200) {
        commit('RECEIVE_USER_DERAIL',result.profile)
      }
    },
    // 获取我的喜欢歌曲数量
    async getMyLikeCount({ commit }, {uid,cookie}){
      const result = await reqMyLikeCount(uid,cookie)
      const count = result.ids
      if (result.code === 200) {
        commit('RECEIVE_MYLIKE_COUNT',count)
      }
    },
    // 获取我的喜欢的歌曲列表
    async getMyLikeInfo ({ commit }, ids) {
      const result = await reqMyLikeInfo(ids)
      if(result.code === 200) {
        commit('RECEIVE_MYLIKE_INFO', result.songs)
      }
    }
  },
  getters: {
    myLikeInfo (state) {
      return state.myLikeInfo.slice(0,10) || []
    }
  }
}