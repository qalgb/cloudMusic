<template>
  <div class="player">
    <img class="bgimg" :src="picUrl" alt />
    <header class="playHeader">
      <h1 class="playertitle">
        <router-link to="/">
          <img class="playerlogo" src="./img/player_logo.png" alt />
        </router-link>
      </h1>
      <div class="playerLogin">
        <div class="playerPro">
          <span class="playerSlogan">QQ音乐，千万高品质曲库尽享</span>
        </div>
        <div
          class="userInfo"
          @mouseenter="isHideOut(true)"
          @mouseleave="isHideOut(false)"
        >
          <a href="###" v-show="!isShowLogin">
            <span class="fontSet">
              <GoLogin class="login" :isButton="this.isButton" />
            </span>
          </a>
          <a v-show="isShowLogin" class="user" href="###">
            <img class="userImg" :src="this.userDetInfo.avatarUrl" alt />
            <span class="userName fontSet">{{
              this.userDetInfo.nickname
            }}</span>
          </a>
          <a href="##">
            <span class="fontSet playSet">设置</span>
          </a>
          <a href="##">
            <span
              class="fontSet loginOut"
              :style="{ visibility: isShowOut ? 'visible' : 'hidden' }"
              @click="backLogin()"
              >退出</span
            >
          </a>
        </div>
      </div>
    </header>
    <div class="playMain">
      <!-- 浏览器原生播放器 -->
      <audio id="audio" :src="songUrl" ref="audio"></audio>
      <div class="playerForm">
        <div class="playInfo">
          <div class="songsListInfo">
            <div class="playerSongs">
              <div class="funBtn">
                <button class="collection">
                  <i class="iconfont icon-xihuan"></i>收藏
                </button>
                <button class="collection">
                  <i class="iconfont icon-tianjiadao"></i>添加到
                </button>
                <button class="collection">
                  <i class="iconfont icon-xiazai"></i>下载
                </button>
                <button class="collection">
                  <i class="iconfont icon-shanchu_A"></i>删除
                </button>
                <button class="collection">
                  <i class="iconfont icon-qingkong"></i>清空列表
                </button>
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
                <li v-for="(item,index) in songListAudio" :key="item.id">
                  <input type="checkbox" class="songListEdit" />
                  <span class="songListItem">{{index+1}}</span>

                  <span class="songListSongName">
                    <span>{{item.name}}</span>
                    <span class="songListMod">
                      <i @click="playMusic(item.id,index)">
                          <i v-if="!isPlayItem" class="iconfont icon-bofang1" ></i>
                          <i v-else><a-icon type="pause-circle" /></i>
                      </i>
                      <i class="iconfont icon--tainjia"></i>
                      <i class="iconfont icon-fenxiang"></i>
                    </span>
                  </span>
                  <span class="songListAuthor">{{getSongAr(index)}}</span>
                  <span class="songListTime">
                    <span>{{getSongTime(item.dt)}}</span>
                    <i class="iconfont icon-shanchu_A"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="songInfo">
            <a class="songInfoShow" href="#####">
              <img class="songImg" src="./img/photo.jpg" />
            </a>
            <div class="songName">
              歌曲名：
              <a href="####">{{(!songListAudio ||songListAudio.length > 0) && songListAudio[0].name}}</a>
            </div>
            <div class="songSinger">
              歌手名：
              <a href="####">{{getSongAr(0)}}</a>
            </div>
            <div class="songAlbum">
              专辑名：
              <a href="####">{{(!songListAudio ||songListAudio.length > 0) && songListAudio[0].al.name}}</a>
            </div>
            <ul ref="lyricUL" class="lyricUL">
              <li v-for="(item, i) in lyricsObjArr" 
                :style="{color: lyricIndex === i ? 'skyblue' : '#ded9d9'}" 
                :key="item.uid" :data-index='i' ref="lyric">
                {{item.lyric}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer class="playFoot">
      <ul class="playSet">
        <li class="pre">
          <i class="iconfont icon-shangyishou"></i>
        </li>
        <li class="playing" @click="handlePlay()">
          <i v-if="!isPlay" class="iconfont icon-bofang"></i>
          <i v-else class="iconfont icon-zantingtingzhi"></i>
        </li>
        <li class="next">
          <i class="iconfont icon-xiayishou"></i>
        </li>
        <li class="progressBar" @mouseup="mouseup" @mousemove="mousemove">
          <!-- 当前歌曲名字和时长 -->
          <div class="progressBarText">
            <div class="nameAndAuthor">
              <a href="##">{{(!songListAudio || songListAudio.length > 0) && songName}}</a>-
              <a href="##">{{songAr}}</a>
            </div>
            <div class="songTime">
              <a href="##">00：00</a>/
              <a href="##">04：18</a>
            </div>
          </div>
          <!-- 进度条 -->
          <div class="progressBarLine">
            <div class="bootmLine" :style="{ width: duration }">
              <div class="linePoint" @mousedown="mousedown"></div>
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
import GoLogin from '../GoLogin'
import { reqSongUrl, reqLyric } from '@/api'
import { mapState } from 'vuex'
import moment from 'moment'
import { reqSongInfo } from '@/api'
export default {
  name: 'AudioPlay',
  components: {
    GoLogin,
  },
  data() {
    return {
      // audio: 'none',
      isPlay: false,
      isPlayItem: false,
      // 总时长
      durationTime: 0,
      // 当前时间
      currentTime: 0,
      // 进度条宽度百分比
      duration: 0,
      // 要移动的距离
      moveDistance: 0,
      // 鼠标按下时的坐标
      startX: 0,
      // 鼠标移动的距离
      moveX: 0,
      // 是否允许拖动
      isClickSlider: false,
      // songUrl: '',
      songId: 0,
      // 是否显示退出链接
      isShowOut: false,
      isButton: 3,
      isShowLogin: false,
      songListAudio: [],
      songName: '',
      songAr: '',
      lyric: [],// 歌词
      lyricsObjArr: [],
      picUrl: '' //歌曲图片
    }
  },
  computed: {
    ...mapState({
      // 获取用户id
      userInfo: (state) => state.play.userInfo,
      // 获取用户详细信息
      userDetInfo: (state) => state.play.userDetInfo,
      // 获取歌曲url
      songUrl: (state) => state.play.songUrl,
    }),
    //统计歌曲歌手数量
    getSongAr(index){
      return (index) => {
          if (this.songListAudio.length > 0) {
            return this.songListAudio[index].ar.reduce((pre,item,index) => {
              return index > 0 ? pre + ' / ' + item.name : pre + item.name
          }, '')
        }
      }
    }, 
    //获取歌曲时长
    getSongTime:{
      get: function (time) {
        return (time) =>{
          return moment(time).format('mm:ss');
        }
      },
      set: function (newVal) {
        console.log(newVal);
      }
    },
  },
  watch: {
    // lyricsObjArr(newVal){
    //   console.log(newVal);
    //   this.lyricsObjArr = newVal
    // }
  },
  async mounted() {
    // 获取query传过来的ID 默认图片 和歌曲列表数据
    const { id, picUrl, songListAudio } = this.$route.query
    this.songId = id
    this.picUrl = picUrl
    this.songListAudio = songListAudio
    // console.log(this.songListAudio);
    // 判断当前歌曲列表数据是否为空
    if (!this.songListAudio) {
      // 如果为空则值穿一个歌曲数据
      const result = await reqSongInfo(this.songId)
      if (result.code === 200) {
        this.songListAudio = result.songs
      }
    }else {
      // 如果不是全部载入
      this.songListAudio = JSON.parse(songListAudio)
    }
    // 初始化歌曲名
    this.songName = this.songListAudio[0].name
    // 初始化歌手名
    this.songAr = this.songListAudio[0].ar.reduce((pre,item,index) => {
        return index > 0 ? pre + ' / ' + item.name : pre + item.name
    },'')
    if (this.$route.fullPath.indexOf('audioplay') !== -1) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    }
    // 判断是否登录
    this.isLogin()
    // 获取用户信息
    await this.$store.dispatch('getUserInfo', localStorage.cookie)
    // 通过用户id获取用户详细信息
    await this.$store.dispatch('getUserDetInfo', this.userInfo.userId)
    // 执行监听事件
    this.addEventListenerBar()
  },
  methods: {
    addEventListenerBar() {
      // 监听进度条
      // currentTime属性变化时触发，每秒可能触发4到60次 
      let audio = this.$refs.audio
      audio.addEventListener("timeupdate", () => { 
        console.log(audio.currentTime) 
        this.currentTime = audio.currentTime;
        this.durationTime = audio.duration;
        this.duration = (this.currentTime / this.durationTime) * 100 + "%";
        // 歌词
         for (let i = 0; i < this.lyricsObjArr.length; i++) {
          if (this.currentTime > (parseInt(this.lyricsObjArr[i].time))) {
            const index = this.$refs.lyric[i].dataset.index
            if (i === parseInt(index)) {
              this.lyricIndex = i
              this.$refs.lyricUL.style.transform = `translateY(${170 - (30 * (i + 1))}px)`
            }
          }
        }
      });
    },
    // 播放与暂停
    async handlePlay() {
      if (!this.isPlay) {
        await this.getSongUrl(this.songId)
        this.$refs.audio.play()
        this.isPlay = true
        await this.getLyric(this.songId)
      } else {
        this.$refs.audio.pause()
        this.isPlay = false
      }
    },
    // 获取歌曲url
    async getSongUrl(id){
        await this.$store.dispatch('getSongUrl',id)
    },
    // 获取歌词
    async getLyric(id){
      const result = await reqLyric(id)
      if (result.code === 200) {
        this.lyric = result.lrc.lyric
      }
      console.log(this.lyric);
      // 用正则匹配换行字符对字符串进行分割
      const regNewLine = /\n/
      const lineArr = this.lyric.split(regNewLine)
      const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/
      // console.log(lineArr);
      // 对lineArr数组进行遍历分隔
      lineArr.forEach(item => {
        if (item === '') return
          const obj = {}
          const time = item.match(regTime)

          obj.lyric = item.split(']')[1].trim() === '' ? '' : item.split(']')[1].trim()
          obj.time = time ? this.formatLyricTime(time[0].slice(1, time[0].length - 1)) : 0
          obj.uid = Math.random().toString().slice(-6)
          if (obj.lyric === '') {
            console.log('这一行没有歌词')
          } else {
            this.lyricsObjArr.push(obj)
          }
      })
      console.log(this.lyricsObjArr);
    },
    // 时间转换
    formatLyricTime (time) { // 格式化歌词的时间 转换成 sss:ms
     const regMin = /.*:/
     const regSec = /:.*\./
     const regMs = /\./

     const min = parseInt(time.match(regMin)[0].slice(0, 2))
     let sec = parseInt(time.match(regSec)[0].slice(1, 3))
     const ms = time.slice(time.match(regMs).index + 1, time.match(regMs).index + 3)
     if (min !== 0) {
       sec += min * 60
     }
     return Number(sec + '.' + ms)
    },
    // 进度条移动
    mousedown(e) {
      this.isClickSlider = true;
      if (this.moveDistance) {
        this.startX = this.nextStart;
      } else {
        this.startX = e.clientX;
      }
    },
    mousemove(e) {
      this.moveX = e.clientX;
      if (this.startX) {
        this.moveDistance = this.moveX - this.startX;
      }
      if (this.moveDistance < 0) {
        this.moveDistance = 0;
      }
      if (this.moveDistance > 970) {
        this.moveDistance = 970;
        return;
      }
      // 移动的百分比
      if (this.isClickSlider) {
        console.log(this.moveDistance)
        // this.duration =
        // this.audio.currentTime =((this.moveDistance / 970) * 100 * this.duration) + "%";
        const movep = (this.moveDistance/970)
        this.currentTime = movep*(this.$refs.audio.duration)
        this.duration = (this.currentTime / this.durationTime) * 100 + "%";
        this.$refs.audio.currentTime =this.currentTime 
      }
      
    },
    mouseup(e) {
      this.isClickSlider = false;
      // 重置
      this.nextStart = this.startX;
      this.startX = 0;
      console.log("22", this.moveDistance);
    },

    // 判断是否登陆
    isLogin() {
      if (localStorage.cookie) {
        this.isShowLogin = true
      } else {
        this.isShowLogin = false
        // this.isShowOut = false
      }
    },
    //退出登录
    backLogin() {
      localStorage.removeItem('cookie')
      this.$message.success('已退出登录!')
      setTimeout(() => {
        location.reload()
      }, 500)
    },
    // 是否显示退出
    isHideOut(flag) {
      if (this.isShowLogin) {
        if (flag) {
          this.isShowOut = true
        } else {
          this.isShowOut = false
        }
      }
    },

    // 秒值转字符串
    timeToString(param) {
      param = parseInt(param)
      let hh = '',
        mm = '',
        ss = ''
      if (param >= 0 && param < 60) {
        param < 10 ? (ss = '0' + param) : (ss = param)
        return '00:' + ss
      } else if (param >= 60 && param < 3600) {
        mm = parseInt(param / 60)
        mm < 10 ? (mm = '0' + mm) : mm
        param - parseInt(mm * 60) < 10
          ? (ss = '0' + String(param - parseInt(mm * 60)))
          : (ss = param - parseInt(mm * 60))
        return mm + ':' + ss
      }
    },
    // 点击播放与暂停
    async playMusic(id,index) {
      if (!this.isPlayItem) {
        await this.getSongUrl(id)
        this.$refs.audio.play()
        this.isPlay = true
        this.isPlayItem = true
        this.picUrl = this.songListAudio[index].al.picUrl
        this.songName = this.songListAudio[index].name
        this.songAr = this.songListAudio[index].ar.reduce((pre,item,index) => {
        return index > 0 ? pre + ' / ' + item.name : pre + item.name
        },'')
        await this.getLyric(id)
      }else {
        this.$refs.audio.pause()
        this.isPlay = false
        this.isPlayItem = false
      }
    }
  },
}
</script>
<style scoped>
html,
body {
  height: 100%;
  /* overflow-y: hidden; */
}

