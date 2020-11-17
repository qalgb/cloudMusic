<template>
  <div class="contail">
    <div class="color">
      <div class="mod_tag"></div>
      <div class="tag_item">
        <span style="background-color: #31c27c;color:#fff">全部</span>
        <span>华语</span>
        <span>欧美</span>
        <span>韩国</span>
        <span>日本</span>
      </div>

      <div class="song_list">
        <div class="song_box"  v-for="(item,index) in newDiscList" :key="item.id">
          <img :src="item.picUrl" />
          <div class="song_name">
            <a href="##">{{item.artist.name}}</a>
          </div>
          <div class="singer">
            <a href="##">{{item.name}}</a>
          </div>
          <div class="song_date">2020-11-09</div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import { mapState } from "vuex";
export default {
  name: "NewDisc",
  computed: {
    ...mapState({
      newDiscList: state => state.home.newDiscList
    }),
  },
    mounted() {
      //获取新专辑列表
      this.getNewDiscList();
    },
    methods: {
      getNewDiscList() {
        this.$store.dispatch("getNewDiscList");
      }
    }
  
};
</Script>


<style>
.contail{
  width: 100%;
  height: 1500px;
}
.color {
  background: url("./images/bg_detail.jpg") repeat-x;
  height: 400px;
}
.mod_tag {
  padding-bottom: 40.6px;
}
.tag_item {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.tag_item span {
  float: left;
  padding: 0 8px;
  margin: 0 24px 15px 0;
  font-size: 14px;
  line-height: 26px;
  overflow: hidden;
}
.song_list {
  height:100%;
  width: 1200px;
  margin: 0 auto;

}
.song_box {
  display: inline-block;
  width: 20%;
  padding-bottom: 44px;
  font-size: 14px;
  vertical-align: top;
  line-height: 1.5; 
}
.song_box img {
  width: 224px;
  height: 224px;
}
.song_name a {
  line-height: 22px;
  font-weight: 400;
  color: #000;
}
.singer + .song_date {
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
}
</style>