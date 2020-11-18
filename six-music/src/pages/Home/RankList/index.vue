<template>
  <div class="rankContainer">
    <div class="section_inner">
      <!-- 导航 -->
      <div class="index_hd">
        <h2 class="index_tit">
          <i class="icon_txt">新碟首发</i>
        </h2>
      </div>
      <!-- more -->
      <a href="javascript:;" class="index_more"
        >更多<i class="icon_index_arrow"></i
      ></a>
      <!-- toplist -->
      <ul class="toplist">
        <li class="toplist_item item1">
          <div class="toplist_box">
            <div class="toplist_bg"></div>
            <i class="icon_play"></i>
            <i class="toplist_line"></i>
            <h3 class="toplist_hd">
              <a href="javascript:;" class="toplist_tit">{{
                topList.length && topList[0].name
              }}</a>
            </h3>
            <ul class="toplist_songlist">
              <li
                class="toplist_song"
                v-for="(item, index) in topList.length && topList[0].tracks"
                :key="index"
              >
                <div class="toplist_number"><a href="javascript:;">{{index+1}}</a></div>
                <div class="toplist_songname">
                  <a href="javascript:;">{{ item.first }}</a>
                </div>
                <div class="toplist_artist">
                  <a href="javascript:;">{{ item.second }}</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist_item item2">
          <div class="toplist_box">
            <div class="toplist_bg"></div>
            <i class="icon_play"></i>
            <i class="toplist_line"></i>
            <h3 class="toplist_hd">
              <a href="javascript:;" class="toplist_tit">{{
                topList.length && topList[1].name
              }}</a>
            </h3>
            <ul class="toplist_songlist">
              <li class="toplist_song" v-for="(item, index) in topList.length && topList[1].tracks"
                :key="index">
                <div class="toplist_number"><a href="javascript:;">{{index+1}}</a></div>
                <div class="toplist_songname">
                  <a href="javascript:;">{{ item.first }}</a>
                </div>
                <div class="toplist_artist">
                  <a href="javascript:;">{{ item.second }}</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist_item item3">
          <div class="toplist_box">
            <div class="toplist_bg"></div>
            <i class="icon_play"></i>
            <i class="toplist_line"></i>
            <h3 class="toplist_hd">
              <a href="javascript:;" class="toplist_tit">{{
                topList.length && topList[2].name
              }}</a>
            </h3>
            <ul class="toplist_songlist">
              <li class="toplist_song" v-for="(item, index) in topList.length && topList[2].tracks"
                :key="index">
                <div class="toplist_number"><a href="javascript:;">{{index+1}}</a></div>
                <div class="toplist_songname">
                  <a href="javascript:;">{{ item.first }}</a>
                </div>
                <div class="toplist_artist">
                  <a href="javascript:;">{{ item.second }}</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist_item item4">
          <div class="toplist_box">
            <div class="toplist_bg"></div>
            <i class="icon_play"></i>
            <i class="toplist_line"></i>
            <h3 class="toplist_hd">
              <a href="javascript:;" class="toplist_tit">{{
                topList.length && topList[3].name
              }}</a>
            </h3>
            <ul class="toplist_songlist">
              <li class="toplist_song" v-for="(item, index) in topList.length && topList[3].tracks"
                :key="index">
                <div class="toplist_number"><a href="javascript:;">{{index+1}}</a></div>
                <div class="toplist_songname">
                  <a href="javascript:;">{{ item.first }}</a>
                </div>
                <div class="toplist_artist">
                  <a href="javascript:;">{{ item.second }}</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist_item item5">
          <div class="toplist_box">
            <div class="toplist_bg"></div>
            <i class="icon_play"></i>
            <i class="toplist_line"></i>
            <h3 class="toplist_hd">
              <a href="javascript:;" class="toplist_tit">{{
                topList.length && topList[4].name
              }}</a>
            </h3>
            <ul class="toplist_songlist">
              <li class="toplist_song" v-for="(item, index) in rap"
                :key="index">
                <div class="toplist_number"><a href="javascript:;">{{index+1}}</a></div>
                <div class="toplist_songname">
                  <a href="javascript:;">{{item.first}}</a>
                </div>
                <div class="toplist_artist">
                  <a href="javascript:;">{{item.second}}</a>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'RankList',
  data() {
    return {
      rap: [
        {first: '经济舱(Live)',second: 'Kafe.Hu'},
        {first: '烈火战马+空城计+重庆魂 (Live)',second: 'GAI周延'},
        {first: '珍珠幻象(Live)',second: 'GALI'}
      ]
    }
  },
  computed: {
    ...mapState({
      // 获取数据
      topList: (state) => state.home.topList,
    }),
  },
  mounted() {
    // 分发
    this.$store.dispatch('getTopList')
  },
}
</script>

