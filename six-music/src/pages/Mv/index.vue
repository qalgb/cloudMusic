<template>
  <div class="bg">
    <div class="main">
      <!-- 内容 -->
      <div class="mv">
        <!-- 筛选 -->
        <div class="mod_tag">
          <div class="tag_list">
            <h3 class="tag_tit">区域</h3>
            <a
              href="javascript:;"
              class="tag_item "
              v-for="(item, index) in areamv"
              :key="index"
              :class="[ereaTag === index ? 'contentTag' : '']"
              @click="areaTitle(index)"
              >{{ item }}</a
            >
          </div>
        </div>
        <!-- 顶部地区筛选 -->
        <div class="mv_top">
          <h2 class="mv_top_left">全部MV</h2>
          <div class="mv_top_right">
            <a
              href="javascript:;"
              class="top_right"
              v-for="(item, index) in newMv"
              :key="index"
              :class="[newMvData === index ? 'top_right_click' : '']"
              @click="isnewMv(index)"
              >{{ item }}</a
            >
          </div>
        </div>
        <!-- 内容详情 -->
        <div class="mv_content">
          <ul class="mv_content_ul">
            <li class="content_ul_li" v-for="item in allMv" :key="item.id">
              <div class="ul_li_box">
                <!-- 图片 -->
                <a href="javascript:;" class="li_box_a">
                  <img
                    class="box_a_img"
                    v-lazy="item.cover"
                    @click="goMvVideo(item.id)"
                  />
                  <i class="box_a_i"></i>
                </a>
                <!-- mv名 -->
                <h3 class="li_box_h3">
                  <a href="javascript;:" class="box_h3_a">{{ item.name }}</a>
                </h3>
                <!-- 发布者 -->
                <div class="li_box_div" title="Keano">
                  <a href="javascript:;">
                    {{ item.artistName }}
                  </a>
                </div>
                <!-- 播放量 -->
                <div class="li_box_info">
                  <span class="box_info_span"
                    ><i class="box_info_span_i"></i>{{ item.playCount }}</span
                  >
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
          <a href="javascript:;" class="paging_a" data-index="1" hidefocus=""
            >2</a
          >
          <a href="javascript:;" class="paging_a" data-index="3" hidefocus=""
            >3</a
          >
          <a href="javascript:;" class="paging_a" data-index="4" hidefocus=""
            >4</a
          >
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
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Tag",
  data() {
    return {
      area: "全部",
      order: "最新",
      newMvData: 0,
      newMv: ["最新", "最热"],
      areamv: ["全部", "内地", "港台", "欧美", "日本", "韩国"],
      ereaTag: 0,
    };
  },
  // 计算属性
  computed: {
    // 通过vuex的辅助函数获取数据
    ...mapState({
      // 获取全部的mv
      allMv: (state) => state.mv.allMv,
    }),
  },

  mounted() {
    // 获取MV数据
    this.getMvList(this.area, this.order);
  },
  methods: {
    // 分发
    getMvList(area, order) {
      this.$store.dispatch("getAllMv", {
        area,
        order,
      });
    },
    areaTitle(index) {
      // 获取当前点击的地区
      const area = this.areamv[index];
      this.area = area;
      // 给当前点击的元素样式
      this.ereaTag = index;
      // 获取到数据
      const query = {
        area,
        order: this.order,
      };
      this.$router.replace({ path: "/mv", query });
      this.getMvList(area, this.order);
    },
    // 点击最新，最热
    isnewMv(index) {
      // 获取到参数
      const order = this.newMv[index];
      this.newMvData = index;

      const query = {
        area: this.area,
        order,
      };

      //获取mv数据
      this.$router.replace({ path: "/mv", query });
      this.getMvList(this.area, order);
    },
    // 跳转到MvVideo页面
    goMvVideo(id) {
      console.log(id);
      this.$router.replace({ path: "/mvvideo",query:{id} });
    },
  },
};
</script>
<style scoped>
.bg {
  background: url("./images/bg_detail.jpg") 50% 0 repeat-x;
}
.main {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
/* 内容 */
.mv {
  position: relative;
  margin-bottom: 30px;
}
/* 筛选 */
.tag_list {
  position: relative;
  height: auto;
  zoom: 1;
  clear: both;
  overflow: hidden;
  line-height: 26px;
  padding-left: 65px;
}
.mod_tag {
  position: relative;
  padding: 52px 0 0;
}
.tag_tit {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 400;
  width: 65px;
}
a:hover {
  color: green;
  text-decoration: none;
}
.tag_item {
  float: left;
  padding: 0 8px;
  margin: 0 24px 15px 0;
}
.contentTag {
  background-color: #31c27c;
  color: #fff !important;
}
/* 内容顶部筛选 */
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
  margin-top: 95px;
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
  border-right: 1px solid #000;
}
.top_right_new {
  border-right: none;
}
.top_right_click {
  background-color: #31c27c;
  color: #fff !important;
  border-color: #31c27c;
}
/* 内容详情 */
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
.li_box_a:hover .box_a_i {
  transform: scale(1.2);
  opacity: 1;
  transition: all 2s;
}
/* 图片 */
.box_a_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 2s;
}
.li_box_a:hover .box_a_img {
  transform: scale(1.2);
  transition: transform 2s;
}
.box_a_i {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -35px;
  background: url("./images/2.png");
  opacity: 0;
  width: 70px;
  height: 70px;
  transition: all 2s;
}
/* mv名 */
.li_box_h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  zoom: 1;
}
.li_box_div a,
.li_box_div,
.li_box_info {
  color: #999 !important;
}
/* 发布者 */
.li_box_div {
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.li_box_div a {
  font-size: 14px;
}
/* 播放量 */
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
  background: url("./images/icon_sprite.png") -180px -20px no-repeat;
}
/* 分页 */
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
