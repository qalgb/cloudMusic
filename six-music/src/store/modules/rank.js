import { reqRankInfo, reqRankSongList } from '@/api'

export default{
  state: {
    rankInfo: []
  },
  mutations: {
    RECEIVE_RANKINFO ( state, rankInfo ) {
      state.rankInfo = rankInfo
    }
  },
  actions: {
    // 获取所有排名
    async getRankInfo ({ commit }) {
      const result = await reqRankInfo()
      if (result.code === 200) {
        commit('RECEIVE_RANKINFO', result.list)
      }
    },
    // 获取排名数据详情
    async getRankSongList({ commit }, id) {
      const result = await reqRankSongList(id)
      if (result.code === 200) {
        commit('RECEIVE_RANK_SONG_LIST', result.data)
      }
      console.log(result);
    }
  },
  getters: {
    
  }
}