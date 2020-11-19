<template>
<div class="con_songlist">
<ul class="songlist_header">
  <li class="songlist_header_name">歌曲</li>
  <li class="songlist_header_autor">歌手</li>
  <li class="songlist_header_autor">专辑</li>
  <li class="songlist_header_time">时长</li>
</ul>
  <ul class="songlist_list" v-for="(item,index) in myLikeInfo" :key="item.id" >
    <li> 
    <div class="name_song">
      <span>{{item.name}} <span class="name_alia">{{item.alia[0] ? item.alia[0] : ''}}</span></span>
    </div>
    <div class="list_menu" >
      <router-link  title="播放" :to="`/audioplay/${item.id}`">
        <a-icon type="play-circle" />
      </router-link>
      <a href="javascript:;" title="添加到歌单">
        <a-icon type="plus-circle" />
      </a>
      <a href="javascript:;" title="下载">
        <a-icon type="download" />
      </a>
      <a href="javascript:;" title="分享">
        <a-icon type="share-alt" />
      </a>
    </div>
    <div class="artist">
      {{getSongAr(index)}}
    </div>
    <div class="artist">
      {{item.al.name}}
    </div>
    <div class="time">
      {{getSongTime(item.dt)}}
      </div>
    </li> 
</ul>
  <div class="page_box">
    <div class="client_guide">
      <p class="client_guide_txt">查看更多内容，请下载客户端</p>
      <a href="javascript:;" class="client_guide_btn">立即下载</a>
    </div>
  </div>
</div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'LikeList',
  props: ["myLikeCount"],
  data () {
    return {
      isShowMenu: true  
    }
  },
  computed: {
    // 获取我喜欢的列表数据
    ...mapGetters(['myLikeInfo']),
    //统计歌曲歌手数量
    getSongAr(){
      return (index) => {
        return this.myLikeInfo[index].ar.reduce((pre,item,index) => {
            return index > 0 ? pre + ' / ' + item.name : pre + item.name
        }, '')
      }
    }, 
    //获取歌曲时长
    getSongTime(){
      return (time) => {
        return moment(time).format('mm:ss');
      }
    },
  },
  watch: {
    // 监视传入的数据
    myLikeCount(){
      this.getMyLikeCount()
    }
  },
  methods: {
    // 页面渲染完毕之后 发送获取喜欢列表请求
    getMyLikeCount(){
      this.$nextTick(async function(){
        await this.$store.dispatch('getMyLikeInfo',this.myLikeCount.toString())
      })
    },
    isShowMenuList(flag){
      flag ? this.isShowMenu = false : this.isShowMenu = true
    }
  }
}
</script>

<style scoped>
ol,ul,dl{
  margin: 0;
}
.con_songlist{
  font-size: 14px;
  overflow: hidden;
}
.con_songlist .songlist_header{
  height: 50px;
  line-height: 50px;
  background-color: rgba(0,0,0,.01);
  color: #999;
  margin-top: 20px;
  display: flex;
  width: 100%;
}
.songlist_header .songlist_header_name{
  flex-grow: 8;
  padding-left: 20px;
}
.songlist_header .songlist_header_autor{
  flex-grow: 3;
}
.songlist_header .songlist_header_time{
  flex-grow: 0.5;
}
.songlist_list li{
  display: flex;
}
.songlist_list li .name_song{
  min-width: 435px;
}
.songlist_list li .name_song .name_alia{
  color: #999;
}
.songlist_list li .name_song span{
  padding-left: 10px;
  color: #000;
  text-align: left;
  line-height: 50px;
}
.songlist_list li:hover .list_menu{
  visibility: visible;
}
.songlist_list li .list_menu{
  font-size: 30px;
  line-height: 50px;
  text-align: right;
   visibility: hidden;
  min-width: 200px;
}
.songlist_list li .list_menu i{
  color: #999;
  margin-right: 10px;
}
.songlist_list li .list_menu i:hover{
  color: #31c27c;
}
.songlist_list li .artist{
 line-height: 50px;
 text-align: left;
 overflow: hidden;    
 text-overflow:ellipsis;    
  white-space: nowrap;
  padding-right: 10px;
  min-width: 250px;

}
.songlist_list li .time{
  line-height: 50px;
  text-align: left;
  color: #999;
}
.page_box{
  margin-top: 20px;
}
.client_guide {
  margin-bottom: 22px;
  overflow: hidden;
}
.client_guide_txt {
  font-size: 18px;
  color: #000;
  text-align: center;
}
.client_guide_btn {
  display: block;
  margin: 20px auto 0;
  width: 175px;
  height: 41px;
  line-height: 41px;
  font-size: 16px;
  color: #fff !important;
  text-align: center;
  border-radius: 41px;
  background-color: #31c27c;
}
.client_guide_btn:hover {
  color: #fff;
  background-color: #2caf6f;
}
</style>