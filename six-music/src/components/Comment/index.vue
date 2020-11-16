<template>
<div class="con_comment">
<div class="pard_hd">
  <h1>评论</h1>
  <span>共{{songListComment.total}}条评论</span>
</div>
<div class="comment_input">
  <a-textarea placeholder="期待你的神评论.." :rows="5" v-model="lessText"/>
    <span class="less_text">
    剩余<span> {{300 - lessText.length}} </span>字
    </span>
  <button @click="sendComment">发表评论</button>
</div>
<div class="comment_new">
  <div class="comment_new_count">最新评论({{songListComment.total}})</div>
  <ul class="comment_list">
    <li class="comment_list_item" v-for="(item) in songListComment.comments" :key="item.commentId">
      <img :src="item.user.avatarUrl" alt="">
      <div class="comment_text">
        <p class="comment_user">{{item.user.nickname}}</p>
        <p class="comment_context">{{item.content}}</p>
        <p class="comment_time">{{getSongListCommentTime(item.time)}}</p>
        <!-- <p class="comment_com"><a-icon type="message" /> 123</p> -->
        <p class="comment_like"><a-icon type="like" /> {{item.likedCount}}</p>
      </div>
    </li>
  </ul>
</div>
</div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Comment',
  props:{
   songListComment: Object,
   curId: Number
  },
  data () {
    return {
      lessText: ''  
    }
  },
  computed: {
    // 获取评论时间
    getSongListCommentTime(){
      return (time) => {
        return moment(time).format("MMMDo hh:mm")
      }
    }
  },
  methods: {
    // 发表评论
    sendComment(){
      const { curId } = this.$props
      const commentInfo = {
        t: 1,
        type: 2,
        id: curId,
        content:this.lessText,
        commentId: null
      }
      this.$store.dispatch('getSendOrReqOrDelComment',{ ...commentInfo })
    }
  }
}
</script>

<style scoped>
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
  height: 189px;
}
.comment_input .less_text{
  position: relative;
  text-align: right;
  display: block;
  top: -25px;
  right: 10px;
  z-index: 4;
}
.comment_input .less_text span{
  color: #31c27c;
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
  /* margin: 10px 0; */
  overflow: hidden;
  display: block;
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
</style>