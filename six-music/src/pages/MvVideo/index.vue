<template>
  <div class="mod_mv">
    <!-- 视频区 -->
    <div class="section_inner">
      <div class="mv_player">
        <div class="mvvideo">
          <div class="video_player">
            <!-- 视频状态栏 -->
            <div class="video_player_tool">
              <!-- 进度条 -->
              <div class="video_player_tool_state">
                <div class="video_player_tool_state_bg"></div>
                <div
                  class="video_player_tool_state_load "
                  style="width: 33.7781%;"
                ></div>
                <div
                  class="video_player_tool_state_progress"
                  style="width: 33.7781%;"
                >
                  <div class="video_player_tool_state_progress_bg"></div>
                  <a
                    href="javascript:;"
                    class="video_player_tool_state_btn "
                    style="z-index:4;"
                  >
                  </a>
                </div>
              </div>
              <div class="btn">
                <!-- 操作 播放 play 暂停 pause -->
                <div class="left_btn">
                  <a href="javascript:;" title="暂停" class="video_player_icon"
                    ><i class="iconfont icon-bofang"></i>

                    <!-- 播放 用video_player_play这个id 暂停 用video_player_pause 这个id -->
                  </a>

                  <!-- 时长 -->
                  <div class="video_player_time">
                    <span class="js_qv_time_current">00:00</span>/
                    <span class="js_qv_time_total">00:00</span>
                  </div>
                </div>

                <!-- 操作 音量 选中 加current -->
                <div class="right_btn">
                  <a href="javascript:;" title="音量" class="video_player_btn">
                    <i class="iconfont icon-shengyin"></i>
                  </a>

                  <!-- 操作 播放模式 点击切换 -->
                  <a
                    href="javascript:;"
                    title="循环播放"
                    class="video_player_btn"
                  >
                    <i class="iconfont icon-xunhuan"></i>
                  </a>
                  <!-- 操作 全屏 -->
                  <a href="javascript:;" title="全屏" class="video_player_btn">
                    <i class="iconfont icon-quanping"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mv_info">
        <h1 class="mv_title">
          <span class="mv_name" title="Honey (舞蹈版)">Honey (舞蹈版)</span>

          <span class="mv_line">-</span>

          <span class="mv_singer ">张艺兴</span>
        </h1>
        <span class="mv_listen">播放量：68.2万</span>
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
export default {
  name:"MvVideo",
}
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
/* 功能按钮 */
.btn {
  display: flex;
  justify-content: space-between;
}
/* 左功能按钮 */
.video_player {
  height: 100%;
  background-color: #000;
  color: #fff;
}
.video_player_icon:hover i{
  color: rgb(12, 241, 115);
}
/* 时长 */
.video_player_time {
  margin-top: 3px;
  margin-left: 20px;
  line-height: 30px;
}
.right_btn{
  margin-right: 40px;
  width: 130px;
  display: flex;
  justify-content: space-between;
}
/* 右边功能按钮 */
/* 音量 */
.video_player_btn:hover i {
  color: rgb(12, 241, 115);
}
.video_player_btn {
  fill: currentColor;
}
.video_player i {
  color: #fff;
  font-size: 20px;
}
/* 暂停 */
.video_player_icon {
  float: left;
  margin: 12px 0 0 25px;
  width: 30px;
  height: 30px;
  fill: currentColor;
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