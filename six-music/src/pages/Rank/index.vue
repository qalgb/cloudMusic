<template>
  <div class="main">
    <!-- 左侧导航 -->
    <div class="nav">
      <div class="nav_list">
        <dl>
          <dt>所有榜单</dt>
          <dd v-for="(item) in rankInfo" :key="item.id" @click="getSongList($event,item.id,item.trackNumberUpdateTime)">
            <a href="javascript:;" :class="[item.id === curId ? 'active': '']">{{item.name}}</a>
          </dd>
        </dl>
      </div>
    </div>
    <div class="content">
      <!-- 头部 -->
      <div class="con_header">
        <h1 class="header_title">{{rankName}}</h1>
        <span class="header_date">{{rankTime}}</span>
        <span class="header_rule">榜单规则</span>
      </div>
      <!-- 按钮列表 -->
      <div class="con_toolbar">
        <a href="javascript:;" class="active" @click="toAudio(rankSongList,rankSongList[0].id,rankSongList[0].al.picUrl)">
          <a-icon type="caret-right"/>
          播放全部
        </a>
        <a href="javascript:;">
          <a-icon type="plus-square" />
          添加到
        </a>
        <a href="javascript:;">
          <a-icon type="download" />
          下载
        </a>
        <a href="javascript:;">
          <a-icon type="unordered-list" />
          批量操作
        </a>
        <a href="javascript:;">
          <a-icon type="message" />
          评论({{songListComment.total}})
        </a>
      </div>
      <!-- 歌曲列表 -->
      <div class="con_songlist">
        <ul class="songlist_header">
          <li class="songlist_header_name">歌曲</li>
          <li class="songlist_header_autor">歌手</li>
          <li class="songlist_header_time">时长</li>
        </ul>
         <ul class="songlist_list" 
          v-for="(item,index) in rankSongList" 
          :key="item.id"
          >
          <List :index="index" :item="item" :rankSongList="rankSongList" />
        </ul>
      </div>
      <!-- 评论 -->
      <Comment :songListComment="songListComment" :curId="curId" @sendComent="getCommentList"/>
    </div>    
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import moment from 'moment'
import List from './List'
import Comment from '@/components/Comment'
export default {
  name: 'Rank',
  data () {
    return {
      curId: '',
      rankName: '',
      rankTime: ''
    }
  },
  components: {
    List,
    Comment
  },
  computed: {
    ...mapState({
      songListComment: state => state.rank.songListComment
    }),
    ...mapGetters(['rankInfo','rankSongList']),
  },
  async mounted () {
    // 分发action 获取榜单数据
    await this.$store.dispatch('getRankInfo')
    this.curId = this.rankInfo[1].id
    this.rankTime = this.rankInfo[1].trackNumberUpdateTime
    // 获取歌单列表
    await this.getSongList(event,this.curId,this.rankTime)
  },
  methods: {
    // 点击拉去数据
    getSongList(event,id,time) {
      this.rankName = event.target.innerText || '云音乐新歌榜'
      this.rankTime = moment(time).format('YYYY-MM-DD')
      // 获取榜单歌曲列表
      this.$store.dispatch('getRankSongList', id )
      // 拉取歌单评论
      this.getCommentList(id)
      this.curId = id
    },
    // 获取歌单评论
    async getCommentList(id){
      await this.$store.dispatch('getSongListComment', id)
    },
    toAudio(songListAudio,id,picUrl){
      this.$router.push({path: '/audioplay', query:{ songListAudio:JSON.stringify(songListAudio),id, picUrl }})
    }
  },
}
</script>

<style scoped>
ol,ul,dl{
  margin: 0;
}
.main{
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
/* 左侧菜单栏 */
.main .nav{
  border: 1px solid rgba(153,153,153,.2);
  width: 178px;
  height: 100%;
}
.nav_list dl dt{
    line-height: 60px;
    font-size: 20px;
    font-weight: 400;
    border-bottom: 1px solid #ebebeb;
    margin: 0 17px 10px;
}
.nav_list dl dd a{
    font-size: 15px;
    display: block;
    line-height: 22px;
    padding: 8px 17px;
    color: #000;
}
.nav_list dl dd a:hover,
.nav_list dl dd a.active{
  background-color: #31c27c;
  color: #fff !important;
  text-decoration: none;
}
/* 右侧内容 */
.main .content{
  width: 990px;
}
.con_header{
  line-height: 64px;
  height: 64px;
  margin-bottom: 10px;
  overflow: hidden;
}
.con_header .header_title{
  float: left;
  font-weight: 400;
  font-size: 24px;
  margin-right: 15px;
}
.con_header .header_date{
  font-size: 14px;
  margin-right: 15px;
}
.con_header .header_rule{
  color: #000;
}
.con_toolbar{
  width: 100%;
  padding: 0;
}
.con_toolbar a{
    border-radius: 2px;
    display: block;
    font-size: 14px;
    margin-right: 6px;
    padding: 0 23px;
    height: 38px;
    line-height: 38px;
    display: inline-block;
    white-space: nowrap;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fafafa;
    border: 1px solid #c9c9c9;
    color: #000;
}
.con_toolbar a:hover{
  background-color: #dadada80;
  text-decoration: none;
  color: #000 !important;
}
.con_toolbar a.active{
    border: 1px solid #31c27c;
    background-color: #31c27c;
    color: #fff !important;
}
.con_toolbar a.active:hover{
    border: 1px solid #31c27c;
    background-color: #249b61;
    color: #fff !important;
}
.con_songlist{
  font-size: 14px;
  overflow: hidden;
}
.con_songlist .songlist_header{
  padding-left: 122px;
  height: 50px;
  line-height: 50px;
  background-color: rgba(0,0,0,.01);
  color: #999;
  margin-top: 20px;
}
.songlist_header li{
  float: left;
}
.songlist_header .songlist_header_name{
  width: 65%;
}
.songlist_header .songlist_header_autor{
  width: 25%;
}
.songlist_header .songlist_header_time{
  width: 10%
}
</style>