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
  url:`/playlist/detail?${id}`,
  method: 'GET',
})
/*
  请求歌曲url
  说明：必须调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 才能获取对应的音乐的 url,未登录状态返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
*/ 
export const reqSongUrl = (id) => ajax({
  url:`/song/url?${id}`,
  method:'GET',
})