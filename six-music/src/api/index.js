// 封装每个接口的api函数
import ajax from "./ajax";

// 获取歌单分类标签
export const reqSongListTag = () => ajax.get(`/playlist/hot`);
// 获取歌单推荐
export const reqSongRecommend = () => ajax.get(`/personalized?limit=10`);
// 获取精品歌单
export const reqSongHotList = (tag) =>
  ajax.get("/top/playlist/highquality/?cat=" + tag);
// 获取新音乐
export const reqNewSongList = (code) => ajax.get(`/top/song?type=${code}`);
// 获取banner
export const reqBanners = () => ajax.get("/homepage/block/page");
// 获取新碟首发
export const reqDiscList = (area) =>
  ajax.get(`/album/new?area=${area}&limit=20`);
// 获取排行榜摘要
export const reqTopList = () => ajax.get("/toplist/detail");

// 请求所有榜单数据
export const reqRankInfo = () =>
  ajax({
    url: "/toplist",
    method: "GET",
  });
// 请求所有榜单歌曲列表
export const reqRankSongList = (id) =>
  ajax({
    url: `/playlist/detail?id=${id}`,
    method: "GET",
  });
// 请求歌单评论
export const reqSongListComment = (id) =>
  ajax({
    url: `/comment/playlist?id=${id}`,
    method: "GET",
  });
// 发送/删除/回复评论
// t:0 删除   t:1 发送   t:2 回复 回复必须要用commentId
export const reqSendOrReqOrDelComment = (t, type, id, content, commentId) =>
  ajax({
    url: `/comment?t=${t}&type=${type}&id=${id}&content=${content}&commentId=${commentId}`,
    method: "GET",
  });
/*
  请求歌曲url
  说明：必须调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 才能获取对应的音乐的 url,未登录状态返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
*/

export const reqSongUrl = (id) =>
  ajax({
    url: `/song/url?${id}`,
    method: "GET",
  });
// 获取全部mv
export const reqAllMv = () => ajax.get(`/mv/all`);

//请求登录信息
export const reqLoginInfo = (phoneNum, password) =>
  ajax.get(`/login/cellphone?phone=${phoneNum}&password=${password}`);
//获取用户信息
export const reqUserInfo = (cookie) =>
  ajax.get(`/user/account?cookie=${cookie}`);
//获取用户详情uid
export const reqUserDetail = (uid) =>
  ajax.get(`/user/detail?uid=${uid}`);
//获取账户信息 , 歌单，收藏，mv, dj 数量
export const reqAccountInfo = (cookie) =>
  ajax.get(`/user/subcount?cookie=${cookie}`);
// 获取详细歌单信息
export const reqClassIfication = () => ajax.get("/playlist/catlist");

// yyj 获取精品推荐歌单
export const reqRecommended = () => ajax.get('/top/playlist')

// yyj 获取精品最新歌单
export const reqLatestPlaylist = () => ajax.get(`/top/playlist?limit=20&order=new`)

// yyj 获取分类歌单
export const reqCategoryPlaylist = (name) => ajax.get(`/top/playlist?limit=20&cat=${name}`)

// 