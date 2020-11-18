<template>
  <div>
    <div class="mylikeNav">
      <a href="javascript:;" class="active">歌曲 {{myLikeCount.length}}</a>
      <a href="javascript:;">歌单 {{ accountInfo.createdPlaylistCount }}</a>
      <a href="javascript:;">专辑 0</a>
      <a href="javascript:;">视频 0</a>
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
    </div>
    <!-- <div class="myLikeInfo">
      <div>
        <i class="noInfo-icon"></i>
        <p>
          什么也没有，去<router-link to="/" class="active">音乐馆</router-link
          >发现好音乐！
        </p>
      </div>
    </div> -->
    <div>
      <LikeList :myLikeCount="myLikeCount"/>
    </div>
  </div>
</template>

<script>
import { reqAccountInfo } from "@/api";
import { mapGetters, mapState } from 'vuex'
import LikeList from './LikeList'
export default {
  name: "MyLike",
  props: ['userId'],
  data() {
    return {
      accountInfo: [],
    };
  },
  computed: {
    ...mapState({
      myLikeCount: state => state.mymusic.myLikeCount
    }),
  },
  components: {
    LikeList
  },
  async mounted() {
    // console.log(this.userId);
    //获取mv,歌单等数据
    let result = await reqAccountInfo(localStorage.cookie);
    this.accountInfo = result;
    // 获取我的喜欢的歌曲数量
    this.$store.dispatch('getMyLikeCount',{
      uid: this.userId,
      cookie: localStorage.getItem('cookie')
    })
    // console.log(this.myLikeCount);
  },
};
</script>

<style scoped>
.mylikeNav {
  display: flex;
  min-width: 1200px;
  max-width: 1200px;
  margin-bottom: -20px;
  border-bottom: 0 none;
}

.mylikeNav > a {
  font-size: 16px;
  margin-right: 55px;
  height: 56px;
  line-height: 56px;
  color: #000;
}

.active {
  color: #31c27c !important;
}

.myLikeInfo {
  font-size: 20px;
  color: #666;
  line-height: 38px;
  text-align: center;
  padding: 90px 0 100px;
}

.noInfo-icon {
  display: block;
  width: 213px;
  height: 203px;
  margin: 0 auto 27px;
  background-image: url(https://y.gtimg.cn/mediastyle/yqq/img/symbol_none.png?max_age=2592000&v=056e33119d5748360c67d7f5a33e25a0);
}
.con_toolbar{
  width: 100%;
  padding: 0;
  margin-top: 40px;
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
    text-align: center;
    min-width: 122px;
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
</style>