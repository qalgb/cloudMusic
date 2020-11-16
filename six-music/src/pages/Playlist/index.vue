<template>
  <div class="main">
    <PlaylistTop />
    <PlaylistBot />
  </div>
</template>

<script>
import PlaylistTop from "./PlaylistTop";
import PlaylistBot from "./PlaylistBot";
import { mapState } from 'vuex'

export default {
  name: "Playlist",
  components: {
    PlaylistTop,
    PlaylistBot,
  },
  // 界面渲染的生命周期回调
  mounted() {
   
    // 获取歌单分类信息
    // const date = reqClassIfication();
    // console.log(1, date);
  },

  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
/* Playlist总容器 */
.main {
  margin: 0 auto;
  min-width: 900px;
  max-width: 1200px;
  color: #000;
  font-size: 14px;
  line-height: 1.5;
  /* background-color: #ccc; */
}
</style>
