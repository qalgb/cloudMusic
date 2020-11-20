<template>
  <div class="mvContainer">
    <div class="section_inner">
      <!-- 导航 -->
      <div class="index_hd">
        <h2 class="index_tit">
          <i class="icon_txt">MV</i>
        </h2>
      </div>
      <!-- 切换 -->
      <div class="mod_index_tab">
        <a href="javascript:;" class="index_tab_item" v-for="(item,index) in area" :key="index" @click="handleSlide(index)" :class="
            currentIndex === index ? 'index_tab_item_current' : 'index_tab_item'
          ">{{item}}</a>
      </div>
      <!-- 图片滑动 -->
      <div class="swiper-container" ref="sw1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in mvList" :key="item.id">
            <div class="song_cover">
              <img v-lazy="item.cover" />
              <i class="mod_cover__mask" @click="toMvPlay(item.id)"></i>
              <i class="mod_cover__icon_play"></i>
            </div>
            <div class="songInfo">
              <a href="javascript:;">{{item.name}}</a>
              <p>
                <a href="javascript:;">{{item.artistName}}</a>
              </p>
              <div class="mvlist_listen">
                <span>
                  <i></i>
                  {{item.playCount > 9999 ? (item.playCount / 10000).toFixed(1) + '万' : item.playCount}}
                </span>
              </div>
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
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'Mv',
  data () {
    return {
      area: ['精选','内地','港台','欧美','日本','韩国'],
      currentIndex: 0
    }
  },
  watch: {
    mvList:{
      handler: function () {
        if (this.mvList.length === 0) return
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.sw1, {
            slidesPerView: 5, // 每一行显示图片的数量
            slidesPerColumn: 2,
            slidesPerGroup: 10, // 每次移动的图片数量
            spaceBetween: 20,
            // loop: true,
            // loopedSlides: 5,
            observer: true,
            observeParents: true,
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
      immediate: true
    }
  },
  computed: {
    ...mapState({
      mvList: state => state.home.mvList
    }),
    ...mapGetters(['getTopList'])
  },
  mounted () {
    this.getMvList()
  },
  methods: {
    getMvList (location) {
      this.$store.dispatch('getMvList', location)
    },
    // 点击切换
    handleSlide (index) {
      // 更新下标
      this.currentIndex = index
      let area = this.area[index]
      // 请求数据
      this.getMvList(area)
    },
    // 跳转mv播放
    toMvPlay(id) {
      this.$router.push({path:'/mvvideo',query:{id}})
    }
  }
}
</script>

<style scoped>
a{
  color: #000!important;
}
.mvContainer {
  position: relative;
  background: url('../images/bg_detail.jpg') 50% 0 repeat-x;
}
.mvContainer .section_inner {
  z-index: 2;
  overflow: hidden;
}
.mvContainer:hover .swiper-button-prev {
  opacity: 1;
  left: 0;
}
.mvContainer:hover .swiper-button-next {
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
  background-position: 0 -250px;
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
  height: 502px;
  width: 1200px;
  overflow: hidden;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 224px !important;
  height: 231.66px;
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
  height: 126.66px;
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
.songInfo .mvlist_listen{
  line-height: 18px;
    height: 20px;
}
.songInfo .mvlist_listen i{
  display: inline-block;
    width: 19px;
    height: 12px;
    background-position: -180px -20px;
    margin-right: 5px;
    vertical-align: -1px;
    background-image: url('../images/icon_sprite.png');
}
.swiper-slide p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 24px;
  margin-bottom: 0;
}
.swiper-slide p a{
  color: #999 !important;
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
