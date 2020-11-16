// 封装每个接口的api函数
import ajax from './ajax'

// 获取歌单分类标签
export const reqSongListTag = () => ajax.get(`/playlist/hot`)
// 获取歌单推荐
export const reqSongRecommend = () => ajax.get(`/personalized?limit=10`)
// 获取精品歌单
export const reqSongHotList = (tag) => ajax.get('/top/playlist/highquality/?cat='+tag)
// 请求所有榜单数据
export const reqRankInfo = () => ajax({
  url: '/toplist',
  method: 'GET'
})
// 请求所有榜单歌曲列表
export const reqRankSongList = (id) => ajax({
  url:`/playlist/detail?id=${id}`,
  method: 'GET',
})
// 请求歌单评论
export const reqSongListComment = (id) => ajax({
  url: `/comment/playlist?id=${id}`,
  method: 'GET'
})
// 发送/删除/回复评论
// t:0 删除   t:1 发送   t:2 回复 回复必须要用commentId
export const reqSendOrReqOrDelComment = (t,type,id,content,commentId) => ajax({
  url: `/comment?t=${t}&type=${type}&id=${id}&content=${content}&commentId=${commentId}`,
  method: 'GET'
})