<style scoped>
.rankContainer {
  position: relative;
  background: url('../images/bg_detail.jpg') 50% 0 repeat-x;
}
.rankContainer .section_inner {
  z-index: 2;
  overflow: hidden;
}
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 4%;
}
.section_inner .index_more {
  position: absolute;
  right: 0;
  top: 56px;
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
  background-position: -120px -60px;
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
  background-position: 0 -200px;
}
.icon_txt {
  font: 0/0 a;
}
.section_inner .toplist {
  font-size: 0;
  margin-right: -20px;
}
.section_inner .toplist_item {
  display: inline-block;
  z-index: 2;
  width: 20%;
}
.toplist_item.item1 .toplist_bg {
  background-position: 0 0;
}
.toplist_item.item2 .toplist_bg {
  background-position: -224px 0;
}
.toplist_item.item3 .toplist_bg {
  background-position: -448px 0;
}
.toplist_item.item4 .toplist_bg {
  background-position: -672px 0;
}
.toplist_item.item5 .toplist_bg {
  background-position: -896px 0;
}
.section_inner .toplist_box {
  position: relative;
  margin-right: 20px;
  height: 500px;
  overflow: hidden;
}
.toplist_bg {
  transform: scale(1);
  transition: transform 0.75s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 567px;
  background-image: url('../images/bg_index_top.jpg');
}
.toplist_item:hover .toplist_bg {
  transform: scale(1.06);
  transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
}
.toplist_item .icon_play {
  position: absolute;
  top: 149px;
  margin-top: 0;
  margin-bottom: 0;
  left: 50%;
  margin: -35px;
  width: 70px;
  height: 70px;
  opacity: 0;
  transform: scale(0.7) translateZ(0);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  background-size: 72%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url('../images/cover_play.png');
}
.toplist_item:hover .icon_play {
  opacity: 1;
  filter: none;
  background-image: url('../images/cover_play.png');
  transform: scale(1) translateZ(0);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  cursor: pointer;
}
.toplist_item .toplist_line {
  position: absolute;
  left: 50%;
  top: 148px;
  margin-left: -18px;
  width: 36px;
  height: 2px;
  background: #fff;
}
.toplist_item:hover .toplist_line {
  display: none;
}
.toplist_item .toplist_hd {
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  text-align: center;
}
.toplist_item .toplist_hd:before {
  content: '';
  display: block;
  width: 66px;
  height: 22px;
  margin: 0 auto 9px;
  background-image: url('../images/index_tit.png');
  background-position: 0 -300px;
}
.toplist_tit {
  height: 36px;
  line-height: 1;
  font-size: 26px;
  color: #fff !important;
  font-weight: 400;
}
.toplist_songlist {
  position: absolute;
  top: 188px;
  left: 30px;
  right: 30px;
  white-space: nowrap;
}
.toplist_song {
  position: relative;
  padding-left: 15px;
  margin-bottom: 27px;
}
.toplist_number {
  position: absolute;
  top: 0;
  left: 0;
}
.toplist_songname {
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
}
.toplist_songlist a {
  color: #fff !important;
  font-size: 14px;
}
.toplist_artist {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
