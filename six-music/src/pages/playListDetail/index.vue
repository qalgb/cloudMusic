<template>
  <div class="main">
    <div class="mod_data">
      <span class="data_cover">
        <img :src="playList.coverImgUrl" alt="" />
      </span>
      <div class="data_cont">
        <div class="data_name">
          <h1 class="data_name_txt" :title="playList.name">
            {{ playList.name }}
          </h1>
        </div>
        <div class="data_singer">
          <i class="icon_singer"></i>
          <a
            v-if="playList.creator"
            href="javascript:;"
            :title="playList.creator.nickname"
            >{{ playList.creator.nickname }}</a
          >
        </div>
        <ul class="data_info">
          <li class="data_info_item">
            <div class="data_tag_box">
              标签：
              <span>
                <a
                  href="javascript:;"
                  v-for="(item, index) in playList.tags"
                  :key="index"
                  >{{ item }}</a
                >
              </span>
            </div>
          </li>
          <li class="data_info_item">
            播放量：{{
              playList.playCount > 9999
                ? (playList.playCount / 10000).toFixed(1) + '万'
                : playList.playCount
            }}
          </li>
          <li class="data_info_item">
            收藏量：{{
              playList.subscribedCount > 9999
                ? (playList.subscribedCount / 10000).toFixed(1) + '万'
                : playList.subscribedCount
            }}
          </li>
        </ul>
        <div class="data_actions">
          <a
            href="javascript:;"
            class="btn_green"
            @click="
              toPlayAll(
                playList.tracks,
                playList.tracks[0].id,
                playList.tracks[0].al.picUrl
              )
            "
          >
            <i class="btn_green_icon_play"></i>
            播放全部
          </a>
          <a href="javascript:;" class="mod_btn">
            <i class="btn_icon_like"></i>
            收藏
          </a>
          <a href="javascript:;" class="mod_btn">
            <i class="btn_icon_comment"></i>
            评论({{
              playList.commentCount > 9999
                ? (playList.commentCount / 10000).toFixed(1) + '万'
                : playList.commentCount
            }})
          </a>
          <a href="javascript:;" class="mod_btn">
            <i class="btn_icon_menu"></i>
            更多
          </a>
        </div>
      </div>
    </div>
    <div class="detail_layout clearFix">
      <div class="detail_layout_main">
        <div class="songlist">
          <ul class="songlist_header">
            <li class="songlist_header_name">歌曲</li>
            <li class="songlist_header_author">歌手</li>
            <li class="songlist_header_album">专辑</li>
            <li class="songlist_header_time">时长</li>
          </ul>
          <ul class="songlist_list">
            <li v-for="(item, index) in playList.tracks" :key="item.id">
              <div class="songlist_item">
                <div class="songlist_number">{{ index + 1 }}</div>
                <div class="songlist_songname">
                  <a
                    href="javascript:;"
                    class="songlist_icon_mv"
                    title="Mv"
                    v-if="item.mv !== 0"
                  ></a>
                  <i
                    v-if="item.copyright === 1"
                    class="songlist_icon songlist_icon_exclusive"
                    title="独家"
                  ></i>
                  <span class="songlist_songname_txt"
                    ><a href="https://y.qq.com/n/yqq/song/001pKbCe3RyfuY.html">
                      {{ item.name }}
                      <!-- <span class="songlist_song_txt">
                      {{item.ar[0].name}}
                    </span> -->
                    </a>
                  </span>
                  <div class="list_menu">
                    <a
                      href="javascript:;"
                      class="list_menu_item list_menu_play"
                      title="播放"
                    >
                      <i
                        class="list_menu_icon_play"
                        @click="toPlay(item.id, playList.tracks[0].al.picUrl)"
                      ></i>
                      <span class="icon_txt">播放</span>
                    </a>
                    <a
                      href="javascript:;"
                      class="list_menu_item list_menu_add"
                      title="添加到歌单"
                    >
                      <i class="list_menu_icon_add"></i>
                      <span class="icon_txt">添加到歌单</span>
                    </a>
                    <a
                      href="javascript:;"
                      class="list_menu_item list_menu_down"
                      title="VIP下载"
                    >
                      <i class="list_menu_icon_down_vip"></i>
                      <span class="icon_txt">VIP下载</span>
                    </a>
                    <a
                      href="javascript:;"
                      class="list_menu_item list_menu_share"
                      title="分享"
                    >
                      <i class="list_menu_icon_share"></i>
                      <span class="icon_txt">分享</span>
                    </a>
                  </div>
                </div>
                <div class="songlist_artist" title="miwa (みわ)">
                  <a
                    href="https://y.qq.com/n/yqq/singer/001lPoTb47MkB1.html"
                    title="miwa (みわ)"
                    class="singer_name"
                    >{{ item.ar[0].name }}</a
                  >
                </div>
                <div class="songlist_album">
                  <a
                    href="https://y.qq.com/n/yqq/album/004TXeJO3hEABr.html"
                    title="guitarissimo"
                    class="album_name"
                    >{{ item.al.name }}</a
                  >
                </div>
                <div class="songlist_time">{{ getTime(item.dt) }}</div>
                <div class="songlist_other"></div>
                <a
                  href="javascript:;"
                  class="songlist_delete"
                  data-confirm="1"
                  title="删除"
                  ><span class="icon_txt">删除</span></a
                >
              </div>
            </li>
          </ul>
        </div>
        <div class="page_box">
          <div class="client_guide">
            <p class="client_guide_txt">查看更多内容，请下载客户端</p>
            <a href="javascript:;" class="client_guide_btn">立即下载</a>
          </div>
        </div>
      </div>
      <div class="detail_layout_other">
        <div class="mod_about">
          <h3 class="about_tit">简介</h3>
          <div class="about_cont">
            <p>
              {{ playList.description }}
            </p>
          </div>
          <a href="javascript:;" class="about_more" @click="handleMore"
            >[更多]</a
          >
        </div>
      </div>
      <div class="data_detail" v-if="isShow">
        <div class="data_detail_cont">
          <h3 class="data_detail_tit">简介</h3>
          <p>{{ playList.description }}</p>
        </div>
        <i class="data_detail_arrow"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { reqPlayListDetail } from '@/api'
