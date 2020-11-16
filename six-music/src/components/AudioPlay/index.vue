<template>
  <div class="player">
    <header>
      <h1 class="playertitle">
        <a href="http://y.qq.com">
          <img class="playerlogo" src="./img/player_logo.png" alt />
        </a>
      </h1>
      <div class="playerLogin">
        <div class="playerPro">
          <span class="playerSlogan">QQ音乐，千万高品质曲库尽享</span>
          <a href="##" class="clientDown">客户端下载</a>
        </div>
        <div class="userInfo">
          <a class="user" href="###">
            <img class="userImg" src="./img/photo.jpg" alt />
            <span class="userName fontSet">9A91</span>
          </a>
          <a href="##">
            <span class="playerSet fontSet">设置</span>
          </a>
          <a href="##">
            <span class="playerSet fontSet">退出</span>
          </a>
        </div>
      </div>
    </header>
    <div class="playMain">
      <div class="playerForm">
        <div class="playInfo">
          <div class="songsListInfo">
            <div class="playerSongs">
              <div class="funBtn">
                <button class="collection">收藏</button>
                <button class="collection">添加到</button>
                <button class="collection">下载</button>
                <button class="collection">删除</button>
                <button class="collection">清空列表</button>
              </div>
            </div>
            <div class="songsListTab">
              <i class="songListLine"></i>
              <ul class="songsListHeader">
                <li class="songListEdit">
                  <input type="checkbox" class="checkAll" />
                </li>
                <li class="songListSongName">歌曲</li>
                <li class="songListAuthor">歌手</li>
                <li class="songListTime">时长</li>
              </ul>
              <i class="songListLine"></i>
              <ul class="songsList">
                <li>
                  <input type="checkbox" class="songListEdit" />
                  <span class="songListItem">1</span>
                  <span class="songListSongName">感谢你曾经来过</span>
                  <span class="songListAuthor">Ayo97</span>
                  <span class="songListTime">04:10</span>
                </li>
                <li>
                  <input type="checkbox" class="songListEdit" />
                  <span class="songListItem">2</span>
                  <span class="songListSongName">感谢你曾经来过</span>
                  <span class="songListAuthor">Ayo97</span>
                  <span class="songListTime">04:10</span>
                </li>
                <li>
                  <input type="checkbox" class="songListEdit" />
                  <span class="songListItem">3</span>
                  <span class="songListSongName">感谢你曾经来过</span>
                  <span class="songListAuthor">Ayo97</span>
                  <span class="songListTime">04:10</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="songInfo">
            <a class="songInfoShow" href="#####">
              <img class="songImg" src="./img/photo.jpg">
            </a>
            <div class="songName">歌曲名：<a href="####">Free</a></div>
            <div class="songSinger">歌手名：<a href="####">RISE刘也</a></div>
            <div class="songAlbum">专辑名：<a href="####">广播剧《FOG电竞》</a></div>
          </div>
        </div>
        <div class="playFoot"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AudioPlay"
};
</script>
<style>
.player {
  height: 100%;
  background-color: rgb(91, 89, 72);
}
header {
  overflow: hidden;
}
.playertitle {
  position: absolute;
  top: 20px;
  left: 20px;
}
.playerlogo {
  opacity: 0.3;
}
.playerlogo:hover {
  opacity: 1;
}

.playerLogin {
  position: absolute;
  top: 20px;
  right: 20px;
}
.playerLogin .playerPro {
  float: left;
  margin-right: 26px;
}
.playerLogin .playerPro .playerSlogan {
  font-size: 14px;
  color: white;
}
.playerLogin .playerPro .clientDown {
  display: inline-block;
  width: 126px;
  height: 28px;
  border-radius: 28px;
  background-color: #31c27c;
  color: white;
  font-size: 15px;
  text-align: center;
  border: none;
  line-height: 28px;
  text-decoration: none;
  margin-left: 6px;
}
.playerLogin .playerPro .clientDown:hover {
  color: white;
}
.playerLogin .userInfo {
  float: right;
}
.playerLogin .userInfo a {
  text-decoration: none;
}

.playerLogin .userInfo .fontSet {
  font-size: 14px;
  line-height: 30px;
  vertical-align: top;
  opacity: 0.3;
  color: white;
  margin-right: 15px;
}
.playerLogin .userInfo .fontSet:hover {
  opacity: 1;
}
.playerLogin .userInfo .userImg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}

.playMain {
  /* height: 850px; */
  height: 100%;
  max-width: 1626px;
  margin: 0 auto;
  color: #999;
}
.playMain .playerForm {
  width: 100%;
  position: relative;
  top: 62px;
}

.playMain .playerSongs .funBtn {
  margin-bottom: 20px;
}
.playMain .playerSongs .funBtn button {
  width: 122px;
  height: 38px;
  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  padding: 0 23px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
  background-color: transparent;
  opacity: 0.8;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}
.playMain .playerSongs .funBtn button:hover {
  border-color: white;
  cursor: pointer;
}
.songListLine {
  display: block;
  width: 100%;
  height: 1px;
  background-color: #fff;
  opacity: 0.02;
}
.playMain .songsListHeader {
  height: 50px;
  line-height: 50px;
}
.playMain .songsListHeader li {
  float: left;
}
.playMain .songListEdit {
  padding-right: 45px;
}
.songListSongName {
  display: block;
  width: 670px;
  margin-right: 15px;
}
.songListAuthor {
  display: block;
  width: 265px;
}
.songListTime {
  display: block;
  width: 50px;
}
.playMain .songsListHeader input[type="checkbox"] {
  width: 14px;
  height: 14px;
  border: 1px solid #fff;
}
.songsList li {
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
}
.songsList input,
.songsList span {
  line-height: 50px;
  height: 50px;
  float: left;
}
.songListItem {
  width: 33px;
  text-align: right;
  margin-right: 12px;
}
.songsListInfo{
  width: 1200px;
}
.songInfo {
  width: 340px;
  /* height: 467px; */
  /* background-color: salmon; */
  display: block;
  display: flex;
  align-items: center;
  /* flex-wrap: wrap; */
  flex-direction: column;
}
.songInfo div{
  color: rgba(225,225,225,.8);
}
.songName{
  margin-top: 15px;
}
.songInfo .songImg{
  width: 186px;
  height: 186px;
}
.playMain .playerForm .playInfo{
  display: flex;
}
</style>
