<template>
  <div class="DiscContainer">
    <div class="section_inner">
      <!-- 导航 -->
      <div class="index_hd">
        <h2 class="index_tit">
          <i class="icon_txt">新碟首发</i>
        </h2>
      </div>
      <a href="javascript:;" class="index_more"
        >更多<i class="icon_index_arrow"></i
      ></a>
      <!-- 切换 -->
      <div class="mod_index_tab">
        <a
          href="javascript:;"
          @click="handleSlide(index)"
          :key="index"
          v-for="(item, index) in area"
          :class="
            currentIndex === index ? 'index_tab_item_current' : 'index_tab_item'
          "
          >{{ item.title }}</a
        >
      </div>
      <!-- 图片滑动 -->
      <div class="swiper-container" ref="sw1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in discList" :key="item.id">
            <div class="song_cover" @click="toDetail(item.id)">
              <img v-lazy="item.picUrl" />
              <i class="mod_cover__mask"></i>
              <i class="mod_cover__icon_play"></i>
            </div>
            <div class="songInfo">
              <a href="javascript:;">{{ item.name }}</a>
              <p>
                {{ item.artist.name }}
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
  name: 'DiscList',
  data() {
    return {
      area: [
        { title: '华语', code: 'ZH' },
        { title: '欧美', code: 'EA' },
        { title: '韩国', code: 'KR' },
        { title: '日本', code: 'JP' },
        { title: '其他', code: 'ALL' },
      ],
      currentIndex: 0,
    }
  },
  computed: {
    ...mapState({
      discList: (state) => state.home.discList,
    }),
  },
  watch: {
    discList: {
      handler: function () {
        if (this.discList.length === 0) return
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.sw1, {
            slidesPerView: 5, // 每一行显示图片的数量
            slidesPerColumn: 2,
            spaceBetween: 20,
            // loopedSlides: 5,
            slidesPerGroup: 10, // 每次移动的图片数量
            // loop: true,
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
    },
  },
  mounted() {
    this.getDiscList('ZH')
  },
  methods: {
    // 获取新碟
    getDiscList(area) {
      this.$store.dispatch('getDiscList', area)
    },
    // 点击切换类别
    handleSlide(index) {
      this.currentIndex = index
      let area = this.area[index].code
      // 获取数据
      this.getDiscList(area)
    },
    // 跳转详情(待修改)
    toDetail (id) {
      this.$router.push({path:'/playlistdetail',query:{id}})
    }
  },
}
</script>

<style scoped>
a{
  color: #000!important;
}
.DiscContainer {
  position: relative;
  background: url('../images/bg_detail.jpg') 50% 0 repeat-x;
}
.DiscContainer .section_inner {
  z-index: 2;
  overflow: hidden;
}
.DiscContainer:hover .swiper-button-prev {
  opacity: 1;
  left: 0;
}
.DiscContainer:hover .swiper-button-next {
  opacity: 1;
  right: 0;
}
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.section_inner .index_more {
  position: absolute;
  right: 0;
  top: initial;
}
.section_inner .icon_index_arrow {
  display: inline-block;
  width: 7px;
  height: 12px;
  background-position: -120px -40px;
  background-image: url('../images/icon_sprite.png');
  margin-left: 6px;
}
.section_inner .index_more:hover .icon_index_arrow {
  display: inline-block;
  width: 7px;
  height: 12px;
  background-position: -120px -60px;
  background-image: url('../images/icon_sprite.png');
  margin-left: 6px;
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
  background-position: 0 -150px;
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
  height: 660px;
  width: 1200px;
  overflow: hidden;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 224px !important;
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
