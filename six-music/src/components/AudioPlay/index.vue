<template>
  <div class="player">
    <img class="bgimg" src="./img/test.png" alt="">
    <header class="playHeader">
      <h1 class="playertitle">
        <a href="http://y.qq.com">
          <img class="playerlogo" src="./img/player_logo.png" alt />
        </a>
      </h1>
      <div class="playerLogin">
        <div class="playerPro">
          <span class="playerSlogan">QQ音乐，千万高品质曲库尽享</span>
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
      <!-- 浏览器原生播放器 -->
      <audio id="audio" src="http://m8.music.126.net/20201116163414/bb434ff8412ca3c31765470a27439d83/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3" ref="audio"></audio>
      <div class="playerForm">
        <div class="playInfo">
          <div class="songsListInfo">
            <div class="playerSongs">
              <div class="funBtn">
                <button class="collection"><i class="iconfont icon-xihuan"></i>收藏</button>
                <button class="collection"><i class="iconfont icon-tianjiadao"></i>添加到</button>
                <button class="collection"><i class="iconfont icon-xiazai"></i>下载</button>
                <button class="collection"><i class="iconfont icon-shanchu_A"></i>删除</button>
                <button class="collection"><i class="iconfont icon-qingkong"></i>清空列表</button>
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
                  <span class="songListSongName">
                    <span>感谢你曾经来过</span>
                    <span class="songListMod">
                      <i class="iconfont icon-bofang1"></i>
                      <i class="iconfont icon--tainjia"></i>
                      <i class="iconfont icon-fenxiang"></i>
                    </span>
                  </span>
                  <span class="songListAuthor">Ayo97</span>
                  <span class="songListTime"><span>04:10</span><i class="iconfont icon-shanchu_A"></i></span>
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
                <li>
                  <input type="checkbox" class="songListEdit" />
                  <span class="songListItem">3</span>
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
                <li>
                  <input type="checkbox" class="songListEdit" />
                  <span class="songListItem">3</span>
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
                <li>
                  <input type="checkbox" class="songListEdit" />
                  <span class="songListItem">3</span>
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
                <li>
                  <input type="checkbox" class="songListEdit" />
                  <span class="songListItem">3</span>
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
                <li>
                  <input type="checkbox" class="songListEdit" />
                  <span class="songListItem">3</span>
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
      </div>
    </div>
    <footer class="playFoot">
      <ul class="playSet">
        <li class="pre">
          <i class="iconfont icon-shangyishou"></i>
        </li>
        <li class="playing" @click="play()">
          <i v-if="!isPlay" class="iconfont icon-bofang"></i>
          <i v-else  class="iconfont icon-zantingtingzhi"></i>
        </li>
        <li class="next">
          <i class="iconfont icon-xiayishou"></i>
        </li>
        <li class="progressBar">
          <!-- 当前歌曲名字和时长 -->
          <div class="progressBarText">
            <div class="nameAndAuthor"><a href="##">今生爱的就是你</a>-<a href="##">祁隆</a></div>
            <div class="songTime"><a href="##">00：00</a>/<a href="##">04：18</a></div>
          </div>
          <!-- 进度条 -->
          <div class="progressBarLine">
            <div class="bootmLine">
              <div class="linePoint"></div>
            </div>
          </div>
        </li>
        <li class="playMod">
          <i class="iconfont icon-liebiaoxunhuan1"></i>
        </li>
        <li>
          <i class="iconfont icon-xihuan"></i>
        </li>
        <li>
          <i class="iconfont icon-xiazai"></i>
        </li>
        <li>
          <i class="iconfont icon-pinglun"></i>
        </li>
        <li>
          <i class="iconfont icon-shengyinyinliangxianxing"></i>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  name: "AudioPlay",
  data () {
    return {
      audio: 'none',
      isPlay: false,
      // 总时长
      durationTime: 0,
      // 当前时间
      currentTime: 0,
    }
  },
  mounted () {
    this.audio = this.$refs.audio
  },
  methods: {
    play () {
      if (!this.isPlay) {
        this.audio.play()
        this.isPlay = true
        console.log('1',this.audio)
      }else{
        this.audio.pause()
        this.isPlay = false
      }
    },
  }
};
</script>
<style>
html,body,.player{
  height: 100%;
  overflow: hidden;
}
.player .bgimg{
  height: 300%;
  width: 300%;
  position: absolute;
  top: 0;
  transform: scale(1.1);
  z-index: -1;
  filter: blur(100px);
}
.playertitle {
  margin: 20px 0 0 20px;
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
  margin-right: 26px;
}
.playerLogin,.userInfo{
  display: flex;
}
.playerLogin .playerPro .playerSlogan {
  font-size: 14px;
  color: white;
  line-height: 30px;
}
.playerLogin .playerPro .clientDown:hover {
  color: white;
} 

.playerLogin .userInfo .fontSet {
  font-size: 14px;
  line-height: 30px;
  vertical-align: top;
  opacity: 0.3;
  color: white;
  margin-right: 15px;
}
.playerLogin .userInfo .user{
  display: flex;
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
  height: 100%;
  max-width: 1626px;
  margin: 0 auto;
  color: #E1E1E1CC;
}
.playMain .playerForm {
  width: 100%;
  margin-top: 62px;
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
  display: flex;

}

.playMain .songListEdit {
  padding-right: 45px;
}
.songListSongName {
  width: 670px;
  margin-right: 15px;
  display: flex; 
  justify-content: space-between;
  
}
.songListMod{
  width: 138px;
  display: flex;
  justify-content: space-between;
}
.songListMod i{
  font-size: 36px;
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
.songsList{
  overflow-y:scroll;
  height: 550px;
}
.songsList li {
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
  display: flex;
}
.songsList input,
.songsList span {
  line-height: 50px;
  height: 50px;
}
.songListItem {
  width: 33px;
  text-align: right;
  margin-right: 12px;
}
.songsListInfo{
  width: 1200px;
  margin-right: 108px;
}
.songInfo {
  width: 340px;
  display: block;
  display: flex;
  align-items: center;
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
.playFoot{
  position:fixed;
  right: 0;
  left: 0;
  bottom: 0;
  max-width: 1626px;
  margin: 0 auto;
  margin: auto;
}
.playSet{
  display: flex;
  color: #fff;
}
.playSet li{
  width: 50px;
}
.playSet .progressBar{
  width: 970px;
  height: 50px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.playSet .progressBar a,.playSet .progressBar{
  margin: 0 35px;
  color: #999 !important;
}
.playSet .progressBar a:hover{
  color: #fff !important;
}
.progressBarText{
  width: 100%;
  height: 20px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
}
.progressBarLine{
  width: 100%;
  height: 2px;
  background: rgba(0, 0, 0, .4);
}
.playSet i{
  font-size: 30px;
}
.playSet .playing i{
  font-size: 40px;
  line-height: 40px;
  position: relative;
}
.bootmLine{
  position: relative;
  width: 0%;
  border:1px solid rgba(225,225,225,.8);
}
.linePoint{
  position: absolute;
  top: -3px;
  right: -6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}
</style>
