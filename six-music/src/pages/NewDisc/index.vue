<template>
  <div class="contail">
    <div class="color">
      <div class="mod_tag"></div>
      <div class="tag_item">
        <a
          href="javascript:;"
          @click="handleSlide(index)"
          :key="index"
          v-for="(item, index) in area"
          :class="
            currentIndex === index ? 'tag_item_a_active' : 'tag_item a'
          "
          >{{ item.title }}</a
        >
      </div>

      <div class="song_list">
        <div class="song_box"  v-for="item in newDiscList" :key="item.id">
         <div class="song_img">
          <img :src="item.picUrl" />
          <i class="Img_mask"></i>
          <i class="Img_icon"></i>
          </div>
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
import { log } from 'util';
export default {
  name: "NewDisc",
  data(){
    return {
      area: [
        { title: '全部', code: 'ALL' },
        { title: '华语', code: 'ZH' },
        { title: '欧美', code: 'EA' },
        { title: '韩国', code: 'KR' },
        { title: '日本', code: 'JP' },
       
      ],
      currentIndex: 0,
    }
  },
  computed: {
    ...mapState({
      newDiscList: (state) => state.newdisc.newDiscList
    }),
  },
    mounted() {
      //获取新专辑列表
      this.getNewDiscList('ALL');
    },
    methods: {
      //获取新专辑
      getNewDiscList(area) {
        this.$store.dispatch("getNewDiscList",area);
      },
      handleSlide(index){
        this.currentIndex=index
        let area=this.area[index].code
        //获取数据
        this.getNewDiscList(area)
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
  padding-left: 65px;
  height: 40.6px;
}
.tag_item a {
  padding: 0 8px;
  margin: 0 24px 15px 0;
  font-size: 14px;
  line-height: 26px;
  overflow: hidden;
}
.tag_item_a_active{
  background-color: #31c27c;
  color: #fff !important;
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
  position: relative;
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
.song_box img {
  width: 224px;
  height: 224px;
  transform: scale(1) translateZ(0);
  transition: transform 0.75s;
}
.Img_mask{
  position: absolute;
  left: 0;
  top: 0;
  width: 224px;
  height: 224px;
  background: black;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: opacity 0.5;
}
.song_box .song_img:hover .Img_mask{
  opacity: 0.2;
  transition: opacity 0.5s;
}
.Img_icon{
  position: absolute;
  background: url("../Home/images/cover_play.png");
  left: 65%;
  top: 50%;
  margin: -70px; 
  opacity: 0;
  width: 70px;
  height: 70px;
  transform: scale(0.7) translateZ(0);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  zoom: 1;
}
.song_img:hover .Img_icon{
  background: url("../Home/images/cover_play.png");
  transform: scale(1) translateZ(0);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  opacity: 1;
}
.song_img:hover img{
   transform: scale(1.07) translateZ(0);
  transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
}
</style>