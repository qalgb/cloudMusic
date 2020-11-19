<template>
<li @mouseenter="isShowMenuList(true)" @mouseleave="isShowMenuList(false)">
  <div class="number" :class="[index < 3 ? 'number_color':'']">{{index + 1}}</div>
  <div class="rank">
    <a-icon type="rise" />
    <p>202%</p>
  </div>
  <div class="name">
    <img :src="item.al.picUrl" alt="">
  </div>
  <div class="name_song">
    <span>{{item.name}}</span>
  </div>
  <div class="list_menu" :style="{visibility: isShowMenu ? 'hidden' : 'visible' }">
    <router-link :to="`/audioplay/${item.id}`" title="播放">
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
  <div class="time">{{getSongTime(item.dt)}}</div>
</li> 
</template>

<script>
import moment from 'moment'
export default {
  name: 'List',
  props: {
    item: Object,
    index: Number,
    rankSongList: Array
  },
  data () {
    return {
      isShowMenu: true
    }
  },
  computed: {
    //统计歌曲歌手数量
    getSongAr(){
      return (index) => {
        return this.rankSongList[index].ar.reduce((pre,item,index) => {
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
  methods: {
        // 移入移出显示菜单列表
    isShowMenuList(flag){
      if (flag) {
        this.isShowMenu = false
      } else {
        this.isShowMenu = true
      }
    }
  }
}
</script>

<style scoped>
  .songlist_list li{
  height: 80px;
  width: 100%;
  background-color: rgba(0,0,0,.01);
}
.songlist_list li div {
  float: left;
}
.songlist_list li .number{
  width: 40px;
  text-align: right;
  font-size: 24px;
  color: #333;
  line-height: 80px;
}
.songlist_list li .number_color{
  color: #ff4222;
}
.songlist_list li .rank{
  width: 82px;
  font-size: 12px;
  padding-top: 20px;
  text-align: center;
}
.songlist_list li .name{
  width: 9%;
}
.songlist_list li .name img{
  width: 70px;
  height: 70px;
  margin-right: 20px;
  padding-top: 5px;
  display: block;
}
.songlist_list li .name_song{
  width: 31%;
}
.songlist_list li .name_song span{
  color: #000;
  text-align: left;
  line-height: 80px;
}
.songlist_list li .list_menu{
  font-size: 30px;
  line-height: 80px;
  text-align: right;
}
.songlist_list li .list_menu i{
  color: #999;
  margin-right: 10px;
}
.songlist_list li .list_menu i:hover{
  color: #31c27c;
}
.songlist_list li .artist{
 line-height: 80px;
 text-align: left;
 width: 22%;
 overflow: hidden;    
 text-overflow:ellipsis;    
  white-space: nowrap;
  padding-right: 10px;

}
.songlist_list li .time{
  line-height: 80px;
  text-align: left;
  color: #999;
}
</style>