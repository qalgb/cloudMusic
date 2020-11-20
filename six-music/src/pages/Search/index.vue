<template>
  <div class="searchContainer">
    <div :class="isMove === true ? 'mod_search action' : 'mod_search'">
      <!-- 搜索框 -->
      <div class="search_input">
        <input
          type="text"
          class="search_input_input"
          placeholder="搜索音乐、MV、歌单、用户"
        />
        <button class="search_btn">
          <i class="icon_search"></i>
          <span class="icon_txt">搜索</span>
        </button>
      </div>
      <!-- 热门搜索 -->
      <div class="search_tips">
        热门搜索：
        <a href="javascript:;" v-for="(item, index) in hots" :key="index">{{
          item.first
        }}</a>
      </div>
    </div>
    <!-- 搜索内容 -->
    <div class="main">
      <div class="main_inner">
        <!-- 搜索结果 -->
        <div class="result">
          <!-- tab -->
          <div class="tab">
            <a href="javascript:;" class="current">单曲</a>
            <a href="javascript:;">专辑</a>
            <a href="javascript:;">MV</a>
            <a href="javascript:;">歌单</a>
            <a href="javascript:;">用户</a>
            <a href="javascript:;">歌词</a>
          </div>
          <!-- 结果列表 -->
          <!-- 单曲 -->
          <div class="search_tab_cont">
            <div class="songlist_toolbar">
              <a href="javascript:;">
                <i class="btn_icon_play"></i>
                播放全部
              </a>
              <a href="javascript:;">
                <i class="btn_icon_add"></i>
                添加到
              </a>
              <a href="javascript:;">
                <i class="btn_icon_down"></i>
                下载
              </a>
              <a href="javascript:;">
                <i class="btn_icon_batch"></i>
                批量操作
              </a>
            </div>
            <div class="songlist">
              <ul class="songlist_header clearFix">
                <li class="songlist_header_name">歌曲</li>
                <li class="songlist_header_author">歌手</li>
                <li class="songlist_header_album">专辑</li>
                <li class="songlist_header_time">时长</li>
              </ul>
              <ul class="songlist_list">
                <li v-for="item in searchDetail" :key="item.id">
                  <div class="songlist_item">
                    <div class="songlist_songname">
                      <i class="songlist_icon songlist_icon_exclusive"></i>
                      <a
                        href="javascript:;"
                        class="songlist_icon songlist_icon_mv"
                      ></a>
                      <span class="songlist_songname_txt">
                        <a href="javascript:;">{{item.name}}</a>
                      </span>
                      <!-- 移入显示图标 -->
                      <div class="list_menu">
                        <a
                          href="javascript:;"
                          class="list_menu_item list_menu_play"
                          title="播放"
                        >
                          <i
                            class="list_menu_icon_play"
                            @click="toPlay(item.id)"
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
                    <div class="songlist_artist">
                      <a
                        href="javascript:;"
                        class="singer_name"
                        v-for="ar in item.ar"
                        :key="ar.id"
                        >{{ ar.name }}</a
                      >
                    </div>
                    <div class="songlist_album">
                      <a href="javascript:;" class="album_name">
                        {{ item.al.name }}
                      </a>
                    </div>
                    <div class="songlist_time">{{ timeFormat(item.dt) }}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 下载 -->
          <div class="page_box">
            <div class="client_guide">
              <p class="client_guide_txt">查看更多内容，请下载客户端</p>
              <a href="javascript:;" class="client_guide_btn">立即下载</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'Search',
  data() {
    return {
      isMove: false, // 默认不动
      keyWord: '', // 搜索框关键字
    }
  },
  
  computed: {
    ...mapState({
      searchDetail: (state) => state.search.searchDetail,
      hots: (state) => state.search.hots,
    }),
  },

  async mounted() {
    // 页面滚动事件
    window.addEventListener('scroll', this.handleScroll)
    // 搜索请求
    // 更新关键字
    this.keyWord = this.$route.query.s
    // 分发搜索结果
    await this.$store.dispatch('getSearchDetail', this.keyWord)
    // 分发热词
    await this.$store.dispatch('getHots')

  },
  methods: {
    // 页面滚动
    handleScroll() {
      // 页面滚动距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // 输入框离顶部距离
      // let offsetTop = this.$refs.ipt.offsetTop
      scrollTop > 300 ? (this.isMove = true) : (this.isMove = false)
    },
    // 时间格式
    timeFormat(time) {
      return moment(time).format('mm:ss')
    }
  },
}
</script>

