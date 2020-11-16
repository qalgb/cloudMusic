<template>
  <div class="main">
    <!-- 左侧导航 -->
    <div class="nav">
      <div class="nav_list">
        <dl>
          <dt>所有榜单</dt>
          <dd v-for="item in rankInfo" :key="item.id" @click="getSongList(item.id)">
            <a href="javascript:;">{{item.name}}</a>
          </dd>
        </dl>
      </div>
    </div>
    <div class="content">
      <!-- 头部 -->
      <div class="con_header">
        <h1 class="header_title">流行指数榜</h1>
        <span class="header_date">2020-11-14</span>
        <span class="header_rule">榜单规则</span>
      </div>
      <!-- 按钮列表 -->
      <div class="con_toolbar">
        <a href="javascript:;" class="active">
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
          评论(66666)
        </a>
      </div>
      <!-- 歌曲列表 -->
      <div class="con_songlist">
        <ul class="songlist_header">
          <li class="songlist_header_name">歌曲</li>
          <li class="songlist_header_autor">歌手</li>
          <li class="songlist_header_time">时长</li>
        </ul>
        <ul class="songlist_list">
          <li>
            <div class="number">1</div>
            <div class="rank">
              <a-icon type="rise" />
              <p>202%</p>
            </div>
            <div class="name">
              <img src="./1.jpeg" alt="">
              <span>可不可以</span>
            </div>
            <div class="artist">
              黄凯健
            </div>
            <div class="time">04:43</div>
          </li> 
        </ul>
        <ul class="songlist_list">
          <li>
            <div class="number">1</div>
            <div class="rank">202%</div>
            <div class="name">
              <img src="./1.jpeg" alt="">
              <span>可不可以</span>
            </div>
            <div class="artist">
              黄凯健
            </div>
            <div class="time">04:43</div>
          </li> 
        </ul>
        <ul class="songlist_list">
          <li>
            <div class="number">1</div>
            <div class="rank">202%</div>
            <div class="name">
              <img src="./1.jpeg" alt="">
              <span>可不可以</span>
            </div>
            <div class="artist">
              黄凯健
            </div>
            <div class="time">04:43</div>
          </li> 
        </ul>
        <ul class="songlist_list">
          <li>
            <div class="number">1</div>
            <div class="rank">202%</div>
            <div class="name">
              <img src="./1.jpeg" alt="">
              <span>可不可以</span>
            </div>
            <div class="artist">
              黄凯健
            </div>
            <div class="time">04:43</div>
          </li> 
        </ul>
        <ul class="songlist_list">
          <li>
            <div class="number">1</div>
            <div class="rank">202%</div>
            <div class="name">
              <img src="./1.jpeg" alt="">
              <span>可不可以</span>
            </div>
            <div class="artist">
              黄凯健
            </div>
            <div class="time">04:43</div>
          </li> 
        </ul>
      </div>
      <!-- 评论 -->
      <div class="con_comment">
        <div class="pard_hd">
          <h1>评论</h1>
          <span>共251664条评论</span>
        </div>
        <div class="comment_input">
          <input type="text" placeholder="期待你的神评论" class="text">
          <button>发表评论</button>
        </div>
        <div class="comment_new">
          <div class="comment_new_count">最新评论(251664)</div>
          <ul class="comment_list">
            <li class="comment_list_item">
              <img src="./1.jpeg" alt="">
              <div class="comment_text">
                <p class="comment_user">时不待我</p>
                <p class="comment_context">嗯嗯嗯</p>
                <p class="comment_time">11月13日 19:53</p>
                <p class="comment_com"><a-icon type="message" /> 123</p>
                <p class="comment_like"><a-icon type="like" /> 123</p>
              </div>
            </li>
            <li class="comment_list_item">
              <img src="./1.jpeg" alt="">
              <div class="comment_text">
                <p class="comment_user">时不待我</p>
                <p class="comment_context">嗯嗯嗯</p>
                <p class="comment_time">11月13日 19:53</p>
                <p class="comment_com">评论</p>
                <p class="comment_like">点赞</p>
              </div>
            </li>
            <li class="comment_list_item">
              <img src="./1.jpeg" alt="">
              <div class="comment_text">
                <p class="comment_user">时不待我</p>
                <p class="comment_context">嗯嗯嗯</p>
                <p class="comment_time">11月13日 19:53</p>
                 <p class="comment_com">评论</p>
                <p class="comment_like">点赞</p>
              </div>
            </li>
            <li class="comment_list_item">
              <img src="./1.jpeg" alt="">
              <div class="comment_text">
                <p class="comment_user">时不待我</p>
                <p class="comment_context">嗯嗯嗯</p>
                <p class="comment_time">11月13日 19:53</p>
                 <p class="comment_com">评论</p>
                <p class="comment_like">点赞</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: 'Rank',
  computed: {
    ...mapState({
      rankSongList: state => state.rank.rankSongList
    }),
    ...mapGetters(['rankInfo'])
  },
  mounted () {
    // 分发action
    this.$store.dispatch('getRankInfo')
  },
  methods: {
    getSongList(id) {
      // 获取榜单歌曲列表
      this.$store.dispatch('getRankSongList', id )
    }
  }
}
</script>

