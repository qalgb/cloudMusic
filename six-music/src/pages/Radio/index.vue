<template>
  <div class="Radio_body">
    <div class="Radio_contail">
      <div class="Radio_nav">
        <div class="Radio_Tpye" v-for="(item,index) in radioList" :key="item.id">
          <a href="javascript:;" @click="handle_list(item.id,item.name)">{{item.name}}</a>
        </div>
      </div>
      <div class="Radio_list">
        <div class="Radio_tit">{{radio_Name}}</div>
        <div class="Radio_box" v-for="(item,index) in radioName" :key="item.province">
         <div class="Radio_img">
          <img :src="item.picUrl" />
          <i class="Img_mask"></i>
          <i class="Img_icon"></i>
          </div>
          <div class="Radio_name">
            <a href="##">{{item.name}}</a>
          </div>
          <div class="Radio_outher">
            <span>播放量:1933.4万</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { get } from 'http';
export default {
  name: "Radio",
  data() {
    return {
      rid:3
    };
  },
  computed: {
    ...mapState({
      radioList: state => state.radio.radioList,
      radioName: state => state.radio.radioName
    })
  },

  mounted() {
    const rid=3
    //获取电台分类
    this.getRadioList();
    this.getRadioName(rid);
  },
  methods: {
    // 获取电台分类标签
    getRadioList() {
      this.$store.dispatch("getRadioList");
    },
    //获取分类后的电台
    getRadioName(rid) {
      this.$store.dispatch("getRadioName",rid);
    },
    handle_list(rid,radio_Name){
     //获取数据
     this.getRadioName(rid)
     radio_Name
    }
    //点击电台分类的标签名
    /* handover_list(id,event){
       this.getRadioList(id)
       this.$router.replace(this.$router.path)
    }  */
  }
};
</script>
<style scoped>
.Radio_body {
  padding-top: 35px;
  background: url("../NewDisc/images/bg_detail.jpg") no-repeat;
}
.Radio_contail {
  width: 1200px;
  margin: 0 auto;
}
.Radio_nav {
  background: url("./images/radio_sidebar.png") 0 0 no-repeat;
  height: 100%;
  display: block;
  padding-left: 63px;
  line-height: 59px;
  font-size: 15px;
  position: absolute;
}

.Radio_list {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  left: 245px;
}
.Radio_tit {
  font-weight: 400;
  height: 20px;
  line-height: 59px;
  color: #999;
  margin-bottom: 38px;
  font-size: 15px;
  width: 1200px;
}
.Radio_box {
  margin-right: 20px;
  padding-bottom: 44px;
  position: relative;
}
.Radio_box img {
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
.Radio_box .Radio_img:hover .Img_mask{
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
.Radio_img:hover .Img_icon{
  background: url("../Home/images/cover_play.png");
  transform: scale(1) translateZ(0);
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  opacity: 1;
}
.Radio_img:hover img{
   transform: scale(1.07) translateZ(0);
  transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
}
/* 
.Radio_box i{
  display: inline-block;
  background: url("../Home/images/cover_play.png");
  width: 70px;
  height: 70px;
  position: relative;
  left: 70px;
  bottom: 145px;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: opacity 0.5;
} */
.Radio_box a {
  line-height: 22px;
  font-weight: 400;
  color: #000;
}
.Radio_box span {
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
}
</style>