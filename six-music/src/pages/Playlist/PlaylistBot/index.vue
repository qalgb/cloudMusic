<template>
  <div>
    <div class="mod_part_detail">
      <div class="mod_part_detail_top">
        <h2 class="part_detail__tit">全部歌单</h2>
        <div class="mod_part_detail_top_right">
          <p class="p1">推荐</p>
          <p class="p2">最新</p>
        </div>
      </div>

      <div class="mod_playlist mod_playlist--all">
        <div class="playlist__item">
          <img src="../../image/300.jpg" />
          <p class="playlist__title_txt">全是回忆!那些年</p>
          <p class="playlist__author">安多</p>
          <p class="playlist__other">播放量: <span>4643.8</span> 万</p>
        </div>

        <div class="playlist__item">
          <img src="../../image/300.jpg" />
          <p class="playlist__title_txt">全是回忆!那些年</p>
          <p class="playlist__author">安多</p>
          <p class="playlist__other">播放量: <span>4643.8</span> 万</p>
        </div>

        <div class="playlist__item">
          <img src="../../image/300.jpg" />
          <p class="playlist__title_txt">全是回忆!那些年</p>
          <p class="playlist__author">安多</p>
          <p class="playlist__other">播放量: <span>4643.8</span> 万</p>
        </div>

        <div class="playlist__item">
          <img src="../../image/300.jpg" />
          <p class="playlist__title_txt">全是回忆!那些年</p>
          <p class="playlist__author">安多</p>
          <p class="playlist__other">播放量: <span>4643.8</span> 万</p>
        </div>

        <div class="playlist__item">
          <img src="../../image/300.jpg" />
          <p class="playlist__title_txt">全是回忆!那些年</p>
          <p class="playlist__author">安多</p>
          <p class="playlist__other">播放量: <span>4643.8</span> 万</p>
        </div>
      </div>
    </div>

    <div class="client_guide">
      <h2>查看更多内容,请下载客户端</h2>
      <p>立即下载</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlaylistBot",
};
</script>


<style>
/* 下半部分大容器 */
.mod_part_detail {
  position: relative;
  margin-bottom: 30px;
}
/* 下班部分头部 */
.mod_part_detail_top {
  display: flex;

  justify-content: space-between;
}
/* 全部歌单h2标签 */
.part_detail__tit {
  font-size: 24px;
  font-weight: 400;
  line-height: 58px;
}
/* 头部右边部分 */
.mod_part_detail_top_right {
  display: flex;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
}
.mod_part_detail_top_right .p1 {
  background-color: #31c27c;
  color: #fff;
  border-color: #31c27c;
  padding: 0 20px;
  border-radius: 2px;
}
.mod_part_detail_top_right .p2 {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-color: #c9c9c9;
  padding: 0 20px;
}

/* 歌单展示列表大容器 */
.mod_playlist {
  background-color: white;
  display: flex;
  font-size: 0;
}
/* 歌单展示列表小容器 */
.playlist__item {
  /* display: inline-block; */
  width: 20%;
  padding-bottom: 44px;
  /* overflow: hidden; */
  font-size: 14px;
  vertical-align: top;
}
/* 歌单列表标题图 */
.playlist__item img {
  widows: 100%;
  height: 164px;
}
/* 列表标题名字 */
.playlist__title_txt {
  margin-top: 10px;
}
/* 列表提供者 */
.playlist__author {
  color: #999;
  height: 22px;
  margin: 5px 0;
}
/* 播放量 */
.playlist__other {
  color: #999;
  height: 22px;
}

/* ---------分割线-------- */
/* 底部内容 */
.client_guide {
  /* margin: 0 auto; */
}

.client_guide h2 {
  font-size: 18px;
  color: #000;
  text-align: center;
  margin: 0 auto;
}

.client_guide p {
  margin: 20px auto 0;
  width: 175px;
  height: 41px;
  line-height: 41px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border-radius: 41px;
  background-color: #31c27c;
}
</style>