<style scoped>
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
.nav_list dl dd a:hover{
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
    color: #fff;
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
.songlist_list li{
  height: 80px;
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
.songlist_list li .rank{
  width: 82px;
  font-size: 12px;
  padding-top: 20px;
  text-align: center;
}
.songlist_list li .name{
  width: 57%;
}
.songlist_list li .name img{
  width: 70px;
  height: 70px;
  margin-right: 20px;
  vertical-align: middle;
  margin-top: 5px;
}
.songlist_list li .artist{
 line-height: 80px;
 text-align: left;
 width: 22%;
}
.songlist_list li .time{
  line-height: 80px;
  text-align: left;
  color: #999;
}
/* 评论 */
.con_comment{
  width: 100%;
}
.con_comment .pard_hd{
  line-height: 58px;
  display: flex;
}
.con_comment .pard_hd h1{
  margin-right: 12px;
  font-size: 24px;
  vertical-align: bottom;
}
.con_comment .pard_hd span{
  color: #999;
  font-size: 14px;
}
.comment_input{
  height: 169px;
}
.comment_input .text{
  width: 100%;
  height: 102px;
  border: solid 1px #ececec;
  background-color: #f5f5f5;
  text-align: unset;
}
.comment_input input::-webkit-input-placeholder{
  position:relative;
  left:5px;
  top:-40px;
} 
.comment_input button{
  width: 80px;
  line-height: 27px;
  height: 27px;
  text-align: center;
  border: 1px solid #31c27c;
  background-color: #31c27c;
  color: #fff;
  float: right;
  margin: 20px 0;
  overflow: hidden;
}
.comment_new{
  width: 100%;
}
.comment_new .comment_new_count{
  font-size: 16px;
  line-height: 34px;
  font-weight: 400;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ededed;
}
.comment_list_item{
  padding: 15px 0;
  border-bottom: 1px solid #ededed;
  width: 100%;
  overflow: hidden;
}
.comment_list_item img{
  width: 38px;
  height: 38px;
  border-radius: 50%;
  float: left;
  display: block;
}
.comment_list_item .comment_text{
  float: left;
  margin-left: 15px;
  display: block;
  width: 94%;
}
.comment_list_item .comment_text p{
  line-height: 24px;
  font-size: 14px ;
}
.comment_text .comment_user{
  color: #999;
}
.comment_text .comment_time{
  color: #999;
  float: left;
}
.comment_text .comment_like{
  float: right;
}
.comment_text .comment_com{
  margin-left: 15px;
  float: right;
}
.footer{
  height: 100px;
}
</style>