<style scoped>
/* 搜索框过渡 */
.action .search_input {
  position: fixed;
  top: 0;
  left: 50%;
  margin: 0 -600px;
  width: 1130px;
  height: 67px;
  padding-left: 0;
  background-color: #fff;
  z-index: 999;
}
.action .search_input_input {
  width: 96%;
  height: 67px;
  font-size: 18px;
}
.action .search_btn {
  width: 68px;
  height: 68px;
  background-color: #31c27c;
}
.action .icon_search {
  margin-top: -11px;
  right: 23px;
  width: 23px;
  height: 23px;
  background-position: 0 -260px;
}
.action .search_tips {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  height: 67px;
  background-color: #fff;
  border-bottom: 1px solid #dddbdb;
  box-shadow: 0 0 10px rgba(183, 183, 183, 0.65);
  z-index: 99;
  overflow: hidden;
  line-height: 999px;
}

.searchContainer .mod_search {
  position: relative;
  height: 247px;
  background-position: 50%;
  background-image: url('../Home/images/bg_search.jpg');
  background-size: cover;
}
.search_input {
  border: 0 none;
  padding: 0 70px 0 15px;
  line-height: 50px;
  left: 50%;
  top: 85px;
  margin-top: 0;
  margin-left: -322px;
  background: #fff;
  width: 554px;
  height: 50px;
  position: relative;
  border-radius: 3px;
  transition: width 0.6s ease-out;
  box-sizing: content-box;
}
.search_input_input {
  width: 554px;
  height: 50px;
  border: 0 none;
  font-size: 14px;
  background: 0 0;
  outline: none;
  transition: width 0.6s ease-out, visibility 0.6s 1ms ease-out;
}
.search_btn {
  width: 50px;
  height: 50px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  position: absolute;
  top: 0;
  right: 0;
  border: 0 none;
  overflow: visible;
  background: 0 0;
  cursor: pointer;
}
.icon_search {
  position: absolute;
  top: 50%;
  right: 11px;
  margin-top: -8px;
  width: 16px;
  height: 16px;
  background-position: 0 -40px;
  background-image: url('../Home/images/icon_sprite.png');
}
.icon_txt {
  font: 0/0 a;
}
.search_tips {
  margin-top: 104px;
  text-align: center;
  color: #fff;
  padding-left: 20px;
}
.search_tips a {
  margin-right: 20px;
  color: #fff !important;
}
.main {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.main_inner .result .tab {
  position: relative;
  zoom: 1;
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 30px;
  height: 56px;
  line-height: 56px;
}
.result .tab .current {
  color: #31c27c !important;
}
.result .tab a {
  position: relative;
  float: left;
  font-size: 16px;
  overflow: hidden;
  margin-right: 55px;
  height: 56px;
  line-height: 56px;
}
.songlist_toolbar {
  position: relative;
  margin-bottom: 20px;
  font-size: 0;
}
.songlist_toolbar a {
  min-width: 122px;
  text-align: center;
  border: 1px solid #c9c9c9;
  color: #000;
  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  padding: 0 23px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}
.songlist_toolbar a i {
  display: inline-block;
  margin-right: 6px;
  background-repeat: no-repeat;
  vertical-align: -3px;
  background-image: url('../Home/images/icon_sprite.png');
}
.songlist_toolbar a .btn_icon_play {
  width: 13px;
  height: 16px;
  background-position: -60px -220px;
}
.songlist_toolbar a .btn_icon_add {
  width: 16px;
  height: 16px;
  background-position: -20px 0;
}
.songlist_toolbar a .btn_icon_down {
  width: 16px;
  height: 16px;
  background-position: -40px -220px;
}
.songlist_toolbar a .btn_icon_batch {
  width: 16px;
  height: 16px;
  background-position: -120px 0;
}
.songlist {
  padding-bottom: 40px;
  font-size: 14px;
  overflow: hidden;
}
.songlist .songlist_header {
  position: relative;
  padding-right: 122px;
  padding-left: 20px;
  height: 50px;
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.015);
  color: #999;
}
.songlist_header_name {
  float: left;
  width: 47.685185%;
  position: relative;
  white-space: normal;
}
.songlist_header_album,
.songlist_header_author {
  float: left;
  padding-left: 15px;
  width: 25.5%;
  box-sizing: border-box;
}
.songlist_header_time {
  position: absolute;
  top: 0;
  right: 64px;
  width: 50px;
}
.songlist_item {
  padding-right: 122px;
  padding-left: 20px;
  clear: both;
  font-size: 0;
  overflow: hidden;
  position: relative;
}
.songlist_songname {
  float: left;
  width: 47.685185%;
  position: relative;
  white-space: normal;
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
.songlist_icon_mv {
  display: inline-block;
  width: 33px;
  height: 16px;
  background-position: -40px -280px;
  vertical-align: middle;
  margin-right: 6px;
  background-image: url('../Home/images/icon_sprite.png');
}
.songlist_item .songlist_icon:nth-child(2) + .songlist_songname_txt {
  max-width: 62%;
  box-sizing: border-box;
}
.songlist_songname_txt {
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 56%;
  margin-right: 8px;
  white-space: nowrap;
  font-size: 14px;
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
.highlight {
  color: #31c27c;
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
</style>
