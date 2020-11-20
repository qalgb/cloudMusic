<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header class="header">
        <a href="javascript:;" class="headLogo">
          <img
            src="https://y.gtimg.cn/mediastyle/yqq/img/player_logo.png"
            alt="QQ音乐"
          />
        </a>
        <div class="headInfo">
          <div class="tag">
            QQ音乐，千万高品质曲库尽享
            <a href="javascript:;">
              <a-icon type="windows" />
              客户端下载
            </a>
          </div>
          <div class="loginSet">
            <a href="javascript:;">登录</a>
            <a href="javascript:;">设置</a>
          </div>
        </div>
      </a-layout-header>
      <a-layout class="mid">
        <a-layout-content class="content">
          <div class="contentNav">
            <a href="javascript:;" class="like"
              ><a-icon style="marginright: 8px" type="heart" />收藏</a
            >
            <a href="javascript:;" class="add"
              ><a-icon style="marginright: 8px" type="plus-square" />添加到</a
            >
            <a href="javascript:;" class="down"
              ><a-icon
                style="marginright: 8px"
                type="vertical-align-bottom"
              />下载</a
            >
            <a href="javascript:;" class="delete"
              ><a-icon style="marginright: 8px" type="delete" />删除</a
            >
            <a href="javascript:;" class="allDel"
              ><a-icon style="marginright: 8px" type="scissor" />清空列表</a
            >
          </div>
          <div class="scollArea"></div>
        </a-layout-content>
        <a-layout-sider class="sider">
          <a href="javascript:;" class="headPic">
            <img
              src="https://y.gtimg.cn/music/photo_new/T002R300x300M0000025kmgn1pvWov.jpg?max_age=2592000"
            />
          </a>
          <img
            src="https://y.gtimg.cn/mediastyle/yqq/img/album_cover_player.png?max_age=2592000&v=23ea536d34facedf9ae4169d95b1056e"
            alt=""
            class="flag"
          />
          <div class="musicName songInfo">歌曲名：喜羊羊与灰太狼</div>
          <div class="singer songInfo">歌手名：龙国斌</div>
          <div class="albumName songInfo">专辑名：狼的诱惑</div>
          <div class="lyrics_box">
            <ul class="lyrics">
              <li class="lyrics_row">别看我是一只羊</li>
              <li class="lyrics_row">别看我是一只羊</li>
              <li class="lyrics_row">别看我是一只羊</li>
              <li class="lyrics_row">别看我是一只羊</li>
              <li class="lyrics_row">别看我是一只羊</li>
              <li class="lyrics_row">别看我是一只羊</li>
              <li class="lyrics_row">别看我是一只羊</li>
            </ul>
          </div>
          <div class="fanyi">
            <a href="javascript:;" title="翻译"
              ><a-icon type="swap" class="text"
            /></a>
          </div>
        </a-layout-sider>
      </a-layout>
      <div class="playInfo">
        <a href="javascript:;"><a-icon type="step-backward" class="play1" /></a>
        <a href="javascript:;"><a-icon type="pause" class="play2" /></a>
        <a href="javascript:;"><a-icon type="step-forward" class="play3" /></a>
        <div class="progressBar">
          <div class="songProgressInfo">
            <div>喜羊羊与灰太狼（龙国斌）</div>
            <div>0:00/3:33</div>
          </div>
          <a-row>
            <a-col :span="12">
              <a-slider v-model="inputValue" :min="0" :max="1" :step="0.01" />
            </a-col>
          </a-row>
        </div>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </div>
    </a-layout>
    <div class="bgImg"></div>
    <div class="bgCol"></div>
  </div>
</template>

<script>
export default {
  name: "MusicPlay",
  data() {
    return {
      inputValue: 0,
      inputValue1: 1,
    };
  },
};
</script>

<style scoped>
.code-box-demo .ant-slider {
  
}
#components-layout-demo-basic {
  text-align: center;
  height: 100vh;
  min-width: 1100px;
  background-color: rgb(32, 64, 64);
}

#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  z-index: 3;
}
#components-layout-demo-basic .ant-layout-content {
  color: #fff;
  z-index: 3;
}
.bgCol {
  background-color: rgba(0, 0, 0, 0.35);
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.bgImg {
  background-image: url(https://y.gtimg.cn/music/photo_new/T002R300x300M0000025kmgn1pvWov.jpg?max_age=2592000);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  filter: blur(65px);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(225, 225, 225, 0.8);
  z-index: 3;
  background: none;
}
.headLogo {
  width: 78px;
  height: 21px;
  opacity: 0.3;
}

.headLogo:hover {
  opacity: 1;
}
.headInfo {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tag {
  margin-right: 20px;
  text-align: center;
}
.tag > a {
  display: inline-block;
  margin-left: 6px;
  padding: 0 17px;
  height: 28px;
  line-height: 28px;
  border-radius: 28px;
  font-size: 15px;
  color: #fff !important;
  text-align: center;
  background-color: #31c27c;
}

.loginSet > a {
  color: #fff !important;
  opacity: 0.3;
  line-height: 30px;
  margin: 0 8px;
}
.loginSet > a:hover {
  opacity: 1;
  color: #fff !important;
}
.mid {
  margin: 50px 6% 0;
}
.contentNav {
  margin-bottom: 20px;
  font-size: 0;
  float: left;
}

.contentNav > a {
  opacity: 0.8;
  border-color: rgba(255, 255, 255, 0.2);
  background-color: transparent;
  color: #fff !important;
  min-width: 122px;
  text-align: center;
  border: 1px solid #c9c9c9;
  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  padding: 0 23px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}

.contentNav > a:hover {
  border: 1px solid #fff;
  opacity: 1;
}

.scollArea {
  width: 777px;
  height: 632px;
  margin-right: 0;
  background-color: #31c27c;
}

.sider {
  background: none;
}

.sider .headPic {
  position: relative;
  display: block;
  width: 186px;
  height: 186px;
  margin: auto;
  margin-bottom: 15px;
}

.sider .headPic > img {
  vertical-align: middle;
  width: 186px;
  height: 186px;
}

.flag {
  position: absolute;
  content: "";
  position: absolute;
  left: 16px;
  top: 0;
  width: 201px;
  height: 180px;
}

.songInfo {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 28px;
  cursor: pointer;
  color: rgba(225, 225, 225, 0.8);
}

.songInfo:hover {
  color: #fff !important;
}

.lyrics_box {
  margin-top: 40px;
}

.lyrics {
  top: 50%;
  height: 272px;
}

.lyrics_row {
  line-height: 34px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 34px;
  cursor: pointer;
  color: rgba(225, 225, 225, 0.8);
}

.fanyi {
  margin: 25px 0;
}

.fanyi .text {
  font-size: 25px;
}

.playInfo {
  position: relative;
  bottom: 0;
  left: 0;
  height: 70px;
  color: #fff;
  z-index: 3;
  margin: 50px 6% 0;
}

.play1,
.play2,
.play3 {
  font-size: 34px;
  position: absolute;
  color: rgba(225, 225, 225, 0.8);
  top: 4px;
  width: 19px;
  height: 20px;
  background-position: 0 -30px;
}

.play1 {
  left: 0;
}
.play2 {
  left: 65px;
}
.play3 {
  left: 132px;
}

.progressBar {
  position: relative;
  margin: 0 448px 0 208px;
}

.songProgressInfo {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.5;
}
</style>