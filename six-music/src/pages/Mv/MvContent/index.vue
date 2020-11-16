<template>
  <!-- 内容 -->
  <div class="mv">
    <!-- 内容头部 -->
    <div class="mv_top">
      <h2 class="mv_top_left">全部MV</h2>
      <div class="mv_top_right">
        <a href="javascript:;" class="top_right top_right_new top_right_click"
          >最新</a
        >
        <a href="javascript:;" class="top_right top_right_heat">最热</a>
      </div>
    </div>
    <!-- 内容详情 -->
    <div class="mv_content">
      <ul class="mv_content_ul">
        <li class="content_ul_li" v-for="(item) in allMv" :key="item">
          <div class="ul_li_box">
            <a
              href="javascript:;"
              onclick="setStatCookie&amp;&amp;setStatCookie();"
              class="li_box_a"
              data-stat="y_new.mv_lib.mv_play"
              data-vid="f0033cch1ur"
              title="Unliked You"
              hidefocus="true"
            >
              <img
                class="box_a_img"
                :src=item.cover
                data-original="//y.gtimg.cn/music/photo_new/T015R640x360M000001h52Fz0FSC1D.jpg?max_age=2592000"
                onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                alt="Unliked You"
                style="display: block; visibility: visible;"
              />
              <i class="box_a_i"></i>
            </a>
            <h3 class="li_box_h3">
              <a
                href="javascript;:"
                onclick="setStatCookie&amp;&amp;setStatCookie();"
                class="box_h3_a"
                data-stat="y_new.mv_lib.mv_name"
                data-vid="f0033cch1ur"
                title="Unliked You"
                >{{item.name}}</a
              >
            </h3>

            <div class="li_box_div" title="Keano">
              <a
                href="javascript:;"
                onclick="setStatCookie&amp;&amp;setStatCookie();"
                data-stat="y_new.mv_lib.mv_singername"
                data-singermid="000F6MXZ3yaylv"
                title="Keano"
              >
              {{item.artistName}}
              </a>
            </div>
            <div class="li_box_info">
              <span class="box_info_span"
                ><i class="box_info_span_i"></i>2.1万</span
              >2020-12-25
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <div class="paging">
      <a
        href="javascript:;"
        class="paging_a"
        data-index="1"
        title="上一页"
        hidefocus=""
      >
        <span>&lt;</span>
      </a>
      <a
        href="javascript:;"
        class="paging_a paging_a_click"
        data-index="1"
        hidefocus=""
        >1</a
      >
      <a href="javascript:;" class="paging_a" data-index="1" hidefocus="">2</a>
      <a href="javascript:;" class="paging_a" data-index="3" hidefocus="">3</a>
      <a href="javascript:;" class="paging_a" data-index="4" hidefocus="">4</a>
      <strong class="more">...</strong>
      <a href="javascript:;" class="paging_a" data-index="50" hidefocus=""
        >50</a
      >
      <a
        href="javascript:;"
        class="paging_a"
        data-index="3"
        title="下一页"
        hidefocus=""
      >
        <span>&gt;</span>
      </a>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
export default {
  name: "Tag",
  // 计算属性 
  computed: {
    // 通过vuex的辅助函数获取数据
    ...mapState({
    allMv: state => state.mv.allMv
  }),
  },
  
  mounted () {
    this.$store.dispatch('getAllMv')
  }
};
</script>
<style scoped>
/* 内容 */
.mv {
  position: relative;
  margin-bottom: 30px;
}
.mv_top {
  overflow: hidden;
  height: 60px;
}
.mv_top_left {
  float: left;
  font-size: 24px;
  font-weight: 400;
  line-height: 58px;
}
.mv_top_right {
  position: absolute;
  top: 7px;
  right: 0;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  font-size: 0;
}
.top_right {
  position: relative;
  display: inline-block;
  padding: 0 16px;
  height: 38px;
  position: relative;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
}
.top_right_new {
  border-right: none;
}
.top_right_click {
  background-color: #31c27c;
  color: #fff !important;
  border-color: #31c27c;
}
.mv_content_ul {
  margin-right: -20px;
  zoom: 1;
}
.content_ul_li {
  float: left;
  width: 25%;
  padding-bottom: 44px;
  overflow: hidden;
}
.ul_li_box {
  position: relative;
  margin-right: 20px;
}
.li_box_a {
  position: relative;
  display: block;
  overflow: hidden;
  padding-top: 56.5476%;
  margin-bottom: 15px;
}
.li_box_a:hover .box_a_i{
  transform: scale(1.2);
  opacity: 1;
  transition: all 2s;
}
.box_a_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.li_box_a:hover .box_a_img{
  transform: scale(1.2);
  transition: transform 2s;
}
.box_a_i {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -35px;
  background: url("../images/2.png");
  opacity: 0;
  width:70px;
  height:70px;
}
.li_box_h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  zoom: 1;
}
.li_box_div a,
.li_box_div,
.li_box_info{
  color: #999 !important;
}
.li_box_div {
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.li_box_div a {
  font-size: 14px;
}
.li_box_info {
  line-height: 18px;
  height: 20px;
  font-size: 14px;
}
.box_info_span {
  margin-right: 10px;
}
.box_info_span_i {
  display: inline-block;
  width: 19px;
  height: 12px;
  margin-right: 5px;
  vertical-align: -1px;
  background: url("../images/icon_sprite.png") -180px -20px no-repeat;
}
.paging {
  clear: both;
  text-align: center;
  margin-bottom: 60px;
  font-size: 0;
}
.paging_a {
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  line-height: 50px;
  margin: 0 5px;
  padding: 0 21px;
  box-sizing: border-box;
  min-width: 24px;
}
.paging_a_click {
  color: #fff !important;
  background-color: #31c27c;
}
</style>
