<template>
  <div class="mod_mv">
    <!-- 视频区 -->

    <div class="section_inner">
      <div class="mv_player">
        <div class="mvvideo">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
        </div>
      </div>
      <div class="mv_info" v-for="item in mvData" :key="item.id">
        <h1 class="mv_title">
          <span class="mv_name" title="Honey (舞蹈版)">{{item.id}}</span>

          <span class="mv_line">-</span>

          <span class="mv_singer ">{{item.artistName}}</span>
        </h1>
        <span class="mv_listen">播放量：{{item.playCount}}</span>
        <div class="mv_toolbar">
          <a href="javascript:;" class="mv_toolbar_item ">举报</a>
          <i class="mv_toolbar_line"></i>
          <a class="mv_toolbar_item" href="javascript:;">评论</a>
          <i class="mv_toolbar_line"></i>
          <a class="mv_toolbar_item" href="javascript:;">分享</a>
          <i class="mv_toolbar_line"></i>
          <a class="mv_toolbar_item" href="javascript:;">收藏</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "MvVideo",
  data() {
    return {
      mvData: "", // mvid
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: "", // 路径
            type: "video/mp4", // 类型
          },
        ],
        poster:
          "http://p1.music.126.net/ijUg7s_2S8GMbTNsYiepJA==/18676304511774727.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true, //全屏按钮
        },
      },
    };
  },
  // 计算属性
  computed: {
    // 通过vuex的辅助函数获取数据
    ...mapState({
      // 获取全部的mv
      mvUrl: (state) => state.mvvideo.mvUrl,
    }),
  },

  mounted() {
    // 更新mvId
    this.mvData = this.$route.query;
    const { id , cover} = this.mvData.data
    // 更新视频封面图片
    this.playerOptions.poster = cover
    
    this.getVideoList(id) 
    this.playerOptions.sources.src = this.mvUrl.url
    console.log(this.mvUrl)
  },
  methods: {
    getVideoList(id) {
      this.$store.dispatch("getMvVideo", {
        id
      });
    }

  },

};
</script>
<style scoped>
.mod_mv {
  padding-top: 80px;
  width: 100%;
  background-color: rgb(49, 194, 124);
  z-index: 3;
}
.section_inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.mv_player {
  background-color: #fff;
  font-size: 14px;
  line-height: 1.5;
}
.mvvideo {
  width: 1200px;
  height: 674px;
}
/* 视频数据 */
.mv_info {
  height: 80px;
  position: relative;
}
.mv_title {
  margin-top: 20px;
  font-weight: 400;
  float: left;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 650px;
}
.mv_name,
/* 歌手名 */
.mv_singer,
.mv_title {
  color: #fff;
  font-size: 22px;
}
/* mv名 */
.mv_name {
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 350px;
}
.mv_line {
  margin: 0 8px;
}
/* 播放量 */
.mv_listen {
  display: inline-block;
  margin-top: 30px;
  font-size: 14px;
  color: rgb(94, 91, 91);
}

/* 状态 */
.video_player_tool {
  position: absolute;
  bottom: 80px;
  left: 0;
  width: 100%;
  height: 52px;
  z-index: 3;
}
/* 视频播放进度条 */
.video_player_tool_state_bg {
  display: block;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
}
.video_player_tool_state {
  position: relative;
  width: 100%;
  height: 3px;
  cursor: pointer;
}
/* 举报，评论，分享，收藏 */
.mv_toolbar {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0;
  line-height: 78px;
  height: 78px;
  white-space: nowrap;
}
.mv_toolbar_item {
  display: inline-block;
  font-size: 20px;
  vertical-align: middle;
}
.mv_toolbar_item:hover {
  color: #fff !important;
}
.mv_toolbar_line {
  display: inline-block;
  width: 20px;
  height: 11px;
  margin-right: 20px;
  border-right: 1px dotted #5b5b5c;
  vertical-align: middle;
}

/* 时长 音量 全屏 循环*/
.video_player_btn,
.video_player_time {
  position: relative;
  float: left;
  top: 9px;
  font-size: 14px;
}
/* 音量 全屏 循环 */
.video_player_btn:after {
  content: "";
  position: absolute;
  left: -10px;
  top: -5px;
  bottom: -10px;
  right: -10px;
}
</style>