import moment from 'moment'

export default {
  name: 'playListDetail',
  data() {
    return {
      playListId: '', // 歌单id
      playList: {}, // 歌单详情数据
      isShow: false, //默认不显示专辑简介
    }
  },
  async mounted() {
    // 更新歌单id
    this.playListId = this.$route.query.id
    // 请求数据
    const result = await reqPlayListDetail(this.playListId)
    if (result.code === 200) {
      this.playList = result.playlist
    }
  },
  methods: {
    // 更改时间格式
    getTime(time) {
      return moment(time).format('mm:ss')
    },
    // 传递歌曲id
    toPlay(id, picUrl) {
      // 获取歌单id
      // this.playListId = id
      // 路由跳转
      this.$router.push({ path: '/audioplay', query: { id, picUrl } })
    },
    // 播放全部
    toPlayAll(songListAudio, id, picUrl) {
      this.$router.push({
        path: '/audioplay',
        query: { songListAudio, id, picUrl },
      })
    },
    // 点击更多
    handleMore() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style scoped>
.main {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.mod_data {
  position: relative;
  height: 250px;
  padding-left: 305px;
  margin-top: 40px;
  margin-bottom: 35px;
}
.data_cover {
  position: absolute;
  left: 0;
  top: 0;
  width: 250px;
  height: 250px;
}
.data_cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.data_cont {
  padding-top: 13px;
}
.data_name {
  overflow: hidden;
  height: 50px;
  line-height: 50px;
}
.data_name_txt {
  float: left;
  font-size: 31px;
  line-height: 50px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
  margin-right: 10px;
}
.data_singer {
  height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
}
.icon_singer {
  float: left;
  width: 16px;
  height: 16px;
  background-image: url('../Home/images/icon_sprite.png');
  background-position: -20px -240px;
  margin: 5px 7px 0 0;
}
.data_singer a {
  font-size: 16px;
  color: #333;
}
.data_info {
  width: 520px;
  padding-top: 8px;
}
.data_info_item {
  height: 27px;
  line-height: 27px;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}
.data_tag_box span a {
  margin-right: 12px;
  color: rgba(0, 0, 0, 0.65) !important;
}
.data_actions {
  position: absolute;
  bottom: 23px;
  font-size: 0;
}
.data_actions .btn_green {
  min-width: 122px;
  text-align: center;
  padding: 0 18px;
  font-family: \5fae\8f6f\96c5\9ed1;
  border: 1px solid #31c27c;
  background-color: #31c27c;
  color: #fff !important;
  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}
.btn_green:hover {
  background-color: #2caf6f;
  border-color: #2caf6f;
  color: #fff;
}
.btn_green_icon_play {
  width: 13px;
  height: 16px;
  background-position: -80px -220px;
  vertical-align: -3px;
  display: inline-block;
  margin-right: 6px;
  background-image: url('../Home/images/icon_sprite.png');
}
.mod_btn {
  text-align: center;
  border: 1px solid #c9c9c9;
  color: #000;
  border-radius: 2px;
  padding: 0 18px;
  min-width: 122px;
  font-size: 14px;
  margin-right: 6px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}
.mod_btn:hover {
  background-color: #ededed;
  color: #333 !important;
}
.btn_icon_like {
  background-position: -60px 0;
  vertical-align: -4px;
}
.btn_icon_comment {
  background-position: -140px -120px;
}
.btn_icon_menu {
  background-position: -20px -80px;
}
.data_actions a i {
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: -3px;
  margin-right: 6px;
  background-image: url('../Home/images/icon_sprite.png');
}
/* 歌曲列表 */
.detail_layout {
  padding-right: 343px;
  /* display: flex; */
}
.clearFix::after {
  content: '';
  height: 0;
  display: block;
  clear: both;
}
.detail_layout_main {
  width: 100%;
  padding-bottom: 20px;
  float: left;
}
.songlist {
  padding-bottom: 60px;
  font-size: 14px;
  overflow: hidden;
}
.songlist_icon_mv {
  display: inline-block;
  width: 33px;
  height: 16px;
  background-position: -40px -280px;
  vertical-align: middle;
  margin-right: 6px;
  background-image: url('../Home/images/icon_sprite.png');
}
.songlist_header {
  background-color: #fbfbfd;
  height: 50px;
  line-height: 50px;
  color: #999;
  margin: 0;
}
.songlist_header,
.songlist_item {
  position: relative;
  padding-left: 46px;
  padding-right: 95px;
}
.songlist_list {
  overflow: hidden;
  width: 857px;
}
.songlist_list li {
  height: 50px;
}
.songlist_list li:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.03);
}
.songlist_item {
  font-size: 0;
  overflow: hidden;
  display: flex;
}
.songlist_list li div {
  float: none;
}
.songlist_number {
  position: absolute;
  top: 0;
  left: 10px;
  color: #999;
  width: 36px;
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.songlist_header_name,
.songlist_songname {
  width: 54%;
  float: left;
  position: relative;
  white-space: normal;
}
.songlist_songname {
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.songlist_icon_exclusive {
  display: inline-block;
  width: 34px;
  height: 16px;
  background-position: -80px -280px;
  vertical-align: middle;
  margin-right: 6px;
  background-image: url('../Home/images/icon_sprite.png');
}
.songlist_item .songlist_icon:nth-child(1) + .songlist_songname_txt {
  max-width: 72%;
  box-sizing: border-box;
}
.songlist_item:hover .list_menu {
  opacity: 1;
  pointer-events: inherit;
  right: -10px;
  margin-top: -18px;
}
.songlist_item:hover .songlist_icon:nth-child(1) + .songlist_songname_txt {
  max-width: 38%;
}
.songlist_songname_txt {
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
  white-space: nowrap;
  font-size: 14px;
}
.songlist_song_txt,
.songlist_time {
  color: #999;
  margin-right: 50px;
}
.songlist_song_txt {
  margin-left: 10px;
}
.songlist_item .list_menu {
  position: absolute;
  right: -10px;
  top: 50%;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  font-size: 0;
  height: 36px;
}
.list_menu_item {
  display: inline-block;
  margin-right: 10px;
  width: 36px;
  vertical-align: top;
}
.icon_txt {
  font: 0/0 a;
}
.list_menu a i {
  background-image: url('../Home/images/icon_list_menu.png');
  display: block;
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
}
.list_menu_item:hover .list_menu_icon_play {
  background-position: -40px 0;
}
.list_menu_icon_play {
  background-position: 0 0;
}
.list_menu_icon_add {
  background-position: 0 -80px;
}
.list_menu_item:hover .list_menu_icon_add {
  background-position: -40px -80px;
}
.list_menu_icon_down_vip {
  background-position: 0 -280px;
}
.list_menu_item:hover .list_menu_icon_down_vip {
  background-position: -40px -280px;
}
.list_menu_icon_share {
  background-position: 0 -40px;
}
.list_menu_item:hover .list_menu_icon_share {
  background-position: -40px -40px;
}
.songlist_album,
.songlist_artist,
.songlist_header_album,
.songlist_header_author {
  width: 20%;
  float: left;
  padding-left: 15px;
  box-sizing: border-box;
}
.songlist_time {
  color: #999;
  position: absolute;
  top: 0;
  right: 38px;
  width: 50px;
}
.songlist_time,
.songlist_header_time {
  margin-right: 0;
  position: absolute;
  top: 0;
  right: 38px;
  width: 50px;
}
.songlist_album,
.songlist_artist,
.songlist_number,
.songlist_other,
.songlist_time {
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.songlist_header_other,
.songlist_other {
  position: absolute;
  top: 0;
  right: 0;
  width: 38px;
  overflow: inherit;
}
.client_guide {
  margin-bottom: 22px;
  overflow: hidden;
}
.client_guide_txt {
  font-size: 18px;
  color: #000;
  text-align: center;
}
.client_guide_btn {
  display: block;
  margin: 20px auto 0;
  width: 175px;
  height: 41px;
  line-height: 41px;
  font-size: 16px;
  color: #fff !important;
  text-align: center;
  border-radius: 41px;
  background-color: #31c27c;
}
.client_guide_btn:hover {
  color: #fff;
  background-color: #2caf6f;
}
.detail_layout_other {
  position: relative;
  width: 290px;
  margin-right: -343px;
  padding-bottom: 20px;
  float: right;
}
.mod_about {
  line-height: 22px;
  margin-bottom: 25px;
  margin-top: -8px;
}
.about_tit {
  font-size: 20px;
  font-weight: 400;
  line-height: 46px;
}
.about_cont {
  max-height: 88px;
  overflow: hidden;
  color: #000;
}
.about_more {
  margin-right: 10px;
}
.data_detail {
  /* display: none; */
  position: absolute;
  z-index: 1000000;
  top: 376px;
  right: 303px;
  width: 580px;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  /* border: 1px solid #ddd; */
}
.data_detail_cont {
  max-height: 400px;
  font-size: 14px;
  line-height: 22px;
  margin: 30px 5px 30px 10px;
  overflow-y: auto;
}
.data_detail_tit {
  line-height: 22px;
  font-size: 20px;
  font-weight: 400;
  padding: 0 0 20px;
  margin: 0 24px 0 19px;
}
.data_detail_cont p {
  min-height: 22px;
  text-align: justify;
  word-break: break-all;
  margin: 0 24px 0 19px;
}
.data_detail_arrow {
  position: absolute;
  top: 50px;
  right: -11px;
  width: 11px;
  height: 17px;
  background: url('../Home/images/popup_arrow.png') 0 -17px no-repeat;
}
</style>
