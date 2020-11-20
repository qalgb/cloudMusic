import { reqUserInfo, reqUserDetail, reqPlayListDetail, reqSongUrl,reqSongInfo } from '@/api';

export default{
  state: {
    userInfo:{},
    userDetInfo:{},
    songUrl: {},
    songListAudio: []
  },
  mutations: {
    RECEIVE_USERINFO (state, userInfo){
      state.userInfo = userInfo
    },
    RECEIVE_USERDETINFO (state, userDetInfo) {
      state.userDetInfo = userDetInfo
    },
    RECEIVE_SONG_URL (state, songUrl) {
      state.songUrl = songUrl[0].url
    },
    RECEIVE_SONGLIST_AUDIO (state, songListAudio) {
      state.songListAudio = songListAudio
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
    async getSongUrl ({ commit }, id ){
      const result = await reqSongUrl(id)
      if (result.code === 200) {
        commit('RECEIVE_SONG_URL',result.data)
      }
    },
    // 获取歌曲详细信息
    async getSongListAudio({ commit }, ids) {
      const result = await reqSongInfo(ids)
      if (result.code === 200) {
        commit('RECEIVE_SONGLIST_AUDIO', result.songs)
      }
      // console.log(result);
    }
  },

  getters: {
    
  }
}