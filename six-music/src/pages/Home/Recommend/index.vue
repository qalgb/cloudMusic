<template>
  <div class="recommendContainer">
    <div class="section_inner">
      <div class="index_hd">
        <h2 class="index_tit">
          <i class="icon_txt">歌单推荐</i>
        </h2>
      </div>
      <!-- 切换 -->
      <div class="mod_index_tab">
        <a
          href="javascript:;"
          @click="handleRecommend"
          :class="isShow ? 'index_tab_item_current' : 'index_tab_item'"
          >为你推荐</a
        >
        <div class="exTab" v-for="(item, index) in songListTag" :key="item.id">
          <a
            href="javascript:;"
            :class="(currentIndex === index)? 'index_tab_item_current' : 'index_tab_item'"
            @click="slideChange(index,$event)"
            :data-cat="item.name"
            >{{ item.name }}</a
          >
        </div>
      </div>
      <!-- 图片滑动 -->
      <div class="swiper-container" ref="sw1" v-if="isShow">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="item in songRecommendList"
            :key="item.id"
          >
            <div class="song_cover">
              <img v-lazy="item.picUrl" />
              <i class="mod_cover__mask" @click="sendPlayListId(item.id)"></i>
              <i class="mod_cover__icon_play"></i>
            </div>
            <div class="songInfo">
              <a href="javascript:;">{{ item.name }}</a>
              <p>
                播放量：{{
                  item.playCount > 9999
                    ? (item.playCount / 10000).toFixed(1) + '万'
                    : item.playCount
                }}
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-button-njext"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="swiper-container" ref="sw2" v-else>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in hotSongList" :key="item.id">
            <div class="song_cover">
              <img :src="item.coverImgUrl" />
              <i class="mod_cover__mask"></i>
              <i class="mod_cover__icon_play"></i>
            </div>
            <div class="songInfo">
              <a href="javascript:;">{{ item.name }}</a>
              <p>
                播放量：{{
                  item.playCount > 9999
                    ? (item.playCount / 10000).toFixed(1) + '万'
                    : item.playCount
                }}
              </p>
            </div>
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
  name: 'Recommend',
  data() {
    return {
      isShow: true,
      currentIndex: -1,
      songId: '' // 点击歌曲的Id
    }
  },
  computed: {
    ...mapState({
      // 歌单分类标签
      songListTag: (state) => state.home.songListTag,
      // 推荐列表
      songRecommendList: (state) => state.home.songRecommendList,
      // 精品歌单
      hotSongList: (state) => state.home.hotSongList,
    }),
  },
  watch: {
    songRecommendList: {
      // 该回调将会在侦听开始之后被立即调用
      handler: function () {
        if (this.songRecommendList.length === 0) return
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.sw1, {
            slidesPerView: 'auto', // 每一屏显示图片的数量
            loopedSlides: 5,
            slidesPerGroup: 5, // 每次移动的图片数量
            loop: true,
            speed: '1000ms',
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      },
      immediate: true,
    },
    hotSongList: {
      // 该回调将会在侦听开始之后被立即调用
      handler: function () {
        if (this.songRecommendList.length === 0) return
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.sw2, {
            slidesPerView: 'auto', // 每一屏显示图片的数量
            loopedSlides: 5,
            slidesPerGroup: 5, // 每次移动的图片数量
            loop: true,
            observer: true,
            observerParents: true,
            speed: '1000ms',
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      },
      immediate: true,
    },
  },
  mounted() {
    // 获取歌单分类标签
    this.getSongListTag()
    // 请求推荐列表
    this.getRecommendList()
  },
  methods: {
    // 获取歌单分类标签
    getSongListTag() {
      this.$store.dispatch('getSongList')
    },
    // 获取推荐
    getRecommendList() {
      this.$store.dispatch('getSongRecommendList')
    },
    // 点击推荐
    handleRecommend() {
      this.getRecommendList()
      this.$router.replace(this.$route.path)
      this.isShow = true
      this.currentIndex = -1
    },
    // 点击精品歌单标签
    slideChange(index,event) {
      const { cat } = event.target.dataset
      console.log(cat)
      this.currentIndex = index
      this.$router.replace({ path: '/', query: { cat } })
      // 获取精品歌单
      this.$store.dispatch('getHotSongList', cat)
      if (this.$route.fullPath.indexOf('cat') !== -1) {
        this.isShow = false
      }
    },
    // 点击获取歌单id
    sendPlayListId (id) {
      // 更新歌曲id
      this.songId = id
      // 跳转
      this.$router.push({path:'/playlist',query:{id:this.songId}})
    }
  },
}
</script>

<style scoped>
.recommendContainer {
  position: relative;
  background: url('../images/bg_detail.jpg') 50% 0 repeat-x;
}
.recommendContainer .section_inner {
  z-index: 2;
  overflow: hidden;
}
.recommendContainer:hover .swiper-button-prev {
  opacity: 1;
  left: 0;
}
.recommendContainer:hover .swiper-button-next {
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
}
.icon_txt {
  font: 0/0 a;
}
.mod_index_tab {
  height: 50px;
  text-align: center;
}
.mod_index_tab .exTab {
  display: inline-block;
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
  color: #31c27c !important;
  margin: 0 24px;
}
.swiper-container {
  height: 368px;
  width: 1200px;
  overflow: hidden;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 244px !important;
  height: 310px;
}
.swiper-container .swiper-slide .song_cover {
  position: relative;
  width: 224px;
  overflow: hidden;
  margin-bottom: 15px;
  cursor: pointer;
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
}
.swiper-container .swiper-slide .song_cover:hover .mod_cover__icon_play {
  background-image: url('../images/cover_play.png');
  transform: scale(1) translateZ(0);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  opacity: 1;
}
.swiper-container .swiper-slide img {
  width: 224px;
  height: 224px;
  transform: scale(1) translateZ(0);
  transition: transform 0.75s;
}
.swiper-container .swiper-slide .song_cover:hover img {
  transform: scale(1.07) translateZ(0);
  transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
}
.swiper-slide .songInfo {
  width: 224px;
}
.swiper-slide .songInfo a{
  color: #000 !important;
}
.swiper-slide p {
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
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
  margin-top: -125px;
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
