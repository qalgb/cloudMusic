import { reqUserInfo, reqUserDetail, reqPlayListDetail } from '@/api';

export default{
  state: {
    userInfo:{},
    userDetInfo:{},
  },
  mutations: {
    RECEIVE_USERINFO (state, userInfo){
      state.userInfo = userInfo
    },
    RECEIVE_USERDETINFO (state, userDetInfo) {
      state.userDetInfo = userDetInfo
    }
  },
  actions: {
    // 获取用户信息
    async getUserInfo ({ commit }, cookie) {
      const result = await reqUserInfo(cookie)
      if (result.code === 200) {
        commit('RECEIVE_USERINFO',result.account)
      }
    },
    //获取用户详细信息
    async getUserDetInfo ({ commit }, uid) {
      const result = await reqUserDetail(uid)
      if (result.code === 200) {
        commit('RECEIVE_USERDETINFO',result.profile)
      }
    },
    // 获取歌曲详细信息
    async getSongInfo ({ commit }, id) {
      const result = await reqPlayListDetail(id)
      if (result.code === 200) {
        commit('RECEIVE_SONGDETAIL')
      }
    },
    // 获取音乐的url
    
  },

  getters: {
    
  }
}