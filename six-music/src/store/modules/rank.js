import { reqRankInfo, reqRankSongList } from '@/api'

export default{
  state: {
    rankInfo: [],
    rankSongList: []
  },
  mutations: {
    RECEIVE_RANKINFO ( state, rankInfo ) {
      state.rankInfo = rankInfo
    },
    RECEIVE_RANK_SONG_LIST ( state, rankSongList ) {
      state.rankSongList = rankSongList
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
      const rankSongList = result.data.playlist
      if (result.code === 200) {
        commit('RECEIVE_RANK_SONG_LIST', rankSongList)
      }
    }
  },
  getters: {
    // 获取数据并且按照标题长度排序
    rankInfo (state) {
      return state.rankInfo.sort((a,b) => {
        return a.name - b.name
      })
    }
  }
}