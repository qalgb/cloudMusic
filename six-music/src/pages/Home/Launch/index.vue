<template>
  <div class="launchContainer">
    <div class="section_inner">
      <div class="index_hd">
        <h2 class="index_tit">
          <i class="icon_txt">歌单推荐</i>
        </h2>
      </div>
      <a href="javascript:;" class="mod_btn">
        <i class="mod_btn_icon_play"></i>播放全部
      </a>
      <!-- 切换 -->
      <div class="mod_index_tab">
        <a href="javascript:;" v-for="(item,index) in location" :key="index" :class="(currentIndex === index)? 'index_tab_item_current' : 'index_tab_item'" @click="handleSelect(index)"
          >{{item.title}}</a
        >
      </div>
      <!-- 点击滑动 -->
      <div class="swiper-container" ref="sw1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in newSongList" :key="item.id">
            <div class="song_cover">
              <img :src="item.album.picUrl" />
              <i class="mod_cover__mask"></i>
              <i class="mod_cover__icon_play"></i>
            </div>
            <div class="songInfo">
              <a href="javascript:;" class="songlist_song">{{ item.name }}</a>
              <p>
                <a href="javascript:;">{{ item.artists[0].name }}</a>
              </p>
            </div>
            <div class="songlist_time">播放量：{{item.bMusic.playTime>9999 ? (item.bMusic.playTime/10000).toFixed(1)+'万':item.bMusic.playTime}}</div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { mapState } from 'vuex'

export default {
  name: 'Launch',
  data() {
    return {
      location: [
        {title: '最新', type: 0},
        {title: '华语', type: 7},
        {title: '欧美', type: 96},
        {title: '韩国', type: 16},
        {title: '日本', type: 8}
      ],
      currentIndex: 0
    }
  },
  computed: {
    ...mapState({
      newSongList: (state) => state.home.newSongList,
    }),
  },
  watch: {
    newSongList: {
      // 该回调将会在侦听开始之后被立即调用
      handler: function () {
        if (this.newSongList.length === 0) return
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.sw1, {
            slidesPerView: 3, // 每一行显示图片的数量
            slidesPerColumn: 3, //显示三行
            slidesPerGroup: 9, // 每次移动的图片数量
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            // loopedSlides: 5,
            // loop: true,
            speed: '1000ms',
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })
        })
      },
      immediate: true,
    },
  },
  mounted() {
    this.getNewSongList(0)
  },
  methods: {
    // 获取新歌列表
    getNewSongList(type) {
      this.$store.dispatch('getNewSongList',type)
    },
    // 点击导航栏
    handleSelect (index) {
      let type = this.location[index].type
      // 更新下标
      this.currentIndex = index
      // 获取数据
      this.getNewSongList(type)
    }
  },
}
</script>

<style scoped>
.launchContainer {
  position: relative;
  background: url('../images/bg_detail.jpg') 50% 0 repeat-x;
}
.launchContainer .section_inner {
  z-index: 2;
  overflow: hidden;
}
.launchContainer:hover .swiper-button-prev {
  opacity: 1;
  left: 0;
}
.launchContainer:hover .swiper-button-next {
  opacity: 1;
  right: 0;
}
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.index_hd {
  position: relative;
  padding-top: 4.16667%;
  padding-bottom: 2%;
}
.index_hd .index_tit {
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 40px;
  background-image: url('../images/index_tit.png');
  background-position: 0 -50px;
}
.mod_btn {
  position: absolute;
  left: 0;
  top: initial;
  margin-top: -10px;
  border: 1px solid #c9c9c9;
  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  padding: 0 23px;
  height: 38px;
  line-height: 38px;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}
.mod_btn:hover {
  background-color: #ededed;
  color: #333 !important;
}
.mod_btn_icon_play {
  width: 13px;
  height: 16px;
  background-position: -60px -220px;
  display: inline-block;
  margin-right: 6px;
  background-image: url('../images/icon_sprite.png');
  background-repeat: no-repeat;
  vertical-align: -3px;
}
.icon_txt {
  font: 0/0 a;
}
.mod_index_tab {
  height: 50px;
  text-align: center;
}
.index_tab_item {
  display: inline-block;
  font-size: 15px;
  margin: 0 24px;
  color: #333;
}
.index_tab_item_current {
  display: inline-block;
  font-size: 15px;
  margin: 0 24px;
  color: #31c27c !important;
}
.swiper-container {
  margin-bottom: 20px;
  height: 370px;
}
.swiper-slide {
  position: relative;
  height: 86px;
  overflow: hidden;
  border-top: 1px solid #f2f2f2;
  /* margin: -1px 30px 13px 0; */
  padding-top: 12px;
  font-size: 14px;
}
.swiper-slide .song_cover {
  position: relative;
  float: left;
  width: 86px;
  height: 86px;
  margin-right: 14px;
  overflow: hidden;
}
.swiper-container .swiper-slide img {
  width: 86px;
  height: 86px;
  transform: scale(1) translateZ(0);
  transition: transform 0.75s;
}
.swiper-container .swiper-slide .song_cover:hover img {
  transform: scale(1.07) translateZ(0);
  transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
}
.swiper-container .swiper-slide .song_cover .mod_cover__mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: opacity 0.5s;
}
.swiper-container .swiper-slide .song_cover:hover .mod_cover__mask {
  opacity: 0.2;
  transition: opacity 0.5s;
}
.swiper-container .swiper-slide .song_cover .mod_cover__icon_play {
  position: absolute;
  background-image: url('../images/cover_play.png');
  left: 50%;
  top: 50%;
  margin: -35px;
  opacity: 0;
  width: 70px;
  height: 70px;
  transform: scale(0.7) translateZ(0);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  zoom: 1;
  background-size: 68%;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}
.swiper-container .swiper-slide .song_cover:hover .mod_cover__icon_play {
  background-image: url('../images/cover_play.png');
  transform: scale(1) translateZ(0);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  opacity: 1;
  background-size: 68%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.songInfo {
  float: left;
  padding: 22px 0;
}
.songInfo a{
  color: #000 !important;
}
.songInfo .songlist_song {
  font-size: 14px;
  display: inline-block;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
}
.songInfo p a {
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
}
.songlist_time {
  position: absolute;
  right: 30px;
  bottom: 0;
  line-height: 86px;
  color: #999;
}
.swiper-button-next {
  left: auto;
  right: 0;
}
.swiper-button-prev {
  left: -80px;
}
.swiper-button-next {
  right: -80px;
}
.swiper-button-next,
.swiper-button-prev {
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  top: 50%;
  margin-top: -84px;
  width: 79px;
  height: 108px;
  background: rgba(0, 0, 0, 0.1);
  color: #eee;
  cursor: pointer !important;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: rgba(0, 0, 0, 0.2);
}
.section_inner
  /deep/
  .swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 10px;
}
.section_inner /deep/ .swiper-pagination-bullet-active {
  background-color: rgba(0, 0, 0, 0.3);
}
.swiper-pagination {
  padding-bottom: 10px;
}
</style>
