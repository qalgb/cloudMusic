<template>
  <div class="focusContainer">
    <div class="section_inner">
      <div class="index_hd">
        <h2 class="index_tit">
          <i class="icon_txt">精彩推荐</i>
        </h2>
      </div>
      <!-- 图片滑动 -->
      <div class="swiper-container" ref="sw1">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in bannerList"
            :key="index"
          >
            <a href="javascript:;" class="list_link">
              <img v-lazy="item.pic" :alt="item.typeTitle" />
            </a>
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
  name: 'Focus',
  data() {
    return {}
  },
  watch: {
    bannerList: {
      handler: function () {
        if (this.bannerList.length === 0) return
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.sw1, {
            slidesPerView: 'auto', // 每一屏显示图片的数量
            loopedSlides: 2,
            slidesPerGroup: 2, // 每次移动的图片数量
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
    },
  },
  computed: {
    ...mapState({
      bannerList: (state) => state.home.bannerList,
    }),
  },
  mounted() {
    // 分发action(banners)
    this.$store.dispatch('getBannerList')
  },
}
</script>

<style scoped>
.focusContainer {
  position: relative;
  background: url('../images/bg_detail.jpg') 50% 0 repeat-x;
}
.focusContainer .section_inner {
  z-index: 2;
  overflow: hidden;
}
.focusContainer:hover .swiper-button-prev {
  opacity: 1;
  left: 0;
}
.focusContainer:hover .swiper-button-next {
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
  background-position: 0 -100px;
  background-image: url('../images/index_tit.png');
}
.icon_txt {
  font: 0/0 a;
}
.swiper-container {
  height: 314px;
  width: 1200px;
  overflow: hidden;
  position: relative;
}
.swiper-container .swiper-wrapper .swiper-slide {
  display: inline-block;
  width: 610px;
  height: 236px;
  box-sizing: border-box;
  padding-right: 20px;
}
.swiper-container .swiper-wrapper .swiper-slide .list_link {
  position: relative;
  display: block;
  width: 100%;
  padding-top: 40%;
}
.swiper-container .swiper-wrapper .swiper-slide .list_link img {
  position: absolute;
  top: 0;
  left: 0;
  width: 590px;
  height: 236px;
  object-fit: cover;
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
  margin-top: -90px;
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
