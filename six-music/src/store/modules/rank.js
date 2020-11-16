import { reqRankInfo, reqRankSongList, reqSongListComment, reqSendOrReqOrDelComment } from '@/api'

export default{
  state: {
    rankInfo: [],
    rankSongList: [],
    songListComment: []
  },
  mutations: {
    RECEIVE_RANKINFO ( state, rankInfo ) {
      state.rankInfo = rankInfo
    },
    RECEIVE_RANK_SONG_LIST ( state, rankSongList ) {
      state.rankSongList = rankSongList
    },
    RECEIVE_SONG_LIST_COMMENT ( state, songListComment) {
      state.songListComment = songListComment
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
      const rankSongList = result.playlist.tracks
      if (result.code === 200) {
        commit('RECEIVE_RANK_SONG_LIST', rankSongList)
      }
    },
    // 获取歌单评论
    async getSongListComment ({ commit }, id) {
      const result = await reqSongListComment(id)
      const { comments, total } = result
      if (result.code === 200) {
        commit('RECEIVE_SONG_LIST_COMMENT', { comments, total })
      }
    },
    // 发送/回复/删除评论
    async getSendOrReqOrDelComment ({ commit }, {t,type,id,content,commentId}) {
      const result = await reqSendOrReqOrDelComment(t,type,id,content,commentId)
      // 如果没有登录 弹窗
      if (result.code === 301) {
        alert(result.msg)
        return
      }
      if (result.code === 200) {
        commit('RECEIVE_SENDORREQORDEL_COMMENT',result.comment)
        
      }
    }
  },
  getters: {
    // 获取数据并且按照标题长度排序
    rankInfo (state) {
      return state.rankInfo.sort((a,b) => {
        return a.name - b.name
      })
    },
    // 获取歌单列表并截取
    rankSongList (state) {
      return state.rankSongList.slice(0,20)
    }
  }
}