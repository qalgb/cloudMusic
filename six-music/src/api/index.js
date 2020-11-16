import ajax from './ajax'

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