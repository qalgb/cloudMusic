<template>
  <div class="Radio_body">
    <div class="Radio_contail">
      <div class="Radio_nav">
        <div class="Radio_Tpye" v-for="(item,index) in radioList" :key="item.id">
        <a href="javascript:;" @click="handover_list(item.id,$event)">{{item.name}}</a>
        </div>
      </div>
      <div class="Radio_list">
        <div class="Radio_box" v-for="(item,index) in radioName" :key="item.province">
          <div class="Radio_tit" v-show="!item.category">{{item.category}}</div>
          <img :src="item.picUrl" />
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
import {mapState} from 'vuex';
export default {
  name: "Radio",
  data(){
    return{
     
    }
   
  },
  computed:{
    ...mapState({
      radioList:(state)=>state.home.radioList,
      radioName:(state)=>state.home.radioName
    })
  },
  
  mounted(){
    //获取电台分类
    this.getRadioList()
    this.getRadioName()
  },
  methods:{
    // 获取电台分类标签
    getRadioList() {
      this.$store.dispatch('getRadioList')
    },
    //获取分类后的电台
    getRadioName(){
      this.$store.dispatch('getRadioName')
    },
    //点击电台分类的标签名
    /* handover_list(id,event){
       this.getRadioList(id)
       this.$router.replace(this.$router.path)
    }  */
  }

};
</script>
<style scoped>
.Radio_body{
  padding-top: 35px;
  background: url("../NewDisc/images/bg_detail.jpg") no-repeat;
}
.Radio_contail {
  width: 1200px;
  margin: 0 auto;
}
.Radio_nav{
  background: url("./images/radio_sidebar.png") 0 0 no-repeat;
  height: 100%;
  display: block;
  padding-left: 63px;
  line-height: 59px;
  font-size: 15px;
  position: absolute
}

.Radio_list {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  left: 245px;
}
.Radio_tit{
    font-weight: 400;
    height: 20px;
    line-height: 59px;
    color: #999;
    margin-bottom: 38px;
    font-size: 15px;
    width: 1200px;
}
.Radio_box{
  margin-right: 20px;
  padding-bottom: 44px;
}
.Radio_box img {
  width: 224px;
  height: 224px;
}
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