.player .bgimg {
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
.playerLogin,
.userInfo {
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
  color: white !important;
  padding-right: 15px;
}
.playerLogin .userInfo .login {
  color: white !important;
}
.playerLogin .userInfo .user {
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
  color: #e1e1e1cc;
  display: flex;
  justify-content: center;
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
.playMain .playerSongs .funBtn button i{
  margin-right: 5px;
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
.songsList li:hover .songListSongName .songListMod{
  visibility:visible;
}
.songListMod {
  width: 138px;
  display: flex;
  justify-content: space-between;
  visibility: hidden;
}
.songListMod i {
  font-size: 36px;
  color: #fff;
}
.songListAuthor {
  display: block;
  width: 265px;
}
.songListTime {
  display: block;
  width: 50px;
}
.playMain .songsListHeader input[type='checkbox'] {
  width: 14px;
  height: 14px;
  border: 1px solid #fff;
}
.songsListTab{
  height: 80%;
}
.songsList {
  overflow-y: scroll;
  height: 67%;
}
.lyricUL{
  height: 350px;
  overflow: hidden;
  text-align: center;
}
.lyricUL li{
  line-height: 25px;
}
.songsList::-webkit-scrollbar{
  display: none;
}
.songsList li {
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
  display: flex;
}
input{
  color: -internal-light-dark(black, white);
  opacity: 0.3;
  width: 15px;
  height: 15px;
}
.songsList input,
.songsList span {
  line-height: 55px;
  height: 50px;
}
.songListItem {
  width: 33px;
  text-align: right;
  margin-right: 12px;
}
.songsListInfo {
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
.songInfo div {
  color: rgba(225, 225, 225, 0.8);
}
.songName {
  margin-top: 15px;
}
.songInfo a{
  color: rgba(225, 225, 225, 0.8) !important;
}
.songInfo .songImg {
  width: 186px;
  height: 186px;
}
.playMain .playerForm .playInfo {
  display: flex;
}
.playFoot {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  max-width: 1626px;
  margin: 0 auto;
  margin: auto;
}
.playSet {
  display: flex;
  color: #fff;
}
.playSet li {
  width: 50px;
}
.playSet .progressBar {
  width: 970px;
  height: 50px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.playSet .progressBar a,
.playSet .progressBar {
  margin: 0 35px;
  color: #999 !important;
}
.playSet .progressBar a:hover {
  color: #fff !important;
}
.progressBarText {
  width: 100%;
  height: 20px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
}
.progressBarLine {
  width: 100%;
  height: 2px;
  background: rgba(0, 0, 0, 0.4);
}
.playSet i {
  font-size: 30px;
}
.playSet .playing i {
  font-size: 40px;
  line-height: 40px;
  position: relative;
}
.bootmLine {
  position: relative;
  width: 0%;
  border: 1px solid rgba(225, 225, 225, 0.8);
}
.linePoint {
  position: absolute;
  top: -3px;
  right: -6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}
</style>
