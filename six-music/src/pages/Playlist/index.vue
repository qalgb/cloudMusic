<template>
  <div class="main">
    <PlaylistTop />
    <PlaylistBot />
  </div>
</template>

<script>
import PlaylistTop from "./PlaylistTop";

import PlaylistBot from "./PlaylistBot";

export default {
  name: "Playlist",
  components: {
    PlaylistTop,
    PlaylistBot,
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
  margin: 0 50px;
  min-width: 900px;
  color: #000;
  font-size: 14px;
  line-height: 1.5;
  /* background-color: #ccc; */
}
</style>
